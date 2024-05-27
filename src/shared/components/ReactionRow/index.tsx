import {
  Image,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {HEARTFILLICON, HEARTICON, SHAREICON} from '@assets/icons';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import {RF} from '@theme/responsive';
import {GST} from '@theme/globalStyles';

interface ReactionsProps {
  heartPress?: () => void;
  share?: () => void;
  style?: ViewStyle;
  likes?:any;
  heart?: boolean;
  vote?: any;
  height?:any;
  width?:any;
  charts?: boolean;
  heartStyle?: ImageStyle;
  shareStyle?: ImageStyle;
}
export default function Reactions({
  heartPress,
  vote,
  style,
  share,
  heart,
  charts,
  heartStyle,
  shareStyle,
}: ReactionsProps) {
  return (
    <View style={[{flexDirection: 'row'}, style && style]}>
      <Pressable onPress={share}>
        <Image
          source={SHAREICON}
          resizeMode="contain"
          style={[styles.shareStyles, shareStyle]}
        />
      </Pressable>

      <Pressable onPress={heartPress}>
        <Image
          source={heart ? HEARTFILLICON : HEARTICON}
          resizeMode="contain"
          style={[styles.heartStyles, heartStyle]}
        />
      </Pressable>
      {vote && !charts && <CustomText size={10}>. {vote} votes</CustomText>}
      {charts && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: COLORS.BLUE,
              height: RF(5),
              width: RF(5),
              borderRadius: RF(10),
              marginRight: RF(6),
            }}
          />
          <CustomText size={12} style={styles.txt}>
            {vote ? vote : 'NEW'}
          </CustomText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    ...GST.WEIGHT700,
  },
  shareStyles: {
    width: RF(14),
    height: RF(14),
    marginRight: RF(8),
    tintColor: COLORS.LIGHTGREEN,
  },
  heartStyles: {
    width: RF(14),
    height: RF(14),
    marginRight: RF(8),
    tintColor: COLORS.LIGHTGREEN,
  },
});
