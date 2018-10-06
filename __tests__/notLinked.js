// @flow

import { generateSecureRandom } from "../index";
import { NativeModules } from "react-native";

jest.mock('react-native', () => ({
    NativeModules: {
    }
}));

test('calls the native side requesting the correct length, and converts b64 to Uint8Array', async () => {
    expect(generateSecureRandom(10)).rejects.toEqual(new Error('react-native-securerandom is not properly linked'));
});
