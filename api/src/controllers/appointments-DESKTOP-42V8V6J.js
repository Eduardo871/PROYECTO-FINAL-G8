const { Client, Barber, DetailAppointment, Appointment } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');


const getAppointments = (req, res, next) => {
    /* ---- El usuario ( administrador/cliente/barbero ) busca todas los appointments ----*/
    try {
        Appointment.findAll({
            include: [ { model: Barber }, {model: Client}, { model: DetailAppointment } ]  // ¿Esta bien incluir estos datos?
        })
        .then((result) => {
            res.status(200).send(result);
        })
    } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}


const getAppointmentById = (req, res, next) => {
    try {
        let queryId = req.params.id.toUpperCase();
        Appointment.findOne({
            where: {id: queryId},
            include: [ { model: Barber }, {model: Client}, { model: DetailAppointment } ]
        })
        .then((result) => {
            res.status(200).send(result);
        })
        } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}

const addAppointment = async (req, res, next) => {
    const { 
        id,
        barberId,   // Revisar cómo vienen estos datos de Sequelize!
        clientId,
        date,
        status,
        total,
         } = req.body;
    try {
        const createdAppointment = await Appointment.create({
            barberId,
            clientId,
            date,
            status,
            total
        });


        return res.send(createdAppointment);// ¿Le respondo con la cita creada, o con todas las citas?


    } catch (error) {
        next(error);
    }

}

const updateAppointment = async (req, res, next ) => {

    const id = req.params.id;
    const body = req.body;
    const [numberOfAffectedRows, affectedRows] = await Appointment.update(body, {
        where: {id},
        returning: true, // needed for affectedRows to be populated
        plain: true // makes sure that the returned instances are just plain objects

    })
        return res.send(affectedRows); // https://sequelizedocs.fullstackacademy.com/inserting-updating-destroying/
}


const addRelation = async (req, res, next ) => {                // Establece la relacion entre appointment y serviceBarber
    const {serviceBarberId, appointmentId, price } = req.body;
    const resul = await Appointmensas.create({serviceBarberId, appointmentId, price});
    if(resul){
        res.send(resul)
    }else{
        res.status(400).send("No se pudo relacionar las tablas")
    }
}


const deleteAppointment = (req, res, next) => {
    const id = req.params.id;
    Appointment.destroy({
        where: {
            id,
        }
    })
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => next(error));

}


module.exports = {
    getAppointments,
    getAppointmentById,
    addAppointment,
    deleteAppointment,
    updateAppointment,
    addRelation
}
