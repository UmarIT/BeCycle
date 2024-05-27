import AfterSupportPlan from '@components/AfterSupportPlan';
import BeforeSupportPlan from '@components/BeforeSupportPlan';
import NoSupportPlan from '@components/NoSupportPlan';
import ProfileClashCard from '@components/ProfileClashCard';
import ProfileFavorites from '@components/ProfileFavorites';
import ProfileTabFilter from '@components/ProfileTabsFilter';
import ProfileUploads from '@components/ProfileUploads';
import {RF} from '@theme/responsive';
import {UPLOADSTABS} from '@utils/enums';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ProfileScreenScrollItems = ({
  tab,
  plans,
  noSupportPress,
  afterSupportPress,
  beforeSupportPress,
}: any) => {
  return (
    <View>
      {tab == UPLOADSTABS.upload && (
        <>
          <ProfileTabFilter />
          <ProfileUploads />
        </>
      )}
      {tab == UPLOADSTABS.clashes && (
        <>
          <ProfileTabFilter />

          <ProfileClashCard />
        </>
      )}
      {tab == UPLOADSTABS.favorites && (
        <>
          <ProfileTabFilter />
          <ProfileFavorites />
        </>
      )}
      {tab == UPLOADSTABS.support && (
        <View style={{}}>
          {plans == 1 && <NoSupportPlan onPress={noSupportPress} />}
          {plans == 3 && <AfterSupportPlan onPress={afterSupportPress} />}
          {plans == 2 && <BeforeSupportPlan onPress={beforeSupportPress} />}
          <View style={{height: RF(400)}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreenScrollItems;
