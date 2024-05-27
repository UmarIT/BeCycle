import {StyleSheet, TextInputProps, View} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomText from '@components/CustomText';
import CustomInput from '@components/CustomInput';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
interface InputForPostVideoProps extends TextInputProps {
  placeholder?: string;
  title?: string;
  textLimit?: number;
  placeholderTextColor?: string;
  multiline?: boolean;
  style?: any;
  containerStyle?: any;
  titleSize?: any;
  titleStyle?: any;
}

//         const SearchBar = (props: SearchBarProps) => {
// const {placeholder, searchStyles, placeholderTextColor} = props;
const InputForPostVideo = (props: InputForPostVideoProps) => {
  const {
    placeholder,
    textLimit = 20,
    placeholderTextColor,
    title,
    multiline,
    style,
    containerStyle,
    titleSize,
    titleStyle,
  } = props;

  const [value, setValue] = useState<any>({label: 'Public', value: '1'});
  const [value2, setValue2] = useState<any>({label: 'Public', value: '1'});
  const [isFocus, setIsFocus] = useState(false);

  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [txt, setTxt] = useState('');
  const [videodesc, setVideodesc] = useState('');
  const [newState, setnewState] = useState(false);
  const [newState12, setnewState12] = useState(false);

  const data = [
    {label: 'Public', value: '1'},
    {label: 'Private', value: '2'},
  ];
  const CustomInputRef = useRef<any>(null);
  return (
    <View style={[styles.videoTitle, containerStyle]}>
      <CustomText size={titleSize || 14} style={titleStyle || styles.videoTxt}>
        {title}
      </CustomText>
      <CustomInput
        CustomInputRef={CustomInputRef}
        onChangeText={val => {
          if (val?.length <= textLimit) {
            setTxt(val);
          }
        }}
        {...props}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        numberOfLines={1}
        multiline={multiline}
        style={[styles.inputStyle, style]}
      />
      <View>
        <CustomText
          size={14}
          style={[
            styles.txtCount1,
            {
              color:
                txt?.length === Number(textLimit) ? COLORS.RED : COLORS.WHITE,
            },
          ]}>
          {`${txt?.length}/${textLimit}`}
        </CustomText>
      </View>
    </View>
  );
};

export default InputForPostVideo;

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
  mainView: {paddingHorizontal: GST.px5.paddingHorizontal},
  headerTxt: {fontWeight: GST.WEIGHT800.fontWeight},
  videoTitle: {marginTop: RF(15)},
  videoTxt: {fontWeight: GST.WEIGHT700.fontWeight},
  inputStyle: {
    textAlignVertical: 'top',

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
    marginTop: RF(8),
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
});
