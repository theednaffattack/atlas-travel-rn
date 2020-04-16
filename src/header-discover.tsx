import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "./icons-plural";
import { BoxView, FlexView, Text } from "./primitive-or-common";
import { DiscoverStackNavProps } from "./discover-stack";

interface HeaderDiscoverProps {
  drawerNavigation: any;
}

export function HeaderDiscover({
  drawerNavigation,
  navigation,
}: DiscoverStackNavProps<"DiscoverScreen"> & HeaderDiscoverProps) {
  return (
    <FlexView
      bg="transparent"
      width={1}
      m={0}
      p={0}
      mt={4}
      py={3}
      px={4}
      flexDirection="row"
      borderBottomColor="rgba(255, 255, 255, 0.3)"
      borderBottomWidth={2}
    >
      <>
        <FlexView width={1 / 3} justifyContent="center">
          <TouchableOpacity
            onPress={() => {
              drawerNavigation.openDrawer();
            }}
          >
            <Icon
              height={20}
              width={20}
              name="sidelist"
              fill="rgba(255,255,255,0.5)"
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
          <Text fontSize={2} color="#fff">
            Traveling
          </Text>
        </FlexView>
        <FlexView flexDirection="row" width={1 / 3}>
          <FlexView ml="auto" mr={1} alignItems="center" flexDirection="column">
            <BoxView mb={2}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  height={17}
                  width={17}
                  name="activity"
                  fill="rgba(255,255,255,0.5)"
                />
              </TouchableOpacity>
            </BoxView>

            <Icon height={5} width={5} name="dot" fill="#fff" />
          </FlexView>
          <BoxView ml={3} mr={2}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                height={19}
                width={19}
                name="search"
                fill="rgba(255,255,255,0.5)"
              />
            </TouchableOpacity>
          </BoxView>
        </FlexView>
      </>
    </FlexView>
  );
}
