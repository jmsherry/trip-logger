import React, { useState, useEffect } from "react";
import TripForm from "../components/forms/TripForm";
import Typography from "@mui/material/Typography";

function Trips() {
  return (
    <div>
      <Typography variant="h1">Add a Trip</Typography>
      <TripForm />
    </div>
  );
}

export default Trips;
