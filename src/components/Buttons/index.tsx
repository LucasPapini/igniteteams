import * as Btn from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: Btn.ButtonTypeStyleProps;
};
export function Button({ type = "PRIMARY", title, ...rest }: Props) {
  return (
    <Btn.Container type={type} {...rest}>
      <Btn.Title>{title}</Btn.Title>
    </Btn.Container>
  );
}
