
import * as Yup from 'yup';
import { emailValidation, nameValidation, passwordValidation } from './validationRules/validationRules';

export const schema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  profileName: nameValidation,
});
