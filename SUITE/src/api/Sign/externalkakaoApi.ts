// import  * as KakaoLogin from '@react-native-seoul/kakao-login';
// import { kakaoLoginApi } from './kakaoLogin';

// export const externalkakaologin = () => {
//     KakaoLogin.login().then((result) => {
//         const data = JSON.stringify(result)
//         const parsedData = JSON.parse(data);
//         const accessToken = parsedData.accessToken;
//         kakaoLoginApi(accessToken)
//     }).catch((error) => {
//         if (error.code === 'E_CANCELLED_OPERATION') {
//             console.log("Login Cancel", error.message);
//         } else {
//             console.log(`Login Fail(code:${error.code})`, error.message);
//         }
//     });
//   };
