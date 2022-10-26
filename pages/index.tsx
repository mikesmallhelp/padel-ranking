import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PlayerProps } from "../components/Post"
import prisma from '../lib/prisma';

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
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
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
    </Layout>
  )
}

export default Blog