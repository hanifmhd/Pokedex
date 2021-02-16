# Pokedex
Pokedex App using React Native + Apollo + GraphQL

---

## Clone Design App from Dribbble
Saepul nahwan - https://dribbble.com/shots/6540871-Pokedex-App/attachments/6540871-Pokedex-App?mode=media
![](https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png)


## Result
Home | Filter 
:-------------------------: | :-------------------------: 
![](https://miro.medium.com/max/1000/1*gUQVkhUAL2xalsYx5XXyVg.png) | ![](https://miro.medium.com/max/1000/1*Oj_NgEcNwunITgQjyMpwcg.png)

About | Attacks | Evolutions
:-------------------------: | :-------------------------: | :-------------------------:
![](https://miro.medium.com/max/668/1*t4UucCwGzjdxCwjtPP_26A.png)|![](https://miro.medium.com/max/668/1*1HatKCRLE8nTm0QqwGMtpg.png) | ![](https://miro.medium.com/max/668/1*ffDzt0vnz7hmZdG6Fv2Xhw.png)

## How to run project

_After clone the project you need to install deppendecy with NPM Install in terminal_

```
npm install
```

### Run in Android Platform

If using Android X, run jetifier first

```
npx jetify
```

After jetifier run, you can run in your android device / android simulator

```
npm run android
```

### Run in iOS Platform

Install ios Library using Cocoapods first

```
cd ios && pod install
```

then, you can run in your ios device / ios simulator

```
npm run ios
```

### Generate APK in Android

If using Android X, run jetifier first

```
npx jetify
```

After jetifier run, you can build APK for your android device

```
cd android && ./gradlew assembleRelease
```

You can see apk in path folder :

```
android/app/release
```

or

```
android/app/build/outputs/apk/release
```
