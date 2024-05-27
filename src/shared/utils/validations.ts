import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid_Email').required('Email_Required'),
  password: Yup.string()
    .required('Password_Required')
    .min(6, 'Password_too_Short'),
});
export const registrationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Requerida'),
  name: Yup.string().required('Requerida'),
  Surnames: Yup.string().required('Requerida'),
  gender: Yup.string().required('Requerida'),
  birthdate: Yup.string().required('Requerida'),
  whatsApp: Yup.number().required('Requerida'),
  marked: Yup.boolean()
    .oneOf([true], 'Debes marcar esta casilla')
    .required('Esta casilla de verificación es obligatoria'),

  password: Yup.string()
    .required('Se requiere contraseña')
    .min(6, 'Contraseña demasiado corta'),
});
