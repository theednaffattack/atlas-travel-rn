import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { FlexView, Text } from "./primitive-or-common";
import CustomButton from "./custom-button";
import { TravelsParamList } from "./travels-stack";

interface HotelSubHeadProps {
  commonPaddingPx: number;
  count: number;
  navigation: StackNavigationProp<TravelsParamList, "HotelFeed">;
}

export function HotelSubHead({
  commonPaddingPx,
  count,

  navigation,
}: HotelSubHeadProps): JSX.Element {
  return (
    <FlexView
      width={1}
      flexDirection="row"
      justifyContent="center"
      px={3}
      my={3}
    >
      <FlexView width={1 / 2} pl={commonPaddingPx}>
        <Text fontSize={4} color="#444">
          Featured
        </Text>
        <Text color="#888">{count} spots</Text>
      </FlexView>
      <FlexView pr={commonPaddingPx} width={1 / 2} alignItems="flex-end">
        <CustomButton
          p={10}
          backgroundColor="#d23078"
          border="transparent"
          textColor="#f2f2f2"
          text="+ Filters"
          onPress={() => {
            navigation.navigate("HotelFilter");
          }}
          width="100px"
        />
      </FlexView>
    </FlexView>
  );
}
