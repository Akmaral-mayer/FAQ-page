import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styled from "styled-components";

export const FilterBlock = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 56px;
    line-height: 110%;
    width: 100%;
    padding: 0 16px;
    margin-bottom: 28px;
  }
`;

export const CustomFilter = () => {
  return (
    <FilterBlock>
      <Autocomplete
        id="debug"
        style={{ width: "100%", color: "#000" }}
        renderInput={(params) => (
          <TextField {...params} label="Filter by theme" margin="normal" />
        )}
      />
    </FilterBlock>
  );
};
