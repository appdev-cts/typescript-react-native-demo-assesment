import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, presist} from '../Redux/Store';

/**
 * navigation stack component
 */

export const Stack = (name: any, Route: any) => {
  Navigation.registerComponent(
    name,
    () => props =>
      (
        <Provider store={store}>
          <PersistGate loading={null} persistor={presist}>
            <Route {...props} />
          </PersistGate>
        </Provider>
      ),
    () => Route,
  );
};
