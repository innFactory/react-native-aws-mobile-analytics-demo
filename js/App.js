/**
 * Created by toni on 02.05.2017.
 */
import React from 'react';
import {
    Text,
    View,
    Platform
} from 'react-native';


import AWS from "./lib/aws-sdk-mobile-analytics-js-master/node_modules/aws-sdk/dist/aws-sdk-react-native";
import AMA from "./lib/aws-sdk-mobile-analytics-js-master/lib/ama";

export default class App extends React.Component {

    constructor(){
        super();

        this._initAWS();
    }


    render() {

        return (
            <View style={{flex: 1}}>
                <Text>AWS Mobile Analytics Demo</Text>
            </View>
        );
    }


    _initAWS() {
        AWS.config.region = 'us-east-1'; // always use this, even you are hosting elsewhere
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            region: 'us-east-1',
            /* IdentityPoolId is a public one from Amazon
             * Found this one under https://console.aws.amazon.com/mobileanalytics/home/#/overview?consoleState=integrationStep */
            IdentityPoolId: 'us-east-1:4c6d17ff-9eb1-4805-914d-8db8536ab130',
        });



        let options = {
            // TODO: Replace this one with your appId
            appId: "a3xxxxxxxxxcffxxxxxc8dxxxxx23",  // Replace this one with your appId
            platform : Platform.OS === 'ios' ? 'iPhoneOS' : 'Android',
            logger: console
        };


        // Fix: https://github.com/aws/aws-sdk-js/issues/1490
        AWS.MobileAnalytics.prototype.customizeRequests(function(req) {
            req.on('build', function() {
                if (req.httpRequest.body) {
                    req.httpRequest.headers['Content-Type'] = 'application/json';
                }
            });
        });


        let mobileAnalyticsClient = new AMA.Manager(options);

        // send a custom event
        mobileAnalyticsClient.recordEvent('analyticsDemo', { 'attribute_1': 'main', 'attribute_2': 'page' }, { 'metric_1': 1 });
    }
};


