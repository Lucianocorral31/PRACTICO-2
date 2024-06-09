import React from "react";
import { Typography, Box } from "@mui/material";

const SearchHistory = ({ history }) => {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h6" gutterBottom>
        Search History
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {history.map((city, index) => (
          <Typography key={index} variant="body1">
            {city}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SearchHistory;
