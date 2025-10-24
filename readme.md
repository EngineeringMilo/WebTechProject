# This is the repo for EventLink

## Used dependencies

- express 
- mongoose
- pug
- bcrypt
- connect-mongo
- cookie-parser
- dotenv
- express-session
- method-override

To install you run
```
npm install express express-session connect-mongo mongoose bcrypt cookie-parser dotenv method-override pug
vanilla-cookieconsent
```


(In the AI_logboek file you can find more about what all these dependencies do and what they are used for.)

For development **nodemon** was used to run and test the app.

so for that you run

```
npm install --save-dev nodemon
```

(the --save-dev is so that npm knows it should be saved in the dev folder and not used in devolpment.)

## Running the app

There are 2 ways **If you do not have nodemon installed run:**

```
node app.js
```

If you do, you should run:

```
npm run dev
```

To learn more about this read the chapter under here.


## Side info about running the app

In package.json you'll see under *scripts* there is a *dev* script that says

```json
"scripts": {
    "dev": "nodemon app.js"
}
```

So when you run

```
npm run dev
```

This will use the *dev* to run the app so it would be the same as running *node app.js*