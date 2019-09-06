import firebird from '../database/firebird';

class FirebirdController {
  async runQuery(req, res) {
    const database = req.body.database
    const queryDB = req.body.queryDB
    const params = req.body.params
    
    firebird.runQuery(database, queryDB, params)
      .then(result => {
        if (result) {
         
            console.log('Resultado da Query: ' + JSON.stringify(result))
        
          res.send({
            info: 'firebird',
            result,
          })
          } else {
            res.send({})
          }
        }).catch(error => {
          res.json({
            codErro: 9999,
            msgErro: error.message
          })
        })
  }
 
}


export default new FirebirdController();
