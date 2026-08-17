// live clock (Europe/Amsterdam)
function tick(){
  var el = document.getElementById('clock');
  var now = new Date();
  var parts = new Intl.DateTimeFormat('nl-NL', { timeZone:'Europe/Amsterdam', hour:'2-digit', minute:'2-digit' }).format(now);
  el.textContent = parts + ' CET';
}
tick(); setInterval(tick, 15000);

// interactive dot grid: a canvas of dots that swell and brighten near the
// cursor, falling back to a plain still grid when there's no real pointer
// or the visitor asked for less motion.
(function(){
  var canvas = document.getElementById('dotgrid');
  var ctx = canvas.getContext('2d');
  var heroEl = document.querySelector('.hero');
  var dotReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  var MOUSE_ENABLED = false; // cursor-reactivity switched off for now, per request — grid still renders
  var SPACING = 26;      // px between dots
  var BASE_R = 1.2;       // resting dot radius
  var MAX_R = 3.6;        // dot radius right under the cursor
  var INFLUENCE = 140;    // px radius of the cursor's effect

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0, h = 0;
  var mouseX = -9999, mouseY = -9999;
  var targetMouseX = -9999, targetMouseY = -9999;
  var dotRedRGB = '192,32,42';

  function resize(){
    var r = heroEl.getBoundingClientRect();
    w = window.innerWidth; h = r.height; // canvas is full-bleed (100vw), not the padded hero width
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    for(var y = SPACING / 2; y < h; y += SPACING){
      for(var x = SPACING / 2; x < w; x += SPACING){
        var dx = x - mouseX, dy = y - mouseY;
        var dist = Math.sqrt(dx*dx + dy*dy);
        var t = Math.max(0, 1 - dist / INFLUENCE); // 1 = right under cursor, 0 = out of range
        var r = BASE_R + (MAX_R - BASE_R) * t;
        var alpha = 0.22 + 0.65 * t;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + dotRedRGB + ',' + alpha + ')';
        ctx.fill();
      }
    }
  }

  var raf = null;
  function loop(){
    // ease current position toward the real cursor so the swell trails
    // smoothly instead of snapping dot-by-dot on every mousemove
    mouseX += (targetMouseX - mouseX) * 0.18;
    mouseY += (targetMouseY - mouseY) * 0.18;
    draw();
    if(Math.abs(targetMouseX - mouseX) > 0.5 || Math.abs(targetMouseY - mouseY) > 0.5){
      raf = requestAnimationFrame(loop);
    } else {
      raf = null;
    }
  }
  function kick(){ if(!raf){ raf = requestAnimationFrame(loop); } }

  resize();
  window.addEventListener('resize', resize);

  if(MOUSE_ENABLED && canHover && !dotReduceMotion){
    heroEl.addEventListener('mousemove', function(e){
      var r = heroEl.getBoundingClientRect();
      targetMouseX = e.clientX; // canvas's own left edge is the viewport edge (x:0), not the padded hero edge
      targetMouseY = e.clientY - r.top;
      kick();
    });
    heroEl.addEventListener('mouseleave', function(){
      targetMouseX = -9999; targetMouseY = -9999;
      kick();
    });
  }
})();

