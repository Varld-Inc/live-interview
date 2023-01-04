import { useState } from "react";
import { AddUserFormData, AddUserFormProps } from "../types";

const initialFormData = {
  name: "",
  lastName: "",
  email: "",
  age: 18,
};

export function useAddUserForm({ onSubmit }: AddUserFormProps) {
  const [data, setData] = useState<AddUserFormData>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget;

    if (name === "age") {
      value = Math.round(+value).toString();
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit && onSubmit(data);

    setData(initialFormData);
  };

  return {
    handleChange,
    handleSubmit,
    data,
  };
}
