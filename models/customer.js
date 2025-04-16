class Customer {
  static async create ({ firstName, lastName, email, is_subscribe ,gender,weight,birthday }) {
    try {
      // сформувати запит
      const insertQuery = `
        INSERT INTO users (first_name, last_name, email,is_subscribe, gender,weight,birthday)
        VALUES ('${firstName}', '${lastName}', '${email}','${is_subscribe}', '${gender}', '${weight}','${birthday}')
        RETURNING *
      `;
      const createdCustomer = await Customer.pool.query(insertQuery); // виконати його
      return createdCustomer.rows[0]; // повернути результат
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM users
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundCustomers = await Customer.pool.query(selectAllQuery);
      return foundCustomers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getById (id) {
    try {
      const selectQuery = `
        SELECT *
        FROM users
        WHERE id = ${id}
      `;
      const foundCustomer = await Customer.pool.query(selectQuery);
      return foundCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async updateById (id, { firstName, lastName, email, is_subscribe,gender,weight,birthday }) {
    try {
      const updateQuery = `
        UPDATE users
        SET first_name = '${firstName}', 
            last_name = '${lastName}', 
            email = '${email}', 
            is_subscribe = ${is_subscribe},
            gender = '${gender}',
            weight = ${weight},
            birthday = '${birthday}'
        WHERE id = ${id}
        RETURNING *
      `;
      const updatedCustomer = await Customer.pool.query(updateQuery);
      return updatedCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async deleteById (id) {
    try {
      const deleteQuery = `
        DELETE
        FROM users
        WHERE id = ${id}
        RETURNING *
      `;
      const deletedCustomer = await Customer.pool.query(deleteQuery);
      return deletedCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = Customer;
