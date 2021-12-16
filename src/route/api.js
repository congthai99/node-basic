import express from 'express';
import APIcontroller from '../controller/APIcontroller'

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIcontroller.getAllUsers); // method GET -> READ data
    router.post('/create-user', APIcontroller.createNewUser); // method POST -> CREATE data
    router.put('/update-user', APIcontroller.updateUser); // method PUT -> UPDATE data
    router.delete('/delete-user/:id', APIcontroller.deleteUser); // method DELETE -> DELETE data

    return app.use('/api/v1/', router)
}

export default initAPIRoute;

// module.exports = initWebRoute;