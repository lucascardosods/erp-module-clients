ClientDAO = {
  connection : function() {
    return global._connection.db(global.__CONFIG.NAME).collection("clients");
  },
};

module.exports = ClientDAO;
