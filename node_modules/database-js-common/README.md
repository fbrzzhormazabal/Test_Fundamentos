# database-js-common
Common modules for database-js driver implementations

## About
This is a module of useful functions for [database-js](https://github.com/mlaanderson/database-js) driver implementations.

## Usage
````Javascript
const Common = require("database-js-common");

...
module.exports = {
    open: function(connection) {
        let params = Common.parseConnectionParams(connection.Parameters);
        let base = driver.createConnection({
            host: connection.Hostname || 'localhost',
            port: parseInt(connection.Port) || 3306,
            user: connection.Username || 'root',
            password: connection.Password,
            database: connection.Database,
            parameters: params
        });
        return new MySQL(base);
    }
};
````

## API
#### parseConnectionParameters(paramstring: string, parseValues?: boolean = false)
Parses a parameter string of the format key1=value1&key2=value2, optionally converting the string values into appropriate value types. 

If the value types are to be converted, true and false are converted to booleans irrespective of case. Values are converted to numbers if they match the following regex ```/^[-+]?(\d+\.)?\d+(E[-+]?\d+)?$/i```.

If you need finer control of value conversions, leave parseValues at false and handle the conversions in your driver code.

If the driver supports multiple levels to the config object (like the MySQL driver), you can modify the `key` as follows:
- `key1=value1&key2[subkey1]=value2` yields `{ key1: "value1", key2: { subkey1: "value2" } }`
- `key1=value1&key2[subkey1][subsubkey1]=value2` yields `{ key1: "value1", key2: { subkey1: { subkey2: "value2" } } }`
- `key1=value1&key2[]=value2` yields `{ key1: "value1", key2: [ "value2" ] }`
- `key1=value1&key2[]=value2&key2[]=value3` yields `{ key1: "value1", key2: [ "value2", "value3" ] }`
- `key1=value1&key2[0]=value2` yields `{ key1: "value1", key2: [ "value2" ] }`
