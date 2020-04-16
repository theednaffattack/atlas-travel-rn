import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { TravelsStackNavProps } from "./travels-stack";
import Icon from "./icons-plural";
import { BoxView, FlexView, Text } from "./primitive-or-common";

export function HeaderHotelFeed({
  drawerNavigation,
  navigation,
  route,
}: TravelsStackNavProps<"HotelFeed"> & { drawerNavigation: any }) {
  return (
    <FlexView
      width={1}
      m={0}
      p={0}
      mt={4}
      py={3}
      px={4}
      // alignItems="center"
      // justifyContent="center"
      flexDirection="row"
    >
      <>
        <FlexView width={1 / 3} justifyContent="center">
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("Sidelist");
              drawerNavigation.openDrawer();
            }}
          >
            <Icon
              height={20}
              width={20}
              name="sidelist"
              fill="rgb(170, 170, 170)"
            />
          </TouchableOpacity>
        </FlexView>
        <FlexView
          mx="auto"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width={1 / 3}
        >
          <Text fontSize={2}>Traveling</Text>
        </FlexView>
        <FlexView flexDirection="row" width={1 / 3}>
          <FlexView ml="auto" mr={1} alignItems="center" flexDirection="column">
            <BoxView mb={2}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon height={17} width={17} name="activity" fill="#aaaaaa" />
              </TouchableOpacity>
            </BoxView>

            <Icon height={5} width={5} name="dot" fill="#f4327f" />
          </FlexView>
          <BoxView ml={3} mr={2}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon height={19} width={19} name="search" fill="#aaaaaa" />
            </TouchableOpacity>
          </BoxView>
        </FlexView>
      </>
    </FlexView>
  );
}
