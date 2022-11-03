var keyBreaker = /([^\[\]]+)|(\[\])/g,
    digitTest = /^\d+$/;

function parseConnectionParams(paramstring, parseValues = false) {
    const params = {};
    const numberRegex = /^[-+]?(\d+\.)?\d+(E[-+]?\d+)?$/i;

    if (paramstring) {
        const valuesPreprocessor = parseValues ?
            (value) => {
                const lowerCasedValue = value.toLowerCase();
                if (lowerCasedValue === 'true') value = true;
                else if (lowerCasedValue === 'false') value = false;
                else if (numberRegex.test(value)) value = parseFloat(value);
                return value;
            } :
            (value) => value;

        // based on $.String.deparam: https://github.com/jupiterjs/jquerymx/blob/master/lang/string/deparam/deparam.js
        paramstring.split('&').map(s => {
            let [key, val] = s.split('=');
            let current = params;
            let parts = key.match(keyBreaker);
            for(var i = 0; i < parts.length - 1; i++) {
                let part = parts[i];
                if(!current[part]) {
                    // if what we are pointing to looks like an array
                    current[part] = digitTest.test(parts[i+1]) || parts[i+1] == "[]" ? [] : {}
                }
                current = current[part];
            }
            let lastPart = parts[parts.length - 1];
            if(lastPart == "[]"){
                current.push(valuesPreprocessor(val));
            } else {
                current[lastPart] = valuesPreprocessor(val);
            }
        });
    }

    return params;
}

module.exports = {
    parseConnectionParams
};
