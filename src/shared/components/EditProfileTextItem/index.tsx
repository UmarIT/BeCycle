import CustomText from '@components/CustomText';
import { COLORS } from '@theme/colors';
import { RF } from '@theme/responsive';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const EditProfileTextItem = ({title,name}:any) => {
    return (
        <View style={{flexDirection:'row', marginTop:RF(10), justifyContent:"space-between",}}>
        <CustomText>
        {title}     {name}
        </CustomText>
        <Pressable style={{flexDirection:'row', alignItems:"center"}}>
            <CustomText color={COLORS.BLUE}>
            Change  {' '}
            </CustomText>
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default EditProfileTextItem;
