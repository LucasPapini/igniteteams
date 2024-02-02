import * as LE from "./styles";

type Props = {
  message: string;
};
export function ListEmpty({ message }: Props) {
  return (
    <LE.Container>
      <LE.Message>{message}</LE.Message>
    </LE.Container>
  );
}
