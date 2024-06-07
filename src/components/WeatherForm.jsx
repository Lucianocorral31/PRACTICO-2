import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function WeatherForm({ onSubmit, loading, error }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
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
        sx={{ width: "100%" }}
      >
        {loading ? "Loading" : "Submit"}
      </LoadingButton>
    </Box>
  );
}

export default WeatherForm;


