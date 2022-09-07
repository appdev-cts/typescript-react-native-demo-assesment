# typescript-react-native-demo-assesment

React native assessment using typescript, redux persist.

1. On launch, app will launch on a white screen at the HOME Tab.
2. We should press on More tab and it should take us to a view that has a button.
3. If we press on that button, it should open a modal (using wix modal) and it should fetch user data from gorest.co.in api, then save them in redux, then show them in cards.
4. If we press on “Add” button, it should go to a subview within the same modal where we can add some text and press DONE.
5. When we add the text and press done, we should automatically go back to the modal and the text that we added should be in a card on top of the list.
6. If we close the app and relaunch it, we should see the same list in the modal (with redux persist). (No need to fetch again, only first time)
7. Please keep UI as close as possible.
8. Make sure final codebase is super clean and organized.

<img src="Simulator-Screen-Recording-iPhon.gif" width = "30%">

# Used Components

Use gorest.co.in for api calls

Use RN CLI

Wix navigation: https://github.com/wix/react-native-navigation

Modal: https://wix.github.io/react-native-navigation/docs/modal/

Redux store: https://redux.js.org/api/store

Redux persist: https://github.com/rt2zz/redux-persist

Use React Native Flatlist for The cells in the modal.

Written in Typescript

## Prerequisite
```
npm install -g npm
```

## Run on android
```
cd typescript-react-native-demo-assesment
npm install
npm run android
```

## Run on ios
```
cd typescript-react-native-demo-assesment
npm install
cd ios
pod install
npm run ios
```
