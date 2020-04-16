import React from "react";
import { FlexView, Text } from "./primitive-or-common";

interface SavedScreenProps {
  drawerNavigation: any;
}

export const SavedScreen: React.FC<SavedScreenProps> = ({}) => {
  return (
    <FlexView
      bg="rebeccapurple"
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Text>SAVED SCREEN</Text>
    </FlexView>
  );
};
