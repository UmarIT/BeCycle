import React, {useState} from 'react';
import {View, Platform, Alert, StyleSheet, Pressable, Text} from 'react-native';
import Wrapper from '@components/Wrapper';
import {COLORS} from '@theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import {registrationSchema} from '@utils/validations';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import Input from '@components/Input';
import {RF} from '@theme/responsive';
import CheckBox from '@components/Checkbox';
import CustomButton from '@components/CustomButton';
import {useDispatch} from 'react-redux';
import {setUser} from '@redux/reducers/userReducer';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const RegisterScreen = () => {
  const [step, setStep] = useState(1);
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    validationSchema: registrationSchema,
    initialValues: {
      email: '',
      password: '',
      name: '',
      Surnames: '',
      whatsApp: null,
      gender: null,
      birthdate: null,
      marked: false,
    },
    onSubmit: async (values: any) => {
      Alert.alert('Success', 'Successfully registered', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(setUser({email: 'sheransaei12@gmail.com'}));
          },
        },
      ]);
    },
  });

  const highlightText = (inputText: any) => {
    const parts = inputText.split(/(\*.*?\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        // Remove asterisks and apply color to wrapped text
        const wrappedText = part.slice(1, -1);
        return (
          <Text key={index} style={{color: COLORS.orange}}>
            {wrappedText}
          </Text>
        );
      } else {
        return <Text key={index}>{part}</Text>;
      }
    });
  };
  return (
    <Wrapper noPaddingBottom>
      <View style={styles.mainView}>
        <CustomText size={55} style={styles.headerTxt} color={COLORS.darkBlue}>
          be cycle
        </CustomText>

        <KeyboardAwareScrollView
          enableOnAndroid={true}
          enableAutomaticScroll={Platform.OS === 'ios'}
          contentContainerStyle={styles.conContainerStyles}
          keyboardShouldPersistTaps="always">
          <View style={styles.innerView}>
            <CustomText size={17} style={styles.txt} color={COLORS.darkBlue}>
              Crea tu cuenta
            </CustomText>
            <Input
              // borderColor={formik?.errors?.email ? COLORS.RED : null}
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder="Correo electrónico"
              // containerStyle={{marginTop: RF(14)}}
              title="Email"
            />
            {formik?.errors?.email && formik?.touched?.email && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.email}
              </CustomText>
            )}

            <Input
              borderColor={formik.errors.password ? COLORS.RED : null}
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder="Contraseña"
              containerStyle={{marginTop: RF(14)}}
              title="password"
              password={true}
              // secureTextEntry={true}
            />
            {formik?.errors?.password && formik?.touched?.password && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.password}
              </CustomText>
            )}
          </View>
          <View style={{paddingHorizontal: RF(20)}}>
            <CustomText
              size={17}
              style={{
                ...GST.WEIGHT700,
                textAlign: 'left',
                marginVertical: RF(14),
              }}
              color={COLORS.darkBlue}>
              Información básica
            </CustomText>
            <Input
              // borderColor={formik.errors.name ? COLORS.RED : null}
              value={formik.values.name}
              onChangeText={formik.handleChange('name')}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder="Nombre"
              // containerStyle={{marginTop: RF(14)}}
              title="name"
            />
            {formik?.errors?.name && formik?.touched?.name && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.name}
              </CustomText>
            )}
            <Input
              // borderColor={formik.errors.email ? COLORS.RED : null}
              value={formik.values.Surnames}
              onChangeText={formik.handleChange('Surnames')}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder="Apellidos"
              containerStyle={styles.inputStyles}
              title="Surnames"
            />
            {formik?.errors?.Surnames && formik?.touched?.Surnames && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.Surnames}
              </CustomText>
            )}
            <Input
              // borderColor={formik.errors.email ? COLORS.RED : null}
              value={formik.values.whatsApp}
              onChangeText={formik.handleChange('whatsApp')}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder="WhatsApp"
              inputMode="numeric"
              containerStyle={styles.inputStyles}
              title="Email"
            />
            {formik?.errors?.whatsApp && formik?.touched?.whatsApp && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.whatsApp}
              </CustomText>
            )}
            <View
              style={{
                // backgroundColor: 'green',
                paddingHorizontal: RF(20),
                paddingVertical: RF(14),
                borderRadius: RF(20),
                marginTop: RF(11),
                borderWidth: RF(1),
                borderColor: COLORS.PLACEHOLDER,
              }}>
              <RNPickerSelect
                onValueChange={value => formik.setFieldValue('gender', value)}
                // style={{bora}}
                value={formik?.values?.gender}
                placeholder={{
                  label: 'Género',
                  value: null,
                }}
                items={[
                  {label: 'Male', value: 'Male'},
                  {label: 'Female', value: 'Female'},
                ]}
              />
            </View>
            {formik?.errors?.gender && formik?.touched?.gender && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.gender}
              </CustomText>
            )}
            {/* <Input
              // borderColor={formik.errors.email ? COLORS.RED : null}
              // value={formik.values.email}
              // onChangeText={formik.handleChange('email')}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder="Género"
              containerStyle={styles.inputStyles}
              title="Email"
            /> */}
            {/* ////// */}

            <Pressable
              onPress={() => setOpen(true)}
              style={{
                // backgroundColor: 'green',
                paddingHorizontal: RF(20),
                paddingVertical: RF(14),
                borderRadius: RF(20),
                marginTop: RF(11),
                borderWidth: RF(1),
                borderColor: COLORS.PLACEHOLDER,
              }}>
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT400,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                }}
                color={
                  formik?.values?.birthdate
                    ? COLORS.darkBlue
                    : COLORS.PLACEHOLDER
                }>
                {formik?.values?.birthdate
                  ? `${moment(formik?.values?.birthdate).format('L')}`
                  : 'Fecha de nacimiento'}
              </CustomText>
            </Pressable>
            {formik?.errors?.birthdate && formik?.touched?.birthdate && (
              <CustomText
                size={11}
                style={{
                  ...GST.WEIGHT300,
                  textAlign: 'left',
                  // marginVertical: RF(14),
                  marginHorizontal: RF(15),
                }}
                color={COLORS.RED}>
                {formik?.errors?.birthdate}
              </CustomText>
            )}
            {/* <Pressable onPress={() => setOpen(true)}>
              <Input
                // borderColor={formik.errors.email ? COLORS.RED : null}
                // value={formik.values.email}
                // onChangeText={formik.handleChange('email')}

                placeholderTextColor={COLORS.PLACEHOLDER}
                placeholder="Fecha de nacimiento"
                containerStyle={styles.inputStyles}
                title="Email"
              />
            </Pressable> */}
            <DatePicker
              modal
              mode="date"
              open={open}
              date={new Date()}
              onConfirm={date => {
                setOpen(false);
                formik.setFieldValue('birthdate', date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <View
              style={{
                paddingHorizontal: RF(8),
                marginTop: RF(10),
              }}>
              <CheckBox
                onPress={() =>
                  formik.setFieldValue('marked', !formik?.values?.marked)
                }
                title={highlightText(
                  `Acepto los *Términos y Condiciones*, y el \n *Aviso de Privacidad.*`,
                )}
                isChecked={formik?.values?.marked}
                numberOfLines={2}
                // textStyle={{marginRight: RF(7)}}
              />
              {formik?.errors?.marked && formik?.touched?.marked && (
                <CustomText
                  size={11}
                  style={{
                    ...GST.WEIGHT300,
                    textAlign: 'left',
                    // marginVertical: RF(14),
                    marginHorizontal: RF(10),
                  }}
                  color={COLORS.RED}>
                  {formik?.errors?.marked}
                </CustomText>
              )}
            </View>
            <CustomButton
              onPress={() => {
                formik.handleSubmit();
              }}
              text="Crear cuenta"
              style={styles.bottomBtnStyles}
              size={15}
              textStyle={styles.bottomBtnTxt}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Wrapper>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: COLORS.WHITE},
  headerTxt: {...GST.WEIGHT400, textAlign: 'center'},
  conContainerStyles: {flexGrow: 1},
  innerView: {paddingHorizontal: RF(20)},
  txt: {
    ...GST.WEIGHT700,
    textAlign: 'left',
    marginVertical: RF(14),
  },
  bottomBtnTxt: {color: COLORS.WHITE, ...GST.WEIGHT400},
  bottomBtnStyles: {backgroundColor: COLORS.darkBlue, marginTop: RF(35)},
  inputStyles: {marginTop: RF(14)},
});
