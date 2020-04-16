import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StatusBar,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import { AuthNavProps } from "../auth-param-list";
import { AuthContext } from "../auth-provider";
import { HomeCenter } from "../center";
import CustomButton from "../custom-button";
import { FlexView, Text } from "../primitive-or-common";

export function Home({ navigation }: AuthNavProps<"Home">): JSX.Element {
  const { login } = React.useContext(AuthContext);

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
      <TouchableWithoutFeedback>
        <ImageBackground
          source={require("../../assets/home-bg.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <StatusBar barStyle="light-content" backgroundColor="transparent" />

          <HomeCenter>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                // paddingTop: 40,
                width: "100%",
              }}
            >
              <Image
                height={1}
                width={1}
                style={{
                  width: "100%",
                  height: 200,
                  // paddingLeft: 10,
                  // paddingRight: 20,
                  marginBottom: 180,
                }}
                source={require("../../assets/home-hero.png")}
                resizeMode="center"
              />
            </View>

            <CustomButton
              text="Login"
              textColor="rgba(210,48,120, 1)" // "#e9486d"
              // textColor="rgb(239, 72, 109)"
              p={2}
              backgroundColor="rgb(239, 238, 238)"
              border="transparent"
              boxShadow="10px 40px 80px 3px rgba(0, 0, 0, 0.2)"
              onPress={() => {
                navigation.navigate("Login");
                // login();
              }}
              width={4 / 5}
            />

            <FlexView
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width={6 / 9}
              my={3}
            >
              <FlexView
                my={3}
                width={1 / 2}
                borderBottomColor="rgba(255,255,255,0.3)"
                borderBottomWidth={2}
              />
              <Text color="rgba(255,255,255,0.8)" mx={3}>
                OR
              </Text>
              <FlexView
                my={3}
                width={1 / 2}
                borderBottomColor="rgba(255,255,255,0.3)"
                borderBottomWidth={2}
              />
            </FlexView>
            <CustomButton
              text="Create an account"
              textColor="rgb(239, 238, 238)"
              backgroundColor="transparent"
              border="2px rgba(255, 255, 255, 0.5) solid"
              p={2}
              onPress={() => {
                navigation.navigate("Register");
              }}
              width={4 / 5}
            />
          </HomeCenter>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
