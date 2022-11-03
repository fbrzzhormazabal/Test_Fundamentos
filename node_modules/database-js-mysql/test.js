var MySQL = require('.');


var Connection = MySQL.open({
    Hostname: 'localhost',
    Port: 3306,
    Username: 'travis',
    Database: 'test'
});

function handleError(error) {
    console.log("ERROR:", error);
    process.exit(1);
}

Connection.execute('DROP TABLE IF EXISTS test1;').then(() => {
    Connection.execute('CREATE TABLE test1 (fl_name varchar(32), fl_value varchar(32));').then(() => {
        Connection.execute("INSERT INTO test1 VALUES('name', 'Michael Anderson');").then(() => {
            Connection.query("SELECT * FROM test1 WHERE fl_name = 'name';").then(data => {
                if (data.length != 1) {
                    return handleError(new Error("Invalid data returned"));
                }
                Connection.execute('DROP TABLE IF EXISTS test1;').then(() => {
                    Connection.close().then(() => {
                        process.exit(0);
                    }).catch(handleError);
                }).catch(handleError);
            }).catch(handleError);
        }).catch(handleError);
    }).catch(handleError);
}).catch(handleError);

