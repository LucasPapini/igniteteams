import { useState, useEffect, useCallback } from "react";

import { FlatList } from "react-native";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import * as G from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Buttons";
import { groupGetAll } from "../../storage/group/groupGetAll";
import { Loading } from "@components/Loading";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <G.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </G.Container>
  );
};
