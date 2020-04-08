import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Button } from "react-native";

import { AuthParamList, AuthNavProps } from "./auth-param-list";
import { AuthContext } from "./auth-provider";
import { Center } from "./center";

interface AuthStackProps {}

function Login({ navigation }: AuthNavProps<"Login">) {
  const { login } = React.useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen.</Text>
      <Button
        title="log me in"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
          login();
        }}
      />
    </Center>
  );
}

function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          // navigation.navigate("Login");
          navigation.goBack();
        }}
      />
    </Center>
  );
}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
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
    </Stack.Navigator>
  );
};
