import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";
import Player from '../types/Player';

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

const DashboardContainer = ({ players }: { players: Player[] }) => {
  return (
    <Dashboard players={players} />
  )
}

export default DashboardContainer;