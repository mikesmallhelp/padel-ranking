import PlayerSave from './PlayerSave';

type Player = PlayerSave & {
    id: string;
    games: number;
    points: number;
};

export default Player;