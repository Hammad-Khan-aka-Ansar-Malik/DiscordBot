const Discord = require('discord.js');
const fs = require('fs');

module.exports = client => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.helps = new Discord.Collection();
 
  //function loadCmds () {
    fs.readdir('./src/commands/', (err, categories) => {
        if (err) console.log(err);
        console.log(`Found total ${categories.length} category.`);
        categories.forEach(category => {
            let moduleConf = require(`../commands/${category}/module.json`);
            moduleConf.path = `./commands/${category}`;
            moduleConf.cmds = [];
            client.helps.set(category, moduleConf);
            if (!moduleConf) return;
            fs.readdir(`./src/commands/${category}`, (err, files) => {
                console.log(`Found total ${files.length - 1} command from ${category}.`)
                if (err) console.log(err);
                let commands = new Array();
                files.forEach(file => {
                    //delete require.cache[require.resolve(`../commands/${category}/${file}`)];
                    if (!file.endsWith('.js')) return;
                    let prop = require(`../commands/${category}/${file}`);
                    let cmdName = file.split('.')[0];
                    client.commands.set(prop.help.name, prop);
                    prop.conf.aliases.forEach(alias => {
                        client.aliases.set(alias, prop.help.name);
                    });
                    client.helps.get(category).cmds.push(prop.help.name)
                });
            });
        });
    });
 }
//} 

