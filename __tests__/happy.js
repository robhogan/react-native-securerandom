// @flow

import { generateSecureRandom } from "../index";
import { NativeModules } from "react-native";

jest.mock('react-native', () => ({
    NativeModules: {
        RNSecureRandom: {
            generateSecureRandomAsBase64: jest.fn().mockImplementation(async _ => 'AAECAwQFBgcICQ==')
        }
    }
}));

test('calls the native side requesting the correct length, and converts b64 to Uint8Array', async () => {
    const nativeFn = NativeModules.RNSecureRandom.generateSecureRandomAsBase64;
    const result = await generateSecureRandom(10);
    expect(nativeFn.mock.calls[0]).toEqual([10]);
    expect(result).toEqual(Uint8Array.from([0,1,2,3,4,5,6,7,8,9]));
});
