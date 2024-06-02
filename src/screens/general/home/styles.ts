import {COLORS} from '@theme/colors';
import { RF } from '@theme/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.WHITE_BG,
  },
  
  containernew: {
    flexDirection: 'row',
    width: RF(270),
    backgroundColor: '#F0F3F4',
    height: RF(35),
    marginHorizontal: RF(20),
    borderRadius: RF(15),
    marginVertical: RF(10),
  },
  button: {
    height: RF(35),
    width: RF(135),
    borderRadius: RF(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: COLORS.darkBlue,
  },
  inactiveButton: {
    backgroundColor: COLORS.lightGray, // assuming a light gray color for inactive state
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 18,
  },
  activeButtonText: {
    color: COLORS.whiteFF,
  },
  inactiveButtonText: {
    color: COLORS.darkGray, // assuming a dark gray color for inactive text
  },
});
