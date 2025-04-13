import { useFormik } from 'formik';
import * as Yup from 'yup';

type FormType = 'login' | 'register';

type FormValuesMap = {
  login: {
    email: string;
    password: string;
  };
  register: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};

const formConfigs = {
  login: {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    }),
  },
  register: {
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    }),
  },
} as const;

export function useFormValidation<T extends FormType>(
  formType: T,
  onSubmit: (values: FormValuesMap[T]) => void
) {
  const { initialValues, validationSchema } = formConfigs[formType] as {
    initialValues: FormValuesMap[T];
    validationSchema: Yup.ObjectSchema<any>;
  };

  const formik = useFormik<FormValuesMap[T]>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
}
