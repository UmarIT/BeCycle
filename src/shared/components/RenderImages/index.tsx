import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {RF} from '@theme/responsive';
interface props {
  item?: any[];
}
const RenderImages = (props: props) => {
  const {item} = props;
  return (
    <View style={styles.rowView}>
      {item?.map((item: number | Source | undefined, index: any) => (
        <View style={styles.innerViewStyles} key={index}>
          <FastImage
            source={item}
            resizeMode="cover"
            style={styles.usersIconStyles}
          />
        </View>
      ))}
    </View>
  );
};

export default RenderImages;

const styles = StyleSheet.create({
  rowView: {flexDirection: 'row'},
  innerViewStyles: {
    height: RF(45),
    width: RF(45),
    marginRight: RF(8),
    borderRadius: RF(50),
    overflow: 'hidden',
  },
  usersIconStyles: {height: '100%', width: '100%'},
});
