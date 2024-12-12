import { router } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 30, gap: 30 }}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}
