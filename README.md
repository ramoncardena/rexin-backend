#  Node.js API REST backend for Rexin Frontend

[![Author](http://img.shields.io/badge/author-@ramoncardnea-blue.svg?style=flat-square)](https://twitter.com/davellanedam)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton/blob/master/LICENSE)
![releaste](https://img.shields.io/badge/release-v.1.0.1-green.svg?style=flat-square)


## Getting started

This is a API REST backend for [Rexin Frontend](https://github.com/ramoncardena/rexin-frontend).

**The repo is based on [Daniel Avellaneda](https://github.com/davellanedam)'s [Node.js express.js MongoDB JWT REST API - Basic Project Skeleton](https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton).**

**Please check Daniel's repository readme to lean about the project.**

In this readme file I'll document only additional features.

## Demo
The project is deployed to **Heroku**. 

You can see the frontend here:
[Rexin Frontend](https://rexin-frontend.herokuapp.com)

If you want to test the backend with Postman, it's here:
[Rexin Backend](https://rexin-backend.herokuapp.com)

The repo is ready to deploy to Heroku with a Heroku Post-process hook.


## Additional Features

- Contact Form with [Mailgun](https://www.mailgun.com/)


## Requirements

- Node.js **8+**
- MongoDB **3.6+**
- Redis **5.0+**

## How to install

### Using Git (recommended)

1. Clone the project from github. Change "myproject" to you project name.

```bash
git clone https://github.com/ramoncardena/rexin-backend.git ./myproject
```

### Using manual download ZIP

1. Download repository
2. Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
npm update
npm install nodemon -g
```

### Mailgun

To ensure the deliverability of emails sent by this API, `Mailgun` is used for mailing users when they sign up, so if you want to use that feature go sign up at their website https://www.mailgun.com.


## How to run

### Database cleaning and seeding samples

There are 3 available commands for this: `fresh`, `clean` and `seed`.

```bash
npm run command
```

- `fresh` cleans and then seeds the database with dynamic data.
- `clean` cleans the database.
- `seed` seeds the database with dynamic data.

### Running in development mode (lifting API server)

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
****************************
*    Starting Server
*    Port: 3000
*    NODE_ENV: development
*    Database: MongoDB
*    DB Connection: OK
****************************
```

### Running tests

It´s a good practice to do tests at your code, so a sample of how to do that in `mocha/chai` is also included in the `/test` directory

```bash
npm run test
```

### Formatting code

Format your code with prettier by typing:

```bash
npm run format
```

## Usage

Once everything is set up to test API routes either use Postman or any other api testing application. Default username/password combination for login is `admin@admin.com/12345`.


## Bugs or improvements

Feel free to report any bugs or improvements. Pull requests are always welcome.


## I love this! How can I help?

It´s amazing you feel like that! Send me a tweet [Ramon Cardena](https://twitter.com/ramon_cardena), share this with others, make a pull request!


##Acknowledgements
Grateful to the Daniel Avellaneda for this great repo!

[Daniel Avellaneda (@davellanedam)](https://github.com/davellanedam)


## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
