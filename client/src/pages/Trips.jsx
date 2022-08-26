import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TripsContext } from "./../contexts/trips.context";
import Button from "@mui/material/Button";

function Trips() {
  const { fetchTrips, trips, loaded, loading } = useContext(TripsContext);

  useEffect(() => {
    console.log({ trips, loaded, loading });
    if (!loaded && !loading) {
      console.log("calling");
      fetchTrips();
    }
  }, [trips, loaded, loading]);

  return (
    <div>
      <h1>Trips</h1>
      <pre>
        <code>{JSON.stringify({ trips, loaded, loading })}</code>
      </pre>
      <div>
        <Button
          sx={{
            my: 2,
            "&:hover": {
              color: 'white',
            },
          }}
          component={Link}
          to="/trips/add"
          primary
          variant="contained"
        >
          Add a trip!
        </Button>
      </div>
      {trips.length === 0 && <p>No trips listed</p>}
      <ul>
        {trips.map(({ date, place, _id }) => (
          <li key={_id}>
            {place.name.common} (Date: {date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trips;
