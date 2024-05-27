import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import FastImage from 'react-native-fast-image';
import {PRESSICON} from '@assets/icons';
import Wrapper from '@components/Wrapper';
import {GST} from '@theme/globalStyles';
import {navigate} from '@services/nav.service';
import {ROUTES} from '@utils/routes';

const Store = () => {
  const DATA = [
    {
      id: 1,
      title: '1 mes ilimitado',
      price: '$200',
    },
    {
      id: 2,
      title: '3 meses ilimitados',
      price: '$200',
    },
    {
      id: 3,
      title: '6 mes ilimitado',
      price: '$200',
    },
    {
      id: 4,
      title: '12 meses ilimitados',
      price: '$200',
    },
  ];
  const DATA2 = [
    {
      id: 1,
      title: '1 clase',
      disc: 'Vigencia 5 días',
      price: '$200',
    },
    {
      id: 2,
      title: '3 clases',
      disc: 'Vigencia 5 días',
      price: '$200',
    },
    {
      id: 3,
      title: '6 clases',
      disc: 'Vigencia',
      price: '$200',
    },
    {
      id: 4,
      title: '12 clases',
      disc: 'Vigencia 5 días',
      price: '$200',
    },
  ];
  const RenderItem = ({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          navigate(ROUTES.RESERVE);
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.darkBlue,
          alignSelf: 'flex-start',
          paddingVertical: RF(20),
          // height: '100%',
          width: '46%',
          borderRadius: RF(25),
        }}>
        <CustomText size={15} color={COLORS.WHITE} style={styles.boldHeading}>
          {item?.title}
        </CustomText>
        {item?.disc && (
          <CustomText
            size={10}
            color={COLORS.WHITE}
            style={[
              styles.boldHeading,
              {marginTop: RF(9), marginBottom: RF(4)},
            ]}>
            {item?.disc}
          </CustomText>
        )}

        <CustomText
          size={15}
          color={COLORS.WHITE}
          style={[styles.boldHeading, {marginTop: RF(10)}]}>
          {item?.price}
        </CustomText>
      </Pressable>
    );
  };
  return (
    <Wrapper noPaddingBottom bgColor={COLORS.WHITE}>
      <View
        style={{
          // marginHorizontal: RF(20),
          marginTop: RF(10),
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomText size={20} color={COLORS.darkBlue}>
          Tienda
        </CustomText>
      </View>

      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          marginBottom: RF(100),
          backgroundColor: COLORS.WHITE,
          flexGrow: 1,
          // paddingBottom: RF(100),
        }}>
        <View
          style={{
            marginTop: RF(30),
            paddingHorizontal: RF(15),
            //   backgroundColor: 'green',
            width: '100%',
            //   justifyContent: 'center',
            //   alignItems: 'center',
          }}>
          <CustomText size={16} color={COLORS.orange}>
            Membresías
          </CustomText>
          <View
            style={{
              marginTop: RF(25),
            }}>
            <FlatList
              data={DATA}
              keyExtractor={index => index.toString()}
              contentContainerStyle={{
                width: '100%',
                justifyContent: 'space-between',
                //       alignItems: 'center',

                //       backgroundColor: 'green',
              }}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              style={{width: '100%'}}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{height: RF(20)}} />}
              renderItem={({item}) => <RenderItem item={item} />}
            />
          </View>
          {/* <RenderItem /> */}
        </View>
        <View
          style={{
            marginTop: RF(20),
            paddingHorizontal: RF(15),
            //   backgroundColor: 'green',
            width: '100%',
            //   justifyContent: 'center',
            //   alignItems: 'center',
          }}>
          <CustomText size={16} color={COLORS.orange}>
            Paquetes
          </CustomText>
          <View
            style={{
              marginTop: RF(20),
            }}>
            <FlatList
              data={DATA2}
              keyExtractor={index => index.toString()}
              contentContainerStyle={{
                width: '100%',
                justifyContent: 'space-between',
                //       alignItems: 'center',
                paddingBottom: RF(50),

                //       backgroundColor: 'green',
              }}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              style={{width: '100%'}}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{height: RF(20)}} />}
              renderItem={({item}) => <RenderItem item={item} />}
            />
          </View>
          {/* <RenderItem /> */}
        </View>
        {/* <View
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
          <View>
            <FastImage
              source={PRESSICON}
              tintColor={COLORS.WHITE}
              resizeMode="contain"
              style={{width: RF(55), height: RF(55)}}
            />
          </View>
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
        <View style={{height: RF(15)}} /> */}
      </ScrollView>
    </Wrapper>
  );
};

export default Store;

const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT300,
    width: RF(80),
    textAlign: 'center',
  },
});
