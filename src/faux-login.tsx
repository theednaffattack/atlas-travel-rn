import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import styled from "styled-components/native";
import {
  space,
  layout,
  LayoutProps,
  SpaceProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  TypographyProps,
  typography,
} from "styled-system";

import CustomButton from "./custom-button";
import { FlexView, Text } from "./primitive-or-common";

const TextInput = styled.TextInput<
  ColorProps &
    FlexboxProps &
    LayoutProps &
    TypographyProps &
    SpaceProps & { borderWidth?: number }
>`
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
 ${(props) => props.borderWidth}
`;

interface LoginFormProps {
  loginFunc: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ loginFunc }) => {
  const [activeField, setActiveField] = React.useState<
    null | "emailIsActive" | "passwordIsActive"
  >(null);
  const [keepMeLoggedIn, setKeepMeLoggedIn] = React.useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <FlexView width={1} py={2} px={4} mb="auto" bg="transparent">
        <Text color="#444444" mx="auto" my={4} fontSize={[4]}>
          Sign in
        </Text>
        <TextInput
          pl={1}
          pb={2}
          color="#444444"
          fontSize={[2]}
          onFocus={() => {
            activeField === "emailIsActive"
              ? null
              : setActiveField("emailIsActive");
          }}
          placeholder="Enter Email"
        />

        <FlexView
          p={0}
          width={1}
          // borderBottom="2px rgba(255,255,255,1) solid"
          style={{
            borderColor: activeField === "emailIsActive" ? "#f4327f" : "#ccc",
            borderWidth: 1.25,
          }}
        />
        <TextInput
          mt={4}
          pl={1}
          pb={2}
          color="#444444"
          fontSize={[2]}
          onFocus={() => {
            activeField === "passwordIsActive"
              ? null
              : setActiveField("passwordIsActive");
          }}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Enter Password"
        />

        <FlexView
          p={0}
          width={1}
          style={{
            borderColor:
              activeField === "passwordIsActive" ? "#f4327f" : "#ccc",
            borderWidth: 1.25,
          }}
        />
        <FlexView flexDirection="row">
          {/* fontFamily="montserrat" */}
          <Text mr="auto" my={4} color="#444444" fontSize={[2]}>
            Keep me logged in
          </Text>

          <ToggleSwitch
            isOn={keepMeLoggedIn ? true : false}
            onColor="#d23078"
            offColor="#ccc"
            size="medium"
            onToggle={(isOn) => setKeepMeLoggedIn(!keepMeLoggedIn)}
          />
        </FlexView>

        <CustomButton
          p={12}
          backgroundColor="#d23078"
          border="transparent"
          textColor="#f2f2f2"
          text="Login"
          onPress={loginFunc}
        />
      </FlexView>
    </TouchableWithoutFeedback>
  );
};
