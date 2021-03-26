# Famysh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

# Running a Dev Server locally
## Setup the frontend
### Node.js
This assumes you already have `Node.js` installed on your machine.

### Angular CLI
The first requirement is the Angular cli, this is required to build the app and rather than just use the npx (installed lib) I'd recommend grabbing the cli globally.

`npm i -g @angular/cli`

### Clone the Repo
Make sure you clone this repository and place it in a memorable directory.

`git clone https://github.com/Bulbacode/famysh.git`

### Run Local Server
In typical angular fashion, all you need to do now is install npm packages.

`npm i`

and then use ng serve to run the dev server

`ng serve` or `ng serve --o` to open in a new tab automatically.

The front end is now up and running, but the functionality won't work until we setup the api locally.

## Setup the backend
### Prerequisites
#### Yelp API
First you will need to create an app on the yelp api's website and register for the developer beta. The beta gives you access to the graphql api.

[Yelp GraphQL API](https://www.yelp.com/developers/graphql/guides/intro)

You will get an api key, we will need this later so keep it open.

#### Firebase Tools
Next you will need to install the firebase tools globally on your machine.

`npm i -g firebase-tools`

Also be sure to create an account on the firebase website.

[Firebase Console](https://console.firebase.google.com/)

Once you have an account, run `firebase login` in the command line to sign in to your firebase account.

### Initalize Firebase
Run `firebase init` in the base directory for the repo, select create a new project, add hosting, functions and emulators.

Next go on the firebase console webpage and go to your project. Copy the config object under Project Settings -> Web -> Config

Paste that object's values in the environment and environment.prod files in the source directory under environments.

### Setting Up Environment Variables
Now we need to use that api key from yelp. Run this command to set a functions config variable from the terminal.

`firebase functions:config:set yelp.key="THE API KEY"`

to set the environmental variables on the server for firebase. That's great but now we need to get a local copy of the environment vars for our emulator. To do this

`cd functions`

and run 

`firebase functions:config:get > .runtimeconfig.json`

### Now Just Build
`npm run build`

make sure you run the above command in the functions directory. After building run

`firebase emulators:start --inspect-functions`

to start the emulator.

# Putting it all together
No we have an emulator running and the front end running. All that's left is to edit the front end environment.ts file to use your local api's base url. To do that, change the project name from 

`famysh-71e0f` to `<your-project-name>`