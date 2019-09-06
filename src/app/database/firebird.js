import Firebird from 'firebird';

exports.runQuery = function(database, query) {
  return new Promise(function(resolve, reject) {
    
        const con = Firebird.createConnection()
        const host = `${database.host}:${database.database}`

        con.connect(host, database.user, database.password, '', function(err) {
          if (err) {
            reject(err)
          } else {
              con.query(query, function(err, res) {
                if (err) {
                  console.log("erro", err)
                  reject(err.message)
                } else {
                    try {
                        let rows = []
                          res.fetch("all", true, function(row) {
                            rows.push(row)
                          }, function(err) {
                            if (err) {
                              reject(err.message || err)
                              } else {
                                resolve(rows)
                              }
                            })

                          } catch (error) {
                              reject(error.message)
                          }
                        }
                })
            }
        })

    });
}