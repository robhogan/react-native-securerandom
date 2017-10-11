/* @flow */

import { NativeModules, Platform } from 'react-native';
import { toByteArray } from 'base64-js';

const { RNRandomBytes } = NativeModules;

export function generateRandomBytes(length: number): Promise<Uint8Array> {
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
        throw Error('react-native-random-bytes is currently only available for iOS and Android');
    }

    if (!RNRandomBytes || !RNRandomBytes.generateRandomBytesAsBase64) {
        throw Error('react-native-random-bytes is not properly linked');
    }

    return RNRandomBytes.generateRandomBytesAsBase64(length).then(base64 => toByteArray(base64));
}
