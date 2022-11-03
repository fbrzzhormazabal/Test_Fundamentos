# database-js-mysql

[![Build Status](https://travis-ci.org/mlaanderson/database-js-mysql.svg?branch=master)](https://travis-ci.org/mlaanderson/database-js-mysql)

> MySQL wrapper for database-js

Database-js-mysql is a wrapper around the [mysql](https://github.com/mysqljs/mysql) package by Doug Wilson. It is intended to be used with the [database-js](https://github.com/mlaanderson/database-js) package. However it can also be used in stand alone mode. The only reason to do that would be to use [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Install

```bash
npm install database-js-mysql
```

## Usage

### Stand Alone
```js
var mysql = require('database-js-mysql');

(async () => {
    let connection, rows;
    connection = mysql.open({
        Hostname: localhost,
        Port: 3306,
        Username: 'my_secret_username',
        Password: 'my_secret_password',
        Database: 'my_top_secret_database'
    });

    try {
        rows = await connection.query("SELECT * FROM tablea WHERE user_name = 'not_so_secret_user'");
        console.log(rows);
    } catch (error) {
        console.log(error);
    } finally {
        await connection.close();
    }
})();
```

### With Database-js
```js
var Database = require('database-js').Connection;

(async () => {
    let connection, statement, rows;
    connection = new Database('mysql://my_secret_username:my_secret_password@localhost:3306/my_top_secret_database');

    try {
        statement = await connection.prepareStatement("SELECT * FROM tablea WHERE user_name = ?");
        rows = await statement.query('not_so_secret_user');
        console.log(rows);
    } catch (error) {
        console.log(error);
    } finally {
        await connection.close();
    }
})();
```

#### With SSL

If you need to support SSL for your MySQL connection (for AWS RDS, for example), you can add extra params:

```js
var Database = require('database-js').Connection;

(async () => {
    let connection, statement, rows;
    connection = new Database('mysql://my_secret_username:my_secret_password@localhost:3306/my_top_secret_database?ssl[ca]=%2Fpath%2Fto%2Fca.pem');

    try {
        statement = await connection.prepareStatement("SELECT * FROM tablea WHERE user_name = ?");
        rows = await statement.query('not_so_secret_user');
        console.log(rows);
    } catch (error) {
        console.log(error);
    } finally {
        await connection.close();
    }
})();
```

Note that `ssl[ca]`, `ssl[key]` and `ssl[cert]` will be checked for file paths
and loaded:

```js
// The query parameters are loaded into an 'options' object
if (options.ssl.ca && fs.existsSync(options.ssl.ca)) {
    options.ssl.ca = fs.readFileSync(options.ssl.ca);
}
```

## License

[MIT](LICENSE)
