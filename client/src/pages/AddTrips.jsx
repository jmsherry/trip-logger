import React, {useState, useEffect} from 'react'
import TripForm from '../components/forms/TripForm'

function Trips() {
  return (
    <div>
      <h1>Add a Trip</h1>
      <TripForm />
    </div>
  )
}

export default Trips