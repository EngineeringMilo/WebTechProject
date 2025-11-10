window.addEventListener("load", function () {
    CookieConsent.run({
        categories: {
            necessary: {
                enabled: true,
                readOnly: true
            },
            analytics: {}
        },
        language: {
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: 'This site uses cookies',
                        description: 'We use cookies to improve your browsing experience and to analyze traffic on our site',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all',
                        showPreferencesBtn: 'Manage Individual preferences'
                    },
                    preferencesModal: {
                        title: 'Cookie settings',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all',
                        savePreferencesBtn: 'Accept current selection',
                        closeIconLabel: 'Close modal',
                        sections: [
                            {
                                title: 'Cookie options',
                                description: 'Specifies the different options'
                            },
                            {
                                title: 'Strictly Necessary cookies',
                                description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Performance and Analytics',
                                description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                                linkedCategory: 'analytics'
                            },
                            {
                                title: 'More information',
                                description: 'For any questions about our policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                            }
                        ]
                    }
                }
            }
        },
        
        // Callback functie die uitgevoerd wordt wanneer voorkeuren veranderen
        onChange: function({cookie, changedCategories, changedServices}) {
            if (changedCategories.includes('analytics')) {
                handleYouTubeConsent();
            }
        },
        
        // Callback bij eerste consent
        onConsent: function({cookie}) {
            handleYouTubeConsent();
        }
    });
    
    // Functie om YouTube video te tonen of verbergen
    function handleYouTubeConsent() {
        const youtubeContainers = document.querySelectorAll('.youtube-embed-container');
        
        youtubeContainers.forEach(container => {
            const consent = CookieConsent.acceptedCategory('analytics');
            const placeholder = container.querySelector('.youtube-placeholder');
            const iframe = container.querySelector('.youtube-iframe');
            
            if (consent) {
                if (placeholder) placeholder.style.display = 'none';
                if (iframe) {
                    iframe.style.display = 'block';
                    // Laad de video src als deze nog niet geladen is
                    if (!iframe.src && iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                    }
                }
            } else {
                if (placeholder) placeholder.style.display = 'flex';
                if (iframe) iframe.style.display = 'none';
            }
        });
    }
    
    // Check direct bij laden van de pagina
    handleYouTubeConsent();
});