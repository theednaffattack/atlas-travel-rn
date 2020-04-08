import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { AppParamList } from "./app-param-list";
import { HomeStack } from "./home-stack";
import { SearchStack } from "./search-stack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home"; // focused
            // ? "ios-information-circle"
            // : "ios-information-circle-outline";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === "Search") {
            // iconName = focused ? "ios-list-box" : "ios-list";
            iconName = "search1";

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};
