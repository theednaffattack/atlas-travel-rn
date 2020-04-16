import React from "react";
import { FlexView, Text } from "./primitive-or-common";

interface ProfileScreenProps {
  drawerNavigation: any;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  return (
    <FlexView bg="#07c" flex={1} alignItems="center" justifyContent="center">
      <Text>PROFILE SCREEN</Text>
    </FlexView>
  );
};
