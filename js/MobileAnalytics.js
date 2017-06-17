import AWS from "aws-sdk/dist/aws-sdk-react-native";
import AMA from "react-native-aws-mobile-analytics";
import {
    Platform,
} from 'react-native';
import DeviceInfo from "react-native-device-info";

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    region: 'us-east-1',
    IdentityPoolId: 'us-east-1:4c6d17ff-9eb1-4805-914d-8db8536ab130',
});


let appId_PROD = "2e9axxxxxxx742c5a35axxxxxxxxx2f";
let appId_DEV = "xxxx44be23c4xxx9xxxxxxxxxxxxx3fb";

let options = {
    appId: __DEV__?appId_DEV:appId_PROD,
    platform : Platform.OS === 'ios' ? 'iPhoneOS' : 'Android',
    appVersionName : DeviceInfo.getVersion(),
    logger: console
};



const MobileAnalyticsClient  = new AMA.Manager(options);


export default MobileAnalyticsClient;