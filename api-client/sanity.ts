import axios, { AxiosError, AxiosResponse } from "axios";

const apiSanityClient = axios.create({

  baseURL: `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
 apiSanityClient.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
 apiSanityClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data.result;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export default apiSanityClient;
