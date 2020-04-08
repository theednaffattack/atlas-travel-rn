import React from "react";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Center } from "./center";
import { AuthContext } from "./auth-provider";
import { AppTabs } from "./app-tabs";
import { AuthStack } from "./auth-stack";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login, logout } = React.useContext(AuthContext);
  const [loadingState, setLoadingState] = React.useState(true);

  React.useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          // decode it
          login();
        }
        setLoadingState(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loadingState) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
