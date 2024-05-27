import {RF} from '@theme/responsive';
import React, {useCallback, useRef, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import RenderItem from './sections/renderItem';
import FeedSectionTop from '@components/FeedSectionTop';
import {} from '@assets/images';
import {debounce} from 'lodash';
const TopCharts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef<any>();
  const onViewableItemsChanged = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      if (currentIndex != viewableItems[0].index) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  }, []);
  const scrollToIndex = (index: any) => {
    ref?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const rightPress = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <View style={styles.main}>
      <FeedSectionTop title="Top Chart" onIconPress={rightPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: RF(15),
  },
  next: {width: RF(15), height: RF(15)},

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default TopCharts;
