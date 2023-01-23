delete from "GameResult";
delete from "TeamResult";
delete from "Player";

insert into "Player" (id, name, games, points) values ('idTommi', 'Tommi', 2, 12);
insert into "Player" (id, name, games, points) values ('idVille', 'Ville', 2, 12);
insert into "Player" (id, name, games, points) values ('idJarkko', 'Jarkko', 2, 3);
insert into "Player" (id, name, games, points) values ('idJoonas', 'Joonas', 2, 3);
insert into "Player" (id, name, games, points) values ('idMika', 'Mika', 0, 0);

insert into "TeamResult" (id, "player1Id", "player2Id", points) values ('tr1', 'idTommi', 'idVille', 6);
insert into "TeamResult" (id, "player1Id", "player2Id", points) values ('tr2', 'idJarkko', 'idJoonas', 1);
insert into "TeamResult" (id, "player1Id", "player2Id", points) values ('tr3', 'idTommi', 'idVille', 6);
insert into "TeamResult" (id, "player1Id", "player2Id", points) values ('tr4', 'idJarkko', 'idJoonas', 2);

insert into "GameResult" (id, "teamResult1Id", "teamResult2Id", "createdAt") values ('gr1', 'tr1', 'tr2', '2022-11-08 18:05:16');
insert into "GameResult" (id, "teamResult1Id", "teamResult2Id", "createdAt") values ('gr2', 'tr3', 'tr4', '2022-11-09 19:15:56');