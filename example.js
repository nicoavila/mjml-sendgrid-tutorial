const dotenv = require('dotenv').config();
const mjml = require('mjml');
const sendgrid = require('@sendgrid/mail');
const handlebars = require('handlebars');
const chalk = require('chalk');
const fs = require('fs');

//Configuración de Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//Información utilizada como "variables" en el correo
const userInfo = {
    name: 'Nicolas',
    lastname: 'Avila',
    email: process.env.RECIPENT_EMAIL,
    patients: [
        { id: 24654, name: 'Matias Erazo' },
        { id: 24655, name: 'Rodrigo Gutierrez' },
    ]
}


console.log(chalk.green('Leyendo información de template example.js'));
const mjmlTemplateFile = fs.readFileSync(`${__dirname}/views/example.hbs`, 'utf8');
const template = handlebars.compile(mjmlTemplateFile);
const hbsHtml = template(userInfo);
const templateMarkup = mjml(hbsHtml);
if ( templateMarkup.errors.length == 0 ){
    const msg = {
        to: userInfo.email,
        from: {
            email: 'nucleo@alemana.cl',
            name: 'Informática Biomédica'
        },
        subject: 'Contacto de aplicación de ejemplo',
        html: templateMarkup.html
    }
    
    sendgrid.send(msg).then((response) => {
        console.log(chalk.green('Correo enviado!'));
    }, (error) => {
        console.log(chalk.red(error.message));    
    })
} else {
    console.log(chalk.red('Existen errores en el markup de MJML'));
}