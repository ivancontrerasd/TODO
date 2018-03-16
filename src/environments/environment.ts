// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCfds9yu5k5WX6zaha2w6sINqCZ-GhvrGM",
    authDomain: "todolistapp-af472.firebaseapp.com",
    databaseURL: "https://todolistapp-af472.firebaseio.com",
    projectId: "todolistapp-af472",
    storageBucket: "todolistapp-af472.appspot.com",
    messagingSenderId: "193143383415"
  }
};
