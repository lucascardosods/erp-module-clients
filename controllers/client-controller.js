
const ClientServices = require("../services/client-services.js")();
let mongoose = require('mongoose');

ClientController = {

  bindClient : function(body) {
    if(body.name.length < 0){
      throw new Error("parameters");
    } else {
      let client = new mongoose.models.Client();
      client.name = body.name;
      client.phone = body.phone;
      client.city = body.city;
      client.birth = body.birth;
      return client;
    }
  },

  listPage : async function(req, res) {
    let clients = await ClientServices.listClients();
    res.render('client/list.ejs', {
      message: req.body.message,
      clients: clients,
      title: "Clientes Cadastrados"
    });

  },

  newPage : async function(req, res) {
    res.render('client/form.ejs', {
      message: null,
      title: "Novo Cliente"
    });
  },

  createNewClient : async function(req, res) {
    try {
      let client = this.bindClient(req.body);
      let response = await ClientServices.createClient(client);
    }
    catch(e){
      res.render('client/form.ejs', {
        message: e,
        title: "Novo Cliente"
      });
    }
    res.render('client/form.ejs', {
      message: "Criado com sucesso.",
      title: "Novo Cliente"
    });
  },

};

module.exports = ClientController;
