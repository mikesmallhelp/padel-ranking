import Player from "./Player";
import TeamResultSave from "./TeamResultSave";

type TeamResult = TeamResultSave & {
    player1:   Player;
    player2:   Player;
}

export default TeamResult;