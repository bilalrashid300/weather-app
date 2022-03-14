import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { dropdown } from "../../assets/style/style";

export const Dropdown = (props) => {
  const { open, value, items, setOpen, setValue, setItems } = props;

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={() => setOpen(!open)}
      setValue={setValue}
      onSelectItem={(item) => {
        setValue({...item.value});
        setOpen(!open);
      }}
      setItems={setItems}
      style={dropdown.dropdown}
      textStyle={dropdown.dropdownText}
      labelStyle={dropdown.dropdownLabel}
      containerStyle={dropdown.container}
    />
  );
};
