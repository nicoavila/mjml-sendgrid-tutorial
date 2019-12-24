# MJML + Template System + Twillio Sendgrid Example
> An example of putting together [MJML](https://mjml.io/), [Handlebars](https://handlebarsjs.com/) & [Twillio Sendgrid](https://www.twilio.com/sendgrid) for building responsive mails

## Installation
1. Clone the repository
2. Run `npm install`
3. Add your **Sendgrid API Key** in `.env` file (refer to `.env.default` file for )
3. Add your **Recipent Email** `.env` file (refer to `.env.default` file)
4. Run `node example.js`

## How it works
1. The app loads `.env` environment configuration.
2. The view in `views/example.hbs` is loaded.
3. The loaded view (now as a string) is converted to an **Handlebars Template**.
4. Then the template replaces the variables with the values in the `userInfo` object.
5. The Handlebar Template is converted to **HTML**.
6. The HTML is passed to Sendgrid to generate the email.

## Environment variables in .env file

| Variable           | Description                                                                                                        |
|--------------------|--------------------------------------------------------------------------------------------------------------------|
| SENDGRID_API_KEY   | API Key from Twillio Sendgrid. You can get one [here](https://sendgrid.com/docs/ui/account-and-settings/api-keys/) |
| RECIPENT_EMAIL     | Recipent user email                                                                                                |
| FROM_EMAIL         | Email used for sending email                                                                                       |
| FROM_EMAIL_NAME    | Name used for sending email                                                                                        |
| FROM_EMAIL_SUBJECT | Subject in the email                                                                                               |
