import React from 'react';
import {View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const CustomModal = props => {
  return (
    <ReactNativeModal
      isVisible={props.show}
      onBackButtonPress={props.backButton}
      onBackdropPress={props.backButton}
      onRequestClose={props.backButton}
      hasBackdrop
      backdropOpacity={0.7}
      animationIn={'fadeIn'}
      backdropColor="rgba(0,0,0,1)">
      <View style={props.style}>{props.children}</View>
    </ReactNativeModal>
  );
};

export default CustomModal;
