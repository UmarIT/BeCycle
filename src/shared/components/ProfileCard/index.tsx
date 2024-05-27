import {PERSON} from '@assets/images';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import {setUser} from '@redux/reducers/userReducer';
import {navigate} from '@services/nav.service';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {ROUTES} from '@utils/routes';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

const ProfileCard = ({btnTitle}:any) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%'
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            navigate(ROUTES.PROFILEUPLOADS);
          }}>
          <Image
            source={PERSON}
            style={{
              height: RF(70),
              borderRadius: RF(40),
              width: RF(70),
              marginRight: RF(8),
            }}
          />
        </Pressable>
        <View>
          <View>
            <CustomText size={18} style={{...GST.WEIGHT700}}>
              Caetano Veloso
            </CustomText>
            <CustomText>@caetanoveloso</CustomText>
          </View>
        </View>
      </View>

      <View style={{width: '23%'}}>
        <CustomButton
          size={10}
          height={RF(29)}
          bgColor={COLORS.LIGHTGREEN}
          color={COLORS.BLACK}
          text={btnTitle||"Edit"}
          onPress={() => {
            navigate(ROUTES.EDITPROFILE);
          }}
        />
      </View>
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

export default ProfileCard;
