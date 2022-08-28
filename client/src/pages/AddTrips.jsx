import React, { useState, useEffect } from "react";
import TripForm from "../components/forms/TripForm";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Trips() {
  return (
    <div>
      <Typography variant="h1">Add a Trip</Typography>
      <Button
        sx={{
          my: 2,
          "&:hover": {
            color: "white",
          },
        }}
        component={Link}
        to="/trips"
        primary="true"
        variant="contained"
      >
        Back to trips...
      </Button>
      <TripForm />
    </div>
  );
}

export default Trips;
