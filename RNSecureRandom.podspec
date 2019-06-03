require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNSecureRandom"
  s.version      = package["version"]
  s.summary      = "RNSecureRandom"
  s.description  = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.author       = { "Rob Hogan" => "npm@rhogan.net" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/rh389/react-native-securerandom.git", :tag => "master" }
  s.source_files = "ios/RNSecureRandom.{h,m}"
  s.requires_arc = true
  s.dependency "React"
end
