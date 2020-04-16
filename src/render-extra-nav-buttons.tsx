import React from "react";
import { DrawerItem } from "@react-navigation/drawer";

import { NavDrawerItemProps } from "./custom-drawer-content";
import Icon from "./icons-plural";
import { AuthContext } from "./auth-provider";

interface RenderExtraNavButtonsProps {
  navigation: any;
}

interface ExtraNavDrawerButtonsProps {
  logout: NavDrawerItemProps;
  settings: NavDrawerItemProps;
}

const ExtraNavDrawerButtons: ExtraNavDrawerButtonsProps = {
  settings: {
    label: "Settings",
    icon: () => (
      <Icon height={20} width={20} name="settings" fill="rgba(170, 170, 170)" />
    ),
    navigation: (navigation) =>
      navigation.navigate("Settings", { screen: "Settings" }),
  },
  logout: {
    label: "Logout",
    icon: () => (
      <Icon height={20} width={20} name="logout" fill="rgba(170, 170, 170)" />
    ),
    navigation: (navigation) =>
      navigation.navigate("Search", { screen: "Search" }),
  },
};

export const RenderExtraNavButtons: React.FC<RenderExtraNavButtonsProps> = ({
  navigation,
}) => {
  const { logout } = React.useContext(AuthContext);
  return (
    <>
      {Object.keys(ExtraNavDrawerButtons).map((buttonKey, buttonIdx) => {
        if (buttonKey === "logout") {
          return (
            <DrawerItem
              key={buttonIdx}
              label={ExtraNavDrawerButtons[buttonKey].label}
              onPress={() => logout()}
              icon={ExtraNavDrawerButtons[buttonKey].icon}
            />
          );
        }
        return (
          <DrawerItem
            key={buttonIdx}
            label={ExtraNavDrawerButtons[buttonKey].label}
            onPress={() =>
              ExtraNavDrawerButtons[buttonKey].navigation(navigation)
            }
            icon={ExtraNavDrawerButtons[buttonKey].icon}
          />
        );
      })}
    </>
  );
};
