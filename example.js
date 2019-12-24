const mjml = require('mjml');
const sendgrid = require('@sendgrid/mail');
const handlebars = require('handlebars');
const chalk = require('chalk');
const fs = require('fs');
require('dotenv').config();

// Sedgrid initialization
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Información utilizada como "variables" en el correo
const userInfo = {
  name: 'Pepe',
  lastname: 'Avila',
  email: process.env.RECIPENT_EMAIL,
  patients: [
    { id: 24654, name: 'Matias Erazo' },
    { id: 24655, name: 'Rodrigo Gutierrez' },
    { id: 25655, name: 'Maria Paz Bustos' },
  ]
}


console.log(chalk.green('Reading content from example.hbs template...'));
const mjmlTemplateFile = fs.readFileSync(`${__dirname}/views/example.hbs`, 'utf8');
const template = handlebars.compile(mjmlTemplateFile);
const hbsHtml = template(userInfo);

const templateMarkup = mjml(hbsHtml);
if ( templateMarkup.errors.length === 0 ){
  const msg = {
    to: userInfo.email,
    from: {
      email: process.env.FROM_EMAIL,
      name: process.env.FROM_EMAIL_NAME
    },
    subject: process.env.FROM_EMAIL_SUBJECT,
    html: templateMarkup.html
  }
  
  sendgrid.send(msg).then(() => {
    console.log(chalk.green('Mail sent!'));
  }, (error) => {
    console.log(chalk.red(error.message));    
  });
} else {
  console.log(chalk.red('There are errors in your MJML markup'));
}