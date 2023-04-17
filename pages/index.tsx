import { GetServerSideProps } from "next"
import prisma from "../lib/prisma";
import Dashboard from "../components/dashboard/Dashboard";
import Player from "../types/Player";
import GameResult from "../types/GameResult";
import PadelGames from "../components/padel-games/PadelGames";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useUser } from '@auth0/nextjs-auth0/client';

export const getServerSideProps: GetServerSideProps = async () => {
  const players = await prisma.player.findMany({
    orderBy: [
      {
        points: "desc",
      },
    ]
  });

  const gameResults = await prisma.gameResult.findMany({
    include: {
      team1Result: {
        include: {
          player1: true,
          player2: true
        }
      },
      team2Result: {
        include: {
          player1: true,
          player2: true
        }
      },
    },
    orderBy: [
      {
        createdAt: "desc"
      }
    ]
  });

  console.log("Players:" + JSON.stringify(players));
  console.log("GameResults:" + JSON.stringify(gameResults));

  return {
    props: { players, gameResults }
  };
};

const PadelGamesContainer = ({ players, gameResults }: { players: Player[], gameResults: GameResult[] }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <a href="/api/auth/login">Login</a>
      <br></br>
      <a href="/api/auth/logout">Logout</a>
      <br></br>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <Dashboard title="Padel-pelit">
        <PadelGames players={players} gameResults={gameResults} />
      </Dashboard>
    </>
  )
}

export default PadelGamesContainer;