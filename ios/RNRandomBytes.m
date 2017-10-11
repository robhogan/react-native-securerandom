#import <Foundation/Foundation.h>

#import "RNRandomBytes.h"
#import <React/RCTUtils.h>
#import <React/RCTLog.h>

@implementation RNRandomBytes

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

RCT_REMAP_METHOD(generateRandomBytesAsBase64,
                 withLength:(int)length
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSMutableData* bytes = [NSMutableData dataWithLength:length];
    int result = SecRandomCopyBytes(kSecRandomDefault,length, [bytes mutableBytes]);
    if (result == errSecSuccess) {
        resolve([bytes base64EncodedStringWithOptions:0]);
    } else {
        NSError *error = [NSError errorWithDomain:@"RNRandomBytes" code:result userInfo: nil];
        reject(@"randombytes_error", @"Error generating random bytes", error);
    }
}

@end
