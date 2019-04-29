# MJML + Template System + Sendgrid Example
> An example of putting together MJML, Handlebars & Sendgrid for building responsive mails

## Installation
1. Clone the repository
2. Run `npm install`
3. Add your **Sendgrid API Key** in `.env` file
3. Add you **Recipent Email** `.env` file
4. Run `node example.js`

## How it works
1. The app loads `.env` environment configuration.
2. The view in `views/example.hbs` is loaded.
3. The loaded view (now as a string) is converted to an Handlebars Template.
4. Then the template replaces the variables with the values in the `userInfo` object.
5. The Handlebar Template is converted to HTML.
6. The HTML is passed to Sendgrid to generate the email.