// blobs/circles/plus-marks drift a little with the cursor — listens on the
// whole document (not just .hero) so it keeps responding while the cursor
// is over the fixed navbar too, since that sits outside the hero in the DOM.
(function(){
  var lines = document.getElementById('heroLines');
  if(!lines) return;
  var linesReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(linesReduceMotion || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;

  var lx = 0, ly = 0, ltx = 0, lty = 0;
  var lraf = null;
  function linesLoop(){
    lx += (ltx - lx) * 0.08;
    ly += (lty - ly) * 0.08;
    lines.style.transform = 'translateX(-50%) translate(' + lx.toFixed(2) + 'px,' + ly.toFixed(2) + 'px)';
    if(Math.abs(ltx - lx) > 0.05 || Math.abs(lty - ly) > 0.05){
      lraf = requestAnimationFrame(linesLoop);
    } else {
      lraf = null;
    }
  }
  document.addEventListener('mousemove', function(e){
    // offset from viewport centre, capped to a small subtle drift
    ltx = ((e.clientX / window.innerWidth) - 0.5) * 30;
    lty = ((e.clientY / window.innerHeight) - 0.5) * 30;
    if(!lraf){ lraf = requestAnimationFrame(linesLoop); }
  }, { passive:true });
})();

// hero label matches the width of the widest headline line above/below it
function syncLabelWidth(){
  var lines = document.querySelectorAll('.hero-stack .headline');
  var label = document.querySelector('.hero-label');
  var w = 0;
  lines.forEach(function(el){ w = Math.max(w, el.getBoundingClientRect().width); });
  if(w) label.style.width = w + 'px';
}
syncLabelWidth();
window.addEventListener('resize', syncLabelWidth);
if(document.fonts && document.fonts.ready){ document.fonts.ready.then(syncLabelWidth); }

// hero text splits apart on scroll, like the original: "HI THERE" (+ the
// name/role label) lifts up and fades, "I AM ANOUK" drops down and fades —
// scrubbed by scroll position, not a timed animation, so it tracks the
// scrollbar exactly and reverses cleanly on the way back up.
var heroLinesEls = document.querySelectorAll('.hero-stack .headline');
var heroTopLine = heroLinesEls[0];
var heroBottomLine = heroLinesEls[1];
var heroLabelEl = document.querySelector('.hero-label');
var HERO_EXIT_RANGE = 320;
var HERO_EXIT_TRAVEL = 90;
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var heroTicking = false;
function onHeroScroll(){
  var p = Math.max(0, Math.min(1, window.scrollY / HERO_EXIT_RANGE));
  var opacity = 1 - p;
  var travel = reduceMotion ? 0 : HERO_EXIT_TRAVEL * p;
  heroTopLine.style.transform = 'translateY(' + (-travel) + 'px)';
  heroTopLine.style.opacity = opacity;
  heroLabelEl.style.transform = 'translateY(' + (-travel) + 'px)';
  heroLabelEl.style.opacity = opacity;
  heroBottomLine.style.transform = 'translateY(' + travel + 'px)';
  heroBottomLine.style.opacity = opacity;
  heroTicking = false;
}
window.addEventListener('scroll', function(){
  if(!heroTicking){ requestAnimationFrame(onHeroScroll); heroTicking = true; }
}, { passive:true });
onHeroScroll();

// scroll reveal
var revealEls = document.querySelectorAll('.reveal');
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
revealEls.forEach(function(el){ io.observe(el); });

// about stats count up once they scroll into view
var statReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el){
  var target = parseInt(el.getAttribute('data-count'), 10);
  var suffix = el.getAttribute('data-suffix') || '';
  if(statReduceMotion){ el.textContent = target + suffix; return; }
  var duration = 900;
  var start = null;
  function tick(now){
    if(start === null) start = now;
    var t = Math.min(1, (now - start) / duration);
    var eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if(t < 1){ requestAnimationFrame(tick); }
  }
  requestAnimationFrame(tick);
}
var statIO = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){ countUp(entry.target); statIO.unobserve(entry.target); }
  });
}, { threshold:0.6 });
document.querySelectorAll('.stat b').forEach(function(el){ statIO.observe(el); });

// active nav link on scroll (keeps the desktop row and mobile dropdown in sync)
var navLinks = document.querySelectorAll('[data-nav], [data-nav-m]');
var navHrefs = Array.from(new Set(Array.from(navLinks).map(function(a){ return a.getAttribute('href'); })));
var sections = navHrefs.map(function(href){ return document.querySelector(href); });
var navIO = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    var id = '#' + entry.target.id;
    if(entry.isIntersecting){
      navLinks.forEach(function(l){ l.classList.toggle('active', l.getAttribute('href') === id); });
    }
  });
}, { rootMargin:'-40% 0px -50% 0px' });
sections.forEach(function(s){ if(s) navIO.observe(s); });

// staggered text roll, ported from sona-ui's StaggerText (21st.dev):
// two stacked letter layers per character; hovering a character sets it as the
// "active" index and every character's delay is |activeIndex - i| * 40ms, so the
// roll ripples outward from wherever the cursor enters. Leaving the word plays a
// simple left-to-right wave back down (delay = i * 20ms).
document.querySelectorAll('.stagger').forEach(function(el){
  var text = el.getAttribute('data-text') || '';
  var chars = [];
  text.split('').forEach(function(ch){
    var display = ch === ' ' ? '\xa0' : ch;
    var wrap = document.createElement('span'); wrap.className = 'ch';
    var top = document.createElement('span'); top.className = 'seg top'; top.textContent = display;
    var bottom = document.createElement('span'); bottom.className = 'seg bottom'; bottom.textContent = display;
    wrap.appendChild(top); wrap.appendChild(bottom);
    el.appendChild(wrap);
    chars.push(wrap);
  });

  chars.forEach(function(ch, i){
    ch.addEventListener('mouseenter', function(){
      chars.forEach(function(c2, j){
        var delay = Math.abs(i - j) * 40;
        c2.querySelectorAll('.seg').forEach(function(seg){
          seg.style.transitionDelay = delay + 'ms';
          seg.style.transitionDuration = '.4s';
        });
        c2.classList.add('up');
      });
    });
  });
  el.addEventListener('mouseleave', function(){
    chars.forEach(function(c2, j){
      var delay = j * 20;
      c2.querySelectorAll('.seg').forEach(function(seg){
        seg.style.transitionDelay = delay + 'ms';
        seg.style.transitionDuration = '.3s';
      });
      c2.classList.remove('up');
    });
  });
});

// nav row -> stack, scrubbed by scroll position (not time). Contact (last
// item) tucks under first, then Jams, then Work, then Experience, and About
// slides right into the indent — each on its own slice of the same 0..1
// scroll range, so the whole thing plays and reverses exactly with the
// scrollbar instead of running on a timer.
var navList = document.getElementById('navlist');
var navItems = Array.from(navList.querySelectorAll('li'));
var SCROLL_RANGE = 260; // px of scroll to go from fully open to fully stacked
// [start, end] of each item's own slide within the 0..1 scroll progress,
// ordered by DOM index (0=About ... 2=Contact) but Contact's window starts
// earliest and About's starts latest, so the collapse reads right-to-left.
var windows = [
  [0.55, 0.95], // About -> shifts right, last to settle
  [0.28, 0.66], // Work
  [0.00, 0.38]  // Contact -> drops first
];
var deltas = null; // {dx,dy} per item: offset from stacked rest -> open row position

