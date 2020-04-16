import React from "react";
import { FlexView, Text } from "./primitive-or-common";

interface ConversationScreenProps {
  drawerNavigation: any;
}

export const ConversationScreen: React.FC<ConversationScreenProps> = ({}) => {
  return (
    <FlexView
      bg="limegreen"
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Text>CONVERSATION SCREEN</Text>
    </FlexView>
  );
};
