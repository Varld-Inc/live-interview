import { useState } from "react";
import InputField from "../components/InputField";
import { AddUserFormData, AddUserFormProps } from "../types";
import styles from "../styles/Main.module.css";

const initialFormData = {
  name: "",
  lastName: "",
  email: "",
  age: 18,
};

export default function AddUserForm({ onSubmit }: AddUserFormProps) {
  const [data, setData] = useState<AddUserFormData>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: implement handle inputs changes
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: implement handle submit
  };

  /*
   ** Inputs constraints:
   ** Name input max length is 100
   ** LastName input max length is 100
   ** Email input
   ** Age input
   **
   ** Additional:
   ** Add styles for input
   */
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputField
        className={styles.input}
        id="name"
        name="name"
        label="Name"
        value={data.name}
        onChange={handleChange}
      />
      <InputField
        className={styles.input}
        id="lastName"
        name="lastName"
        label="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />
      <InputField
        id="email"
        name="email"
        label="Email"
        value={data.email}
        onChange={handleChange}
      />
      <InputField
        id="age"
        name="age"
        label="Age"
        value={data.age}
        onChange={handleChange}
      />
      <button
        className={styles.button}
        // className="w-full px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-500"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
