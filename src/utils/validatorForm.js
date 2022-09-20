import { useState, useEffect } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length < validations[validation] && value.length > 0) {
            setMinLengthError(true);
            setMessage("Поле должно содержать не менее 4-х символов");
          } else {
            setMinLengthError(false);
            setMessage("");
          }
          break;
        case "isEmpty":
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
    message,
    setMessage,
  };
};
const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value.replace(" ", ""));
  };
  const onBlur = () => {
    setDirty(true);
  };
  return { value, onChange, onBlur, isDirty, ...valid, setValue, setDirty };
};
export default useInput;
