import axios from "@services/api.customize";

const getSection = () => {
   const URL_BACKEND = "/banner";
   return axios.get(URL_BACKEND);
};

export { getSection };
