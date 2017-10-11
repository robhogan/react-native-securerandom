require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNRandomBytes"
  s.version      = package["version"]
  s.summary      = "RNRandomBytes"
  s.description  = package["description"]
  s.homepage     = package["homepage"]
  s.license      = "MIT"
  s.author             = { "Rob Hogan" => "roberthogan@blueyonder.co.uk" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNRandomBytes.git", :tag => "master" }
  s.source_files  = "RNRandomBytes/**/*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
end
