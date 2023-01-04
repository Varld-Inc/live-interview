export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  age: number;
  totalPosts?: number;
}

export interface Post {
  id: number;
  title: string;
  desc: string;
  userId: number;
}

export type Error = {
  error: string;
};

// Components Props
export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export type AddUserFormData = Omit<User, "id">;

export type AddUserFormProps = {
  onSubmit?: (data: AddUserFormData) => void;
};

export type Web3FormData = {
  message: string;
  signedMessage: string;
};
