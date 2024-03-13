// This script will apply styles to odd and even spans within each .separator__text
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.separator__top .separator__text span:nth-child(odd)').forEach(span => {
        span.style.color = '#fafafa';
    });
    document.querySelectorAll('.separator__bottom .separator__text span:nth-child(odd)').forEach(span => {
        span.style.color = '#a6f6cb';
    });
});

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var topText = document.querySelector('.separator__top .separator__text');
    var bottomText = document.querySelector('.separator__bottom .separator__text');

    // Calculate the horizontal scroll. The multiplier determines the scroll speed relative to the vertical scroll
    var scrollLeftTop = scrollTop * 0.5; // Adjust multiplier as needed
    var scrollLeftBottom = scrollTop * 0.5; // Adjust multiplier as needed, and invert direction

    // Apply the horizontal scroll, maintain rotation for bottomText
    topText.style.transform = `translateX(-100vw) translateX(${scrollLeftTop}px)`;
    // Since bottomText is always rotated 180deg, we combine the transforms
    bottomText.style.transform = `rotate(180deg) translateX(${scrollLeftBottom}px)`;
});

// Script 1
window._wpemojiSettings = {
baseUrl: "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
ext: ".png",
svgUrl: "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
svgExt: ".svg",
source: {
    concatemoji:
    "https:\/\/www.scalzodesign.be\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.3.2",
},
};
/*! This file is auto-generated */
!(function (i, n) {
var o, s, e;
function c(e) {
    try {
    var t = { supportTests: e, timestamp: new Date().valueOf() };
    sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
}
function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height),
    e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
    ),
    r =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
    return e === r[t];
    });
}
function u(e, t, n) {
    switch (t) {
    case "flag":
        return n(
        e,
        "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
        "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
        ? !1
        : !n(
            e,
            "\ud83c\uddfa\ud83c\uddf3",
            "\ud83c\uddfa\u200b\ud83c\uddf3"
            ) &&
            !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
            );
    case "emoji":
        return !n(
        e,
        "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff",
        "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff"
        );
    }
    return !1;
}
function f(e, t, n) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
        ? new OffscreenCanvas(300, 150)
        : i.createElement("canvas"),
    a = r.getContext("2d", { willReadFrequently: !0 }),
    o = ((a.textBaseline = "top"), (a.font = "600 32px Arial"), {});
    return (
    e.forEach(function (e) {
        o[e] = t(a, e, n);
    }),
    o
    );
}
function t(e) {
    var t = i.createElement("script");
    (t.src = e), (t.defer = !0), i.head.appendChild(t);
}
"undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (s = ["flag", "emoji"]),
    (n.supports = { everything: !0, everythingExceptFlag: !0 }),
    (e = new Promise(function (e) {
    i.addEventListener("DOMContentLoaded", e, { once: !0 });
    })),
    new Promise(function (t) {
    var n = (function () {
        try {
        var e = JSON.parse(sessionStorage.getItem(o));
        if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
        )
            return e.supportTests;
        } catch (e) {}
        return null;
    })();
    if (!n) {
        if (
        "undefined" != typeof Worker &&
        "undefined" != typeof OffscreenCanvas &&
        "undefined" != typeof URL &&
        URL.createObjectURL &&
        "undefined" != typeof Blob
        )
        try {
            var e =
                "postMessage(" +
                f.toString() +
                "(" +
                [JSON.stringify(s), u.toString(), p.toString()].join(
                ","
                ) +
                "));",
            r = new Blob([e], { type: "text/javascript" }),
            a = new Worker(URL.createObjectURL(r), {
                name: "wpTestEmojiSupports",
            });
            return void (a.onmessage = function (e) {
            c((n = e.data)), a.terminate(), t(n);
            });
        } catch (e) {}
        c((n = f(s, u, p)));
    }
    t(n);
    })
    .then(function (e) {
        for (var t in e)
        (n.supports[t] = e[t]),
            (n.supports.everything =
            n.supports.everything && n.supports[t]),
            "flag" !== t &&
            (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
        n.supports.everythingExceptFlag && !n.supports.flag),
        (n.DOMReady = !1),
        (n.readyCallback = function () {
            n.DOMReady = !0;
        });
    })
    .then(function () {
        return e;
    })
    .then(function () {
        var e;
        n.supports.everything ||
        (n.readyCallback(),
        (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
    }));
})((window, document), window._wpemojiSettings);

