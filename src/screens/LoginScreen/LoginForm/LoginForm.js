import React from 'react';
import { func } from 'prop-types';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import Button from 'components/Button';
import Input from 'components/form/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import loginValidations from 'validations/loginValidations';
import ErrorView from 'components/form/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';

const FIELDS = {
  email: 'email',
  password: 'password',
};

const LoginForm = ({ onSubmit }) => {
  const { error, status } = useStatus(login);
  const validator = useValidation(loginValidations);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true,
      validateOnChange: true,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <>
      <Input
        label={strings.SIGN_IN.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <Input
        label={strings.SIGN_IN.password}
        testID="password-input"
        secureTextEntry
        {...inputProps(FIELDS.password)}
      />
      <ErrorView errors={{ ...errors, error }} />
      <Button
        testID="login-submit-button"
        title={status === LOADING ? strings.COMMON.loading : strings.SIGN_IN.button}
        onPress={handleSubmit}
      />
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
