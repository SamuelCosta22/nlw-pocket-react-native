import { Text, View } from "react-native";
import { s } from "./styles";
import React, { ReactNode } from "react";

type StepProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function Step({ title, description, icon }: StepProps) {
  return (
    <View style={s.container}>
      {icon}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
