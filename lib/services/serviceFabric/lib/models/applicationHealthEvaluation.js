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
 * @class
 * Initializes a new instance of the ApplicationHealthEvaluation class.
 * @constructor
 * The evaluation of the application health
 *
 * @member {string} [serviceName]
 *
 * @member {array} [unhealthyEvaluations]
 *
 */
class ApplicationHealthEvaluation extends models['HealthEvaluation'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationHealthEvaluation
   *
   * @returns {object} metadata of ApplicationHealthEvaluation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Application',
      type: {
        name: 'Composite',
        className: 'ApplicationHealthEvaluation',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          unhealthyEvaluations: {
            required: false,
            serializedName: 'UnhealthyEvaluations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UnhealthyEvaluationElementType',
                  type: {
                    name: 'Composite',
                    className: 'UnhealthyEvaluation'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationHealthEvaluation;