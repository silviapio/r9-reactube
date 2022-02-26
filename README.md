# Welcome to Reactube 👋

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/silviapio/r9-reactube#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/silviapio/r9-reactube/graphs/commit-activity)

> This project was my first challenging project with React.js. I'm happy to say I built it without watching any tutorials!
> It was submitted as last assignment of the Front End path of the IT Academy Bootcamp; there were 3 different levels of increasing difficulty, you can see them reflected in branches.
> The goal was to build a clone of YouTube, allowing the user to favorite their videos and to keep a record of the last videos that were displayed.

### ✨ Deployed/demo version [https://reactube-silvia.herokuapp.com/](https://reactube-silvia.herokuapp.com/)

## Demo overview/user guide

The web application consists of 3 main screens: Home, Favorites, History. These screens are accessible from anywhere in the app through the navbar (on the left on large screens, up on top on mobile). Plus, there's a 4th screen allowing to play a selected video.

Upon load, the app shows the recommended videos as provided by YouTube for the defined region (Spain).

Possible actions:

- perform a text search (search bar)
- favorite/unfavorite videos
- view recent searches and repeat them (Homepage)
- view recently searched or viewed videos (History)
- view favorites (Favorites)
- view selected video
- navigate to Favorites / History / Home

## Developer overview

This project was bootstrapped with [Create React App](https://create-react-app.dev/).

The routing is done with React Router v5.

The app consumes data from the YouTube API.

There is no backend, so data is saved locally thanks to Local Storage.

> status: I'm still working on this app, please see section [My personal to-do list](#my-personal-to-do-list-for-this-app).

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

There are many branches in this project, forgive me, it was my first complex solo project ƪ(ړײ)ƪ

- `main`

In main branch goes the latest stable version of the app. **This is the correct version to fork/clone, should you wish to!**

- `development`

In development branch there is the app "work in progress", with the latest working features successfully merged.

- `dev/` branches

All branches whose names start with `dev/` are working branches each for its own feature.

- `ex/` branches

The assignment had 3 levels of increasing difficulty; these are reflected in the 3 branches whose names start with `ex/`. Level 2 and 3 were optional, but I had some fun implementing them (of course, why not choosing the most challenging path 😉)

### My personal to-do list for this app

I recently worked on improving the original version submitted, especially the design (now it's 100% responsive and nicer 😎, plus accessibility was improved), the components structure (created some small reusable components), and some cleanup on the branches, the code and the routing.

✍️ Some improvements I want to work on:

- **Code quality**: now that I have a more thorough understanding of JavaScript, I would like to apply clean code principles on the original logic. I think there is potential for refactoring especially in the functions that fetch and load videos. I should explore if a custom hook could be useful. For sure a custom hook can be created to improve hover effects.

- **Accessibility**: this has become a very important topic for me as I really believe web should be inclusive. I want to make this app 100% accessible (at the moment for sure I'm missing some alt text on the navbar icons and on the video snippets that come without text).

- **Design**: design can always be improved, but I'd like to fix text overflow on video description, maybe allow for more videos displayed on the home VideoList, and it would be also nice to have a dark theme.

- **Bugs fixing**: currently the app does not control for errors when calling the API, which can of course lead to bugs or bad UX. If you find other bugs, please let me know!

## Author

👩‍💻 **Silvia Piovesan** [@silviapio](https://github.com/silviapio)

## Credits

Some resources used to build this web app:

- [svgrepo.com](http://svgrepo.com) for the video camera icon
- Ernest Ojeh, for his awesome [figma favicon generator](https://www.figma.com/community/file/914233657397286062)
- [Colorhub](https://www.colorhub.app/) for the color palette, here I used Rose and Jack

## Show your support

Give a ⭐️ if you liked this project, and don't forget to let me know what you think!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
