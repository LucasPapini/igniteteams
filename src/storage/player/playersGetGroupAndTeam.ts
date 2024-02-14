import { playersGetGroup } from "./playersGetByGroups";

export async function playersGetGroupAndTeam(group: string, team: string) {
  try {
    const storege = await playersGetGroup(group);
    const players = storege.filter((player) => player.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}
