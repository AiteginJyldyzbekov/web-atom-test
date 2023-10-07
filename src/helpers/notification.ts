import { toast } from "react-toastify";

export const notification = (text: string, type: string) => {
  if (type == "error") {
    toast.error(text);
  } else if (type == "success") {
    toast.success(text);
  }
};
