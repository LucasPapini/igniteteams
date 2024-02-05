import * as B from "./styles";

import { MaterialIcons } from '@expo/vector-icons'

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: B.ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <B.Container>
      <B.Icon name={icon} type={type} />
    </B.Container>
  );
}
