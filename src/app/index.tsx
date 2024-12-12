import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 30, gap: 30 }}>
      <Welcome />
      <Steps />
    </View>
  );
}
