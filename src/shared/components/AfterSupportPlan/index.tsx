import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import SupportCard from '@components/SupportCard';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface AfterSupportPlanProps {
  onPress: () => void;
}

const AfterSupportPlan = ({onPress}: AfterSupportPlanProps) => {
  return (
    <View>
      <View
        style={{
          paddingVertical: RF(10),
          borderBottomWidth: 1,
          borderBottomColor: COLORS.DARKGRAY,
          paddingHorizontal: RF(10),
        }}>
        <CustomText style={{...GST.WEIGHT700}}>
          Caetano Veloso currently has 3,510 supporters
        </CustomText>
        <CustomText style={{...GST.WEIGHT800}}>You are a supporter.</CustomText>
      </View>
      <View style={{paddingHorizontal: RF(10)}}>
        <CustomText
          size={16}
          style={{...GST.WEIGHT700, marginTop: RF(10), marginBottom: RF(4)}}>
          Your Current Support
        </CustomText>
      </View>
      <View style={{paddingHorizontal: RF(10)}}>
        <SupportCard
          color={COLORS.BLUE}
          width={RF(80)}
          size={9}
          btnTitle={'Cancel Support'}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default AfterSupportPlan;
