export const FOLD_SEPARATOR = '\r\n '
export const LINE_SEPARATOR = '\r\n'
export const PARAMETER_SEPARATOR = ';'
export const PARAMETER_KV_SEPARATOR = '='
export const PROPERTY_KV_SEPARATOR = ':'

export const FOLD_REGEX = new RegExp(/.{1,75}/g)

export const PREFIX = 'BEGIN'
export const SUFFIX = 'END'

export const VALUE_TYPES = {
  BINARY: 'BINARY',
  BOOLEAN: 'BOOLEAN',
  CALADDRESS: 'CALADDRESS',
  'CAL-ADDRESS': 'CALADDRESS',
  DATE: 'DATE',
  DATETIME: 'DATETIME',
  'DATE-TIME': 'DATETIME',
  DURATION: 'DURATION',
  FLOAT: 'FLOAT',
  INTEGER: 'INTEGER',
  PERIOD: 'PERIOD',
  RECUR: 'RECUR',
  TEXT: 'TEXT',
  TIME: 'TIME',
  URI: 'URI',
  UTCOFFSET: 'UTCOFFSET',
  'UTC-OFFSET': 'UTCOFFSET'
}

export const DEFAULT_VALUE_TYPE = VALUE_TYPES.TEXT

export const DEFAULT_VALUE_TYPES = {
  ATTACH: VALUE_TYPES.URI,
  ATTENDEE: VALUE_TYPES.CALADDRESS,
  CREATED: VALUE_TYPES.DATETIME,
  DTSTART: VALUE_TYPES.DATETIME,
  DTEND: VALUE_TYPES.DATETIME,
  DTSTAMP: VALUE_TYPES.DATETIME,
  DUE: VALUE_TYPES.DATETIME,
  DURATION: VALUE_TYPES.DURATION,
  EXDATE: VALUE_TYPES.DATETIME,
  FREEBUSY: VALUE_TYPES.PERIOD,
  'LAST-MODIFIED': VALUE_TYPES.DATETIME,
  ORGANIZER: VALUE_TYPES.CALADDRESS,
  'PERCENT-COMPLETE': VALUE_TYPES.INTEGER,
  PRIORITY: VALUE_TYPES.INTEGER,
  RDATE: VALUE_TYPES.DATETIME,
  'RECURRENCE-ID': VALUE_TYPES.DATETIME,
  REPEAT: VALUE_TYPES.INTEGER,
  RRULE: VALUE_TYPES.RECUR,
  SEQUENCE: VALUE_TYPES.INTEGER,
  TRIGGER: VALUE_TYPES.DURATION,
  TZOFFSETFROM: VALUE_TYPES.UTCOFFSET,
  TZOFFSETTO: VALUE_TYPES.UTCOFFSET,
  TZURL: VALUE_TYPES.URI,
  URL: VALUE_TYPES.URI,
  VERSION: VALUE_TYPES.FLOAT + '__FIXED_1'
}
