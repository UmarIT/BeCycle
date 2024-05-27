import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import RenderItem from './sections/renderItem';

const ProfileClashCard = () => {
  return (
    <View>
      <FlatList
        data={[1, 1, 1,1, 1, 1,1, 1, 1,1, 1, 1]}
        renderItem={() => {
          return <RenderItem />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileClashCard;
