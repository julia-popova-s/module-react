import { useState } from 'react';
import { useValidation } from './useValidation';
import { ChangeEvent } from 'react';

export const useInput = (
  initialState: string,
  validations: { isEmpty: boolean; minLength: number },
) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(' ', ''));
  };

  const onBlur = () => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid, setValue, setDirty };
};
