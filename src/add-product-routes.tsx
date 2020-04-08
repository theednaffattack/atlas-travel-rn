import { Text, TouchableOpacity, Button } from "react-native";
import { HomeStackNavProps, HomeParamList } from "./home-stack";
import React, { Props } from "react";
import { Center } from "./center";
import { TypedNavigator, StackNavigationState } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";
import { SearchParamList, SearchStackNavProps } from "./search-stack";

function apiCall(x: any) {
  return x;
}

export type ProductParamLlist = {
  Product: {
    name: string;
  };
  EditProduct: {
    name: string;
    submit?: React.MutableRefObject<() => void>;
  };
};

function EditProduct({ navigation, route }: HomeStackNavProps<"EditProduct">) {
  const [formState] = React.useState();
  const submit = React.useRef(() => {});

  submit.current = () => {
    // api call with new form state
    apiCall(formState);
    navigation.goBack();
  };

  React.useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {route?.params?.name}...</Text>
    </Center>
  );
}

function Product({ navigation, route }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit this Product"
        onPress={() => {
          navigation.navigate("EditProduct", {
            name: route.params.name,
          });
        }}
      />
    </Center>
  );
}

export const addProductRoutes = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    StackNavigationOptions,
    StackNavigationEventMap,
    any
  >
) => {
  return (
    <>
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={({ route }) => {
          return {
            headerTitle: `Edit Product: ${route.params.name}`,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  // submit the form
                  route.params.submit?.current();
                }}
                style={{ paddingRight: 9 }}
              >
                <Text style={{ color: "red" }}>Done</Text>
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => {
          return {
            headerTitle: `Product: ${route.params.name}`,
          };
        }}
      />
    </>
  );
};
