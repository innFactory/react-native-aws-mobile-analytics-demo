import React from "react";
import MobileAnalyticsClient from "./MobileAnalytics";
import SomeComponent from "./components/SomeComponent";

export default class App extends React.Component {

    constructor(){
        super();

        this.state = {
            isMobileAnalyticsLoading: true,
        };

        MobileAnalyticsClient.initialize(()=>this.setState({isMobileAnalyticsLoading: false}));
    }


    render() {

        if(this.state.isMobileAnalyticsLoading){
            return null;
        }

        return (
          <SomeComponent/>
        );
    }
};