var cnArgs = {
    ajaxUrl: "https:\/\/www.scalzodesign.be\/wp-admin\/admin-ajax.php",
    nonce: "06926989f2",
    hideEffect: "slide",
    position: "bottom",
    onScroll: false,
    onScrollOffset: 100,
    onClick: false,
    cookieName: "cookie_notice_accepted",
    cookieTime: 2592000,
    cookieTimeRejected: 2592000,
    globalCookie: false,
    redirection: false,
    cache: false,
    revokeCookies: false,
    revokeCookiesOpt: "automatic",
  };

  (function ($) {
    $(document).ready(function () {
      // videos
      function flickityVideos(isChange, _this) {
        // first stop all videos
        if (true === isChange) {
          _this.find("video").each(function () {
            $(this)[0].pause();
          });
        }
        // get current slide
        var currentSlide = _this.find(".is-selected");
        // search for video
        var video = currentSlide.find("video");
        // has video?
        if (video.length > 0) {
          video[0].play();
          // video caption
          if (
            currentSlide.find(".video-caption").length >
            0
          ) {
            $(".flickity-caption").text(
              currentSlide.find(".video-caption").text()
            );
          } else {
            $(".flickity-caption").text("");
          }
        }
      }
      // ready event listener
      $("#gallery-content_fteyn1tq3").on(
        "ready.flickity",
        function () {
          // append dots to flickity meta
          if (
            $(this).find(".flickity-page-dots").length >
            0
          ) {
            $("#content_fteyn1tq3")
              .find(".flickity-meta")
              .append(
                $(this).find(".flickity-page-dots")
              );
          }
          // refresh scroll trigger
          s4.helper.refreshScrollTrigger();
          // videos
          flickityVideos(false, $(this));
          // sync scroll reveal
          if (s4.srStatus == "enabled") {
            sr.sync();
          }
        }
      );
      // videos
      $("#gallery-content_fteyn1tq3").on(
        "change.flickity",
        function () {
          // videos
          flickityVideos(true, $(this));
        }
      );
      // flickity
      var $gallery = $(
        "#gallery-content_fteyn1tq3"
      ).flickity({
        autoPlay: 3000,
        adaptiveHeight: false,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: false,
        setGallerySize: true,
        selectedAttraction: 0.02,
        friction: 0.24,
        percentPosition: true,
        imagesLoaded: true,
        arrowShape:
          "M95.849,46.323H14.1L40.364,20.15a4.166,4.166,0,0,0-5.9-5.881L1.076,47.537a4.162,4.162,0,0,0,0,5.891L34.462,86.7a4.166,4.166,0,0,0,5.9-5.881L14.1,54.642H95.849A4.159,4.159,0,1,0,95.849,46.323Z",
        pauseAutoPlayOnHover: false,
      });

      // resize cells after video loaded
      function onLoadeddata(event) {
        var cell = $gallery.flickity(
          "getParentCell",
          event.target
        );
        $gallery.flickity(
          "cellSizeChange",
          cell && cell.element
        );
        // refresh scroll trigger
        s4.helper.refreshScrollTrigger();
        // sync scroll reveal
        if (s4.srStatus == "enabled") {
          sr.sync();
        }
      }
      // call resize on loadeddata
      $gallery.find("video").each(function (i, video) {
        $(video).on("loadeddata", onLoadeddata);
      });
    });
  })(jQuery);

  var mejsL10n = {
    language: "fr",
    strings: {
      "mejs.download-file": "T\u00e9l\u00e9charger le fichier",
      "mejs.install-flash":
        "Vous utilisez un navigateur qui n\u2019a pas le lecteur Flash activ\u00e9 ou install\u00e9. Veuillez activer votre extension Flash ou t\u00e9l\u00e9charger la derni\u00e8re version \u00e0 partir de cette adresse\u00a0: https:\/\/get.adobe.com\/flashplayer\/",
      "mejs.fullscreen": "Plein \u00e9cran",
      "mejs.play": "Lecture",
      "mejs.pause": "Pause",
      "mejs.time-slider": "Curseur de temps",
      "mejs.time-help-text":
        "Utilisez les fl\u00e8ches droite\/gauche pour avancer d\u2019une seconde, haut\/bas pour avancer de dix secondes.",
      "mejs.live-broadcast": "\u00c9mission en direct",
      "mejs.volume-help-text":
        "Utilisez les fl\u00e8ches haut\/bas pour augmenter ou diminuer le volume.",
      "mejs.unmute": "R\u00e9activer le son",
      "mejs.mute": "Muet",
      "mejs.volume-slider": "Curseur de volume",
      "mejs.video-player": "Lecteur vid\u00e9o",
      "mejs.audio-player": "Lecteur audio",
      "mejs.captions-subtitles": "L\u00e9gendes\/Sous-titres",
      "mejs.captions-chapters": "Chapitres",
      "mejs.none": "Aucun",
      "mejs.afrikaans": "Afrikaans",
      "mejs.albanian": "Albanais",
      "mejs.arabic": "Arabe",
      "mejs.belarusian": "Bi\u00e9lorusse",
      "mejs.bulgarian": "Bulgare",
      "mejs.catalan": "Catalan",
      "mejs.chinese": "Chinois",
      "mejs.chinese-simplified": "Chinois (simplifi\u00e9)",
      "mejs.chinese-traditional": "Chinois (traditionnel)",
      "mejs.croatian": "Croate",
      "mejs.czech": "Tch\u00e8que",
      "mejs.danish": "Danois",
      "mejs.dutch": "N\u00e9erlandais",
      "mejs.english": "Anglais",
      "mejs.estonian": "Estonien",
      "mejs.filipino": "Filipino",
      "mejs.finnish": "Finnois",
      "mejs.french": "Fran\u00e7ais",
      "mejs.galician": "Galicien",
      "mejs.german": "Allemand",
      "mejs.greek": "Grec",
      "mejs.haitian-creole": "Cr\u00e9ole ha\u00eftien",
      "mejs.hebrew": "H\u00e9breu",
      "mejs.hindi": "Hindi",
      "mejs.hungarian": "Hongrois",
      "mejs.icelandic": "Islandais",
      "mejs.indonesian": "Indon\u00e9sien",
      "mejs.irish": "Irlandais",
      "mejs.italian": "Italien",
      "mejs.japanese": "Japonais",
      "mejs.korean": "Cor\u00e9en",
      "mejs.latvian": "Letton",
      "mejs.lithuanian": "Lituanien",
      "mejs.macedonian": "Mac\u00e9donien",
      "mejs.malay": "Malais",
      "mejs.maltese": "Maltais",
      "mejs.norwegian": "Norv\u00e9gien",
      "mejs.persian": "Perse",
      "mejs.polish": "Polonais",
      "mejs.portuguese": "Portugais",
      "mejs.romanian": "Roumain",
      "mejs.russian": "Russe",
      "mejs.serbian": "Serbe",
      "mejs.slovak": "Slovaque",
      "mejs.slovenian": "Slov\u00e9nien",
      "mejs.spanish": "Espagnol",
      "mejs.swahili": "Swahili",
      "mejs.swedish": "Su\u00e9dois",
      "mejs.tagalog": "Tagalog",
      "mejs.thai": "Thai",
      "mejs.turkish": "Turc",
      "mejs.ukrainian": "Ukrainien",
      "mejs.vietnamese": "Vietnamien",
      "mejs.welsh": "Ga\u00e9lique",
      "mejs.yiddish": "Yiddish",
    },
  };

