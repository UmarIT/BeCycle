import {Image, Pressable, Share, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import {HEARTFILLICON, HEARTICON, SHAREICON} from '@assets/icons';
import {GST} from '@theme/globalStyles';
import {PERSON} from '@assets/images';
import Reactions from '@components/ReactionRow';

export default function RenderItem() {
  const [heart, setHeart] = useState(false);

  const heartPress = () => {
    if (heart) setHeart(false);
    else setHeart(true);
  };

  const share = async () => {
    const result = await Share.share({
      message: 'sharing...',
    });
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.image]}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: COLORS.VERYLIGHTGRAY,
              paddingVertical: RF(2),
              bottom: RF(4),
              right: 10,
              paddingHorizontal: RF(2),

              zIndex: 9999,
            }}>
            <CustomText>03:20</CustomText>
          </View>

          <Image source={PERSON} style={[styles.image, {width: '100%'}]} />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.title}>
            <CustomText size={16}>If You Could Read My Mind</CustomText>
            <View style={{paddingTop: RF(4)}}>
              <CustomText style={{...GST.WEIGHT500}} size={10}>
                Gordon Lightfoot
              </CustomText>
            </View>
          </View>

          <View style={styles.top8}>
            <CustomText numberOfLines={3} size={9}>
              Às vezes no silêncio da noite. Eu fico imaginando nós dois. Eu
              fico ali sonhando acordado. Juntando o antes, o agora e o depois.
            </CustomText>
          </View>
          <View style={styles.top8}>
            <CustomText size={9}>November 23, 2023 • 11:25pm</CustomText>
          </View>

          <Reactions
          vote={'1212'}
            style={styles.top9}
            share={share}
            heart={heart}
            heartPress={heartPress}
          />
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {paddingTop: RF(3)},
  line: {
    width: '100%',
    height: 0.6,
    backgroundColor: COLORS.GRAY,
    marginBottom: RF(20),
  },
  top8: {paddingTop: RF(8)},
  top9: {paddingTop: RF(9)},
  container: {flexDirection: 'row', height: RF(130)},
  image: {height: RF(120), width: '27%', borderRadius: RF(6)},
  innerContainer: {
    height: RF(170),
    width: '72%',
    backgroundColor: COLORS.BLACK,
    paddingLeft: RF(10),
  },
});
