import React from "react";

import { useHelloWorldQuery } from "./__generated__/ts-apollo";
import { FlexView, Text } from "./primitive-or-common";

interface ExploreScreenProps {
  drawerNavigation: any;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({}) => {
  const { data, error, loading } = useHelloWorldQuery();
  return (
    <FlexView bg="pink" flex={1} alignItems="center" justifyContent="center">
      <Text>EXPLORE SCREEN</Text>
      <Text>{loading ? "loading..." : ""}</Text>
      <Text>{data ? data.helloWorld : "no data yet"}</Text>
      <Text>{error ? JSON.stringify(error) : ""}</Text>
    </FlexView>
  );
};
