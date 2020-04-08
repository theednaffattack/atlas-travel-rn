import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, FlatList, Text } from "react-native";
import faker from "faker";

import { Center } from "./center";
import { addProductRoutes, ProductParamLlist } from "./add-product-routes";

export type SearchParamList = {
  Search: undefined;
} & ProductParamLlist;

export type SearchStackNavProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>;
  route: RouteProp<SearchParamList, T>;
};

export type HomeStackNavProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>;
  route: RouteProp<SearchParamList, T>;
};

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

function Search({ navigation }) {
  const [showList, setShowList] = React.useState(false);
  return (
    <Center>
      <Button
        title="Search Products"
        onPress={() => {
          setShowList(true);
        }}
      />

      {showList ? (
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
      ) : null}
    </Center>
  );
}

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />

      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};
