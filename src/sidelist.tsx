import React from "react";

import { TravelsStackNavProps } from "./travels-stack";
import { FlexView, Text } from "./primitive-or-common";
import { Button } from "react-native";

export function Sidelist({
  navigation,
  route,
}: TravelsStackNavProps<"ViewHotel">) {
  return (
    <FlexView
      // bg="pink"
      flex={1}
      alignItems="center"
      justifyContent="center"
      // width={1 / 2}
      border="2px limegreen solid"
    >
      <Text>Sidelist {route?.params?.name}</Text>
      <Text>Route name: {route?.name}</Text>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
    </FlexView>
  );
}
