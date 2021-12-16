import { Router } from 'express'
import MissingPersonController from './controllers/MissingPersonController'
import UserController from './controllers/UserController'

const routes = Router()

//#region Users
routes.post('/user', UserController.store)
routes.post('/authenticate', UserController.authenticate)
//#endregion

//#region Missing People
routes.get('/missings', MissingPersonController.index)
routes.post('/missings/missing-person', MissingPersonController.store)
//#endregion
export default routes;