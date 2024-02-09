import AsyncStorage from "@react-native-async-storage/async-storage";

import { PlayerStorageDTO } from "./PlayerStoregeDTO";

import { PLAYER_COLLECTION } from "../storageConfig";

export async function playersGetGroup(group: string) {
  try {
    const store = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const players: PlayerStorageDTO[] = store ? JSON.parse(store) : [];
    return players;
  } catch (error) {
    throw error;
  }
}
