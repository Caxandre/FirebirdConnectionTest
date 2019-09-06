import { createNativeClient, getDefaultLibraryFilename } from 'node-firebird-driver-native';

async function runQuery(database, query) {
    try{
        const client = await createNativeClient(getDefaultLibraryFilename());
    
        const host = `${database.host}:${database.database}`

        const attachment = await client.connect(host, {
            username: database.user,
            password: database.password
        });

        const transaction = await attachment.startTransaction();
    
        const resultSet = await attachment.executeQuery(transaction, query);
        
        const rows = await resultSet.fetch();
    
        await resultSet.close();
    
        await transaction.commit();
    
        return rows;
   
    } catch(error) {
      return {Erro: error.message}
    }

}
module.exports={runQuery}

