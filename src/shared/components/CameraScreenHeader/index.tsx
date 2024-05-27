import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {CROSS} from '@assets/images';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
interface TopComponentProps {
  title?: string;
  onpress?: () => void;
  textColor?: string;
}
const CameraScreenHeader = (props: TopComponentProps) => {
  const {title, onpress, textColor} = props;
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={onpress} style={styles.touchableView}>
        <FastImage
          source={CROSS}
          tintColor={COLORS.WHITE}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View>
        <CustomText
          size={18}
          color={textColor ?? COLORS.WHITE}
          style={styles.subHeading}>
          {title}
        </CustomText>
      </View>
    </View>
  );
};

export default CameraScreenHeader;

const styles = StyleSheet.create({
  subHeading: {
    ...GST.WEIGHT800,
  },
  mainView: {
    flexDirection: 'row',
    position: 'absolute',
    top: RF(50),
    zIndex: 999,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RF(20),
  },
  touchableView: {
    padding: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RF(20),
    backgroundColor: COLORS.WHITE_LIGHT,
    alignSelf: 'flex-start',
  },
  icon: {height: RF(18), width: RF(18)},
});
