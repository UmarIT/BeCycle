import CustomText from '@components/CustomText';
import { COLORS } from '@theme/colors';
import { GST } from '@theme/globalStyles';
import { RF } from '@theme/responsive';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreenTextComp = () => {
    return (
        <View style={styles.inner}>
        <CustomText
          style={{...GST.WEIGHTBOLD}}
          size={24}
          center
          color={COLORS.WHITE}>
          Login to watch and vote
        </CustomText>
        <CustomText style={{marginTop: RF(15)}} size={14} color={COLORS.WHITE}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut labore et
          dolore magna aliqua.
        </CustomText>
      </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: RF(50),
        width: RF(100),
        marginBottom: RF(15),
      },
    inner:{position: 'absolute', top: '52%', paddingHorizontal: RF(15)},

});

export default SplashScreenTextComp;
