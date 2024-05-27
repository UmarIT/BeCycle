import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RF} from '@theme/responsive';
import {PERSON1, PERSON2} from '@assets/images';
import CustomText from '@components/CustomText';
import { GST } from '@theme/globalStyles';
import { COLORS } from '@theme/colors';

export default function RenderItem() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: RF(10),
          justifyContent: 'center',

        }}>
        <Image source={PERSON1} style={styles.image} />

        <Image
          source={PERSON2}
          style={[styles.image, {marginHorizontal: RF(4)}]}
        />

        <Image source={PERSON1} style={styles.image} />
    
      </View>
      <View style={{paddingHorizontal:RF(20)}}> 
      <CustomText size={16} style={{...GST.WEIGHT700}}>Punk Music</CustomText>
        <CustomText>A collection of punk content.</CustomText>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: RF(170),
    width: RF(230),
    backgroundColor: COLORS.VERYDARKFORINPUT,
    marginHorizontal: RF(5),
    borderRadius: RF(12),

  },
  image: {width: RF(60), height: RF(107), borderRadius: RF(8)},
});
