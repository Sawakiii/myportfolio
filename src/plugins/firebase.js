import firebase from 'firebase';
import 'firebase/auth';
// const path = require('path')
// const ENV_PATH = path.join(__dirname, ".env")
// const configParsed = require('dotenv').config({path: ENV_PATH})
// const dotenv = require('dotenv')
// const result = dotenv.config()
// require('dotenv').config();

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
}
// const config = configParsed.parsed
    
export default config

// firebase.initializeApp(config);