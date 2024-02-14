import { TouchableOpacityProps } from "react-native";
import * as F from "./styles";

type Props = TouchableOpacityProps &
  F.FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive, ...rest }: Props) {
  return (
    <F.Container isActive={isActive} {...rest}>
      <F.Title>{title}</F.Title>
    </F.Container>
  );
}
