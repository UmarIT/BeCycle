import {PRESSICON} from '@assets/icons';
import ClashArena from '@components/ClashArena';
import CustomText from '@components/CustomText';
import FeedLastSection from '@components/FeedLastSection';
import Header from '@components/Header';
import Wrapper from '@components/Wrapper';
import {setUser} from '@redux/reducers/userReducer';
import {navigate} from '@services/nav.service';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper noPaddingBottom bgColor={COLORS.WHITE}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: RF(15),
          backgroundColor: COLORS.WHITE,
          flexGrow: 1,
        }}>
        <View
          style={{
            marginTop: RF(30),
            backgroundColor: COLORS.darkBlue,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: RF(20),
            padding: RF(15),
            paddingHorizontal: RF(20),
            borderRadius: RF(20),
          }}>
          <Pressable
            onPress={() => {
              navigate(ROUTES.STORE);
              // dispatch(setUser(null));
            }}>
            <FastImage
              source={PRESSICON}
              tintColor={COLORS.WHITE}
              resizeMode="contain"
              style={{width: RF(55), height: RF(55)}}
            />
          </Pressable>
          <View style={{alignItems: 'center'}}>
            <CustomText
              size={30}
              color={COLORS.WHITE}
              // style={styles.boldHeading}
            >
              17
            </CustomText>
            <CustomText
              size={10}
              color={COLORS.WHITE}
              // style={styles.boldHeading}
            >
              Clases restantes
            </CustomText>
          </View>
        </View>
        <View style={{marginHorizontal: RF(20), marginTop: RF(30)}}>
          <CustomText
            size={25}
            color={COLORS.darkBlue}
            // style={styles.boldHeading}
          >
            Sesiones
          </CustomText>
        </View>
        <View
          style={{
            marginTop: RF(30),
            // alignItems: 'flex-end',
            marginHorizontal: RF(20),
            // padding: RF(10),
            height: RF(38),
            backgroundColor: '#F0F2F4',
            borderRadius: RF(20),
          }}>
          <View
            style={{
              backgroundColor: COLORS.darkBlue,
              alignSelf: 'flex-end',
              width: '55%',
              height: '100%',
              borderRadius: RF(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              size={16}
              color={COLORS.WHITE}
              // style={styles.boldHeading}
            >
              Pasadas
            </CustomText>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: RF(20),
            marginTop: RF(30),
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <CustomText
            size={10}
            color={COLORS.darkBlue}
            // style={styles.boldHeading}
          >
            Aún no tienes clases pasadas
          </CustomText>
        </View>
        <View style={{height: RF(15)}} />
      </ScrollView>
    </Wrapper>
  );
};

export default Home;
