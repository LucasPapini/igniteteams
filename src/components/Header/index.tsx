import { useNavigation } from "@react-navigation/native";

import * as H from "./styles";

import logoImg from "@assets/Logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("groups");
  };

  return (
    <H.Container>
      {showBackButton && (
        <H.BackButton onPress={handleGoBack}>
          <H.BackIcon />
        </H.BackButton>
      )}
      <H.Logo source={logoImg} />
    </H.Container>
  );
}
