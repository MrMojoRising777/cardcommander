import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null
  }),
  getters: {
    user: (state) => state.authUser
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      try {
        await this.getToken();
        const data = await axios.get("api/user");
        this.authUser = data.data;
        console.log(this.authUser);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Error handling for 401 Unauthorized (Not logged in)
        } else {
          // Handle other errors
        }
      }
    },
    async handleLogin(data) {
      await this.getToken();
      await axios.post("/login", {
        email: data.email,
        password: data.password
      });
      this.router.push("/");
    },
    async handleRegister(data) {
      await this.getToken();
      await axios.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      });
      this.router.push("/");
    },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
    }
  }
})