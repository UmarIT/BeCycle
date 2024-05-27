import { PERSON } from '@assets/images';
import { COLORS } from '@theme/colors';
import { RF } from '@theme/responsive';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileComponent = ({left, cam}:any) => {
    return (
        <View
        style={[styles.main,left&&{alignSelf:"flex-start"}]}>
        <Image
          style={styles.person}
          source={PERSON}
        />
    {cam&&    <View
          style={styles.image}>
        </View>}
      </View>
    );
};

const styles = StyleSheet.create({
    main:{
      height: RF(80),
      alignSelf: 'center',
      borderRadius: RF(150),
      width: RF(80),
      marginTop: RF(15),
      marginBottom: RF(15),
    },
    person:
    {
        height: RF(80),
        overflow: 'hidden',
        alignSelf: 'center',
        borderRadius: RF(150),
        width: RF(80),
      },
      image:{
        backgroundColor: COLORS.VERYLIGHTGRAY,
        height: RF(30),
        width: RF(30),
        position: 'absolute',
        bottom: -10,
        zIndex: 999999,
        right: -3,
        borderRadius: RF(30),
        alignItems: 'center',
        justifyContent: 'center',
      }
    });
export default ProfileComponent;
