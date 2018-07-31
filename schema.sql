CREATE TABLE games (
    win boolean, -- result of the game
    did integer NOT NULL, -- identifier
    time date, -- game time
    nick varchar(30), -- user nickname
    imgid integer NOT NULL, -- ???
    cur varchar(3), -- currency
    bet double precision, -- bet amount
    tar boolean, -- target: <48 (true) or >52 (false)
    roll real, -- generator output
    pr double precision -- game result (lost/won amount)
)