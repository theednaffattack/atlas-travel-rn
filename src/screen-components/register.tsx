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
import { RegisterForm } from "../register-form";
import Icon from "../icons-plural";
import { FlexView, Text } from "../primitive-or-common";

export function Register({
  navigation,
}: AuthNavProps<"Register">): JSX.Element {
  return (
    <LinearGradient
      colors={[
        "rgba(255,121,85, .06)",
        "rgba(254,97,97, .74)",
        "rgba(210,48,120, 1)", //
        "rgba(210,48,120, 1)", //
      ]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{ flex: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground
          source={require("../../assets/register-bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <FlexView
            mt={5}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            style={{ zIndex: 9999 }}
          >
            <View style={{ left: 25, position: "absolute" }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  height={15}
                  width={15}
                  name="close"
                  fill="rgba(255,255,255,0.5)"
                />
              </TouchableOpacity>
            </View>
            <FlexView alignItems="center" justifyContent="center">
              <Text fontSize={2} color="white">
                Sign up
              </Text>
            </FlexView>
          </FlexView>

          <FlexView mt="auto" pb={3} width={1} bg="#f2f2f2">
            <RegisterForm navigation={navigation} />
          </FlexView>

          <FlexView
            mt="auto"
            pb={5}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Text color="#f2f2f2" fontSize={2}>
              Already a member?{" "}
            </Text>
            <Button
              title="Sign in"
              color="#f2f2f2"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </FlexView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
