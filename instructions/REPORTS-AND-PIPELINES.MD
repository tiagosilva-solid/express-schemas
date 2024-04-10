# Reports and Pipelines

To generate reports and to add the execution to the pipelines, we are using [Newman](https://www.npmjs.com/package/newman).

## Newman Execution
1. Extract the collection and environment variables from the Postman collection and environment files to the root of this project.

2. Execute the following command:
```
newman run <PostmanCollectionName>.postman_collection.json -e <PostmanEnvironmentName>.postman_environment.json -r htmlextra --reporter-htmlextra-export results/
```

reports will make their way to the results folder.

# Pipelines can be set to run the newman command and reports should be shown as artefacts. 
