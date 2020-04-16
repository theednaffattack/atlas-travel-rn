import React from "react";
import {
  AsyncStorage,
  ActivityIndicator,
  InteractionManager,
} from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";

import { Center } from "./center";
import { AuthContext } from "./auth-provider";
import { SidelistStack } from "./sidelist-stack";
import { AuthStack } from "./auth-stack";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login, logout } = React.useContext(AuthContext);
  const [loadingState, setLoadingState] = React.useState(true);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const task = InteractionManager.runAfterInteractions(() => {
  //       // Expensive task

  //       // I WANT TO KEEP THIS API CALL!!!

  //       AsyncStorage.getItem("user")
  //         .then((userString) => {
  //           if (userString) {
  //             // decode it
  //             login();
  //           }
  //           setLoadingState(false);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     });

  //     return () => task.cancel();
  //   }, [])
  // );

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
      {user ? <SidelistStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
