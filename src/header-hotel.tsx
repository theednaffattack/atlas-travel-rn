import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { TravelsStackNavProps } from "./travels-stack";
import Icon from "./icons-plural";
import { BoxView, FlexView } from "./primitive-or-common";

export function HeaderHotel({ navigation }: TravelsStackNavProps<"ViewHotel">) {
  return (
    <FlexView
      width={1}
      m={0}
      p={0}
      mt={5}
      px={4}
      alignItems="flex-start"
      flexDirection="row"
      border="2px pink solid"
    >
      <FlexView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon height={15} width={15} name="close" fill="#ffffff" />
        </TouchableOpacity>
      </FlexView>
      <FlexView ml="auto" flexDirection="row">
        <BoxView mx={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="dayPlans" fill="#ffffff" />
          </TouchableOpacity>
        </BoxView>
        <BoxView mx={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="share" fill="#ffffff" />
          </TouchableOpacity>
        </BoxView>
        <BoxView ml={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="more" fill="#ffffff" />
          </TouchableOpacity>
        </BoxView>
      </FlexView>
    </FlexView>
  );
}
