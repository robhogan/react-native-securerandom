import { NativeModules } from 'react-native';
import { toByteArray } from 'base64-js';

const { RNSecureRandom } = NativeModules;

export function generateSecureRandom(length) {
    if (!RNSecureRandom || !RNSecureRandom.generateSecureRandomAsBase64) {
        return Promise.reject(Error('react-native-securerandom is not properly linked'));
    }

    return RNSecureRandom.generateSecureRandomAsBase64(length).then(base64 => toByteArray(base64));
}
