import { TouchableOpacityProps } from "react-native";

import * as GC from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <GC.Container {...rest}>
      <GC.Icon />
      <GC.Title>{title}</GC.Title>
    </GC.Container>
  );
}
