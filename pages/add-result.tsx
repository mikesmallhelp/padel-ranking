import Player from '../types/Player';
import { GetServerSideProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";
import AddResult from '../components/AddResult'

export const getServerSideProps: GetServerSideProps = async () => {
    const players = await prisma.player.findMany({
        orderBy: [
            {
                name: 'asc'
            },
        ]
    });

    return {
        props: { players }
    };
};

const AddResultContainer = ({ players }: { players: Player[] }) => {
    return (
        <Dashboard title="Lisää tulos">
            <AddResult players={players} />
        </Dashboard>
    )
}

export default AddResultContainer;