var _wpmejsSettings = {
    pluginPath: "\/wp-includes\/js\/mediaelement\/",
    classPrefix: "mejs-",
    stretching: "responsive",
    audioShortcodeLibrary: "mediaelement",
    videoShortcodeLibrary: "mediaelement",
  };

  (function ($) {
    "use strict";
    var playRepeat = [];
    s4.animate.gsap["content_25upcjcby"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_25upcjcby .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_25upcjcby .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_25upcjcby"].to(
      "#content-holder #content_25upcjcby .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_25upcjcby"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_bql70bhnp"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_bql70bhnp .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_bql70bhnp .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_bql70bhnp"].to(
      "#content-holder #content_bql70bhnp .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_bql70bhnp"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_o4ai86mkr"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_o4ai86mkr .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_o4ai86mkr .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_o4ai86mkr"].to(
      "#content-holder #content_o4ai86mkr .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_o4ai86mkr"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_4nrvat77t"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_4nrvat77t .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_4nrvat77t .is-content",
      JSON.parse(
        '{"translateY":"5.8333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.25,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_4nrvat77t"].to(
      "#content-holder #content_4nrvat77t .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_4nrvat77t"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_odarncrkn"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_odarncrkn .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_odarncrkn .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_odarncrkn"].to(
      "#content-holder #content_odarncrkn .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_odarncrkn"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_0qsf0cnt1"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_0qsf0cnt1 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_0qsf0cnt1 .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_0qsf0cnt1"].to(
      "#content-holder #content_0qsf0cnt1 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_0qsf0cnt1"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_k524frnev"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_k524frnev .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_k524frnev .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_k524frnev"].to(
      "#content-holder #content_k524frnev .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_k524frnev"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_64ipx5t4q"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_64ipx5t4q .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_64ipx5t4q .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":2,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_64ipx5t4q"].to(
      "#content-holder #content_64ipx5t4q .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_64ipx5t4q"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_qj7pxw8qx"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_qj7pxw8qx",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_qj7pxw8qx",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_qj7pxw8qx"].to(
      "#content-holder #content_qj7pxw8qx",
      props
    );
    // pause timeline
    s4.animate.gsap["content_qj7pxw8qx"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_r3l6op5w2"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_r3l6op5w2 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_r3l6op5w2 .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_r3l6op5w2"].to(
      "#content-holder #content_r3l6op5w2 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_r3l6op5w2"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_54lmxazbm"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_54lmxazbm .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_54lmxazbm .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_54lmxazbm"].to(
      "#content-holder #content_54lmxazbm .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_54lmxazbm"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_3xikdhz0q"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_3xikdhz0q .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_3xikdhz0q .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_3xikdhz0q"].to(
      "#content-holder #content_3xikdhz0q .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_3xikdhz0q"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_56rscek0l"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_56rscek0l .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_56rscek0l .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_56rscek0l"].to(
      "#content-holder #content_56rscek0l .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_56rscek0l"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_wham1pehk"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_wham1pehk .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_wham1pehk .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_wham1pehk"].to(
      "#content-holder #content_wham1pehk .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_wham1pehk"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_9anw8qy1c"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_9anw8qy1c .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_9anw8qy1c .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_9anw8qy1c"].to(
      "#content-holder #content_9anw8qy1c .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_9anw8qy1c"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_fteyn1tq3"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_fteyn1tq3 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_fteyn1tq3 .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_fteyn1tq3"].to(
      "#content-holder #content_fteyn1tq3 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_fteyn1tq3"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_defizobxm"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_defizobxm .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_defizobxm .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_defizobxm"].to(
      "#content-holder #content_defizobxm .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_defizobxm"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_d8e3c6ioc"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_d8e3c6ioc .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_d8e3c6ioc .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_d8e3c6ioc"].to(
      "#content-holder #content_d8e3c6ioc .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_d8e3c6ioc"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_atf96xm9h"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_atf96xm9h .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_atf96xm9h .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_atf96xm9h"].to(
      "#content-holder #content_atf96xm9h .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_atf96xm9h"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_vyax0l8zz"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_vyax0l8zz .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_vyax0l8zz .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_vyax0l8zz"].to(
      "#content-holder #content_vyax0l8zz .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_vyax0l8zz"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_rbpi9jzd2"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_rbpi9jzd2 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_rbpi9jzd2 .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_rbpi9jzd2"].to(
      "#content-holder #content_rbpi9jzd2 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_rbpi9jzd2"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_jlm27u06v"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_jlm27u06v .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_jlm27u06v .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_jlm27u06v"].to(
      "#content-holder #content_jlm27u06v .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_jlm27u06v"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_vq138iycw"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_vq138iycw .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_vq138iycw .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_vq138iycw"].to(
      "#content-holder #content_vq138iycw .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_vq138iycw"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_yo742jzfk"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_yo742jzfk .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_yo742jzfk .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_yo742jzfk"].to(
      "#content-holder #content_yo742jzfk .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_yo742jzfk"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_2sccltlej"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_2sccltlej .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_2sccltlej .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_2sccltlej"].to(
      "#content-holder #content_2sccltlej .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_2sccltlej"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_vedmzn0pw"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_vedmzn0pw .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_vedmzn0pw .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_vedmzn0pw"].to(
      "#content-holder #content_vedmzn0pw .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_vedmzn0pw"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_a93t3xwgc"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_a93t3xwgc .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_a93t3xwgc .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_a93t3xwgc"].to(
      "#content-holder #content_a93t3xwgc .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_a93t3xwgc"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_i74w3gsrd"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_i74w3gsrd .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_i74w3gsrd .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_i74w3gsrd"].to(
      "#content-holder #content_i74w3gsrd .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_i74w3gsrd"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_3j1qnh067"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_3j1qnh067 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_3j1qnh067 .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_3j1qnh067"].to(
      "#content-holder #content_3j1qnh067 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_3j1qnh067"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_rt5c3fd8i"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_rt5c3fd8i .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_rt5c3fd8i .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":2,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_rt5c3fd8i"].to(
      "#content-holder #content_rt5c3fd8i .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_rt5c3fd8i"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_rp6zlm507"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_rp6zlm507 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_rp6zlm507 .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_rp6zlm507"].to(
      "#content-holder #content_rp6zlm507 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_rp6zlm507"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_micpgzg8p"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_micpgzg8p .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_micpgzg8p .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_micpgzg8p"].to(
      "#content-holder #content_micpgzg8p .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_micpgzg8p"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_v7fwc1qj4"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_v7fwc1qj4 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_v7fwc1qj4 .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":2,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_v7fwc1qj4"].to(
      "#content-holder #content_v7fwc1qj4 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_v7fwc1qj4"].pause();
    $(window).scroll();
  })(jQuery);
  (function ($) {
    "use strict";
    var playRepeat = [];
    s4.animate.gsap["content_211649006"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_211649006 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_211649006 .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_211649006"].to(
      "#content-holder #content_211649006 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_211649006"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_457d10080"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_457d10080 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_457d10080 .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":"-3.3333333333333rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1.5,"ease":"Power3.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_457d10080"].to(
      "#content-holder #content_457d10080 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_457d10080"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_eb0d03569"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_eb0d03569 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_eb0d03569 .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_eb0d03569"].to(
      "#content-holder #content_eb0d03569 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_eb0d03569"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_785c4b6f4"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_785c4b6f4 .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_785c4b6f4 .is-content",
      JSON.parse(
        '{"translateY":"3.3333rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Expo.easeInOut","delay":0,"opacity":1,"x":"0rem","y":0}'
    );
    // add to timeline
    s4.animate.gsap["content_785c4b6f4"].to(
      "#content-holder #content_785c4b6f4 .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_785c4b6f4"].pause();
    var playRepeat = [];
    s4.animate.gsap["content_74fa58d9c"] = gsap.timeline({
      scrollTrigger: "#content-holder #content_74fa58d9c .is-content",
      repeat: 0,
    });

    // gsap set transform
    gsap.set(
      "#content-holder #content_74fa58d9c .is-content",
      JSON.parse(
        '{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'
      )
    );

    // parse props
    var props = JSON.parse(
      '{"duration":1,"ease":"Circ.easeInOut","delay":0,"opacity":1}'
    );
    // add to timeline
    s4.animate.gsap["content_74fa58d9c"].to(
      "#content-holder #content_74fa58d9c .is-content",
      props
    );
    // pause timeline
    s4.animate.gsap["content_74fa58d9c"].pause();
    $(window).scroll();
  })(jQuery);