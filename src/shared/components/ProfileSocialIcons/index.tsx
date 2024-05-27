import { FB, INSTAGRAM, MESSAGE, TIKTOK, X } from '@assets/icons';
import CustomText from '@components/CustomText';
import { COLORS } from '@theme/colors';
import { GST } from '@theme/globalStyles';
import { RF } from '@theme/responsive';
import React  from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const ProfileSocialIcons = () => {
    return (
        <View>
        <View style={styles.main}>
        <Pressable style={styles.imagePress}>
            <Image source={MESSAGE} resizeMode='contain' style={styles.image} />
        </Pressable>
        <Pressable style={styles.imagePress}>
            <Image source={INSTAGRAM} resizeMode='contain' style={styles.image} />
        </Pressable>
        <Pressable style={styles.imagePress}>
            <Image source={X} resizeMode='contain' style={styles.image} />
        </Pressable>
        <Pressable style={styles.imagePress}>
            <Image source={FB} resizeMode='contain' style={styles.image} />
        </Pressable>
        <Pressable style={styles.imagePress}>
            <Image source={TIKTOK} resizeMode='contain' style={styles.image} />
        </Pressable>
     

     
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={styles.outter}>
            <CustomText size={16} style={styles.weight700}>36</CustomText>
            <CustomText size={10}>videos</CustomText>
        </View>
        <View style={styles.outter}>
            <CustomText size={16} style={styles.weight700}>15</CustomText>
            <CustomText  size={10}>Clashes won</CustomText>
        </View>
        <View style={styles.outter}>
            <CustomText size={16} style={styles.weight700}>120</CustomText>
            <CustomText  size={10}>Following</CustomText>
        </View>
        <View style={styles.outter}>
            <CustomText size={16} style={styles.weight700}>15,210</CustomText>
            <CustomText  size={10}>Followers</CustomText>
        </View>
        <View style={styles.outter}>
            <CustomText size={16} style={styles.weight700}>3,5M</CustomText>
            <CustomText  size={10}>Total Views</CustomText>
        </View>
    

      </View>
      </View>
    );
};


const styles = StyleSheet.create({
    outter:{paddingLeft:RF(10)},
    weight700:{...GST.WEIGHT700},
    image:{height:RF(15), width:RF(15), alignSelf:"center"},
    imagePress:{height:RF(35), marginLeft:RF(6), width:RF(35), backgroundColor:COLORS.LIGHTGREEN, borderRadius:RF(30), alignItems:"center", justifyContent:'center'},
    main:{marginVertical:RF(15), flexDirection:'row'},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default ProfileSocialIcons;
