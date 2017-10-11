# react-native-random-bytes

A library to generate cryptographically-secure random bytes. Uses `SecRandomCopyBytes` on iOS and `SecureRandom` on Android.

## Usage
The library exports a single function:
### generateRandomBytes(length: number) => Promise\<Uint8Array\>
Takes a length, the number of bytes to generate, and returns a `Promise` that resolves with a `Uint8Array`.

```javascript
import { generateRandomBytes } from 'react-native-random-bytes';

generateRandomBytes(12).then(randomBytes => console.log(randomBytes));
```

## Installation

`$ yarn add react-native-random-bytes`

### Automatic linking with react-native link

`$ react-native link react-native-random-bytes`

### Manual linking

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-random-bytes` and add `RNRandomBytes.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRandomBytes.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import net.rhogan.rnrandombytes.RNRandomBytesPackage;` to the imports at the top of the file
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
