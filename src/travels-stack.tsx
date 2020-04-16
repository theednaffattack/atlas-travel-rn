import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { InteractionManager } from "react-native";

import { HeaderHotel } from "./header-hotel";
import { HeaderHotelFeed } from "./header-hotel-feed";
import { HotelFeed } from "./hotel-feed";
import { HeaderHotelFilter } from "./header-hotel-filter";
import { HotelFilter } from "./hotel-filter";
import { ViewHotel } from "./view-hotel";
import { Sidelist } from "./sidelist";
import { FlexView, Text } from "./primitive-or-common";
import { SidelistStack } from "./sidelist-stack";
import { DiscoverStack } from "./discover-stack";
import { HeaderDiscover } from "./header-discover";

export type TravelsParamList = {
  HotelFeed: {
    name: string;
  };
  ViewHotel: {
    name: string;
  };
  HotelFilter: {
    name: string;
  };
  Sidelist: {
    name: string;
  };
  Discover: {
    name: string;
  };
};

export type TravelsStackNavProps<T extends keyof TravelsParamList> = {
  navigation: StackNavigationProp<TravelsParamList, T>;
  route: RouteProp<TravelsParamList, T>;
};

interface TravelsStackProps {
  drawerNavigation: any;
}

const Stack = createStackNavigator<TravelsParamList>();

export const TravelsStack: React.FC<TravelsStackProps> = (props) => {
  // const { logout } = React.useContext(AuthContext);
  // alert(JSON.stringify(Object.keys(props)));
  return (
    <Stack.Navigator
      initialRouteName="HotelFeed"
      mode="modal"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen
        name="ViewHotel"
        component={ViewHotel}
        options={({ navigation, route }) => {
          return {
            header: () => <HeaderHotel navigation={navigation} route={route} />,
          };
        }}
      />
      <Stack.Screen
        name="HotelFeed"
        component={HotelFeed}
        options={({ navigation, route }) => {
          return {
            header: () => (
              <HeaderHotelFeed
                drawerNavigation={props.drawerNavigation}
                navigation={navigation}
                route={route}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="HotelFilter"
        component={HotelFilter}
        options={({ navigation, route }) => {
          return {
            header: () => (
              <HeaderHotelFilter navigation={navigation} route={route} />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
