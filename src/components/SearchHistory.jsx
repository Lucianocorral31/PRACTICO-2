import React, { useState } from "react";
import { Typography, Box, IconButton, InputAdornment, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

const SearchHistory = ({ history }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState(history);

  const containerStyles = {
    border: "2px solid #2196f3",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const titleStyles = {
    color: "#2196f3",
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "1.8em",
    textTransform: "uppercase",
  };

  const listItemStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const inputStyles = {
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1.2em",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleItemClick = (city) => {
    console.log("Selected city:", city);
    // Aquí puedes manejar la acción cuando se hace clic en un elemento del historial
  };

  const handleDelete = (index) => {
    const updatedHistory = [...filteredHistory];
    updatedHistory.splice(index, 1);
    setFilteredHistory(updatedHistory);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = history.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHistory(filtered);
  };

  return (
    <Box textAlign="center" mt={4} sx={containerStyles}>
      <Typography variant="h6" gutterBottom sx={titleStyles}>
        Historial de Búsqueda
      </Typography>
      <Input
        placeholder="Buscar en el historial"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        sx={inputStyles}
        startAdornment={
          <InputAdornment position="start">
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {filteredHistory.map((city, index) => (
          <Box
            key={index}
            sx={{
              ...listItemStyles,
              backgroundColor: hoveredIndex === index ? "#f0f0f0" : "#ffffff",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Typography variant="body1" onClick={() => handleItemClick(city)}>
              {city}
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(index)}
              sx={{ marginLeft: "10px" }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchHistory;
