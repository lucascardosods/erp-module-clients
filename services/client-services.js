module.exports = function () {

  const ClientDAO = require('../DAO/client-dao');

  return {

    listClients: async function () {
      try {
        return await ClientDAO.connection().find().toArray();
      } catch(er){
        return (new Error('connection-error'));
      }
    },

    createClient: async function (client) {
      try {
        return await ClientDAO.connection().insert(client);
      } catch(er){
        return (new Error('connection-error'));
      }
    },



  }

};
