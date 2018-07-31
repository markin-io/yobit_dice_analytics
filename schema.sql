CREATE TABLE games (
    win boolean, -- result of the game
    did bigint, -- identifier
    time timestamp, -- game time
    nick varchar(30), -- user nickname
    imgid integer, -- ???
    cur varchar(3), -- currency
    bet double precision, -- bet amount
    tar boolean, -- target: <48 (false) or >52 (true)
    roll real, -- generator output
    pr double precision -- game result (lost/won amount)
)