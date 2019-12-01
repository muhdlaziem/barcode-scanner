/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import 'react-native-gesture-handler'
import {name as appName} from './app.json';

console.disableYellowBox =true;
AppRegistry.registerComponent(appName, () => App);