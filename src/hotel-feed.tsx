import React from "react";
import { useFocusEffect } from "@react-navigation/native";

import { TravelsStackNavProps } from "./travels-stack";
import { FlexView } from "./primitive-or-common";
import { RenderHotelList } from "./render-hotel-list";
import { HotelSubHead } from "./hotel-sub-head";
import { InteractionManager } from "react-native";

export function HotelFeed({ navigation }: TravelsStackNavProps<"HotelFeed">) {
  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        // Expensive task
      });

      return () => task.cancel();
    }, [])
  );

  const commonPaddingPx = 2;
  return (
    <FlexView bg="rgb(238,238,238)" flex={1} flexDirection="column">
      <HotelSubHead
        commonPaddingPx={commonPaddingPx}
        count={50}
        navigation={navigation}
      />

      <RenderHotelList
        commonPaddingPx={commonPaddingPx}
        navigation={navigation}
      />
    </FlexView>
  );
}
