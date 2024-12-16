import { Text, View } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";
import React from "react";

type Props = {
  description: string;
  icon: React.ReactNode;
};

export function Info({ icon, description }: Props) {
  return (
    <View style={s.container}>
      {icon}
      <Text style={s.text}>{description}</Text>
    </View>
  );
}
