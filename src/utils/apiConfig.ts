import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiConfig = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

export default apiConfig;