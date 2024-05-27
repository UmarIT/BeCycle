import {Platform} from 'react-native';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';

export {ANDROID, IOS};

export interface ItemProps {
  imageUrl: string;
  name: String;
  userName: String;
  videos: String;
  following: String;
  followers: String;
}
