react native - https://reactnative.dev/docs/environment-setup
ionic - https://ionicframework.com/
preza - https://slides.com/jathpr/deck/live
`ionic config set -g npmClient yarn`
`ionic start`

change appId in capacitor.config.json
`yarn build`
`ionic capacitor add android`
(for dev: `ionic capacitor copy android`)
(for live-reload: `ionic capacitor run android -l --host=YOUR_IP_ADDRESS`)
`npx cap open android` (possible you need set path to studio in capacitor.config.json ex:`"linuxAndroidStudioPath": "/snap/bin/android-studio",`)
`ionic cordova build android --prod --release`
