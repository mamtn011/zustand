import axios from "axios";
import { create } from "zustand";

const initialStates = {
  users: [],
};
const useUsers = create((set, get) => ({
  ...initialStates,
  getUsers: async () => {
    const { data } = await axios.get(`http://localhost:4000/users`);
    set(() => ({ users: data }));
  },
  addUser: async (dataToAdd) => {
    const { data } = await axios.post(`http://localhost:4000/users`, dataToAdd);
    const users = get().users;
    users.push(data);
    set(() => ({ users }));
  },

  deleteUser: async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    const users = get().users.filter((user) => user.id != id);
    set(() => ({ users }));
  },
}));

export default useUsers;
