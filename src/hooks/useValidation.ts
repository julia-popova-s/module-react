import { useState, useEffect } from 'react';

export const useValidation = (
  value: string,
  validations: { isEmpty: boolean; minLength: number },
) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation] && value.length > 0) {
            setMinLengthError(true);
          } else {
            setMinLengthError(false);
          }
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);

          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return {
    isEmpty,
    minLengthError,
    inputValid,
    setInputValid,
  };
};
