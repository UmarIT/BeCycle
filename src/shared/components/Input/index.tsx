import React, {useState} from 'react';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {View, TextInput, Image, Pressable, TextInputProps} from 'react-native';
import {EYE} from '@assets/icons';
import {GST} from '@theme/globalStyles';
import {SIZING} from '@theme/sizing';
interface propss extends TextInputProps {
  title?: any;
  titleColor?: any;
  password?: any;
  containerStyle?: any;
  ipView?: any;
  borderColor?: any;
}
const Input = (props: propss) => {
  const {
    title,
    titleColor,
    containerStyle,
    placeholderTextColor,
    password,
    value,
    ipView,
    borderColor,
  } = props;
  const [show, setShow] = useState(password ? true : false);
  return (
    <View
      style={[
        {
          borderRadius: RF(30),
          borderWidth: 1,
          borderColor: COLORS.PLACEHOLDER,
          // borderColor: borderColor
          //   ? borderColor
          //   : value
          //   ? COLORS.LIGHTGREEN
          //   : COLORS.PLACEHOLDER,

          //   paddingBottom:Platform.OS=='ios'?RF(6): RF(0),
        },
        containerStyle && containerStyle,
      ]}>
      {/* {title && (
        <CustomText
          style={{...GST.WEIGHT500}}
          color={titleColor || COLORS.LIGHTGREEN}>
          {title}
        </CustomText>
      )} */}
      <View
        style={[
          {
            flexDirection: 'row',
            ...SIZING.w100,
            alignItems: 'center',
            height: RF(42),
            justifyContent: 'space-between',
          },
          ipView && ipView,
        ]}>
        <TextInput
          secureTextEntry={show}
          {...props}
          style={{
            // paddingTop: RF(9),
            paddingHorizontal: RF(20),
            width: password ? '90%' : '100%',
            ...GST.WEIGHT500,
            color: COLORS.darkBlue,
          }}
        />

        {password && (
          <Pressable
            style={{
              // backgroundColor: 'green',
              marginHorizontal: RF(15),
              position: 'absolute',
              right: 0,
            }}
            onPress={() => {
              console.log('>>>>LLL');
              setShow(!show);
            }}>
            <Image
              source={EYE}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;
