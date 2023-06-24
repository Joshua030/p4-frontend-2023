import { useState } from "react";

// export interface FormState {
//   [key: string]: string;
// }

export type FormState<T extends string | number | symbol, K> = {
  [key in T]: K;
}

export const useForm =  <T extends string | number | symbol, K> (initialForm: FormState <T, K> = {} as FormState<T, K>) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
