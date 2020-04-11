import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  BorderProps,
  border,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  borderTop,
  BorderTopProps,
  typography,
  TypographyProps,
  borders,
  BordersProps,
} from "styled-system";
import Modal from "react-native-modal";

import { LoginForm } from "./faux-login";
import { AuthParamList, AuthNavProps } from "./auth-param-list";
import { AuthContext } from "./auth-provider";
import { Center, HomeCenter } from "./center";
import CustomButton from "./custom-button";
import { LoginModal } from "./login-modal_v2";
import { RegisterModal } from "./register-modal_v1";
import { RegisterForm } from "./register-form";

interface AuthStackProps {}

export const MyText = styled.Text<ColorProps & SpaceProps & TypographyProps>`
  ${color}
  ${typography}
  ${space}
`;

export const MyView = styled.View<
  BorderProps & BordersProps & ColorProps & LayoutProps & SpaceProps
>`
  ${border}
  ${borders}
  ${color}
  ${layout}
  ${space}
`;

export const FlexView = styled.View<
  BorderProps & ColorProps & FlexboxProps & LayoutProps & SpaceProps
>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
`;

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});

function Home({ navigation }: AuthNavProps<"Home">) {
  const { login } = React.useContext(AuthContext);

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

      <ImageBackground
        source={require("../assets/home-bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <HomeCenter bg="#ccc">
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
              source={require("../assets/home-hero.png")}
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
            boxShadow="10px 40px 80px 10px rgba(0, 0, 0, 0.2)"
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
            <MyView
              my={3}
              width={1 / 2}
              borderBottomColor="rgba(255,255,255,0.3)"
              borderBottomWidth={2}
            />
            <MyText color="rgba(255,255,255,0.8)" mx={3}>
              OR
            </MyText>
            <MyView
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
    </LinearGradient>
  );
}

function Login({ navigation }: AuthNavProps<"Login">) {
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
        "rgba(210,48,120, 1)", //
        "rgba(210,48,120, 1)", //
      ]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={{ flex: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <TouchableWithoutFeedback>
        <ImageBackground
          source={require("../assets/login-bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <FlexView
            mt={5}
            mb={6}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            style={{ zIndex: 9999 }}
          >
            <View style={{ left: 0, position: "absolute", marginLeft: 4 }}>
              <Button
                onPress={() => {
                  navigation.goBack();
                }}
                title="X"
                color="#f2f2f2"
              />
            </View>
            <FlexView alignItems="center" justifyContent="center">
              <MyText fontSize={2} color="white">
                Sign in
              </MyText>
            </FlexView>
          </FlexView>

          <FlexView mt="auto" pb={3} width={1} bg="#f2f2f2">
            <LoginForm loginFunc={login} />
          </FlexView>
          <FlexView
            mt="auto"
            pb={5}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <MyText color="#f2f2f2" fontSize={2}>
              Not a user?{" "}
            </MyText>
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

function Register({ navigation, route }: AuthNavProps<"Register">) {
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
          source={require("../assets/register-bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <FlexView
            mt={5}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            style={{ zIndex: 9999 }}
          >
            <View style={{ left: 0, position: "absolute", marginLeft: 4 }}>
              <Button
                onPress={() => navigation.goBack()}
                title="X"
                color="#f2f2f2"
              />
            </View>
            <FlexView alignItems="center" justifyContent="center">
              <MyText fontSize={2} color="white">
                Sign up
              </MyText>
            </FlexView>
          </FlexView>

          <FlexView mt="auto" pb={3} width={1} bg="#f2f2f2">
            <RegisterForm />
          </FlexView>

          <FlexView
            mt="auto"
            pb={5}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <MyText color="#f2f2f2" fontSize={2}>
              Already a member?{" "}
            </MyText>
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
    // <Center>
    //   <Text>route name: {route.name}</Text>
    //   <Button
    //     title="go to login"
    //     onPress={() => {
    //       // navigation.navigate("Login");
    //       navigation.goBack();
    //     }}
    //   />
    // </Center>
  );
}

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
    </Stack.Navigator>
  );
};
