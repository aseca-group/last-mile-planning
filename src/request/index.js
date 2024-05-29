import axios from "axios";

const lastMileBaseUrl = "http://localhost:8081";
const controlTowerBaseUrl = "http://localhost:8080";

export const getDeliveries = async () => {
  try {
    const response = await axios.get(`${lastMileBaseUrl}/delivery`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAddress = async (id) => {
  try {
    const response = await axios.get(`${controlTowerBaseUrl}/address/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDriver = async (id) => {
  try {
    const response = await axios.get(`${lastMileBaseUrl}/driver/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const changeDeliveryStatus = async (id, data) => {
    try {
        await axios.put(`${lastMileBaseUrl}/delivery/${id}`, data);
    } catch (error) {
        console.error(error);
    }
}