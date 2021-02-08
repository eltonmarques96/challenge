const app = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//require('./database')
const serviceOrder = require('./Routes/service-request');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/orderrequest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is conected to', db.connection.host))
    .catch(err => console(err))

app.listen(3001, () =>
    console.log(
        `¡Aplicación de ejemplo escuchando en el puerto 3001`
    )
);

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ]
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["./src/Routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);


// cross-origin-requests
app.use(cors());
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Put payments router before auth middleware to avoid authentication on B2B communication with MercadoPago

app.use('/', serviceOrder);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//module.exports = app;