import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";
import Player from '../types/Player';
import PadelGames from '../components/PadelGames';

export const getStaticProps: GetStaticProps = async () => {
  const players = await prisma.player.findMany({
    orderBy: [
      {
        points: 'desc',
      },
    ]
  });
  console.log('Mika: players: ' + JSON.stringify(players));

  return {
    props: { players }
  };
};

const PadelGamesContainer = ({ players }: { players: Player[] }) => {
  return (
    <Dashboard title="Padel-pelit">
      <PadelGames players={players} />
    </Dashboard>
  )
}

export default PadelGamesContainer;