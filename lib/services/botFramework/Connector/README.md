# Bot Framework Connector SDK for Node.js

This project provides a Node.js package that makes it easy to manage Bot Framework Connector. Right now it supports:
- **Node.js version: 6.x.x or higher**

## How to Install

```bash
npm install bot-framework-connector
```
## A working sample
A sample that can be cloned and is ready to used can be found over [here](IOY a link to sample).

## How to Use

### Authentication, client creation and listing storageAccounts as an example

 ```javascript
 var msRestAzure = require('ms-rest-azure');
 var storageManagementClient = require('azure-arm-storage');
 
 // Interactive Login
 msRestAzure.interactiveLogin(function(err, credentials) {
  var client = new storageManagementClient(credentials, 'your-subscription-id');
  client.storageAccounts.list(function(err, result) {
    if (err) console.log(err);
    console.log(result);
  });
 });
 ```

### Create the StorageManagementClient

```javascript
var storageManagementClient = require('azure-arm-storage');
var client = new storageManagementClient(credentials, 'your-subscription-id');
```


## Related projects

- [Microsoft Azure SDK for Node.js - All-up](https://github.com/WindowsAzure/azure-sdk-for-node)
