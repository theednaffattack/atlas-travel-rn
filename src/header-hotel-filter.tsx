import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { TravelsStackNavProps } from "./travels-stack";
import Icon from "./icons-plural";
import { BoxView, FlexView, Text } from "./primitive-or-common";

export function HeaderHotelFilter({
  navigation,
}: TravelsStackNavProps<"HotelFilter">) {
  return (
    <FlexView
      width={1}
      m={0}
      p={0}
      mt={5}
      px={4}
      pb={3}
      alignItems="center"
      flexDirection="row"
    >
      <FlexView width={1 / 3}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon height={15} width={15} name="close" fill="#aaa" />
        </TouchableOpacity>
      </FlexView>

      <FlexView
        ml="auto"
        flexDirection="row"
        width={1 / 3}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="#222" fontSize={2}>
          Filter by
        </Text>
      </FlexView>

      <FlexView ml="auto" flexDirection="row" width={1 / 3}></FlexView>

      {/* <FlexView ml="auto" flexDirection="row">
        <BoxView mx={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="dayPlans" fill="#000" />
          </TouchableOpacity>
        </BoxView>
        <BoxView mx={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="share" fill="#000" />
          </TouchableOpacity>
        </BoxView>
        <BoxView ml={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="more" fill="#000" />
          </TouchableOpacity>
        </BoxView>
      </FlexView> */}
    </FlexView>
  );
}
