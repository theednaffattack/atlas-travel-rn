import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";

import Icon from "./icons-plural";

type ItemProps = {
  label: string;
  value: string;
};

interface DropdownProps {
  items: ItemProps[];
}

export const fakeDropdownItems = [
  { label: "Popular", value: "popular" },
  { label: "Baseball", value: "baseball" },
  { label: "Hockey", value: "hockey" },
];

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "#fff",
    fontSize: 23,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={items}
      value="popular"
      style={{
        inputIOS: {},
        ...pickerSelectStyles,
        iconContainer: {
          top: 17,
          right: 15,
        },
      }}
      Icon={() => {
        return (
          <Icon
            name="chevronDown"
            fill="rgb(255,255,255)"
            height={20}
            width={20}
          />
        );
      }}
    />
  );
};
