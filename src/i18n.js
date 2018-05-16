/**
 *
 *<script type="text/javascript">
 *    I18n = {}
 *    I18n.options = {locale: "en"};
 *</script>
 *
 * load this file: i18n.js
 * load translate js
 *
 *<script type="text/javascript">
 *    I18n.T("hello", {name: "you"})
 *    //"你好, you "
 *    I18n.T("helloObj.test")
 *    //"just a example"
 *</script>
 *
 * Created by ganl on 2017/2/13 0013.
 */

;(function (factory) {
    this.I18n = factory(this);
}(function (global) {
    var I18n = global && global.I18n || {}

    var isString = function (val) {
        return typeof value == 'string' || Object.prototype.toString.call(val) === '[object String]';
    };

    var isNumber = function (val) {
        return typeof val == 'number' || Object.prototype.toString.call(val) === '[object Number]';
    };

    var isBoolean = function (val) {
        return val === true || val === false;
    };

// Is a given variable an object?
// Borrowed from Underscore.js
    var isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

// Is a given value an array?
// Borrowed from Underscore.js
    var isArray = function (val) {
        if (Array.isArray) {
            return Array.isArray(val);
        }
        ;
        return Object.prototype.toString.call(val) === '[object Array]';
    };

    var merge = function (dest, src) {
        var key, value;
        for (key in src) {
            if (src.hasOwnProperty(key)) {
                value = src[key];
                if (isString(value) || isNumber(value) || isBoolean(value)) {
                    dest[key] = value;
                } else {
                    if (dest[key] == null) dest[key] = {};
                    merge(dest[key], value);
                }
            }
        }
        return dest;
    }

//extend(dest,src1,src2,src3...);
    I18n.extend = function () {
        var length = arguments.length,
            target = arguments[0] || {};

        for (var i = 1; i < length; i++) {
            if (arguments[i] == null) {
                continue;
            }
            merge(target, arguments[i])
        }
        return target;
    };

    I18n.locales = {};
    I18n.translations = {};

    var defaults = {
        defaultLocale: "en",
        locale: "zh-CN",
        defaultSeparator: "."
    }

    I18n.locales.get = function (locale) {
        var result = this[locale] || this[I18n.locale];
        if (typeof result === 'function') {
            result = result(locale);
        }
        if (isArray(result) == false) {
            result = [result];
        }
        return result;
    }

    I18n.currentLocale = function () {
        return this.locale || this.defaultLocale;
    };

    I18n.init = function () {
        var options;
        if (typeof(this.options) === 'undefined')
            options = defaults;
        else {
            options = I18n.extend({}, defaults, this.options);
        }

        if (typeof(this.defaultLocale) === 'undefined')
            this.defaultLocale = options.defaultLocale;

        if (typeof(this.locale) === 'undefined')
            this.locale = options.locale;

        if (typeof(this.defaultSeparator) === 'undefined')
            this.defaultSeparator = options.defaultSeparator;
    }

    I18n.translate = function (scope, params) {
        // var locales = this.locales.get(this.locale).slice();
        var translations,
            scopes;

        var paramsObj = {};
        if (params) paramsObj = params;

        translations = this.translations[this.locale];
        if (!translations) {
            return '';
        }

        scopes = (scope || '').split(this.defaultSeparator);

        while (scopes.length) {
            translations = translations[scopes.shift()];
            if (translations === undefined || translations === null) {
                translations = scope;
                break;
            }
        }

        // replace value
        var regExp = new RegExp();
        for (var k in paramsObj) {
            regExp = eval("/{{:" + k + "}}/g");
            translations = translations.replace(regExp, paramsObj[k]);
        }

        // not exist replace with "No Value"
        if (/{{:[a-zA-Z]+}}/.test(translations)) {
            translations = translations.replace(/{{:[a-zA-Z]+}}/g, "No Value");
        }

        if (translations !== undefined && translations !== null) {
            return translations;
        }
    }

    I18n.init(I18n.options);

    I18n.T = I18n.translate;

    return I18n;
}));
