import { ButtonIcon } from "../ButtonIcon";
import * as Pc from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Pc.Container>
      <Pc.Icon name="person" />
      <Pc.Name>{name}</Pc.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Pc.Container>
  );
}
