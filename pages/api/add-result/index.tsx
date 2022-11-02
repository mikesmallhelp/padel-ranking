import { NextApiRequest, NextApiResponse } from 'next';
import GameResult from '../../../types/GameResult';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const gameResult: GameResult = req.body;
    
    await addPlayerResult(gameResult.team1Result.player1Id, gameResult.team1Result.points);
    await addPlayerResult(gameResult.team1Result.player2Id, gameResult.team1Result.points);
    await addPlayerResult(gameResult.team2Result.player1Id, gameResult.team2Result.points);
    await addPlayerResult(gameResult.team2Result.player2Id, gameResult.team2Result.points);

    res.status(200).json({});
}

async function addPlayerResult(playerId: string, newPoints: number) {
    await prisma.player.update({
        where: {
            id: playerId,
        },
        data: {
            points: {
                increment: newPoints,
            },
        },
    })
}