import React from "react";

import { TravelsStackNavProps } from "./travels-stack";
import { Center } from "./center";
import { Text } from "./primitive-or-common";

export function ViewHotel({
  navigation,
  route,
}: TravelsStackNavProps<"ViewHotel">) {
  return (
    <Center>
      <Text>Viewing Hotel {route?.params?.name}</Text>
    </Center>
  );
}
