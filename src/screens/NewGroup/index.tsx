import * as Ng from "./styles";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Buttons";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleNew = async () => {
    try {

      if(group.trim().length === 0){
        return Alert.alert("Novo Groupo", "Informe o nome da turma");
      }
      
      await groupCreate(group);

      navigation.navigate("players", { group });
      
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Groupo", error.message);
      } else {
        Alert.alert("Novo Groupo", "Não foi possivel criar um novo grupo.");
        throw error;
      }
    }
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
