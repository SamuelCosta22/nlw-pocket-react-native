import { View, Text } from "react-native";
import { s } from "./styles";
// import { Step } from "../step";
// import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { MapPin, QrCode, Ticket } from "lucide-react-native";
import { colors, fontFamily } from "@/styles/theme";
import { Button } from "../button";
import { Step } from "../step";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <Step
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
        icon={<MapPin size={32} color={colors.red.base} />}
      />

      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
        icon={<QrCode size={32} color={colors.red.base} />}
      />

      <Step
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
        icon={<Ticket size={32} color={colors.red.base} />}
      />
    </View>
  );
}