/**
 { name: 'beep', description: 'beep!', execute: [Function: execute] } beep
{
  name: 'server',
  description: 'serverinfo',
  execute: [Function: execute]
} server
{
  name: 'stats',
  description: 'server-stats',
  execute: [Function: execute]
} stats
{
  name: 'invite',
  description: 'invites the bot',
  execute: [Function: execute]
} invite
{} undefined
{
  name: 'invite',
  description: 'invites the bot',
  execute: [Function: execute]
} invite
{} undefined
{} undefined
{
  name: 'ban',
  description: 'ban user cmd',
  execute: [Function: execute]
} ban
{
  name: 'bant',
  description: 'bant user cmd',
  execute: [Function: execute]
} bant
{} undefined
{} undefined
{
  name: 'eval',
  description: 'evaluate cmd',
  execute: [Function: execute]
} eval
{} undefined
{} undefined
{
  name: 'kick',
  description: 'the kick command',
  execute: [Function: execute]
} kick
{
  name: 'Mod Logs',
  description: 'Mod Log ommands',
  execute: [Function: execute]
} Mod Logs
{ name: 'mute', description: 'Mute Cmd', execute: [Function: execute] } mute
{
  name: 'shame on you',
  description: 'a ShameBox Cmd',
  execute: [Function: execute]
} shame on you
{ name: 'Mute', description: 'Mute Cmd', execute: [Function: execute] } Mute
{
  name: 'sban',
  description: 'soft ban user cmd',
  execute: [Function: execute]
} sban
{} undefined
{} undefined
{ name: 'test', description: 'test cmd', execute: [Function: execute] } test
{
  name: 'mutent',
  description: ' Un Mute Cmd',
  execute: [Function: execute]
} mutent
{ name: 'Mute', description: 'Mute Cmd', execute: [Function: execute] } Mute
hi
{
  BaseClient: [class BaseClient extends EventEmitter],
  Client: [class Client extends BaseClient],
  Shard: [class Shard extends EventEmitter],
  ShardClientUtil: [class ShardClientUtil],
  ShardingManager: [class ShardingManager extends EventEmitter],
  WebhookClient: [class WebhookClient extends BaseClient],
  ActivityFlags: [class ActivityFlags extends BitField] {
    FLAGS: {
      INSTANCE: 1,
      JOIN: 2,
      SPECTATE: 4,
      JOIN_REQUEST: 8,
      SYNC: 16,
      PLAY: 32
    }
  },
  BitField: [class BitField] { FLAGS: {} },
  Collection: [class Collection extends Collection],
  Constants: {
    Package: {
      _from: 'discord.js@^12.5.1',
      _id: 'discord.js@12.5.1',
      _inBundle: false,
      _integrity: 'sha512-VwZkVaUAIOB9mKdca0I5MefPMTQJTNg0qdgi1huF3iwsFwJ0L5s/Y69AQe+iPmjuV6j9rtKoG0Ta0n9vgEIL6w==',
      _location: '/discord.js',
      _phantomChildren: {},
      _requested: [Object],
      _requiredBy: [Array],
      _resolved: 'https://registry.npmjs.org/discord.js/-/discord.js-12.5.1.tgz',
      _shasum: '992b45753e3815526a279914ccc281d3496f5990',
      _spec: 'discord.js@^12.5.1',
      _where: 'C:\\Users\\H K\\Dropbox\\My PC (HK-00ESSJ5)\\Desktop\\New folder\\New folder\\bot\\Discordjs-master',
      author: [Object],
      browser: [Object],
      bugs: [Object],
      bundleDependencies: false,
      commitlint: [Object],
      dependencies: [Object],
      deprecated: false,
      description: 'A powerful library for interacting with the Discord API',
      devDependencies: [Object],
      engines: [Object],
      exports: [Object],
      homepage: 'https://github.com/discordjs/discord.js#readme',
      husky: [Object],
      keywords: [Array],
      license: 'Apache-2.0',
      'lint-staged': [Object],
      main: './src/index',
      name: 'discord.js',
      prettier: [Object],
      repository: [Object],
      runkitExampleFilename: './docs/examples/ping.js',
      scripts: [Object],
      types: './typings/index.d.ts',
      unpkg: './webpack/discord.min.js',
      version: '12.5.1'
    },
    browser: false,
    DefaultOptions: {
      shardCount: 1,
      messageCacheMaxSize: 200,
      messageCacheLifetime: 0,
      messageSweepInterval: 0,
      messageEditHistoryMaxSize: -1,
      fetchAllMembers: false,
      disableMentions: 'none',
      partials: [],
      restWsBridgeTimeout: 5000,
      restRequestTimeout: 15000,
      retryLimit: 1,
      restTimeOffset: 500,
      restSweepInterval: 60,
      presence: {},
      ws: [Object],
      http: [Object]
    },
    UserAgent: 'DiscordBot (https://github.com/discordjs/discord.js, 12.5.1) Node.js/v14.15.4',
    WSCodes: {
      '1000': 'WS_CLOSE_REQUESTED',
      '4004': 'TOKEN_INVALID',
      '4010': 'SHARDING_INVALID',
      '4011': 'SHARDING_REQUIRED',
      '4013': 'INVALID_INTENTS',
      '4014': 'DISALLOWED_INTENTS'
    },
    Endpoints: {
      CDN: [Function: CDN],
      invite: [Function: invite],
      botGateway: '/gateway/bot'
    },
    Status: {
      READY: 0,
      CONNECTING: 1,
      RECONNECTING: 2,
      IDLE: 3,
      NEARLY: 4,
      DISCONNECTED: 5,
      WAITING_FOR_GUILDS: 6,
      IDENTIFYING: 7,
      RESUMING: 8
    },
    VoiceStatus: {
      CONNECTED: 0,
      CONNECTING: 1,
      AUTHENTICATING: 2,
      RECONNECTING: 3,
      DISCONNECTED: 4
    },
    OPCodes: {
      DISPATCH: 0,
      HEARTBEAT: 1,
      IDENTIFY: 2,
      STATUS_UPDATE: 3,
      VOICE_STATE_UPDATE: 4,
      VOICE_GUILD_PING: 5,
      RESUME: 6,
      RECONNECT: 7,
      REQUEST_GUILD_MEMBERS: 8,
      INVALID_SESSION: 9,
      HELLO: 10,
      HEARTBEAT_ACK: 11
    },
    VoiceOPCodes: {
      IDENTIFY: 0,
      SELECT_PROTOCOL: 1,
      READY: 2,
      HEARTBEAT: 3,
      SESSION_DESCRIPTION: 4,
      SPEAKING: 5,
      HELLO: 8,
      CLIENT_CONNECT: 12,
      CLIENT_DISCONNECT: 13
    },
    Events: {
      RATE_LIMIT: 'rateLimit',
      CLIENT_READY: 'ready',
      GUILD_CREATE: 'guildCreate',
      GUILD_DELETE: 'guildDelete',
      GUILD_UPDATE: 'guildUpdate',
      GUILD_UNAVAILABLE: 'guildUnavailable',
      GUILD_AVAILABLE: 'guildAvailable',
      GUILD_MEMBER_ADD: 'guildMemberAdd',
      GUILD_MEMBER_REMOVE: 'guildMemberRemove',
      GUILD_MEMBER_UPDATE: 'guildMemberUpdate',
      GUILD_MEMBER_AVAILABLE: 'guildMemberAvailable',
      GUILD_MEMBER_SPEAKING: 'guildMemberSpeaking',
      GUILD_MEMBERS_CHUNK: 'guildMembersChunk',
      GUILD_INTEGRATIONS_UPDATE: 'guildIntegrationsUpdate',
      GUILD_ROLE_CREATE: 'roleCreate',
      GUILD_ROLE_DELETE: 'roleDelete',
      INVITE_CREATE: 'inviteCreate',
      INVITE_DELETE: 'inviteDelete',
      GUILD_ROLE_UPDATE: 'roleUpdate',
      GUILD_EMOJI_CREATE: 'emojiCreate',
      GUILD_EMOJI_DELETE: 'emojiDelete',
      GUILD_EMOJI_UPDATE: 'emojiUpdate',
      GUILD_BAN_ADD: 'guildBanAdd',
      GUILD_BAN_REMOVE: 'guildBanRemove',
      CHANNEL_CREATE: 'channelCreate',
      CHANNEL_DELETE: 'channelDelete',
      CHANNEL_UPDATE: 'channelUpdate',
      CHANNEL_PINS_UPDATE: 'channelPinsUpdate',
      MESSAGE_CREATE: 'message',
      MESSAGE_DELETE: 'messageDelete',
      MESSAGE_UPDATE: 'messageUpdate',
      MESSAGE_BULK_DELETE: 'messageDeleteBulk',
      MESSAGE_REACTION_ADD: 'messageReactionAdd',
      MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
      MESSAGE_REACTION_REMOVE_ALL: 'messageReactionRemoveAll',
      MESSAGE_REACTION_REMOVE_EMOJI: 'messageReactionRemoveEmoji',
      USER_UPDATE: 'userUpdate',
      PRESENCE_UPDATE: 'presenceUpdate',
      VOICE_SERVER_UPDATE: 'voiceServerUpdate',
      VOICE_STATE_UPDATE: 'voiceStateUpdate',
      VOICE_BROADCAST_SUBSCRIBE: 'subscribe',
      VOICE_BROADCAST_UNSUBSCRIBE: 'unsubscribe',
      TYPING_START: 'typingStart',
      TYPING_STOP: 'typingStop',
      WEBHOOKS_UPDATE: 'webhookUpdate',
      ERROR: 'error',
      WARN: 'warn',
      DEBUG: 'debug',
      SHARD_DISCONNECT: 'shardDisconnect',
      SHARD_ERROR: 'shardError',
      SHARD_RECONNECTING: 'shardReconnecting',
      SHARD_READY: 'shardReady',
      SHARD_RESUME: 'shardResume',
      INVALIDATED: 'invalidated',
      RAW: 'raw'
    },
    ShardEvents: {
      CLOSE: 'close',
      DESTROYED: 'destroyed',
      INVALID_SESSION: 'invalidSession',
      READY: 'ready',
      RESUMED: 'resumed',
      ALL_READY: 'allReady'
    },
    PartialTypes: [Object: null prototype] {
      USER: 'USER',
      CHANNEL: 'CHANNEL',
      GUILD_MEMBER: 'GUILD_MEMBER',
      MESSAGE: 'MESSAGE',
      REACTION: 'REACTION'
    },
    WSEvents: [Object: null prototype] {
      READY: 'READY',
      RESUMED: 'RESUMED',
      GUILD_CREATE: 'GUILD_CREATE',
      GUILD_DELETE: 'GUILD_DELETE',
      GUILD_UPDATE: 'GUILD_UPDATE',
      INVITE_CREATE: 'INVITE_CREATE',
      INVITE_DELETE: 'INVITE_DELETE',
      GUILD_MEMBER_ADD: 'GUILD_MEMBER_ADD',
      GUILD_MEMBER_REMOVE: 'GUILD_MEMBER_REMOVE',
      GUILD_MEMBER_UPDATE: 'GUILD_MEMBER_UPDATE',
      GUILD_MEMBERS_CHUNK: 'GUILD_MEMBERS_CHUNK',
      GUILD_INTEGRATIONS_UPDATE: 'GUILD_INTEGRATIONS_UPDATE',
      GUILD_ROLE_CREATE: 'GUILD_ROLE_CREATE',
      GUILD_ROLE_DELETE: 'GUILD_ROLE_DELETE',
      GUILD_ROLE_UPDATE: 'GUILD_ROLE_UPDATE',
      GUILD_BAN_ADD: 'GUILD_BAN_ADD',
      GUILD_BAN_REMOVE: 'GUILD_BAN_REMOVE',
      GUILD_EMOJIS_UPDATE: 'GUILD_EMOJIS_UPDATE',
      CHANNEL_CREATE: 'CHANNEL_CREATE',
      CHANNEL_DELETE: 'CHANNEL_DELETE',
      CHANNEL_UPDATE: 'CHANNEL_UPDATE',
      CHANNEL_PINS_UPDATE: 'CHANNEL_PINS_UPDATE',
      MESSAGE_CREATE: 'MESSAGE_CREATE',
      MESSAGE_DELETE: 'MESSAGE_DELETE',
      MESSAGE_UPDATE: 'MESSAGE_UPDATE',
      MESSAGE_DELETE_BULK: 'MESSAGE_DELETE_BULK',
      MESSAGE_REACTION_ADD: 'MESSAGE_REACTION_ADD',
      MESSAGE_REACTION_REMOVE: 'MESSAGE_REACTION_REMOVE',
      MESSAGE_REACTION_REMOVE_ALL: 'MESSAGE_REACTION_REMOVE_ALL',
      MESSAGE_REACTION_REMOVE_EMOJI: 'MESSAGE_REACTION_REMOVE_EMOJI',
      USER_UPDATE: 'USER_UPDATE',
      PRESENCE_UPDATE: 'PRESENCE_UPDATE',
      TYPING_START: 'TYPING_START',
      VOICE_STATE_UPDATE: 'VOICE_STATE_UPDATE',
      VOICE_SERVER_UPDATE: 'VOICE_SERVER_UPDATE',
      WEBHOOKS_UPDATE: 'WEBHOOKS_UPDATE'
    },
    MessageTypes: [
      'DEFAULT',
      'RECIPIENT_ADD',
      'RECIPIENT_REMOVE',
      'CALL',
      'CHANNEL_NAME_CHANGE',
      'CHANNEL_ICON_CHANGE',
      'PINS_ADD',
      'GUILD_MEMBER_JOIN',
      'USER_PREMIUM_GUILD_SUBSCRIPTION',
      'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1',
      'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2',
      'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3',
      'CHANNEL_FOLLOW_ADD',
      null,
      'GUILD_DISCOVERY_DISQUALIFIED',
      'GUILD_DISCOVERY_REQUALIFIED'
    ],
    ActivityTypes: [
      'PLAYING',
      'STREAMING',
      'LISTENING',
      'WATCHING',
      'CUSTOM_STATUS',
      'COMPETING'
    ],
    ChannelTypes: {
      TEXT: 0,
      DM: 1,
      VOICE: 2,
      GROUP: 3,
      CATEGORY: 4,
      NEWS: 5,
      STORE: 6
    },
    ClientApplicationAssetTypes: { SMALL: 1, BIG: 2 },
    Colors: {
      DEFAULT: 0,
      WHITE: 16777215,
      AQUA: 1752220,
      GREEN: 3066993,
      BLUE: 3447003,
      YELLOW: 16776960,
      PURPLE: 10181046,
      LUMINOUS_VIVID_PINK: 15277667,
      GOLD: 15844367,
      ORANGE: 15105570,
      RED: 15158332,
      GREY: 9807270,
      NAVY: 3426654,
      DARK_AQUA: 1146986,
      DARK_GREEN: 2067276,
      DARK_BLUE: 2123412,
      DARK_PURPLE: 7419530,
      DARK_VIVID_PINK: 11342935,
      DARK_GOLD: 12745742,
      DARK_ORANGE: 11027200,
      DARK_RED: 10038562,
      DARK_GREY: 9936031,
      DARKER_GREY: 8359053,
      LIGHT_GREY: 12370112,
      DARK_NAVY: 2899536,
      BLURPLE: 7506394,
      GREYPLE: 10070709,
      DARK_BUT_NOT_BLACK: 2895667,
      NOT_QUITE_BLACK: 2303786
    },
    ExplicitContentFilterLevels: [ 'DISABLED', 'MEMBERS_WITHOUT_ROLES', 'ALL_MEMBERS' ],
    VerificationLevels: [ 'NONE', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH' ],
    APIErrors: {
      UNKNOWN_ACCOUNT: 10001,
      UNKNOWN_APPLICATION: 10002,
      UNKNOWN_CHANNEL: 10003,
      UNKNOWN_GUILD: 10004,
      UNKNOWN_INTEGRATION: 10005,
      UNKNOWN_INVITE: 10006,
      UNKNOWN_MEMBER: 10007,
      UNKNOWN_MESSAGE: 10008,
      UNKNOWN_OVERWRITE: 10009,
      UNKNOWN_PROVIDER: 10010,
      UNKNOWN_ROLE: 10011,
      UNKNOWN_TOKEN: 10012,
      UNKNOWN_USER: 10013,
      UNKNOWN_EMOJI: 10014,
      UNKNOWN_WEBHOOK: 10015,
      UNKNOWN_BAN: 10026,
      UNKNOWN_GUILD_TEMPLATE: 10057,
      BOT_PROHIBITED_ENDPOINT: 20001,
      BOT_ONLY_ENDPOINT: 20002,
      CHANNEL_HIT_WRITE_RATELIMIT: 20028,
      MAXIMUM_GUILDS: 30001,
      MAXIMUM_FRIENDS: 30002,
      MAXIMUM_PINS: 30003,
      MAXIMUM_ROLES: 30005,
      MAXIMUM_WEBHOOKS: 30007,
      MAXIMUM_REACTIONS: 30010,
      MAXIMUM_CHANNELS: 30013,
      MAXIMUM_ATTACHMENTS: 30015,
      MAXIMUM_INVITES: 30016,
      GUILD_ALREADY_HAS_TEMPLATE: 30031,
      UNAUTHORIZED: 40001,
      ACCOUNT_VERIFICATION_REQUIRED: 40002,
      REQUEST_ENTITY_TOO_LARGE: 40005,
      FEATURE_TEMPORARILY_DISABLED: 40006,
      USER_BANNED: 40007,
      ALREADY_CROSSPOSTED: 40033,
      MISSING_ACCESS: 50001,
      INVALID_ACCOUNT_TYPE: 50002,
      CANNOT_EXECUTE_ON_DM: 50003,
      EMBED_DISABLED: 50004,
      CANNOT_EDIT_MESSAGE_BY_OTHER: 50005,
      CANNOT_SEND_EMPTY_MESSAGE: 50006,
      CANNOT_MESSAGE_USER: 50007,
      CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL: 50008,
      CHANNEL_VERIFICATION_LEVEL_TOO_HIGH: 50009,
      OAUTH2_APPLICATION_BOT_ABSENT: 50010,
      MAXIMUM_OAUTH2_APPLICATIONS: 50011,
      INVALID_OAUTH_STATE: 50012,
      MISSING_PERMISSIONS: 50013,
      INVALID_AUTHENTICATION_TOKEN: 50014,
      NOTE_TOO_LONG: 50015,
      INVALID_BULK_DELETE_QUANTITY: 50016,
      CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL: 50019,
      INVALID_OR_TAKEN_INVITE_CODE: 50020,
      CANNOT_EXECUTE_ON_SYSTEM_MESSAGE: 50021,
      INVALID_OAUTH_TOKEN: 50025,
      BULK_DELETE_MESSAGE_TOO_OLD: 50034,
      INVALID_FORM_BODY: 50035,
      INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT: 50036,
      INVALID_API_VERSION: 50041,
      CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL: 50074,
      REACTION_BLOCKED: 90001,
      RESOURCE_OVERLOADED: 130000
    },
    DefaultMessageNotifications: [ 'ALL', 'MENTIONS' ],
    MembershipStates: [ null, 'INVITED', 'ACCEPTED' ],
    WebhookTypes: [ null, 'Incoming', 'Channel Follower' ]
  },
  DataResolver: [class DataResolver],
  BaseManager: [class BaseManager],
  DiscordAPIError: [class DiscordAPIError extends Error],
  HTTPError: [class HTTPError extends Error],
  MessageFlags: [class MessageFlags extends BitField] {
    FLAGS: {
      CROSSPOSTED: 1,
      IS_CROSSPOST: 2,
      SUPPRESS_EMBEDS: 4,
      SOURCE_MESSAGE_DELETED: 8,
      URGENT: 16
    }
  },
  Intents: [class Intents extends BitField] {
    FLAGS: {
      GUILDS: 1,
      GUILD_MEMBERS: 2,
      GUILD_BANS: 4,
      GUILD_EMOJIS: 8,
      GUILD_INTEGRATIONS: 16,
      GUILD_WEBHOOKS: 32,
      GUILD_INVITES: 64,
      GUILD_VOICE_STATES: 128,
      GUILD_PRESENCES: 256,
      GUILD_MESSAGES: 512,
      GUILD_MESSAGE_REACTIONS: 1024,
      GUILD_MESSAGE_TYPING: 2048,
      DIRECT_MESSAGES: 4096,
      DIRECT_MESSAGE_REACTIONS: 8192,
      DIRECT_MESSAGE_TYPING: 16384
    },
    PRIVILEGED: 258,
    ALL: 32767,
    NON_PRIVILEGED: 32509
  },
  Permissions: [class Permissions extends BitField] {
    FLAGS: {
      CREATE_INSTANT_INVITE: 1,
      KICK_MEMBERS: 2,
      BAN_MEMBERS: 4,
      ADMINISTRATOR: 8,
      MANAGE_CHANNELS: 16,
      MANAGE_GUILD: 32,
      ADD_REACTIONS: 64,
      VIEW_AUDIT_LOG: 128,
      PRIORITY_SPEAKER: 256,
      STREAM: 512,
      VIEW_CHANNEL: 1024,
      SEND_MESSAGES: 2048,
      SEND_TTS_MESSAGES: 4096,
      MANAGE_MESSAGES: 8192,
      EMBED_LINKS: 16384,
      ATTACH_FILES: 32768,
      READ_MESSAGE_HISTORY: 65536,
      MENTION_EVERYONE: 131072,
      USE_EXTERNAL_EMOJIS: 262144,
      VIEW_GUILD_INSIGHTS: 524288,
      CONNECT: 1048576,
      SPEAK: 2097152,
      MUTE_MEMBERS: 4194304,
      DEAFEN_MEMBERS: 8388608,
      MOVE_MEMBERS: 16777216,
      USE_VAD: 33554432,
      CHANGE_NICKNAME: 67108864,
      MANAGE_NICKNAMES: 134217728,
      MANAGE_ROLES: 268435456,
      MANAGE_WEBHOOKS: 536870912,
      MANAGE_EMOJIS: 1073741824
    },
    ALL: 2147483647,
    DEFAULT: 104324673
  },
  Speaking: [class Speaking extends BitField] {
    FLAGS: { SPEAKING: 1, SOUNDSHARE: 2, PRIORITY_SPEAKING: 4 }
  },
  Snowflake: [class SnowflakeUtil],
  SnowflakeUtil: [class SnowflakeUtil],
  Structures: [class Structures],
  SystemChannelFlags: [class SystemChannelFlags extends BitField] {
    FLAGS: { WELCOME_MESSAGE_DISABLED: 1, BOOST_MESSAGE_DISABLED: 2 }
  },
  UserFlags: [class UserFlags extends BitField] {
    FLAGS: {
      DISCORD_EMPLOYEE: 1,
      PARTNERED_SERVER_OWNER: 2,
      DISCORD_PARTNER: 2,
      HYPESQUAD_EVENTS: 4,
      BUGHUNTER_LEVEL_1: 8,
      HOUSE_BRAVERY: 64,
      HOUSE_BRILLIANCE: 128,
      HOUSE_BALANCE: 256,
      EARLY_SUPPORTER: 512,
      TEAM_USER: 1024,
      SYSTEM: 4096,
      BUGHUNTER_LEVEL_2: 16384,
      VERIFIED_BOT: 65536,
      EARLY_VERIFIED_DEVELOPER: 131072,
      VERIFIED_DEVELOPER: 131072
    }
  },
  Util: [class Util],
  version: '12.5.1',
  ChannelManager: [class ChannelManager extends BaseManager],
  GuildChannelManager: [class GuildChannelManager extends BaseManager],
  GuildEmojiManager: [class GuildEmojiManager extends BaseManager],
  GuildEmojiRoleManager: [class GuildEmojiRoleManager],
  GuildMemberManager: [class GuildMemberManager extends BaseManager],
  GuildMemberRoleManager: [class GuildMemberRoleManager],
  GuildManager: [class GuildManager extends BaseManager],
  ReactionManager: [class ReactionManager extends BaseManager],
  ReactionUserManager: [class ReactionUserManager extends BaseManager],
  MessageManager: [class MessageManager extends BaseManager],
  PresenceManager: [class PresenceManager extends BaseManager],
  RoleManager: [class RoleManager extends BaseManager],
  UserManager: [class UserManager extends BaseManager],
  discordSort: [Function: discordSort],
  escapeMarkdown: [Function: escapeMarkdown],
  fetchRecommendedShards: [Function: fetchRecommendedShards],
  resolveColor: [Function: resolveColor],
  resolveString: [Function: resolveString],
  splitMessage: [Function: splitMessage],
  Application: [class Application extends Base],
  Base: [class Base],
  Activity: [class Activity],
  APIMessage: [class APIMessage],
  BaseGuildEmoji: [class BaseGuildEmoji extends Emoji],
  CategoryChannel: [class CategoryChannel extends GuildChannel],
  Channel: [class Channel extends Base],
  ClientApplication: [class ClientApplication extends Application],
  ClientUser: [Getter],
  Collector: [class Collector extends EventEmitter],
  DMChannel: [class DMChannel extends Channel],
  Emoji: [class Emoji extends Base],
  Guild: [class Guild extends Base],
  GuildAuditLogs: [class GuildAuditLogs] {
    Actions: {
      ALL: null,
      GUILD_UPDATE: 1,
      CHANNEL_CREATE: 10,
      CHANNEL_UPDATE: 11,
      CHANNEL_DELETE: 12,
      CHANNEL_OVERWRITE_CREATE: 13,
      CHANNEL_OVERWRITE_UPDATE: 14,
      CHANNEL_OVERWRITE_DELETE: 15,
      MEMBER_KICK: 20,
      MEMBER_PRUNE: 21,
      MEMBER_BAN_ADD: 22,
      MEMBER_BAN_REMOVE: 23,
      MEMBER_UPDATE: 24,
      MEMBER_ROLE_UPDATE: 25,
      MEMBER_MOVE: 26,
      MEMBER_DISCONNECT: 27,
      BOT_ADD: 28,
      ROLE_CREATE: 30,
      ROLE_UPDATE: 31,
      ROLE_DELETE: 32,
      INVITE_CREATE: 40,
      INVITE_UPDATE: 41,
      INVITE_DELETE: 42,
      WEBHOOK_CREATE: 50,
      WEBHOOK_UPDATE: 51,
      WEBHOOK_DELETE: 52,
      EMOJI_CREATE: 60,
      EMOJI_UPDATE: 61,
      EMOJI_DELETE: 62,
      MESSAGE_DELETE: 72,
      MESSAGE_BULK_DELETE: 73,
      MESSAGE_PIN: 74,
      MESSAGE_UNPIN: 75,
      INTEGRATION_CREATE: 80,
      INTEGRATION_UPDATE: 81,
      INTEGRATION_DELETE: 82
    },
    Targets: {
      ALL: 'ALL',
      GUILD: 'GUILD',
      CHANNEL: 'CHANNEL',
      USER: 'USER',
      ROLE: 'ROLE',
      INVITE: 'INVITE',
      WEBHOOK: 'WEBHOOK',
      EMOJI: 'EMOJI',
      MESSAGE: 'MESSAGE',
      INTEGRATION: 'INTEGRATION',
      UNKNOWN: 'UNKNOWN'
    },
    Entry: [class GuildAuditLogsEntry]
  },
  GuildChannel: [class GuildChannel extends Channel],
  GuildEmoji: [class GuildEmoji extends BaseGuildEmoji],
  GuildMember: [class GuildMember extends Base],
  GuildPreview: [class GuildPreview extends Base],
  GuildTemplate: [class GuildTemplate extends Base],
  Integration: [class Integration extends Base],
  Invite: [class Invite extends Base],
  Message: [class Message extends Base],
  MessageAttachment: [class MessageAttachment],
  MessageCollector: [class MessageCollector extends Collector],
  MessageEmbed: [class MessageEmbed],
  MessageMentions: [class MessageMentions] {
    EVERYONE_PATTERN: /@(everyone|here)/g,
    USERS_PATTERN: /<@!?(\d{17,19})>/g,
    ROLES_PATTERN: /<@&(\d{17,19})>/g,
    CHANNELS_PATTERN: /<#(\d{17,19})>/g
  },
  MessageReaction: [class MessageReaction],
  NewsChannel: [class NewsChannel extends TextChannel],
  PermissionOverwrites: [class PermissionOverwrites],
  Presence: [class Presence],
  ClientPresence: [class ClientPresence extends Presence],
  ReactionCollector: [class ReactionCollector extends Collector],
  ReactionEmoji: [class ReactionEmoji extends Emoji],
  RichPresenceAssets: [class RichPresenceAssets],
  Role: [class Role extends Base],
  StoreChannel: [class StoreChannel extends GuildChannel],
  Team: [class Team extends Base],
  TeamMember: [class TeamMember extends Base],
  TextChannel: [class TextChannel extends GuildChannel],
  User: [class User extends Base],
  VoiceChannel: [class VoiceChannel extends GuildChannel],
  VoiceRegion: [class VoiceRegion],
  VoiceState: [class VoiceState extends Base],
  Webhook: [class Webhook],
  WebSocket: {
    WebSocket: [class WebSocket extends EventEmitter] {
      CONNECTING: 0,
      OPEN: 1,
      CLOSING: 2,
      CLOSED: 3,
      createWebSocketStream: [Function: createWebSocketStream],
      Server: [class WebSocketServer extends EventEmitter],
      Receiver: [class Receiver extends Writable],
      Sender: [class Sender]
    },
    encoding: 'json',
    pack: [Function: stringify],
    unpack: [Function (anonymous)],
    create: [Function (anonymous)],
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
  }
} undefined undefined
TypeError: Cannot read property 'get' of undefined
    at ReadStream.<anonymous> (C:\Users\H K\Dropbox\My PC (HK-00ESSJ5)\Desktop\New folder\New folder\bot\Discordjs-master\Structures\Dude.js:44:17)
    at ReadStream.emit (events.js:315:20)
    at addChunk (internal/streams/readable.js:309:12)
    at readableAddChunk (internal/streams/readable.js:284:9)
    at ReadStream.Readable.push (internal/streams/readable.js:223:10)
    at TTY.onStreamRead (internal/stream_base_commons.js:188:23)
ready

 */