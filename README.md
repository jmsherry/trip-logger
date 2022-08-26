# Trip Logger

## Aims

- To allow a person to log their trips to different countries (MVP)
- To allow them to see which countries they have left to visit \*


## Data Shapes

### Entities

 - Places (countries) <https://restcountries.com/v3.1/all>
 - Users (Auth0 - sub(id)) - store extra info
 - Trips [user, place, date]

 ### Views

 - Profile (see your own trips)
 - Unvisited countries
 - Leaderboard - who has visited the most countries

 #### Private Routes
 <https://www.robinwieruch.de/react-router-private-routes/>

---

### Run Commands
| Environment |  Server  |  Client |
|---------------|-------------|------|
| DEV: |  nodemon | vite-dev-server |
| PROD: |    node   |   *static file served* |

 ### Hosting
| Service |  Server  |  Database |
|---------------|-------------|------|
| local |  node | mongodb |
| remote |    heroku   |   Mongodb Atlas |

#### ENV VARS
MONGODB_URI (from Atlas)
NPM_CONFIG_PRODUCTION false


#### Express JWT FIX
```bash
npm uninstall express-jwt jwks-rsa
npm i express-jwt@^6.0.0 jwks-rsa@^2.0.1
```