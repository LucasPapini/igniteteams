import { useState } from "react";

import { FlatList, Text } from "react-native";

import * as G from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export const Groups = () => {
  const [groups, setGroups] = useState([
    "RocktSeat",
    "RocktSeat",
    "RocktSeat",
    "RocktSeat",
    "RocktSeat",
    "RocktSeat",
  ]);

  return (
    <G.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

      <Text>Paginação</Text>
    </G.Container>
  );
};
