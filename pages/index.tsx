import React from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';

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
    <>
      <div className="page">
        <h1>Ranking</h1>
        <main>
          {props.players.map((player) => (
            <div key={player.id}><span>{player.name}</span>&nbsp;<span>{player.points}</span></div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </>
  )
}

export default Blog