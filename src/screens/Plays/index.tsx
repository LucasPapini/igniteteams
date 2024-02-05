import { useState } from "react";
import { FlatList } from "react-native";

import * as Pl from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filteeer";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Buttons";

export function Plays() {
  const [team, setTeam] = useState("Time A");
  const [playres, setPlayres] = useState([
    // "Lucas",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
    // "Papini",
  ]);

  return (
    <Pl.Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Pl.Form>
        <Input placeholder="Nome da turma" autoCorrect={false} />
        <ButtonIcon icon="add" type="PRIMARY" />
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
          playres.length === 0 && { flex: 1}
        ]}
      />

      <Button 
        title="Remover turma"
        type="SECONDARY"
      />
    </Pl.Container>
  );
}
