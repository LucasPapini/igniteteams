import * as H from "./styles";

import logoImg from "@assets/Logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <H.Container>
      {showBackButton && (
        <H.BackButton>
          <H.BackIcon />
        </H.BackButton>
      )}
      <H.Logo source={logoImg} />
    </H.Container>
  );
}
