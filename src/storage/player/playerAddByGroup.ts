import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";

import { PlayerStorageDTO } from "./PlayerStoregeDTO";
import { playersGetGroup } from "./playersGetByGroups";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetGroup(group);
    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
