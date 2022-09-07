import {Navigation} from 'react-native-navigation';
import {AppRoute} from '../AppnNavigation/ScreenName';
import {Colors} from './Colors';

export const BottomTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: AppRoute.Home,
              children: [
                {
                  component: {
                    name: AppRoute.Home,
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: AppRoute.Home,
                  icon: {
                    scale: 4,
                    uri: 'icon-home',
                  },
                  iconColor: Colors.gray,
                  selectedIconColor: Colors.themeBlue,
                  textColor: Colors.gray,
                  selectedTextColor: Colors.themeBlue,
                  testID: 'Home',
                },
              },
            },
          },
          {
            stack: {
              id: AppRoute.More,
              children: [
                {
                  component: {
                    name: AppRoute.More,
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: AppRoute.More,
                  icon: {
                    scale: 4,
                    uri: 'icon-menu',
                  },
                  iconColor: Colors.gray,
                  selectedIconColor: Colors.themeBlue,
                  textColor: Colors.gray,
                  selectedTextColor: Colors.themeBlue,
                  testID: 'More',
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const OpenModal = (route?: any) => {
  Navigation.showModal({
    component: {
      name: route,
      options: {
        topBar: {
         visible: false
        },
      },
    },
  });
};
