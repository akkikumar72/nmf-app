import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Layout } from "../../style";
import { Colors, ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.darkLink,
  headerBackTitleVisible: false,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>{t("ABOUT_SCREEN_TITLE")}</Text.H1>
  ),
});

export default navigationOptions;
