import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";

import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storage = await groupGetAll();
    const groups = storage.filter((groups) => groups !== groupDeleted);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    console.log(error);
    
  }
}
