import { Ticket } from "lucide-react-native";
import {
  Image,
  SectionListRenderItemInfo,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { colors } from "@/styles/theme";
import { s } from "./styles";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  cupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <Image style={s.image} source={{ uri: data.cover }} />
      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description} numberOfLines={2}>{data.description}</Text>

        <View style={s.footer}>
          <Ticket size={16} color={colors.red.base} />
          <Text style={s.tickets}>{data.cupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
