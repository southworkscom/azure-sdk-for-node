/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const WebResource = msRest.WebResource;

/**
 * Get deployed service package healths
 *
 * @param {string} nodeName The name of the node
 *
 * @param {string} applicationName The name of the application
 *
 * @param {string} servicePackageName The name of the service package
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.eventsHealthStateFilter] The filter of the events
 * health state
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeployedServicePackageHealth} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(nodeName, applicationName, servicePackageName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let eventsHealthStateFilter = (options && options.eventsHealthStateFilter !== undefined) ? options.eventsHealthStateFilter : undefined;
  // Validate
  try {
    if (nodeName === null || nodeName === undefined || typeof nodeName.valueOf() !== 'string') {
      throw new Error('nodeName cannot be null or undefined and it must be of type string.');
    }
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (servicePackageName === null || servicePackageName === undefined || typeof servicePackageName.valueOf() !== 'string') {
      throw new Error('servicePackageName cannot be null or undefined and it must be of type string.');
    }
    if (eventsHealthStateFilter !== null && eventsHealthStateFilter !== undefined && typeof eventsHealthStateFilter.valueOf() !== 'string') {
      throw new Error('eventsHealthStateFilter must be of type string.');
    }
    if (this.client.timeout !== null && this.client.timeout !== undefined && typeof this.client.timeout !== 'number') {
      throw new Error('this.client.timeout must be of type number.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetServicePackages/{servicePackageName}/$/GetHealth';
  requestUrl = requestUrl.replace('{nodeName}', encodeURIComponent(nodeName));
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  requestUrl = requestUrl.replace('{servicePackageName}', encodeURIComponent(servicePackageName));
  let queryParameters = [];
  if (eventsHealthStateFilter !== null && eventsHealthStateFilter !== undefined) {
    queryParameters.push('EventsHealthStateFilter=' + encodeURIComponent(eventsHealthStateFilter));
  }
  if (this.client.timeout !== null && this.client.timeout !== undefined) {
    queryParameters.push('timeout=' + encodeURIComponent(this.client.timeout.toString()));
  }
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeployedServicePackageHealth']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Send deployed service package health
 *
 * @param {string} nodeName The name of the node
 *
 * @param {string} applicationName The name of the application
 *
 * @param {string} serviceManifestName The name of the service manifest
 *
 * @param {object} deployedServicePackageHealthReport The report of the
 * deployed service package health
 *
 * @param {string} [deployedServicePackageHealthReport.sourceId]
 *
 * @param {string} [deployedServicePackageHealthReport.property]
 *
 * @param {string} [deployedServicePackageHealthReport.healthState] Possible
 * values include: 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
 *
 * @param {string} [deployedServicePackageHealthReport.description]
 *
 * @param {string}
 * [deployedServicePackageHealthReport.timeToLiveInMilliSeconds]
 *
 * @param {string} [deployedServicePackageHealthReport.sequenceNumber]
 *
 * @param {boolean} [deployedServicePackageHealthReport.removeWhenExpired]
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _send(nodeName, applicationName, serviceManifestName, deployedServicePackageHealthReport, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (nodeName === null || nodeName === undefined || typeof nodeName.valueOf() !== 'string') {
      throw new Error('nodeName cannot be null or undefined and it must be of type string.');
    }
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (serviceManifestName === null || serviceManifestName === undefined || typeof serviceManifestName.valueOf() !== 'string') {
      throw new Error('serviceManifestName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.timeout !== null && this.client.timeout !== undefined && typeof this.client.timeout !== 'number') {
      throw new Error('this.client.timeout must be of type number.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetServicePackages/{serviceManifestName}/$/ReportHealth';
  requestUrl = requestUrl.replace('{nodeName}', encodeURIComponent(nodeName));
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  requestUrl = requestUrl.replace('{serviceManifestName}', encodeURIComponent(serviceManifestName));
  let queryParameters = [];
  if (this.client.timeout !== null && this.client.timeout !== undefined) {
    queryParameters.push('timeout=' + encodeURIComponent(this.client.timeout.toString()));
  }
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (deployedServicePackageHealthReport !== null && deployedServicePackageHealthReport !== undefined) {
      let requestModelMapper = new client.models['DeployedServiceHealthReport']().mapper();
      requestModel = client.serialize(requestModelMapper, deployedServicePackageHealthReport, 'deployedServicePackageHealthReport');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(deployedServicePackageHealthReport, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @class
 * DeployedServicePackageHealths
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ServiceFabricClient.
 * Initializes a new instance of the DeployedServicePackageHealths class.
 * @constructor
 *
 * @param {ServiceFabricClient} client Reference to the service client.
 */
