const { matchedData } = require('express-validator/filter')
const { buildErrObject, handleError, sendContact } = require('./base')

/*********************
 * Private functions *
 *********************/

const sendContactFormWithMailgun = async req => {
  return new Promise((resolve, reject) => {
    const user = {
      name: req.body.fullname,
      email: req.body.email
    }
    const subject = process.env.CONTACT_FORM_SUBJECT
    const htmlMessage = req.body.message
    const data = {
      user,
      subject,
      htmlMessage
    }

    sendContact(data, messageSent =>
      messageSent
        ? resolve({ msg: 'CONTACT_FORM_SENT' })
        : reject(buildErrObject(404, 'CONTACT_FORM_FAILED'))
    )
  })
}

/*********************
 * Public functions *
 *********************/

exports.sendcontact = async (req, res) => {
  try {
    // const data = matchedData(req, { locations: ['body'] })
    res.status(200).json(await sendContactFormWithMailgun(req))
  } catch (error) {
    handleError(res, error)
  }
}
