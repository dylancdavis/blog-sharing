import axios from "axios";

const baseUrl = "/api/users";

const getAll = async () => (await axios.get(baseUrl)).data;

const create = async (user) => (await axios.post(baseUrl, user)).data;

const userService = { getAll, create };
export default userService;
