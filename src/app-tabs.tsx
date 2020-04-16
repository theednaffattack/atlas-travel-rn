import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { AppParamList } from "./app-param-list";
import { TravelsStack } from "./travels-stack";
import { SearchStack } from "./search-stack";
import Icon from "./icons-plural";
import { backgroundColor } from "styled-system";
import { ExploreScreen } from "./explore-screen";
import { SavedScreen } from "./saved-screen";
import { ProfileScreen } from "./profile-screen";
import { ConversationScreen } from "./conversation-screen";

interface AppTabsProps {
  navigation: any;
  route: any;
}

const Tabs = createBottomTabNavigator<AppParamList>();

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || "Feed";

  switch (routeName) {
    case "Feed":
      return "News feed";
    case "Profile":
      return "My profile";
    case "Account":
      return "My account";
  }
}

export const AppTabs: React.FC<AppTabsProps> = ({ navigation, route }) => {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  // }, [navigation, route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Travel") {
            iconName = "travels";
            return <Icon name={iconName} height={30} width={30} fill={color} />;
          }
          if (route.name === "Explore") {
            iconName = "explore";
            return (
              <Icon
                name={iconName}
                active={false}
                height={25}
                width={25}
                fill={color}
              />
            );
          }
          if (route.name === "Saved") {
            iconName = "saved";
            return (
              <Icon
                name={iconName}
                active={false}
                height={25}
                width={25}
                fill={color}
              />
            );
          }
          if (route.name === "Conversation") {
            iconName = "conversation";
            return (
              <Icon
                name={iconName}
                active={true}
                height={25}
                width={25}
                fill={color}
              />
            );
          }
          if (route.name === "Profile") {
            iconName = "profile";
            return (
              <Icon
                name={iconName}
                active={true}
                height={25}
                width={25}
                fill={color}
              />
            );
          } else if (route.name === "Search") {
            iconName = "search1";
            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "rgb(233, 72, 109)",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#ffffff", // "#f2f2f2",
        },
      }}
    >
      <Tabs.Screen
        name="Travel"
        children={(props) => (
          <TravelsStack {...props} drawerNavigation={navigation} />
        )}
        options={{}}
      />
      <Tabs.Screen
        name="Explore"
        component={ExploreScreen}
        // children={(props) => (
        //   <ExploreScreen {...props} drawerNavigation={navigation} />
        // )}
        options={{}}
      />
      <Tabs.Screen
        name="Saved"
        children={(props) => (
          <SavedScreen {...props} drawerNavigation={navigation} />
        )}
        options={{}}
      />
      <Tabs.Screen
        name="Conversation"
        children={(props) => (
          <ConversationScreen {...props} drawerNavigation={navigation} />
        )}
        options={{}}
      />
      <Tabs.Screen
        name="Profile"
        children={(props) => (
          <ProfileScreen {...props} drawerNavigation={navigation} />
        )}
        options={{}}
      />
      {/* <Tabs.Screen name="Search" component={SearchStack} /> */}
    </Tabs.Navigator>
  );
};
