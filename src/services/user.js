import axios from "axios";

const userLogin = async (data) => await axios.post("/login", data);
const userSignup = async () => await axios.post("/signup", data);
const userOperations = () => {
  return { userLogin, userSignup };
};
export default userOperations;
