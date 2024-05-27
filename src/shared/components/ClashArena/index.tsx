import React, {useCallback, useRef, useState} from 'react';
import {View, StyleSheet,} from 'react-native';
import FeedSectionTop from '@components/FeedSectionTop';
import {RF} from '@theme/responsive';


const ClashArena = ({title,cardWidth}:any) => {
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


  return (
    <View style={styles.main}>
      <FeedSectionTop title={title}/>
  
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

export default ClashArena;
