import React from "react";
import { FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FlexView, Text } from "./primitive-or-common";
import Icon, { IconProps } from "./icons-plural";

interface FeaturesProps {}

export const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <FlexView bg="#f2f2f2" width={1}>
      <Text my={3} ml={3} color="#444" fontSize={3}>
        Features
      </Text>

      <FlatList
        horizontal={true}
        data={featureOptions}
        renderItem={({ item: { name, label, icon } }) => (
          <FlexView key={name} px={3} alignItems="center">
            <FlexView
              bg="#f4327f"
              height={55}
              width={55}
              borderRadius={50}
              alignItems="center"
              justifyContent="center"
              pt={name === "wifi" ? 2 : null}
              style={{
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(255,121,85, .06)",
                  "rgba(254,97,97, .74)",
                  "rgba(210,48,120, 1)",
                  "rgba(210,48,120, 1)",
                ]}
                start={[0.0, 0.0]}
                end={[1.0, 1.0]}
                style={{
                  // opacity: 0.5,
                  height: 75,
                  width: 75,
                  // borderColor: "green",
                  // borderWidth: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: name === "wifi" ? 2 : null,
                }}
              >
                <Icon name={name} height={25} width={25} fill="#fff" />
              </LinearGradient>
            </FlexView>

            <FlexView my={3} alignItems="center" justifyContent="center">
              <Text>{label}</Text>
            </FlexView>
          </FlexView>
        )}
      />
    </FlexView>
  );
};

interface FeatureOptionsProps {
  name: IconProps["name"];
  label: string;
  icon: () => JSX.Element;
}

const featureOptions: FeatureOptionsProps[] = [
  {
    name: "wifi",
    label: "Wi-Fi",
    icon: () => <Icon name="love" fill="blue" height={20} width={20} />,
  },
  {
    name: "restaurant",
    label: "Hotel Restaurant",
    icon: () => <Icon name="love" fill="blue" height={20} width={20} />,
  },
  {
    name: "bar",
    label: "Inn-Bar",
    icon: () => <Icon name="love" fill="blue" height={20} width={20} />,
  },
  {
    name: "parking",
    label: "Parking Spot",
    icon: () => <Icon name="love" fill="blue" height={20} width={20} />,
  },
];
