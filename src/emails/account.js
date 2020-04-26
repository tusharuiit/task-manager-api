const sgMail = require('@sendgrid/mail') 

// const sendgridAPIKey = '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'

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>  {
    sgMail.send({
        to: email,
        from: 'tusharuiit@gmail.com',
        subject: 'Thanks for joining in!',
        text:  `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) =>  {
    sgMail.send({
        to: email,
        from: 'tusharuiit@gmail.com',
        subject: 'Goodbye!',
        text:  `We will miss you ${name}. You are welcome back anytime! We shall be thankful to you if you please tell us why you left us!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

// sgMail.send({
//     to:'tusharuiit@gmail.com',
//     from:'tusharuiit@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you.'
// })