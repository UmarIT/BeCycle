import React from 'react';
import CustomText from '@components/CustomText';
import SupportCard from '@components/SupportCard';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {View, StyleSheet} from 'react-native';

interface BeforeSupportPlanProps {
  onPress: () => void;
}
const BeforeSupportPlan = ({onPress}: BeforeSupportPlanProps) => {
  return (
    <View>
      <View
        style={{
          paddingVertical: RF(10),
          borderBottomWidth: 1,
          borderBottomColor: COLORS.DARKGRAY,
          paddingHorizontal: RF(10),
        }}>
        <CustomText style={{...GST.WEIGHT600}}>
          Caetano Veloso currently has 3,510 supporters
        </CustomText>
      </View>
      <View style={{paddingHorizontal: RF(10)}}>
        <CustomText size={16} style={styles.plan}>
          Support Plans
        </CustomText>
      </View>
      <View style={{paddingHorizontal: RF(10)}}>
        <SupportCard
          btnTitle={'Join'}
          price="5"
          desc={`As vezes no silêncio da noite. Eu fico imaginando nós dois. Eu fico ali sonhando acordado. Juntando o antes, o agora e o depois.`}
          onPress={onPress}
          title={'Regular Support'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plan: {...GST.WEIGHT700, marginTop: RF(10), marginBottom: RF(5)},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default BeforeSupportPlan;
