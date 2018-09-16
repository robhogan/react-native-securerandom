using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;
using System.Security.Cryptography;

namespace Net.Rhogan.RNSecureRandom
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNSecureRandomModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNSecureRandomModule"/>.
        /// </summary>
        internal RNSecureRandomModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNSecureRandom";
            }
        }
        
        [ReactMethod]
        public void generateSecureRandomAsBase64(int numberOfBytes, IPromise promise)
        {
            try
            {
                RandomNumberGenerator csprng = RandomNumberGenerator.Create();
                byte[] rawByteArray = new byte[numberOfBytes];
                csprng.GetBytes(rawByteArray);
                promise.Resolve(Convert.ToBase64String(rawByteArray));
            } catch (Exception ex)
            {
                promise.Reject(ex);
            }
        }
    }
}
