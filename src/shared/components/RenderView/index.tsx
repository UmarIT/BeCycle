import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {PERSON} from '@assets/images';
import {COLORS} from '@theme/colors';
interface MyArrayOfObjects {
  title?: string;
  img?: string;
}

interface Props {
  data?: MyArrayOfObjects[];
  onPress?: (index: any) => void;
  isChecked?: boolean;
  itemIndex?: number;
}
const RenderView = (props: Props) => {
  const {data, onPress = () => {}, itemIndex} = props;
  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        keyExtractor={index => String(index)}
        horizontal
        contentContainerStyle={styles.flStyles}
        renderItem={({item, index}:any) => (
          <Pressable
            onPress={() => onPress(index)}
            style={[
              styles.mainTouchable,
              {borderColor: itemIndex === index ? COLORS.BLUE : undefined},
            ]}>
            <View>
              <Image
                resizeMode="contain"
                source={item?.img}
                tintColor={
                  itemIndex === index ? COLORS.BLUE : COLORS.VERYLIGHTGRAY
                }
                style={styles.img}
              />
            </View>
            <CustomText
              size={20}
              style={[
                styles.boldHeading,
                {
                  color:
                    itemIndex === index ? COLORS.WHITE : COLORS.VERYLIGHTGRAY,
                },
              ]}>
              {item.title}
            </CustomText>
          </Pressable>
        )}
      />
    </View>
  );
};

export default RenderView;

const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT400,
    fontSize: RF(12),
    marginTop: RF(2),
    color: COLORS.VERYLIGHTGRAY,
  },
  mainView: {width: '100%', marginTop: RF(12), paddingHorizontal:RF(8)},
  flStyles: {flex: 1, justifyContent: 'space-between'},
  mainTouchable: {
    borderWidth: RF(2),
    backgroundColor: COLORS.VERYDARK,
    alignSelf: 'flex-start',
    height: RF(70),
    width: Dimensions.get('screen').width/4.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(6),
  },
  img: {height: RF(20), width: RF(20), marginBottom: RF(4)},
});
