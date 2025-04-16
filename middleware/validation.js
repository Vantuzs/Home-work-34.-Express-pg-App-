const {
  CREATE_CUSTOMER_VALIDATION_SCHEMA,CREATE_PHONE_VALIDATION_SCHEMA,UPDATE_CUSTOMER_VALIDATION_SCHEMA
} = require('../utils/validationSchemas');

module.exports.validateCustomerOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_CUSTOMER_VALIDATION_SCHEMA.validate(body);

    next();
  } catch (err) {
    // TODO next(err)
    res.status(422).send('Validation Error');
  }
};

module.exports.valedateCustomerOnUpdate = async(req,res,next)=>{
  const {body} = req

  try {
    req.body = await UPDATE_CUSTOMER_VALIDATION_SCHEMA.validate(body)

    next()
  } catch (error) {
    res.status(422).send('Validation Error')
  }
}

module.exports.valedatePhoneOnCreate = async(req,res,next)=>{
  const {body} = req

  try {
    req.body = await CREATE_PHONE_VALIDATION_SCHEMA.validate(body)

    next()
  } catch (error) {
    res.status(422).send('Validation Error')
  }
}