/* @flow */

import { NativeModules, Platform } from 'react-native';

const { RNRandomBytes } = NativeModules;

export function generateRandomBytes(length: number): Promise<Uint8Array> {
    if (Platform.OS !== 'ios') {
        throw Error('react-native-random-bytes is currently only available for iOS');
    }

    if (!RNRandomBytes || !RNRandomBytes.generateRandomBytesAsBase64) {
        throw Error('react-native-random-bytes is not properly linked');
    }

    return RNRandomBytes.generateRandomBytesAsBase64(length).then(bytesAsString => {
        return Uint8Array.from(atob(bytesAsString).split('').map(c => c.charCodeAt(0)));
    })
}
