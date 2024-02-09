import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert, FlatList } from "react-native";

import * as Pl from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filteeer";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Buttons";
import { AppError } from "../../utils/AppError";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playersGetGroup } from "../../storage/player/playersGetByGroups";

type RouteParams = {
  group: string;
};

export function Plays() {
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const [team, setTeam] = useState("Time A");
  const [playres, setPlayres] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicioanar."
      );
    }

    const newPlayer = {
      nome: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      const players = await playersGetGroup(group);
      console.log(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possivel adicionar");
      }
    }
  }

  return (
    <Pl.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Pl.Form>
        <Input
          placeholder="Nome da turma"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Pl.Form>

      <Pl.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal={true}
        />
        <Pl.NumberOfPlays>{playres.length}</Pl.NumberOfPlays>
      </Pl.HeaderList>

      <FlatList
        data={playres}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas neste time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          playres.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Pl.Container>
  );
}
