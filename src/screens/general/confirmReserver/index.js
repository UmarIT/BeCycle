import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '@theme/colors';
import Wrapper from '@components/Wrapper';
import Header from '@components/Header';
import {RF} from '@theme/responsive';
import {CHECKICON, LOGOAPP} from '@assets/icons';

const ConfirmReserver = ({navigation}) => {
  return (
    <Wrapper noPaddingBottom bgColor={COLORS.WHITE}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: RF(15),
          backgroundColor: COLORS.WHITE,
          flexGrow: 1,
        }}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Image
            source={LOGOAPP}
            // tintColor={COLORS.WHITE
            resizeMode="contain"
            style={{width: RF(100), height: RF(100)}}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            width: RF(190),
            alignSelf: 'center',
            lineHeight: 30,
            marginTop: RF(65),
            color: '#ff6800',
          }}>
          Has sido agregada a la lista de espera
        </Text>
        <View
          style={{
            alignSelf: 'center',
            marginTop: RF(70),
          }}>
          <Image
            source={CHECKICON}
            // tintColor={COLORS.WHITE
            resizeMode="contain"
            style={{width: RF(85), height: RF(85)}}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <Text style={styles.buttonText}>Ver reservas</Text>
        </TouchableOpacity>
      </ScrollView>
    </Wrapper>
  );
};

export default ConfirmReserver;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: COLORS.darkBlue,
    // padding: 20,
    alignItems: 'center',
    width: RF(220),
    height: RF(40),
    // alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: RF(40),
    borderRadius: RF(20),
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
