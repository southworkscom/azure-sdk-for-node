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
 * An Activity is the basic communication type for the Bot Framework 3.0
 * protocol.
 *
 */
class Activity {
  /**
   * Create a Activity.
   * @member {string} type The type of the activity. Possible values include:
   * 'message', 'conversationUpdate', 'contactRelationUpdate', 'typing',
   * 'endOfConversation', 'event', 'invoke'
   * @member {string} [id] ID that uniquely identifies the activity on the
   * channel.
   * @member {date} [timestamp] Date and time that the message was sent in the
   * UTC time zone (set by service).
   * @member {date} [localTimestamp] Date and time that the message was sent in
   * the local time zone (set by client).
   * @member {string} [serviceUrl] Service endpoint where operations concerning
   * the activity may be performed.
   * @member {string} [channelId] ID of the channel where the activity was
   * sent.
   * @member {object} from Sender address.
   * @member {string} [from.id] Channel id for the user or bot on this channel
   * (Example: joe@smith.com, or @joesmith or 123456).
   * @member {string} [from.name] Display friendly name.
   * @member {object} [conversation] Channel account information.
   * @member {boolean} [conversation.isGroup] Is this a reference to a group.
   * @member {string} [conversation.id] The ID that identifies the
   * conversation. The ID is unique per channel. If the channel starts the
   * conversion, it sets this ID; otherwise, the bot sets this property to the
   * ID that it gets back in the response when it starts the conversation
   * (Example: joe@smith.com, or @joesmith or 123456).
   * @member {string} [conversation.name] A display name that can be used to
   * identify the conversation.
   * @member {object} recipient (Outbound to bot only) Bot's address that
   * received the message.
   * @member {string} [recipient.id] Channel id for the user or bot on this
   * channel (Example: joe@smith.com, or @joesmith or 123456).
   * @member {string} [recipient.name] Display friendly name.
   * @member {string} [textFormat] Format of text fields. Default: markdown.
   * Possible values include: 'markdown', 'plain', 'xml'. Default value:
   * 'markdown' .
   * @member {string} [attachmentLayout] Hint for how to deal with multiple
   * attachments: [list|carousel] Default: list. Possible values include:
   * 'list', 'carousel'. Default value: 'list' .
   * @member {array} [membersAdded] Members added to the conversation. Present
   * only if activity type is "conversationUpdate" and users joined the
   * conversation.
   * @member {array} [membersRemoved] Members removed from the conversation.
   * Present only if activity type is "conversationUpdate" and users joined the
   * conversation.
   * @member {array} [reactionsAdded] Reactions added to the activity.
   * @member {array} [reactionsRemoved] Reactions removed from the activity.
   * @member {string} [topicName] The conversation's updated topic name.
   * @member {boolean} [historyDisclosed] True if prior history of the channel
   * is disclosed. Default value is false.
   * @member {string} [locale] Locale of the language that should be used to
   * display text within the message.
   * @member {string} [text] Content for the message.
   * @member {string} [speak] SSML Speak for TTS audio response.
   * @member {string} [inputHint] Value that indicates whether your bot is
   * accepting, expecting, or ignoring user input after the message is
   * delivered to the client. Possible values include: 'acceptingInput',
   * 'expectingInput', 'ignoringInput'
   * @member {string} [summary] Text to display if the channel cannot render
   * cards.
   * @member {object} [suggestedActions] SuggestedActions are used to provide
   * keyboard/quick-reply like behavior in many clients.
   * @member {array} [suggestedActions.to] Ids of the recipients that the
   * actions should be shown to. These Ids are relative to the channelId and a
   * subset of all recipients of the activity.
   * @member {array} [suggestedActions.actions] Actions that can be shown to
   * the user.
   * @member {array} [attachments] List of Attachments.
   * @member {array} [entities] Collection of Entity objects, each of which
   * contains metadata about this activity. Each Entity object is typed.
   * @member {object} [channelData] Channel-specific payload.
   * @member {string} [action] The action to apply or that was applied.
   *
   * Use the type property to determine context for the action. For example, if
   * type is contactRelationUpdate, the value of the action property would be
   * add if the user added your bot to their contacts list, or remove if they
   * removed your bot from their contacts list.
   * @member {string} [replyToId] The original ID this message is a response
   * to.
   * @member {object} [value] Open-ended value.
   * @member {string} [name] Name of the operation to invoke or the name of the
   * event.
   * @member {object} [relatesTo] Reference to another conversation or
   * activity.
   * @member {string} [relatesTo.activityId] (Optional) ID of the activity to
   * refer to.
   * @member {object} [relatesTo.user] (Optional) User participating in this
   * conversation.
   * @member {string} [relatesTo.user.id] Channel id for the user or bot on
   * this channel (Example: joe@smith.com, or @joesmith or 123456).
   * @member {string} [relatesTo.user.name] Display friendly name.
   * @member {object} [relatesTo.bot] Bot participating in this conversation.
   * @member {string} [relatesTo.bot.id] Channel id for the user or bot on this
   * channel (Example: joe@smith.com, or @joesmith or 123456).
   * @member {string} [relatesTo.bot.name] Display friendly name.
   * @member {object} [relatesTo.conversation] Conversation reference.
   * @member {boolean} [relatesTo.conversation.isGroup] Is this a reference to
   * a group.
   * @member {string} [relatesTo.conversation.id] The ID that identifies the
   * conversation. The ID is unique per channel. If the channel starts the
   * conversion, it sets this ID; otherwise, the bot sets this property to the
   * ID that it gets back in the response when it starts the conversation
   * (Example: joe@smith.com, or @joesmith or 123456).
   * @member {string} [relatesTo.conversation.name] A display name that can be
   * used to identify the conversation.
   * @member {string} [relatesTo.channelId] An ID that uniquely identifies the
   * channel in the conversation that this object references.
   * @member {string} [relatesTo.serviceUrl] Service endpoint where operations
   * concerning the referenced conversation may be performed.
   * @member {string} [code] Code indicating why the conversation has ended.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Activity
   *
   * @returns {object} metadata of Activity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Activity',
      type: {
        name: 'Composite',
        className: 'Activity',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'message', 'conversationUpdate', 'contactRelationUpdate', 'typing', 'endOfConversation', 'event', 'invoke' ]
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          localTimestamp: {
            required: false,
            serializedName: 'localTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          serviceUrl: {
            required: false,
            serializedName: 'serviceUrl',
            type: {
              name: 'String'
            }
          },
          channelId: {
            required: false,
            serializedName: 'channelId',
            type: {
              name: 'String'
            }
          },
          from: {
            required: true,
            serializedName: 'from',
            type: {
              name: 'Composite',
              className: 'ChannelAccount'
            }
          },
          conversation: {
            required: false,
            serializedName: 'conversation',
            type: {
              name: 'Composite',
              className: 'ConversationAccount'
            }
          },
          recipient: {
            required: true,
            serializedName: 'recipient',
            type: {
              name: 'Composite',
              className: 'ChannelAccount'
            }
          },
          textFormat: {
            required: false,
            serializedName: 'textFormat',
            defaultValue: 'markdown',
            type: {
              name: 'Enum',
              allowedValues: [ 'markdown', 'plain', 'xml' ]
            }
          },
          attachmentLayout: {
            required: false,
            serializedName: 'attachmentLayout',
            defaultValue: 'list',
            type: {
              name: 'Enum',
              allowedValues: [ 'list', 'carousel' ]
            }
          },
          membersAdded: {
            required: false,
            serializedName: 'membersAdded',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChannelAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChannelAccount'
                  }
              }
            }
          },
          membersRemoved: {
            required: false,
            serializedName: 'membersRemoved',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChannelAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChannelAccount'
                  }
              }
            }
          },
          reactionsAdded: {
            required: false,
            serializedName: 'reactionsAdded',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageReactionElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageReaction'
                  }
              }
            }
          },
          reactionsRemoved: {
            required: false,
            serializedName: 'reactionsRemoved',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageReactionElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageReaction'
                  }
              }
            }
          },
          topicName: {
            required: false,
            serializedName: 'topicName',
            type: {
              name: 'String'
            }
          },
          historyDisclosed: {
            required: false,
            serializedName: 'historyDisclosed',
            type: {
              name: 'Boolean'
            }
          },
          locale: {
            required: false,
            serializedName: 'locale',
            type: {
              name: 'String'
            }
          },
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          speak: {
            required: false,
            serializedName: 'speak',
            type: {
              name: 'String'
            }
          },
          inputHint: {
            required: false,
            serializedName: 'inputHint',
            type: {
              name: 'Enum',
              allowedValues: [ 'acceptingInput', 'expectingInput', 'ignoringInput' ]
            }
          },
          summary: {
            required: false,
            serializedName: 'summary',
            type: {
              name: 'String'
            }
          },
          suggestedActions: {
            required: false,
            serializedName: 'suggestedActions',
            type: {
              name: 'Composite',
              className: 'SuggestedActions'
            }
          },
          attachments: {
            required: false,
            serializedName: 'attachments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AttachmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'Attachment'
                  }
              }
            }
          },
          entities: {
            required: false,
            serializedName: 'entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'Entity'
                  }
              }
            }
          },
          channelData: {
            required: false,
            serializedName: 'channelData',
            type: {
              name: 'Object'
            }
          },
          action: {
            required: false,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          },
          replyToId: {
            required: false,
            serializedName: 'replyToId',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          relatesTo: {
            required: false,
            serializedName: 'relatesTo',
            type: {
              name: 'Composite',
              className: 'ConversationReference'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Activity;