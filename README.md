# Harmonize

## About

This is a project I've been part of at the end of my web development studies. The idea was to create an app where musiciens and sound engineers would be able to meet to create and collaborate around music projects. A lot of improvement could be done but this is the version 1.0 that we made in a month.

I've worked on it from the start to the beginning. I've created wireframes, user stories and part of the specifications. I've created a back-office and its security aspects. I've also created an API that I've secured with JWT tokens.

For further informations, you can join me via [Linkedin](https://www.linkedin.com/in/jacques-mougin/)

## Installation

```
# Clone the repo
git clone https://github.com/JacquesMougin/Harmonize.git

# Install dependencies
composer install
yarn install

# Build the assets
yarn encore dev

# Setup env file
cp .env .env.local

# Create BDD
php bin/console d:d:c

# Export migrations
php bin/console d:mi:mi
```

There are some test fixtures in the SQLCommandV1.sql file.

## Run locally

```
# Getting started
php -S localhost:8000 -t public
```

## License

Released under the MIT License, see LICENSE.

