import { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value.replace(' ', ''));
  };

  const onBlur = () => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid, setValue, setDirty };
};
