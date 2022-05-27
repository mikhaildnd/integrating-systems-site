function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
function _createForOfIteratorHelper(e, t) {
  var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = _unsupportedIterableToArray(e)) ||
      (t && e && 'number' == typeof e.length)
    ) {
      n && (e = n);
      var i = 0,
        t = function () {};
      return {
        s: t,
        n: function () {
          return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
        },
        e: function (e) {
          throw e;
        },
        f: t,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var r,
    s = !0,
    a = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return (s = e.done), e;
    },
    e: function (e) {
      (a = !0), (r = e);
    },
    f: function () {
      try {
        s || null == n.return || n.return();
      } finally {
        if (a) throw r;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return 'Map' === (n = 'Object' === n && e.constructor ? e.constructor.name : n) || 'Set' === n
      ? Array.from(e)
      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(e, t)
      : void 0;
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}
!(function (h) {
  function d() {
    return h.innerWidth || document.documentElement.clientWidth;
  }
  function n() {
    return h.pageYOffset || document.documentElement.scrollTop;
  }
  function r(i, r) {
    var s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 'animate__';
    return new Promise(function (t, e) {
      var n = ''.concat(s).concat(r);
      i.classList.add(''.concat(s, 'animated'), n),
        i.addEventListener(
          'animationend',
          function (e) {
            e.stopPropagation(),
              i.classList.remove(''.concat(s, 'animated'), n),
              t('Animation ended');
          },
          { once: !0 }
        );
    });
  }
  var v =
      h.requestAnimationFrame ||
      h.webkitRequestAnimationFrame ||
      h.mozRequestAnimationFrame ||
      h.oRequestAnimationFrame ||
      h.msRequestAnimationFrame ||
      function (e) {
        h.setTimeout(e, 1e3 / 60);
      },
    s = 'bottom',
    a = 'top',
    o = s,
    i = s,
    l = n(),
    c = !1;
  document.addEventListener('scroll', function (e) {
    var t;
    (t = n()), (o = t < l && i === a ? a : s), (l = n()), o === a && (c = !1);
  });
  function t(e) {
    (e = (e = e || h.event).deltaY || e.detail || e.wheelDelta) < 0 ? (i = a) : 0 < e && (i = s);
  }
  'onwheel' in document
    ? document.addEventListener('wheel', function (e) {
        t(e);
      })
    : 'onmousewheel' in document
    ? document.addEventListener('mousewheel', function (e) {
        t(e);
      })
    : document.addEventListener('MozMousePixelScroll', function (e) {
        t(e);
      });
  (y = h.LazyLoad) &&
    new y({
      callback_loading: function (e) {
        e.parentNode &&
          e.parentNode.classList.contains('picture') &&
          e.parentNode.classList.add('picture--loading');
      },
      callback_loaded: function (e) {
        e.parentNode &&
          e.parentNode.classList.contains('picture') &&
          e.parentNode.classList.remove('picture--loading');
      },
      callback_error: function (e) {
        e.parentNode &&
          e.parentNode.classList.contains('picture') &&
          e.parentNode.classList.remove('picture--loading');
      },
    });
  var u,
    f,
    e,
    m,
    y,
    p,
    g = !1;
  (f = document.querySelector('.header')) &&
    ((g = f.classList.contains('header--white')) ||
      ((u = function () {
        var e = n();
        f.classList[0 < e ? 'add' : 'remove']('header--white'),
          (g = 0 < e),
          f.classList[g ? 'add' : 'remove']('header--hide-line');
      }),
      document.addEventListener('scroll', function (e) {
        u();
      }),
      h.addEventListener('resize', function (e) {
        u();
      }),
      u())),
    (function () {
      var e = document.querySelectorAll('.hamburger');
      if (e.length) {
        var t,
          n = _createForOfIteratorHelper(e);
        try {
          for (n.s(); !(t = n.n()).done; )
            t.value.addEventListener('click', function () {
              this.classList.toggle('hamburger--active');
            });
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      }
    })(),
    (function () {
      var e = document.querySelectorAll('.js-mobile-menu');
      if (e.length) {
        var t,
          n = document.querySelector('.mobile-menu'),
          i = document.querySelector('.header'),
          r = _createForOfIteratorHelper(e);
        try {
          for (r.s(); !(t = r.n()).done; )
            t.value.addEventListener('click', function () {
              var e;
              n &&
                (n.classList.toggle('mobile-menu--open'),
                g && i && i.classList.toggle('header--white'),
                h.scrollbar &&
                  ((e = n.classList.contains('mobile-menu--open')),
                  h.scrollbar[e ? 'add' : 'remove']()));
            });
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        var e = n.querySelectorAll('.mobile-menu__item--parent .mobile-menu__item-link'),
          s = h.slideToggle;
        if (s) {
          var a,
            o = _createForOfIteratorHelper(e);
          try {
            for (o.s(); !(a = o.n()).done; )
              !(function () {
                var e = a.value,
                  t = e.nextElementSibling;
                e.addEventListener('click', function (e) {
                  768 <= d() ||
                    (e.preventDefault(),
                    s(t, { parent: this.parentNode, activeClass: 'mobile-menu__item--open' }));
                });
              })();
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
      }
    })(),
    (e = h.Swiper),
    (y = document.querySelector('.first-screen')) &&
      e &&
      (y = y.querySelector('.first-screen__slider .swiper-container')) &&
      new e(y, {
        effect: 'fade',
        autoplay: { delay: 8e3 },
        preloadImages: !1,
        lazy: { loadPrevNext: !0 },
      }),
    (function () {
      var e = document.querySelectorAll('.lines');
      if (e.length) {
        var t,
          n = (function () {
            'use strict';
            function n(e) {
              var t =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : { showPluses: !1, plusesXCount: 15, plusesYCount: 17, fadingPercent: 30 };
              _classCallCheck(this, n),
                (this.$el = e),
                (this.$bgCanvas = null),
                (this.$plusesCanvas = null),
                (this.$options = t),
                (this.showPluses = 'Y' === this.$el.dataset.pluses || this.$options.showPluses),
                (this.small = 'Y' === this.$el.dataset.small || 'Y' === this.$options.small),
                (this.screen = this._getScreen()),
                (this.linesCount = 0),
                (this.interval = null),
                (this.lines = []),
                (this.started = !1),
                this.init();
            }
            return (
              _createClass(n, [
                {
                  key: 'init',
                  value: function () {
                    this.createGrid(),
                      this.showPluses && this.createPluses(),
                      this.startLines(),
                      this.initEvents();
                  },
                },
                {
                  key: 'createGrid',
                  value: function () {
                    this.$bgCanvas || (this.$bgCanvas = this.createCanvas('bg')), this.renderGrid();
                  },
                },
                {
                  key: 'createPluses',
                  value: function () {
                    this.$plusesCanvas || (this.$plusesCanvas = this.createCanvas('pluses')),
                      this.renderPluses();
                  },
                },
                {
                  key: 'updatedLines',
                  value: function () {
                    this.started && (this.stopLines(), this.startLines());
                  },
                },
                {
                  key: 'stopLines',
                  value: function () {
                    (this.started = !1), clearInterval(this.interval);
                    for (var e = 0; e < this.lines.length; e++) {
                      var t = this.lines[e];
                      (t.line = null), t.canvas.remove(), clearInterval(t.interval);
                    }
                    (this.lines = []), (this.linesCount = 0);
                  },
                },
                {
                  key: 'startLines',
                  value: function () {
                    var i = this,
                      r = this._getLineParams(),
                      e = this._getCanvasSize(),
                      s = e.width,
                      a = e.height;
                    (this.started = !0),
                      (this.interval = setInterval(function () {
                        var e, t, n;
                        i.linesCount <= r.lines &&
                          ((e = i.roundDirection(i._random(0, i.roundDirection(s, !0)))),
                          (t = i.roundDirection(i._random(0, i.roundDirection(a, !0)))),
                          (n = i._random(1, 8)),
                          i.createLine(e, t, {
                            x: i.dispersion(n - 1),
                            y: i.dispersion(n + 1),
                            default: n,
                          }));
                      }, 1e3));
                  },
                },
                {
                  key: 'createLine',
                  value: function (e, t, i) {
                    var r = this,
                      n = {},
                      s = {},
                      a = this.createCanvas('line'),
                      o = this._getGridParams().size,
                      l = this._getLineParams();
                    (s.x = e),
                      (s.y = t),
                      (s.boxes = this._random(l.min, l.max)),
                      (s.length = (o / l.step) * s.boxes),
                      (s.sizeMove = o / l.step),
                      (s.fadinEls = Math.ceil((s.length / 100) * this.$options.fadingPercent)),
                      (s.fadeFrom = s.length - s.fadinEls),
                      (s.fadePercent = 100 / s.fadinEls),
                      (s.dashes = []),
                      (s.move = 1),
                      (s.moves = []),
                      (s.opacityEls = 0),
                      (s.interval = null),
                      (n.canvas = a),
                      (n.line = s),
                      this.linesCount++,
                      this.lines.push(n),
                      (a.ctx.lineWidth = 2);
                    for (var c = 0; c < s.length; c++) {
                      var u = 1;
                      c >= s.fadeFrom &&
                        (s.opacityEls++, (u = ((s.fadinEls - s.opacityEls) * s.fadePercent) / 100)),
                        (s.dashes[c] = {
                          xM: s.x,
                          yM: s.y,
                          xL: s.x,
                          yL: s.y,
                          opacity: u,
                          coords: [],
                        });
                    }
                    s.draw = function (e) {
                      a.ctx.beginPath(),
                        (a.ctx.strokeStyle = '#fff'),
                        (a.ctx.globalAlpha = s.dashes[e].opacity),
                        a.ctx.moveTo(s.dashes[e].xM, s.dashes[e].yM),
                        a.ctx.lineTo(s.dashes[e].xL, s.dashes[e].yL),
                        a.ctx.stroke(),
                        a.ctx.closePath();
                    };
                    v(function () {
                      n.interval = s.interval = setInterval(function () {
                        a.ctx.clearRect(0, 0, a.width, a.height);
                        for (var e = 0; e < s.move && e < s.length; e++) {
                          var t = s.dashes[e],
                            n = s.dashes[e - 1];
                          (t.coords[e + 1] = { xM: t.xM, yM: t.yM, xL: t.xL, yL: t.yL }),
                            n &&
                              ((t.xM = n.coords[e].xM),
                              (t.yM = n.coords[e].yM),
                              (t.xL = n.coords[e].xL),
                              (t.yL = n.coords[e].yL)),
                            s.draw(e),
                            0 === e &&
                              ((n = s.moves[s.moves.length - 1]),
                              s.move % s.sizeMove == 0
                                ? s.move < 4
                                  ? s.moves.push((s.lastMove = r.move(t, l.step, i.default)))
                                  : s.moves.push((s.lastMove = r.move(t, l.step, i.x, i.y)))
                                : s.moves.push((s.lastMove = r.move(t, l.step, n))),
                              s.draw(e));
                        }
                        s.move++,
                          (s.dashes[s.dashes.length - 1].xM <= 0 ||
                            s.dashes[s.dashes.length - 1].yM <= 0 ||
                            s.dashes[s.dashes.length - 1].xM >= r.$el.offsetWidth ||
                            s.dashes[s.dashes.length - 1].yM >= r.$el.offsetHeight) &&
                            (a.ctx.clearRect(0, 0, a.width, a.height),
                            clearInterval(s.interval),
                            a.remove(),
                            r.linesCount--,
                            setTimeout(function () {
                              a = s = null;
                            }, 500));
                      }, 60);
                    });
                  },
                },
                {
                  key: 'initEvents',
                  value: function () {
                    var e = this;
                    h.addEventListener('resize', function () {
                      e.update();
                    });
                  },
                },
                {
                  key: 'updateGrid',
                  value: function () {
                    this.$bgCanvas &&
                      (this.updateCanvasSize(this.$bgCanvas),
                      this.clear(this.$bgCanvas),
                      this.renderGrid());
                  },
                },
                {
                  key: 'updatePluses',
                  value: function () {
                    this.$plusesCanvas &&
                      (this.updateCanvasSize(this.$plusesCanvas),
                      this.clear(this.$plusesCanvas),
                      this.renderPluses());
                  },
                },
                {
                  key: 'renderGrid',
                  value: function () {
                    for (
                      var e = this.$bgCanvas.ctx, t = this._getGridParams().size, n = 0;
                      n <= this.$bgCanvas.width;
                      n += t
                    )
                      for (var i = 0; i <= +this.$bgCanvas.height; i += t)
                        (e.globalAlpha = 0.15),
                          (e.strokeStyle = '#fff'),
                          (e.lineWidth = 1),
                          e.beginPath(),
                          e.moveTo(n, i),
                          e.lineTo(n + t, i),
                          e.stroke(),
                          e.closePath(),
                          e.beginPath(),
                          e.moveTo(n, i),
                          e.lineTo(n, i + t - 1),
                          e.stroke(),
                          e.closePath(),
                          (e.globalAlpha = 0.05),
                          e.beginPath(),
                          e.moveTo(n + 2, i + 2),
                          e.lineTo(n + t - 2, i + t - 2),
                          e.stroke(),
                          e.closePath(),
                          e.beginPath(),
                          e.moveTo(n + t - 2, i + 2),
                          e.lineTo(n + 2, i + t - 2),
                          e.stroke(),
                          e.closePath();
                  },
                },
                {
                  key: 'renderPluses',
                  value: function () {
                    for (
                      var e = this.$plusesCanvas.ctx,
                        t = this._getGridParams(),
                        n = t.pluses,
                        i = t.size,
                        r = 0;
                      r <= this.$plusesCanvas.width;
                      r += i
                    )
                      for (var s = 0; s <= +this.$plusesCanvas.height; s += i)
                        r >= n.xStart &&
                          r <= n.xEnd &&
                          s >= n.yStart &&
                          s <= n.yEnd &&
                          ((e.strokeStyle = '#fff'),
                          (e.globalAlpha = n.opacity),
                          e.beginPath(),
                          e.moveTo(r - 4, s),
                          e.lineTo(r + 4, s),
                          e.moveTo(r, s - 4),
                          e.lineTo(r, s + 4),
                          e.stroke(),
                          e.closePath());
                  },
                },
                {
                  key: 'createCanvas',
                  value: function (e) {
                    var t = document.createElement('canvas');
                    return (
                      t.classList.add('lines__' + e),
                      this.updateCanvasSize(t),
                      this.$el && this.$el.appendChild(t),
                      (t.ctx = t.getContext('2d')),
                      t
                    );
                  },
                },
                {
                  key: 'animation',
                  value: function (e) {
                    var t = e.clear,
                      n = e.update,
                      i = e.render;
                    setInterval(function () {
                      n(), t(), i();
                    }, 1e3);
                  },
                },
                {
                  key: 'clear',
                  value: function (e) {
                    e.ctx.clearRect(0, 0, e.width, e.height);
                  },
                },
                {
                  key: 'update',
                  value: function () {
                    this.updateScreen(),
                      this.updateGrid(),
                      this.showPluses && this.updatePluses(),
                      this.updatedLines();
                  },
                },
                {
                  key: 'updateCanvasSize',
                  value: function (e) {
                    var t = this._getCanvasSize(),
                      n = t.width,
                      t = t.height;
                    (e.width = n), (e.height = t);
                  },
                },
                {
                  key: 'updateScreen',
                  value: function () {
                    this.screen = this._getScreen();
                  },
                },
                {
                  key: 'move',
                  value: function (e, t, n, i) {
                    n = n && i ? this._random(n, i) : n;
                    switch (n) {
                      case 1:
                        (e.xL = e.xM), (e.xM = e.xM), (e.yL = e.yM), (e.yM -= t);
                        break;
                      case 2:
                        (e.xL = e.xM), (e.xM += t), (e.yL = e.yM), (e.yM -= t);
                        break;
                      case 3:
                        (e.xL = e.xM), (e.xM += t), (e.yL = e.yM), (e.yM = e.yM);
                        break;
                      case 4:
                        (e.xL = e.xM), (e.xM += t), (e.yL = e.yM), (e.yM += t);
                        break;
                      case 5:
                        (e.xL = e.xM), (e.xM = e.xM), (e.yL = e.yM), (e.yM += t);
                        break;
                      case 6:
                        (e.xL = e.xM), (e.xM -= t), (e.yL = e.yM), (e.yM += t);
                        break;
                      case 7:
                        (e.xL = e.xM), (e.xM -= t), (e.yL = e.yM), (e.yM = e.yM);
                        break;
                      case 8:
                        (e.xL = e.xM), (e.xM -= t), (e.yL = e.yM), (e.yM -= t);
                    }
                    return n;
                  },
                },
                {
                  key: 'dispersion',
                  value: function (e) {
                    return 8 < e ? 8 : e < 0 ? 0 : e;
                  },
                },
                {
                  key: 'roundDirection',
                  value: function (e, t) {
                    var n = this._getGridParams().size;
                    return t ? e - (e % n) + n : e - (e % n);
                  },
                },
                {
                  key: '_getScreen',
                  value: function () {
                    var e = d();
                    return 768 <= e && e < 1024
                      ? 'md'
                      : 1024 <= e && e < 1366
                      ? 'lg'
                      : 1366 <= e
                      ? 'xl'
                      : 'xs';
                  },
                },
                {
                  key: '_getGridParams',
                  value: function () {
                    var e = this._getContainerParams(),
                      t = {
                        pluses: {
                          width: this.$options.plusesXCount || 15,
                          height: this.$options.plusesYCount || 17,
                          xStart: 0,
                          xEnd: 0,
                          yStart: 0,
                          yEnd: 0,
                        },
                      };
                    switch (this.screen) {
                      case 'md':
                        (t.size = 28),
                          (t.pluses.yStart = 3 * t.size),
                          (t.pluses.opacity = 0.3),
                          (t.pluses.position = 'center');
                        break;
                      case 'lg':
                        (t.size = 38),
                          (t.pluses.yStart = 3 * t.size),
                          (t.pluses.opacity = 1),
                          (t.pluses.position = 'right');
                        break;
                      case 'xl':
                        (t.size = 40),
                          (t.pluses.yStart = 4 * t.size),
                          (t.pluses.opacity = 1),
                          (t.pluses.position = 'right');
                        break;
                      default:
                        (t.size = 20),
                          (t.pluses.yStart = 5 * t.size),
                          (t.pluses.opacity = 0.3),
                          (t.pluses.position = 'center');
                    }
                    t.pluses.yEnd = t.pluses.yStart + t.pluses.height * t.size;
                    var n = Math.floor(e.start / t.size),
                      i = Math.ceil(e.end / t.size),
                      e = 0,
                      e =
                        'right' === t.pluses.position
                          ? n + (i - n - t.pluses.width)
                          : n + (i - n - t.pluses.width) / 2;
                    return (
                      (t.pluses.xStart = e * t.size),
                      (t.pluses.xEnd = (e + t.pluses.width) * t.size),
                      t
                    );
                  },
                },
                {
                  key: '_getLineParams',
                  value: function () {
                    var e = { step: 5, min: 2, max: 5, lines: 2 };
                    if (this.small) return e;
                    switch (this.screen) {
                      case 'md':
                        return { step: 5, min: 2, max: 5, lines: 3 };
                      case 'lg':
                      case 'xl':
                        return { step: 5, min: 2, max: 10, lines: 5 };
                      default:
                        return e;
                    }
                  },
                },
                {
                  key: '_getCanvasSize',
                  value: function () {
                    var e = (null === (e = this.$el) || void 0 === e ? void 0 : e.parentNode) || h;
                    return { width: e.offsetWidth, height: e.offsetHeight };
                  },
                },
                {
                  key: '_getContainerParams',
                  value: function () {
                    var e = d(),
                      t = {};
                    return (
                      (t.width = 1504 < e ? 1440 : e - 64),
                      (t.start = 1504 < e ? Math.ceil((e - t.width) / 2) : 32),
                      (t.end = e - t.start),
                      t
                    );
                  },
                },
                {
                  key: '_random',
                  value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                      t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                    return Math.floor(Math.random() * (t - e + 1)) + e;
                  },
                },
              ]),
              n
            );
          })(),
          i = _createForOfIteratorHelper(e);
        try {
          for (i.s(); !(t = i.n()).done; ) new n(t.value);
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
      }
    })(),
    (function () {
      var e,
        t = new IntersectionObserver(function (e) {
          e.forEach(function (e) {
            e.isIntersecting && r(e.target, e.target.dataset.animation).then(function () {});
          });
        }),
        n = _createForOfIteratorHelper(document.querySelectorAll('[data-animation]'));
      try {
        for (n.s(); !(e = n.n()).done; ) {
          var i = e.value;
          t.observe(i);
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
    })(),
    (function () {
      function i(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        (e = e || h.event),
          (n && (e.deltaY || e.detail || e.wheelDelta) < 0) ||
            c ||
            (t.scrollIntoView({ behavior: 'smooth', block: 'start' }), (c = !0));
      }
      var r,
        e = document.querySelectorAll('.scroll-button'),
        t = _createForOfIteratorHelper(e);
      try {
        for (t.s(); !(r = t.n()).done; )
          (function () {
            var e = r.value,
              t = e.dataset.parent;
            if (!t) return;
            var n = e.closest('.' + t);
            if (!n.nextElementSibling) return;
            n.addEventListener
              ? 'onwheel' in document
                ? n.addEventListener('wheel', function (e) {
                    i(e, n.nextElementSibling, !0);
                  })
                : 'onmousewheel' in document
                ? n.addEventListener('mousewheel', function (e) {
                    i(e, n.nextElementSibling, !0);
                  })
                : n.addEventListener('MozMousePixelScroll', function (e) {
                    i(e, n.nextElementSibling, !0);
                  })
              : n.attachEvent('onmousewheel', function (e) {
                  i(e, n.nextElementSibling, !0);
                }),
              e.addEventListener('click', function (e) {
                i(e, n.nextElementSibling);
              });
          })();
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    })(),
    (e = h.Swiper),
    (y = document.querySelector('.main-solutions')) &&
      e &&
      ((m = y.querySelector('.main-solutions__pagination .swiper-container')),
      (y = y.querySelector('.main-solutions__slider .swiper-container')) &&
        m &&
        ((m = new e(m, {
          slidesPerView: 2,
          spaceBetween: 0,
          breakpoints: { 576: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } },
          preloadImages: !1,
          lazy: { loadPrevNext: !0 },
        })),
        new e(y, {
          slidesPerView: 1,
          effect: 'fade',
          fadeEffect: { crossFade: !0 },
          thumbs: { swiper: m },
          preloadImages: !1,
          lazy: { loadPrevNext: !0 },
        }))),
    (y = h.Swiper),
    (m = document.querySelector('.certificates')) &&
      y &&
      (p = m.querySelector('.swiper-container')) &&
      new y(p, {
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1366: { slidesPerView: 4, spaceBetween: 40 },
        },
        navigation: {
          prevEl: m.querySelector('.certificates__nav-btn--prev'),
          nextEl: m.querySelector('.certificates__nav-btn--next'),
        },
        preloadImages: !1,
        lazy: { loadPrevNext: !0 },
      }),
    (function () {
      function c(e) {
        var t = e.querySelector('.possibility-item__text'),
          e = e.classList.contains('possibility-item--active');
        t && !e && (t.parentNode.style.height = '0');
      }
      var a,
        u = h.scrollbar,
        e = document.querySelectorAll('.possibility'),
        t = _createForOfIteratorHelper(e);
      try {
        function n() {
          var l = a.value,
            i = l.querySelector('.possibility__modal'),
            e = i.querySelector('.possibility-modal__close-button .button'),
            r = l.querySelectorAll('.possibility-item');
          e &&
            e.addEventListener('click', function () {
              i.classList.remove('possibility__modal--open'), u && u.remove();
              var e,
                t = _createForOfIteratorHelper(r);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value;
                  n.classList.contains('possibility-item--active') &&
                    (n.classList.remove('possibility-item--active'), c(n));
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            });
          var t,
            n = _createForOfIteratorHelper(r);
          try {
            function s() {
              var o = t.value,
                n = o.querySelector('.possibility-item__text');
              n &&
                (o.addEventListener('mouseover', function (e) {
                  var t;
                  (t = 1366 <= d() ? 96 : 76),
                    (n.parentNode.style.height = ''.concat(Math.min(t, n.offsetHeight), 'px'));
                }),
                o.addEventListener('mouseout', function (e) {
                  c(o);
                })),
                o.addEventListener('click', function (e) {
                  var t, n, i, r, s, a;
                  (n = o),
                    (a = (t = l).querySelector('.possibility__modal')) &&
                      ((r = i = ''),
                      (s = n.querySelector('.possibility-item__name')) && (i = s.innerHTML),
                      (s = n.querySelector('.possibility-item__modal-text')) && (r = s.innerHTML),
                      (i || r) &&
                        ((s = t.querySelector('.possibility-item--active')),
                        a.classList.contains('possibility__modal--open')
                          ? s === n &&
                            (a.classList.remove('possibility__modal--open'), u && u.remove())
                          : (a.classList.add('possibility__modal--open'), u && u.add()),
                        (t = a.querySelector('.possibility-modal__title')),
                        (a = a.querySelector('.possibility-modal__text')),
                        t && i && (t.innerHTML = i),
                        a && r && (a.innerHTML = r),
                        s && s !== n && (s.classList.remove('possibility-item--active'), c(s)),
                        n.classList.toggle('possibility-item--active')));
                });
            }
            for (n.s(); !(t = n.n()).done; ) s();
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
        }
        for (t.s(); !(a = t.n()).done; ) n();
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    })(),
    (function () {
      var n,
        e = document.querySelectorAll('.main-history'),
        i = (function () {
          'use strict';
          function t(e) {
            _classCallCheck(this, t),
              (this.$block = e),
              (this.items = this.getItems()),
              (this.pictures = this.getPictures()),
              (this.texts = this.getTexts()),
              (this.date = this.getDate()),
              (this.timeline = this.getTimeline()),
              (this.currents = {}),
              (this.value = { current: 0, length: this.getItems().length }),
              this.init();
          }
          return (
            _createClass(t, [
              {
                key: 'getItems',
                value: function () {
                  var e,
                    t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                  return (
                    (null !== (e = this.items) &&
                      void 0 !== e &&
                      e.length &&
                      !(1 < arguments.length && void 0 !== arguments[1] && arguments[1])) ||
                      (this.items = this.$block.querySelectorAll('.main-history__timeline-item')),
                    !1 !== t ? this.items[t] || null : this.items
                  );
                },
              },
              {
                key: 'getPictures',
                value: function () {
                  var e,
                    t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                  return (
                    (null !== (e = this.pictures) &&
                      void 0 !== e &&
                      e.length &&
                      !(1 < arguments.length && void 0 !== arguments[1] && arguments[1])) ||
                      (this.pictures = this.$block.querySelectorAll('.main-history__picture')),
                    !1 !== t ? this.pictures[t] || null : this.pictures
                  );
                },
              },
              {
                key: 'getTexts',
                value: function () {
                  var e,
                    t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                  return (
                    (null !== (e = this.texts) &&
                      void 0 !== e &&
                      e.length &&
                      !(1 < arguments.length && void 0 !== arguments[1] && arguments[1])) ||
                      (this.texts = this.$block.querySelectorAll('.main-history__text')),
                    !1 !== t ? this.texts[t] || null : this.texts
                  );
                },
              },
              {
                key: 'getDate',
                value: function () {
                  var e,
                    t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                  return (
                    (null !== (e = this.date) &&
                      void 0 !== e &&
                      e.length &&
                      !(1 < arguments.length && void 0 !== arguments[1] && arguments[1])) ||
                      (this.date = document.querySelectorAll(
                        '.main-history__year .main-history__year-container'
                      )),
                    !1 !== t ? this.date[t] || null : this.date
                  );
                },
              },
              {
                key: 'getTimeline',
                value: function () {
                  return (
                    (this.timeline &&
                      !(0 < arguments.length && void 0 !== arguments[0] && arguments[0])) ||
                      (this.timeline = document.querySelector('.main-history__timeline')),
                    this.timeline
                  );
                },
              },
              {
                key: 'init',
                value: function () {
                  this.setElementsForItems(),
                    this.createDefaultYear(),
                    this.setCurrent(this.getItems(0)),
                    this.setDefaultTransformNumbers(),
                    this.setDefaultTransformTimeline(),
                    this.initEvents();
                },
              },
              {
                key: 'initEvents',
                value: function () {
                  var t,
                    n = this,
                    i = _createForOfIteratorHelper(this.getItems());
                  try {
                    for (i.s(); !(t = i.n()).done; )
                      !(function () {
                        var e = t.value;
                        e.addEventListener('click', function () {
                          e.classList.contains('active') || n.changeItem(e);
                        });
                      })();
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                  var e = this.onResize.bind(this);
                  h.addEventListener('resize', e);
                  var r = this.onMouseWheel.bind(this);
                  this.$block.addEventListener
                    ? 'onwheel' in document
                      ? this.$block.addEventListener('wheel', function (e) {
                          r(e);
                        })
                      : 'onmousewheel' in document
                      ? this.$block.addEventListener('mousewheel', function (e) {
                          r(e);
                        })
                      : this.$block.addEventListener('MozMousePixelScroll', function (e) {
                          r(e);
                        })
                    : this.$block.attachEvent('onmousewheel', function (e) {
                        r(e);
                      });
                },
              },
              {
                key: 'onResize',
                value: function (e) {
                  this.changeItem(this.getItems(this.value.current));
                },
              },
              {
                key: 'getBlockRect',
                value: function () {
                  return this.$block.getBoundingClientRect();
                },
              },
              {
                key: 'isTopBlock',
                value: function () {
                  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                  return 0 <= this.getBlockRect().top - 2 * e;
                },
              },
              {
                key: 'isBottomBlock',
                value: function () {
                  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = this.getBlockRect(),
                    n = h.innerHeight || document.documentElement.clientHeight,
                    i = h.pageYOffset || document.documentElement.scrollTop;
                  return i + n >= t.top + i + t.height - 2 * e;
                },
              },
              {
                key: 'onMouseWheel',
                value: function (e) {
                  var t = (e = e || h.event).deltaY || e.detail || e.wheelDelta,
                    n = this.isTopBlock(t),
                    i = this.isBottomBlock(t);
                  (n && 0 === this.value.current && t < 0) ||
                    (i && this.value.current === this.value.length - 1 && 0 < t) ||
                    (((n && t < 0) || (i && 0 < t)) &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      (e = null),
                      t < 0
                        ? (e = this.getItems(this.value.current - 1))
                        : 0 < t && (e = this.getItems(this.value.current + 1)),
                      e && this.changeItem(e),
                      n && t < 0
                        ? this.$block.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        : i &&
                          0 < t &&
                          this.$block.scrollIntoView({ behavior: 'smooth', block: 'end' })));
                },
              },
              {
                key: 'movePrev',
                value: function () {
                  this.$block.previousElementSibling.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                },
              },
              {
                key: 'moveNext',
                value: function () {
                  this.$block.nextElementSibling.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                },
              },
              {
                key: 'setElementsForItems',
                value: function () {
                  var e,
                    t = 0,
                    n = [0, 0, 0, 0],
                    i = _createForOfIteratorHelper(this.getItems());
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      var r,
                        s = e.value;
                      (s.index = t),
                        (s.date = s.innerText),
                        (s.picture = this.getPictures(t)),
                        (s.text = this.getTexts(t)),
                        (s.compare = []),
                        0 < t && ((r = this.getItems(t - 1)), this.compareYears(s, r, n)),
                        t++;
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                },
              },
              {
                key: 'compareYears',
                value: function (e, t, n) {
                  for (var i = 0; i < 4; i++)
                    e.date[i] !== t.date[i] &&
                      (n[i]++, this.getDate(i).append(this.createYear(e.date[i], e))),
                      (e.compare[i] = n[i]);
                },
              },
              {
                key: 'createYear',
                value: function (e, t) {
                  var n = document.createElement('div');
                  return (
                    (n.className = 'main-history__year-number'), (n.innerText = e), (n.el = t), n
                  );
                },
              },
              {
                key: 'createDefaultYear',
                value: function () {
                  this.getItems(0).compare = [0, 0, 0, 0];
                  for (var e = 0; e < 4; e++)
                    this.getDate(e).prepend(
                      this.createYear(this.getItems(0).date[e], this.getItems(0).date[e])
                    );
                },
              },
              {
                key: 'setCurrent',
                value: function (e) {
                  (this.currents.item = e),
                    (this.currents.picture = e.picture),
                    (this.currents.text = e.text),
                    e.classList.add('active'),
                    e.picture.classList.add('active'),
                    e.text.classList.add('active'),
                    (this.value.current = this.currents.item.index);
                },
              },
              {
                key: 'removeCurrent',
                value: function () {
                  this.currents.item.classList.remove('active'),
                    this.currents.picture.classList.remove('active'),
                    this.currents.text.classList.remove('active');
                },
              },
              {
                key: 'setDefaultTransformNumbers',
                value: function () {
                  var e,
                    t = _createForOfIteratorHelper(this.getDate());
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = e.value;
                      n.years = n.querySelectorAll('.main-history__year-number');
                      var i,
                        r = 0,
                        s = _createForOfIteratorHelper(n.years);
                      try {
                        for (s.s(); !(i = s.n()).done; ) {
                          var a,
                            o = i.value;
                          o.el === this.currents.item &&
                            ((a = o.offsetHeight * r),
                            (n.style.transform = 'translateY(-' + a + 'px)')),
                            r++;
                        }
                      } catch (e) {
                        s.e(e);
                      } finally {
                        s.f();
                      }
                    }
                  } catch (e) {
                    t.e(e);
                  } finally {
                    t.f();
                  }
                },
              },
              {
                key: 'setDefaultTransformTimeline',
                value: function () {
                  var e = this.currents.item.offsetWidth * this.currents.item.index;
                  this.getTimeline().style.transform = 'translateX(-'.concat(e, 'px)');
                },
              },
              {
                key: 'changeItem',
                value: function (e) {
                  this.transformYear(e),
                    this.removeCurrent(),
                    this.setCurrent(e),
                    this.setDefaultTransformTimeline();
                },
              },
              {
                key: 'transformYear',
                value: function (e) {
                  for (var t, n = 0; n < 4; n++)
                    e.compare[n] !== this.currents.item.compare[n] &&
                      ((t = this.getDate(0).years[0].offsetHeight * e.compare[n]),
                      (this.getDate(n).style.transform = 'translateY(-'.concat(t, 'px)')));
                },
              },
            ]),
            t
          );
        })(),
        t = _createForOfIteratorHelper(e);
      try {
        for (t.s(); !(n = t.n()).done; )
          !(function () {
            var t = n.value,
              e = t.querySelector('.main-history__skip-button .button');
            e &&
              e.addEventListener('click', function (e) {
                e.preventDefault();
                e = null;
                o === a ? (e = t.previousElementSibling) : o === s && (e = t.nextElementSibling),
                  e && e.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }),
              new i(t);
          })();
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    })(),
    (function () {
      var s,
        t = _createForOfIteratorHelper(document.querySelectorAll('.article'));
      try {
        for (t.s(); !(s = t.n()).done; )
          (function () {
            var t = s.value,
              e = t.querySelector('.article__button .button');
            if (!e) return;
            var n = e.querySelector('.button__text'),
              i = n.innerHTML,
              r = n.dataset['hide-text'] || 'Кратко';
            e &&
              e.addEventListener('click', function () {
                var e = t.classList.contains('article--show-detail');
                t.classList[e ? 'remove' : 'add']('article--show-detail'),
                  (n.innerHTML = e ? i : r);
              });
          })();
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    })(),
    (function () {
      var e = h.StickySidebar;
      if (e) {
        var t,
          n = _createForOfIteratorHelper(document.querySelectorAll('.sidebar-block'));
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var i = t.value.querySelector('.sidebar');
            i && new e(i, { offsetBottom: 32, offsetTop: 112 });
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      }
    })(),
    (function () {
      var o,
        t = _createForOfIteratorHelper(document.querySelectorAll('.left-menu'));
      try {
        function e() {
          var e,
            l,
            t,
            n,
            c = o.value.querySelectorAll('.left-menu__link'),
            r = [],
            i = _createForOfIteratorHelper(c);
          try {
            for (i.s(); !(e = i.n()).done; ) {
              var s = e.value,
                a = s.getAttribute('href');
              a &&
                '#' === a[0] &&
                (function () {
                  var i = document.querySelector(a);
                  i && r.push(i),
                    s.addEventListener('click', function (e) {
                      var t, n;
                      e.preventDefault(),
                        i &&
                          ((t = i),
                          (n = document.querySelector('.header')),
                          (e = n ? n.offsetHeight : 0),
                          (n = t.getBoundingClientRect()),
                          (t = t.ownerDocument.defaultView),
                          h.scrollTo({
                            top: Math.max(0, n.top + t.pageYOffset - e),
                            behavior: 'smooth',
                          }));
                    });
                })();
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
          r.length &&
            ((l = null),
            (t = function () {
              r.some(function (e, t) {
                var n = e.getBoundingClientRect(),
                  n = 0 < n.height + (n.top - h.innerHeight / 2);
                if (n && l === t) return !0;
                if (n) {
                  l = t;
                  var i,
                    r = e.getAttribute('id'),
                    s = _createForOfIteratorHelper(c);
                  try {
                    for (s.s(); !(i = s.n()).done; ) {
                      var a = i.value,
                        o = 'left-menu__link--active';
                      a.getAttribute('href') === '#'.concat(r)
                        ? a.classList.add(o)
                        : a.classList.contains(o) && a.classList.remove(o);
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                  return !0;
                }
                return !1;
              });
            })(),
            (n = function () {
              t();
            }),
            document.addEventListener('scroll', n),
            h.addEventListener('resize', n));
        }
        for (t.s(); !(o = t.n()).done; ) e();
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    })(),
    (y = h.Swiper),
    (p = document.querySelector('.reviews')) &&
      y &&
      (m = p.querySelector('.swiper-container')) &&
      new y(m, {
        slidesPerView: 1,
        navigation: {
          prevEl: p.querySelector('.reviews__nav-btn--prev'),
          nextEl: p.querySelector('.reviews__nav-btn--next'),
        },
      }),
    (function () {
      var i = h.slideToggle;
      if (i) {
        var r,
          t = _createForOfIteratorHelper(document.querySelectorAll('.accordion'));
        try {
          for (t.s(); !(r = t.n()).done; )
            !(function () {
              var t = r.value,
                e = t.querySelector('.accordion__header'),
                n = t.querySelector('.accordion__content-container');
              e.addEventListener('click', function (e) {
                e.preventDefault(), i(n, { parent: t, activeClass: 'accordion--open' });
              });
            })();
        } catch (e) {
          t.e(e);
        } finally {
          t.f();
        }
      }
    })();
})('undefined' == typeof global ? window : global);
