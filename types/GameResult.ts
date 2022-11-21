import { GameResultSave } from './GameResultSave';

type GameResult = GameResultSave & {
    id?: string;
    createdAt?: Date;
}

export default GameResult;