import React from "react";

import { TravelsStackNavProps } from "./travels-stack";
import { FlexView } from "./primitive-or-common";

import { Features } from "./features";
import { Calendar, TimePeriod } from "./time-period";
import { PriceRange } from "./price-range";

export function HotelFilter({
  navigation,
  route,
}: TravelsStackNavProps<"HotelFilter">) {
  return (
    <FlexView
      flex={1}
      bg="palevioletred"
      alignItems="center"
      // justifyContent="center"
    >
      <TimePeriod>
        <Calendar />
      </TimePeriod>
      <Features />
      <PriceRange />
    </FlexView>
  );
}
