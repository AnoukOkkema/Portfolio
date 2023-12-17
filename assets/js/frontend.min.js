!(function n(o, a, i) {
  function r(t, e) {
    if (!a[t]) {
      if (!o[t]) {
        var s = "function" == typeof require && require;
        if (!e && s) return s(t, !0);
        if (l) return l(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (s = a[t] = { exports: {} }),
        o[t][0].call(
          s.exports,
          function (e) {
            return r(o[t][1][e] || e);
          },
          s,
          s.exports,
          n,
          o,
          a,
          i
        );
    }
    return a[t].exports;
  }
  for (
    var l = "function" == typeof require && require, e = 0;
    e < i.length;
    e++
  )
    r(i[e]);
  return r;
})(
  {
    1: [
      function (e, t, s) {
        var m = jQuery;
        t.exports = {
          init: function (e, t, s, n) {
            switch (e.name) {
              case "horizontal-fullscreen":
                s4.customTransitions.horizontalFullscreen(
                  m("#content-" + s4.activePostElement),
                  e,
                  t,
                  s,
                  n
                );
                break;
              case "splitscreen":
                s4.customTransitions.splitscreen(
                  m("#content-" + s4.activePostElement),
                  e,
                  t,
                  s,
                  n
                );
            }
          },
          horizontalFullscreen: function (e, t, s, n, o) {
            m("#content-" + s4.activePostElement).css("z-index", 2);
            var t = m('[data-transition-element="' + t.element + '"]'),
              a = t.closest(".column-content").attr("id"),
              i = t.closest(".apg"),
              r = i.attr("data-title-visibility"),
              l =
                (Math.abs(t.closest(".flickity-slider").position().left),
                i.attr("data-object-fit")),
              c = i.attr("data-mouseover"),
              p = t.closest("div"),
              i =
                (p
                  .find(".apg-post-title")
                  .is(
                    ".fadeout, .fadeout-top, .fadeout-right, .fadeout-bottom, .fadeout-left"
                  ) && p.find(".apg-post-title").remove(),
                p.offset().top),
              t = parseInt(m(".transition-wrap").css("top")),
              d =
                (10 * Math.abs((p.offset().top / m(window).height()) * 100)) /
                1e3;
            s4.postTransition.custom = gsap.to(".transition-wrap", d, {
              top: "-" + (i - t) + "px",
              ease: "circ.out",
              onComplete: function () {
                var e, t;
                o == s4.ajaxVerify &&
                  ((e = parseInt(p.find(".post-thumbnail").attr("data-scale"))),
                  (t = p.offset().top - m(window).scrollTop()),
                  p
                    .clone()
                    .attr({
                      id: "apg-transition-" + a,
                      class: "apg-transition-clone",
                      "data-apg-preset": "horizontal-fullscreen",
                    })
                    .css({
                      position: "fixed",
                      width: p.width(),
                      height: p.height(),
                      top: t,
                      left: p.offset().left,
                      backgroundColor: p.css("background-color"),
                      zIndex: 10,
                    })
                    .appendTo(".content-container")
                    .find(".post-thumbnail")
                    .addClass("post-object-fit-" + l),
                  "scale-opacity" == c &&
                    m(".apg-transition-clone")
                      .find(".post-thumbnail")
                      .css("transform", "scale(" + (1 + e / 100) + ")"),
                  m("#apg-transition-" + a)
                    .find(".apg-grid-item")
                    .attr("data-title-visibility", r),
                  gsap.to(
                    m("#apg-transition-" + a).find(".apg-post-title"),
                    0.75,
                    { opacity: 0 }
                  ),
                  (s4.postTransition.extra = gsap.to(
                    m("#apg-transition-" + a),
                    1,
                    {
                      width: "100%",
                      height: m(window).height(),
                      maxWidth: "100%",
                      left: 0,
                      top: t,
                      zIndex: 10,
                      ease: "expo.inOut",
                      onComplete: function () {
                        var e, t;
                        o == s4.ajaxVerify &&
                          (m(window).scrollTop(0),
                          (e = s4.customTransitions.getAtts(
                            0.5,
                            "Power0.easeNone",
                            "Power4.easeIn",
                            "fade",
                            "top",
                            0,
                            ""
                          )),
                          (t = s4.customTransitions.getAtts(
                            0,
                            "Power0.easeNone",
                            "Power4.easeIn",
                            "fade",
                            "bottom",
                            0,
                            ""
                          )),
                          s4.transitions.init(
                            "fadeOut",
                            "fadeIn",
                            e,
                            t,
                            s,
                            n,
                            {
                              type: "out",
                              endTransition: "out",
                              id: "apg-hor-full",
                            },
                            o
                          ));
                      },
                    }
                  )),
                  "scale-opacity" == c &&
                    0 < e &&
                    (s4.postTransition.extra = gsap.to(
                      m("#apg-transition-" + a).find(".post-thumbnail"),
                      1,
                      { scale: 1, ease: "expo.inOut" }
                    )));
              },
            });
          },
          splitscreen: function (e, t, s, n, o) {
            m("#content-" + s4.activePostElement).css("z-index", 2);
            var a = m('[data-transition-element="' + t.element + '"]')
                .first()
                .closest(".apg-post"),
              i = a.closest(".column-content").attr("id"),
              t = a.closest(".apg"),
              r = (t.attr("data-title-visibility"), t.attr("data-object-fit")),
              t =
                (a
                  .find(".apg-post-title")
                  .is(
                    ".fadeout, .fadeout-top, .fadeout-right, .fadeout-bottom, .fadeout-left"
                  ) && a.find(".apg-post-title").remove(),
                a.offset().top),
              l = parseInt(m(".transition-wrap").css("top")),
              c =
                (10 * Math.abs((a.offset().top / m(window).height()) * 100)) /
                1e3,
              p = a.find(".apg-post-thumbnail").attr("data-thumb-bg-color");
            gsap.to(a.find(".post-thumbnail img"), c, {
              y: 0,
              ease: "circ.out",
            }),
              a.hasClass("apg-reveal")
                ? gsap.to(
                    a.find(".title, .description, .details, .post-thumbnail"),
                    0.5,
                    {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      ease: "circ.out",
                      onComplete: function () {
                        gsap.to(a.find(".title, .description, .details"), 0.8, {
                          opacity: 0,
                          delay: 0.3,
                          ease: "circ.out",
                        });
                      },
                    }
                  )
                : gsap.to(a.find(".title, .description, .details"), 0.8, {
                    opacity: 0,
                    delay: 0.3,
                    ease: "circ.out",
                  }),
              (s4.postTransition.custom = gsap.to(".transition-wrap", c, {
                top: "-" + (t - l) + "px",
                ease: "circ.out",
                onComplete: function () {
                  o == s4.ajaxVerify &&
                    (a
                      .clone()
                      .attr({
                        id: "apg-transition-" + i,
                        class: "apg-transition-clone",
                        "data-apg-preset": "splitscreen",
                      })
                      .css({
                        position: "fixed",
                        width: a.find(".apg-post-thumbnail").width(),
                        maxWidth: "100%",
                        height: a.find(".apg-post-thumbnail").height(),
                        top: 0,
                        left: a.find(".post-thumbnail").offset().left,
                        backgroundColor: a.css("background-color"),
                        zIndex: 10,
                      })
                      .appendTo(".content-container")
                      .find(".post-thumbnail")
                      .addClass("post-object-fit-" + r),
                    m("#apg-transition-" + i)
                      .find(".apg-post-title")
                      .remove(),
                    void 0 !== p &&
                      m("#apg-transition-" + i)
                        .find(".post-thumbnail")
                        .css({ backgroundColor: p, transform: "scale(1)" }),
                    (s4.postTransition.extra = gsap.to(
                      m("#apg-transition-" + i),
                      1,
                      {
                        width: "100%",
                        height: m(window).height(),
                        maxWidth: "100%",
                        left: 0,
                        top: 0,
                        zIndex: 10,
                        ease: "expo.inOut",
                        onComplete: function () {
                          var e, t;
                          o == s4.ajaxVerify &&
                            (m(window).scrollTop(0),
                            (e = s4.customTransitions.getAtts(
                              0.5,
                              "Power0.easeNone",
                              "Power4.easeIn",
                              "fade",
                              "top",
                              0,
                              ""
                            )),
                            (t = s4.customTransitions.getAtts(
                              0,
                              "Power0.easeNone",
                              "Power4.easeIn",
                              "fade",
                              "bottom",
                              0,
                              ""
                            )),
                            s4.transitions.init(
                              "fadeOut",
                              "fadeIn",
                              e,
                              t,
                              s,
                              n,
                              {
                                type: "out",
                                endTransition: "out",
                                id: "apg-splitscreen",
                              },
                              o
                            ));
                        },
                      }
                    )));
                },
              }));
          },
          reveal: {
            init: function (e, s, t, n) {
              var o = {},
                a =
                  (void 0 === s4.transition.reveal.custom ||
                    m.isEmptyObject(s4.transition.reveal.custom) ||
                    (o = s4.transition.reveal.custom),
                  m.extend(!0, {}, s4.transition.reveal)),
                i =
                  (m("#content-" + s4.activePostElement).css("z-index", 2),
                  "bottomToTop" == a.direction || "topToBottom" == a.direction
                    ? a.image_offset > window.innerHeight &&
                      (a.image_offset = window.innerHeight)
                    : a.image_offset > m(window).width() &&
                      (a.image_offset = m(window).width()),
                  { dir: "top", prefix: "-" });
              "bottomToTop" == a.direction
                ? (i = { dir: "bottom", prefix: "-" })
                : "leftToRight" == a.direction
                ? (i = { dir: "left", prefix: "-" })
                : "rightToLeft" == a.direction &&
                  (i = { dir: "right", prefix: "-" });
              var r,
                l = parseInt(window.innerHeight) - parseInt(a.image_offset),
                c = parseInt(m(window).width()) - parseInt(a.image_offset),
                i =
                  (void 0 !== o[s.id] &&
                    m.each(
                      [
                        "rt_image",
                        "rt_color",
                        "rt_image_size",
                        "rt_image_align",
                      ],
                      function (e, t) {
                        void 0 !== o[s.id][t] &&
                          (a[t.replace("rt_", "")] = o[s.id][t]);
                      }
                    ),
                  {
                    reveal: "background-color: " + a.color + ";",
                    revealImage:
                      i.dir + ": " + i.prefix + a.image_offset + "px;",
                  });
              !1 !== a.image &&
                (i.revealImage +=
                  "background-image: url(" +
                  a.image +
                  "); background-position: " +
                  a.image_align +
                  ";"),
                m("body").append(
                  '<div class="transition-reveal" style="' +
                    i.reveal +
                    '" data-reveal-direction="' +
                    a.direction +
                    '"><div class="transition-reveal-img" style="' +
                    i.revealImage +
                    '" data-reveal-bg-size="' +
                    a.image_size +
                    '"></div></div>'
                ),
                "topToBottom" == a.direction
                  ? (r = {
                      contentOut: {
                        bottom: "-" + a.offset,
                        top: "initial",
                        ease: a.easing,
                      },
                      revealImageIn: { top: "0px", ease: a.easing },
                      revealIn: { height: window.innerHeight, ease: a.easing },
                      contentIn: { top: "0px", ease: a.easing },
                      revealImageOut: {
                        top: 0,
                        y: "-" + l + "px",
                        ease: a.easing,
                      },
                      revealOut: { height: 0, ease: a.easing },
                      revealCss: { bottom: 0, top: "initial" },
                      contentCss: { top: "-" + a.offset + "px" },
                    })
                  : "bottomToTop" == a.direction
                  ? (r = {
                      contentOut: {
                        top: "-" + a.offset,
                        bottom: "initial",
                        ease: a.easing,
                      },
                      revealImageIn: { bottom: "0px", ease: a.easing },
                      revealIn: { height: window.innerHeight, ease: a.easing },
                      contentIn: { top: "0px", ease: a.easing },
                      revealImageOut: {
                        bottom: 0,
                        y: l + "px",
                        ease: a.easing,
                      },
                      revealOut: { height: 0, ease: a.easing },
                      revealCss: { top: 0, bottom: "initial" },
                      contentCss: { top: a.offset + "px" },
                    })
                  : "leftToRight" == a.direction
                  ? (r = {
                      contentOut: {
                        right: "-" + a.offset,
                        left: "initial",
                        ease: a.easing,
                      },
                      revealImageIn: { left: "0px", ease: a.easing },
                      revealIn: { width: m(window).width(), ease: a.easing },
                      contentIn: { left: "0px", ease: a.easing },
                      revealImageOut: {
                        left: 0,
                        x: "-" + c + "px",
                        ease: a.easing,
                      },
                      revealOut: { width: 0, ease: a.easing },
                      revealCss: { left: "initial", right: 0 },
                      contentCss: { left: "-" + a.offset + "px" },
                    })
                  : "rightToLeft" == a.direction &&
                    (r = {
                      contentOut: {
                        left: "-" + a.offset,
                        right: "initial",
                        ease: a.easing,
                      },
                      revealImageIn: { right: "0px", ease: a.easing },
                      revealIn: { width: m(window).width(), ease: a.easing },
                      contentIn: { left: "0px", ease: a.easing },
                      revealImageOut: { right: 0, x: c + "px", ease: a.easing },
                      revealOut: { width: 0, ease: a.easing },
                      revealCss: { right: "initial", left: 0 },
                      contentCss: { left: a.offset + "px" },
                    }),
                (s4.postTransition.out = gsap.to(
                  m("#content-" + s4.activePostElement),
                  a.duration,
                  r.contentOut
                )),
                (s4.postTransition.extra = gsap.to(
                  m(".transition-reveal-img"),
                  a.duration,
                  r.revealImageIn
                )),
                (r.revealIn.onComplete = function () {
                  s4.customTransitions.reveal.onComplete(s, a, r, t, n);
                }),
                (r.revealOut.onComplete = function () {
                  s4.customTransitions.reveal.clear(n),
                    s4.helper.refreshScrollTrigger();
                }),
                (s4.postTransition.custom = gsap.to(
                  m(".transition-reveal"),
                  a.duration,
                  r.revealIn
                ));
            },
            onComplete: function (e, t, s, n, o) {
              var a, i;
              o == s4.ajaxVerify &&
                (m(".transition-reveal").css(s.revealCss),
                m(window).scrollTop(0),
                (a = s4.customTransitions.getAtts(
                  0,
                  "Power0.easeNone",
                  "Power4.easeIn",
                  "fade",
                  "top",
                  0,
                  ""
                )),
                (i = s4.customTransitions.getAtts(
                  0,
                  "Power0.easeNone",
                  "Power4.easeIn",
                  "fade",
                  "bottom",
                  0,
                  ""
                )),
                s4.transitions.init(
                  "fadeOut",
                  "fadeIn",
                  a,
                  i,
                  e,
                  n,
                  { type: "out", endTransition: "out", id: "reveal" },
                  o
                ),
                m("#content-" + s4.newPostElement).css(s.contentCss),
                (s4.postTransition.in = gsap.to(
                  m("#content-" + s4.newPostElement),
                  t.duration,
                  s.contentIn
                )),
                setTimeout(function () {
                  (s4.postTransition.extra = gsap.to(
                    m(".transition-reveal-img"),
                    t.duration,
                    s.revealImageOut
                  )),
                    (s4.postTransition.custom = gsap.to(
                      m(".transition-reveal"),
                      t.duration,
                      s.revealOut
                    ));
                }));
            },
            clear: function (e) {
              e == s4.ajaxVerify &&
                (gsap.killTweensOf(s4.postTransition.custom.target),
                gsap.killTweensOf(s4.postTransition.extra.target),
                m(".transition-reveal").remove());
            },
          },
          staggered: {
            init: function (e, t, s, n) {
              var o = m.extend(!0, {}, s4.transition.staggered),
                a = o.lines,
                r = 100 / a;
              for (
                m("body").append(
                  '<div class="transition-staggered" style="height: ' +
                    window.innerHeight +
                    'px;"></div>'
                ),
                  i = 0;
                i < a;
                i++
              )
                switch (o.mode) {
                  case "wave":
                    m(".transition-staggered").append(
                      '<div class="line" style="width: ' +
                        (0.1 + r) +
                        "%; background-color: " +
                        o.color +
                        "; left: " +
                        i * r +
                        '%;" id="line-' +
                        i +
                        '"></div>'
                    );
                    break;
                  case "waterfall":
                    "ver" == o.direction
                      ? m(".transition-staggered").append(
                          '<div class="line ver-line line-inline" style="width: ' +
                            m(window).width() +
                            "px; height: " +
                            (0.1 + r) +
                            "%; top: " +
                            i * r +
                            "%; background-color: " +
                            o.color +
                            ';" id="line-' +
                            i +
                            '"></div>'
                        )
                      : m(".transition-staggered").append(
                          '<div class="line hor-line line-inline" style="width: ' +
                            (0.1 + r) +
                            "%; left: " +
                            i * r +
                            "%; height: " +
                            window.innerHeight +
                            "px; background-color: " +
                            o.color +
                            ';" id="line-' +
                            i +
                            '"></div>'
                        );
                }
              var l = {
                in: { duration: o.duration, stagger: o.delay, ease: o.easing },
                out: { duration: o.duration, stagger: o.delay, ease: o.easing },
                contentOut: { opacity: 0, ease: o.easing },
                contentIn: { top: "0px", opacity: 1, ease: o.easing },
              };
              switch (
                ((l.in.onComplete = function () {
                  s4.customTransitions.staggered.onComplete(t, o, l, s, n);
                }),
                (l.out.onComplete = function () {
                  s4.customTransitions.staggered.clear(n),
                    s4.helper.refreshScrollTrigger();
                }),
                o.mode)
              ) {
                case "wave":
                  (l.in.height = window.innerHeight), (l.out.height = "0");
                  break;
                case "waterfall":
                  "ver" == o.direction
                    ? ((l.in.scaleY = "1"), (l.out.scaleY = "0"))
                    : ((l.in.scaleX = "1"), (l.out.scaleX = "0"));
              }
              s4.postTransition.extra = gsap.to(".line", l.in);
            },
            onComplete: function (e, t, s, n, o) {
              var a, i;
              o == s4.ajaxVerify &&
                (m(window).scrollTop(0),
                (a = s4.customTransitions.getAtts(
                  0,
                  "Power0.easeNone",
                  "Power4.easeIn",
                  "fade",
                  "top",
                  0,
                  ""
                )),
                (i = s4.customTransitions.getAtts(
                  0,
                  "Power0.easeNone",
                  "Power4.easeIn",
                  "fade",
                  "bottom",
                  0,
                  ""
                )),
                s4.transitions.init(
                  "fadeOut",
                  "fadeIn",
                  a,
                  i,
                  e,
                  n,
                  { type: "out", endTransition: "out", id: "reveal" },
                  o
                ),
                setTimeout(function () {
                  m(".line-uneven").css({ top: 0, bottom: "initial" }),
                    m(".line-even").css({ bottom: 0, top: "initial" }),
                    (s4.postTransition.extra = gsap.to(m(".line"), s.out));
                }));
            },
            clear: function (e) {
              e == s4.ajaxVerify &&
                (gsap.killTweensOf(s4.postTransition.extra.target),
                m(".transition-staggered").remove());
            },
          },
          getAtts: function (e, t, s, n, o, a, i) {
            return {
              duration: e,
              ease: t,
              easing: s,
              effect: n,
              position: o,
              delay: a,
              visibility: i,
            };
          },
        };
      },
      {},
    ],
    2: [
      function (e, t, s) {
        var n = jQuery;
        t.exports = {
          masonry: function (e) {
            var t = n(".active-content").find("#masonry-" + e.id);
            t.append(e.html),
              s4.helper.photoSwipeIndexes(s4.newPostElement),
              t.find(".ce-video video").mediaelementplayer({
                pauseOtherPlayers: !1,
                stretching: "responsive",
                success: function (e, t) {
                  var s = e.id ? n("#" + e.id) : n(e);
                  s.attr("poster", ""),
                    e.addEventListener("ended", function (e) {
                      s.parents(".mejs-inner").find(".mejs-poster").show();
                    });
                },
              });
          },
          coverslider: function (e) {
            n(".coverslider-holder").replaceWith(e.html),
              s4.helper.coverEffects(!1),
              s4.helper.applyTextSizings(n("body").attr("data-breakpoint-js")),
              n(".transitions-preloader").fadeOut("slow"),
              gsap.to(n("#coverslider"), 1, { opacity: 1, ease: "expo.in" });
          },
        };
      },
      {},
    ],
    3: [
      function (e, t, s) {
        "use strict";
        PIXI.Renderer.registerPlugin("batch", PIXI.BatchRenderer),
          PIXI.Application.registerPlugin(PIXI.TickerPlugin);
        var n = jQuery,
          n = {
            ajaxVerify: !1,
            overlayFadeOut: !1,
            postTransition: { in: "", out: "", custom: "", extra: "" },
            srStatus: semplice.sr_status,
            blogSrStatus: semplice.blog_sr_status,
            isPreview: semplice.is_preview,
            activeCoverSlider: !1,
            sempliceDebug: !1,
            coverSliderTimeout: !1,
            resizeTimeout: !1,
            sempliceGallery: !1,
            pixiapp: !1,
            mousedown: !1,
            activeAccordion: !1,
            sempliceEvents: {
              appendContent: new Event("sempliceAppendContent"),
              transitions: {
                start: new Event("sempliceTransitionsStart"),
                out_start: new Event("sempliceTransitionOutStart"),
                in_start: new Event("sempliceTransitionInStart"),
                out_done: new Event("sempliceTransitionsOutDone"),
                in_done: new Event("sempliceTransitionInDone"),
                done: new Event("sempliceTransitionsDone"),
              },
              menu: {
                open_start: new Event("sempliceMenuOpenStart"),
                close_start: new Event("sempliceMenuCloseStart"),
                open_done: new Event("sempliceMenuOpenDone"),
                close_done: new Event("sempliceMenuCloseDone"),
              },
            },
            sempliceExecuteStack: {},
            width: window.innerWidth,
            contentHolder: n("#content-holder"),
            menuInner: ".overlay-menu-inner",
            activeContent: ".active-content",
            contentContainer: ".content-container",
            cover: ".semplice-cover",
            activePostElement: n("#content-holder").attr("data-active-post"),
            newPostElement: "",
            activeStateUrl: "",
            frontendMode: semplice.frontend_mode,
            transition: semplice.transition,
            hideCover: !1,
            animate: { lottie: {}, gsap: {} },
            activeTransition: !1,
            scrollHistory: {},
            overlayMenu: "#overlay-menu",
            navbar: ".semplice-navbar",
            hamburger: ".hamburger",
            headerBarRgba: "",
            srOptions: {
              viewFactor: 0.2,
              opacity: 0,
              distance: "0px",
              easing: "ease-out",
              duration: 700,
              scale: 1,
              mobile: !1,
            },
            init: e("./init.js"),
            main: e("./main.js"),
            get: e("./get.js"),
            show: e("./show.js"),
            transitions: e("./transitions.js"),
            customTransitions: e("./custom_transitions.js"),
            menu: e("./menu.js"),
            helper: e("./helper.js"),
            execute: e("./execute.js"),
          };
        (window.s4 = n).init();
      },
      {
        "./custom_transitions.js": 1,
        "./execute.js": 2,
        "./get.js": 4,
        "./helper.js": 5,
        "./init.js": 6,
        "./main.js": 7,
        "./menu.js": 8,
        "./show.js": 9,
        "./transitions.js": 10,
      },
    ],
    4: [
      function (e, t, s) {
        var r = jQuery;
        t.exports = {
          post: function (t, s, n, o) {
            s4.ajaxVerify = s4.helper.generateId("ajax");
            var a = s4.ajaxVerify,
              e =
                ((s4.activePostElement =
                  s4.contentHolder.attr("data-active-post")),
                (s4.newPostElement = s4.helper.generateId("post")),
                !0 === s4.sempliceDebug &&
                  console.log(
                    "# Active Element ID: " +
                      s4.activePostElement +
                      "\n# New Element ID: " +
                      s4.newPostElement
                  ),
                "normal"),
              e =
                (s ||
                  "enabled" != s4.transition.status ||
                  "enabled" != s4.transition.optimize ||
                  (e = "delayed"),
                {
                  id: t.id,
                  term: t.term,
                  taxonomy: t.taxonomy,
                  page: t.page,
                  url: t.url,
                  script_execution: e,
                }),
              i =
                (!0 === s4.hideCover && (e.hide_cover = !0),
                semplice.semplice_api_url + "/posts");
            "notfound" == t.id
              ? (i = semplice.semplice_api_url + "/notfound")
              : -1 ===
                  ["category", "post_tag", "posts", "author", "search"].indexOf(
                    t.taxonomy
                  ) && (i += "/" + t.id),
              r.ajax({
                type: "GET",
                url: i,
                data: e,
                beforeSend: function (e) {
                  e.setRequestHeader("X-WP-Nonce", semplice.nonce);
                },
                success: function (e) {
                  a == s4.ajaxVerify &&
                    (!0 === s4.sempliceDebug && console.log(e),
                    "enabled" == semplice.exclusive_nav &&
                      (r(s4.navbar).hasClass("use-headroom") &&
                        r(s4.navbar).headroom("destroy"),
                      s4.helper.addFocusBeforeWrap(r(this), t.url)),
                    s4.customTransitions.reveal.clear(a),
                    s4.customTransitions.staggered.clear(a),
                    r("body").attr({
                      "data-post-type": e.post_type,
                      "data-post-id": t.id,
                    }),
                    (e = r.extend(!0, {}, e)),
                    (s4.sempliceExecuteStack = {}),
                    (s4.animations = !1),
                    r(".apg-thumb-animation").remove(),
                    r(".semplice-cursor-inner").attr("style", ""),
                    r(".cursor-icon, .cursor-text").hide(),
                    s4.show.post(e, s, n, o, a));
                },
                error: function (e) {
                  console.log(e);
                },
              });
          },
        };
      },
      {},
    ],
    5: [
      function (e, t, s) {
        var h = jQuery;
        t.exports = {
          registerBreakpoints: function () {
            h.each(
              {
                xl: "screen and (min-width: 1170px)",
                lg: "screen and (min-width: 992px) and (max-width: 1169.9px)",
                md: "screen and (min-width: 768px) and (max-width: 991.9px)",
                sm: "screen and (min-width: 544px) and (max-width: 767.9px)",
                xs: "screen and (max-width: 543.9px)",
              },
              function (e, t) {
                enquire.register(t, {
                  match: function () {
                    h("body").attr("data-breakpoint-js", e),
                      s4.helper.applyTextSizings(e);
                  },
                });
              }
            );
          },
          applyTextSizings: function (a) {
            var t = ["font-size", "line-height", "letter-spacing"];
            s4.contentHolder.find('[data-module="text"]').each(function () {
              h(this)
                .find(".is-content")
                .find("*")
                .each(function (e) {
                  var o = h(this);
                  h.each(t, function (e, t) {
                    var s = o.attr("data-" + t + "-xl"),
                      n = o.attr("data-" + t + "-" + a);
                    o.css(t, (n = void 0 === n ? (void 0 !== s ? s : "") : n)),
                      o.attr("data-mce-style", o.attr("style"));
                  });
                });
            });
          },
          getUrl: function (e, t) {
            var e = {
                new: { full: s4.helper.removeSlash(e), noHash: "", hash: "" },
                active: { full: s4.helper.removeSlash(t), noHash: "" },
              },
              t = s4.helper.parseUrl(e.new.full),
              s = s4.helper.parseUrl(e.active.full);
            return (
              (e.new.noHash = e.new.full.replace(t.hash, "")),
              (e.active.noHash = e.active.full.replace(s.hash, "")),
              (e.new.noHash = e.new.noHash.replace(/\?.*/, "")),
              (e.active.noHash = e.active.noHash.replace(/\?.*/, "")),
              (e.new.noHash = s4.helper.removeSlash(e.new.noHash)),
              (e.active.noHash = s4.helper.removeSlash(e.active.noHash)),
              t.hash && (e.new.hash = t.hash),
              e
            );
          },
          getPostSlug: function (e) {
            return (e = s4.helper.removeSlash(e, "last")).substr(
              e.lastIndexOf("/") + 1
            );
          },
          getPostInfo: function (e) {
            var t,
              s = {
                url: "",
                id: "",
                term: "",
                taxonomy: "",
                slug: "",
                page: 1,
                hash: "",
              },
              n = ((e = s4.helper.removeSlash(e)), s4.helper.parseUrl(e)),
              o = n.pathname.match(/\/page\/([0-9]+)/);
            return (
              null !== o &&
                ((s.page = o[1]),
                (n.pathname = n.pathname.replace(o[0], "")),
                (t = e.replace(o[0], ""))),
              n.hash && (s.hash = n.hash),
              (s.slug = s4.helper.getPostSlug(n.pathname)),
              (s.id = semplice.post_ids[s.slug]),
              (e = s4.helper.removeSlash(e.split("#")[0])) == semplice.base_url
                ? ((s.id = semplice.frontpage_id),
                  "posts" == s.id && (s.taxonomy = "posts"))
                : e == semplice.blog_home ||
                  (void 0 !== t && t == semplice.blog_home)
                ? ((s.id = "posts"), (s.taxonomy = "posts"))
                : -1 < n.pathname.indexOf(semplice.category_base)
                ? ((s.term = s.slug),
                  (s.id = "category"),
                  (s.taxonomy = "category"))
                : -1 < n.pathname.indexOf(semplice.tag_base)
                ? ((s.term = s.slug),
                  (s.id = "post_tag"),
                  (s.taxonomy = "post_tag"))
                : -1 < n.pathname.indexOf("author")
                ? ((s.term = s.slug),
                  (s.id = "author"),
                  (s.taxonomy = "author"))
                : -1 < n.search.indexOf("?s=")
                ? ((s.term = n.search.replace("?s=", "")),
                  (s.id = "search"),
                  (s.taxonomy = "search"))
                : null == s.id && (s.id = "notfound"),
              (s.url = e),
              !0 === s4.sempliceDebug &&
                (console.log(
                  "\n-------------------------------------\n# Parsed Url\n-------------------------------------\n# Protocal: " +
                    n.protocol +
                    "\n# Host: " +
                    n.host +
                    "\n# Hostname: " +
                    n.hostname +
                    "\n# Port: " +
                    n.port +
                    "\n# Pathname: " +
                    n.pathname +
                    "\n# Hash: " +
                    n.hash +
                    "\n# Search: " +
                    n.search +
                    "\n# Origin: " +
                    n.origin +
                    "\n-------------------------------------"
                ),
                console.log(
                  "\n-------------------------------------\n# Post info\n-------------------------------------\n# Url: " +
                    s.url +
                    "\n# Pathname: " +
                    n.pathname +
                    "\n# Pagination: " +
                    s.page +
                    "\n# Slug: " +
                    s.slug +
                    "\n# Post-ID: " +
                    s.id +
                    "\n# Taxonomy: " +
                    s.taxonomy +
                    "\n# Term: " +
                    s.term +
                    "\n# Hash: " +
                    s.hash +
                    "\n-------------------------------------"
                )),
              s
            );
          },
          parseUrl: function (e) {
            var t = document.createElement("a");
            return (t.href = e), t;
          },
          removeSlash: function (e) {
            return (e = "/" == e.slice(-1) ? e.replace(/\/+$/, "") : e);
          },
          getHash: function () {
            var e = window.location.hash;
            return !!e && e.replace("/", "");
          },
          noHash: function (e) {
            var t = document.createElement("a");
            return (t.href = e), t.hash ? e.replace(t.hash, "") : e;
          },
          goToHash: function (e) {
            var t = 0.8,
              s = 0;
            0 < h(s4.navbar).length && (s = h(s4.navbar).height()),
              (h("body").hasClass("open-menu") || -1 < e.indexOf("comment")) &&
                (t = 0),
              0 < h(e).length
                ? gsap.to(window, t, {
                    scrollTo: { y: h(e).offset().top - s },
                    ease: "expo.inOut",
                    onComplete: function () {
                      window.location.hash = e;
                    },
                  })
                : (window.location.hash = e);
          },
          isValidUrl: function (e) {
            var t = !0;
            return (
              s4.helper.isExternal(e.new.full) && (t = !1),
              "wp-admin" == s4.helper.getPostSlug(e.new.full) && (t = !1),
              "#" == e.new.full.charAt(0) && (t = !1),
              (t = -1 < e.new.full.indexOf("replyto") ? !1 : t)
            );
          },
          checkDomain: function (e) {
            return (e = 0 === e.indexOf("//") ? location.protocol + e : e)
              .toLowerCase()
              .replace(/([a-z])?:\/\//, "$1")
              .split("/")[0];
          },
          bool: function (e) {
            return "true" == e || "false" == e
              ? "true" == e || ("false" != e && void 0)
              : e;
          },
          getHeight: function (e) {
            return document.querySelector(e).getBoundingClientRect().height;
          },
          getWidth: function (e) {
            return document.querySelector(e).getBoundingClientRect().width;
          },
          isExternal: function (e) {
            return (
              (-1 < e.indexOf(":") || -1 < e.indexOf("//")) &&
              s4.helper.checkDomain(location.href) !== s4.helper.checkDomain(e)
            );
          },
          hexToRgb: function (e) {
            e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return e
              ? {
                  r: parseInt(e[1], 16),
                  g: parseInt(e[2], 16),
                  b: parseInt(e[3], 16),
                }
              : null;
          },
          isHexColor: function (e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
          },
          changePage: function (e, t, s, n) {
            var o = h(window).scrollTop(),
              a = s4.helper.generateId("page");
            history.replaceState(
              { id: a, apg: s4.helper.setApgHistory() },
              "",
              t
            ),
              (s4.scrollHistory[a] = o),
              !0 === s4.sempliceDebug &&
                console.log(
                  "#############################################################\n# Action: Click on Link\n# History Page ID: " +
                    a +
                    " \n# Active URL: " +
                    t +
                    " \n# Scroll Position: " +
                    o +
                    "\n# New URL: " +
                    e
                ),
              n.status,
              0 < h(s4.navbar).length &&
                ((a = s4.helper.getHeight(s4.navbar)),
                (t = (t = h(s4.navbar).css("transform"))
                  .slice(7, t.length - 1)
                  .split(", ")),
                0 < h(".non-sticky-nav").length ||
                "absolute" == h(s4.navbar).css("position")
                  ? o < a
                    ? h(s4.navbar).css("top", "-" + o + "px")
                    : h(s4.navbar).css("top", "-" + a + "px")
                  : h(s4.navbar).hasClass("use-headroom") &&
                    void 0 !== t[5] &&
                    -1 < t[5].indexOf("-") &&
                    "enabled" != semplice.exclusive_nav &&
                    h(s4.navbar).css("top", "-" + a + "px")),
              gsap.to(h(s4.contentContainer), 0, {
                height: window.innerHeight,
                overflow: "hidden",
              }),
              h(".transition-wrap").css("top", "-" + o + "px"),
              s4.helper.refreshScrollTrigger(),
              history.pushState(null, s, e),
              s4.main.init(e, !1, n),
              (s4.activeStateUrl = e);
          },
          setApgHistory: function () {
            var s = { horFull: {} };
            return (
              h('[data-module="advancedportfoliogrid"]').each(function (e) {
                var t;
                0 == h(this).find(".empty-apg").length &&
                  "horizontal-fullscreen" == h(this).attr("data-apg-preset") &&
                  ((t = h(this).find(".apg").data("flickity")),
                  (s.horFull[e] = t.selectedIndex));
              }),
              s
            );
          },
          getDataAttributes: function (e) {
            return {
              handler: h(e).attr("data-handler"),
              postId: h(e).attr("data-post-id"),
              postType: h(e).attr("data-post-type"),
            };
          },
          getPostType: function (e) {
            return semplice.posts[e][type];
          },
          updateSiteMeta: function (e) {
            var s = {
                "head > title": e.title,
                'link[rel="canonical"]': window.location.href,
              },
              n = {
                _yoast_wpseo_metadesc: 'meta[name="description"]',
                "_yoast_wpseo_opengraph-image": 'meta[property="og:image"]',
                "_yoast_wpseo_opengraph-title": 'meta[property="og:title"]',
                "_yoast_wpseo_opengraph-description":
                  'meta[property="og:description"]',
                "_yoast_wpseo_twitter-image": 'meta[name="twitter:image"]',
                "_yoast_wpseo_twitter-title": 'meta[name="twitter:title"]',
                "_yoast_wpseo_twitter-description":
                  'meta[name="twitter:description"]',
                _yoast_wpseo_canonical: 'link[rel="canonical"]',
              };
            void 0 !== e.post_settings &&
              void 0 !== (e = e.post_settings).seo &&
              h.each(e.seo, function (e, t) {
                s[n[e]] = t;
              }),
              h.each(s, function (e, t) {
                "head > title" == e
                  ? h(e).html(t)
                  : 'link[rel="canonical"]' == e
                  ? h(e).attr("href", t)
                  : h(e).attr("content", t);
              });
          },
          getActiveContentDiv: function () {
            return h(s4.activeContent).attr("data-content-div");
          },
          changeActiveDivStatus: function (e, t) {
            h(s4.contentContainer).removeClass(
              "active-content position-right position-left position-bottom position-top"
            ),
              s4.contentHolder.attr("data-active-post", e),
              t || "disabled" == s4.transition.status
                ? h("#content-" + e).addClass("active-content")
                : h("#content-" + e).addClass(
                    "active-content position-" +
                      s4.transition.in.position +
                      " " +
                      s4.transition.in.visibility
                  ),
              ("topToBottom" != s4.transition.preset &&
                "bottomToTop" != s4.transition.preset) ||
                h(s4.activeContent).css({
                  height: "100%",
                  overflowY: "hidden",
                });
          },
          coverEffects: function (e) {
            var t;
            if (
              ((t =
                !1 !== e && -1 < e.indexOf("cover-")
                  ? ((n = !1), h("#" + e))
                  : (n = s4.helper.getContentDiv(e))
                      .find(".semplice-cover")
                      .first()),
              !1 !== s4.pixiapp &&
                "object" == typeof s4.pixiapp &&
                (s4.pixiapp.destroy(), (s4.pixiapp = !1)),
              (!1 !== n && 0 < n.find(".semplice-cover").length) ||
                (!1 !== e && -1 < e.indexOf("cover-")))
            ) {
              var s,
                n = t.find(".semplice-cover-inner"),
                e = n.data("effect-settings"),
                o = t.attr("data-cover-effect"),
                a = t.attr("data-cover-mousemove"),
                i = !1,
                r = t.find(".cover-image-wrapper");
              if (
                (void 0 !== r.attr("data-src") &&
                  (i = {
                    src: r.attr("data-src"),
                    width: r.attr("data-width"),
                    height: r.attr("data-height"),
                    size: r.attr("data-size"),
                  }),
                void 0 !== o && "none" != o && "displacement" === o)
              )
                if (!1 !== i) {
                  var l = {
                    map:
                      semplice.template_dir +
                      "/assets/images/frontend/displacement_map.jpg",
                    type: "move",
                    speed: 100,
                    filter_x: 10,
                    filter_y: 20,
                    sprite_x: 1,
                    sprite_y: 1,
                    dir: "hor",
                    max_growth: 250,
                    grow_speed: 10,
                  };
                  "object" != typeof e ||
                    h.isEmptyObject(e) ||
                    h.each(e, function (e, t) {
                      0 < t.length && (l[e.replace("displacement_", "")] = t);
                    }),
                    (s4.pixiapp = new PIXI.Application({
                      width: i.width,
                      height: i.height,
                    })),
                    t.find(".cover-image")[0].appendChild(s4.pixiapp.view),
                    "cover" == i.size &&
                      ((s4.pixiapp.view.style.objectFit = "cover"),
                      (s4.pixiapp.view.style.width = "100%"),
                      (s4.pixiapp.view.style.height = "100%")),
                    (s4.pixiapp.view.style.top = "50%"),
                    (s4.pixiapp.view.style.left = "50%"),
                    (s4.pixiapp.view.style.webkitTransform =
                      "translate( -50%, -50% ) scale(1)"),
                    (s4.pixiapp.view.style.transform =
                      "translate( -50%, -50% ) scale(1)"),
                    (s4.pixiapp.stage.interactive = !0);
                  const p = new PIXI.Container(),
                    d = (s4.pixiapp.stage.addChild(p), PIXI.Sprite.from(i.src)),
                    m = (p.addChild(d), PIXI.Sprite.from(l.map)),
                    u =
                      ((m.texture.baseTexture.wrapMode =
                        PIXI.WRAP_MODES.REPEAT),
                      new PIXI.filters.DisplacementFilter(m));
                  s4.pixiapp.stage.addChild(m),
                    (d.filters = [u]),
                    (m.scale.x = parseInt(l.sprite_x)),
                    (m.scale.y = parseInt(l.sprite_y)),
                    (u.scale.x = parseInt(l.filter_x)),
                    (u.scale.y = parseInt(l.filter_y));
                  var c = parseInt(l.speed) / 100;
                  switch (l.type) {
                    case "move":
                      0 < l.speed &&
                        ("hor" == l.dir
                          ? s4.pixiapp.ticker.add(function (e) {
                              (m.x += c), m.x > m.width && (m.x = 0);
                            })
                          : s4.pixiapp.ticker.add(function (e) {
                              (m.y += c), m.y > m.height && (m.y = 0);
                            }));
                      break;
                    case "grow":
                      "hor" == l.dir
                        ? s4.pixiapp.ticker.add(function (e) {
                            0 < l.speed && (m.y += c),
                              m.scale.x <= parseInt(l.max_growth) &&
                                (m.scale.x +=
                                  (m.scale.y / 1e3) * parseInt(l.grow_speed));
                          })
                        : s4.pixiapp.ticker.add(function (e) {
                            0 < l.speed && (m.x += c),
                              m.scale.y <= parseInt(l.max_growth) &&
                                (m.scale.y +=
                                  (m.scale.y / 1e3) * parseInt(l.grow_speed));
                          });
                  }
                }
              void 0 !== a &&
                0 < a.length &&
                "tilt" === a &&
                ((s = { tilt_max: 10, tilt_perspective: 2e3 }),
                "object" != typeof e ||
                  h.isEmptyObject(e) ||
                  h.each(e, function (e, t) {
                    s[e] = t;
                  }),
                n.tilt({
                  reset: !1,
                  maxTilt: s.tilt_max,
                  perspective: s.tilt_perspective,
                  speed: 5e3,
                  scale: 1,
                  transition: !0,
                }));
            }
          },
          appendContent: function (e, t, s, n) {
            n == s4.ajaxVerify &&
              (void 0 !== t.content &&
                (h("head").append(
                  '<style type="text/css" id="' +
                    e +
                    '-post-css">' +
                    t.content.css
                      .replace(/#content-holder/g, "#content-" + e)
                      .replace(/body/g, "#content-" + e) +
                    "</style>"
                ),
                t.has_password
                  ? (h("#content-" + e).html(semplice.password_form),
                    h(".post-password-submit").attr("data-id", t.id))
                  : h("#content-" + e).html(t.content.html),
                void 0 === t.content.js ||
                  h.isEmptyObject(t.content.js) ||
                  t.has_password ||
                  (s4.animations = { content: t.content.js, postId: e })),
              "disabled" == semplice.exclusive_nav &&
                s4.menu.showNavbar(!0, t.navbar, !1),
              s4.helper.resizeElements("appendConent"),
              s4.helper.initVideos(e),
              s4.helper.photoSwipeIndexes(e),
              s4.helper.coverEffects(e),
              s4.helper.applyTextSizings(h("body").attr("data-breakpoint-js")),
              window.dispatchEvent(s4.sempliceEvents.appendContent));
          },
          afterPageTransitions: function () {
            s4.helper.resetMotions(),
              window.dispatchEvent(s4.sempliceEvents.transitions.done),
              (s4.activeTransition = !1),
              h(s4.contentContainer).css({
                top: "",
                height: "",
                overflowY: "",
              }),
              h("#content-" + s4.activePostElement).remove(),
              h("#" + s4.activePostElement + "-post-css").remove(),
              h("#" + s4.activePostElement + "-motion-js").remove(),
              h(window).scroll(),
              !0 === s4.sempliceDebug &&
                (console.log("# Transition Status: Done!"),
                console.log(
                  "#############################################################"
                )),
              "enabled" == s4.srStatus && s4.helper.reveal(!1),
              setTimeout(function () {
                "enabled" == semplice.exclusive_nav &&
                  h(s4.navbar).hasClass("use-headroom") &&
                  h(s4.navbar).headroom({ tolerance: 5 });
              });
            var e = s4.helper.getHash();
            e && s4.helper.goToHash(e);
          },
          generateId: function (e) {
            return e + "_" + Math.random().toString(36).substr(2, 9);
          },
          restoreScrollPosition: function (e) {
            e &&
              (null != history.state
                ? setTimeout(function () {
                    !0 === s4.sempliceDebug &&
                      console.log(
                        "#############################################################\n# Action: Browser Button\n# Page ID: " +
                          history.state.id +
                          " \n# URL: " +
                          window.location.href +
                          " \n# Restore Scroll Position: " +
                          s4.scrollHistory[history.state.id] +
                          "\n#############################################################"
                      ),
                      h(document).scrollTop(s4.scrollHistory[history.state.id]);
                  }, 0)
                : setTimeout(function () {
                    !0 === s4.sempliceDebug &&
                      console.log(
                        "#############################################################\n# Action: Browser Button\n# Page ID: Most Recent \n# URL: " +
                          window.location.href +
                          " \n# Restore Scroll Position: " +
                          s4.scrollHistory.most_recent +
                          "\n#############################################################"
                      ),
                      h(document).scrollTop(s4.scrollHistory.most_recent);
                  }, 0));
          },
          restoreApgPosition: function (e) {
            e &&
              null != history.state &&
              void 0 !== history.state.apg &&
              setTimeout(function () {
                !0 === s4.sempliceDebug &&
                  console.log(
                    "#############################################################\n# Action: Browser Button\n# Page ID: " +
                      history.state.id +
                      " \n# URL: " +
                      window.location.href +
                      " \n# Restore Scroll Position: " +
                      s4.scrollHistory[history.state.id] +
                      "\n#############################################################"
                  ),
                  h('[data-module="advancedportfoliogrid"]').each(function (e) {
                    "horizontal-fullscreen" ==
                      h(this).attr("data-apg-preset") &&
                      void 0 !== history.state.apg.horFull[e] &&
                      h.isNumeric(history.state.apg.horFull[e]) &&
                      h(this)
                        .find(".apg")
                        .flickity("select", history.state.apg.horFull[e]);
                  });
              }, 0);
          },
          reveal: function (e) {
            var t = h("section").length,
              s = 0;
            0 == t && h(s4.activeContent).removeClass("hide-on-init"),
              h("section").each(function () {
                (h(this).isOnScreen(0.01, 0.01) && 1 != e) ||
                  h(this).addClass("reveal"),
                  t == (s += 1) &&
                    (sr.reveal(".reveal", s4.srOptions),
                    e && h(s4.activeContent).removeClass("hide-on-init"));
              });
          },
          isMobile: function () {
            var e,
              t = !1;
            return (
              (e = navigator.userAgent || navigator.vendor || window.opera),
              (t =
                /(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                  e
                ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  e.substr(0, 4)
                )
                  ? !0
                  : t)
            );
          },
          getRgba: function (e) {
            var t,
              s,
              n = { red: null, green: null, blue: null, alpha: null };
            return (
              "string" == typeof e &&
                (0 === e.indexOf("#")
                  ? (n =
                      3 == (e = e.substr(1)).length
                        ? {
                            red: parseInt(e[0] + e[0], 16),
                            green: parseInt(e[1] + e[1], 16),
                            blue: parseInt(e[2] + e[2], 16),
                            alpha: 1,
                          }
                        : {
                            red: parseInt(e.substr(0, 2), 16),
                            green: parseInt(e.substr(2, 2), 16),
                            blue: parseInt(e.substr(4, 2), 16),
                            alpha: 1,
                          })
                  : 0 === e.indexOf("rgb(")
                  ? ((s = e.indexOf(",")),
                    (n = {
                      red: parseInt(e.substr(4, s)),
                      green: parseInt(e.substr(s + 1, e.indexOf(",", s))),
                      blue: parseInt(
                        e.substr(e.indexOf(",", s + 1) + 1, e.indexOf(")"))
                      ),
                      alpha: 1,
                    }))
                  : 0 === e.indexOf("rgba(")
                  ? ((s = e.indexOf(",")),
                    (t = e.indexOf(",", s + 1)),
                    (n = {
                      red: parseInt(e.substr(5, s)),
                      green: parseInt(e.substr(s + 1, t)),
                      blue: parseInt(
                        e.substr(e.indexOf(",", s + 1) + 1, e.indexOf(",", t))
                      ),
                      alpha: parseFloat(
                        e.substr(e.indexOf(",", t + 1) + 1, e.indexOf(")"))
                      ),
                    }))
                  : null !=
                      (s = {
                        acqua: "#0ff",
                        teal: "#008080",
                        blue: "#00f",
                        navy: "#000080",
                        yellow: "#ff0",
                        olive: "#808000",
                        lime: "#0f0",
                        green: "#008000",
                        fuchsia: "#f0f",
                        purple: "#800080",
                        red: "#f00",
                        maroon: "#800000",
                        white: "#fff",
                        gray: "#808080",
                        silver: "#c0c0c0",
                        black: "#000",
                      })[e] && (n = getColorValues(s[e]))),
              n
            );
          },
          setSrStatus: function (e) {
            (s4.srStatus = "enabled"),
              void 0 !== e.content.branding &&
              void 0 !== e.content.branding.scroll_reveal
                ? ((s4.srStatus = e.content.branding.scroll_reveal),
                  !0 === s4.sempliceDebug &&
                    console.log(
                      "# Changing Scroll Reveal Status to " + s4.srStatus
                    ))
                : ("posts" != e.post_type &&
                    "post" != e.post_type &&
                    "category" != e.post_type) ||
                  ((s4.srStatus = s4.blogSrStatus),
                  !0 === s4.sempliceDebug &&
                    console.log(
                      "# Changing Blog Scroll Reveal Status to " +
                        s4.blogSrStatus
                    ));
          },
          photoSwipe: function (e) {
            var t = document.querySelectorAll(".pswp")[0],
              s = [],
              e =
                (h(".lightbox-item").each(function () {
                  var e = "";
                  void 0 !== h(this).attr("caption") &&
                    (e = h(this).attr("caption")),
                    s.push({
                      src: h(this).attr("src"),
                      w: h(this).attr("width"),
                      h: h(this).attr("height"),
                      msrc: h(this).attr("src"),
                      title: e,
                    });
                }),
                {
                  index: parseInt(e),
                  history: !1,
                  shareEl: !1,
                  getThumbBoundsFn: function (e) {
                    var e = document.querySelectorAll(".lightbox-item")[e],
                      t =
                        window.pageYOffset ||
                        document.documentElement.scrollTop,
                      e = e.getBoundingClientRect();
                    return { x: e.left, y: e.top + t, w: e.width };
                  },
                });
            (s4.sempliceGallery = new PhotoSwipe(
              t,
              PhotoSwipeUI_Default,
              s,
              e
            )),
              s4.sempliceGallery.init();
          },
          photoSwipeIndexes: function (e) {
            (e = "init" == e ? "#content-holder" : "#content-" + e),
              0 < h("#content-holder .post").find(".gallery").length
                ? h(".gallery-item").each(function () {
                    h(this).find("a").addClass("semplice-lightbox"),
                      h(this).find("img").addClass("lightbox-item");
                  })
                : 0 <
                    h("#content-holder").find(".blocks-gallery-item").length &&
                  h(".blocks-gallery-item").each(function () {
                    var e = h(this).find("a").attr("href");
                    void 0 !== e &&
                      -1 < e.search(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i) &&
                      (h(this)
                        .find("a")
                        .addClass("semplice-lightbox")
                        .removeAttr("href"),
                      h(this).find("img").addClass("lightbox-item"));
                  });
            var t = 0;
            h(e)
              .find(".lightbox-item")
              .each(function () {
                h(this).attr("data-photoswipe-index", t), t++;
              });
          },
          scrollToTop: function (e) {
            gsap.to(window, 0.9, {
              scrollTo: { y: 0, autoKill: !1 },
              ease: "expo.inOut",
            });
          },
          scrollToContent: function (e) {
            var t = 0,
              s = h(s4.cover).height();
            0 < h(s4.navbar).length &&
              ((t =
                "absolute" == h(s4.navbar).css("position")
                  ? 0
                  : h(s4.navbar).height() - 1),
              h(s4.navbar).hasClass("scroll-to-top") && (t = 0)),
              gsap.to(window, 1, {
                scrollTo: { y: s - t, autoKill: !1 },
                ease: "expo.inOut",
              });
          },
          getContentDiv: function (e) {
            return (
              !1 === e && (e = s4.contentHolder.attr("data-active-post")),
              h("#content-" + e)
            );
          },
          initVideos: function (e) {
            e = s4.helper.getContentDiv(e);
            0 <
              h("#content-holder .post, #content-holder .blogposts-post")
                .length &&
              h(".wp-video, .wp-block-video").each(function () {
                h(this).find("video").attr("preload", "metadata");
              }),
              e
                .find(
                  ".ce-video video, .wp-video video, .wp-audio-shortcode, .wp-block-video video"
                )
                .mediaelementplayer({
                  pauseOtherPlayers: !1,
                  stretching: "responsive",
                  preload: "metadata",
                  success: function (e, t) {
                    var s = e.id ? h("#" + e.id) : h(e);
                    s.children("video").addClass("is-content"),
                      s.attr("poster", ""),
                      e.addEventListener("ended", function (e) {
                        s.parents(".mejs-inner").find(".mejs-poster").show();
                      }),
                      "object" != typeof t.getAttribute("autoplay") &&
                      "object" != typeof t.getAttribute("muted")
                        ? t.play()
                        : t.pause();
                  },
                });
          },
          postPassword: function (e) {
            var s = h(e).attr("data-id"),
              e = h('[name="post_password"]').val();
            h.ajax({
              type: "GET",
              url: semplice.semplice_api_url + "/post-password",
              data: { id: s, password: e },
              beforeSend: function (e) {
                e.setRequestHeader("X-WP-Nonce", semplice.nonce);
              },
              success: function (e) {
                var t;
                "wrong-password" != e
                  ? ((void 0 !== s4.newPostElement &&
                      "" != s4.newPostElement) ||
                      (s4.newPostElement = s4.activePostElement),
                    h(".sections").remove(),
                    h(".post-password-form").remove(),
                    h(".active-content").append(
                      '<div class="transition-wrap"><div class="sections">' +
                        e.html +
                        "</div></div>"
                    ),
                    (t = s + "-motion-js"),
                    void 0 !== s4.newPostElement &&
                      "" != s4.newPostElement &&
                      (t = s4.newPostElement + "-motion-js"),
                    void 0 === e.js ||
                      h.isEmptyObject(e.js) ||
                      h("body").append(
                        '<script type="text/javascript" id="' +
                          t +
                          '">' +
                          e.js +
                          "</script>"
                      ),
                    void 0 === e.css ||
                      h.isEmptyObject(e.css) ||
                      ((t = t.replace("-motion-js", "-post-css")),
                      h("#" + t).append(e.css)),
                    "enabled" == s4.srStatus && s4.helper.reveal(!0),
                    h(window).scroll(),
                    s4.helper.resizeElements("appendConent"),
                    s4.helper.coverEffects(s4.newPostElement),
                    s4.helper.initVideos(s4.newPostElement),
                    s4.helper.photoSwipeIndexes(s4.newPostElement),
                    s4.helper.applyTextSizings(
                      h("body").attr("data-breakpoint-js")
                    ))
                  : h(".post-password-input").css(
                      "border",
                      "1px solid #f14c4c"
                    );
              },
              error: function (e) {
                console.log(e);
              },
            });
          },
          setActiveMenuItem: function (e, t) {
            var s = s4.helper.removeSlash(window.location.href);
            t ||
              (e
                .find(".menu-item, .page_item")
                .removeClass("current-menu-item current_page_item"),
              e.find(".menu-item").each(function () {
                void 0 !== h(this).find("a").first().attr("href") &&
                  s4.helper.removeSlash(
                    h(this).find("a").first().attr("href")
                  ) == s &&
                  h(this).addClass("current-menu-item");
              }));
          },
          removeCommentReplyLink: function () {
            h("#reply-title a").remove();
          },
          changeSlide: function (e) {
            var t = e.attr("data-type"),
              e = e.attr("data-direction");
            "vertical" == t
              ? "next" == e
                ? h.fn.fullpage.moveSectionDown()
                : h.fn.fullpage.moveSectionUp()
              : "next" == e
              ? h.fn.fullpage.moveSlideRight()
              : h.fn.fullpage.moveSlideLeft();
          },
          killCoverSlider: function (e) {
            var t = !0;
            !0 === s4.activeCoverSlider &&
              !0 ===
                (t =
                  !0 === e &&
                  0 <
                    h("#content-" + s4.newPostElement).find("#coverslider")
                      .length
                    ? !1
                    : t) &&
              (h.fn.fullpage.destroy("all"),
              h("#fp-parallax-stylesheet").remove(),
              h("#fp-parallax-transitions").remove(),
              h("#fp-parallax-transition-class").remove(),
              (s4.activeCoverSlider = !1));
          },
          resizeElements: function (e) {
            h(".semplice-cover").each(function () {
              h(this).css("height", h(window).height());
            }),
              h(".transitions-preloader").each(function () {
                h(this).css("height", h(window).height());
              }),
              h('[data-apg-preset="horizontal-fullscreen"]').each(function () {
                h(this).css("height", h(window).height());
              }),
              h('[data-apg-preset="text"]').each(function () {
                h(this).css("min-height", h(window).height()),
                  h(this)
                    .find(".apg-text")
                    .css("min-height", h(window).height());
              });
          },
          hideCover: function (e) {
            return !!e.hasClass("cs-hide-covers");
          },
          addFocusBeforeWrap: function (e, t) {
            !1 !== t
              ? (h(".menu-item").removeClass(
                  "current-menu-item current_page_item wrap-focus"
                ),
                h(".menu-item").each(function () {
                  (h(this).children("a").attr("href") != t &&
                    h(this).children("a").attr("href") != t + "/") ||
                    h(this).addClass("wrap-focus");
                }))
              : e.parent().hasClass("menu-item") || e.parent().hasClass("logo")
              ? (h(".menu-item").removeClass(
                  "current-menu-item current_page_item wrap-focus"
                ),
                e.parent().hasClass("logo")
                  ? h(".menu-item").each(function () {
                      var e = h(".logo").find("a").attr("href");
                      (h(this).children("a").attr("href") != e &&
                        h(this).children("a").attr("href") != e + "/") ||
                        h(this).addClass("wrap-focus");
                    })
                  : e.parent().addClass("wrap-focus"))
              : (e.parent().hasClass("thumb")
                  ? e.find(".thumb-inner")
                  : e
                ).addClass("wrap-focus");
          },
          getCustomTransition: function (e) {
            var t,
              s = { status: !1, name: !1, element: !1 };
            return (
              void 0 !== e.attr("data-custom-transition") &&
                ((t = !0),
                (s = {
                  status: (t =
                    "horizontal-fullscreen" ==
                      e.attr("data-custom-transition") &&
                    12 ==
                      e
                        .closest(".apg-post")
                        .attr(
                          "data-" +
                            h("body").attr("data-breakpoint-js") +
                            "-width"
                        )
                      ? !1
                      : t),
                  name: e.attr("data-custom-transition"),
                  element: e.attr("data-transition-element"),
                })),
              s
            );
          },
          customHamburgerEvents: function () {
            h("body").on(
              "mouseenter",
              '[data-hamburger-mouseover="scale"]',
              function (e) {
                h('[data-hamburger-mouseover="scale"]').css(
                  "transform",
                  "scale(1.1)"
                );
              }
            ),
              h("body").on(
                "mouseleave",
                '[data-hamburger-mouseover="scale"]',
                function (e) {
                  h('[data-hamburger-mouseover="scale"]').css(
                    "transform",
                    "scale(1)"
                  );
                }
              );
          },
          apgEvents: function () {
            h("body").on("mouseenter", ".apg-post-text", function (e) {
              var t = 0.7,
                s = 1.1,
                a = h(this).closest(".apg"),
                i = h(this),
                n = a.attr("data-mouseover-effect");
              ("none" != n && "fade_title" != n) || (t = 0),
                "original_mouse" == a.attr("data-image-mode")
                  ? ("enabled" == a.attr("data-mask-effect") &&
                    a.hasClass("column-dir")
                      ? ((s = 1),
                        i.find(".post-thumbnail img").css("z-index", 4),
                        i.find(".apg-post-title").css("z-index", 10),
                        i
                          .find(".title")
                          .clone()
                          .attr("class", "title title-hover")
                          .appendTo(i.find(".apg-post-title"))
                          .wrap('<div class="mask"></div>'))
                      : ("fade_both" != n && "fade_title" != n) ||
                        a
                          .find(".apg-post-text, .apg-text-seperator")
                          .removeClass("apg-text-active")
                          .addClass("apg-text-active"),
                    i.mousemove(function (e) {
                      e =
                        e.pageX || e.pageY
                          ? ((t = e.pageX), e.pageY)
                          : ((t = e.clientX + document.body.scrollLeft),
                            e.clientY + document.body.scrollTop);
                      var t,
                        s = a.offset(),
                        n = parseFloat(
                          a.closest(".column-content").css("padding-top")
                        ),
                        n =
                          ((s.top = s.top - n), i.find(".post-thumbnail img")),
                        o = n.width(),
                        n = n.height();
                      i
                        .find(".post-thumbnail img")
                        .css({
                          top: e - n / 2 - s.top,
                          left: t - o / 2 - s.left,
                        }),
                        "enabled" == a.attr("data-mask-effect") &&
                          a.hasClass("column-dir") &&
                          (i
                            .find(".mask")
                            .css({
                              width: o,
                              height: i.find(".title").height(),
                              top: i.find(".title").offset().top - s.top,
                              left: t - o / 2 - s.left,
                            }),
                          0 <=
                          (e =
                            h(this).find(".mask").offset().left -
                            h(this).find(".title").offset().left)
                            ? i
                                .find(".title-hover")
                                .css({ top: 0, left: "-" + e + "px" })
                            : i
                                .find(".title-hover")
                                .css({ top: 0, left: (e *= -1) + "px" }));
                    }))
                  : "original_mouse" != a.attr("data-image-mode") &&
                    (i.unbind("mousemove"),
                    ("fade_both" != n && "fade_title" != n) ||
                      a
                        .find(".apg-post-text, .apg-text-seperator")
                        .removeClass("apg-text-active")
                        .addClass("apg-text-active")),
                gsap.to(i.find(".post-thumbnail img"), t, {
                  opacity: 1,
                  visibility: "visible",
                  scale: s,
                  ease: "expo.out",
                });
            }),
              h("body").on("mouseleave", ".apg-post-text", function () {
                var e = h(this).closest(".apg"),
                  t = h(this),
                  s = e.attr("data-mouseover-effect"),
                  s = "none" != s && "fade_title" != s ? 0.7 : 0;
                "original_mouse" == e.attr("data-image-mode")
                  ? "enabled" == e.attr("data-mask-effect")
                    ? (t.find(".mask").remove(),
                      t.find(".apg-post-title").css("z-index", 1),
                      t.find(".post-thumbnail img").css("z-index", 0))
                    : t
                        .closest(".apg")
                        .find(".apg-post-text, .apg-text-seperator")
                        .removeClass("apg-text-active")
                  : "original_mouse" != e.attr("data-image-mode") &&
                    t
                      .closest(".apg")
                      .find(".apg-post-text, .apg-text-seperator")
                      .removeClass("apg-text-active"),
                  gsap.to(t.find(".post-thumbnail img"), s, {
                    opacity: 0,
                    scale: 1,
                    ease: "expo.out",
                    onComplete: function () {
                      t.find(".post-thumbnail img").css("visibility", "hidden");
                    },
                  });
              }),
              h("body").on("mouseenter", ".apg-post-table", function () {
                var e = h(this).closest(".apg"),
                  t = e.closest(".column-content").attr("id"),
                  s =
                    (0 === h("#" + t + "-thumbholder").length &&
                      h("#content-holder").append(
                        '<div id="' +
                          t +
                          '-thumbholder" class="apg-thumb-animation"></div>'
                      ),
                    0.6),
                  e =
                    ("none" == e.attr("data-table-img-hover") && (s = 0),
                    h(this)),
                  n = e.attr("data-post-id"),
                  t = h("#" + t + "-thumbholder"),
                  o = e.find(".post-thumbnail"),
                  n =
                    (o.find("img"),
                    0 < t.find('[data-thumb-id="' + n + '"]').length &&
                      t.find('[data-thumb-id="' + n + '"]').remove(),
                    o.clone().appendTo(t),
                    t.find('[data-thumb-id="' + e.attr("data-post-id") + '"]')),
                  o = n.find("img");
                gsap.to(n, s, { opacity: 1, ease: "Expo.easeOut" }),
                  gsap.to(o, s, { scale: 1, ease: "Expo.easeOut" });
              }),
              h("body").on("mouseleave", ".apg-post-table", function (e) {
                var t, s, n, o;
                null !== e.relatedTarget &&
                  "apg-table-link" != e.relatedTarget.className &&
                  ((o = (e = h(this).closest(".apg"))
                    .closest(".column-content")
                    .attr("id")),
                  (t = 0.6),
                  "none" == e.attr("data-table-img-hover") && (t = 0),
                  (s = h(this).attr("data-post-id")),
                  (e = h("#" + o + "-thumbholder"))
                    .find(".post-thumbnail")
                    .each(function () {
                      h(this).attr("data-thumb-id") != s && h(this).remove();
                    }),
                  (o = (n = e.find('[data-thumb-id="' + s + '"]')).find("img")),
                  gsap.to(n, t, {
                    opacity: 0,
                    ease: "Expo.easeOut",
                    onComplete: function () {
                      n.remove();
                    },
                  }),
                  gsap.to(o, t, { scale: 1, ease: "Expo.easeOut" }));
              });
          },
          lottie: function (e, t, n, s, o) {
            var a,
              i = document.getElementById(e + "_lottie"),
              r = e + "_lottie_styles",
              l = !1,
              c = "grid",
              p = {
                width: "grid",
                custom_width: 570,
                justify: "left",
                event: "on_load",
                loop: !1,
                speed: 1,
              },
              o =
                (h.each(p, function (e, t) {
                  var s;
                  void 0 !== n[e] &&
                    ((s = s4.helper.bool(n[e])),
                    "speed" == e && (s /= 10),
                    "width" == e && "custom" == s && ((l = !0), (c = "custom")),
                    (p[e] = s));
                }),
                (o / s).toFixed(2)),
              s = h("#" + e).width(),
              s =
                ((!0 !== l || s < (a = parseInt(p.custom_width))) && (a = s),
                Math.round(o * a));
            h("#" + e + " .semplice-lottie").css(
              "justify-content",
              { left: "flex-start", center: "center", right: "flex-end" }[
                p.justify
              ]
            ),
              h("#content-holder #" + e + "_lottie").css({
                width: a + "px",
                height: s + "px",
              }),
              h("." + r).css({
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }),
              h("#" + e + "_lottie").attr({
                "data-width-type": c,
                "data-ratio": o,
                "data-custom-width": p.custom_width,
              }),
              (s4.animate.lottie[e] = lottie.loadAnimation({
                container: i,
                renderer: "svg",
                loop: p.loop,
                autoplay: !1,
                path: t,
                rendererSettings: { className: r, viewBoxOnly: !0 },
              })),
              s4.animate.lottie[e].setSpeed(p.speed);
          },
          marquee: function (e, t, s) {
            var n = s4.helper.marqueeData(s, t, "duration"),
              o = "-";
            "rtl" == t.direction && (o = ""),
              (s4.animate.gsap[e + "-marquee"] = gsap.timeline({
                repeat: -1,
                repeatRefresh: !1,
                clearProps: "all",
              })),
              s4.animate.gsap[e + "-marquee"].to(s, n, {
                clearProps: "all",
                x: function () {
                  return o + s4.helper.marqueeData(s, t, "distance");
                },
                ease: Linear.easeNone,
              });
          },
          marqueeData: function (e, t, s) {
            var e = e.find(".semplice-marquee-content").first()[0],
              n = h("body").attr("data-breakpoint-js"),
              t = parseInt(t.speed[n]),
              n = parseFloat(e.getBoundingClientRect().width.toFixed(2)),
              e = window.getComputedStyle(e),
              n = n + (parseInt(e.marginRight) || 0);
            return "duration" == s ? n / t : n;
          },
          resetMotions: function () {
            h.isEmptyObject(s4.animate.gsap) ||
              h.each(s4.animate.gsap, function (e, t) {
                var s = "#content-holder #" + e,
                  n = h("#" + e).attr("data-module");
                -1 < e.indexOf("content_") &&
                  -1 ==
                    [
                      "advancedportfoliogrid",
                      "portfoliogrid",
                      "dribbble",
                      "instagram",
                      "gallerygrid",
                    ].indexOf(n) &&
                  (-1 < e.indexOf("marquee") &&
                    gsap.killTweensOf(s + " .semplice-marquee-inner"),
                  (s += " .is-content")),
                  h(document).off("click", s),
                  h(document).off("mouseover", s),
                  h(document).off("mouseout", s),
                  gsap.killTweensOf(s),
                  void 0 !== ScrollTrigger.getById(e) &&
                    ScrollTrigger.getById(e).kill(!0),
                  t.eventCallback("onStart", null);
              }),
              0 < h(".lottie-holder").length && lottie.destroy(),
              (s4.animate = { lottie: {}, gsap: {} });
          },
          filterMasonry: function (e) {
            var t = h(e.attr("data-masonry-element")),
              s = e.attr("data-category"),
              e = t.closest(".column-content");
            t.find(".masonry-item").addClass("masonry-filter-transition"),
              "show-all" != s
                ? t.find(".masonry-item").each(function () {
                    h(this).hasClass("cat-" + s)
                      ? h(this).show()
                      : h(this).hide();
                  })
                : t.find(".masonry-item").show(),
              e.find(".pg-filter-active").removeClass("pg-filter-active"),
              e
                .find('[data-category="' + s + '"]')
                .addClass("pg-filter-active"),
              t.masonry(),
              setTimeout(function () {
                t.find(".masonry-item").removeClass(
                  "masonry-filter-transition"
                );
              }, 500);
          },
          lazyLoad: function (a) {
            var e = a.attr("data-type"),
              i = a.attr("data-content-id"),
              r = parseInt(a.attr("data-offset")),
              l = parseInt(a.attr("data-load")),
              t = a.attr("data-grid-options");
            h("#" + i)
              .find(".load-more-wrapper")
              .removeClass("disabled")
              .addClass("disabled"),
              h.ajax({
                type: "GET",
                url: semplice.semplice_api_url + "/lazy-load/" + e,
                data: {
                  post_id: h("body").attr("data-post-id"),
                  options: t,
                  content_id: i,
                  offset: r,
                  load: l,
                },
                beforeSend: function (e) {
                  e.setRequestHeader("X-WP-Nonce", semplice.nonce);
                },
                success: function (e) {
                  a.attr("data-offset", r + l);
                  var n,
                    o,
                    t = h("#masonry-" + i),
                    s =
                      (t.append(e.items),
                      0 < h("#" + i + "-style").length
                        ? h("#" + i + "-style").append(e.css)
                        : h("head").append(
                            '<style type="text/css" id="' +
                              i +
                              '-style">' +
                              e.css +
                              "</style>"
                          ),
                      t.masonry("reloadItems"),
                      t.find(".pg-lazy-load"));
                  (s = s),
                    (n = t.data("masonry")),
                    (o = n.options.itemSelector),
                    s.imagesLoaded().progress(function (e, t) {
                      var s = h(t.img).parents(o);
                      n.layout(),
                        gsap.to(s, 1.1, {
                          opacity: 1,
                          y: 0,
                          ease: "expo.out",
                          scale: 1,
                          onComplete: function () {
                            s.removeClass("pg-lazy-load");
                          },
                        });
                    }),
                    h("#" + i)
                      .find(".load-more-wrapper")
                      .removeClass("disabled"),
                    !0 === e.fin &&
                      h("#" + i)
                        .find(".load-more-wrapper")
                        .addClass("lazy-load-fin");
                },
                error: function (e) {
                  h("#" + i)
                    .find(".load-more-wrapper")
                    .removeClass("disabled"),
                    console.log(e);
                },
              });
          },
          accordion: function (e) {
            var t,
              s,
              n = e.closest(".column-content").attr("id"),
              n = h("#" + n).find(".is-content"),
              o = n.attr("data-mode");
            !1 === s4.activeAccordion &&
              ((s4.activeAccordion = !0),
              (t = e.hasClass("expanded")),
              ((0 < n.find(".expanded").length && "toggle" == o) ||
                (!0 === t && "normal" == o)) &&
                ((s = n.find(".expanded").children(".description")),
                "toggle" == o
                  ? n.find(".accordion-item").removeClass("expanded")
                  : (e.removeClass("expanded"), (s = e.find(".description"))),
                gsap.to(s, {
                  height: 0,
                  duration: 0.4,
                  ease: "Expo.easeOut",
                  clearProps: "all",
                  onComplete: function () {
                    (s4.activeAccordion = !1), s4.helper.refreshScrollTrigger();
                  },
                })),
              !1 === t &&
                (e.addClass("expanded"),
                gsap.to(e.find(".description"), {
                  height: "auto",
                  duration: 0.4,
                  ease: "Expo.easeOut",
                  onComplete: function () {
                    (s4.activeAccordion = !1), s4.helper.refreshScrollTrigger();
                  },
                })));
          },
          refreshScrollTrigger: function () {
            h.isEmptyObject(s4.animate.gsap) ||
              h.each(s4.animate.gsap, function (e, t) {
                void 0 !== t.scrollTrigger &&
                  null !== t.scrollTrigger &&
                  t.scrollTrigger.refresh();
              });
          },
          commentsReply: function (e) {
            0 < h(".replyto-active").length && !e.hasClass("comment-reply-link")
              ? (h("#respond").removeClass("replyto-active"),
                h("#comment_parent").val(0))
              : (h("#respond")
                  .removeClass("replyto-active")
                  .addClass("replyto-active"),
                h("#comment_parent").val(e.attr("data-commentid")),
                (e = e.attr("data-replyto").replace("Reply to", "")),
                h(".reply-to-span").html(
                  h(".reply-to-span").attr("data-base") + e
                ),
                gsap.to(window, 0, {
                  scrollTo: { y: h("#reply-title").offset().top },
                }));
          },
        };
      },
      {},
    ],
    6: [
      function (e, t, s) {
        var p = jQuery;
        t.exports = function () {
          var r, l, t, s, c, n;
          !0 === s4.sempliceDebug &&
            (console.log(
              "# Scroll Reveal Status on First load: " + s4.srStatus
            ),
            console.log("# Blog SR Status: " + s4.blogSrStatus),
            console.log("# is Preview: " + s4.isPreview)),
            s4.helper.registerBreakpoints(),
            s4.menu.init(),
            void 0 !== semplice.sr_options &&
              p.each(
                [
                  "viewFactor",
                  "distance",
                  "easing",
                  "duration",
                  "opacity",
                  "scale",
                  "mobile",
                ],
                function (e, t) {
                  var s;
                  void 0 !== semplice.sr_options[t] &&
                    ((s = semplice.sr_options[t]),
                    (s4.srOptions[t] = "distance" == t ? s + "px" : s),
                    "mobile" == t &&
                      ((s4.srOptions[t] = !1),
                      "true" == s && (s4.srOptions[t] = !0)),
                    "viewFactor" == t &&
                      (0 == s
                        ? (s4.srOptions[t] = 0.01)
                        : 0.5 <= s && (s4.srOptions[t] = 0.5)));
                }
              ),
            (window.sr = new ScrollReveal()),
            "enabled" == s4.srStatus && "static" == s4.frontendMode
              ? s4.helper.reveal(!0)
              : "disabled" == s4.srStatus &&
                "enabled" == semplice.static_transitions &&
                "static" == s4.frontendMode &&
                gsap.to(p(s4.contentContainer), 0.6, {
                  opacity: 1,
                  ease: Sine.easeOut,
                }),
            s4.helper.photoSwipeIndexes("init"),
            s4.helper.initVideos(!1),
            s4.helper.resizeElements("s4.init"),
            s4.helper.apgEvents(),
            s4.helper.customHamburgerEvents(),
            s4.helper.coverEffects(!1),
            "static" != s4.frontendMode
              ? (NProgress.configure({ showSpinner: !1 }),
                NProgress.start(),
                s4.main.init(window.location.href, !0, !1),
                p(document).on("click", "a", function (e) {
                  var t, s, n, o, a;
                  p(this).hasClass("semplice-event")
                    ? s4[p(this).attr("data-event-type")][
                        p(this).attr("data-event")
                      ](p(this))
                    : p(this).hasClass("comment-reply-link") ||
                      "cancel-comment-reply-link" == p(this).attr("id")
                    ? (e.preventDefault(), s4.helper.commentsReply(p(this)))
                    : "_blank" != p(this).attr("target") &&
                      void 0 !== p(this).attr("href") &&
                      !1 !== p(this).attr("href") &&
                      ("#" == (t = p(this).attr("href")).charAt(0) &&
                        ((a = s4.helper.parseUrl(window.location.href)),
                        (s4.activeStateUrl = a.href.replace(a.hash, "")),
                        (t = s4.activeStateUrl + t)),
                      (t = s4.helper.getUrl(t, window.location.href)),
                      (s = p(this).text()),
                      (n = s4.helper.getCustomTransition(p(this))),
                      p(this).hasClass("semplice-lightbox")
                        ? e.preventDefault()
                        : s4.helper.isValidUrl(t)
                        ? e.metaKey ||
                          e.shiftKey ||
                          e.ctrlKey ||
                          (e.preventDefault(),
                          0 == s4.activeTransition &&
                            (t.new.noHash != t.active.noHash ||
                            -1 < t.active.full.indexOf("?s=")
                              ? (s4.helper.addFocusBeforeWrap(p(this), !1),
                                NProgress.start(),
                                (s4.hideCover = s4.helper.hideCover(p(this))),
                                p("body").hasClass("open-menu")
                                  ? (s4.menu.hideMenuOnPageChange(),
                                    "enabled" == semplice.exclusive_nav
                                      ? (p("#overlay-menu")
                                          .find(".close-menu, .hamburger-text")
                                          .trigger("click"),
                                        s4.helper.changePage(
                                          t.new.full,
                                          t.active.full,
                                          s,
                                          n
                                        ))
                                      : (s4.overlayFadeOut = gsap.to(
                                          s4.overlayMenu,
                                          0.35,
                                          {
                                            opacity: 0,
                                            onComplete: function () {
                                              s4.helper.changePage(
                                                t.new.full,
                                                t.active.full,
                                                s,
                                                n
                                              );
                                            },
                                          }
                                        )))
                                  : s4.helper.changePage(
                                      t.new.full,
                                      t.active.full,
                                      s,
                                      n
                                    ))
                              : t.new.hash && t.new.hash != window.location.hash
                              ? s4.helper.goToHash(t.new.hash)
                              : p("body").hasClass("open-menu") &&
                                s4.menu.close(p(".close-menu"))))
                        : -1 < t.new.full.indexOf("replyto") &&
                          (null !== (a = t.new.full.match(/replytocom=\d+/)) &&
                            ((a = parseInt(a[0].replace("replytocom=", ""))),
                            p.isNumeric(a) &&
                              (s4.helper.goToHash("#reply-title"),
                              p("#comment_parent").val(a),
                              (o = p("#comment-" + a)
                                .find("cite")
                                .first()
                                .text()),
                              p("#reply-title").html(""),
                              p("#reply-title").append(
                                'Leave a reply to <a href="#comment-' +
                                  a +
                                  '">' +
                                  o +
                                  '</a><a rel="nofollow" class="semplice-event" data-event-type="helper" data-event="removeCommentReplyLink" id="cancel-comment-reply-link">Cancel Reply</a>'
                              ))),
                          e.preventDefault()));
                }),
                (window.onpopstate = function (e) {
                  var t, s;
                  gsap.killTweensOf(".content-container"),
                    gsap.killTweensOf(s4.postTransition.custom.target),
                    gsap.killTweensOf(s4.postTransition.extra.target),
                    s4.helper.noHash(s4.activeStateUrl) !=
                      s4.helper.noHash(window.location.href) &&
                      ((s4.hideCover = !1) !== s4.overlayFadeOut &&
                        s4.overlayFadeOut.isActive() &&
                        (s4.overlayFadeOut.kill(),
                        s4.menu.hideMenuOnPageChange()),
                      !1 !== s4.sempliceGallery && s4.sempliceGallery.close(),
                      s4.newPostElement != s4.activePostElement &&
                        (s4.helper.killCoverSlider(!1),
                        s4.contentHolder.html("")),
                      -1 === (t = window.location.href).search(/\?s=\w+/) &&
                        (t = window.location.href.replace(/\?.*/, "")),
                      (s = s4.helper.getPostInfo(t)),
                      s4.get.post(s, !0, !0, !1),
                      p("body").hasClass("semplice-cursor") &&
                        p("#semplice-cursor").show(),
                      (s4.activeStateUrl = t));
                }),
                p(document).on("keypress", function (e) {
                  13 == e.which &&
                    void 0 !== e.target.className &&
                    "search-field" == e.target.className &&
                    p(".blogposts-search").submit(function (e) {
                      e.preventDefault();
                      (e = p(this).find(".search-field").val()),
                        (e = semplice.base_url + "?s=" + e),
                        (e = s4.helper.getUrl(e, window.location.href));
                      s4.helper.changePage(
                        e.new.full,
                        e.active.full,
                        "Blogsearch",
                        !1
                      );
                    });
                }))
              : (s4.helper.restoreApgPosition(!0),
                p(document).on("click", "a", function (e) {
                  if (p(this).hasClass("semplice-event"))
                    s4[p(this).attr("data-event-type")][
                      p(this).attr("data-event")
                    ](p(this));
                  else if (
                    p(this).hasClass("comment-reply-link") ||
                    "cancel-comment-reply-link" == p(this).attr("id")
                  )
                    e.preventDefault(), s4.helper.commentsReply(p(this));
                  else if (
                    ((s4.hideCover = s4.helper.hideCover(p(this))),
                    history.replaceState(
                      { apg: s4.helper.setApgHistory() },
                      "",
                      window.location.href
                    ),
                    "enabled" == semplice.static_transitions)
                  ) {
                    if (
                      "_blank" != p(this).attr("target") &&
                      void 0 !== p(this).attr("href") &&
                      !1 !== p(this).attr("href")
                    ) {
                      var t = p(this).attr("href"),
                        t = s4.helper.getUrl(t, window.location.href);
                      if (s4.helper.isValidUrl(t) && !t.new.hash)
                        return (
                          0 == p(".no-menu-transition").length &&
                            (p(s4.navbar).css("transition", "none"),
                            gsap.to(p(s4.navbar), 0.7, {
                              yPercent: -100,
                              ease: "expo.inOut",
                            })),
                          gsap.to(s4.contentHolder, 0.6, {
                            opacity: 0,
                            ease: Sine.easeOut,
                            onComplete: function () {
                              !0 === s4.hideCover
                                ? (p("#coverslider-form").attr(
                                    "action",
                                    t.new.full
                                  ),
                                  document
                                    .getElementById("coverslider-form")
                                    .submit())
                                : (window.location = t.new.full);
                            },
                          }),
                          !1
                        );
                    }
                  } else if (!0 === s4.hideCover)
                    return (
                      p("#coverslider-form").attr(
                        "action",
                        p(this).attr("href")
                      ),
                      document.getElementById("coverslider-form").submit(),
                      !1
                    );
                })),
            p("#content-holder").on("click", ".semplice-lightbox", function () {
              s4.helper.photoSwipe(
                p(this).children("img").attr("data-photoswipe-index")
              );
            }),
            p("body").on("click", ".semplice-menu", function () {
              "open" == p(s4.hamburger).attr("data-status")
                ? s4.menu.close(p(".close-menu"))
                : s4.menu.open(p(".open-menu"));
            }),
            p("#content-holder").on("mouseenter", ".video-hover", function () {
              p(this).find("video").trigger("play");
            }),
            p("#content-holder").on("mouseleave", ".video-hover", function () {
              p(this).find("video").trigger("pause");
            }),
            p("#content-holder").on(
              "click",
              ".accordion-item .title",
              function () {
                s4.helper.accordion(p(this).closest(".accordion-item"));
              }
            ),
            p("body").hasClass("semplice-cursor") &&
              ((r = p("#semplice-cursor")),
              (l = semplice.customize.cursor),
              p.each(
                {
                  color: "#666666",
                  size: 14,
                  mouseover_color: "#000000",
                  mouseover_size: 64,
                  nextprev_prev_cursor_type: "left-arrow",
                  nextprev_next_cursor_type: "right-arrow",
                  gallery_prev_cursor_type: "left-arrow",
                  gallery_next_cursor_type: "right-arrow",
                  gallery_drag_cursor_type: "drag",
                  apg_cursor_type: "text",
                  apg_cursor_text: "View",
                  apg_prev_cursor_type: "left-arrow",
                  apg_next_cursor_type: "right-arrow",
                  mailchimp_cursor_type: "text",
                  mailchimp_cursor_text: "Send",
                  lightbox_cursor_type: "zoom-in",
                  ba_cursor_type: "ba",
                  back_to_top_cursor_type: "top-arrow",
                  show_more_cursor_type: "bottom-arrow",
                },
                function (e, t) {
                  void 0 === l[e] && (l[e] = t);
                }
              ),
              (t = l.size / 2 - 5),
              (s = l.size / 2 - 9),
              p(window).on("mousemove", function (e) {
                r.css(
                  "transform",
                  "translate3d(" +
                    (e.clientX - t) +
                    "px, " +
                    (e.clientY - s) +
                    "px, 0px)"
                );
              }),
              (mouseovers = {
                ".is-content a": !1,
                ".pp-thumb": !1,
                ".post-password-submit": !1,
                "#comments a": !1,
                "#respond #submit": !1,
                ".hamburger": !1,
                ".view-project": !1,
                ".masonry-filter li a": !1,
                ".image-link": !1,
                ".accordion-item": !1,
                ".logo": "logo",
                ".menu-item": "nav",
                ".semplice-prev": "nextprev_prev",
                ".semplice-next": "nextprev_next",
                ".pg-link": "pg",
                ".apg-post": "apg",
                ".apg .previous": "apg_prev",
                ".apg .next": "apg_next",
                ".semplice-gallery-slider .previous": "gallery_prev",
                ".semplice-gallery-slider .next": "gallery_next",
                ".sgs-freescroll": "gallery_drag",
                ".mailchimp-submit-button": "mailchimp",
                ".lightbox-item": "lightbox",
                ".gg-hover": "lightbox",
                ".ba-handle": "ba",
                ".back-to-top": "back_to_top",
                ".show-more": "show_more",
              }),
              (c = { "semplice-gallery-slider": "gallery", apg: "apg" }),
              (n = ""),
              p.each(mouseovers, function (e, t) {
                n += e + ", ";
              }),
              (n = n.slice(0, -2)),
              p("body").on("mouseenter", n, function (s) {
                var n,
                  e,
                  o = p(this),
                  a =
                    (r
                      .removeClass("mouseover-cursor")
                      .addClass("mouseover-cursor"),
                    !1),
                  i = !1,
                  t = l.mouseover_color;
                p.each(mouseovers, function (e, t) {
                  -1 < s.currentTarget.className.indexOf(e.replace(".", ""))
                    ? (i = t)
                    : -1 <
                        s.currentTarget.className.indexOf("flickity-button") &&
                      (a = !0);
                }),
                  !0 === a &&
                    ((n = "prev"),
                    -1 < s.currentTarget.className.indexOf(" next") &&
                      (n = "next"),
                    p.each(c, function (e, t) {
                      o.closest(".flickity-enabled").hasClass(e) &&
                        (i = t + "_" + n);
                    })),
                  !1 !== i &&
                    (void 0 !== l[i + "_cursor_color"] &&
                      "transparent" != l[i + "_cursor_color"] &&
                      (t = l[i + "_cursor_color"]),
                    void 0 !== l[i + "_cursor_type"] &&
                      "none" != l[i + "_cursor_type"] &&
                      ((e = "View"),
                      "text" == l[i + "_cursor_type"]
                        ? (void 0 !== l[i + "_cursor_text"] &&
                            (e = l[i + "_cursor_text"]),
                          p(".cursor-text").text(e).css("display", "flex"))
                        : p(".cursor-" + l[i + "_cursor_type"]).css(
                            "display",
                            "flex"
                          )),
                    void 0 !== l[i + "_cursor_blendmode"] &&
                      "default" != l[i + "_cursor_blendmode"] &&
                      r.css("mix-blend-mode", l[i + "_cursor_blendmode"]),
                    void 0 !== l[i + "_cursor_inner_color"] &&
                      "transparent" != l[i + "_cursor_inner_color"] &&
                      (p(".semplice-cursor-inner .cursor-text").css(
                        "color",
                        l[i + "_cursor_inner_color"]
                      ),
                      p(".semplice-cursor-inner .cursor-icon svg").css(
                        "fill",
                        l[i + "_cursor_inner_color"]
                      ))),
                  gsap.to(p(".semplice-cursor-inner"), 0.7, {
                    width: l.mouseover_size + "px",
                    height: l.mouseover_size + "px",
                    backgroundColor: t,
                    ease: Expo.easeOut,
                  });
              }),
              p("body").on("mouseleave", n, function (e) {
                r.removeClass("mouseover-cursor"),
                  gsap.to(p(".semplice-cursor-inner"), 0.7, {
                    width: l.size + "px",
                    height: l.size + "px",
                    backgroundColor: l.color,
                    ease: Expo.easeOut,
                  }),
                  p(".cursor-text, .cursor-icon").hide(),
                  r.css("mix-blend-mode", ""),
                  p(".semplice-cursor-inner .cursor-text").css("color", ""),
                  p(".semplice-cursor-inner .cursor-icon svg").css("fill", "");
              }),
              p("body").on(
                "mouseenter",
                ".ce-video-controls, .pswp",
                function () {
                  r.hide();
                }
              ),
              p("body").on(
                "mouseleave",
                ".ce-video-controls, .pswp",
                function () {
                  r.show();
                }
              )),
            p(window).on("scroll", function (e) {
              var t;
              "static" != s4.frontendMode &&
                (null == history.state && 0 < p(document).scrollTop()
                  ? (s4.scrollHistory.most_recent = p(window).scrollTop())
                  : 0 < p(document).scrollTop() &&
                    (s4.scrollHistory[history.state.id] =
                      p(window).scrollTop())),
                "parallax" == p(s4.cover).attr("data-cover-effect") &&
                  0 == p("#coverslider").length &&
                  ((t = p(window).scrollTop() / 3),
                  p(".cover-image").css({
                    transform: "translate3d(0px, " + t + "px, 0px)",
                  })),
                "enabled" == p(s4.navbar).attr("data-cover-transparent") &&
                  (p(this).scrollTop() >=
                  p(s4.cover).height() - (p(".semplice-navbar").height() + 20)
                    ? p(".semplice-navbar").removeClass("cover-transparent")
                    : p(s4.cover).isOnScreen(0.01, 0.01) &&
                      p(".semplice-navbar").addClass("cover-transparent")),
                400 < p(this).scrollTop() && 0 == p(".corner-navbar").length
                  ? p(".back-to-top").stop().fadeIn(700)
                  : p(".back-to-top").stop().fadeOut(700);
            }),
            p(window).on("resize", function (e) {
              "align-top" != p(s4.menuInner + " nav").data("align") &&
                s4.menu.responsiveOverlay(),
                (document.body.style.height = window.innerHeight + "px"),
                s4.helper.resizeElements("resize"),
                p(".lottie-holder").each(function () {
                  var e,
                    t = p(this).attr("data-width-type"),
                    s = parseInt(p(this).attr("data-custom-width")),
                    n = parseFloat(p(this).attr("data-ratio")),
                    o =
                      (p(this).width(),
                      p(this).height(),
                      p(this).closest(".column-content").width()),
                    t =
                      (("custom" != t || o < (e = s)) && (e = o),
                      Math.round(n * e));
                  p(this).css({ width: e + "px", height: t + "px" });
                });
              var t = window.innerWidth;
              clearTimeout(s4.resizeTimeout),
                (s4.resizeTimeout = setTimeout(function () {
                  t != s4.width &&
                    ((s4.width = t),
                    p('[data-module="marquee"]').each(function () {
                      var e = p(this).attr("id"),
                        t = p("#" + e).find(".semplice-marquee-inner"),
                        s = JSON.parse(t.attr("data-options"));
                      p.isEmptyObject(s4.animate.gsap[e + "-marquee"]) ||
                        (gsap.set(t, { clearProps: !0 }),
                        gsap.killTweensOf(t),
                        s4.animate.gsap[e + "-marquee"].clear(),
                        (s4.animate.gsap[e + "-marquee"] = null)),
                        s4.helper.marquee(e, s, t);
                    }));
                }, 250));
            }),
            p(window).on("hashchange", function (e) {
              p("body").hasClass("open-menu") &&
                s4.menu.close(p(".close-menu"));
            }),
            p(window).bind("pageshow", function (e) {
              e.originalEvent.persisted && window.location.reload();
            }),
            !0 === s4.sempliceDebug &&
              p.each(
                [
                  "sempliceTransitionsStart",
                  "sempliceTransitionOutStart",
                  "sempliceTransitionInStart",
                  "sempliceTransitionsOutDone",
                  "sempliceTransitionInDone",
                  "sempliceTransitionsDone",
                  "sempliceMenuOpenStart",
                  "sempliceMenuCloseStart",
                  "sempliceMenuOpenDone",
                  "sempliceMenuCloseDone",
                ],
                function (e, t) {
                  window.addEventListener(
                    t,
                    function (e) {
                      console.log("Event: " + t + " just triggered.");
                    },
                    !1
                  );
                }
              ),
            window.addEventListener(
              "sempliceTransitionsDone",
              function (e) {
                p.isEmptyObject(s4.sempliceExecuteStack) ||
                  p.each(s4.sempliceExecuteStack, function (e, t) {
                    s4.execute[t.type](t);
                  }),
                  !1 !== s4.animations &&
                    (p("body").append(
                      '<script type="text/javascript" id="' +
                        s4.animations.postId +
                        '-motion-js">' +
                        s4.animations.content +
                        "</script>"
                    ),
                    "dynamic" == s4.frontendMode &&
                      "disabled" == s4.transition.status &&
                      setTimeout(function () {
                        s4.helper.refreshScrollTrigger();
                      }, 0));
              },
              !1
            );
        };
      },
      {},
    ],
    7: [
      function (e, t, s) {
        jQuery;
        t.exports = {
          init: function (e, t, s) {
            t
              ? (s4.menu.showNavbar(!1, !1, !0),
                s4.show.postFirstLoad(),
                "enabled" == s4.srStatus && s4.helper.reveal(!0))
              : ((t = s4.helper.getPostInfo(e)), s4.get.post(t, !1, !1, s));
          },
        };
      },
      {},
    ],
    8: [
      function (e, t, s) {
        var i = jQuery;
        t.exports = {
          init: function () {
            "align-top" == i(s4.menuInner + " nav").data("align") &&
              i(s4.menuInner + " nav").css(
                "top",
                i(s4.navbar).outerHeight() + "px"
              ),
              "align-top" != i(s4.menuInner + " nav").data("align") &&
                s4.menu.responsiveOverlay(),
              "enabled" == semplice.static_transitions
                ? 0 == i(".no-menu-transition").length
                  ? i(s4.navbar).hasClass("non-sticky-nav")
                    ? i(s4.navbar).css("transform", "translateY(0)")
                    : gsap.to(i(s4.navbar), 0.8, {
                        y: 0,
                        ease: "expo.out",
                        clearProps: "y",
                        onComplete: function () {
                          var e = i(s4.navbar).hasClass("use-headroom")
                            ? ""
                            : "none";
                          i(s4.navbar).css({ transform: e, transition: "" }),
                            s4.menu.headroom(!1);
                        },
                      })
                  : gsap.to(i(s4.navbar), 0.8, { opacity: 1, ease: "expo.out" })
                : "static" == semplice.frontend_mode && s4.menu.headroom(!1);
          },
          open: function (e) {
            "disabled" !== i(s4.hamburger).attr("disabled") &&
              (window.dispatchEvent(s4.sempliceEvents.menu.open_start),
              i(s4.hamburger).attr({
                disabled: "disabled",
                "data-status": "open",
              }),
              e.removeClass("open-menu").addClass("close-menu"),
              0 < i(".hamburger-text").length &&
                i(".hamburger-text").text(
                  i(".hamburger-text").attr("data-label-close")
                ),
              (s4.headerBarRgba = s4.helper.getRgba(
                i(s4.navbar).css("background-color")
              )),
              s4.menu.navbarBgOverlayVisibility(
                i(s4.navbar).data("bg-overlay-visibility")
              ),
              i(s4.overlayMenu).stop().show().css("z-index", "119"),
              gsap.to(s4.overlayMenu, 0.35, {
                opacity: 1,
                onComplete: function () {
                  s4.menu.afterOpenMenu(),
                    window.dispatchEvent(s4.sempliceEvents.menu.open_done);
                },
              }),
              setTimeout(function () {
                s4.menu.showMenuItems(i(s4.menuInner + " nav ul li"));
              }, 50));
          },
          close: function (e) {
            var t;
            "disabled" !== i(s4.hamburger).attr("disabled") &&
              (window.dispatchEvent(s4.sempliceEvents.menu.close_start),
              (t = "open-menu"),
              0 < i("nav.standard").length && (t += " responsive-menu"),
              i(s4.hamburger).attr({
                disabled: "disabled",
                "data-status": "closed",
              }),
              e.removeClass("close-menu").addClass(t),
              0 < i(".hamburger-text").length &&
                i(".hamburger-text").text(
                  i(".hamburger-text").attr("data-label-open")
                ),
              s4.menu.navbarBgOverlayVisibility("visible"),
              "enabled" == i(s4.navbar).attr("data-cover-transparent") &&
                i(window).scrollTop() <=
                  i(s4.cover).height() - (i(s4.navbar).height() + 20) &&
                i(s4.navbar).css("background-color", ""),
              i(s4.navbar).insertBefore(s4.overlayMenu),
              ((!i(s4.navbar).hasClass("non-sticky-nav") &&
                767.9 < i(window).width()) ||
                i(s4.navbar).hasClass("use-headroom") ||
                -1 <
                  i(s4.navbar)
                    .find(".container, .container-fluid, .container-nav-inner")
                    .attr("data-nav")
                    .indexOf("container") ||
                "enabled" == semplice.exclusive_nav) &&
                i(s4.navbar).css("position", "fixed"),
              i("body").removeClass("open-menu"),
              s4.contentHolder.css("width", "100%"),
              i(s4.navbar)
                .find(".container-nav-inner, .logo")
                .attr("style", ""),
              gsap.to(s4.overlayMenu, 0.35, {
                opacity: 0,
                onComplete: function () {
                  s4.menu.afterCloseMenu(),
                    window.dispatchEvent(s4.sempliceEvents.menu.close_done);
                },
              }));
          },
          showMenuItems: function (e) {
            var t = 0;
            return e.each(function () {
              var e = i(this);
              e.addClass("before-fade"),
                gsap.to(i(this), 0.35, {
                  opacity: 1,
                  y: 0,
                  clearProps: "y",
                  delay: t,
                  onComplete: function () {
                    e.removeClass("before-fade");
                  },
                }),
                (t += 0.08);
            });
          },
          responsiveOverlay: function () {
            var e = i("header").outerHeight();
            2 * e + (i(s4.menuInner + " nav").height() + 40) >=
            i(window).height()
              ? i(s4.menuInner + " nav")
                  .addClass("align-top")
                  .css("top", e + 40)
              : i(s4.menuInner + " nav")
                  .removeClass("align-top")
                  .css("top", "");
          },
          afterOpenMenu: function () {
            i(s4.navbar)
              .insertBefore(".overlay-menu-inner")
              .css("position", "absolute");
            var s,
              e,
              n = i(window).width(),
              o = (i("body").addClass("open-menu"), i(window).width()),
              t = (100 * n) / o,
              a =
                (s4.contentHolder.css("width", t + "%"),
                i(s4.navbar)
                  .find(".container, .container-fluid, .container-nav-inner")
                  .attr("data-nav"));
            -1 < a.indexOf("container") &&
              ((s = {
                logo: i(s4.navbar).attr("data-logo-position"),
                nav: i(s4.navbar).attr("data-nav-position"),
              }),
              "container-floating" == a
                ? ((e = { logo: ".logo" }),
                  -1 < s.nav.indexOf("bottom") &&
                    (e.nav = ".container-nav-inner"),
                  i.each(e, function (e, t) {
                    -1 == s[e].indexOf("left") &&
                      (-1 < s[e].indexOf("center")
                        ? i(s4.navbar)
                            .find(t)
                            .css("left", "-" + (o - n) + "px")
                        : i(s4.navbar)
                            .find(t)
                            .css("right", o - n + "px"));
                  }))
                : "container-expanded" == a &&
                  -1 < s.nav.indexOf("bottom") &&
                  i(s4.navbar)
                    .find(".container-nav-inner")
                    .css({ width: t + "%", margin: 0 })),
              i(s4.hamburger).removeAttr("disabled");
          },
          afterCloseMenu: function () {
            i(s4.overlayMenu).css({ zIndex: "-1", display: "none" }),
              i(s4.menuInner + " nav ul li").removeAttr("style"),
              i(s4.hamburger).removeAttr("disabled");
          },
          navbarBgOverlayVisibility: function (e) {
            var t = 0;
            "visible" == e && (t = s4.headerBarRgba.alpha),
              i(s4.navbar).css(
                "background-color",
                "rgba(" +
                  s4.headerBarRgba.red +
                  ", " +
                  s4.headerBarRgba.green +
                  ", " +
                  s4.headerBarRgba.blue +
                  ", " +
                  t +
                  ")"
              );
          },
          showNavbar: function (e, t, s) {
            var n = s4.navbar,
              o =
                (i(s4.navbar).hasClass("container-nav-floating") &&
                  (n = ".container-nav-inner"),
                "");
            void 0 !== t.css &&
              (o = t.css
                .replace(/#content-holder/g, "#content-" + s4.newPostElement)
                .replace(/body/g, "#content-" + s4.newPostElement));
            i(".no-menu-transition").length,
              e
                ? (i("#" + s4.newPostElement + "-post-css").append(o),
                  i(s4.activeContent).prepend(t.html),
                  s4.helper.setActiveMenuItem(i(s4.activeContent), s),
                  i(n).css({ opacity: 1, transform: "translateY(0px)" }),
                  s4.menu.headroom(!0))
                : ("disabled" == semplice.exclusive_nav &&
                    (i(s4.activeContent).prepend(i(s4.overlayMenu)),
                    i(s4.activeContent).prepend(i(s4.navbar))),
                  s4.helper.setActiveMenuItem(i(s4.activeContent), s),
                  0 == i(".no-menu-transition").length
                    ? i(n).hasClass("non-sticky-nav")
                      ? setTimeout(function () {
                          i(n).css("transform", "translateY(0)");
                        }, 0)
                      : (i(n).css({
                          transform:
                            "translate(0px, -" + i(n).outerHeight() + "px)",
                          transition: "none",
                        }),
                        gsap.to(i(n), 0.8, {
                          y: 0,
                          opacity: 1,
                          ease: "expo.out",
                          clearProps: "y",
                          onComplete: function () {
                            var e = i(n).hasClass("use-headroom") ? "" : "none";
                            i(n).css({ transform: e, transition: "" }),
                              s4.menu.headroom(!1);
                          },
                        }))
                    : i(n).css({ opacity: 1 })),
              "align-top" == i(s4.menuInner + " nav").data("align") &&
                i(s4.menuInner + " nav").css("top", i(n).outerHeight() + "px"),
              "align-top" != i(s4.menuInner + " nav").data("align") &&
                s4.menu.responsiveOverlay();
          },
          hideMenuOnPageChange: function () {
            s4.contentHolder.css("width", "100%"),
              i("body").removeClass("open-menu");
          },
          headroom: function (e) {
            var t;
            (t =
              0 < i(s4.activeContent).find(s4.navbar).length
                ? i(s4.activeContent).find(s4.navbar)
                : i(s4.navbar)).hasClass("use-headroom") &&
              (!0 === e && t.css("transform", ""),
              t.headroom({ tolerance: 5 }));
          },
        };
      },
      {},
    ],
    9: [
      function (e, t, s) {
        var a = jQuery;
        t.exports = {
          postFirstLoad: function () {
            NProgress.done();
          },
          post: function (e, t, s, n, o) {
            s4.helper.setSrStatus(e),
              s4.contentHolder.append(
                '<div id="content-' +
                  s4.newPostElement +
                  '" class="content-container is-top"></div>'
              ),
              a("#semplice-cursor").css("mix-blend-mode", ""),
              t || "disabled" == s4.transition.status
                ? (s4.helper.updateSiteMeta(e),
                  s4.helper.changeActiveDivStatus(s4.newPostElement, s),
                  s4.helper.appendContent(s4.newPostElement, e, s, o),
                  s4.helper.killCoverSlider(!0),
                  s4.helper.restoreScrollPosition(s),
                  s4.helper.restoreApgPosition(s),
                  NProgress.done(),
                  s4.helper.afterPageTransitions())
                : (s4.helper.updateSiteMeta(e),
                  (s4.activeTransition = !0) === n.status
                    ? s4.customTransitions.init(n, e, s, o)
                    : "reveal" == s4.transition.preset
                    ? s4.customTransitions.reveal.init(
                        a("#content-" + s4.activePostElement),
                        e,
                        s,
                        o
                      )
                    : "staggered" == s4.transition.preset
                    ? s4.customTransitions.staggered.init(
                        a("#content-" + s4.activePostElement),
                        e,
                        s,
                        o
                      )
                    : s4.transitions.init(
                        s4.transition.out.effect,
                        s4.transition.in.effect,
                        s4.transition.out,
                        s4.transition.in,
                        e,
                        s,
                        !1,
                        o
                      ));
          },
        };
      },
      {},
    ],
    10: [
      function (e, t, s) {
        var l = jQuery;
        t.exports = {
          init: function (e, t, s, n, o, a, i, r) {
            window.dispatchEvent(s4.sempliceEvents.transitions.out_start),
              s4.transitions[e](
                "out",
                l("#content-" + s4.activePostElement),
                s,
                !0,
                !0,
                i
              ),
              s4.helper.changeActiveDivStatus(s4.newPostElement, a),
              s4.helper.appendContent(s4.newPostElement, o, !1, r),
              window.dispatchEvent(s4.sempliceEvents.transitions.in_start),
              s4.transitions[t](
                "in",
                l("#content-" + s4.newPostElement),
                n,
                !1,
                !1,
                i
              );
          },
          fadeIn: function (e, t, s, n, o, a) {
            var i = 0;
            void 0 !== s.delay && (i = s.delay),
              (s4.postTransition[e] = gsap.to(t, s.duration, {
                opacity: 1,
                ease: s.easing,
                clearProps: "opacity",
                delay: i,
                onComplete: function () {
                  s4.transitions.onComplete(t, n, o, a);
                },
              }));
          },
          fadeOut: function (e, t, s, n, o, a) {
            s4.postTransition[e] = gsap.to(t, s.duration, {
              opacity: 0,
              ease: s.easing,
              clearProps: "opacity",
              onComplete: function () {
                s4.transitions.onComplete(t, n, o, a);
              },
            });
          },
          moveLeftToRight: function (e, t, s, n, o, a) {
            s4.postTransition[e] = gsap.to(t, s.duration, {
              x: s.to,
              ease: s.easing,
              clearProps: "x",
              onComplete: function () {
                s4.transitions.onComplete(t, n, o, a);
              },
            });
          },
          moveRightToLeft: function (e, t, s, n, o, a) {
            s4.postTransition[e] = gsap.to(t, s.duration, {
              x: s.to,
              ease: s.easing,
              clearProps: "x",
              onComplete: function () {
                s4.transitions.onComplete(t, n, o, a);
              },
            });
          },
          moveTopToBottom: function (e, t, s, n, o, a) {
            s4.postTransition[e] = gsap.to(t, s.duration, {
              y: s.to,
              ease: s.easing,
              clearProps: "y",
              onComplete: function () {
                s4.transitions.onComplete(t, n, o, a);
              },
            });
          },
          moveBottomToTop: function (e, t, s, n, o, a) {
            s4.postTransition[e] = gsap.to(t, s.duration, {
              y: s.to,
              ease: s.easing,
              clearProps: "y",
              onComplete: function () {
                s4.transitions.onComplete(t, n, o, a);
              },
            });
          },
          onComplete: function (e, t, s, n) {
            var o;
            !1 === n
              ? (e.removeClass(
                  "position-right position-left position-bottom position-normal position-top hide-on-init is-top"
                ),
                (o = "in"),
                s4.transition.out.duration > s4.transition.in.duration &&
                  (o = "out"),
                t
                  ? (l(e).hide(),
                    window.dispatchEvent(
                      s4.sempliceEvents.transitions.out_done
                    ),
                    "out" == o && s4.helper.afterPageTransitions())
                  : (s4.postTransition.out.totalProgress(1),
                    s4.helper.killCoverSlider(!0),
                    l("#content-" + s4.activePostElement).remove(),
                    window.dispatchEvent(s4.sempliceEvents.transitions.in_done),
                    NProgress.done(),
                    "in" == o && s4.helper.afterPageTransitions(),
                    l("#content-" + s4.newPostElement).removeClass(
                      "transition-hidden"
                    )))
              : s4.transitions.customOnComplete(e, n, t);
          },
          customOnComplete: function (e, t, s) {
            switch (
              (!0 === s
                ? (e.removeClass(
                    "position-right position-left position-bottom position-normal position-top hide-on-init is-top"
                  ),
                  s4.helper.killCoverSlider(!0),
                  l("#content-" + s4.activePostElement).remove(),
                  NProgress.done())
                : e.removeClass(
                    "position-right position-left position-bottom position-normal position-top hide-on-init is-top transition-hidden"
                  ),
              t.id)
            ) {
              case "reveal":
                !1 === s && s4.helper.afterPageTransitions();
                break;
              case "apg-hor-full":
              case "apg-splitscreen":
                !0 === s && s4.helper.afterPageTransitions();
            }
          },
        };
      },
      {},
    ],
  },
  {},
  [3]
);
