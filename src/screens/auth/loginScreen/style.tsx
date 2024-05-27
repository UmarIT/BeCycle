import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.BLACK,
  },
  conContainerStyles: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  innerView: {
    height: '50%',
    justifyContent: 'flex-end',
    marginBottom: RF(60),
    width: '100%',
  },
  rowView: {flexDirection: 'row', justifyContent: 'space-around'},
  btn: {width: '40%'},
  btnStyles: {width: '40%', backgroundColor: COLORS.darkBlue},
  // main: {paddingHorizontal: RF(15)},
});
