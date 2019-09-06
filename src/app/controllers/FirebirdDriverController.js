import firebirdDriver from '../database/firebirdDriver';

class FirebirdDriverController {
  async runQuery(req, res) {
  const database = req.body.database
  const queryDB = req.body.queryDB
        
  firebirdDriver.runQuery(database, queryDB)
    .then(result => {
      if (result) {
        if (result.length > 1) {
          console.log('Qtde de Registros na Query: ' + result.length)
          } else {
            console.log('Resultado da Query: ' + JSON.stringify(result))
          }
            res.send({ 
              info: 'node-firebird-drive-native', 
              result 
            })
          } else {
            res.send({});
            }
        }).catch(error => {
          res.send({
            codErro: 9999,
            msgErro: error.message
          })
        })
  }  
 
}


export default new FirebirdDriverController();
