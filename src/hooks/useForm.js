import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  useEffect(() => {
    createValidator();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formvalue of Object.keys(formValidation)) {
      if (formValidation[formvalue] != null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidator = () => {
    const formCheckValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckValues);
  };

  return {
    ...formValidation,
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};
