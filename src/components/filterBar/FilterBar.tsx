import React, { useState } from "react";
import Button from "../../shared/button/Button";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import "./FilterBar.scss";

interface FilterBarProps {}

const FilterBar: React.FC<FilterBarProps> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="filterBar">
      <div className="filterWindow">
        <Button
          type="button"
          text="Any Day"
          variant="buttonLarge icon"
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Type"
          variant="buttonLarge icon"
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Distance"
          variant="buttonLarge icon"
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Sort By: Revelance"
          variant="buttonLarge icon"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
export default FilterBar;
