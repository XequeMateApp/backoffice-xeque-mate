// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD-t9J7dyLCFeMBW_VnfcAVVJYjRO2N9uY",
    authDomain: "xeque-mate-2916e.firebaseapp.com",
    projectId: "xeque-mate-2916e",
    storageBucket: "xeque-mate-2916e.appspot.com",
    messagingSenderId: "1071724999399",
    appId: "1:1071724999399:web:884548bca3e3336621e842",
    measurementId: "G-EPPEFW9HKT"
  },
  maxImgageSize: 10485760,
  maxDocumentSize: 10485760,
  api: {
    xequeMateApi: 'https://marketplace-inkluziva.tgtdigital.io/xeque/'
    // xequeMateApi: 'http://localhost:3000/'
  },
  encryptKey: '567e61fddbe8a715df61d805f2551b8a'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
