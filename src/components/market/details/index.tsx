import { View, Text } from "react-native";

import { Info } from "../info";

import { Phone, MapPin, Ticket } from "lucide-react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  cupouns: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};

export function Details({ data }: Props) {
  const cupons = 10;
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>
        <Info
          icon={<Ticket size={16} color={colors.gray[400]} />}
          description={`${data.cupouns} cupons disponíveis`}
        />
        <Info
          icon={<MapPin size={16} color={colors.gray[400]} />}
          description={data.address}
        />
        <Info
          icon={<Phone size={16} color={colors.gray[400]} />}
          description={data.phone}
        />
      </View>

      <View style={s.group}>
        <Text style={s.title}>Regulamento</Text>
        {data.rules.map((item) => (
          <Text
            key={item.id}
            style={s.rule}
          >{`\u2022 ${item.description}`}</Text>
        ))}
      </View>
    </View>
  );
}
