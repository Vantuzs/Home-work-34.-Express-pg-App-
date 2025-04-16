module.exports.paginateCustomer = (req, res, next) => {
  // page, results => limit, offset
  const { page = 1, results = 100 } = req.query;

  const pagination = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  req.pagination = pagination;

  next();
};
