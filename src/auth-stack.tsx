import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthParamList } from "./auth-param-list";
import { Home } from "./screen-components/home";
import { Login } from "./screen-components/login";
import { Register } from "./screen-components/register";
import { Confirm } from "./screen-components/confirm";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        header: () => null,
        cardStyle: {
          backgroundColor: "rgb(233, 72,109)",
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{
          headerTitle: "Welcome",
        }}
        name="Home"
        component={Home}
      ></Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: "Sign In",
        }}
        name="Login"
        component={Login}
      ></Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
        }}
        name="Register"
        component={Register}
      ></Stack.Screen>
      <Stack.Screen
        options={{
          headerTitle: "Confirm",
        }}
        name="Confirm"
        component={Confirm}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
