import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { Controller } from "react-hook-form";
// import { PlacesContext } from "./../../../contexts/places.context";
import EB from "./../../ErrorBoundary";

const CountriesSelect = ({
  options = [],
  renderInput,
  getOptionLabel,
  onChange: ignored,
  control,
  defaultValue,
  name,
  renderOption,
}) => {
  return (
    <EB>
      <Controller
        render={(props) => (
          <>
            {console.log(props)}
            <Autocomplete
              options={options}
              sx={{ width: 300 }}
              getOptionLabel={getOptionLabel}
              renderOption={renderOption}
              renderInput={renderInput}
              onChange={(e, data) => {
                console.log(props);
                props.field.onChange(data.name.common)
              }}
              {...props}
            />
          </>
        )}
        onChange={([, data]) => data}
        defaultValue={defaultValue}
        name={name}
        control={control}
      />
    </EB>
  );
};

export default CountriesSelect;
