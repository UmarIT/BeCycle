import {
  MESSSAGE,
  NOTIFICATION,
  SEARCH,
} from '@assets/icons';
import CustomText from '@components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {navigate} from '@services/nav.service';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

const Header = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        // backgroundColor: 'green',
        paddingHorizontal: RF(20),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
      <View style={{width: '50%', alignItems: 'flex-start'}}>
        <CustomText
          size={35}
          color={COLORS.darkBlue}
          style={styles.boldHeading}>
          be cycle
        </CustomText>
      </View>
      <View style={{width: '50%', alignItems: 'flex-end'}}>
        <CustomText
          size={16}
          color={COLORS.darkBlue}
          style={styles.boldHeading}>
          Michelle Cohen
        </CustomText>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT400,
  },
});

//make this component available to the app
export default Header;
