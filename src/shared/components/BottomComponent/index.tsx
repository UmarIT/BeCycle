import {Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
// import {AnimatedCircularProgress} from 'react-native-circular-progress';
// const Pulse = require('react-native-pulse').default;

interface BottomComponentProps {
  onPressIn: () => void;
  onPressOut: () => void;
  pulseStart?: boolean;
}
const BottomComponent = (props: BottomComponentProps) => {
  const {onPressIn, onPressOut, pulseStart} = props;
  const countInterval: any = useRef<any>();
  const [count, setCount] = useState({
    count: 0,
    percent: 0,
  });
  const pulseCount = () => {
    setCount(prev => ({
      ...prev,
      count: prev?.count + 1,
      percent: prev?.percent + 5,
    }));
  };
  useEffect(() => {
    if (pulseStart === true) {
      countInterval.current = setInterval(() => {
        pulseCount();
      }, 1000);
    }
    return () => {
      clearInterval(countInterval);
    };
  }, [pulseStart]);
  const OnPressOutFunc = () => {
    clearInterval(countInterval);
    onPressOut();
  };
  return (
   <></>
  );
};

export default BottomComponent;

const styles = StyleSheet.create({
  subHeading: {...GST.WEIGHT500},
  mainView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  innerView: {
    alignSelf: 'flex-end',
    width: '60%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerView2: {
    backgroundColor: COLORS.BLACK,
    paddingBottom: RF(40),
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingLeft: RF(45),
    marginTop: RF(45),
    paddingTop: RF(10),
  },
  txtView: {
    marginLeft: '10%',
    alignItems: 'center',
  },
  otherView: {
    marginTop: RF(5),
    height: RF(5),
    width: RF(5),
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.WHITE,
    borderRadius: RF(50),
    borderWidth: RF(2),
  },
  txtView2: {
    alignItems: 'center',
    marginLeft: RF(40),
  },
  pressableView: {
    backgroundColor: COLORS.RED,
    height: RF(60),
    width: RF(60),
    borderRadius: RF(100),
  },
  circleView: {marginRight: RF(60), marginTop: RF(5)},
});
