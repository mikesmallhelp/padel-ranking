import { NextApiRequest, NextApiResponse } from 'next';
import PlayerSave from '../../../types/PlayerSave';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const playerSave: PlayerSave = req.body;
    
    await prisma.player.create({
        data: {
            name: playerSave.name,
            games: 0,
            points: 0
        }
    })

    res.status(200).json({});
}