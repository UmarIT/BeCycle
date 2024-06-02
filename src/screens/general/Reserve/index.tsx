import {Alert, FlatList,  Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Modal from "react-native-modal";

import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import FastImage from 'react-native-fast-image';
import {PRESSICON} from '@assets/icons';
import Wrapper from '@components/Wrapper';
import {GST} from '@theme/globalStyles';
import Calender from './calender';
import {navigate} from '@services/nav.service';
import { ROUTES } from '@utils/routes';
import CustomModal from '@components/CustomModal/CustomModal';
const Reserve = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
  const [expand, setExpand] = useState(false)
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
          <TouchableOpacity
          onPress={()=>{
            // 
            setModalVisible(true)
          }}
            style={{
              backgroundColor: COLORS.WHITE,
              paddingVertical: RF(6),
              paddingHorizontal: RF(13),

              borderRadius: RF(20),
            }}>
            <CustomText size={11} color={COLORS.darkBlue}>
              Reservar
            </CustomText>
          </TouchableOpacity>
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
          marginTop: RF(10),
          width: '100%',
          height:expand?"44%":"20%",
        }}>
        <Calender onExpand={()=>setExpand(!expand)} />
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
     
      <CustomModal
    
        show={modalVisible}
        backButton={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
       
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Estás segura de querer entrar a esta lista de espera?</Text>

            <View
            style={{
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:"center",
            width:RF(170),
            marginTop:RF(50)
            }}
            >
              <TouchableOpacity
              onPress={()=> setModalVisible(false)}
              style={{
                width:RF(70),
                height:RF(30),
                borderWidth:1,
                borderColor:COLORS.darkBlue,
                borderRadius:RF(20),
                alignItems:"center",
                justifyContent:"center"
              }}
              >
                <Text
                style={{
                  fontSize:20,
                  color:COLORS.darkBlue
                }}
                >No</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=> {
                setModalVisible(false)
                navigate(ROUTES.CONFIRMRESERVER)
              }}
              style={{
                width:RF(70),
                height:RF(30),
                borderWidth:1,
                borderColor:COLORS.darkBlue,
                backgroundColor:COLORS.darkBlue,
                borderRadius:RF(20),
                alignItems:"center",
                justifyContent:"center"
              }}
              >
                <Text
                style={{
                  fontSize:20,
                  color:COLORS.whiteFF
                }}
                >Si</Text>
              </TouchableOpacity>


            </View>
       
          </View>
    
      </CustomModal>
      
  
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: RF(230),
    height: RF(180),
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf:"center",
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize:24,
    textAlign: 'center',
    color:'#00284D'
  },
});
