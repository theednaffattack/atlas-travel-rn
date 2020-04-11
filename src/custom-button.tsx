import React from "react";
import styled from "styled-components/native";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  color,
  BoxShadowProps,
  flexbox,
  FlexboxProps,
} from "styled-system";
import { LinearGradient } from "expo-linear-gradient";
import { NativeSyntheticEvent, NativeTouchEvent, View } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

interface ButtonContainerProps {
  backgroundColor: string;
}

interface ButtonTextProps {
  textColor: string;
}

interface CustomButtonProps extends ButtonTextProps, ButtonContainerProps {
  text: string;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

interface CustomButtonStyledSystemProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps {}

export const CustomButton = ({
  backgroundColor,
  border,
  boxShadow,
  height,
  onPress,
  text,
  textColor,
  width,
  p,
}: CustomButtonProps & CustomButtonStyledSystemProps) => (
  <ButtonContainer
    backgroundColor={backgroundColor}
    border={border}
    boxShadow={boxShadow}
    onPress={onPress}
    height={height}
    width={width}
    p={p}
  >
    <ButtonText textColor={textColor} onPress={onPress}>
      {text}
    </ButtonText>
  </ButtonContainer>
);

export default CustomButton;

// .btn {
//   background-color: rgb(238, 238, 238);
//   box-shadow: 0px 40px 80px 0px rgba(0, 0, 0, 0.1);
//   position: absolute;
//   left: 85px;
//   top: 1582px;
//   width: 956px;
//   height: 140px;
//   z-index: 2071;
// }

const GradientContainer = styled.TouchableOpacity<
  FlexboxProps & LayoutProps & { text: string; textColor: string }
>`
  /* box-shadow: 0px 30px 80px 0px rgba(0, 0, 0, 0.1); */
  ${layout}
  ${flexbox}
`;

export const GradientButton = ({ onPress, text, textColor }) => {
  return (
    <GradientContainer text={text} textColor={textColor} flex={1} width={4 / 5}>
      <ButtonText textColor={textColor} onPress={onPress}>
        {text}
      </ButtonText>
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
        <ButtonText textColor={textColor} onPress={onPress}>
          {text}
        </ButtonText>
      </LinearGradient>
    </GradientContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity<
  ButtonContainerProps & CustomButtonStyledSystemProps
>`
${color}
  ${space}
  ${layout}
  ${border}
  border-radius: 25px;
  background-color: ${(props) => props.backgroundColor};
 
  border-width: 3px;

  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.2;
  shadow-radius: 13px;
  elevation: 1;

`;

// padding: 12px;
// overflow: hidden;
// border-color: white;
// shadow-color: rgba(0,0,0,1);
// shadow-radius: 10px;
// shadow-opacity: .5;

// shadow-color: #000;
// shadow-offset: 0px 1px;
// shadow-opacity: 0.2;
// shadow-radius: 3px;
// elevation: 1;

// /* shadow-offset: {width: 0, height: 2}; */

const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 15px;
  color: ${(props) => props.textColor};
  text-align: center;
`;
