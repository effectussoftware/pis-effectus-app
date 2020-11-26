# Effectus App

[![Maintainability](https://api.codeclimate.com/v1/badges/4c34855698538645a3d2/maintainability)](https://codeclimate.com/github/effectussoftware/pis-effectus-app/maintainability)

## Commands

Run with `npm run` or just `npm` if applies.

1. **Start the app**: `android:{env}` or `ios:{env}` (envs: `dev`, `staging`, and `prod`)
2. **Start metro bundler**: `start`
3. **Lint the app**: `lint`
4. **Test the app**: `test`

## Getting started

1. Install dependencies: `npm i`.
2. Get the env files from an existing member of the project or the project's share knowledge. There should be 3 env files: `.env`, `.env.staging` and `.env.prod`. They should go in the root folder of the project and are gitignored already. You can check that you have the right set of keys by checking the `.env.sample` file.
3. Start on android or ios: `android:{env}` or `ios:{env}` (envs: `dev`, `staging`, and `prod`)
4. Get the firebase config files and follow the file placement inside the firebase zip file. This zip should be provided by the original development team.

### Steps for Android development

1. Run the following command inside the `android/app` directory

```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

2. If you wan to deploy the app, like creating an apk, you will also need to get the `.keystore` file that the original dev team provided. It should be placed inside the `android/app` folder.

### Steps for iOS development

1. Run the following command inside the `ios` directory

```
pod install
```

2. as always with any iOS development, make sure that the account that you are signed into has access to the app and can create the correct certificates to develop and deploy.

## Folder Structure
As many react native projects, we have at the root of the project an `android` and and `ios` folder for the native side of things. We also have a `src` folder that has the main contents of the application and what we will be focusing this section on.

Contents of the `src` folder:
- `actions`: All the actions separated by concern that conect with the services and the store.
- `assets`: Fonts and images.
- `components`: Reused components (screen specific components live inside the component of the screen at the `screens` folder).
- `constants`: Various types of constants defined like `colors`, `dimensions`, `dateFormats` and more.
- `hooks`: Useful custom hooks like `useSession` and `useAlertError`.
- `httpClient`: Axios config to communicate with the backend.
- `navigators`: Structure of the app with `react-navigation`
- `reducers`: As with actions, we have one reducer per concern here and export a reducer that combines them all.
- `screens`: Screen components so they are separated from all the other components and more organized.
- `services`: Connections to backend endpoints, one file per concern.
- `store`: Redux store config.
- `utils`: Has helper functions that did not justify being a hook or it was not needed.

## Code Climate Configuration

Code climate is already configured, the configuration can be found at `.codeclimate.yml`.

## Build Android Release

In order to do this, make sure that you have the correct `.keystore` file mentioned in the configuration section.

1. go to `android/app/build.gradle` and search for `versionCode` and `versionName`, update them accordingly. The `versionCode` should always go up`. The`versionName` should follow semver guidelines.
2. Run `android:release:{env}`
3. The generated APK can be found under `android/app/build/outputs/apk/{env}/app-release.apk`

## Build iOS Release

1. Make sure to update the version number or build number if necessary. To do so search for `CF_BUNDLE_VERSION_NUMBER` and `CF_BUNDLE_BUILD_NUMBER` in the code. These are user defined variables that are used to set the version of all the build targets at the same time so they are always synced. You will need to change both instances where values are assigned to these variables. One is for debug and one is for release. As a precaution make sure that in the general tab of the build target you want to release, the fields were updated since they could have been changed directly there on a previous iteration and lost the syncing with the variables.
2. Select on Xcode the scheme of the build target you want to create the release for.
3. For the device select **generic iOS device**.
4. Then go to **Product** -> **Archive**.
5. After it is done processing and the archive succeeds the **organizer** will open. Here is where you can see all the previously generated archives.

## Managing multiple environments

The base is already equipped with three main environments: `dev`, `staging`, `production`. All the env files you need to provide are as follows: `.env`, `.env.staging`, and `.env.prod` and the firebase config files for android and iOS.

If you want to add a new env here are the steps to follow:

1. Create a new env file with the format `.env.{name}`.

### Android

2. go to `android/app/build.gradle` and add the env file association to `project.ext.envConfigFiles` following the existing ones as example.
3. Scroll down to the `flavors` section and add a new flavor with the following format:

```
{name} {
  applicationIdSuffix '.{name}'
  minSdkVersion rootProject.ext.minSdkVersion
  targetSdkVersion rootProject.ext.targetSdkVersion
}
```

4. Inside `android/app/src` copy one of the existing env folders like `staging` and rename it with the name of your new flavor.
5. In that new folder you will see a folder called `values` and inside a file called `strings.xml` there you can set the app name that is going to appear for this flavor. You can also set special app icons for each flavor inside `res` folder.
6. Go to this project in the firebase console and configure a new app there for the new env added. You will get a `google-services.json` that should be placed at the root of the flavor folder you just created. This file will be gitignored by default.
7. (optional) go ahead and add new scripts in the `package.json` file for this new env. As you can see, the other envs already have scripts to run, build and build release, this will make your development workflow a lot easier.
8. you might need to open the android folder in Android Studio and do **File** -> **Sync project with grade files**

### iOS

#### Using different build targets

You can use build targets to configure different app-icons, splash, bundle-ids, etc.

Build targets are a great way to manage multiple envs in TestFlight. If you need to have `staging` and `prod` available to test at the same time not using build target this can become a bit of an issue.

Fortunately the this project already comes with the build targets that will probably be need: `Effectus-Develop`, `Effectus-Staging` and `Effectus` which is for production use.

Each build target has its respective scheme already set up, they all have the same name as the build target.

##### Steps to add a new build target

In the occasion that you need to add another build target, say QA for example, here are the steps:

2. Open XCode and go to the project settings (top blue icon on the sidebar), there you should see a list of the already created targets.
3. Right click in the `Effectus` build target and select duplicate.
4. Select duplicate only.
5. Rename the new build target appropriately.
6. At the root of the `ios` folder a new copy of the info.plist file will be created. You also need to rename that file appropriately.
7. Since you have renamed the new build target's info.plist file, you need to go to the **Build Settings** of the new build target and in **Packaging** rewire the info.plist File attribute with the file's new name.
8. A new scheme will also be created, rename it appropriately.
9. Go to edit the scheme and in the left side bar select **Build** -> **Pre-actions**. Select the plus button and **New run script action**. In the code section of the action put as follows: `echo ".env.{name}" > /tmp/envfile` where name is the name of the env you created.
10. Add the new build target to your pod file:

```
target '{TargetName}' do
  base_pods


  use_native_modules!
end
```

11. (optional) go ahead and add new scripts in the `package.json` file for this new env. As you can see, the other envs already have scripts to run, build and build release, this will make your development workflow a lot easier.

### Redux-Persist configuration

The current configuration for redux-persist is on `store/configureStore.js`.

The default configuration is the following:

- There's a defined `whitelist` where all reducers that want to be persisted must be declared.
- The `storage` engine is `AsyncStorage` but you can change it if needed, for example: https://github.com/CodingZeal/redux-persist-sensitive-storage if you need keychan storage on iOS.
- If you ever need to set up migrations to keep your reducers up to date, please check [this link](https://github.com/rt2zz/redux-persist#migrations).

## Main dependencies

- [axios](https://www.npmjs.com/package/axios) for managing calls to the backend.
- [calendar-link](https://www.npmjs.com/package/calendar-link) for easy creation of calendar event links.
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) to have prettier run as an eslint plugin and ensure code style standards.
- [humps](https://www.npmjs.com/package/humps) for camelizing and decamelizing requests and responses from the backend since the frontend uses camelCase and the backend uses snake_case.
- [immer](https://www.npmjs.com/package/immer) for redux immutability.
- [lodash](https://www.npmjs.com/package/lodash) for some useful element manipulations.
- [moment](https://www.npmjs.com/package/moment) for easy date manipulation.
- [React-Navigation](https://reactnavigation.org)
- [PropTypes](https://www.npmjs.com/package/prop-types) for runtime type checking for React props.
- [React-Native-Config](https://www.npmjs.com/package/react-native-config) to expose .env variable to the app.
- [ReactNativeLocalization](https://www.npmjs.com/package/react-native-localization) To centrailze all strings of the app and make it easy to internationalize in the future.
- [react-native-month-year-picker](https://www.npmjs.com/package/react-native-month-year-picker) For selecting year and month in the events tab.
- [react-native-parsed-text](https://www.npmjs.com/package/react-native-parsed-text) to make urls pressable.
- [react-native-permissions](https://www.npmjs.com/package/react-native-permissions) Needed to ask for permissions for push notifications.
- [react-native-push-notification](https://www.npmjs.com/package/react-native-push-notification) used to configure push notifications.
- [react-native-raw-bottom-sheet](https://www.npmjs.com/package/react-native-raw-bottom-sheet) Used to pop a modal bottom sheet style in the event confirmation for example.
- [Redux](https://www.npmjs.com/package/redux) Our state container tool.
- [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) for component interaction with the backend and the store.
- [Redux-Persist](https://www.npmjs.com/package/redux-persist) for saving the session of the user and keep them logged in even after closing the app.
- [Jest](https://github.com/facebook/jest) for testing
- [Enzyme](https://github.com/airbnb/enzyme) for testing
