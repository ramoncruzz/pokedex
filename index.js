/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Route from './src/route/route';
import {name as appName} from './app.json';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => (
    <Provider store={store}>
        <Route/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
