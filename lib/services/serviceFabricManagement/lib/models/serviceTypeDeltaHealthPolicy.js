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
 * Service health policy
 *
 *
 */
class ServiceTypeDeltaHealthPolicy {
  /**
   * Create a ServiceTypeDeltaHealthPolicy.
   * @member {number} [maxPercentDeltaUnhealthyServices] Maximum percentage of
   * unhealthy services in cluster
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceTypeDeltaHealthPolicy
   *
   * @returns {object} metadata of ServiceTypeDeltaHealthPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceTypeDeltaHealthPolicy',
      type: {
        name: 'Composite',
        className: 'ServiceTypeDeltaHealthPolicy',
        modelProperties: {
          maxPercentDeltaUnhealthyServices: {
            required: false,
            serializedName: 'maxPercentDeltaUnhealthyServices',
            constraints: {
              InclusiveMaximum: 100,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceTypeDeltaHealthPolicy;