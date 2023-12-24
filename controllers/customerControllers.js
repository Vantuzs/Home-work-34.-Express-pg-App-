const { Customer } = require('./../models');

module.exports.createCustomer = (req, res) => {};

module.exports.getAllCustomers = (req, res) => {
  res.send('ok');
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
