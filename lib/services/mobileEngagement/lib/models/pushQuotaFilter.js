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

const models = require('./index');

/**
 * Engage only users for whom the push quota is not reached.
 *
 * @extends models['Filter']
 */
class PushQuotaFilter extends models['Filter'] {
  /**
   * Create a PushQuotaFilter.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PushQuotaFilter
   *
   * @returns {object} metadata of PushQuotaFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'push-quota',
      type: {
        name: 'Composite',
        className: 'PushQuotaFilter',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PushQuotaFilter;