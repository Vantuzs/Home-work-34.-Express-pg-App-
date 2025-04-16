const { updateById } = require("./customer");

class Phone {
    static async create({brand,model,category,price,quantity}) {
        try {
            const insertQuery = `
            INSERT INTO products(brand,model,category,price,quantity) VALUES
            ('${brand}','${model}','${category}',${price},${quantity})
            RETURNING *;`;
            const createdPhone = await Phone.pool.query(insertQuery);
            return createdPhone.rows[0];
        } catch (error) {
            throw new Error(error.detail)
        }
    }

    static async getAll({limit,offset}) {
        try {
            const selectAllQuery = `
            SELECT * FROM products 
            ORDER BY id
            LIMIT ${limit} OFFSET ${offset}`
            const foundAllPhones = await Phone.pool.query(selectAllQuery)
            return foundAllPhones.rows
        } catch (error) {
            throw new Error(error.detail);
        }
    }

    static async getById (id) {
        try {
            const selectQuery = `
            SELECT *
            FROM products
            WHERE id = ${id};`;
            const foundPhones = await Phone.pool.query(selectQuery);
            return foundPhones.rows[0]
        } catch (error) {
            throw new Error(error.detail);
        }
    }
    
    static async updateById (id,{brand,model,category,price,quantity}) {
        try {
            const updateQuery = `
            UPDATE products
            SET brand = '${brand}',
            model = '${model}',
            category = '${category}',
            price = ${price},
            quantity = ${quantity}
            WHERE id = ${id}
            RETURNING *;`;
            
            const updatePhone = await Phone.pool.query(updateQuery);
            return updatePhone.rows[0]
        } catch (error) {
            throw new Error(error.detail)
        }
    }

    static async deleteById (id){
        try {
            const deleteQuery = `
            DELETE FROM products
            WHERE id = ${id}
            RETURNING *;`;
            const deletePhone = await Phone.pool.query(deleteQuery);
            return deletePhone.rows[0];
        } catch (error) {
            throw new Error(error.detail)
        }
    }

    static async getModelByCastomerBuy (idUser,brand) {
        try {
            const getModelCustomerQuery = `
            SELECT first_name || ' ' || last_name AS full_name,brand,model FROM products AS p JOIN orders_to_products AS otp
                ON p.id = otp.products_id
                JOIN orders AS o
                ON otp.order_id = o.id
                JOIN users
                ON users.id = o.customer_id
                WHERE users.id = ${idUser} AND brand = '${brand}';`;
                const getDataUserPhoneBrandBuy = await Phone.pool.query(getModelCustomerQuery)
                return getDataUserPhoneBrandBuy.rows
        } catch (error) {
            throw new Error(error.detail)
        }
    }

    static async getModelByCastomerBuyDateFromDateTo (idUser,dateFrom,dateTo) {
        try {
            const getModelCustomerDateQuery = `
            SELECT first_name || ' ' || last_name AS full_name,brand,model,created_at FROM products AS p JOIN orders_to_products AS otp
                ON p.id = otp.products_id
                JOIN orders AS o
                ON otp.order_id = o.id
                JOIN users
                ON users.id = o.customer_id
                WHERE users.id = ${idUser} AND created_at BETWEEN '${dateFrom}' AND '${dateTo}';`;
                const getDataUserPhoneBrandBuyDate = await Phone.pool.query(getModelCustomerDateQuery)
                return getDataUserPhoneBrandBuyDate.rows
        } catch (error) {
            throw new Error(error.detail)
        }
    }
};



module.exports = Phone;
