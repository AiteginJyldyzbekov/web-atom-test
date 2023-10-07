import { FormContainerStyle } from "./FormContainerStyle";

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return <FormContainerStyle>{children}</FormContainerStyle>;
};

export default FormContainer;
