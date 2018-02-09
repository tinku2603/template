import React ,{Component} from "react";
//import Main from "./src/App";
import Main from "./src/login/index"
import Pushbots from 'pushbots-react-native'

Pushbots.registerForRemoteNotifications()

//events work with iOS only in this version. 
export default class App extends Component{
	componentWillMount() {
		console.log("Adding listener");
		Pushbots.addEventListener('received', this.onReceived);
	}
	componentWillUnmount() {
		Pushbots.removeEventListener('received', this.onReceived);
	}
	onReceived(notification) {
		Alert.alert( 'Alert Title', JSON.stringify(notification), [ {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')}, {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: false } )
  }
  render() {
    return <Main />;
  }

}


