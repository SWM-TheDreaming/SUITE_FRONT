declare module '*.svg' {
  //svg파일 선언
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.png' {
  //png 파일 선언
  import { ImageProps } from 'react-native';
  const value: ImageProps['source'];
  export default value;
}