function ease(t){ return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }

// the list's real CSS layout is always the stacked column; to find out how far
// that is from the open/row look, briefly force row mode, measure, then let it
// snap back to column (its permanent state) before anyone sees it happen.
function measureDeltas(){
  navItems.forEach(function(el){ el.style.transform = ''; });
  navList.style.flexDirection = 'row';
  navList.style.gap = '32px';
  navList.style.padding = '0';
  var open = navItems.map(function(el){ return el.getBoundingClientRect(); });
  navList.style.flexDirection = '';
  navList.style.gap = '';
  navList.style.padding = '';
  var stacked = navItems.map(function(el){ return el.getBoundingClientRect(); });
  deltas = navItems.map(function(el, i){
    return { dx: open[i].left - stacked[i].left, dy: open[i].top - stacked[i].top };
  });
}
var ticking = false;

// measuring too early (before the mono webfont has actually swapped in) bakes
// in wrong pixel deltas forever, so wait for fonts, then remeasure on resize
var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
fontsReady.then(function(){ measureDeltas(); onScroll(); }).catch(function(){ measureDeltas(); onScroll(); });
window.addEventListener('resize', function(){ measureDeltas(); onScroll(); });

function onScroll(){
  if(!deltas) return; // fonts/layout not measured yet
  var progress = Math.max(0, Math.min(1, window.scrollY / SCROLL_RANGE));
  navList.style.setProperty('--p', progress);
  navItems.forEach(function(el, i){
    var w = windows[i];
    var local = (progress - w[0]) / (w[1] - w[0]);
    local = ease(Math.max(0, Math.min(1, local)));
    var remaining = 1 - local; // 1 = still at the open/row position, 0 = settled in the stack
    var d = deltas[i];
    el.style.transform = remaining ? 'translate(' + (d.dx*remaining) + 'px,' + (d.dy*remaining) + 'px)' : '';
  });
  ticking = false;
}
window.addEventListener('scroll', function(){
  if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
}, { passive:true });

// mobile menu: horizontal nav collapses into a burger that opens a vertical list
var burger = document.getElementById('burger');
var mobileList = document.getElementById('navlist-mobile');
burger.addEventListener('click', function(){
  var open = burger.classList.toggle('open');
  mobileList.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('[data-nav-m]').forEach(function(a){
  a.addEventListener('click', function(){
    burger.classList.remove('open');
    mobileList.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// "ABOUT ME" ticker: no autoplay — its position is a direct function of
// scroll position. The offset wraps with modulo against the width of one
// repeated unit, so it scrolls forever in both directions and never has a
// visible seam, using only two copies of the content.
(function(){
  var ticker = document.getElementById('aboutTicker');
  if(!ticker) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ticker.innerHTML += ticker.innerHTML;
  var items = ticker.querySelectorAll('.ticker-item');
  var unit = 0;
  function measure(){
    var half = items.length / 2;
    unit = items[half].getBoundingClientRect().left - items[0].getBoundingClientRect().left;
  }
  function update(){
    if(!unit) return;
    if(reduceMotion){ ticker.style.transform = ''; return; }
    var offset = ((window.scrollY * 0.6) % unit + unit) % unit;
    ticker.style.transform = 'translateX(' + (-offset) + 'px)';
  }
  measure(); update();
  window.addEventListener('resize', function(){ measure(); update(); });
  var tickTicking = false;
  window.addEventListener('scroll', function(){
    if(!tickTicking){ requestAnimationFrame(function(){ update(); tickTicking = false; }); tickTicking = true; }
  }, { passive:true });
})();

// companies marquee: real logos, cloned until the strip is comfortably wider
// than any viewport (so the loop never runs out) with an even number of
// copies (so the -50% keyframe lands exactly on a repeat boundary), and the
// animation-duration is derived from the final width so every logo travels
// at the same constant speed no matter how many clones that took.
(function(){
  var el = document.getElementById('companiesMarquee');
  if(!el) return;
  function setup(){
    var base = el.innerHTML;
    var baseCount = el.children.length;
    el.style.animation = 'none';
    var guard = 0;
    while(el.scrollWidth < window.innerWidth * 2.2 && guard < 20){
      el.innerHTML += base;
      guard++;
    }
    var sets = el.children.length / baseCount;
    if(sets % 2 !== 0){ el.innerHTML += base; }
    var totalWidth = el.scrollWidth;
    var PX_PER_SECOND = 55;
    el.style.animation = '';
    el.style.animationDuration = (totalWidth / 2 / PX_PER_SECOND) + 's';
  }
  if(document.readyState === 'complete'){ setup(); }
  else { window.addEventListener('load', setup); }
})();
