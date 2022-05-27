const dbConnection = require('../../config/dbConnection');
const app = require('../../config/server');
module.exports = app => {
    const connection = dbConnection();
    app.get('/', (req, res) => {
            res.render('html/inicio');
    });
    app.get('/ayuda', (req, res) => {
        res.render('html/ayuda');
    });
    app.get('/faq', (req, res) => {
        res.render('html/faq');
    });
    app.get('/registro', (req, res) => {
        res.render('html/registro');
    });
    app.get('/iniciar', (req, res) => {
        res.render('html/iniciar');
    });
    app.get('/carniceria', (req, res) => {
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE giro = 'Carnicería'", (err, result) => {
            res.render('html/carniceria', {
                resultado: result
            });
        });
    });
    app.get('/recauderia', (req, res) => {
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE giro = 'Recaudería'", (err, result) => {
            res.render('html/recauderia', {
                resultado: result
            });
        });
    });
    app.get('/papeleria', (req, res) => {
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE giro = 'Papelería'", (err, result) => {
            res.render('html/papeleria', {
                resultado: result
            });
        });
    });
    app.get('/tienda', (req, res) => {
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE giro = 'Tienda'", (err, result) => {
            res.render('html/tienda', {
                resultado: result
            });
        });
    });
    app.get('/lavanderia', (req, res) => {
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE giro = 'Lavanderia'", (err, result) => {
            res.render('html/lavanderia', {
                resultado: result
            });
        });
    });
    app.get('/ferreteria', (req, res) => {
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE giro = 'Ferretería'", (err, result) => {
            res.render('html/ferreteria', {
                resultado: result
            });
        });
    });

    app.post('/consulta', (req, res) => {
        const { busqueda } = req.body;
        connection.query("SELECT nombre_neg, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom FROM locales WHERE nombre_neg LIKE '%"+busqueda+"%' or giro LIKE '%"+busqueda+"%' or calle LIKE '%"+busqueda+"%' or colonia LIKE '%"+busqueda+"%' or municipio LIKE '%"+busqueda+"%'", (err, result) => {
            res.render('html/resultado', {
                resultado: result
            });
        });
    });

    app.post('/registrarse', (req, res) => {
        const { nombre_neg, nombre_prop, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom, correo_cuenta, contra } = req.body;
        connection.query('INSERT INTO locales SET?', {
            nombre_neg,
            nombre_prop,
            giro,
            calle,
            numero,
            colonia,
            municipio,
            tel_cont,
            correo_cont,
            serv_dom,
            correo_cuenta,
            contra
        }, (err, result) => {
            res.redirect('/');
        });
    });

    app.post('/iniciar', (req, res) => {
        const { correo_cuenta, contra } = req.body;
        connection.query("SELECT * FROM locales WHERE correo_cuenta='"+correo_cuenta+"' and contra='"+contra+"'", (err, result) => {
            if(result.length > 0)
                res.render('html/modificar', {
                    resultado: result
                });
            else 
                res.redirect('/');
        });
    });

    app.post('/cambiar', (req, res) => {
        const { nombre_neg, nombre_prop, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom, correo_cuenta, contra } = req.body;
        connection.query("UPDATE locales SET? WHERE correo_cuenta='"+correo_cuenta+"' and contra='"+contra+"'", {
            nombre_neg,
            nombre_prop,
            giro,
            calle,
            numero,
            colonia,
            municipio,
            tel_cont,
            correo_cont,
            serv_dom,
            correo_cuenta,
            contra
        }, (err, result) => {
            res.redirect('/');
        });
    });

}