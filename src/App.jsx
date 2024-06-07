import { CircularProgress, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField } from "@mui/material";
import { useState } from "react";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;

export default function App() {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: "",
    });

    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temp: "",
        condition: "",
        icon: "",
        conditionText: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
            const response = await fetch(`${API_WEATHER}${city}`);
            const data = await response.json();

            if (data.error) throw { message: data.error.message };

            setWeather({
                city: data.location.name,
                country: data.location.country,
                temp: data.current.temp_c,
                condition: data.current.condition.code,
                icon: data.current.condition.icon,
                conditionText: data.current.condition.text,
            });
        } catch (error) {
            setError({
                error: true,
                message: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Weather App
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: "center",
                }}
                component="form"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    size="small"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    sx={{ width: "100%" }}
                    error={error.error}
                    helperText={error.message}
                />
                <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={loading}
                    loadingIndicator={<CircularProgress size={24} />}
                    sx={{ width: "100%" }}
                >
                    {loading ? "Loading" : "Submit"}
                </LoadingButton>
            </Box>
            {loading && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                        Sending request...
                    </Typography>
                </Box>
            )}
            {weather.city && (
                <Box
                sx={{
                    mt: 2,
                    display: "grid",
                    gap: 2,
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" component="h2">
                    {weather.city}, {weather.country}
                </Typography>
                <img
                    alt={weather.conditionText}
                    src={weather.icon}
                    style={{ margin: "0 auto", display: "block" }} // Ajuste para centrar la imagen
                />
                <Typography variant="h5" component="h3">
                    {weather.temp} °C
                </Typography>
                <Typography variant="h6" component="h4">
                    {weather.conditionText}
                </Typography>
            </Box>
            
            )}

            <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
                Powered by:{" "}
                <a href="https://www.weatherapi.com/" title="Weather API">
                    WeatherAPI.com
                </a>
            </Typography>
        </Container>
    );
}




