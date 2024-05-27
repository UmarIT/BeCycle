import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import RenderItem from './sections/renderItem';
import {PERSON1, PERSON2} from '@assets/images';
import {RF} from '@theme/responsive';
import FeedSectionTop from '@components/FeedSectionTop';
let DATAARR = [
  {
    name: 'Taylor Swift',
    image: PERSON1,
  },
  {
    name: 'Laufey',
    image: PERSON2,
  },
  {
    name: 'Vira Talisa',
    image: PERSON1,
  },
  {
    name: 'Taylor Swift',
    image: PERSON1,
  },
  {
    name: 'Laufey',
    image: PERSON2,
  },
  {
    name: 'Vira Talisa',
    image: PERSON1,
  },
];
const TopTalentFeed = () => {
  return (
    <View style={{paddingTop: RF(15)}}>
      <FeedSectionTop title="Top Talents" onIconPress={() => {}} />
      <FlatList
        horizontal
        data={DATAARR}
        renderItem={({item}) => {
          return <RenderItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TopTalentFeed;
