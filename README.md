League of legends API using Node and express (usage TBD)

### Setup 
- npm install
- API key from Riot API. Get it [here](https://developer.riotgames.com/)
- config.json with the format 
```
{
  "APIKEY": ****************,
  "PORT":4300 // or another port
}
```
- npm start

### Functionality so far
- Route '/users' that queries the a given summoner's details given a username
