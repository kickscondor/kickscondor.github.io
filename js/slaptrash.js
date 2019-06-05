/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-videoautoplay-setclasses !*/
!function(A,e,o){function t(A){var e=h.className,o=Modernizr._config.classPrefix||"";if(R&&(e=e.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(t,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+A.join(" "+o),R?h.className.baseVal=e:h.className=e)}function n(A,e){return typeof A===e}function a(){var A,e,o,t,a,l,i;for(var r in s)if(s.hasOwnProperty(r)){if(A=[],e=s[r],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)A.push(e.options.aliases[o].toLowerCase());for(t=n(e.fn,"function")?e.fn():e.fn,a=0;a<A.length;a++)l=A[a],i=l.split("."),1===i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),c.push((t?"":"no-")+i.join("-"))}}function l(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):R?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function i(A,e){if("object"==typeof A)for(var o in A)d(A,o)&&i(o,A[o]);else{A=A.toLowerCase();var n=A.split("."),a=Modernizr[n[0]];if(2==n.length&&(a=a[n[1]]),"undefined"!=typeof a)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),t([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}var c=[],s=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var o=this;setTimeout(function(){e(o[A])},0)},addTest:function(A,e,o){s.push({name:A,fn:e,options:o})},addAsyncTest:function(A){s.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var h=e.documentElement,R="svg"===h.nodeName.toLowerCase();Modernizr.addTest("video",function(){var A=l("video"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return e});var d;!function(){var A={}.hasOwnProperty;d=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,o){return A.call(e,o)}}(),r._l={},r.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},r._trigger=function(A,e){if(this._l[A]){var o=this._l[A];setTimeout(function(){var A,t;for(A=0;A<o.length;A++)(t=o[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){r.addTest=i}),Modernizr.addAsyncTest(function(){function A(l){n++,clearTimeout(e);var c=l&&"playing"===l.type||0!==a.currentTime;return!c&&t>n?void(e=setTimeout(A,o)):(a.removeEventListener("playing",A,!1),i("videoautoplay",c),void(a.parentNode&&a.parentNode.removeChild(a)))}var e,o=200,t=5,n=0,a=l("video"),c=a.style;if(!(Modernizr.video&&"autoplay"in a))return void i("videoautoplay",!1);c.position="absolute",c.height=0,c.width=0;try{if(Modernizr.video.ogg)a.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void i("videoautoplay",!1);a.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(s){return void i("videoautoplay",!1)}a.setAttribute("autoplay",""),c.cssText="display:none",h.appendChild(a),setTimeout(function(){a.addEventListener("playing",A,!1),e=setTimeout(A,o)},0)}),a(),t(c),delete r.addTest,delete r.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();A.Modernizr=Modernizr}(window,document);

//
// Runes lib
//
const HIGH_SURROGATE_START = 0xd800
const HIGH_SURROGATE_END = 0xdbff

const LOW_SURROGATE_START = 0xdc00

const REGIONAL_INDICATOR_START = 0x1f1e6
const REGIONAL_INDICATOR_END = 0x1f1ff

const FITZPATRICK_MODIFIER_START = 0x1f3fb
const FITZPATRICK_MODIFIER_END = 0x1f3ff

const VARIATION_MODIFIER_START = 0xfe00
const VARIATION_MODIFIER_END = 0xfe0f

const DIACRITICAL_MARKS_START = 0x20d0
const DIACRITICAL_MARKS_END = 0x20ff

const ZWJ = 0x200d

const GRAPHEMS = [
  0x0308, // (  ) COMBINING DIAERESIS
  0x0937, // ( ष ) DEVANAGARI LETTER SSA
  0x0937, // ( ष ) DEVANAGARI LETTER SSA
  0x093F, // (  ) DEVANAGARI VOWEL SIGN I
  0x093F, // (  ) DEVANAGARI VOWEL SIGN I
  0x0BA8, // ( ந ) TAMIL LETTER NA
  0x0BBF, // (  ) TAMIL VOWEL SIGN I
  0x0BCD, // ( ) TAMIL SIGN VIRAMA
  0x0E31, // (  ) THAI CHARACTER MAI HAN-AKAT
  0x0E33, // ( ำ ) THAI CHARACTER SARA AM
  0x0E40, // ( เ ) THAI CHARACTER SARA E
  0x0E49, // ( เ ) THAI CHARACTER MAI THO
  0x1100, // ( ᄀ ) HANGUL CHOSEONG KIYEOK
  0x1161, // ( ᅡ ) HANGUL JUNGSEONG A
  0x11A8 // ( ᆨ ) HANGUL JONGSEONG KIYEOK
]

function runes (string) {
  if (typeof string !== 'string') {
    throw new Error('string cannot be undefined or null')
  }
  const result = []
  let i = 0
  let increment = 0
  while (i < string.length) {
    increment += nextUnits(i + increment, string)
    if (isGraphem(string[i + increment])) {
      increment++
    }
    if (isVariationSelector(string[i + increment])) {
      increment++
    }
    if (isDiacriticalMark(string[i + increment])) {
      increment++
    }
    if (isZeroWidthJoiner(string[i + increment])) {
      increment++
      continue
    }
    result.push(string.substring(i, i + increment))
    i += increment
    increment = 0
  }
  return result
}

// Decide how many code units make up the current character.
// BMP characters: 1 code unit
// Non-BMP characters (represented by surrogate pairs): 2 code units
// Emoji with skin-tone modifiers: 4 code units (2 code points)
// Country flags: 4 code units (2 code points)
// Variations: 2 code units
function nextUnits (i, string) {
  const current = string[i]
  // If we don't have a value that is part of a surrogate pair, or we're at
  // the end, only take the value at i
  if (!isFirstOfSurrogatePair(current) || i === string.length - 1) {
    return 1
  }

  const currentPair = current + string[i + 1]
  let nextPair = string.substring(i + 2, i + 5)

  // Country flags are comprised of two regional indicator symbols,
  // each represented by a surrogate pair.
  // See http://emojipedia.org/flags/
  // If both pairs are regional indicator symbols, take 4
  if (isRegionalIndicator(currentPair) && isRegionalIndicator(nextPair)) {
    return 4
  }

  // If the next pair make a Fitzpatrick skin tone
  // modifier, take 4
  // See http://emojipedia.org/modifiers/
  // Technically, only some code points are meant to be
  // combined with the skin tone modifiers. This function
  // does not check the current pair to see if it is
  // one of them.
  if (isFitzpatrickModifier(nextPair)) {
    return 4
  }
  return 2
}

function isFirstOfSurrogatePair (string) {
  return string && betweenInclusive(string[0].charCodeAt(0), HIGH_SURROGATE_START, HIGH_SURROGATE_END)
}

function isRegionalIndicator (string) {
  return betweenInclusive(codePointFromSurrogatePair(string), REGIONAL_INDICATOR_START, REGIONAL_INDICATOR_END)
}

function isFitzpatrickModifier (string) {
  return betweenInclusive(codePointFromSurrogatePair(string), FITZPATRICK_MODIFIER_START, FITZPATRICK_MODIFIER_END)
}

function isVariationSelector (string) {
  return typeof string === 'string' && betweenInclusive(string.charCodeAt(0), VARIATION_MODIFIER_START, VARIATION_MODIFIER_END)
}

function isDiacriticalMark (string) {
  return typeof string === 'string' && betweenInclusive(string.charCodeAt(0), DIACRITICAL_MARKS_START, DIACRITICAL_MARKS_END)
}

function isGraphem (string) {
  return typeof string === 'string' && GRAPHEMS.indexOf(string.charCodeAt(0)) !== -1
}

function isZeroWidthJoiner (string) {
  return typeof string === 'string' && string.charCodeAt(0) === ZWJ
}

function codePointFromSurrogatePair (pair) {
  const highOffset = pair.charCodeAt(0) - HIGH_SURROGATE_START
  const lowOffset = pair.charCodeAt(1) - LOW_SURROGATE_START
  return (highOffset << 10) + lowOffset + 0x10000
}

function betweenInclusive (value, lower, upper) {
  return value >= lower && value <= upper
}

function substring (string, start, width) {
  const chars = runes(string)
  if (start === undefined) {
    return string
  }
  if (start >= chars.length) {
    return ''
  }
  const rest = chars.length - start
  const stringWidth = width === undefined ? rest : width
  let endIndex = start + stringWidth
  if (endIndex > (start + rest)) {
    endIndex = undefined
  }
  return chars.slice(start, endIndex).join('')
}

//
// Surfshow parsing
//
var SLAPSHOWS = {}
var SLAPANIM_WAIT = 0
var SLAPANIM_TEXT = 100
var SLAPSHOW_AUTOPLAY = false

function slapscript(src, fn) {
  var s = document.createElement("script")
  s.src = src
  if (fn) s.onload = fn
  document.head.appendChild(s)
  return s
}

function slapstyle(src) {
  var s = document.createElement("link")
  s.rel = "stylesheet"
  s.href = src
  document.head.appendChild(s)
  return s
}

function slaptrash(div) {
  var st = u(div)
  var script = [{layers: []}]

  st.children().each(function (ele) {
    var props = {}
    if (ele.hasAttributes()) {
      var attrs = ele.attributes
      for (var i = attrs.length - 1; i >= 0; i--) {
        props[attrs[i].name] = attrs[i].value
      }
    }

    if (ele.nodeName === "HR") {
      script[script.length - 1].br = props
      script.push({layers: []})
    } else {
      props['type'] = ele.nodeName
      if (ele.innerHTML)
        props['html'] = ele
      script[script.length - 1].layers.push(props)
    }
  }).remove()
  var overlay = u("<div class='overlay paused'><div class='TIMER'></div><div class='START'></div></div>")
  st.append(overlay)

  var show = {page: 0, script: script, stack: [], history: [], timer: null,
    anims: [], starts: [], stage: 0}

  st.on('click', function (ev) {
    switch (show.stage) {
      case 0:
			show.starts.forEach(function (s) {
				if (typeof s.command !== 'undefined') {
					s.command('play')
				}
			})
			show.starts = []
			show.timer = setInterval(function () { slapframe(show) }, 50)
			overlay.removeClass('paused')
			show.stage++
      break

      case 1:
      slapplay(div, true)
      break
    }
  })

  SLAPSHOWS[div] = show
}

function slapsay(hdr, phrase) {
  var talk = new SpeechSynthesisUtterance(phrase.replace(/\s+/g, ' '))
  if (hdr === "H1" || hdr == "H2") {
    talk.rate = talk.pitch = 0.5;
  } else if (hdr === "H3" || hdr === "H4") {
    talk.rate = talk.pitch = 1.5;
  } else if (hdr === "H5" || hdr === "H6") {
    talk.rate = talk.pitch = 2.0;
  }
  window.speechSynthesis.speak(talk)
}

function slaptime(desc) {
  var pcs = desc.split(":")
  var mult = [24, 60, 60, 1], c = null, secs = 0, unit = 1
  while (c = pcs.pop()) {
    unit *= mult.pop()
    secs += new Number(c) * unit
  }
  return secs
}

function slapdim(tiles) {
  var dim = [0, 0, 1, 1]
  var w = window.innerWidth * (tiles ? (1 / tiles[1]) : 1),
      h = window.innerHeight * (tiles ? (1 / tiles[2]) : 1)
  dim = [0, 0, w, h]
  if (dim[0] > dim[1] * (16.0 / 9.0)) {
    dim[3] = Math.ceil(dim[2] / (16.0 / 9.0))
    dim[1] = ((h - dim[3]) * 0.5)
  } else {
    dim[2] = Math.ceil(dim[3] * (16.0 / 9.0))
    dim[0] = ((w - dim[2]) * 0.5)
  }
  return dim
}

function dim2style(dim) {
  return (dim ? ' style="position: absolute; left: ' + dim[0] + 'px;' +
    'top: ' + dim[1] + 'px;' + 'width: ' + dim[2] + 'px;' +
    'height: ' + dim[3] + 'px;"' : '')
}

function slapimgur(dim, m, ele, autoplay) {
  return u('<video poster="//i.imgur.com/' + m[3] + '.jpg"' +
    (autoplay ? ' onloadeddata="this.play()" ' : '') +
    dim + 
    ' muted playsinline loop><source src="//i.imgur.com/' + m[3] + '.mp4" type="video/mp4">' +
    '<source src="//i.imgur.com/' + m[3] + '.webm" type="video/webm"></video>')
}

function slapcard(dim, url, ele) {
  (function(w, d){
   var id='embedly-platform', n = 'script';
   if (!d.getElementById(id)){
     w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
     var e = d.createElement(n); e.id = id; e.async=1;
     e.src = 'https://cdn.embedly.com/widgets/platform.js';
     var s = d.getElementsByTagName(n)[0];
     s.parentNode.insertBefore(e, s);
   }
  })(window, document);
  return u('<a href="' + url + '" class="embedly-card"></a>')
}

function slapyt(dim, m, ele, autoplay) {
  var obj = u('<iframe class="' + ele.type + '" ' +
    'src="https://www.youtube.com/embed/' + (m[4] || m[5]) +
    '?rel=0&loop=1&controls=0&iv_load_policy=3&modestbranding=1&enablejsapi=1' +
    (autoplay ? '&autoplay=1' : '') + '&playsinline=1' +
    (ele.mute === "true" ? '&mute=1' : '') +
    (ele.start ? '&start=' + slaptime(ele.start) : '') +
    '" ' + dim2style(dim) + 'frameborder="0" allow="accelerometer; encrypted-media; autoplay; ' +
    'gyroscope; picture-in-picture" allowfullscreen></iframe>')
  obj.command = function (name) {
    var action = null
    switch (name) {
      case "play":
        action = 'playVideo'
      break
    }
    if (action) {
      var cmd = JSON.stringify({event: "command", func: action, args: ''})
      obj.first().contentWindow.postMessage(cmd, '*')
    }
  }
  return obj
}

function slaptwitchtime(str) {
  var units = ['h', 'm', 's']
  var at = ''
  str.split(':').reverse().forEach(function (n) {
    at = n + units.pop() + at
  })
  return at
}

function slaptwitch(dim, m, ele, autoplay) {
  var url = 'https://player.twitch.tv/?channel=' + m[7]
  switch (m[5]) {
    case "clip":
      url = 'https://clips.twitch.tv/embed?clip=' + m[6] 
    break
    case "videos":
      url = 'https://player.twitch.tv/?video=' + m[6] 
    break
    case "collections":
      url = 'https://player.twitch.tv/?collection=' + m[6] 
    break
  }

  var obj = u('<iframe class="' + ele.type + '" ' +
    'src="' + url + '&allowfullscreen&origin=' + encodeURIComponent(parent.location.origin) +
    '&autoplay=' + (autoplay ? 'true' : 'false') +
    (ele.mute === "true" ? '&muted=true' : '') +
    (ele.start ? '&time=' + slaptwitchtime(ele.start) : '') +
    '" ' + dim2style(dim) + 'frameborder="0" scrolling="no" allow="accelerometer; ' +
    'autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  obj.command = function (name) {
    obj.first().contentWindow.postMessage({namespace: 'player.embed.host', method: name}, '*')
  }
  return obj
}

function slapcolor(color, attr, add) {
  if (!color) return ''
  var style = (attr ? ' style="' : '') + 'background: '
  if (color.indexOf(' ') !== -1) {
    var shape = (color.indexOf('circle ') === 0 ? "radial" : "linear")
    style += '-webkit-' + shape + '-gradient(' + color.split(' ').join(',') + ')'
  } else {
    style += color
  }
  return style + ';' + (add ? add : '') + (attr ? '"' : '')
}

var SLAPSHOW_IMGUR = /^(https?:\/\/)?(\w+\.)?imgur\.com\/(\w+)(\.\w+)?$/
var SLAPSHOW_YOUTUBE = /^(https?:\/\/)?(\w+\.)?(youtube\.com\/.+v=([\w\-]+)|youtu\.be\/([\w\-]+))/
var SLAPSHOW_TWITCH = /^(https?:\/\/)?(\w+\.)?twitch\.tv((\/|\/.+\/)(clip|videos|collections)\/(\w+)|\/(\w+))/
var SLAPSHOW_TILE = /^(\d+)x(\d+)$/

function slapplay(div, advance) {
  var udiv = u('.overlay', div)
  var show = SLAPSHOWS[div]
  var page = show.script[show.page]
  var tiles = null
  window.speechSynthesis.cancel()

  if (advance) {
    if (page.br) {
      if (page.br.pop === "all") {
        show.stack.forEach(function (el) { el.remove() })
        show.stack = []
      } else if (typeof(page.br.pop) !== 'undefined') {
        var dir = new Number(page.br.pop || '1')
        var num = Math.abs(dir)
        while (num-- > 0) {
          var x = (dir > 0 ? show.stack.pop() : show.stack.shift())
          if (x)
             x.remove()
        }
      }
    }

    show.history.push(show.page)
    show.page++
  }

  for (var i = show.anims.length - 1; i >= 0; i--) {
    var anim = show.anims[i]
    switch (anim[0]) {
      case SLAPANIM_WAIT:
        show.anims.splice(i, 1)
      break;
    }
  }

  page = show.script[show.page]
  if (page.br) {
    if (page.br.time) {
      show.anims.unshift([SLAPANIM_WAIT, 0, slaptime(page.br.time) * 20, div,
        slapcolor(page.br.color || "yellow", false)]) 
    }
  } else {
    udiv.addClass('stopped')
    show.stage = 2
  }

  u('.TIMER', udiv.first()).attr('style', 'height: 20px; width: 0;')
  page.layers.forEach(function (ele) {
    var cr = null
    switch (ele.type) {
      case "TILE":
        var m = null
        if (m = ele.html.innerText.match(SLAPSHOW_TILE)) {
          tiles = [new Number(ele.start || '1') - 1, new Number(m[1]), new Number(m[2])]
        }
      break
      case "SOLID":
        cr = u('<div class="solid"' + slapcolor(ele.color, true) + '></div>')
      break
      case "P":
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6":
      case "DIV":
        var style = slapcolor(ele.color, true, "-webkit-background-clip: text;-webkit-text-fill-color: transparent;")
        cr = u('<div class="' + ele.type + '"' + style + '></div>')
        var txt = ele.html.innerText
        var len = runes(txt).length
        show.anims.unshift([SLAPANIM_TEXT, cr, ele, 0, len / 12, len, txt]) 
      break
      case "PIC":
        var base = ele.html.innerText, m = null
        if (m = base.match(SLAPSHOW_IMGUR)) {
          cr = u('<img src="https://i.imgur.com/' + m[3] +
            (m[4] ? m[4] : '.jpg') + '" />')
        } else {
          cr = u('<img src="' + base + '" />')
        }
      break
      case "CARD":
        var dim = slapdim(tiles)
        cr = slapcard(dim, ele.html.innerText, ele)
			break
      case "SOUND":
      case "VID":
        var base = ele.html.innerText, m = null, dim = null,
            autoplay = advance && SLAPSHOW_AUTOPLAY
        if (ele.type != "SOUND") {
          dim = slapdim(tiles)
        }
        if (m = base.match(SLAPSHOW_YOUTUBE)) {
          cr = slapyt(dim, m, ele, advance)
        } else if (m = base.match(SLAPSHOW_TWITCH)) {
          cr = slaptwitch(dim, m, ele, advance)
        } else if (m = base.match(SLAPSHOW_IMGUR)) {
          cr = slapimgur(dim, m, ele, advance)
        }
        if (!advance)
          show.starts.push(cr)
      break
    }

    if (cr) {
      var tilestyle = ''
      if (tiles) {
        if (tiles[0] == tiles[1] * tiles[2]) {
          tiles = null
        } else {
          var xunit = 100 * (1 / tiles[1]),
              yunit = 100 * (1 / tiles[2])
          tilestyle = ' style="top: ' + (yunit * Math.floor(tiles[0] / tiles[1])) + '%;' +
            'left: ' + (xunit * (tiles[0] % tiles[1])) + '%;' +
            'width: ' + xunit + '%; height: ' + yunit + '%;"'
          tiles[0]++
        }
      }
      var wrap = u('<div' + tilestyle + '></div>')
      var inner = u('<div></div>')
      wrap.append(inner)
      inner.append(cr)
      show.stack.push(wrap)
      udiv.before(wrap)

      if (ele.zoom) { 
        wrap.attr('transform', 'scale(' + ele.zoom + ')')
      } else if (ele.effect === "trail") {
				wrap.attr('style', 'animation: slapanimtrail 5s')
			} else if (ele.effect === "spin") {
				wrap.attr('style', 'animation: slapanimspin 5s infinite')
			} else if (ele.effect === "erratic") {
				wrap.attr('style', 'animation: slapanimerratic 0.4s infinite')
      }
    }
  })
}

function slaptext(childs, max) {
  var html = ""
  childs.forEach(function (bit) {
    if (bit.nodeName === "#text") {
      var str = substring(bit.textContent, 0, max)
      max -= runes(str).length
      html += str
    } else {
      var tag = bit.outerHTML
      html += tag.substr(0, tag.indexOf('>') + 1)
      var sub = slaptext(bit.childNodes, max)
      html += sub[0]
      max = sub[1]
      html += tag.substr(tag.lastIndexOf('<'))
    }
  })
  return [html, max]
}

function slapframe(show) {
  var textframe = false
  for (var i = show.anims.length - 1; i >= 0; i--) {
    var anim = show.anims[i]
    switch (anim[0]) {
      case SLAPANIM_WAIT:
        if (anim[1] >= anim[2]) {
          show.anims.splice(i, 1)
          slapplay(anim[3], true)
        } else {
          anim[1]++
          u('.overlay > .TIMER', anim[3]).attr('style', 'height: 20px; width: ' +
            Math.ceil((anim[1] / anim[2]) * 100) + '%;' + anim[4])
        }
      break;
      case SLAPANIM_TEXT:
        if (!textframe) {
					if (anim[3] >= anim[5]) {
						show.anims.splice(i, 1)
					} else {
						if (anim[3] == 0 && anim[2].mute !== "true")
							slapsay(anim[2].type, anim[6])
						var chars = anim[3] += anim[4]
						anim[1].html(slaptext(anim[2].html.childNodes, chars)[0])
					}
          textframe = true
				}
      break
    }
  }
}

//
// Init
//
function ready(fn) {
  if (document.readyState !== 'loading'){
    return fn()
  }
  document.addEventListener('DOMContentLoaded', fn)
}

Modernizr.on('videoautoplay', function(result) {
  SLAPSHOW_AUTOPLAY = result
	slapstyle('https://kickscondor.github.io/css/slaptrash.css')
	slapscript('https://cdn.jsdelivr.net/npm/umbrellajs', function () {
		ready(function () {
			u('.slaptrash').each(slaptrash).each(slapplay)
		})
	})
})
