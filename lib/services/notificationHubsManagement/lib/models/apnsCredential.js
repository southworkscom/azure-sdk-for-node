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

/**
 * @class
 * Initializes a new instance of the ApnsCredential class.
 * @constructor
 * Description of a NotificationHub ApnsCredential.
 *
 * @member {string} [apnsCertificate] The APNS certificate.
 *
 * @member {string} [certificateKey] The certificate key.
 *
 * @member {string} [endpoint] The endpoint of this credential.
 *
 * @member {string} [thumbprint] The Apns certificate Thumbprint
 *
 * @member {string} [keyId] A 10-character key identifier (kid) key, obtained
 * from your developer account
 *
 * @member {string} [appName] The name of the application
 *
 * @member {string} [appId] The issuer (iss) registered claim key, whose value
 * is your 10-character Team ID, obtained from your developer account
 *
 * @member {string} [token] Provider Authentication Token, obtained through
 * your developer account
 *
 */
class ApnsCredential {
  constructor() {
  }

  /**
   * Defines the metadata of ApnsCredential
   *
   * @returns {object} metadata of ApnsCredential
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApnsCredential',
      type: {
        name: 'Composite',
        className: 'ApnsCredential',
        modelProperties: {
          apnsCertificate: {
            required: false,
            serializedName: 'properties.apnsCertificate',
            type: {
              name: 'String'
            }
          },
          certificateKey: {
            required: false,
            serializedName: 'properties.certificateKey',
            type: {
              name: 'String'
            }
          },
          endpoint: {
            required: false,
            serializedName: 'properties.endpoint',
            type: {
              name: 'String'
            }
          },
          thumbprint: {
            required: false,
            serializedName: 'properties.thumbprint',
            type: {
              name: 'String'
            }
          },
          keyId: {
            required: false,
            serializedName: 'properties.keyId',
            type: {
              name: 'String'
            }
          },
          appName: {
            required: false,
            serializedName: 'properties.appName',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: false,
            serializedName: 'properties.appId',
            type: {
              name: 'String'
            }
          },
          token: {
            required: false,
            serializedName: 'properties.token',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApnsCredential;