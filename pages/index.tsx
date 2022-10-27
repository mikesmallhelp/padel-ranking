import React from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";

export type PlayerProps = {
  id: string;
  name: string;
  games: number;
  points: number;
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: false },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  const players = await prisma.player.findMany();

  console.log('Mika: feed: ' + JSON.stringify(feed));
  console.log('Mika: players: ' + JSON.stringify(players));

  return {
    props: { players },
    revalidate: 10,
  };
};

type Props = {
  players: PlayerProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Dashboard/>
  )
}

export default Blog