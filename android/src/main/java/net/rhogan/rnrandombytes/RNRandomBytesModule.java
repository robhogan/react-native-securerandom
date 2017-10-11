package net.rhogan.rnrandombytes;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.security.SecureRandom;
import android.util.Base64;

public class RNRandomBytesModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNRandomBytesModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @ReactMethod
  public void generateRandomBytesAsBase64(int length, Promise promise) {
    SecureRandom secureRandom = new SecureRandom();
    byte[] buffer = new byte[length];
    secureRandom.nextBytes(buffer);
    promise.resolve(Base64.encodeToString(buffer, Base64.NO_WRAP));
  }

  @Override
  public String getName() {
    return "RNRandomBytes";
  }
}
