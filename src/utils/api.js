export async function getWeather(city) {
    const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_VITE_API_KEY}&q=${city}`;
    try {
        const response = await fetch(API_WEATHER);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        return {
            city: data.location.name,
            country: data.location.country,
            temp: data.current.temp_c,
            conditionText: data.current.condition.text,
            icon: data.current.condition.icon,
        };
    } catch (error) {
        throw error;
    }
}
