using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Net.Rhogan.RNRandomBytes
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNRandomBytesModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNRandomBytesModule"/>.
        /// </summary>
        internal RNRandomBytesModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNRandomBytes";
            }
        }
    }
}
