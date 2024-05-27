import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
// import Video from 'react-native-video';
// import FastImage from 'react-native-fast-image';
import {CROSS} from '@assets/images';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import {PLAYICON, SCISSOR, TICK} from '@assets/icons';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
interface videoPreviewProps {
  url: string;
  onPressCross?: () => void;
}
const VideoPreview = (props: videoPreviewProps) => {
  const {url, onPressCross} = props;
  const [play, setPlay] = useState(false);
  return (
    <Pressable onPress={() => setPlay(!play)} style={styles.mainView}>

      <View style={styles.topView}>
        <Pressable onPress={onPressCross} style={styles.crossView}>
          {/* <FastImage
            resizeMode="contain"
            source={CROSS}
            tintColor={COLORS.WHITE}
            style={styles.crossIcon}
          /> */}
        </Pressable>
        <View style={styles.previewTxtView}>
          <CustomText size={17} color={COLORS.WHITE} style={styles.previewTxt}>
            Preview your video
          </CustomText>
        </View>
      </View>
      {play && (
        <Pressable onPress={() => setPlay(false)} style={styles.playBtn}>
          <FastImage
            resizeMode="contain"
            source={PLAYICON}
            tintColor={COLORS.BLACK}
            style={styles.icon}
          />
        </Pressable>
      )}
      <View style={styles.btnsView}>
        <View style={styles.innerView}>
          <View style={styles.btnView1}>
            <FastImage
              resizeMode="contain"
              source={SCISSOR}
              tintColor={COLORS.BLACK}
              style={styles.icon}
            />
          </View>
          <CustomText size={11} color={COLORS.WHITE} style={styles.subHeading}>
            Edit
          </CustomText>
        </View>
        <View style={styles.innerView}>
          <View style={styles.btnView}>
            <FastImage
              resizeMode="contain"
              source={TICK}
              tintColor={COLORS.BLACK}
              style={styles.icon}
            />
          </View>
          <CustomText size={11} color={COLORS.WHITE} style={styles.subHeading}>
            Post
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export default VideoPreview;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  videoStyles: {height: '100%', width: '100%'},
  subHeading: {...GST.WEIGHT600, marginTop: RF(7)},
  previewTxt: {...GST.WEIGHT500},
  btnView: {
    marginHorizontal: RF(20),

    backgroundColor: COLORS.LIGHTGREEN,
    height: RF(60),
    width: RF(60),
    borderRadius: RF(100),
    padding: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView1: {
    marginHorizontal: RF(20),
    backgroundColor: COLORS.BLUE,
    height: RF(60),
    width: RF(60),
    borderRadius: RF(100),
    padding: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    height: RF(60),
    width: RF(60),
    borderRadius: RF(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {height: RF(25), width: RF(25)},
  crossIcon: {height: RF(20), width: RF(20)},
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsView: {
    height: RF(100),
    width: '100%',
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 70,
    width: '62%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: RF(25),
  },
  crossView: {
    backgroundColor: COLORS.WHITE_LIGHT,
    borderRadius: RF(20),
    padding: RF(10),
  },
  previewTxtView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
