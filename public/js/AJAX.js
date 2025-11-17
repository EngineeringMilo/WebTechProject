// Get current state
const navPagination = document.querySelector('.nav-pagination');
let currentPage = parseInt(navPagination.dataset.currentPage) || 1;
let currentCategory = '';

initPaginationListeners();

// AJAX filtering functionality
document.getElementById('categorySelect').addEventListener('change', function() {
    currentCategory = this.value;
    currentPage = 1;
    loadEvents();
});

function initPaginationListeners() {
    document.querySelectorAll('.nav-pagination a.pagination').forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        currentPage = parseInt(this.dataset.page);
        loadEvents();
        });
    });
}

async function loadEvents() {
    try {
        const response = await fetch(`/api/events/filter?category=${currentCategory}&page=${currentPage}`);
        const data = await response.json();
        
        // Update de event lijst
        const eventList = document.getElementById('eventList');
        
        if (data.events.length === 0) {
        eventList.innerHTML = '<p>No events found for this category.</p>';
        } else {
        eventList.innerHTML = data.events.map(event => `
            <li>
            <a href="/event/${event._id}">
                <span class="event-list__title">
                ${event.title.length > 20 ? event.title.substring(0, 20) + '...' : event.title}
                </span>
                <span class="event-list__description">
                ${event.description.length > 80 ? event.description.substring(0, 80) + '...' : event.description}
                </span>
                <span class="event-list__description">${event.targetAudience}</span>
                <div class="share-section">
                <span class="event-list__date">Date:</span>
                <span class="event-list__date">${new Date(event.date).toDateString()}</span>
                </div>
            </a>
            </li>
        `).join('');
        }

        updatePagination(data);

        if (currentCategory === '') {
            updateMapMarkers(events); 
        } else {
            loadAllEventsForMap();
        }
        
    } catch (error) {
        console.error('Error loading events:', error);
}
}

function updatePagination(data) {
    const navPagination = document.querySelector('.nav-pagination');

    let paginationHTML = '';

    if (data.hasNextPage) {
        paginationHTML += `<a class="pagination" href="#" data-page="${currentPage - 1}">&lt; View earlier events</a>`;
    } else {
        paginationHTML += '<span class="pagination-placeholder"></span>';
    }
    if (data.hasPrevPage) {
        paginationHTML += `<a class="pagination" href="#" data-page="${currentPage + 1}">View later events &gt;</a>`;
    }

    navPagination.innerHTML = paginationHTML;

    initPaginationListeners();
    }

async function loadAllEventsForMap() {
    try {
        const response = await fetch(`/api/events/all?category=${currentCategory}`);
        const data = await response.json();
        updateMapMarkers(data.events);
    } catch (error) {
        console.error('Error loading map events:', error);
    }
}

function updateMapMarkers(filteredEvents) {
    markers.clearLayers();

    for (let i = 0; i < filteredEvents.length; i++) {
        var marker = L.marker(filteredEvents[i].locationCoordinates);
        marker.bindPopup(`<a href="/event/${filteredEvents[i]._id}">${filteredEvents[i].title}</a>`);
        markers.addLayer(marker);
    }
}