import * as Yup from 'yup';
import { emailValidation } from './validationRules/validationRules';

export const schema = Yup.object().shape({
    email: emailValidation,
  });
  