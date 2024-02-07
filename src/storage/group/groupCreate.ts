import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../storageConfig";
import { groupGetAll } from "./groupGetAll";
import { AppError } from "../../utils/AppError";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGrup = await groupGetAll();

    const groupAlreadyExists = storedGrup.includes(newGroupName);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo com esse nome...");
    }
    const storage = JSON.stringify([...storedGrup, newGroupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
