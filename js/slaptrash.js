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
var SLAPSHOWS = {}, SLAPANIMS = []
var SLAPANIM_WAIT = 0
var SLAPANIM_TEXT = 100

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
  var show = u(div)
  var script = [{layers: []}]

  show.children().each(function (ele) {
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
  show.append("<div class='overlay'><div class='START'></div></div>")

  show.on('click', function (ev) {
    slapplay(div, true)
  })

  SLAPSHOWS[div] = {page: 0, script: script, stack: [], history: []}
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

function slapdim(div, tiles) {
  var dim = [0, 0, 1, 1]
  if (div) {
    var w = div.offsetWidth * (tiles ? (1 / tiles[1]) : 1),
        h = div.offsetHeight * (tiles ? (1 / tiles[2]) : 1)
    dim = [0, 0, w, h]
    if (dim[0] > dim[1] * (16.0 / 9.0)) {
      dim[3] = Math.ceil(dim[2] / (16.0 / 9.0))
      dim[1] = ((h - dim[3]) * 0.5)
    } else {
      dim[2] = Math.ceil(dim[3] * (16.0 / 9.0))
      dim[0] = ((w - dim[2]) * 0.5)
    }
  }
  return ' style="position: absolute; left: ' + dim[0] + 'px;' +
    'top: ' + dim[1] + 'px;' + 'width: ' + dim[2] + 'px;' +
    'height: ' + dim[3] + 'px;"'
}

function slapimgur(dim, tiles, m, ele) {
  return '<video onloadeddata="this.play()" poster="//i.imgur.com/' + m[3] + '.jpg"' +
    dim + 
    ' muted playsinline loop><source src="//i.imgur.com/' + m[3] + '.mp4" type="video/mp4">' +
    '<source src="//i.imgur.com/' + m[3] + '.webm" type="video/webm"></video>'
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
  return '<a href="' + url + '" class="embedly-card"></a>'
}

function slapyt(dim, m, ele) {
  return '<iframe class="' + ele.type + '" ' +
    'src="https://www.youtube.com/embed/' + (m[4] || m[5]) +
    '?autoplay=1&rel=0&loop=1&controls=0&iv_load_policy=3&modestbranding=1' +
    (ele.mute === "true" ? '&mute=1' : '') +
    (ele.start ? '&start=' + slaptime(ele.start) : '') +
    '" ' + dim + 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; ' +
    'gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function slaptwitchtime(str) {
  var units = ['h', 'm', 's']
  var at = ''
  str.split(':').reverse().forEach(function (n) {
    at = n + units.pop() + at
  })
  return at
}

function slaptwitch(dim, m, ele) {
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

  return '<iframe class="' + ele.type + '" ' +
    'src="' + url + '&autoplay=true' +
    (ele.mute === "true" ? '&mute=true' : '') +
    (ele.start ? '&time=' + slaptwitchtime(ele.start) : '') +
    '" ' + dim + 'frameborder="0" scrolling="no" allow="accelerometer; autoplay; encrypted-media; ' +
    'gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function slaptwitchchat(m, ele) {
  var url = 'https://www.twitch.tv/embed/' + m[7] + '/chat'

  return '<iframe class="' + ele.type + '" ' +
    'src="' + url + '" frameborder="0" id="chat_embed" scrolling="no" ' +
    'width="100%" height="100%"></iframe>'
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

  for (var i = SLAPANIMS.length - 1; i >= 0; i--) {
    var anim = SLAPANIMS[i]
    switch (anim[0]) {
      case SLAPANIM_WAIT:
        SLAPANIMS.splice(i, 1)
      break;
    }
  }

  page = show.script[show.page]
  if (page.br) {
    if (page.br.time) {
      SLAPANIMS.push([SLAPANIM_WAIT, 0, slaptime(page.br.time) * 20, div,
        slapcolor(page.br.color || "yellow", false)]) 
    }
  }

  udiv.attr('style', 'height: 100%; width: 0;')
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
        SLAPANIMS.push([SLAPANIM_TEXT, cr, ele, 0, len / 12, len]) 
        if (ele.mute !== "true")
          slapsay(ele.type, txt)
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
      case "CHAT":
        var base = ele.html.innerText, m = null
        if (m = base.match(SLAPSHOW_TWITCH)) {
          cr = u(slaptwitchchat(m, ele))
        }
      break
      case "CARD":
        var dim = slapdim(div, tiles)
        cr = u(slapcard(dim, ele.html.innerText, ele))
			break
      case "SOUND":
      case "VID":
        var base = ele.html.innerText, m = null, dim = null
        if (ele.type != "SOUND") {
          dim = slapdim(div, tiles)
        }
        if (m = base.match(SLAPSHOW_YOUTUBE)) {
          cr = u(slapyt(dim, m, ele))
        } else if (m = base.match(SLAPSHOW_TWITCH)) {
          cr = u(slaptwitch(dim, m, ele))
        } else if (m = base.match(SLAPSHOW_IMGUR)) {
          cr = u(slapimgur(dim, m, ele))
        }
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

function slapframe() {
  for (var i = SLAPANIMS.length - 1; i >= 0; i--) {
    var anim = SLAPANIMS[i]
    switch (anim[0]) {
      case SLAPANIM_WAIT:
        if (anim[1] >= anim[2]) {
          SLAPANIMS.splice(i, 1)
          slapplay(anim[3], true)
        } else {
          anim[1]++
          u('.overlay', anim[3]).attr('style', 'height: 20px; width: ' +
            Math.ceil((anim[1] / anim[2]) * 100) + '%;' + anim[4])
        }
      break;
      case SLAPANIM_TEXT:
        if (anim[3] >= anim[5]) {
          SLAPANIMS.splice(i, 1)
        } else {
          var chars = anim[3] += anim[4]
          anim[1].html(slaptext(anim[2].html.childNodes, chars)[0])
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

slapstyle('https://kickscondor.github.io/css/slaptrash.css')
slapscript('https://cdn.jsdelivr.net/npm/umbrellajs', function () {
  ready(function () {
    u('.slaptrash').each(slaptrash).each(slapplay)
    setInterval(slapframe, 50)
  })
})
