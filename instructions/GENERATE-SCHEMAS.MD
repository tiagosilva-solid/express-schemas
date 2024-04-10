## Generate Schemas

Go to:
https://www.jsonschema.net/

paste the response body and isolate the required details.

create a new file in the schemas folder with the name of the endpoint:
<http request type>-<name given on postman>.json
example:
schemas/`post`-`login`.json for `POST` request to the `login` named request on postman.


example of validations for json schemas that can be performed:
```
"format": "date"
"format": "date-time"
"format": "email"
"format": "hostname"
"format": "ipv4"
"format": "ipv6"
"format": "uri"
"format": "uri-reference"
"format": "uri-template"
"enum": ["a", "b", "c"]
"enum": ["true", "false"]
"minLength": 31
"maxLength": 33
"minItems": 3
"maxItems": 3
"minProperties": 3
"maxProperties": 3
"pattern": "^[0-9]{5}$" // 5 digits
```

