import api from "./apiConfig";

export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error getting all categories: ", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const getEvent = async (id) => {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
