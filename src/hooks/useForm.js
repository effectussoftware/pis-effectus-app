import { useState, useCallback } from 'react';
import { isEmpty, pickBy } from 'lodash';

const useForm = (
  {
    onSubmit,
    initialValues = {},
    validator = () => {},
    validateOnChange = false,
    validateOnBlur = false,
  },
  ...dependencies
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [activeFields, setActiveFields] = useState({});
  const [touched, setTouched] = useState({});

  const handleSubmit = useCallback(() => {
    const newErrors = validator(values) || {};
    const valid = !Object.values(newErrors)
      .filter(error => !!error)
      .reduce((acc, error) => {
        error.forEach(e => acc.push(e));
        return acc;
      }, []).length;
    if (valid) {
      onSubmit(values);
    } else {
      setErrors(newErrors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, setErrors, validator, onSubmit, ...dependencies]);

  const runValidations = useCallback(
    (newValues, key) => {
      const validations = validator(newValues) || {};
      if (key) {
        setErrors({ ...errors, [key]: validations[key] });
      } else {
        setErrors(validator(newValues));
      }
    },
    [validator, errors, setErrors],
  );

  const handleValueChange = useCallback(
    (key, value, isInitialSetup = false) => {
      const newValues = {
        ...values,
        [key]: value,
      };
      setValues(newValues);
      if (validateOnChange) {
        runValidations(newValues, !isInitialSetup && key);
      }
    },
    [values, setValues, runValidations, validateOnChange],
  );

  const handleFocus = useCallback(
    key => {
      setActiveFields({
        ...activeFields,
        [key]: true,
      });
    },
    [activeFields, setActiveFields],
  );

  const handleBlur = useCallback(
    key => {
      setActiveFields({
        ...activeFields,
        [key]: false,
      });
      if (validateOnBlur) runValidations(values, key);
      setTouched({ ...touched, [key]: true });
    },
    [activeFields, setActiveFields, runValidations, values, validateOnBlur, setTouched, touched],
  );

  const formHasErrors = !isEmpty(pickBy(errors));

  return {
    values,
    setValues,
    errors,
    setErrors,
    activeFields,
    setActiveFields,
    handleValueChange,
    handleSubmit,
    handleFocus,
    handleBlur,
    touched,
    formHasErrors,
  };
};

export default useForm;
