import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";

import { Sidelist } from "./sidelist";
import { AppTabs } from "./app-tabs";
import { TravelsStack } from "./travels-stack";
import { CustomDrawerContent as DrawerContent } from "./custom-drawer-content";
import { DiscoverStack } from "./discover-stack";

type whatever = DrawerContentComponentProps<DrawerContentOptions>;

const Drawer = createDrawerNavigator();

export function SidelistStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // title: "help",
        // drawerLabel: "Label Ex",
        swipeEnabled: true,
      }}
      initialRouteName="TravelsStack"
      drawerPosition="left"
      drawerContent={DrawerContent}
    >
      {/* <Drawer.Screen
        options={{
          drawerLabel: "sideList label",
        }}
        name="Sidelist"
        component={Sidelist}
      /> */}
      <Drawer.Screen
        options={{
          drawerLabel: "Travel",
        }}
        name="TravelsStack"
        // children={() => <AppTabs navigation={navigation} />}
        component={AppTabs}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Discover",
        }}
        name="Discover"
        children={({ navigation, route }) => (
          <DiscoverStack
            drawerNavigation={navigation}
            navigation={navigation}
            route={route}
          />
        )}

        // component={DiscoverStack}
      />
    </Drawer.Navigator>
  );
}
