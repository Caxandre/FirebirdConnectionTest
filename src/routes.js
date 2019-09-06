import { Router } from "express";
import FirebirdController from './app/controllers/FirebirdController';
import FirebirdDriverController from './app/controllers/FirebirdDriverController';

const routes = new Router();

routes.get("/", function(req, res) {
  res.send('Working!')
});

routes.post("/firebird", FirebirdController.runQuery);

routes.post("/firebirdDriver", FirebirdDriverController.runQuery);

export default routes;
