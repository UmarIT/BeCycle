import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
// import LinearGradient from 'react-native-linear-gradient';
import {GST} from '@theme/globalStyles';
import {SIZING} from '@theme/sizing';
const GRADIENT = ['transparent','rgba(52, 52, 52, 0.3)', COLORS.VERYDARK];
interface RenderItemProps {
  item: any;
  width?:any;
  height?:any;
}

export default function RenderItem({item,width,height}: RenderItemProps) {
  const {postNo, name, username1, username2, time, vote, likes} = item;
  return (
    <View style={[styles.container,{height: height||RF(220)}]}>
      <View style={{width:width||RF(220), flexDirection:'row', height:RF(20)}}>
        <View style={{width:"50%", backgroundColor:COLORS.LIGHTGREEN}}>

        </View>
        <View style={{width:"50%", backgroundColor:COLORS.BLUE}}>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  innerTime: {
    backgroundColor: COLORS.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RF(2),
    paddingVertical: RF(2),
    borderRadius: RF(2),
  },
  timeOuter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tag: {flexDirection: 'row', paddingBottom: RF(3)
    ,
    paddingTop:RF(4)
  },
  container: {
    flex: 1,
    borderRadius: RF(8),
    height: RF(220),
    marginRight: RF(20),
    backgroundColor: 'red',
    overflow: 'hidden',
    justifyContent:'flex-end'

  },
  inner: {
    height: RF(129),
    position: 'absolute',
    justifyContent:'flex-end',
    paddingBottom:RF(10),
    ...SIZING.w100,
    bottom: 0,
    paddingHorizontal: RF(5),
  },
  postNo: {
    marginTop: RF(10),
    borderBottomRightRadius: RF(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHTGREEN,
    width: RF(18),
    height: RF(18),
    marginBottom:RF(2)
  },
  username: {
    ...GST.WEIGHT700,
  },

  gradient: {
    ...SIZING.w100,
    height: RF(200),
    position: 'absolute',
    bottom: 0,
  },
  main: {
    height: RF(214),
    borderRadius: RF(8),

    backgroundColor: COLORS.DARKGRAY,
  },
});
