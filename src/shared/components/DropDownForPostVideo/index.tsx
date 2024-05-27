import {
  Image,
  StyleSheet,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {DROPDOWN} from '@assets/images';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
interface dropDownProps {
  placeholder?: string;
  title?: string;
  textLimit?: number;
  placeholderTextColor?: string;
  multiline?: boolean;
  style?: ViewStyle;
  containerStyles?: ViewStyle;
  containerStyle?: ViewStyle;
  value?: object;
  data?: Array<{label: any; value: any}>;
  onChange?: (val?: any) => void | undefined;
  styleDropdown?: any;
}
const DropDownForPostVideo = (props: dropDownProps) => {
  const {
    placeholder,
    placeholderTextColor,
    data = [],
    onChange = () => {},
    value,
    containerStyles,
    title,
    styleDropdown,
  } = props;
  const [value2, setValue2] = useState<any>({label: 'Public', value: '1'});
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={[styles.mainView, containerStyles]}>
      <CustomText size={14} style={styles.innerTxt1}>
        {title}
      </CustomText>
    </View>
  );
};

export default DropDownForPostVideo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    marginTop: RF(10),
    height: RF(40),
    borderColor: 'gray',
    backgroundColor: COLORS.VERYDARKFORINPUT,
    borderRadius: 8,

    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: RF(16),
    // color: COLORS.WHITE,
  },
  selectedTextStyle: {
    fontSize: RF(14),
    fontWeight: '500',
    color: COLORS.WHITE,
    marginHorizontal: RF(6),
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  mainView1: {paddingHorizontal: GST.px5.paddingHorizontal},
  headerTxt: {fontWeight: GST.WEIGHT800.fontWeight},
  videoTitle: {marginTop: RF(15)},
  videoTxt: {fontWeight: GST.WEIGHT700.fontWeight},
  inputStyle: {
    height: RF(35),
    marginTop: RF(8),
    backgroundColor: COLORS.VERYDARKFORINPUT,
  },
  txtCount1: {
    fontWeight: GST.WEIGHT700.fontWeight,
    textAlign: 'right',
    marginTop: RF(7),
  },
  descView: {marginTop: RF(10)},
  descTxt: {fontWeight: GST.WEIGHT700.fontWeight},
  customInput: {
    textAlignVertical: 'top',
    height: RF(100),
    backgroundColor: COLORS.VERYDARKFORINPUT,
    fontSize: RF(13),
    color: COLORS.WHITE,
    fontWeight: GST.WEIGHT500.fontWeight,
    borderRadius: RF(7),
    paddingTop: RF(10),
    paddingHorizontal: RF(12),
  },
  otherView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  visiView: {width: '47%'},
  innerTxt1: {
    fontWeight: GST.WEIGHT700.fontWeight,
    textAlign: 'left',
  },
  containerStyles: {
    backgroundColor: COLORS.VERYDARKFORINPUT,
    borderBottomRightRadius: RF(10),
    borderBottomLeftRadius: RF(10),
    borderWidth: 0,
    overflow: 'hidden',
  },
  itemTextStyle: {
    color: COLORS.VERYLIGHTGRAY,
    fontSize: RF(14),
    height: RF(50),
    paddingVertical: 0,
    marginVertical: 0,
  },
  itemContainerStyles: {
    backgroundColor: COLORS.VERYDARKFORINPUT,
    height: RF(50),
  },
  img1: {width: RF(23), height: RF(23)},
  innerView2: {marginTop: RF(15)},
  tagTxt: {
    fontWeight: GST.WEIGHT700.fontWeight,
    textAlign: 'left',
  },
  innerView3: {
    backgroundColor: COLORS.VERYDARKFORINPUT,
    height: RF(40),
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: RF(10),
    paddingVertical: RF(5),
    borderRadius: RF(5),
    marginTop: RF(8),
  },
  innerView4: {
    padding: RF(6),
    borderRadius: RF(5),
    backgroundColor: COLORS.BLUE,
    flexDirection: 'row',
  },
  txt1: {
    fontWeight: GST.WEIGHT500.fontWeight,
    textAlign: 'left',
    color: COLORS.BLACK,
  },
  img2: {
    marginTop: RF(2),
    width: RF(14),
    height: RF(14),
    marginLeft: RF(5),
  },
  innerView5: {marginTop: RF(15)},
  checkBoxView1: {marginTop: RF(15)},
  previewTxt: {marginTop: RF(10)},
  txt2: {
    fontWeight: GST.WEIGHT700.fontWeight,
    textAlign: 'center',
    marginBottom: RF(15),
  },
  catView: {width: '47%'},
  catTxt: {
    fontWeight: GST.WEIGHT700.fontWeight,
    textAlign: 'left',
  },
  dropDownIcon: {width: RF(23), height: RF(23)},
  mainView: {width: '100%'},
});
