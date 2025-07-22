require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const user = {
  "login": "prathameshmone",
  "id": 220432927,
  "node_id": "U_kgDODSOKHw",
  "avatar_url": "https://avatars.githubusercontent.com/u/220432927?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prathameshmone",
  "html_url": "https://github.com/prathameshmone",
  "followers_url": "https://api.github.com/users/prathameshmone/followers",
  "following_url": "https://api.github.com/users/prathameshmone/following{/other_user}",
  "gists_url": "https://api.github.com/users/prathameshmone/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prathameshmone/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prathameshmone/subscriptions",
  "organizations_url": "https://api.github.com/users/prathameshmone/orgs",
  "repos_url": "https://api.github.com/users/prathameshmone/repos",
  "events_url": "https://api.github.com/users/prathameshmone/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prathameshmone/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-07-12T00:47:07Z",
  "updated_at": "2025-07-22T03:01:19Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('pratham_13')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github',(req,res) => {
  res.json(user);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})