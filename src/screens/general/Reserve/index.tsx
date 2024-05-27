import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import FastImage from 'react-native-fast-image';
import {PRESSICON} from '@assets/icons';
import Wrapper from '@components/Wrapper';
import {GST} from '@theme/globalStyles';
import Calender from './calender';

const Reserve = () => {
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
      <>
        <CustomText
          size={15}
          color={COLORS.darkBlue}
          style={{
            marginHorizontal: RF(18),
            ...GST.WEIGHT400,
            marginVertical: RF(3),
          }}>
          7:00 AM
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.darkBlue,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: RF(80),
            borderRadius: RF(28),
            padding: RF(15),
          }}>
          <View
            style={{
              flexDirection: 'row',
              //     backgroundColor: 'green',
              justifyContent: 'flex-start',
              width: '70%',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: RF(55),
                width: RF(55),
                backgroundColor: COLORS.WHITE,
                borderRadius: RF(50),
              }}
            />
            <View style={{marginHorizontal: RF(10)}}>
              <CustomText
                size={12}
                color={COLORS.WHITE}
                style={styles.headingStyles}>
                Nombre de la coach
              </CustomText>
              <CustomText
                size={9}
                color={COLORS.WHITE}
                style={[styles.headingStyles, {marginTop: RF(10)}]}>
                5 lugares disponibles
              </CustomText>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.WHITE,
              paddingVertical: RF(6),
              paddingHorizontal: RF(13),

              borderRadius: RF(20),
            }}>
            <CustomText size={11} color={COLORS.darkBlue}>
              Reservar
            </CustomText>
          </View>
        </View>
      </>
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
          Reservar
        </CustomText>
      </View>
      <View
        style={{
          // marginHorizontal: RF(20),
          marginTop: RF(10),
          width: '100%',
          height: RF(90),
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Calender />
      </View>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          backgroundColor: COLORS.WHITE,
          flexGrow: 1,
        }}>
        <View
          style={{
            marginTop: RF(30),
            paddingHorizontal: RF(15),
          }}>
          <FlatList
            data={DATA}
            keyExtractor={index => index.toString()}
            ItemSeparatorComponent={() => <View style={{height: RF(25)}} />}
            renderItem={({item}) => <RenderItem />}
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Reserve;

const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT300,
    width: RF(80),
    textAlign: 'center',
  },
  headingStyles: {
    ...GST.WEIGHT600,
  },
});
