## Postman Required Env Vars
schemas_path // usually http://localhost:3033/schemas

## Pre-script
```
var schema_name = `${pm.request.method}-${pm.info.requestName}`.replace(/\s/g, '').toLowerCase(); 
var schemas_path = pm.variables.get("schemas_path");

pm.environment.unset(schema_name);

console.log(`Schemas: Trying to fetch from - ${schemas_path}/${schema_name}.json`);

pm.sendRequest({
    url: `${schemas_path}/${schema_name}.json`,
    method: 'GET',
    header: {
        'Content-Type':'application/json'
    }
}, (err, res) => {
    pm.test('Get schema | status code should be "200"', () => {
        pm.expect(res).to.have.property('code', 200);
    });
    pm.environment.set(schema_name, res.json());
});
```

## Tests

```
var schema_name = `${pm.request.method}-${pm.info.requestName}`.replace(/\s/g, '').toLowerCase();
    response_body = JSON.parse(responseBody);

pm.test("response successful with a 200 status code", () => {
    pm.response.to.have.status(200);
    pm.response.to.be.withBody;
    pm.response.to.be.json;
});

var schema = pm.environment.get(schema_name);

// ######## ENVIRONMENT VARIABLES HERE: ########

var schema_validation_result = tv4.validateMultiple(response_body, schema);
var schema_errors = [];

if (schema_validation_result.valid){
    pm.test("Schema Validation: Successful"), setTestStatus;
} else {
    for (var i = 0; i < schema_validation_result.errors.length; i++) {
        var error_message = 'Schema Validation: Failed | Field: ' + 
            schema_validation_result.errors[i].dataPath + " - " +
            schema_validation_result.errors[i].message
        schema_errors.push(error_message);
        pm.test(error_message, () => {
                pm.expect(schema_validation_result.valid).to.be.true;
            }
        );
    }
}

function setTestStatus() {
    pm.expect(schema_validation_result.valid).to.be.true;
}

// cleanup
pm.environment.unset(schema_name);
```

## Newman Execution
package: `newman-reporter-htmlextra": "^1.22.11"`


Extract the collection and environment from the Postman collection and environment files

command:
```
newman run <PostmanCollectionName>.postman_collection.json -e <PostmanEnvironmentName>.postman_environment.json -r htmlextra --reporter-htmlextra-export results/
```