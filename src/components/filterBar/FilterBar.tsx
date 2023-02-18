import React from "react";
import { router } from "../../router";
import Button from "../../shared/button/Button";
import "./FilterBar.scss";

interface FilterBarProps {}

const FilterBar: React.FC<FilterBarProps> = (props) => {
  return (
    <div className="filterBar">
      <div className="filterWindow">
        <Button
          type="button"
          text="Any Day"
          variant="buttonLarge"
          key={"1"}
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Type"
          variant="buttonLarge"
          key={"1"}
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Distance"
          variant="buttonLarge"
          key={"1"}
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Sort By: Revelance"
          variant="buttonLarge"
          key={"1"}
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Day"
          variant="buttonLarge"
          key={"1"}
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Day"
          variant="buttonLarge"
          key={"1"}
          onClick={() => {}}
        />
        {/* <Button
          type="button"
          text="Any Day"
          variant="buttonDefault"
          key={"1"}
          onClick={() => {}}
        />
        <Button
          type="button"
          text="Any Day"
          variant="buttonDefault"
          key={"1"}
          onClick={() => {}}
        /> */}
      </div>
    </div>
  );
};
export default FilterBar;
