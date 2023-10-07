import axios from "axios";

class UserService {
  async signIn(email: string, password: string) {
    return axios.post("https://fakestoreapi.com/auth/login", {
      username: email,
      password: password,
    });
  }
}

export default new UserService();
