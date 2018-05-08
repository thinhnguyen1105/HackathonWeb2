const gameModel = require("./model");

const getGames = id =>{
  return gameModel.find();
}

const createGame = ({players}) =>
  new Promise((resolve, reject) => {
    gameModel
      .create({
        players
      })
      .then(data => resolve({ id: data._id }))
      .catch(err => reject(err));
  });

const updateScore = (id, {round, index,totals,sumOfScore}) =>
  new Promise((resolve, reject) => {
    gameModel
      .update(
        {
          _id: id
        },
        {
          $set: {
            [`rounds.${index}`]: round,  
            totals,
            sumOfScore
          } 
        }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getOneGame = id =>{
    return gameModel
      .findOne({
        _id: id
      })
    }
     

const addRound = (id,length)=>
  new Promise((resolve,reject)=>{
    gameModel
    .update({
      _id: id
    },{
      $set: {
        [`rounds.${length}`]: [0,0,0,0]
      } 
    },
    {upsert:true}
    )
    .then(data => resolve(data))
    .catch(err => reject(err))
  })

module.exports = {
    getGames,
    createGame,
    updateScore,
    getOneGame,
    addRound
};