import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme/responsive';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';

export default function FollowingItem({title, userName, Profile}:any) {
  return (
    <View
      style={styles.main}>
      <View style={styles.innerMain}>
        <Image
          source={Profile}
          style={styles.image}
        />
        <View style={styles.text}>
          <CustomText>{title}</CustomText>
          <CustomText>{userName}</CustomText>
        </View>
      </View>
      <View style={{width: '20%'}}>
        <CustomButton
          style={styles.btn}
          height={RF(20)}
          size={10}
          text="following"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:RF(10)
      },
      btn:{
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius:RF(3)
      },
      innerMain:{flexDirection: 'row', alignItems: 'center'},
      image:{height: RF(50), width: RF(50), borderRadius: RF(50)},
      text:{paddingHorizontal: RF(10)}

});
