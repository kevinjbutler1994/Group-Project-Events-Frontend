import api from "./apiConfig";

export const getFavorites = async () => {
  try {
    const response = await api.get("/favorite");
    console.log(response); //For TEST
    return response.data;
  } catch (error) {
    console.error("Error getting all Favorites: ", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const createFavorite = async (eventId) => {
  try {
    const response = await api.post(`/favorite/add/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Error creating Favorite: ", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const removeFavorite = async (favoriteId) => {
  try {
    const response = await api.delete(`/favorite/remove/${favoriteId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing Favorite: ", error);
    throw error;
  }
};