class DeployedServicePackageHealths {
  constructor(client) {
    this.client = client;
    this._get = _get;
    this._send = _send;
  }

  /**
   * Get deployed service package healths
   *
   * @param {string} nodeName The name of the node
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} servicePackageName The name of the service package
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.eventsHealthStateFilter] The filter of the events
   * health state
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeployedServicePackageHealth>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getWithHttpOperationResponse(nodeName, applicationName, servicePackageName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._get(nodeName, applicationName, servicePackageName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Get deployed service package healths
   *
   * @param {string} nodeName The name of the node
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} servicePackageName The name of the service package
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.eventsHealthStateFilter] The filter of the events
   * health state
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeployedServicePackageHealth} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeployedServicePackageHealth} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  get(nodeName, applicationName, servicePackageName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._get(nodeName, applicationName, servicePackageName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._get(nodeName, applicationName, servicePackageName, options, optionalCallback);
    }
  }

  /**
   * Send deployed service package health
   *
   * @param {string} nodeName The name of the node
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} serviceManifestName The name of the service manifest
   *
   * @param {object} deployedServicePackageHealthReport The report of the
   * deployed service package health
   *
   * @param {string} [deployedServicePackageHealthReport.sourceId]
   *
   * @param {string} [deployedServicePackageHealthReport.property]
   *
   * @param {string} [deployedServicePackageHealthReport.healthState] Possible
   * values include: 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
   *
   * @param {string} [deployedServicePackageHealthReport.description]
   *
   * @param {string}
   * [deployedServicePackageHealthReport.timeToLiveInMilliSeconds]
   *
   * @param {string} [deployedServicePackageHealthReport.sequenceNumber]
   *
   * @param {boolean} [deployedServicePackageHealthReport.removeWhenExpired]
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  sendWithHttpOperationResponse(nodeName, applicationName, serviceManifestName, deployedServicePackageHealthReport, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._send(nodeName, applicationName, serviceManifestName, deployedServicePackageHealthReport, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Send deployed service package health
   *
   * @param {string} nodeName The name of the node
   *
   * @param {string} applicationName The name of the application
   *
   * @param {string} serviceManifestName The name of the service manifest
   *
   * @param {object} deployedServicePackageHealthReport The report of the
   * deployed service package health
   *
   * @param {string} [deployedServicePackageHealthReport.sourceId]
   *
   * @param {string} [deployedServicePackageHealthReport.property]
   *
   * @param {string} [deployedServicePackageHealthReport.healthState] Possible
   * values include: 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
   *
   * @param {string} [deployedServicePackageHealthReport.description]
   *
   * @param {string}
   * [deployedServicePackageHealthReport.timeToLiveInMilliSeconds]
   *
   * @param {string} [deployedServicePackageHealthReport.sequenceNumber]
   *
   * @param {boolean} [deployedServicePackageHealthReport.removeWhenExpired]
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  send(nodeName, applicationName, serviceManifestName, deployedServicePackageHealthReport, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._send(nodeName, applicationName, serviceManifestName, deployedServicePackageHealthReport, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._send(nodeName, applicationName, serviceManifestName, deployedServicePackageHealthReport, options, optionalCallback);
    }
  }

}

module.exports = DeployedServicePackageHealths;