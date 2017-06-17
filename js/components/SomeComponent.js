import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

import MobileAnalyticsClient from "../MobileAnalytics";


export default class SomeComponent extends Component {

    componentDidMount() {
        // send a custom event
        MobileAnalyticsClient.recordEvent('SomeComponent', { 'message': 'componentDidMount'}, {});
    }


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello AWS Mobile Analytics</Text>
                <Button title={"Send an event"} onPress={()=>{
                    // send a custom event
                    MobileAnalyticsClient.recordEvent('analyticsDemo', { 'attribute_1': 'main', 'attribute_2': 'page' }, { 'metric_1': 1 });
                }}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        marginBottom: 30,
        fontWeight: "bold",
        fontSize: 20,
    }
});
