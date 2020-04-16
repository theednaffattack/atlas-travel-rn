import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { color, ColorProps } from "styled-system";

interface CenterProps {}

export const MyView = styled.View<ColorProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${color}
`;

export const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};

export const HomeCenter: React.FC<CenterProps & ColorProps> = ({
  bg,
  children,
}) => {
  return <MyView bg={bg}>{children}</MyView>;
};
