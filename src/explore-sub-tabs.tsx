import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { HeaderHotel } from "./header-hotel";
import { HeaderHotelFeed } from "./header-hotel-feed";
import { HotelFeed } from "./hotel-feed";
import { HeaderHotelFilter } from "./header-hotel-filter";
import { HotelFilter } from "./hotel-filter";
import { ViewHotel } from "./view-hotel";

export type ExploreSubTabsParamList = {
  Activities: {
    name: string;
  };
  DiscoverSub: {
    name: string;
  };
};

export type ExploreSubTabsNavProps<T extends keyof ExploreSubTabsParamList> = {
  navigation: StackNavigationProp<ExploreSubTabsParamList, T>;
  route: RouteProp<ExploreSubTabsParamList, T>;
};

interface ExploreSubTabsProps {
  drawerNavigation: any;
}

const Stack = createStackNavigator<ExploreSubTabsParamList>();

export const ExploreSubTabs: React.FC<ExploreSubTabsProps> = (props) => {
  // const { logout } = React.useContext(AuthContext);
  // alert(JSON.stringify(Object.keys(props)));
  return (
    <Stack.Navigator
      initialRouteName="DiscoverSub"
      mode="modal"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen
        name="DiscoverSub"
        component={ViewHotel}
        options={({ navigation, route }) => {
          return {
            header: () => <HeaderHotel navigation={navigation} route={route} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
