import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";
import Player from '../types/Player';

export const getStaticProps: GetStaticProps = async () => {
  const players = await prisma.player.findMany();
  console.log('Mika: players: ' + JSON.stringify(players));

  return {
    props: { players },
    revalidate: 10,
  };
};

const DashboardContainer = ({ players }: { players: Player[] }) => {
  return (
    <Dashboard players={players} />
  )
}

export default DashboardContainer;