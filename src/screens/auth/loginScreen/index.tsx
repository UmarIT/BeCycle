import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {styles} from './style';
import Wrapper from '@components/Wrapper';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import {RF} from '@theme/responsive';
import Input from '@components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {setUser} from '@redux/reducers/userReducer';
import {GST} from '@theme/globalStyles';
import LoginForgetPassword from '@components/LoginForgetPassword';
import LoginButton from '@components/LoginScreenButton/LoginButton';
import {loginSchema} from '@utils/validations';
import CustomButton from '@components/CustomButton';
import {navigate} from '@services/nav.service';
import {ROUTES} from '@utils/routes';

const GetStarted = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    validationSchema: loginSchema,

    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values: any) => {
      dispatch(setUser(values));
    },
  });

  const submit = () => {
    formik.handleSubmit();
  };

  return (
    <Wrapper noPaddingBottom>
      <View style={{flex: 1, backgroundColor: COLORS.WHITE}}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          enableAutomaticScroll={Platform?.OS === 'ios'}
          contentContainerStyle={styles.conContainerStyles}
          keyboardShouldPersistTaps="always">
          <CustomText
            size={74}
            style={{...GST.WEIGHT300}}
            color={COLORS.darkBlue}>
            be cycle
          </CustomText>
          <View style={styles.innerView}>
            <View style={styles.rowView}>
              <CustomButton style={styles.btn} text="Iniciar sesión" />
              <CustomButton
                onPress={() => navigate(ROUTES.REGISTER)}
                style={styles.btnStyles}
                textStyle={{color: COLORS.WHITE}}
                text="Crear cuenta"
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Wrapper>
  );
};

export default GetStarted;
