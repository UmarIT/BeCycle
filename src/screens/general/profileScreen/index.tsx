import Wrapper from '@components/Wrapper';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import React, {} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <Wrapper noPaddingBottom><ScrollView>
      <View><Text>screen</Text></View>
    </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: RF(25),
    // top:RF(95),
    zIndex: 999999999,
    paddingHorizontal: RF(10),
    backgroundColor: COLORS.BLACK,
    // position:"absolute",
    // overflow:"hidden"
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    height: 100,
    backgroundColor: '#E6DDC4',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});
export default ProfileScreen;
