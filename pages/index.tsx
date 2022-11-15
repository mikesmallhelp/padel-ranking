import { GetServerSideProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";
import Player from '../types/Player';
import PadelGames from '../components/PadelGames';

export const getServerSideProps: GetServerSideProps = async () => {
  const players = await prisma.player.findMany({
    orderBy: [
      {
        points: 'desc',
      },
    ]
  });

  return {
    props: { players }
  };
};

const PadelGamesContainer = ({ players }: { players: Player[] }) => {
  return (
    <Dashboard title="Padel-pelit 15.11.2022 16:18">
      <PadelGames players={players} />
    </Dashboard>
  )
}

export default PadelGamesContainer;