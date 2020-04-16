import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StatusBar,
  Keyboard,
  ImageBackground,
  View,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { AuthNavProps } from "../auth-param-list";

import { AuthContext } from "../auth-provider";
import { LoginForm } from "../faux-login";
import Icon from "../icons-plural";
import { FlexView, Text } from "../primitive-or-common";

export function Login({ navigation }: AuthNavProps<"Login">): JSX.Element {
  const { login } = React.useContext(AuthContext);

  // const check = {
  //   isAndroid: () => {
  //     return Platform.OS === "android";
  //   },
  // };

  return (
    <LinearGradient
      colors={[
        "rgba(255,121,85, .06)",
        "rgba(254,97,97, .74)",
        "rgba(210,48,120, 1)",
        "rgba(210,48,120, 1)",
      ]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{ flex: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <TouchableWithoutFeedback>
        <ImageBackground
          source={require("../../assets/login-bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <FlexView
            mt={5}
            mb={6}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            // style={{ zIndex: 9999 }}
          >
            <FlexView alignItems="center" justifyContent="center" width={1}>
              <View style={{ position: "absolute", left: 25 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon
                    height={15}
                    width={15}
                    name="close"
                    fill="rgba(255,255,255,0.5)"
                  />
                </TouchableOpacity>
              </View>

              <Text fontSize={2} color="white">
                Sign in
              </Text>
            </FlexView>
          </FlexView>

          <FlexView pb={3} width={1} bg="#f2f2f2">
            <LoginForm loginFunc={login} />
          </FlexView>
          <FlexView
            mt="auto"
            pb={5}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Text color="#f2f2f2" fontSize={2}>
              Not a user?{" "}
            </Text>
            <Button
              title="Sign up"
              color="#f2f2f2"
              onPress={() => {
                navigation.navigate("Register");
              }}
            />
          </FlexView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
