import Player from "../types/Player";
import { GetServerSideProps } from "next"
import prisma from "../lib/prisma";
import Dashboard from "../components/dashboard/Dashboard";
import Players from "../components/players/Players";

export const getServerSideProps: GetServerSideProps = async () => {
    const players = await prisma.player.findMany({
        orderBy: [
            {
                name: "asc"
            },
        ]
    });

    return {
        props: { players }
    };
};

const PlayersContainer = ({ players }: { players: Player[] }) => {
    return (
        <Dashboard title="Pelaajat">
            <Players players={players} />
        </Dashboard>
    )
}

export default PlayersContainer;