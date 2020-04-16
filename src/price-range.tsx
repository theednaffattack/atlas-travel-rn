import React from "react";
import { ViewStyle } from "react-native";
import { Slider } from "react-native-elements";
import MultiSlider, { MultiSliderProps } from "react-native-multi-slider";

import { Text, FlexView } from "./primitive-or-common";

interface PriceRangeProps {}

const sliderLabelStyles: ViewStyle = {
  borderRadius: 20,
  backgroundColor: "rgb(68, 68, 68)",
};

// @TODO: Add `style` prop to `RangeSliderProps` typings in "rn-range-slider"
// add it as a ViewStyle from "react-native"
interface RangeValueState {
  rangeLow: number;
  rangeHi: number;
}

export const PriceRange: React.FC<MultiSliderProps> = ({}) => {
  const initialRangeValue: RangeValueState = {
    rangeLow: 0,
    rangeHi: 2000,
  };

  const [rangeValue, setRangeValue] = React.useState<RangeValueState>(
    initialRangeValue
  );
  const screenWidth = 500;
  const rangeMin = 0;
  const rangeMax = 4000;
  const left = (rangeValue.rangeLow * (screenWidth - 60)) / 100 - 15;
  return (
    <FlexView>
      <Text style={{ width: 50, textAlign: "center", left: left }}>
        {Math.floor(rangeValue.rangeLow)}
      </Text>
      {/* <MultiSlider
        values={[rangeValue.rangeLow, rangeValue.rangeHi]}
        min={rangeMin}
        max={rangeMax}
        step={1}
      /> */}
      {/* <Slider
        maximumValue={100}
        value={this.state.value}
        onValueChange={(value) => this.setState({ value })}
      /> */}
    </FlexView>
  );
};
