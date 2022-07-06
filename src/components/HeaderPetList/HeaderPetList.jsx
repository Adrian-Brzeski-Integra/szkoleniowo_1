import React from "react";
import Button from "@mui/material/Button";
import "./HeaderPetList.scss";
import MultipleSelectChip from "./items/MultipleSelectChip";

const HeaderPetList = ({ petList, setFilter, setSort }) => {
  return (
    <div className="headerPetList__container">
      <div className="sortList__container">
        <h4>Sortowanie</h4>
        <div className="btn__box">
          <Button variant="contained">WIEK</Button>
          <Button variant="contained">IMIE</Button>
        </div>
      </div>
      <div className="filterList__container">
        <h4>Filtry</h4>
        <MultipleSelectChip
          name={"Gatunki"}
          list={[...new Set(petList.pets.map((pet) => pet.species))]}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default HeaderPetList;
