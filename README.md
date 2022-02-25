# Welcome to Reactube 👋

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/silviapio/r9-reactube#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/silviapio/r9-reactube/graphs/commit-activity)

> This project was my first challenging project with React.js.
> It was submitted as last assignment of the Front End path of the IT Academy Bootcamp; there were 3 different levels of increasing difficulty, you can see them reflected in branches.
> The goal was to build a clone of YouTube, allowing the user to favorite their videos and to keep a record of the last videos that were displayed.

### ✨ Deployed/demo version [https://reactube-silvia.herokuapp.com/](https://reactube-silvia.herokuapp.com/)

## Demo overview/user guide

The web application consists of 3 main screens: Home, Favorites, History. These screens are accessible from anywhere in the app through the navbar (on the left on large screens, up on top on mobile). Plus, there's a 4th screen allowing to play a selected video.

Upon load, the app shows the recommended videos as provided by YouTube for the defined region (Spain).

Possible actions:
- perform a text search (search bar)
- favorite videos
- view recent searches and repeat them
- view selected video

## Developer overview

This project was bootstrapped with [Create React App](https://create-react-app.dev/).

The routing is done with React Router v5.

The app consumes data from the YouTube API.

### Install

```sh
npm install
```

### Usage

To start the app in development mode:

```sh
npm start
```

### API keys

The app consumes data from the YouTube API. If you fork/clone the repository, you will need your API key to use the app.

Follow these steps:

1. create an empty `.env` file in the root of the project
2. save there your api key with this format: `REACT_APP_API_KEY = 12345xyz`, where "12345xyz" will be replaced by your own key

If you don't modify it, `.gitignore` file already makes it so your `.env` file won't be tracked, but just be sure check that it lists ".env".

You're good to go!

### Navigate through branches

There are many branches in this project, forgive me, it was my first complex solo project  ƪ(ړײ)ƪ

- `main`

In main branch goes the latest stable version of the app. **This is the correct version to fork/clone, should you wish to!**

- `development`

In development branch there is the app "work in progress", with the latest working features successfully merged.

- `dev/` branches

All branches whose names start with `dev/` are working branches each for its own feature.

- `ex/` branches

The assignment had 3 levels of increasing difficulty; these are reflected in the 3 branches whose names start with `ex/`. Level 2 and 3 were optional, but I had some fun implementing them (of course, why not choosing the most challenging path 😉)

## Author

👩‍💻 **Silvia Piovesan**

- Github: [@silviapio](https://github.com/silviapio)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
