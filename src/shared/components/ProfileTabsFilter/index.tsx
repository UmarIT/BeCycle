//import liraries
import { FILTER } from '@assets/icons';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { COLORS } from '@theme/colors';
import { RF } from '@theme/responsive';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileTabFilter = () => {
    return (
        <View
        style={styles.container}>
        <CustomText>Order by</CustomText>
        <View style={styles.imageOuter}>
          <CustomButton
            size={12}
            icon={
              <Image
                source={FILTER}
                resizeMode="contain"
                style={styles.image}
              />
            }
            style={styles.btn}
            height={RF(20)}
            onPress={() => {}}
            text="Newest"
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    imageOuter:{width: RF(80), marginHorizontal: RF(8)},
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: RF(10),
        paddingBottom:RF(10)
      },
      image:{
        width: RF(12),
        marginHorizontal: RF(4),
        height: RF(12),
      },
      btn:{
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: COLORS.whiteFF,
      }

});

export default ProfileTabFilter;
