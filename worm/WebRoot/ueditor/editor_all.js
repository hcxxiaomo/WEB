(function(){UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};

var baidu = window.baidu || {};

window.baidu = baidu;

window.UE = baidu.editor =  {};

UE.plugins = {};

UE.commands = {};

UE.instants = {};

UE.I18N = {};

UE.version = "1.2.4.0";

var dom = UE.dom = {};
/**
 * @file
 * @name UE.browser
 * @short Browser
 * @desc UEditorä¸­é‡‡ç”¨çš„æµ�è§ˆå™¨åˆ¤æ–­æ¨¡å�—
 */
var browser = UE.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸ºIE
         * @name ie
         * @grammar UE.browser.ie  => true|false
         */
        ie		: !!window.ActiveXObject,

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸ºOpera
         * @name opera
         * @grammar UE.browser.opera  => true|false
         */
        opera	: ( !!opera && opera.version ),

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸ºwebkitå†…æ ¸
         * @name webkit
         * @grammar UE.browser.webkit  => true|false
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸ºmacç³»ç»Ÿä¸‹çš„æµ�è§ˆå™¨
         * @name mac
         * @grammar UE.browser.mac  => true|false
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦å¤„äºŽæ€ªå¼‚æ¨¡å¼�
         * @name quirks
         * @grammar UE.browser.quirks  => true|false
         */
        quirks : ( document.compatMode == 'BackCompat' )
    };
    /**
     * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦å¤„ä¸ºgeckoå†…æ ¸
     * @name gecko
     * @grammar UE.browser.gecko  => true|false
     */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera );

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){
        version = parseFloat( agent.match( /msie (\d+)/ )[1] );
        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸º IE9 æ¨¡å¼�
         * @name ie9Compat
         * @grammar UE.browser.ie9Compat  => true|false
         */
        browser.ie9Compat = document.documentMode == 9;
        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸º IE8 æµ�è§ˆå™¨
         * @name ie8
         * @grammar     UE.browser.ie8  => true|false
         */
        browser.ie8 = !!document.documentMode;

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸º IE8 æ¨¡å¼�
         * @name ie8Compat
         * @grammar     UE.browser.ie8Compat  => true|false
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦è¿�è¡Œåœ¨ å…¼å®¹IE7æ¨¡å¼�
         * @name ie7Compat
         * @grammar     UE.browser.ie7Compat  => true|false
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦IE6æ¨¡å¼�æˆ–æ€ªå¼‚æ¨¡å¼�
         * @name ie6Compat
         * @grammar     UE.browser.ie6Compat  => true|false
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

    }

    // Gecko.
    if ( browser.gecko ){
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }
    /**
     * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸ºchrome
     * @name chrome
     * @grammar     UE.browser.chrome  => true|false
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }
    /**
     * æ£€æµ‹æµ�è§ˆå™¨æ˜¯å�¦ä¸ºsafari
     * @name safari
     * @grammar     UE.browser.safari  => true|false
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * æµ�è§ˆå™¨ç‰ˆæœ¬åˆ¤æ–­
     * IEç³»åˆ—è¿”å›žå€¼ä¸º5,6,7,8,9,10ç­‰
     * geckoç³»åˆ—ä¼šè¿”å›ž10900ï¼Œ158900ç­‰.
     * webkitç³»åˆ—ä¼šè¿”å›žå…¶buildå�· (å¦‚ 522ç­‰).
     * @name version
     * @grammar     UE.browser.version  => number
     * @example
     * if ( UE.browser.ie && UE.browser.version == 6 ){
     *     alert( "Ouch!å±…ç„¶æ˜¯ä¸‡æ�¶çš„IE6!" );
     * }
     */
    browser.version = version;

    /**
     * æ˜¯å�¦æ˜¯å…¼å®¹æ¨¡å¼�çš„æµ�è§ˆå™¨
     * @name isCompatible
     * @grammar  UE.browser.isCompatible  => true|false
     * @example
     * if ( UE.browser.isCompatible ){
     *     alert( "ä½ çš„æµ�è§ˆå™¨ç›¸å½“ä¸�é”™å“¦ï¼�" );
     * }
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
//å¿«æ�·æ–¹å¼�
var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;
/**
 * @file
 * @name UE.Utils
 * @short Utils
 * @desc UEditorå°�è£…ä½¿ç”¨çš„é�™æ€�å·¥å…·å‡½æ•°
 * @import editor.js
 */
var utils = UE.utils = {
    /**
     * é��åŽ†æ•°ç»„ï¼Œå¯¹è±¡ï¼ŒnodeList
     * @name each
     * @grammar UE.utils.each(obj,iterator,[context])
     * @since 1.2.4+
     * @desc
     * * obj è¦�é��åŽ†çš„å¯¹è±¡
     * * iterator é��åŽ†çš„æ–¹æ³•,æ–¹æ³•çš„ç¬¬ä¸€ä¸ªæ˜¯é��åŽ†çš„å€¼ï¼Œç¬¬äºŒä¸ªæ˜¯ç´¢å¼•ï¼Œç¬¬ä¸‰ä¸ªæ˜¯obj
     * * context  iteratorçš„ä¸Šä¸‹æ–‡
     * @example
     * UE.utils.each([1,2],function(v,i){
     *     console.log(v)//å€¼
     *     console.log(i)//ç´¢å¼•
     * })
     * UE.utils.each(document.getElementsByTagName('*'),function(n){
     *     console.log(n.tagName)
     * })
     */
    each : function(obj, iterator, context) {
        if (obj == null) return;
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if(iterator.call(context, obj[i], i, obj) === false)return;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if(iterator.call(context, obj[key], key, obj) === false)return
                }
            }
        }
    },

    makeInstance:function (obj) {
        var noop = new Function();
        noop.prototype = obj;
        obj = new noop;
        noop.prototype = null;
        return obj;
    },
    /**
     * å°†sourceå¯¹è±¡ä¸­çš„å±žæ€§æ‰©å±•åˆ°targetå¯¹è±¡ä¸Š
     * @name extend
     * @grammar UE.utils.extend(target,source)  => Object  //è¦†ç›–æ‰©å±•
     * @grammar UE.utils.extend(target,source,true)  ==> Object  //ä¿�ç•™æ‰©å±•
     */
    extend:function (t, s, b) {
        if (s) {
            for (var k in s) {
                if (!b || !t.hasOwnProperty(k)) {
                    t[k] = s[k];
                }
            }
        }
        return t;
    },

    /**
     * æ¨¡æ‹Ÿç»§æ‰¿æœºåˆ¶ï¼ŒsubClassç»§æ‰¿superClass
     * @name inherits
     * @grammar UE.utils.inherits(subClass,superClass) => subClass
     * @example
     * function SuperClass(){
     *     this.name = "å°�æ�Ž";
     * }
     * SuperClass.prototype = {
     *     hello:function(str){
     *         console.log(this.name + str);
     *     }
     * }
     * function SubClass(){
     *     this.name = "å°�å¼ ";
     * }
     * UE.utils.inherits(SubClass,SuperClass);
     * var sub = new SubClass();
     * sub.hello("æ—©ä¸Šå¥½!"); ==> "å°�å¼ æ—©ä¸Šå¥½ï¼�"
     */
    inherits:function (subClass, superClass) {
        var oldP = subClass.prototype,
            newP = utils.makeInstance(superClass.prototype);
        utils.extend(newP, oldP, true);
        subClass.prototype = newP;
        return (newP.constructor = subClass);
    },

    /**
     * ç”¨æŒ‡å®šçš„contextä½œä¸ºfnä¸Šä¸‹æ–‡ï¼Œä¹Ÿå°±æ˜¯this
     * @name bind
     * @grammar UE.utils.bind(fn,context)  =>  fn
     */
    bind:function (fn, context) {
        return function () {
            return fn.apply(context, arguments);
        };
    },

    /**
     * åˆ›å»ºå»¶è¿Ÿdelayæ‰§è¡Œçš„å‡½æ•°fn
     * @name defer
     * @grammar UE.utils.defer(fn,delay)  =>fn   //å»¶è¿Ÿdelayæ¯«ç§’æ‰§è¡Œfnï¼Œè¿”å›žfn
     * @grammar UE.utils.defer(fn,delay,exclusion)  =>fn   //å»¶è¿Ÿdelayæ¯«ç§’æ‰§è¡Œfnï¼Œè‹¥exclusionä¸ºçœŸï¼Œåˆ™äº’æ–¥æ‰§è¡Œfn
     * @example
     * function test(){
     *     console.log("å»¶è¿Ÿè¾“å‡ºï¼�");
     * }
     * //é�žäº’æ–¥å»¶è¿Ÿæ‰§è¡Œ
     * var testDefer = UE.utils.defer(test,1000);
     * testDefer();   =>  "å»¶è¿Ÿè¾“å‡ºï¼�";
     * testDefer();   =>  "å»¶è¿Ÿè¾“å‡ºï¼�";
     * //äº’æ–¥å»¶è¿Ÿæ‰§è¡Œ
     * var testDefer1 = UE.utils.defer(test,1000,true);
     * testDefer1();   =>  //æœ¬æ¬¡ä¸�æ‰§è¡Œ
     * testDefer1();   =>  "å»¶è¿Ÿè¾“å‡ºï¼�";
     */
    defer:function (fn, delay, exclusion) {
        var timerID;
        return function () {
            if (exclusion) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(fn, delay);
        };
    },

    /**
     * æŸ¥æ‰¾å…ƒç´ itemåœ¨æ•°ç»„arrayä¸­çš„ç´¢å¼•, è‹¥æ‰¾ä¸�åˆ°è¿”å›ž-1
     * @name indexOf
     * @grammar UE.utils.indexOf(array,item)  => index|-1  //é»˜è®¤ä»Žæ•°ç»„å¼€å¤´éƒ¨å¼€å§‹æ�œç´¢
     * @grammar UE.utils.indexOf(array,item,start)  => index|-1  //startæŒ‡å®šå¼€å§‹æŸ¥æ‰¾çš„ä½�ç½®
     */
    indexOf:function (array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array,function(v,i){
            if(i >= start && v === item){
                index = i;
                return false;
            }
        });
        return index;
    },

    /**
     * ç§»é™¤æ•°ç»„arrayä¸­çš„å…ƒç´ item
     * @name removeItem
     * @grammar UE.utils.removeItem(array,item)
     */
    removeItem:function (array, item) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
                i--;
            }
        }
    },

    /**
     * åˆ é™¤å­—ç¬¦ä¸²strçš„é¦–å°¾ç©ºæ ¼
     * @name trim
     * @grammar UE.utils.trim(str) => String
     */
    trim:function (str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },

    /**
     * å°†å­—ç¬¦ä¸²list(ä»¥','åˆ†éš”)æˆ–è€…æ•°ç»„listè½¬æˆ�å“ˆå¸Œå¯¹è±¡
     * @name listToMap
     * @grammar UE.utils.listToMap(list)  => Object  //Objectå½¢å¦‚{test:1,br:1,textarea:1}
     */
    listToMap:function (list) {
        if (!list)return {};
        list = utils.isArray(list) ? list : list.split(',');
        for (var i = 0, ci, obj = {}; ci = list[i++];) {
            obj[ci.toUpperCase()] = obj[ci] = 1;
        }
        return obj;
    },

    /**
     * å°†strä¸­çš„htmlç¬¦å�·è½¬ä¹‰,é»˜è®¤å°†è½¬ä¹‰''&<">''å››ä¸ªå­—ç¬¦ï¼Œå�¯è‡ªå®šä¹‰regæ�¥ç¡®å®šéœ€è¦�è½¬ä¹‰çš„å­—ç¬¦
     * @name unhtml
     * @grammar UE.utils.unhtml(str);  => String
     * @grammar UE.utils.unhtml(str,reg)  => String
     * @example
     * var html = '<body>You say:"ä½ å¥½ï¼�Baidu & UEditor!"</body>';
     * UE.utils.unhtml(html);   ==>  &lt;body&gt;You say:&quot;ä½ å¥½ï¼�Baidu &amp; UEditor!&quot;&lt;/body&gt;
     * UE.utils.unhtml(html,/[<>]/g)  ==>  &lt;body&gt;You say:"ä½ å¥½ï¼�Baidu & UEditor!"&lt;/body&gt;
     */
    unhtml:function (str, reg) {
        return str ? str.replace(reg || /[&<">]/g, function (m) {
            return {
                '<':'&lt;',
                '&':'&amp;',
                '"':'&quot;',
                '>':'&gt;'
            }[m]
        }) : '';
    },
    /**
     * å°†strä¸­çš„è½¬ä¹‰å­—ç¬¦è¿˜åŽŸæˆ�htmlå­—ç¬¦
     * @name html
     * @grammar UE.utils.html(str)  => String   //è¯¦ç»†å�‚è§�<code><a href = '#unhtml'>unhtml</a></code>
     */
    html:function (str) {
        return str ? str.replace(/&((g|l|quo)t|amp);/g, function (m) {
            return {
                '&lt;':'<',
                '&amp;':'&',
                '&quot;':'"',
                '&gt;':'>'
            }[m]
        }) : '';
    },
    /**
     * å°†cssæ ·å¼�è½¬æ�¢ä¸ºé©¼å³°çš„å½¢å¼�ã€‚å¦‚font-size => fontSize
     * @name cssStyleToDomStyle
     * @grammar UE.utils.cssStyleToDomStyle(cssName)  => String
     */
    cssStyleToDomStyle:function () {
        var test = document.createElement('div').style,
            cache = {
                'float':test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat' : 'float'
            };

        return function (cssName) {
            return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function (match) {
                return match.charAt(1).toUpperCase();
            }));
        };
    }(),
    /**
     * åŠ¨æ€�åŠ è½½æ–‡ä»¶åˆ°docä¸­ï¼Œå¹¶ä¾�æ�®objæ�¥è®¾ç½®å±žæ€§ï¼ŒåŠ è½½æˆ�åŠŸå�Žæ‰§è¡Œå›žè°ƒå‡½æ•°fn
     * @name loadFile
     * @grammar UE.utils.loadFile(doc,obj)
     * @grammar UE.utils.loadFile(doc,obj,fn)
     * @example
     * //æŒ‡å®šåŠ è½½åˆ°å½“å‰�documentä¸­ä¸€ä¸ªscriptæ–‡ä»¶ï¼ŒåŠ è½½æˆ�åŠŸå�Žæ‰§è¡Œfunction
     * utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * }, function () {
     *     console.log('åŠ è½½æˆ�åŠŸï¼�')
     * });
     */
    loadFile:function () {
        var tmpList = [];
        function getItem(doc,obj){
            for(var i= 0,ci;ci=tmpList[i++];){
                try{
                    if(ci.doc === doc && ci.url == (obj.src || obj.href)){
                        return ci;
                    }
                }catch(e){
                    //åœ¨ie9ä¸‹ï¼Œå¦‚æžœdocä¸�æ˜¯ä¸€ä¸ªé¡µé�¢çš„ï¼Œä¼šå¯¼è‡´æ‹’ç»�è®¿é—®çš„é”™è¯¯
                    continue
                }

            }
        }
        return function (doc, obj, fn) {

            var item = getItem(doc,obj);
            if (item) {
                if(item.ready){
                    fn && fn();
                }else{
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc:doc,
                url:obj.src||obj.href,
                funs:[fn]
            });
            if (!doc.body) {
                var html = [];
                for(var p in obj){
                    if(p == 'tag')continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></'+obj.tag+'>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function () {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc,obj)
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    /**
     * åˆ¤æ–­objå¯¹è±¡æ˜¯å�¦ä¸ºç©º
     * @name isEmptyObject
     * @grammar UE.utils.isEmptyObject(obj)  => true|false
     * @example
     * UE.utils.isEmptyObject({}) ==>true
     * UE.utils.isEmptyObject([]) ==>true
     * UE.utils.isEmptyObject("") ==>true
     */
    isEmptyObject:function (obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj) if (obj.hasOwnProperty(key)) return false;
        return true;
    },

    /**
     * ç»Ÿä¸€å°†é¢œè‰²å€¼ä½¿ç”¨16è¿›åˆ¶å½¢å¼�è¡¨ç¤º
     * @name fixColor
     * @grammar UE.utils.fixColor(name,value) => value
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    fixColor:function (name, value) {
        if (/color/i.test(name) && /rgba?/.test(value)) {
            var array = value.split(",");
            if (array.length > 3)
                return "";
            value = "#";
            for (var i = 0, color; color = array[i++];) {
                color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                value += color.length == 1 ? "0" + color : color;
            }
            value = value.toUpperCase();
        }
        return  value;
    },
    /**
     * å�ªé’ˆå¯¹border,padding,marginå�šäº†å¤„ç�†ï¼Œå› ä¸ºæ€§èƒ½é—®é¢˜
     * @public
     * @function
     * @param {String}    val styleå­—ç¬¦ä¸²
     */
    optCss:function (val) {
        var padding, margin, border;
        val = val.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function (str, key, name, val) {
            if (val.split(' ').length == 1) {
                switch (key) {
                    case 'padding':
                        !padding && (padding = {});
                        padding[name] = val;
                        return '';
                    case 'margin':
                        !margin && (margin = {});
                        margin[name] = val;
                        return '';
                    case 'border':
                        return val == 'initial' ? '' : str;
                }
            }
            return str;
        });

        function opt(obj, name) {
            if (!obj) {
                return '';
            }
            var t = obj.top , b = obj.bottom, l = obj.left, r = obj.right, val = '';
            if (!t || !l || !b || !r) {
                for (var p in obj) {
                    val += ';' + name + '-' + p + ':' + obj[p] + ';';
                }
            } else {
                val += ';' + name + ':' +
                    (t == b && b == l && l == r ? t :
                        t == b && l == r ? (t + ' ' + l) :
                            l == r ? (t + ' ' + l + ' ' + b) : (t + ' ' + r + ' ' + b + ' ' + l)) + ';'
            }
            return val;
        }

        val += opt(padding, 'padding') + opt(margin, 'margin');
        return val.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, '').replace(/;([ \n\r\t]+)|\1;/g, ';')
            .replace(/(&((l|g)t|quot|#39))?;{2,}/g, function (a, b) {
                return b ? b + ";;" : ';'
            });
    },
    /**
     * æ·±åº¦å…‹éš†å¯¹è±¡ï¼Œä»Žsourceåˆ°target
     * @name clone
     * @grammar UE.utils.clone(source) => anthorObj æ–°çš„å¯¹è±¡æ˜¯å®Œæ•´çš„sourceçš„å‰¯æœ¬
     * @grammar UE.utils.clone(source,target) => targetåŒ…å�«äº†sourceçš„æ‰€æœ‰å†…å®¹ï¼Œé‡�å��ä¼šè¦†ç›–
     */
    clone:function (source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    /**
     * è½¬æ�¢cm/ptåˆ°px
     * @name transUnitToPx
     * @grammar UE.utils.transUnitToPx('20pt') => '27px'
     * @grammar UE.utils.transUnitToPx('0pt') => '0'
     */
    transUnitToPx : function(val){
        if(!/(pt|cm)/.test(val)){
            return val
        }
        var unit;
        val.replace(/([\d.]+)(\w+)/,function(str,v,u){
            val = v;
            unit = u;
        });
        switch(unit){
            case 'cm':
                val = parseFloat(val) * 25;
                break;
            case 'pt':
                val = Math.round(parseFloat(val) * 96 / 72);
        }
        return val + (val?'px':'');
    },
    /**
     * DomReadyæ–¹æ³•ï¼Œå›žè°ƒå‡½æ•°å°†åœ¨domæ ‘readyå®Œæˆ�å�Žæ‰§è¡Œ
     * @name domReady
     * @grammar UE.utils.domReady(fn)  => fn  //è¿”å›žä¸€ä¸ªå»¶è¿Ÿæ‰§è¡Œçš„æ–¹æ³•
     */
    domReady:function () {

        var fnArr = [];

        function doReady(doc) {
            //ç¡®ä¿�onreadyå�ªæ‰§è¡Œä¸€æ¬¡
            doc.isReady = true;
            for (var ci; ci = fnArr.pop();ci()){}
        }

        return function (onready,win) {
            win = win || window;
            var doc = win.document;
            onready && fnArr.push(onready);
            if (doc.readyState === "complete") {
                doReady(doc);
            }else{
                doc.isReady && doReady(doc);
                if (browser.ie) {
                    (function () {
                        if (doc.isReady) return;
                        try {
                            doc.documentElement.doScroll("left");
                        } catch (error) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        doReady(doc);
                    })();
                    win.attachEvent('onload', function(){
                        doReady(doc)
                    });
                } else {
                    doc.addEventListener("DOMContentLoaded", function () {
                        doc.removeEventListener("DOMContentLoaded", arguments.callee, false);
                        doReady(doc);
                    }, false);
                    win.addEventListener('load', function(){doReady(doc)}, false);
                }
            }

        }
    }(),
    /**
     * åŠ¨æ€�æ·»åŠ cssæ ·å¼�
     * @name cssRule
     * @grammar UE.utils.cssRule('æ·»åŠ çš„æ ·å¼�çš„èŠ‚ç‚¹å��ç§°',['æ ·å¼�'ï¼Œ'æ”¾åˆ°å“ªä¸ªdocumentä¸Š'])
     * @grammar UE.utils.cssRule('body','body{background:#ccc}') => null  //ç»™bodyæ·»åŠ èƒŒæ™¯é¢œè‰²
     * @grammar UE.utils.cssRule('body') =>æ ·å¼�çš„å­—ç¬¦ä¸²  //å�–å¾—keyå€¼ä¸ºbodyçš„æ ·å¼�çš„å†…å®¹,å¦‚æžœæ²¡æœ‰æ‰¾åˆ°keyå€¼å…ˆå…³çš„æ ·å¼�å°†è¿”å›žç©ºï¼Œä¾‹å¦‚åˆšæ‰�é‚£ä¸ªèƒŒæ™¯é¢œè‰²ï¼Œå°†è¿”å›ž body{background:#ccc}
     * @grammar UE.utils.cssRule('body','') =>null //æ¸…ç©ºç»™å®šçš„keyå€¼çš„èƒŒæ™¯é¢œè‰²
     */
    cssRule : browser.ie ? function(key,style,doc){
            var indexList,index;
            doc = doc || document;
            if(doc.indexList){
                indexList = doc.indexList;
            }else{
                indexList = doc.indexList =  {};
            }
            var sheetStyle;
            if(!indexList[key]){
                if(style === undefined){
                    return ''
                }
                sheetStyle = doc.createStyleSheet('',index = doc.styleSheets.length);
                indexList[key] = index;
            }else{
                sheetStyle = doc.styleSheets[indexList[key]];
            }
            if(style === undefined){
                return sheetStyle.cssText
            }
            sheetStyle.cssText = style || ''
        }:function(key,style,doc){
            doc = doc || document;
            var head = doc.getElementsByTagName('head')[0],node;
            if(!(node = doc.getElementById(key))){
                if(style === undefined){
                    return ''
                }
                node = doc.createElement('style');
                node.id = key;
                head.appendChild(node)
            }
            if(style === undefined){
                return node.innerHTML
            }
            if(style !== ''){
                node.innerHTML = style;
            }else{
                head.removeChild(node)
            }
        }

};
/**
 * åˆ¤æ–­stræ˜¯å�¦ä¸ºå­—ç¬¦ä¸²
 * @name isString
 * @grammar UE.utils.isString(str) => true|false
 */
/**
 * åˆ¤æ–­arrayæ˜¯å�¦ä¸ºæ•°ç»„
 * @name isArray
 * @grammar UE.utils.isArray(obj) => true|false
 */
/**
 * åˆ¤æ–­objå¯¹è±¡æ˜¯å�¦ä¸ºæ–¹æ³•
 * @name isFunction
 * @grammar UE.utils.isFunction(obj)  => true|false
 */
/**
 * åˆ¤æ–­objå¯¹è±¡æ˜¯å�¦ä¸ºæ•°å­—
 * @name isNumber
 * @grammar UE.utils.isNumber(obj)  => true|false
 */

utils.each(['String','Function','Array','Number'],function(v){
    UE.utils['is' + v] = function(obj){
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
/**
 * @file
 * @name UE.EventBase
 * @short EventBase
 * @import editor.js,core/utils.js
 * @desc UEé‡‡ç”¨çš„äº‹ä»¶åŸºç±»ï¼Œç»§æ‰¿æ­¤ç±»çš„å¯¹åº”ç±»å°†èŽ·å�–addListener,removeListener,fireEventæ–¹æ³•ã€‚
 * åœ¨UEä¸­ï¼ŒEditorä»¥å�Šæ‰€æœ‰uiå®žä¾‹éƒ½ç»§æ‰¿äº†è¯¥ç±»ï¼Œæ•…å�¯ä»¥åœ¨å¯¹åº”çš„uiå¯¹è±¡ä»¥å�Šeditorå¯¹è±¡ä¸Šä½¿ç”¨ä¸Šè¿°æ–¹æ³•ã€‚
 */
var EventBase = UE.EventBase = function () {};

EventBase.prototype = {
    /**
     * æ³¨å†Œäº‹ä»¶ç›‘å�¬å™¨
     * @name addListener
     * @grammar editor.addListener(types,fn)  //typesä¸ºäº‹ä»¶å��ç§°ï¼Œå¤šä¸ªå�¯ç”¨ç©ºæ ¼åˆ†éš”
     * @example
     * editor.addListener('selectionchange',function(){
     *      console.log("é€‰åŒºå·²ç»�å�˜åŒ–ï¼�");
     * })
     * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // thisæ˜¯æ³¨å†Œçš„äº‹ä»¶çš„ç¼–è¾‘å™¨å®žä¾‹
     * })
     */
    addListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            getListener(this, ti, true).push(listener);
        }
    },
    /**
     * ç§»é™¤äº‹ä»¶ç›‘å�¬å™¨
     * @name removeListener
     * @grammar editor.removeListener(types,fn)  //typesä¸ºäº‹ä»¶å��ç§°ï¼Œå¤šä¸ªå�¯ç”¨ç©ºæ ¼åˆ†éš”
     * @example
     * //changeCallbackä¸ºæ–¹æ³•ä½“
     * editor.removeListener("selectionchange",changeCallback);
     */
    removeListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            utils.removeItem(getListener(this, ti) || [], listener);
        }
    },
    /**
     * è§¦å�‘äº‹ä»¶
     * @name fireEvent
     * @grammar editor.fireEvent(types)  //typesä¸ºäº‹ä»¶å��ç§°ï¼Œå¤šä¸ªå�¯ç”¨ç©ºæ ¼åˆ†éš”
     * @example
     * editor.fireEvent("selectionchange");
     */
    fireEvent:function (types) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            var listeners = getListener(this, ti),
                r, t, k;
            if (listeners) {
                k = listeners.length;
                while (k--) {
                    t = listeners[k].apply(this, arguments);
                    if (t !== undefined) {
                        r = t;
                    }
                }
            }
            if (t = this['on' + ti.toLowerCase()]) {
                r = t.apply(this, arguments);
            }
        }
        return r;
    }
};
/**
 * èŽ·å¾—å¯¹è±¡æ‰€æ‹¥æœ‰ç›‘å�¬ç±»åž‹çš„æ‰€æœ‰ç›‘å�¬å™¨
 * @public
 * @function
 * @param {Object} obj  æŸ¥è¯¢ç›‘å�¬å™¨çš„å¯¹è±¡
 * @param {String} type äº‹ä»¶ç±»åž‹
 * @param {Boolean} force  ä¸ºtrueä¸”å½“å‰�æ‰€æœ‰typeç±»åž‹çš„ä¾¦å�¬å™¨ä¸�å­˜åœ¨æ—¶ï¼Œåˆ›å»ºä¸€ä¸ªç©ºç›‘å�¬å™¨æ•°ç»„
 * @returns {Array} ç›‘å�¬å™¨æ•°ç»„
 */
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}


///import editor.js
///import core/dom/dom.js
/**
 * dtd htmlè¯­ä¹‰åŒ–çš„ä½“çŽ°ç±»
 * @constructor
 * @namespace dtd
 */
var dtd = dom.dtd = (function() {
    function _( s ) {
        for (var k in s) {
            s[k.toUpperCase()] = s[k];
        }
        return s;
    }
    function X( t ) {
        var a = arguments;
        for ( var i=1; i<a.length; i++ ) {
            var x = a[i];
            for ( var k in x ) {
                if (!t.hasOwnProperty(k)) {
                    t[k] = x[k];
                }
            }
        }
        return t;
    }
    var A = _({isindex:1,fieldset:1}),
        B = _({input:1,button:1,select:1,textarea:1,label:1}),
        C = X( _({a:1}), B ),
        D = X( {iframe:1}, C ),
        E = _({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),
        F = _({ins:1,del:1,script:1,style:1}),
        G = X( _({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}), F ),
        H = X( _({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}), G ),
        I = X( _({p:1}), H ),
        J = X( _({iframe:1}), H, B ),
        K = _({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),

        L = X( _({a:0}), J ),//aä¸�èƒ½è¢«åˆ‡å¼€ï¼Œæ‰€ä»¥æŠŠä»–
        M = _({tr:1}),
        N = _({'#':1}),
        O = X( _({param:1}), K ),
        P = X( _({form:1}), A, D, E, I ),
        Q = _({li:1}),
        R = _({style:1,script:1}),
        S = _({base:1,link:1,meta:1,title:1}),
        T = X( S, R ),
        U = _({head:1,body:1}),
        V = _({html:1});

    var block = _({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),
        //é’ˆå¯¹ä¼˜é…·çš„embedä»–æ·»åŠ äº†ç»“æ�Ÿæ ‡è¯†ï¼Œå¯¼è‡´ç²˜è´´è¿›æ�¥ä¼šå�˜æˆ�ä¸¤ä¸ªï¼Œæš‚æ—¶åŽ»æŽ‰ ,embed:1
        empty =  _({area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1,embed:1});

    return  _({

        // $ è¡¨ç¤ºè‡ªå®šçš„å±žæ€§

        // bodyå¤–çš„å…ƒç´ åˆ—è¡¨.
        $nonBodyContent: X( V, U, S ),

        //å�—ç»“æž„å…ƒç´ åˆ—è¡¨
        $block : block,

        //å†…è�”å…ƒç´ åˆ—è¡¨
        $inline : L,

        $body : X( _({script:1,style:1}), block ),

        $cdata : _({script:1,style:1}),

        //è‡ªé—­å’Œå…ƒç´ 
        $empty : empty,

        //ä¸�æ˜¯è‡ªé—­å�ˆï¼Œä½†ä¸�èƒ½è®©rangeé€‰ä¸­é‡Œè¾¹
        $nonChild : _({iframe:1,textarea:1}),
        //åˆ—è¡¨å…ƒç´ åˆ—è¡¨
        $listItem : _({dd:1,dt:1,li:1}),

        //åˆ—è¡¨æ ¹å…ƒç´ åˆ—è¡¨
        $list: _({ul:1,ol:1,dl:1}),

        //ä¸�èƒ½è®¤ä¸ºæ˜¯ç©ºçš„å…ƒç´ 
        $isNotEmpty : _({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}),

        //å¦‚æžœæ²¡æœ‰å­�èŠ‚ç‚¹å°±å�¯ä»¥åˆ é™¤çš„å…ƒç´ åˆ—è¡¨ï¼Œåƒ�span,a
        $removeEmpty : _({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),

        $removeEmptyBlock : _({'p':1,'div':1}),

        //åœ¨tableå…ƒç´ é‡Œçš„å…ƒç´ åˆ—è¡¨
        $tableContent : _({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),
        //ä¸�è½¬æ�¢çš„æ ‡ç­¾
        $notTransContent : _({pre:1,script:1,style:1,textarea:1}),
        html: U,
        head: T,
        style: N,
        script: N,
        body: P,
        base: {},
        link: {},
        meta: {},
        title: N,
        col : {},
        tr : _({td:1,th:1}),
        img : {},
        embed: {},
        colgroup : _({thead:1,col:1,tbody:1,tr:1,tfoot:1}),
        noscript : P,
        td : P,
        br : {},
        th : P,
        center : P,
        kbd : L,
        button : X( I, E ),
        basefont : {},
        h5 : L,
        h4 : L,
        samp : L,
        h6 : L,
        ol : Q,
        h1 : L,
        h3 : L,
        option : N,
        h2 : L,
        form : X( A, D, E, I ),
        select : _({optgroup:1,option:1}),
        font : L,
        ins : L,
        menu : Q,
        abbr : L,
        label : L,
        table : _({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),
        code : L,
        tfoot : M,
        cite : L,
        li : P,
        input : {},
        iframe : P,
        strong : L,
        textarea : N,
        noframes : P,
        big : L,
        small : L,
        span :_({'#':1,br:1}),
        hr : L,
        dt : L,
        sub : L,
        optgroup : _({option:1}),
        param : {},
        bdo : L,
        'var' : L,
        div : P,
        object : O,
        sup : L,
        dd : P,
        strike : L,
        area : {},
        dir : Q,
        map : X( _({area:1,form:1,p:1}), A, F, E ),
        applet : O,
        dl : _({dt:1,dd:1}),
        del : L,
        isindex : {},
        fieldset : X( _({legend:1}), K ),
        thead : M,
        ul : Q,
        acronym : L,
        b : L,
        a : X( _({a:1}), J ),
        blockquote :X(_({td:1,tr:1,tbody:1,li:1}),P),
        caption : L,
        i : L,
        u : L,
        tbody : M,
        s : L,
        address : X( D, I ),
        tt : L,
        legend : L,
        q : L,
        pre : X( G, C ),
        p : X(_({'a':1}),L),
        em :L,
        dfn : L
    });
})();

/**
 * @file
 * @name UE.dom.domUtils
 * @short DomUtils
 * @import editor.js, core/utils.js,core/browser.js,core/dom/dtd.js
 * @desc UEditorå°�è£…çš„åº•å±‚domæ“�ä½œåº“
 */
function getDomNode(node, start, ltr, startFromChild, fn, guard) {
    var tmpNode = startFromChild && node[start],
        parent;
    !tmpNode && (tmpNode = node[ltr]);
    while (!tmpNode && (parent = (parent || node).parentNode)) {
        if (parent.tagName == 'BODY' || guard && !guard(parent)) {
            return null;
        }
        tmpNode = parent[ltr];
    }
    if (tmpNode && fn && !fn(tmpNode)) {
        return  getDomNode(tmpNode, start, ltr, false, fn);
    }
    return tmpNode;
}
var attrFix = ie && browser.version < 9 ? {
        tabindex:"tabIndex",
        readonly:"readOnly",
        "for":"htmlFor",
        "class":"className",
        maxlength:"maxLength",
        cellspacing:"cellSpacing",
        cellpadding:"cellPadding",
        rowspan:"rowSpan",
        colspan:"colSpan",
        usemap:"useMap",
        frameborder:"frameBorder"
    } : {
        tabindex:"tabIndex",
        readonly:"readOnly"
    },
    styleBlock = utils.listToMap([
        '-webkit-box', '-moz-box', 'block' ,
        'list-item' , 'table' , 'table-row-group' ,
        'table-header-group', 'table-footer-group' ,
        'table-row' , 'table-column-group' , 'table-column' ,
        'table-cell' , 'table-caption'
    ]);
var domUtils = dom.domUtils = {
    //èŠ‚ç‚¹å¸¸é‡�
    NODE_ELEMENT:1,
    NODE_DOCUMENT:9,
    NODE_TEXT:3,
    NODE_COMMENT:8,
    NODE_DOCUMENT_FRAGMENT:11,

    //ä½�ç½®å…³ç³»
    POSITION_IDENTICAL:0,
    POSITION_DISCONNECTED:1,
    POSITION_FOLLOWING:2,
    POSITION_PRECEDING:4,
    POSITION_IS_CONTAINED:8,
    POSITION_CONTAINS:16,
    //ie6ä½¿ç”¨å…¶ä»–çš„ä¼šæœ‰ä¸€æ®µç©ºç™½å‡ºçŽ°
    fillChar:ie && browser.version == '6' ? '\ufeff' : '\u200B',
    //-------------------------Nodeéƒ¨åˆ†--------------------------------
    keys:{
        /*Backspace*/ 8:1, /*Delete*/ 46:1,
        /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
        37:1, 38:1, 39:1, 40:1,
        13:1 /*enter*/
    },
    /**
     * èŽ·å�–èŠ‚ç‚¹Aç›¸å¯¹äºŽèŠ‚ç‚¹Bçš„ä½�ç½®å…³ç³»
     * @name getPosition
     * @grammar UE.dom.domUtils.getPosition(nodeA,nodeB)  =>  Number
     * @example
     *  switch (returnValue) {
     *      case 0: //ç›¸ç­‰ï¼Œå�Œä¸€èŠ‚ç‚¹
     *      case 1: //æ— å…³ï¼ŒèŠ‚ç‚¹ä¸�ç›¸è¿ž
     *      case 2: //è·Ÿéš�ï¼Œå�³èŠ‚ç‚¹Aå¤´éƒ¨ä½�äºŽèŠ‚ç‚¹Bå¤´éƒ¨çš„å�Žé�¢
     *      case 4: //å‰�ç½®ï¼Œå�³èŠ‚ç‚¹Aå¤´éƒ¨ä½�äºŽèŠ‚ç‚¹Bå¤´éƒ¨çš„å‰�é�¢
     *      case 8: //è¢«åŒ…å�«ï¼Œå�³èŠ‚ç‚¹Aè¢«èŠ‚ç‚¹BåŒ…å�«
     *      case 10://ç»„å�ˆç±»åž‹ï¼Œå�³èŠ‚ç‚¹Aæ»¡è¶³è·Ÿéš�èŠ‚ç‚¹Bä¸”è¢«èŠ‚ç‚¹BåŒ…å�«ã€‚å®žé™…ä¸Šï¼Œå¦‚æžœè¢«åŒ…å�«ï¼Œå¿…å®šè·Ÿéš�ï¼Œæ‰€ä»¥returnValueäº‹å®žä¸Šä¸�ä¼šå­˜åœ¨8çš„æƒ…å†µã€‚
     *      case 16://åŒ…å�«ï¼Œå�³èŠ‚ç‚¹AåŒ…å�«èŠ‚ç‚¹B
     *      case 20://ç»„å�ˆç±»åž‹ï¼Œå�³èŠ‚ç‚¹Aæ»¡è¶³å‰�ç½®èŠ‚ç‚¹Aä¸”åŒ…å�«èŠ‚ç‚¹Bã€‚å�Œæ ·ï¼Œå¦‚æžœåŒ…å�«ï¼Œå¿…å®šå‰�ç½®ï¼Œæ‰€ä»¥returnValueäº‹å®žä¸Šä¹Ÿä¸�ä¼šå­˜åœ¨16çš„æƒ…å†µ
     *  }
     */
    getPosition:function (nodeA, nodeB) {
        // å¦‚æžœä¸¤ä¸ªèŠ‚ç‚¹æ˜¯å�Œä¸€ä¸ªèŠ‚ç‚¹
        if (nodeA === nodeB) {
            // domUtils.POSITION_IDENTICAL
            return 0;
        }
        var node,
            parentsA = [nodeA],
            parentsB = [nodeB];
        node = nodeA;
        while (node = node.parentNode) {
            // å¦‚æžœnodeBæ˜¯nodeAçš„ç¥–å…ˆèŠ‚ç‚¹
            if (node === nodeB) {
                // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
                return 10;
            }
            parentsA.push(node);
        }
        node = nodeB;
        while (node = node.parentNode) {
            // å¦‚æžœnodeAæ˜¯nodeBçš„ç¥–å…ˆèŠ‚ç‚¹
            if (node === nodeA) {
                // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
                return 20;
            }
            parentsB.push(node);
        }
        parentsA.reverse();
        parentsB.reverse();
        if (parentsA[0] !== parentsB[0]) {
            // domUtils.POSITION_DISCONNECTED
            return 1;
        }
        var i = -1;
        while (i++, parentsA[i] === parentsB[i]) {
        }
        nodeA = parentsA[i];
        nodeB = parentsB[i];
        while (nodeA = nodeA.nextSibling) {
            if (nodeA === nodeB) {
                // domUtils.POSITION_PRECEDING
                return 4
            }
        }
        // domUtils.POSITION_FOLLOWING
        return  2;
    },

    /**
     * è¿”å›žèŠ‚ç‚¹nodeåœ¨çˆ¶èŠ‚ç‚¹ä¸­çš„ç´¢å¼•ä½�ç½®
     * @name getNodeIndex
     * @grammar UE.dom.domUtils.getNodeIndex(node)  => Number  //ç´¢å¼•å€¼ä»Ž0å¼€å§‹
     */
    getNodeIndex:function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                continue;
            }
            i++;
        }
        return i;
    },

    /**
     * æ£€æµ‹èŠ‚ç‚¹nodeæ˜¯å�¦åœ¨èŠ‚ç‚¹docçš„æ ‘ä¸Šï¼Œå®žè´¨ä¸Šæ˜¯æ£€æµ‹æ˜¯å�¦è¢«docåŒ…å�«
     * @name inDoc
     * @grammar UE.dom.domUtils.inDoc(node,doc)   =>  true|false
     */
    inDoc:function (node, doc) {
        return domUtils.getPosition(node, doc) == 10;
    },
    /**
     * æŸ¥æ‰¾nodeèŠ‚ç‚¹çš„ç¥–å…ˆèŠ‚ç‚¹
     * @name findParent
     * @grammar UE.dom.domUtils.findParent(node)  => Element  // ç›´æŽ¥è¿”å›žnodeèŠ‚ç‚¹çš„çˆ¶èŠ‚ç‚¹
     * @grammar UE.dom.domUtils.findParent(node,filterFn)  => Element  //filterFnä¸ºè¿‡æ»¤å‡½æ•°ï¼Œnodeä½œä¸ºå�‚æ•°ï¼Œè¿”å›žtrueæ—¶æ‰�ä¼šå°†nodeä½œä¸ºç¬¦å�ˆè¦�æ±‚çš„èŠ‚ç‚¹è¿”å›ž
     * @grammar UE.dom.domUtils.findParent(node,filterFn,includeSelf)  => Element  //includeSelfæŒ‡å®šæ˜¯å�¦åŒ…å�«è‡ªèº«
     */
    findParent:function (node, filterFn, includeSelf) {
        if (node && !domUtils.isBody(node)) {
            node = includeSelf ? node : node.parentNode;
            while (node) {
                if (!filterFn || filterFn(node) || domUtils.isBody(node)) {
                    return filterFn && !filterFn(node) && domUtils.isBody(node) ? null : node;
                }
                node = node.parentNode;
            }
        }
        return null;
    },
    /**
     * é€šè¿‡tagNameæŸ¥æ‰¾nodeèŠ‚ç‚¹çš„ç¥–å…ˆèŠ‚ç‚¹
     * @name findParentByTagName
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames)   =>  Element  //tagNamesæ”¯æŒ�æ•°ç»„ï¼ŒåŒºåˆ†å¤§å°�å†™
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames,includeSelf)   =>  Element  //includeSelfæŒ‡å®šæ˜¯å�¦åŒ…å�«è‡ªèº«
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames,includeSelf,excludeFn)   =>  Element  //excludeFnæŒ‡å®šä¾‹å¤–è¿‡æ»¤æ�¡ä»¶ï¼Œè¿”å›žtrueæ—¶å¿½ç•¥è¯¥èŠ‚ç‚¹
     */
    findParentByTagName:function (node, tagNames, includeSelf, excludeFn) {
        tagNames = utils.listToMap(utils.isArray(tagNames) ? tagNames : [tagNames]);
        return domUtils.findParent(node, function (node) {
            return tagNames[node.tagName] && !(excludeFn && excludeFn(node));
        }, includeSelf);
    },
    /**
     * æŸ¥æ‰¾èŠ‚ç‚¹nodeçš„ç¥–å…ˆèŠ‚ç‚¹é›†å�ˆ
     * @name findParents
     * @grammar UE.dom.domUtils.findParents(node)  => Array  //è¿”å›žä¸€ä¸ªç¥–å…ˆèŠ‚ç‚¹æ•°ç»„é›†å�ˆï¼Œä¸�åŒ…å�«è‡ªèº«
     * @grammar UE.dom.domUtils.findParents(node,includeSelf)  => Array  //è¿”å›žä¸€ä¸ªç¥–å…ˆèŠ‚ç‚¹æ•°ç»„é›†å�ˆï¼ŒincludeSelfæŒ‡å®šæ˜¯å�¦åŒ…å�«è‡ªèº«
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn)  => Array  //è¿”å›žä¸€ä¸ªç¥–å…ˆèŠ‚ç‚¹æ•°ç»„é›†å�ˆï¼ŒfilterFnæŒ‡å®šè¿‡æ»¤æ�¡ä»¶ï¼Œè¿”å›žtrueçš„nodeå°†è¢«é€‰å�–
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn,closerFirst)  => Array  //è¿”å›žä¸€ä¸ªç¥–å…ˆèŠ‚ç‚¹æ•°ç»„é›†å�ˆï¼ŒcloserFirstä¸ºtrueçš„è¯�ï¼Œnodeçš„ç›´æŽ¥çˆ¶äº²èŠ‚ç‚¹æ˜¯æ•°ç»„çš„ç¬¬0ä¸ª
     */
    findParents:function (node, includeSelf, filterFn, closerFirst) {
        var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
        while (node = domUtils.findParent(node, filterFn)) {
            parents.push(node);
        }
        return closerFirst ? parents : parents.reverse();
    },

    /**
     * åœ¨èŠ‚ç‚¹nodeå�Žé�¢æ�’å…¥æ–°èŠ‚ç‚¹newNode
     * @name insertAfter
     * @grammar UE.dom.domUtils.insertAfter(node,newNode)  => newNode
     */
    insertAfter:function (node, newNode) {
        return node.parentNode.insertBefore(newNode, node.nextSibling);
    },

    /**
     * åˆ é™¤èŠ‚ç‚¹nodeï¼Œå¹¶æ ¹æ�®keepChildrenæŒ‡å®šæ˜¯å�¦ä¿�ç•™å­�èŠ‚ç‚¹
     * @name remove
     * @grammar UE.dom.domUtils.remove(node)  =>  node
     * @grammar UE.dom.domUtils.remove(node,keepChildren)  =>  node
     */
    remove:function (node, keepChildren) {
        var parent = node.parentNode,
            child;
        if (parent) {
            if (keepChildren && node.hasChildNodes()) {
                while (child = node.firstChild) {
                    parent.insertBefore(child, node);
                }
            }
            parent.removeChild(node);
        }
        return node;
    },

    /**
     * å�–å¾—nodeèŠ‚ç‚¹åœ¨domæ ‘ä¸Šçš„ä¸‹ä¸€ä¸ªèŠ‚ç‚¹,å�³å¤šå�‰æ ‘é��åŽ†
     * @name  getNextDomNode
     * @grammar UE.dom.domUtils.getNextDomNode(node)  => Element
     * @example
     */
    getNextDomNode:function (node, startFromChild, filterFn, guard) {
        return getDomNode(node, 'firstChild', 'nextSibling', startFromChild, filterFn, guard);
    },
    /**
     * æ£€æµ‹èŠ‚ç‚¹nodeæ˜¯å�¦å±žäºŽbookmarkèŠ‚ç‚¹
     * @name isBookmarkNode
     * @grammar UE.dom.domUtils.isBookmarkNode(node)  => true|false
     */
    isBookmarkNode:function (node) {
        return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
    },
    /**
     * èŽ·å�–èŠ‚ç‚¹nodeæ‰€åœ¨çš„windowå¯¹è±¡
     * @name  getWindow
     * @grammar UE.dom.domUtils.getWindow(node)  => windowå¯¹è±¡
     */
    getWindow:function (node) {
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },
    /**
     * å¾—åˆ°nodeAä¸ŽnodeBå…¬å…±çš„ç¥–å…ˆèŠ‚ç‚¹
     * @name  getCommonAncestor
     * @grammar UE.dom.domUtils.getCommonAncestor(nodeA,nodeB)  => Element
     */
    getCommonAncestor:function (nodeA, nodeB) {
        if (nodeA === nodeB)
            return nodeA;
        var parentsA = [nodeA] , parentsB = [nodeB], parent = nodeA, i = -1;
        while (parent = parent.parentNode) {
            if (parent === nodeB) {
                return parent;
            }
            parentsA.push(parent);
        }
        parent = nodeB;
        while (parent = parent.parentNode) {
            if (parent === nodeA)
                return parent;
            parentsB.push(parent);
        }
        parentsA.reverse();
        parentsB.reverse();
        while (i++, parentsA[i] === parentsB[i]) {
        }
        return i == 0 ? null : parentsA[i - 1];

    },
    /**
     * æ¸…é™¤nodeèŠ‚ç‚¹å·¦å�³å…„å¼Ÿä¸ºç©ºçš„inlineèŠ‚ç‚¹
     * @name clearEmptySibling
     * @grammar UE.dom.domUtils.clearEmptySibling(node)
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext)  //ignoreNextæŒ‡å®šæ˜¯å�¦å¿½ç•¥å�³è¾¹ç©ºèŠ‚ç‚¹
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext,ignorePre)  //ignorePreæŒ‡å®šæ˜¯å�¦å¿½ç•¥å·¦è¾¹ç©ºèŠ‚ç‚¹
     * @example
     * <b></b><i></i>xxxx<b>bb</b> --> xxxx<b>bb</b>
     */
    clearEmptySibling:function (node, ignoreNext, ignorePre) {
        function clear(next, dir) {
            var tmpNode;
            while (next && !domUtils.isBookmarkNode(next) && (domUtils.isEmptyInlineElement(next)
                //è¿™é‡Œä¸�èƒ½æŠŠç©ºæ ¼ç®—è¿›æ�¥ä¼šå�§ç©ºæ ¼å¹²æŽ‰ï¼Œå‡ºçŽ°æ–‡å­—é—´çš„ç©ºæ ¼ä¸¢æŽ‰äº†
                || !new RegExp('[^\t\n\r' + domUtils.fillChar + ']').test(next.nodeValue) )) {
                tmpNode = next[dir];
                domUtils.remove(next);
                next = tmpNode;
            }
        }
        !ignoreNext && clear(node.nextSibling, 'nextSibling');
        !ignorePre && clear(node.previousSibling, 'previousSibling');
    },
    /**
     * å°†ä¸€ä¸ªæ–‡æœ¬èŠ‚ç‚¹nodeæ‹†åˆ†æˆ�ä¸¤ä¸ªæ–‡æœ¬èŠ‚ç‚¹ï¼ŒoffsetæŒ‡å®šæ‹†åˆ†ä½�ç½®
     * @name split
     * @grammar UE.dom.domUtils.split(node,offset)  =>  TextNode  //è¿”å›žä»Žåˆ‡åˆ†ä½�ç½®å¼€å§‹çš„å�Žä¸€ä¸ªæ–‡æœ¬èŠ‚ç‚¹
     */
    split:function (node, offset) {
        var doc = node.ownerDocument;
        if (browser.ie && offset == node.nodeValue.length) {
            var next = doc.createTextNode('');
            return domUtils.insertAfter(node, next);
        }
        var retval = node.splitText(offset);
        //ie8ä¸‹splitTextä¸�ä¼šè·Ÿæ–°childNodes,æˆ‘ä»¬æ‰‹åŠ¨è§¦å�‘ä»–çš„æ›´æ–°
        if (browser.ie8) {
            var tmpNode = doc.createTextNode('');
            domUtils.insertAfter(retval, tmpNode);
            domUtils.remove(tmpNode);
        }
        return retval;
    },

    /**
     * æ£€æµ‹èŠ‚ç‚¹nodeæ˜¯å�¦ä¸ºç©ºèŠ‚ç‚¹ï¼ˆåŒ…æ‹¬ç©ºæ ¼ã€�æ�¢è¡Œã€�å� ä½�ç¬¦ç­‰å­—ç¬¦ï¼‰
     * @name  isWhitespace
     * @grammar  UE.dom.domUtils.isWhitespace(node)  => true|false
     */
    isWhitespace:function (node) {
        return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
    },
    /**
     * èŽ·å�–å…ƒç´ elementç›¸å¯¹äºŽviewportçš„ä½�ç½®å��æ ‡
     * @name getXY
     * @grammar UE.dom.domUtils.getXY(element)  => Object //è¿”å›žå��æ ‡å¯¹è±¡{x:left,y:top}
     */
    getXY:function (element) {
        var x = 0, y = 0;
        while (element.offsetParent) {
            y += element.offsetTop;
            x += element.offsetLeft;
            element = element.offsetParent;
        }
        return { 'x':x, 'y':y};
    },
    /**
     * ä¸ºå…ƒç´ elementç»‘å®šåŽŸç”ŸDOMäº‹ä»¶ï¼Œtypeä¸ºäº‹ä»¶ç±»åž‹ï¼Œhandlerä¸ºå¤„ç�†å‡½æ•°
     * @name on
     * @grammar UE.dom.domUtils.on(element,type,handler)   //typeæ”¯æŒ�æ•°ç»„ä¼ å…¥
     * @example
     * UE.dom.domUtils.on(document.body,"click",function(e){
     *     //eä¸ºäº‹ä»¶å¯¹è±¡ï¼Œthisä¸ºè¢«ç‚¹å‡»å…ƒç´ å¯¹æˆ�é‚£ä¸ª
     * })
     * @example
     * UE.dom.domUtils.on(document.body,["click","mousedown"],function(evt){
     *     //evtä¸ºäº‹ä»¶å¯¹è±¡ï¼Œthisä¸ºè¢«ç‚¹å‡»å…ƒç´ å¯¹è±¡
     * })
     */
    on:function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else {
                if (!handler._d) {
                    handler._d = {
                        els : []
                    };
                }
                var key = type + handler.toString(),index = utils.indexOf(handler._d.els,element);
                if (!handler._d[key] || index == -1) {
                    if(index == -1){
                        handler._d.els.push(element);
                    }
                    if(!handler._d[key]){
                        handler._d[key] = function (evt) {
                            return handler.call(evt.srcElement, evt || window.event);
                        };
                    }


                    element.attachEvent('on' + type, handler._d[key]);
                }
            }
        }
        element = null;
    },
    /**
     * è§£é™¤åŽŸç”ŸDOMäº‹ä»¶ç»‘å®š
     * @name un
     * @grammar  UE.dom.donUtils.un(element,type,handler)  //å�‚è§�<code><a href="#on">on</a></code>
     */
    un:function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else {
                var key = type + handler.toString();
                try{
                    element.detachEvent('on' + type, handler._d ? handler._d[key] : handler);
                }catch(e){}
                if (handler._d && handler._d[key]) {
                    var index = utils.indexOf(handler._d.els,element);
                    if(index!=-1){
                        handler._d.els.splice(index,1);
                    }
                    handler._d.els.length == 0 && delete handler._d[key];
                }
            }
        }
    },

    /**
     * æ¯”è¾ƒèŠ‚ç‚¹nodeAä¸ŽèŠ‚ç‚¹nodeBæ˜¯å�¦å…·æœ‰ç›¸å�Œçš„æ ‡ç­¾å��ã€�å±žæ€§å��ä»¥å�Šå±žæ€§å€¼
     * @name  isSameElement
     * @grammar UE.dom.domUtils.isSameElement(nodeA,nodeB) => true|false
     * @example
     * <span  style="font-size:12px">ssss</span> and <span style="font-size:12px">bbbbb</span>   => true
     * <span  style="font-size:13px">ssss</span> and <span style="font-size:12px">bbbbb</span>   => false
     */
    isSameElement:function (nodeA, nodeB) {
        if (nodeA.tagName != nodeB.tagName) {
            return false;
        }
        var thisAttrs = nodeA.attributes,
            otherAttrs = nodeB.attributes;
        if (!ie && thisAttrs.length != otherAttrs.length) {
            return false;
        }
        var attrA, attrB, al = 0, bl = 0;
        for (var i = 0; attrA = thisAttrs[i++];) {
            if (attrA.nodeName == 'style') {
                if (attrA.specified) {
                    al++;
                }
                if (domUtils.isSameStyle(nodeA, nodeB)) {
                    continue;
                } else {
                    return false;
                }
            }
            if (ie) {
                if (attrA.specified) {
                    al++;
                    attrB = otherAttrs.getNamedItem(attrA.nodeName);
                } else {
                    continue;
                }
            } else {
                attrB = nodeB.attributes[attrA.nodeName];
            }
            if (!attrB.specified || attrA.nodeValue != attrB.nodeValue) {
                return false;
            }
        }
        // æœ‰å�¯èƒ½attrBçš„å±žæ€§åŒ…å�«äº†attrAçš„å±žæ€§ä¹‹å¤–è¿˜æœ‰è‡ªå·±çš„å±žæ€§
        if (ie) {
            for (i = 0; attrB = otherAttrs[i++];) {
                if (attrB.specified) {
                    bl++;
                }
            }
            if (al != bl) {
                return false;
            }
        }
        return true;
    },

    /**
     * åˆ¤æ–­èŠ‚ç‚¹nodeAä¸ŽèŠ‚ç‚¹nodeBçš„å…ƒç´ å±žæ€§æ˜¯å�¦ä¸€è‡´
     * @name isSameStyle
     * @grammar UE.dom.domUtils.isSameStyle(nodeA,nodeB) => true|false
     */
    isSameStyle:function (nodeA, nodeB) {
        var styleA = nodeA.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':'),
            styleB = nodeB.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':');
        if (browser.opera) {
            styleA = nodeA.style;
            styleB = nodeB.style;
            if (styleA.length != styleB.length)
                return false;
            for (var p in styleA) {
                if (/^(\d+|csstext)$/i.test(p)) {
                    continue;
                }
                if (styleA[p] != styleB[p]) {
                    return false;
                }
            }
            return true;
        }
        if (!styleA || !styleB) {
            return styleA == styleB;
        }
        styleA = styleA.split(';');
        styleB = styleB.split(';');
        if (styleA.length != styleB.length) {
            return false;
        }
        for (var i = 0, ci; ci = styleA[i++];) {
            if (utils.indexOf(styleB, ci) == -1) {
                return false;
            }
        }
        return true;
    },
    /**
     * æ£€æŸ¥èŠ‚ç‚¹nodeæ˜¯å�¦ä¸ºå�—å…ƒç´ 
     * @name isBlockElm
     * @grammar UE.dom.domUtils.isBlockElm(node)  => true|false
     */
    isBlockElm:function (node) {
        return node.nodeType == 1 && (dtd.$block[node.tagName] || styleBlock[domUtils.getComputedStyle(node, 'display')]) && !dtd.$nonChild[node.tagName];
    },
    /**
     * æ£€æµ‹nodeèŠ‚ç‚¹æ˜¯å�¦ä¸ºbodyèŠ‚ç‚¹
     * @name isBody
     * @grammar UE.dom.domUtils.isBody(node)   => true|false
     */
    isBody:function (node) {
        return  node && node.nodeType == 1 && node.tagName.toLowerCase() == 'body';
    },
    /**
     * ä»¥nodeèŠ‚ç‚¹ä¸ºä¸­å¿ƒï¼Œå°†è¯¥èŠ‚ç‚¹çš„æŒ‡å®šç¥–å…ˆèŠ‚ç‚¹parentæ‹†åˆ†æˆ�2å�—
     * @name  breakParent
     * @grammar UE.dom.domUtils.breakParent(node,parent) => node
     * @desc
     * <code type="html"><b>ooo</b>æ˜¯nodeèŠ‚ç‚¹
     * <p>xxxx<b>ooo</b>xxx</p> ==> <p>xxx</p><b>ooo</b><p>xxx</p>
     * <p>xxxxx<span>xxxx<b>ooo</b>xxxxxx</span></p>   =>   <p>xxxxx<span>xxxx</span></p><b>ooo</b><p><span>xxxxxx</span></p></code>
     */
    breakParent:function (node, parent) {
        var tmpNode,
            parentClone = node,
            clone = node,
            leftNodes,
            rightNodes;
        do {
            parentClone = parentClone.parentNode;
            if (leftNodes) {
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(leftNodes);
                leftNodes = tmpNode;
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(rightNodes);
                rightNodes = tmpNode;
            } else {
                leftNodes = parentClone.cloneNode(false);
                rightNodes = leftNodes.cloneNode(false);
            }
            while (tmpNode = clone.previousSibling) {
                leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
            }
            while (tmpNode = clone.nextSibling) {
                rightNodes.appendChild(tmpNode);
            }
            clone = parentClone;
        } while (parent !== parentClone);
        tmpNode = parent.parentNode;
        tmpNode.insertBefore(leftNodes, parent);
        tmpNode.insertBefore(rightNodes, parent);
        tmpNode.insertBefore(node, rightNodes);
        domUtils.remove(parent);
        return node;
    },
    /**
     * æ£€æŸ¥èŠ‚ç‚¹nodeæ˜¯å�¦æ˜¯ç©ºinlineèŠ‚ç‚¹
     * @name  isEmptyInlineElement
     * @grammar   UE.dom.domUtils.isEmptyInlineElement(node)  => 1|0
     * @example
     * <b><i></i></b> => 1
     * <b><i></i><u></u></b> => 1
     * <b></b> => 1
     * <b>xx<i></i></b> => 0
     */
    isEmptyInlineElement:function (node) {
        if (node.nodeType != 1 || !dtd.$removeEmpty[ node.tagName ]) {
            return 0;
        }
        node = node.firstChild;
        while (node) {
            //å¦‚æžœæ˜¯åˆ›å»ºçš„bookmarkå°±è·³è¿‡
            if (domUtils.isBookmarkNode(node)) {
                return 0;
            }
            if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
                node.nodeType == 3 && !domUtils.isWhitespace(node)
                ) {
                return 0;
            }
            node = node.nextSibling;
        }
        return 1;

    },

    /**
     * åˆ é™¤nodeèŠ‚ç‚¹ä¸‹çš„å·¦å�³ç©ºç™½æ–‡æœ¬å­�èŠ‚ç‚¹
     * @name trimWhiteTextNode
     * @grammar UE.dom.domUtils.trimWhiteTextNode(node)
     */
    trimWhiteTextNode:function (node) {
        function remove(dir) {
            var child;
            while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child)) {
                node.removeChild(child);
            }
        }
        remove('firstChild');
        remove('lastChild');
    },

    /**
     * å�ˆå¹¶nodeèŠ‚ç‚¹ä¸‹ç›¸å�Œçš„å­�èŠ‚ç‚¹
     * @name mergeChild
     * @desc
     * UE.dom.domUtils.mergeChild(node,tagName) //tagNameè¦�å�ˆå¹¶çš„å­�èŠ‚ç‚¹çš„æ ‡ç­¾
     * @example
     * <p><span style="font-size:12px;">xx<span style="font-size:12px;">aa</span>xx</span></p>
     * ==> UE.dom.domUtils.mergeChild(node,'span')
     * <p><span style="font-size:12px;">xxaaxx</span></p>
     */
    mergeChild:function (node, tagName, attrs) {
        var list = domUtils.getElementsByTagName(node, node.tagName.toLowerCase());
        for (var i = 0, ci; ci = list[i++];) {
            if (!ci.parentNode || domUtils.isBookmarkNode(ci)) {
                continue;
            }
            //spanå�•ç‹¬å¤„ç�†
            if (ci.tagName.toLowerCase() == 'span') {
                if (node === ci.parentNode) {
                    domUtils.trimWhiteTextNode(node);
                    if (node.childNodes.length == 1) {
                        node.style.cssText = ci.style.cssText + ";" + node.style.cssText;
                        domUtils.remove(ci, true);
                        continue;
                    }
                }
                ci.style.cssText = node.style.cssText + ';' + ci.style.cssText;
                if (attrs) {
                    var style = attrs.style;
                    if (style) {
                        style = style.split(';');
                        for (var j = 0, s; s = style[j++];) {
                            ci.style[utils.cssStyleToDomStyle(s.split(':')[0])] = s.split(':')[1];
                        }
                    }
                }
                if (domUtils.isSameStyle(ci, node)) {
                    domUtils.remove(ci, true);
                }
                continue;
            }
            if (domUtils.isSameElement(node, ci)) {
                domUtils.remove(ci, true);
            }
        }
    },

    /**
     * åŽŸç”Ÿæ–¹æ³•getElementsByTagNameçš„å°�è£…
     * @name getElementsByTagName
     * @grammar UE.dom.domUtils.getElementsByTagName(node,tagName)  => Array  //èŠ‚ç‚¹é›†å�ˆæ•°ç»„
     */
    getElementsByTagName:function (node, name) {
        var list = node.getElementsByTagName(name), arr = [];
        for (var i = 0, ci; ci = list[i++];) {
            arr.push(ci);
        }
        return arr;
    },
    /**
     * å°†èŠ‚ç‚¹nodeå�ˆå¹¶åˆ°çˆ¶èŠ‚ç‚¹ä¸Š
     * @name mergeToParent
     * @grammar UE.dom.domUtils.mergeToParent(node)
     * @example
     * <span style="color:#fff"><span style="font-size:12px">xxx</span></span> ==> <span style="color:#fff;font-size:12px">xxx</span>
     */
    mergeToParent:function (node) {
        var parent = node.parentNode;
        while (parent && dtd.$removeEmpty[parent.tagName]) {
            if (parent.tagName == node.tagName || parent.tagName == 'A') {//é’ˆå¯¹aæ ‡ç­¾å�•ç‹¬å¤„ç�†
                domUtils.trimWhiteTextNode(parent);
                //spanéœ€è¦�ç‰¹æ®Šå¤„ç�†  ä¸�å¤„ç�†è¿™æ ·çš„æƒ…å†µ <span stlye="color:#fff">xxx<span style="color:#ccc">xxx</span>xxx</span>
                if (parent.tagName == 'SPAN' && !domUtils.isSameStyle(parent, node)
                    || (parent.tagName == 'A' && node.tagName == 'SPAN')) {
                    if (parent.childNodes.length > 1 || parent !== node.parentNode) {
                        node.style.cssText = parent.style.cssText + ";" + node.style.cssText;
                        parent = parent.parentNode;
                        continue;
                    } else {
                        parent.style.cssText += ";" + node.style.cssText;
                        //trace:952 aæ ‡ç­¾è¦�ä¿�æŒ�ä¸‹åˆ’çº¿
                        if (parent.tagName == 'A') {
                            parent.style.textDecoration = 'underline';
                        }
                    }
                }
                if (parent.tagName != 'A') {
                    parent === node.parentNode && domUtils.remove(node, true);
                    break;
                }
            }
            parent = parent.parentNode;
        }
    },
    /**
     * å�ˆå¹¶èŠ‚ç‚¹nodeçš„å·¦å�³å…„å¼ŸèŠ‚ç‚¹
     * @name mergeSibling
     * @grammar UE.dom.domUtils.mergeSibling(node)
     * @grammar UE.dom.domUtils.mergeSibling(node,ignorePre)    //ignorePreæŒ‡å®šæ˜¯å�¦å¿½ç•¥å·¦å…„å¼Ÿ
     * @grammar UE.dom.domUtils.mergeSibling(node,ignorePre,ignoreNext)  //ignoreNextæŒ‡å®šæ˜¯å�¦å¿½ç•¥å�³å…„å¼Ÿ
     * @example
     * <b>xxxx</b><b>ooo</b><b>xxxx</b> ==> <b>xxxxoooxxxx</b>
     */
    mergeSibling:function (node, ignorePre, ignoreNext) {
        function merge(rtl, start, node) {
            var next;
            if ((next = node[rtl]) && !domUtils.isBookmarkNode(next) && next.nodeType == 1 && domUtils.isSameElement(node, next)) {
                while (next.firstChild) {
                    if (start == 'firstChild') {
                        node.insertBefore(next.lastChild, node.firstChild);
                    } else {
                        node.appendChild(next.firstChild);
                    }
                }
                domUtils.remove(next);
            }
        }
        !ignorePre && merge('previousSibling', 'firstChild', node);
        !ignoreNext && merge('nextSibling', 'lastChild', node);
    },

    /**
     * è®¾ç½®èŠ‚ç‚¹nodeå�Šå…¶å­�èŠ‚ç‚¹ä¸�ä¼šè¢«é€‰ä¸­
     * @name unSelectable
     * @grammar UE.dom.domUtils.unSelectable(node)
     */
    unSelectable:ie || browser.opera ? function (node) {
        //for ie9
        node.onselectstart = function () {
            return false;
        };
        node.onclick = node.onkeyup = node.onkeydown = function () {
            return false;
        };
        node.unselectable = 'on';
        node.setAttribute("unselectable", "on");
        for (var i = 0, ci; ci = node.all[i++];) {
            switch (ci.tagName.toLowerCase()) {
                case 'iframe' :
                case 'textarea' :
                case 'input' :
                case 'select' :
                    break;
                default :
                    ci.unselectable = 'on';
                    node.setAttribute("unselectable", "on");
            }
        }
    } : function (node) {
        node.style.MozUserSelect =
            node.style.webkitUserSelect =
                node.style.KhtmlUserSelect = 'none';
    },
    /**
     * åˆ é™¤èŠ‚ç‚¹nodeä¸Šçš„å±žæ€§attrNamesï¼ŒattrNamesä¸ºå±žæ€§å��ç§°æ•°ç»„
     * @name  removeAttributes
     * @grammar UE.dom.domUtils.removeAttributes(node,attrNames)
     * @example
     * //Before remove
     * <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
     * //Remove
     * UE.dom.domUtils.removeAttributes(node,["id","name"]);
     * //After remove
     * <span style="font-size:14px;">xxxxx</span>
     */
    removeAttributes:function (node, attrNames) {
        for (var i = 0, ci; ci = attrNames[i++];) {
            ci = attrFix[ci] || ci;
            switch (ci) {
                case 'className':
                    node[ci] = '';
                    break;
                case 'style':
                    node.style.cssText = '';
                    !browser.ie && node.removeAttributeNode(node.getAttributeNode('style'))
            }
            node.removeAttribute(ci);
        }
    },
    /**
     * åœ¨docä¸‹åˆ›å»ºä¸€ä¸ªæ ‡ç­¾å��ä¸ºtagï¼Œå±žæ€§ä¸ºattrsçš„å…ƒç´ 
     * @name createElement
     * @grammar UE.dom.domUtils.createElement(doc,tag,attrs)  =>  Node  //è¿”å›žåˆ›å»ºçš„èŠ‚ç‚¹
     */
    createElement:function (doc, tag, attrs) {
        return domUtils.setAttributes(doc.createElement(tag), attrs)
    },
    /**
     * ä¸ºèŠ‚ç‚¹nodeæ·»åŠ å±žæ€§attrsï¼Œattrsä¸ºå±žæ€§é”®å€¼å¯¹
     * @name setAttributes
     * @grammar UE.dom.domUtils.setAttributes(node,attrs)  => node
     */
    setAttributes:function (node, attrs) {
        for (var attr in attrs) {
            if(attrs.hasOwnProperty(attr)){
                var value = attrs[attr];
                switch (attr) {
                    case 'class':
                        //ieä¸‹è¦�è¿™æ ·èµ‹å€¼ï¼ŒsetAttributeä¸�èµ·ä½œç”¨
                        node.className = value;
                        break;
                    case 'style' :
                        node.style.cssText = node.style.cssText + ";" + value;
                        break;
                    case 'innerHTML':
                        node[attr] = value;
                        break;
                    case 'value':
                        node.value = value;
                        break;
                    default:
                        node.setAttribute(attrFix[attr] || attr, value);
                }
            }
        }
        return node;
    },

    /**
     * èŽ·å�–å…ƒç´ elementçš„è®¡ç®—æ ·å¼�
     * @name getComputedStyle
     * @grammar UE.dom.domUtils.getComputedStyle(element,styleName)  => String //è¿”å›žå¯¹åº”æ ·å¼�å��ç§°çš„æ ·å¼�å€¼
     * @example
     * getComputedStyle(document.body,"font-size")  =>  "15px"
     * getComputedStyle(form,"color")  =>  "#ffccdd"
     */
    getComputedStyle:function (element, styleName) {
        //ä¸€ä¸‹çš„å±žæ€§å�•ç‹¬å¤„ç�†
        var pros = 'width height top left';

        if(pros.indexOf(styleName) > -1){
            return element['offset' + styleName.replace(/^\w/,function(s){return s.toUpperCase()})] + 'px';
        }
        //å¿½ç•¥æ–‡æœ¬èŠ‚ç‚¹
        if (element.nodeType == 3) {
            element = element.parentNode;
        }
        //ieä¸‹font-sizeè‹¥bodyä¸‹å®šä¹‰äº†font-sizeï¼Œåˆ™ä»ŽcurrentStyleé‡Œä¼šå�–åˆ°è¿™ä¸ªfont-size. å�–ä¸�åˆ°å®žé™…å€¼ï¼Œæ•…æ­¤ä¿®æ”¹.
        if (browser.ie && browser.version < 9 && styleName == 'font-size' && !element.style.fontSize &&
            !dtd.$empty[element.tagName] && !dtd.$nonChild[element.tagName]) {
            var span = element.ownerDocument.createElement('span');
            span.style.cssText = 'padding:0;border:0;font-family:simsun;';
            span.innerHTML = '.';
            element.appendChild(span);
            var result = span.offsetHeight;
            element.removeChild(span);
            span = null;
            return result + 'px';
        }
        try {
            var value = domUtils.getStyle(element, styleName) ||
                (window.getComputedStyle ? domUtils.getWindow(element).getComputedStyle(element, '').getPropertyValue(styleName) :
                    ( element.currentStyle || element.style )[utils.cssStyleToDomStyle(styleName)]);

        } catch (e) {
            return "";
        }
        return utils.transUnitToPx(utils.fixColor(styleName, value));
    },
    /**
     * åœ¨å…ƒç´ elementä¸Šåˆ é™¤classNamesï¼Œæ”¯æŒ�å�Œæ—¶åˆ é™¤å¤šä¸ª
     * @name removeClasses
     * @grammar UE.dom.domUtils.removeClasses(element,classNames)
     * @example
     * //æ‰§è¡Œæ–¹æ³•å‰�çš„domç»“æž„
     * <span class="test1 test2 test3">xxx</span>
     * //æ‰§è¡Œæ–¹æ³•
     * UE.dom.domUtils.removeClasses(element,["test1","test3"])
     * //æ‰§è¡Œæ–¹æ³•å�Žçš„domç»“æž„
     * <span class="test2">xxx</span>
     */
    removeClasses:function (elm, classNames) {
        classNames = utils.isArray(classNames) ? classNames :
            utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
            cls = cls.replace(new RegExp('\\b' + ci + '\\b'),'')
        }
        cls = utils.trim(cls).replace(/[ ]{2,}/g,' ');
        if(cls){
            elm.className = cls;
        }else{
            domUtils.removeAttributes(elm,['class']);
        }
    },
    /**
     * åœ¨å…ƒç´ elementä¸Šå¢žåŠ ä¸€ä¸ªæ ·å¼�ç±»classNameï¼Œæ”¯æŒ�ä»¥ç©ºæ ¼åˆ†å¼€çš„å¤šä¸ªç±»å��
     * å¦‚æžœç›¸å�Œçš„ç±»å��å°†ä¸�ä¼šæ·»åŠ 
     * @name addClass
     * @grammar UE.dom.domUtils.addClass(element,classNames)
     */
    addClass:function (elm, classNames) {
        if(!elm)return;
        classNames = utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
            if(!new RegExp('\\b' + ci + '\\b').test(cls)){
                elm.className += ' ' + ci;
            }
        }
    },
    /**
     * åˆ¤æ–­å…ƒç´ elementæ˜¯å�¦åŒ…å�«æ ·å¼�ç±»å��className,æ”¯æŒ�ä»¥ç©ºæ ¼åˆ†å¼€çš„å¤šä¸ªç±»å��,å¤šä¸ªç±»å��é¡ºåº�ä¸�å�Œä¹Ÿå�¯ä»¥æ¯”è¾ƒ
     * @name hasClass
     * @grammar UE.dom.domUtils.hasClass(element,className)  =>true|false
     */
    hasClass:function (element, className) {
        className = utils.trim(className).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = element.className;ci=className[i++];){
            if(!new RegExp('\\b' + ci + '\\b').test(cls)){
                return false;
            }
        }
        return i - 1 == className.length;
    },

    /**
     * é˜»æ­¢äº‹ä»¶é»˜è®¤è¡Œä¸º
     * @param {Event} evt    éœ€è¦�ç»„ç»‡çš„äº‹ä»¶å¯¹è±¡
     */
    preventDefault:function (evt) {
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    },
    /**
     * åˆ é™¤å…ƒç´ elementçš„æ ·å¼�
     * @grammar UE.dom.domUtils.removeStyle(element,name)        åˆ é™¤çš„æ ·å¼�å��ç§°
     */
    removeStyle:function (element, name) {
        if (element.style.removeProperty) {
            element.style.removeProperty (name);
        }else {
            element.style.removeAttribute (utils.cssStyleToDomStyle(name));
        }

        if (!element.style.cssText) {
            domUtils.removeAttributes(element, ['style']);
        }
    },
    /**
     * èŽ·å�–å…ƒç´ elementçš„æŸ�ä¸ªæ ·å¼�å€¼
     * @name getStyle
     * @grammar UE.dom.domUtils.getStyle(element,name)  => String
     */
    getStyle:function (element, name) {
        var value = element.style[ utils.cssStyleToDomStyle(name) ];
        return utils.fixColor(name, value);
    },
    /**
     * ä¸ºå…ƒç´ elementè®¾ç½®æ ·å¼�å±žæ€§å€¼
     * @name setStyle
     * @grammar UE.dom.domUtils.setStyle(element,name,value)
     */
    setStyle:function (element, name, value) {
        element.style[utils.cssStyleToDomStyle(name)] = value;
    },
    /**
     * ä¸ºå…ƒç´ elementè®¾ç½®æ ·å¼�å±žæ€§å€¼
     * @name setStyles
     * @grammar UE.dom.domUtils.setStyle(element,styles)  //stylesä¸ºæ ·å¼�é”®å€¼å¯¹
     */
    setStyles:function (element, styles) {
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                domUtils.setStyle(element, name, styles[name]);
            }
        }
    },
    /**
     * åˆ é™¤_moz_dirtyå±žæ€§
     * @function
     */
    removeDirtyAttr:function (node) {
        for (var i = 0, ci, nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
            ci.removeAttribute('_moz_dirty');
        }
        node.removeAttribute('_moz_dirty');
    },
    /**
     * è¿”å›žå­�èŠ‚ç‚¹çš„æ•°é‡�
     * @function
     * @param {Node}    node    çˆ¶èŠ‚ç‚¹
     * @param  {Function}    fn    è¿‡æ»¤å­�èŠ‚ç‚¹çš„è§„åˆ™ï¼Œè‹¥ä¸ºç©ºï¼Œåˆ™å¾—åˆ°æ‰€æœ‰å­�èŠ‚ç‚¹çš„æ•°é‡�
     * @return {Number}    ç¬¦å�ˆæ�¡ä»¶å­�èŠ‚ç‚¹çš„æ•°é‡�
     */
    getChildCount:function (node, fn) {
        var count = 0, first = node.firstChild;
        fn = fn || function () {
            return 1;
        };
        while (first) {
            if (fn(first)) {
                count++;
            }
            first = first.nextSibling;
        }
        return count;
    },

    /**
     * åˆ¤æ–­æ˜¯å�¦ä¸ºç©ºèŠ‚ç‚¹
     * @function
     * @param {Node}    node    èŠ‚ç‚¹
     * @return {Boolean}    æ˜¯å�¦ä¸ºç©ºèŠ‚ç‚¹
     */
    isEmptyNode:function (node) {
        return !node.firstChild || domUtils.getChildCount(node, function (node) {
            return  !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
        }) == 0
    },
    /**
     * æ¸…ç©ºèŠ‚ç‚¹æ‰€æœ‰çš„className
     * @function
     * @param {Array}    nodes    èŠ‚ç‚¹æ•°ç»„
     */
    clearSelectedArr:function (nodes) {
        var node;
        while (node = nodes.pop()) {
            domUtils.removeAttributes(node, ['class']);
        }
    },
    /**
     * å°†æ˜¾ç¤ºåŒºåŸŸæ»šåŠ¨åˆ°æ˜¾ç¤ºèŠ‚ç‚¹çš„ä½�ç½®
     * @function
     * @param    {Node}   node    èŠ‚ç‚¹
     * @param    {window}   win      windowå¯¹è±¡
     * @param    {Number}    offsetTop    è·�ç¦»ä¸Šæ–¹çš„å��ç§»é‡�
     */
    scrollToView:function (node, win, offsetTop) {
        var getViewPaneSize = function () {
                var doc = win.document,
                    mode = doc.compatMode == 'CSS1Compat';
                return {
                    width:( mode ? doc.documentElement.clientWidth : doc.body.clientWidth ) || 0,
                    height:( mode ? doc.documentElement.clientHeight : doc.body.clientHeight ) || 0
                };
            },
            getScrollPosition = function (win) {
                if ('pageXOffset' in win) {
                    return {
                        x:win.pageXOffset || 0,
                        y:win.pageYOffset || 0
                    };
                }
                else {
                    var doc = win.document;
                    return {
                        x:doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
                        y:doc.documentElement.scrollTop || doc.body.scrollTop || 0
                    };
                }
            };
        var winHeight = getViewPaneSize().height, offset = winHeight * -1 + offsetTop;
        offset += (node.offsetHeight || 0);
        var elementPosition = domUtils.getXY(node);
        offset += elementPosition.y;
        var currentScroll = getScrollPosition(win).y;
        // offset += 50;
        if (offset > currentScroll || offset < currentScroll - winHeight) {
            win.scrollTo(0, offset + (offset < 0 ? -20 : 20));
        }
    },
    /**
     * åˆ¤æ–­èŠ‚ç‚¹æ˜¯å�¦ä¸ºbr
     * @function
     * @param {Node}    node   èŠ‚ç‚¹
     */
    isBr:function (node) {
        return node.nodeType == 1 && node.tagName == 'BR';
    },
    isFillChar:function (node) {
        return node.nodeType == 3 && !node.nodeValue.replace(new RegExp(domUtils.fillChar), '').length
    },
    isStartInblock:function (range) {
        var tmpRange = range.cloneRange(),
            flag = 0,
            start = tmpRange.startContainer,
            tmp;
        while (start && domUtils.isFillChar(start)) {
            tmp = start;
            start = start.previousSibling
        }
        if (tmp) {
            tmpRange.setStartBefore(tmp);
            start = tmpRange.startContainer;
        }
        if (start.nodeType == 1 && domUtils.isEmptyNode(start) && tmpRange.startOffset == 1) {
            tmpRange.setStart(start, 0).collapse(true);
        }
        while (!tmpRange.startOffset) {
            start = tmpRange.startContainer;
            if (domUtils.isBlockElm(start) || domUtils.isBody(start)) {
                flag = 1;
                break;
            }
            var pre = tmpRange.startContainer.previousSibling,
                tmpNode;
            if (!pre) {
                tmpRange.setStartBefore(tmpRange.startContainer);
            } else {
                while (pre && domUtils.isFillChar(pre)) {
                    tmpNode = pre;
                    pre = pre.previousSibling;
                }
                if (tmpNode) {
                    tmpRange.setStartBefore(tmpNode);
                } else {
                    tmpRange.setStartBefore(tmpRange.startContainer);
                }
            }
        }
        return flag && !domUtils.isBody(tmpRange.startContainer) ? 1 : 0;
    },
    isEmptyBlock:function (node) {
        var reg = new RegExp('[ \t\r\n' + domUtils.fillChar + ']', 'g');
        if (node[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').length > 0) {
            return 0;
        }
        for (var n in dtd.$isNotEmpty) {
            if (node.getElementsByTagName(n).length) {
                return 0;
            }
        }
        return 1;
    },

    setViewportOffset:function (element, offset) {
        var left = parseInt(element.style.left) | 0;
        var top = parseInt(element.style.top) | 0;
        var rect = element.getBoundingClientRect();
        var offsetLeft = offset.left - rect.left;
        var offsetTop = offset.top - rect.top;
        if (offsetLeft) {
            element.style.left = left + offsetLeft + 'px';
        }
        if (offsetTop) {
            element.style.top = top + offsetTop + 'px';
        }
    },
    fillNode:function (doc, node) {
        var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
        node.innerHTML = '';
        node.appendChild(tmpNode);
    },
    moveChild:function (src, tag, dir) {
        while (src.firstChild) {
            if (dir && tag.firstChild) {
                tag.insertBefore(src.lastChild, tag.firstChild);
            } else {
                tag.appendChild(src.firstChild);
            }
        }
    },
    //åˆ¤æ–­æ˜¯å�¦æœ‰é¢�å¤–å±žæ€§
    hasNoAttributes:function (node) {
        return browser.ie ? /^<\w+\s*?>/.test(node.outerHTML) : node.attributes.length == 0;
    },
    //åˆ¤æ–­æ˜¯å�¦æ˜¯ç¼–è¾‘å™¨è‡ªå®šä¹‰çš„å�‚æ•°
    isCustomeNode:function (node) {
        return node.nodeType == 1 && node.getAttribute('_ue_custom_node_');
    },
    isTagNode:function (node, tagName) {
        return node.nodeType == 1 && new RegExp(node.tagName,'i').test(tagName)
    },
    /**
     * å¯¹äºŽnodelistç”¨filterè¿›è¡Œè¿‡æ»¤
     * @name filterNodeList
     * @since 1.2.4+
     * @grammar UE.dom.domUtils.filterNodeList(nodelist,filter,onlyFirst)  => èŠ‚ç‚¹
     * @example
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),'div p') //è¿”å›žç¬¬ä¸€ä¸ªæ˜¯divæˆ–è€…pçš„èŠ‚ç‚¹
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),function(n){return n.getAttribute('src')})
     * //è¿”å›žç¬¬ä¸€ä¸ªå¸¦srcå±žæ€§çš„èŠ‚ç‚¹
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),'i',true) //è¿”å›žæ•°ç»„ï¼Œé‡Œè¾¹éƒ½æ˜¯ièŠ‚ç‚¹
     */
    filterNodeList : function(nodelist,filter,forAll){
        var results = [];
        if(!utils .isFunction(filter)){
            var str = filter;
            filter = function(n){
                return utils.indexOf(utils.isArray(str) ? str:str.split(' '), n.tagName.toLowerCase()) != -1
            };
        }
        utils.each(nodelist,function(n){
            filter(n) && results.push(n)
        });
        return results.length  == 0 ? null : results.length == 1 || !forAll ? results[0] : results
    },

    isInNodeEndBoundary : function (rng,node){
        var start = rng.startContainer;
        if(start.nodeType == 3 && rng.startOffset != start.nodeValue.length){
            return 0;
        }
        if(start.nodeType == 1 && rng.startOffset != start.childNodes.length){
            return 0;
        }
        while(start !== node){
            if(start.nextSibling){
                return 0
            };
            start = start.parentNode;
        }
        return 1;
    }
};
var fillCharReg = new RegExp(domUtils.fillChar, 'g');
///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
/**
 * @file
 * @name UE.dom.Range
 * @anthor zhanyi
 * @short Range
 * @import editor.js,core/utils.js,core/browser.js,core/dom/domUtils.js,core/dom/dtd.js
 * @desc RangeèŒƒå›´å®žçŽ°ç±»ï¼Œæœ¬ç±»æ˜¯UEditoråº•å±‚æ ¸å¿ƒç±»ï¼Œç»Ÿä¸€w3cRangeå’ŒieRangeä¹‹é—´çš„å·®å¼‚ï¼ŒåŒ…æ‹¬æŽ¥å�£å’Œå±žæ€§
 */
(function () {
    var guid = 0,
        fillChar = domUtils.fillChar,
        fillData;

    /**
     * æ›´æ–°rangeçš„collapseçŠ¶æ€�
     * @param  {Range}   range    rangeå¯¹è±¡
     */
    function updateCollapse(range) {
        range.collapsed =
            range.startContainer && range.endContainer &&
                range.startContainer === range.endContainer &&
                range.startOffset == range.endOffset;
    }

    function selectOneNode(rng){
        return !rng.collapsed && rng.startContainer.nodeType == 1 && rng.startContainer === rng.endContainer && rng.endOffset - rng.startOffset == 1
    }
    function setEndPoint(toStart, node, offset, range) {
        //å¦‚æžœnodeæ˜¯è‡ªé—­å�ˆæ ‡ç­¾è¦�å¤„ç�†
        if (node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
            offset = domUtils.getNodeIndex(node) + (toStart ? 0 : 1);
            node = node.parentNode;
        }
        if (toStart) {
            range.startContainer = node;
            range.startOffset = offset;
            if (!range.endContainer) {
                range.collapse(true);
            }
        } else {
            range.endContainer = node;
            range.endOffset = offset;
            if (!range.startContainer) {
                range.collapse(false);
            }
        }
        updateCollapse(range);
        return range;
    }

    function execContentsAction(range, action) {
        //è°ƒæ•´è¾¹ç•Œ
        //range.includeBookmark();
        var start = range.startContainer,
            end = range.endContainer,
            startOffset = range.startOffset,
            endOffset = range.endOffset,
            doc = range.document,
            frag = doc.createDocumentFragment(),
            tmpStart, tmpEnd;
        if (start.nodeType == 1) {
            start = start.childNodes[startOffset] || (tmpStart = start.appendChild(doc.createTextNode('')));
        }
        if (end.nodeType == 1) {
            end = end.childNodes[endOffset] || (tmpEnd = end.appendChild(doc.createTextNode('')));
        }
        if (start === end && start.nodeType == 3) {
            frag.appendChild(doc.createTextNode(start.substringData(startOffset, endOffset - startOffset)));
            //is not clone
            if (action) {
                start.deleteData(startOffset, endOffset - startOffset);
                range.collapse(true);
            }
            return frag;
        }
        var current, currentLevel, clone = frag,
            startParents = domUtils.findParents(start, true), endParents = domUtils.findParents(end, true);
        for (var i = 0; startParents[i] == endParents[i];) {
            i++;
        }
        for (var j = i, si; si = startParents[j]; j++) {
            current = si.nextSibling;
            if (si == start) {
                if (!tmpStart) {
                    if (range.startContainer.nodeType == 3) {
                        clone.appendChild(doc.createTextNode(start.nodeValue.slice(startOffset)));
                        //is not clone
                        if (action) {
                            start.deleteData(startOffset, start.nodeValue.length - startOffset);
                        }
                    } else {
                        clone.appendChild(!action ? start.cloneNode(true) : start);
                    }
                }
            } else {
                currentLevel = si.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            while (current) {
                if (current === end || current === endParents[j]) {
                    break;
                }
                si = current.nextSibling;
                clone.appendChild(!action ? current.cloneNode(true) : current);
                current = si;
            }
            clone = currentLevel;
        }
        clone = frag;
        if (!startParents[i]) {
            clone.appendChild(startParents[i - 1].cloneNode(false));
            clone = clone.firstChild;
        }
        for (var j = i, ei; ei = endParents[j]; j++) {
            current = ei.previousSibling;
            if (ei == end) {
                if (!tmpEnd && range.endContainer.nodeType == 3) {
                    clone.appendChild(doc.createTextNode(end.substringData(0, endOffset)));
                    //is not clone
                    if (action) {
                        end.deleteData(0, endOffset);
                    }
                }
            } else {
                currentLevel = ei.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            //å¦‚æžœä¸¤ç«¯å�Œçº§ï¼Œå�³è¾¹ç¬¬ä¸€æ¬¡å·²ç»�è¢«å¼€å§‹å�šäº†
            if (j != i || !startParents[i]) {
                while (current) {
                    if (current === start) {
                        break;
                    }
                    ei = current.previousSibling;
                    clone.insertBefore(!action ? current.cloneNode(true) : current, clone.firstChild);
                    current = ei;
                }
            }
            clone = currentLevel;
        }
        if (action) {
            range.setStartBefore(!endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i]).collapse(true);
        }
        tmpStart && domUtils.remove(tmpStart);
        tmpEnd && domUtils.remove(tmpEnd);
        return frag;
    }

    /**
     * @name Range
     * @grammar new UE.dom.Range(document)  => Range å®žä¾‹
     * @desc åˆ›å»ºä¸€ä¸ªè·Ÿdocumentç»‘å®šçš„ç©ºçš„Rangeå®žä¾‹
     * - ***startContainer*** å¼€å§‹è¾¹ç•Œçš„å®¹å™¨èŠ‚ç‚¹,å�¯ä»¥æ˜¯elementNodeæˆ–è€…æ˜¯textNode
     * - ***startOffset*** å®¹å™¨èŠ‚ç‚¹ä¸­çš„å��ç§»é‡�ï¼Œå¦‚æžœæ˜¯elementNodeå°±æ˜¯childNodesä¸­çš„ç¬¬å‡ ä¸ªï¼Œå¦‚æžœæ˜¯textNodeå°±æ˜¯nodeValueçš„ç¬¬å‡ ä¸ªå­—ç¬¦
     * - ***endContainer*** ç»“æ�Ÿè¾¹ç•Œçš„å®¹å™¨èŠ‚ç‚¹,å�¯ä»¥æ˜¯elementNodeæˆ–è€…æ˜¯textNode
     * - ***endOffset*** å®¹å™¨èŠ‚ç‚¹ä¸­çš„å��ç§»é‡�ï¼Œå¦‚æžœæ˜¯elementNodeå°±æ˜¯childNodesä¸­çš„ç¬¬å‡ ä¸ªï¼Œå¦‚æžœæ˜¯textNodeå°±æ˜¯nodeValueçš„ç¬¬å‡ ä¸ªå­—ç¬¦
     * - ***document*** è·Ÿrangeå…³è�”çš„documentå¯¹è±¡
     * - ***collapsed*** æ˜¯å�¦æ˜¯é—­å�ˆçŠ¶æ€�
     */
    var Range = dom.Range = function (document) {
        var me = this;
        me.startContainer =
            me.startOffset =
                me.endContainer =
                    me.endOffset = null;
        me.document = document;
        me.collapsed = true;
    };

    /**
     * åˆ é™¤fillData
     * @param doc
     * @param excludeNode
     */
    function removeFillData(doc, excludeNode) {
        try {
            if (fillData && domUtils.inDoc(fillData, doc)) {
                if (!fillData.nodeValue.replace(fillCharReg, '').length) {
                    var tmpNode = fillData.parentNode;
                    domUtils.remove(fillData);
                    while (tmpNode && domUtils.isEmptyInlineElement(tmpNode) &&
                        //safariçš„containsæœ‰bug
                        (browser.safari ? !(domUtils.getPosition(tmpNode,excludeNode) & domUtils.POSITION_CONTAINS) : !tmpNode.contains(excludeNode))
                    ) {
                        fillData = tmpNode.parentNode;
                        domUtils.remove(tmpNode);
                        tmpNode = fillData;
                    }
                } else {
                    fillData.nodeValue = fillData.nodeValue.replace(fillCharReg, '');
                }
            }
        } catch (e) {
        }
    }

    /**
     *
     * @param node
     * @param dir
     */
    function mergeSibling(node, dir) {
        var tmpNode;
        node = node[dir];
        while (node && domUtils.isFillChar(node)) {
            tmpNode = node[dir];
            domUtils.remove(node);
            node = tmpNode;
        }
    }

    Range.prototype = {
        /**
         * @name cloneContents
         * @grammar range.cloneContents()  => DocumentFragment
         * @desc å…‹éš†é€‰ä¸­çš„å†…å®¹åˆ°ä¸€ä¸ªfragmenté‡Œï¼Œå¦‚æžœé€‰åŒºæ˜¯ç©ºçš„å°†è¿”å›žnull
         */
        cloneContents:function () {
            return this.collapsed ? null : execContentsAction(this, 0);
        },
        /**
         * @name deleteContents
         * @grammar range.deleteContents()  => Range
         * @desc åˆ é™¤å½“å‰�é€‰åŒºèŒƒå›´ä¸­çš„æ‰€æœ‰å†…å®¹å¹¶è¿”å›žrangeå®žä¾‹ï¼Œè¿™æ—¶çš„rangeå·²ç»�å�˜æˆ�äº†é—­å�ˆçŠ¶æ€�
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //æ‰§è¡Œæ–¹æ³•å�Ž
         * <b>x<i>x<i>|x</b>
         * æ³¨æ„�rangeæ”¹å�˜äº†
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        deleteContents:function () {
            var txt;
            if (!this.collapsed) {
                execContentsAction(this, 1);
            }
            if (browser.webkit) {
                txt = this.startContainer;
                if (txt.nodeType == 3 && !txt.nodeValue.length) {
                    this.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
            }
            return this;
        },
        /**
         * @name extractContents
         * @grammar range.extractContents()  => DocumentFragment
         * @desc å°†å½“å‰�çš„å†…å®¹æ”¾åˆ°ä¸€ä¸ªfragmenté‡Œå¹¶è¿”å›žè¿™ä¸ªfragmentï¼Œè¿™æ—¶çš„rangeå·²ç»�å�˜æˆ�äº†é—­å�ˆçŠ¶æ€�
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //æ‰§è¡Œæ–¹æ³•å�Ž
         * è¿”å›žçš„fragmenté‡Œçš„ domç»“æž„æ˜¯
         * <i>x<i>xx
         * domæ ‘ä¸Šçš„ç»“æž„æ˜¯
         * <b>x<i>x<i>|x</b>
         * æ³¨æ„�rangeæ”¹å�˜äº†
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        extractContents:function () {
            return this.collapsed ? null : execContentsAction(this, 2);
        },
        /**
         * @name  setStart
         * @grammar range.setStart(node,offset)  => Range
         * @desc    è®¾ç½®rangeçš„å¼€å§‹ä½�ç½®ä½�äºŽnodeèŠ‚ç‚¹å†…ï¼Œå��ç§»é‡�ä¸ºoffset
         * å¦‚æžœnodeæ˜¯elementNodeé‚£offsetæŒ‡çš„æ˜¯childNodesä¸­çš„ç¬¬å‡ ä¸ªï¼Œå¦‚æžœæ˜¯textNodeé‚£offsetæŒ‡çš„æ˜¯nodeValueçš„ç¬¬å‡ ä¸ªå­—ç¬¦
         */
        setStart:function (node, offset) {
            return setEndPoint(true, node, offset, this);
        },
        /**
         * è®¾ç½®rangeçš„ç»“æ�Ÿä½�ç½®ä½�äºŽnodeèŠ‚ç‚¹ï¼Œå��ç§»é‡�ä¸ºoffset
         * å¦‚æžœnodeæ˜¯elementNodeé‚£offsetæŒ‡çš„æ˜¯childNodesä¸­çš„ç¬¬å‡ ä¸ªï¼Œå¦‚æžœæ˜¯textNodeé‚£offsetæŒ‡çš„æ˜¯nodeValueçš„ç¬¬å‡ ä¸ªå­—ç¬¦
         * @name  setEnd
         * @grammar range.setEnd(node,offset)  => Range
         */
        setEnd:function (node, offset) {
            return setEndPoint(false, node, offset, this);
        },
        /**
         * å°†Rangeå¼€å§‹ä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹ä¹‹å�Ž
         * @name  setStartAfter
         * @grammar range.setStartAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * æ‰§è¡ŒsetStartAfter(i)å�Ž
         * range.startContainer =>b
         * range.startOffset =>2
         */
        setStartAfter:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * å°†Rangeå¼€å§‹ä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹ä¹‹å‰�
         * @name  setStartBefore
         * @grammar range.setStartBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * æ‰§è¡ŒsetStartBefore(i)å�Ž
         * range.startContainer =>b
         * range.startOffset =>1
         */
        setStartBefore:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * å°†Rangeç»“æ�Ÿä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹ä¹‹å�Ž
         * @name  setEndAfter
         * @grammar range.setEndAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * setEndAfter(i)å�Ž
         * range.endContainer =>b
         * range.endtOffset =>2
         */
        setEndAfter:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * å°†Rangeç»“æ�Ÿä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹ä¹‹å‰�
         * @name  setEndBefore
         * @grammar range.setEndBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * æ‰§è¡ŒsetEndBefore(i)å�Ž
         * range.endContainer =>b
         * range.endtOffset =>1
         */
        setEndBefore:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * å°†Rangeå¼€å§‹ä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹å†…çš„å¼€å§‹ä½�ç½®
         * @name  setStartAtFirst
         * @grammar range.setStartAtFirst(node)  => Range
         */
        setStartAtFirst:function (node) {
            return this.setStart(node, 0);
        },
        /**
         * å°†Rangeå¼€å§‹ä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹å†…çš„ç»“æ�Ÿä½�ç½®
         * @name  setStartAtLast
         * @grammar range.setStartAtLast(node)  => Range
         */
        setStartAtLast:function (node) {
            return this.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },
        /**
         * å°†Rangeç»“æ�Ÿä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹å†…çš„å¼€å§‹ä½�ç½®
         * @name  setEndAtFirst
         * @grammar range.setEndAtFirst(node)  => Range
         */
        setEndAtFirst:function (node) {
            return this.setEnd(node, 0);
        },
        /**
         * å°†Rangeç»“æ�Ÿä½�ç½®è®¾ç½®åˆ°nodeèŠ‚ç‚¹å†…çš„ç»“æ�Ÿä½�ç½®
         * @name  setEndAtLast
         * @grammar range.setEndAtLast(node)  => Range
         */
        setEndAtLast:function (node) {
            return this.setEnd(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },

        /**
         * é€‰ä¸­å®Œæ•´çš„æŒ‡å®šèŠ‚ç‚¹,å¹¶è¿”å›žåŒ…å�«è¯¥èŠ‚ç‚¹çš„range
         * @name  selectNode
         * @grammar range.selectNode(node)  => Range
         */
        selectNode:function (node) {
            return this.setStartBefore(node).setEndAfter(node);
        },
        /**
         * é€‰ä¸­nodeå†…éƒ¨çš„æ‰€æœ‰èŠ‚ç‚¹ï¼Œå¹¶è¿”å›žå¯¹åº”çš„range
         * @name selectNodeContents
         * @grammar range.selectNodeContents(node)  => Range
         * @example
         * <b>xx[x<i>xxx</i>]xxx</b>
         * æ‰§è¡Œå�Ž
         * <b>[xxx<i>xxx</i>xxx]</b>
         * range.startContainer =>b
         * range.startOffset =>0
         * range.endContainer =>b
         * range.endOffset =>3
         */
        selectNodeContents:function (node) {
            return this.setStart(node, 0).setEndAtLast(node);
        },

        /**
         * å…‹éš†ä¸€ä¸ªæ–°çš„rangeå¯¹è±¡
         * @name  cloneRange
         * @grammar range.cloneRange() => Range
         */
        cloneRange:function () {
            var me = this;
            return new Range(me.document).setStart(me.startContainer, me.startOffset).setEnd(me.endContainer, me.endOffset);

        },

        /**
         * è®©é€‰åŒºé—­å�ˆåˆ°å°¾éƒ¨ï¼Œè‹¥toStartä¸ºçœŸï¼Œåˆ™é—­å�ˆåˆ°å¤´éƒ¨
         * @name  collapse
         * @grammar range.collapse() => Range
         * @grammar range.collapse(true) => Range   //é—­å�ˆé€‰åŒºåˆ°å¤´éƒ¨
         */
        collapse:function (toStart) {
            var me = this;
            if (toStart) {
                me.endContainer = me.startContainer;
                me.endOffset = me.startOffset;
            } else {
                me.startContainer = me.endContainer;
                me.startOffset = me.endOffset;
            }
            me.collapsed = true;
            return me;
        },

        /**
         * è°ƒæ•´rangeçš„è¾¹ç•Œï¼Œä½¿å…¶"æ”¶ç¼©"åˆ°æœ€å°�çš„ä½�ç½®
         * @name  shrinkBoundary
         * @grammar range.shrinkBoundary()  => Range  //rangeå¼€å§‹ä½�ç½®å’Œç»“æ�Ÿä½�ç½®éƒ½è°ƒæ•´ï¼Œå�‚è§�<code><a href="#adjustmentboundary">adjustmentBoundary</a></code>
         * @grammar range.shrinkBoundary(true)  => Range  //ä»…è°ƒæ•´å¼€å§‹ä½�ç½®ï¼Œå¿½ç•¥ç»“æ�Ÿä½�ç½®
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx]</b><i>xxx</i>
         * [<b><i>xxxx</i>xxxxxxx</b>] ==> <b><i>[xxxx</i>xxxxxxx]</b>
         */
        shrinkBoundary:function (ignoreEnd) {
            var me = this, child,
                collapsed = me.collapsed;
            function check(node){
                return node.nodeType == 1 && !domUtils.isBookmarkNode(node) && !dtd.$empty[node.tagName] && !dtd.$nonChild[node.tagName]
            }
            while (me.startContainer.nodeType == 1 //æ˜¯element
                && (child = me.startContainer.childNodes[me.startOffset]) //å­�èŠ‚ç‚¹ä¹Ÿæ˜¯element
                && check(child)) {
                me.setStart(child, 0);
            }
            if (collapsed) {
                return me.collapse(true);
            }
            if (!ignoreEnd) {
                while (me.endContainer.nodeType == 1//æ˜¯element
                    && me.endOffset > 0 //å¦‚æžœæ˜¯ç©ºå…ƒç´ å°±é€€å‡º endOffset=0é‚£ä¹ˆendOffst-1ä¸ºè´Ÿå€¼ï¼ŒchildNodes[endOffset]æŠ¥é”™
                    && (child = me.endContainer.childNodes[me.endOffset - 1]) //å­�èŠ‚ç‚¹ä¹Ÿæ˜¯element
                    && check(child)) {
                    me.setEnd(child, child.childNodes.length);
                }
            }
            return me;
        },
        /**
         * èŽ·å�–å½“å‰�rangeæ‰€åœ¨ä½�ç½®çš„å…¬å…±ç¥–å…ˆèŠ‚ç‚¹ï¼Œå½“å‰�rangeä½�ç½®å�¯ä»¥ä½�äºŽæ–‡æœ¬èŠ‚ç‚¹å†…ï¼Œä¹Ÿå�¯ä»¥åŒ…å�«æ•´ä¸ªå…ƒç´ èŠ‚ç‚¹ï¼Œä¹Ÿå�¯ä»¥ä½�äºŽä¸¤ä¸ªèŠ‚ç‚¹ä¹‹é—´
         * @name  getCommonAncestor
         * @grammar range.getCommonAncestor([includeSelf, ignoreTextNode])  => Element
         * @example
         * <b>xx[xx<i>xx]x</i>xxx</b> ==>getCommonAncestor() ==> b
         * <b>[<img/>]</b>
         * range.startContainer ==> b
         * range.startOffset ==> 0
         * range.endContainer ==> b
         * range.endOffset ==> 1
         * range.getCommonAncestor() ==> b
         * range.getCommonAncestor(true) ==> img
         * <b>xxx|xx</b>
         * range.startContainer ==> textNode
         * range.startOffset ==> 3
         * range.endContainer ==> textNode
         * range.endOffset ==> 3
         * range.getCommonAncestor() ==> textNode
         * range.getCommonAncestor(null,true) ==> b
         */
        getCommonAncestor:function (includeSelf, ignoreTextNode) {
            var me = this,
                start = me.startContainer,
                end = me.endContainer;
            if (start === end) {
                if (includeSelf && selectOneNode(this)) {
                    start = start.childNodes[me.startOffset];
                    if(start.nodeType == 1)
                        return start;
                }
                //å�ªæœ‰åœ¨ä¸Šæ�¥å°±ç›¸ç­‰çš„æƒ…å†µä¸‹æ‰�ä¼šå‡ºçŽ°æ˜¯æ–‡æœ¬çš„æƒ…å†µ
                return ignoreTextNode && start.nodeType == 3 ? start.parentNode : start;
            }
            return domUtils.getCommonAncestor(start, end);
        },
        /**
         * è°ƒæ•´è¾¹ç•Œå®¹å™¨ï¼Œå¦‚æžœæ˜¯textNode,å°±è°ƒæ•´åˆ°elementNodeä¸Š
         * @name trimBoundary
         * @grammar range.trimBoundary([ignoreEnd])  => Range //trueå¿½ç•¥ç»“æ�Ÿè¾¹ç•Œ
         * @example
         * DOM Element :
         * <b>|xxx</b>
         * startContainer = xxx; startOffset = 0
         * //æ‰§è¡Œå�Žæœ¬æ–¹æ³•å�Ž
         * startContainer = <b>;  startOffset = 0
         * @example
         * Dom Element :
         * <b>xx|x</b>
         * startContainer = xxx;  startOffset = 2
         * //æ‰§è¡Œæœ¬æ–¹æ³•å�Žï¼Œxxxè¢«å®žå®žåœ¨åœ¨åœ°åˆ‡åˆ†æˆ�ä¸¤ä¸ªTextNode
         * startContainer = <b>; startOffset = 1
         */
        trimBoundary:function (ignoreEnd) {
            this.txtToElmBoundary();
            var start = this.startContainer,
                offset = this.startOffset,
                collapsed = this.collapsed,
                end = this.endContainer;
            if (start.nodeType == 3) {
                if (offset == 0) {
                    this.setStartBefore(start);
                } else {
                    if (offset >= start.nodeValue.length) {
                        this.setStartAfter(start);
                    } else {
                        var textNode = domUtils.split(start, offset);
                        //è·Ÿæ–°ç»“æ�Ÿè¾¹ç•Œ
                        if (start === end) {
                            this.setEnd(textNode, this.endOffset - offset);
                        } else if (start.parentNode === end) {
                            this.endOffset += 1;
                        }
                        this.setStartBefore(textNode);
                    }
                }
                if (collapsed) {
                    return this.collapse(true);
                }
            }
            if (!ignoreEnd) {
                offset = this.endOffset;
                end = this.endContainer;
                if (end.nodeType == 3) {
                    if (offset == 0) {
                        this.setEndBefore(end);
                    } else {
                        offset < end.nodeValue.length && domUtils.split(end, offset);
                        this.setEndAfter(end);
                    }
                }
            }
            return this;
        },
        /**
         * å¦‚æžœé€‰åŒºåœ¨æ–‡æœ¬çš„è¾¹ç•Œä¸Šï¼Œå°±æ‰©å±•é€‰åŒºåˆ°æ–‡æœ¬çš„çˆ¶èŠ‚ç‚¹ä¸Š
         * @name  txtToElmBoundary
         * @example
         * Dom Element :
         * <b> |xxx</b>
         * startContainer = xxx;  startOffset = 0
         * //æœ¬æ–¹æ³•æ‰§è¡Œå�Ž
         * startContainer = <b>; startOffset = 0
         * @example
         * Dom Element :
         * <b> xxx| </b>
         * startContainer = xxx; startOffset = 3
         * //æœ¬æ–¹æ³•æ‰§è¡Œå�Ž
         * startContainer = <b>; startOffset = 1
         */
        txtToElmBoundary:function () {
            function adjust(r, c) {
                var container = r[c + 'Container'],
                    offset = r[c + 'Offset'];
                if (container.nodeType == 3) {
                    if (!offset) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'Before'](container);
                    } else if (offset >= container.nodeValue.length) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'After' ](container);
                    }
                }
            }

            if (!this.collapsed) {
                adjust(this, 'start');
                adjust(this, 'end');
            }
            return this;
        },

        /**
         * åœ¨å½“å‰�é€‰åŒºçš„å¼€å§‹ä½�ç½®å‰�æ�’å…¥ä¸€ä¸ªèŠ‚ç‚¹æˆ–è€…fragmentï¼Œrangeçš„å¼€å§‹ä½�ç½®ä¼šåœ¨æ�’å…¥èŠ‚ç‚¹çš„å‰�è¾¹
         * @name  insertNode
         * @grammar range.insertNode(node)  => Range //nodeå�¯ä»¥æ˜¯textNode,elementNode,fragment
         * @example
         * Range :
         * xxx[x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         * å¾…æ�’å…¥Node :
         * <p>ssss</p>
         * æ‰§è¡Œæœ¬æ–¹æ³•å�Žçš„Range :
         * xxx[<p>ssss</p>x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         */
        insertNode:function (node) {
            var first = node, length = 1;
            if (node.nodeType == 11) {
                first = node.firstChild;
                length = node.childNodes.length;
            }
            this.trimBoundary(true);
            var start = this.startContainer,
                offset = this.startOffset;
            var nextNode = start.childNodes[ offset ];
            if (nextNode) {
                start.insertBefore(node, nextNode);
            } else {
                start.appendChild(node);
            }
            if (first.parentNode === this.endContainer) {
                this.endOffset = this.endOffset + length;
            }
            return this.setStartBefore(first);
        },
        /**
         * è®¾ç½®å…‰æ ‡é—­å�ˆä½�ç½®,toEndè®¾ç½®ä¸ºtrueæ—¶å…‰æ ‡å°†é—­å�ˆåˆ°é€‰åŒºçš„ç»“å°¾
         * @name  setCursor
         * @grammar range.setCursor([toEnd])  =>  Range   //toEndä¸ºtrueæ—¶ï¼Œå…‰æ ‡é—­å�ˆåˆ°é€‰åŒºçš„æœ«å°¾
         */
        setCursor:function (toEnd, noFillData) {
            return this.collapse(!toEnd).select(noFillData);
        },
        /**
         * åˆ›å»ºå½“å‰�rangeçš„ä¸€ä¸ªä¹¦ç­¾ï¼Œè®°å½•ä¸‹å½“å‰�rangeçš„ä½�ç½®ï¼Œæ–¹ä¾¿å½“domæ ‘æ”¹å�˜æ—¶ï¼Œè¿˜èƒ½æ‰¾å›žåŽŸæ�¥çš„é€‰åŒºä½�ç½®
         * @name createBookmark
         * @grammar range.createBookmark([serialize])  => Object  //{start:å¼€å§‹æ ‡è®°,end:ç»“æ�Ÿæ ‡è®°,id:serialize} serializeä¸ºçœŸæ—¶ï¼Œå¼€å§‹ç»“æ�Ÿæ ‡è®°æ˜¯æ�’å…¥èŠ‚ç‚¹çš„idï¼Œå�¦åˆ™æ˜¯æ�’å…¥èŠ‚ç‚¹çš„å¼•ç”¨
         */
        createBookmark:function (serialize, same) {
            var endNode,
                startNode = this.document.createElement('span');
            startNode.style.cssText = 'display:none;line-height:0px;';
            startNode.appendChild(this.document.createTextNode('\uFEFF'));
            startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

            if (!this.collapsed) {
                endNode = startNode.cloneNode(true);
                endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
            }
            this.insertNode(startNode);
            if (endNode) {
                this.collapse().insertNode(endNode).setEndBefore(endNode);
            }
            this.setStartAfter(startNode);
            return {
                start:serialize ? startNode.id : startNode,
                end:endNode ? serialize ? endNode.id : endNode : null,
                id:serialize
            }
        },
        /**
         *  ç§»åŠ¨è¾¹ç•Œåˆ°ä¹¦ç­¾ä½�ç½®ï¼Œå¹¶åˆ é™¤æ�’å…¥çš„ä¹¦ç­¾èŠ‚ç‚¹
         *  @name  moveToBookmark
         *  @grammar range.moveToBookmark(bookmark)  => Range //è®©å½“å‰�çš„rangeé€‰åˆ°ç»™å®šbookmarkçš„ä½�ç½®,bookmarkå¯¹è±¡æ˜¯ç”±range.createBookmarkåˆ›å»ºçš„
         */
        moveToBookmark:function (bookmark) {
            var start = bookmark.id ? this.document.getElementById(bookmark.start) : bookmark.start,
                end = bookmark.end && bookmark.id ? this.document.getElementById(bookmark.end) : bookmark.end;
            this.setStartBefore(start);
            domUtils.remove(start);
            if (end) {
                this.setEndBefore(end);
                domUtils.remove(end);
            } else {
                this.collapse(true);
            }
            return this;
        },
        /**
         * è°ƒæ•´rangeçš„è¾¹ç•Œï¼Œä½¿å…¶"æ”¾å¤§"åˆ°æœ€è¿‘çš„çˆ¶blockèŠ‚ç‚¹
         * @name  enlarge
         * @grammar range.enlarge()  =>  Range
         * @example
         * <p><span>xxx</span><b>x[x</b>xxxxx]</p><p>xxx</p> ==> [<p><span>xxx</span><b>xx</b>xxxxx</p>]<p>xxx</p>
         */
        enlarge:function (toBlock, stopFn) {
            var isBody = domUtils.isBody,
                pre, node, tmp = this.document.createTextNode('');
            if (toBlock) {
                node = this.startContainer;
                if (node.nodeType == 1) {
                    if (node.childNodes[this.startOffset]) {
                        pre = node = node.childNodes[this.startOffset]
                    } else {
                        node.appendChild(tmp);
                        pre = node = tmp;
                    }
                } else {
                    pre = node;
                }
                while (1) {
                    if (domUtils.isBlockElm(node)) {
                        node = pre;
                        while ((pre = node.previousSibling) && !domUtils.isBlockElm(pre)) {
                            node = pre;
                        }
                        this.setStartBefore(node);
                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                node = this.endContainer;
                if (node.nodeType == 1) {
                    if (pre = node.childNodes[this.endOffset]) {
                        node.insertBefore(tmp, pre);
                    } else {
                        node.appendChild(tmp);
                    }
                    pre = node = tmp;
                } else {
                    pre = node;
                }
                while (1) {
                    if (domUtils.isBlockElm(node)) {
                        node = pre;
                        while ((pre = node.nextSibling) && !domUtils.isBlockElm(pre)) {
                            node = pre;
                        }
                        this.setEndAfter(node);
                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                if (tmp.parentNode === this.endContainer) {
                    this.endOffset--;
                }
                domUtils.remove(tmp);
            }

            // æ‰©å±•è¾¹ç•Œåˆ°æœ€å¤§
            if (!this.collapsed) {
                while (this.startOffset == 0) {
                    if (stopFn && stopFn(this.startContainer)) {
                        break;
                    }
                    if (isBody(this.startContainer)) {
                        break;
                    }
                    this.setStartBefore(this.startContainer);
                }
                while (this.endOffset == (this.endContainer.nodeType == 1 ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length)) {
                    if (stopFn && stopFn(this.endContainer)) {
                        break;
                    }
                    if (isBody(this.endContainer)) {
                        break;
                    }
                    this.setEndAfter(this.endContainer);
                }
            }
            return this;
        },
        /**
         * è°ƒæ•´Rangeçš„è¾¹ç•Œï¼Œä½¿å…¶"ç¼©å°�"åˆ°æœ€å�ˆé€‚çš„ä½�ç½®
         * @name adjustmentBoundary
         * @grammar range.adjustmentBoundary() => Range   //å�‚è§�<code><a href="#shrinkboundary">shrinkBoundary</a></code>
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx</b>]<i>xxx</i>
         */
        adjustmentBoundary:function () {
            if (!this.collapsed) {
                while (!domUtils.isBody(this.startContainer) &&
                    this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                    ) {
                    this.setStartAfter(this.startContainer);
                }
                while (!domUtils.isBody(this.endContainer) && !this.endOffset) {
                    this.setEndBefore(this.endContainer);
                }
            }
            return this;
        },
        /**
         * ç»™rangeé€‰åŒºä¸­çš„å†…å®¹æ·»åŠ ç»™å®šçš„æ ‡ç­¾ï¼Œä¸»è¦�ç”¨äºŽinlineæ ‡ç­¾
         * @name applyInlineStyle
         * @grammar range.applyInlineStyle(tagName)        =>  Range    //tagNameä¸ºéœ€è¦�æ·»åŠ çš„æ ·å¼�æ ‡ç­¾å��
         * @grammar range.applyInlineStyle(tagName,attrs)  =>  Range    //attrsä¸ºå±žæ€§jsonå¯¹è±¡
         * @desc
         * <code type="html"><p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xxxx[<strong>xxxx</strong>]x</p>
         * <p>xx[dd<strong>yyyy</strong>]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xx[<strong>ddyyyy</strong>]x</p>
         * <p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong",{"style":"font-size:12px"})  ==>  <p>xxxx[<strong style="font-size:12px">xxxx</strong>]x</p></code>
         */
        applyInlineStyle:function (tagName, attrs, list) {
            if (this.collapsed)return this;
            this.trimBoundary().enlarge(false,
                function (node) {
                    return node.nodeType == 1 && domUtils.isBlockElm(node)
                }).adjustmentBoundary();
            var bookmark = this.createBookmark(),
                end = bookmark.end,
                filterFn = function (node) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace(node);
                },
                current = domUtils.getNextDomNode(bookmark.start, false, filterFn),
                node,
                pre,
                range = this.cloneRange();
            while (current && (domUtils.getPosition(current, end) & domUtils.POSITION_PRECEDING)) {
                if (current.nodeType == 3 || dtd[tagName][current.tagName]) {
                    range.setStartBefore(current);
                    node = current;
                    while (node && (node.nodeType == 3 || dtd[tagName][node.tagName]) && node !== end) {
                        pre = node;
                        node = domUtils.getNextDomNode(node, node.nodeType == 1, null, function (parent) {
                            return dtd[tagName][parent.tagName];
                        });
                    }
                    var frag = range.setEndAfter(pre).extractContents(), elm;
                    if (list && list.length > 0) {
                        var level, top;
                        top = level = list[0].cloneNode(false);
                        for (var i = 1, ci; ci = list[i++];) {
                            level.appendChild(ci.cloneNode(false));
                            level = level.firstChild;
                        }
                        elm = level;
                    } else {
                        elm = range.document.createElement(tagName);
                    }
                    if (attrs) {
                        domUtils.setAttributes(elm, attrs);
                    }
                    elm.appendChild(frag);
                    range.insertNode(list ? top : elm);
                    //å¤„ç�†ä¸‹æ»‘çº¿åœ¨aä¸Šçš„æƒ…å†µ
                    var aNode;
                    if (tagName == 'span' && attrs.style && /text\-decoration/.test(attrs.style) && (aNode = domUtils.findParentByTagName(elm, 'a', true))) {
                        domUtils.setAttributes(aNode, attrs);
                        domUtils.remove(elm, true);
                        elm = aNode;
                    } else {
                        domUtils.mergeSibling(elm);
                        domUtils.clearEmptySibling(elm);
                    }
                    //åŽ»é™¤å­�èŠ‚ç‚¹ç›¸å�Œçš„
                    domUtils.mergeChild(elm, attrs);
                    current = domUtils.getNextDomNode(elm, false, filterFn);
                    domUtils.mergeToParent(elm);
                    if (node === end) {
                        break;
                    }
                } else {
                    current = domUtils.getNextDomNode(current, true, filterFn);
                }
            }
            return this.moveToBookmark(bookmark);
        },
        /**
         * å¯¹å½“å‰�rangeé€‰ä¸­çš„èŠ‚ç‚¹ï¼ŒåŽ»æŽ‰ç»™å®šçš„æ ‡ç­¾èŠ‚ç‚¹ï¼Œä½†æ ‡ç­¾ä¸­çš„å†…å®¹ä¿�ç•™ï¼Œä¸»è¦�ç”¨äºŽå¤„ç�†inlineå…ƒç´ 
         * @name removeInlineStyle
         * @grammar range.removeInlineStyle(tagNames)  => Range  //tagNames ä¸ºéœ€è¦�åŽ»æŽ‰çš„æ ·å¼�æ ‡ç­¾å��,æ”¯æŒ�"b"æˆ–è€…["b","i","u"]
         * @desc
         * <code type="html">xx[x<span>xxx<em>yyy</em>zz]z</span>  => range.removeInlineStyle(["em"])  => xx[x<span>xxxyyyzz]z</span></code>
         */
        removeInlineStyle:function (tagNames) {
            if (this.collapsed)return this;
            tagNames = utils.isArray(tagNames) ? tagNames : [tagNames];
            this.shrinkBoundary().adjustmentBoundary();
            var start = this.startContainer, end = this.endContainer;
            while (1) {
                if (start.nodeType == 1) {
                    if (utils.indexOf(tagNames, start.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    if (start.tagName.toLowerCase() == 'body') {
                        start = null;
                        break;
                    }
                }
                start = start.parentNode;
            }
            while (1) {
                if (end.nodeType == 1) {
                    if (utils.indexOf(tagNames, end.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    if (end.tagName.toLowerCase() == 'body') {
                        end = null;
                        break;
                    }
                }
                end = end.parentNode;
            }
            var bookmark = this.createBookmark(),
                frag,
                tmpRange;
            if (start) {
                tmpRange = this.cloneRange().setEndBefore(bookmark.start).setStartBefore(start);
                frag = tmpRange.extractContents();
                tmpRange.insertNode(frag);
                domUtils.clearEmptySibling(start, true);
                start.parentNode.insertBefore(bookmark.start, start);
            }
            if (end) {
                tmpRange = this.cloneRange().setStartAfter(bookmark.end).setEndAfter(end);
                frag = tmpRange.extractContents();
                tmpRange.insertNode(frag);
                domUtils.clearEmptySibling(end, false, true);
                end.parentNode.insertBefore(bookmark.end, end.nextSibling);
            }
            var current = domUtils.getNextDomNode(bookmark.start, false, function (node) {
                return node.nodeType == 1;
            }), next;
            while (current && current !== bookmark.end) {
                next = domUtils.getNextDomNode(current, true, function (node) {
                    return node.nodeType == 1;
                });
                if (utils.indexOf(tagNames, current.tagName.toLowerCase()) > -1) {
                    domUtils.remove(current, true);
                }
                current = next;
            }
            return this.moveToBookmark(bookmark);
        },
        /**
         * å¾—åˆ°ä¸€ä¸ªè‡ªé—­å�ˆçš„èŠ‚ç‚¹,å¸¸ç”¨äºŽèŽ·å�–è‡ªé—­å’Œçš„èŠ‚ç‚¹ï¼Œä¾‹å¦‚å›¾ç‰‡èŠ‚ç‚¹
         * @name  getClosedNode
         * @grammar range.getClosedNode()  => node|null
         * @example
         * <b>xxxx[<img />]xxx</b>
         */
        getClosedNode:function () {
            var node;
            if (!this.collapsed) {
                var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                if (selectOneNode(range)) {
                    var child = range.startContainer.childNodes[range.startOffset];
                    if (child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
                        node = child;
                    }
                }
            }
            return node;
        },
        /**
         * æ ¹æ�®å½“å‰�rangeé€‰ä¸­å†…å®¹èŠ‚ç‚¹ï¼ˆåœ¨é¡µé�¢ä¸Šè¡¨çŽ°ä¸ºå��ç™½æ˜¾ç¤ºï¼‰
         * @name select
         * @grammar range.select();  => Range
         */
        select:browser.ie ? function (noFillData, textRange) {
            var nativeRange;
            if (!this.collapsed)
                this.shrinkBoundary();
            var node = this.getClosedNode();
            if (node && !textRange) {
                try {
                    nativeRange = this.document.body.createControlRange();
                    nativeRange.addElement(node);
                    nativeRange.select();
                } catch (e) {}
                return this;
            }
            var bookmark = this.createBookmark(),
                start = bookmark.start,
                end;
            nativeRange = this.document.body.createTextRange();
            nativeRange.moveToElementText(start);
            nativeRange.moveStart('character', 1);
            if (!this.collapsed) {
                var nativeRangeEnd = this.document.body.createTextRange();
                end = bookmark.end;
                nativeRangeEnd.moveToElementText(end);
                nativeRange.setEndPoint('EndToEnd', nativeRangeEnd);
            } else {
                if (!noFillData && this.startContainer.nodeType != 3) {
                    //ä½¿ç”¨<span>|x<span>å›ºå®šä½�å…‰æ ‡
                    var tmpText = this.document.createTextNode(fillChar),
                        tmp = this.document.createElement('span');
                    tmp.appendChild(this.document.createTextNode(fillChar));
                    start.parentNode.insertBefore(tmp, start);
                    start.parentNode.insertBefore(tmpText, start);
                    //å½“ç‚¹b,i,uæ—¶ï¼Œä¸�èƒ½æ¸…é™¤iä¸Šè¾¹çš„b
                    removeFillData(this.document, tmpText);
                    fillData = tmpText;
                    mergeSibling(tmp, 'previousSibling');
                    mergeSibling(start, 'nextSibling');
                    nativeRange.moveStart('character', -1);
                    nativeRange.collapse(true);
                }
            }
            this.moveToBookmark(bookmark);
            tmp && domUtils.remove(tmp);
            //IEåœ¨éš�è—�çŠ¶æ€�ä¸‹ä¸�æ”¯æŒ�rangeæ“�ä½œï¼Œcatchä¸€ä¸‹
            try {
                nativeRange.select();
            } catch (e) {
            }
            return this;
        } : function (notInsertFillData) {
            var win = domUtils.getWindow(this.document),
                sel = win.getSelection(),
                txtNode;
            //FFä¸‹å…³é—­è‡ªåŠ¨é•¿é«˜æ—¶æ»šåŠ¨æ�¡åœ¨å…³é—­dialogæ—¶ä¼šè·³
            //ffä¸‹å¦‚æžœä¸�body.focuså°†ä¸�èƒ½å®šä½�é—­å�ˆå…‰æ ‡åˆ°ç¼–è¾‘å™¨å†…
            browser.gecko ? this.document.body.focus() : win.focus();
            if (sel) {
                sel.removeAllRanges();
                // trace:870 chrome/safariå�Žè¾¹æ˜¯brå¯¹äºŽé—­å�ˆå¾—rangeä¸�èƒ½å®šä½� æ‰€ä»¥åŽ»æŽ‰äº†åˆ¤æ–­
                // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
                if (this.collapsed) {
                    //opearå¦‚æžœæ²¡æœ‰èŠ‚ç‚¹æŽ¥ç�€ï¼ŒåŽŸç”Ÿçš„ä¸�èƒ½å¤Ÿå®šä½�,ä¸�èƒ½åœ¨bodyçš„ç¬¬ä¸€çº§æ�’å…¥ç©ºç™½èŠ‚ç‚¹
                    if (notInsertFillData && browser.opera && !domUtils.isBody(this.startContainer) && this.startContainer.nodeType == 1) {
                        var tmp = this.document.createTextNode('');
                        this.insertNode(tmp).setStart(tmp, 0).collapse(true);
                    }

                    //å¤„ç�†å…‰æ ‡è�½åœ¨æ–‡æœ¬èŠ‚ç‚¹çš„æƒ…å†µ
                    //å¤„ç�†ä»¥ä¸‹çš„æƒ…å†µ
                    //<b>|xxxx</b>
                    //<b>xxxx</b>|xxxx
                    //xxxx<b>|</b>
                    if (!notInsertFillData && (
                        this.startContainer.nodeType != 3 ||
                            this.startOffset == 0 && (!this.startContainer.previousSibling || this.startContainer.previousSibling.nodeType !=3)
                        )) {
                        txtNode = this.document.createTextNode(fillChar);
                        //è·Ÿç�€å‰�è¾¹èµ°
                        this.insertNode(txtNode);
                        removeFillData(this.document, txtNode);
                        mergeSibling(txtNode, 'previousSibling');
                        mergeSibling(txtNode, 'nextSibling');
                        fillData = txtNode;
                        this.setStart(txtNode, browser.webkit ? 1 : 0).collapse(true);
                    }
                }
                var nativeRange = this.document.createRange();
                nativeRange.setStart(this.startContainer, this.startOffset);
                nativeRange.setEnd(this.endContainer, this.endOffset);
                sel.addRange(nativeRange);
            }
            return this;
        },
        /**
         * æ»šåŠ¨æ�¡è·³åˆ°å½“ç„¶rangeå¼€å§‹çš„ä½�ç½®
         * @name scrollToView
         * @grammar range.scrollToView([win,offset]) => Range //é’ˆå¯¹windowå¯¹è±¡ï¼Œè‹¥ä¸�æŒ‡å®šï¼Œå°†ä»¥ç¼–è¾‘åŒºåŸŸçš„çª—å�£ä¸ºå‡†,offsetå��ç§»é‡�
         */
        scrollToView:function (win, offset) {
            win = win ? window : domUtils.getWindow(this.document);
            var me = this,
                span = me.document.createElement('span');
            //trace:717
            span.innerHTML = '&nbsp;';
            me.cloneRange().insertNode(span);
            domUtils.scrollToView(span, win, offset);
            domUtils.remove(span);
            return me;
        }
    };
})();
///import editor.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
///import core/dom/Range.js
/**
 * @class baidu.editor.dom.Selection    Selectionç±»
 */
(function () {

    function getBoundaryInformation( range, start ) {
        var getIndex = domUtils.getNodeIndex;
        range = range.duplicate();
        range.collapse( start );
        var parent = range.parentElement();
        //å¦‚æžœèŠ‚ç‚¹é‡Œæ²¡æœ‰å­�èŠ‚ç‚¹ï¼Œç›´æŽ¥é€€å‡º
        if ( !parent.hasChildNodes() ) {
            return  {container:parent, offset:0};
        }
        var siblings = parent.children,
                child,
                testRange = range.duplicate(),
                startIndex = 0, endIndex = siblings.length - 1, index = -1,
                distance;
        while ( startIndex <= endIndex ) {
            index = Math.floor( (startIndex + endIndex) / 2 );
            child = siblings[index];
            testRange.moveToElementText( child );
            var position = testRange.compareEndPoints( 'StartToStart', range );
            if ( position > 0 ) {
                endIndex = index - 1;
            } else if ( position < 0 ) {
                startIndex = index + 1;
            } else {
                //trace:1043
                return  {container:parent, offset:getIndex( child )};
            }
        }
        if ( index == -1 ) {
            testRange.moveToElementText( parent );
            testRange.setEndPoint( 'StartToStart', range );
            distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
            siblings = parent.childNodes;
            if ( !distance ) {
                child = siblings[siblings.length - 1];
                return  {container:child, offset:child.nodeValue.length};
            }

            var i = siblings.length;
            while ( distance > 0 ){
                distance -= siblings[ --i ].nodeValue.length;
            }
            return {container:siblings[i], offset:-distance};
        }
        testRange.collapse( position > 0 );
        testRange.setEndPoint( position > 0 ? 'StartToStart' : 'EndToStart', range );
        distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
        if ( !distance ) {
            return  dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName] ?
                {container:parent, offset:getIndex( child ) + (position > 0 ? 0 : 1)} :
                {container:child, offset:position > 0 ? 0 : child.childNodes.length}
        }
        while ( distance > 0 ) {
            try {
                var pre = child;
                child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
                distance -= child.nodeValue.length;
            } catch ( e ) {
                return {container:parent, offset:getIndex( pre )};
            }
        }
        return  {container:child, offset:position > 0 ? -distance : child.nodeValue.length + distance}
    }

    /**
     * å°†ieRangeè½¬æ�¢ä¸ºRangeå¯¹è±¡
     * @param {Range}   ieRange    ieRangeå¯¹è±¡
     * @param {Range}   range      Rangeå¯¹è±¡
     * @return  {Range}  range       è¿”å›žè½¬æ�¢å�Žçš„Rangeå¯¹è±¡
     */
    function transformIERangeToRange( ieRange, range ) {
        if ( ieRange.item ) {
            range.selectNode( ieRange.item( 0 ) );
        } else {
            var bi = getBoundaryInformation( ieRange, true );
            range.setStart( bi.container, bi.offset );
            if ( ieRange.compareEndPoints( 'StartToEnd', ieRange ) != 0 ) {
                bi = getBoundaryInformation( ieRange, false );
                range.setEnd( bi.container, bi.offset );
            }
        }
        return range;
    }

    /**
     * èŽ·å¾—ieRange
     * @param {Selection} sel    Selectionå¯¹è±¡
     * @return {ieRange}    å¾—åˆ°ieRange
     */
    function _getIERange( sel ) {
        var ieRange;
        //ieä¸‹æœ‰å�¯èƒ½æŠ¥é”™
        try {
            ieRange = sel.getNative().createRange();
        } catch ( e ) {
            return null;
        }
        var el = ieRange.item ? ieRange.item( 0 ) : ieRange.parentElement();
        if ( ( el.ownerDocument || el ) === sel.document ) {
            return ieRange;
        }
        return null;
    }

    var Selection = dom.Selection = function ( doc ) {
        var me = this, iframe;
        me.document = doc;
        if ( ie ) {
            iframe = domUtils.getWindow( doc ).frameElement;
            domUtils.on( iframe, 'beforedeactivate', function () {
                me._bakIERange = me.getIERange();
            } );
            domUtils.on( iframe, 'activate', function () {
                try {
                    if ( !_getIERange( me ) && me._bakIERange ) {
                        me._bakIERange.select();
                    }
                } catch ( ex ) {
                }
                me._bakIERange = null;
            } );
        }
        iframe = doc = null;
    };

    Selection.prototype = {
        /**
         * èŽ·å�–åŽŸç”Ÿselecitonå¯¹è±¡
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getNative
         * @return {Selection}    èŽ·å¾—selectionå¯¹è±¡
         */
        getNative:function () {
            var doc = this.document;
            try {
                return !doc ? null : ie ? doc.selection : domUtils.getWindow( doc ).getSelection();
            } catch ( e ) {
                return null;
            }
        },
        /**
         * èŽ·å¾—ieRange
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getIERange
         * @return {ieRange}    è¿”å›žieåŽŸç”Ÿçš„Range
         */
        getIERange:function () {
            var ieRange = _getIERange( this );
            if ( !ieRange ) {
                if ( this._bakIERange ) {
                    return this._bakIERange;
                }
            }
            return ieRange;
        },

        /**
         * ç¼“å­˜å½“å‰�é€‰åŒºçš„rangeå’Œé€‰åŒºçš„å¼€å§‹èŠ‚ç‚¹
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.cache
         */
        cache:function () {
            this.clear();
            this._cachedRange = this.getRange();
            this._cachedStartElement = this.getStart();
            this._cachedStartElementPath = this.getStartElementPath();
        },

        getStartElementPath:function () {
            if ( this._cachedStartElementPath ) {
                return this._cachedStartElementPath;
            }
            var start = this.getStart();
            if ( start ) {
                return domUtils.findParents( start, true, null, true )
            }
            return [];
        },
        /**
         * æ¸…ç©ºç¼“å­˜
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.clear
         */
        clear:function () {
            this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
        },
        /**
         * ç¼–è¾‘å™¨æ˜¯å�¦å¾—åˆ°äº†é€‰åŒº
         */
        isFocus:function () {
            try {
                return browser.ie && _getIERange( this ) || !browser.ie && this.getNative().rangeCount ? true : false;
            } catch ( e ) {
                return false;
            }

        },
        /**
         * èŽ·å�–é€‰åŒºå¯¹åº”çš„Range
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getRange
         * @returns {baidu.editor.dom.Range}    å¾—åˆ°Rangeå¯¹è±¡
         */
        getRange:function () {
            var me = this;
            function optimze( range ) {
                var child = me.document.body.firstChild,
                        collapsed = range.collapsed;
                while ( child && child.firstChild ) {
                    range.setStart( child, 0 );
                    child = child.firstChild;
                }
                if ( !range.startContainer ) {
                    range.setStart( me.document.body, 0 )
                }
                if ( collapsed ) {
                    range.collapse( true );
                }
            }

            if ( me._cachedRange != null ) {
                return this._cachedRange;
            }
            var range = new baidu.editor.dom.Range( me.document );
            if ( ie ) {
                var nativeRange = me.getIERange();
                if ( nativeRange ) {
                    transformIERangeToRange( nativeRange, range );
                } else {
                    optimze( range );
                }
            } else {
                var sel = me.getNative();
                if ( sel && sel.rangeCount ) {
                    var firstRange = sel.getRangeAt( 0 );
                    var lastRange = sel.getRangeAt( sel.rangeCount - 1 );
                    range.setStart( firstRange.startContainer, firstRange.startOffset ).setEnd( lastRange.endContainer, lastRange.endOffset );
                    if ( range.collapsed && domUtils.isBody( range.startContainer ) && !range.startOffset ) {
                        optimze( range );
                    }
                } else {
                    //trace:1734 æœ‰å�¯èƒ½å·²ç»�ä¸�åœ¨domæ ‘ä¸Šäº†ï¼Œæ ‡è¯†çš„èŠ‚ç‚¹
                    if ( this._bakRange && domUtils.inDoc( this._bakRange.startContainer, this.document ) ){
                        return this._bakRange;
                    }
                    optimze( range );
                }
            }
            return this._bakRange = range;
        },

        /**
         * èŽ·å�–å¼€å§‹å…ƒç´ ï¼Œç”¨äºŽçŠ¶æ€�å��å°„
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getStart
         * @return {Element}     èŽ·å¾—å¼€å§‹å…ƒç´ 
         */
        getStart:function () {
            if ( this._cachedStartElement ) {
                return this._cachedStartElement;
            }
            var range = ie ? this.getIERange() : this.getRange(),
                    tmpRange,
                    start, tmp, parent;
            if ( ie ) {
                if ( !range ) {
                    //todo ç»™ç¬¬ä¸€ä¸ªå€¼å�¯èƒ½ä¼šæœ‰é—®é¢˜
                    return this.document.body.firstChild;
                }
                //controlå…ƒç´ 
                if ( range.item ){
                    return range.item( 0 );
                }
                tmpRange = range.duplicate();
                //ä¿®æ­£ieä¸‹<b>x</b>[xx] é—­å�ˆå�Ž <b>x|</b>xx
                tmpRange.text.length > 0 && tmpRange.moveStart( 'character', 1 );
                tmpRange.collapse( 1 );
                start = tmpRange.parentElement();
                parent = tmp = range.parentElement();
                while ( tmp = tmp.parentNode ) {
                    if ( tmp == start ) {
                        start = parent;
                        break;
                    }
                }
            } else {
                range.shrinkBoundary();
                start = range.startContainer;
                if ( start.nodeType == 1 && start.hasChildNodes() ){
                    start = start.childNodes[Math.min( start.childNodes.length - 1, range.startOffset )];
                }
                if ( start.nodeType == 3 ){
                    return start.parentNode;
                }
            }
            return start;
        },
        /**
         * å¾—åˆ°é€‰åŒºä¸­çš„æ–‡æœ¬
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getText
         * @return  {String}    é€‰åŒºä¸­åŒ…å�«çš„æ–‡æœ¬
         */
        getText:function () {
            var nativeSel, nativeRange;
            if ( this.isFocus() && (nativeSel = this.getNative()) ) {
                nativeRange = browser.ie ? nativeSel.createRange() : nativeSel.getRangeAt( 0 );
                return browser.ie ? nativeRange.text : nativeRange.toString();
            }
            return '';
        }
    };
})();
/**
 * @file
 * @name UE.Editor
 * @short Editor
 * @import editor.js,core/utils.js,core/EventBase.js,core/browser.js,core/dom/dtd.js,core/dom/domUtils.js,core/dom/Range.js,core/dom/Selection.js,plugins/serialize.js
 * @desc ç¼–è¾‘å™¨ä¸»ç±»ï¼ŒåŒ…å�«ç¼–è¾‘å™¨æ��ä¾›çš„å¤§éƒ¨åˆ†å…¬ç”¨æŽ¥å�£
 */
(function () {
    var uid = 0,_selectionChangeTimer;

    /**
     * æ›¿æ�¢srcå’Œhref
     * @private
     * @ignore
     * @param div
     */
    function replaceSrc( div ) {
        var imgs = div.getElementsByTagName( "img" ),
                orgSrc;
        for ( var i = 0, img; img = imgs[i++]; ) {
            if ( orgSrc = img.getAttribute( "orgSrc" ) ) {
                img.src = orgSrc;
                img.removeAttribute( "orgSrc" );
            }
        }
        var as = div.getElementsByTagName( "a" );
        for ( var i = 0, ai; ai = as[i++]; i++ ) {
            if ( ai.getAttribute( 'data_ue_src' ) ) {
                ai.setAttribute( 'href', ai.getAttribute( 'data_ue_src' ) )
            }
        }
    }

    /**
     * @private
     * @ignore
     * @param form  ç¼–è¾‘å™¨æ‰€åœ¨çš„formå…ƒç´ 
     * @param editor  ç¼–è¾‘å™¨å®žä¾‹å¯¹è±¡
     */
    function setValue( form, editor ) {
        var textarea;
        if ( editor.textarea ) {
            if ( utils.isString( editor.textarea ) ) {
                for ( var i = 0, ti, tis = domUtils.getElementsByTagName( form, 'textarea' ); ti = tis[i++]; ) {
                    if ( ti.id == 'ueditor_textarea_' + editor.options.textarea ) {
                        textarea = ti;
                        break;
                    }
                }
            } else {
                textarea = editor.textarea;
            }
        }
        if ( !textarea ) {
            form.appendChild( textarea = domUtils.createElement( document, 'textarea', {
                'name':editor.options.textarea,
                'id':'ueditor_textarea_' + editor.options.textarea,
                'style':"display:none"
            } ) );
            //ä¸�è¦�äº§ç”Ÿå¤šä¸ªtextarea
            editor.textarea = textarea;
        }
        textarea.value = editor.hasContents() ?
            (editor.options.allHtmlEnabled ? editor.getAllHtml() : editor.getContent(null,null,true)):
            ''
    }

    /**
     * UEditorç¼–è¾‘å™¨ç±»
     * @name Editor
     * @desc åˆ›å»ºä¸€ä¸ªè·Ÿç¼–è¾‘å™¨å®žä¾‹
     * - ***container*** ç¼–è¾‘å™¨å®¹å™¨å¯¹è±¡
     * - ***iframe*** ç¼–è¾‘åŒºåŸŸæ‰€åœ¨çš„iframeå¯¹è±¡
     * - ***window*** ç¼–è¾‘åŒºåŸŸæ‰€åœ¨çš„window
     * - ***document*** ç¼–è¾‘åŒºåŸŸæ‰€åœ¨çš„documentå¯¹è±¡
     * - ***body*** ç¼–è¾‘åŒºåŸŸæ‰€åœ¨çš„bodyå¯¹è±¡
     * - ***selection*** ç¼–è¾‘åŒºåŸŸçš„é€‰åŒºå¯¹è±¡
     */
    var Editor = UE.Editor = function ( options ) {
        var me = this;
        me.uid = uid++;
        EventBase.call( me );
        me.commands = {};
        me.options = utils.extend( utils.clone(options || {}),UEDITOR_CONFIG, true );
        //è®¾ç½®é»˜è®¤çš„å¸¸ç”¨å±žæ€§
        me.setOpt( {
            isShow:true,
            //initialContent:'',
            autoClearinitialContent:false,
            iframeCssUrl:me.options.UEDITOR_HOME_URL + 'themes/iframe.css',
            textarea:'editorValue',
            focus:false,
            initialFrameWidth:1000,
            initialFrameHeight:me.options.minFrameHeight||320,//å…¼å®¹è€�ç‰ˆæœ¬é…�ç½®é¡¹
            minFrameWidth:800,
            minFrameHeight:220,
            autoClearEmptyNode:true,
            fullscreen:false,
            readonly:false,
            zIndex:999,
            imagePopup:true,
            enterTag:'p',
            pageBreakTag:'_baidu_page_break_tag_',
            customDomain:false,
            lang:'zh-cn',
            langPath:me.options.UEDITOR_HOME_URL + 'lang/',
            theme:'default',
            themePath:me.options.UEDITOR_HOME_URL + 'themes/',
            allHtmlEnabled:false,
            scaleEnabled:false,
            tableNativeEditInFF:false
        } );

        utils.loadFile( document, {
            src:me.options.langPath + me.options.lang + "/" + me.options.lang + ".js",
            tag:"script",
            type:"text/javascript",
            defer:"defer"
        }, function () {
            //åˆ�å§‹åŒ–æ�’ä»¶
            for ( var pi in UE.plugins ) {
                UE.plugins[pi].call( me );
            }
            me.langIsReady = true;

            me.fireEvent( "langReady" );
        });
        UE.instants['ueditorInstant' + me.uid] = me;
    };
    Editor.prototype = {
        /**
         * å½“ç¼–è¾‘å™¨readyå�Žæ‰§è¡Œä¼ å…¥çš„fn,å¦‚æžœç¼–è¾‘å™¨å·²ç»�å®Œæˆ�readyï¼Œå°±é©¬ä¸Šæ‰§è¡Œfnï¼Œfnçš„ä¸­çš„thisæ˜¯ç¼–è¾‘å™¨å®žä¾‹ã€‚
         * å¤§éƒ¨åˆ†çš„å®žä¾‹æŽ¥å�£éƒ½éœ€è¦�æ”¾åœ¨è¯¥æ–¹æ³•å†…éƒ¨æ‰§è¡Œï¼Œå�¦åˆ™åœ¨IEä¸‹å�¯èƒ½ä¼šæŠ¥é”™ã€‚
         * @name ready
         * @grammar editor.ready(fn) fnæ˜¯å½“ç¼–è¾‘å™¨æ¸²æŸ“å¥½å�Žæ‰§è¡Œçš„function
         * @example
         * var editor = new UE.ui.Editor();
         * editor.render("myEditor");
         * editor.ready(function(){
         *     editor.setContent("æ¬¢è¿Žä½¿ç”¨UEditorï¼�");
         * })
         */
        ready:function ( fn ) {
            var me = this;
            if ( fn ){
                me.isReady ? fn.apply( me ) : me.addListener( 'ready', fn );
            }
        },
        /**
         * ä¸ºç¼–è¾‘å™¨è®¾ç½®é»˜è®¤å�‚æ•°å€¼ã€‚è‹¥ç”¨æˆ·é…�ç½®ä¸ºç©ºï¼Œåˆ™ä»¥é»˜è®¤é…�ç½®ä¸ºå‡†
         * @grammar editor.setOpt(key,value);      //ä¼ å…¥ä¸€ä¸ªé”®ã€�å€¼å¯¹
         * @grammar editor.setOpt({ key:value});   //ä¼ å…¥ä¸€ä¸ªjsonå¯¹è±¡
         */
        setOpt:function ( key, val ) {
            var obj = {};
            if ( utils.isString( key ) ) {
                obj[key] = val
            } else {
                obj = key;
            }
            utils.extend( this.options, obj, true );
        },
        /**
         * é”€æ¯�ç¼–è¾‘å™¨å®žä¾‹å¯¹è±¡
         * @name destroy
         * @grammar editor.destroy();
         */
        destroy:function () {

            var me = this;
            me.fireEvent( 'destroy' );
            var container = me.container.parentNode;
            var textarea = me.textarea;
            if(!textarea){
                textarea = document.createElement('textarea');
                container.parentNode.insertBefore(textarea,container);
            }else{
                textarea.style.display = ''
            }
            textarea.style.width = container.offsetWidth + 'px';
            textarea.style.height = container.offsetHeight + 'px';
            textarea.value = me.getContent();
            textarea.id = me.key;
            container.innerHTML = '';
            domUtils.remove( container );
            var key = me.key;
            //trace:2004
            for ( var p in me ) {
                if ( me.hasOwnProperty( p ) ) {
                    delete this[p];
                }
            }
            UE.delEditor(key);

        },
        /**
         * æ¸²æŸ“ç¼–è¾‘å™¨çš„DOMåˆ°æŒ‡å®šå®¹å™¨ï¼Œå¿…é¡»ä¸”å�ªèƒ½è°ƒç”¨ä¸€æ¬¡
         * @name render
         * @grammar editor.render(containerId);    //å�¯ä»¥æŒ‡å®šä¸€ä¸ªå®¹å™¨ID
         * @grammar editor.render(containerDom);   //ä¹Ÿå�¯ä»¥ç›´æŽ¥æŒ‡å®šå®¹å™¨å¯¹è±¡
         */
        render:function ( container ) {
            var me = this, options = me.options;
            if ( utils.isString(container) ) {
                container = document.getElementById( container );
            }
            if ( container ) {
                var useBodyAsViewport = ie && browser.version < 9,
                        html = ( ie && browser.version < 9 ? '' : '<!DOCTYPE html>') +
                                '<html xmlns=\'http://www.w3.org/1999/xhtml\'' + (!useBodyAsViewport ? ' class=\'view\'' : '') + '><head>' +
                                ( options.iframeCssUrl ? '<link rel=\'stylesheet\' type=\'text/css\' href=\'' + utils.unhtml( options.iframeCssUrl ) + '\'/>' : '' ) +
                                '<style type=\'text/css\'>' +
                            //è®¾ç½®å››å‘¨çš„ç•™è¾¹
                                '.view{padding:0;word-wrap:break-word;cursor:text;height:100%;}\n' +
                            //è®¾ç½®é»˜è®¤å­—ä½“å’Œå­—å�·
                            //font-familyä¸�èƒ½å‘¢éš�ä¾¿æ”¹ï¼Œåœ¨safariä¸‹fillcharä¼šæœ‰è§£æž�é—®é¢˜
                                'body{margin:8px;font-family:sans-serif;font-size:16px;}' +
                            //è®¾ç½®æ®µè�½é—´è·�
                                'p{margin:5px 0;}'
                                + ( options.initialStyle || '' ) +
                                '</style></head><body' + (useBodyAsViewport ? ' class=\'view\'' : '') + '></body>';
                if ( options.customDomain && document.domain != location.hostname ) {
                    html += '<script>window.parent.UE.instants[\'ueditorInstant' + me.uid + '\']._setup(document);</script></html>';
                    container.appendChild( domUtils.createElement( document, 'iframe', {
                        id:'baidu_editor_' + me.uid,
                        width:"100%",
                        height:"100%",
                        frameborder:"0",
                        src:'javascript:void(function(){document.open();document.domain="' + document.domain + '";' +
                                'document.write("' + html + '");document.close();}())'
                    } ) );
                } else {
                    container.innerHTML = '<iframe id="' + 'baidu_editor_' + this.uid + '"' + 'width="100%" height="100%" scroll="no" frameborder="0" ></iframe>';
                    var doc = container.firstChild.contentWindow.document;
                    //åŽ»æŽ‰äº†åŽŸæ�¥çš„åˆ¤æ–­!browser.webkitï¼Œå› ä¸ºä¼šå¯¼è‡´onloadæ³¨å†Œçš„äº‹ä»¶ä¸�è§¦å�‘
                    doc.open();
                    doc.write( html + '</html>' );
                    doc.close();
                    me._setup( doc );
                }
                container.style.overflow = 'hidden';
            }
        },
        /**
         * ç¼–è¾‘å™¨åˆ�å§‹åŒ–
         * @private
         * @ignore
         * @param {Element} doc ç¼–è¾‘å™¨Iframeä¸­çš„æ–‡æ¡£å¯¹è±¡
         */
        _setup:function ( doc ) {
            var me = this,
                    options = me.options;
            if ( ie ) {
                doc.body.disabled = true;
                doc.body.contentEditable = true;
                doc.body.disabled = false;
            } else {
                doc.body.contentEditable = true;
                doc.body.spellcheck = false;
            }
            me.document = doc;
            me.window = doc.defaultView || doc.parentWindow;
            me.iframe = me.window.frameElement;
            me.body = doc.body;
            //è®¾ç½®ç¼–è¾‘å™¨æœ€å°�é«˜åº¦
            me.setHeight( Math.max(options.minFrameHeight, options.initialFrameHeight));
            me.selection = new dom.Selection( doc );
            //geckoåˆ�å§‹åŒ–å°±èƒ½å¾—åˆ°range,æ— æ³•åˆ¤æ–­isFocusäº†
            var geckoSel;
            if ( browser.gecko && (geckoSel = this.selection.getNative()) ) {
                geckoSel.removeAllRanges();
            }
            this._initEvents();
            if ( options.initialContent ) {
                if ( options.autoClearinitialContent ) {
                    var oldExecCommand = me.execCommand;
                    me.execCommand = function () {
                        me.fireEvent( 'firstBeforeExecCommand' );
                        oldExecCommand.apply( me, arguments );
                    };
                    this._setDefaultContent( options.initialContent );
                } else
                    this.setContent( options.initialContent, true );
            }
            //ä¸ºformæ��äº¤æ��ä¾›ä¸€ä¸ªéš�è—�çš„textarea
            for ( var form = this.iframe.parentNode; !domUtils.isBody( form ); form = form.parentNode ) {
                if ( form.tagName == 'FORM' ) {
                    domUtils.on( form, 'submit', function () {
                        setValue( this, me );
                    } );
                    break;
                }
            }
            //ç¼–è¾‘å™¨ä¸�èƒ½ä¸ºç©ºå†…å®¹
            if ( domUtils.isEmptyNode( me.body ) ) {
                me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
            }
            //å¦‚æžœè¦�æ±‚focus, å°±æŠŠå…‰æ ‡å®šä½�åˆ°å†…å®¹å¼€å§‹
            if ( options.focus ) {
                setTimeout( function () {
                    me.focus();
                    //å¦‚æžœè‡ªåŠ¨æ¸…é™¤å¼€ç�€ï¼Œå°±ä¸�éœ€è¦�å�šselectionchange;
                    !me.options.autoClearinitialContent && me._selectionChange();
                },0);
            }
            if ( !me.container ) {
                me.container = this.iframe.parentNode;
            }
            if ( options.fullscreen && me.ui ) {
                me.ui.setFullScreen( true );
            }
            try {
                me.document.execCommand( '2D-position', false, false );
            } catch ( e ) {}
            try {
                me.document.execCommand( 'enableInlineTableEditing', false, options.tableNativeEditInFF );
            } catch ( e ) {}
            try {
                me.document.execCommand( 'enableObjectResizing', false, false );
            } catch ( e ) {
                domUtils.on(me.body,browser.ie ? 'resizestart' : 'resize', function( evt ) {
                    domUtils.preventDefault(evt)
                });

            }
            me.isReady = 1;
            me.fireEvent( 'ready' );
            options.onready && options.onready.call(me);
            if ( !browser.ie ) {
                domUtils.on( me.window, ['blur', 'focus'], function ( e ) {
                    //chromeä¸‹ä¼šå‡ºçŽ°alt+tabåˆ‡æ�¢æ—¶ï¼Œå¯¼è‡´é€‰åŒºä½�ç½®ä¸�å¯¹
                    if ( e.type == 'blur' ) {
                        me._bakRange = me.selection.getRange();
                        try{
                            me.selection.getNative().removeAllRanges();
                        }catch(e){}

                    } else {
                        try {
                            me._bakRange && me._bakRange.select();
                        } catch ( e ) {
                        }
                    }
                } );
            }
            //trace:1518 ff3.6bodyä¸�å¤Ÿå¯›ï¼Œä¼šå¯¼è‡´ç‚¹å‡»ç©ºç™½å¤„æ— æ³•èŽ·å¾—ç„¦ç‚¹
            if ( browser.gecko && browser.version <= 10902 ) {
                //ä¿®å¤�ff3.6åˆ�å§‹åŒ–è¿›æ�¥ï¼Œä¸�èƒ½ç‚¹å‡»èŽ·å¾—ç„¦ç‚¹
                me.body.contentEditable = false;
                setTimeout( function () {
                    me.body.contentEditable = true;
                }, 100 );
                setInterval( function () {
                    me.body.style.height = me.iframe.offsetHeight - 20 + 'px'
                }, 100 )
            }
            !options.isShow && me.setHide();
            options.readonly && me.setDisabled();
        },
        /**
         * å�Œæ­¥ç¼–è¾‘å™¨çš„æ•°æ�®ï¼Œä¸ºæ��äº¤æ•°æ�®å�šå‡†å¤‡ï¼Œä¸»è¦�ç”¨äºŽä½ æ˜¯æ‰‹åŠ¨æ��äº¤çš„æƒ…å†µ
         * @name sync
         * @grammar editor.sync(); //ä»Žç¼–è¾‘å™¨çš„å®¹å™¨å�‘ä¸ŠæŸ¥æ‰¾ï¼Œå¦‚æžœæ‰¾åˆ°å°±å�Œæ­¥æ•°æ�®
         * @grammar editor.sync(formID); //formIDåˆ¶å®šä¸€ä¸ªè¦�å�Œæ­¥æ•°æ�®çš„formçš„id,ç¼–è¾‘å™¨çš„æ•°æ�®ä¼šå�Œæ­¥åˆ°ä½ æŒ‡å®šformä¸‹
         * @desc
         * å�Žå�°å�–å¾—æ•°æ�®å¾—é”®å€¼ä½¿ç”¨ä½ å®¹å™¨ä¸Šå¾—''name''å±žæ€§ï¼Œå¦‚æžœæ²¡æœ‰å°±ä½¿ç”¨å�‚æ•°ä¼ å…¥çš„''textarea''
         * @example
         * editor.sync();
         * form.sumbit(); //formå�˜é‡�å·²ç»�æŒ‡å�‘äº†formå…ƒç´ 
         *
         */
        sync:function ( formId ) {
            var me = this,
                    form = formId ? document.getElementById( formId ) :
                            domUtils.findParent( me.iframe.parentNode, function ( node ) {
                                return node.tagName == 'FORM'
                            }, true );
            form && setValue( form, me );
        },
        /**
         * è®¾ç½®ç¼–è¾‘å™¨é«˜åº¦
         * @name setHeight
         * @grammar editor.setHeight(number);  //çº¯æ•°å€¼ï¼Œä¸�å¸¦å�•ä½�
         */
        setHeight:function ( height ) {
            if ( height !== parseInt( this.iframe.parentNode.style.height ) ) {
                this.iframe.parentNode.style.height = height + 'px';
            }
            this.document.body.style.height = height - 20 + 'px';
        },

        /**
         * èŽ·å�–ç¼–è¾‘å™¨å†…å®¹
         * @name getContent
         * @grammar editor.getContent()  => String //è‹¥ç¼–è¾‘å™¨ä¸­å�ªåŒ…å�«å­—ç¬¦"&lt;p&gt;&lt;br /&gt;&lt;/p/&gt;"ä¼šè¿”å›žç©ºã€‚
         * @grammar editor.getContent(fn)  => String
         * @example
         * getContenté»˜è®¤æ˜¯ä¼šçŽ°è°ƒç”¨hasContentsæ�¥åˆ¤æ–­ç¼–è¾‘å™¨æ˜¯å�¦ä¸ºç©ºï¼Œå¦‚æžœæ˜¯ï¼Œå°±ç›´æŽ¥è¿”å›žç©ºå­—ç¬¦ä¸²
         * ä½ ä¹Ÿå�¯ä»¥ä¼ å…¥ä¸€ä¸ªfnæ�¥æŽ¥æ›¿hasContentsçš„å·¥ä½œï¼Œå®šåˆ¶åˆ¤æ–­çš„è§„åˆ™
         * editor.getContent(function(){
         *     return false //ç¼–è¾‘å™¨æ²¡æœ‰å†…å®¹ ï¼ŒgetContentç›´æŽ¥è¿”å›žç©º
         * })
         */
        getContent:function ( cmd, fn, isPreview ) {
            var me = this;
            if ( cmd && utils.isFunction( cmd ) ) {
                fn = cmd;
                cmd = '';
            }
            if ( fn ? !fn() : !this.hasContents() ) {
                return '';
            }
            me.fireEvent( 'beforegetcontent', cmd );
            var reg = new RegExp( domUtils.fillChar, 'g' ),
            //ieä¸‹å�–å¾—çš„htmlå�¯èƒ½ä¼šæœ‰\nå­˜åœ¨ï¼Œè¦�åŽ»æŽ‰ï¼Œåœ¨å¤„ç�†replace(/[\t\r\n]*/g,'');ä»£ç �é«˜é‡�çš„\nä¸�èƒ½åŽ»é™¤
                    html = me.body.innerHTML.replace( reg, '' ).replace( />[\t\r\n]*?</g, '><' );
            me.fireEvent( 'aftergetcontent', cmd );
            if ( me.serialize ) {
                var node = me.serialize.parseHTML( html );
                node = me.serialize.transformOutput( node );
                html = me.serialize.toHTML( node );
            }

            if ( ie && isPreview ) {
                //trace:2471
                //ä¸¤ä¸ªbrä¼šå¯¼è‡´ç©ºè¡Œï¼Œæ‰€ä»¥è¿™é‡Œå…ˆæ³¨è§†æŽ‰
                html = html//.replace(/<\s*br\s*\/?\s*>/gi,'<br/><br/>')
                        .replace( /<p>\s*?<\/p>/g, '<p>&nbsp;</p>' );
            } else {
                //å¤šä¸ª&nbsp;è¦�è½¬æ�¢æˆ�ç©ºæ ¼åŠ &nbsp;çš„å½¢å¼�ï¼Œè¦�ä¸�é¢„è§ˆæ—¶ä¼šæ‰€æˆ�ä¸€ä¸ª
                html = html.replace( /(&nbsp;)+/g, function ( s ) {
                    for ( var i = 0, str = [], l = s.split( ';' ).length - 1; i < l; i++ ) {
                        str.push( i % 2 == 0 ? ' ' : '&nbsp;' );
                    }
                    return str.join( '' );
                } );
            }

            return  html;

        },
        /**
         * å�–å¾—å®Œæ•´çš„htmlä»£ç �ï¼Œå�¯ä»¥ç›´æŽ¥æ˜¾ç¤ºæˆ�å®Œæ•´çš„htmlæ–‡æ¡£
         * @name getAllHtml
         * @grammar editor.getAllHtml()  => String
         */
        getAllHtml:function () {
            var me = this,
                    headHtml = {html:''},
                    html = '';
            me.fireEvent( 'getAllHtml', headHtml );
            return '<html><head>' + (me.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + me.options.charset + '"/>' : '') + me.document.getElementsByTagName( 'head' )[0].innerHTML + headHtml.html + '</head>'
                    + '<body ' + (ie && browser.version < 9 ? 'class="view"' : '') + '>' + me.getContent( null, null, true ) + '</body></html>';
        },
        /**
         * å¾—åˆ°ç¼–è¾‘å™¨çš„çº¯æ–‡æœ¬å†…å®¹ï¼Œä½†ä¼šä¿�ç•™æ®µè�½æ ¼å¼�
         * @name getPlainTxt
         * @grammar editor.getPlainTxt()  => String
         */
        getPlainTxt:function () {
            var reg = new RegExp( domUtils.fillChar, 'g' ),
                    html = this.body.innerHTML.replace( /[\n\r]/g, '' );//ieè¦�å…ˆåŽ»äº†\nåœ¨å¤„ç�†
            html = html.replace( /<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n' )
                    .replace( /<br\/?>/gi, '\n' )
                    .replace( /<[^>/?]+>/g, '' )
                    //.replace( /<[^>/]+>/g, '' )
                    .replace( /(\n)?<\/([^>]+)>/g, function ( a, b, c ) {
                        return dtd.$block[c] ? '\n' : b ? b : '';
                    } );
            //å�–å‡ºæ�¥çš„ç©ºæ ¼ä¼šæœ‰c2a0ä¼šå�˜æˆ�ä¹±ç �ï¼Œå¤„ç�†è¿™ç§�æƒ…å†µ\u00a0
            return html.replace( reg, '' ).replace( /\u00a0/g, ' ' ).replace( /&nbsp;/g, ' ' );
        },

        /**
         * èŽ·å�–ç¼–è¾‘å™¨ä¸­çš„çº¯æ–‡æœ¬å†…å®¹,æ²¡æœ‰æ®µè�½æ ¼å¼�
         * @name getContentTxt
         * @grammar editor.getContentTxt()  => String
         */
        getContentTxt:function () {
            var reg = new RegExp( domUtils.fillChar, 'g' );
            //å�–å‡ºæ�¥çš„ç©ºæ ¼ä¼šæœ‰c2a0ä¼šå�˜æˆ�ä¹±ç �ï¼Œå¤„ç�†è¿™ç§�æƒ…å†µ\u00a0
            return this.body[browser.ie ? 'innerText' : 'textContent'].replace( reg, '' ).replace( /\u00a0/g, ' ' );
        },

        /**
         * å°†htmlè®¾ç½®åˆ°ç¼–è¾‘å™¨ä¸­, å¦‚æžœæ˜¯ç”¨äºŽåˆ�å§‹åŒ–æ—¶ç»™ç¼–è¾‘å™¨èµ‹åˆ�å€¼ï¼Œåˆ™å¿…é¡»æ”¾åœ¨readyæ–¹æ³•å†…éƒ¨æ‰§è¡Œ
         * @name setContent
         * @grammar editor.setContent(html)
         * @example
         * var editor = new UE.ui.Editor()
         * editor.ready(function(){
         *     //éœ€è¦�readyå�Žæ‰§è¡Œï¼Œå�¦åˆ™å�¯èƒ½æŠ¥é”™
         *     editor.setContent("æ¬¢è¿Žä½¿ç”¨UEditorï¼�");
         * })
         */
        setContent:function ( html, notFireSelectionchange ) {
            var me = this,
                    inline = utils.extend( {a:1, A:1}, dtd.$inline, true ),
                    lastTagName;

            html = html
                    .replace( /^[ \t\r\n]*?</, '<' )
                    .replace( />[ \t\r\n]*?$/, '>' )
                    .replace( />[\t\r\n]*?</g, '><' )//ä»£ç �é«˜é‡�çš„\nä¸�èƒ½åŽ»é™¤
                    .replace( /[\s\/]?(\w+)?>[ \t\r\n]*?<\/?(\w+)/gi, function ( a, b, c ) {
                        if ( b ) {
                            lastTagName = c;
                        } else {
                            b = lastTagName;
                        }
                        return !inline[b] && !inline[c] ? a.replace( />[ \t\r\n]*?</, '><' ) : a;
                    } );
            html = {'html':html};
            me.fireEvent( 'beforesetcontent',html );
            html = html.html;
            var serialize = this.serialize;
            if ( serialize ) {
                var node = serialize.parseHTML( html );
                node = serialize.transformInput( node );
                node = serialize.filter( node );
                html = serialize.toHTML( node );
            }
            //html.replace(new RegExp('[\t\n\r' + domUtils.fillChar + ']*','g'),'');
            //åŽ»æŽ‰äº†\t\n\r å¦‚æžœæœ‰æ�’å…¥çš„ä»£ç �ï¼Œåœ¨æº�ç �åˆ‡æ�¢æ‰€è§�å�³æ‰€å¾—æ¨¡å¼�æ—¶ï¼Œæ�¢è¡Œéƒ½ä¸¢æŽ‰äº†
            //\råœ¨ieä¸‹çš„ä¸�å�¯è§�å­—ç¬¦ï¼Œåœ¨æº�ç �åˆ‡æ�¢æ—¶ä¼šå�˜æˆ�å¤šä¸ª&nbsp;
            //trace:1559
            this.body.innerHTML = html.replace( new RegExp( '[\r' + domUtils.fillChar + ']*', 'g' ), '' );
            //å¤„ç�†ie6ä¸‹innerHTMLè‡ªåŠ¨å°†ç›¸å¯¹è·¯å¾„è½¬åŒ–æˆ�ç»�å¯¹è·¯å¾„çš„é—®é¢˜
            if ( browser.ie && browser.version < 7 ) {
                replaceSrc( this.document.body );
            }
            //ç»™æ–‡æœ¬æˆ–è€…inlineèŠ‚ç‚¹å¥—pæ ‡ç­¾
            if ( me.options.enterTag == 'p' ) {

                var child = this.body.firstChild, tmpNode;
                if ( !child || child.nodeType == 1 &&
                        (dtd.$cdata[child.tagName] ||
                                domUtils.isCustomeNode( child )
                                )
                        && child === this.body.lastChild ) {
                    this.body.innerHTML = '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>' + this.body.innerHTML;

                } else {
                    var p = me.document.createElement( 'p' );
                    while ( child ) {
                        while ( child && (child.nodeType == 3 || child.nodeType == 1 && dtd.p[child.tagName] && !dtd.$cdata[child.tagName]) ) {
                            tmpNode = child.nextSibling;
                            p.appendChild( child );
                            child = tmpNode;
                        }
                        if ( p.firstChild ) {
                            if ( !child ) {
                                me.body.appendChild( p );
                                break;
                            } else {
                                me.body.insertBefore( p, child );
                                p = me.document.createElement( 'p' );
                            }
                        }
                        child = child.nextSibling;
                    }
                }
            }
            me.fireEvent( 'aftersetcontent' );
            me.fireEvent( 'contentchange' );
            !notFireSelectionchange && me._selectionChange();
            //æ¸…é™¤ä¿�å­˜çš„é€‰åŒº
            me._bakRange = me._bakIERange = null;
            //trace:1742 setContentå�Žgeckoèƒ½å¾—åˆ°ç„¦ç‚¹é—®é¢˜
            var geckoSel;
            if ( browser.gecko && (geckoSel = this.selection.getNative()) ) {
                geckoSel.removeAllRanges();
            }
        },

        /**
         * è®©ç¼–è¾‘å™¨èŽ·å¾—ç„¦ç‚¹ï¼ŒtoEndç¡®å®šfocusä½�ç½®
         * @name focus
         * @grammar editor.focus([toEnd])   //é»˜è®¤focusåˆ°ç¼–è¾‘å™¨å¤´éƒ¨ï¼ŒtoEndä¸ºtrueæ—¶focusåˆ°å†…å®¹å°¾éƒ¨
         */
        focus:function ( toEnd ) {
            try {
                var me = this,
                        rng = me.selection.getRange();
                if ( toEnd ) {
                    rng.setStartAtLast( me.body.lastChild ).setCursor( false, true );
                } else {
                    rng.select( true );
                }
            } catch ( e ) {
            }
        },

        /**
         * åˆ�å§‹åŒ–UEäº‹ä»¶å�Šéƒ¨åˆ†äº‹ä»¶ä»£ç�†
         * @private
         * @ignore
         */
        _initEvents:function () {
            var me = this,
                    doc = me.document,
                    win = me.window;
            me._proxyDomEvent = utils.bind( me._proxyDomEvent, me );
            domUtils.on( doc, ['click', 'contextmenu', 'mousedown', 'keydown', 'keyup', 'keypress', 'mouseup', 'mouseover', 'mouseout', 'selectstart'], me._proxyDomEvent );
            domUtils.on( win, ['focus', 'blur'], me._proxyDomEvent );
            domUtils.on( doc, ['mouseup', 'keydown'], function ( evt ) {
                //ç‰¹æ®Šé”®ä¸�è§¦å�‘selectionchange
                if ( evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey) ) {
                    return;
                }
                if ( evt.button == 2 )return;
                me._selectionChange( 250, evt );
            } );
            //å¤„ç�†æ‹–æ‹½
            //ie ffä¸�èƒ½ä»Žå¤–è¾¹æ‹–å…¥
            //chromeå�ªé’ˆå¯¹ä»Žå¤–è¾¹æ‹–å…¥çš„å†…å®¹è¿‡æ»¤
            var innerDrag = 0, source = browser.ie ? me.body : me.document, dragoverHandler;
            domUtils.on( source, 'dragstart', function () {
                innerDrag = 1;
            } );
            domUtils.on( source, browser.webkit ? 'dragover' : 'drop', function () {
                return browser.webkit ?
                        function () {
                            clearTimeout( dragoverHandler );
                            dragoverHandler = setTimeout( function () {
                                if ( !innerDrag ) {
                                    var sel = me.selection,
                                            range = sel.getRange();
                                    if ( range ) {
                                        var common = range.getCommonAncestor();
                                        if ( common && me.serialize ) {
                                            var f = me.serialize,
                                                    node =
                                                            f.filter(
                                                                    f.transformInput(
                                                                            f.parseHTML(
                                                                                    f.word( common.innerHTML )
                                                                            )
                                                                    )
                                                            );
                                            common.innerHTML = f.toHTML( node );
                                        }
                                    }
                                }
                                innerDrag = 0;
                            }, 200 );
                        } :
                        function ( e ) {
                            if ( !innerDrag ) {
                                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                            }
                            innerDrag = 0;
                        }
            }() );
        },
        /**
         * è§¦å�‘äº‹ä»¶ä»£ç�†
         * @private
         * @ignore
         */
        _proxyDomEvent:function ( evt ) {
            return this.fireEvent( evt.type.replace( /^on/, '' ), evt );
        },
        /**
         * å�˜åŒ–é€‰åŒº
         * @private
         * @ignore
         */
        _selectionChange:function ( delay, evt ) {
            var me = this;
            //æœ‰å…‰æ ‡æ‰�å�šselectionchange ä¸ºäº†è§£å†³æœªfocusæ—¶ç‚¹å‡»sourceä¸�èƒ½è§¦å�‘æ›´æ”¹å·¥å…·æ �çŠ¶æ€�çš„é—®é¢˜ï¼ˆsourceå‘½ä»¤notNeedUndo=1ï¼‰
//            if ( !me.selection.isFocus() ){
//                return;
//            }
            var hackForMouseUp = false;
            var mouseX, mouseY;
            if ( browser.ie && browser.version < 9 && evt && evt.type == 'mouseup' ) {
                var range = this.selection.getRange();
                if ( !range.collapsed ) {
                    hackForMouseUp = true;
                    mouseX = evt.clientX;
                    mouseY = evt.clientY;
                }
            }
            clearTimeout( _selectionChangeTimer );
            _selectionChangeTimer = setTimeout( function () {
                if ( !me.selection.getNative() ) {
                    return;
                }
                //ä¿®å¤�ä¸€ä¸ªIEä¸‹çš„bug: é¼ æ ‡ç‚¹å‡»ä¸€æ®µå·²é€‰æ‹©çš„æ–‡æœ¬ä¸­é—´æ—¶ï¼Œå�¯èƒ½åœ¨mouseupå�Žçš„ä¸€æ®µæ—¶é—´å†…å�–åˆ°çš„rangeæ˜¯åœ¨selectionçš„typeä¸ºNoneä¸‹çš„é”™è¯¯å€¼.
                //IEä¸‹å¦‚æžœç”¨æˆ·æ˜¯æ‹–æ‹½ä¸€æ®µå·²é€‰æ‹©æ–‡æœ¬ï¼Œåˆ™ä¸�ä¼šè§¦å�‘mouseupäº‹ä»¶ï¼Œæ‰€ä»¥è¿™é‡Œçš„ç‰¹æ®Šå¤„ç�†ä¸�ä¼šå¯¹å…¶æœ‰å½±å“�
                var ieRange;
                if ( hackForMouseUp && me.selection.getNative().type == 'None' ) {
                    ieRange = me.document.body.createTextRange();
                    try {
                        ieRange.moveToPoint( mouseX, mouseY );
                    } catch ( ex ) {
                        ieRange = null;
                    }
                }
                var bakGetIERange;
                if ( ieRange ) {
                    bakGetIERange = me.selection.getIERange;
                    me.selection.getIERange = function () {
                        return ieRange;
                    };
                }
                me.selection.cache();
                if ( bakGetIERange ) {
                    me.selection.getIERange = bakGetIERange;
                }
                if ( me.selection._cachedRange && me.selection._cachedStartElement ) {
                    me.fireEvent( 'beforeselectionchange' );
                    // ç¬¬äºŒä¸ªå�‚æ•°causeByUiä¸ºtrueä»£è¡¨ç”±ç”¨æˆ·äº¤äº’é€ æˆ�çš„selectionchange.
                    me.fireEvent( 'selectionchange', !!evt );
                    me.fireEvent( 'afterselectionchange' );
                    me.selection.clear();
                }
            }, delay || 50 );
        },
        _callCmdFn:function ( fnName, args ) {
            var cmdName = args[0].toLowerCase(),
                    cmd, cmdFn;
            cmd = this.commands[cmdName] || UE.commands[cmdName];
            cmdFn = cmd && cmd[fnName];
            //æ²¡æœ‰querycommandstateæˆ–è€…æ²¡æœ‰commandçš„éƒ½é»˜è®¤è¿”å›ž0
            if ( (!cmd || !cmdFn) && fnName == 'queryCommandState' ) {
                return 0;
            } else if ( cmdFn ) {
                return cmdFn.apply( this, args );
            }
        },

        /**
         * æ‰§è¡Œç¼–è¾‘å‘½ä»¤cmdNameï¼Œå®Œæˆ�å¯Œæ–‡æœ¬ç¼–è¾‘æ•ˆæžœ
         * @name execCommand
         * @grammar editor.execCommand(cmdName)   => {*}
         */
        execCommand:function ( cmdName ) {
            cmdName = cmdName.toLowerCase();
            var me = this,
                    result,
                    cmd = me.commands[cmdName] || UE.commands[cmdName];
            if ( !cmd || !cmd.execCommand ) {
                return null;
            }
            if ( !cmd.notNeedUndo && !me.__hasEnterExecCommand ) {
                me.__hasEnterExecCommand = true;
                if ( me.queryCommandState( cmdName ) != -1 ) {
                    me.fireEvent( 'beforeexeccommand', cmdName );
                    result = this._callCmdFn( 'execCommand', arguments );
                    me.fireEvent( 'afterexeccommand', cmdName );
                }
                me.__hasEnterExecCommand = false;
            } else {
                result = this._callCmdFn( 'execCommand', arguments );
            }
            !me.__hasEnterExecCommand && me._selectionChange();
            return result;
        },
        /**
         * æ ¹æ�®ä¼ å…¥çš„commandå‘½ä»¤ï¼ŒæŸ¥é€‰ç¼–è¾‘å™¨å½“å‰�çš„é€‰åŒºï¼Œè¿”å›žå‘½ä»¤çš„çŠ¶æ€�
         * @name  queryCommandState
         * @grammar editor.queryCommandState(cmdName)  => (-1|0|1)
         * @desc
         * * ''-1'' å½“å‰�å‘½ä»¤ä¸�å�¯ç”¨
         * * ''0'' å½“å‰�å‘½ä»¤å�¯ç”¨
         * * ''1'' å½“å‰�å‘½ä»¤å·²ç»�æ‰§è¡Œè¿‡äº†
         */
        queryCommandState:function ( cmdName ) {
            return this._callCmdFn( 'queryCommandState', arguments );
        },

        /**
         * æ ¹æ�®ä¼ å…¥çš„commandå‘½ä»¤ï¼ŒæŸ¥é€‰ç¼–è¾‘å™¨å½“å‰�çš„é€‰åŒºï¼Œæ ¹æ�®å‘½ä»¤è¿”å›žç›¸å…³çš„å€¼
         * @name  queryCommandValue
         * @grammar editor.queryCommandValue(cmdName)  =>  {*}
         */
        queryCommandValue:function ( cmdName ) {
            return this._callCmdFn( 'queryCommandValue', arguments );
        },
        /**
         * æ£€æŸ¥ç¼–è¾‘åŒºåŸŸä¸­æ˜¯å�¦æœ‰å†…å®¹ï¼Œè‹¥åŒ…å�«tagsä¸­çš„èŠ‚ç‚¹ç±»åž‹ï¼Œç›´æŽ¥è¿”å›žtrue
         * @name  hasContents
         * @desc
         * é»˜è®¤æœ‰æ–‡æœ¬å†…å®¹ï¼Œæˆ–è€…æœ‰ä»¥ä¸‹èŠ‚ç‚¹éƒ½ä¸�è®¤ä¸ºæ˜¯ç©º
         * <code>{table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}</code>
         * @grammar editor.hasContents()  => (true|false)
         * @grammar editor.hasContents(tags)  =>  (true|false)  //è‹¥æ–‡æ¡£ä¸­åŒ…å�«tagsæ•°ç»„é‡Œå¯¹åº”çš„tagï¼Œç›´æŽ¥è¿”å›žtrue
         * @example
         * editor.hasContents(['span']) //å¦‚æžœç¼–è¾‘å™¨é‡Œæœ‰è¿™äº›ï¼Œä¸�è®¤ä¸ºæ˜¯ç©º
         */
        hasContents:function ( tags ) {
            if ( tags ) {
                for ( var i = 0, ci; ci = tags[i++]; ) {
                    if ( this.document.getElementsByTagName( ci ).length > 0 ) {
                        return true;
                    }
                }
            }
            if ( !domUtils.isEmptyBlock( this.body ) ) {
                return true
            }
            //éš�æ—¶æ·»åŠ ,å®šä¹‰çš„ç‰¹æ®Šæ ‡ç­¾å¦‚æžœå­˜åœ¨ï¼Œä¸�èƒ½è®¤ä¸ºæ˜¯ç©º
            tags = ['div'];
            for ( i = 0; ci = tags[i++]; ) {
                var nodes = domUtils.getElementsByTagName( this.document, ci );
                for ( var n = 0, cn; cn = nodes[n++]; ) {
                    if ( domUtils.isCustomeNode( cn ) ) {
                        return true;
                    }
                }
            }
            return false;
        },
        /**
         * é‡�ç½®ç¼–è¾‘å™¨ï¼Œå�¯ç”¨æ�¥å�šå¤šä¸ªtabä½¿ç”¨å�Œä¸€ä¸ªç¼–è¾‘å™¨å®žä¾‹
         * @name  reset
         * @desc
         * * æ¸…ç©ºç¼–è¾‘å™¨å†…å®¹
         * * æ¸…ç©ºå›žé€€åˆ—è¡¨
         * @grammar editor.reset()
         */
        reset:function () {
            this.fireEvent( 'reset' );
        },
        setEnabled:function () {
            var me = this, range;
            if ( me.body.contentEditable == 'false' ) {
                me.body.contentEditable = true;
                range = me.selection.getRange();
                //æœ‰å�¯èƒ½å†…å®¹ä¸¢å¤±äº†
                try {
                    range.moveToBookmark( me.lastBk );
                    delete me.lastBk
                } catch ( e ) {
                    range.setStartAtFirst( me.body ).collapse( true )
                }
                range.select( true );
                if ( me.bkqueryCommandState ) {
                    me.queryCommandState = me.bkqueryCommandState;
                    delete me.bkqueryCommandState;
                }
                me.fireEvent( 'selectionchange' );
            }
        },
        /**
         * è®¾ç½®å½“å‰�ç¼–è¾‘åŒºåŸŸå�¯ä»¥ç¼–è¾‘
         * @name enable
         * @grammar editor.enable()
         */
        enable:function(){
            return this.setEnabled();
        },
        setDisabled:function ( except ) {
            var me = this;
            except = except ? utils.isArray( except ) ? except : [except] : [];
            if ( me.body.contentEditable == 'true' ) {
                if ( !me.lastBk ) {
                    me.lastBk = me.selection.getRange().createBookmark( true );
                }
                me.body.contentEditable = false;
                me.bkqueryCommandState = me.queryCommandState;
                me.queryCommandState = function ( type ) {
                    if ( utils.indexOf( except, type ) != -1 ) {
                        return me.bkqueryCommandState.apply( me, arguments );
                    }
                    return -1;
                };
                me.fireEvent( 'selectionchange' );
            }
        },
        /** è®¾ç½®å½“å‰�ç¼–è¾‘åŒºåŸŸä¸�å�¯ç¼–è¾‘,exceptä¸­çš„å‘½ä»¤é™¤å¤–
         * @name disable
         * @grammar editor.disable()
         * @grammar editor.disable(except)  //ä¾‹å¤–çš„å‘½ä»¤ï¼Œä¹Ÿå�³å�³ä½¿è®¾ç½®äº†disableï¼Œæ­¤å¤„é…�ç½®çš„å‘½ä»¤ä»�ç„¶å�¯ä»¥æ‰§è¡Œ
         * @example
         * //ç¦�ç”¨å·¥å…·æ �ä¸­é™¤åŠ ç²—å’Œæ�’å…¥å›¾ç‰‡ä¹‹å¤–çš„æ‰€æœ‰åŠŸèƒ½
         * editor.disable(['bold','insertimage']);//å�¯ä»¥æ˜¯å�•ä¸€çš„String,ä¹Ÿå�¯ä»¥æ˜¯Array
        */
        disable:function(except){
            return this.setDisabled(except);
        },
        /**
         * è®¾ç½®é»˜è®¤å†…å®¹
         * @ignore
         * @private
         * @param  {String} cont è¦�å­˜å…¥çš„å†…å®¹
         */
        _setDefaultContent:function () {
            function clear() {
                var me = this;
                if ( me.document.getElementById( 'initContent' ) ) {
                    me.body.innerHTML = '<p>' + (ie ? '' : '<br/>') + '</p>';
                    me.removeListener( 'firstBeforeExecCommand focus', clear );
                    setTimeout( function () {
                        me.focus();
                        me._selectionChange();
                    },0 )
                }
            }
            return function ( cont ) {
                var me = this;
                me.body.innerHTML = '<p id="initContent">' + cont + '</p>';
                if ( browser.ie && browser.version < 7 ) {
                    replaceSrc( me.body );
                }
                me.addListener( 'firstBeforeExecCommand focus', clear );
            }
        }(),
        /**
         * showæ–¹æ³•çš„å…¼å®¹ç‰ˆæœ¬
         * @private
         * @ignore
         */
        setShow:function () {
            var me = this,range = me.selection.getRange();
            if ( me.container.style.display == 'none' ) {
                //æœ‰å�¯èƒ½å†…å®¹ä¸¢å¤±äº†
                try {
                    range.moveToBookmark( me.lastBk );
                    delete me.lastBk
                } catch ( e ) {
                    range.setStartAtFirst( me.body ).collapse( true )
                }
                //ieä¸‹focuså®žæ•ˆï¼Œæ‰€ä»¥å�šäº†ä¸ªå»¶è¿Ÿ
               setTimeout(function(){
                   range.select( true );
               },100);
                me.container.style.display = '';
            }

        },
        /**
         * æ˜¾ç¤ºç¼–è¾‘å™¨
         * @name show
         * @grammar editor.show()
         */
        show:function(){
            return this.setShow();
        },
        /**
         * hideæ–¹æ³•çš„å…¼å®¹ç‰ˆæœ¬
         * @private
         * @ignore
         */
        setHide:function () {
            var me = this;
            if ( !me.lastBk ) {
                me.lastBk = me.selection.getRange().createBookmark( true );
            }
            me.container.style.display = 'none'
        },
        /**
         * éš�è—�ç¼–è¾‘å™¨
         * @name hide
         * @grammar editor.hide()
         */
        hide:function(){
            return this.setHide();
        },
        /**
         * æ ¹æ�®åˆ¶å®šçš„è·¯å¾„ï¼ŒèŽ·å�–å¯¹åº”çš„è¯­è¨€èµ„æº�
         * @name  getLang
         * @grammar editor.getLang(path)  =>  ï¼ˆJSON|String) è·¯å¾„æ ¹æ�®çš„æ˜¯langç›®å½•ä¸‹çš„è¯­è¨€æ–‡ä»¶çš„è·¯å¾„ç»“æž„
         * @example
         * editor.getLang('contextMenu.delete') //å¦‚æžœå½“å‰�æ˜¯ä¸­æ–‡ï¼Œé‚£è¿”å›žæ˜¯çš„æ˜¯åˆ é™¤
         */
        getLang:function ( path ) {
            var lang = UE.I18N[this.options.lang];
            path = (path || "").split( "." );
            for ( var i = 0, ci; ci = path[i++]; ) {
                lang = lang[ci];
                if ( !lang )break;
            }
            return lang;
        }
        /**
         * å¾—åˆ°dialogå®žä¾‹å¯¹è±¡
         * @name getDialog
         * @grammar editor.getDialog(dialogName) => Object
         * @example
         * var dialog = editor.getDialog("insertimage");
         * dialog.open();   //æ‰“å¼€dialog
         * dialog.close();  //å…³é—­dialog
         */
    };
    utils.inherits( Editor, EventBase );
})();


/**
 * @file
 * @name UE.ajax
 * @short Ajax
 * @desc UEditorå†…ç½®çš„ajaxè¯·æ±‚æ¨¡å�—
 * @import core/utils.js
 * @user: taoqili
 * @date: 11-8-18
 * @time: ä¸‹å�ˆ3:18
 */
UE.ajax = function() {
    /**
     * åˆ›å»ºä¸€ä¸ªajaxRequestå¯¹è±¡
     */
    var fnStr = 'XMLHttpRequest()';
    try {
        new ActiveXObject("Msxml2.XMLHTTP");
        fnStr = 'ActiveXObject(\'Msxml2.XMLHTTP\')';
    } catch (e) {
        try {
            new ActiveXObject("Microsoft.XMLHTTP");
            fnStr = 'ActiveXObject(\'Microsoft.XMLHTTP\')'
        } catch (e) {
        }
    }
    var creatAjaxRequest = new Function('return new ' + fnStr);


    /**
     * å°†jsonå�‚æ•°è½¬åŒ–æˆ�é€‚å�ˆajaxæ��äº¤çš„å�‚æ•°åˆ—è¡¨
     * @param json
     */
    function json2str(json) {
        var strArr = [];
        for (var i in json) {
            //å¿½ç•¥é»˜è®¤çš„å‡ ä¸ªå�‚æ•°
            if(i=="method" || i=="timeout" || i=="async") continue;
            //ä¼ é€’è¿‡æ�¥çš„å¯¹è±¡å’Œå‡½æ•°ä¸�åœ¨æ��äº¤ä¹‹åˆ—
            if (!((typeof json[i]).toLowerCase() == "function" || (typeof json[i]).toLowerCase() == "object")) {
                strArr.push( encodeURIComponent(i) + "="+encodeURIComponent(json[i]) );
            }
        }
        return strArr.join("&");

    }


    return {
		/**
         * @name request
         * @desc å�‘å‡ºajaxè¯·æ±‚ï¼ŒajaxOptä¸­é»˜è®¤åŒ…å�«methodï¼Œtimeoutï¼Œasyncï¼Œdataï¼Œonsuccessä»¥å�Šonerrorç­‰å…­ä¸ªï¼Œæ”¯æŒ�è‡ªå®šä¹‰æ·»åŠ å�‚æ•°
         * @grammar UE.ajax.request(url,ajaxOpt);
         * @example
         * UE.ajax.request('http://www.xxxx.com/test.php',{
         *     //å�¯çœ�ç•¥ï¼Œé»˜è®¤POST
         *     method:'POST',
         *     //å�¯ä»¥è‡ªå®šä¹‰å�‚æ•°
         *     content:'è¿™é‡Œæ˜¯æ��äº¤çš„å†…å®¹',
         *     //ä¹Ÿå�¯ä»¥ç›´æŽ¥ä¼ jsonï¼Œä½†æ˜¯å�ªèƒ½å‘½å��ä¸ºdataï¼Œå�¦åˆ™å½“å�šä¸€èˆ¬å­—ç¬¦ä¸²å¤„ç�†
         *     data:{
         *         name:'UEditor',
         *         age:'1'
         *     }
         *     onsuccess:function(xhr){
         *         console.log(xhr.responseText);
         *     },
         *     onerror:function(xhr){
         *         console.log(xhr.responseText);
         *     }
         * })
		 * @param ajaxOptions
		 */
		request:function(url, ajaxOptions) {
            var ajaxRequest = creatAjaxRequest(),
                //æ˜¯å�¦è¶…æ—¶
                timeIsOut = false,
                //é»˜è®¤å�‚æ•°
                defaultAjaxOptions = {
                    method:"POST",
                    timeout:5000,
                    async:true,
                    data:{},//éœ€è¦�ä¼ é€’å¯¹è±¡çš„è¯�å�ªèƒ½è¦†ç›–
                    onsuccess:function() {
                    },
                    onerror:function() {
                    }
                };

			if (typeof url === "object") {
				ajaxOptions = url;
				url = ajaxOptions.url;
			}
			if (!ajaxRequest || !url) return;
			var ajaxOpts = ajaxOptions ? utils.extend(defaultAjaxOptions,ajaxOptions) : defaultAjaxOptions;

			var submitStr = json2str(ajaxOpts);  // { name:"Jim",city:"Beijing" } --> "name=Jim&city=Beijing"
			//å¦‚æžœç”¨æˆ·ç›´æŽ¥é€šè¿‡dataå�‚æ•°ä¼ é€’jsonå¯¹è±¡è¿‡æ�¥ï¼Œåˆ™ä¹Ÿè¦�å°†æ­¤jsonå¯¹è±¡è½¬åŒ–ä¸ºå­—ç¬¦ä¸²
			if (!utils.isEmptyObject(ajaxOpts.data)){
                submitStr += (submitStr? "&":"") + json2str(ajaxOpts.data);
			}
            //è¶…æ—¶æ£€æµ‹
            var timerID = setTimeout(function() {
                if (ajaxRequest.readyState != 4) {
                    timeIsOut = true;
                    ajaxRequest.abort();
                    clearTimeout(timerID);
                }
            }, ajaxOpts.timeout);

			var method = ajaxOpts.method.toUpperCase();
            var str = url + (url.indexOf("?")==-1?"?":"&") + (method=="POST"?"":submitStr+ "&noCache=" + +new Date);
			ajaxRequest.open(method, str, ajaxOpts.async);
			ajaxRequest.onreadystatechange = function() {
				if (ajaxRequest.readyState == 4) {
					if (!timeIsOut && ajaxRequest.status == 200) {
						ajaxOpts.onsuccess(ajaxRequest);
					} else {
						ajaxOpts.onerror(ajaxRequest);
					}
				}
			};
			if (method == "POST") {
				ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajaxRequest.send(submitStr);
			} else {
				ajaxRequest.send(null);
			}
		}
	};


}();

/**
 * @file
 * @name UE.filterWord
 * @short filterWord
 * @desc ç”¨æ�¥è¿‡æ»¤wordç²˜è´´è¿‡æ�¥çš„å­—ç¬¦ä¸²
 * @import editor.js,core/utils.js
 * @anthor zhanyi
 */
var filterWord = UE.filterWord = function () {

    //æ˜¯å�¦æ˜¯wordè¿‡æ�¥çš„å†…å®¹
    function isWordDocument( str ) {
        return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/ig.test( str );
    }
    //åŽ»æŽ‰å°�æ•°
    function transUnit( v ) {
        v = v.replace( /[\d.]+\w+/g, function ( m ) {
            return utils.transUnitToPx(m);
        } );
        return v;
    }

    function filterPasteWord( str ) {
        return str.replace( /[\t\r\n]+/g, "" )
                .replace( /<!--[\s\S]*?-->/ig, "" )
                //è½¬æ�¢å›¾ç‰‡
                .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(str){
                    //operaèƒ½è‡ªå·±è§£æž�å‡ºimageæ‰€è¿™é‡Œç›´æŽ¥è¿”å›žç©º
                    if(browser.opera){
                        return '';
                    }
                    try{
                        var width = str.match(/width:([ \d.]*p[tx])/i)[1],
                            height = str.match(/height:([ \d.]*p[tx])/i)[1],
                            src =  str.match(/src=\s*"([^"]*)"/i)[1];
                        return '<img width="'+ transUnit(width) +'" height="'+transUnit(height) +'" src="' + src + '" />';
                    } catch(e){
                        return '';
                    }
                })
                //é’ˆå¯¹wpsæ·»åŠ çš„å¤šä½™æ ‡ç­¾å¤„ç�†
                .replace(/<\/?div[^>]*>/g,'')
                //åŽ»æŽ‰å¤šä½™çš„å±žæ€§
                .replace( /v:\w+=(["']?)[^'"]+\1/g, '' )
                .replace( /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "" )
                .replace( /<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>" )
                //åŽ»æŽ‰å¤šä½™çš„å±žæ€§
                .replace( /\s+(class|lang|align)\s*=\s*(['"]?)[\w-]+\2/ig, "" )
                //æ¸…é™¤å¤šä½™çš„font/spanä¸�èƒ½åŒ¹é…�&nbsp;æœ‰å�¯èƒ½æ˜¯ç©ºæ ¼
                .replace( /<(font|span)[^>]*>\s*<\/\1>/gi, '' )
                //å¤„ç�†styleçš„é—®é¢˜
                .replace( /(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function( str, tag, tmp, style ) {
                    var n = [],
                        s = style.replace( /^\s+|\s+$/, '' )
                            .replace(/&#39;/g,'\'')
                            .replace( /&quot;/gi, "'" )
                            .split( /;\s*/g );

                    for ( var i = 0,v; v = s[i];i++ ) {

                        var name, value,
                            parts = v.split( ":" );

                        if ( parts.length == 2 ) {
                            name = parts[0].toLowerCase();
                            value = parts[1].toLowerCase();
                            if(/^(background)\w*/.test(name) && value.replace(/(initial|\s)/g,'').length == 0
                                ||
                                /^(margin)\w*/.test(name) && /^0\w+$/.test(value)
                            ){
                                continue;
                            }

                            switch ( name ) {
                                case "mso-padding-alt":
                                case "mso-padding-top-alt":
                                case "mso-padding-right-alt":
                                case "mso-padding-bottom-alt":
                                case "mso-padding-left-alt":
                                case "mso-margin-alt":
                                case "mso-margin-top-alt":
                                case "mso-margin-right-alt":
                                case "mso-margin-bottom-alt":
                                case "mso-margin-left-alt":
                                //ieä¸‹ä¼šå‡ºçŽ°æŒ¤åˆ°ä¸€èµ·çš„æƒ…å†µ
                               //case "mso-table-layout-alt":
                                case "mso-height":
                                case "mso-width":
                                case "mso-vertical-align-alt":
                                    //trace:1819 ffä¸‹ä¼šè§£æž�å‡ºpaddingåœ¨tableä¸Š
                                    if(!/<table/.test(tag))
                                        n[i] = name.replace( /^mso-|-alt$/g, "" ) + ":" + transUnit( value );
                                    continue;
                                case "horiz-align":
                                    n[i] = "text-align:" + value;
                                    continue;

                                case "vert-align":
                                    n[i] = "vertical-align:" + value;
                                    continue;

                                case "font-color":
                                case "mso-foreground":
                                    n[i] = "color:" + value;
                                    continue;

                                case "mso-background":
                                case "mso-highlight":
                                    n[i] = "background:" + value;
                                    continue;

                                case "mso-default-height":
                                    n[i] = "min-height:" + transUnit( value );
                                    continue;

                                case "mso-default-width":
                                    n[i] = "min-width:" + transUnit( value );
                                    continue;

                                case "mso-padding-between-alt":
                                    n[i] = "border-collapse:separate;border-spacing:" + transUnit( value );
                                    continue;

                                case "text-line-through":
                                    if ( (value == "single") || (value == "double") ) {
                                        n[i] = "text-decoration:line-through";
                                    }
                                    continue;
                                case "mso-zero-height":
                                    if ( value == "yes" ) {
                                        n[i] = "display:none";
                                    }
                                    continue;
                                case 'background':
                                    if(value == 'initial'){

                                    }
                                    break;
                                case 'margin':
                                    if ( !/[1-9]/.test( value ) ) {
                                        continue;
                                    }

                            }

                            if ( /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test( name )
                                ||
                                /text\-indent|padding|margin/.test(name) && /\-[\d.]+/.test(value)
                            ) {
                                continue;
                            }

                            n[i] = name + ":" + parts[1];
                        }
                    }
                    return tag + (n.length ? ' style="' + n.join( ';').replace(/;{2,}/g,';') + '"' : '');
                })
            .replace(/[\d.]+(cm|pt)/g,function(str){
                return utils.transUnitToPx(str)
            })

    }

    return function ( html ) {
        return (isWordDocument( html ) ? filterPasteWord( html ) : html).replace( />[ \t\r\n]*</g, '><' );
    };
}();
///import core
/**
 * @description æ�’å…¥å†…å®¹
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     inserthtmlæ�’å…¥å†…å®¹çš„å‘½ä»¤
 * @param   {String}   html                è¦�æ�’å…¥çš„å†…å®¹
 * @author zhanyi
    */
    UE.commands['inserthtml'] = {
        execCommand: function (command,html,notSerialize){
            var me = this,
                range,
                div,
                tds = me.currentSelectedArr;

            range = me.selection.getRange();

            div = range.document.createElement( 'div' );
            div.style.display = 'inline';
            var serialize = me.serialize;
            if (!notSerialize && serialize) {
                var node = serialize.parseHTML(html);
                node = serialize.transformInput(node);
                node = serialize.filter(node);
                html = serialize.toHTML(node);
            }
            div.innerHTML = utils.trim( html );
            try{
                me.adjustTable && me.adjustTable(div);
            }catch(e){}


            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    ti.className = '';
                }
                tds[0].innerHTML = '';
                range.setStart(tds[0],0).collapse(true);
                me.currentSelectedArr = [];
            }

            if ( !range.collapsed ) {

                range.deleteContents();
                if(range.startContainer.nodeType == 1){
                    var child = range.startContainer.childNodes[range.startOffset],pre;
                    if(child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)){
                        range.setEnd(pre,pre.childNodes.length).collapse();
                        while(child.firstChild){
                            pre.appendChild(child.firstChild);

                        }
                        domUtils.remove(child);
                    }
                }

            }


            var child,parent,pre,tmp,hadBreak = 0;
            while ( child = div.firstChild ) {
                range.insertNode( child );
                if ( !hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm( child ) ){

                    parent = domUtils.findParent( child,function ( node ){ return domUtils.isBlockElm( node ); } );
                    if ( parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)){
                        if(!dtd[parent.tagName][child.nodeName]){
                            pre = parent;
                        }else{
                            tmp = child.parentNode;
                            while (tmp !== parent){
                                pre = tmp;
                                tmp = tmp.parentNode;
    
                            }    
                        }
                        
                       
                        domUtils.breakParent( child, pre || tmp );
                        //åŽ»æŽ‰breakå�Žå‰�ä¸€ä¸ªå¤šä½™çš„èŠ‚ç‚¹  <p>|<[p> ==> <p></p><div></div><p>|</p>
                        var pre = child.previousSibling;
                        domUtils.trimWhiteTextNode(pre);
                        if(!pre.childNodes.length){
                            domUtils.remove(pre);
                        }
                        //trace:2012,åœ¨é�žieçš„æƒ…å†µï¼Œåˆ‡å¼€å�Žå‰©ä¸‹çš„èŠ‚ç‚¹æœ‰å�¯èƒ½ä¸�èƒ½ç‚¹å…¥å…‰æ ‡æ·»åŠ brå� ä½�

                        if(!browser.ie &&
                            (next = child.nextSibling) &&
                            domUtils.isBlockElm(next) &&
                            next.lastChild &&
                            !domUtils.isBr(next.lastChild)){
                            next.appendChild(me.document.createElement('br'));
                        }
                        hadBreak = 1;
                    }
                }
                var next = child.nextSibling;
                if(!div.firstChild && next && domUtils.isBlockElm(next)){

                    range.setStart(next,0).collapse(true);
                    break;
                }
                range.setEndAfter( child ).collapse();

            }


            child = range.startContainer;

            //ç”¨chromeå�¯èƒ½æœ‰ç©ºç™½å±•ä½�ç¬¦
            if(domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)){
                child.innerHTML = browser.ie ? '' : '<br/>';
            }
            //åŠ ä¸Štrueå› ä¸ºåœ¨åˆ é™¤è¡¨æƒ…ç­‰æ—¶ä¼šåˆ ä¸¤æ¬¡ï¼Œç¬¬ä¸€æ¬¡æ˜¯åˆ çš„fillData
            range.select(true);


            setTimeout(function(){
                range = me.selection.getRange();
                range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
            },200);



            
        }
    };

///import core
///commands è‡ªåŠ¨æŽ’ç‰ˆ
///commandsName  autotypeset
///commandsTitle  è‡ªåŠ¨æŽ’ç‰ˆ
/**
 * è‡ªåŠ¨æŽ’ç‰ˆ
 * @function
 * @name baidu.editor.execCommands
 */

UE.plugins['autotypeset'] = function(){

    this.setOpt({'autotypeset':{
        mergeEmptyline : true,          //å�ˆå¹¶ç©ºè¡Œ
            removeClass : true,            //åŽ»æŽ‰å†—ä½™çš„class
            removeEmptyline : false,        //åŽ»æŽ‰ç©ºè¡Œ
            textAlign : "left",             //æ®µè�½çš„æŽ’ç‰ˆæ–¹å¼�ï¼Œå�¯ä»¥æ˜¯ left,right,center,justify åŽ»æŽ‰è¿™ä¸ªå±žæ€§è¡¨ç¤ºä¸�æ‰§è¡ŒæŽ’ç‰ˆ
            imageBlockLine : 'center',      //å›¾ç‰‡çš„æµ®åŠ¨æ–¹å¼�ï¼Œç‹¬å� ä¸€è¡Œå‰§ä¸­,å·¦å�³æµ®åŠ¨ï¼Œé»˜è®¤: center,left,right,none åŽ»æŽ‰è¿™ä¸ªå±žæ€§è¡¨ç¤ºä¸�æ‰§è¡ŒæŽ’ç‰ˆ
            pasteFilter : false,             //æ ¹æ�®è§„åˆ™è¿‡æ»¤æ²¡äº‹ç²˜è´´è¿›æ�¥çš„å†…å®¹
            clearFontSize : false,           //åŽ»æŽ‰æ‰€æœ‰çš„å†…åµŒå­—å�·ï¼Œä½¿ç”¨ç¼–è¾‘å™¨é»˜è®¤çš„å­—å�·
            clearFontFamily : false,         //åŽ»æŽ‰æ‰€æœ‰çš„å†…åµŒå­—ä½“ï¼Œä½¿ç”¨ç¼–è¾‘å™¨é»˜è®¤çš„å­—ä½“
            removeEmptyNode : false,         // åŽ»æŽ‰ç©ºèŠ‚ç‚¹
            //å�¯ä»¥åŽ»æŽ‰çš„æ ‡ç­¾
            removeTagNames : utils.extend({div:1},dtd.$removeEmpty),
            indent : false,                  // è¡Œé¦–ç¼©è¿›
            indentValue : '2em'             //è¡Œé¦–ç¼©è¿›çš„å¤§å°�
    }});
    var me = this,
        opt = me.options.autotypeset,
        remainClass = {
            'selectTdClass':1,
            'pagebreak':1,
            'anchorclass':1
        },
        remainTag = {
            'li':1
        },
        tags = {
            div:1,
            p:1,
            //trace:2183 è¿™äº›ä¹Ÿè®¤ä¸ºæ˜¯è¡Œ
            blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,
            span:1
        },
        highlightCont;
    //å�‡çº§äº†ç‰ˆæœ¬ï¼Œä½†é…�ç½®é¡¹ç›®é‡Œæ²¡æœ‰autotypeset
    if(!opt){
        return;
    }
    function isLine(node,notEmpty){
        if(!node || node.nodeType == 3)
            return 0;
        if(domUtils.isBr(node))
            return 1;
        if(node && node.parentNode && tags[node.tagName.toLowerCase()]){
            if(highlightCont && highlightCont.contains(node)
                ||
                node.getAttribute('pagebreak')
            ){
                return 0;
            }

            return notEmpty ? !domUtils.isEmptyBlock(node) : domUtils.isEmptyBlock(node);
        }
    }

    function removeNotAttributeSpan(node){
        if(!node.style.cssText){
            domUtils.removeAttributes(node,['style']);
            if(node.tagName.toLowerCase() == 'span' && domUtils.hasNoAttributes(node)){
                domUtils.remove(node,true);
            }
        }
    }
    function autotype(type,html){

        var cont;
        if(html){
            if(!opt.pasteFilter){
                return;
            }
            cont = me.document.createElement('div');
            cont.innerHTML = html.html;
        }else{
            cont = me.document.body;
        }
        var nodes = domUtils.getElementsByTagName(cont,'*');

          // è¡Œé¦–ç¼©è¿›ï¼Œæ®µè�½æ–¹å�‘ï¼Œæ®µé—´è·�ï¼Œæ®µå†…é—´è·�
        for(var i=0,ci;ci=nodes[i++];){
            if(!highlightCont && ci.tagName == 'DIV' && ci.getAttribute('highlighter')){
                highlightCont = ci;
            }
             //font-size
            if(opt.clearFontSize && ci.style.fontSize){
                domUtils.removeStyle(ci,'font-size');

                removeNotAttributeSpan(ci);

            }
            //font-family
            if(opt.clearFontFamily && ci.style.fontFamily){
                domUtils.removeStyle(ci,'font-family');
                removeNotAttributeSpan(ci);
            }

            if(isLine(ci)){
                //å�ˆå¹¶ç©ºè¡Œ
                if(opt.mergeEmptyline ){
                    var next = ci.nextSibling,tmpNode,isBr = domUtils.isBr(ci);
                    while(isLine(next)){
                        tmpNode = next;
                        next = tmpNode.nextSibling;
                        if(isBr && (!next || next && !domUtils.isBr(next))){
                            break;
                        }
                        domUtils.remove(tmpNode);
                    }

                }
                 //åŽ»æŽ‰ç©ºè¡Œï¼Œä¿�ç•™å� ä½�çš„ç©ºè¡Œ
                if(opt.removeEmptyline && domUtils.inDoc(ci,cont) && !remainTag[ci.parentNode.tagName.toLowerCase()] ){
                    if(domUtils.isBr(ci)){
                        next = ci.nextSibling;
                        if(next && !domUtils.isBr(next)){
                            continue;
                        }
                    }
                    domUtils.remove(ci);
                    continue;

                }

            }
            if(isLine(ci,true) && ci.tagName != 'SPAN'){
                if(opt.indent){
                    ci.style.textIndent = opt.indentValue;
                }
                if(opt.textAlign){
                    ci.style.textAlign = opt.textAlign;
                }
//                if(opt.lineHeight)
//                    ci.style.lineHeight = opt.lineHeight + 'cm';


            }

            //åŽ»æŽ‰class,ä¿�ç•™çš„classä¸�åŽ»æŽ‰
            if(opt.removeClass && ci.className && !remainClass[ci.className.toLowerCase()]){

                if(highlightCont && highlightCont.contains(ci)){
                     continue;
                }
                domUtils.removeAttributes(ci,['class']);
            }

            //è¡¨æƒ…ä¸�å¤„ç�†
            if(opt.imageBlockLine && ci.tagName.toLowerCase() == 'img' && !ci.getAttribute('emotion')){
                if(html){
                    var img = ci;
                    switch (opt.imageBlockLine){
                        case 'left':
                        case 'right':
                        case 'none':
                            var pN = img.parentNode,tmpNode,pre,next;
                            while(dtd.$inline[pN.tagName] || pN.tagName == 'A'){
                                pN = pN.parentNode;
                            }
                            tmpNode = pN;
                            if(tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode,'text-align') == 'center'){
                                if(!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1){
                                    pre = tmpNode.previousSibling;
                                    next = tmpNode.nextSibling;
                                    if(pre && next && pre.nodeType == 1 &&  next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)){
                                        pre.appendChild(tmpNode.firstChild);
                                        while(next.firstChild){
                                            pre.appendChild(next.firstChild);
                                        }
                                        domUtils.remove(tmpNode);
                                        domUtils.remove(next);
                                    }else{
                                        domUtils.setStyle(tmpNode,'text-align','');
                                    }


                                }


                            }
                            domUtils.setStyle(img,'float',opt.imageBlockLine);
                            break;
                        case 'center':
                            if(me.queryCommandValue('imagefloat') != 'center'){
                                pN = img.parentNode;
                                domUtils.setStyle(img,'float','none');
                                tmpNode = img;
                                while(pN && domUtils.getChildCount(pN,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1
                                    && (dtd.$inline[pN.tagName] || pN.tagName == 'A')){
                                    tmpNode = pN;
                                    pN = pN.parentNode;
                                }
                                var pNode = me.document.createElement('p');
                                domUtils.setAttributes(pNode,{

                                    style:'text-align:center'
                                });
                                tmpNode.parentNode.insertBefore(pNode,tmpNode);
                                pNode.appendChild(tmpNode);
                                domUtils.setStyle(tmpNode,'float','');

                            }


                    }
                }else{
                    var range = me.selection.getRange();
                    range.selectNode(ci).select();
                    me.execCommand('imagefloat',opt.imageBlockLine);
                }



            }

            //åŽ»æŽ‰å†—ä½™çš„æ ‡ç­¾
            if(opt.removeEmptyNode){
                if(opt.removeTagNames[ci.tagName.toLowerCase()] && domUtils.hasNoAttributes(ci) && domUtils.isEmptyBlock(ci)){
                    domUtils.remove(ci);
                }
            }
        }
        if(html){
            html.html = cont.innerHTML;
        }
    }
    if(opt.pasteFilter){
        me.addListener('beforepaste',autotype);
    }

    me.commands['autotypeset'] = {
        execCommand:function () {
            me.removeListener('beforepaste',autotype);
            if(opt.pasteFilter){
                me.addListener('beforepaste',autotype);
            }
            autotype();
        }

    };

};


UE.commands['autosubmit'] = {
    execCommand:function () {
        var me=this,
            form = domUtils.findParentByTagName(me.iframe,"form", false);

        if (form)    {
            if(me.fireEvent("beforesubmit")===false){
                return;
            }
            me.sync();
            form.submit();
        }

    }
};
(function() {
    UE.plugins['background'] = function(){
        var me = this;
        UE.commands['background'] = {
            queryCommandState : function(){
                return this.highlight ? -1 : 0;
            }
        };
        me.addListener("getAllHtml",function(type,headHtml){
            var body = this.body,
                su = domUtils.getComputedStyle(body,"background-image"),
                url="";
            if(su.indexOf(me.options.imagePath)>0){
                url =  su.substring(su.indexOf(me.options.imagePath),su.length-1).replace(/"|\(|\)/ig,"");
            }else{
                url =  su!="none" ? su.replace(/url\("?|"?\)/ig,""):"";
            }
            headHtml.html += '<style type="text/css">body{';
            var bgObj = {
                "background-color" : domUtils.getComputedStyle(body,"background-color")||"#ffffff",
                'background-image' : url ? 'url('+url+')' : '',
                'background-repeat':domUtils.getComputedStyle(body,"background-repeat")||"",
                'background-position': browser.ie?(domUtils.getComputedStyle(body,"background-position-x")+" "+domUtils.getComputedStyle(body,"background-position-y")):domUtils.getComputedStyle(body,"background-position"),
                'height':domUtils.getComputedStyle(body,"height")
            };
            for ( var name in bgObj ) {
                if ( bgObj.hasOwnProperty( name ) ) {
                    headHtml.html += name+":"+bgObj[name]+";";
                }
            }
            headHtml.html += '}</style> ';
        });
    }
})();
///import core
///import plugins\inserthtml.js
///import plugins\catchremoteimage.js
///commands æ�’å…¥å›¾ç‰‡ï¼Œæ“�ä½œå›¾ç‰‡çš„å¯¹é½�æ–¹å¼�
///commandsName  InsertImage,ImageNone,ImageLeft,ImageRight,ImageCenter
///commandsTitle  å›¾ç‰‡,é»˜è®¤,å±…å·¦,å±…å�³,å±…ä¸­
///commandsDialog  dialogs\image\image.html
/**
 * Created by .
 * User: zhanyi
 * for image
 */

UE.commands['imagefloat'] = {
    execCommand:function ( cmd, align ) {
        var me = this,
                range = me.selection.getRange();
        if ( !range.collapsed ) {
            var img = range.getClosedNode();
            if ( img && img.tagName == 'IMG' ) {
                switch ( align ) {
                    case 'left':
                    case 'right':
                    case 'none':
                        var pN = img.parentNode, tmpNode, pre, next;
                        while ( dtd.$inline[pN.tagName] || pN.tagName == 'A' ) {
                            pN = pN.parentNode;
                        }
                        tmpNode = pN;
                        if ( tmpNode.tagName == 'P' && domUtils.getStyle( tmpNode, 'text-align' ) == 'center' ) {
                            if ( !domUtils.isBody( tmpNode ) && domUtils.getChildCount( tmpNode, function ( node ) {
                                return !domUtils.isBr( node ) && !domUtils.isWhitespace( node );
                            } ) == 1 ) {
                                pre = tmpNode.previousSibling;
                                next = tmpNode.nextSibling;
                                if ( pre && next && pre.nodeType == 1 && next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm( pre ) ) {
                                    pre.appendChild( tmpNode.firstChild );
                                    while ( next.firstChild ) {
                                        pre.appendChild( next.firstChild );
                                    }
                                    domUtils.remove( tmpNode );
                                    domUtils.remove( next );
                                } else {
                                    domUtils.setStyle( tmpNode, 'text-align', '' );
                                }


                            }

                            range.selectNode( img ).select();
                        }
                        domUtils.setStyle( img, 'float', align );
                        break;
                    case 'center':
                        if ( me.queryCommandValue( 'imagefloat' ) != 'center' ) {
                            pN = img.parentNode;
                            domUtils.setStyle( img, 'float', 'none' );
                            tmpNode = img;
                            while ( pN && domUtils.getChildCount( pN, function ( node ) {
                                return !domUtils.isBr( node ) && !domUtils.isWhitespace( node );
                            } ) == 1
                                    && (dtd.$inline[pN.tagName] || pN.tagName == 'A') ) {
                                tmpNode = pN;
                                pN = pN.parentNode;
                            }
                            range.setStartBefore( tmpNode ).setCursor( false );
                            pN = me.document.createElement( 'div' );
                            pN.appendChild( tmpNode );
                            domUtils.setStyle( tmpNode, 'float', '' );

                            me.execCommand( 'insertHtml', '<p id="_img_parent_tmp" style="text-align:center">' + pN.innerHTML + '</p>' );

                            tmpNode = me.document.getElementById( '_img_parent_tmp' );
                            tmpNode.removeAttribute( 'id' );
                            tmpNode = tmpNode.firstChild;
                            range.selectNode( tmpNode ).select();
                            //åŽ»æŽ‰å�Žè¾¹å¤šä½™çš„å…ƒç´ 
                            next = tmpNode.parentNode.nextSibling;
                            if ( next && domUtils.isEmptyNode( next ) ) {
                                domUtils.remove( next );
                            }

                        }

                        break;
                }

            }
        }
    },
    queryCommandValue:function () {
        var range = this.selection.getRange(),
                startNode, floatStyle;
        if ( range.collapsed ) {
            return 'none';
        }
        startNode = range.getClosedNode();
        if ( startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG' ) {
            floatStyle = domUtils.getComputedStyle( startNode, 'float' );
            if ( floatStyle == 'none' ) {
                floatStyle = domUtils.getComputedStyle( startNode.parentNode, 'text-align' ) == 'center' ? 'center' : floatStyle;
            }
            return {
                left:1,
                right:1,
                center:1
            }[floatStyle] ? floatStyle : 'none';
        }
        return 'none';


    },
    queryCommandState:function () {
        if ( this.highlight ) {
            return -1;
        }
        var range = this.selection.getRange(),
                startNode;
        if ( range.collapsed ) {
            return -1;
        }
        startNode = range.getClosedNode();
        if ( startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG' ) {
            return 0;
        }
        return -1;
    }
};

UE.commands['insertimage'] = {
    execCommand:function ( cmd, opt ) {

        opt = utils.isArray( opt ) ? opt : [opt];
        if ( !opt.length ) {
            return;
        }
        var me = this,
                range = me.selection.getRange(),
                img = range.getClosedNode();
        if ( img && /img/i.test( img.tagName ) && img.className != "edui-faked-video" && !img.getAttribute( "word_img" ) ) {
            var first = opt.shift();
            var floatStyle = first['floatStyle'];
            delete first['floatStyle'];
////                img.style.border = (first.border||0) +"px solid #000";
////                img.style.margin = (first.margin||0) +"px";
//                img.style.cssText += ';margin:' + (first.margin||0) +"px;" + 'border:' + (first.border||0) +"px solid #000";
            domUtils.setAttributes( img, first );
            me.execCommand( 'imagefloat', floatStyle );
            if ( opt.length > 0 ) {
                range.setStartAfter( img ).setCursor( false, true );
                me.execCommand( 'insertimage', opt );
            }

        } else {
            var html = [], str = '', ci;
            ci = opt[0];
            if ( opt.length == 1 ) {
                str = '<img src="' + ci.src + '" ' + (ci.data_ue_src ? ' data_ue_src="' + ci.data_ue_src + '" ' : '') +
                        (ci.width ? 'width="' + ci.width + '" ' : '') +
                        (ci.height ? ' height="' + ci.height + '" ' : '') +
                        (ci['floatStyle'] == 'left' || ci['floatStyle'] == 'right' ? ' style="float:' + ci['floatStyle'] + ';"' : '') +
                        (ci.title && ci.title != "" ? ' title="' + ci.title + '"' : '') +
                        (ci.border && ci.border != "0" ? ' border="' + ci.border + '"' : '') +
                        (ci.alt && ci.alt != "" ? ' alt="' + ci.alt + '"' : '') +
                        (ci.hspace && ci.hspace != "0" ? ' hspace = "' + ci.hspace + '"' : '') +
                        (ci.vspace && ci.vspace != "0" ? ' vspace = "' + ci.vspace + '"' : '') + '/>';
                if ( ci['floatStyle'] == 'center' ) {
                    str = '<p style="text-align: center">' + str + '</p>';
                }
                html.push( str );

            } else {
                for ( var i = 0; ci = opt[i++]; ) {
                    str = '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="' + ci.src + '" ' +
                            (ci.width ? 'width="' + ci.width + '" ' : '') + (ci.data_ue_src ? ' data_ue_src="' + ci.data_ue_src + '" ' : '') +
                            (ci.height ? ' height="' + ci.height + '" ' : '') +
                            ' style="' + (ci['floatStyle'] && ci['floatStyle'] != 'center' ? 'float:' + ci['floatStyle'] + ';' : '') +
                            (ci.border || '') + '" ' +
                            (ci.title ? ' title="' + ci.title + '"' : '') + ' /></p>';
                    html.push( str );
                }
            }

            me.execCommand( 'insertHtml', html.join( '' ) );
        }
    },
    queryCommandState:function () {
        return this.highlight ? -1 : 0;
    }
};
///import core
///commands æ®µè�½æ ¼å¼�,å±…å·¦,å±…å�³,å±…ä¸­,ä¸¤ç«¯å¯¹é½�
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  å±…å·¦å¯¹é½�,å±…ä¸­å¯¹é½�,å±…å�³å¯¹é½�,ä¸¤ç«¯å¯¹é½�
/**
 * @description å±…å·¦å�³ä¸­
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     justifyæ‰§è¡Œå¯¹é½�æ–¹å¼�çš„å‘½ä»¤
 * @param   {String}   align               å¯¹é½�æ–¹å¼�ï¼šleftå±…å·¦ï¼Œrightå±…å�³ï¼Œcenterå±…ä¸­ï¼Œjustifyä¸¤ç«¯å¯¹é½�
 * @author zhanyi
 */
(function(){
    var block = domUtils.isBlockElm,
        defaultValue = {
            left : 1,
            right : 1,
            center : 1,
            justify : 1
        },
        doJustify = function(range,style){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node );
                };

            range.enlarge(true);
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode(bookmark2.start,false,filterFn),
                tmpRange = range.cloneRange(),
                tmpNode;
            while(current &&  !(domUtils.getPosition(current,bookmark2.end)&domUtils.POSITION_FOLLOWING)){
                if(current.nodeType == 3 || !block(current)){
                    tmpRange.setStartBefore(current);
                    while(current && current!==bookmark2.end &&  !block(current)){
                        tmpNode = current;
                        current = domUtils.getNextDomNode(current,false,null,function(node){
                            return !block(node);
                        });
                    }
                    tmpRange.setEndAfter(tmpNode);
                    var common = tmpRange.getCommonAncestor();
                    if( !domUtils.isBody(common) && block(common)){
                        domUtils.setStyles(common,utils.isString(style) ? {'text-align':style} : style);
                        current = common;
                    }else{
                        var p = range.document.createElement('p');
                         domUtils.setStyles(p,utils.isString(style) ? {'text-align':style} : style);
                        var frag = tmpRange.extractContents();
                        p.appendChild(frag);
                        tmpRange.insertNode(p);
                        current = p;
                    }
                    current = domUtils.getNextDomNode(current,false,filterFn);
                }else{
                    current = domUtils.getNextDomNode(current,true,filterFn);
                }
            }
            return range.moveToBookmark(bookmark2).moveToBookmark(bookmark);
        };
    UE.commands['justify'] =  {
        execCommand : function( cmdName,align ) {

            var  range = this.selection.getRange(),
                txt;
           
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    if(domUtils.isEmptyNode(ti)){
                        txt = this.document.createTextNode('p');
                        range.setStart(ti,0).collapse(true).insertNode(txt).selectNode(txt);
                        
                    }else{
                        range.selectNodeContents(ti);
                    }

                    doJustify(range,align.toLowerCase());
                    txt && domUtils.remove(txt);
                }
                range.selectNode(this.currentSelectedArr[0]).select();
            }else{

                //é—­å�ˆæ—¶å�•ç‹¬å¤„ç�†
                if(range.collapsed){
                    txt = this.document.createTextNode('p');
                    range.insertNode(txt);
                }
                doJustify(range,align);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
                
                range.select();

            }
            return true;
        },
        queryCommandValue : function() {
            var startNode = this.selection.getStart(),
                value = domUtils.getComputedStyle(startNode,'text-align');
            return defaultValue[value] ? value : 'left';
        },
        queryCommandState : function(){
            return this.highlight ? -1 : 0;
                
        }

    };


})();

///import core
///import plugins\removeformat.js
///commands å­—ä½“é¢œè‰²,èƒŒæ™¯è‰²,å­—å�·,å­—ä½“,ä¸‹åˆ’çº¿,åˆ é™¤çº¿
///commandsName  ForeColor,BackColor,FontSize,FontFamily,Underline,StrikeThrough
///commandsTitle  å­—ä½“é¢œè‰²,èƒŒæ™¯è‰²,å­—å�·,å­—ä½“,ä¸‹åˆ’çº¿,åˆ é™¤çº¿
/**
 * @description å­—ä½“
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    æ‰§è¡Œçš„åŠŸèƒ½å��ç§°
 * @param {String}    value             ä¼ å…¥çš„å€¼
 */
UE.plugins['font'] = function() {
    var me = this,
        fonts = {
            'forecolor':'color',
            'backcolor':'background-color',
            'fontsize':'font-size',
            'fontfamily':'font-family',
            'underline':'text-decoration',
            'strikethrough':'text-decoration'
        };
    me.setOpt({
        'fontfamily':[
            { name:'songti',val:'å®‹ä½“,SimSun'},
            { name:'yahei',val:'å¾®è½¯é›…é»‘,Microsoft YaHei'},
            { name:'kaiti',val:'æ¥·ä½“,æ¥·ä½“_GB2312, SimKai'},
            { name:'heiti',val:'é»‘ä½“, SimHei'},
            { name:'lishu',val:'éš¶ä¹¦, SimLi'},
            { name:'andaleMono',val:'andale mono'},
            { name:'arial',val:'arial, helvetica,sans-serif'},
            { name:'arialBlack',val:'arial black,avant garde'},
            { name:'comicSansMs',val:'comic sans ms'},
            { name:'impact',val:'impact,chicago'},
            { name:'timesNewRoman',val:'times new roman'}
          ],
        'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]
    });

    for ( var p in fonts ) {
        (function( cmd, style ) {
            UE.commands[cmd] = {
                execCommand : function( cmdName, value ) {
                    value = value || (this.queryCommandState(cmdName) ? 'none' : cmdName == 'underline' ? 'underline' : 'line-through');
                    var me = this,
                        range = this.selection.getRange(),
                        text;

                    if ( value == 'default' ) {

                        if(range.collapsed){
                            text = me.document.createTextNode('font');
                            range.insertNode(text).select();

                        }
                        me.execCommand( 'removeFormat', 'span,a', style);
                        if(text){
                            range.setStartBefore(text).setCursor();
                            domUtils.remove(text);
                        }


                    } else {
                        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                                range.selectNodeContents(ci);
                                range.applyInlineStyle( 'span', {'style':style + ':' + value} );

                            }
                            range.selectNodeContents(this.currentSelectedArr[0]).select();
                        }else{
                            if ( !range.collapsed ) {
                                if((cmd == 'underline'||cmd=='strikethrough') && me.queryCommandValue(cmd)){
                                     me.execCommand( 'removeFormat', 'span,a', style );
                                }
                                range = me.selection.getRange();

                                range.applyInlineStyle( 'span', {'style':style + ':' + value} ).select();
                            } else {

                                var span = domUtils.findParentByTagName(range.startContainer,'span',true);
                                text = me.document.createTextNode('font');
                                if(span && !span.children.length && !span[browser.ie ? 'innerText':'textContent'].replace(fillCharReg,'').length){
                                    //for ie hack when enter
                                    range.insertNode(text);
                                     if(cmd == 'underline'||cmd=='strikethrough'){
                                         range.selectNode(text).select();
                                         me.execCommand( 'removeFormat','span,a', style, null );

                                         span = domUtils.findParentByTagName(text,'span',true);
                                         range.setStartBefore(text);

                                    }
                                    span.style.cssText += ';' + style + ':' + value;
                                    range.collapse(true).select();


                                }else{
                                    range.insertNode(text);
                                    range.selectNode(text).select();
                                    span = range.document.createElement( 'span' );

                                    if(cmd == 'underline'||cmd=='strikethrough'){
                                        //aæ ‡ç­¾å†…çš„ä¸�å¤„ç�†è·³è¿‡
                                        if(domUtils.findParentByTagName(text,'a',true)){
                                            range.setStartBefore(text).setCursor();
                                             domUtils.remove(text);
                                             return;
                                         }
                                         me.execCommand( 'removeFormat','span,a', style );
                                    }

                                    span.style.cssText = style + ':' + value;


                                    text.parentNode.insertBefore(span,text);
                                    //ä¿®å¤�ï¼Œspanå¥—span ä½†æ ·å¼�ä¸�ç»§æ‰¿çš„é—®é¢˜
                                    if(!browser.ie || browser.ie && browser.version == 9){
                                        var spanParent = span.parentNode;
                                        while(!domUtils.isBlockElm(spanParent)){
                                            if(spanParent.tagName == 'SPAN'){
                                                //operaå�ˆå¹¶styleä¸�ä¼šåŠ å…¥";"
                                                span.style.cssText = spanParent.style.cssText + ";" + span.style.cssText;
                                            }
                                            spanParent = spanParent.parentNode;
                                        }
                                    }


                                    if(opera){
                                        setTimeout(function(){
                                            range.setStart(span,0).setCursor();
                                        });
                                    }else{
                                        range.setStart(span,0).setCursor();
                                    }

                                    //trace:981
                                    //domUtils.mergeToParent(span)


                                }
                                domUtils.remove(text);
                            }
                        }

                    }
                    return true;
                },
                queryCommandValue : function (cmdName) {
                    var startNode = this.selection.getStart();

                    //trace:946
                    if(cmdName == 'underline'||cmdName=='strikethrough' ){
                        var tmpNode = startNode,value;
                        while(tmpNode && !domUtils.isBlockElm(tmpNode) && !domUtils.isBody(tmpNode)){
                            if(tmpNode.nodeType == 1){
                                value = domUtils.getComputedStyle( tmpNode, style );

                                if(value != 'none'){
                                    return value;
                                }
                            }

                            tmpNode = tmpNode.parentNode;
                        }
                        return 'none';
                    }
                    return  domUtils.getComputedStyle( startNode, style );
                },
                queryCommandState : function(cmdName){
                    if(this.highlight){
                       return -1;
                   }
                    if(!(cmdName == 'underline'||cmdName=='strikethrough')){
                        return 0;
                    }
                    return this.queryCommandValue(cmdName) == (cmdName == 'underline' ? 'underline' : 'line-through');
                }
            };
        })( p, fonts[p] );
    }


};
///import core
///commands è¶…é“¾æŽ¥,å�–æ¶ˆé“¾æŽ¥
///commandsName  Link,Unlink
///commandsTitle  è¶…é“¾æŽ¥,å�–æ¶ˆé“¾æŽ¥
///commandsDialog  dialogs\link\link.html
/**
 * è¶…é“¾æŽ¥
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     linkæ�’å…¥è¶…é“¾æŽ¥
 * @param   {Object}  options         urlåœ°å�€ï¼Œtitleæ ‡é¢˜ï¼Œtargetæ˜¯å�¦æ‰“å¼€æ–°é¡µ
 * @author zhanyi
 */
/**
 * å�–æ¶ˆé“¾æŽ¥
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     unlinkå�–æ¶ˆé“¾æŽ¥
 * @author zhanyi
 */
(function() {
    function optimize( range ) {
        var start = range.startContainer,end = range.endContainer;

        if ( start = domUtils.findParentByTagName( start, 'a', true ) ) {
            range.setStartBefore( start );
        }
        if ( end = domUtils.findParentByTagName( end, 'a', true ) ) {
            range.setEndAfter( end );
        }
    }


    UE.commands['unlink'] = {
        execCommand : function() {
            var as,
                range = new dom.Range(this.document),
                tds = this.currentSelectedArr,
                bookmark;
            if(tds && tds.length >0){
                for(var i=0,ti;ti=tds[i++];){
                    as = domUtils.getElementsByTagName(ti,'a');
                    for(var j=0,aj;aj=as[j++];){
                        domUtils.remove(aj,true);
                    }
                }
                if(domUtils.isEmptyNode(tds[0])){
                    range.setStart(tds[0],0).setCursor();
                }else{
                    range.selectNodeContents(tds[0]).select();
                }
            }else{
                range = this.selection.getRange();
                if(range.collapsed && !domUtils.findParentByTagName( range.startContainer, 'a', true )){
                    return;
                }
                bookmark = range.createBookmark();
                optimize( range );
                range.removeInlineStyle( 'a' ).moveToBookmark( bookmark ).select();
            }
        },
        queryCommandState : function(){
            return !this.highlight && this.queryCommandValue('link') ?  0 : -1;
        }

    };
    function doLink(range,opt,me){
        var rngClone = range.cloneRange(),
            link = me.queryCommandValue('link');
        optimize( range = range.adjustmentBoundary() );
        var start = range.startContainer;
        if(start.nodeType == 1 && link){
            start = start.childNodes[range.startOffset];
            if(start && start.nodeType == 1 && start.tagName == 'A' && /^(?:https?|ftp|file)\s*:\s*\/\//.test(start[browser.ie?'innerText':'textContent'])){
                start[browser.ie ? 'innerText' : 'textContent'] =  utils.html(opt.textValue||opt.href);

            }
        }
        if( !rngClone.collapsed || link){
            range.removeInlineStyle( 'a' );
            rngClone = range.cloneRange();
        }

        if ( rngClone.collapsed ) {
            var a = range.document.createElement( 'a'),
                text = '';
            if(opt.textValue){

                text =   utils.html(opt.textValue);
                delete opt.textValue;
            }else{
                text =   utils.html(opt.href);

            }
            domUtils.setAttributes( a, opt );
            start =  domUtils.findParentByTagName( rngClone.startContainer, 'a', true );
            if(start && domUtils.isInNodeEndBoundary(rngClone,start)){
                range.setStartAfter(start).collapse(true);

            }
            a[browser.ie ? 'innerText' : 'textContent'] = text;
            range.insertNode(a).selectNode( a );
        } else {
            range.applyInlineStyle( 'a', opt );

        }
    }
    UE.commands['link'] = {
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        },
        execCommand : function( cmdName, opt ) {

            var range = new dom.Range(this.document),
                tds = this.currentSelectedArr;

            opt.data_ue_src && (opt.data_ue_src = utils.unhtml(opt.data_ue_src,/[<">]/g));
            opt.href && (opt.href = utils.unhtml(opt.href,/[<">]/g));
            opt.textValue && (opt.textValue = utils.unhtml(opt.textValue,/[<">]/g));
            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    if(domUtils.isEmptyNode(ti)){
                        ti[browser.ie ? 'innerText' : 'textContent'] =   utils.html(opt.textValue || opt.href);
                    }
                    doLink(range.selectNodeContents(ti),opt,this);
                }
                range.selectNodeContents(tds[0]).select();


            }else{
                doLink(range=this.selection.getRange(),opt,this);
                //é—­å�ˆéƒ½ä¸�åŠ å� ä½�ç¬¦ï¼Œå¦‚æžœåŠ äº†ä¼šåœ¨aå�Žè¾¹å¤šä¸ªå� ä½�ç¬¦èŠ‚ç‚¹ï¼Œå¯¼è‡´aæ˜¯å›¾ç‰‡èƒŒæ™¯ç»„æˆ�çš„åˆ—è¡¨ï¼Œå‡ºçŽ°ç©ºç™½é—®é¢˜
                range.collapse().select(true);

            }
        },
        queryCommandValue : function() {


            var range = new dom.Range(this.document),
                tds = this.currentSelectedArr,
                as,
                node;
            if(tds && tds.length){
                for(var i=0,ti;ti=tds[i++];){
                    as = ti.getElementsByTagName('a');
                    if(as[0]){
                        return as[0];
                    }
                }
            }else{
                range = this.selection.getRange();



                if ( range.collapsed ) {
//                    node = this.selection.getStart();
                    //åœ¨ieä¸‹getstart()å�–å€¼å��ä¸Šäº†
                    node = range.startContainer;
                    node = node.nodeType == 1 ? node : node.parentNode;

                    if ( node && (node = domUtils.findParentByTagName( node, 'a', true )) && ! domUtils.isInNodeEndBoundary(range,node)) {

                        return node;
                    }
                } else {
                    //trace:1111  å¦‚æžœæ˜¯<p><a>xx</a></p> startContaineræ˜¯på°±ä¼šæ‰¾ä¸�åˆ°a
                    range.shrinkBoundary();
                    var start = range.startContainer.nodeType  == 3 || !range.startContainer.childNodes[range.startOffset] ? range.startContainer : range.startContainer.childNodes[range.startOffset],
                        end =  range.endContainer.nodeType == 3 || range.endOffset == 0 ? range.endContainer : range.endContainer.childNodes[range.endOffset-1],

                        common = range.getCommonAncestor();


                    node = domUtils.findParentByTagName( common, 'a', true );
                    if ( !node && common.nodeType == 1){

                        var as = common.getElementsByTagName( 'a' ),
                            ps,pe;

                        for ( var i = 0,ci; ci = as[i++]; ) {
                            ps = domUtils.getPosition( ci, start ),pe = domUtils.getPosition( ci,end);
                            if ( (ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                &&
                                (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                ) {
                                node = ci;
                                break;
                            }
                        }
                    }

                    return node;
                }
            }


        }
    };


})();

///import core
///import plugins\inserthtml.js
///commands åœ°å›¾
///commandsName  Map,GMap
///commandsTitle  Baiduåœ°å›¾,Googleåœ°å›¾
///commandsDialog  dialogs\map\map.html,dialogs\gmap\gmap.html
UE.commands['gmap'] =
UE.commands['map'] = {
     queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///import plugins\inserthtml.js
///commands æ�’å…¥æ¡†æž¶
///commandsName  InsertFrame
///commandsTitle  æ�’å…¥Iframe
///commandsDialog  dialogs\insertframe\insertframe.html

UE.plugins['insertframe'] = function() {
   var me =this;
    function deleteIframe(){
        me._iframe && delete me._iframe;
    }

    me.addListener("selectionchange",function(){
        deleteIframe();
    });
    me.commands["insertframe"] = {

        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};


/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-7-2
 * Time: ä¸‹å�ˆ5:22
 * To change this template use File | Settings | File Templates.
 */
UE.commands['scrawl'] = {
    queryCommandState : function(){
        return this.highlight|| ( browser.ie && browser.version  <= 8 ) ? -1 :0;
    }
};

///import core
///commands æ¸…é™¤æ ¼å¼�
///commandsName  RemoveFormat
///commandsTitle  æ¸…é™¤æ ¼å¼�
/**
 * @description æ¸…é™¤æ ¼å¼�
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     removeformatæ¸…é™¤æ ¼å¼�å‘½ä»¤
 * @param   {String}   tags                ä»¥é€—å�·éš”å¼€çš„æ ‡ç­¾ã€‚å¦‚ï¼šspan,a
 * @param   {String}   style               æ ·å¼�
 * @param   {String}   attrs               å±žæ€§
 * @param   {String}   notIncluedA    æ˜¯å�¦æŠŠaæ ‡ç­¾åˆ‡å¼€
 * @author zhanyi
 */
UE.plugins['removeformat'] = function(){
    var me = this;
    me.setOpt({
       'removeFormatTags': 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var',
       'removeFormatAttributes':'class,style,lang,width,height,align,hspace,valign'
    });
    me.commands['removeformat'] = {
        execCommand : function( cmdName, tags, style, attrs,notIncludeA ) {

            var tagReg = new RegExp( '^(?:' + (tags || this.options.removeFormatTags).replace( /,/g, '|' ) + ')$', 'i' ) ,
                removeFormatAttributes = style ? [] : (attrs || this.options.removeFormatAttributes).split( ',' ),
                range = new dom.Range( this.document ),
                bookmark,node,parent,
                filter = function( node ) {
                    return node.nodeType == 1;
                };

            function isRedundantSpan (node) {
                if (node.nodeType == 3 || node.tagName.toLowerCase() != 'span'){
                    return 0;
                }
                if (browser.ie) {
                    //ie ä¸‹åˆ¤æ–­å®žæ•ˆï¼Œæ‰€ä»¥å�ªèƒ½ç®€å�•ç”¨styleæ�¥åˆ¤æ–­
                    //return node.style.cssText == '' ? 1 : 0;
                    var attrs = node.attributes;
                    if ( attrs.length ) {
                        for ( var i = 0,l = attrs.length; i<l; i++ ) {
                            if ( attrs[i].specified ) {
                                return 0;
                            }
                        }
                        return 1;
                    }
                }
                return !node.attributes.length;
            }
            function doRemove( range ) {

                var bookmark1 = range.createBookmark();
                if ( range.collapsed ) {
                    range.enlarge( true );
                }

                //ä¸�èƒ½æŠŠaæ ‡ç­¾åˆ‡äº†
                if(!notIncludeA){
                    var aNode = domUtils.findParentByTagName(range.startContainer,'a',true);
                    if(aNode){
                        range.setStartBefore(aNode);
                    }

                    aNode = domUtils.findParentByTagName(range.endContainer,'a',true);
                    if(aNode){
                        range.setEndAfter(aNode);
                    }

                }


                bookmark = range.createBookmark();

                node = bookmark.start;

                //åˆ‡å¼€å§‹
                while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                    domUtils.breakParent( node, parent );

                    domUtils.clearEmptySibling( node );
                }
                if ( bookmark.end ) {
                    //åˆ‡ç»“æ�Ÿ
                    node = bookmark.end;
                    while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                        domUtils.breakParent( node, parent );
                        domUtils.clearEmptySibling( node );
                    }

                    //å¼€å§‹åŽ»é™¤æ ·å¼�
                    var current = domUtils.getNextDomNode( bookmark.start, false, filter ),
                        next;
                    while ( current ) {
                        if ( current == bookmark.end ) {
                            break;
                        }

                        next = domUtils.getNextDomNode( current, true, filter );

                        if ( !dtd.$empty[current.tagName.toLowerCase()] && !domUtils.isBookmarkNode( current ) ) {
                            if ( tagReg.test( current.tagName ) ) {
                                if ( style ) {
                                    domUtils.removeStyle( current, style );
                                    if ( isRedundantSpan( current ) && style != 'text-decoration'){
                                        domUtils.remove( current, true );
                                    }
                                } else {
                                    domUtils.remove( current, true );
                                }
                            } else {
                                //trace:939  ä¸�èƒ½æŠŠlistä¸Šçš„æ ·å¼�åŽ»æŽ‰
                                if(!dtd.$tableContent[current.tagName] && !dtd.$list[current.tagName]){
                                    domUtils.removeAttributes( current, removeFormatAttributes );
                                    if ( isRedundantSpan( current ) ){
                                        domUtils.remove( current, true );
                                    }
                                }

                            }
                        }
                        current = next;
                    }
                }
                //trace:1035
                //trace:1096 ä¸�èƒ½æŠŠtdä¸Šçš„æ ·å¼�åŽ»æŽ‰ï¼Œæ¯”å¦‚è¾¹æ¡†
                var pN = bookmark.start.parentNode;
                if(domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]){
                    domUtils.removeAttributes(  pN,removeFormatAttributes );
                }
                pN = bookmark.end.parentNode;
                if(bookmark.end && domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName]&& !dtd.$list[pN.tagName]){
                    domUtils.removeAttributes(  pN,removeFormatAttributes );
                }
                range.moveToBookmark( bookmark ).moveToBookmark(bookmark1);
                //æ¸…é™¤å†—ä½™çš„ä»£ç � <b><bookmark></b>
                var node = range.startContainer,
                    tmp,
                    collapsed = range.collapsed;
                while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                    tmp = node.parentNode;
                    range.setStartBefore(node);
                    //trace:937
                    //æ›´æ–°ç»“æ�Ÿè¾¹ç•Œ
                    if(range.startContainer === range.endContainer){
                        range.endOffset--;
                    }
                    domUtils.remove(node);
                    node = tmp;
                }

                if(!collapsed){
                    node = range.endContainer;
                    while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                        tmp = node.parentNode;
                        range.setEndBefore(node);
                        domUtils.remove(node);

                        node = tmp;
                    }


                }
            }

            if ( this.currentSelectedArr && this.currentSelectedArr.length ) {
                for ( var i = 0,ci; ci = this.currentSelectedArr[i++]; ) {
                    range.selectNodeContents( ci );
                    doRemove( range );
                }
                range.selectNodeContents( this.currentSelectedArr[0] ).select();
            } else {

                range = this.selection.getRange();
                doRemove( range );
                range.select();
            }
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }

    };

};

///import core
///commands å¼•ç”¨
///commandsName  BlockQuote
///commandsTitle  å¼•ç”¨
/**
 * 
 * å¼•ç”¨æ¨¡å�—å®žçŽ°
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     blockquoteå¼•ç”¨
 */


UE.plugins['blockquote'] = function(){
    var me = this;
    function getObj(editor){
        return domUtils.filterNodeList(editor.selection.getStartElementPath(),'blockquote');
    };
    me.commands['blockquote'] = {
        execCommand : function( cmdName, attrs ) {
            var range = this.selection.getRange(),
                obj = getObj(this),
                blockquote = dtd.blockquote,
                bookmark = range.createBookmark(),
                tds = this.currentSelectedArr;
            if ( obj ) {
                if(tds && tds.length){
                    domUtils.remove(obj,true);
                }else{
                    var start = range.startContainer,
                        startBlock = domUtils.isBlockElm(start) ? start : domUtils.findParent(start,function(node){return domUtils.isBlockElm(node)}),

                        end = range.endContainer,
                        endBlock = domUtils.isBlockElm(end) ? end :  domUtils.findParent(end,function(node){return domUtils.isBlockElm(node)});

                    //å¤„ç�†ä¸€ä¸‹li
                    startBlock = domUtils.findParentByTagName(startBlock,'li',true) || startBlock;
                    endBlock = domUtils.findParentByTagName(endBlock,'li',true) || endBlock;


                    if(startBlock.tagName == 'LI' || startBlock.tagName == 'TD' || startBlock === obj){
                        domUtils.remove(obj,true);
                    }else{
                        domUtils.breakParent(startBlock,obj);
                    }

                    if(startBlock !== endBlock){
                        obj = domUtils.findParentByTagName(endBlock,'blockquote');
                        if(obj){
                            if(endBlock.tagName == 'LI' || endBlock.tagName == 'TD'){
                                domUtils.remove(obj,true);
                            }else{
                                domUtils.breakParent(endBlock,obj);
                            }

                        }
                    }

                    var blockquotes = domUtils.getElementsByTagName(this.document,'blockquote');
                    for(var i=0,bi;bi=blockquotes[i++];){
                        if(!bi.childNodes.length){
                            domUtils.remove(bi);
                        }else if(domUtils.getPosition(bi,startBlock)&domUtils.POSITION_FOLLOWING && domUtils.getPosition(bi,endBlock)&domUtils.POSITION_PRECEDING){
                            domUtils.remove(bi,true);
                        }
                    }
                }



            } else {

                var tmpRange = range.cloneRange(),
                    node = tmpRange.startContainer.nodeType == 1 ? tmpRange.startContainer : tmpRange.startContainer.parentNode,
                    preNode = node,
                    doEnd = 1;

                //è°ƒæ•´å¼€å§‹
                while ( 1 ) {
                    if ( domUtils.isBody(node) ) {
                        if ( preNode !== node ) {
                            if ( range.collapsed ) {
                                tmpRange.selectNode( preNode );
                                doEnd = 0;
                            } else {
                                tmpRange.setStartBefore( preNode );
                            }
                        }else{
                            tmpRange.setStart(node,0);
                        }

                        break;
                    }
                    if ( !blockquote[node.tagName] ) {
                        if ( range.collapsed ) {
                            tmpRange.selectNode( preNode );
                        } else{
                            tmpRange.setStartBefore( preNode);
                        }
                        break;
                    }

                    preNode = node;
                    node = node.parentNode;
                }

                //è°ƒæ•´ç»“æ�Ÿ
                if ( doEnd ) {
                    preNode = node =  node = tmpRange.endContainer.nodeType == 1 ? tmpRange.endContainer : tmpRange.endContainer.parentNode;
                    while ( 1 ) {

                        if ( domUtils.isBody( node ) ) {
                            if ( preNode !== node ) {

                                tmpRange.setEndAfter( preNode );

                            } else {
                                tmpRange.setEnd( node, node.childNodes.length );
                            }

                            break;
                        }
                        if ( !blockquote[node.tagName] ) {
                            tmpRange.setEndAfter( preNode );
                            break;
                        }

                        preNode = node;
                        node = node.parentNode;
                    }

                }


                node = range.document.createElement( 'blockquote' );
                domUtils.setAttributes( node, attrs );
                node.appendChild( tmpRange.extractContents() );
                tmpRange.insertNode( node );
                //åŽ»é™¤é‡�å¤�çš„
                var childs = domUtils.getElementsByTagName(node,'blockquote');
                for(var i=0,ci;ci=childs[i++];){
                    if(ci.parentNode){
                        domUtils.remove(ci,true);
                    }
                }

            }
            range.moveToBookmark( bookmark ).select();
        },
        queryCommandState : function() {
            if(this.highlight){
                return -1;
            }
            return getObj(this) ? 1 : 0;
        }
    };
};


///import core
///commands å¤§å°�å†™è½¬æ�¢
///commandsName touppercase
///commandsName tolowercase
///commandsTitle  å¤§å°�å†™è½¬æ�¢
/**
 * å¤§å°�å†™è½¬æ�¢
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName     cmdName="convertcase"
 */
UE.commands['touppercase'] =
UE.commands['tolowercase'] = {
    execCommand:function (cmd) {
        var me = this,rng = new dom.Range(me.document),
            convertCase = function(){
                var rng = me.selection.getRange();

                if(rng.collapsed){
                    return rng;
                }

                var bk = rng.createBookmark(),
                    bkEnd = bk.end,
                    filterFn = function( node ) {
                        return !domUtils.isBr(node) && !domUtils.isWhitespace( node );
                    },
                    curNode = domUtils.getNextDomNode( bk.start, false, filterFn );

                while ( curNode && (domUtils.getPosition( curNode, bkEnd ) & domUtils.POSITION_PRECEDING) ) {

                    if ( curNode.nodeType == 3 ) {
                        curNode.nodeValue = curNode.nodeValue[cmd == 'touppercase' ? 'toUpperCase' : 'toLowerCase']();
                    }
                    curNode = domUtils.getNextDomNode( curNode, true, filterFn );
                    if(curNode === bkEnd){
                        break;
                    }

                }
                return rng.moveToBookmark(bk);

            };

        //tableçš„å¤„ç�†
        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                if(ci.style.display != 'none' && !domUtils.isEmptyBlock(ci)){
                    rng.selectNodeContents(ci).select();
                    convertCase();
                }

            }
            rng.selectNodeContents(me.currentSelectedArr[0]).select();
        }else{
            convertCase().select();
        }
    },
    queryCommandState:function () {
        return this.highlight ? -1 : 0;
    }
};


///import core
///import plugins\paragraph.js
///commands é¦–è¡Œç¼©è¿›
///commandsName  Outdent,Indent
///commandsTitle  å�–æ¶ˆç¼©è¿›,é¦–è¡Œç¼©è¿›
/**
 * é¦–è¡Œç¼©è¿›
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     outdentå�–æ¶ˆç¼©è¿›ï¼Œindentç¼©è¿›
 */
UE.commands['indent'] = {
    execCommand : function() {
         var me = this,value = me.queryCommandState("indent") ? "0em" : (me.options.indentValue || '2em');
         me.execCommand('Paragraph','p',{style:'text-indent:'+ value});
    },
    queryCommandState : function() {
        if(this.highlight){return -1;}
        var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
        return pN && pN.style.textIndent && parseInt(pN.style.textIndent) ?  1 : 0;
    }

};

///import core
///commands æ‰“å�°
///commandsName  Print
///commandsTitle  æ‰“å�°
/**
 * @description æ‰“å�°
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     printæ‰“å�°ç¼–è¾‘å™¨å†…å®¹
 * @author zhanyi
 */
UE.commands['print'] = {
    execCommand : function(){
        this.window.print();
    },
    notNeedUndo : 1
};


///import core
///commands é¢„è§ˆ
///commandsName  Preview
///commandsTitle  é¢„è§ˆ
/**
 * é¢„è§ˆ
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     previewé¢„è§ˆç¼–è¾‘å™¨å†…å®¹
 */
UE.commands['preview'] = {
    execCommand : function(){
        var w = window.open('', '_blank', ''),
            d = w.document;
        d.open();
        d.write(this.getAllHtml());
        d.close();
    },
    notNeedUndo : 1
};

///import core
///import plugins\inserthtml.js
///commands ç‰¹æ®Šå­—ç¬¦
///commandsName  Spechars
///commandsTitle  ç‰¹æ®Šå­—ç¬¦
///commandsDialog  dialogs\spechars\spechars.html
UE.commands['spechars'] = {
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///import plugins\image.js
///commands æ�’å…¥è¡¨æƒ…
///commandsName  Emotion
///commandsTitle  è¡¨æƒ…
///commandsDialog  dialogs\emotion\emotion.html
UE.commands['emotion'] = {
    queryCommandState : function(){
        return this.highlight ? -1 :0;
    }
};

///import core
///commands å…¨é€‰
///commandsName  SelectAll
///commandsTitle  å…¨é€‰
/**
 * é€‰ä¸­æ‰€æœ‰
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    selectallé€‰ä¸­ç¼–è¾‘å™¨é‡Œçš„æ‰€æœ‰å†…å®¹
 * @author zhanyi
*/
UE.plugins['selectall'] = function(){
    var me = this;
    me.commands['selectall'] = {
        execCommand : function(){
            //åŽ»æŽ‰äº†åŽŸç”Ÿçš„selectAll,å› ä¸ºä¼šå‡ºçŽ°æŠ¥é”™å’Œå½“å†…å®¹ä¸ºç©ºæ—¶ï¼Œä¸�èƒ½å‡ºçŽ°é—­å�ˆçŠ¶æ€�çš„å…‰æ ‡
            var me = this,body = me.body,
                range = me.selection.getRange();
            range.selectNodeContents(body);
            if(domUtils.isEmptyBlock(body)){
                //operaä¸�èƒ½è‡ªåŠ¨å�ˆå¹¶åˆ°å…ƒç´ çš„é‡Œè¾¹ï¼Œè¦�æ‰‹åŠ¨å¤„ç�†ä¸€ä¸‹
                if(browser.opera && body.firstChild && body.firstChild.nodeType == 1){
                    range.setStartAtFirst(body.firstChild);
                }
                range.collapse(true);
            }

            range.select(true);
            this.selectAll = true;
        },
        notNeedUndo : 1
    };

    me.addListener('ready',function(){

        domUtils.on(me.document,'click',function(evt){

            me.selectAll = false;
        });
    });

};

///import core
///commands æ ¼å¼�
///commandsName  Paragraph
///commandsTitle  æ®µè�½æ ¼å¼�
/**
 * æ®µè�½æ ·å¼�
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     paragraphæ�’å…¥æ®µè�½æ‰§è¡Œå‘½ä»¤
 * @param   {String}   style               æ ‡ç­¾å€¼ä¸ºï¼š'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
 * @param   {String}   attrs               æ ‡ç­¾çš„å±žæ€§
 * @author zhanyi
 */
UE.plugins['paragraph'] = function() {
    var me = this,
        block = domUtils.isBlockElm,
        notExchange = ['TD','LI','PRE'],

        doParagraph = function(range,style,attrs,sourceCmdName){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node );
                },
                para;

            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current && !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node );
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    
                    para = range.document.createElement( style );
                    if(attrs){
                        domUtils.setAttributes(para,attrs);
                        if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                            para.style.cssText = attrs.style;
                        }
                    }
                    para.appendChild( tmpRange.extractContents() );
                    //éœ€è¦�å†…å®¹å� ä½�
                    if(domUtils.isEmptyNode(para)){
                        domUtils.fillChar(range.document,para);
                        
                    }

                    tmpRange.insertNode( para );

                    var parent = para.parentNode;
                    //å¦‚æžœparaä¸Šä¸€çº§æ˜¯ä¸€ä¸ªblockå…ƒç´ ä¸”ä¸�æ˜¯body,tdå°±åˆ é™¤å®ƒ
                    if ( block( parent ) && !domUtils.isBody( para.parentNode ) && utils.indexOf(notExchange,parent.tagName)==-1) {
                        //å­˜å‚¨dir,style
                        if(!(sourceCmdName && sourceCmdName == 'customstyle')){
                            parent.getAttribute('dir') && para.setAttribute('dir',parent.getAttribute('dir'));
                            //trace:1070
                            parent.style.cssText && (para.style.cssText = parent.style.cssText + ';' + para.style.cssText);
                            //trace:1030
                            parent.style.textAlign && !para.style.textAlign && (para.style.textAlign = parent.style.textAlign);
                            parent.style.textIndent && !para.style.textIndent && (para.style.textIndent = parent.style.textIndent);
                            parent.style.padding && !para.style.padding && (para.style.padding = parent.style.padding);
                        }

                        //trace:1706 é€‰æ‹©çš„å°±æ˜¯h1-6è¦�åˆ é™¤
                        if(attrs && /h\d/i.test(parent.tagName) && !/h\d/i.test(para.tagName) ){
                            domUtils.setAttributes(parent,attrs);
                            if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                                parent.style.cssText = attrs.style;
                            }
                            domUtils.remove(para,true);
                            para = parent;
                        }else{
                            domUtils.remove( para.parentNode, true );
                        }

                    }
                    if(  utils.indexOf(notExchange,parent.tagName)!=-1){
                        current = parent;
                    }else{
                       current = para;
                    }


                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    me.setOpt('paragraph',{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''});
    me.commands['paragraph'] = {
        execCommand : function( cmdName, style,attrs,sourceCmdName ) {
            var range = new dom.Range(this.document);
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    //trace:1079 ä¸�æ˜¾ç¤ºçš„ä¸�å¤„ç�†ï¼Œæ�’å…¥æ–‡æœ¬ï¼Œç©ºçš„tdä¹Ÿèƒ½åŠ ä¸Šç›¸åº”çš„æ ‡ç­¾
                    if(ti.style.display == 'none'){
                        continue;
                    }
                    if(domUtils.isEmptyNode(ti)){
                      
                        var tmpTxt = this.document.createTextNode('paragraph');
                        ti.innerHTML = '';
                        ti.appendChild(tmpTxt);
                    }
                    doParagraph(range.selectNodeContents(ti),style,attrs,sourceCmdName);
                    if(tmpTxt){
                        var pN = tmpTxt.parentNode;
                        domUtils.remove(tmpTxt);
                        if(domUtils.isEmptyNode(pN)){
                            domUtils.fillNode(this.document,pN);
                        }
                         
                    }


                }
                var td = this.currentSelectedArr[0];

                if(domUtils.isEmptyBlock(td)){
                    range.setStart(td,0).setCursor(false,true);
                }else{
                    range.selectNode(td).select();
                }

            }else{
                range = this.selection.getRange();
                 //é—­å�ˆæ—¶å�•ç‹¬å¤„ç�†
                if(range.collapsed){
                    var txt = this.document.createTextNode('p');
                    range.insertNode(txt);
                    //åŽ»æŽ‰å†—ä½™çš„fillchar
                    if(browser.ie){
                        var node = txt.previousSibling;
                        if(node && domUtils.isWhitespace(node)){
                            domUtils.remove(node);
                        }
                        node = txt.nextSibling;
                        if(node && domUtils.isWhitespace(node)){
                            domUtils.remove(node);
                        } 
                    }

                }
                range = doParagraph(range,style,attrs,sourceCmdName);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    pN = txt.parentNode;

                    domUtils.remove(txt);
                    
                    if(domUtils.isBlockElm(pN)&&domUtils.isEmptyNode(pN)){
                        domUtils.fillNode(this.document,pN);
                    }

                }

                if(browser.gecko && range.collapsed && range.startContainer.nodeType == 1){
                    var child = range.startContainer.childNodes[range.startOffset];
                    if(child && child.nodeType == 1 && child.tagName.toLowerCase() == style){
                        range.setStart(child,0).collapse(true);
                    }
                }
                //trace:1097 åŽŸæ�¥æœ‰trueï¼ŒåŽŸå› å¿˜äº†ï¼Œä½†åŽ»äº†å°±ä¸�èƒ½æ¸…é™¤å¤šä½™çš„å� ä½�ç¬¦äº†
                range.select();

            }
            return true;
        },
        queryCommandValue : function() {
            var node = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
            return node ? node.tagName.toLowerCase() : '';
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};

///import core
///commands è¾“å…¥çš„æ–¹å�‘
///commandsName  DirectionalityLtr,DirectionalityRtl
///commandsTitle  ä»Žå·¦å�‘å�³è¾“å…¥,ä»Žå�³å�‘å·¦è¾“å…¥
/**
 * è¾“å…¥çš„æ–¹å�‘
 * @function
 * @name baidu.editor.execCommand
 * @param {String}   cmdName    directionalityæ‰§è¡Œå‡½æ•°çš„å�‚æ•°
 * @param {String}    forward    lträ»Žå·¦å�‘å�³è¾“å…¥ï¼Œrtlä»Žå�³å�‘å·¦è¾“å…¥
 */
(function() {
    var block = domUtils.isBlockElm ,
        getObj = function(editor){
//            var startNode = editor.selection.getStart(),
//                parents;
//            if ( startNode ) {
//                //æŸ¥æ‰¾æ‰€æœ‰çš„æ˜¯blockçš„çˆ¶äº²èŠ‚ç‚¹
//                parents = domUtils.findParents( startNode, true, block, true );
//                for ( var i = 0,ci; ci = parents[i++]; ) {
//                    if ( ci.getAttribute( 'dir' ) ) {
//                        return ci;
//                    }
//                }
//            }
            return domUtils.filterNodeList(editor.selection.getStartElementPath(),function(n){return n.getAttribute('dir')});

        },
        doDirectionality = function(range,editor,forward){
            
            var bookmark,
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node);
                },

                obj = getObj( editor );

            if ( obj && range.collapsed ) {
                obj.setAttribute( 'dir', forward );
                return range;
            }
            bookmark = range.createBookmark();
            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current &&  !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node );
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    var common = tmpRange.getCommonAncestor();
                    if ( !domUtils.isBody( common ) && block( common ) ) {
                        //é��åŽ†åˆ°äº†blockèŠ‚ç‚¹
                        common.setAttribute( 'dir', forward );
                        current = common;
                    } else {
                        //æ²¡æœ‰é��åŽ†åˆ°ï¼Œæ·»åŠ ä¸€ä¸ªblockèŠ‚ç‚¹
                        var p = range.document.createElement( 'p' );
                        p.setAttribute( 'dir', forward );
                        var frag = tmpRange.extractContents();
                        p.appendChild( frag );
                        tmpRange.insertNode( p );
                        current = p;
                    }

                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    UE.commands['directionality'] = {
        execCommand : function( cmdName,forward ) {
            var range = new dom.Range(this.document);
            if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
                for(var i=0,ti;ti=this.currentSelectedArr[i++];){
                    if(ti.style.display != 'none'){
                        doDirectionality(range.selectNode(ti),this,forward);
                    }
                }
                range.selectNode(this.currentSelectedArr[0]).select();
            }else{
                range = this.selection.getRange();
                //é—­å�ˆæ—¶å�•ç‹¬å¤„ç�†
                if(range.collapsed){
                    var txt = this.document.createTextNode('d');
                    range.insertNode(txt);
                }
                doDirectionality(range,this,forward);
                if(txt){
                    range.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }

                range.select();
                

            }
            return true;
        },
        queryCommandValue : function() {

            var node = getObj(this);
            return node ? node.getAttribute('dir') : 'ltr';
        },
       queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
})();


///import core
///import plugins\inserthtml.js
///commands åˆ†å‰²çº¿
///commandsName  Horizontal
///commandsTitle  åˆ†éš”çº¿
/**
 * åˆ†å‰²çº¿
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    horizontalæ�’å…¥åˆ†å‰²çº¿
 */
UE.commands['horizontal'] = {
    execCommand : function( cmdName ) {
        var me = this;
        if(me.queryCommandState(cmdName)!==-1){
            me.execCommand('insertHtml','<hr>');
            var range = me.selection.getRange(),
                start = range.startContainer;
            if(start.nodeType == 1 && !start.childNodes[range.startOffset] ){

                var tmp;
                if(tmp = start.childNodes[range.startOffset - 1]){
                    if(tmp.nodeType == 1 && tmp.tagName == 'HR'){
                        if(me.options.enterTag == 'p'){
                            tmp = me.document.createElement('p');
                            range.insertNode(tmp);
                            range.setStart(tmp,0).setCursor();

                        }else{
                            tmp = me.document.createElement('br');
                            range.insertNode(tmp);
                            range.setStartBefore(tmp).setCursor();
                        }
                    }
                }

            }
            return true;
        }

    },
    //è¾¹ç•Œåœ¨tableé‡Œä¸�èƒ½åŠ åˆ†éš”çº¿
    queryCommandState : function() {
        return this.highlight || domUtils.filterNodeList(this.selection.getStartElementPath(),'table') ? -1 : 0;
    }
};

///import core
///import plugins\inserthtml.js
///commands æ—¥æœŸ,æ—¶é—´
///commandsName  Date,Time
///commandsTitle  æ—¥æœŸ,æ—¶é—´
/**
 * æ�’å…¥æ—¥æœŸ
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    dateæ�’å…¥æ—¥æœŸ
 * @author zhuwenxuan
*/
/**
 * æ�’å…¥æ—¶é—´
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    timeæ�’å…¥æ—¶é—´
 * @author zhuwenxuan
*/
UE.commands['time'] = UE.commands["date"] = {
    execCommand : function(cmd){
        var date = new Date;
        this.execCommand('insertHtml',cmd == "time" ?
            (date.getHours()+":"+ (date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes())+":"+(date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds())) :
            (date.getFullYear()+"-"+((date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1)+"-"+(date.getDate()<10?"0"+date.getDate():date.getDate())));
    },
    queryCommandState : function(){
            return this.highlight ? -1 :0;
    }
};




///import core
///import plugins\paragraph.js
///commands æ®µé—´è·�
///commandsName  RowSpacingBottom,RowSpacingTop
///commandsTitle  æ®µé—´è·�
/**
 * @description è®¾ç½®æ®µå‰�è·�,æ®µå�Žè·�
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     rowspacingè®¾ç½®æ®µé—´è·�
 * @param   {String}   value              å€¼ï¼Œä»¥pxä¸ºå�•ä½�
 * @param   {String}   dir          topæˆ–bottomæ®µå‰�å�Žæ®µå�Ž
 * @author zhanyi
 */
UE.plugins['rowspacing'] = function(){
    var me = this;
    me.setOpt({
        'rowspacingtop':['5', '10', '15', '20', '25'],
        'rowspacingbottom':['5', '10', '15', '20', '25']

    });
    me.commands['rowspacing'] =  {
        execCommand : function( cmdName,value,dir ) {
            this.execCommand('paragraph','p',{style:'margin-'+dir+':'+value + 'px'});
            return true;
        },
        queryCommandValue : function(cmdName,dir) {
            var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node) }),
                value;
            //trace:1026
            if(pN){
                value = domUtils.getComputedStyle(pN,'margin-'+dir).replace(/[^\d]/g,'');
                return !value ? 0 : value;
            }
            return 0;

        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};



///import core
///import plugins\paragraph.js
///commands è¡Œé—´è·�
///commandsName  LineHeight
///commandsTitle  è¡Œé—´è·�
/**
 * @description è®¾ç½®è¡Œå†…é—´è·�
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     lineheightè®¾ç½®è¡Œå†…é—´è·�
 * @param   {String}   value              å€¼
 * @author zhuwenxuan
 */
UE.plugins['lineheight'] = function(){
    var me = this;
    me.setOpt({'lineheight':['1', '1.5','1.75','2', '3', '4', '5']});
    me.commands['lineheight'] =  {
        execCommand : function( cmdName,value ) {
            this.execCommand('paragraph','p',{style:'line-height:'+ (value == "1" ? "normal" : value + 'em') });
            return true;
        },
        queryCommandValue : function() {
            var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node)});
            if(pN){
                var value = domUtils.getComputedStyle(pN,'line-height');
                return value == 'normal' ? 1 : value.replace(/[^\d.]*/ig,"");
            }
        },
        queryCommandState : function(){
            return this.highlight ? -1 :0;
        }
    };
};



///import core
///commands æ¸…ç©ºæ–‡æ¡£
///commandsName  ClearDoc
///commandsTitle  æ¸…ç©ºæ–‡æ¡£
/**
 *
 * æ¸…ç©ºæ–‡æ¡£
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     cleardocæ¸…ç©ºæ–‡æ¡£
 */

UE.commands['cleardoc'] = {
    execCommand : function( cmdName) {
        var me = this,
            enterTag = me.options.enterTag,
            range = me.selection.getRange();
        if(enterTag == "br"){
            me.body.innerHTML = "<br/>";
            range.setStart(me.body,0).setCursor();
        }else{
            me.body.innerHTML = "<p>"+(ie ? "" : "<br/>")+"</p>";
            range.setStart(me.body.firstChild,0).setCursor(false,true);
        }
    }
};


///import core
///commands é”šç‚¹
///commandsName  Anchor
///commandsTitle  é”šç‚¹
///commandsDialog  dialogs\anchor\anchor.html
/**
 * é”šç‚¹
 * @function
 * @name baidu.editor.execCommands
 * @param {String} cmdName     cmdName="anchor"æ�’å…¥é”šç‚¹
 */
UE.plugins['anchor'] = function (){
    var me = this;

    me.ready(function(){
        utils.cssRule('anchor',
            '.anchorclass{background: url(\'' + me.options.UEDITOR_HOME_URL + 'themes/default/images/anchor.gif\') no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}',me.document)
    });

    me.commands['anchor'] = {
        execCommand:function (cmd, name) {
            var range = this.selection.getRange(),img = range.getClosedNode();
            if (img && img.getAttribute('anchorname')) {
                if (name) {
                    img.setAttribute('anchorname', name);
                } else {
                    range.setStartBefore(img).setCursor();
                    domUtils.remove(img);
                }
            } else {
                if (name) {
                    //å�ªåœ¨é€‰åŒºçš„å¼€å§‹æ�’å…¥
                    var anchor = this.document.createElement('img');
                    range.collapse(true);
                    domUtils.setAttributes(anchor,{
                        'anchorname':name,
                        'class':'anchorclass'
                    });
                    range.insertNode(anchor).setStartAfter(anchor).setCursor(false,true);
                }
            }
        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }

    };


};

///import core
///commands åˆ é™¤
///commandsName  Delete
///commandsTitle  åˆ é™¤
/**
 * åˆ é™¤
 * @function
 * @name baidu.editor.execCommand
 * @param  {String}    cmdName    deleteåˆ é™¤
 * @author zhanyi
 */
UE.commands['delete'] = {
    execCommand : function (){

        var range = this.selection.getRange(),
            mStart = 0,
            mEnd = 0,
            me = this;
        if(this.selectAll ){
            //trace:1633
            me.body.innerHTML = '<p>'+(browser.ie ? '&nbsp;' : '<br/>')+'</p>';

            range.setStart(me.body.firstChild,0).setCursor(false,true);

            me.selectAll = false;
            return;
        }
        if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
            for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                if(ci.style.display != 'none'){
                    ci.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                }

            }
            range.setStart(me.currentSelectedArr[0],0).setCursor();
            return;
        }
        if(range.collapsed){
            return;
        }
        range.txtToElmBoundary();
        //&& !domUtils.isBlockElm(range.startContainer)
        while(!range.startOffset &&  !domUtils.isBody(range.startContainer) &&  !dtd.$tableContent[range.startContainer.tagName] ){
            mStart = 1;
            range.setStartBefore(range.startContainer);
        }
        //&& !domUtils.isBlockElm(range.endContainer)
        //ä¸�å¯¹æ–‡æœ¬èŠ‚ç‚¹è¿›è¡Œæ“�ä½œ
        //trace:2428
        while(range.endContainer.nodeType != 3 && !domUtils.isBody(range.endContainer)&&  !dtd.$tableContent[range.endContainer.tagName]  ){
            var child,endContainer = range.endContainer,endOffset = range.endOffset;
//                if(endContainer.nodeType == 3 &&  endOffset == endContainer.nodeValue.length){
//                    range.setEndAfter(endContainer);
//                    continue;
//                }

            child = endContainer.childNodes[endOffset];
            if(!child || domUtils.isBr(child) && endContainer.lastChild === child){
                range.setEndAfter(endContainer);
                continue;
            }
            break;

        }
        if(mStart){
            var start = me.document.createElement('span');
            start.innerHTML = 'start';
            start.id = '_baidu_cut_start';
            range.insertNode(start).setStartBefore(start);
        }
        if(mEnd){
            var end = me.document.createElement('span');
            end.innerHTML = 'end';
            end.id = '_baidu_cut_end';
            range.cloneRange().collapse(false).insertNode(end);
            range.setEndAfter(end);

        }



        range.deleteContents();


        if(domUtils.isBody(range.startContainer) && domUtils.isEmptyBlock(me.body)){
            me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
            range.setStart(me.body.firstChild,0).collapse(true);
        }else if ( !browser.ie && domUtils.isEmptyBlock(range.startContainer)){
            range.startContainer.innerHTML = '<br/>';
        }

        range.select(true);
    },
    queryCommandState : function(){

        if(this.currentSelectedArr && this.currentSelectedArr.length > 0){
            return 0;
        }
        return this.highlight || this.selection.getRange().collapsed ? -1 : 0;
    }
};

///import core
///commands å­—æ•°ç»Ÿè®¡
///commandsName  WordCount,wordCount
///commandsTitle  å­—æ•°ç»Ÿè®¡
/**
 * Created by JetBrains WebStorm.
 * User: taoqili
 * Date: 11-9-7
 * Time: ä¸‹å�ˆ8:18
 * To change this template use File | Settings | File Templates.
 */

UE.plugins['wordcount'] = function(){
    var me = this;
    me.setOpt({
        wordCount:true,
        maximumWords:10000,
        wordCountMsg: me.options.wordCountMsg||me.getLang("wordCountMsg"),
        wordOverFlowMsg:me.options.wordOverFlowMsg||me.getLang("wordOverFlowMsg")
    });
    var opt = me.options,
        max = opt.maximumWords,
        msg = opt.wordCountMsg ,
        errMsg = opt.wordOverFlowMsg;
    if(!opt.wordCount){
        return;
    }
    me.commands["wordcount"]={
        queryCommandValue:function(cmd,onlyCount){
            var length,contentText,reg;
            if(onlyCount){
                reg = new RegExp("[\r\t\n]","g");
                contentText = this.getContentTxt().replace(reg,"");
                return contentText.length;
            }
            reg = new RegExp("[\r\t\n]","g");
            contentText = this.getContentTxt().replace(reg,"");
            length = contentText.length;
            if(max-length<0){
                me.fireEvent('wordcountoverflow',length);
                return errMsg;
            }

            return msg.replace("{#leave}",max-length >= 0 ? max-length:0).replace("{#count}",length);
        }
    };
};

///import core
///commands æ·»åŠ åˆ†é¡µåŠŸèƒ½
///commandsName  PageBreak
///commandsTitle  åˆ†é¡µ
/**
 * @description æ·»åŠ åˆ†é¡µåŠŸèƒ½
 * @author zhanyi
 */
UE.plugins['pagebreak'] = function () {
    var me = this,
        notBreakTags = ['td'];

    function fillNode(node){
        if(domUtils.isEmptyBlock(node)){
            var firstChild = node.firstChild,tmpNode;

            while(firstChild && firstChild.nodeType == 1 && domUtils.isEmptyBlock(firstChild)){
                tmpNode = firstChild;
                firstChild = firstChild.firstChild;
            }
            !tmpNode && (tmpNode = node);
            domUtils.fillNode(me.document,tmpNode);
        }
    }
    //åˆ†é¡µç¬¦æ ·å¼�æ·»åŠ 

    me.ready(function(){
        utils.cssRule('pagebreak','.pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}',me.document);
    });
    function isHr(node){
        return node && node.nodeType == 1 && node.tagName == 'HR' && node.className == 'pagebreak';
    }
    me.commands['pagebreak'] = {
        execCommand:function () {
            var range = me.selection.getRange(),hr = me.document.createElement('hr');
            domUtils.setAttributes(hr,{
                'class' : 'pagebreak',
                noshade:"noshade",
                size:"5"
            });
            domUtils.unSelectable(hr);
            //tableå�•ç‹¬å¤„ç�†
            var node = domUtils.findParentByTagName(range.startContainer, notBreakTags, true),

                parents = [], pN;
            if (node) {
                switch (node.tagName) {
                    case 'TD':
                        pN = node.parentNode;
                        if (!pN.previousSibling) {
                            var table = domUtils.findParentByTagName(pN, 'table');
//                            var tableWrapDiv = table.parentNode;
//                            if(tableWrapDiv && tableWrapDiv.nodeType == 1
//                                && tableWrapDiv.tagName == 'DIV'
//                                && tableWrapDiv.getAttribute('dropdrag')
//                                ){
//                                domUtils.remove(tableWrapDiv,true);
//                            }
                            table.parentNode.insertBefore(hr, table);
                            parents = domUtils.findParents(hr, true);

                        } else {
                            pN.parentNode.insertBefore(hr, pN);
                            parents = domUtils.findParents(hr);

                        }
                        pN = parents[1];
                        if (hr !== pN) {
                            domUtils.breakParent(hr, pN);

                        }
                        domUtils.clearSelectedArr(me.currentSelectedArr);
                        //tableè¦�é‡�å†™ç»‘å®šä¸€ä¸‹æ‹–æ‹½
                        me.fireEvent('afteradjusttable',me.document);
                }

            } else {

                if (!range.collapsed) {
                    range.deleteContents();
                    var start = range.startContainer;
                    while ( !domUtils.isBody(start) && domUtils.isBlockElm(start) && domUtils.isEmptyNode(start)) {
                        range.setStartBefore(start).collapse(true);
                        domUtils.remove(start);
                        start = range.startContainer;
                    }

                }
                range.insertNode(hr);

                var pN = hr.parentNode, nextNode;
                while (!domUtils.isBody(pN)) {
                    domUtils.breakParent(hr, pN);
                    nextNode = hr.nextSibling;
                    if (nextNode && domUtils.isEmptyBlock(nextNode)) {
                        domUtils.remove(nextNode);
                    }
                    pN = hr.parentNode;
                }
                nextNode = hr.nextSibling;
                var pre = hr.previousSibling;
                if(isHr(pre)){
                    domUtils.remove(pre);
                }else{
                    pre && fillNode(pre);
                }

                if(!nextNode){
                    var p = me.document.createElement('p');

                    hr.parentNode.appendChild(p);
                    domUtils.fillNode(me.document,p);
                    range.setStart(p,0).collapse(true);
                }else{
                    if(isHr(nextNode)){
                        domUtils.remove(nextNode);
                    }else{
                        fillNode(nextNode);
                    }
                    range.setEndAfter(hr).collapse(false);
                }

                range.select(true);

            }

        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }
    };
};
///import core
///commands æœ¬åœ°å›¾ç‰‡å¼•å¯¼ä¸Šä¼ 
///commandsName  WordImage
///commandsTitle  æœ¬åœ°å›¾ç‰‡å¼•å¯¼ä¸Šä¼ 


UE.plugins["wordimage"] = function(){
    var me = this,
        images;
    me.commands['wordimage'] = {
        execCommand : function() {
            images = domUtils.getElementsByTagName(me.document.body,"img");
            var urlList = [];
            for(var i=0,ci;ci=images[i++];){
                var url=ci.getAttribute("word_img");
                url && urlList.push(url);
            }
            if(images.length){
                this["word_img"] = urlList;
            }
        },
        queryCommandState: function(){
            images = domUtils.getElementsByTagName(me.document.body,"img");
            for(var i=0,ci;ci =images[i++];){
                if(ci.getAttribute("word_img")){
                    return 1;
                }
            }
            return -1;
        }
    };
};
///import core
///commands æ’¤é”€å’Œé‡�å�š
///commandsName  Undo,Redo
///commandsTitle  æ’¤é”€,é‡�å�š
/**
* @description å›žé€€
* @author zhanyi
*/

UE.plugins['undo'] = function() {
    var me = this,
        maxUndoCount = me.options.maxUndoCount || 20,
        maxInputCount = me.options.maxInputCount || 20,
        fillchar = new RegExp(domUtils.fillChar + '|<\/hr>','gi'),// ieä¼šäº§ç”Ÿå¤šä½™çš„</hr>
        //åœ¨æ¯”è¾ƒæ—¶ï¼Œéœ€è¦�è¿‡æ»¤æŽ‰è¿™äº›å±žæ€§
        specialAttr = /\b(?:href|src|name)="[^"]*?"/gi;

    //åœºæ™¯çš„rangeå®žä¾‹
    function sceneRange(rng){
        var me = this;
        me.collapsed = rng.collapsed;
        me.startAddr = getAddr(rng.startContainer,rng.startOffset);
        me.endAddr = rng.collapsed ? me.startAddr : getAddr(rng.endContainer,rng.endOffset)

    }
    sceneRange.prototype ={
        compare : function(obj){
            var me = this;
            if(me.collapsed !== obj.collapsed){
                return 0;
            }
            if(!compareAddr(me.startAddr,obj.startAddr) || !compareAddr(me.endAddr,obj.endAddr)){
                return 0;
            }
            return 1;
        },
        transformRange : function(rng){
            var me = this;
            rng.collapsed = me.collapsed;
            setAddr(rng,'start',me.startAddr);
            rng.collapsed ? rng.collapse(true) : setAddr(rng,'end',me.endAddr)

        }
    };
    function getAddr(node,index){
        for(var i= 0,parentsIndex = [index],ci,
                parents = domUtils.findParents(node,true,function(node){return !domUtils.isBody(node)},true);
            ci=parents[i++];){
            //ä¿®æ­£å��ç§»ä½�ç½®
            if(i == 1 && ci.nodeType == 3){

                var tmpNode = ci;
                while(tmpNode = tmpNode.previousSibling){
                    if(tmpNode.nodeType == 3){
//                        console.log(index)
                        index += tmpNode.nodeValue.replace(fillCharReg,'').length;
                    }else{
                        break;
                    }
                }
                parentsIndex[0] = index;
            }

            parentsIndex.push(domUtils.getNodeIndex(ci,true));

        }

        return parentsIndex.reverse();

    }

    function compareAddr(indexA,indexB){
        if(indexA.length != indexB.length)
            return 0;
        for(var i= 0,l=indexA.length;i<l;i++){
            if(indexA[i]!=indexB[i])
                return 0
        }
        return 1;
    }
    function setAddr(range,boundary,addr){

        node = range.document.body;
        for(var i= 0,node,l = addr.length - 1;i<l;i++){
            node = node.childNodes[addr[i]];
        }
        range[boundary+'Container'] = node;
        range[boundary+'Offset'] =  addr[addr.length-1];
    }
    function UndoManager() {

        this.list = [];
        this.index = 0;
        this.hasUndo = false;
        this.hasRedo = false;
        this.undo = function() {

            if ( this.hasUndo ) {
                var currentScene = this.getScene(),
                    lastScene = this.list[this.index];
                if ( lastScene.content.replace(specialAttr,'') != currentScene.content.replace(specialAttr,'') ) {
                    this.save();
                }
                                    if(!this.list[this.index - 1] && this.list.length == 1){
                    this.reset();
                    return;
                }
                while ( this.list[this.index].content == this.list[this.index - 1].content ) {
                    this.index--;
                    if ( this.index == 0 ) {
                        return this.restore( 0 );
                    }
                }
                this.restore( --this.index );
            }
        };
        this.redo = function() {
            if ( this.hasRedo ) {
                while ( this.list[this.index].content == this.list[this.index + 1].content ) {
                    this.index++;
                    if ( this.index == this.list.length - 1 ) {
                        return this.restore( this.index );
                    }
                }
                this.restore( ++this.index );
            }
        };

        this.restore = function() {
            var scene = this.list[this.index];
            //trace:873
            //åŽ»æŽ‰å±•ä½�ç¬¦
            me.document.body.innerHTML = scene.bookcontent.replace(fillchar,'');
            //å¤„ç�†undoå�Žç©ºæ ¼ä¸�å±•ä½�çš„é—®é¢˜
            if(browser.ie){
                for(var i=0,pi,ps = me.document.getElementsByTagName('p');pi = ps[i++];){
                    if(pi.innerHTML == ''){
                        domUtils.fillNode(me.document,pi);
                    }
                }
            }

            var range = new dom.Range( me.document );


            //æœ‰å�¯èƒ½å†�saveæ—¶æ²¡æœ‰bookmark
            try{
                if(browser.opera || browser.safari){
                    scene.senceRange.transformRange(range)
                }else{
                    range.moveToBookmark( {
                        start : '_baidu_bookmark_start_',
                        end : '_baidu_bookmark_end_',
                        id : true
                        //åŽ»æŽ‰true æ˜¯ä¸ºäº†<b>|</b>ï¼Œå›žé€€å�Žè¿˜èƒ½åœ¨bé‡Œ
                    } );
                }

                //trace:1278 ie9blockå…ƒç´ ä¸ºç©ºï¼Œå°†å‡ºçŽ°å…‰æ ‡å®šä½�çš„é—®é¢˜ï¼Œå¿…é¡»å¡«å……å†…å®¹
                if(browser.ie && browser.version == 9 && range.collapsed && domUtils.isBlockElm(range.startContainer) && domUtils.isEmptyNode(range.startContainer)){
                    domUtils.fillNode(range.document,range.startContainer);

                }
                range.select(!browser.gecko);
                if(!(browser.opera || browser.safari)){
                    setTimeout(function(){
                        range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
                    },200);
                }

            }catch(e){}

            this.update();
            //tableçš„å�•ç‹¬å¤„ç�†
            if(me.currentSelectedArr){
                me.currentSelectedArr = [];
                var tds = me.document.getElementsByTagName('td');
                for(var i=0,td;td=tds[i++];){
                    if(td.className == me.options.selectedTdClass){
                         me.currentSelectedArr.push(td);
                    }
                }
            }
            this.clearKey();
            //ä¸�èƒ½æŠŠè‡ªå·±resetäº†
            me.fireEvent('reset',true);
        };

        this.getScene = function() {
            var range = me.selection.getRange(),
                cont = me.body.innerHTML.replace(fillchar,'');
            //æœ‰å�¯èƒ½è¾¹ç•Œè�½åˆ°äº†<table>|<tbody>è¿™æ ·çš„ä½�ç½®ï¼Œæ‰€ä»¥ç¼©ä¸€ä¸‹ä½�ç½®
            range.shrinkBoundary();
            browser.ie && (cont = cont.replace(/>&nbsp;</g,'><').replace(/\s*</g,'').replace(/>\s*/g,'>'));

            if(browser.opera || browser.safari){
                return {
                    senceRange : new sceneRange(range),
                    content : cont,
                    bookcontent : cont
                }
            }else{
                var bookmark = range.createBookmark( true, true ),
                    bookCont = me.body.innerHTML.replace(fillchar,'');
                bookmark && range.moveToBookmark( bookmark ).select( true );
                return {
                    bookcontent : bookCont,
                    content : cont
                };
            }

        };
        this.save = function(notCompareRange) {

            var currentScene = this.getScene(),
                lastScene = this.list[this.index];
            //å†…å®¹ç›¸å�Œä½�ç½®ç›¸å�Œä¸�å­˜
            if ( lastScene && lastScene.content == currentScene.content &&
                (
                    notCompareRange ? 1 :
                    ( (browser.opera || browser.safari) ? lastScene.senceRange.compare(currentScene.senceRange) : lastScene.bookcontent == currentScene.bookcontent)
                )
            ) {
                return;
            }

            this.list = this.list.slice( 0, this.index + 1 );
            this.list.push( currentScene );
            //å¦‚æžœå¤§äºŽæœ€å¤§æ•°é‡�äº†ï¼Œå°±æŠŠæœ€å‰�çš„å‰”é™¤
            if ( this.list.length > maxUndoCount ) {
                this.list.shift();
            }
            this.index = this.list.length - 1;
            this.clearKey();
            //è·Ÿæ–°undo/redoçŠ¶æ€�
            this.update();
        };
        this.update = function() {
            this.hasRedo = this.list[this.index + 1] ? true : false;
            this.hasUndo = this.list[this.index - 1] || this.list.length == 1 ? true : false;
        };
        this.reset = function() {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.clearKey();
        };
        this.clearKey = function(){
            keycont = 0;
            lastKeyCode = null;
            me.fireEvent('contentchange');
        };
    }

    me.undoManger = new UndoManager();
    function saveScene() {
        this.undoManger.save();
    }

    me.addListener( 'beforeexeccommand', saveScene );
    me.addListener( 'afterexeccommand', saveScene );

    me.addListener('reset',function(type,exclude){
        if(!exclude){
            me.undoManger.reset();
        }
    });
    me.commands['redo'] = me.commands['undo'] = {
        execCommand : function( cmdName ) {
            me.undoManger[cmdName]();
        },
        queryCommandState : function( cmdName ) {
            return me.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
        },
        notNeedUndo : 1
    };

    var keys = {
         //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
            /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
            37:1, 38:1, 39:1, 40:1,
            13:1 /*enter*/
        },
        keycont = 0,
        lastKeyCode;

    me.addListener( 'keydown', function( type, evt ) {
        var keyCode = evt.keyCode || evt.which;
        if ( !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey ) {
            if ( me.undoManger.list.length == 0 || ((keyCode == 8 ||keyCode == 46) && lastKeyCode != keyCode) ) {
                me.undoManger.save(true);
                lastKeyCode = keyCode;
                return;
            }
            //trace:856
            //ä¿®æ­£ç¬¬ä¸€æ¬¡è¾“å…¥å�Žï¼Œå›žé€€ï¼Œå†�è¾“å…¥è¦�åˆ°keycont>maxInputCountæ‰�èƒ½åœ¨å›žé€€çš„é—®é¢˜
            if(me.undoManger.list.length == 2 && me.undoManger.index == 0 && keycont == 0){
                me.undoManger.list.splice(1,1);
                me.undoManger.update();
            }
            lastKeyCode = keyCode;
            keycont++;
            if ( keycont >= maxInputCount ) {
                if(me.selection.getRange().collapsed)
                    me.undoManger.save();
            }
        }
    } );
};

///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands ç²˜è´´
///commandsName  PastePlain
///commandsTitle  çº¯æ–‡æœ¬ç²˜è´´æ¨¡å¼�
/*
 ** @description ç²˜è´´
 * @author zhanyi
 */
(function() {
    function getClipboardData( callback ) {

        var doc = this.document;

        if ( doc.getElementById( 'baidu_pastebin' ) ) {
            return;
        }

        var range = this.selection.getRange(),
            bk = range.createBookmark(),
            //åˆ›å»ºå‰ªè´´çš„å®¹å™¨div
            pastebin = doc.createElement( 'div' );

        pastebin.id = 'baidu_pastebin';


        // Safari è¦�æ±‚divå¿…é¡»æœ‰å†…å®¹ï¼Œæ‰�èƒ½ç²˜è´´å†…å®¹è¿›æ�¥
        browser.webkit && pastebin.appendChild( doc.createTextNode( domUtils.fillChar + domUtils.fillChar ) );
        doc.body.appendChild( pastebin );
        //trace:717 éš�è—�çš„spanä¸�èƒ½å¾—åˆ°top
        //bk.start.innerHTML = '&nbsp;';
        bk.start.style.display = '';
        pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
            //è¦�åœ¨çŽ°åœ¨å…‰æ ‡å¹³è¡Œçš„ä½�ç½®åŠ å…¥ï¼Œå�¦åˆ™ä¼šå‡ºçŽ°è·³åŠ¨çš„é—®é¢˜
            domUtils.getXY( bk.start ).y + 'px';

        range.selectNodeContents( pastebin ).select( true );

        setTimeout( function() {
            
            if (browser.webkit) {
                
                for(var i=0,pastebins = doc.querySelectorAll('#baidu_pastebin'),pi;pi=pastebins[i++];){
                    if(domUtils.isEmptyNode(pi)){
                        domUtils.remove(pi);
                    }else{
                        pastebin = pi;
                        break;
                    }
                }


            }

			try{
                pastebin.parentNode.removeChild(pastebin);
            }catch(e){}

            range.moveToBookmark( bk ).select(true);
            callback( pastebin );
        }, 0 );


    }

    UE.plugins['paste'] = function() {
        var me = this;
        var word_img_flag = {flag:""};

        var pasteplain = me.options.pasteplain === true;
        var modify_num = {flag:""};
        me.commands['pasteplain'] = {
            queryCommandState: function (){
                return pasteplain;
            },
            execCommand: function (){
                pasteplain = !pasteplain|0;
            },
            notNeedUndo : 1
        };

        function filter(div){
            
            var html;
            if ( div.firstChild ) {
                    //åŽ»æŽ‰cutä¸­æ·»åŠ çš„è¾¹ç•Œå€¼
                    var nodes = domUtils.getElementsByTagName(div,'span');
                    for(var i=0,ni;ni=nodes[i++];){
                        if(ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end'){
                            domUtils.remove(ni);
                        }
                    }

                    if(browser.webkit){

                        var brs = div.querySelectorAll('div br');
                        for(var i=0,bi;bi=brs[i++];){
                            var pN = bi.parentNode;
                            if(pN.tagName == 'DIV' && pN.childNodes.length ==1){
                                pN.innerHTML = '<p><br/></p>';
                                
                                domUtils.remove(pN);
                            }
                        }
                        var divs = div.querySelectorAll('#baidu_pastebin');
                        for(var i=0,di;di=divs[i++];){
                            var tmpP = me.document.createElement('p');
                            di.parentNode.insertBefore(tmpP,di);
                            while(di.firstChild){
                                tmpP.appendChild(di.firstChild);
                            }
                            domUtils.remove(di);
                        }



                        var metas = div.querySelectorAll('meta');
                        for(var i=0,ci;ci=metas[i++];){
                            domUtils.remove(ci);
                        }

                        var brs = div.querySelectorAll('br');
                        for(i=0;ci=brs[i++];){
                            if(/^apple-/.test(ci)){
                                domUtils.remove(ci);
                            }
                        }

                    }
                    if(browser.gecko){
                        var dirtyNodes = div.querySelectorAll('[_moz_dirty]');
                        for(i=0;ci=dirtyNodes[i++];){
                            ci.removeAttribute( '_moz_dirty' );
                        }
                    }
                    if(!browser.ie ){
                        var spans = div.querySelectorAll('span.Apple-style-span');
                        for(var i=0,ci;ci=spans[i++];){
                            domUtils.remove(ci,true);
                        }
                    }


                    html = div.innerHTML;

                    var f = me.serialize;
                    if(f){
                        //å¦‚æžœè¿‡æ»¤å‡ºçŽ°é—®é¢˜ï¼Œæ�•èŽ·å®ƒï¼Œç›´æŽ¥æ�’å…¥å†…å®¹ï¼Œé�¿å…�å‡ºçŽ°é”™è¯¯å¯¼è‡´ç²˜è´´æ•´ä¸ªå¤±è´¥
                        try{
                            var node =  f.transformInput(
                                        f.parseHTML(
                                            //todo: æš‚æ—¶ä¸�èµ°dtdçš„è¿‡æ»¤
                                            f.word(html)//, true
                                        ),word_img_flag
                                    );
                            //trace:924
                            //çº¯æ–‡æœ¬æ¨¡å¼�ä¹Ÿè¦�ä¿�ç•™æ®µè�½
                            node = f.filter(node,pasteplain ? {
                                whiteList: {
                                    'p': {'br':1,'BR':1,$:{}},
                                    'br':{'$':{}},
                                    'div':{'br':1,'BR':1,'$':{}},
                                    'li':{'$':{}},
                                    'tr':{'td':1,'$':{}},
                                    'td':{'$':{}}

                                },
                                blackList: {
                                    'style':1,
                                    'script':1,
                                    'object':1
                                }
                            } : null, !pasteplain ? modify_num : null);

                            if(browser.webkit){
                                var length = node.children.length,
                                    child;
                                while((child = node.children[length-1]) && child.tag == 'br'){
                                    node.children.splice(length-1,1);
                                    length = node.children.length;
                                }
                            }
                            html = f.toHTML(node,pasteplain);

                        }catch(e){}

                    }


                    //è‡ªå®šä¹‰çš„å¤„ç�†
                   html = {'html':html};

                   me.fireEvent('beforepaste',html);
                    //ä¸�ç”¨åœ¨èµ°è¿‡æ»¤äº†
                   me.execCommand( 'insertHtml',html.html,true);

	               me.fireEvent("afterpaste");

                }
        }

        me.addListener('ready',function(){
            domUtils.on(me.body,'cut',function(){

                var range = me.selection.getRange();
                if(!range.collapsed && me.undoManger){
                    me.undoManger.save();
                }
       
            });
            //ieä¸‹beforepasteåœ¨ç‚¹å‡»å�³é”®æ—¶ä¹Ÿä¼šè§¦å�‘ï¼Œæ‰€ä»¥ç”¨ç›‘æŽ§é”®ç›˜æ‰�å¤„ç�†
                domUtils.on(me.body, browser.ie || browser.opera ? 'keydown' : 'paste',function(e){

                    if((browser.ie || browser.opera) && (!e.ctrlKey || e.keyCode != '86')){
                        return;
                    }

                    getClipboardData.call( me, function( div ) {
                        filter(div);
                    } );


                });

        });

    };

})();


///import core
///commands æœ‰åº�åˆ—è¡¨,æ— åº�åˆ—è¡¨
///commandsName  InsertOrderedList,InsertUnorderedList
///commandsTitle  æœ‰åº�åˆ—è¡¨,æ— åº�åˆ—è¡¨
/**
 * æœ‰åº�åˆ—è¡¨
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertorderlistæ�’å…¥æœ‰åº�åˆ—è¡¨
 * @param   {String}   style               å€¼ä¸ºï¼šdecimal,lower-alpha,lower-roman,upper-alpha,upper-roman
 * @author zhanyi
 */
/**
 * æ— åº�é“¾æŽ¥
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertunorderlistæ�’å…¥æ— åº�åˆ—è¡¨
 * * @param   {String}   style            å€¼ä¸ºï¼šcircle,disc,square
 * @author zhanyi
 */

UE.plugins['list'] = function () {
    var me = this,
            notExchange = {
                'TD':1,
                'PRE':1,
                'BLOCKQUOTE':1
            };
    me.setOpt( {
        'insertorderedlist':{
            'decimal':'', //'1,2,3...'
            'lower-alpha':'', // 'a,b,c...'
            'lower-roman':'', //'i,ii,iii...'
            'upper-alpha':'', //'A,B,C'
            'upper-roman':''     //'I,II,III...'
        },
        'insertunorderedlist':{
            'circle':'',
            'disc':'',
            'square':''
        }
    } );

    me.ready(function(){
        utils.cssRule('list','li{clear:both}',me.document);
    });



    function adjustList( list, tag, style ) {
        var nextList = list.nextSibling;
        if ( nextList && nextList.nodeType == 1 && nextList.tagName.toLowerCase() == tag && (domUtils.getStyle( nextList, 'list-style-type' ) || (tag == 'ol' ? 'decimal' : 'disc')) == style ) {
            domUtils.moveChild( nextList, list );
            if ( nextList.childNodes.length == 0 ) {
                domUtils.remove( nextList );
            }
        }
        var preList = list.previousSibling;
        if ( preList && preList.nodeType == 1 && preList.tagName.toLowerCase() == tag && (domUtils.getStyle( preList, 'list-style-type' ) || (tag == 'ol' ? 'decimal' : 'disc')) == style ) {
            domUtils.moveChild( list, preList );
        }


        if ( list.childNodes.length == 0 ) {
            domUtils.remove( list );
        }
    }

    function clearEmptySibling(node){
        var tmpNode = node.previousSibling;
        if ( tmpNode && domUtils.isEmptyBlock(tmpNode)) {
            domUtils.remove( tmpNode );
        }
        tmpNode = node.nextSibling;
        if ( tmpNode && domUtils.isEmptyBlock(tmpNode)) {
            domUtils.remove( tmpNode );
        }
    }
    me.addListener( 'keydown', function ( type, evt ) {
        function preventAndSave() {
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
            me.undoManger && me.undoManger.save();
        }

        var keyCode = evt.keyCode || evt.which;
        if ( keyCode == 13 ) {//å›žè½¦
            var range = me.selection.getRange(),
                    start = domUtils.findParentByTagName( range.startContainer, ['ol', 'ul'], true, function ( node ) {
                        return node.tagName == 'TABLE';
                    } ),
                    end = domUtils.findParentByTagName( range.endContainer, ['ol', 'ul'], true, function ( node ) {
                        return node.tagName == 'TABLE';
                    } );
            if ( start && end && start === end ) {

                if ( !range.collapsed ) {
                    start = domUtils.findParentByTagName( range.startContainer, 'li', true );
                    end = domUtils.findParentByTagName( range.endContainer, 'li', true );
                    if ( start && end && start === end ) {
                        range.deleteContents();
                        li = domUtils.findParentByTagName( range.startContainer, 'li', true );
                        if ( li && domUtils.isEmptyBlock( li ) ) {

                            pre = li.previousSibling;
                            next = li.nextSibling;
                            p = me.document.createElement( 'p' );

                            domUtils.fillNode( me.document, p );
                            parentList = li.parentNode;
                            if ( pre && next ) {
                                range.setStart( next, 0 ).collapse( true ).select( true );
                                domUtils.remove( li );

                            } else {
                                if ( !pre && !next || !pre ) {

                                    parentList.parentNode.insertBefore( p, parentList );


                                } else {
                                    li.parentNode.parentNode.insertBefore( p, parentList.nextSibling );
                                }
                                domUtils.remove( li );
                                if ( !parentList.firstChild ) {
                                    domUtils.remove( parentList );
                                }
                                range.setStart( p, 0 ).setCursor();


                            }
                            preventAndSave();
                            return;

                        }
                    } else {
                        var tmpRange = range.cloneRange(),
                                bk = tmpRange.collapse( false ).createBookmark();

                        range.deleteContents();
                        tmpRange.moveToBookmark( bk );
                        var li = domUtils.findParentByTagName( tmpRange.startContainer, 'li', true );

                        clearEmptySibling(li);
                        tmpRange.select();
                        preventAndSave();
                        return;
                    }
                }


                li = domUtils.findParentByTagName( range.startContainer, 'li', true );

                if ( li ) {
                    if ( domUtils.isEmptyBlock( li ) ) {
                        bk = range.createBookmark();
                        var parentList = li.parentNode;
                        if ( li !== parentList.lastChild ) {
                            domUtils.breakParent( li, parentList );
                            clearEmptySibling(li);
                        } else {

                            parentList.parentNode.insertBefore( li, parentList.nextSibling );
                            if ( domUtils.isEmptyNode( parentList ) ) {
                                domUtils.remove( parentList );
                            }
                        }
                        //åµŒå¥—ä¸�å¤„ç�†
                        if ( !dtd.$list[li.parentNode.tagName] ) {

                            if ( !domUtils.isBlockElm( li.firstChild ) ) {
                                p = me.document.createElement( 'p' );
                                li.parentNode.insertBefore( p, li );
                                while ( li.firstChild ) {
                                    p.appendChild( li.firstChild );
                                }
                                domUtils.remove( li );
                            } else {
                                domUtils.remove( li, true );
                            }
                        }
                        range.moveToBookmark( bk ).select();


                    } else {
                        var first = li.firstChild;
                        if ( !first || !domUtils.isBlockElm( first ) ) {
                            var p = me.document.createElement( 'p' );

                            !li.firstChild && domUtils.fillNode( me.document, p );
                            while ( li.firstChild ) {

                                p.appendChild( li.firstChild );
                            }
                            li.appendChild( p );
                            first = p;
                        }

                        var span = me.document.createElement( 'span' );

                        range.insertNode( span );
                        domUtils.breakParent( span, li );

                        var nextLi = span.nextSibling;
                        first = nextLi.firstChild;

                        if ( !first ) {
                            p = me.document.createElement( 'p' );

                            domUtils.fillNode( me.document, p );
                            nextLi.appendChild( p );
                            first = p;
                        }
                        if ( domUtils.isEmptyNode( first ) ) {
                            first.innerHTML = '';
                            domUtils.fillNode( me.document, first );
                        }

                        range.setStart( first, 0 ).collapse( true ).shrinkBoundary().select();
                        domUtils.remove( span );
                        pre = nextLi.previousSibling;
                        if ( pre && domUtils.isEmptyBlock( pre ) ) {
                            pre.innerHTML = '<p></p>';
                            domUtils.fillNode( me.document, pre.firstChild );
                        }

                    }
//                        }

                    preventAndSave();
                }


            }
        }
        if ( keyCode == 8 ) {
            //ä¿®ä¸­ieä¸­liä¸‹çš„é—®é¢˜
            range = me.selection.getRange();
            if ( range.collapsed && domUtils.isStartInblock( range ) ) {
                tmpRange = range.cloneRange().trimBoundary();
                li = domUtils.findParentByTagName( range.startContainer, 'li', true );

                //è¦�åœ¨liçš„æœ€å·¦è¾¹ï¼Œæ‰�èƒ½å¤„ç�†
                if ( li && domUtils.isStartInblock( tmpRange ) ) {

                    if ( li && (pre = li.previousSibling) ) {
                        if ( keyCode == 46 && li.childNodes.length ){
                            return;
                        }
                        //æœ‰å�¯èƒ½ä¸Šè¾¹çš„å…„å¼ŸèŠ‚ç‚¹æ˜¯ä¸ª2çº§è�œå�•ï¼Œè¦�è¿½åŠ åˆ°2çº§è�œå�•çš„æœ€å�Žçš„li
                        if ( dtd.$list[pre.tagName] ) {
                            pre = pre.lastChild;
                        }
                        me.undoManger && me.undoManger.save();
                        first = li.firstChild;
                        if ( domUtils.isBlockElm( first ) ) {
                            if ( domUtils.isEmptyNode( first ) ) {
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                                pre.appendChild( first );
                                range.setStart( first, 0 ).setCursor( false, true );
                                //firstä¸�æ˜¯å”¯ä¸€çš„èŠ‚ç‚¹
                                while ( li.firstChild ) {
                                    pre.appendChild( li.firstChild );
                                }
                            } else {
                                start = domUtils.findParentByTagName( range.startContainer, 'p', true );
                                if ( start && start !== first ) {
                                    return;
                                }
                                span = me.document.createElement( 'span' );
                                range.insertNode( span );
                                //åˆ¤æ–­preæ˜¯å�¦æ˜¯ç©ºçš„èŠ‚ç‚¹,å¦‚æžœæ˜¯<p><br/></p>ç±»åž‹çš„ç©ºèŠ‚ç‚¹ï¼Œå¹²æŽ‰pæ ‡ç­¾é˜²æ­¢å®ƒå� ä½�
                                if(domUtils.isEmptyBlock(pre)){
                                    pre.innerHTML = '';
                                }
                                domUtils.moveChild( li, pre );
                                range.setStartBefore( span ).collapse( true ).select( true );

                                domUtils.remove( span );

                            }
                        } else {
                            if ( domUtils.isEmptyNode( li ) ) {
                                var p = me.document.createElement( 'p' );
                                pre.appendChild( p );
                                range.setStart( p, 0 ).setCursor();
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                            } else {
                                range.setEnd( pre, pre.childNodes.length ).collapse().select( true );
                                while ( li.firstChild ) {
                                    pre.appendChild( li.firstChild );
                                }


                            }
                        }

                        domUtils.remove( li );

                        me.undoManger && me.undoManger.save();
                        domUtils.preventDefault( evt );
                        return;

                    }
                    //trace:980

                    if ( li && !li.previousSibling ) {
                        first = li.firstChild;
                        //trace:1648 è¦�åˆ¤æ–­liä¸‹å�ªæœ‰ä¸€ä¸ªèŠ‚ç‚¹
                        if ( !first || li.lastChild === first && domUtils.isEmptyNode( domUtils.isBlockElm( first ) ? first : li ) ) {
                            var p = me.document.createElement( 'p' );

                            li.parentNode.parentNode.insertBefore( p, li.parentNode );
                            domUtils.fillNode( me.document, p );
                            range.setStart( p, 0 ).setCursor();
                            domUtils.remove( !li.nextSibling ? li.parentNode : li );
                            me.undoManger && me.undoManger.save();
                            domUtils.preventDefault( evt );
                            return;
                        }


                    }


                }


            }

        }
    } );
    me.commands['insertorderedlist'] =
            me.commands['insertunorderedlist'] = {
                execCommand:function ( command, style ) {
                    if ( !style ) {
                        style = command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc';
                    }
                    var me = this,
                            range = this.selection.getRange(),
                            filterFn = function ( node ) {
                                return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace( node );
                            },
                            tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul',
                            frag = me.document.createDocumentFragment();
                    //åŽ»æŽ‰æ˜¯å› ä¸ºä¼šå‡ºçŽ°é€‰åˆ°æœ«å°¾ï¼Œå¯¼è‡´adjustmentBoundaryç¼©åˆ°ol/ulçš„ä½�ç½®
                    //range.shrinkBoundary();//.adjustmentBoundary();
                    range.adjustmentBoundary().shrinkBoundary();
                    var bko = range.createBookmark( true ),
                            start = domUtils.findParentByTagName( me.document.getElementById( bko.start ), 'li' ),
                            modifyStart = 0,
                            end = domUtils.findParentByTagName( me.document.getElementById( bko.end ), 'li' ),
                            modifyEnd = 0,
                            startParent, endParent,
                            list, tmp;

                    if ( start || end ) {
                        start && (startParent = start.parentNode);
                        if ( !bko.end ) {
                            end = start;
                        }
                        end && (endParent = end.parentNode);

                        if ( startParent === endParent ) {
                            while ( start !== end ) {
                                tmp = start;
                                start = start.nextSibling;
                                if ( !domUtils.isBlockElm( tmp.firstChild ) ) {
                                    var p = me.document.createElement( 'p' );
                                    while ( tmp.firstChild ) {
                                        p.appendChild( tmp.firstChild );
                                    }
                                    tmp.appendChild( p );
                                }
                                frag.appendChild( tmp );
                            }
                            tmp = me.document.createElement( 'span' );
                            startParent.insertBefore( tmp, end );
                            if ( !domUtils.isBlockElm( end.firstChild ) ) {
                                p = me.document.createElement( 'p' );
                                while ( end.firstChild ) {
                                    p.appendChild( end.firstChild );
                                }
                                end.appendChild( p );
                            }
                            frag.appendChild( end );
                            domUtils.breakParent( tmp, startParent );
                            if ( domUtils.isEmptyNode( tmp.previousSibling ) ) {
                                domUtils.remove( tmp.previousSibling );
                            }
                            if ( domUtils.isEmptyNode( tmp.nextSibling ) ) {
                                domUtils.remove( tmp.nextSibling )
                            }
                            var nodeStyle = domUtils.getComputedStyle( startParent, 'list-style-type' ) || (command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc');
                            if ( startParent.tagName.toLowerCase() == tag && nodeStyle == style ) {
                                for ( var i = 0, ci, tmpFrag = me.document.createDocumentFragment(); ci = frag.childNodes[i++]; ) {
                                    while ( ci.firstChild ) {
                                        tmpFrag.appendChild( ci.firstChild );
                                    }

                                }
                                tmp.parentNode.insertBefore( tmpFrag, tmp );
                            } else {
                                list = me.document.createElement( tag );
                                domUtils.setStyle( list, 'list-style-type', style );
                                list.appendChild( frag );
                                tmp.parentNode.insertBefore( list, tmp );
                            }

                            domUtils.remove( tmp );
                            list && adjustList( list, tag, style );
                            range.moveToBookmark( bko ).select();
                            return;
                        }
                        //å¼€å§‹
                        if ( start ) {
                            while ( start ) {
                                tmp = start.nextSibling;
                                if(domUtils.isTagNode(start,'ol ul')){
                                    frag.appendChild(start);
                                }else{
                                    var tmpfrag = me.document.createDocumentFragment(),
                                        hasBlock = 0;
                                    while ( start.firstChild ) {
                                        if ( domUtils.isBlockElm( start.firstChild ) ){
                                            hasBlock = 1;
                                        }
                                        tmpfrag.appendChild( start.firstChild );
                                    }
                                    if ( !hasBlock ) {
                                        var tmpP = me.document.createElement( 'p' );
                                        tmpP.appendChild( tmpfrag );
                                        frag.appendChild( tmpP );
                                    } else {
                                        frag.appendChild( tmpfrag );
                                    }
                                    domUtils.remove( start );
                                }

                                start = tmp;
                            }
                            startParent.parentNode.insertBefore( frag, startParent.nextSibling );
                            if ( domUtils.isEmptyNode( startParent ) ) {
                                range.setStartBefore( startParent );
                                domUtils.remove( startParent );
                            } else {
                                range.setStartAfter( startParent );
                            }


                            modifyStart = 1;
                        }

                        if ( end && domUtils.inDoc(endParent,me.document)) {
                            //ç»“æ�Ÿ
                            start = endParent.firstChild;
                            while ( start && start !== end ) {
                                tmp = start.nextSibling;
                                if(domUtils.isTagNode(start,'ol ul')){
                                    frag.appendChild(start);
                                }else{
                                    tmpfrag = me.document.createDocumentFragment();
                                    hasBlock = 0;
                                    while ( start.firstChild ) {
                                        if ( domUtils.isBlockElm( start.firstChild ) ){
                                            hasBlock = 1;
                                        }
                                        tmpfrag.appendChild( start.firstChild );
                                    }
                                    if ( !hasBlock ) {
                                        tmpP = me.document.createElement( 'p' );
                                        tmpP.appendChild( tmpfrag );
                                        frag.appendChild( tmpP );
                                    } else {
                                        frag.appendChild( tmpfrag );
                                    }
                                    domUtils.remove( start );
                                }
                                start = tmp;
                            }
                            var tmpDiv = domUtils.createElement(me.document,'div',{
                              'tmpDiv': 1
                            });
                            domUtils.moveChild(end,tmpDiv);

                            frag.appendChild( tmpDiv );
                            domUtils.remove( end );
                            endParent.parentNode.insertBefore( frag, endParent );
                            range.setEndBefore( endParent );
                            if ( domUtils.isEmptyNode( endParent ) ) {
                                domUtils.remove( endParent );
                            }

                            modifyEnd = 1;
                        }


                    }

                    if ( !modifyStart ) {
                        range.setStartBefore( me.document.getElementById( bko.start ) );
                    }
                    if ( bko.end && !modifyEnd ) {
                        range.setEndAfter( me.document.getElementById( bko.end ) );
                    }
                    range.enlarge( true, function ( node ) {
                        return notExchange[node.tagName];
                    } );

                    frag = me.document.createDocumentFragment();

                    var bk = range.createBookmark(),
                            current = domUtils.getNextDomNode( bk.start, false, filterFn ),
                            tmpRange = range.cloneRange(),
                            tmpNode,
                            block = domUtils.isBlockElm;

                    while ( current && current !== bk.end && (domUtils.getPosition( current, bk.end ) & domUtils.POSITION_PRECEDING) ) {

                        if ( current.nodeType == 3 || dtd.li[current.tagName] ) {
                            if ( current.nodeType == 1 && dtd.$list[current.tagName] ) {
                                while ( current.firstChild ) {
                                    frag.appendChild( current.firstChild );
                                }
                                tmpNode = domUtils.getNextDomNode( current, false, filterFn );
                                domUtils.remove( current );
                                current = tmpNode;
                                continue;

                            }
                            tmpNode = current;
                            tmpRange.setStartBefore( current );

                            while ( current && current !== bk.end && (!block( current ) || domUtils.isBookmarkNode( current ) ) ) {
                                tmpNode = current;
                                current = domUtils.getNextDomNode( current, false, null, function ( node ) {
                                    return !notExchange[node.tagName];
                                } );
                            }

                            if ( current && block( current ) ) {
                                tmp = domUtils.getNextDomNode( tmpNode, false, filterFn );
                                if ( tmp && domUtils.isBookmarkNode( tmp ) ) {
                                    current = domUtils.getNextDomNode( tmp, false, filterFn );
                                    tmpNode = tmp;
                                }
                            }
                            tmpRange.setEndAfter( tmpNode );

                            current = domUtils.getNextDomNode( tmpNode, false, filterFn );

                            var li = range.document.createElement( 'li' );

                            li.appendChild( tmpRange.extractContents() );
                            frag.appendChild( li );


                        } else {

                            current = domUtils.getNextDomNode( current, true, filterFn );
                        }
                    }
                    range.moveToBookmark( bk ).collapse( true );
                    list = me.document.createElement( tag );
                    domUtils.setStyle( list, 'list-style-type', style );
                    list.appendChild( frag );
                    range.insertNode( list );
                    //å½“å‰�listä¸Šä¸‹çœ‹èƒ½å�¦å�ˆå¹¶
                    adjustList( list, tag, style );
                    //åŽ»æŽ‰å†—ä½™çš„tmpDiv
                    for(var i= 0,ci,tmpDivs = domUtils.getElementsByTagName(list,'div');ci=tmpDivs[i++];){
                        if(ci.getAttribute('tmpDiv')){
                            domUtils.remove(ci,true)
                        }
                    }
                    range.moveToBookmark( bko ).select();

                },
                queryCommandState:function ( command ) {
                    return this.highlight ? -1 :
                            domUtils.filterNodeList( this.selection.getStartElementPath(), command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul' ) ? 1 : 0;
                },
                queryCommandValue:function ( command ) {
                    var node = domUtils.filterNodeList( this.selection.getStartElementPath(), command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul' );
                    return node ? domUtils.getComputedStyle( node, 'list-style-type' ) : null;
                }
            };
};


///import core
///import plugins/serialize.js
///import plugins/undo.js
///commands æŸ¥çœ‹æº�ç �
///commandsName  Source
///commandsTitle  æŸ¥çœ‹æº�ç �
(function (){
    function SourceFormater(config){
        config = config || {};
        this.indentChar = config.indentChar || '    ';
        this.breakChar = config.breakChar || '\n';
        this.selfClosingEnd = config.selfClosingEnd || ' />';
    }
    var unhtml1 = function (){
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        function rep( m ){ return map[m]; }
        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    var inline = utils.extend({a:1,A:1},dtd.$inline,true);


    function printAttrs(attrs){
        var buff = [];
        for (var k in attrs) {
            buff.push(k + '="' + unhtml1(attrs[k]) + '"');
        }
        return buff.join(' ');
    }
    SourceFormater.prototype = {
        format: function (html){
            var node = UE.serialize.parseHTML(html);
            this.buff = [];
            this.indents = '';
            this.indenting = 1;
            this.visitNode(node);
            return this.buff.join('');
        },
        visitNode: function (node){
            if (node.type == 'fragment') {
                this.visitChildren(node.children);
            } else if (node.type == 'element') {
                var selfClosing = dtd.$empty[node.tag];
                this.visitTag(node.tag, node.attributes, selfClosing);

                this.visitChildren(node.children);

                if (!selfClosing) {
                    this.visitEndTag(node.tag);
                }
            } else if (node.type == 'comment') {
                this.visitComment(node.data);
            } else {
                this.visitText(node.data,dtd.$notTransContent[node.parent.tag]);
            }
        },
        visitChildren: function (children){
            for (var i=0; i<children.length; i++) {
                this.visitNode(children[i]);
            }
        },
        visitTag: function (tag, attrs, selfClosing){
            if (this.indenting) {
                this.indent();
            } else if (!inline[tag]) { // todo: åŽ»æŽ‰a, å› ä¸ºdtdçš„inlineé‡Œé�¢æ²¡æœ‰a
                this.newline();
                this.indent();
            }
            this.buff.push('<', tag);
            var attrPart = printAttrs(attrs);
            if (attrPart) {
                this.buff.push(' ', attrPart);
            }
            if (selfClosing) {
                this.buff.push(this.selfClosingEnd);
                if (tag == 'br') {
                    this.newline();
                }
            } else {
                this.buff.push('>');
                this.indents += this.indentChar;
            }
            if (!inline[tag]) {
                this.newline();
            }
        },
        indent: function (){
            this.buff.push(this.indents);
            this.indenting = 0;
        },
        newline: function (){
            this.buff.push(this.breakChar);
            this.indenting = 1;
        },
        visitEndTag: function (tag){
            
            this.indents = this.indents.slice(0, -this.indentChar.length);
            if (this.indenting) {
                this.indent();
            } else if (!inline[tag]) {
                this.newline();
                this.indent();
            }
            this.buff.push('</', tag, '>');
        },
        visitText: function (text,notTrans){
            if (this.indenting) {
                this.indent();
            }
      
//            if(!notTrans){
//                 text = text.replace(/&nbsp;/g, ' ').replace(/[ ][ ]+/g, function (m){
//                    return new Array(m.length + 1).join('&nbsp;');
//                }).replace(/(?:^ )|(?: $)/g, '&nbsp;');
//            }
            text = text.replace(/&nbsp;/g, ' ');
            this.buff.push(text);

        },
        visitComment: function (text){
            if (this.indenting) {
                this.indent();
            }
            this.buff.push('<!--', text, '-->');
        }
    };

    var sourceEditors = {
        textarea: function (editor, holder){
            var textarea = holder.ownerDocument.createElement('textarea');
            textarea.style.cssText = 'position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;';
            // todo: IEä¸‹å�ªæœ‰onresizeå±žæ€§å�¯ç”¨... å¾ˆçº ç»“
            if (browser.ie && browser.version < 8) {
                textarea.style.width = holder.offsetWidth + 'px';
                textarea.style.height = holder.offsetHeight + 'px';
                holder.onresize = function (){
                    textarea.style.width = holder.offsetWidth + 'px';
                    textarea.style.height = holder.offsetHeight + 'px';
                };
            }
            holder.appendChild(textarea);
            return {
                setContent: function (content){
                    textarea.value = content;
                },
                getContent: function (){
                    return textarea.value;
                },
                select: function (){
                    var range;
                    if (browser.ie) {
                        range = textarea.createTextRange();
                        range.collapse(true);
                        range.select();
                    } else {
                        //todo: chromeä¸‹æ— æ³•è®¾ç½®ç„¦ç‚¹
                        textarea.setSelectionRange(0, 0);
                        textarea.focus();
                    }
                },
                dispose: function (){
                    holder.removeChild(textarea);
                    // todo
                    holder.onresize = null;
                    textarea = null;
                    holder = null;
                }
            };
        },
        codemirror: function (editor, holder){

            var codeEditor = window.CodeMirror(holder, {
                mode: "text/html",
                tabMode: "indent",
                lineNumbers: true,
                lineWrapping:true
            });
            var dom = codeEditor.getWrapperElement();
            dom.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';
            codeEditor.getScrollerElement().style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
            codeEditor.refresh();
            return {
                getCodeMirror:function(){
                    return codeEditor;
                },
                setContent: function (content){
                    codeEditor.setValue(content);
                },
                getContent: function (){
                    return codeEditor.getValue();
                },
                select: function (){
                    codeEditor.focus();
                },
                dispose: function (){
                    holder.removeChild(dom);
                    dom = null;
                    codeEditor = null;
                }
            };
        }
    };

    UE.plugins['source'] = function (){
        var me = this;
        var opt = this.options;
        var formatter = new SourceFormater(opt.source);
        var sourceMode = false;
        var sourceEditor;
        opt.sourceEditor = browser.ie && browser.version < 8 ? 'textarea' : (opt.sourceEditor || 'codemirror');

        me.setOpt({
            sourceEditorFirst:false
        });
        function createSourceEditor(holder){
            return sourceEditors[opt.sourceEditor == 'codemirror' && window.CodeMirror ? 'codemirror' : 'textarea'](me, holder);
        }

        var bakCssText;
        //è§£å†³åœ¨æº�ç �æ¨¡å¼�ä¸‹getContentä¸�èƒ½å¾—åˆ°æœ€æ–°çš„å†…å®¹é—®é¢˜
        var oldGetContent = me.getContent;

        me.commands['source'] = {
            execCommand: function (){

                sourceMode = !sourceMode;
                if (sourceMode) {
                    me.undoManger && me.undoManger.save();
                    this.currentSelectedArr && domUtils.clearSelectedArr(this.currentSelectedArr);
                    if(browser.gecko){
                        me.body.contentEditable = false;
                    }

                    bakCssText = me.iframe.style.cssText;
                    me.iframe.style.cssText += 'position:absolute;left:-32768px;top:-32768px;';

                    var content = formatter.format(me.hasContents() ? me.getContent() : '');

                    sourceEditor = createSourceEditor(me.iframe.parentNode);

                    sourceEditor.setContent(content);
                    setTimeout(function (){
                        sourceEditor.select();
                        me.addListener('fullscreenchanged', function(){
                            try{
                                sourceEditor.getCodeMirror().refresh()
                            }catch(e){}
                        });
                    });
                    //é‡�ç½®getContentï¼Œæº�ç �æ¨¡å¼�ä¸‹å�–å€¼ä¹Ÿèƒ½æ˜¯æœ€æ–°çš„æ•°æ�®
                    me.getContent = function (){
                        var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                        cont = cont.replace(/>[\n\r\t]+([ ]{4})+/g,'>').replace(/[\n\r\t]+([ ]{4})+</g,'<').replace(/>[\n\r\t]+</g,'><');
                        me.setContent(cont,true);
                        return oldGetContent.apply(this);
                    };
                } else {
                    me.iframe.style.cssText = bakCssText;
                    var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    cont = cont.replace(/>[\n\r\t]+([ ]{4})+/g,'>').replace(/[\n\r\t]+([ ]{4})+</g,'<').replace(/>[\n\r\t]+</g,'><');
                    me.setContent(cont);
                    sourceEditor.dispose();
                    sourceEditor = null;
                    //è¿˜åŽŸgetContentæ–¹æ³•
                    me.getContent = oldGetContent;
                    setTimeout(function(){
                        var first = me.body.firstChild;
                        //trace:1106 éƒ½åˆ é™¤ç©ºäº†ï¼Œä¸‹è¾¹ä¼šæŠ¥é”™ï¼Œæ‰€ä»¥è¡¥å……ä¸€ä¸ªpå� ä½�
                        if(!first){
                            me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
                            first = me.body.firstChild;
                        }
                        //è¦�åœ¨ifmä¸ºæ˜¾ç¤ºæ—¶ffæ‰�èƒ½å�–åˆ°selection,å�¦åˆ™æŠ¥é”™
                        //è¿™é‡Œä¸�èƒ½æ¯”è¾ƒä½�ç½®äº†
                        me.undoManger && me.undoManger.save(true);

                        while(first && first.firstChild){

                            first = first.firstChild;
                        }
                        var range = me.selection.getRange();
                        if(first.nodeType == 3 || dtd.$empty[first.tagName]){
                            range.setStartBefore(first);
                        }else{
                            range.setStart(first,0);
                        }

                        if(browser.gecko){

                            var input = document.createElement('input');
                            input.style.cssText = 'position:absolute;left:0;top:-32768px';

                            document.body.appendChild(input);

                            me.body.contentEditable = false;
                            setTimeout(function(){
                                domUtils.setViewportOffset(input, { left: -32768, top: 0 });
                                input.focus();
                                setTimeout(function(){
                                    me.body.contentEditable = true;
                                    range.setCursor(false,true);
                                    domUtils.remove(input);
                                });

                            });
                        }else{
                            range.setCursor(false,true);
                        }
                    });
                }
                this.fireEvent('sourcemodechanged', sourceMode);
            },
            queryCommandState: function (){
                return sourceMode|0;
            },
            notNeedUndo : 1
        };
        var oldQueryCommandState = me.queryCommandState;

        me.queryCommandState = function (cmdName){
            cmdName = cmdName.toLowerCase();
            if (sourceMode) {
                //æº�ç �æ¨¡å¼�ä¸‹å�¯ä»¥å¼€å�¯çš„å‘½ä»¤
                return cmdName in {
                    'source' : 1,
                    'fullscreen' : 1
                } ? 1 : -1
            }
            return oldQueryCommandState.apply(this, arguments);
        };

        if(opt.sourceEditor == "codemirror"){

            me.addListener("ready",function(){
                utils.loadFile(document,{
                    src : opt.codeMirrorJsUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.js",
                    tag : "script",
                    type : "text/javascript",
                    defer : "defer"
                },function(){
                    if(opt.sourceEditorFirst){
                        setTimeout(function(){
                            me.execCommand("source");
                        },0);
                    }
                });
                utils.loadFile(document,{
                    tag : "link",
                    rel : "stylesheet",
                    type : "text/css",
                    href : opt.codeMirrorCssUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.css"
                });

            });
        }

    };

})();
///import core
///commands å¿«æ�·é”®
///commandsName  ShortCutKeys
///commandsTitle  å¿«æ�·é”®
//é…�ç½®å¿«æ�·é”®
UE.plugins['shortcutkeys'] = function(){
    var me = this,
        shortcutkeys = {
    		"ctrl+66" : "Bold" ,//^B
        	"ctrl+90" : "Undo" ,//undo
        	"ctrl+89" : "Redo", //redo
       		"ctrl+73" : "Italic", //^I
       		"ctrl+85" : "Underline" ,//^U
        	"ctrl+shift+67" : "removeformat", //æ¸…é™¤æ ¼å¼�
        	"ctrl+shift+76" : "justify:left", //å±…å·¦
        	"ctrl+shift+82" : "justify:right", //å±…å�³
        	"ctrl+65" : "selectAll",
            "ctrl+13" : "autosubmit"//æ‰‹åŠ¨æ��äº¤
//        	,"9"	   : "indent" //tab
    	};
    me.addListener('keydown',function(type,e){

        var keyCode = e.keyCode || e.which,value;
		for ( var i in shortcutkeys ) {
		    if ( /^(ctrl)(\+shift)?\+(\d+)$/.test( i.toLowerCase() ) || /^(\d+)$/.test( i ) ) {
		        if ( ( (RegExp.$1 == 'ctrl' ? (e.ctrlKey||e.metaKey||browser.opera && keyCode == 17) : 0)
                        && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                        && keyCode == RegExp.$3
                    ) ||
                     keyCode == RegExp.$1
                ){

                    value = shortcutkeys[i].split(':');
                    me.execCommand( value[0],value[1]);
                    domUtils.preventDefault(e);
		        }
		    }
		}
    });
};
///import core
///import plugins/undo.js
///commands è®¾ç½®å›žè½¦æ ‡ç­¾pæˆ–br
///commandsName  EnterKey
///commandsTitle  è®¾ç½®å›žè½¦æ ‡ç­¾pæˆ–br
/**
 * @description å¤„ç�†å›žè½¦
 * @author zhanyi
 */
UE.plugins['enterkey'] = function() {
    var hTag,
        me = this,
        tag = me.options.enterTag;
    me.addListener('keyup', function(type, evt) {

        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {
            var range = me.selection.getRange(),
                start = range.startContainer,
                doSave;

            //ä¿®æ­£åœ¨h1-h6é‡Œè¾¹å›žè½¦å�Žä¸�èƒ½åµŒå¥—pçš„é—®é¢˜
            if (!browser.ie) {

                if (/h\d/i.test(hTag)) {
                    if (browser.gecko) {
                        var h = domUtils.findParentByTagName(start, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote'], true);
                        if (!h) {
                            me.document.execCommand('formatBlock', false, '<p>');
                            doSave = 1;
                        }
                    } else {
                        //chrome remove div
                        if (start.nodeType == 1) {
                            var tmp = me.document.createTextNode(''),div;
                            range.insertNode(tmp);
                            div = domUtils.findParentByTagName(tmp, 'div', true);
                            if (div) {
                                var p = me.document.createElement('p');
                                while (div.firstChild) {
                                    p.appendChild(div.firstChild);
                                }
                                div.parentNode.insertBefore(p, div);
                                domUtils.remove(div);
                                range.setStartBefore(tmp).setCursor();
                                doSave = 1;
                            }
                            domUtils.remove(tmp);

                        }
                    }

                    if (me.undoManger && doSave) {
                        me.undoManger.save();
                    }
                }
                //æ²¡æœ‰ç«™ä½�ç¬¦ï¼Œä¼šå‡ºçŽ°å¤šè¡Œçš„é—®é¢˜
                browser.opera &&  range.select();
            }



            setTimeout(function() {
                me.selection.getRange().scrollToView(me.autoHeightEnabled, me.autoHeightEnabled ? domUtils.getXY(me.iframe).y : 0);
            }, 50);

        }
    });

    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {//å›žè½¦
            if (me.undoManger) {
                me.undoManger.save();
            }
            hTag = '';


            var range = me.selection.getRange();

            if (!range.collapsed) {
                //è·¨tdä¸�èƒ½åˆ 
                var start = range.startContainer,
                    end = range.endContainer,
                    startTd = domUtils.findParentByTagName(start, 'td', true),
                    endTd = domUtils.findParentByTagName(end, 'td', true);
                if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
                    evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
                    return;
                }
            }
            me.currentSelectedArr && domUtils.clearSelectedArr(me.currentSelectedArr);

            if (tag == 'p') {


                if (!browser.ie) {

                    start = domUtils.findParentByTagName(range.startContainer, ['ol','ul','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote'], true);

                    //operaä¸‹æ‰§è¡Œformatblockä¼šåœ¨tableçš„åœºæ™¯ä¸‹æœ‰é—®é¢˜ï¼Œå›žè½¦åœ¨operaåŽŸç”Ÿæ”¯æŒ�å¾ˆå¥½ï¼Œæ‰€ä»¥æš‚æ—¶åœ¨operaåŽ»æŽ‰è°ƒç”¨è¿™ä¸ªåŽŸç”Ÿçš„command
                    //trace:2431
                    if (!start && !browser.opera) {

                        me.document.execCommand('formatBlock', false, '<p>');
                        if (browser.gecko) {
                            range = me.selection.getRange();
                            start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                            start && domUtils.removeDirtyAttr(start);
                        }


                    } else {
                        hTag = start.tagName;
                        start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
                    }

                }

            } else {
                evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);

                if (!range.collapsed) {
                    range.deleteContents();
                    start = range.startContainer;
                    if (start.nodeType == 1 && (start = start.childNodes[range.startOffset])) {
                        while (start.nodeType == 1) {
                            if (dtd.$empty[start.tagName]) {
                                range.setStartBefore(start).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save();
                                }
                                return false;
                            }
                            if (!start.firstChild) {
                                var br = range.document.createElement('br');
                                start.appendChild(br);
                                range.setStart(start, 0).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save();
                                }
                                return false;
                            }
                            start = start.firstChild;
                        }
                        if (start === range.startContainer.childNodes[range.startOffset]) {
                            br = range.document.createElement('br');
                            range.insertNode(br).setCursor();

                        } else {
                            range.setStart(start, 0).setCursor();
                        }


                    } else {
                        br = range.document.createElement('br');
                        range.insertNode(br).setStartAfter(br).setCursor();
                    }


                } else {
                    br = range.document.createElement('br');
                    range.insertNode(br);
                    var parent = br.parentNode;
                    if (parent.lastChild === br) {
                        br.parentNode.insertBefore(br.cloneNode(true), br);
                        range.setStartBefore(br);
                    } else {
                        range.setStartAfter(br);
                    }
                    range.setCursor();

                }

            }

        }
    });
};

/*
*   å¤„ç�†ç‰¹æ®Šé”®çš„å…¼å®¹æ€§é—®é¢˜
*/
UE.plugins['keystrokes'] = function() {
    var me = this,
        flag = 0,
        keys = domUtils.keys,
        trans = {
            'B' : 'strong',
            'I' : 'em',
            'FONT' : 'span'
        },
        sizeMap = [0, 10, 12, 16, 18, 24, 32, 48],
        listStyle = {
            'OL':['decimal','lower-alpha','lower-roman','upper-alpha','upper-roman'],

            'UL':[ 'circle','disc','square']
        };

    //åˆ¤æ–­åˆ—è¡¨æ˜¯å�¦æ˜¯ç›¸ä¼¼çš„
    function sameListNode(nodeA,nodeB){
        if(nodeA.tagName !== nodeB.tagName ||
            domUtils.getComputedStyle(nodeA,'list-style-type') !== domUtils.getComputedStyle(nodeB,'list-style-type')
        ){
            return false
        }
        return true;
    }
    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if(this.selectAll){
            this.selectAll = false;
            if((keyCode == 8 || keyCode == 46)){
                me.undoManger && me.undoManger.save();
                 //trace:1633
                me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';

                new dom.Range(me.document).setStart(me.body.firstChild,0).setCursor(false,true);
                me.undoManger && me.undoManger.save();
                //todo å¯¹æ€§èƒ½ä¼šæœ‰å½±å“�
                browser.ie && me._selectionChange();
                domUtils.preventDefault(evt);
                return;
            }


        }

        //å¤„ç�†backspace/del
        if (keyCode == 8 ) {//|| keyCode == 46


            var range = me.selection.getRange(),
                tmpRange,
                start,end;

            //å½“åˆ é™¤åˆ°bodyæœ€å¼€å§‹çš„ä½�ç½®æ—¶ï¼Œä¼šåˆ é™¤åˆ°body,é˜»æ­¢è¿™ä¸ªåŠ¨ä½œ
            if(range.collapsed){
                start = range.startContainer;
                //æœ‰å�¯èƒ½æ˜¯å±•ä½�ç¬¦å�·
                if(domUtils.isWhitespace(start)){
                    start = start.parentNode;
                }
                if(domUtils.isEmptyNode(start) && start === me.body.firstChild){

                    if(start.tagName != 'P'){
                        p = me.document.createElement('p');
                        me.body.insertBefore(p,start);
                        domUtils.fillNode(me.document,p);
                        range.setStart(p,0).setCursor(false,true);
                        //trace:1645
                        domUtils.remove(start);
                    }
                    domUtils.preventDefault(evt);
                    return;

                }
            }

            if (range.collapsed && range.startContainer.nodeType == 3 && range.startContainer.nodeValue.replace(new RegExp(domUtils.fillChar, 'g'), '').length == 0) {
                range.setStartBefore(range.startContainer).collapse(true);
            }
            //è§£å†³é€‰ä¸­controlå…ƒç´ ä¸�èƒ½åˆ é™¤çš„é—®é¢˜
            if (start = range.getClosedNode()) {
                me.undoManger && me.undoManger.save();
                range.setStartBefore(start);
                domUtils.remove(start);
                range.setCursor();
                me.undoManger && me.undoManger.save();
                domUtils.preventDefault(evt);
                return;
            }
            //é˜»æ­¢åœ¨tableä¸Šçš„åˆ é™¤
            if (!browser.ie) {

                start = domUtils.findParentByTagName(range.startContainer, 'table', true);
                end = domUtils.findParentByTagName(range.endContainer, 'table', true);
                if (start && !end || !start && end || start !== end) {
                    evt.preventDefault();
                    return;
                }
                //è¡¨æ ¼é‡Œå›žè½¦ï¼Œåˆ é™¤æ—¶ï¼Œå…‰æ ‡è¢«å®šä½�åˆ°äº†på¤–è¾¹ï¼Œå¯¼è‡´å¤šæ¬¡åˆ é™¤æ‰�èƒ½åˆ°ä¸Šä¸€è¡Œï¼Œè¿™é‡Œçš„å¤„ç�†å¿˜è®°æ˜¯ä¸ºä»€ä¹ˆï¼Œæš‚æ—¶æ³¨è§†æŽ‰
                //è§£å†³trace:1966çš„é—®é¢˜
//                if (browser.webkit && range.collapsed && start) {
//                    tmpRange = range.cloneRange().txtToElmBoundary();
//                    start = tmpRange.startContainer;
//                           debugger
//                    if (domUtils.isBlockElm(start) && !dtd.$tableContent[start.tagName] && !domUtils.getChildCount(start, function(node) {
//                        return node.nodeType == 1 ? node.tagName !== 'BR' : 1;
//                    })) {
//
//                        tmpRange.setStartBefore(start).setCursor();
//                        domUtils.remove(start, true);
//                        evt.preventDefault();
//                        return;
//                    }
//                }
            }


            if (me.undoManger) {

                if (!range.collapsed) {
                    me.undoManger.save();
                    flag = 1;
                }
            }

        }
        //å¤„ç�†tabé”®çš„é€»è¾‘
        if (keyCode == 9) {
            range = me.selection.getRange();
            me.undoManger && me.undoManger.save();

            for (var i = 0,txt = '',tabSize = me.options.tabSize|| 4,tabNode =  me.options.tabNode || '&nbsp;'; i < tabSize; i++) {
                txt += tabNode;
            }
            var span = me.document.createElement('span');
            span.innerHTML = txt;
            if (range.collapsed) {


                var li = domUtils.findParentByTagName(range.startContainer, 'li', true);

                if (li && domUtils.isStartInblock(range)) {
                    bk = range.createBookmark();
                    var parentLi = li.parentNode,
                        list = me.document.createElement(parentLi.tagName);
                    var index = utils.indexOf(listStyle[list.tagName], domUtils.getComputedStyle(parentLi, 'list-style-type'));
                    index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                    domUtils.setStyle(list, 'list-style-type', listStyle[list.tagName][index]);
                    parentLi.insertBefore(list, li);
                    list.appendChild(li);

                    //trace:2721
                    //å�ˆå¹¶ä¸Šä¸‹ç›¸å�Œçš„åˆ—è¡¨
                    var preList = list.previousSibling;
                    if(preList && sameListNode(preList,list)){
                        domUtils.moveChild(list,preList);
                        domUtils.remove(list);
                        list = preList
                    }
                    var nextList = list.nextSibling;
                    if(nextList && sameListNode(nextList,list)){
                        domUtils.moveChild(nextList,list);
                        domUtils.remove(nextList);
                    }

                    range.moveToBookmark(bk).select();

                } else{
                    range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
                }

            } else {
                //å¤„ç�†table
                start = domUtils.findParentByTagName(range.startContainer, 'table', true);
                end = domUtils.findParentByTagName(range.endContainer, 'table', true);
                if (start || end) {
                    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
                    return;
                }
                //å¤„ç�†åˆ—è¡¨ å†�ä¸€ä¸ªlisté‡Œå¤„ç�†
                start = domUtils.findParentByTagName(range.startContainer, ['ol','ul'], true);
                end = domUtils.findParentByTagName(range.endContainer, ['ol','ul'], true);
                if (start && end && start === end) {
                    var bk = range.createBookmark();
                    start = domUtils.findParentByTagName(range.startContainer, 'li', true);
                    end = domUtils.findParentByTagName(range.endContainer, 'li', true);
                    //åœ¨å¼€å§‹å�•ç‹¬å¤„ç�†
                    if (start === start.parentNode.firstChild) {
                        var parentList = me.document.createElement(start.parentNode.tagName);

                        start.parentNode.parentNode.insertBefore(parentList, start.parentNode);
                        parentList.appendChild(start.parentNode);
                    } else {
                        parentLi = start.parentNode;
                            list = me.document.createElement(parentLi.tagName);

                        index = utils.indexOf(listStyle[list.tagName], domUtils.getComputedStyle(parentLi, 'list-style-type'));
                        index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                        domUtils.setStyle(list, 'list-style-type', listStyle[list.tagName][index]);
                        start.parentNode.insertBefore(list, start);
                        var nextLi;
                        while (start !== end) {
                            nextLi = start.nextSibling;
                            list.appendChild(start);
                            start = nextLi;
                        }
                        list.appendChild(end);

                    }
                    range.moveToBookmark(bk).select();

                } else {
                    if (start || end) {
                        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
                        return
                    }
                    //æ™®é€šçš„æƒ…å†µ
                    start = domUtils.findParent(range.startContainer, filterFn);
                    end = domUtils.findParent(range.endContainer, filterFn);
                    if (start && end && start === end) {
                        range.deleteContents();
                        range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
                    } else {
                        var bookmark = range.createBookmark(),
                            filterFn = function(node) {
                                return domUtils.isBlockElm(node);

                            };

                        range.enlarge(true);
                        var bookmark2 = range.createBookmark(),
                            current = domUtils.getNextDomNode(bookmark2.start, false, filterFn);


                        while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {


                            current.insertBefore(span.cloneNode(true).firstChild, current.firstChild);

                            current = domUtils.getNextDomNode(current, false, filterFn);

                        }

                        range.moveToBookmark(bookmark2).moveToBookmark(bookmark).select();
                    }

                }


            }
            me.undoManger && me.undoManger.save();
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        }
        //trace:1634
        //ffçš„delé”®åœ¨å®¹å™¨ç©ºçš„æ—¶å€™ï¼Œä¹Ÿä¼šåˆ é™¤
        if(browser.gecko && keyCode == 46){
            range = me.selection.getRange();
            if(range.collapsed){
                start = range.startContainer;
                if(domUtils.isEmptyBlock(start)){
                    var parent = start.parentNode;
                    while(domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)){
                        start = parent;
                        parent = parent.parentNode;
                    }
                    if(start === parent.lastChild)
                        evt.preventDefault();
                    return;
                }
            }
        }
    });
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        //ä¿®å¤�ie/chrome <strong><em>x|</em></strong> å½“ç‚¹é€€æ ¼å�Žåœ¨è¾“å…¥æ–‡å­—å�Žä¼šå‡ºçŽ°  <b><i>x</i></b>
        if (!browser.gecko && !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            range = me.selection.getRange();
            if (range.collapsed) {
                var start = range.startContainer,
                    isFixed = 0;

                while (!domUtils.isBlockElm(start)) {
                    if (start.nodeType == 1 && utils.indexOf(['FONT','B','I'], start.tagName) != -1) {

                        var tmpNode = me.document.createElement(trans[start.tagName]);
                        if (start.tagName == 'FONT') {
                            //chrome only remember color property
                            tmpNode.style.cssText = (start.getAttribute('size') ? 'font-size:' + (sizeMap[start.getAttribute('size')] || 12) + 'px' : '')
                                + ';' + (start.getAttribute('color') ? 'color:' + start.getAttribute('color') : '')
                                + ';' + (start.getAttribute('face') ? 'font-family:' + start.getAttribute('face') : '')
                                + ';' + start.style.cssText;
                        }
                        while (start.firstChild) {
                            tmpNode.appendChild(start.firstChild)
                        }
                        start.parentNode.insertBefore(tmpNode, start);
                        domUtils.remove(start);
                        if (!isFixed) {
                            range.setEnd(tmpNode, tmpNode.childNodes.length).collapse(true)

                        }
                        start = tmpNode;
                        isFixed = 1;
                    }
                    start = start.parentNode;

                }

                isFixed && range.select()

            }
        }

        if (keyCode == 8 ) {//|| keyCode == 46

            //é’ˆå¯¹ffä¸‹åœ¨åˆ—è¡¨é¦–è¡Œé€€æ ¼ï¼Œä¸�èƒ½åˆ é™¤ç©ºæ ¼è¡Œçš„é—®é¢˜
            if(browser.gecko){
                for(var i=0,li,lis = domUtils.getElementsByTagName(this.body,'li');li=lis[i++];){
                    if(domUtils.isEmptyNode(li) && !li.previousSibling){
                        var liOfPn = li.parentNode;
                        domUtils.remove(li);
                        if(domUtils.isEmptyNode(liOfPn)){
                            domUtils.remove(liOfPn)
                        }

                    }
                }
            }

            var range,start,parent,
                tds = this.currentSelectedArr;
            if (tds && tds.length > 0) {
                for (var i = 0,ti; ti = tds[i++];) {
                    ti.innerHTML = browser.ie ? ( browser.version < 9 ? '&#65279' : '' ) : '<br/>';

                }
                range = new dom.Range(this.document);
                range.setStart(tds[0], 0).setCursor();
                if (flag) {
                    me.undoManger.save();
                    flag = 0;
                }
                //é˜»æ­¢chromeæ‰§è¡Œé»˜è®¤çš„åŠ¨ä½œ
                if (browser.webkit) {
                    evt.preventDefault();
                }
                return;
            }

            range = me.selection.getRange();

            //ctrl+a å�Žå…¨éƒ¨åˆ é™¤å�šå¤„ç�†
//
//            if (domUtils.isEmptyBlock(me.body) && !range.startOffset) {
//                //trace:1633
//                me.body.innerHTML = '<p>'+(browser.ie ? '&nbsp;' : '<br/>')+'</p>';
//                range.setStart(me.body.firstChild,0).setCursor(false,true);
//                me.undoManger && me.undoManger.save();
//                //todo å¯¹æ€§èƒ½ä¼šæœ‰å½±å“�
//                browser.ie && me._selectionChange();
//                return;
//            }

            //å¤„ç�†åˆ é™¤ä¸�å¹²å‡€çš„é—®é¢˜

            start = range.startContainer;
            if(domUtils.isWhitespace(start)){
                start = start.parentNode
            }
            //æ ‡å¿—ä½�é˜²æ­¢ç©ºçš„pæ— æ³•åˆ é™¤
            var removeFlag = 0;
            while (start.nodeType == 1 && domUtils.isEmptyNode(start) && dtd.$removeEmpty[start.tagName]) {
                removeFlag = 1;
                parent = start.parentNode;
                domUtils.remove(start);
                start = parent;
            }

            if ( removeFlag && start.nodeType == 1 && domUtils.isEmptyNode(start)) {
                //ieä¸‹çš„é—®é¢˜ï¼Œè™½ç„¶æ²¡æœ‰äº†ç›¸åº”çš„èŠ‚ç‚¹ä½†ä¸€æ—¦ä½ è¾“å…¥æ–‡å­—è¿˜æ˜¯ä¼šè‡ªåŠ¨æŠŠåˆ é™¤çš„èŠ‚ç‚¹åŠ ä¸Šï¼Œ
                if (browser.ie) {
                    var span = range.document.createElement('span');
                    start.appendChild(span);
                    range.setStart(start,0).setCursor();
                    //for ie
                    li = domUtils.findParentByTagName(start,'li',true);
                    if(li){
                        var next = li.nextSibling;
                        while(next){
                            if(domUtils.isEmptyBlock(next)){
                                li = next;
                                next = next.nextSibling;
                                domUtils.remove(li);
                                continue;

                            }
                            break;
                        }
                    }
                } else {
                    start.innerHTML = '<br/>';
                    range.setStart(start, 0).setCursor(false,true);
                }

                setTimeout(function() {
                    if (browser.ie) {
                        domUtils.remove(span);
                    }

                    if (flag) {
                        me.undoManger.save();
                        flag = 0;
                    }
                }, 0)
            } else {

                if (flag) {
                    me.undoManger.save();
                    flag = 0;
                }

            }
        }
    })
};
///import core
///commands ä¿®å¤�chromeä¸‹å›¾ç‰‡ä¸�èƒ½ç‚¹å‡»çš„é—®é¢˜
///commandsName  FixImgClick
///commandsTitle  ä¿®å¤�chromeä¸‹å›¾ç‰‡ä¸�èƒ½ç‚¹å‡»çš„é—®é¢˜
//ä¿®å¤�chromeä¸‹å›¾ç‰‡ä¸�èƒ½ç‚¹å‡»çš„é—®é¢˜
//todo å�¯ä»¥æ”¹å¤§å°�
UE.plugins['fiximgclick'] = function() {
    var me = this;
    if ( browser.webkit ) {
        me.addListener( 'click', function( type, e ) {
            if ( e.target.tagName == 'IMG' ) {
                var range = new dom.Range( me.document );
                range.selectNode( e.target ).select();

            }
        } );
    }
};
///import core
///commands ä¸ºé�žieæµ�è§ˆå™¨è‡ªåŠ¨æ·»åŠ aæ ‡ç­¾
///commandsName  AutoLink
///commandsTitle  è‡ªåŠ¨å¢žåŠ é“¾æŽ¥
/**
 * @description ä¸ºé�žieæµ�è§ˆå™¨è‡ªåŠ¨æ·»åŠ aæ ‡ç­¾
 * @author zhanyi
 */
    UE.plugins['autolink'] = function() {
        var cont = 0;
        if (browser.ie) {
            return;
        }
        var me = this;
        me.addListener('reset',function(){
           cont = 0;
        });
        me.addListener('keydown', function(type, evt) {
            var keyCode = evt.keyCode || evt.which;

            if (keyCode == 32 || keyCode == 13) {

                var sel = me.selection.getNative(),
                    range = sel.getRangeAt(0).cloneRange(),
                    offset,
                    charCode;

                var start = range.startContainer;
                while (start.nodeType == 1 && range.startOffset > 0) {
                    start = range.startContainer.childNodes[range.startOffset - 1];
                    if (!start){
                        break;
                    }
                    range.setStart(start, start.nodeType == 1 ? start.childNodes.length : start.nodeValue.length);
                    range.collapse(true);
                    start = range.startContainer;
                }

                do{
                    if (range.startOffset == 0) {
                        start = range.startContainer.previousSibling;

                        while (start && start.nodeType == 1) {
                            start = start.lastChild;
                        }
                        if (!start || domUtils.isFillChar(start)){
                            break;
                        }
                        offset = start.nodeValue.length;
                    } else {
                        start = range.startContainer;
                        offset = range.startOffset;
                    }
                    range.setStart(start, offset - 1);
                    charCode = range.toString().charCodeAt(0);
                } while (charCode != 160 && charCode != 32);

                if (range.toString().replace(new RegExp(domUtils.fillChar, 'g'), '').match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                    while(range.toString().length){
                        if(/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(range.toString())){
                            break;
                        }
                        try{
                            range.setStart(range.startContainer,range.startOffset+1);
                        }catch(e){
                            //trace:2121
                            var start = range.startContainer;
                            while(!(next = start.nextSibling)){
                                if(domUtils.isBody(start)){
                                    return;
                                }
                                start = start.parentNode;

                            }
                            range.setStart(next,0);

                        }

                    }
                    //rangeçš„å¼€å§‹è¾¹ç•Œå·²ç»�åœ¨aæ ‡ç­¾é‡Œçš„ä¸�å†�å¤„ç�†
                    if(domUtils.findParentByTagName(range.startContainer,'a',true)){
                        return;
                    }
                    var a = me.document.createElement('a'),text = me.document.createTextNode(' '),href;

                    me.undoManger && me.undoManger.save();
                    a.appendChild(range.extractContents());
                    a.href = a.innerHTML = a.innerHTML.replace(/<[^>]+>/g,'');
                    href = a.getAttribute("href").replace(new RegExp(domUtils.fillChar,'g'),'');
                    href = /^(?:https?:\/\/)/ig.test(href) ? href : "http://"+ href;
                    a.setAttribute('data_ue_src',href);
                    a.href = href;

                    range.insertNode(a);
                    a.parentNode.insertBefore(text, a.nextSibling);
                    range.setStart(text, 0);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    me.undoManger && me.undoManger.save();
                }
            }
        });
    };

///import core
///commands å½“è¾“å…¥å†…å®¹è¶…è¿‡ç¼–è¾‘å™¨é«˜åº¦æ—¶ï¼Œç¼–è¾‘å™¨è‡ªåŠ¨å¢žé«˜
///commandsName  AutoHeight,autoHeightEnabled
///commandsTitle  è‡ªåŠ¨å¢žé«˜
/**
 * @description è‡ªåŠ¨ä¼¸å±•
 * @author zhanyi
 */
UE.plugins['autoheight'] = function () {
    var me = this;
    //æ��ä¾›å¼€å…³ï¼Œå°±ç®—åŠ è½½ä¹Ÿå�¯ä»¥å…³é—­
    me.autoHeightEnabled = me.options.autoHeightEnabled !== false;
    if (!me.autoHeightEnabled) {
        return;
    }

    var bakOverflow,
        span, tmpNode,
        lastHeight = 0,
        options = me.options,
        currentHeight,
        timer;

    function adjustHeight() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (me.queryCommandState('source') != 1) {
                if (!span) {
                    span = me.document.createElement('span');
                    //trace:1764
                    span.style.cssText = 'display:block;width:0;margin:0;padding:0;border:0;clear:both;';
                    span.innerHTML = '.';
                }
                tmpNode = span.cloneNode(true);
                me.body.appendChild(tmpNode);

                currentHeight = Math.max(domUtils.getXY(tmpNode).y + tmpNode.offsetHeight,Math.max(options.minFrameHeight, options.initialFrameHeight));

                if (currentHeight != lastHeight) {

                    me.setHeight(currentHeight);

                    lastHeight = currentHeight;
                }

                domUtils.remove(tmpNode);

            }
        }, 50);
    }

    me.addListener('destroy', function () {
        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
    });
    me.enableAutoHeight = function () {
        if (!me.autoHeightEnabled) {
            return;
        }
        var doc = me.document;
        me.autoHeightEnabled = true;
        bakOverflow = doc.body.style.overflowY;
        doc.body.style.overflowY = 'hidden';
        me.addListener('contentchange', adjustHeight);
        me.addListener('keyup', adjustHeight);
        me.addListener('mouseup', adjustHeight);
        //ffä¸�ç»™äº‹ä»¶ç®—å¾—ä¸�å¯¹
        setTimeout(function () {
            adjustHeight();
        }, browser.gecko ? 100 : 0);
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.disableAutoHeight = function () {

        me.body.style.overflowY = bakOverflow || '';

        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
        me.autoHeightEnabled = false;
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.addListener('ready', function () {
        me.enableAutoHeight();
        //trace:1764
        var timer;
        domUtils.on(browser.ie ? me.body : me.document, browser.webkit ? 'dragover' : 'drop', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                adjustHeight();
            }, 100);

        });
    });


};


///import core
///commands æ‚¬æµ®å·¥å…·æ �
///commandsName  AutoFloat,autoFloatEnabled
///commandsTitle  æ‚¬æµ®å·¥å…·æ �
/*
 *  modified by chengchao01
 *
 *  æ³¨æ„�ï¼š å¼•å…¥æ­¤åŠŸèƒ½å�Žï¼Œåœ¨IE6ä¸‹ä¼šå°†bodyçš„èƒŒæ™¯å›¾ç‰‡è¦†ç›–æŽ‰ï¼�
 */
    UE.plugins['autofloat'] = function() {
        var me = this,
                lang = me.getLang();
        me.setOpt({
            topOffset:0
        });
        var optsAutoFloatEnabled = me.options.autoFloatEnabled !== false,
        topOffset = me.options.topOffset;


        //å¦‚æžœä¸�å›ºå®štoolbarçš„ä½�ç½®ï¼Œåˆ™ç›´æŽ¥é€€å‡º
        if(!optsAutoFloatEnabled){
            return;
        }
        var uiUtils = UE.ui.uiUtils,
       		LteIE6 = browser.ie && browser.version <= 6,
            quirks = browser.quirks;

        function checkHasUI(editor){
           if(!editor.ui){
              alert(lang.autofloatMsg);
               return 0;
           }
           return 1;
       }
        function fixIE6FixedPos(){
            var docStyle = document.body.style;
           docStyle.backgroundImage = 'url("about:blank")';
           docStyle.backgroundAttachment = 'fixed';
        }
		var	bakCssText,
			placeHolder = document.createElement('div'),
            toolbarBox,orgTop,
            getPosition,
            flag =true;   //ie7æ¨¡å¼�ä¸‹éœ€è¦�å��ç§»
		function setFloating(){
			var toobarBoxPos = domUtils.getXY(toolbarBox),
				origalFloat = domUtils.getComputedStyle(toolbarBox,'position'),
                origalLeft = domUtils.getComputedStyle(toolbarBox,'left');
			toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
            toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
			toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
			if (LteIE6 || (quirks && browser.ie)) {
                if(toolbarBox.style.position != 'absolute'){
                    toolbarBox.style.position = 'absolute';
                }
                toolbarBox.style.top = (document.body.scrollTop||document.documentElement.scrollTop) - orgTop + topOffset  + 'px';
			} else {
                if (browser.ie7Compat && flag) {
                    flag = false;
                    toolbarBox.style.left =  domUtils.getXY(toolbarBox).x - document.documentElement.getBoundingClientRect().left+2  + 'px';
                }
                if(toolbarBox.style.position != 'fixed'){
                    toolbarBox.style.position = 'fixed';
                    toolbarBox.style.top = topOffset +"px";
                    ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
                }
			}
		}
		function unsetFloating(){
            flag = true;
            if(placeHolder.parentNode){
                placeHolder.parentNode.removeChild(placeHolder);
            }
			toolbarBox.style.cssText = bakCssText;
		}

        function updateFloating(){
            var rect3 = getPosition(me.container);
            if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > 0) {
                setFloating();
            }else{
                unsetFloating();
            }
        }
        var defer_updateFloating = utils.defer(function(){
            updateFloating();
        },browser.ie ? 200 : 100,true);

        me.addListener('destroy',function(){
            domUtils.un(window, ['scroll','resize'], updateFloating);
            me.removeListener('keydown', defer_updateFloating);
        });
        me.addListener('ready', function(){
            if(checkHasUI(me)){

                getPosition = uiUtils.getClientRect;
                toolbarBox = me.ui.getDom('toolbarbox');
                orgTop = getPosition(toolbarBox).top;
                bakCssText = toolbarBox.style.cssText;
                placeHolder.style.height = toolbarBox.offsetHeight + 'px';
                if(LteIE6){
                    fixIE6FixedPos();
                }
                me.addListener('autoheightchanged', function (t, enabled){
                    if (enabled) {
                        domUtils.on(window, ['scroll','resize'], updateFloating);
                        me.addListener('keydown', defer_updateFloating);
                    } else {
                        domUtils.un(window, ['scroll','resize'], updateFloating);
                        me.removeListener('keydown', defer_updateFloating);
                    }
                });

                me.addListener('beforefullscreenchange', function (t, enabled){
                    if (enabled) {
                        unsetFloating();
                    }
                });
                me.addListener('fullscreenchanged', function (t, enabled){
                    if (!enabled) {
                        updateFloating();
                    }
                });
                me.addListener('sourcemodechanged', function (t, enabled){
                    setTimeout(function (){
                        updateFloating();
                    },0);
                });
            }
        });
	};

///import core
///import plugins/inserthtml.js
///commands æ�’å…¥ä»£ç �
///commandsName  HighlightCode
///commandsTitle  æ�’å…¥ä»£ç �
///commandsDialog  dialogs\code\code.html
UE.plugins['highlightcode'] = function() {
    var me = this;
    if(!/highlightcode/i.test(me.options.toolbars.join(''))){
        return;
    }
    me.commands['highlightcode'] = {
        execCommand: function (cmdName, code, syntax) {
            if(code && syntax){
                var pre = document.createElement("pre");
                pre.className = "brush: "+syntax+";toolbar:false;";
                pre.style.display = "";
                pre.appendChild(document.createTextNode(code));
                document.body.appendChild(pre);
                if(me.queryCommandState("highlightcode")){
                    me.execCommand("highlightcode");
                }
                me.execCommand('inserthtml', SyntaxHighlighter.highlight(pre,null,true),true);
                var div = me.document.getElementById(SyntaxHighlighter.getHighlighterDivId());
                div.setAttribute('highlighter',pre.className);
                domUtils.remove(pre);
                adjustHeight();
            }else{
                var range = this.selection.getRange(),
                   start = domUtils.findParentByTagName(range.startContainer, 'table', true),
                   end = domUtils.findParentByTagName(range.endContainer, 'table', true),
                   codediv;
                if(start && end && start === end && start.parentNode.className.indexOf("syntaxhighlighter")>-1){
                    codediv = start.parentNode;
                    //éœ€è¦�åˆ¤æ–­ä¸€ä¸‹å�Žè¾¹æœ‰æ²¡æœ‰èŠ‚ç‚¹ï¼Œæ²¡æœ‰çš„åŒ–æ‰�æ·»åŠ æ–°çš„æ ‡ç­¾
                    if(domUtils.isBody(codediv.parentNode) && !codediv.nextSibling){
                        var p = me.document.createElement('p');
                        p.innerHTML = browser.ie ? '' : '<br/>';
                        me.body.insertBefore(p,codediv);
                        range.setStart(p,0);
                    }else{
                        range.setStartBefore(codediv)
                    }
                    range.setCursor();
                    domUtils.remove(codediv);
                }
            }
        },
        queryCommandState: function(){
            var range = this.selection.getRange(),start,end;
            range.adjustmentBoundary();
                start = domUtils.findParent(range.startContainer,function(node){
                    return node.nodeType == 1 && node.tagName == 'DIV' && domUtils.hasClass(node,'syntaxhighlighter');
                },true);
                end = domUtils.findParent(range.endContainer,function(node){
                    return node.nodeType == 1 && node.tagName == 'DIV' && domUtils.hasClass(node,'syntaxhighlighter');
                },true);
            return start && end && start == end  ? 1 : 0;
        }
    };

    me.addListener('beforeselectionchange afterselectionchange',function(type){
        me.highlight = /^b/.test(type) ? me.queryCommandState('highlightcode') : 0;
    });


    me.addListener("ready",function(){
        //é�¿å…�é‡�å¤�åŠ è½½é«˜äº®æ–‡ä»¶
        if(typeof XRegExp == "undefined"){
            utils.loadFile(document,{
                id : "syntaxhighlighter_js",
                src : me.options.highlightJsUrl || me.options.UEDITOR_HOME_URL + "third-party/SyntaxHighlighter/shCore.js",
                tag : "script",
                type : "text/javascript",
                defer : "defer"
            },function(){
                changePre();
            });
        }
        if(!me.document.getElementById("syntaxhighlighter_css")){
            utils.loadFile(me.document,{
                id : "syntaxhighlighter_css",
                tag : "link",
                rel : "stylesheet",
                type : "text/css",
                href : me.options.highlightCssUrl ||me.options.UEDITOR_HOME_URL + "third-party/SyntaxHighlighter/shCoreDefault.css"
            });
        }

    });
    me.addListener("beforegetcontent",function(){
        for(var i=0,di,divs=domUtils.getElementsByTagName(me.body,'div');di=divs[i++];){
            if(di.className == 'container'){
                var pN = di.parentNode;
                while(pN){
                    if(pN.tagName == 'DIV' && /highlighter/.test(pN.id)){
                        break;
                    }
                    pN = pN.parentNode;
                }
                if(!pN){
                    return;
                }
                var pre = me.document.createElement('pre');
                for(var str=[],c=0,ci;ci=di.childNodes[c++];){
                    str.push(ci[browser.ie?'innerText':'textContent']);
                }
                pre.appendChild(me.document.createTextNode(str.join('\n')));
                pre.className = pN.getAttribute('highlighter');
                pN.parentNode.insertBefore(pre,pN);
                domUtils.remove(pN);
            }
        }
    });
    me.addListener("aftergetcontent aftersetcontent",changePre);

    function adjustHeight(){
        setTimeout(function(){
            var div = me.document.getElementById(SyntaxHighlighter.getHighlighterDivId());

            if(div){
                var tds = div.getElementsByTagName('td');
                for(var i=0,li,ri;li=tds[0].childNodes[i];i++){
                    ri = tds[1].firstChild.childNodes[i];
                    //trace:1949
                    if(ri){
                        ri.style.height = li.style.height = ri.offsetHeight + 'px';
                    }
                }

            }
        });

    }
    function changePre(){
        for(var i=0,pr,pres = domUtils.getElementsByTagName(me.document,"pre");pr=pres[i++];){
            if(pr.className.indexOf("brush")>-1){
                
                var pre = document.createElement("pre"),txt,div;
                pre.className = pr.className;
                pre.style.display = "none";
                pre.appendChild(document.createTextNode(pr[browser.ie?'innerText':'textContent']));
                document.body.appendChild(pre);
                try{
                    txt = SyntaxHighlighter.highlight(pre,null,true);
                }catch(e){
                    domUtils.remove(pre);
                    return ;
                }

                div = me.document.createElement("div");
                div.innerHTML = txt;

                div.firstChild.setAttribute('highlighter',pre.className);
                pr.parentNode.insertBefore(div.firstChild,pr);

                domUtils.remove(pre);
                domUtils.remove(pr);
                
                adjustHeight();
            }
        }
    }

    me.addListener('getAllHtml',function(type,html){
        var coreHtml = '';

        for(var i= 0,ci,divs=domUtils.getElementsByTagName(me.document,'div');ci=divs[i++];){
            if(domUtils.hasClass(ci,'syntaxhighlighter')){
                if(!me.document.getElementById('syntaxhighlighter_css')){
                    coreHtml = '<link id="syntaxhighlighter_css" rel="stylesheet" type="text/css" href="' +
                        (me.options.highlightCssUrl ||me.options.UEDITOR_HOME_URL + 'third-party/SyntaxHighlighter/shCoreDefault.css"') + ' ></link>'
                }
                if(!me.window.XRegExp){
                    coreHtml += '<script id="syntaxhighlighter_js"  type="text/javascript" src="' +
                        (me.options.highlightJsUrl || me.options.UEDITOR_HOME_URL + 'third-party/SyntaxHighlighter/shCore.js"') + ' ></script>'+
                        '<script type="text/javascript">window.onload = function(){SyntaxHighlighter.highlight();' +

                        'setTimeout(function(){' +
                            'for(var i=0,di;di=SyntaxHighlighter.highlightContainers[i++];){' +
                            'var tds = di.getElementsByTagName("td");' +
                            'for(var j=0,li,ri;li=tds[0].childNodes[j];j++){' +
                            'ri = tds[1].firstChild.childNodes[j];' +
                            'ri.style.height = li.style.height = ri.offsetHeight + "px";' +
                            '}' +
                        '}},100)}</script>'
                }
                break;
            }
        }
        if(!coreHtml){
            var tmpNode;
            if(tmpNode = me.document.getElementById('syntaxhighlighter_css')){
                domUtils.remove(tmpNode)
            }
            if(tmpNode = me.document.getElementById('syntaxhighlighter_js')){
                domUtils.remove(tmpNode)

            }
        }
        html.html += coreHtml;
    });
    //å…¨å±�æ—¶ï¼Œé‡�æ–°ç®—ä¸€ä¸‹å®½åº¦
    me.addListener('fullscreenchanged',function(){
        var div = domUtils.getElementsByTagName(me.document,'div');
        for(var j=0,di;di=div[j++];){
            if(/^highlighter/.test(di.id)){
                var tds = di.getElementsByTagName('td');
                for(var i=0,li,ri;li=tds[0].childNodes[i];i++){
                    ri = tds[1].firstChild.childNodes[i];

                    ri.style.height = li.style.height = ri.offsetHeight + 'px';
                }
            }
        }
    });
};

///import core
///commands å®šåˆ¶è¿‡æ»¤è§„åˆ™
///commandsName  Serialize
///commandsTitle  å®šåˆ¶è¿‡æ»¤è§„åˆ™
UE.plugins['serialize'] = function () {
    var ie = browser.ie,
        version = browser.version;

    function ptToPx(value){
        return /pt/.test(value) ? value.replace( /([\d.]+)pt/g, function( str ) {
            return  Math.round(parseFloat(str) * 96 / 72) + "px";
        } ) : value;
    }
    var me = this, autoClearEmptyNode = me.options.autoClearEmptyNode,
            EMPTY_TAG = dtd.$empty,
            parseHTML = function () {
                 //å¹²æŽ‰<a> å�Žä¾¿å�˜å¾—ç©ºæ ¼ï¼Œä¿�ç•™</a>  è¿™æ ·çš„ç©ºæ ¼
                var RE_PART = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
                        RE_ATTR = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
                                        EMPTY_ATTR = {checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1},
                                        CDATA_TAG = {script:1,style: 1},
                                        NEED_PARENT_TAG = {
                                            "li": { "$": 'ul', "ul": 1, "ol": 1 },
                                            "dd": { "$": "dl", "dl": 1 },
                                            "dt": { "$": "dl", "dl": 1 },
                                            "option": { "$": "select", "select": 1 },
                                            "td": { "$": "tr", "tr": 1 },
                                            "th": { "$": "tr", "tr": 1 },
                                            "tr": { "$": "tbody", "tbody": 1, "thead": 1, "tfoot": 1, "table": 1 },
                                            "tbody": { "$": "table", 'table':1,"colgroup": 1 },
                                            "thead": { "$": "table", "table": 1 },
                                            "tfoot": { "$": "table", "table": 1 },
                                            "col": { "$": "colgroup","colgroup":1 }
                                        };
                                var NEED_CHILD_TAG = {
                    "table": "td", "tbody": "td", "thead": "td", "tfoot": "td", "tr": "td",
                    "colgroup": "col",
                    "ul": "li", "ol": "li",
                    "dl": "dd",
                    "select": "option"
                };

                function parse( html, callbacks ) {

                    var match,
                            nextIndex = 0,
                            tagName,
                            cdata;
                    RE_PART.exec( "" );
                    while ( (match = RE_PART.exec( html )) ) {

                        var tagIndex = match.index;
                        if ( tagIndex > nextIndex ) {
                            var text = html.slice( nextIndex, tagIndex );
                            if ( cdata ) {
                                cdata.push( text );
                            } else {
                                callbacks.onText( text );
                            }
                        }
                        nextIndex = RE_PART.lastIndex;
                        if ( (tagName = match[1]) ) {
                            tagName = tagName.toLowerCase();
                            if ( cdata && tagName == cdata._tag_name ) {
                                callbacks.onCDATA( cdata.join( '' ) );
                                cdata = null;
                            }
                            if ( !cdata ) {
                                callbacks.onTagClose( tagName );
                                continue;
                            }
                        }
                        if ( cdata ) {
                            cdata.push( match[0] );
                            continue;
                        }
                        if ( (tagName = match[3]) ) {
                            if ( /="/.test( tagName ) ) {
                                continue;
                            }
                            tagName = tagName.toLowerCase();
                            var attrPart = match[4],
                                    attrMatch,
                                    attrMap = {},
                                    selfClosing = attrPart && attrPart.slice( -1 ) == '/';
                            if ( attrPart ) {
                                RE_ATTR.exec( "" );
                                while ( (attrMatch = RE_ATTR.exec( attrPart )) ) {
                                    var attrName = attrMatch[1].toLowerCase(),
                                            attrValue = attrMatch[2] || attrMatch[3] || attrMatch[4] || '';
                                    if ( !attrValue && EMPTY_ATTR[attrName] ) {
                                        attrValue = attrName;
                                    }
                                    if ( attrName == 'style' ) {
                                        if ( ie && version <= 6 ) {
                                            attrValue = attrValue.replace( /(?!;)\s*([\w-]+):/g, function ( m, p1 ) {
                                                return p1.toLowerCase() + ':';
                                            } );
                                        }
                                    }
                                    //æ²¡æœ‰å€¼çš„å±žæ€§ä¸�æ·»åŠ 
                                    if ( attrValue ) {
                                        attrMap[attrName] = attrValue.replace( /:\s*/g, ':' )
                                    }

                                }
                            }
                            callbacks.onTagOpen( tagName, attrMap, selfClosing );
                            if ( !cdata && CDATA_TAG[tagName] ) {
                                cdata = [];
                                cdata._tag_name = tagName;
                            }
                            continue;
                        }
                        if ( (tagName = match[2]) ) {
                            callbacks.onComment( tagName );
                        }
                    }
                    if ( html.length > nextIndex ) {
                        callbacks.onText( html.slice( nextIndex, html.length ) );
                    }
                }

                return function ( html, forceDtd ) {

                    var fragment = {
                        type: 'fragment',
                        parent: null,
                        children: []
                    };
                    var currentNode = fragment;

                    function addChild( node ) {
                        node.parent = currentNode;
                        currentNode.children.push( node );
                    }

                    function addElement( element, open ) {
                        var node = element;
                        // é�‡åˆ°ç»“æž„åŒ–æ ‡ç­¾çš„æ—¶å€™
                        if ( NEED_PARENT_TAG[node.tag] ) {
                            // è€ƒè™‘è¿™ç§�æƒ…å†µçš„æ—¶å€™, ç»“æ�Ÿä¹‹å‰�çš„æ ‡ç­¾
                            // e.g. <table><tr><td>12312`<tr>`4566
                            while ( NEED_PARENT_TAG[currentNode.tag] && NEED_PARENT_TAG[currentNode.tag][node.tag] ) {
                                currentNode = currentNode.parent;
                            }
                            // å¦‚æžœå‰�ä¸€ä¸ªæ ‡ç­¾å’Œè¿™ä¸ªæ ‡ç­¾æ˜¯å�Œä¸€çº§, ç»“æ�Ÿä¹‹å‰�çš„æ ‡ç­¾
                            // e.g. <ul><li>123<li>
                            if ( currentNode.tag == node.tag ) {
                                currentNode = currentNode.parent;
                            }
                            // å�‘ä¸Šè¡¥é½�çˆ¶æ ‡ç­¾
                            while ( NEED_PARENT_TAG[node.tag] ) {
                                if ( NEED_PARENT_TAG[node.tag][currentNode.tag] ) break;
                                node = node.parent = {
                                    type: 'element',
                                    tag: NEED_PARENT_TAG[node.tag]['$'],
                                    attributes: {},
                                    children: [node]
                                };
                            }
                        }
                        if ( forceDtd ) {
                            // å¦‚æžœé�‡åˆ°è¿™ä¸ªæ ‡ç­¾ä¸�èƒ½æ”¾åœ¨å‰�ä¸€ä¸ªæ ‡ç­¾å†…éƒ¨ï¼Œåˆ™ç»“æ�Ÿå‰�ä¸€ä¸ªæ ‡ç­¾,spanå�•ç‹¬å¤„ç�†
                            while ( dtd[node.tag] && !(currentNode.tag == 'span' ? utils.extend( dtd['strong'], {'a':1,'A':1} ) : (dtd[currentNode.tag] || dtd['div']))[node.tag] ) {
                                if ( tagEnd( currentNode ) ) continue;
                                if ( !currentNode.parent ) break;
                                currentNode = currentNode.parent;
                            }
                        }
                        node.parent = currentNode;
                        currentNode.children.push( node );
                        if ( open ) {
                            currentNode = element;
                        }
                        if ( element.attributes.style ) {
                            element.attributes.style = element.attributes.style.toLowerCase();
                        }
                        return element;
                    }

                    // ç»“æ�Ÿä¸€ä¸ªæ ‡ç­¾çš„æ—¶å€™ï¼Œéœ€è¦�åˆ¤æ–­ä¸€ä¸‹å®ƒæ˜¯å�¦ç¼ºå°‘å­�æ ‡ç­¾
                    // e.g. <table></table>
                    function tagEnd( node ) {
                        var needTag;
                        if ( !node.children.length && (needTag = NEED_CHILD_TAG[node.tag]) ) {
                            addElement( {
                                type: 'element',
                                tag: needTag,
                                attributes: {},
                                children: []
                            }, true );
                            return true;
                        }
                        return false;
                    }

                    parse( html, {
                        onText: function ( text ) {

                            while ( !(dtd[currentNode.tag] || dtd['div'])['#'] ) {
                                //èŠ‚ç‚¹ä¹‹é—´çš„ç©ºç™½ä¸�èƒ½å½“ä½œèŠ‚ç‚¹å¤„ç�†
//                                if(/^[ \t\r\n]+$/.test( text )){
//                                    return;
//                                }
                                if ( tagEnd( currentNode ) ) continue;
                                currentNode = currentNode.parent;
                            }
                            //if(/^[ \t\n\r]*/.test(text))
                                addChild( {
                                    type: 'text',
                                    data: text
                                } );

                        },
                        onComment: function ( text ) {
                            addChild( {
                                type: 'comment',
                                data: text
                            } );
                        },
                        onCDATA: function ( text ) {
                            while ( !(dtd[currentNode.tag] || dtd['div'])['#'] ) {
                                if ( tagEnd( currentNode ) ) continue;
                                currentNode = currentNode.parent;
                            }
                            addChild( {
                                type: 'cdata',
                                data: text
                            } );
                        },
                        onTagOpen: function ( tag, attrs, closed ) {
                            closed = closed || EMPTY_TAG[tag] ;
                            addElement( {
                                type: 'element',
                                tag: tag,
                                attributes: attrs,
                                closed: closed,
                                children: []
                            }, !closed );
                        },
                        onTagClose: function ( tag ) {
                            var node = currentNode;
                            // å�‘ä¸Šæ‰¾åŒ¹é…�çš„æ ‡ç­¾, è¿™é‡Œä¸�è€ƒè™‘dtdçš„æƒ…å†µæ˜¯å› ä¸ºtagOpençš„æ—¶å€™å·²ç»�å¤„ç�†è¿‡äº†, è¿™é‡Œä¸�ä¼šé�‡åˆ°
                            while ( node && tag != node.tag ) {
                                node = node.parent;
                            }
                            if ( node ) {
                                // å…³é—­ä¸­é—´çš„æ ‡ç­¾
                                for ( var tnode = currentNode; tnode !== node.parent; tnode = tnode.parent ) {
                                    tagEnd( tnode );
                                }
                                //åŽ»æŽ‰ç©ºç™½çš„inlineèŠ‚ç‚¹
                                //åˆ†é¡µï¼Œé”šç‚¹ä¿�ç•™
                                //|| dtd.$removeEmptyBlock[node.tag])
//                                if ( !node.children.length && dtd.$removeEmpty[node.tag] && !node.attributes.anchorname && node.attributes['class'] != 'pagebreak' && node.tag != 'a') {
//
//                                    node.parent.children.pop();
//                                }
                                currentNode = node.parent;
                            } else {
                                // å¦‚æžœæ²¡æœ‰æ‰¾åˆ°å¼€å§‹æ ‡ç­¾, åˆ™åˆ›å»ºæ–°æ ‡ç­¾
                                // eg. </div> => <div></div>
                                //é’ˆå¯¹è§†å±�ç½‘ç«™embedä¼šç»™ç»“æ�Ÿç¬¦ï¼Œè¿™é‡Œç‰¹æ®Šå¤„ç�†ä¸€ä¸‹
                                if ( !(dtd.$removeEmpty[tag] || dtd.$removeEmptyBlock[tag] || tag == 'embed') ) {
                                    node = {
                                        type: 'element',
                                        tag: tag,
                                        attributes: {},
                                        children: []
                                    };
                                    addElement( node, true );
                                    tagEnd( node );
                                    currentNode = node.parent;
                                }


                            }
                        }
                    } );
                    // å¤„ç�†è¿™ç§�æƒ…å†µ, å�ªæœ‰å¼€å§‹æ ‡ç­¾æ²¡æœ‰ç»“æ�Ÿæ ‡ç­¾çš„æƒ…å†µ, éœ€è¦�å…³é—­å¼€å§‹æ ‡ç­¾
                    // eg. <table>
                    while ( currentNode !== fragment ) {
                        tagEnd( currentNode );
                        currentNode = currentNode.parent;
                    }
                    return fragment;
                };
            }();
    var unhtml1 = function () {
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

        function rep( m ) {
            return map[m];
        }

        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    var toHTML = function () {
        function printChildren( node, pasteplain ) {
            var children = node.children;

            var buff = [];
            for ( var i = 0,ci; ci = children[i]; i++ ) {

                buff.push( toHTML( ci, pasteplain ) );
            }
            return buff.join( '' );
        }

        function printAttrs( attrs ) {
            var buff = [];
            for ( var k in attrs ) {
                var value = attrs[k];
                
                if(k == 'style'){

                    //pt==>px
                    value = ptToPx(value);
                    //color rgb ==> hex
                    if(/rgba?\s*\([^)]*\)/.test(value)){
                        value = value.replace( /rgba?\s*\(([^)]*)\)/g, function( str ) {
                            return utils.fixColor('color',str);
                        } )
                    }
                    //è¿‡æ»¤æŽ‰æ‰€æœ‰çš„white-space,åœ¨çº¯æ–‡æœ¬ç¼–è¾‘å™¨é‡Œç²˜è´´è¿‡æ�¥çš„å†…å®¹ï¼Œåˆ°chromeä¸­ä¼šå¸¦æœ‰spanå’Œwhite-spaceå±žæ€§ï¼Œå¯¼è‡´å‡ºçŽ°ä¸�èƒ½æŠ˜è¡Œçš„æƒ…å†µ
                    //æ‰€ä»¥åœ¨è¿™é‡ŒåŽ»æŽ‰è¿™ä¸ªå±žæ€§
                    attrs[k] = utils.optCss(value.replace(/windowtext/g,'#000'))
                                .replace(/white-space[^;]+;/g,'');

                }

                buff.push( k + '="' + unhtml1( attrs[k] ) + '"' );
            }
            return buff.join( ' ' )
        }

        function printData( node, notTrans ) {
            //trace:1399 è¾“å…¥htmlä»£ç �æ—¶ç©ºæ ¼è½¬æ�¢æˆ�ä¸º&nbsp;
            //node.data.replace(/&nbsp;/g,' ') é’ˆå¯¹preä¸­çš„ç©ºæ ¼å’Œå‡ºçŽ°çš„&nbsp;æŠŠä»–ä»¬åœ¨å¾—åˆ°çš„htmlä»£ç �ä¸­éƒ½è½¬æ�¢æˆ�ä¸ºç©ºæ ¼ï¼Œä¸ºäº†åœ¨æº�ç �æ¨¡å¼�ä¸‹æ˜¾ç¤ºä¸ºç©ºæ ¼è€Œä¸�æ˜¯&nbsp;
            return notTrans ? node.data.replace(/&nbsp;/g,' ') : unhtml1( node.data ).replace(/ /g,'&nbsp;');
        }

        //çº¯æ–‡æœ¬æ¨¡å¼�ä¸‹æ ‡ç­¾è½¬æ�¢
        var transHtml = {
            'div':'p',
            'li':'p',
            'tr':'p',
            'br':'br',
            'p':'p'//trace:1398 ç¢°åˆ°pæ ‡ç­¾è‡ªå·±è¦�åŠ ä¸Šp,å�¦åˆ™transHtml[tag]æ˜¯undefined

        };

        function printElement( node, pasteplain ) {
            if ( node.type == 'element' && !node.children.length && (dtd.$removeEmpty[node.tag]) && node.tag != 'a' && utils.isEmptyObject(node.attributes) && autoClearEmptyNode) {// é”šç‚¹ä¿�ç•™
                return html;
            }
            var tag = node.tag;
            if ( pasteplain && tag == 'td' ) {
                if ( !html ) html = '';
                html += printChildren( node, pasteplain ) + '&nbsp;&nbsp;&nbsp;';
            } else {
                var attrs = printAttrs( node.attributes );
                var html = '<' + (pasteplain && transHtml[tag] ? transHtml[tag] : tag) + (attrs ? ' ' + attrs : '') + (EMPTY_TAG[tag] ? ' />' : '>');
                if ( !EMPTY_TAG[tag] ) {
                    //trace:1627 ,2070
                    //pæ ‡ç­¾ä¸ºç©ºï¼Œå°†ä¸�å� ä½�è¿™é‡Œå� ä½�ç¬¦ä¸�èµ·ä½œç”¨ï¼Œç”¨&nbsp;æˆ–è€…br
                    if( tag == 'p' && !node.children.length){
                        html += browser.ie ? '&nbsp;' : '<br/>';
                    }
                    html += printChildren( node, pasteplain );
                    html += '</' + (pasteplain && transHtml[tag] ? transHtml[tag] : tag) + '>';
                }
            }

            return html;
        }

        return function ( node, pasteplain ) {
            if ( node.type == 'fragment' ) {
                return printChildren( node, pasteplain );
            } else if ( node.type == 'element' ) {
                return printElement( node, pasteplain );
            } else if ( node.type == 'text' || node.type == 'cdata' ) {
                return printData( node, dtd.$notTransContent[node.parent.tag] );
            } else if ( node.type == 'comment' ) {
                return '<!--' + node.data + '-->';
            }
            return '';
        };
    }();

    var NODE_NAME_MAP = {
        'text': '#text',
        'comment': '#comment',
        'cdata': '#cdata-section',
        'fragment': '#document-fragment'
    };


    //å†™å…¥ç¼–è¾‘å™¨æ—¶ï¼Œè°ƒç”¨ï¼Œè¿›è¡Œè½¬æ�¢æ“�ä½œ
    function transNode( node, word_img_flag ) {

        var sizeMap = [0, 10, 12, 16, 18, 24, 32, 48],
                attr,
                indexOf = utils.indexOf;
        switch ( node.tag ) {
            case 'script':
                node.tag = 'div';
                node.attributes._ue_org_tagName = 'script';
                node.attributes._ue_div_script = 1;
                node.attributes._ue_script_data = node.children[0] ? encodeURIComponent(node.children[0].data)  : '';
                node.attributes._ue_custom_node_ = 1;
                node.children = [];
                break;
            case 'style':
                node.tag = 'div';
                node.attributes._ue_div_style = 1;
                node.attributes._ue_org_tagName = 'style';
                node.attributes._ue_style_data = node.children[0] ? encodeURIComponent(node.children[0].data)  : '';
                node.attributes._ue_custom_node_ = 1;
                node.children = [];
                break;
            case 'img':
                //todo base64æš‚æ—¶åŽ»æŽ‰ï¼Œå�Žè¾¹å�šè¿œç¨‹å›¾ç‰‡ä¸Šä¼ å�Žï¼Œå¹²æŽ‰è¿™ä¸ª
                if(node.attributes.src && /^data:/.test(node.attributes.src)){
                    return {
                        type : 'fragment',
                        children:[]
                    }
                }
                if ( node.attributes.src && /^(?:file)/.test( node.attributes.src ) ) {
                    if ( !/(gif|bmp|png|jpg|jpeg)$/.test( node.attributes.src ) ) {
                        return {
                            type : 'fragment',
                            children:[]
                        }
                    }
                    node.attributes.word_img = node.attributes.src;
                    node.attributes.src = me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif';
                    var flag = parseInt(node.attributes.width)<128||parseInt(node.attributes.height)<43;
                    node.attributes.style="background:url(" + (flag? me.options.themePath+me.options.theme +"/images/word.gif":me.options.langPath+me.options.lang + "/images/localimage.png")+") no-repeat center center;border:1px solid #ddd";
                    //node.attributes.style = 'width:395px;height:173px;';
                    word_img_flag && (word_img_flag.flag = 1);
                }
                if(browser.ie && browser.version < 7 )
                    node.attributes.orgSrc = node.attributes.src;
                node.attributes.data_ue_src = node.attributes.data_ue_src || node.attributes.src;
                break;
            case 'li':
                var child = node.children[0];

                if ( !child || child.type != 'element' || child.tag != 'p' && dtd.p[child.tag] ) {
                    var tmpPNode = {
                        type: 'element',
                        tag: 'p',
                        attributes: {},

                        parent : node
                    };
                    tmpPNode.children = child ? node.children :[
                            browser.ie ? {
                                type:'text',
                                data:domUtils.fillChar,
                                parent : tmpPNode

                            }:
                            {
                                type : 'element',
                                tag : 'br',
                                attributes:{},
                                closed: true,
                                children: [],
                                parent : tmpPNode
                            }
                    ];
                    node.children =   [tmpPNode];
                }
                break;
            case 'table':
            case 'td':
                optStyle( node );
                break;
            case 'a'://é”šç‚¹ï¼Œa==>img
                if ( node.attributes['anchorname'] ) {
                    node.tag = 'img';
                    node.attributes = {
                        'class' : 'anchorclass',
                        'anchorname':node.attributes['name']
                    };
                    node.closed = 1;
                }
                node.attributes.href && (node.attributes.data_ue_src = node.attributes.href);
                break;
            case 'b':
                node.tag = node.name = 'strong';
                break;
            case 'i':
                node.tag = node.name = 'em';
                break;
            case 'u':
                node.tag = node.name = 'span';
                node.attributes.style = (node.attributes.style || '') + ';text-decoration:underline;';
                break;
            case 's':
            case 'del':
                node.tag = node.name = 'span';
                node.attributes.style = (node.attributes.style || '') + ';text-decoration:line-through;';
                if ( node.children.length == 1 ) {
                    child = node.children[0];
                    if ( child.tag == node.tag ) {
                        node.attributes.style += ";" + child.attributes.style;
                        node.children = child.children;

                    }
                }
                break;
            case 'span':

                var style = node.attributes.style;
                if ( style ) {
                    if ( !node.attributes.style  || browser.webkit && style == "white-space:nowrap;") {
                        delete node.attributes.style;
                    }
                }

                //é’ˆå¯¹ff3.6spançš„æ ·å¼�ä¸�èƒ½æ­£ç¡®ç»§æ‰¿çš„ä¿®å¤�
                
                if(browser.gecko && browser.version <= 10902 && node.parent){
                    var parent = node.parent;
                    if(parent.tag == 'span' && parent.attributes && parent.attributes.style){
                        node.attributes.style = parent.attributes.style + ';' + node.attributes.style;
                    }
                }
                if ( utils.isEmptyObject( node.attributes ) && autoClearEmptyNode) {
                    node.type = 'fragment'
                }
                break;
            case 'font':
                node.tag = node.name = 'span';
                attr = node.attributes;
                node.attributes = {
                    'style': (attr.size ? 'font-size:' + (sizeMap[attr.size] || 12) + 'px' : '')
                    + ';' + (attr.color ? 'color:'+ attr.color : '')
                    + ';' + (attr.face ? 'font-family:'+ attr.face : '')
                    + ';' + (attr.style||'')
                };

                while(node.parent.tag == node.tag && node.parent.children.length == 1){
                    node.attributes.style && (node.parent.attributes.style ? (node.parent.attributes.style += ";" + node.attributes.style) : (node.parent.attributes.style = node.attributes.style));
                    node.parent.children = node.children;
                    node = node.parent;

                }
                break;
            case 'p':
                if ( node.attributes.align ) {
                    node.attributes.style = (node.attributes.style || '') + ';text-align:' +
                            node.attributes.align + ';';
                    delete node.attributes.align;
                }

        }
        return node;
    }

    function optStyle( node ) {
        if ( ie && node.attributes.style ) {
            var style = node.attributes.style;
            node.attributes.style = style.replace(/;\s*/g,';');
            node.attributes.style = node.attributes.style.replace( /^\s*|\s*$/, '' )
        }
    }
    //getContentè°ƒç”¨è½¬æ�¢
    function transOutNode( node ) {

        switch ( node.tag ) {
            case 'div' :
                if(node.attributes._ue_div_script){
                    node.tag = 'script';
                    node.children = [{type:'cdata',data:node.attributes._ue_script_data?decodeURIComponent(node.attributes._ue_script_data):'',parent:node}];
                    delete node.attributes._ue_div_script;
                    delete node.attributes._ue_script_data;
                    delete node.attributes._ue_custom_node_;
                    delete node.attributes._ue_org_tagName;

                }
                if(node.attributes._ue_div_style){
                    node.tag = 'style';
                    node.children = [{type:'cdata',data:node.attributes._ue_style_data?decodeURIComponent(node.attributes._ue_style_data):'',parent:node}];
                    delete node.attributes._ue_div_style;
                    delete node.attributes._ue_style_data;
                    delete node.attributes._ue_custom_node_;
                    delete node.attributes._ue_org_tagName;

                }
                break;
            case 'table':
                !node.attributes.style && delete node.attributes.style;
                if ( ie && node.attributes.style ) {

                    optStyle( node );
                }
                if(node.attributes['class'] == 'noBorderTable'){
                    delete node.attributes['class'];
                }
                break;
            case 'td':
            case 'th':
                if ( /display\s*:\s*none/i.test( node.attributes.style ) ) {
                    return {
                        type: 'fragment',
                        children: []
                    };
                }
                if ( ie && !node.children.length ) {
                    var txtNode = {
                        type: 'text',
                        data:domUtils.fillChar,
                        parent : node
                    };
                    node.children[0] = txtNode;
                }
                if ( ie && node.attributes.style ) {
                    optStyle( node );

                }
                if(node.attributes['class'] == 'selectTdClass'){
                    delete node.attributes['class']
                }
                break;
            case 'img'://é”šç‚¹ï¼Œimg==>a
                if ( node.attributes.anchorname ) {
                    node.tag = 'a';
                    node.attributes = {
                        name : node.attributes.anchorname,
                        anchorname : 1
                    };
                    node.closed = null;
                }else{
                    if(node.attributes.data_ue_src){
                        node.attributes.src = node.attributes.data_ue_src;
                        delete node.attributes.data_ue_src;
                    }
                }
                break;

            case 'a':
                if(node.attributes.data_ue_src){
                    node.attributes.href = node.attributes.data_ue_src;
                    delete node.attributes.data_ue_src;
                }
        }

        return node;
    }

    function childrenAccept( node, visit, ctx ) {

        if ( !node.children || !node.children.length ) {
            return node;
        }
        var children = node.children;
        for ( var i = 0; i < children.length; i++ ) {
            var newNode = visit( children[i], ctx );
            if ( newNode.type == 'fragment' ) {
                var args = [i, 1];
                args.push.apply( args, newNode.children );
                children.splice.apply( children, args );
                //èŠ‚ç‚¹ä¸ºç©ºçš„å°±å¹²æŽ‰ï¼Œä¸�ç„¶å�Žè¾¹çš„è¡¥å…¨æ“�ä½œä¼šæ·»åŠ å¤šä½™çš„èŠ‚ç‚¹
                if ( !children.length ) {
                    node = {
                        type: 'fragment',
                        children: []
                    }
                }
                i --;
            } else {
                children[i] = newNode;
            }
        }
        return node;
    }

    function Serialize( rules ) {
        this.rules = rules;
    }


    Serialize.prototype = {
        // NOTE: selectorç›®å‰�å�ªæ”¯æŒ�tagName
        rules: null,
        // NOTE: nodeå¿…é¡»æ˜¯fragment
        filter: function ( node, rules, modify ) {
            rules = rules || this.rules;
            var whiteList = rules && rules.whiteList;
            var blackList = rules && rules.blackList;

            function visitNode( node, parent ) {
                node.name = node.type == 'element' ?
                        node.tag : NODE_NAME_MAP[node.type];
                if ( parent == null ) {
                    return childrenAccept( node, visitNode, node );
                }

                if ( blackList && (blackList[node.name]|| (node.attributes && node.attributes._ue_org_tagName && blackList[node.attributes._ue_org_tagName]))) {
                    modify && (modify.flag = 1);
                    return {
                        type: 'fragment',
                        children: []
                    };
                }
                if ( whiteList ) {
                    if ( node.type == 'element' ) {
                        if ( parent.type == 'fragment' ? whiteList[node.name] : whiteList[node.name] && whiteList[parent.name][node.name] ) {

                            var props;
                            if ( (props = whiteList[node.name].$) ) {
                                var oldAttrs = node.attributes;
                                var newAttrs = {};
                                for ( var k in props ) {
                                    if ( oldAttrs[k] ) {
                                        newAttrs[k] = oldAttrs[k];
                                    }
                                }
                                node.attributes = newAttrs;
                            }


                        } else {
                            modify && (modify.flag = 1);
                            node.type = 'fragment';
                            // NOTE: è¿™é‡Œç®—æ˜¯ä¸€ä¸ªhack
                            node.name = parent.name;
                        }
                    } else {
                        // NOTE: æ–‡æœ¬é»˜è®¤å…�è®¸
                    }
                }
                if ( blackList || whiteList ) {
                    childrenAccept( node, visitNode, node );
                }
                return node;
            }

            return visitNode( node, null );
        },
        transformInput: function ( node, word_img_flag ) {

            function visitNode( node ) {
                node = transNode( node, word_img_flag );

                node = childrenAccept( node, visitNode, node );

                if ( me.options.pageBreakTag && node.type == 'text' && node.data.replace( /\s/g, '' ) == me.options.pageBreakTag ) {

                    node.type = 'element';
                    node.name = node.tag = 'hr';

                    delete node.data;
                    node.attributes = {
                        'class' : 'pagebreak',
                        noshade:"noshade",
                        size:"5",
                        'unselectable' : 'on',
                        'style' : 'moz-user-select:none;-khtml-user-select: none;'
                    };

                    node.children = [];

                }
                //åŽ»æŽ‰å¤šä½™çš„ç©ºæ ¼å’Œæ�¢è¡Œ
                if(node.type == 'text' && !dtd.$notTransContent[node.parent.tag]){
                    node.data = node.data.replace(/[\r\t\n]*/g,'')//.replace(/[ ]*$/g,'')
                }
                return node;
            }

            return visitNode( node );
        },
        transformOutput: function ( node ) {
            function visitNode( node ) {

                if ( node.tag == 'hr' && node.attributes['class'] == 'pagebreak' ) {
                    delete node.tag;
                    node.type = 'text';
                    node.data = me.options.pageBreakTag;
                    delete node.children;

                }
                node = transOutNode( node );
                node = childrenAccept( node, visitNode, node );
                return node;
            }

            return visitNode( node );
        },
        toHTML: toHTML,
        parseHTML: parseHTML,
        word: UE.filterWord
    };
    me.serialize = new Serialize( me.options.serialize || {});
    UE.serialize = new Serialize( {} );
};

///import core
///import plugins/inserthtml.js
///commands è§†é¢‘
///commandsName InsertVideo
///commandsTitle  æ�’å…¥è§†é¢‘
///commandsDialog  dialogs\video\video.html
UE.plugins['video'] = function (){
    var me =this,
        div;

    /**
     * åˆ›å»ºæ�’å…¥è§†é¢‘å­—ç¬¦çªœ
     * @param url è§†é¢‘åœ°å�€
     * @param width è§†é¢‘å®½åº¦
     * @param height è§†é¢‘é«˜åº¦
     * @param align è§†é¢‘å¯¹é½�
     * @param toEmbed æ˜¯å�¦ä»¥flashä»£æ›¿æ˜¾ç¤º
     * @param addParagraph  æ˜¯å�¦éœ€è¦�æ·»åŠ P æ ‡ç­¾
     */
    function creatInsertStr(url,width,height,align,toEmbed,addParagraph){
        return  !toEmbed ?
                (addParagraph? ('<p '+ (align !="none" ? ( align == "center"? ' style="text-align:center;" ':' style="float:"'+ align ) : '') + '>'): '') +
                '<img align="'+align+'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-video"' +
                ' src="'+me.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+me.options.UEDITOR_HOME_URL+'themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;" />' +
                (addParagraph?'</p>':'')
                :
                '<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '" align="' + align + '"' +
                ( align !="none" ? ' style= "'+ ( align == "center"? "display:block;":" float: "+ align )  + '"' :'' ) +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(img2embed){
        var tmpdiv,
            nodes =domUtils.getElementsByTagName(me.document, !img2embed ? "embed" : "img");
        for(var i=0,node;node = nodes[i++];){
            if(node.className!="edui-faked-video"){
                continue;
            }
            tmpdiv = me.document.createElement("div");
            //å…ˆçœ‹floatåœ¨çœ‹align,æµ®åŠ¨æœ‰çš„æ˜¯æ—¶å€™æ˜¯åœ¨floatä¸Šå®šä¹‰çš„
            var align = node.style.cssFloat;
            tmpdiv.innerHTML = creatInsertStr(img2embed ? node.getAttribute("_url"):node.getAttribute("src"),node.width,node.height,align || node.getAttribute("align"),img2embed);
            node.parentNode.replaceChild(tmpdiv.firstChild,node);
        }
    }
    me.addListener("beforegetcontent",function(){
        switchImgAndEmbed(true);
    });
    me.addListener('aftersetcontent',function(){
        switchImgAndEmbed(false);
    });
    me.addListener('aftergetcontent',function(cmdName){
        if(cmdName == 'aftergetcontent' && me.queryCommandState('source')){
            return;
        }
        switchImgAndEmbed(false);
    });

    me.commands["insertvideo"] = {
        execCommand: function (cmd, videoObjs){
            videoObjs = utils.isArray(videoObjs)?videoObjs:[videoObjs];
            var html = [];
            for(var i=0,vi,len = videoObjs.length;i<len;i++){
                 vi = videoObjs[i];
                 html.push(creatInsertStr( vi.url, vi.width || 420,  vi.height || 280, vi.align||"none",false,true));
            }
            me.execCommand("inserthtml",html.join(""));
        },
        queryCommandState : function(){
            var img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-video");
            return this.highlight ? -1 :(flag?1:0);
        }
    };
};
///import core
///commands è¡¨æ ¼
///commandsName  InsertTable,DeleteTable,InsertParagraphBeforeTable,InsertRow,DeleteRow,InsertCol,DeleteCol,MergeCells,MergeRight,MergeDown,SplittoCells,SplittoRows,SplittoCols
///commandsTitle  è¡¨æ ¼,åˆ é™¤è¡¨æ ¼,è¡¨æ ¼å‰�æ�’è¡Œ,å‰�æ�’å…¥è¡Œ,åˆ é™¤è¡Œ,å‰�æ�’å…¥åˆ—,åˆ é™¤åˆ—,å�ˆå¹¶å¤šä¸ªå�•å…ƒæ ¼,å�³å�ˆå¹¶å�•å…ƒæ ¼,ä¸‹å�ˆå¹¶å�•å…ƒæ ¼,å®Œå…¨æ‹†åˆ†å�•å…ƒæ ¼,æ‹†åˆ†æˆ�è¡Œ,æ‹†åˆ†æˆ�åˆ—
///commandsDialog  dialogs\table\table.html
/**
 * Created by .
 * User: taoqili
 * Date: 11-5-5
 * Time: ä¸‹å�ˆ2:06
 * To change this template use File | Settings | File Templates.
 */
/**
 * tableæ“�ä½œæ�’ä»¶
 */
UE.plugins['table'] = function () {
    var me = this,
            keys = domUtils.keys,
            clearSelectedTd = domUtils.clearSelectedArr;
    //æ¡†é€‰æ—¶ç”¨åˆ°çš„å‡ ä¸ªå…¨å±€å�˜é‡�
    var anchorTd,
            tableOpt,
            _isEmpty = domUtils.isEmptyNode;

    me.ready(function(){
        utils.cssRule('table',
            //é€‰ä¸­çš„tdä¸Šçš„æ ·å¼�
            '.selectTdClass{background-color:#3399FF !important;}' +
                'table.noBorderTable td{border:1px dashed #ddd !important}' +
                //æ�’å…¥çš„è¡¨æ ¼çš„é»˜è®¤æ ·å¼�
                'table{clear:both;margin-bottom:10px;border-collapse:collapse;word-break:break-all;}',me.document);
    });

    function getIndex( cell ) {
        var cells = cell.parentNode.cells;
        for ( var i = 0, ci; ci = cells[i]; i++ ) {
            if ( ci === cell ) {
                return i;
            }
        }
    }

    function deleteTable( table, range ) {
        var p = table.ownerDocument.createElement( 'p' );
        domUtils.fillNode( me.document, p );
        var pN = table.parentNode;
        if ( pN && pN.getAttribute( 'dropdrag' ) ) {
            table = pN;
        }
        table.parentNode.insertBefore( p, table );
        domUtils.remove( table );
        range.setStart( p, 0 ).setCursor();
    }

    /**
     * åˆ¤æ–­å½“å‰�å�•å…ƒæ ¼æ˜¯å�¦å¤„äºŽéš�è—�çŠ¶æ€�
     * @param cell å¾…åˆ¤æ–­çš„å�•å…ƒæ ¼
     * @return {Boolean} éš�è—�æ—¶è¿”å›žtrueï¼Œå�¦åˆ™è¿”å›žfalse
     */
    function _isHide( cell ) {
        return cell.style.display == "none";
    }

    function getCount( arr ) {
        var count = 0;
        for ( var i = 0, ti; ti = arr[i++]; ) {
            if ( !_isHide( ti ) ) {
                count++;
            }

        }
        return count;
    }

    me.currentSelectedArr = [];
    me.addListener( 'mousedown', _mouseDownEvent );
    me.addListener( 'keydown', function ( type, evt ) {
        var keyCode = evt.keyCode || evt.which;
        if ( !keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey ) {
            clearSelectedTd( me.currentSelectedArr );
        }
    } );

    me.addListener( 'mouseup', function () {

        anchorTd = null;
        me.removeListener( 'mouseover', _mouseDownEvent );
        var td = me.currentSelectedArr[0];
        if ( td ) {
            me.document.body.style.webkitUserSelect = '';
            var range = new dom.Range( me.document );
            if ( _isEmpty( td ) ) {
                range.setStart( me.currentSelectedArr[0], 0 ).setCursor();
            } else {
                range.selectNodeContents( me.currentSelectedArr[0] ).select();
            }

        } else {

            //æµ�è§ˆå™¨èƒ½ä»Žtableå¤–è¾¹é€‰åˆ°é‡Œè¾¹å¯¼è‡´currentSelectedArrä¸ºç©ºï¼Œæ¸…æŽ‰å½“å‰�é€‰åŒºå›žåˆ°é€‰åŒºçš„æœ€å¼€å§‹

            var range = me.selection.getRange().shrinkBoundary();

            if ( !range.collapsed ) {
                var start = domUtils.findParentByTagName( range.startContainer, 'td', true ),
                        end = domUtils.findParentByTagName( range.endContainer, 'td', true );
                //åœ¨tableé‡Œè¾¹çš„ä¸�èƒ½æ¸…é™¤
                if ( start && !end || !start && end || start && end && start !== end ) {
                    range.collapse( true ).select( true );
                }
            }


        }

    } );

    function reset() {
        me.currentSelectedArr = [];
        anchorTd = null;

    }

    /**
     * æ�’å…¥è¡¨æ ¼
     * @param numRows è¡Œæ•°
     * @param numCols åˆ—æ•°
     * @param height åˆ—æ•°
     * @param width åˆ—æ•°
     * @param heightUnit åˆ—æ•°
     * @param widthUnit åˆ—æ•°
     * @param bgColor è¡¨æ ¼èƒŒæ™¯
     * @param border è¾¹æ¡†å¤§å°�
     * @param borderColor è¾¹æ¡†é¢œè‰²
     * @param cellSpacing å�•å…ƒæ ¼é—´è·�
     * @param cellPadding å�•å…ƒæ ¼è¾¹è·�
     */
    me.commands['inserttable'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || domUtils.findParentByTagName( range.endContainer, 'table', true )
                    || me.currentSelectedArr.length > 0 ? -1 : 0;
        },
        execCommand:function ( cmdName, opt ) {
            opt = opt || {numRows:5, numCols:5,border:1};
            var html = ['<table ' + (opt.border == "0"  ? ' class="noBorderTable"' : '') + ' _innerCreateTable = "true" '];
            if ( opt.cellSpacing && opt.cellSpacing != '0' || opt.cellPadding && opt.cellPadding != '0' ) {
                html.push( ' style="border-collapse:separate;" ' );
            }
            opt.cellSpacing && opt.cellSpacing != '0' && html.push( ' cellSpacing="' + opt.cellSpacing + '" ' );
            opt.cellPadding && opt.cellPadding != '0' && html.push( ' cellPadding="' + opt.cellPadding + '" ' );
            html.push( ' width="' + (opt.width || 100) + (typeof opt.widthUnit == "undefined" ? '%' : opt.widthUnit) + '" ' );
            opt.height && html.push( ' height="' + opt.height + (typeof opt.heightUnit == "undefined" ? '%' : opt.heightUnit) + '" ' );
            opt.align && (html.push( ' align="' + opt.align + '" ' ));
            html.push( ' border="' + (opt.border || 0) + '" borderColor="' + (opt.borderColor || '#000000') + '"' );
            opt.borderType == "1" && html.push( ' borderType="1" ' );
            opt.bgColor && html.push( ' bgColor="' + opt.bgColor + '"' );
            html.push( ' ><tbody>' );
            opt.width = Math.floor( (opt.width || '100') / opt.numCols );
            for ( var i = 0; i < opt.numRows; i++ ) {
                html.push( '<tr>' );
                for ( var j = 0; j < opt.numCols; j++ ) {
                    html.push( '<td style="width:' + opt.width + (typeof opt.widthUnit == "undefined" ? '%' : opt.widthUnit) + ';'
                            + (opt.borderType == '1' ? 'border:' + opt.border + 'px solid ' + (opt.borderColor || '#000000') : '')
                            + '">'
                            + (browser.ie ? domUtils.fillChar : '<br/>') + '</td>' );
                }
                html.push( '</tr>' );
            }
            me.execCommand( 'insertHtml', html.join( '' ) + '</tbody></table>' );
            reset();
            //å¦‚æžœè¡¨æ ¼çš„alignä¸�æ˜¯é»˜è®¤ï¼Œå°†ä¸�å� ä½�,ç»™å�Žè¾¹çš„blockå…ƒç´ è®¾ç½®clear:both
            if ( opt.align ) {
                var range = me.selection.getRange(),
                        bk = range.createBookmark(),
                        start = range.startContainer;
                while ( start && !domUtils.isBody( start ) ) {
                    if ( domUtils.isBlockElm( start ) ) {
                        start.style.clear = 'both';
                        range.moveToBookmark( bk ).select();
                        break;
                    }
                    start = start.parentNode;
                }
            }

        }
    };
    me.commands['edittable'] = {
        queryCommandState:function () {
            var range = this.selection.getRange();
            if ( this.highlight ) {
                return -1;
            }
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand:function ( cmdName, opt ) {
            var start = me.selection.getStart(),
                    table = domUtils.findParentByTagName( start, 'table', true );
            if ( table ) {
                table.style.cssText = table.style.cssText.replace( /border[^;]+/gi, '' );
                table.style.borderCollapse = opt.cellSpacing && opt.cellSpacing != '0' || opt.cellPadding && opt.cellPadding != '0' ? 'separate' : 'collapse';
                opt.cellSpacing && opt.cellSpacing != '0' ? table.setAttribute( 'cellSpacing', opt.cellSpacing ) : table.removeAttribute( 'cellSpacing' );
                opt.cellPadding && opt.cellPadding != '0' ? table.setAttribute( 'cellPadding', opt.cellPadding ) : table.removeAttribute( 'cellPadding' );
                opt.height && table.setAttribute( 'height', opt.height + opt.heightUnit );
                opt.align && table.setAttribute( 'align', opt.align );
                opt.width && table.setAttribute( 'width', opt.width + opt.widthUnit );
                if(opt.bgColor){
                    table.setAttribute( 'bgColor', opt.bgColor );
                }else{
                    domUtils.removeAttributes(table,["bgColor"]);
                }
                opt.borderColor && table.setAttribute( 'borderColor', opt.borderColor );
                table.setAttribute( 'border', opt.border );
                if(domUtils.hasClass(table,"noBorderTable")){
                    domUtils.removeClasses(table,["noBorderTable"]);
                }
                domUtils.addClass(table,opt.border == "0" ? " noBorderTable" : "");

                if ( opt.borderType == "1" ) {
                    for ( var i = 0, ti, tds = table.getElementsByTagName( 'td' ); ti = tds[i++]; ) {
                        ti.style.border = opt.border + 'px solid ' + (opt.borderColor || '#000000');

                    }
                    table.setAttribute( 'borderType', '1' );
                } else {
                    for ( var i = 0, ti, tds = table.getElementsByTagName( 'td' ); ti = tds[i++]; ) {
                        if ( browser.ie ) {
                            ti.style.cssText = ti.style.cssText.replace( /border[^;]+/gi, '' );

                        } else {
                            domUtils.removeStyle( ti, 'border' );
                            domUtils.removeStyle( ti, 'border-image' );
                        }

                    }
                    table.removeAttribute( 'borderType' );
                }

            }
        }
    };

    me.commands['edittd'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName( range.startContainer, 'table', true )
                    && domUtils.findParentByTagName( range.endContainer, 'table', true )) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        /**
         * å�•å…ƒæ ¼å±žæ€§ç¼–è¾‘
         * @param cmdName
         * @param tdItems
         */
        execCommand:function ( cmdName, tdItems ) {
            var range = this.selection.getRange(),
                    tds = !me.currentSelectedArr.length ? [domUtils.findParentByTagName( range.startContainer, ['td', 'th'], true )] : me.currentSelectedArr;
            for ( var i = 0, td; td = tds[i++]; ) {
                domUtils.setAttributes( td, {
                    "bgColor":tdItems.bgColor,
                    "align":tdItems.align,
                    "vAlign":tdItems.vAlign
                } );
            }
        }
    };


    /**
     * åˆ é™¤è¡¨æ ¼
     */
    me.commands['deletetable'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return (domUtils.findParentByTagName( range.startContainer, 'table', true )
                    && domUtils.findParentByTagName( range.endContainer, 'table', true )) || me.currentSelectedArr.length > 0 ? 0 : -1;
        },
        execCommand:function () {
            var range = this.selection.getRange(),
                    table = domUtils.findParentByTagName( me.currentSelectedArr.length > 0 ? me.currentSelectedArr[0] : range.startContainer, 'table', true );
            deleteTable( table, range );
            reset();
        }
    };

    /**
     * å�‘å�³å�ˆå¹¶å�•å…ƒæ ¼
     */
    me.commands['mergeright'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );


            if ( !td || this.currentSelectedArr.length > 1 ){
                return -1;
            }

            var tr = td.parentNode;

            //æœ€å�³è¾¹è¡Œä¸�èƒ½å�‘å�³å�ˆå¹¶
            var rightCellIndex = getIndex( td ) + td.colSpan;
            if ( rightCellIndex >= tr.cells.length ) {
                return -1;
            }
            //å�•å…ƒæ ¼ä¸�åœ¨å�Œä¸€è¡Œä¸�èƒ½å�‘å�³å�ˆå¹¶
            var rightCell = tr.cells[rightCellIndex];
            if ( _isHide( rightCell ) ) {
                return -1;
            }
            return td.rowSpan == rightCell.rowSpan ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0],
                    tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            //æ‰¾åˆ°å½“å‰�å�•å…ƒæ ¼å�³è¾¹çš„æœªéš�è—�å�•å…ƒæ ¼
            var rightCellRowIndex = tr.rowIndex,
                    rightCellCellIndex = getIndex( td ) + td.colSpan,
                    rightCell = rows[rightCellRowIndex].cells[rightCellCellIndex];

            //åœ¨éš�è—�çš„åŽŸç”Ÿtdå¯¹è±¡ä¸Šå¢žåŠ ä¸¤ä¸ªå±žæ€§ï¼Œåˆ†åˆ«è¡¨ç¤ºå½“å‰�tdå¯¹åº”çš„çœŸå®žtdå��æ ‡
            for ( var i = rightCellRowIndex; i < rightCellRowIndex + rightCell.rowSpan; i++ ) {
                for ( var j = rightCellCellIndex; j < rightCellCellIndex + rightCell.colSpan; j++ ) {
                    var tmpCell = rows[i].cells[j];
                    tmpCell.setAttribute( 'rootRowIndex', tr.rowIndex );
                    tmpCell.setAttribute( 'rootCellIndex', getIndex( td ) );

                }
            }
            //å�ˆå¹¶å�•å…ƒæ ¼
            td.colSpan += rightCell.colSpan || 1;
            //å�ˆå¹¶å†…å®¹
            _moveContent( td, rightCell );
            //åˆ é™¤è¢«å�ˆå¹¶çš„å�•å…ƒæ ¼ï¼Œæ­¤å¤„ç”¨éš�è—�æ–¹å¼�å®žçŽ°æ�¥æ��å�‡æ€§èƒ½
            rightCell.style.display = "none";
            //é‡�æ–°è®©å�•å…ƒæ ¼èŽ·å�–ç„¦ç‚¹
            //trace:1565
            if ( domUtils.isEmptyBlock( td ) ) {
                range.setStart( td, 0 ).setCursor();
            } else {
                range.selectNodeContents( td ).setCursor( true, true );
            }

            //å¤„ç�†æœ‰å¯›é«˜ï¼Œå¯¼è‡´ieçš„æ–‡å­—ä¸�èƒ½è¾“å…¥å� æ»¡
            browser.ie && domUtils.removeAttributes( td, ['width', 'height'] );
        }
    };

    /**
     * å�‘ä¸‹å�ˆå¹¶å�•å…ƒæ ¼
     */
    me.commands['mergedown'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true );

            if ( !td || getCount( me.currentSelectedArr ) > 1 ){
                return -1;
            }


            var tr = td.parentNode,
                    table = tr.parentNode.parentNode,
                    rows = table.rows;

            //å·²ç»�æ˜¯æœ€åº•è¡Œ,ä¸�èƒ½å�‘ä¸‹å�ˆå¹¶
            var downCellRowIndex = tr.rowIndex + td.rowSpan;
            if ( downCellRowIndex >= rows.length ) {
                return -1;
            }

            //å¦‚æžœä¸‹ä¸€ä¸ªå�•å…ƒæ ¼æ˜¯éš�è—�çš„ï¼Œè¡¨æ˜Žä»–æ˜¯ç”±å·¦è¾¹spanè¿‡æ�¥çš„ï¼Œä¸�èƒ½å�‘ä¸‹å�ˆå¹¶
            var downCell = rows[downCellRowIndex].cells[getIndex( td )];
            if ( _isHide( downCell ) ) {
                return -1;
            }

            //å�ªæœ‰åˆ—spanéƒ½ç›¸ç­‰æ—¶æ‰�èƒ½å�ˆå¹¶
            return td.colSpan == downCell.colSpan ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0];


            var tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            var downCellRowIndex = tr.rowIndex + td.rowSpan,
                    downCellCellIndex = getIndex( td ),
                    downCell = rows[downCellRowIndex].cells[downCellCellIndex];

            //æ‰¾åˆ°å½“å‰�åˆ—çš„ä¸‹ä¸€ä¸ªæœªè¢«éš�è—�çš„å�•å…ƒæ ¼
            for ( var i = downCellRowIndex; i < downCellRowIndex + downCell.rowSpan; i++ ) {
                for ( var j = downCellCellIndex; j < downCellCellIndex + downCell.colSpan; j++ ) {
                    var tmpCell = rows[i].cells[j];


                    tmpCell.setAttribute( 'rootRowIndex', tr.rowIndex );
                    tmpCell.setAttribute( 'rootCellIndex', getIndex( td ) );
                }
            }
            //å�ˆå¹¶å�•å…ƒæ ¼
            td.rowSpan += downCell.rowSpan || 1;
            //å�ˆå¹¶å†…å®¹
            _moveContent( td, downCell );
            //åˆ é™¤è¢«å�ˆå¹¶çš„å�•å…ƒæ ¼ï¼Œæ­¤å¤„ç”¨éš�è—�æ–¹å¼�å®žçŽ°æ�¥æ��å�‡æ€§èƒ½
            downCell.style.display = "none";
            //é‡�æ–°è®©å�•å…ƒæ ¼èŽ·å�–ç„¦ç‚¹
            if ( domUtils.isEmptyBlock( td ) ) {
                range.setStart( td, 0 ).setCursor();
            } else {
                range.selectNodeContents( td ).setCursor( true, true );
            }
            //å¤„ç�†æœ‰å¯›é«˜ï¼Œå¯¼è‡´ieçš„æ–‡å­—ä¸�èƒ½è¾“å…¥å� æ»¡
            browser.ie && domUtils.removeAttributes( td, ['width', 'height'] );
        }
    };

    /**
     * åˆ é™¤è¡Œ
     */
    me.commands['deleterow'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );
            if ( !td && me.currentSelectedArr.length == 0 ){
                return -1;
            }
            return 0;

        },
        execCommand:function () {
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ),
                    tr,
                    table,
                    cells,
                    rows ,
                    rowIndex ,
                    cellIndex;

            if ( td && me.currentSelectedArr.length == 0 ) {
                var count = (td.rowSpan || 1) - 1;

                me.currentSelectedArr.push( td );
                tr = td.parentNode;
                        table = tr.parentNode.parentNode;

                rows = table.rows,
                        rowIndex = tr.rowIndex + 1,
                        cellIndex = getIndex( td );

                while ( count ) {

                    me.currentSelectedArr.push( rows[rowIndex].cells[cellIndex] );
                    count--;
                    rowIndex++;
                }
            }

            while ( td = me.currentSelectedArr.pop() ) {

                if ( !domUtils.findParentByTagName( td, 'table' ) ) {//|| _isHide(td)

                    continue;
                }
                tr = td.parentNode,
                        table = tr.parentNode.parentNode;
                cells = tr.cells,
                        rows = table.rows,
                        rowIndex = tr.rowIndex,
                        cellIndex = getIndex( td );
                /*
                 * ä»Žæœ€å·¦è¾¹å¼€å§‹æ‰«æ��å¹¶éš�è—�å½“å‰�è¡Œçš„æ‰€æœ‰å�•å…ƒæ ¼
                 * è‹¥å½“å‰�å�•å…ƒæ ¼çš„displayä¸ºnone,å¾€ä¸Šæ‰¾åˆ°å®ƒæ‰€åœ¨çš„çœŸæ­£å�•å…ƒæ ¼ï¼ŒèŽ·å�–colSpanå’ŒrowSpanï¼Œ
                 *  å°†rowspanå‡�ä¸€ï¼Œå¹¶è·³è½¬åˆ°cellIndex+colSpanåˆ—ç»§ç»­å¤„ç�†
                 * è‹¥å½“å‰�å�•å…ƒæ ¼çš„displayä¸�ä¸ºnone,åˆ†ä¸¤ç§�æƒ…å†µï¼š
                 *  1ã€�rowspan == 1 ï¼Œç›´æŽ¥è®¾ç½®displayä¸ºnoneï¼Œè·³è½¬åˆ°cellIndex+colSpanåˆ—ç»§ç»­å¤„ç�†
                 *  2ã€�rowspan > 1  , ä¿®æ”¹å½“å‰�å�•å…ƒæ ¼çš„ä¸‹ä¸€ä¸ªå�•å…ƒæ ¼çš„displayä¸º"",
                 *    å¹¶å°†å½“å‰�å�•å…ƒæ ¼çš„rowspan-1èµ‹ç»™ä¸‹ä¸€ä¸ªå�•å…ƒæ ¼çš„rowspanï¼Œå½“å‰�å�•å…ƒæ ¼çš„colspanèµ‹ç»™ä¸‹ä¸€ä¸ªå�•å…ƒæ ¼çš„colspanï¼Œ
                 *    ç„¶å�Žéš�è—�å½“å‰�å�•å…ƒæ ¼ï¼Œè·³è½¬åˆ°cellIndex+colSpanåˆ—ç»§ç»­å¤„ç�†
                 */
                for ( var currentCellIndex = 0; currentCellIndex < cells.length; ) {
                    var currentNode = cells[currentCellIndex];
                    if ( _isHide( currentNode ) ) {
                        var topNode = rows[currentNode.getAttribute( 'rootRowIndex' )].cells[currentNode.getAttribute( 'rootCellIndex' )];
                        topNode.rowSpan--;
                        currentCellIndex += topNode.colSpan;
                    } else {
                        if ( currentNode.rowSpan == 1 ) {
                            currentCellIndex += currentNode.colSpan;
                        } else {
                            var downNode = rows[rowIndex + 1].cells[currentCellIndex];
                            downNode.style.display = "";
                            downNode.rowSpan = currentNode.rowSpan - 1;
                            downNode.colSpan = currentNode.colSpan;
                            currentCellIndex += currentNode.colSpan;
                        }
                    }
                }
                //å®Œæˆ�æ›´æ–°å�Žå†�åˆ é™¤å¤–å±‚åŒ…è£¹çš„tr
                domUtils.remove( tr );

                //é‡�æ–°å®šä½�ç„¦ç‚¹
                var topRowTd, focusTd, downRowTd;

                if ( rowIndex == rows.length ) { //å¦‚æžœè¢«åˆ é™¤çš„è¡Œæ˜¯æœ€å�Žä¸€è¡Œ,è¿™é‡Œä¹‹æ‰€ä»¥æ²¡æœ‰-1æ˜¯å› ä¸ºå·²ç»�åˆ é™¤äº†ä¸€è¡Œ
                    //å¦‚æžœåˆ é™¤çš„è¡Œä¹Ÿæ˜¯ç¬¬ä¸€è¡Œï¼Œé‚£ä¹ˆè¡¨æ ¼æ€»å…±å�ªæœ‰ä¸€è¡Œï¼Œåˆ é™¤æ•´ä¸ªè¡¨æ ¼
                    if ( rowIndex == 0 ) {
                        deleteTable( table, range );

                        return;
                    }
                    //å¦‚æžœä¸Šä¸€å�•å…ƒæ ¼æœªéš�è—�ï¼Œåˆ™ç›´æŽ¥å®šä½�ï¼Œå�¦åˆ™å®šä½�åˆ°æœ€è¿‘çš„ä¸Šä¸€ä¸ªé�žéš�è—�å�•å…ƒæ ¼
                    var preRowIndex = rowIndex - 1;
                    topRowTd = rows[preRowIndex].cells[ cellIndex];
                    focusTd = _isHide( topRowTd ) ? rows[topRowTd.getAttribute( 'rootRowIndex' )].cells[topRowTd.getAttribute( 'rootCellIndex' )] : topRowTd;

                } else { //å¦‚æžœè¢«åˆ é™¤çš„ä¸�æ˜¯æœ€å�Žä¸€è¡Œï¼Œåˆ™å…‰æ ‡å®šä½�åˆ°ä¸‹ä¸€è¡Œ,æ­¤å¤„æœªåŠ 1æ˜¯å› ä¸ºå·²ç»�åˆ é™¤äº†ä¸€è¡Œ

                    downRowTd = rows[rowIndex].cells[cellIndex];
                    focusTd = _isHide( downRowTd ) ? rows[downRowTd.getAttribute( 'rootRowIndex' )].cells[downRowTd.getAttribute( 'rootCellIndex' )] : downRowTd;
                }
            }


            range.setStart( focusTd, 0 ).setCursor();
            update( table );
        }
    };

    /**
     * åˆ é™¤åˆ—
     */
    me.commands['deletecol'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );
            if ( !td && me.currentSelectedArr.length == 0 )return -1;
            return 0;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );


            if ( td && me.currentSelectedArr.length == 0 ) {

                var count = (td.colSpan || 1) - 1;

                me.currentSelectedArr.push( td );
                while ( count ) {
                    do {
                        td = td.nextSibling
                    } while ( td.nodeType == 3 );
                    me.currentSelectedArr.push( td );
                    count--;
                }
            }

            while ( td = me.currentSelectedArr.pop() ) {
                if ( !domUtils.findParentByTagName( td, 'table' ) ) { //|| _isHide(td)
                    continue;
                }

                var tr = td.parentNode,
                        table = tr.parentNode.parentNode,
                        cellIndex = getIndex( td ),
                        rows = table.rows,
                        cells = tr.cells,
                        rowIndex = tr.rowIndex;
                /*
                 * ä»Žç¬¬ä¸€è¡Œå¼€å§‹æ‰«æ��å¹¶éš�è—�å½“å‰�åˆ—çš„æ‰€æœ‰å�•å…ƒæ ¼
                 * è‹¥å½“å‰�å�•å…ƒæ ¼çš„displayä¸ºnoneï¼Œè¡¨æ˜Žå®ƒæ˜¯ç”±å·¦è¾¹Spanè¿‡æ�¥çš„ï¼Œ
                 *  å°†å·¦è¾¹ç¬¬ä¸€ä¸ªé�žnoneå�•å…ƒæ ¼çš„colSpanå‡�åŽ»1å¹¶åˆ åŽ»å¯¹åº”çš„å�•å…ƒæ ¼å�Žè·³è½¬åˆ°rowIndex + rowspanè¡Œç»§ç»­å¤„ç�†ï¼›
                 * è‹¥å½“å‰�å�•å…ƒæ ¼çš„displayä¸�ä¸ºnoneï¼Œåˆ†ä¸¤ç§�æƒ…å†µï¼Œ
                 *  1ã€�å½“å‰�å�•å…ƒæ ¼çš„colspan == 1 ï¼Œ åˆ™ç›´æŽ¥åˆ é™¤è¯¥èŠ‚ç‚¹ï¼Œè·³è½¬åˆ°rowIndex + rowspanè¡Œç»§ç»­å¤„ç�†
                 *  2ã€�å½“å‰�å�•å…ƒæ ¼çš„colsapn >  1, ä¿®æ”¹å½“å‰�å�•å…ƒæ ¼å�³è¾¹å�•å…ƒæ ¼çš„displayä¸º"",
                 *      å¹¶å°†å½“å‰�å�•å…ƒæ ¼çš„colspan-1èµ‹ç»™å®ƒçš„colspanï¼Œå½“å‰�å�•å…ƒæ ¼çš„rolspanèµ‹ç»™å®ƒçš„rolspanï¼Œ
                 *      ç„¶å�Žåˆ é™¤å½“å‰�å�•å…ƒæ ¼ï¼Œè·³è½¬åˆ°rowIndex+rowSpanè¡Œç»§ç»­å¤„ç�†
                 */
                var rowSpan;
                for ( var currentRowIndex = 0; currentRowIndex < rows.length; ) {
                    var currentNode = rows[currentRowIndex].cells[cellIndex];
                    if ( _isHide( currentNode ) ) {
                        var leftNode = rows[currentNode.getAttribute( 'rootRowIndex' )].cells[currentNode.getAttribute( 'rootCellIndex' )];
                        //ä¾�æ¬¡åˆ é™¤å¯¹åº”çš„å�•å…ƒæ ¼
                        rowSpan = leftNode.rowSpan;
                        for ( var i = 0; i < leftNode.rowSpan; i++ ) {
                            var delNode = rows[currentRowIndex + i].cells[cellIndex];
                            domUtils.remove( delNode );
                        }
                        //ä¿®æ­£è¢«åˆ å�Žçš„å�•å…ƒæ ¼ä¿¡æ�¯
                        leftNode.colSpan--;
                        currentRowIndex += rowSpan;
                    } else {
                        if ( currentNode.colSpan == 1 ) {
                            rowSpan = currentNode.rowSpan;
                            for ( var i = currentRowIndex, l = currentRowIndex + currentNode.rowSpan; i < l; i++ ) {
                                domUtils.remove( rows[i].cells[cellIndex] );
                            }
                            currentRowIndex += rowSpan;

                        } else {
                            var rightNode = rows[currentRowIndex].cells[cellIndex + 1];
                            rightNode.style.display = "";
                            rightNode.rowSpan = currentNode.rowSpan;
                            rightNode.colSpan = currentNode.colSpan - 1;
                            currentRowIndex += currentNode.rowSpan;
                            domUtils.remove( currentNode );
                        }
                    }
                }

                //é‡�æ–°å®šä½�ç„¦ç‚¹
                var preColTd, focusTd, nextColTd;
                if ( cellIndex == cells.length ) { //å¦‚æžœå½“å‰�åˆ—æ˜¯æœ€å�Žä¸€åˆ—ï¼Œå…‰æ ‡å®šä½�åˆ°å½“å‰�åˆ—çš„å‰�ä¸€åˆ—,å�Œæ ·ï¼Œè¿™é‡Œæ²¡æœ‰å‡�åŽ»1æ˜¯å› ä¸ºå·²ç»�è¢«åˆ é™¤äº†ä¸€åˆ—
                    //å¦‚æžœå½“å‰�åˆ—ä¹Ÿæ˜¯ç¬¬ä¸€åˆ—ï¼Œåˆ™åˆ é™¤æ•´ä¸ªè¡¨æ ¼
                    if ( cellIndex == 0 ) {
                        deleteTable( table, range );
                        return;
                    }
                    //æ‰¾åˆ°å½“å‰�å�•å…ƒæ ¼å‰�ä¸€åˆ—ä¸­å’Œæœ¬å�•å…ƒæ ¼æœ€è¿‘çš„ä¸€ä¸ªæœªéš�è—�å�•å…ƒæ ¼
                    var preCellIndex = cellIndex - 1;
                    preColTd = rows[rowIndex].cells[preCellIndex];
                    focusTd = _isHide( preColTd ) ? rows[preColTd.getAttribute( 'rootRowIndex' )].cells[preColTd.getAttribute( 'rootCellIndex' )] : preColTd;

                } else { //å¦‚æžœå½“å‰�åˆ—ä¸�æ˜¯æœ€å�Žä¸€åˆ—ï¼Œåˆ™å…‰æ ‡å®šä½�åˆ°å½“å‰�åˆ—çš„å�Žä¸€åˆ—

                    nextColTd = rows[rowIndex].cells[cellIndex];
                    focusTd = _isHide( nextColTd ) ? rows[nextColTd.getAttribute( 'rootRowIndex' )].cells[nextColTd.getAttribute( 'rootCellIndex' )] : nextColTd;
                }
            }

            range.setStart( focusTd, 0 ).setCursor();
            update( table )
        }
    };

    /**
     * å®Œå…¨æ‹†åˆ†å�•å…ƒæ ¼
     */
    me.commands['splittocells'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true );
            return td && ( td.rowSpan > 1 || td.colSpan > 1 ) && (!me.currentSelectedArr.length || getCount( me.currentSelectedArr ) == 1) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ),
                    tr = td.parentNode,
                    table = tr.parentNode.parentNode;
            var rowIndex = tr.rowIndex,
                    cellIndex = getIndex( td ),
                    rowSpan = td.rowSpan,
                    colSpan = td.colSpan;


            for ( var i = 0; i < rowSpan; i++ ) {
                for ( var j = 0; j < colSpan; j++ ) {
                    var cell = table.rows[rowIndex + i].cells[cellIndex + j];
                    cell.rowSpan = 1;
                    cell.colSpan = 1;

                    if ( _isHide( cell ) ) {
                        cell.style.display = "";
                        cell.innerHTML = browser.ie ? '' : "<br/>";
                    }
                }
            }
        }
    };


    /**
     * å°†å�•å…ƒæ ¼æ‹†åˆ†æˆ�è¡Œ
     */
    me.commands['splittorows'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true ) || me.currentSelectedArr[0];
            return td && ( td.rowSpan > 1) && (!me.currentSelectedArr.length || getCount( me.currentSelectedArr ) == 1) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true ) || me.currentSelectedArr[0],
                    tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            var rowIndex = tr.rowIndex,
                    cellIndex = getIndex( td ),
                    rowSpan = td.rowSpan,
                    colSpan = td.colSpan;

            for ( var i = 0; i < rowSpan; i++ ) {
                var cells = rows[rowIndex + i],
                        cell = cells.cells[cellIndex];
                cell.rowSpan = 1;
                cell.colSpan = colSpan;
                if ( _isHide( cell ) ) {
                    cell.style.display = "";
                    //åŽŸæœ‰çš„å†…å®¹è¦�æ¸…é™¤æŽ‰
                    cell.innerHTML = browser.ie ? '' : '<br/>'
                }
                //ä¿®æ­£è¢«éš�è—�å�•å…ƒæ ¼ä¸­å­˜å‚¨çš„rootRowIndexå’ŒrootCellIndexä¿¡æ�¯
                for ( var j = cellIndex + 1; j < cellIndex + colSpan; j++ ) {
                    cell = cells.cells[j];

                    cell.setAttribute( 'rootRowIndex', rowIndex + i )
                }

            }
            clearSelectedTd( me.currentSelectedArr );
            this.selection.getRange().setStart( td, 0 ).setCursor();
        }
    };


    /**
     * åœ¨è¡¨æ ¼å‰�æ�’å…¥è¡Œ
     */
    me.commands['insertparagraphbeforetable'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, 'td', true ) || me.currentSelectedArr[0];
            return  td && domUtils.findParentByTagName( td, 'table' ) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    table = domUtils.findParentByTagName( start, 'table', true );

            start = me.document.createElement( me.options.enterTag );
            table.parentNode.insertBefore( start, table );
            clearSelectedTd( me.currentSelectedArr );
            if ( start.tagName == 'P' ) {
                //trace:868
                start.innerHTML = browser.ie ? '' : '<br/>';
                range.setStart( start, 0 )
            } else {
                range.setStartBefore( start )
            }
            range.setCursor();

        }
    };

    /**
     * å°†å�•å…ƒæ ¼æ‹†åˆ†æˆ�åˆ—
     */
    me.commands['splittocols'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0];
            return td && ( td.colSpan > 1) && (!me.currentSelectedArr.length || getCount( me.currentSelectedArr ) == 1) ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0],
                    tr = td.parentNode,
                    rows = tr.parentNode.parentNode.rows;

            var rowIndex = tr.rowIndex,
                    cellIndex = getIndex( td ),
                    rowSpan = td.rowSpan,
                    colSpan = td.colSpan;

            for ( var i = 0; i < colSpan; i++ ) {
                var cell = rows[rowIndex].cells[cellIndex + i];
                cell.rowSpan = rowSpan;
                cell.colSpan = 1;
                if ( _isHide( cell ) ) {
                    cell.style.display = "";
                    cell.innerHTML = browser.ie ? '' : '<br/>'
                }

                for ( var j = rowIndex + 1; j < rowIndex + rowSpan; j++ ) {
                    var tmpCell = rows[j].cells[cellIndex + i];
                    tmpCell.setAttribute( 'rootCellIndex', cellIndex + i );
                }
            }
            clearSelectedTd( me.currentSelectedArr );
            this.selection.getRange().setStart( td, 0 ).setCursor();
        }
    };


    /**
     * æ�’å…¥è¡Œ
     */
    me.commands['insertrow'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || domUtils.findParentByTagName( range.endContainer, 'table', true ) || me.currentSelectedArr.length != 0 ? 0 : -1;
        },
        execCommand:function () {
            var range = this.selection.getRange(),
                    start = range.startContainer,
                    tr = domUtils.findParentByTagName( start, 'tr', true ) || me.currentSelectedArr[0].parentNode,
                    table = tr.parentNode.parentNode,
                    rows = table.rows;

            //è®°å½•æ�’å…¥ä½�ç½®åŽŸæ�¥æ‰€æœ‰çš„å�•å…ƒæ ¼
            var rowIndex = tr.rowIndex,
                    cells = rows[rowIndex].cells;

            //æ�’å…¥æ–°çš„ä¸€è¡Œ
            var newRow = table.insertRow( rowIndex );

            var newCell;
            //é��åŽ†è¡¨æ ¼ä¸­å¾…æ�’å…¥ä½�ç½®ä¸­çš„æ‰€æœ‰å�•å…ƒæ ¼ï¼Œæ£€æŸ¥å…¶çŠ¶æ€�ï¼Œå¹¶æ�®æ­¤ä¿®æ­£æ–°æ�’å…¥è¡Œçš„å�•å…ƒæ ¼çŠ¶æ€�
            for ( var cellIndex = 0; cellIndex < cells.length; ) {

                var tmpCell = cells[cellIndex];

                if ( _isHide( tmpCell ) ) { //å¦‚æžœå½“å‰�å�•å…ƒæ ¼æ˜¯éš�è—�çš„ï¼Œè¡¨æ˜Žå½“å‰�å�•å…ƒæ ¼ç”±å…¶ä¸Šéƒ¨spanè¿‡æ�¥ï¼Œæ‰¾åˆ°å…¶ä¸Šéƒ¨å�•å…ƒæ ¼

                    //æ‰¾åˆ°è¢«éš�è—�å�•å…ƒæ ¼çœŸæ­£æ‰€å±žçš„å�•å…ƒæ ¼
                    var topCell = rows[tmpCell.getAttribute( 'rootRowIndex' )].cells[tmpCell.getAttribute( 'rootCellIndex' )];
                    //å¢žåŠ ä¸€è¡Œï¼Œå¹¶å°†æ‰€æœ‰æ–°æ�’å…¥çš„å�•å…ƒæ ¼éš�è—�èµ·æ�¥
                    topCell.rowSpan++;
                    for ( var i = 0; i < topCell.colSpan; i++ ) {
                        newCell = tmpCell.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';

                        if ( newRow.children[cellIndex + i] ) {
                            newRow.insertBefore( newCell, newRow.children[cellIndex + i] );
                        } else {
                            newRow.appendChild( newCell )
                        }

                        newCell.style.display = "none";
                    }
                    cellIndex += topCell.colSpan;

                } else {//è‹¥å½“å‰�å�•å…ƒæ ¼æœªéš�è—�ï¼Œåˆ™åœ¨å…¶ä¸Šè¡Œæ�’å…¥colspanä¸ªå�•å…ƒæ ¼

                    for ( var j = 0; j < tmpCell.colSpan; j++ ) {
                        newCell = tmpCell.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        if ( newRow.children[cellIndex + j] ) {
                            newRow.insertBefore( newCell, newRow.children[cellIndex + j] );
                        } else {
                            newRow.appendChild( newCell )
                        }
                    }
                    cellIndex += tmpCell.colSpan;
                }
            }
            update( table );
            range.setStart( newRow.cells[0], 0 ).setCursor();

            clearSelectedTd( me.currentSelectedArr );
        }
    };

    /**
     * æ�’å…¥åˆ—
     */
    me.commands['insertcol'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var range = this.selection.getRange();
            return domUtils.findParentByTagName( range.startContainer, 'table', true )
                    || domUtils.findParentByTagName( range.endContainer, 'table', true ) || me.currentSelectedArr.length != 0 ? 0 : -1;
        },
        execCommand:function () {

            var range = this.selection.getRange(),
                    start = range.startContainer,
                    td = domUtils.findParentByTagName( start, ['td', 'th'], true ) || me.currentSelectedArr[0],
                    table = domUtils.findParentByTagName( td, 'table' ),
                    rows = table.rows;

            var cellIndex = getIndex( td ),
                    newCell;

            //é��åŽ†å½“å‰�åˆ—ä¸­çš„æ‰€æœ‰å�•å…ƒæ ¼ï¼Œæ£€æŸ¥å…¶çŠ¶æ€�ï¼Œå¹¶æ�®æ­¤ä¿®æ­£æ–°æ�’å…¥åˆ—çš„å�•å…ƒæ ¼çŠ¶æ€�
            for ( var rowIndex = 0; rowIndex < rows.length; ) {

                var tmpCell = rows[rowIndex].cells[cellIndex], tr;

                if ( _isHide( tmpCell ) ) {//å¦‚æžœå½“å‰�å�•å…ƒæ ¼æ˜¯éš�è—�çš„ï¼Œè¡¨æ˜Žå½“å‰�å�•å…ƒæ ¼ç”±å…¶å·¦è¾¹spanè¿‡æ�¥ï¼Œæ‰¾åˆ°å…¶å·¦è¾¹å�•å…ƒæ ¼

                    var leftCell = rows[tmpCell.getAttribute( 'rootRowIndex' )].cells[tmpCell.getAttribute( 'rootCellIndex' )];
                    leftCell.colSpan++;
                    for ( var i = 0; i < leftCell.rowSpan; i++ ) {
                        newCell = td.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        tr = rows[rowIndex + i];
                        if ( tr.children[cellIndex] ) {
                            tr.insertBefore( newCell, tr.children[cellIndex] );
                        } else {
                            tr.appendChild( newCell )
                        }

                        newCell.style.display = "none";
                    }
                    rowIndex += leftCell.rowSpan;

                } else { //è‹¥å½“å‰�å�•å…ƒæ ¼æœªéš�è—�ï¼Œåˆ™åœ¨å…¶å·¦è¾¹æ�’å…¥rowspanä¸ªå�•å…ƒæ ¼

                    for ( var j = 0; j < tmpCell.rowSpan; j++ ) {
                        newCell = td.cloneNode( false );
                        domUtils.removeAttributes( newCell, ["bgColor", "valign", "align"] );
                        newCell.rowSpan = newCell.colSpan = 1;
                        newCell.innerHTML = browser.ie ? '' : "<br/>";
                        newCell.className = '';
                        tr = rows[rowIndex + j];
                        if ( tr.children[cellIndex] ) {
                            tr.insertBefore( newCell, tr.children[cellIndex] );
                        } else {
                            tr.appendChild( newCell )
                        }

                        newCell.innerHTML = browser.ie ? '' : "<br/>";

                    }
                    rowIndex += tmpCell.rowSpan;
                }
            }
            update( table );
            range.setStart( rows[0].cells[cellIndex], 0 ).setCursor();
            clearSelectedTd( me.currentSelectedArr );

        }
    };

    /**
     * å�ˆå¹¶å¤šä¸ªå�•å…ƒæ ¼ï¼Œé€šè¿‡ä¸¤ä¸ªcellå°†å½“å‰�åŒ…å�«çš„æ‰€æœ‰æ¨ªçºµå�•å…ƒæ ¼è¿›è¡Œå�ˆå¹¶
     */
    me.commands['mergecells'] = {
        queryCommandState:function () {
            if ( this.highlight ) {
                return -1;
            }
            var count = 0;
            for ( var i = 0, ti; ti = this.currentSelectedArr[i++]; ) {
                if ( !_isHide( ti ) )
                    count++;
            }
            return count > 1 ? 0 : -1;
        },
        execCommand:function () {

            var start = me.currentSelectedArr[0],
                    end = me.currentSelectedArr[me.currentSelectedArr.length - 1],
                    table = domUtils.findParentByTagName( start, 'table' ),
                    rows = table.rows,
                    cellsRange = {
                        beginRowIndex:start.parentNode.rowIndex,
                        beginCellIndex:getIndex( start ),
                        endRowIndex:end.parentNode.rowIndex,
                        endCellIndex:getIndex( end )
                    },

                    beginRowIndex = cellsRange.beginRowIndex,
                    beginCellIndex = cellsRange.beginCellIndex,
                    rowsLength = cellsRange.endRowIndex - cellsRange.beginRowIndex + 1,
                    cellLength = cellsRange.endCellIndex - cellsRange.beginCellIndex + 1,

                    tmp = rows[beginRowIndex].cells[beginCellIndex];

            for ( var i = 0, ri; (ri = rows[beginRowIndex + i++]) && i <= rowsLength; ) {
                for ( var j = 0, ci; (ci = ri.cells[beginCellIndex + j++]) && j <= cellLength; ) {
                    if ( i == 1 && j == 1 ) {
                        ci.style.display = "";
                        ci.rowSpan = rowsLength;
                        ci.colSpan = cellLength;
                    } else {
                        ci.style.display = "none";
                        ci.rowSpan = 1;
                        ci.colSpan = 1;
                        ci.setAttribute( 'rootRowIndex', beginRowIndex );
                        ci.setAttribute( 'rootCellIndex', beginCellIndex );

                        //ä¼ é€’å†…å®¹
                        _moveContent( tmp, ci );
                    }
                }
            }
            this.selection.getRange().setStart( tmp, 0 ).setCursor();
            //å¤„ç�†æœ‰å¯›é«˜ï¼Œå¯¼è‡´ieçš„æ–‡å­—ä¸�èƒ½è¾“å…¥å� æ»¡
            browser.ie && domUtils.removeAttributes( tmp, ['width', 'height'] );
            clearSelectedTd( me.currentSelectedArr );
        }
    };

    /**
     * å°†cellFromå�•å…ƒæ ¼ä¸­çš„å†…å®¹ç§»åŠ¨åˆ°cellToä¸­
     * @param cellTo  ç›®æ ‡å�•å…ƒæ ¼
     * @param cellFrom  æº�å�•å…ƒæ ¼
     */
    function _moveContent( cellTo, cellFrom ) {
        if ( _isEmpty( cellFrom ) ) return;

        if ( _isEmpty( cellTo ) ) {
            cellTo.innerHTML = cellFrom.innerHTML;
            return;
        }
        var child = cellTo.lastChild;
        if ( child.nodeType != 1 || child.tagName != 'BR' ) {
            cellTo.appendChild( cellTo.ownerDocument.createElement( 'br' ) )
        }

        //ä¾�æ¬¡ç§»åŠ¨å†…å®¹
        while ( child = cellFrom.firstChild ) {
            cellTo.appendChild( child );
        }
    }


    /**
     * æ ¹æ�®ä¸¤ä¸ªå�•å…ƒæ ¼æ�¥èŽ·å�–ä¸­é—´åŒ…å�«çš„æ‰€æœ‰å�•å…ƒæ ¼é›†å�ˆé€‰åŒº
     * @param cellA
     * @param cellB
     * @return {Object} é€‰åŒºçš„å·¦ä¸Šå’Œå�³ä¸‹å��æ ‡
     */
    function _getCellsRange( cellA, cellB ) {

        var trA = cellA.parentNode,
                trB = cellB.parentNode,
                aRowIndex = trA.rowIndex,
                bRowIndex = trB.rowIndex,
                rows = trA.parentNode.parentNode.rows,
                rowsNum = rows.length,
                cellsNum = rows[0].cells.length,
                cellAIndex = getIndex( cellA ),
                cellBIndex = getIndex( cellB );

        if ( cellA == cellB ) {
            return {
                beginRowIndex:aRowIndex,
                beginCellIndex:cellAIndex,
                endRowIndex:aRowIndex + cellA.rowSpan - 1,
                endCellIndex:cellBIndex + cellA.colSpan - 1
            }
        }

        var
                beginRowIndex = Math.min( aRowIndex, bRowIndex ),
                beginCellIndex = Math.min( cellAIndex, cellBIndex ),
                endRowIndex = Math.max( aRowIndex + cellA.rowSpan - 1, bRowIndex + cellB.rowSpan - 1 ),
                endCellIndex = Math.max( cellAIndex + cellA.colSpan - 1, cellBIndex + cellB.colSpan - 1 );

        while ( 1 ) {

            var tmpBeginRowIndex = beginRowIndex,
                    tmpBeginCellIndex = beginCellIndex,
                    tmpEndRowIndex = endRowIndex,
                    tmpEndCellIndex = endCellIndex;
            // æ£€æŸ¥æ˜¯å�¦æœ‰è¶…å‡ºTableRangeä¸Šè¾¹ç•Œçš„æƒ…å†µ
            if ( beginRowIndex > 0 ) {
                for ( cellIndex = beginCellIndex; cellIndex <= endCellIndex; ) {
                    var currentTopTd = rows[beginRowIndex].cells[cellIndex];
                    if ( _isHide( currentTopTd ) ) {

                        //overflowRowIndex = beginRowIndex == currentTopTd.rootRowIndex ? 1:0;
                        beginRowIndex = currentTopTd.getAttribute( 'rootRowIndex' );
                        currentTopTd = rows[currentTopTd.getAttribute( 'rootRowIndex' )].cells[currentTopTd.getAttribute( 'rootCellIndex' )];
                    }

                    cellIndex = getIndex( currentTopTd ) + (currentTopTd.colSpan || 1);
                }
            }

            //æ£€æŸ¥æ˜¯å�¦æœ‰è¶…å‡ºå·¦è¾¹ç•Œçš„æƒ…å†µ
            if ( beginCellIndex > 0 ) {
                for ( var rowIndex = beginRowIndex; rowIndex <= endRowIndex; ) {
                    var currentLeftTd = rows[rowIndex].cells[beginCellIndex];
                    if ( _isHide( currentLeftTd ) ) {
                        // overflowCellIndex = beginCellIndex== currentLeftTd.rootCellIndex ? 1:0;
                        beginCellIndex = currentLeftTd.getAttribute( 'rootCellIndex' );
                        currentLeftTd = rows[currentLeftTd.getAttribute( 'rootRowIndex' )].cells[currentLeftTd.getAttribute( 'rootCellIndex' )];
                    }
                    rowIndex = currentLeftTd.parentNode.rowIndex + (currentLeftTd.rowSpan || 1);
                }
            }

            // æ£€æŸ¥æ˜¯å�¦æœ‰è¶…å‡ºTableRangeä¸‹è¾¹ç•Œçš„æƒ…å†µ
            if ( endRowIndex < rowsNum ) {
                for ( var cellIndex = beginCellIndex; cellIndex <= endCellIndex; ) {
                    var currentDownTd = rows[endRowIndex].cells[cellIndex];
                    if ( _isHide( currentDownTd ) ) {
                        currentDownTd = rows[currentDownTd.getAttribute( 'rootRowIndex' )].cells[currentDownTd.getAttribute( 'rootCellIndex' )];
                    }
                    endRowIndex = currentDownTd.parentNode.rowIndex + currentDownTd.rowSpan - 1;
                    cellIndex = getIndex( currentDownTd ) + (currentDownTd.colSpan || 1);
                }
            }

            //æ£€æŸ¥æ˜¯å�¦æœ‰è¶…å‡ºå�³è¾¹ç•Œçš„æƒ…å†µ
            if ( endCellIndex < cellsNum ) {
                for ( rowIndex = beginRowIndex; rowIndex <= endRowIndex; ) {
                    var currentRightTd = rows[rowIndex].cells[endCellIndex];
                    if ( _isHide( currentRightTd ) ) {
                        currentRightTd = rows[currentRightTd.getAttribute( 'rootRowIndex' )].cells[currentRightTd.getAttribute( 'rootCellIndex' )];
                    }
                    endCellIndex = getIndex( currentRightTd ) + currentRightTd.colSpan - 1;
                    rowIndex = currentRightTd.parentNode.rowIndex + (currentRightTd.rowSpan || 1);
                }
            }

            if ( tmpBeginCellIndex == beginCellIndex && tmpEndCellIndex == endCellIndex && tmpEndRowIndex == endRowIndex && tmpBeginRowIndex == beginRowIndex ) {
                break;
            }
        }

        //è¿”å›žé€‰åŒºçš„èµ·å§‹å’Œç»“æ�Ÿå��æ ‡
        return {
            beginRowIndex:beginRowIndex,
            beginCellIndex:beginCellIndex,
            endRowIndex:endRowIndex,
            endCellIndex:endCellIndex
        }
    }


    /**
     * é¼ æ ‡æŒ‰ä¸‹äº‹ä»¶
     * @param type
     * @param evt
     */
    function _mouseDownEvent( type, evt ) {
        anchorTd = evt.target || evt.srcElement;

        if ( me.queryCommandState( 'highlightcode' ) || domUtils.findParent( anchorTd, function ( node ) {
            return node.tagName == "DIV" && /highlighter/.test( node.id );
        } ) ) {

            return;
        }

        if ( evt.button == 2 )return;
        me.document.body.style.webkitUserSelect = '';


        clearSelectedTd( me.currentSelectedArr );
        domUtils.clearSelectedArr( me.currentSelectedArr );
        //åœ¨tdé‡Œè¾¹ç‚¹å‡»ï¼ŒanchorTdä¸�æ˜¯td
        if ( anchorTd.tagName !== 'TD' ) {
            anchorTd = domUtils.findParentByTagName( anchorTd, 'td' ) || anchorTd;
        }

        if ( anchorTd.tagName == 'TD' ) {


            me.addListener( 'mouseover', function ( type, evt ) {
                var tmpTd = evt.target || evt.srcElement;
                _mouseOverEvent.call( me, tmpTd );
                evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
            } );

        } else {


            reset();
        }

    }

    /**
     * é¼ æ ‡ç§»åŠ¨äº‹ä»¶
     * @param tmpTd
     */
    function _mouseOverEvent( tmpTd ) {
        //éœ€è¦�åˆ¤æ–­ä¸¤ä¸ªTDæ˜¯å�¦ä½�äºŽå�Œä¸€ä¸ªè¡¨æ ¼å†…
        if ( anchorTd && tmpTd.tagName == "TD" && domUtils.findParentByTagName( anchorTd, 'table' ) == domUtils.findParentByTagName( tmpTd, 'table' ) ) {
            me.document.body.style.webkitUserSelect = 'none';
            var table = tmpTd.parentNode.parentNode.parentNode;
            me.selection.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();
            var range = _getCellsRange( anchorTd, tmpTd );
            _toggleSelect( table, range );
        }
    }

    /**
     * åˆ‡æ�¢é€‰åŒºçŠ¶æ€�
     * @param table
     * @param cellsRange
     */
    function _toggleSelect( table, cellsRange ) {
        var rows = table.rows;
        clearSelectedTd( me.currentSelectedArr );
        for ( var i = cellsRange.beginRowIndex; i <= cellsRange.endRowIndex; i++ ) {
            for ( var j = cellsRange.beginCellIndex; j <= cellsRange.endCellIndex; j++ ) {
                var td = rows[i].cells[j];
                td.className = "selectTdClass";
                me.currentSelectedArr.push( td );
            }
        }
    }

    //æ›´æ–°rootRowIndxe,rootCellIndex
    function update( table ) {
        var tds = table.getElementsByTagName( 'td' ),
                rowIndex, cellIndex, rows = table.rows;
        for ( var j = 0, tj; tj = tds[j++]; ) {
            if ( !_isHide( tj ) ) {
                rowIndex = tj.parentNode.rowIndex;
                cellIndex = getIndex( tj );
                for ( var r = 0; r < tj.rowSpan; r++ ) {
                    var c = r == 0 ? 1 : 0;
                    for ( ; c < tj.colSpan; c++ ) {
                        var tmp = rows[rowIndex + r].children[cellIndex + c];


                        tmp.setAttribute( 'rootRowIndex', rowIndex );
                        tmp.setAttribute( 'rootCellIndex', cellIndex );

                    }
                }
            }
            if ( !_isHide( tj ) ) {
                domUtils.removeAttributes( tj, ['rootRowIndex', 'rootCellIndex'] );
            }
            if ( tj.colSpan && tj.colSpan == 1 ) {
                tj.removeAttribute( 'colSpan' )
            }
            if ( tj.rowSpan && tj.rowSpan == 1 ) {
                tj.removeAttribute( 'rowSpan' )
            }
            var width;
            if ( !_isHide( tj ) && (width = tj.style.width) && /%/.test( width ) ) {
                tj.style.width = Math.floor( 100 / tj.parentNode.cells.length ) + '%'
            }
        }
    }

    me.adjustTable = function ( cont ) {
        var table = cont.getElementsByTagName( 'table' );
        for ( var i = 0, ti; ti = table[i++]; ) {
            //å¦‚æžœè¡¨æ ¼çš„alignä¸�æ˜¯é»˜è®¤ï¼Œå°†ä¸�å� ä½�,ç»™å�Žè¾¹çš„blockå…ƒç´ è®¾ç½®clear:both
            if ( ti.getAttribute( 'align' ) ) {
                var next = ti.nextSibling;
                while ( next ) {
                    if ( domUtils.isBlockElm( next ) ) {
                        break;
                    }
                    next = next.nextSibling;
                }
                if ( next ) {
                    next.style.clear = 'both';
                }
            }
            if(!ti.getAttribute('border') && !domUtils.getComputedStyle(ti,'border')){
                domUtils.addClass(ti,'noBorderTable')
            }
            ti.removeAttribute( '_innerCreateTable' );
            var tds = domUtils.getElementsByTagName( ti, 'td' ),
                    td, tmpTd;

            for ( var j = 0, tj; tj = tds[j++]; ) {
                if ( domUtils.isEmptyNode( tj ) ) {
                    tj.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                }
                var index = getIndex( tj ),
                        rowIndex = tj.parentNode.rowIndex,
                        rows = domUtils.findParentByTagName( tj, 'table' ).rows;

                for ( var r = 0; r < tj.rowSpan; r++ ) {
                    var c = r == 0 ? 1 : 0;
                    for ( ; c < tj.colSpan; c++ ) {

                        if ( !td ) {
                            td = tj.cloneNode( false );

                            td.rowSpan = td.colSpan = 1;
                            td.style.display = 'none';
                            td.innerHTML = browser.ie ? '' : '<br/>';


                        } else {
                            td = td.cloneNode( true )
                        }

                        td.setAttribute( 'rootRowIndex', tj.parentNode.rowIndex );
                        td.setAttribute( 'rootCellIndex', index );
                        if ( r == 0 ) {
                            if ( tj.nextSibling ) {
                                tj.parentNode.insertBefore( td, tj.nextSibling );
                            } else {
                                tj.parentNode.appendChild( td )
                            }
                        } else {
                            var row;
                            if(!rows[rowIndex + r]){
                               row  = ti.insertRow(rowIndex+r)
                            }else{
                               row = rows[rowIndex + r]
                            }

                            tmpTd = row.children[index];
                            if ( tmpTd ) {
                                tmpTd.parentNode.insertBefore( td, tmpTd )
                            } else {
                                //trace:1032
                                rows[rowIndex + r].appendChild( td )
                            }
                        }


                    }
                }


            }
            var bw = domUtils.getComputedStyle( ti, "border-width" );
            if ( bw == '0px' && ti.style.border!="none" || ((bw == ""||bw =="medium") && ti.getAttribute( "border" ) === "0")) { //trace 2377 ie7ä¸‹èŽ·å�–å®½åº¦å€¼ä¸ºmedium
                domUtils.addClass(ti,"noBorderTable");
            }
        }
        me.fireEvent( "afteradjusttable", cont );
    };
    me.addListener("aftersetcontent",function(){
        me.adjustTable( me.body );
    });

//    me.addListener( 'beforegetcontent', function () {
//        for ( var i = 0, ti, ts = me.document.getElementsByTagName( 'table' ); ti = ts[i++]; ) {
//            var pN = ti.parentNode;
//            if ( pN && pN.getAttribute( 'dropdrag' ) ) {
//                domUtils.remove( pN, true )
//            }
//        }
//    } );
//
//    me.addListener( 'aftergetcontent', function () {
//        if ( !me.queryCommandState( 'source' ) )
//            me.fireEvent( 'afteradjusttable', me.document )
//    } );
//    //tableæ‹–æ‹½
//    me.addListener( "afteradjusttable", function ( type, cont ) {
//        var table = cont.getElementsByTagName( "table" ),
//                dragCont = domUtils.createElement( me.document, 'div', {
//                    style:'margin:0;padding:5px;border:0;',
//                    dropdrag:true
//                } );
//
//        for ( var i = 0, ti; ti = table[i++]; ) {
//            var parentNode = ti.parentNode;
//            if ( parentNode && parentNode.nodeType == 1 ) {
//                //æ�’å…¥ä»£ç �
//                if ( /syntaxhighlighter/.test( parentNode.className ) ) continue;
//                (function ( ti ) {
//                    var div = dragCont.cloneNode( false );
//                    ti.parentNode.insertBefore( div, ti );
//                    div.appendChild( ti );
//                    var borderStyle;
//                    domUtils.on( div, 'mousemove', function ( evt ) {
//                        var tag = evt.srcElement || evt.target;
//                        if ( tag.tagName.toLowerCase() == "div" ) {
//                            if ( ie && me.body.getAttribute( "contentEditable" ) == 'true' )
//                                me.body.setAttribute( "contentEditable", "false" );
//                            borderStyle = clickPosition( ti, this, evt )
//
//                        }
//                    } );
//                    if ( ie ) {
//                        domUtils.on( div, 'mouseleave', function ( evt ) {
//
//                            if ( domUtils.isTagNode( evt.srcElement, "div" ) && me.body.getAttribute( "contentEditable" ) == 'false' ) {
//
//                                me.body.setAttribute( "contentEditable", "true" );
//                            }
//
//
//                        } );
//                    }
//
//                    domUtils.on( div, "mousedown", function ( evt ) {
//
//                        if ( domUtils.isTagNode( evt.srcElement || evt.target, 'div' ) ) {
//                            if ( ie && me.body.getAttribute( "contentEditable" ) == 'true' )
//                                me.body.setAttribute( "contentEditable", "false" );
//                            var tWidth = ti.offsetWidth,
//                                    tHeight = ti.offsetHeight,
//                                    align = ti.getAttribute( 'align' );
//                            try {
//                                baidu.editor.ui.uiUtils.startDrag( evt, {
//                                    ondragstart:function () {
//                                    },
//                                    ondragmove:function ( x, y ) {
//
//                                        if ( align && align != "left" && /\w?w-/.test( borderStyle ) ) {
//                                            x = -x;
//                                        }
//                                        if ( /^s?[we]/.test( borderStyle ) ) {
//                                            ti.setAttribute( "width", (tWidth + x) > 0 ? tWidth + x : 0 );
//                                        }
//                                        if ( /^s/.test( borderStyle ) ) {
//                                            ti.setAttribute( "height", (tHeight + y) > 0 ? tHeight + y : 0 );
//                                        }
//                                    },
//                                    ondragstop:function () {
//                                    }
//                                }, me.document );
//                            } catch ( e ) {
//                                alert( me.getLang("tableDrag"));
//                            }
//
//                        }
//                    } );
//
//                    domUtils.on( ti, "mouseover", function () {
//                        var div = ti.parentNode;
//                        if ( div && div.parentNode && div.getAttribute( 'dropdrag' ) ) {
//                            domUtils.setStyle( div, "cursor", "text" );
//                            if ( ie && me.body.getAttribute( "contentEditable" ) == 'false' )
//                                me.body.setAttribute( "contentEditable", "true" );
//                        }
//
//
//                    } );
//                })( ti );
//
//            }
//        }
//    } );
//    function clickPosition( table, div, evt ) {
//        var pos = domUtils.getXY( table ),
//                tWidth = table.offsetWidth,
//                tHeight = table.offsetHeight,
//                evtPos = {
//                    top:evt.clientY,
//                    left:evt.clientX
//                },
//                borderStyle = "";
//
//        if ( Math.abs( evtPos.left - pos.x - tWidth ) < 15 ) {
//            //å�³ï¼Œå�³ä¸‹
//            borderStyle = Math.abs( evtPos.top - pos.y - tHeight ) < 15 ? "se-resize" : "e-resize";
//        } else if ( Math.abs( evtPos.top - pos.y - tHeight ) < 15 && Math.abs( evtPos.left - pos.x ) < tWidth ) {
//            //ä¸‹
//            borderStyle = "s-resize";
//        }
//        domUtils.setStyle( div, "cursor", borderStyle || 'text' );
//        return borderStyle;
//    }
};

///import core
///commands å�³é”®è�œå�•
///commandsName  ContextMenu
///commandsTitle  å�³é”®è�œå�•
/**
 * å�³é”®è�œå�•
 * @function
 * @name baidu.editor.plugins.contextmenu
 * @author zhanyi
 */

UE.plugins['contextmenu'] = function () {
    var me = this,
            lang = me.getLang( "contextMenu" ),
            menu,
            items = me.options.contextMenu || [
                {label:lang['delete'], cmdName:'delete'},
                {label:lang['selectall'], cmdName:'selectall'},
                {
                    label:lang.deletecode,
                    cmdName:'highlightcode',
                    icon:'deletehighlightcode'
                },
                {
                    label:lang.cleardoc,
                    cmdName:'cleardoc',
                    exec:function () {
                        if ( confirm( lang.confirmclear ) ) {
                            this.execCommand( 'cleardoc' );
                        }
                    }
                },
                '-',
                {
                    label:lang.unlink,
                    cmdName:'unlink'
                },
                '-',
                {
                    group:lang.paragraph,
                    icon:'justifyjustify',
                    subMenu:[
                        {
                            label:lang.justifyleft,
                            cmdName:'justify',
                            value:'left'
                        },
                        {
                            label:lang.justifyright,
                            cmdName:'justify',
                            value:'right'
                        },
                        {
                            label:lang.justifycenter,
                            cmdName:'justify',
                            value:'center'
                        },
                        {
                            label:lang.justifyjustify,
                            cmdName:'justify',
                            value:'justify'
                        }
                    ]
                },
                '-',
                {
                    label:lang.edittable,
                    cmdName:'edittable',
                    exec:function () {
                        this.ui._dialogs['inserttableDialog'].open();
                    }
                },
                {
                    label:lang.edittd,
                    cmdName:'edittd',
                    exec:function () {
                        //å¦‚æžœæ²¡æœ‰åˆ›å»ºï¼Œåˆ›å»ºä¸€ä¸‹å…ˆ
                        if ( UE.ui['edittd'] ) {
                            new UE.ui['edittd']( this );
                        }
                        this.ui._dialogs['edittdDialog'].open();
                    }
                },
                {
                    group:lang.table,
                    icon:'table',
                    subMenu:[
                        {
                            label:lang.inserttable,
                            cmdName:'inserttable'
                        },
                        {
                            label:lang.deletetable,
                            cmdName:'deletetable'
                        },
                        {
                            label:lang.insertparagraphbeforetable,
                            cmdName:'insertparagraphbeforetable'
                        },
                        {
                            label:lang.deleterow,
                            cmdName:'deleterow'
                        },
                        {
                            label:lang.deletecol,
                            cmdName:'deletecol'
                        },
                        {
                            label:lang.insertrow,
                            cmdName:'insertrow'
                        },
                        {
                            label:lang.insertcol,
                            cmdName:'insertcol'
                        },
                        {
                            label:lang.mergeright,
                            cmdName:'mergeright'
                        },
                        {
                            label:lang.mergedown,
                            cmdName:'mergedown'
                        },
                        {
                            label:lang.splittorows,
                            cmdName:'splittorows'
                        },
                        {
                            label:lang.splittocols,
                            cmdName:'splittocols'
                        },
                        {
                            label:lang.mergecells,
                            cmdName:'mergecells'
                        },
                        {
                            label:lang.splittocells,
                            cmdName:'splittocells'
                        }
                    ]
                },
                '-',
                {
                    label:lang['copy'],
                    cmdName:'copy',
                    exec:function () {
                        alert( lang.copymsg );
                    },
                    query:function () {
                        return 0;
                    }
                },
                {
                    label:lang['paste'],
                    cmdName:'paste',
                    exec:function () {
                        alert( lang.pastemsg );
                    },
                    query:function () {
                        return 0;
                    }
                },{
                    label:lang['highlightcode'],
                    cmdName:'highlightcode',
                    exec:function () {
                        if ( UE.ui['highlightcode'] ) {
                            new UE.ui['highlightcode']( this );
                        }
                        this.ui._dialogs['highlightcodeDialog'].open();
                    }
                }
            ];
    if ( !items.length ) {
        return;
    }
    var uiUtils = UE.ui.uiUtils;
    me.addListener( 'contextmenu', function ( type, evt ) {
        var offset = uiUtils.getViewportOffsetByEvent( evt );
        me.fireEvent( 'beforeselectionchange' );
        if ( menu ) {
            menu.destroy();
        }
        for ( var i = 0, ti, contextItems = []; ti = items[i]; i++ ) {
            var last;
            (function ( item ) {
                if ( item == '-' ) {
                    if ( (last = contextItems[contextItems.length - 1 ] ) && last !== '-' ) {
                        contextItems.push( '-' );
                    }
                } else if ( item.hasOwnProperty( "group" ) ) {
                    for ( var j = 0, cj, subMenu = []; cj = item.subMenu[j]; j++ ) {
                        (function ( subItem ) {
                            if ( subItem == '-' ) {
                                if ( (last = subMenu[subMenu.length - 1 ] ) && last !== '-' ) {
                                    subMenu.push( '-' );
                                }
                            } else {
                                if ( (me.commands[subItem.cmdName] || UE.commands[subItem.cmdName] || subItem.query) &&
                                        (subItem.query ? subItem.query() : me.queryCommandState( subItem.cmdName )) > -1 ) {
                                    subMenu.push( {
                                        'label':subItem.label || me.getLang( "contextMenu." + subItem.cmdName + (subItem.value || '') ),
                                        'className':'edui-for-' + subItem.cmdName + (subItem.value || ''),
                                        onclick:subItem.exec ? function () {
                                            subItem.exec.call( me );
                                        } : function () {
                                            me.execCommand( subItem.cmdName, subItem.value );
                                        }
                                    } );
                                }
                            }
                        })( cj );
                    }
                    if ( subMenu.length ) {
                        contextItems.push( {
                            //todo ä¿®æ­£æˆ�è‡ªåŠ¨èŽ·å�–æ–¹å¼�
                            'label':item.icon == "table" ? me.getLang( "contextMenu.table" ) : me.getLang( "contextMenu.paragraph" ),
                            className:'edui-for-' + item.icon,
                            'subMenu':{
                                items:subMenu,
                                editor:me
                            }
                        } );
                    }

                } else {
                    //æœ‰å�¯èƒ½commmandæ²¡æœ‰åŠ è½½å�³é”®ä¸�èƒ½å‡ºæ�¥ï¼Œæˆ–è€…æ²¡æœ‰commandä¹Ÿæƒ³èƒ½å±•ç¤ºå‡ºæ�¥æ·»åŠ queryæ–¹æ³•
                    if ( (me.commands[item.cmdName] || UE.commands[item.cmdName] || item.query) &&
                            (item.query ? item.query.call(me) : me.queryCommandState( item.cmdName )) > -1 ) {
                        //highlight todo
                        if ( item.cmdName == 'highlightcode' ) {
                            if(me.queryCommandState( item.cmdName ) == 1 && item.icon != 'deletehighlightcode'){
                                return;
                            }
                            if(me.queryCommandState( item.cmdName ) != 1 && item.icon == 'deletehighlightcode'){
                                return;
                            }
                        }
                        contextItems.push( {
                            'label':item.label || me.getLang( "contextMenu." + item.cmdName ),
                            className:'edui-for-' + (item.icon ? item.icon : item.cmdName + (item.value || '')),
                            onclick:item.exec ? function () {
                                item.exec.call( me );
                            } : function () {
                                me.execCommand( item.cmdName, item.value );
                            }
                        } );
                    }

                }

            })( ti );
        }
        if ( contextItems[contextItems.length - 1] == '-' ) {
            contextItems.pop();
        }
        menu = new UE.ui.Menu( {
            items:contextItems,
            editor:me
        } );
        menu.render();
        menu.showAt( offset );
        domUtils.preventDefault( evt );
        if ( browser.ie ) {
            var ieRange;
            try {
                ieRange = me.selection.getNative().createRange();
            } catch ( e ) {
                return;
            }
            if ( ieRange.item ) {
                var range = new dom.Range( me.document );
                range.selectNode( ieRange.item( 0 ) ).select( true, true );

            }
        }
    } );
};



///import core
///commands åŠ ç²—,æ–œä½“,ä¸Šæ ‡,ä¸‹æ ‡
///commandsName  Bold,Italic,Subscript,Superscript
///commandsTitle  åŠ ç²—,åŠ æ–œ,ä¸‹æ ‡,ä¸Šæ ‡
/**
 * b u iç­‰åŸºç¡€åŠŸèƒ½å®žçŽ°
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName    boldåŠ ç²—ã€‚italicæ–œä½“ã€‚subscriptä¸Šæ ‡ã€‚superscriptä¸‹æ ‡ã€‚
*/
UE.plugins['basestyle'] = function(){
    var basestyles = {
            'bold':['strong','b'],
            'italic':['em','i'],
            'subscript':['sub'],
            'superscript':['sup']
        },
        getObj = function(editor,tagNames){
            return domUtils.filterNodeList(editor.selection.getStartElementPath(),tagNames);
        },
        me = this;
    for ( var style in basestyles ) {
        (function( cmd, tagNames ) {
            me.commands[cmd] = {
                execCommand : function( cmdName ) {

                    var range = new dom.Range(me.document),obj = '';
                    //tableçš„å¤„ç�†
                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                        for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                            if(ci.style.display != 'none'){
                                range.selectNodeContents(ci).select();
                                //trace:943
                                !obj && (obj = getObj(this,tagNames));
                                if(cmdName == 'superscript' || cmdName == 'subscript'){
                                    
                                    if(!obj || obj.tagName.toLowerCase() != cmdName){
                                        range.removeInlineStyle(['sub','sup']);
                                    }

                                }
                                obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] );
                            }

                        }
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }else{
                        range = me.selection.getRange();
                        obj = getObj(this,tagNames);

                        if ( range.collapsed ) {
                            if ( obj ) {
                                var tmpText =  me.document.createTextNode('');
                                range.insertNode( tmpText ).removeInlineStyle( tagNames );

                                range.setStartBefore(tmpText);
                                domUtils.remove(tmpText);
                            } else {
                                
                                var tmpNode = range.document.createElement( tagNames[0] );
                                if(cmdName == 'superscript' || cmdName == 'subscript'){
                                    tmpText = me.document.createTextNode('');
                                    range.insertNode(tmpText)
                                        .removeInlineStyle(['sub','sup'])
                                        .setStartBefore(tmpText)
                                        .collapse(true);

                                }
                                range.insertNode( tmpNode ).setStart( tmpNode, 0 );
                                


                            }
                            range.collapse( true );

                        } else {
                            if(cmdName == 'superscript' || cmdName == 'subscript'){
                                if(!obj || obj.tagName.toLowerCase() != cmdName){
                                    range.removeInlineStyle(['sub','sup']);
                                }

                            }
                            obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] );
                        }

                        range.select();
                        
                    }

                    return true;
                },
                queryCommandState : function() {
                   if(this.highlight){
                       return -1;
                   }
                   return getObj(this,tagNames) ? 1 : 0;
                }
            };
        })( style, basestyles[style] );

    }
};


///import core
///commands é€‰åŒºè·¯å¾„
///commandsName  ElementPath,elementPathEnabled
///commandsTitle  é€‰åŒºè·¯å¾„
/**
 * é€‰åŒºè·¯å¾„
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName     elementpathé€‰åŒºè·¯å¾„
 */
UE.plugins['elementpath'] = function(){

    var currentLevel,
        tagNames,
        me = this;
    me.setOpt('elementPathEnabled',true);
    if(!me.options.elementPathEnabled){
        return;
    }
    me.commands['elementpath'] = {
        execCommand : function( cmdName, level ) {
            var start = tagNames[level],
                range = me.selection.getRange();
            me.currentSelectedArr && domUtils.clearSelectedArr(me.currentSelectedArr);
            currentLevel = level*1;
            if(dtd.$tableContent[start.tagName]){
                switch (start.tagName){
                    case 'TD':me.currentSelectedArr = [start];
                            start.className = me.options.selectedTdClass;
                            break;
                    case 'TR':
                        var cells = start.cells;
                        for(var i=0,ti;ti=cells[i++];){
                            me.currentSelectedArr.push(ti);
                            ti.className = me.options.selectedTdClass;
                        }
                        break;
                    case 'TABLE':
                    case 'TBODY':

                        var rows = start.rows;
                        for(var i=0,ri;ri=rows[i++];){
                            cells = ri.cells;
                            for(var j=0,tj;tj=cells[j++];){
                                 me.currentSelectedArr.push(tj);
                                tj.className = me.options.selectedTdClass;
                            }
                        }

                }
                start = me.currentSelectedArr[0];
                if(domUtils.isEmptyNode(start)){
                    range.setStart(start,0).setCursor();
                }else{
                   range.selectNodeContents(start).select();
                }
            }else{
                range.selectNode(start).select();

            }
        },
        queryCommandValue : function() {
            //äº§ç”Ÿä¸€ä¸ªå‰¯æœ¬ï¼Œä¸�èƒ½ä¿®æ”¹åŽŸæ�¥çš„startElementPath;
            var parents = [].concat(this.selection.getStartElementPath()).reverse(),
                names = [];
            tagNames = parents;
            for(var i=0,ci;ci=parents[i];i++){
                if(ci.nodeType == 3) {
                    continue;
                }
                var name = ci.tagName.toLowerCase();
                if(name == 'img' && ci.getAttribute('anchorname')){
                    name = 'anchor';
                }
                names[i] = name;
                if(currentLevel == i){
                   currentLevel = -1;
                    break;
                }
            }
            return names;
        }
    };
};


///import core
///import plugins\removeformat.js
///commands æ ¼å¼�åˆ·
///commandsName  FormatMatch
///commandsTitle  æ ¼å¼�åˆ·
/**
 * æ ¼å¼�åˆ·ï¼Œå�ªæ ¼å¼�inlineçš„
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    formatmatchæ‰§è¡Œæ ¼å¼�åˆ·
 */
UE.plugins['formatmatch'] = function(){

    var me = this,
        list = [],img,
        flag = 0;

     me.addListener('reset',function(){
         list = [];
         flag = 0;
     });

    function addList(type,evt){
        
        if(browser.webkit){
            var target = evt.target.tagName == 'IMG' ? evt.target : null;
        }

        function addFormat(range){

            if(text && (!me.currentSelectedArr || !me.currentSelectedArr.length)){
                range.selectNode(text);
            }
            return range.applyInlineStyle(list[list.length-1].tagName,null,list);

        }

        me.undoManger && me.undoManger.save();

        var range = me.selection.getRange(),
            imgT = target || range.getClosedNode();
        if(img && imgT && imgT.tagName == 'IMG'){
            //trace:964

            imgT.style.cssText += ';float:' + (img.style.cssFloat || img.style.styleFloat ||'none') + ';display:' + (img.style.display||'inline');

            img = null;
        }else{
            if(!img){
                var collapsed = range.collapsed;
                if(collapsed){
                    var text = me.document.createTextNode('match');
                    range.insertNode(text).select();


                }
                me.__hasEnterExecCommand = true;
                //ä¸�èƒ½æŠŠblockä¸Šçš„å±žæ€§å¹²æŽ‰
                //trace:1553
                var removeFormatAttributes = me.options.removeFormatAttributes;
                me.options.removeFormatAttributes = '';
                me.execCommand('removeformat');
                me.options.removeFormatAttributes = removeFormatAttributes;
                me.__hasEnterExecCommand = false;
                //trace:969
                range = me.selection.getRange();
                if(list.length == 0){

                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }
                }else{
                    if(me.currentSelectedArr && me.currentSelectedArr.length > 0){

                        for(var i=0,ci;ci=me.currentSelectedArr[i++];){
                            range.selectNodeContents(ci);
                            addFormat(range);

                        }
                        range.selectNodeContents(me.currentSelectedArr[0]).select();
                    }else{


                        addFormat(range);

                    }
                }
                if(!me.currentSelectedArr || !me.currentSelectedArr.length){
                    if(text){
                        range.setStartBefore(text).collapse(true);

                    }

                    range.select();
                }
                text && domUtils.remove(text);
            }

        }




        me.undoManger && me.undoManger.save();
        me.removeListener('mouseup',addList);
        flag = 0;
    }

    me.commands['formatmatch'] = {
        execCommand : function( cmdName ) {
          
            if(flag){
                flag = 0;
                list = [];
                 me.removeListener('mouseup',addList);
                return;
            }


              
            var range = me.selection.getRange();
            img = range.getClosedNode();
            if(!img || img.tagName != 'IMG'){
               range.collapse(true).shrinkBoundary();
               var start = range.startContainer;
               list = domUtils.findParents(start,true,function(node){
                   return !domUtils.isBlockElm(node) && node.nodeType == 1;
               });
               //aä¸�èƒ½åŠ å…¥æ ¼å¼�åˆ·, å¹¶ä¸”å…‹éš†èŠ‚ç‚¹
               for(var i=0,ci;ci=list[i];i++){
                   if(ci.tagName == 'A'){
                       list.splice(i,1);
                       break;
                   }
               }

            }

            me.addListener('mouseup',addList);
            flag = 1;


        },
        queryCommandState : function() {
             if(this.highlight){
                       return -1;
                   }
            return flag;
        },
        notNeedUndo : 1
    };
};


///import core
///commands æŸ¥æ‰¾æ›¿æ�¢
///commandsName  SearchReplace
///commandsTitle  æŸ¥è¯¢æ›¿æ�¢
///commandsDialog  dialogs\searchreplace\searchreplace.html
/**
 * @description æŸ¥æ‰¾æ›¿æ�¢
 * @author zhanyi
 */
UE.plugins['searchreplace'] = function(){

    var currentRange,
        first,
        me = this;
    me.addListener('reset',function(){
        currentRange = null;
        first = null;
    });
    me.commands['searchreplace'] = {

            execCommand : function(cmdName,opt){
               	var me = this,
                    sel = me.selection,
                    range,
                    nativeRange,
                    num = 0,
                opt = utils.extend(opt,{
                    all : false,
                    casesensitive : false,
                    dir : 1
                },true);


                if(browser.ie){
                    while(1){
                        var tmpRange;
                        nativeRange = me.document.selection.createRange();
                        tmpRange = nativeRange.duplicate();
                        tmpRange.moveToElementText(me.document.body);
                        if(opt.all){
                            first = 0;
                            opt.dir = 1;
                            
                            if(currentRange){
                                tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',currentRange);
                            }
                        }else{
                            tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',nativeRange);
                            if(opt.hasOwnProperty("replaceStr")){
                                tmpRange.setEndPoint(opt.dir == -1 ? 'StartToEnd' : 'EndToStart',nativeRange);
                            }
                        }
                        nativeRange = tmpRange.duplicate();



                        if(!tmpRange.findText(opt.searchStr,opt.dir,opt.casesensitive ? 4 : 0)){
                            currentRange = null;
                            tmpRange = me.document.selection.createRange();
                            tmpRange.scrollIntoView();
                            return num;
                        }
                        tmpRange.select();
                        //æ›¿æ�¢
                        if(opt.hasOwnProperty("replaceStr")){
                            range = sel.getRange();
                            range.deleteContents().insertNode(range.document.createTextNode(opt.replaceStr)).select();
                            currentRange = sel.getNative().createRange();

                        }
                        num++;
                        if(!opt.all){
                            break;
                        }
                    }
                }else{
                    var w = me.window,nativeSel = sel.getNative(),tmpRange;
                    while(1){
                        if(opt.all){
                            if(currentRange){
                                currentRange.collapse(false);
                                nativeRange = currentRange;

                            }else{
                                nativeRange  = me.document.createRange();
                                nativeRange.setStart(me.document.body,0);

                            }
                            nativeSel.removeAllRanges();
                            nativeSel.addRange( nativeRange );
                            first = 0;
                            opt.dir = 1;
                        }else{
                            //safariå¼¹å‡ºå±‚ï¼ŒåŽŸç”Ÿå·²ç»�æ‰¾ä¸�åˆ°rangeäº†ï¼Œæ‰€ä»¥éœ€è¦�å…ˆé€‰å›žæ�¥ï¼Œå†�å�–åŽŸç”Ÿ
                            if(browser.safari){
                                me.selection.getRange().select();

                            }
                            nativeRange = w.getSelection().getRangeAt(0);


                           
                            if(opt.hasOwnProperty("replaceStr")){
                                nativeRange.collapse(opt.dir == 1 ? true : false);
                            }
                        }

                        //å¦‚æžœæ˜¯ç¬¬ä¸€æ¬¡å¹¶ä¸”æµ·é€‰ä¸­äº†å†…å®¹é‚£å°±è¦�æ¸…é™¤ï¼Œä¸ºfindå�šå‡†å¤‡
                       
                        if(!first){
                            nativeRange.collapse( opt.dir <0 ? true : false);
                            nativeSel.removeAllRanges();
                            nativeSel.addRange( nativeRange );
                        }else{
                            nativeSel.removeAllRanges();
                        }

                        if(!w.find(opt.searchStr,opt.casesensitive,opt.dir < 0 ? true : false) ) {
                            currentRange = null;
                            nativeSel.removeAllRanges();

                            return num;
                        }
                        first = 0;
                        range = w.getSelection().getRangeAt(0);
                        if(!range.collapsed){

                            if(opt.hasOwnProperty("replaceStr")){
                                range.deleteContents();
                                var text = w.document.createTextNode(opt.replaceStr);
                                range.insertNode(text);
                                range.selectNode(text);
                                nativeSel.addRange(range);
                                currentRange = range.cloneRange();
                            }
                        }
                        num++;
                        if(!opt.all){
                            break;
                        }
                    }

                }
                return true;
            }
    };

};
///import core
///commands è‡ªå®šä¹‰æ ·å¼�
///commandsName  CustomStyle
///commandsTitle  è‡ªå®šä¹‰æ ·å¼�
UE.plugins['customstyle'] = function() {
    var me = this;
    me.setOpt({ 'customstyle':[
        {tag:'h1',name:'tc', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
        {tag:'h1',name:'tl', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;'},
        {tag:'span',name:'im', style:'font-size:16px;font-style:italic;font-weight:bold;line-height:18px;'},
        {tag:'span',name:'hi', style:'font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;'}
    ]});
    me.commands['customstyle'] = {
        execCommand : function(cmdName, obj) {
            var me = this,
                    tagName = obj.tag,
                    node = domUtils.findParent(me.selection.getStart(), function(node) {
                        return node.getAttribute('label');
                    }, true),
                    range,bk,tmpObj = {};
            for (var p in obj) {
               if(obj[p]!==undefined)
                    tmpObj[p] = obj[p];
            }
            delete tmpObj.tag;
            if (node && node.getAttribute('label') == obj.label) {
                range = this.selection.getRange();
                bk = range.createBookmark();
                if (range.collapsed) {
                    //trace:1732 åˆ æŽ‰è‡ªå®šä¹‰æ ‡ç­¾ï¼Œè¦�æœ‰pæ�¥å›žå¡«ç«™ä½�
                    if(dtd.$block[node.tagName]){
                        var fillNode = me.document.createElement('p');
                        domUtils.moveChild(node, fillNode);
                        node.parentNode.insertBefore(fillNode, node);
                        domUtils.remove(node);
                    }else{
                        domUtils.remove(node,true);
                    }

                } else {

                    var common = domUtils.getCommonAncestor(bk.start, bk.end),
                            nodes = domUtils.getElementsByTagName(common, tagName);
                    if(new RegExp(tagName,'i').test(common.tagName)){
                        nodes.push(common);
                    }
                    for (var i = 0,ni; ni = nodes[i++];) {
                        if (ni.getAttribute('label') == obj.label) {
                            var ps = domUtils.getPosition(ni, bk.start),pe = domUtils.getPosition(ni, bk.end);
                            if ((ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                    &&
                                    (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                    )
                                if (dtd.$block[tagName]) {
                                    var fillNode = me.document.createElement('p');
                                    domUtils.moveChild(ni, fillNode);
                                    ni.parentNode.insertBefore(fillNode, ni);
                                }
                            domUtils.remove(ni, true);
                        }
                    }
                    node = domUtils.findParent(common, function(node) {
                        return node.getAttribute('label') == obj.label;
                    }, true);
                    if (node) {

                        domUtils.remove(node, true);

                    }

                }
                range.moveToBookmark(bk).select();
            } else {
                if (dtd.$block[tagName]) {
                    this.execCommand('paragraph', tagName, tmpObj,'customstyle');
                    range = me.selection.getRange();
                    if (!range.collapsed) {
                        range.collapse();
                        node = domUtils.findParent(me.selection.getStart(), function(node) {
                            return node.getAttribute('label') == obj.label;
                        }, true);
                        var pNode = me.document.createElement('p');
                        domUtils.insertAfter(node, pNode);
                        domUtils.fillNode(me.document, pNode);
                        range.setStart(pNode, 0).setCursor();
                    }
                } else {

                    range = me.selection.getRange();
                    if (range.collapsed) {
                        node = me.document.createElement(tagName);
                        domUtils.setAttributes(node, tmpObj);
                        range.insertNode(node).setStart(node, 0).setCursor();

                        return;
                    }

                    bk = range.createBookmark();
                    range.applyInlineStyle(tagName, tmpObj).moveToBookmark(bk).select();
                }
            }

        },
        queryCommandValue : function() {
            var parent = domUtils.filterNodeList(
                this.selection.getStartElementPath(),
                function(node){return node.getAttribute('label')}
            );
            return  parent ? parent.getAttribute('label') : '';
        },
        queryCommandState : function() {
            return this.highlight ? -1 : 0;
        }
    };
    //å½“åŽ»æŽ‰customstyleæ˜¯ï¼Œå¦‚æžœæ˜¯å�—å…ƒç´ ï¼Œç”¨pä»£æ›¿
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if (keyCode == 32 || keyCode == 13) {
            var range = me.selection.getRange();
            if (range.collapsed) {
                var node = domUtils.findParent(me.selection.getStart(), function(node) {
                    return node.getAttribute('label');
                }, true);
                if (node && dtd.$block[node.tagName] && domUtils.isEmptyNode(node)) {
                        var p = me.document.createElement('p');
                        domUtils.insertAfter(node, p);
                        domUtils.fillNode(me.document, p);
                        domUtils.remove(node);
                        range.setStart(p, 0).setCursor();


                }
            }
        }
    });
};
///import core
///commandsName  catchRemoteImage
/**
 * è¿œç¨‹å›¾ç‰‡æŠ“å�–,å½“å¼€å�¯æœ¬æ�’ä»¶æ—¶æ‰€æœ‰ä¸�ç¬¦å�ˆæœ¬åœ°åŸŸå��çš„å›¾ç‰‡éƒ½å°†è¢«æŠ“å�–æˆ�ä¸ºæœ¬åœ°æœ�åŠ¡å™¨ä¸Šçš„å›¾ç‰‡
 *
 */
UE.plugins['catchremoteimage'] = function () {
    if (this.options.catchRemoteImageEnable===false){
        return;
    }
    var me = this;
    this.setOpt({
            localDomain:["127.0.0.1","localhost","img.baidu.com"],
            separater:'ue_separate_ue',
            catchFieldName:"upfile",
            catchRemoteImageEnable:true
        });
    var ajax = UE.ajax,
        localDomain = me.options.localDomain ,
        catcherUrl = me.options.catcherUrl,
        separater = me.options.separater;
    function catchremoteimage(imgs, callbacks) {
        var submitStr = imgs.join(separater);
        var tmpOption = {
            timeout:60000, //å�•ä½�ï¼šæ¯«ç§’ï¼Œå›žè°ƒè¯·æ±‚è¶…æ—¶è®¾ç½®ã€‚ç›®æ ‡ç”¨æˆ·å¦‚æžœç½‘é€Ÿä¸�æ˜¯å¾ˆå¿«çš„è¯�æ­¤å¤„å»ºè®®è®¾ç½®ä¸€ä¸ªè¾ƒå¤§çš„æ•°å€¼
            onsuccess:callbacks["success"],
            onerror:callbacks["error"]
        };
        tmpOption[me.options.catchFieldName] = submitStr;
        ajax.request(catcherUrl, tmpOption);
    }

    me.addListener("afterpaste", function () {
        me.fireEvent("catchRemoteImage");
    });

    me.addListener("catchRemoteImage", function () {
        var remoteImages = [];
        var imgs = domUtils.getElementsByTagName(me.document, "img");
        var test = function (src,urls) {
            for (var j = 0, url; url = urls[j++];) {
                if (src.indexOf(url) !== -1) {
                    return true;
                }
            }
            return false;
        };
        for (var i = 0, ci; ci = imgs[i++];) {
            if (ci.getAttribute("word_img")){
                continue;
            }
            var src = ci.getAttribute("data_ue_src") || ci.src || "";
            if (/^(https?|ftp):/i.test(src) && !test(src,localDomain)) {
                remoteImages.push(src);
            }
        }
        if (remoteImages.length) {
            catchremoteimage(remoteImages, {
                //æˆ�åŠŸæŠ“å�–
                success:function (xhr) {
                    try {
                        var info = eval("(" + xhr.responseText + ")");
                    } catch (e) {
                        return;
                    }
                    var srcUrls = info.srcUrl.split(separater),
                        urls = info.url.split(separater);
                    for (var i = 0, ci; ci = imgs[i++];) {
                        var src = ci.getAttribute("data_ue_src") || ci.src || "";
                        for (var j = 0, cj; cj = srcUrls[j++];) {
                            var url = urls[j - 1];
                            if (src == cj && url != "error") {  //æŠ“å�–å¤±è´¥æ—¶ä¸�å�šæ›¿æ�¢å¤„ç�†
                                //åœ°å�€ä¿®æ­£
                                var newSrc = me.options.catcherPath + url;
                                domUtils.setAttributes(ci, {
                                    "src":newSrc,
                                    "data_ue_src":newSrc
                                });
                                break;
                            }
                        }
                    }
                    me.fireEvent('catchremotesuccess')
                },
                //å›žè°ƒå¤±è´¥ï¼Œæœ¬æ¬¡è¯·æ±‚è¶…æ—¶
                error:function () {
                    me.fireEvent("catchremoteerror");
                }
            });
        }

    });
};
///import core
///commandsName  snapscreen
///commandsTitle  æˆªå±�
/**
 * æˆªå±�æ�’ä»¶
 */
UE.commands['snapscreen'] = {
    execCommand: function(){
        var me = this,lang = me.getLang("snapScreen_plugin");
        me.setOpt({
               snapscreenServerPort: 80                                    //å±�å¹•æˆªå›¾çš„serverç«¯ç«¯å�£
              ,snapscreenImgAlign: 'left'                                //æˆªå›¾çš„å›¾ç‰‡é»˜è®¤çš„æŽ’ç‰ˆæ–¹å¼�
        });
        var editorOptions = me.options;

        if(!browser.ie){
            alert(lang.browserMsg);
            return;
        }

        var onSuccess = function(rs){
            try{
                rs = eval("("+ rs +")");
            }catch(e){
                alert(lang.callBackErrorMsg);
                return;
            }

            if(rs.state != 'SUCCESS'){
                alert(rs.state);
                return;
            }
            me.execCommand('insertimage', {
                src: editorOptions.snapscreenPath + rs.url,
                floatStyle: editorOptions.snapscreenImgAlign,
                data_ue_src:editorOptions.snapscreenPath + rs.url
            });
        };
        var onStartUpload = function(){
            //å¼€å§‹æˆªå›¾ä¸Šä¼ 
        };
        var onError = function(){
            alert(lang.uploadErrorMsg);
        };
        try{
            var nativeObj = new ActiveXObject('Snapsie.CoSnapsie');
            nativeObj.saveSnapshot(editorOptions.snapscreenHost, editorOptions.snapscreenServerUrl, editorOptions.snapscreenServerPort, onStartUpload,onSuccess,onError);
        }catch(e){
            me.ui._dialogs['snapscreenDialog'].open();
        }
    },
    queryCommandState: function(){
        return this.highlight || !browser.ie ? -1 :0;
    }
};

///import core
///commandsName  attachment
///commandsTitle  é™„ä»¶ä¸Šä¼ 
UE.commands["attachment"] = {
    queryCommandState:function(){
        return this.highlight ? -1 :0;
    }
};
/**
 * Created by JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-5-7
 * Time: ä¸‹å�ˆ2:37
 * To change this template use File | Settings | File Templates.
 */
UE.plugins['webapp'] = function () {
    var me = this;
    function createInsertStr( obj, toIframe, addParagraph ) {
        return !toIframe ?
                (addParagraph ? '<p>' : '') + '<img title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"' +
                        ' src="' + me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" style="background:url(' + obj.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="' + obj.url + '" />' +
                        (addParagraph ? '</p>' : '')
                :
                '<iframe class="edui-faked-webapp" title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"  scrolling="no" frameborder="0" src="' + obj.url + '" logo_url = '+obj.logo+'></iframe>';
    }

    function switchImgAndIframe( img2frame ) {
        var tmpdiv,
                nodes = domUtils.getElementsByTagName( me.document, !img2frame ? "iframe" : "img" );
        for ( var i = 0, node; node = nodes[i++]; ) {
            if ( node.className != "edui-faked-webapp" ){
                continue;
            }
            tmpdiv = me.document.createElement( "div" );
            tmpdiv.innerHTML = createInsertStr( img2frame ? {url:node.getAttribute( "_url" ), width:node.width, height:node.height,title:node.title,logo:node.style.backgroundImage.replace("url(","").replace(")","")} : {url:node.getAttribute( "src", 2 ),title:node.title, width:node.width, height:node.height,logo:node.getAttribute("logo_url")}, img2frame ? true : false,false );
            node.parentNode.replaceChild( tmpdiv.firstChild, node );
        }
    }

    me.addListener( "beforegetcontent", function () {
        switchImgAndIframe( true );
    } );
    me.addListener( 'aftersetcontent', function () {
        switchImgAndIframe( false );
    } );
    me.addListener( 'aftergetcontent', function ( cmdName ) {
        if ( cmdName == 'aftergetcontent' && me.queryCommandState( 'source' ) ){
            return;
        }
        switchImgAndIframe( false );
    } );

    me.commands['webapp'] = {
        execCommand:function ( cmd, obj ) {
            me.execCommand( "inserthtml", createInsertStr( obj, false,true ) );
        },
        queryCommandState:function () {
            return me.highlight ? -1 : 0;
        }
    };
};

///import core
///commands æ¨¡æ�¿
///commandsName  template
///commandsTitle  æ¨¡æ�¿
///commandsDialog  dialogs\template\template.html
UE.plugins['template'] = function () {
    UE.commands['template'] = {
        execCommand:function (cmd, obj) {
            obj.html && this.execCommand("inserthtml", obj.html);
        },
        queryCommandState:function () {
            return this.highlight ? -1 : 0;
        }
    };
    this.addListener("click", function (type, evt) {
        var el = evt.target || evt.srcElement,
            range = this.selection.getRange();
        var tnode = domUtils.findParent(el, function (node) {
            if (node.className && domUtils.hasClass(node, "ue_t")) {
                return node;
            }
        }, true);
        tnode && range.selectNode(tnode).shrinkBoundary().select();
    });
    this.addListener("keydown", function (type, evt) {
        var range = this.selection.getRange();
        if (!range.collapsed) {
            if (!evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
                var tnode = domUtils.findParent(range.startContainer, function (node) {
                    if (node.className && domUtils.hasClass(node, "ue_t")) {
                        return node;
                    }
                }, true);
                if (tnode) {
                    domUtils.removeClasses(tnode, ["ue_t"]);
                }
            }
        }
    });
};

///import core
///import plugins/inserthtml.js
///commands éŸ³ä¹�
///commandsName InsertMusic
///commandsTitle  æ�’å…¥éŸ³ä¹�
///commandsDialog  dialogs\music\music.html
UE.plugins['music'] = function () {
    var me = this,
        div;

    /**
     * åˆ›å»ºæ�’å…¥éŸ³ä¹�å­—ç¬¦çªœ
     * @param url éŸ³ä¹�åœ°å�€
     * @param width éŸ³ä¹�å®½åº¦
     * @param height éŸ³ä¹�é«˜åº¦
     * @param align é˜´é›¨å¯¹é½�
     * @param toEmbed æ˜¯å�¦ä»¥flashä»£æ›¿æ˜¾ç¤º
     * @param addParagraph  æ˜¯å�¦éœ€è¦�æ·»åŠ Pæ ‡ç­¾
     */
    function creatInsertStr(url,width,height,align,toEmbed,addParagraph){
        return  !toEmbed ?
            (addParagraph? ('<p '+ (align !="none" ? ( align == "center"? ' style="text-align:center;" ':' style="float:"'+ align ) : '') + '>'): '') +
                '<img align="'+align+'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-music"' +
                ' src="'+me.options.langPath+me.options.lang+'/images/music.png" />' +
                (addParagraph?'</p>':'')
            :
            '<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '" align="' + align + '"' +
                ( align !="none" ? ' style= "'+ ( align == "center"? "display:block;":" float: "+ align )  + '"' :'' ) +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(img2embed) {
        var tmpdiv,
            nodes = domUtils.getElementsByTagName(me.document, !img2embed ? "embed" : "img");
        for (var i = 0, node; node = nodes[i++];) {
            if (node.className != "edui-faked-music") {
                continue;
            }
            tmpdiv = me.document.createElement("div");
            //å…ˆçœ‹floatåœ¨çœ‹align,æµ®åŠ¨æœ‰çš„æ˜¯æ—¶å€™æ˜¯åœ¨floatä¸Šå®šä¹‰çš„
            var align = node.style.cssFloat;
            tmpdiv.innerHTML = creatInsertStr(img2embed ? node.getAttribute("_url") : node.getAttribute("src"), node.width, node.height, node.getAttribute("align"), img2embed);
            node.parentNode.replaceChild(tmpdiv.firstChild, node);
        }
    }

    me.addListener("beforegetcontent", function () {
        switchImgAndEmbed(true);
    });
    me.addListener('aftersetcontent', function () {
        switchImgAndEmbed(false);
    });
    me.addListener('aftergetcontent', function (cmdName) {
        if (cmdName == 'aftergetcontent' && me.queryCommandState('source')) {
            return;
        }
        switchImgAndEmbed(false);
    });

    me.commands["music"] = {
        execCommand:function (cmd, musicObj) {
            var me = this,
                str = creatInsertStr(musicObj.url, musicObj.width || 400, musicObj.height || 95, "none", false, true);
            me.execCommand("inserthtml",str);
        },
        queryCommandState:function () {
            var me = this,
                img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-music");
            return me.highlight ? -1 : (flag ? 1 : 0);
        }
    };
};
var baidu = baidu || {};
baidu.editor = baidu.editor || {};
baidu.editor.ui = {};
(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils;

    var magic = '$EDITORUI';
    var root = window[magic] = {};
    var uidMagic = 'ID' + magic;
    var uidCount = 0;

    var uiUtils = baidu.editor.ui.uiUtils = {
        uid: function (obj){
            return (obj ? obj[uidMagic] || (obj[uidMagic] = ++ uidCount) : ++ uidCount);
        },
        hook: function ( fn, callback ) {
            var dg;
            if (fn && fn._callbacks) {
                dg = fn;
            } else {
                dg = function (){
                    var q;
                    if (fn) {
                        q = fn.apply(this, arguments);
                    }
                    var callbacks = dg._callbacks;
                    var k = callbacks.length;
                    while (k --) {
                        var r = callbacks[k].apply(this, arguments);
                        if (q === undefined) {
                            q = r;
                        }
                    }
                    return q;
                };
                dg._callbacks = [];
            }
            dg._callbacks.push(callback);
            return dg;
        },
        createElementByHtml: function (html){
            var el = document.createElement('div');
            el.innerHTML = html;
            el = el.firstChild;
            el.parentNode.removeChild(el);
            return el;
        },
        getViewportElement: function (){
            return (browser.ie && browser.quirks) ?
                document.body : document.documentElement;
        },
        getClientRect: function (element){
            var bcr;
            //trace  IE6ä¸‹åœ¨æŽ§åˆ¶ç¼–è¾‘å™¨æ˜¾éš�æ—¶å�¯èƒ½ä¼šæŠ¥é”™ï¼Œcatchä¸€ä¸‹
            try{
                bcr = element.getBoundingClientRect();
            }catch(e){
                bcr={left:0,top:0,height:0,width:0}
            }
            var rect = {
                left: Math.round(bcr.left),
                top: Math.round(bcr.top),
                height: Math.round(bcr.bottom - bcr.top),
                width: Math.round(bcr.right - bcr.left)
            };
            var doc;
            while ((doc = element.ownerDocument) !== document &&
                (element = domUtils.getWindow(doc).frameElement)) {
                bcr = element.getBoundingClientRect();
                rect.left += bcr.left;
                rect.top += bcr.top;
            }
            rect.bottom = rect.top + rect.height;
            rect.right = rect.left + rect.width;
            return rect;
        },
        getViewportRect: function (){
            var viewportEl = uiUtils.getViewportElement();
            var width = (window.innerWidth || viewportEl.clientWidth) | 0;
            var height = (window.innerHeight ||viewportEl.clientHeight) | 0;
            return {
                left: 0,
                top: 0,
                height: height,
                width: width,
                bottom: height,
                right: width
            };
        },
        setViewportOffset: function (element, offset){
            var rect;
            var fixedLayer = uiUtils.getFixedLayer();
            if (element.parentNode === fixedLayer) {
                element.style.left = offset.left + 'px';
                element.style.top = offset.top + 'px';
            } else {
                domUtils.setViewportOffset(element, offset);
            }
        },
        getEventOffset: function (evt){
            var el = evt.target || evt.srcElement;
            var rect = uiUtils.getClientRect(el);
            var offset = uiUtils.getViewportOffsetByEvent(evt);
            return {
                left: offset.left - rect.left,
                top: offset.top - rect.top
            };
        },
        getViewportOffsetByEvent: function (evt){
            var el = evt.target || evt.srcElement;
            var frameEl = domUtils.getWindow(el).frameElement;
            var offset = {
                left: evt.clientX,
                top: evt.clientY
            };
            if (frameEl && el.ownerDocument !== document) {
                var rect = uiUtils.getClientRect(frameEl);
                offset.left += rect.left;
                offset.top += rect.top;
            }
            return offset;
        },
        setGlobal: function (id, obj){
            root[id] = obj;
            return magic + '["' + id  + '"]';
        },
        unsetGlobal: function (id){
            delete root[id];
        },
        copyAttributes: function (tgt, src){
            var attributes = src.attributes;
            var k = attributes.length;
            while (k --) {
                var attrNode = attributes[k];
                if ( attrNode.nodeName != 'style' && attrNode.nodeName != 'class' && (!browser.ie || attrNode.specified) ) {
                    tgt.setAttribute(attrNode.nodeName, attrNode.nodeValue);
                }
            }
            if (src.className) {
                domUtils.addClass(tgt,src.className);
            }
            if (src.style.cssText) {
                tgt.style.cssText += ';' + src.style.cssText;
            }
        },
        removeStyle: function (el, styleName){
            if (el.style.removeProperty) {
                el.style.removeProperty(styleName);
            } else if (el.style.removeAttribute) {
                el.style.removeAttribute(styleName);
            } else throw '';
        },
        contains: function (elA, elB){
            return elA && elB && (elA === elB ? false : (
                elA.contains ? elA.contains(elB) :
                    elA.compareDocumentPosition(elB) & 16
                ));
        },
        startDrag: function (evt, callbacks,doc){
            var doc = doc || document;
            var startX = evt.clientX;
            var startY = evt.clientY;
            function handleMouseMove(evt){
                var x = evt.clientX - startX;
                var y = evt.clientY - startY;
                callbacks.ondragmove(x, y);
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                }
            }
            if (doc.addEventListener) {
                function handleMouseUp(evt){
                    doc.removeEventListener('mousemove', handleMouseMove, true);
                    doc.removeEventListener('mouseup', handleMouseMove, true);
                    window.removeEventListener('mouseup', handleMouseUp, true);
                    callbacks.ondragstop();
                }
                doc.addEventListener('mousemove', handleMouseMove, true);
                doc.addEventListener('mouseup', handleMouseUp, true);
                window.addEventListener('mouseup', handleMouseUp, true);

                evt.preventDefault();
            } else {
                var elm = evt.srcElement;
                elm.setCapture();
                function releaseCaptrue(){
                    elm.releaseCapture();
                    elm.detachEvent('onmousemove', handleMouseMove);
                    elm.detachEvent('onmouseup', releaseCaptrue);
                    elm.detachEvent('onlosecaptrue', releaseCaptrue);
                    callbacks.ondragstop();
                }
                elm.attachEvent('onmousemove', handleMouseMove);
                elm.attachEvent('onmouseup', releaseCaptrue);
                elm.attachEvent('onlosecaptrue', releaseCaptrue);
                evt.returnValue = false;
            }
            callbacks.ondragstart();
        },
        getFixedLayer: function (){
            var layer = document.getElementById('edui_fixedlayer');
            if (layer == null) {
                layer = document.createElement('div');
                layer.id = 'edui_fixedlayer';
                document.body.appendChild(layer);
                if (browser.ie && browser.version <= 8) {
                    layer.style.position = 'absolute';
                    bindFixedLayer();
                    setTimeout(updateFixedOffset);
                } else {
                    layer.style.position = 'fixed';
                }
                layer.style.left = '0';
                layer.style.top = '0';
                layer.style.width = '0';
                layer.style.height = '0';
            }
            return layer;
        },
        makeUnselectable: function (element){
            if (browser.opera || (browser.ie && browser.version < 9)) {
                element.unselectable = 'on';
                if (element.hasChildNodes()) {
                    for (var i=0; i<element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType == 1) {
                            uiUtils.makeUnselectable(element.childNodes[i]);
                        }
                    }
                }
            } else {
                if (element.style.MozUserSelect !== undefined) {
                    element.style.MozUserSelect = 'none';
                } else if (element.style.WebkitUserSelect !== undefined) {
                    element.style.WebkitUserSelect = 'none';
                } else if (element.style.KhtmlUserSelect !== undefined) {
                    element.style.KhtmlUserSelect = 'none';
                }
            }
        }
    };
    function updateFixedOffset(){
        var layer = document.getElementById('edui_fixedlayer');
        uiUtils.setViewportOffset(layer, {
            left: 0,
            top: 0
        });
//        layer.style.display = 'none';
//        layer.style.display = 'block';

        //#trace: 1354
//        setTimeout(updateFixedOffset);
    }
    function bindFixedLayer(adjOffset){
        domUtils.on(window, 'scroll', updateFixedOffset);
        domUtils.on(window, 'resize', baidu.editor.utils.defer(updateFixedOffset, 0, true));
    }
})();

(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        EventBase = baidu.editor.EventBase,
        UIBase = baidu.editor.ui.UIBase = function () {
        };

    UIBase.prototype = {
        className:'',
        uiName:'',
        initOptions:function (options) {
            var me = this;
            for (var k in options) {
                me[k] = options[k];
            }
            this.id = this.id || 'edui' + uiUtils.uid();
        },
        initUIBase:function () {
            this._globalKey = utils.unhtml(uiUtils.setGlobal(this.id, this));
        },
        render:function (holder) {
            var html = this.renderHtml();
            var el = uiUtils.createElementByHtml(html);

            //by xuheng ç»™æ¯�ä¸ªnodeæ·»åŠ class
            var list = domUtils.getElementsByTagName(el, "*");
            var theme = "edui-" + (this.theme || this.editor.options.theme);
            var layer = document.getElementById('edui_fixedlayer');
            for (var i = 0, node; node = list[i++];) {
                domUtils.addClass(node, theme);
            }
            domUtils.addClass(el, theme);
            if(layer){
                layer.className="";
                domUtils.addClass(layer,theme);
            }

            var seatEl = this.getDom();
            if (seatEl != null) {
                seatEl.parentNode.replaceChild(el, seatEl);
                uiUtils.copyAttributes(el, seatEl);
            } else {
                if (typeof holder == 'string') {
                    holder = document.getElementById(holder);
                }
                holder = holder || uiUtils.getFixedLayer();
                domUtils.addClass(holder, theme);
                holder.appendChild(el);
            }
            this.postRender();
        },
        getDom:function (name) {
            if (!name) {
                return document.getElementById(this.id);
            } else {
                return document.getElementById(this.id + '_' + name);
            }
        },
        postRender:function () {
            this.fireEvent('postrender');
        },
        getHtmlTpl:function () {
            return '';
        },
        formatHtml:function (tpl) {
            var prefix = 'edui-' + this.uiName;
            return (tpl
                .replace(/##/g, this.id)
                .replace(/%%-/g, this.uiName ? prefix + '-' : '')
                .replace(/%%/g, (this.uiName ? prefix : '') + ' ' + this.className)
                .replace(/\$\$/g, this._globalKey));
        },
        renderHtml:function () {
            return this.formatHtml(this.getHtmlTpl());
        },
        dispose:function () {
            var box = this.getDom();
            if (box) baidu.editor.dom.domUtils.remove(box);
            uiUtils.unsetGlobal(this.id);
        }
    };
    utils.inherits(UIBase, EventBase);
})();

(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Separator = baidu.editor.ui.Separator = function (options){
            this.initOptions(options);
            this.initSeparator();
        };
    Separator.prototype = {
        uiName: 'separator',
        initSeparator: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%"></div>';
        }
    };
    utils.inherits(Separator, UIBase);

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var Mask = baidu.editor.ui.Mask = function (options){
        this.initOptions(options);
        this.initUIBase();
    };
    Mask.prototype = {
        getHtmlTpl: function (){
            return '<div id="##" class="edui-mask %%" onmousedown="return $$._onMouseDown(event, this);"></div>';
        },
        postRender: function (){
            var me = this;
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me._fill();
                    }
                });
            });
        },
        show: function (zIndex){
            this._fill();
            this.getDom().style.display = '';
            this.getDom().style.zIndex = zIndex;
        },
        hide: function (){
            this.getDom().style.display = 'none';
            this.getDom().style.zIndex = '';
        },
        isHidden: function (){
            return this.getDom().style.display == 'none';
        },
        _onMouseDown: function (){
            return false;
        },
        _fill: function (){
            var el = this.getDom();
            var vpRect = uiUtils.getViewportRect();
            el.style.width = vpRect.width + 'px';
            el.style.height = vpRect.height + 'px';
        }
    };
    utils.inherits(Mask, UIBase);
})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup = function (options){
            this.initOptions(options);
            this.initPopup();
        };

    var allPopups = [];
    function closeAllPopup( el ){
        var newAll = [];
        for ( var i = 0; i < allPopups.length; i++ ) {
            var pop = allPopups[i];
            if (!pop.isHidden()) {
                if (pop.queryAutoHide(el) !== false) {
                    pop.hide();
                }
            }
        }
    }

    Popup.postHide = closeAllPopup;

    var ANCHOR_CLASSES = ['edui-anchor-topleft','edui-anchor-topright',
        'edui-anchor-bottomleft','edui-anchor-bottomright'];
    Popup.prototype = {
        SHADOW_RADIUS: 5,
        content: null,
        _hidden: false,
        autoRender: true,
        canSideLeft: true,
        canSideUp: true,
        initPopup: function (){
            this.initUIBase();
            allPopups.push( this );
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-popup %%">' +
                ' <div id="##_body" class="edui-popup-body">' +
                ' <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe>' +
                ' <div class="edui-shadow"></div>' +
                ' <div id="##_content" class="edui-popup-content">' +
                this.getContentHtmlTpl() +
                '  </div>' +
                ' </div>' +
                '</div>';
        },
        getContentHtmlTpl: function (){
            if(this.content){
                if (typeof this.content == 'string') {
                    return this.content;
                }
                return this.content.renderHtml();
            }else{
                return ''
            }

        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            if (this.content instanceof UIBase) {
                this.content.postRender();
            }
            this.fireEvent('postRenderAfter');
            this.hide(true);
            this._UIBase_postRender();
        },
        _doAutoRender: function (){
            if (!this.getDom() && this.autoRender) {
                this.render();
            }
        },
        mesureSize: function (){
            var box = this.getDom('content');
            return uiUtils.getClientRect(box);
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
            popBodyEl.style.width = '';
            popBodyEl.style.height = '';
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        showAnchor: function ( element, hoz ){
            this.showAnchorRect( uiUtils.getClientRect( element ), hoz );
        },
        showAnchorRect: function ( rect, hoz, adj ){
            this._doAutoRender();
            var vpRect = uiUtils.getViewportRect();
            this._show();
            var popSize = this.fitSize();

            var sideLeft, sideUp, left, top;
            if (hoz) {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.left - popSize.width : rect.right);
                top = (sideUp ? rect.bottom - popSize.height : rect.top);
            } else {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.right - popSize.width : rect.left);
                top = (sideUp ? rect.top - popSize.height : rect.bottom);
            }

            var popEl = this.getDom();
            uiUtils.setViewportOffset(popEl, {
                left: left,
                top: top
            });
            domUtils.removeClasses(popEl, ANCHOR_CLASSES);
            popEl.className += ' ' + ANCHOR_CLASSES[(sideUp ? 1 : 0) * 2 + (sideLeft ? 1 : 0)];
            if(this.editor){
                popEl.style.zIndex = this.editor.container.style.zIndex * 1 + 10;
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = popEl.style.zIndex - 1;
            }

        },
        showAt: function (offset) {
            var left = offset.left;
            var top = offset.top;
            var rect = {
                left: left,
                top: top,
                right: left,
                bottom: top,
                height: 0,
                width: 0
            };
            this.showAnchorRect(rect, false, true);
        },
        _show: function (){
            if (this._hidden) {
                var box = this.getDom();
                box.style.display = '';
                this._hidden = false;
//                if (box.setActive) {
//                    box.setActive();
//                }
                this.fireEvent('show');
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        show: function (){
            this._doAutoRender();
            this._show();
        },
        hide: function (notNofity){
            if (!this._hidden && this.getDom()) {
//                this.getDom().style.visibility = 'hidden';
                this.getDom().style.display = 'none';
                this._hidden = true;
                if (!notNofity) {
                    this.fireEvent('hide');
                }
            }
        },
        queryAutoHide: function (el){
            return !el || !uiUtils.contains(this.getDom(), el);
        }
    };
    utils.inherits(Popup, UIBase);
    
    domUtils.on( document, 'mousedown', function ( evt ) {
        var el = evt.target || evt.srcElement;
        closeAllPopup( el );
    } );
    domUtils.on( window, 'scroll', function () {
        closeAllPopup();
    } );

//    var lastVpRect = uiUtils.getViewportRect();
//    domUtils.on( window, 'resize', function () {
//        var vpRect = uiUtils.getViewportRect();
//        if (vpRect.width != lastVpRect.width || vpRect.height != lastVpRect.height) {
//            closeAllPopup();
//        }
//    } );

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        ColorPicker = baidu.editor.ui.ColorPicker = function (options){
            this.initOptions(options);
            this.noColorText = this.noColorText || this.editor.getLang("clearColor");
            this.initUIBase();
        };

    ColorPicker.prototype = {
        getHtmlTpl: function (){
            return genColorPicker(this.noColorText,this.editor);
        },
        _onTableClick: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.fireEvent('pickcolor', color);
            }
        },
        _onTableOver: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.getDom('preview').style.backgroundColor = color;
            }
        },
        _onTableOut: function (){
            this.getDom('preview').style.backgroundColor = '';
        },
        _onPickNoColor: function (){
            this.fireEvent('picknocolor');
        }
    };
    utils.inherits(ColorPicker, UIBase);

    var COLORS = (
            'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
            'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
            'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
            'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
            'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
            '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
            'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

    function genColorPicker(noColorText,editor){
        var html = '<div id="##" class="edui-colorpicker %%">' +
            '<div class="edui-colorpicker-topbar edui-clearfix">' +
             '<div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div>' +
             '<div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+ noColorText +'</div>' +
            '</div>' +
            '<table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0">' +
            '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+editor.getLang("themeColor")+'</td> </tr>'+
            '<tr class="edui-colorpicker-tablefirstrow" >';
        for (var i=0; i<COLORS.length; i++) {
            if (i && i%10 === 0) {
                html += '</tr>'+(i==60?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+editor.getLang("standardColor")+'</td></tr>':'')+'<tr'+(i==60?' class="edui-colorpicker-tablefirstrow"':'')+'>';
            }
            html += i<70 ? '<td style="padding: 0 2px;"><a hidefocus title="'+COLORS[i]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell"' +
                        ' data-color="#'+ COLORS[i] +'"'+
                        ' style="background-color:#'+ COLORS[i] +';border:solid #ccc;'+
                        (i<10 || i>=60?'border-width:1px;':
                         i>=10&&i<20?'border-width:1px 1px 0 1px;':

                        'border-width:0 1px 0 1px;')+
                        '"' +
                    '></a></td>':'';
        }
        html += '</tr></table></div>';
        return html;
    }
})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase;
    
    var TablePicker = baidu.editor.ui.TablePicker = function (options){
        this.initOptions(options);
        this.initTablePicker();
    };
    TablePicker.prototype = {
        defaultNumRows: 10,
        defaultNumCols: 10,
        maxNumRows: 20,
        maxNumCols: 20,
        numRows: 10,
        numCols: 10,
        lengthOfCellSide: 22,
        initTablePicker: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            var me = this;
            return '<div id="##" class="edui-tablepicker %%">' +
                 '<div class="edui-tablepicker-body">' +
                  '<div class="edui-infoarea">' +
                   '<span id="##_label" class="edui-label"></span>' +
                   '<span class="edui-clickable" onclick="$$._onMore();">'+me.editor.getLang("more")+'</span>' +
                  '</div>' +
                  '<div class="edui-pickarea"' +
                   ' onmousemove="$$._onMouseMove(event, this);"' +
                   ' onmouseover="$$._onMouseOver(event, this);"' +
                   ' onmouseout="$$._onMouseOut(event, this);"' +
                   ' onclick="$$._onClick(event, this);"' +
                  '>' +
                    '<div id="##_overlay" class="edui-overlay"></div>' +
                  '</div>' +
                 '</div>' +
                '</div>';
        },
        _UIBase_render: UIBase.prototype.render,
        render: function (holder){
            this._UIBase_render(holder);
            this.getDom('label').innerHTML = '0'+this.editor.getLang("t_row")+' x 0'+this.editor.getLang("t_col");
        },
        _track: function (numCols, numRows){
            var style = this.getDom('overlay').style;
            var sideLen = this.lengthOfCellSide;
            style.width = numCols * sideLen + 'px';
            style.height = numRows * sideLen + 'px';
            var label = this.getDom('label');
            label.innerHTML = numCols +this.editor.getLang("t_col")+' x ' + numRows + this.editor.getLang("t_row");
            this.numCols = numCols;
            this.numRows = numRows;
        },
        _onMouseOver: function (evt, el){
            var rel = evt.relatedTarget || evt.fromElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
                this.getDom('overlay').style.visibility = '';
            }
        },
        _onMouseOut: function (evt, el){
            var rel = evt.relatedTarget || evt.toElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
                this.getDom('overlay').style.visibility = 'hidden';
            }
        },
        _onMouseMove: function (evt, el){
            var style = this.getDom('overlay').style;
            var offset = uiUtils.getEventOffset(evt);
            var sideLen = this.lengthOfCellSide;
            var numCols = Math.ceil(offset.left / sideLen);
            var numRows = Math.ceil(offset.top / sideLen);
            this._track(numCols, numRows);
        },
        _onClick: function (){
            this.fireEvent('picktable', this.numCols, this.numRows);
        },
        _onMore: function (){
            this.fireEvent('more');
        }
    };
    utils.inherits(TablePicker, UIBase);
})();

(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var TPL_STATEFUL = 'onmousedown="$$.Stateful_onMouseDown(event, this);"' +
        ' onmouseup="$$.Stateful_onMouseUp(event, this);"' +
        ( browser.ie ? (
        ' onmouseenter="$$.Stateful_onMouseEnter(event, this);"' +
        ' onmouseleave="$$.Stateful_onMouseLeave(event, this);"' )
        : (
        ' onmouseover="$$.Stateful_onMouseOver(event, this);"' +
        ' onmouseout="$$.Stateful_onMouseOut(event, this);"' ));
    
    baidu.editor.ui.Stateful = {
        alwalysHoverable: false,
        Stateful_init: function (){
            this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
            this.getHtmlTpl = this.Stateful_getHtmlTpl;
        },
        Stateful_getHtmlTpl: function (){
            var tpl = this._Stateful_dGetHtmlTpl();
            // ä½¿ç”¨functioné�¿å…�$è½¬ä¹‰
            return tpl.replace(/stateful/g, function (){ return TPL_STATEFUL; });
        },
        Stateful_onMouseEnter: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.addState('hover');
                this.fireEvent('over');
            }
        },
        Stateful_onMouseLeave: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.removeState('hover');
                this.removeState('active');
                this.fireEvent('out');
            }
        },
        Stateful_onMouseOver: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseEnter(evt, el);
            }
        },
        Stateful_onMouseOut: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseLeave(evt, el);
            }
        },
        Stateful_onMouseDown: function (evt, el){
            if (!this.isDisabled()) {
                this.addState('active');
            }
        },
        Stateful_onMouseUp: function (evt, el){
            if (!this.isDisabled()) {
                this.removeState('active');
            }
        },
        Stateful_postRender: function (){
            if (this.disabled && !this.hasState('disabled')) {
                this.addState('disabled');
            }
        },
        hasState: function (state){
            return domUtils.hasClass(this.getStateDom(), 'edui-state-' + state);
        },
        addState: function (state){
            if (!this.hasState(state)) {
                this.getStateDom().className += ' edui-state-' + state;
            }
        },
        removeState: function (state){
            if (this.hasState(state)) {
                domUtils.removeClasses(this.getStateDom(), ['edui-state-' + state]);
            }
        },
        getStateDom: function (){
            return this.getDom('state');
        },
        isChecked: function (){
            return this.hasState('checked');
        },
        setChecked: function (checked){
            if (!this.isDisabled() && checked) {
                this.addState('checked');
            } else {
                this.removeState('checked');
            }
        },
        isDisabled: function (){
            return this.hasState('disabled');
        },
        setDisabled: function (disabled){
            if (disabled) {
                this.removeState('hover');
                this.removeState('checked');
                this.removeState('active');
                this.addState('disabled');
            } else {
                this.removeState('disabled');
            }
        }
    };
})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        Button = baidu.editor.ui.Button = function (options){
            this.initOptions(options);
            this.initButton();
        };
    Button.prototype = {
        uiName: 'button',
        label: '',
        title: '',
        showIcon: true,
        showText: true,
        initButton: function (){
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div id="##_state" stateful>' +
                 '<div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : '') +
                 ' class="%%-body" onmousedown="return false;" onclick="return $$._onClick();">' +
                  (this.showIcon ? '<div class="edui-box edui-icon"></div>' : '') +
                  (this.showText ? '<div class="edui-box edui-label">' + this.label + '</div>' : '') +
                 '</div>' +
                '</div>' +
                '</div></div>';
        },
        postRender: function (){
            this.Stateful_postRender();
            this.setDisabled(this.disabled)
        },
        _onClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('click');
            }
        }
    };
    utils.inherits(Button, UIBase);
    utils.extend(Button.prototype, Stateful);

})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        SplitButton = baidu.editor.ui.SplitButton = function (options){
            this.initOptions(options);
            this.initSplitButton();
        };
    SplitButton.prototype = {
        popup: null,
        uiName: 'splitbutton',
        title: '',
        initSplitButton: function (){
            this.initUIBase();
            this.Stateful_init();
            var me = this;
            if (this.popup != null) {
                var popup = this.popup;
                this.popup = null;
                this.setPopup(popup);
            }
        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            this.Stateful_postRender();
            this._UIBase_postRender();
        },
        setPopup: function (popup){
            if (this.popup === popup) return;
            if (this.popup != null) {
                this.popup.dispose();
            }
            popup.addListener('show', utils.bind(this._onPopupShow, this));
            popup.addListener('hide', utils.bind(this._onPopupHide, this));
            popup.addListener('postrender', utils.bind(function (){
                popup.getDom('body').appendChild(
                    uiUtils.createElementByHtml('<div id="' +
                        this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' +
                        (uiUtils.getClientRect(this.getDom()).width - 2) + 'px"></div>')
                    );
                popup.getDom().className += ' ' + this.className;
            }, this));
            this.popup = popup;
        },
        _onPopupShow: function (){
            this.addState('opened');
        },
        _onPopupHide: function (){
            this.removeState('opened');
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div '+ (this.title ? 'title="' + this.title + '"' : '') +' id="##_state" stateful><div class="%%-body">' +
                '<div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);">' +
                '<div class="edui-box edui-icon"></div>' +
                '</div>' +
                '<div class="edui-box edui-splitborder"></div>' +
                '<div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div>' +
                '</div></div></div>';
        },
        showPopup: function (){
            // å½“popupå¾€ä¸Šå¼¹å‡ºçš„æ—¶å€™ï¼Œå�šç‰¹æ®Šå¤„ç�†
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top -= this.popup.SHADOW_RADIUS;
            rect.height += this.popup.SHADOW_RADIUS;
            this.popup.showAnchorRect(rect);
        },
        _onArrowClick: function (event, el){
            if (!this.isDisabled()) {
                this.showPopup();
            }
        },
        _onButtonClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('buttonclick');
            }
        }
    };
    utils.inherits(SplitButton, UIBase);
    utils.extend(SplitButton.prototype, Stateful, true);

})();

///import core
///import uicore
///import ui/colorpicker.js
///import ui/popup.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        ColorPicker = baidu.editor.ui.ColorPicker,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        ColorButton = baidu.editor.ui.ColorButton = function (options){
            this.initOptions(options);
            this.initColorButton();
        };
    ColorButton.prototype = {
        initColorButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new ColorPicker({
                    noColorText: me.editor.getLang("clearColor"),
                    editor:me.editor,
                    onpickcolor: function (t, color){
                        me._onPickColor(color);
                    },
                    onpicknocolor: function (t, color){
                        me._onPickNoColor(color);
                    }
                }),
                editor:me.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.getDom('button_body').appendChild(
                uiUtils.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>')
                );
            this.getDom().className += ' edui-colorbutton';
        },
        setColor: function (color){
            this.getDom('colorlump').style.backgroundColor = color;
            this.color = color;
        },
        _onPickColor: function (color){
            if (this.fireEvent('pickcolor', color) !== false) {
                this.setColor(color);
                this.popup.hide();
            }
        },
        _onPickNoColor: function (color){
            if (this.fireEvent('picknocolor') !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(ColorButton, SplitButton);

})();

///import core
///import uicore
///import ui/popup.js
///import ui/tablepicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        TablePicker = baidu.editor.ui.TablePicker,
        SplitButton = baidu.editor.ui.SplitButton,
        TableButton = baidu.editor.ui.TableButton = function (options){
            this.initOptions(options);
            this.initTableButton();
        };
    TableButton.prototype = {
        initTableButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new TablePicker({
                    editor:me.editor,
                    onpicktable: function (t, numCols, numRows){
                        me._onPickTable(numCols, numRows);
                    },
                    onmore: function (){
                        me.popup.hide();
                        me.fireEvent('more');
                    }
                }),
                'editor':me.editor
            });
            this.initSplitButton();
        },
        _onPickTable: function (numCols, numRows){
            if (this.fireEvent('picktable', numCols, numRows) !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(TableButton, SplitButton);

})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase;

    var AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker = function (options) {
        this.initOptions(options);
        this.initAutoTypeSetPicker();
    };
    AutoTypeSetPicker.prototype = {
        initAutoTypeSetPicker:function () {
            this.initUIBase();
        },
        getHtmlTpl:function () {
            var me = this.editor,
                opt = me.options.autotypeset,
                lang = me.getLang("autoTypeSet");

            return '<div id="##" class="edui-autotypesetpicker %%">' +
                '<div class="edui-autotypesetpicker-body">' +
                '<table >' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="mergeEmptyline" ' + (opt["mergeEmptyline"] ? "checked" : "" ) + '>' + lang.mergeLine + '</td><td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (opt["removeEmptyline"] ? "checked" : "" ) + '>' + lang.delLine + '</td></tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="removeClass" ' + (opt["removeClass"] ? "checked" : "" ) + '>' + lang.removeFormat + '</td><td colspan="2"><input type="checkbox" name="indent" ' + (opt["indent"] ? "checked" : "" ) + '>' + lang.indent + '</td></tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="textAlign" ' + (opt["textAlign"] ? "checked" : "" ) + '>' + lang.alignment + '</td><td colspan="2" id="textAlignValue"><input type="radio" name="textAlignValue" value="left" ' + ((opt["textAlign"] && opt["textAlign"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") + '<input type="radio" name="textAlignValue" value="center" ' + ((opt["textAlign"] && opt["textAlign"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") + '<input type="radio" name="textAlignValue" value="right" ' + ((opt["textAlign"] && opt["textAlign"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") + ' </tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="imageBlockLine" ' + (opt["imageBlockLine"] ? "checked" : "" ) + '>' + lang.imageFloat + '</td>' +
                '<td nowrap colspan="2" id="imageBlockLineValue">' +
                '<input type="radio" name="imageBlockLineValue" value="none" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "none") ? "checked" : "") + '>' + me.getLang("default") +
                '<input type="radio" name="imageBlockLineValue" value="left" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") +
                '<input type="radio" name="imageBlockLineValue" value="center" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") +
                '<input type="radio" name="imageBlockLineValue" value="right" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") + '</tr>' +

                '<tr><td nowrap colspan="2"><input type="checkbox" name="clearFontSize" ' + (opt["clearFontSize"] ? "checked" : "" ) + '>' + lang.removeFontsize + '</td><td colspan="2"><input type="checkbox" name="clearFontFamily" ' + (opt["clearFontFamily"] ? "checked" : "" ) + '>' + lang.removeFontFamily + '</td></tr>' +
                '<tr><td nowrap colspan="4"><input type="checkbox" name="removeEmptyNode" ' + (opt["removeEmptyNode"] ? "checked" : "" ) + '>' + lang.removeHtml + '</td></tr>' +
                '<tr><td nowrap colspan="4"><input type="checkbox" name="pasteFilter" ' + (opt["pasteFilter"] ? "checked" : "" ) + '>' + lang.pasteFilter + '</td></tr>' +
                '<tr><td nowrap colspan="4" align="right"><button >' + lang.run + '</button></td></tr>' +
                '</table>' +
                '</div>' +
                '</div>';


        },
        _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(AutoTypeSetPicker, UIBase);
})();

///import core
///import uicore
///import ui/popup.js
///import ui/autotypesetpicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker,
        SplitButton = baidu.editor.ui.SplitButton,
        AutoTypeSetButton = baidu.editor.ui.AutoTypeSetButton = function (options){
            this.initOptions(options);
            this.initAutoTypeSetButton();
        };
    function getPara(me){
        var opt = me.editor.options.autotypeset,
            cont = me.getDom(),
            ipts = domUtils.getElementsByTagName(cont,"input");
        for(var i=ipts.length-1,ipt;ipt=ipts[i--];){
            if(ipt.getAttribute("type")=="checkbox"){
                var attrName = ipt.getAttribute("name");
                opt[attrName] && delete opt[attrName];
                if(ipt.checked){
                    var attrValue = document.getElementById(attrName+"Value");
                    if(attrValue){
                        if(/input/ig.test(attrValue.tagName)){
                            opt[attrName] = attrValue.value;
                        }else{
                            var iptChilds = attrValue.getElementsByTagName("input");
                            for(var j=iptChilds.length-1,iptchild;iptchild=iptChilds[j--];){
                                if(iptchild.checked){
                                    opt[attrName] = iptchild.value;
                                    break;
                                }
                            }
                        }
                    }else{
                        opt[attrName] = true;
                    }
                }
            }
        }
        var selects = domUtils.getElementsByTagName(cont,"select");
        for(var i=0,si;si=selects[i++];){
            var attr = si.getAttribute('name');
            opt[attr] = opt[attr] ? si.value : '';
        }
        me.editor.options.autotypeset = opt;
    }
    AutoTypeSetButton.prototype = {
        initAutoTypeSetButton: function (){
            var me = this;
            this.popup = new Popup({
                //ä¼ å…¥é…�ç½®å�‚æ•°
                content: new AutoTypeSetPicker({editor:me.editor}),
                'editor':me.editor,
                hide : function(){

                    if (!this._hidden && this.getDom()) {
                        getPara(this);
                        this.getDom().style.display = 'none';
                        this._hidden = true;
                        this.fireEvent('hide');
                    }
                }
            });
            var flag = 0;
            this.popup.addListener('postRenderAfter',function(){
                var popupUI = this;
                if(flag)return;
                var cont = this.getDom(),
                    btn = cont.getElementsByTagName('button')[0];
                btn.onclick = function(){
                    getPara(popupUI);
                    me.editor.execCommand('autotypeset');
                    popupUI.hide()
                };
                flag = 1;
            });
            this.initSplitButton();
        }
    };
    utils.inherits(AutoTypeSetButton, SplitButton);

})();

(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Toolbar = baidu.editor.ui.Toolbar = function (options){
            this.initOptions(options);
            this.initToolbar();
        };
    Toolbar.prototype = {
        items: null,
        initToolbar: function (){
            this.items = this.items || [];
            this.initUIBase();
        },
        add: function (item){
            this.items.push(item);
        },
        getHtmlTpl: function (){
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                buff[i] = this.items[i].renderHtml();
            }
            return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' +
                buff.join('') +
                '</div>'
        },
        postRender: function (){
            var box = this.getDom();
            for (var i=0; i<this.items.length; i++) {
                this.items[i].postRender();
            }
            uiUtils.makeUnselectable(box);
        },
        _onMouseDown: function (){
            return false;
        }
    };
    utils.inherits(Toolbar, UIBase);

})();

///import core
///import uicore
///import ui\popup.js
///import ui\stateful.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup,
        Stateful = baidu.editor.ui.Stateful,
        Menu = baidu.editor.ui.Menu = function (options){
            this.initOptions(options);
            this.initMenu();
        };

    var menuSeparator = {
        renderHtml: function (){
            return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>';
        },
        postRender: function (){},
        queryAutoHide: function (){ return true; }
    };
    Menu.prototype = {
        items: null,
        uiName: 'menu',
        initMenu: function (){
            this.items = this.items || [];
            this.initPopup();
            this.initItems();
        },
        initItems: function (){
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                if (item == '-') {
                    this.items[i] = this.getSeparator();
                } else if (!(item instanceof MenuItem)) {
                    item.theme=this.editor.options.theme;
                    this.items[i] = this.createItem(item);
                }
            }
        },
        getSeparator: function (){
            return menuSeparator;
        },
        createItem: function (item){
            return new MenuItem(item);
        },
        _Popup_getContentHtmlTpl: Popup.prototype.getContentHtmlTpl,
        getContentHtmlTpl: function (){
            if (this.items.length == 0) {
                return this._Popup_getContentHtmlTpl();
            }
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                buff[i] = item.renderHtml();
            }
            return ('<div class="%%-body">' + buff.join('') + '</div>');
        },
        _Popup_postRender: Popup.prototype.postRender,
        postRender: function (){
            var me = this;
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.ownerMenu = this;
                item.postRender();
            }
            domUtils.on(this.getDom(), 'mouseover', function (evt){
                evt = evt || event;
                var rel = evt.relatedTarget || evt.fromElement;
                var el = me.getDom();
                if (!uiUtils.contains(el, rel) && el !== rel) {
                    me.fireEvent('over');
                }
            });
            this._Popup_postRender();
        },
        queryAutoHide: function (el){
            if (el) {
                if (uiUtils.contains(this.getDom(), el)) {
                    return false;
                }
                for (var i=0; i<this.items.length; i++) {
                    var item = this.items[i];
                    if (item.queryAutoHide(el) === false) {
                        return false;
                    }
                }
            }
        },
        clearItems: function (){
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                clearTimeout(item._showingTimer);
                clearTimeout(item._closingTimer);
                if (item.subMenu) {
                    item.subMenu.destroy();
                }
            }
            this.items = [];
        },
        destroy: function (){
            if (this.getDom()) {
                domUtils.remove(this.getDom());
            }
            this.clearItems();
        },
        dispose: function (){
            this.destroy();
        }
    };
    utils.inherits(Menu, Popup);
    
    var MenuItem = baidu.editor.ui.MenuItem = function (options){
        this.initOptions(options);
        this.initUIBase();
        this.Stateful_init();
        if (this.subMenu && !(this.subMenu instanceof Menu)) {
            this.subMenu = new Menu(this.subMenu);
        }
    };
    MenuItem.prototype = {
        label: '',
        subMenu: null,
        ownerMenu: null,
        uiName: 'menuitem',
        alwalysHoverable: true,
        getHtmlTpl: function (){
            return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);">' +
                '<div class="%%-body">' +
                this.renderLabelHtml() +
                '</div>' +
                '</div>';
        },
        postRender: function (){
            var me = this;
            this.addListener('over', function (){
                me.ownerMenu.fireEvent('submenuover', me);
                if (me.subMenu) {
                    me.delayShowSubMenu();
                }
            });
            if (this.subMenu) {
                this.getDom().className += ' edui-hassubmenu';
                this.subMenu.render();
                this.addListener('out', function (){
                    me.delayHideSubMenu();
                });
                this.subMenu.addListener('over', function (){
                    clearTimeout(me._closingTimer);
                    me._closingTimer = null;
                    me.addState('opened');
                });
                this.ownerMenu.addListener('hide', function (){
                    me.hideSubMenu();
                });
                this.ownerMenu.addListener('submenuover', function (t, subMenu){
                    if (subMenu !== me) {
                        me.delayHideSubMenu();
                    }
                });
                this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide;
                this.subMenu.queryAutoHide = function (el){
                    if (el && uiUtils.contains(me.getDom(), el)) {
                        return false;
                    }
                    return this._bakQueryAutoHide(el);
                };
            }
            this.getDom().style.tabIndex = '-1';
            uiUtils.makeUnselectable(this.getDom());
            this.Stateful_postRender();
        },
        delayShowSubMenu: function (){
            var me = this;
            if (!me.isDisabled()) {
                me.addState('opened');
                clearTimeout(me._showingTimer);
                clearTimeout(me._closingTimer);
                me._closingTimer = null;
                me._showingTimer = setTimeout(function (){
                    me.showSubMenu();
                }, 250);
            }
        },
        delayHideSubMenu: function (){
            var me = this;
            if (!me.isDisabled()) {
                me.removeState('opened');
                clearTimeout(me._showingTimer);
                if (!me._closingTimer) {
                    me._closingTimer = setTimeout(function (){
                        if (!me.hasState('opened')) {
                            me.hideSubMenu();
                        }
                        me._closingTimer = null;
                    }, 400);
                }
            }
        },
        renderLabelHtml: function (){
            return '<div class="edui-arrow"></div>' +
                '<div class="edui-box edui-icon"></div>' +
                '<div class="edui-box edui-label %%-label">' + (this.label || '') + '</div>';
        },
        getStateDom: function (){
            return this.getDom();
        },
        queryAutoHide: function (el){
            if (this.subMenu && this.hasState('opened')) {
                return this.subMenu.queryAutoHide(el);
            }
        },
        _onClick: function (event, this_){
            if (this.hasState('disabled')) return;
            if (this.fireEvent('click', event, this_) !== false) {
                if (this.subMenu) {
                    this.showSubMenu();
                } else {
                    Popup.postHide();
                }
            }
        },
        showSubMenu: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.right -= 5;
            rect.left += 2;
            rect.width -= 7;
            rect.top -= 4;
            rect.bottom += 4;
            rect.height += 8;
            this.subMenu.showAnchorRect(rect, true, true);
        },
        hideSubMenu: function (){
            this.subMenu.hide();
        }
    };
    utils.inherits(MenuItem, UIBase);
    utils.extend(MenuItem.prototype, Stateful, true);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    // todo: menuå’Œitemæ��æˆ�é€šç”¨list
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        Combox = baidu.editor.ui.Combox = function (options){
            this.initOptions(options);
            this.initCombox();
        };
    Combox.prototype = {
        uiName: 'combox',
        initCombox: function (){
            var me = this;
            this.items = this.items || [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.uiName = 'listitem';
                item.index = i;
                item.onclick = function (){
                    me.selectByIndex(this.index);
                };
            }
            this.popup = new Menu({
                items: this.items,
                uiName: 'list',
                editor:this.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.setLabel(this.label || '');
            this.setValue(this.initValue || '');
        },
        showPopup: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top += 1;
            rect.bottom -= 1;
            rect.height -= 2;
            this.popup.showAnchorRect(rect);
        },
        getValue: function (){
            return this.value;
        },
        setValue: function (value){
            var index = this.indexByValue(value);
            if (index != -1) {
                this.selectedIndex = index;
                this.setLabel(this.items[index].label);
                this.value = this.items[index].value;
            } else {
                this.selectedIndex = -1;
                this.setLabel(this.getLabelForUnknowValue(value));
                this.value = value;
            }
        },
        setLabel: function (label){
            this.getDom('button_body').innerHTML = label;
            this.label = label;
        },
        getLabelForUnknowValue: function (value){
            return value;
        },
        indexByValue: function (value){
            for (var i=0; i<this.items.length; i++) {
                if (value == this.items[i].value) {
                    return i;
                }
            }
            return -1;
        },
        getItem: function (index){
            return this.items[index];
        },
        selectByIndex: function (index){
            if (index < this.items.length && this.fireEvent('select', index) !== false) {
                this.selectedIndex = index;
                this.value = this.items[index].value;
                this.setLabel(this.items[index].label);
            }
        }
    };
    utils.inherits(Combox, SplitButton);
})();

///import core
///import uicore
///import ui/mask.js
///import ui/button.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        Mask = baidu.editor.ui.Mask,
        UIBase = baidu.editor.ui.UIBase,
        Button = baidu.editor.ui.Button,
        Dialog = baidu.editor.ui.Dialog = function (options){
            this.initOptions(utils.extend({
                autoReset: true,
                draggable: true,
                onok: function (){},
                oncancel: function (){},
                onclose: function (t, ok){
                    return ok ? this.onok() : this.oncancel();
                }
            },options));
            this.initDialog();
        };
    var modalMask;
    var dragMask;
    Dialog.prototype = {
        draggable: false,
        uiName: 'dialog',
        initDialog: function (){
            var me = this,
                theme=this.editor.options.theme;
            this.initUIBase();
            this.modalMask = (modalMask || (modalMask = new Mask({
                className: 'edui-dialog-modalmask',
                theme:theme
            })));
            this.dragMask = (dragMask || (dragMask = new Mask({
                className: 'edui-dialog-dragmask',
                theme:theme
            })));
            this.closeButton = new Button({
                className: 'edui-dialog-closebutton',
                title: me.closeDialog,
                theme:theme,
                onclick: function (){
                    me.close(false);
                }
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    if (!(this.buttons[i] instanceof Button)) {
                        this.buttons[i] = new Button(this.buttons[i]);
                    }
                }
            }
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
//            if (!(baidu.editor.browser.ie && baidu.editor.browser.version == 7)) {
//                uiUtils.removeStyle(popBodyEl, 'width');
//                uiUtils.removeStyle(popBodyEl, 'height');
//            }
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        safeSetOffset: function (offset){
            var me = this;
            var el = me.getDom();
            var vpRect = uiUtils.getViewportRect();
            var rect = uiUtils.getClientRect(el);
            var left = offset.left;
            if (left + rect.width > vpRect.right) {
                left = vpRect.right - rect.width;
            }
            var top = offset.top;
            if (top + rect.height > vpRect.bottom) {
                top = vpRect.bottom - rect.height;
            }
            el.style.left = Math.max(left, 0) + 'px';
            el.style.top = Math.max(top, 0) + 'px';
        },
        showAtCenter: function (){
            this.getDom().style.display = '';
            var vpRect = uiUtils.getViewportRect();
            var popSize = this.fitSize();
            var titleHeight = this.getDom('titlebar').offsetHeight | 0;
            var left = vpRect.width / 2 - popSize.width / 2;
            var top = vpRect.height / 2 - (popSize.height - titleHeight) / 2 - titleHeight;
            var popEl = this.getDom();
            this.safeSetOffset({
                left: Math.max(left | 0, 0),
                top: Math.max(top | 0, 0)
            });
            if (!domUtils.hasClass(popEl, 'edui-state-centered')) {
                popEl.className += ' edui-state-centered';
            }
            this._show();
        },
        getContentHtml: function (){
            var contentHtml = '';
            if (typeof this.content == 'string') {
                contentHtml = this.content;
            } else if (this.iframeUrl) {
                contentHtml = '<span id="'+ this.id +'_contmask" class="dialogcontmask"></span><iframe id="'+ this.id +
                    '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+ this.iframeUrl +'"></iframe>';
            }
            return contentHtml;
        },
        getHtmlTpl: function (){
            var footHtml = '';

            if (this.buttons) {
                var buff = [];
                for (var i=0; i<this.buttons.length; i++) {
                    buff[i] = this.buttons[i].renderHtml();
                }
                footHtml = '<div class="%%-foot">' +
                     '<div id="##_buttons" class="%%-buttons">' + buff.join('') + '</div>' +
                    '</div>';
            }
            return '<div id="##" class="%%"><div class="%%-wrap"><div id="##_body" class="%%-body">' +
                '<div class="%%-shadow"></div>' +
                '<div id="##_titlebar" class="%%-titlebar">' +
                '<div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);">' +
                 '<span class="%%-caption">' + (this.title || '') + '</span>' +
                '</div>' +
                this.closeButton.renderHtml() +
                '</div>' +
                '<div id="##_content" class="%%-content">'+ ( this.autoReset ? '' : this.getContentHtml()) +'</div>' +
                footHtml +
                '</div></div></div>';
        },
        postRender: function (){
            // todo: ä¿�æŒ�å±…ä¸­/è®°ä½�ä¸Šæ¬¡å…³é—­ä½�ç½®é€‰é¡¹
            if (!this.modalMask.getDom()) {
                this.modalMask.render();
                this.modalMask.hide();
            }
            if (!this.dragMask.getDom()) {
                this.dragMask.render();
                this.dragMask.hide();
            }
            var me = this;
            this.addListener('show', function (){
                me.modalMask.show(this.getDom().style.zIndex - 2);
            });
            this.addListener('hide', function (){
                me.modalMask.hide();
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    this.buttons[i].postRender();
                }
            }
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me.safeSetOffset(uiUtils.getClientRect(me.getDom()));
                    }
                });
            });
            this._hide();
        },
        mesureSize: function (){
            var body = this.getDom('body');
            var width = uiUtils.getClientRect(this.getDom('content')).width;
            var dialogBodyStyle = body.style;
            dialogBodyStyle.width = width;
            return uiUtils.getClientRect(body);
        },
        _onTitlebarMouseDown: function (evt, el){
            if (this.draggable) {
                var rect;
                var vpRect = uiUtils.getViewportRect();
                var me = this;
                uiUtils.startDrag(evt, {
                    ondragstart: function (){
                        rect = uiUtils.getClientRect(me.getDom());
                        me.getDom('contmask').style.visibility = 'visible';
                        me.dragMask.show(me.getDom().style.zIndex - 1);
                    },
                    ondragmove: function (x, y){
                        var left = rect.left + x;
                        var top = rect.top + y;
                        me.safeSetOffset({
                            left: left,
                            top: top
                        });
                    },
                    ondragstop: function (){
                        me.getDom('contmask').style.visibility = 'hidden';
                        domUtils.removeClasses(me.getDom(), ['edui-state-centered']);
                        me.dragMask.hide();
                    }
                });
            }
        },
        reset: function (){
            this.getDom('content').innerHTML = this.getContentHtml();
        },
        _show: function (){
            if (this._hidden) {
                this.getDom().style.display = '';

                //è¦�é«˜è¿‡ç¼–è¾‘å™¨çš„zindxe
                this.editor.container.style.zIndex && (this.getDom().style.zIndex = this.editor.container.style.zIndex * 1 + 10);
                this._hidden = false;
                this.fireEvent('show');
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4;
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        _hide: function (){
            if (!this._hidden) {
                this.getDom().style.display = 'none';
                this.getDom().style.zIndex = '';
                this._hidden = true;
                this.fireEvent('hide');
            }
        },
        open: function (){
            if (this.autoReset) {
                //æœ‰å�¯èƒ½è¿˜æ²¡æœ‰æ¸²æŸ“
                try{
                    this.reset();
                }catch(e){
                    this.render();
                    this.open()
                }
            }
            this.showAtCenter();
            if (this.iframeUrl) {
                try {
                    this.getDom('iframe').focus();
                } catch(ex){}
            }
        },
        _onCloseButtonClick: function (evt, el){
            this.close(false);
        },
        close: function (ok){
            if (this.fireEvent('close', ok) !== false) {
                this._hide();
            }
        }
    };
    utils.inherits(Dialog, UIBase);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        MenuButton = baidu.editor.ui.MenuButton = function (options){
            this.initOptions(options);
            this.initMenuButton();
        };
    MenuButton.prototype = {
        initMenuButton: function (){
            var me = this;
            this.uiName = "menubutton";
            this.popup = new Menu({
                items: me.items,
                className: me.className,
                editor:me.editor
            });
            this.popup.addListener('show', function (){
                var list = this;
                for (var i=0; i<list.items.length; i++) {
                    list.items[i].removeState('checked');
                    if (list.items[i].value == me._value) {
                        list.items[i].addState('checked');
                        this.value = me._value;
                    }
                }
            });
            this.initSplitButton();
        },
        setValue : function(value){
            this._value = value;
        }
        
    };
    utils.inherits(MenuButton, SplitButton);
})();
//uiè·Ÿç¼–è¾‘å™¨çš„é€‚é…�å±¤
//é‚£ä¸ªæŒ‰é’®å¼¹å‡ºæ˜¯dialogï¼Œæ˜¯ä¸‹æ‹‰ç­�ç­‰éƒ½æ˜¯åœ¨è¿™ä¸ªjsä¸­é…�ç½®
//è‡ªå·±å†™çš„uiä¹Ÿè¦�åœ¨è¿™é‡Œé…�ç½®ï¼Œæ”¾åˆ°baidu.editor.uiä¸‹è¾¹ï¼Œå½“ç¼–è¾‘å™¨å®žä¾‹åŒ–çš„æ—¶å€™ä¼šæ ¹æ�®editor_configä¸­çš„toolbarsæ‰¾åˆ°ç›¸åº”çš„è¿›è¡Œå®žä¾‹åŒ–
(function () {
    var utils = baidu.editor.utils;
    var editorui = baidu.editor.ui;
    var _Dialog = editorui.Dialog;
    editorui.Dialog = function (options) {
        var dialog = new _Dialog(options);
        dialog.addListener('hide', function () {

            if (dialog.editor) {
                var editor = dialog.editor;
                try {
                    if (browser.gecko) {
                        var y = editor.window.scrollY,
                            x = editor.window.scrollX;
                        editor.body.focus();
                        editor.window.scrollTo(x, y);
                    } else {
                        editor.focus();
                    }


                } catch (ex) {
                }
            }
        });
        return dialog;
    };

    var iframeUrlMap = {
        'anchor':'~/dialogs/anchor/anchor.html',
        'insertimage':'~/dialogs/image/image.html',
        'inserttable':'~/dialogs/table/table.html',
        'link':'~/dialogs/link/link.html',
        'spechars':'~/dialogs/spechars/spechars.html',
        'searchreplace':'~/dialogs/searchreplace/searchreplace.html',
        'map':'~/dialogs/map/map.html',
        'gmap':'~/dialogs/gmap/gmap.html',
        'insertvideo':'~/dialogs/video/video.html',
        'help':'~/dialogs/help/help.html',
        'highlightcode':'~/dialogs/highlightcode/highlightcode.html',
        'emotion':'~/dialogs/emotion/emotion.html',
        'wordimage':'~/dialogs/wordimage/wordimage.html',
        'attachment':'~/dialogs/attachment/attachment.html',
        'insertframe':'~/dialogs/insertframe/insertframe.html',
        'edittd':'~/dialogs/table/edittd.html',
        'webapp':'~/dialogs/webapp/webapp.html',
        'snapscreen':'~/dialogs/snapscreen/snapscreen.html',
        'scrawl':'~/dialogs/scrawl/scrawl.html',
        'music':'~/dialogs/music/music.html',
        'template':'~/dialogs/template/template.html',
        'background':'~/dialogs/background/background.html'
    };
    //ä¸ºå·¥å…·æ �æ·»åŠ æŒ‰é’®ï¼Œä»¥ä¸‹éƒ½æ˜¯ç»Ÿä¸€çš„æŒ‰é’®è§¦å�‘å‘½ä»¤ï¼Œæ‰€ä»¥å†™åœ¨ä¸€èµ·
    var btnCmds = ['undo', 'redo', 'formatmatch',
        'bold', 'italic', 'underline', 'touppercase', 'tolowercase',
        'strikethrough', 'subscript', 'superscript', 'source', 'indent', 'outdent',
        'blockquote', 'pasteplain', 'pagebreak',
        'selectall', 'print', 'preview', 'horizontal', 'removeformat', 'time', 'date', 'unlink',
        'insertparagraphbeforetable', 'insertrow', 'insertcol', 'mergeright', 'mergedown', 'deleterow',
        'deletecol', 'splittorows', 'splittocols', 'splittocells', 'mergecells', 'deletetable'];

    for (var i = 0, ci; ci = btnCmds[i++];) {
        ci = ci.toLowerCase();
        editorui[ci] = function (cmd) {
            return function (editor) {
                var ui = new editorui.Button({
                    className:'edui-for-' + cmd,
                    title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
                    onclick:function () {
                        editor.execCommand(cmd);
                    },
                    theme:editor.options.theme,
                    showText:false
                });
                editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                        ui.setChecked(false);
                    } else {
                        if (!uiReady) {
                            ui.setDisabled(false);
                            ui.setChecked(state);
                        }
                    }
                });
                return ui;
            };
        }(ci);
    }

    //æ¸…é™¤æ–‡æ¡£
    editorui.cleardoc = function (editor) {
        var ui = new editorui.Button({
            className:'edui-for-cleardoc',
            title:editor.options.labelMap.cleardoc || editor.getLang("labelMap.cleardoc") || '',
            theme:editor.options.theme,
            onclick:function () {
                if (confirm(editor.getLang("confirmClear"))) {
                    editor.execCommand('cleardoc');
                }
            }
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('cleardoc') == -1);
        });
        return ui;
    };

    //æŽ’ç‰ˆï¼Œå›¾ç‰‡æŽ’ç‰ˆï¼Œæ–‡å­—æ–¹å�‘
    var typeset = {
        'justify':['left', 'right', 'center', 'justify'],
        'imagefloat':['none', 'left', 'center', 'right'],
        'directionality':['ltr', 'rtl']
    };

    for (var p in typeset) {

        (function (cmd, val) {
            for (var i = 0, ci; ci = val[i++];) {
                (function (cmd2) {
                    editorui[cmd.replace('float', '') + cmd2] = function (editor) {
                        var ui = new editorui.Button({
                            className:'edui-for-' + cmd.replace('float', '') + cmd2,
                            title:editor.options.labelMap[cmd.replace('float', '') + cmd2] || editor.getLang("labelMap." + cmd.replace('float', '') + cmd2) || '',
                            theme:editor.options.theme,
                            onclick:function () {
                                editor.execCommand(cmd, cmd2);
                            }
                        });
                        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                            ui.setDisabled(editor.queryCommandState(cmd) == -1);
                            ui.setChecked(editor.queryCommandValue(cmd) == cmd2 && !uiReady);
                        });
                        return ui;
                    };
                })(ci)
            }
        })(p, typeset[p])
    }

    //å­—ä½“é¢œè‰²å’ŒèƒŒæ™¯é¢œè‰²
    for (var i = 0, ci; ci = ['backcolor', 'forecolor'][i++];) {
        editorui[ci] = function (cmd) {
            return function (editor) {
                var ui = new editorui.ColorButton({
                    className:'edui-for-' + cmd,
                    color:'default',
                    title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
                    editor:editor,
                    onpickcolor:function (t, color) {
                        editor.execCommand(cmd, color);
                    },
                    onpicknocolor:function () {
                        editor.execCommand(cmd, 'default');
                        this.setColor('transparent');
                        this.color = 'default';
                    },
                    onbuttonclick:function () {
                        editor.execCommand(cmd, this.color);
                    }
                });
                editor.addListener('selectionchange', function () {
                    ui.setDisabled(editor.queryCommandState(cmd) == -1);
                });
                return ui;
            };
        }(ci);
    }


    var dialogBtns = {
        noOk:['searchreplace', 'help', 'spechars', 'webapp'],
        ok:['attachment', 'anchor', 'link', 'insertimage', 'map', 'gmap', 'insertframe', 'wordimage',
            'insertvideo', 'highlightcode', 'insertframe', 'edittd', 'scrawl', 'template','music', 'background']

    };

    for (var p in dialogBtns) {
        (function (type, vals) {
            for (var i = 0, ci; ci = vals[i++];) {
                //todo operaä¸‹å­˜åœ¨é—®é¢˜
                if (browser.opera && ci === "searchreplace") {
                    continue;
                }
                (function (cmd) {
                    editorui[cmd] = function (editor, iframeUrl, title) {
                        iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})[cmd] || iframeUrlMap[cmd];
                        title = editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '';

                        var dialog;
                        //æ²¡æœ‰iframeUrlä¸�åˆ›å»ºdialog
                        if (iframeUrl) {
                            dialog = new editorui.Dialog(utils.extend({
                                iframeUrl:editor.ui.mapUrl(iframeUrl),
                                editor:editor,
                                className:'edui-for-' + cmd,
                                title:title,
                                closeDialog:editor.getLang("closeDialog")
                            }, type == 'ok' ? {
                                buttons:[
                                    {
                                        className:'edui-okbutton',
                                        label:editor.getLang("ok"),
                                        editor:editor,
                                        onclick:function () {
                                            dialog.close(true);
                                        }
                                    },
                                    {
                                        className:'edui-cancelbutton',
                                        label:editor.getLang("cancel"),
                                        editor:editor,
                                        onclick:function () {
                                            dialog.close(false);
                                        }
                                    }
                                ]
                            } : {}));

                            editor.ui._dialogs[cmd + "Dialog"] = dialog;
                        }

                        var ui = new editorui.Button({
                            className:'edui-for-' + cmd,
                            title:title,
                            onclick:function () {
                                if (dialog) {
                                    switch (cmd) {
                                        case "wordimage":
                                            editor.execCommand("wordimage", "word_img");
                                            if (editor.word_img) {
                                                dialog.render();
                                                dialog.open();
                                            }
                                            break;
                                        case "scrawl":
                                            if (editor.queryCommandState("scrawl") != -1) {
                                                dialog.render();
                                                dialog.open();
                                            }

                                            break;
                                        default:
                                            dialog.render();
                                            dialog.open();
                                    }
                                }
                            },
                            theme:editor.options.theme,
                            disabled:cmd == 'scrawl' && editor.queryCommandState("scrawl") == -1
                        });
                        editor.addListener('selectionchange', function () {
                            //å�ªå­˜åœ¨äºŽå�³é”®è�œå�•è€Œæ— å·¥å…·æ �æŒ‰é’®çš„uiä¸�éœ€è¦�æ£€æµ‹çŠ¶æ€�
                            var unNeedCheckState = {'edittd':1, 'edittable':1};
                            if (cmd in unNeedCheckState)return;

                            var state = editor.queryCommandState(cmd);
                            if (ui.getDom()) {
                                ui.setDisabled(state == -1);
                                ui.setChecked(state);
                            }

                        });

                        return ui;
                    };
                })(ci.toLowerCase())
            }
        })(p, dialogBtns[p])
    }

    editorui.snapscreen = function (editor, iframeUrl, title) {
        title = editor.options.labelMap['snapscreen'] || editor.getLang("labelMap.snapscreen") || '';
        var ui = new editorui.Button({
            className:'edui-for-snapscreen',
            title:title,
            onclick:function () {
                editor.execCommand("snapscreen");
            },
            theme:editor.options.theme,
            disabled:!browser.ie

        });

        if (browser.ie) {
            iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})["snapscreen"] || iframeUrlMap["snapscreen"];
            if (iframeUrl) {
                var dialog = new editorui.Dialog({
                    iframeUrl:editor.ui.mapUrl(iframeUrl),
                    editor:editor,
                    className:'edui-for-snapscreen',
                    title:title,
                    buttons:[
                        {
                            className:'edui-okbutton',
                            label:editor.getLang("ok"),
                            editor:editor,
                            onclick:function () {
                                dialog.close(true);
                            }
                        },
                        {
                            className:'edui-cancelbutton',
                            label:editor.getLang("cancel"),
                            editor:editor,
                            onclick:function () {
                                dialog.close(false);
                            }
                        }
                    ]

                });
                dialog.render();
                editor.ui._dialogs["snapscreenDialog"] = dialog;
            }

        }
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('snapscreen') == -1);
        });
        return ui;
    };


    editorui.fontfamily = function (editor, list, title) {
        list = editor.options['fontfamily'] || [];
        title = editor.options.labelMap['fontfamily'] || editor.getLang("labelMap.fontfamily") || '';
        if(!list.length) return;
        for (var i = 0, ci, items = []; ci = list[i]; i++) {
            var langLabel = editor.getLang('fontfamily')[ci.name] || "";
            (function (key, val) {
                items.push({
                    label:key,
                    value:val,
                    theme:editor.options.theme,
                    renderLabelHtml:function () {
                        return '<div class="edui-label %%-label" style="font-family:' +
                            utils.unhtml(this.value) + '">' + (this.label || '') + '</div>';
                    }
                });
            })(ci.label || langLabel, ci.val)
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            onselect:function (t, index) {
                editor.execCommand('FontFamily', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            title:title,
            initValue:title,
            className:'edui-for-fontfamily',
            indexByValue:function (value) {
                if (value) {
                    for (var i = 0, ci; ci = this.items[i]; i++) {
                        if (ci.value.indexOf(value) != -1)
                            return i;
                    }
                }

                return -1;
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('FontFamily');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('FontFamily');
                    //trace:1871 ieä¸‹ä»Žæº�ç �æ¨¡å¼�åˆ‡æ�¢å›žæ�¥æ—¶ï¼Œå­—ä½“ä¼šå¸¦å�•å¼•å�·ï¼Œè€Œä¸”ä¼šæœ‰é€—å�·
                    value && (value = value.replace(/['"]/g, '').split(',')[0]);
                    ui.setValue(value);

                }
            }

        });
        return ui;
    };

    editorui.fontsize = function (editor, list, title) {
        title = editor.options.labelMap['fontsize'] || editor.getLang("labelMap.fontsize") || '';
        list = list || editor.options['fontsize'] || [];
        if(!list.length) return;
        var items = [];
        for (var i = 0; i < list.length; i++) {
            var size = list[i] + 'px';
            items.push({
                label:size,
                value:size,
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label" style="line-height:1;font-size:' +
                        this.value + '">' + (this.label || '') + '</div>';
                }
            });
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            onselect:function (t, index) {
                editor.execCommand('FontSize', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            className:'edui-for-fontsize'
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('FontSize');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    ui.setValue(editor.queryCommandValue('FontSize'));
                }
            }

        });
        return ui;
    };

    editorui.paragraph = function (editor, list, title) {
        title = editor.options.labelMap['paragraph'] || editor.getLang("labelMap.paragraph") || '';
        list = editor.options['paragraph'] || [];
        if(utils.isEmptyObject(list)) return;
        var items = [];
        for (var i in list) {
            items.push({
                value:i,
                label:list[i] || editor.getLang("paragraph")[i],
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || '') + '</span></div>';
                }
            })
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            className:'edui-for-paragraph',
            onselect:function (t, index) {
                editor.execCommand('Paragraph', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('Paragraph');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('Paragraph');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };


    //è‡ªå®šä¹‰æ ‡é¢˜
    editorui.customstyle = function (editor) {
        var list = editor.options['customstyle'] || [],
            title = editor.options.labelMap['customstyle'] || editor.getLang("labelMap.customstyle") || '';
        if (!list.length)return;
        var langCs = editor.getLang('customstyle');
        for (var i = 0, items = [], t; t = list[i++];) {
            (function (t) {
                var ck = {};
                ck.label = t.label ? t.label : langCs[t.name];
                ck.style = t.style;
                ck.className = t.className;
                ck.tag = t.tag;
                items.push({
                    label:ck.label,
                    value:ck,
                    theme:editor.options.theme,
                    renderLabelHtml:function () {
                        return '<div class="edui-label %%-label">' + '<' + ck.tag + ' ' + (ck.className ? ' class="' + ck.className + '"' : "")
                            + (ck.style ? ' style="' + ck.style + '"' : "") + '>' + ck.label + "<\/" + ck.tag + ">"
                            + '</div>';
                    }
                });
            })(t);
        }

        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            className:'edui-for-customstyle',
            onselect:function (t, index) {
                editor.execCommand('customstyle', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            indexByValue:function (value) {
                for (var i = 0, ti; ti = this.items[i++];) {
                    if (ti.label == value) {
                        return i - 1
                    }
                }
                return -1;
            }
        });
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('customstyle');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('customstyle');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };
    editorui.inserttable = function (editor, iframeUrl, title) {
        iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})['inserttable'] || iframeUrlMap['inserttable'];
        title = editor.options.labelMap['inserttable'] || editor.getLang("labelMap.inserttable") || '';
        if (iframeUrl) {
            var dialog = new editorui.Dialog({
                iframeUrl:editor.ui.mapUrl(iframeUrl),
                editor:editor,
                className:'edui-for-inserttable',
                title:title,
                buttons:[
                    {
                        className:'edui-okbutton',
                        label:editor.getLang("ok"),
                        editor:editor,
                        onclick:function () {
                            dialog.close(true);
                        }
                    },
                    {
                        className:'edui-cancelbutton',
                        label:editor.getLang("cancel"),
                        editor:editor,
                        onclick:function () {
                            dialog.close(false);
                        }
                    }
                ]

            });
            dialog.render();
            editor.ui._dialogs['inserttableDialog'] = dialog;
        }
        var openDialog = function () {
            if (dialog) {
                //æ‰“å¼€å�Žå†�å…³é—­å†�æ‰“å¼€æ˜¯ä¸ºäº†è§£å†³fieldsetæ–‡å­—é”™ä½�é—®é¢˜
                if (browser.webkit) {
                    dialog.open();
                    dialog.close();
                }
                dialog.open();
            }
        };
        var ui = new editorui.TableButton({
            editor:editor,
            title:title,
            className:'edui-for-inserttable',
            onpicktable:function (t, numCols, numRows) {
                editor.execCommand('InsertTable', {numRows:numRows, numCols:numCols, border:1});
            },
            onmore:openDialog,
            onbuttonclick:openDialog
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('inserttable') == -1);
        });
        return ui;
    };

    editorui.lineheight = function (editor) {
        var val = editor.options.lineheight || [];
        if(!val.length)return;
        for (var i = 0, ci, items = []; ci = val[i++];) {
            items.push({
                //todo:å†™æ­»äº†
                label:ci,
                value:ci,
                theme:editor.options.theme,
                onclick:function () {
                    editor.execCommand("lineheight", this.value);
                }
            })
        }
        var ui = new editorui.MenuButton({
            editor:editor,
            className:'edui-for-lineheight',
            title:editor.options.labelMap['lineheight'] || editor.getLang("labelMap.lineheight") || '',
            items:items,
            onbuttonclick:function () {
                var value = editor.queryCommandValue('LineHeight') || this.value;
                editor.execCommand("LineHeight", value);
            }
        });
        editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('LineHeight');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('LineHeight');
                value && ui.setValue((value + '').replace(/cm/, ''));
                ui.setChecked(state)
            }
        });
        return ui;
    };

    var rowspacings = ['top', 'bottom'];
    for (var r = 0, ri; ri = rowspacings[r++];) {
        (function (cmd) {
            editorui['rowspacing' + cmd] = function (editor) {
                var val = editor.options['rowspacing' + cmd] || [];
                if(!val.length) return null;
                for (var i = 0, ci, items = []; ci = val[i++];) {
                    items.push({
                        label:ci,
                        value:ci,
                        theme:editor.options.theme,
                        onclick:function () {
                            editor.execCommand("rowspacing", this.value, cmd);
                        }
                    })
                }
                var ui = new editorui.MenuButton({
                    editor:editor,
                    className:'edui-for-rowspacing' + cmd,
                    title:editor.options.labelMap['rowspacing' + cmd] || editor.getLang("labelMap.rowspacing" + cmd) || '',
                    items:items,
                    onbuttonclick:function () {
                        var value = editor.queryCommandValue('rowspacing', cmd) || this.value;
                        editor.execCommand("rowspacing", value, cmd);
                    }
                });
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState('rowspacing', cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                        var value = editor.queryCommandValue('rowspacing', cmd);
                        value && ui.setValue((value + '').replace(/%/, ''));
                        ui.setChecked(state)
                    }
                });
                return ui;
            }
        })(ri)
    }
    //æœ‰åº�ï¼Œæ— åº�åˆ—è¡¨
    var lists = ['insertorderedlist', 'insertunorderedlist'];
    for (var l = 0, cl; cl = lists[l++];) {
        (function (cmd) {
            editorui[cmd] = function (editor) {
                var vals = editor.options[cmd],
                    _onMenuClick = function () {
                        editor.execCommand(cmd, this.value);
                    }, items = [];
                for (var i in vals) {
                    items.push({
                        label:vals[i] || editor.getLang()[cmd][i] || "",
                        value:i,
                        theme:editor.options.theme,
                        onclick:_onMenuClick
                    })
                }
                var ui = new editorui.MenuButton({
                    editor:editor,
                    className:'edui-for-' + cmd,
                    title:editor.getLang("labelMap." + cmd) || '',
                    'items':items,
                    onbuttonclick:function () {
                        var value = editor.queryCommandValue(cmd) || this.value;
                        editor.execCommand(cmd, value);
                    }
                });
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                        var value = editor.queryCommandValue(cmd);
                        ui.setValue(value);
                        ui.setChecked(state)
                    }
                });
                return ui;
            };
        })(cl)
    }

    editorui.fullscreen = function (editor, title) {
        title = editor.options.labelMap['fullscreen'] || editor.getLang("labelMap.fullscreen") || '';
        var ui = new editorui.Button({
            className:'edui-for-fullscreen',
            title:title,
            theme:editor.options.theme,
            onclick:function () {
                var scale=editor.ui.getDom("scale");
                if (editor.ui) {

                    editor.ui.setFullScreen(!editor.ui.isFullScreen());
                }
                this.setChecked(editor.ui.isFullScreen());
            }
        });
        editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('fullscreen');
            ui.setDisabled(state == -1);
            ui.setChecked(editor.ui.isFullScreen());
        });
        return ui;
    };

    // è¡¨æƒ…
    editorui.emotion = function (editor, iframeUrl) {
        var ui = new editorui.MultiMenuPop({
            title:editor.options.labelMap['emotion'] || editor.getLang("labelMap.emotion") || '',
            editor:editor,
            className:'edui-for-emotion',
            iframeUrl:editor.ui.mapUrl(iframeUrl || (editor.options.iframeUrlMap || {})['emotion'] || iframeUrlMap['emotion'])
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('emotion') == -1)
        });
        return ui;
    };

    editorui.autotypeset = function (editor) {
        var ui = new editorui.AutoTypeSetButton({
            editor:editor,
            title:editor.options.labelMap['autotypeset'] || editor.getLang("labelMap.autotypeset") || '',
            className:'edui-for-autotypeset',
            onbuttonclick:function () {
                editor.execCommand('autotypeset')
            }
        });
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('autotypeset') == -1);
        });
        return ui;
    };

})();

///import core
///commands å…¨å±�
///commandsName FullScreen
///commandsTitle  å…¨å±�
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        domUtils = baidu.editor.dom.domUtils;
    var nodeStack=[];

    function EditorUI(options) {
        this.initOptions(options);
        this.initEditorUI();
    }

    EditorUI.prototype = {
        uiName:'editor',
        initEditorUI:function () {
            this.editor.ui = this;
            this._dialogs = {};
            this.initUIBase();
            this._initToolbars();
            var editor = this.editor,
                me = this;

            editor.addListener('ready', function () {
                //æ��ä¾›getDialogæ–¹æ³•
                editor.getDialog = function (name) {
                    return editor.ui._dialogs[name + "Dialog"];
                };
                domUtils.on(editor.window, 'scroll', function () {
                    baidu.editor.ui.Popup.postHide();
                });

                //display bottom-bar label based on config
                if (editor.options.elementPathEnabled) {
                    editor.ui.getDom('elementpath').innerHTML = '<div class="edui-editor-breadcrumb">' + editor.getLang("elementPathTip") + ':</div>';
                }
                if (editor.options.wordCount) {
                    editor.ui.getDom('wordcount').innerHTML = editor.getLang("wordCountTip");
                    //ä¸ºwordcountæ�•èŽ·ä¸­æ–‡è¾“å…¥æ³•çš„ç©ºæ ¼
                    editor.addListener('keyup', function (type, evt) {
                        var keyCode = evt.keyCode || evt.which;
                        if (keyCode == 32) {
                            me._wordCount();
                        }
                    });
                }
                editor.ui._scale();
                if (editor.options.scaleEnabled) {
                    if(editor.autoHeightEnabled){
                        editor.disableAutoHeight();
                    }
                    me.enableScale();
                }else{
                    me.disableScale();
                }
                if (!editor.options.elementPathEnabled && !editor.options.wordCount && !editor.options.scaleEnabled) {
                    editor.ui.getDom('elementpath').style.display = "none";
                    editor.ui.getDom('wordcount').style.display = "none";
                    editor.ui.getDom('scale').style.display = "none";
                }

                if (!editor.selection.isFocus())return;
                editor.fireEvent('selectionchange', false, true);


            });

            editor.addListener('mousedown', function (t, evt) {
                var el = evt.target || evt.srcElement;
                baidu.editor.ui.Popup.postHide(el);
            });
            editor.addListener('contextmenu', function (t, evt) {
                baidu.editor.ui.Popup.postHide();
            });
            editor.addListener('selectionchange', function () {
                //if(!editor.selection.isFocus())return;
                if (editor.options.elementPathEnabled) {
                    me[(editor.queryCommandState('elementpath') == -1 ? 'dis' : 'en') + 'ableElementPath']()
                }
                if (editor.options.wordCount) {
                    me[(editor.queryCommandState('wordcount') == -1 ? 'dis' : 'en') + 'ableWordCount']()
                }
                if (editor.options.scaleEnabled) {
                    me[(editor.queryCommandState('scale') == -1 ? 'dis' : 'en') + 'ableScale']();

                }
            });
            var popup = new baidu.editor.ui.Popup({
                editor:editor,
                content:'',
                className:'edui-bubble',
                _onEditButtonClick:function () {
                    this.hide();
                    editor.ui._dialogs.linkDialog.open();
                },
                _onImgEditButtonClick:function (name) {
                    this.hide();
                    editor.ui._dialogs[name] && editor.ui._dialogs[name].open();

                },
                _onImgSetFloat:function (value) {
                    this.hide();
                    editor.execCommand("imagefloat", value);

                },
                _setIframeAlign:function (value) {
                    var frame = popup.anchorEl;
                    var newFrame = frame.cloneNode(true);
                    switch (value) {
                        case -2:
                            newFrame.setAttribute("align", "");
                            break;
                        case -1:
                            newFrame.setAttribute("align", "left");
                            break;
                        case 1:
                            newFrame.setAttribute("align", "right");
                            break;
                        case 2:
                            newFrame.setAttribute("align", "middle");
                            break;
                    }
                    frame.parentNode.insertBefore(newFrame, frame);
                    domUtils.remove(frame);
                    popup.anchorEl = newFrame;
                    popup.showAnchor(popup.anchorEl);
                },
                _updateIframe:function () {
                    editor._iframe = popup.anchorEl;
                    editor.ui._dialogs.insertframeDialog.open();
                    popup.hide();
                },
                _onRemoveButtonClick:function (cmdName) {
                    editor.execCommand(cmdName);
                    this.hide();
                },
                queryAutoHide:function (el) {
                    if (el && el.ownerDocument == editor.document) {
                        if (el.tagName.toLowerCase() == 'img' || domUtils.findParentByTagName(el, 'a', true)) {
                            return el !== popup.anchorEl;
                        }
                    }
                    return baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, el);
                }
            });
            popup.render();
            if (editor.options.imagePopup) {
                editor.addListener('mouseover', function (t, evt) {
                    evt = evt || window.event;
                    var el = evt.target || evt.srcElement;
                    if (editor.ui._dialogs.insertframeDialog && /iframe/ig.test(el.tagName)) {
                        var html = popup.formatHtml(
                            '<nobr>' + editor.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._setIframeAlign(2) class="edui-clickable">' + editor.getLang("justifycenter") + '</span>' +
                                ' <span onclick="$$._updateIframe( this);" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>');
                        if (html) {
                            popup.getDom('content').innerHTML = html;
                            popup.anchorEl = el;
                            popup.showAnchor(popup.anchorEl);
                        } else {
                            popup.hide();
                        }
                    }
                });
                editor.addListener('selectionchange', function (t, causeByUi) {
                    if (!causeByUi) return;
                    var html = '',
                        img = editor.selection.getRange().getClosedNode(),
                        dialogs = editor.ui._dialogs;
                    if (img && img.tagName == 'IMG') {
                        var dialogName = 'insertimageDialog';
                        if (img.className.indexOf("edui-faked-video") != -1) {
                            dialogName = "insertvideoDialog"
                        }
                        if (img.className.indexOf("edui-faked-webapp") != -1) {
                            dialogName = "webappDialog"
                        }
                        if (img.src.indexOf("http://api.map.baidu.com") != -1) {
                            dialogName = "mapDialog"
                        }
                        if (img.className.indexOf("edui-faked-music") != -1) {
                            dialogName = "musicDialog"
                        }
                        if (img.src.indexOf("http://maps.google.com/maps/api/staticmap") != -1) {
                            dialogName = "gmapDialog"
                        }
                        if (img.getAttribute("anchorname")) {
                            dialogName = "anchorDialog";
                            html = popup.formatHtml(
                                '<nobr>' + editor.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + editor.getLang("modify") + '</span>&nbsp;&nbsp;' +
                                    '<span onclick=$$._onRemoveButtonClick(\'anchor\') class="edui-clickable">' + editor.getLang("delete") + '</span></nobr>');
                        }
                        if (img.getAttribute("word_img")) {
                            //todo æ”¾åˆ°dialogåŽ»å�šæŸ¥è¯¢
                            editor.word_img = [img.getAttribute("word_img")];
                            dialogName = "wordimageDialog"
                        }
                        if (!dialogs[dialogName]) {
                            return;
                        }
                        !html && (html = popup.formatHtml(
                            '<nobr>' + editor.getLang("property") + ': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                                '<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + editor.getLang("justifycenter") + '</span>&nbsp;&nbsp;' +
                                '<span onclick="$$._onImgEditButtonClick(\'' + dialogName + '\');" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>'))

                    }
                    if (editor.ui._dialogs.linkDialog) {
                        var link = editor.queryCommandValue('link');
                        var url;
                        if (link && (url = (link.getAttribute('data_ue_src') || link.getAttribute('href', 2)))) {
                            var txt = url;
                            if (url.length > 30) {
                                txt = url.substring(0, 20) + "...";
                            }
                            if (html) {
                                html += '<div style="height:5px;"></div>'
                            }
                            html += popup.formatHtml(
                                '<nobr>' + editor.getLang("anthorMsg") + ': <a target="_blank" href="' + url + '" title="' + url + '" >' + txt + '</a>' +
                                    ' <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + editor.getLang("modify") + '</span>' +
                                    ' <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + editor.getLang("clear") + '</span></nobr>');
                            popup.showAnchor(link);
                        }
                    }

                    if (html) {
                        popup.getDom('content').innerHTML = html;
                        popup.anchorEl = img || link;
                        popup.showAnchor(popup.anchorEl);
                    } else {
                        popup.hide();
                    }
                });
            }

        },
        _initToolbars:function () {
            var editor = this.editor;
            var toolbars = this.toolbars || [];
            var toolbarUis = [];
            for (var i = 0; i < toolbars.length; i++) {
                var toolbar = toolbars[i];
                var toolbarUi = new baidu.editor.ui.Toolbar({theme:editor.options.theme});
                for (var j = 0; j < toolbar.length; j++) {
                    var toolbarItem = toolbar[j];
                    var toolbarItemUi = null;
                    if (typeof toolbarItem == 'string') {
                        toolbarItem = toolbarItem.toLowerCase();
                        if (toolbarItem == '|') {
                            toolbarItem = 'Separator';
                        }

                        if (baidu.editor.ui[toolbarItem]) {
                            toolbarItemUi = new baidu.editor.ui[toolbarItem](editor);
                        }

                        //fullscreenè¿™é‡Œå�•ç‹¬å¤„ç�†ä¸€ä¸‹ï¼Œæ”¾åˆ°é¦–è¡ŒåŽ»
                        if (toolbarItem == 'fullscreen') {
                            if (toolbarUis && toolbarUis[0]) {
                                toolbarUis[0].items.splice(0, 0, toolbarItemUi);
                            } else {
                                toolbarItemUi && toolbarUi.items.splice(0, 0, toolbarItemUi);
                            }

                            continue;


                        }
                    } else {
                        toolbarItemUi = toolbarItem;
                    }
                    if (toolbarItemUi && toolbarItemUi.id) {

                        toolbarUi.add(toolbarItemUi);
                    }
                }
                toolbarUis[i] = toolbarUi;
            }
            this.toolbars = toolbarUis;
        },
        getHtmlTpl:function () {
            return '<div id="##" class="%%">' +
                '<div id="##_toolbarbox" class="%%-toolbarbox">' +
                (this.toolbars.length ?
                    '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' +
                        this.renderToolbarBoxHtml() +
                        '</div></div>' : '') +
                '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">' +
                '<div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div>' +
                '<div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>' +
                '<div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>' +
                '<div style="height:0;overflow:hidden;clear:both;"></div>' +
                '</div>' +
                '</div>' +
                '<div id="##_iframeholder" class="%%-iframeholder"></div>' +
                //modify wdcount by matao
                '<div id="##_bottombar" class="%%-bottomContainer"><table><tr>' +
                '<td id="##_elementpath" class="%%-bottombar"></td>' +
                '<td id="##_wordcount" class="%%-wordcount"></td>' +
                '<td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>' +
                '</tr></table></div>' +
                '<div id="##_scalelayer"></div>' +
                '</div>';
        },
        showWordImageDialog:function () {
            this.editor.execCommand("wordimage", "word_img");
            this._dialogs['wordimageDialog'].open();
        },
        renderToolbarBoxHtml:function () {
            var buff = [];
            for (var i = 0; i < this.toolbars.length; i++) {
                buff.push(this.toolbars[i].renderHtml());
            }
            return buff.join('');
        },
        setFullScreen:function (fullscreen) {

            var editor = this.editor,
                container = editor.container.parentNode.parentNode;
            if (this._fullscreen != fullscreen) {
                this._fullscreen = fullscreen;
                this.editor.fireEvent('beforefullscreenchange', fullscreen);
                if (baidu.editor.browser.gecko) {
                    var bk = editor.selection.getRange().createBookmark();
                }
                if (fullscreen) {
                    while(container.tagName!="BODY"){
                        var position = baidu.editor.dom.domUtils.getComputedStyle(container,"position");
                        nodeStack.push(position);
                        container.style.position = "static";
                        container = container.parentNode;
                    }
                    this._bakHtmlOverflow = document.documentElement.style.overflow;
                    this._bakBodyOverflow = document.body.style.overflow;
                    this._bakAutoHeight = this.editor.autoHeightEnabled;
                    this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                    if (this._bakAutoHeight) {
                        //å½“å…¨å±�æ—¶ä¸�èƒ½æ‰§è¡Œè‡ªåŠ¨é•¿é«˜
                        editor.autoHeightEnabled = false;
                        this.editor.disableAutoHeight();
                    }
                    document.documentElement.style.overflow = 'hidden';
                    document.body.style.overflow = 'hidden';
                    this._bakCssText = this.getDom().style.cssText;
                    this._bakCssText1 = this.getDom('iframeholder').style.cssText;
                    this._updateFullScreen();
                } else {
                    while(container.tagName!="BODY"){
                        container.style.position = nodeStack.shift();
                        container = container.parentNode;
                    }
                    this.getDom().style.cssText = this._bakCssText;
                    this.getDom('iframeholder').style.cssText = this._bakCssText1;
                    if (this._bakAutoHeight) {
                        editor.autoHeightEnabled = true;
                        this.editor.enableAutoHeight();
                    }

                    document.documentElement.style.overflow = this._bakHtmlOverflow;
                    document.body.style.overflow = this._bakBodyOverflow;
                    window.scrollTo(0, this._bakScrollTop);
                }
                if (baidu.editor.browser.gecko) {
                    var input = document.createElement('input');
                    document.body.appendChild(input);
                    editor.body.contentEditable = false;
                    setTimeout(function () {
                        input.focus();
                        setTimeout(function () {
                            editor.body.contentEditable = true;
                            editor.selection.getRange().moveToBookmark(bk).select(true);
                            baidu.editor.dom.domUtils.remove(input);
                            fullscreen && window.scroll(0, 0);
                        },0)
                    },0)
                }
                this.editor.fireEvent('fullscreenchanged', fullscreen);
                this.triggerLayout();
            }
        },
        _wordCount:function () {
            var wdcount = this.getDom('wordcount');
            if (!this.editor.options.wordCount) {
                wdcount.style.display = "none";
                return;
            }
            wdcount.innerHTML = this.editor.queryCommandValue("wordcount");
        },
        disableWordCount:function () {
            var w = this.getDom('wordcount');
            w.innerHTML = '';
            w.style.display = 'none';
            this.wordcount = false;

        },
        enableWordCount:function () {
            var w = this.getDom('wordcount');
            w.style.display = '';
            this.wordcount = true;
            this._wordCount();
        },
        _updateFullScreen:function () {
            if (this._fullscreen) {
                var vpRect = uiUtils.getViewportRect();
                this.getDom().style.cssText = 'border:0;position:absolute;left:0;top:' + (this.editor.options.topOffset || 0) + 'px;width:' + vpRect.width + 'px;height:' + vpRect.height + 'px;z-index:' + (this.getDom().style.zIndex * 1 + 100);
                uiUtils.setViewportOffset(this.getDom(), { left:0, top:this.editor.options.topOffset || 0 });
                this.editor.setHeight(vpRect.height - this.getDom('toolbarbox').offsetHeight - this.getDom('bottombar').offsetHeight - (this.editor.options.topOffset || 0));

            }
        },
        _updateElementPath:function () {
            var bottom = this.getDom('elementpath'), list;
            if (this.elementPathEnabled && (list = this.editor.queryCommandValue('elementpath'))) {

                var buff = [];
                for (var i = 0, ci; ci = list[i]; i++) {
                    buff[i] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + i + '&quot;);">' + ci + '</span>');
                }
                bottom.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ': ' + buff.join(' &gt; ') + '</div>';

            } else {
                bottom.style.display = 'none'
            }
        },
        disableElementPath:function () {
            var bottom = this.getDom('elementpath');
            bottom.innerHTML = '';
            bottom.style.display = 'none';
            this.elementPathEnabled = false;

        },
        enableElementPath:function () {
            var bottom = this.getDom('elementpath');
            bottom.style.display = '';
            this.elementPathEnabled = true;
            this._updateElementPath();
        },
        _scale:function () {
            var doc = document,
                editor = this.editor,
                editorHolder = editor.container,
                editorDocument = editor.document,
                toolbarBox = this.getDom("toolbarbox"),
                bottombar = this.getDom("bottombar"),
                scale = this.getDom("scale"),
                scalelayer = this.getDom("scalelayer");

            var isMouseMove = false,
                position = null,
                minEditorHeight = 0,
                minEditorWidth = editor.options.minFrameWidth,
                pageX = 0,
                pageY = 0,
                scaleWidth = 0,
                scaleHeight = 0;

            function down() {
                position = domUtils.getXY(editorHolder);

                if (!minEditorHeight) {
                    minEditorHeight = editor.options.minFrameHeight + toolbarBox.offsetHeight + bottombar.offsetHeight;
                }

                scalelayer.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + editorHolder.offsetWidth + "px;height:"
                    + editorHolder.offsetHeight + "px;z-index:" + (editor.options.zIndex + 1);

                domUtils.on(doc, "mousemove", move);
                domUtils.on(editorDocument, "mouseup", up);
                domUtils.on(doc, "mouseup", up);
            }
            var me = this;
            //by xuheng å…¨å±�æ—¶å…³æŽ‰ç¼©æ”¾
            this.editor.addListener('fullscreenchanged',function(e,fullScreen){
                if(fullScreen){
                    me.disableScale();

                }else{
                    if(me.editor.options.scaleEnabled){
                        me.enableScale();
                        var tmpNode = me.editor.document.createElement('span');
                        me.editor.body.appendChild(tmpNode);
                        me.editor.body.style.height = Math.max(domUtils.getXY(tmpNode).y,me.editor.iframe.offsetHeight - 20 ) + 'px';
                        domUtils.remove(tmpNode)
                    }
                }
            });
            function move(event) {
                clearSelection();
                var e = event || window.event;
                pageX = e.pageX || (doc.documentElement.scrollLeft + e.clientX);
                pageY = e.pageY || (doc.documentElement.scrollTop + e.clientY);
                scaleWidth = pageX - position.x;
                scaleHeight = pageY - position.y;

                if (scaleWidth >= minEditorWidth) {
                    isMouseMove = true;
                    scalelayer.style.width = scaleWidth + 'px';
                }
                if (scaleHeight >= minEditorHeight) {
                    isMouseMove = true;
                    scalelayer.style.height = scaleHeight + "px";
                }
            }

            function up() {
                if (isMouseMove) {
                    isMouseMove = false;
                    editorHolder.style.width = scalelayer.offsetWidth - 2 + 'px';
                    editor.setHeight(scalelayer.offsetHeight - bottombar.offsetHeight - toolbarBox.offsetHeight - 2);
                }
                if (scalelayer) {
                    scalelayer.style.display = "none";
                }
                clearSelection();
                domUtils.un(doc, "mousemove", move);
                domUtils.un(editorDocument, "mouseup", up);
                domUtils.un(doc, "mouseup", up);
            }

            function clearSelection() {
                if (browser.ie)
                    doc.selection.clear();
                else
                    window.getSelection().removeAllRanges();
            }

            this.enableScale = function () {
                //trace:2868
                if(editor.queryCommandState("source")==1)    return;
                scale.style.display = "";
                this.scaleEnabled = true;
                domUtils.on(scale, "mousedown", down);
            };
            this.disableScale = function () {
                scale.style.display = "none";
                this.scaleEnabled = false;
                domUtils.un(scale, "mousedown", down);
            };
        },
        isFullScreen:function () {
            return this._fullscreen;
        },
        postRender:function () {
            UIBase.prototype.postRender.call(this);
            for (var i = 0; i < this.toolbars.length; i++) {
                this.toolbars[i].postRender();
            }
            var me = this;
            var timerId,
                domUtils = baidu.editor.dom.domUtils,
                updateFullScreenTime = function () {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () {
                        me._updateFullScreen();
                    });
                };
            domUtils.on(window, 'resize', updateFullScreenTime);

            me.addListener('destroy', function () {
                domUtils.un(window, 'resize', updateFullScreenTime);
                clearTimeout(timerId);
            })
        },
        showToolbarMsg:function (msg, flag) {
            this.getDom('toolbarmsg_label').innerHTML = msg;
            this.getDom('toolbarmsg').style.display = '';
            //
            if (!flag) {
                var w = this.getDom('upload_dialog');
                w.style.display = 'none';
            }
        },
        hideToolbarMsg:function () {
            this.getDom('toolbarmsg').style.display = 'none';
        },
        mapUrl:function (url) {
            return url ? url.replace('~/', this.editor.options.UEDITOR_HOME_URL || '') : ''
        },
        triggerLayout:function () {
            var dom = this.getDom();
            if (dom.style.zoom == '1') {
                dom.style.zoom = '100%';
            } else {
                dom.style.zoom = '1';
            }
        }
    };
    utils.inherits(EditorUI, baidu.editor.ui.UIBase);


    var instances = {};


    UE.ui.Editor = function (options) {
        var editor = new baidu.editor.Editor(options);
        editor.options.editor = editor;
        utils.loadFile(document, {
            href:editor.options.themePath + editor.options.theme + "/css/ueditor.css",
            tag:"link",
            type:"text/css",
            rel:"stylesheet"
        });

        var oldRender = editor.render;
        editor.render = function (holder) {
            if(holder.constructor === String){
                editor.key = holder;
                instances[holder] = editor;
            }
            utils.domReady(function () {
                editor.langIsReady ? renderUI() : editor.addListener("langReady", renderUI);
                function renderUI() {
                    editor.setOpt({
                        labelMap:editor.options.labelMap || editor.getLang('labelMap')
                    });
                    new EditorUI(editor.options);
                    if (holder) {
                        if (holder.constructor === String) {
                            holder = document.getElementById(holder);
                        }
                        holder && holder.getAttribute('name') && ( editor.options.textarea = holder.getAttribute('name'));
                        if (holder && /script|textarea/ig.test(holder.tagName)) {
                            var newDiv = document.createElement('div');
                            holder.parentNode.insertBefore(newDiv, holder);
                            var cont = holder.value || holder.innerHTML;
                            editor.options.initialContent = /^[\t\r\n ]*$/.test(cont) ? editor.options.initialContent :
                                cont.replace(/>[\n\r\t]+([ ]{4})+/g, '>')
                                    .replace(/[\n\r\t]+([ ]{4})+</g, '<')
                                    .replace(/>[\n\r\t]+</g, '><');
                            holder.className && (newDiv.className = holder.className);
                            holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);
                            if (/textarea/i.test(holder.tagName)) {
                                editor.textarea = holder;
                                editor.textarea.style.display = 'none';

                            } else {
                                holder.parentNode.removeChild(holder);
                                holder.id && (newDiv.id = holder.id);
                            }
                            holder = newDiv;
                            holder.innerHTML = '';
                        }

                    }
                    domUtils.addClass(holder, "edui-" + editor.options.theme);
                    editor.ui.render(holder);
                    var iframeholder = editor.ui.getDom('iframeholder');
                    //ç»™å®žä¾‹æ·»åŠ ä¸€ä¸ªç¼–è¾‘å™¨çš„å®¹å™¨å¼•ç”¨
                    editor.container = editor.ui.getDom();
                    editor.container.style.cssText = "z-index:" + editor.options.zIndex + ";width:" + editor.options.initialFrameWidth + "px";
                    oldRender.call(editor, iframeholder);

                }
            })
        };
        return editor;
    };



    /**
     * @file
     * @name UE
     * @short UE
     * @desc UEditorçš„é¡¶éƒ¨å‘½å��ç©ºé—´
     */
    /**
     * @name getEditor
     * @since 1.2.4+
     * @grammar UE.getEditor(id,[opt])  =>  Editorå®žä¾‹
     * @desc æ��ä¾›ä¸€ä¸ªå…¨å±€çš„æ–¹æ³•å¾—åˆ°ç¼–è¾‘å™¨å®žä¾‹
     *
     * * ''id''  æ”¾ç½®ç¼–è¾‘å™¨çš„å®¹å™¨id, å¦‚æžœå®¹å™¨ä¸‹çš„ç¼–è¾‘å™¨å·²ç»�å­˜åœ¨ï¼Œå°±ç›´æŽ¥è¿”å›ž
     * * ''opt'' ç¼–è¾‘å™¨çš„å�¯é€‰å�‚æ•°
     * @example
     *  UE.getEditor('containerId',{onready:function(){//åˆ›å»ºä¸€ä¸ªç¼–è¾‘å™¨å®žä¾‹
     *      this.setContent('hello')
     *  }});
     *  UE.getEditor('containerId'); //è¿”å›žåˆšåˆ›å»ºçš„å®žä¾‹
     *
     */
    UE.getEditor = function (id, opt) {
        var editor = instances[id];
        if (!editor) {
            editor = instances[id] = new UE.ui.Editor(opt);
            editor.render(id);
        }
        return editor;
    };


    UE.delEditor = function (id) {
        var editor;
        if (editor = instances[id]) {
            editor.key && editor.destroy();
            delete instances[id]
        }
    }
})();
///import core
///import uicore
 ///commands è¡¨æƒ…
(function(){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        MultiMenuPop = baidu.editor.ui.MultiMenuPop = function(options){
            this.initOptions(options);
            this.initMultiMenu();
        };

    MultiMenuPop.prototype = {
        initMultiMenu: function (){
            var me = this;
            this.popup = new Popup({
                content: '',
                editor : me.editor,
                iframe_rendered: false,
                onshow: function (){
                    if (!this.iframe_rendered) {
                        this.iframe_rendered = true;
                        this.getDom('content').innerHTML = '<iframe id="'+me.id+'_iframe" src="'+ me.iframeUrl +'" frameborder="0"></iframe>';
                        me.editor.container.style.zIndex && (this.getDom().style.zIndex = me.editor.container.style.zIndex * 1 + 1);
                    }
                }
               // canSideUp:false,
               // canSideLeft:false
            });
            this.onbuttonclick = function(){
                this.showPopup();
            };
            this.initSplitButton();
        }

    };

    utils.inherits(MultiMenuPop, SplitButton);
})();
})();