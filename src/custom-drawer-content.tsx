import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, Linking, Button } from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { CommonActions, StackActions } from "@react-navigation/native";

import { FlexView, Text } from "./primitive-or-common";
import CustomButton from "./custom-button";
import Icon from "./icons-plural";
import { AuthContext } from "./auth-provider";
import { RenderExtraNavButtons } from "./render-extra-nav-buttons";

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <FlexView
        height="200px"
        alignItems="center"
        justifyContent="center"
        bg="#ebebeb"
        flex={1}
      >
        <Image
          source={{
            uri: `https://images.unsplash.com/photo-1559293831-8a81f3bfc36c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=60&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=115`,
            // uri: `https://source.unsplash.com/collection/3466704/115x60`,
          }}
        />
        <Text fontSize={3} color="#444" pb={2}>
          Bernard Cerny
        </Text>
        <Text color="#888" pb={3}>
          DJ / Traveler
        </Text>
        <CustomButton
          text="Edit"
          textColor="white"
          backgroundColor="#f4327f"
          borderColor="transparent"
          p={10}
          width="150px"
        />
      </FlexView>

      {/* <DrawerItemList {...props} /> */}

      {Object.keys(NavDrawerButtons).map((buttonKey, buttonIdx) => {
        return (
          <DrawerItem
            key={buttonIdx}
            label={NavDrawerButtons[buttonKey].label}
            onPress={() =>
              NavDrawerButtons[buttonKey].navigation(props.navigation)
            }
            icon={NavDrawerButtons[buttonKey].icon}
          />
        );
      })}

      <FlexView
        borderBottomWidth={2}
        borderBottomColor="grey"
        width={3 / 5}
        my={3}
      ></FlexView>
      <RenderExtraNavButtons navigation={props.navigation} />
    </DrawerContentScrollView>
  );
}

export interface NavDrawerItemProps {
  label: string;
  icon?: () => JSX.Element;
  navigation: (navigation: any) => any;
}

interface NavDrawerButtonsProps {
  activities: NavDrawerItemProps;
  bookings: NavDrawerItemProps;
  discover: NavDrawerItemProps;
  map: NavDrawerItemProps;
  nearMe: NavDrawerItemProps;
  subscription: NavDrawerItemProps;
  // travels: NavDrawerItemProps;
}

const NavDrawerButtons: NavDrawerButtonsProps = {
  discover: {
    label: "Discover",
    icon: () => (
      <Icon height={20} width={20} name="discover" fill="rgba(170, 170, 170)" />
    ),
    navigation: (navigation) => navigation.navigate("Discover"), // , { screen: "Discover" }),
  },
  nearMe: {
    label: "Near Me",
    icon: () => (
      <Icon height={20} width={20} name="nearMe" fill="rgba(170, 170, 170)" />
    ),
    navigation: (navigation) =>
      navigation.dispatch(
        StackActions.replace("AppTabs", {
          screen: "",
          params: {
            screen: "NearMe",
            params: {},
          },
        })
      ),
  },
  activities: {
    label: "Activities",
    icon: () => (
      <Icon
        height={20}
        width={20}
        name="activities"
        fill="rgba(170, 170, 170)"
      />
    ),
    navigation: (navigation) =>
      navigation.dispatch(
        StackActions.replace("AppTabs", {
          screen: "",
          params: {
            screen: "Activities",
            params: {},
          },
        })
      ),
  },
  map: {
    label: "Map",
    icon: () => (
      <Icon
        height={20}
        width={20}
        name="mapPinToo"
        fill="rgba(170, 170, 170)"
      />
    ),
    navigation: (navigation) =>
      navigation.dispatch(
        StackActions.replace("AppTabs", {
          screen: "",
          params: {
            screen: "Map",
            params: {},
          },
        })
      ),
  },
  bookings: {
    label: "Bookings",
    icon: () => (
      <Icon height={20} width={20} name="bookings" fill="rgba(170, 170, 170)" />
    ),
    navigation: (navigation) =>
      navigation.dispatch(
        StackActions.replace("AppTabs", {
          screen: "",
          params: {
            screen: "Bookings",
            params: {},
          },
        })
      ),
  },
  subscription: {
    label: "Subscription",
    icon: () => (
      <Icon
        height={20}
        width={20}
        name="subscription"
        fill="rgba(170, 170, 170)"
      />
    ),
    navigation: (navigation) =>
      navigation.dispatch(
        StackActions.replace("AppTabs", {
          screen: "",
          params: {
            screen: "Subscription",
            params: {},
          },
        })
      ),
  },
};
