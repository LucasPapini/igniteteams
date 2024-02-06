import * as Ng from "./styles";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Buttons";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();
  const handleNew = () => {
    navigation.navigate("players", { group });
  };

  return (
    <Ng.Container>
      <Header showBackButton />

      <Ng.Content>
        <Ng.Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Ng.Content>
    </Ng.Container>
  );
}
