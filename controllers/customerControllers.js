const { Customer } = require('./../models');

module.exports.createCustomer = async (req, res) => {
  const { body } = req;

  try {
    const createdCustomer = await Customer.create(body);
    if (!createdCustomer) {
      return res.status(400).send('Something went wrong');
    }
    res.status(201).send(createdCustomer);
  } catch (err) {
    console.log('err :>> ', err);
    res.status(500).send('Server Error');
  }
};

module.exports.getAllCustomers = async (req, res) => {
  const { pagination } = req;
  try {
    const foundCustomers = await Customer.getAll(pagination);
    res.status(200).send(foundCustomers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports.getByIdCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const foundCustomer = await Customer.getById(id);

    if (!foundCustomer) {
      // TODO createHttpError
      return res.status(404).send('Customer Not Found');
    }

    res.status(200).send(foundCustomer);
  } catch (err) {
    // TODO next(err)
    res.status(500).send('Server Error');
  }
};

module.exports.updateByIdCustomer = (req, res) => {};

module.exports.deleteByIdCustomer = (req, res) => {};

// {createCustomer, ..., deleteByIdCustomer}
