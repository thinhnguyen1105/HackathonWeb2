const express = require("express");
const router = express.Router();

const gameController = require("./controller");

router.get("/",(req,res)=>{
  gameController
  .getGames()
  .then(data => res.send(data))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
})

router.get("/:id", (req, res) => {
  gameController
    .getOneGame(req.params.id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/",(req,res) =>{
    gameController
      .createGame(req.body)
      .then(data => res.send(data))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      })
});

router.post("/:id",(req,res)=>{
    gameController
    .updateScore(req.params.id,req.body)
    .then(result => res.send(result))
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
      })
    }
)
router.post("/addRound/:id",(req,res)=>{
  gameController
  .addRound(req.params.id,req.body.length)
  .then(data => res.send(data))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})


module.exports = router;