
# react-native-random-bytes

## Getting started

`$ npm install react-native-random-bytes --save`

### Mostly automatic installation

`$ react-native link react-native-random-bytes`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-random-bytes` and add `RNRandomBytes.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRandomBytes.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRandomBytesPackage;` to the imports at the top of the file
  - Add `new RNRandomBytesPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-random-bytes'
  	project(':react-native-random-bytes').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-random-bytes/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-random-bytes')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRandomBytes.sln` in `node_modules/react-native-random-bytes/windows/RNRandomBytes.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Random.Bytes.RNRandomBytes;` to the usings at the top of the file
  - Add `new RNRandomBytesPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRandomBytes from 'react-native-random-bytes';

// TODO: What to do with the module?
RNRandomBytes;
```
  