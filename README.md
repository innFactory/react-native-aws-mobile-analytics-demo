# react-native-aws-mobile-analytics-demo
Demo React-Native app which uses Amazon AWS Mobile Analytics JavaScript
<br />
<br />
<br />
Uses:

[aws-sdk-mobile-analytics-js](https://github.com/aws/aws-sdk-mobile-analytics-js)

[aws-sdk-js](https://github.com/aws/aws-sdk-js)

<br /><br />
## How to

### 1. Download [aws-sdk-mobile-analytics-js](https://github.com/aws/aws-sdk-mobile-analytics-js)
Download the [aws-sdk-mobile-analytics-js](https://github.com/aws/aws-sdk-mobile-analytics-js) without npm and without an install. Just extract it in a folder in your project.
<br />
<br />

### 2. NPM install for aws-sdk-mobile-analytics-js
Go to your Folder where you extracted aws-sdk-mobile-analytics-js and download dependencies with `npm install`. The `aws-sdk-js` is now in the node-modules folder.
<br />
<br />

### 3. Change the import of aws-sdk-js
Change the import in file `/aws-sdk-mobile-analytics-js/lib/MobileAnalyticsClient.js` of AWS to `var AWS = require('../node_modules/aws-sdk/dist/aws-sdk-react-native');`
<br />
<br />

### 4. Import the local libs to your App
Import it in your App (e.g. /js/App.js) with:
App.js
```
import AWS from "./lib/aws-sdk-mobile-analytics-js-master/node_modules/aws-sdk/dist/aws-sdk-react-native";
import AMA from "./lib/aws-sdk-mobile-analytics-js-master/lib/ama";
```
<br />
<br />

### 5. Change the appId to your appId which you created via AWS Console
App.js
```
let options = {
        // TODO: Replace this one with your appId
        appId: "a3xxxxxxxxxcffxxxxxc8dxxxxx23",  // Replace this one with your appId
        platform : Platform.OS === 'ios' ? 'iPhoneOS' : 'Android',
        logger: console
    };
```
