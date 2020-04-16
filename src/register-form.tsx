import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import { Formik } from "formik";
import { CheckBox } from "react-native-elements";
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
import { AuthNavProps, AuthParamList } from "./auth-param-list";
import { StackNavigationProp } from "@react-navigation/stack";
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

interface RegisterFormProps {
  navigation: StackNavigationProp<AuthParamList, "Register">;
}

function registerFunc({ navigation }: AuthNavProps<"Home">): void {
  navigation.navigate("Confirm");
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ navigation }) => {
  const [value, setValue] = useState(0);
  const [activeField, setActiveField] = React.useState<
    | null
    | "emailIsActive"
    | "passwordIsActive"
    | "repeatPasswordIsActive"
    | "usernameIsActive"
  >(null);
  const [keepMeLoggedIn, setKeepMeLoggedIn] = React.useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
        username: "",
        agreesToTermsAndConditions: false,
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => {
        const { agreesToTermsAndConditions, username } = values;
        return (
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <FlexView width={1} py={2} px={4} mb="auto" bg="transparent">
              <Text color="#444444" mx="auto" my={4} fontSize={[4]}>
                Join us
              </Text>
              <TextInput
                pl={1}
                pb={2}
                color="#444444"
                fontSize={[2]}
                onFocus={() => {
                  activeField === "usernameIsActive"
                    ? null
                    : setActiveField("usernameIsActive");
                }}
                placeholder="Enter Username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={username}
              />

              <FlexView
                p={0}
                width={1}
                // borderBottom="2px rgba(255,255,255,1) solid"
                style={{
                  borderColor:
                    activeField === "usernameIsActive" ? "#f4327f" : "#ccc",
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
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
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
              <TextInput
                mt={4}
                pl={1}
                pb={2}
                color="#444444"
                fontSize={[2]}
                onFocus={() => {
                  activeField === "repeatPasswordIsActive"
                    ? null
                    : setActiveField("repeatPasswordIsActive");
                }}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="Repeat Password"
                onChangeText={handleChange("repeatPassword")}
                onBlur={handleBlur("repeatPassword")}
                value={values.repeatPassword}
              />

              <FlexView
                p={0}
                width={1}
                style={{
                  borderColor:
                    activeField === "repeatPasswordIsActive"
                      ? "#f4327f"
                      : "#ccc",
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
                  activeField === "emailIsActive"
                    ? null
                    : setActiveField("emailIsActive");
                }}
                placeholder="Enter Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />

              <FlexView
                p={0}
                width={1}
                // borderBottom="2px rgba(255,255,255,1) solid"
                style={{
                  borderColor:
                    activeField === "emailIsActive" ? "#f4327f" : "#ccc",
                  borderWidth: 1.25,
                }}
              />

              <FlexView
                flexDirection="row"
                // justifyContent="center"
                alignItems="center"
                py={4}
              >
                <CheckBox
                  checked={agreesToTermsAndConditions}
                  checkedColor="#f4327f"
                  onPress={() =>
                    setFieldValue(
                      "agreesToTermsAndConditions",
                      !agreesToTermsAndConditions
                    )
                  }
                />
                <Text color="#444444" fontSize={[2]} ml={2}>
                  Agree to our
                </Text>

                <Button
                  title="Terms & Stuff"
                  onPress={
                    () => undefined
                    // navigate to terms_and_conditions
                  }
                />
              </FlexView>

              <CustomButton
                p={12}
                backgroundColor="#d23078"
                border="transparent"
                textColor="#f2f2f2"
                text="Sign up"
                onPress={() => registerFunc({ navigation })}
              />
            </FlexView>
          </TouchableWithoutFeedback>
        );
      }}
    </Formik>
  );
};

// .login_btn {
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   width: 5173px;
//   height: 18100px;
//   z-index: 2022;
// }
// .Login {
//   font-size: 38px;
//   font-family: "Montserrat";
//   color: rgb(255, 255, 255);
//   line-height: 3.368;
//   text-align: center;
//   position: absolute;
//   left: 1784.899px;
//   top: 1651.583px;
//   z-index: 2021;
// }
// .btn {
//   background-image: -moz-linear-gradient( 87deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%);
//   background-image: -webkit-linear-gradient( 87deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%);
//   background-image: -ms-linear-gradient( 87deg, rgb(210,48,120) 6%, rgb(254,97,97) 74%, rgb(255,121,85) 100%);
//   box-shadow: 0px 30px 80px 0px rgba(0, 0, 0, 0.1);
//   position: absolute;
//   left: 1370px;
//   top: 1521px;
//   width: 956px;
//   height: 140px;
//   z-index: 2020;
// }
