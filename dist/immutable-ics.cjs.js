'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typedImmutable = require('typed-immutable');
var isFunction = _interopDefault(require('lodash.isfunction'));
var isNull = _interopDefault(require('lodash.isnull'));
var isUndefined = _interopDefault(require('lodash.isundefined'));
var isDate = _interopDefault(require('lodash.isdate'));
var padStart = _interopDefault(require('lodash.padstart'));

var formatDate = (function(a){return a.getFullYear()+padStart(a.getMonth()+1,2,0)+padStart(a.getDate(),2,0)});

var formatTime = (function(a){return padStart(a.getUTCHours(),2,0)+padStart(a.getUTCMinutes(),2,0)+padStart(a.getUTCSeconds(),2,0)+'Z'});

var formatDateTime = (function(a){return formatDate(a)+'T'+formatTime(a)});

var removeTimeZoneOffset = (function(a){var b=6e4*a.getTimezoneOffset();return new Date(a.getTime()+b)});

var BOOLEAN=function(a){return a?'TRUE':'FALSE'};var DATE=function(a){return isDate(a)?formatDate(removeTimeZoneOffset(a)):a};var DATETIME=function(a){return isDate(a)?formatDateTime(a):a};var FLOAT=function(a){return Number.parseFloat(a)};var FLOAT__FIXED_1=function(){return FLOAT.apply(void 0,arguments).toFixed(1)};var INTEGER=function(a){return Number.parseInt(a)};var TEXT=function(a){return a.toString().replace(/\\/g,'\\\\').replace(/,/g,'\\,').replace(/;/g,'\\;').replace(/\n/g,'\\n')};var TIME=function(a){return isDate(a)?formatTime(removeTimeZoneOffset(a)):a};

var transformers = Object.freeze({
	BOOLEAN: BOOLEAN,
	DATE: DATE,
	DATETIME: DATETIME,
	FLOAT: FLOAT,
	FLOAT__FIXED_1: FLOAT__FIXED_1,
	INTEGER: INTEGER,
	TEXT: TEXT,
	TIME: TIME
});

var FOLD_SEPARATOR='\r\n ';var LINE_SEPARATOR='\r\n';var PARAMETER_SEPARATOR=';';var PARAMETER_KV_SEPARATOR='=';var PARAMETER_VALUE_KEY='VALUE';var PROPERTY_KV_SEPARATOR=':';var VALUE_SEPARATOR=',';var FOLD_REGEX=new RegExp(/[\s\S]{1,73}/g);var PREFIX='BEGIN';var SUFFIX='END';var VALUE_TYPES={BINARY:'BINARY',BOOLEAN:'BOOLEAN',CALADDRESS:'CALADDRESS',"CAL-ADDRESS":'CALADDRESS',DATE:'DATE',DATETIME:'DATETIME',"DATE-TIME":'DATETIME',DURATION:'DURATION',FLOAT:'FLOAT',INTEGER:'INTEGER',PERIOD:'PERIOD',RECUR:'RECUR',TEXT:'TEXT',TIME:'TIME',URI:'URI',UTCOFFSET:'UTCOFFSET',"UTC-OFFSET":'UTCOFFSET'};var DEFAULT_VALUE_TYPE=VALUE_TYPES.TEXT;var DEFAULT_VALUE_TYPES={ATTACH:VALUE_TYPES.URI,ATTENDEE:VALUE_TYPES.CALADDRESS,CREATED:VALUE_TYPES.DATETIME,DTSTART:VALUE_TYPES.DATETIME,DTEND:VALUE_TYPES.DATETIME,DTSTAMP:VALUE_TYPES.DATETIME,DUE:VALUE_TYPES.DATETIME,DURATION:VALUE_TYPES.DURATION,EXDATE:VALUE_TYPES.DATETIME,FREEBUSY:VALUE_TYPES.PERIOD,"LAST-MODIFIED":VALUE_TYPES.DATETIME,ORGANIZER:VALUE_TYPES.CALADDRESS,"PERCENT-COMPLETE":VALUE_TYPES.INTEGER,PRIORITY:VALUE_TYPES.INTEGER,RDATE:VALUE_TYPES.DATETIME,"RECURRENCE-ID":VALUE_TYPES.DATETIME,REPEAT:VALUE_TYPES.INTEGER,RRULE:VALUE_TYPES.RECUR,SEQUENCE:VALUE_TYPES.INTEGER,TRIGGER:VALUE_TYPES.DURATION,TZOFFSETFROM:VALUE_TYPES.UTCOFFSET,TZOFFSETTO:VALUE_TYPES.UTCOFFSET,TZURL:VALUE_TYPES.URI,URL:VALUE_TYPES.URI,VERSION:VALUE_TYPES.FLOAT+'__FIXED_1'};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Property=function(a){function b(){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return inherits(b,a),createClass(b,[{key:'getTransformedValue',value:function getTransformedValue(){var a=this,b=VALUE_TYPES[this.parameters.get(PARAMETER_VALUE_KEY)]||DEFAULT_VALUE_TYPES[this.name]||DEFAULT_VALUE_TYPE,c=transformers[b];return isFunction(c)?Array.isArray(this.value)?this.value.map(function(b){return c(b,a.parameters)}).join(VALUE_SEPARATOR):c(this.value,this.parameters):this.value}},{key:'toString',value:function toString(){var a=this.name;0<this.parameters.size&&(a+=PARAMETER_SEPARATOR+this.parameters.entrySeq().map(function(a){var b=slicedToArray(a,2),c=b[0],d=b[1];return c+PARAMETER_KV_SEPARATOR+d}).join(PARAMETER_SEPARATOR));var b=this.transform?this.getTransformedValue():this.value;return isNull(b)||isUndefined(b)||(a+=PROPERTY_KV_SEPARATOR+b),a.match(FOLD_REGEX).join(FOLD_SEPARATOR)}}]),b}(typedImmutable.Record({name:String,parameters:typedImmutable.Map(String,typedImmutable.Any),transform:!0,value:typedImmutable.Any}));

typedImmutable.Typed.Component=typedImmutable.Typed('Component',function(a){return a instanceof Component?a:TypeError('"'+a+'" is not a Component')}),typedImmutable.Typed.Property=typedImmutable.Typed('Property',function(a){return a instanceof Property?a:TypeError('"'+a+'" is not a Property')});var Component=function(a){function b(){return classCallCheck(this,b),possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return inherits(b,a),createClass(b,[{key:'pushComponent',value:function pushComponent(a){return this.update('components',function(b){return b.push(a)})}},{key:'pushProperty',value:function pushProperty(a){return this.update('properties',function(b){return b.push(a)})}},{key:'clear',value:function clear(){return this.clearComponents().clearProperties()}},{key:'clearComponents',value:function clearComponents(){return this.remove('components')}},{key:'clearProperties',value:function clearProperties(){return this.remove('properties')}},{key:'toString',value:function toString(){return[new Property({name:PREFIX,value:this.name})].concat(toConsumableArray(this.properties),toConsumableArray(this.components),[new Property({name:SUFFIX,value:this.name})]).join(LINE_SEPARATOR)}}]),b}(typedImmutable.Record({name:String,components:typedImmutable.List(typedImmutable.Typed.Component),properties:typedImmutable.List(typedImmutable.Typed.Property)}));

exports.Component = Component;
exports.Property = Property;
//# sourceMappingURL=immutable-ics.cjs.js.map
