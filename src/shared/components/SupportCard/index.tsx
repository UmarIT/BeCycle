//import liraries
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { COLORS } from '@theme/colors';
import { GST } from '@theme/globalStyles';
import { RF } from '@theme/responsive';
import { SIZING } from '@theme/sizing';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface SupportCardProps{
    onPress:()=>void;
    title:String;
    price:String;
    desc:String;
    width?:any;
    size?:any;
    color?:any;
    btnTitle:any;
    
}
const SupportCard = ({onPress ,color,price,size,btnTitle, title,width, desc}:SupportCardProps) => {
    return (
        <View
        style={{
          backgroundColor: COLORS.DARKGRAY,
          ...SIZING.w100,
          paddingVertical: RF(8),
          paddingHorizontal: RF(10),
          borderRadius: RF(8),
          marginTop: RF(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View style={{paddingVertical: RF(10)}}>
            <CustomText size={18} style={{...GST.WEIGHT700}}>
              {title}
            </CustomText>
            <View style={{flexDirection: 'row', paddingVertical: RF(5)}}>
              <CustomText>
                <Text
                  style={{
                    fontSize: RF(18),
                    ...GST.WEIGHT600,
                    color: COLORS.BLUE,
                  }}>
                  ${price}
                </Text>
                / month
              </CustomText>
            </View>
          </View>

          <View style={{width:width|| RF(55)}}>
            <CustomButton
              bgColor={color||COLORS.LIGHTGREEN}
              size={size||11}
              color={COLORS.BLACK}
              height={RF(32)}
              onPress={onPress}
              text={btnTitle}
            />
          </View>
        </View>
        <CustomText size={ 10}>
          {desc}
        </CustomText>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SupportCard;
