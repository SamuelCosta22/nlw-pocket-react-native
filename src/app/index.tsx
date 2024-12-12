import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { View } from "react-native";

import { IconPlus } from "@tabler/icons-react-native";
import { QrCode } from "lucide-react-native";
import { colors } from "@/styles/theme";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 30, gap: 30 }}>
      <Welcome />
      <Steps />
      <Button>
        <Button.Title>Começar</Button.Title> 
      </Button>
    </View>
  );
}
