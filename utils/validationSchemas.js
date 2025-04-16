const yup = require('yup');

module.exports.CREATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32).required(),
  lastName: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  is_subscribe: yup.boolean().required(),
  gender: yup.string().required(),
  weight: yup.number().min(0).max(300).required(),
  birthday: yup.string().required()
});

module.exports.UPDATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32),
  lastName: yup.string().trim().min(2).max(32),
  email: yup.string().email(),
  is_subscribe: yup.boolean(),
  gender: yup.string(),
  weight: yup.number().min(0).max(300),
  birthday: yup.string()
});

module.exports.CREATE_PHONE_VALIDATION_SCHEMA = yup.object({
  brand: yup.string().required(),
  model: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().min(0).required(),
  quantity: yup.number().min(0).required()
})