/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import App from './Navigator/App';
// import { Register, Login } from './screens';
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import StackNavigator, { MainStackNavigator } from "./navigation/StackNavigator";

// const index = () => {
//     return(
//         <NavigationContainer>
//             <StackNavigator />
//         </NavigationContainer>
//     )
// }
// export default index
AppRegistry.registerComponent(appName, () => () => <App />)