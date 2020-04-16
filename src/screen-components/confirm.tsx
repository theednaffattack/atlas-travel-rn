import React from "react";
import { View, Text as TextBase, Button } from "react-native";
import styled from "styled-components/native";
import {
  space,
  layout,
  LayoutProps,
  SpaceProps,
  typography,
  TypographyProps,
  ColorProps,
  color,
} from "styled-system";

import { HomeCenter } from "../center";
import { AuthNavProps } from "../auth-param-list";
import CustomButton from "../custom-button";
import EmailCircleIcon from "../icon";
import Icon from "../icons-plural";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlexView } from "../primitive-or-common";

// interface ConfirmProps {}

const Text = styled(TextBase)<
  ColorProps & LayoutProps & SpaceProps & TypographyProps
>`
${color}
  ${layout}
  ${space}
  ${typography}
`;

export const Confirm = ({ navigation }: AuthNavProps<"Home">): JSX.Element => {
  return (
    <HomeCenter bg="rgb(127,127,127)">
      <FlexView
        bg="#f2f2f2"
        px={4}
        py={4}
        width={1}
        flexDirection="column"
        alignItems="center"
        pb={4}
      >
        <FlexView width={1} m={0} p={0} alignItems="flex-start">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon height={15} width={15} name="close" fill="#aaaaaa" />
          </TouchableOpacity>
          {/* <Button title="X" onPress={() => navigation.goBack()} /> */}
        </FlexView>
        <FlexView>
          <EmailCircleIcon height={55} width={55} name="email-circle" />
        </FlexView>
        <Text my={3} fontSize={3} color="#444444">
          We sent you an email!
        </Text>
        <Text mb={2} color="#888888">
          lorem ipsum stuff lorem ipsum stufflorem ipsum stufflorem ipsum
          stufflorem ipsum stufflorem ipsum stufflorem ipsum stuff
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: -25,
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <CustomButton
            text="Got it!"
            textColor="#f2f2f2"
            onPress={() => navigation.goBack()}
            backgroundColor="#f4327f"
            p={2}
            width={4 / 7}
            border="transparent"
          />
        </View>
      </FlexView>
    </HomeCenter>
  );
};
