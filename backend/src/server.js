const app = require("./app")

const server = app

const port = 3000

server.listen(port, () => {
    console.log(`Server running on: https://localhost:${port}`);
})