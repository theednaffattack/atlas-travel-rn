import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Button, FlatList, Text, TouchableOpacity } from "react-native";
import faker from "faker";
import { RouteProp } from "@react-navigation/native";

import { Center, HomeCenter } from "./center";
import {} from "react-native-gesture-handler";
import { AuthContext } from "./auth-provider";
import { addProductRoutes, ProductParamLlist } from "./add-product-routes";

export type HomeParamList = {
  Feed: undefined;
} & ProductParamLlist;

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <HomeCenter bg="#ccc">
      <FlatList
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        style={{ width: "100%" }}
      />
    </HomeCenter>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = React.useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        cardStyle: {
          backgroundColor: "pink",
        },
      }}
    >
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
