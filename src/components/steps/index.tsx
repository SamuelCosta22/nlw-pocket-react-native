import { View, Text } from "react-native";
import { s } from "./styles";
// import { Step } from "../step";
// import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { MapPin, QrCode, Ticket } from "lucide-react-native";
import { colors, fontFamily } from "@/styles/theme";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <View style={s.containerStep}>
        <MapPin size={32} color={colors.red.base} />
        <View style={s.details}>
          <Text style={{fontFamily: fontFamily.semiBold}}>Encontre estabelecimentos</Text>
          <Text style={s.description}>
            Veja locais perto de você que são parceiros Nearby
          </Text>
        </View>
      </View>

      <View style={s.containerStep}>
        <QrCode size={32} color={colors.red.base} />
        <View style={s.details}>
          <Text style={s.titleStep}>Ative o cupom com QR Code</Text>
          <Text style={s.description}>
            Escaneie o código no estabelecimento para usar o benefício
          </Text>
        </View>
      </View>

      <View style={s.containerStep}>
        <Ticket size={32} color={colors.red.base} />
        <View style={s.details}>
          <Text style={s.titleStep}>Garanta vantagens perto de você</Text>
          <Text style={s.description}>
            Ative cupons onde estiver, em diferentes tipos de estabelecimento
          </Text>
        </View>
      </View>
    </View>
  );
}
