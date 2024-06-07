import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

function LoadingAndError({ loading, error }) {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Sending request...
        </Typography>
      </Box>
    );
  }

  if (error.error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography variant="body2" color="error">
          {error.message}
        </Typography>
      </Box>
    );
  }

  return null;
}

export default LoadingAndError;

