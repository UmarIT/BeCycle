import {RF} from '@theme/responsive';
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RenderItem from './sections/renderItem';

const FeedLastSection = () => {
  return (
    <View>
      <FlatList
        data={[1, 1, 1]}
        horizontal
        contentContainerStyle={styles.flatlist}
        renderItem={() => {
          return <RenderItem />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    flatlist:{paddingLeft:RF(10)}

});

export default FeedLastSection;
