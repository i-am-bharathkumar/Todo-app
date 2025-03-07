import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Note: In production, this should be in environment variables
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return {
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};