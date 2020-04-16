import React from "react";
import { FlatList, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, FlexView } from "./primitive-or-common";
import { HeaderDiscover } from "./header-discover";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Dropdown, fakeDropdownItems } from "./dropdown";
import { HotelCardPortrait } from "./hotel-card-portrait";
import CustomButton from "./custom-button";

export type DiscoverParamList = {
  DiscoverScreen: {
    name: string;
  };
};

export type DiscoverStackNavProps<T extends keyof DiscoverParamList> = {
  navigation: StackNavigationProp<DiscoverParamList, T>;
  route: RouteProp<DiscoverParamList, T>;
};

interface DiscoverStackProps {
  drawerNavigation: any;
}

const Stack = createStackNavigator<DiscoverParamList>();

export function DiscoverStack({
  drawerNavigation,
  navigation,
  route,
}: DiscoverStackNavProps<"DiscoverScreen"> & DiscoverStackProps) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
      initialRouteName="DiscoverScreen"
    >
      <Stack.Screen
        name="DiscoverScreen"
        children={({ navigation, route }) => (
          <Discover
            navigation={navigation}
            route={route}
            drawerNavigation={drawerNavigation}
          />
        )}
      />
    </Stack.Navigator>
  );
}

function Discover({ drawerNavigation, navigation, route }) {
  return (
    <FlexView flex={1} width={1} bg="#e9486d">
      <LinearGradient
        colors={[
          "rgba(255,121,85, .06)",
          "rgba(254,97,97, .74)",
          "rgba(210,48,120, 1)", //
          "rgba(210,48,120, 1)", //
        ]}
        // start={[0.0, 0.0]}
        // end={[1.0, 1.0]}
        style={{ flex: 1, width: "100%" }}
      >
        <HeaderDiscover
          drawerNavigation={drawerNavigation}
          navigation={navigation}
          route={route}
        />
        <FlexView
          mt={4}
          flex={1}
          width={1}
          px={[4]}
          py={3}
          flexDirection="column"
        >
          <Text fontSize={5} color="rgba(255,255,255,0.5)">
            Pick a category for your next adventure
          </Text>

          <FlexView
            width={1}
            borderBottomWidth={2}
            borderBottomColor="rgba(255,255,255,0.5)"
          >
            <Dropdown items={fakeDropdownItems} />
          </FlexView>
          <FlexView mt={5}>
            <FlexView mb={4} alignItems="center" flexDirection="row">
              <Text mr="auto" color="#fff" fontSize={4}>
                Featured
              </Text>
              <CustomButton
                textColor="#e9486d"
                width={110}
                p={10}
                borderColor="transparent"
                backgroundColor="#fff"
                text="See all >"
                onPress={() => navigation.navigate("Travel")}
              />
            </FlexView>
            <FlatList
              data={data}
              style={{
                flex: 1,
                width: "100%",
                margin: 0,
                padding: 0,

                maxHeight: 250,
                minHeight: 250,
              }}
              horizontal={true}
              keyExtractor={(product, idx) => product.id + "-" + idx}
              renderItem={({ item, index }) => (
                <HotelCardPortrait
                  commonPaddingPx={8}
                  key={item.id}
                  item={item}
                  navigation={navigation}
                />
              )}
            />
          </FlexView>
        </FlexView>
      </LinearGradient>
    </FlexView>
  );
}

const data = [
  {
    id: 0,
    name: "blah",
    type: "boop",
  },
  {
    id: 1,
    name: "whoop",
    type: "cmon",
  },
  {
    id: 2,
    name: "hate",
    type: "nope",
  },
  {
    id: 3,
    name: "wate",
    type: "later",
  },
];
