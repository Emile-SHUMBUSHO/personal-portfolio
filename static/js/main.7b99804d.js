/*! For license information please see main.7b99804d.js.LICENSE.txt */
// Emile Shumbusho Personal Portfolio
!(function () {
  var e = {
      499: function (e, t, n) {
        "use strict";
        var r = n(725),
          i = "function" === typeof Symbol && Symbol.for,
          o = i ? Symbol.for("react.element") : 60103,
          a = i ? Symbol.for("react.portal") : 60106,
          l = i ? Symbol.for("react.fragment") : 60107,
          s = i ? Symbol.for("react.strict_mode") : 60108,
          u = i ? Symbol.for("react.profiler") : 60114,
          c = i ? Symbol.for("react.provider") : 60109,
          d = i ? Symbol.for("react.context") : 60110,
          f = i ? Symbol.for("react.forward_ref") : 60112,
          p = i ? Symbol.for("react.suspense") : 60113,
          v = i ? Symbol.for("react.memo") : 60115,
          h = i ? Symbol.for("react.lazy") : 60116,
          m = "function" === typeof Symbol && Symbol.iterator;
        function g(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var y = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          b = {};
        function w(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || y);
        }
        function x() {}
        function S(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || y);
        }
        (w.prototype.isReactComponent = {}),
          (w.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(g(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (w.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (x.prototype = w.prototype);
        var E = (S.prototype = new x());
        (E.constructor = S), r(E, w.prototype), (E.isPureReactComponent = !0);
        var k = { current: null },
          C = Object.prototype.hasOwnProperty,
          T = { key: !0, ref: !0, __self: !0, __source: !0 };
        function P(e, t, n) {
          var r,
            i = {},
            a = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              C.call(t, r) && !T.hasOwnProperty(r) && (i[r] = t[r]);
          var s = arguments.length - 2;
          if (1 === s) i.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
          return {
            $$typeof: o,
            type: e,
            key: a,
            ref: l,
            props: i,
            _owner: k.current,
          };
        }
        function O(e) {
          return "object" === typeof e && null !== e && e.$$typeof === o;
        }
        var A = /\/+/g,
          M = [];
        function _(e, t, n, r) {
          if (M.length) {
            var i = M.pop();
            return (
              (i.result = e),
              (i.keyPrefix = t),
              (i.func = n),
              (i.context = r),
              (i.count = 0),
              i
            );
          }
          return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function j(e) {
          (e.result = null),
            (e.keyPrefix = null),
            (e.func = null),
            (e.context = null),
            (e.count = 0),
            10 > M.length && M.push(e);
        }
        function L(e, t, n, r) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (i) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    l = !0;
                }
            }
          if (l) return n(r, e, "" === t ? "." + I(e, 0) : t), 1;
          if (((l = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var u = t + I((i = e[s]), s);
              l += L(i, u, n, r);
            }
          else if (
            (null === e || "object" !== typeof e
              ? (u = null)
              : (u =
                  "function" === typeof (u = (m && e[m]) || e["@@iterator"])
                    ? u
                    : null),
            "function" === typeof u)
          )
            for (e = u.call(e), s = 0; !(i = e.next()).done; )
              l += L((i = i.value), (u = t + I(i, s++)), n, r);
          else if ("object" === i)
            throw (
              ((n = "" + e),
              Error(
                g(
                  31,
                  "[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n,
                  ""
                )
              ))
            );
          return l;
        }
        function N(e, t, n) {
          return null == e ? 0 : L(e, "", t, n);
        }
        function I(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })(e.key)
            : t.toString(36);
        }
        function R(e, t) {
          e.func.call(e.context, t, e.count++);
        }
        function D(e, t, n) {
          var r = e.result,
            i = e.keyPrefix;
          (e = e.func.call(e.context, t, e.count++)),
            Array.isArray(e)
              ? z(e, r, n, function (e) {
                  return e;
                })
              : null != e &&
                (O(e) &&
                  (e = (function (e, t) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    e,
                    i +
                      (!e.key || (t && t.key === e.key)
                        ? ""
                        : ("" + e.key).replace(A, "$&/") + "/") +
                      n
                  )),
                r.push(e));
        }
        function z(e, t, n, r, i) {
          var o = "";
          null != n && (o = ("" + n).replace(A, "$&/") + "/"),
            N(e, D, (t = _(t, o, r, i))),
            j(t);
        }
        var V = { current: null };
        function F() {
          var e = V.current;
          if (null === e) throw Error(g(321));
          return e;
        }
        var B = {
          ReactCurrentDispatcher: V,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: k,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return z(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            N(e, R, (t = _(null, null, t, n))), j(t);
          },
          count: function (e) {
            return N(
              e,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (e) {
            var t = [];
            return (
              z(e, t, null, function (e) {
                return e;
              }),
              t
            );
          },
          only: function (e) {
            if (!O(e)) throw Error(g(143));
            return e;
          },
        }),
          (t.Component = w),
          (t.Fragment = l),
          (t.Profiler = u),
          (t.PureComponent = S),
          (t.StrictMode = s),
          (t.Suspense = p),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(g(267, e));
            var i = r({}, e.props),
              a = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                C.call(t, c) &&
                  !T.hasOwnProperty(c) &&
                  (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) i.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
              i.children = u;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: a,
              ref: l,
              props: i,
              _owner: s,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: d,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = P),
          (t.createFactory = function (e) {
            var t = P.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: f, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return { $$typeof: h, _ctor: e, _status: -1, _result: null };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: v, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return F().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return F().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return F().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return F().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return F().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return F().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return F().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return F().useRef(e);
          }),
          (t.useState = function (e) {
            return F().useState(e);
          }),
          (t.version = "16.14.0");
      },
      60: function (e, t, n) {
        "use strict";
        e.exports = n(499);
      },
      881: function (e, t, n) {
        var r = "Expected a function",
          i = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          s = parseInt,
          u = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = u || c || Function("return this")(),
          f = Object.prototype.toString,
          p = Math.max,
          v = Math.min,
          h = function () {
            return d.Date.now();
          };
        function m(e, t, n) {
          var i,
            o,
            a,
            l,
            s,
            u,
            c = 0,
            d = !1,
            f = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(r);
          function b(t) {
            var n = i,
              r = o;
            return (i = o = void 0), (c = t), (l = e.apply(r, n));
          }
          function w(e) {
            return (c = e), (s = setTimeout(S, t)), d ? b(e) : l;
          }
          function x(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (f && e - c >= a);
          }
          function S() {
            var e = h();
            if (x(e)) return E(e);
            s = setTimeout(
              S,
              (function (e) {
                var n = t - (e - u);
                return f ? v(n, a - (e - c)) : n;
              })(e)
            );
          }
          function E(e) {
            return (s = void 0), m && i ? b(e) : ((i = o = void 0), l);
          }
          function k() {
            var e = h(),
              n = x(e);
            if (((i = arguments), (o = this), (u = e), n)) {
              if (void 0 === s) return w(u);
              if (f) return (s = setTimeout(S, t)), b(u);
            }
            return void 0 === s && (s = setTimeout(S, t)), l;
          }
          return (
            (t = y(t) || 0),
            g(n) &&
              ((d = !!n.leading),
              (a = (f = "maxWait" in n) ? p(y(n.maxWait) || 0, t) : a),
              (m = "trailing" in n ? !!n.trailing : m)),
            (k.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (c = 0),
                (i = u = o = s = void 0);
            }),
            (k.flush = function () {
              return void 0 === s ? l : E(h());
            }),
            k
          );
        }
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function y(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == f.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var n = a.test(e);
          return n || l.test(e)
            ? s(e.slice(2), n ? 2 : 8)
            : o.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var i = !0,
            o = !0;
          if ("function" != typeof e) throw new TypeError(r);
          return (
            g(n) &&
              ((i = "leading" in n ? !!n.leading : i),
              (o = "trailing" in n ? !!n.trailing : o)),
            m(e, t, { leading: i, maxWait: t, trailing: o })
          );
        };
      },
      725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function i(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (i) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (var a, l, s = i(e), u = 1; u < arguments.length; u++) {
                for (var c in (a = Object(arguments[u])))
                  n.call(a, c) && (s[c] = a[c]);
                if (t) {
                  l = t(a);
                  for (var d = 0; d < l.length; d++)
                    r.call(a, l[d]) && (s[l[d]] = a[l[d]]);
                }
              }
              return s;
            };
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function i() {}
        function o() {}
        (o.resetWarningCache = i),
          (e.exports = function () {
            function e(e, t, n, i, o, a) {
              if (a !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: i,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          i = n(725),
          o = n(296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(a(227));
        var l = new Set(),
          s = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          v = {},
          h = {};
        function m(e, t, n, r, i, o, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = a);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 === i.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!p.call(h, e) ||
                    (!p.call(v, e) &&
                      (f.test(e) ? (h[e] = !0) : ((v[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = 60103,
          E = 60106,
          k = 60107,
          C = 60108,
          T = 60114,
          P = 60109,
          O = 60110,
          A = 60112,
          M = 60113,
          _ = 60120,
          j = 60115,
          L = 60116,
          N = 60121,
          I = 60128,
          R = 60129,
          D = 60130,
          z = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var V = Symbol.for;
          (S = V("react.element")),
            (E = V("react.portal")),
            (k = V("react.fragment")),
            (C = V("react.strict_mode")),
            (T = V("react.profiler")),
            (P = V("react.provider")),
            (O = V("react.context")),
            (A = V("react.forward_ref")),
            (M = V("react.suspense")),
            (_ = V("react.suspense_list")),
            (j = V("react.memo")),
            (L = V("react.lazy")),
            (N = V("react.block")),
            V("react.scope"),
            (I = V("react.opaque.id")),
            (R = V("react.debug_trace_mode")),
            (D = V("react.offscreen")),
            (z = V("react.legacy_hidden"));
        }
        var F,
          B = "function" === typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
        }
        function H(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var W = !1;
        function G(e, t) {
          if (!e || W) return "";
          W = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var i = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  a = i.length - 1,
                  l = o.length - 1;
                1 <= a && 0 <= l && i[a] !== o[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (i[a] !== o[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || i[a] !== o[l]))
                        return "\n" + i[a].replace(" at new ", " at ");
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (W = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? H(e) : "";
        }
        function X(e) {
          switch (e.tag) {
            case 5:
              return H(e.type);
            case 16:
              return H("Lazy");
            case 13:
              return H("Suspense");
            case 19:
              return H("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = G(e.type, !1));
            case 11:
              return (e = G(e.type.render, !1));
            case 22:
              return (e = G(e.type._render, !1));
            case 1:
              return (e = G(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case E:
              return "Portal";
            case T:
              return "Profiler";
            case C:
              return "StrictMode";
            case M:
              return "Suspense";
            case _:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case A:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case j:
                return q(e.type);
              case N:
                return q(e._render);
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ie(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ie(e, t.type, Y(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ie(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function oe(e, t) {
          return (
            (e = i({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ae(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Y(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function se(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function ue(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = "http://www.w3.org/1999/xhtml",
          fe = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ve(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var he,
          me,
          ge =
            ((me = function (e, t) {
              if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (he = he || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = he.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          we = ["Webkit", "ms", "Moz", "O"];
        function xe(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function Se(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = xe(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(be).forEach(function (e) {
          we.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var Ee = i(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ke(e, t) {
          if (t) {
            if (
              Ee[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function Ce(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Te(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          Oe = null,
          Ae = null;
        function Me(e) {
          if ((e = ri(e))) {
            if ("function" !== typeof Pe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = oi(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          Oe ? (Ae ? Ae.push(e) : (Ae = [e])) : (Oe = e);
        }
        function je() {
          if (Oe) {
            var e = Oe,
              t = Ae;
            if (((Ae = Oe = null), Me(e), t))
              for (e = 0; e < t.length; e++) Me(t[e]);
          }
        }
        function Le(e, t) {
          return e(t);
        }
        function Ne(e, t, n, r, i) {
          return e(t, n, r, i);
        }
        function Ie() {}
        var Re = Le,
          De = !1,
          ze = !1;
        function Ve() {
          (null === Oe && null === Ae) || (Ie(), je());
        }
        function Fe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = oi(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Be = !1;
        if (d)
          try {
            var Ue = {};
            Object.defineProperty(Ue, "passive", {
              get: function () {
                Be = !0;
              },
            }),
              window.addEventListener("test", Ue, Ue),
              window.removeEventListener("test", Ue, Ue);
          } catch (me) {
            Be = !1;
          }
        function He(e, t, n, r, i, o, a, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var We = !1,
          Ge = null,
          Xe = !1,
          qe = null,
          Ye = {
            onError: function (e) {
              (We = !0), (Ge = e);
            },
          };
        function $e(e, t, n, r, i, o, a, l, s) {
          (We = !1), (Ge = null), He.apply(Ye, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ke(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (Qe(e) !== e) throw Error(a(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return Ze(i), e;
                    if (o === r) return Ze(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var l = !1, s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = i);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          it,
          ot = !1,
          at = [],
          lt = null,
          st = null,
          ut = null,
          ct = new Map(),
          dt = new Map(),
          ft = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function vt(e, t, n, r, i) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: i,
            targetContainers: [r],
          };
        }
        function ht(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              lt = null;
              break;
            case "dragenter":
            case "dragleave":
              st = null;
              break;
            case "mouseover":
            case "mouseout":
              ut = null;
              break;
            case "pointerover":
            case "pointerout":
              ct.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              dt.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = vt(t, n, r, i, o)),
              null !== t && null !== (t = ri(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function gt(e) {
          var t = ni(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ke(n)))
                  return (
                    (e.blockedOn = t),
                    void it(e.lanePriority, function () {
                      o.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ri(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function wt() {
          for (ot = !1; 0 < at.length; ) {
            var e = at[0];
            if (null !== e.blockedOn) {
              null !== (e = ri(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && at.shift();
          }
          null !== lt && yt(lt) && (lt = null),
            null !== st && yt(st) && (st = null),
            null !== ut && yt(ut) && (ut = null),
            ct.forEach(bt),
            dt.forEach(bt);
        }
        function xt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            ot ||
              ((ot = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, wt)));
        }
        function St(e) {
          function t(t) {
            return xt(t, e);
          }
          if (0 < at.length) {
            xt(at[0], e);
            for (var n = 1; n < at.length; n++) {
              var r = at[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && xt(lt, e),
              null !== st && xt(st, e),
              null !== ut && xt(ut, e),
              ct.forEach(t),
              dt.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
            gt(n), null === n.blockedOn && ft.shift();
        }
        function Et(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kt = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionend: Et("Transition", "TransitionEnd"),
          },
          Ct = {},
          Tt = {};
        function Pt(e) {
          if (Ct[e]) return Ct[e];
          if (!kt[e]) return e;
          var t,
            n = kt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Tt) return (Ct[e] = n[t]);
          return e;
        }
        d &&
          ((Tt = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kt.animationend.animation,
            delete kt.animationiteration.animation,
            delete kt.animationstart.animation),
          "TransitionEvent" in window || delete kt.transitionend.transition);
        var Ot = Pt("animationend"),
          At = Pt("animationiteration"),
          Mt = Pt("animationstart"),
          _t = Pt("transitionend"),
          jt = new Map(),
          Lt = new Map(),
          Nt = [
            "abort",
            "abort",
            Ot,
            "animationEnd",
            At,
            "animationIteration",
            Mt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            _t,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function It(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            (i = "on" + (i[0].toUpperCase() + i.slice(1))),
              Lt.set(r, t),
              jt.set(r, i),
              u(i, [r]);
          }
        }
        (0, o.unstable_now)();
        var Rt = 8;
        function Dt(e) {
          if (0 !== (1 & e)) return (Rt = 15), 1;
          if (0 !== (2 & e)) return (Rt = 14), 2;
          if (0 !== (4 & e)) return (Rt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Rt = 12), t)
            : 0 !== (32 & e)
            ? ((Rt = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Rt = 10), t)
            : 0 !== (256 & e)
            ? ((Rt = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Rt = 8), t)
            : 0 !== (4096 & e)
            ? ((Rt = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Rt = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Rt = 5), t)
            : 67108864 & e
            ? ((Rt = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((Rt = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Rt = 2), t)
            : 0 !== (1073741824 & e)
            ? ((Rt = 1), 1073741824)
            : ((Rt = 8), e);
        }
        function zt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Rt = 0);
          var r = 0,
            i = 0,
            o = e.expiredLanes,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== o) (r = o), (i = Rt = 15);
          else if (0 !== (o = 134217727 & n)) {
            var s = o & ~a;
            0 !== s
              ? ((r = Dt(s)), (i = Rt))
              : 0 !== (l &= o) && ((r = Dt(l)), (i = Rt));
          } else
            0 !== (o = n & ~a)
              ? ((r = Dt(o)), (i = Rt))
              : 0 !== l && ((r = Dt(l)), (i = Rt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & a))
          ) {
            if ((Dt(t), i <= Rt)) return t;
            Rt = i;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - Wt(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function Vt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ft(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Bt(24 & ~t)) ? Ft(10, t) : e;
            case 10:
              return 0 === (e = Bt(192 & ~t)) ? Ft(8, t) : e;
            case 8:
              return (
                0 === (e = Bt(3584 & ~t)) &&
                  0 === (e = Bt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(a(358, e));
        }
        function Bt(e) {
          return e & -e;
        }
        function Ut(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ht(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Wt(t))] = n);
        }
        var Wt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Gt(e) / Xt) | 0)) | 0;
              },
          Gt = Math.log,
          Xt = Math.LN2;
        var qt = o.unstable_UserBlockingPriority,
          Yt = o.unstable_runWithPriority,
          $t = !0;
        function Qt(e, t, n, r) {
          De || Ie();
          var i = Zt,
            o = De;
          De = !0;
          try {
            Ne(i, e, t, n, r);
          } finally {
            (De = o) || Ve();
          }
        }
        function Kt(e, t, n, r) {
          Yt(qt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var i;
          if ($t)
            if ((i = 0 === (4 & t)) && 0 < at.length && -1 < pt.indexOf(e))
              (e = vt(null, e, t, n, r)), at.push(e);
            else {
              var o = Jt(e, t, n, r);
              if (null === o) i && ht(e, r);
              else {
                if (i) {
                  if (-1 < pt.indexOf(e))
                    return (e = vt(o, e, t, n, r)), void at.push(e);
                  if (
                    (function (e, t, n, r, i) {
                      switch (t) {
                        case "focusin":
                          return (lt = mt(lt, e, t, n, r, i)), !0;
                        case "dragenter":
                          return (st = mt(st, e, t, n, r, i)), !0;
                        case "mouseover":
                          return (ut = mt(ut, e, t, n, r, i)), !0;
                        case "pointerover":
                          var o = i.pointerId;
                          return (
                            ct.set(o, mt(ct.get(o) || null, e, t, n, r, i)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (o = i.pointerId),
                            dt.set(o, mt(dt.get(o) || null, e, t, n, r, i)),
                            !0
                          );
                      }
                      return !1;
                    })(o, e, t, n, r)
                  )
                    return;
                  ht(e, r);
                }
                Ir(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var i = Te(r);
          if (null !== (i = ni(i))) {
            var o = Qe(i);
            if (null === o) i = null;
            else {
              var a = o.tag;
              if (13 === a) {
                if (null !== (i = Ke(o))) return i;
                i = null;
              } else if (3 === a) {
                if (o.stateNode.hydrate)
                  return 3 === o.tag ? o.stateNode.containerInfo : null;
                i = null;
              } else o !== i && (i = null);
            }
          }
          return Ir(e, t, r, i, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            i = "value" in en ? en.value : en.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
          return (nn = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function sn(e) {
          function t(t, n, r, i, o) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? an
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            i(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var un,
          cn,
          dn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = sn(fn),
          vn = i({}, fn, { view: 0, detail: 0 }),
          hn = sn(vn),
          mn = i({}, vn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: On,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== dn &&
                    (dn && "mousemove" === e.type
                      ? ((un = e.screenX - dn.screenX),
                        (cn = e.screenY - dn.screenY))
                      : (cn = un = 0),
                    (dn = e)),
                  un);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          gn = sn(mn),
          yn = sn(i({}, mn, { dataTransfer: 0 })),
          bn = sn(i({}, vn, { relatedTarget: 0 })),
          wn = sn(
            i({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          xn = i({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          Sn = sn(xn),
          En = sn(i({}, fn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Tn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Tn[e]) && !!t[e];
        }
        function On() {
          return Pn;
        }
        var An = i({}, vn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Cn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: On,
            charCode: function (e) {
              return "keypress" === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? on(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Mn = sn(An),
          _n = sn(
            i({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = sn(
            i({}, vn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: On,
            })
          ),
          Ln = sn(
            i({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = i({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = sn(Nn),
          Rn = [9, 13, 27, 32],
          Dn = d && "CompositionEvent" in window,
          zn = null;
        d && "documentMode" in document && (zn = document.documentMode);
        var Vn = d && "TextEvent" in window && !zn,
          Fn = d && (!Dn || (zn && 8 < zn && 11 >= zn)),
          Bn = String.fromCharCode(32),
          Un = !1;
        function Hn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Gn = !1;
        var Xn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Xn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          _e(r),
            0 < (t = Dr(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Qn = null;
        function Kn(e) {
          Ar(e, 0);
        }
        function Zn(e) {
          if (K(ii(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (d) {
          var tr;
          if (d) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function ir() {
          $n && ($n.detachEvent("onpropertychange", or), (Qn = $n = null));
        }
        function or(e) {
          if ("value" === e.propertyName && Zn(Qn)) {
            var t = [];
            if ((Yn(t, Qn, e, Te(e)), (e = Kn), De)) e(t);
            else {
              De = !0;
              try {
                Le(e, t);
              } finally {
                (De = !1), Ve();
              }
            }
          }
        }
        function ar(e, t, n) {
          "focusin" === e
            ? (ir(), (Qn = n), ($n = t).attachEvent("onpropertychange", or))
            : "focusout" === e && ir();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(Qn);
        }
        function sr(e, t) {
          if ("click" === e) return Zn(t);
        }
        function ur(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var cr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          dr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (cr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function vr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function hr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? hr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = d && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          wr = null,
          xr = null,
          Sr = !1;
        function Er(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          Sr ||
            null == br ||
            br !== Z(r) ||
            ("selectionStart" in (r = br) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (xr && fr(xr, r)) ||
              ((xr = r),
              0 < (r = Dr(wr, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        It(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          It(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          It(Nt, 2);
        for (
          var kr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Cr = 0;
          Cr < kr.length;
          Cr++
        )
          Lt.set(kr[Cr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Tr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Pr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Tr)
          );
        function Or(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, l, s, u) {
              if (($e.apply(this, arguments), We)) {
                if (!We) throw Error(a(198));
                var c = Ge;
                (We = !1), (Ge = null), Xe || ((Xe = !0), (qe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && i.isPropagationStopped()))
                    break e;
                  Or(i, l, u), (o = s);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((s = (l = r[a]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && i.isPropagationStopped())
                  )
                    break e;
                  Or(i, l, u), (o = s);
                }
            }
          }
          if (Xe) throw ((e = qe), (Xe = !1), (qe = null), e);
        }
        function Mr(e, t) {
          var n = ai(t),
            r = e + "__bubble";
          n.has(r) || (Nr(t, e, 2, !1), n.add(r));
        }
        var _r = "_reactListening" + Math.random().toString(36).slice(2);
        function jr(e) {
          e[_r] ||
            ((e[_r] = !0),
            l.forEach(function (t) {
              Pr.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null);
            }));
        }
        function Lr(e, t, n, r) {
          var i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            o = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (o = n.ownerDocument),
            null !== r && !t && Pr.has(e))
          ) {
            if ("scroll" !== e) return;
            (i |= 2), (o = r);
          }
          var a = ai(o),
            l = e + "__" + (t ? "capture" : "bubble");
          a.has(l) || (t && (i |= 4), Nr(o, e, i, t), a.add(l));
        }
        function Nr(e, t, n, r) {
          var i = Lt.get(t);
          switch (void 0 === i ? 2 : i) {
            case 0:
              i = Qt;
              break;
            case 1:
              i = Kt;
              break;
            default:
              i = Zt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Be ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Ir(e, t, n, r, i) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var s = a.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = a.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = ni(l))) return;
                  if (5 === (s = a.tag) || 6 === s) {
                    r = o = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (ze) return e(t, n);
            ze = !0;
            try {
              Re(e, t, n);
            } finally {
              (ze = !1), Ve();
            }
          })(function () {
            var r = o,
              i = Te(n),
              a = [];
            e: {
              var l = jt.get(e);
              if (void 0 !== l) {
                var s = pn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Mn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = bn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = jn;
                    break;
                  case Ot:
                  case At:
                  case Mt:
                    s = wn;
                    break;
                  case _t:
                    s = Ln;
                    break;
                  case "scroll":
                    s = hn;
                    break;
                  case "wheel":
                    s = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = Sn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = _n;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, v = r; null !== v; ) {
                  var h = (p = v).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Fe(v, f)) &&
                        c.push(Rr(v, h, p))),
                    d)
                  )
                    break;
                  v = v.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, i)),
                  a.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ni(u) && !u[ei])) &&
                  (s || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ni(u)
                          : null) &&
                        (u !== (d = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = gn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (v = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = _n),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (v = "pointer")),
                  (d = null == s ? l : ii(s)),
                  (p = null == u ? l : ii(u)),
                  ((l = new c(h, v + "leave", s, n, i)).target = d),
                  (l.relatedTarget = p),
                  (h = null),
                  ni(i) === r &&
                    (((c = new c(f, v + "enter", u, n, i)).target = p),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  s && u)
                )
                  e: {
                    for (f = u, v = 0, p = c = s; p; p = zr(p)) v++;
                    for (p = 0, h = f; h; h = zr(h)) p++;
                    for (; 0 < v - p; ) (c = zr(c)), v--;
                    for (; 0 < p - v; ) (f = zr(f)), p--;
                    for (; v--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = zr(c)), (f = zr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Vr(a, l, s, c, !1),
                  null !== u && null !== d && Vr(a, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? ii(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Jn;
              else if (qn(l))
                if (er) m = ur;
                else {
                  m = lr;
                  var g = ar;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = sr);
              switch (
                (m && (m = m(e, r))
                  ? Yn(a, m, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ie(l, "number", l.value)),
                (g = r ? ii(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(g) || "true" === g.contentEditable) &&
                    ((br = g), (wr = r), (xr = null));
                  break;
                case "focusout":
                  xr = wr = br = null;
                  break;
                case "mousedown":
                  Sr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (Sr = !1), Er(a, n, i);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  Er(a, n, i);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Gn
                  ? Hn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Gn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Gn && (y = rn())
                    : ((tn = "value" in (en = i) ? en.value : en.textContent),
                      (Gn = !0))),
                0 < (g = Dr(r, b)).length &&
                  ((b = new En(b, e, null, n, i)),
                  a.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Wn(n)) && (b.data = y))),
                (y = Vn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Gn)
                        return "compositionend" === e || (!Dn && Hn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Gn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Dr(r, "onBeforeInput")).length &&
                  ((i = new En("onBeforeInput", "beforeinput", null, n, i)),
                  a.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Ar(a, t);
          });
        }
        function Rr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Dr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = Fe(e, n)) && r.unshift(Rr(e, o, i)),
              null != (o = Fe(e, t)) && r.push(Rr(e, o, i))),
              (e = e.return);
          }
          return r;
        }
        function zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Vr(e, t, n, r, i) {
          for (var o = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              i
                ? null != (s = Fe(n, o)) && a.unshift(Rr(n, s, l))
                : i || (null != (s = Fe(n, o)) && a.push(Rr(n, s, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        function Fr() {}
        var Br = null,
          Ur = null;
        function Hr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Wr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Gr = "function" === typeof setTimeout ? setTimeout : void 0,
          Xr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function qr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function $r(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Qr = 0;
        var Kr = Math.random().toString(36).slice(2),
          Zr = "__reactFiber$" + Kr,
          Jr = "__reactProps$" + Kr,
          ei = "__reactContainer$" + Kr,
          ti = "__reactEvents$" + Kr;
        function ni(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ei] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = $r(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = $r(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ri(e) {
          return !(e = e[Zr] || e[ei]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ii(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function oi(e) {
          return e[Jr] || null;
        }
        function ai(e) {
          var t = e[ti];
          return void 0 === t && (t = e[ti] = new Set()), t;
        }
        var li = [],
          si = -1;
        function ui(e) {
          return { current: e };
        }
        function ci(e) {
          0 > si || ((e.current = li[si]), (li[si] = null), si--);
        }
        function di(e, t) {
          si++, (li[si] = e.current), (e.current = t);
        }
        var fi = {},
          pi = ui(fi),
          vi = ui(!1),
          hi = fi;
        function mi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fi;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function gi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function yi() {
          ci(vi), ci(pi);
        }
        function bi(e, t, n) {
          if (pi.current !== fi) throw Error(a(168));
          di(pi, t), di(vi, n);
        }
        function wi(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in e)) throw Error(a(108, q(t) || "Unknown", o));
          return i({}, n, r);
        }
        function xi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              fi),
            (hi = pi.current),
            di(pi, e),
            di(vi, vi.current),
            !0
          );
        }
        function Si(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = wi(e, t, hi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ci(vi),
              ci(pi),
              di(pi, e))
            : ci(vi),
            di(vi, n);
        }
        var Ei = null,
          ki = null,
          Ci = o.unstable_runWithPriority,
          Ti = o.unstable_scheduleCallback,
          Pi = o.unstable_cancelCallback,
          Oi = o.unstable_shouldYield,
          Ai = o.unstable_requestPaint,
          Mi = o.unstable_now,
          _i = o.unstable_getCurrentPriorityLevel,
          ji = o.unstable_ImmediatePriority,
          Li = o.unstable_UserBlockingPriority,
          Ni = o.unstable_NormalPriority,
          Ii = o.unstable_LowPriority,
          Ri = o.unstable_IdlePriority,
          Di = {},
          zi = void 0 !== Ai ? Ai : function () {},
          Vi = null,
          Fi = null,
          Bi = !1,
          Ui = Mi(),
          Hi =
            1e4 > Ui
              ? Mi
              : function () {
                  return Mi() - Ui;
                };
        function Wi() {
          switch (_i()) {
            case ji:
              return 99;
            case Li:
              return 98;
            case Ni:
              return 97;
            case Ii:
              return 96;
            case Ri:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function Gi(e) {
          switch (e) {
            case 99:
              return ji;
            case 98:
              return Li;
            case 97:
              return Ni;
            case 96:
              return Ii;
            case 95:
              return Ri;
            default:
              throw Error(a(332));
          }
        }
        function Xi(e, t) {
          return (e = Gi(e)), Ci(e, t);
        }
        function qi(e, t, n) {
          return (e = Gi(e)), Ti(e, t, n);
        }
        function Yi() {
          if (null !== Fi) {
            var e = Fi;
            (Fi = null), Pi(e);
          }
          $i();
        }
        function $i() {
          if (!Bi && null !== Vi) {
            Bi = !0;
            var e = 0;
            try {
              var t = Vi;
              Xi(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Vi = null);
            } catch (n) {
              throw (null !== Vi && (Vi = Vi.slice(e + 1)), Ti(ji, Yi), n);
            } finally {
              Bi = !1;
            }
          }
        }
        var Qi = x.ReactCurrentBatchConfig;
        function Ki(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Zi = ui(null),
          Ji = null,
          eo = null,
          to = null;
        function no() {
          to = eo = Ji = null;
        }
        function ro(e) {
          var t = Zi.current;
          ci(Zi), (e.type._context._currentValue = t);
        }
        function io(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function oo(e, t) {
          (Ji = e),
            (to = eo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Da = !0), (e.firstContext = null));
        }
        function ao(e, t) {
          if (to !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((to = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === eo)
            ) {
              if (null === Ji) throw Error(a(308));
              (eo = t),
                (Ji.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else eo = eo.next = t;
          return e._currentValue;
        }
        var lo = !1;
        function so(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function uo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function co(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function fo(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function po(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function vo(e, t, n, r) {
          var o = e.updateQueue;
          lo = !1;
          var a = o.firstBaseUpdate,
            l = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var u = s,
              c = u.next;
            (u.next = null), null === l ? (a = c) : (l.next = c), (l = u);
            var d = e.alternate;
            if (null !== d) {
              var f = (d = d.updateQueue).lastBaseUpdate;
              f !== l &&
                (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
                (d.lastBaseUpdate = u));
            }
          }
          if (null !== a) {
            for (f = o.baseState, l = 0, d = c = u = null; ; ) {
              s = a.lane;
              var p = a.eventTime;
              if ((r & s) === s) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                e: {
                  var v = e,
                    h = a;
                  switch (((s = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (v = h.payload)) {
                        f = v.call(p, f, s);
                        break e;
                      }
                      f = v;
                      break e;
                    case 3:
                      v.flags = (-4097 & v.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (s =
                            "function" === typeof (v = h.payload)
                              ? v.call(p, f, s)
                              : v) ||
                        void 0 === s
                      )
                        break e;
                      f = i({}, f, s);
                      break e;
                    case 2:
                      lo = !0;
                  }
                }
                null !== a.callback &&
                  ((e.flags |= 32),
                  null === (s = o.effects) ? (o.effects = [a]) : s.push(a));
              } else
                (p = {
                  eventTime: p,
                  lane: s,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === d ? ((c = d = p), (u = f)) : (d = d.next = p),
                  (l |= s);
              if (null === (a = a.next)) {
                if (null === (s = o.shared.pending)) break;
                (a = s.next),
                  (s.next = null),
                  (o.lastBaseUpdate = s),
                  (o.shared.pending = null);
              }
            }
            null === d && (u = f),
              (o.baseState = u),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = d),
              (Bl |= l),
              (e.lanes = l),
              (e.memoizedState = f);
          }
        }
        function ho(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var mo = new r.Component().refs;
        function go(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var yo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fs(),
              i = ps(e),
              o = co(r, i);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              fo(e, o),
              vs(e, i, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fs(),
              i = ps(e),
              o = co(r, i);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              fo(e, o),
              vs(e, i, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fs(),
              r = ps(e),
              i = co(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              fo(e, i),
              vs(e, r, n);
          },
        };
        function bo(e, t, n, r, i, o, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !fr(n, r) ||
                !fr(i, o);
        }
        function wo(e, t, n) {
          var r = !1,
            i = fi,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = ao(o))
              : ((i = gi(t) ? hi : pi.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? mi(e, i)
                  : fi)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = yo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function xo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && yo.enqueueReplaceState(t, t.state, null);
        }
        function So(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = mo), so(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (i.context = ao(o))
            : ((o = gi(t) ? hi : pi.current), (i.context = mi(e, o))),
            vo(e, n, i, r),
            (i.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (go(e, t, o, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && yo.enqueueReplaceState(i, i.state, null),
              vo(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4);
        }
        var Eo = Array.isArray;
        function ko(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === mo && (t = r.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Co(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function To(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Xs(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Qs(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = i(t, n.props)).ref = ko(e, t, n)), (r.return = e), r)
              : (((r = qs(n.type, n.key, n.props, null, e.mode, r)).ref = ko(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ks(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ys(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Qs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = qs(t.type, t.key, t.props, null, e.mode, n)).ref = ko(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Ks(t, e.mode, n)).return = e), t;
              }
              if (Eo(t) || U(t))
                return ((t = Ys(t, e.mode, n, null)).return = e), t;
              Co(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === i
                    ? n.type === k
                      ? d(e, t, n.props.children, r, i)
                      : u(e, t, n, r)
                    : null;
                case E:
                  return n.key === i ? c(e, t, n, r) : null;
              }
              if (Eo(n) || U(n)) return null !== i ? null : d(e, t, n, r, null);
              Co(e, n);
            }
            return null;
          }
          function v(e, t, n, r, i) {
            if ("string" === typeof r || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === k
                      ? d(t, e, r.props.children, i, r.key)
                      : u(t, e, r, i)
                  );
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
              }
              if (Eo(r) || U(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              Co(t, r);
            }
            return null;
          }
          function h(i, a, l, s) {
            for (
              var u = null, c = null, d = a, h = (a = 0), m = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
              var g = p(i, d, l[h], s);
              if (null === g) {
                null === d && (d = m);
                break;
              }
              e && d && null === g.alternate && t(i, d),
                (a = o(g, a, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = m);
            }
            if (h === l.length) return n(i, d), u;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = f(i, l[h], s)) &&
                  ((a = o(d, a, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return u;
            }
            for (d = r(i, d); h < l.length; h++)
              null !== (m = v(d, i, h, l[h], s)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? h : m.key),
                (a = o(m, a, h)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              u
            );
          }
          function m(i, l, s, u) {
            var c = U(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), h = l, m = (l = 0), g = null, y = s.next();
              null !== h && !y.done;
              m++, y = s.next()
            ) {
              h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
              var b = p(i, h, y.value, u);
              if (null === b) {
                null === h && (h = g);
                break;
              }
              e && h && null === b.alternate && t(i, h),
                (l = o(b, l, m)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (h = g);
            }
            if (y.done) return n(i, h), c;
            if (null === h) {
              for (; !y.done; m++, y = s.next())
                null !== (y = f(i, y.value, u)) &&
                  ((l = o(y, l, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return c;
            }
            for (h = r(i, h); !y.done; m++, y = s.next())
              null !== (y = v(h, i, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? m : y.key),
                (l = o(y, l, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(i, e);
                }),
              c
            );
          }
          return function (e, r, o, s) {
            var u =
              "object" === typeof o &&
              null !== o &&
              o.type === k &&
              null === o.key;
            u && (o = o.props.children);
            var c = "object" === typeof o && null !== o;
            if (c)
              switch (o.$$typeof) {
                case S:
                  e: {
                    for (c = o.key, u = r; null !== u; ) {
                      if (u.key === c) {
                        if (7 === u.tag) {
                          if (o.type === k) {
                            n(e, u.sibling),
                              ((r = i(u, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (u.elementType === o.type) {
                          n(e, u.sibling),
                            ((r = i(u, o.props)).ref = ko(e, u, o)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    o.type === k
                      ? (((r = Ys(o.props.children, e.mode, s, o.key)).return =
                          e),
                        (e = r))
                      : (((s = qs(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          e.mode,
                          s
                        )).ref = ko(e, r, o)),
                        (s.return = e),
                        (e = s));
                  }
                  return l(e);
                case E:
                  e: {
                    for (u = o.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === o.containerInfo &&
                          r.stateNode.implementation === o.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = i(r, o.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Ks(o, e.mode, s)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" === typeof o || "number" === typeof o)
              return (
                (o = "" + o),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
                  : (n(e, r), ((r = Qs(o, e.mode, s)).return = e), (e = r)),
                l(e)
              );
            if (Eo(o)) return h(e, r, o, s);
            if (U(o)) return m(e, r, o, s);
            if ((c && Co(e, o), "undefined" === typeof o && !u))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(a(152, q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Po = To(!0),
          Oo = To(!1),
          Ao = {},
          Mo = ui(Ao),
          _o = ui(Ao),
          jo = ui(Ao);
        function Lo(e) {
          if (e === Ao) throw Error(a(174));
          return e;
        }
        function No(e, t) {
          switch ((di(jo, t), di(_o, e), di(Mo, Ao), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ve(null, "");
              break;
            default:
              t = ve(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ci(Mo), di(Mo, t);
        }
        function Io() {
          ci(Mo), ci(_o), ci(jo);
        }
        function Ro(e) {
          Lo(jo.current);
          var t = Lo(Mo.current),
            n = ve(t, e.type);
          t !== n && (di(_o, e), di(Mo, n));
        }
        function Do(e) {
          _o.current === e && (ci(Mo), ci(_o));
        }
        var zo = ui(0);
        function Vo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fo = null,
          Bo = null,
          Uo = !1;
        function Ho(e, t) {
          var n = Ws(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Wo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Go(e) {
          if (Uo) {
            var t = Bo;
            if (t) {
              var n = t;
              if (!Wo(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !Wo(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Uo = !1), void (Fo = e)
                  );
                Ho(Fo, n);
              }
              (Fo = e), (Bo = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Uo = !1), (Fo = e);
          }
        }
        function Xo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Fo = e;
        }
        function qo(e) {
          if (e !== Fo) return !1;
          if (!Uo) return Xo(e), (Uo = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Wr(t, e.memoizedProps))
          )
            for (t = Bo; t; ) Ho(e, t), (t = Yr(t.nextSibling));
          if ((Xo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Bo = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Bo = null;
            }
          } else Bo = Fo ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Yo() {
          (Bo = Fo = null), (Uo = !1);
        }
        var $o = [];
        function Qo() {
          for (var e = 0; e < $o.length; e++)
            $o[e]._workInProgressVersionPrimary = null;
          $o.length = 0;
        }
        var Ko = x.ReactCurrentDispatcher,
          Zo = x.ReactCurrentBatchConfig,
          Jo = 0,
          ea = null,
          ta = null,
          na = null,
          ra = !1,
          ia = !1;
        function oa() {
          throw Error(a(321));
        }
        function aa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function la(e, t, n, r, i, o) {
          if (
            ((Jo = o),
            (ea = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ko.current = null === e || null === e.memoizedState ? La : Na),
            (e = n(r, i)),
            ia)
          ) {
            o = 0;
            do {
              if (((ia = !1), !(25 > o))) throw Error(a(301));
              (o += 1),
                (na = ta = null),
                (t.updateQueue = null),
                (Ko.current = Ia),
                (e = n(r, i));
            } while (ia);
          }
          if (
            ((Ko.current = ja),
            (t = null !== ta && null !== ta.next),
            (Jo = 0),
            (na = ta = ea = null),
            (ra = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function sa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === na ? (ea.memoizedState = na = e) : (na = na.next = e), na
          );
        }
        function ua() {
          if (null === ta) {
            var e = ea.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ta.next;
          var t = null === na ? ea.memoizedState : na.next;
          if (null !== t) (na = t), (ta = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ta = e).memoizedState,
              baseState: ta.baseState,
              baseQueue: ta.baseQueue,
              queue: ta.queue,
              next: null,
            }),
              null === na ? (ea.memoizedState = na = e) : (na = na.next = e);
          }
          return na;
        }
        function ca(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function da(e) {
          var t = ua(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ta,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var l = i.next;
              (i.next = o.next), (o.next = l);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (i = i.next), (r = r.baseState);
            var s = (l = o = null),
              u = i;
            do {
              var c = u.lane;
              if ((Jo & c) === c)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: c,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
                  (ea.lanes |= c),
                  (Bl |= c);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === s ? (o = r) : (s.next = l),
              cr(r, t.memoizedState) || (Da = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fa(e) {
          var t = ua(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== i);
            cr(o, t.memoizedState) || (Da = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function pa(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var i = t._workInProgressVersionPrimary;
          if (
            (null !== i
              ? (e = i === r)
              : ((e = e.mutableReadLanes),
                (e = (Jo & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), $o.push(t))),
            e)
          )
            return n(t._source);
          throw ($o.push(t), Error(a(350)));
        }
        function va(e, t, n, r) {
          var i = Ll;
          if (null === i) throw Error(a(349));
          var o = t._getVersion,
            l = o(t._source),
            s = Ko.current,
            u = s.useState(function () {
              return pa(i, t, n);
            }),
            c = u[1],
            d = u[0];
          u = na;
          var f = e.memoizedState,
            p = f.refs,
            v = p.getSnapshot,
            h = f.source;
          f = f.subscribe;
          var m = ea;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            s.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = o(t._source);
                if (!cr(l, e)) {
                  (e = n(t._source)),
                    cr(d, e) ||
                      (c(e),
                      (e = ps(m)),
                      (i.mutableReadLanes |= e & i.pendingLanes)),
                    (e = i.mutableReadLanes),
                    (i.entangledLanes |= e);
                  for (var r = i.entanglements, a = e; 0 < a; ) {
                    var s = 31 - Wt(a),
                      u = 1 << s;
                    (r[s] |= e), (a &= ~u);
                  }
                }
              },
              [n, t, r]
            ),
            s.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = ps(m);
                    i.mutableReadLanes |= r & i.pendingLanes;
                  } catch (o) {
                    n(function () {
                      throw o;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(v, n) && cr(h, t) && cr(f, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ca,
                lastRenderedState: d,
              }).dispatch = c =
                _a.bind(null, ea, e)),
              (u.queue = e),
              (u.baseQueue = null),
              (d = pa(i, t, n)),
              (u.memoizedState = u.baseState = d)),
            d
          );
        }
        function ha(e, t, n) {
          return va(ua(), e, t, n);
        }
        function ma(e) {
          var t = sa();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ca,
                lastRenderedState: e,
              }).dispatch =
              _a.bind(null, ea, e)),
            [t.memoizedState, e]
          );
        }
        function ga(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ea.updateQueue)
              ? ((t = { lastEffect: null }),
                (ea.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ya(e) {
          return (e = { current: e }), (sa().memoizedState = e);
        }
        function ba() {
          return ua().memoizedState;
        }
        function wa(e, t, n, r) {
          var i = sa();
          (ea.flags |= e),
            (i.memoizedState = ga(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function xa(e, t, n, r) {
          var i = ua();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ta) {
            var a = ta.memoizedState;
            if (((o = a.destroy), null !== r && aa(r, a.deps)))
              return void ga(t, n, o, r);
          }
          (ea.flags |= e), (i.memoizedState = ga(1 | t, n, o, r));
        }
        function Sa(e, t) {
          return wa(516, 4, e, t);
        }
        function Ea(e, t) {
          return xa(516, 4, e, t);
        }
        function ka(e, t) {
          return xa(4, 2, e, t);
        }
        function Ca(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ta(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            xa(4, 2, Ca.bind(null, t, e), n)
          );
        }
        function Pa() {}
        function Oa(e, t) {
          var n = ua();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && aa(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Aa(e, t) {
          var n = ua();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && aa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ma(e, t) {
          var n = Wi();
          Xi(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Xi(97 < n ? 97 : n, function () {
              var n = Zo.transition;
              Zo.transition = 1;
              try {
                e(!1), t();
              } finally {
                Zo.transition = n;
              }
            });
        }
        function _a(e, t, n) {
          var r = fs(),
            i = ps(e),
            o = {
              lane: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            a = t.pending;
          if (
            (null === a ? (o.next = o) : ((o.next = a.next), (a.next = o)),
            (t.pending = o),
            (a = e.alternate),
            e === ea || (null !== a && a === ea))
          )
            ia = ra = !0;
          else {
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  s = a(l, n);
                if (((o.eagerReducer = a), (o.eagerState = s), cr(s, l)))
                  return;
              } catch (u) {}
            vs(e, i, r);
          }
        }
        var ja = {
            readContext: ao,
            useCallback: oa,
            useContext: oa,
            useEffect: oa,
            useImperativeHandle: oa,
            useLayoutEffect: oa,
            useMemo: oa,
            useReducer: oa,
            useRef: oa,
            useState: oa,
            useDebugValue: oa,
            useDeferredValue: oa,
            useTransition: oa,
            useMutableSource: oa,
            useOpaqueIdentifier: oa,
            unstable_isNewReconciler: !1,
          },
          La = {
            readContext: ao,
            useCallback: function (e, t) {
              return (sa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: ao,
            useEffect: Sa,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                wa(4, 2, Ca.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return wa(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = sa();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = sa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  _a.bind(null, ea, e)),
                [r.memoizedState, e]
              );
            },
            useRef: ya,
            useState: ma,
            useDebugValue: Pa,
            useDeferredValue: function (e) {
              var t = ma(e),
                n = t[0],
                r = t[1];
              return (
                Sa(
                  function () {
                    var t = Zo.transition;
                    Zo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Zo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = ma(!1),
                t = e[0];
              return ya((e = Ma.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = sa();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                va(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Uo) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: I, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Qr++).toString(36))),
                      Error(a(355)))
                    );
                  }),
                  n = ma(t)[1];
                return (
                  0 === (2 & ea.mode) &&
                    ((ea.flags |= 516),
                    ga(
                      5,
                      function () {
                        n("r:" + (Qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return ma((t = "r:" + (Qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Na = {
            readContext: ao,
            useCallback: Oa,
            useContext: ao,
            useEffect: Ea,
            useImperativeHandle: Ta,
            useLayoutEffect: ka,
            useMemo: Aa,
            useReducer: da,
            useRef: ba,
            useState: function () {
              return da(ca);
            },
            useDebugValue: Pa,
            useDeferredValue: function (e) {
              var t = da(ca),
                n = t[0],
                r = t[1];
              return (
                Ea(
                  function () {
                    var t = Zo.transition;
                    Zo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Zo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = da(ca)[0];
              return [ba().current, e];
            },
            useMutableSource: ha,
            useOpaqueIdentifier: function () {
              return da(ca)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ia = {
            readContext: ao,
            useCallback: Oa,
            useContext: ao,
            useEffect: Ea,
            useImperativeHandle: Ta,
            useLayoutEffect: ka,
            useMemo: Aa,
            useReducer: fa,
            useRef: ba,
            useState: function () {
              return fa(ca);
            },
            useDebugValue: Pa,
            useDeferredValue: function (e) {
              var t = fa(ca),
                n = t[0],
                r = t[1];
              return (
                Ea(
                  function () {
                    var t = Zo.transition;
                    Zo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Zo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fa(ca)[0];
              return [ba().current, e];
            },
            useMutableSource: ha,
            useOpaqueIdentifier: function () {
              return fa(ca)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ra = x.ReactCurrentOwner,
          Da = !1;
        function za(e, t, n, r) {
          t.child = null === e ? Oo(t, null, n, r) : Po(t, e.child, n, r);
        }
        function Va(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return (
            oo(t, i),
            (r = la(e, t, n, r, o, i)),
            null === e || Da
              ? ((t.flags |= 1), za(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                ol(e, t, i))
          );
        }
        function Fa(e, t, n, r, i, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Gs(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = qs(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ba(e, t, a, r, i, o));
          }
          return (
            (a = e.child),
            0 === (i & o) &&
            ((i = a.memoizedProps),
            (n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref)
              ? ol(e, t, o)
              : ((t.flags |= 1),
                ((e = Xs(a, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ba(e, t, n, r, i, o) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Da = !1), 0 === (o & i)))
              return (t.lanes = e.lanes), ol(e, t, o);
            0 !== (16384 & e.flags) && (Da = !0);
          }
          return Wa(e, t, n, r, o);
        }
        function Ua(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), Ss(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  Ss(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                Ss(t, null !== o ? o.baseLanes : n);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ss(t, r);
          return za(e, t, i, n), t.child;
        }
        function Ha(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Wa(e, t, n, r, i) {
          var o = gi(n) ? hi : pi.current;
          return (
            (o = mi(t, o)),
            oo(t, i),
            (n = la(e, t, n, r, o, i)),
            null === e || Da
              ? ((t.flags |= 1), za(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                ol(e, t, i))
          );
        }
        function Ga(e, t, n, r, i) {
          if (gi(n)) {
            var o = !0;
            xi(t);
          } else o = !1;
          if ((oo(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              wo(t, n, r),
              So(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var s = a.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = ao(u))
              : (u = mi(t, (u = gi(n) ? hi : pi.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || s !== u) && xo(t, a, r, u)),
              (lo = !1);
            var f = t.memoizedState;
            (a.state = f),
              vo(t, r, a, i),
              (s = t.memoizedState),
              l !== r || f !== s || vi.current || lo
                ? ("function" === typeof c &&
                    (go(t, n, c, r), (s = t.memoizedState)),
                  (l = lo || bo(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = u),
                  (r = l))
                : ("function" === typeof a.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (a = t.stateNode),
              uo(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : Ki(t.type, l)),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = ao(s))
                : (s = mi(t, (s = gi(n) ? hi : pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== d || f !== s) && xo(t, a, r, s)),
              (lo = !1),
              (f = t.memoizedState),
              (a.state = f),
              vo(t, r, a, i);
            var v = t.memoizedState;
            l !== d || f !== v || vi.current || lo
              ? ("function" === typeof p &&
                  (go(t, n, p, r), (v = t.memoizedState)),
                (u = lo || bo(t, n, u, r, f, v, s))
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, v, s),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, v, s)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
                (a.props = r),
                (a.state = v),
                (a.context = s),
                (r = u))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Xa(e, t, n, r, o, i);
        }
        function Xa(e, t, n, r, i, o) {
          Ha(e, t);
          var a = 0 !== (64 & t.flags);
          if (!r && !a) return i && Si(t, n, !1), ol(e, t, o);
          (r = t.stateNode), (Ra.current = t);
          var l =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Po(t, e.child, null, o)),
                (t.child = Po(t, null, l, o)))
              : za(e, t, l, o),
            (t.memoizedState = r.state),
            i && Si(t, n, !0),
            t.child
          );
        }
        function qa(e) {
          var t = e.stateNode;
          t.pendingContext
            ? bi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && bi(0, t.context, !1),
            No(e, t.containerInfo);
        }
        var Ya,
          $a,
          Qa,
          Ka = { dehydrated: null, retryLane: 0 };
        function Za(e, t, n) {
          var r,
            i = t.pendingProps,
            o = zo.current,
            a = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((a = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (o |= 1),
            di(zo, 1 & o),
            null === e
              ? (void 0 !== i.fallback && Go(t),
                (e = i.children),
                (o = i.fallback),
                a
                  ? ((e = Ja(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ka),
                    e)
                  : "number" === typeof i.unstable_expectedLoadTime
                  ? ((e = Ja(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ka),
                    (t.lanes = 33554432),
                    e)
                  : (((n = $s(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                a
                  ? ((i = tl(e, t, i.children, i.fallback, n)),
                    (a = t.child),
                    (o = e.child.memoizedState),
                    (a.memoizedState =
                      null === o
                        ? { baseLanes: n }
                        : { baseLanes: o.baseLanes | n }),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Ka),
                    i)
                  : ((n = el(e, t, i.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ja(e, t, n, r) {
          var i = e.mode,
            o = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & i) && null !== o
              ? ((o.childLanes = 0), (o.pendingProps = t))
              : (o = $s(t, i, 0, null)),
            (n = Ys(n, i, r, null)),
            (o.return = e),
            (n.return = e),
            (o.sibling = n),
            (e.child = o),
            n
          );
        }
        function el(e, t, n, r) {
          var i = e.child;
          return (
            (e = i.sibling),
            (n = Xs(i, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, i) {
          var o = t.mode,
            a = e.child;
          e = a.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & o) && t.child !== a
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (a = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = a),
                    (a.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Xs(a, l)),
            null !== e ? (r = Xs(e, r)) : ((r = Ys(r, o, i, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), io(e.return, t);
        }
        function rl(e, t, n, r, i, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                lastEffect: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i),
              (a.lastEffect = o));
        }
        function il(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((za(e, t, r.children, n), 0 !== (2 & (r = zo.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((di(zo, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === Vo(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  rl(t, !1, i, n, o, t.lastEffect);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === Vo(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                rl(t, !0, n, null, o, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ol(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Bl |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(a(153));
            if (null !== t.child) {
              for (
                n = Xs((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Xs(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function al(e, t) {
          if (!Uo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return gi(t.type) && yi(), null;
            case 3:
              return (
                Io(),
                ci(vi),
                ci(pi),
                Qo(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (qo(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Do(t);
              var o = Lo(jo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                $a(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return null;
                }
                if (((e = Lo(Mo.current)), qo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Zr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Mr("cancel", r), Mr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Mr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Tr.length; e++) Mr(Tr[e], r);
                      break;
                    case "source":
                      Mr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Mr("error", r), Mr("load", r);
                      break;
                    case "details":
                      Mr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Mr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Mr("invalid", r);
                      break;
                    case "textarea":
                      se(r, l), Mr("invalid", r);
                  }
                  for (var u in (ke(n, l), (e = null), l))
                    l.hasOwnProperty(u) &&
                      ((o = l[u]),
                      "children" === u
                        ? "string" === typeof o
                          ? r.textContent !== o && (e = ["children", o])
                          : "number" === typeof o &&
                            r.textContent !== "" + o &&
                            (e = ["children", "" + o])
                        : s.hasOwnProperty(u) &&
                          null != o &&
                          "onScroll" === u &&
                          Mr("scroll", r));
                  switch (n) {
                    case "input":
                      Q(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Fr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((u = 9 === o.nodeType ? o : o.ownerDocument),
                    e === de && (e = pe(n)),
                    e === de
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[Jr] = r),
                    Ya(e, t),
                    (t.stateNode = e),
                    (u = Ce(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Mr("cancel", e), Mr("close", e), (o = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Mr("load", e), (o = r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Tr.length; o++) Mr(Tr[o], e);
                      o = r;
                      break;
                    case "source":
                      Mr("error", e), (o = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Mr("error", e), Mr("load", e), (o = r);
                      break;
                    case "details":
                      Mr("toggle", e), (o = r);
                      break;
                    case "input":
                      ee(e, r), (o = J(e, r)), Mr("invalid", e);
                      break;
                    case "option":
                      o = oe(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (o = i({}, r, { value: void 0 })),
                        Mr("invalid", e);
                      break;
                    case "textarea":
                      se(e, r), (o = le(e, r)), Mr("invalid", e);
                      break;
                    default:
                      o = r;
                  }
                  ke(n, o);
                  var c = o;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var d = c[l];
                      "style" === l
                        ? Se(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ge(e, d)
                        : "children" === l
                        ? "string" === typeof d
                          ? ("textarea" !== n || "" !== d) && ye(e, d)
                          : "number" === typeof d && ye(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (s.hasOwnProperty(l)
                            ? null != d && "onScroll" === l && Mr("scroll", e)
                            : null != d && w(e, l, d, u));
                    }
                  switch (n) {
                    case "input":
                      Q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + Y(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ae(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ae(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof o.onClick && (e.onclick = Fr);
                  }
                  Hr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Qa(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                (n = Lo(jo.current)),
                  Lo(Mo.current),
                  qo(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Zr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Zr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ci(zo),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && qo(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & zo.current)
                        ? 0 === zl && (zl = 3)
                        : ((0 !== zl && 3 !== zl) || (zl = 4),
                          null === Ll ||
                            (0 === (134217727 & Bl) &&
                              0 === (134217727 & Ul)) ||
                            ys(Ll, Il))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Io(), null === e && jr(t.stateNode.containerInfo), null;
            case 10:
              return ro(t), null;
            case 19:
              if ((ci(zo), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (u = r.rendering)))
                if (l) al(r, !1);
                else {
                  if (0 !== zl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = Vo(e))) {
                        for (
                          t.flags |= 64,
                            al(r, !1),
                            null !== (l = u.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return di(zo, (1 & zo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Hi() > Xl &&
                    ((t.flags |= 64),
                    (l = !0),
                    al(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Vo(u))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      al(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !u.alternate &&
                        !Uo)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Hi() - r.renderingStartTime > Xl &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      al(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                    (r.last = u));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Hi()),
                  (n.sibling = null),
                  (t = zo.current),
                  di(zo, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Es(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(a(156, t.tag));
        }
        function sl(e) {
          switch (e.tag) {
            case 1:
              gi(e.type) && yi();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Io(), ci(vi), ci(pi), Qo(), 0 !== (64 & (t = e.flags))))
                throw Error(a(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Do(e), null;
            case 13:
              return (
                ci(zo),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return ci(zo), null;
            case 4:
              return Io(), null;
            case 10:
              return ro(e), null;
            case 23:
            case 24:
              return Es(), null;
            default:
              return null;
          }
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += X(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (o) {
            i = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Ya = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          ($a = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Lo(Mo.current);
              var a,
                l = null;
              switch (n) {
                case "input":
                  (o = J(e, o)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (o = oe(e, o)), (r = oe(e, r)), (l = []);
                  break;
                case "select":
                  (o = i({}, o, { value: void 0 })),
                    (r = i({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (o = le(e, o)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Fr);
              }
              for (d in (ke(n, r), (n = null), o))
                if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && null != o[d])
                  if ("style" === d) {
                    var u = o[d];
                    for (a in u)
                      u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (s.hasOwnProperty(d)
                        ? l || (l = [])
                        : (l = l || []).push(d, null));
              for (d in r) {
                var c = r[d];
                if (
                  ((u = null != o ? o[d] : void 0),
                  r.hasOwnProperty(d) && c !== u && (null != c || null != u))
                )
                  if ("style" === d)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (c && c.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in c)
                        c.hasOwnProperty(a) &&
                          u[a] !== c[a] &&
                          (n || (n = {}), (n[a] = c[a]));
                    } else n || (l || (l = []), l.push(d, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(d, c))
                      : "children" === d
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (s.hasOwnProperty(d)
                          ? (null != c && "onScroll" === d && Mr("scroll", e),
                            l || u === c || (l = []))
                          : "object" === typeof c &&
                            null !== c &&
                            c.$$typeof === I
                          ? c.toString()
                          : (l = l || []).push(d, c));
              }
              n && (l = l || []).push("style", n);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (Qa = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function fl(e, t, n) {
          ((n = co(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ql || ((Ql = !0), (Kl = r)), cl(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = co(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            n.payload = function () {
              return cl(0, t), r(i);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Zl ? (Zl = new Set([this])) : Zl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var vl = "function" === typeof WeakSet ? WeakSet : Set;
        function hl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Fs(e, n);
              }
            else t.current = null;
        }
        function ml(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Ki(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && qr(t.stateNode.containerInfo));
          }
          throw Error(a(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var i = e;
                  (r = i.next),
                    0 !== (4 & (i = i.tag)) &&
                      0 !== (1 & i) &&
                      (Ds(n, e), Rs(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Ki(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ho(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ho(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Hr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && St(n))))
              );
          }
          throw Error(a(163));
        }
        function yl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                (i =
                  void 0 !== i && null !== i && i.hasOwnProperty("display")
                    ? i.display
                    : null),
                  (r.style.display = xe("display", i));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bl(e, t) {
          if (ki && "function" === typeof ki.onCommitFiberUnmount)
            try {
              ki.onCommitFiberUnmount(Ei, t);
            } catch (o) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    i = r.destroy;
                  if (((r = r.tag), void 0 !== i))
                    if (0 !== (4 & r)) Ds(t, n);
                    else {
                      r = t;
                      try {
                        i();
                      } catch (o) {
                        Fs(r, o);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (hl(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (o) {
                  Fs(t, o);
                }
              break;
            case 5:
              hl(t);
              break;
            case 4:
              Cl(e, t);
          }
        }
        function wl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function xl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Sl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (xl(t)) break e;
              t = t.return;
            }
            throw Error(a(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || xl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? El(e, n, t) : kl(e, n, t);
        }
        function El(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Fr));
          else if (4 !== r && null !== (e = e.child))
            for (El(e, t, n), e = e.sibling; null !== e; )
              El(e, t, n), (e = e.sibling);
        }
        function kl(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (kl(e, t, n), e = e.sibling; null !== e; )
              kl(e, t, n), (e = e.sibling);
        }
        function Cl(e, t) {
          for (var n, r, i = t, o = !1; ; ) {
            if (!o) {
              o = i.return;
              e: for (;;) {
                if (null === o) throw Error(a(160));
                switch (((n = o.stateNode), o.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                o = o.return;
              }
              o = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var l = e, s = i, u = s; ; )
                if ((bl(l, u), null !== u.child && 4 !== u.tag))
                  (u.child.return = u), (u = u.child);
                else {
                  if (u === s) break e;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === s) break e;
                    u = u.return;
                  }
                  (u.sibling.return = u.return), (u = u.sibling);
                }
              r
                ? ((l = n),
                  (s = i.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(s)
                    : l.removeChild(s))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (r = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((bl(e, i), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (o = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Tl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    n[Jr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Ce(e, i),
                      t = Ce(e, r),
                      i = 0;
                    i < o.length;
                    i += 2
                  ) {
                    var l = o[i],
                      s = o[i + 1];
                    "style" === l
                      ? Se(n, s)
                      : "dangerouslySetInnerHTML" === l
                      ? ge(n, s)
                      : "children" === l
                      ? ye(n, s)
                      : w(n, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ue(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (o = r.value)
                          ? ae(n, !!r.multiple, o, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ae(n, !!r.multiple, r.defaultValue, !0)
                              : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), St(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Gl = Hi()), yl(t.child, !0)),
                void Pl(t)
              );
            case 19:
              return void Pl(t);
            case 23:
            case 24:
              return void yl(t, null !== t.memoizedState);
          }
          throw Error(a(163));
        }
        function Pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new vl()),
              t.forEach(function (t) {
                var r = Us.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Ol(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Al = Math.ceil,
          Ml = x.ReactCurrentDispatcher,
          _l = x.ReactCurrentOwner,
          jl = 0,
          Ll = null,
          Nl = null,
          Il = 0,
          Rl = 0,
          Dl = ui(0),
          zl = 0,
          Vl = null,
          Fl = 0,
          Bl = 0,
          Ul = 0,
          Hl = 0,
          Wl = null,
          Gl = 0,
          Xl = 1 / 0;
        function ql() {
          Xl = Hi() + 500;
        }
        var Yl,
          $l = null,
          Ql = !1,
          Kl = null,
          Zl = null,
          Jl = !1,
          es = null,
          ts = 90,
          ns = [],
          rs = [],
          is = null,
          os = 0,
          as = null,
          ls = -1,
          ss = 0,
          us = 0,
          cs = null,
          ds = !1;
        function fs() {
          return 0 !== (48 & jl) ? Hi() : -1 !== ls ? ls : (ls = Hi());
        }
        function ps(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Wi() ? 1 : 2;
          if ((0 === ss && (ss = Fl), 0 !== Qi.transition)) {
            0 !== us && (us = null !== Wl ? Wl.pendingLanes : 0), (e = ss);
            var t = 4186112 & ~us;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Wi()),
            0 !== (4 & jl) && 98 === e
              ? (e = Ft(12, ss))
              : (e = Ft(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ss
                )),
            e
          );
        }
        function vs(e, t, n) {
          if (50 < os) throw ((os = 0), (as = null), Error(a(185)));
          if (null === (e = hs(e, t))) return null;
          Ht(e, t, n), e === Ll && ((Ul |= t), 4 === zl && ys(e, Il));
          var r = Wi();
          1 === t
            ? 0 !== (8 & jl) && 0 === (48 & jl)
              ? bs(e)
              : (ms(e, n), 0 === jl && (ql(), Yi()))
            : (0 === (4 & jl) ||
                (98 !== r && 99 !== r) ||
                (null === is ? (is = new Set([e])) : is.add(e)),
              ms(e, n)),
            (Wl = e);
        }
        function hs(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function ms(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              i = e.pingedLanes,
              o = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var s = 31 - Wt(l),
              u = 1 << s,
              c = o[s];
            if (-1 === c) {
              if (0 === (u & r) || 0 !== (u & i)) {
                (c = t), Dt(u);
                var d = Rt;
                o[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= u);
            l &= ~u;
          }
          if (((r = zt(e, e === Ll ? Il : 0)), (t = Rt), 0 === r))
            null !== n &&
              (n !== Di && Pi(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Di && Pi(n);
            }
            15 === t
              ? ((n = bs.bind(null, e)),
                null === Vi ? ((Vi = [n]), (Fi = Ti(ji, $i))) : Vi.push(n),
                (n = Di))
              : 14 === t
              ? (n = qi(99, bs.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(a(358, e));
                  }
                })(t)),
                (n = qi(n, gs.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gs(e) {
          if (((ls = -1), (us = ss = 0), 0 !== (48 & jl))) throw Error(a(327));
          var t = e.callbackNode;
          if (Is() && e.callbackNode !== t) return null;
          var n = zt(e, e === Ll ? Il : 0);
          if (0 === n) return null;
          var r = n,
            i = jl;
          jl |= 16;
          var o = Ts();
          for ((Ll === e && Il === r) || (ql(), ks(e, r)); ; )
            try {
              As();
              break;
            } catch (s) {
              Cs(e, s);
            }
          if (
            (no(),
            (Ml.current = o),
            (jl = i),
            null !== Nl ? (r = 0) : ((Ll = null), (Il = 0), (r = zl)),
            0 !== (Fl & Ul))
          )
            ks(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((jl |= 64),
                e.hydrate && ((e.hydrate = !1), qr(e.containerInfo)),
                0 !== (n = Vt(e)) && (r = Ps(e, n))),
              1 === r)
            )
              throw ((t = Vl), ks(e, 0), ys(e, n), ms(e, Hi()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                js(e);
                break;
              case 3:
                if (
                  (ys(e, n), (62914560 & n) === n && 10 < (r = Gl + 500 - Hi()))
                ) {
                  if (0 !== zt(e, 0)) break;
                  if (((i = e.suspendedLanes) & n) !== n) {
                    fs(), (e.pingedLanes |= e.suspendedLanes & i);
                    break;
                  }
                  e.timeoutHandle = Gr(js.bind(null, e), r);
                  break;
                }
                js(e);
                break;
              case 4:
                if ((ys(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, i = -1; 0 < n; ) {
                  var l = 31 - Wt(n);
                  (o = 1 << l), (l = r[l]) > i && (i = l), (n &= ~o);
                }
                if (
                  ((n = i),
                  10 <
                    (n =
                      (120 > (n = Hi() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Al(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Gr(js.bind(null, e), n);
                  break;
                }
                js(e);
                break;
              default:
                throw Error(a(329));
            }
          }
          return ms(e, Hi()), e.callbackNode === t ? gs.bind(null, e) : null;
        }
        function ys(e, t) {
          for (
            t &= ~Hl,
              t &= ~Ul,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Wt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bs(e) {
          if (0 !== (48 & jl)) throw Error(a(327));
          if ((Is(), e === Ll && 0 !== (e.expiredLanes & Il))) {
            var t = Il,
              n = Ps(e, t);
            0 !== (Fl & Ul) && (n = Ps(e, (t = zt(e, t))));
          } else n = Ps(e, (t = zt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((jl |= 64),
              e.hydrate && ((e.hydrate = !1), qr(e.containerInfo)),
              0 !== (t = Vt(e)) && (n = Ps(e, t))),
            1 === n)
          )
            throw ((n = Vl), ks(e, 0), ys(e, t), ms(e, Hi()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            js(e),
            ms(e, Hi()),
            null
          );
        }
        function ws(e, t) {
          var n = jl;
          jl |= 1;
          try {
            return e(t);
          } finally {
            0 === (jl = n) && (ql(), Yi());
          }
        }
        function xs(e, t) {
          var n = jl;
          (jl &= -2), (jl |= 8);
          try {
            return e(t);
          } finally {
            0 === (jl = n) && (ql(), Yi());
          }
        }
        function Ss(e, t) {
          di(Dl, Rl), (Rl |= t), (Fl |= t);
        }
        function Es() {
          (Rl = Dl.current), ci(Dl);
        }
        function ks(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Xr(n)), null !== Nl))
            for (n = Nl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    yi();
                  break;
                case 3:
                  Io(), ci(vi), ci(pi), Qo();
                  break;
                case 5:
                  Do(r);
                  break;
                case 4:
                  Io();
                  break;
                case 13:
                case 19:
                  ci(zo);
                  break;
                case 10:
                  ro(r);
                  break;
                case 23:
                case 24:
                  Es();
              }
              n = n.return;
            }
          (Ll = e),
            (Nl = Xs(e.current, null)),
            (Il = Rl = Fl = t),
            (zl = 0),
            (Vl = null),
            (Hl = Ul = Bl = 0);
        }
        function Cs(e, t) {
          for (;;) {
            var n = Nl;
            try {
              if ((no(), (Ko.current = ja), ra)) {
                for (var r = ea.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                ra = !1;
              }
              if (
                ((Jo = 0),
                (na = ta = ea = null),
                (ia = !1),
                (_l.current = null),
                null === n || null === n.return)
              ) {
                (zl = 1), (Vl = t), (Nl = null);
                break;
              }
              e: {
                var o = e,
                  a = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Il),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var u = s;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 !== (1 & zo.current),
                    f = a;
                  do {
                    var p;
                    if ((p = 13 === f.tag)) {
                      var v = f.memoizedState;
                      if (null !== v) p = null !== v.dehydrated;
                      else {
                        var h = f.memoizedProps;
                        p =
                          void 0 !== h.fallback &&
                          (!0 !== h.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (p) {
                      var m = f.updateQueue;
                      if (null === m) {
                        var g = new Set();
                        g.add(u), (f.updateQueue = g);
                      } else m.add(u);
                      if (0 === (2 & f.mode)) {
                        if (
                          ((f.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = co(-1, 1);
                            (y.tag = 2), fo(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (s = void 0), (l = t);
                      var b = o.pingCache;
                      if (
                        (null === b
                          ? ((b = o.pingCache = new dl()),
                            (s = new Set()),
                            b.set(u, s))
                          : void 0 === (s = b.get(u)) &&
                            ((s = new Set()), b.set(u, s)),
                        !s.has(l))
                      ) {
                        s.add(l);
                        var w = Bs.bind(null, o, u, l);
                        u.then(w, w);
                      }
                      (f.flags |= 4096), (f.lanes = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  s = Error(
                    (q(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== zl && (zl = 2), (s = ul(s, l)), (f = a);
                do {
                  switch (f.tag) {
                    case 3:
                      (o = s),
                        (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        po(f, fl(0, o, t));
                      break e;
                    case 1:
                      o = s;
                      var x = f.type,
                        S = f.stateNode;
                      if (
                        0 === (64 & f.flags) &&
                        ("function" === typeof x.getDerivedStateFromError ||
                          (null !== S &&
                            "function" === typeof S.componentDidCatch &&
                            (null === Zl || !Zl.has(S))))
                      ) {
                        (f.flags |= 4096),
                          (t &= -t),
                          (f.lanes |= t),
                          po(f, pl(f, o, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              _s(n);
            } catch (E) {
              (t = E), Nl === n && null !== n && (Nl = n = n.return);
              continue;
            }
            break;
          }
        }
        function Ts() {
          var e = Ml.current;
          return (Ml.current = ja), null === e ? ja : e;
        }
        function Ps(e, t) {
          var n = jl;
          jl |= 16;
          var r = Ts();
          for ((Ll === e && Il === t) || ks(e, t); ; )
            try {
              Os();
              break;
            } catch (i) {
              Cs(e, i);
            }
          if ((no(), (jl = n), (Ml.current = r), null !== Nl))
            throw Error(a(261));
          return (Ll = null), (Il = 0), zl;
        }
        function Os() {
          for (; null !== Nl; ) Ms(Nl);
        }
        function As() {
          for (; null !== Nl && !Oi(); ) Ms(Nl);
        }
        function Ms(e) {
          var t = Yl(e.alternate, e, Rl);
          (e.memoizedProps = e.pendingProps),
            null === t ? _s(e) : (Nl = t),
            (_l.current = null);
        }
        function _s(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Rl))) return void (Nl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Rl) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, i = n.child; null !== i; )
                  (r |= i.lanes | i.childLanes), (i = i.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = sl(t))) return (n.flags &= 2047), void (Nl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Nl = t);
            Nl = t = e;
          } while (null !== t);
          0 === zl && (zl = 5);
        }
        function js(e) {
          var t = Wi();
          return Xi(99, Ls.bind(null, e, t)), null;
        }
        function Ls(e, t) {
          do {
            Is();
          } while (null !== es);
          if (0 !== (48 & jl)) throw Error(a(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(a(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            i = r,
            o = e.pendingLanes & ~i;
          (e.pendingLanes = i),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= i),
            (e.mutableReadLanes &= i),
            (e.entangledLanes &= i),
            (i = e.entanglements);
          for (var l = e.eventTimes, s = e.expirationTimes; 0 < o; ) {
            var u = 31 - Wt(o),
              c = 1 << u;
            (i[u] = 0), (l[u] = -1), (s[u] = -1), (o &= ~c);
          }
          if (
            (null !== is && 0 === (24 & r) && is.has(e) && is.delete(e),
            e === Ll && ((Nl = Ll = null), (Il = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((i = jl),
              (jl |= 32),
              (_l.current = null),
              (Br = $t),
              gr((l = mr())))
            ) {
              if ("selectionStart" in l)
                s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                  (c = s.getSelection && s.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (s = c.anchorNode),
                    (o = c.anchorOffset),
                    (u = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    s.nodeType, u.nodeType;
                  } catch (T) {
                    s = null;
                    break e;
                  }
                  var d = 0,
                    f = -1,
                    p = -1,
                    v = 0,
                    h = 0,
                    m = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      m !== s || (0 !== o && 3 !== m.nodeType) || (f = d + o),
                        m !== u || (0 !== c && 3 !== m.nodeType) || (p = d + c),
                        3 === m.nodeType && (d += m.nodeValue.length),
                        null !== (y = m.firstChild);

                    )
                      (g = m), (m = y);
                    for (;;) {
                      if (m === l) break t;
                      if (
                        (g === s && ++v === o && (f = d),
                        g === u && ++h === c && (p = d),
                        null !== (y = m.nextSibling))
                      )
                        break;
                      g = (m = g).parentNode;
                    }
                    m = y;
                  }
                  s = -1 === f || -1 === p ? null : { start: f, end: p };
                } else s = null;
              s = s || { start: 0, end: 0 };
            } else s = null;
            (Ur = { focusedElem: l, selectionRange: s }),
              ($t = !1),
              (cs = null),
              (ds = !1),
              ($l = r);
            do {
              try {
                Ns();
              } catch (T) {
                if (null === $l) throw Error(a(330));
                Fs($l, T), ($l = $l.nextEffect);
              }
            } while (null !== $l);
            (cs = null), ($l = r);
            do {
              try {
                for (l = e; null !== $l; ) {
                  var b = $l.flags;
                  if ((16 & b && ye($l.stateNode, ""), 128 & b)) {
                    var w = $l.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ("function" === typeof x
                          ? x(null)
                          : (x.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      Sl($l), ($l.flags &= -3);
                      break;
                    case 6:
                      Sl($l), ($l.flags &= -3), Tl($l.alternate, $l);
                      break;
                    case 1024:
                      $l.flags &= -1025;
                      break;
                    case 1028:
                      ($l.flags &= -1025), Tl($l.alternate, $l);
                      break;
                    case 4:
                      Tl($l.alternate, $l);
                      break;
                    case 8:
                      Cl(l, (s = $l));
                      var S = s.alternate;
                      wl(s), null !== S && wl(S);
                  }
                  $l = $l.nextEffect;
                }
              } catch (T) {
                if (null === $l) throw Error(a(330));
                Fs($l, T), ($l = $l.nextEffect);
              }
            } while (null !== $l);
            if (
              ((x = Ur),
              (w = mr()),
              (b = x.focusedElem),
              (l = x.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                hr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                gr(b) &&
                ((w = l.start),
                void 0 === (x = l.end) && (x = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(x, b.value.length)))
                  : (x =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (s = b.textContent.length),
                    (S = Math.min(l.start, s)),
                    (l = void 0 === l.end ? S : Math.min(l.end, s)),
                    !x.extend && S > l && ((s = l), (l = S), (S = s)),
                    (s = vr(b, S)),
                    (o = vr(b, l)),
                    s &&
                      o &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== s.node ||
                        x.anchorOffset !== s.offset ||
                        x.focusNode !== o.node ||
                        x.focusOffset !== o.offset) &&
                      ((w = w.createRange()).setStart(s.node, s.offset),
                      x.removeAllRanges(),
                      S > l
                        ? (x.addRange(w), x.extend(o.node, o.offset))
                        : (w.setEnd(o.node, o.offset), x.addRange(w))))),
                (w = []);
              for (x = b; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (
                "function" === typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((x = w[b]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            ($t = !!Br), (Ur = Br = null), (e.current = n), ($l = r);
            do {
              try {
                for (b = e; null !== $l; ) {
                  var E = $l.flags;
                  if ((36 & E && gl(b, $l.alternate, $l), 128 & E)) {
                    w = void 0;
                    var k = $l.ref;
                    if (null !== k) {
                      var C = $l.stateNode;
                      $l.tag,
                        (w = C),
                        "function" === typeof k ? k(w) : (k.current = w);
                    }
                  }
                  $l = $l.nextEffect;
                }
              } catch (T) {
                if (null === $l) throw Error(a(330));
                Fs($l, T), ($l = $l.nextEffect);
              }
            } while (null !== $l);
            ($l = null), zi(), (jl = i);
          } else e.current = n;
          if (Jl) (Jl = !1), (es = e), (ts = t);
          else
            for ($l = r; null !== $l; )
              (t = $l.nextEffect),
                ($l.nextEffect = null),
                8 & $l.flags &&
                  (((E = $l).sibling = null), (E.stateNode = null)),
                ($l = t);
          if (
            (0 === (r = e.pendingLanes) && (Zl = null),
            1 === r ? (e === as ? os++ : ((os = 0), (as = e))) : (os = 0),
            (n = n.stateNode),
            ki && "function" === typeof ki.onCommitFiberRoot)
          )
            try {
              ki.onCommitFiberRoot(
                Ei,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (T) {}
          if ((ms(e, Hi()), Ql)) throw ((Ql = !1), (e = Kl), (Kl = null), e);
          return 0 !== (8 & jl) || Yi(), null;
        }
        function Ns() {
          for (; null !== $l; ) {
            var e = $l.alternate;
            ds ||
              null === cs ||
              (0 !== (8 & $l.flags)
                ? et($l, cs) && (ds = !0)
                : 13 === $l.tag && Ol(e, $l) && et($l, cs) && (ds = !0));
            var t = $l.flags;
            0 !== (256 & t) && ml(e, $l),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                qi(97, function () {
                  return Is(), null;
                })),
              ($l = $l.nextEffect);
          }
        }
        function Is() {
          if (90 !== ts) {
            var e = 97 < ts ? 97 : ts;
            return (ts = 90), Xi(e, zs);
          }
          return !1;
        }
        function Rs(e, t) {
          ns.push(t, e),
            Jl ||
              ((Jl = !0),
              qi(97, function () {
                return Is(), null;
              }));
        }
        function Ds(e, t) {
          rs.push(t, e),
            Jl ||
              ((Jl = !0),
              qi(97, function () {
                return Is(), null;
              }));
        }
        function zs() {
          if (null === es) return !1;
          var e = es;
          if (((es = null), 0 !== (48 & jl))) throw Error(a(331));
          var t = jl;
          jl |= 32;
          var n = rs;
          rs = [];
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              o = n[r + 1],
              l = i.destroy;
            if (((i.destroy = void 0), "function" === typeof l))
              try {
                l();
              } catch (u) {
                if (null === o) throw Error(a(330));
                Fs(o, u);
              }
          }
          for (n = ns, ns = [], r = 0; r < n.length; r += 2) {
            (i = n[r]), (o = n[r + 1]);
            try {
              var s = i.create;
              i.destroy = s();
            } catch (u) {
              if (null === o) throw Error(a(330));
              Fs(o, u);
            }
          }
          for (s = e.current.firstEffect; null !== s; )
            (e = s.nextEffect),
              (s.nextEffect = null),
              8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
              (s = e);
          return (jl = t), Yi(), !0;
        }
        function Vs(e, t, n) {
          fo(e, (t = fl(0, (t = ul(n, t)), 1))),
            (t = fs()),
            null !== (e = hs(e, 1)) && (Ht(e, 1, t), ms(e, t));
        }
        function Fs(e, t) {
          if (3 === e.tag) Vs(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Vs(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r)))
                ) {
                  var i = pl(n, (e = ul(t, e)), 1);
                  if ((fo(n, i), (i = fs()), null !== (n = hs(n, 1))))
                    Ht(n, 1, i), ms(n, i);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (o) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Bs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fs()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ll === e &&
              (Il & n) === n &&
              (4 === zl ||
              (3 === zl && (62914560 & Il) === Il && 500 > Hi() - Gl)
                ? ks(e, 0)
                : (Hl |= n)),
            ms(e, t);
        }
        function Us(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Wi() ? 1 : 2)
                : (0 === ss && (ss = Fl),
                  0 === (t = Bt(62914560 & ~ss)) && (t = 4194304))),
            (n = fs()),
            null !== (e = hs(e, t)) && (Ht(e, t, n), ms(e, n));
        }
        function Hs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ws(e, t, n, r) {
          return new Hs(e, t, n, r);
        }
        function Gs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Xs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ws(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function qs(e, t, n, r, i, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Gs(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Ys(n.children, i, o, t);
              case R:
                (l = 8), (i |= 16);
                break;
              case C:
                (l = 8), (i |= 1);
                break;
              case T:
                return (
                  ((e = Ws(12, n, t, 8 | i)).elementType = T),
                  (e.type = T),
                  (e.lanes = o),
                  e
                );
              case M:
                return (
                  ((e = Ws(13, n, t, i)).type = M),
                  (e.elementType = M),
                  (e.lanes = o),
                  e
                );
              case _:
                return (
                  ((e = Ws(19, n, t, i)).elementType = _), (e.lanes = o), e
                );
              case D:
                return $s(n, i, o, t);
              case z:
                return (
                  ((e = Ws(24, n, t, i)).elementType = z), (e.lanes = o), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case O:
                      l = 9;
                      break e;
                    case A:
                      l = 11;
                      break e;
                    case j:
                      l = 14;
                      break e;
                    case L:
                      (l = 16), (r = null);
                      break e;
                    case N:
                      l = 22;
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ws(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ys(e, t, n, r) {
          return ((e = Ws(7, e, r, t)).lanes = n), e;
        }
        function $s(e, t, n, r) {
          return ((e = Ws(23, e, r, t)).elementType = D), (e.lanes = n), e;
        }
        function Qs(e, t, n) {
          return ((e = Ws(6, e, null, t)).lanes = n), e;
        }
        function Ks(e, t, n) {
          return (
            ((t = Ws(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Zs(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ut(0)),
            (this.expirationTimes = Ut(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ut(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Js(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function eu(e, t, n, r) {
          var i = t.current,
            o = fs(),
            l = ps(i);
          e: if (n) {
            t: {
              if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(a(170));
              var s = n;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (gi(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(a(171));
            }
            if (1 === n.tag) {
              var u = n.type;
              if (gi(u)) {
                n = wi(n, u, s);
                break e;
              }
            }
            n = s;
          } else n = fi;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = co(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            fo(i, t),
            vs(i, l, o),
            l
          );
        }
        function tu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function nu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ru(e, t) {
          nu(e, t), (e = e.alternate) && nu(e, t);
        }
        function iu(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Zs(e, t, null != n && !0 === n.hydrate)),
            (t = Ws(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            so(t),
            (e[ei] = n.current),
            jr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var i = (t = r[e])._getVersion;
              (i = i(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, i])
                  : n.mutableSourceEagerHydrationData.push(t, i);
            }
          this._internalRoot = n;
        }
        function ou(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function au(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o._internalRoot;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = tu(a);
                l.call(e);
              };
            }
            eu(t, a, e, i);
          } else {
            if (
              ((o = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new iu(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (a = o._internalRoot),
              "function" === typeof i)
            ) {
              var s = i;
              i = function () {
                var e = tu(a);
                s.call(e);
              };
            }
            xs(function () {
              eu(t, a, e, i);
            });
          }
          return tu(a);
        }
        function lu(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!ou(t)) throw Error(a(200));
          return Js(e, t, null, n);
        }
        (Yl = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || vi.current) Da = !0;
            else {
              if (0 === (n & r)) {
                switch (((Da = !1), t.tag)) {
                  case 3:
                    qa(t), Yo();
                    break;
                  case 5:
                    Ro(t);
                    break;
                  case 1:
                    gi(t.type) && xi(t);
                    break;
                  case 4:
                    No(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var i = t.type._context;
                    di(Zi, i._currentValue), (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Za(e, t, n)
                        : (di(zo, 1 & zo.current),
                          null !== (t = ol(e, t, n)) ? t.sibling : null);
                    di(zo, 1 & zo.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return il(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      di(zo, zo.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Ua(e, t, n);
                }
                return ol(e, t, n);
              }
              Da = 0 !== (16384 & e.flags);
            }
          else Da = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = mi(t, pi.current)),
                oo(t, n),
                (i = la(null, t, r, e, i, n)),
                (t.flags |= 1),
                "object" === typeof i &&
                  null !== i &&
                  "function" === typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  gi(r))
                ) {
                  var o = !0;
                  xi(t);
                } else o = !1;
                (t.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  so(t);
                var l = r.getDerivedStateFromProps;
                "function" === typeof l && go(t, r, l, e),
                  (i.updater = yo),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  So(t, r, e, n),
                  (t = Xa(null, t, r, !0, o, n));
              } else (t.tag = 0), za(null, t, i, n), (t = t.child);
              return t;
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (i = (o = i._init)(i._payload)),
                  (t.type = i),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Gs(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === A) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = Ki(i, e)),
                  o)
                ) {
                  case 0:
                    t = Wa(null, t, i, e, n);
                    break e;
                  case 1:
                    t = Ga(null, t, i, e, n);
                    break e;
                  case 11:
                    t = Va(null, t, i, e, n);
                    break e;
                  case 14:
                    t = Fa(null, t, i, Ki(i.type, e), r, n);
                    break e;
                }
                throw Error(a(306, i, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Wa(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ga(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
              );
            case 3:
              if ((qa(t), (r = t.updateQueue), null === e || null === r))
                throw Error(a(282));
              if (
                ((r = t.pendingProps),
                (i = null !== (i = t.memoizedState) ? i.element : null),
                uo(e, t),
                vo(t, r, null, n),
                (r = t.memoizedState.element) === i)
              )
                Yo(), (t = ol(e, t, n));
              else {
                if (
                  ((o = (i = t.stateNode).hydrate) &&
                    ((Bo = Yr(t.stateNode.containerInfo.firstChild)),
                    (Fo = t),
                    (o = Uo = !0)),
                  o)
                ) {
                  if (null != (e = i.mutableSourceEagerHydrationData))
                    for (i = 0; i < e.length; i += 2)
                      ((o = e[i])._workInProgressVersionPrimary = e[i + 1]),
                        $o.push(o);
                  for (n = Oo(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else za(e, t, r, n), Yo();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ro(t),
                null === e && Go(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = i.children),
                Wr(r, i)
                  ? (l = null)
                  : null !== o && Wr(r, o) && (t.flags |= 16),
                Ha(e, t),
                za(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Go(t), null;
            case 13:
              return Za(e, t, n);
            case 4:
              return (
                No(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Po(t, null, r, n)) : za(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Va(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
              );
            case 7:
              return za(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return za(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (i = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = i.value);
                var s = t.type._context;
                if (
                  (di(Zi, s._currentValue), (s._currentValue = o), null !== l)
                )
                  if (
                    ((s = l.value),
                    0 ===
                      (o = cr(s, o)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(s, o)
                            : 1073741823)))
                  ) {
                    if (l.children === i.children && !vi.current) {
                      t = ol(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var u = s.dependencies;
                      if (null !== u) {
                        l = s.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & o)) {
                            1 === s.tag &&
                              (((c = co(-1, n & -n)).tag = 2), fo(s, c)),
                              (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              io(s.return, n),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                za(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = (o = t.pendingProps).children),
                oo(t, n),
                (r = r((i = ao(i, o.unstable_observedBits)))),
                (t.flags |= 1),
                za(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = Ki((i = t.type), t.pendingProps)),
                Fa(e, t, i, (o = Ki(i.type, o)), r, n)
              );
            case 15:
              return Ba(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ki(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                gi(r) ? ((e = !0), xi(t)) : (e = !1),
                oo(t, n),
                wo(t, r, i),
                So(t, r, i, n),
                Xa(null, t, r, !0, e, n)
              );
            case 19:
              return il(e, t, n);
            case 23:
            case 24:
              return Ua(e, t, n);
          }
          throw Error(a(156, t.tag));
        }),
          (iu.prototype.render = function (e) {
            eu(e, this._internalRoot, null, null);
          }),
          (iu.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            eu(null, e, null, function () {
              t[ei] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (vs(e, 4, fs()), ru(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (vs(e, 67108864, fs()), ru(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fs(),
                n = ps(e);
              vs(e, n, t), ru(e, n);
            }
          }),
          (it = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = oi(r);
                      if (!i) throw Error(a(90));
                      K(r), ne(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ue(e, n);
                break;
              case "select":
                null != (t = n.value) && ae(e, !!n.multiple, t, !1);
            }
          }),
          (Le = ws),
          (Ne = function (e, t, n, r, i) {
            var o = jl;
            jl |= 4;
            try {
              return Xi(98, e.bind(null, t, n, r, i));
            } finally {
              0 === (jl = o) && (ql(), Yi());
            }
          }),
          (Ie = function () {
            0 === (49 & jl) &&
              ((function () {
                if (null !== is) {
                  var e = is;
                  (is = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), ms(e, Hi());
                    });
                }
                Yi();
              })(),
              Is());
          }),
          (Re = function (e, t) {
            var n = jl;
            jl |= 2;
            try {
              return e(t);
            } finally {
              0 === (jl = n) && (ql(), Yi());
            }
          });
        var su = { Events: [ri, ii, oi, _e, je, Is, { current: !1 }] },
          uu = {
            findFiberByHostInstance: ni,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          cu = {
            bundleType: uu.bundleType,
            version: uu.version,
            rendererPackageName: uu.rendererPackageName,
            rendererConfig: uu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              uu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!du.isDisabled && du.supportsFiber)
            try {
              (Ei = du.inject(cu)), (ki = du);
            } catch (me) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = su),
          (t.createPortal = lu),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = jl;
            if (0 !== (48 & n)) return e(t);
            jl |= 1;
            try {
              if (e) return Xi(99, e.bind(null, t));
            } finally {
              (jl = n), Yi();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!ou(t)) throw Error(a(200));
            return au(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!ou(t)) throw Error(a(200));
            return au(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!ou(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (xs(function () {
                au(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ei] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ws),
          (t.unstable_createPortal = function (e, t) {
            return lu(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!ou(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return au(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      592: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = a(n(791)),
          o = a(n(585));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function l(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var u = (function (e) {
          function t() {
            return (
              l(this, t),
              s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "render",
                value: function () {
                  return i.default.createElement(
                    "input",
                    this.props,
                    this.props.children
                  );
                },
              },
            ]),
            t
          );
        })(i.default.Component);
        t.default = (0, o.default)(u);
      },
      532: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = s(n(791)),
          a = s(n(671)),
          l = s(n(7));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var d = (function (e) {
          function t() {
            return (
              u(this, t),
              c(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = r({}, this.props);
                  return (
                    t.parentBindings && delete t.parentBindings,
                    o.default.createElement(
                      "div",
                      r({}, t, {
                        ref: function (t) {
                          e.props.parentBindings.domNode = t;
                        },
                      }),
                      this.props.children
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.default.Component);
        (d.propTypes = { name: l.default.string, id: l.default.string }),
          (t.default = (0, a.default)(d));
      },
      582: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = o(n(791)),
          i = o(n(585));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var s = (function (e) {
          function t() {
            var e, n, i;
            a(this, t);
            for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
              s[u] = arguments[u];
            return (
              (n = i =
                l(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(s)
                  )
                )),
              (i.render = function () {
                return r.default.createElement("a", i.props, i.props.children);
              }),
              l(i, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            t
          );
        })(r.default.Component);
        t.default = (0, i.default)(s);
      },
      667: function (e, t, n) {
        "use strict";
        t.rU = void 0;
        var r = p(n(582)),
          i = p(n(592)),
          o = p(n(532)),
          a = p(n(338)),
          l = p(n(979)),
          s = p(n(688)),
          u = p(n(102)),
          c = p(n(585)),
          d = p(n(671)),
          f = p(n(719));
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.rU = r.default),
          i.default,
          o.default,
          a.default,
          l.default,
          s.default,
          u.default,
          c.default,
          d.default,
          f.default,
          r.default,
          i.default,
          o.default,
          a.default,
          l.default,
          s.default,
          u.default,
          c.default,
          d.default,
          f.default;
      },
      719: function (e, t, n) {
        "use strict";
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        function l(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        var s = n(791),
          u = (n(164), n(183), n(688)),
          c = n(338),
          d = n(7),
          f = n(203),
          p = {
            to: d.string.isRequired,
            containerId: d.string,
            container: d.object,
            activeClass: d.string,
            spy: d.bool,
            smooth: d.oneOfType([d.bool, d.string]),
            offset: d.number,
            delay: d.number,
            isDynamic: d.bool,
            onClick: d.func,
            duration: d.oneOfType([d.number, d.func]),
            absolute: d.bool,
            onSetActive: d.func,
            onSetInactive: d.func,
            ignoreCancelEvents: d.bool,
            hashSpy: d.bool,
            spyThrottle: d.number,
          },
          v = {
            Scroll: function (e, t) {
              console.warn("Helpers.Scroll is deprecated since v1.7.0");
              var n = t || c,
                d = (function (t) {
                  function c(e) {
                    o(this, c);
                    var t = a(
                      this,
                      (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
                    );
                    return v.call(t), (t.state = { active: !1 }), t;
                  }
                  return (
                    l(c, t),
                    i(c, [
                      {
                        key: "getScrollSpyContainer",
                        value: function () {
                          var e = this.props.containerId,
                            t = this.props.container;
                          return e
                            ? document.getElementById(e)
                            : t && t.nodeType
                            ? t
                            : document;
                        },
                      },
                      {
                        key: "componentDidMount",
                        value: function () {
                          if (this.props.spy || this.props.hashSpy) {
                            var e = this.getScrollSpyContainer();
                            u.isMounted(e) ||
                              u.mount(e, this.props.spyThrottle),
                              this.props.hashSpy &&
                                (f.isMounted() || f.mount(n),
                                f.mapContainer(this.props.to, e)),
                              this.props.spy &&
                                u.addStateHandler(this.stateHandler),
                              u.addSpyHandler(this.spyHandler, e),
                              this.setState({ container: e });
                          }
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          u.unmount(this.stateHandler, this.spyHandler);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = "";
                          t =
                            this.state && this.state.active
                              ? (
                                  (this.props.className || "") +
                                  " " +
                                  (this.props.activeClass || "active")
                                ).trim()
                              : this.props.className;
                          var n = r({}, this.props);
                          for (var i in p) n.hasOwnProperty(i) && delete n[i];
                          return (
                            (n.className = t),
                            (n.onClick = this.handleClick),
                            s.createElement(e, n)
                          );
                        },
                      },
                    ]),
                    c
                  );
                })(s.Component),
                v = function () {
                  var e = this;
                  (this.scrollTo = function (t, i) {
                    n.scrollTo(t, r({}, e.state, i));
                  }),
                    (this.handleClick = function (t) {
                      e.props.onClick && e.props.onClick(t),
                        t.stopPropagation && t.stopPropagation(),
                        t.preventDefault && t.preventDefault(),
                        e.scrollTo(e.props.to, e.props);
                    }),
                    (this.stateHandler = function () {
                      n.getActiveLink() !== e.props.to &&
                        (null !== e.state &&
                          e.state.active &&
                          e.props.onSetInactive &&
                          e.props.onSetInactive(),
                        e.setState({ active: !1 }));
                    }),
                    (this.spyHandler = function (t) {
                      var r = e.getScrollSpyContainer();
                      if (!f.isMounted() || f.isInitialized()) {
                        var i = e.props.to,
                          o = null,
                          a = 0,
                          l = 0,
                          s = 0;
                        if (r.getBoundingClientRect)
                          s = r.getBoundingClientRect().top;
                        if (!o || e.props.isDynamic) {
                          if (!(o = n.get(i))) return;
                          var c = o.getBoundingClientRect();
                          l = (a = c.top - s + t) + c.height;
                        }
                        var d = t - e.props.offset,
                          p = d >= Math.floor(a) && d < Math.floor(l),
                          v = d < Math.floor(a) || d >= Math.floor(l),
                          h = n.getActiveLink();
                        return v
                          ? (i === h && n.setActiveLink(void 0),
                            e.props.hashSpy &&
                              f.getHash() === i &&
                              f.changeHash(),
                            e.props.spy &&
                              e.state.active &&
                              (e.setState({ active: !1 }),
                              e.props.onSetInactive && e.props.onSetInactive()),
                            u.updateStates())
                          : p && h !== i
                          ? (n.setActiveLink(i),
                            e.props.hashSpy && f.changeHash(i),
                            e.props.spy &&
                              (e.setState({ active: !0 }),
                              e.props.onSetActive && e.props.onSetActive(i)),
                            u.updateStates())
                          : void 0;
                      }
                    });
                };
              return (d.propTypes = p), (d.defaultProps = { offset: 0 }), d;
            },
            Element: function (e) {
              console.warn("Helpers.Element is deprecated since v1.7.0");
              var t = (function (t) {
                function n(e) {
                  o(this, n);
                  var t = a(
                    this,
                    (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                  );
                  return (t.childBindings = { domNode: null }), t;
                }
                return (
                  l(n, t),
                  i(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        if ("undefined" === typeof window) return !1;
                        this.registerElems(this.props.name);
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        this.props.name !== e.name &&
                          this.registerElems(this.props.name);
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        if ("undefined" === typeof window) return !1;
                        c.unregister(this.props.name);
                      },
                    },
                    {
                      key: "registerElems",
                      value: function (e) {
                        c.register(e, this.childBindings.domNode);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return s.createElement(
                          e,
                          r({}, this.props, {
                            parentBindings: this.childBindings,
                          })
                        );
                      },
                    },
                  ]),
                  n
                );
              })(s.Component);
              return (t.propTypes = { name: d.string, id: d.string }), t;
            },
          };
        e.exports = v;
      },
      102: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (l(n(183)), l(n(987))),
          o = l(n(616)),
          a = l(n(979));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = function (e) {
            return i.default[e.smooth] || i.default.defaultEasing;
          },
          u =
            (function () {
              if ("undefined" !== typeof window)
                return (
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame
                );
            })() ||
            function (e, t, n) {
              window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
            },
          c = function (e) {
            var t = e.data.containerElement;
            if (t && t !== document && t !== document.body) return t.scrollLeft;
            var n = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return n
              ? window.pageXOffset
              : r
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          d = function (e) {
            var t = e.data.containerElement;
            if (t && t !== document && t !== document.body) return t.scrollTop;
            var n = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return n
              ? window.pageYOffset
              : r
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          f = function e(t, n, r) {
            var i = n.data;
            if (n.ignoreCancelEvents || !i.cancel)
              if (
                ((i.delta = Math.round(i.targetPosition - i.startPosition)),
                null === i.start && (i.start = r),
                (i.progress = r - i.start),
                (i.percent =
                  i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
                (i.currentPosition =
                  i.startPosition + Math.ceil(i.delta * i.percent)),
                i.containerElement &&
                i.containerElement !== document &&
                i.containerElement !== document.body
                  ? n.horizontal
                    ? (i.containerElement.scrollLeft = i.currentPosition)
                    : (i.containerElement.scrollTop = i.currentPosition)
                  : n.horizontal
                  ? window.scrollTo(i.currentPosition, 0)
                  : window.scrollTo(0, i.currentPosition),
                i.percent < 1)
              ) {
                var o = e.bind(null, t, n);
                u.call(window, o);
              } else
                a.default.registered.end &&
                  a.default.registered.end(i.to, i.target, i.currentPosition);
            else
              a.default.registered.end &&
                a.default.registered.end(i.to, i.target, i.currentPositionY);
          },
          p = function (e) {
            e.data.containerElement = e
              ? e.containerId
                ? document.getElementById(e.containerId)
                : e.container && e.container.nodeType
                ? e.container
                : document
              : null;
          },
          v = function (e, t, n, r) {
            if (
              ((t.data = t.data || {
                currentPosition: 0,
                startPosition: 0,
                targetPosition: 0,
                progress: 0,
                duration: 0,
                cancel: !1,
                target: null,
                containerElement: null,
                to: null,
                start: null,
                delta: null,
                percent: null,
                delayTimeout: null,
              }),
              window.clearTimeout(t.data.delayTimeout),
              o.default.subscribe(function () {
                t.data.cancel = !0;
              }),
              p(t),
              (t.data.start = null),
              (t.data.cancel = !1),
              (t.data.startPosition = t.horizontal ? c(t) : d(t)),
              (t.data.targetPosition = t.absolute
                ? e
                : e + t.data.startPosition),
              t.data.startPosition !== t.data.targetPosition)
            ) {
              var i;
              (t.data.delta = Math.round(
                t.data.targetPosition - t.data.startPosition
              )),
                (t.data.duration = (
                  "function" === typeof (i = t.duration)
                    ? i
                    : function () {
                        return i;
                      }
                )(t.data.delta)),
                (t.data.duration = isNaN(parseFloat(t.data.duration))
                  ? 1e3
                  : parseFloat(t.data.duration)),
                (t.data.to = n),
                (t.data.target = r);
              var l = s(t),
                v = f.bind(null, l, t);
              t && t.delay > 0
                ? (t.data.delayTimeout = window.setTimeout(function () {
                    a.default.registered.begin &&
                      a.default.registered.begin(t.data.to, t.data.target),
                      u.call(window, v);
                  }, t.delay))
                : (a.default.registered.begin &&
                    a.default.registered.begin(t.data.to, t.data.target),
                  u.call(window, v));
            } else
              a.default.registered.end &&
                a.default.registered.end(
                  t.data.to,
                  t.data.target,
                  t.data.currentPosition
                );
          },
          h = function (e) {
            return (
              ((e = r({}, e)).data = e.data || {
                currentPosition: 0,
                startPosition: 0,
                targetPosition: 0,
                progress: 0,
                duration: 0,
                cancel: !1,
                target: null,
                containerElement: null,
                to: null,
                start: null,
                delta: null,
                percent: null,
                delayTimeout: null,
              }),
              (e.absolute = !0),
              e
            );
          };
        t.default = {
          animateTopScroll: v,
          getAnimationType: s,
          scrollToTop: function (e) {
            v(0, h(e));
          },
          scrollToBottom: function (e) {
            (e = h(e)),
              p(e),
              v(
                e.horizontal
                  ? (function (e) {
                      var t = e.data.containerElement;
                      if (t && t !== document && t !== document.body)
                        return t.scrollWidth - t.offsetWidth;
                      var n = document.body,
                        r = document.documentElement;
                      return Math.max(
                        n.scrollWidth,
                        n.offsetWidth,
                        r.clientWidth,
                        r.scrollWidth,
                        r.offsetWidth
                      );
                    })(e)
                  : (function (e) {
                      var t = e.data.containerElement;
                      if (t && t !== document && t !== document.body)
                        return t.scrollHeight - t.offsetHeight;
                      var n = document.body,
                        r = document.documentElement;
                      return Math.max(
                        n.scrollHeight,
                        n.offsetHeight,
                        r.clientHeight,
                        r.scrollHeight,
                        r.offsetHeight
                      );
                    })(e),
                e
              );
          },
          scrollTo: function (e, t) {
            v(e, h(t));
          },
          scrollMore: function (e, t) {
            (t = h(t)), p(t);
            var n = t.horizontal ? c(t) : d(t);
            v(e + n, t);
          },
        };
      },
      616: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(360),
          i = ["mousedown", "mousewheel", "touchmove", "keydown"];
        t.default = {
          subscribe: function (e) {
            return (
              "undefined" !== typeof document &&
              i.forEach(function (t) {
                return (0, r.addPassiveEventListener)(document, t, e);
              })
            );
          },
        };
      },
      360: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.addPassiveEventListener = function (e, t, n) {
          var r = (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (n) {}
            return e;
          })();
          e.addEventListener(t, n, !!r && { passive: !0 });
        }),
          (t.removePassiveEventListener = function (e, t, n) {
            e.removeEventListener(t, n);
          });
      },
      671: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = s(n(791)),
          a = (s(n(164)), s(n(338))),
          l = s(n(7));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          var t = (function (t) {
            function n(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(n, t),
              i(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" === typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.name !== e.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" === typeof window) return !1;
                    a.default.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (e) {
                    a.default.register(e, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.default.createElement(
                      e,
                      r({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              n
            );
          })(o.default.Component);
          return (
            (t.propTypes = { name: l.default.string, id: l.default.string }), t
          );
        };
      },
      979: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          registered: {},
          scrollEvent: {
            register: function (e, t) {
              n.registered[e] = t;
            },
            remove: function (e) {
              n.registered[e] = null;
            },
          },
        };
        t.default = n;
      },
      203: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        n(360);
        var r,
          i = n(183),
          o = (r = i) && r.__esModule ? r : { default: r };
        var a = {
          mountFlag: !1,
          initialized: !1,
          scroller: null,
          containers: {},
          mount: function (e) {
            (this.scroller = e),
              (this.handleHashChange = this.handleHashChange.bind(this)),
              window.addEventListener("hashchange", this.handleHashChange),
              this.initStateFromHash(),
              (this.mountFlag = !0);
          },
          mapContainer: function (e, t) {
            this.containers[e] = t;
          },
          isMounted: function () {
            return this.mountFlag;
          },
          isInitialized: function () {
            return this.initialized;
          },
          initStateFromHash: function () {
            var e = this,
              t = this.getHash();
            t
              ? window.setTimeout(function () {
                  e.scrollTo(t, !0), (e.initialized = !0);
                }, 10)
              : (this.initialized = !0);
          },
          scrollTo: function (e, t) {
            var n = this.scroller;
            if (n.get(e) && (t || e !== n.getActiveLink())) {
              var r = this.containers[e] || document;
              n.scrollTo(e, { container: r });
            }
          },
          getHash: function () {
            return o.default.getHash();
          },
          changeHash: function (e, t) {
            this.isInitialized() &&
              o.default.getHash() !== e &&
              o.default.updateHash(e, t);
          },
          handleHashChange: function () {
            this.scrollTo(this.getHash());
          },
          unmount: function () {
            (this.scroller = null),
              (this.containers = null),
              window.removeEventListener("hashchange", this.handleHashChange);
          },
        };
        t.default = a;
      },
      585: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = c(n(791)),
          a = c(n(688)),
          l = c(n(338)),
          s = c(n(7)),
          u = c(n(203));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var d = {
          to: s.default.string.isRequired,
          containerId: s.default.string,
          container: s.default.object,
          activeClass: s.default.string,
          spy: s.default.bool,
          horizontal: s.default.bool,
          smooth: s.default.oneOfType([s.default.bool, s.default.string]),
          offset: s.default.number,
          delay: s.default.number,
          isDynamic: s.default.bool,
          onClick: s.default.func,
          duration: s.default.oneOfType([s.default.number, s.default.func]),
          absolute: s.default.bool,
          onSetActive: s.default.func,
          onSetInactive: s.default.func,
          ignoreCancelEvents: s.default.bool,
          hashSpy: s.default.bool,
          saveHashHistory: s.default.bool,
          spyThrottle: s.default.number,
        };
        t.default = function (e, t) {
          var n = t || l.default,
            s = (function (t) {
              function l(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, l);
                var t = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t ||
                    ("object" !== typeof t && "function" !== typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (l.__proto__ || Object.getPrototypeOf(l)).call(this, e)
                );
                return c.call(t), (t.state = { active: !1 }), t;
              }
              return (
                (function (e, t) {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(l, t),
                i(l, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e && !t
                        ? document.getElementById(e)
                        : t && t.nodeType
                        ? t
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        a.default.isMounted(e) ||
                          a.default.mount(e, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (u.default.isMounted() || u.default.mount(n),
                            u.default.mapContainer(this.props.to, e)),
                          a.default.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      a.default.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = "";
                      t =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var n = r({}, this.props);
                      for (var i in d) n.hasOwnProperty(i) && delete n[i];
                      return (
                        (n.className = t),
                        (n.onClick = this.handleClick),
                        o.default.createElement(e, n)
                      );
                    },
                  },
                ]),
                l
              );
            })(o.default.PureComponent),
            c = function () {
              var e = this;
              (this.scrollTo = function (t, i) {
                n.scrollTo(t, r({}, e.state, i));
              }),
                (this.handleClick = function (t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.spyHandler = function (t, r) {
                  var i = e.getScrollSpyContainer();
                  if (!u.default.isMounted() || u.default.isInitialized()) {
                    var o = e.props.horizontal,
                      a = e.props.to,
                      l = null,
                      s = void 0,
                      c = void 0;
                    if (o) {
                      var d = 0,
                        f = 0,
                        p = 0;
                      if (i.getBoundingClientRect)
                        p = i.getBoundingClientRect().left;
                      if (!l || e.props.isDynamic) {
                        if (!(l = n.get(a))) return;
                        var v = l.getBoundingClientRect();
                        f = (d = v.left - p + t) + v.width;
                      }
                      var h = t - e.props.offset;
                      (s = h >= Math.floor(d) && h < Math.floor(f)),
                        (c = h < Math.floor(d) || h >= Math.floor(f));
                    } else {
                      var m = 0,
                        g = 0,
                        y = 0;
                      if (i.getBoundingClientRect)
                        y = i.getBoundingClientRect().top;
                      if (!l || e.props.isDynamic) {
                        if (!(l = n.get(a))) return;
                        var b = l.getBoundingClientRect();
                        g = (m = b.top - y + r) + b.height;
                      }
                      var w = r - e.props.offset;
                      (s = w >= Math.floor(m) && w < Math.floor(g)),
                        (c = w < Math.floor(m) || w >= Math.floor(g));
                    }
                    var x = n.getActiveLink();
                    if (c) {
                      if (
                        (a === x && n.setActiveLink(void 0),
                        e.props.hashSpy && u.default.getHash() === a)
                      ) {
                        var S = e.props.saveHashHistory,
                          E = void 0 !== S && S;
                        u.default.changeHash("", E);
                      }
                      e.props.spy &&
                        e.state.active &&
                        (e.setState({ active: !1 }),
                        e.props.onSetInactive && e.props.onSetInactive(a, l));
                    }
                    if (s && (x !== a || !1 === e.state.active)) {
                      n.setActiveLink(a);
                      var k = e.props.saveHashHistory,
                        C = void 0 !== k && k;
                      e.props.hashSpy && u.default.changeHash(a, C),
                        e.props.spy &&
                          (e.setState({ active: !0 }),
                          e.props.onSetActive && e.props.onSetActive(a, l));
                    }
                  }
                });
            };
          return (s.propTypes = d), (s.defaultProps = { offset: 0 }), s;
        };
      },
      688: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          i = n(881),
          o = (r = i) && r.__esModule ? r : { default: r },
          a = n(360);
        var l = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (e, t) {
            if (e) {
              var n = (function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 66;
                return (0, o.default)(e, t);
              })(function (t) {
                l.scrollHandler(e);
              }, t);
              l.scrollSpyContainers.push(e),
                (0, a.addPassiveEventListener)(e, "scroll", n);
            }
          },
          isMounted: function (e) {
            return -1 !== l.scrollSpyContainers.indexOf(e);
          },
          currentPositionX: function (e) {
            if (e === document) {
              var t = void 0 !== window.pageYOffset,
                n = "CSS1Compat" === (document.compatMode || "");
              return t
                ? window.pageXOffset
                : n
                ? document.documentElement.scrollLeft
                : document.body.scrollLeft;
            }
            return e.scrollLeft;
          },
          currentPositionY: function (e) {
            if (e === document) {
              var t = void 0 !== window.pageXOffset,
                n = "CSS1Compat" === (document.compatMode || "");
              return t
                ? window.pageYOffset
                : n
                ? document.documentElement.scrollTop
                : document.body.scrollTop;
            }
            return e.scrollTop;
          },
          scrollHandler: function (e) {
            (
              l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)]
                .spyCallbacks || []
            ).forEach(function (t) {
              return t(l.currentPositionX(e), l.currentPositionY(e));
            });
          },
          addStateHandler: function (e) {
            l.spySetState.push(e);
          },
          addSpyHandler: function (e, t) {
            var n = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];
            n.spyCallbacks || (n.spyCallbacks = []),
              n.spyCallbacks.push(e),
              e(l.currentPositionX(t), l.currentPositionY(t));
          },
          updateStates: function () {
            l.spySetState.forEach(function (e) {
              return e();
            });
          },
          unmount: function (e, t) {
            l.scrollSpyContainers.forEach(function (e) {
              return (
                e.spyCallbacks &&
                e.spyCallbacks.length &&
                e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
              );
            }),
              l.spySetState &&
                l.spySetState.length &&
                l.spySetState.splice(l.spySetState.indexOf(e), 1),
              document.removeEventListener("scroll", l.scrollHandler);
          },
          update: function () {
            return l.scrollSpyContainers.forEach(function (e) {
              return l.scrollHandler(e);
            });
          },
        };
        t.default = l;
      },
      338: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = l(n(183)),
          o = l(n(102)),
          a = l(n(979));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = {},
          u = void 0;
        t.default = {
          unmount: function () {
            s = {};
          },
          register: function (e, t) {
            s[e] = t;
          },
          unregister: function (e) {
            delete s[e];
          },
          get: function (e) {
            return (
              s[e] ||
              document.getElementById(e) ||
              document.getElementsByName(e)[0] ||
              document.getElementsByClassName(e)[0]
            );
          },
          setActiveLink: function (e) {
            return (u = e);
          },
          getActiveLink: function () {
            return u;
          },
          scrollTo: function (e, t) {
            var n = this.get(e);
            if (n) {
              var l = (t = r({}, t, { absolute: !1 })).containerId,
                s = t.container,
                u = void 0;
              (u = l
                ? document.getElementById(l)
                : s && s.nodeType
                ? s
                : document),
                (t.absolute = !0);
              var c = t.horizontal,
                d = i.default.scrollOffset(u, n, c) + (t.offset || 0);
              if (!t.smooth)
                return (
                  a.default.registered.begin &&
                    a.default.registered.begin(e, n),
                  u === document
                    ? t.horizontal
                      ? window.scrollTo(d, 0)
                      : window.scrollTo(0, d)
                    : (u.scrollTop = d),
                  void (
                    a.default.registered.end && a.default.registered.end(e, n)
                  )
                );
              o.default.animateTopScroll(d, t, e, n);
            } else console.warn("target Element not found");
          },
        };
      },
      987: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            defaultEasing: function (e) {
              return e < 0.5
                ? Math.pow(2 * e, 2) / 2
                : 1 - Math.pow(2 * (1 - e), 2) / 2;
            },
            linear: function (e) {
              return e;
            },
            easeInQuad: function (e) {
              return e * e;
            },
            easeOutQuad: function (e) {
              return e * (2 - e);
            },
            easeInOutQuad: function (e) {
              return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
            },
            easeInCubic: function (e) {
              return e * e * e;
            },
            easeOutCubic: function (e) {
              return --e * e * e + 1;
            },
            easeInOutCubic: function (e) {
              return e < 0.5
                ? 4 * e * e * e
                : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
            },
            easeInQuart: function (e) {
              return e * e * e * e;
            },
            easeOutQuart: function (e) {
              return 1 - --e * e * e * e;
            },
            easeInOutQuart: function (e) {
              return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
            },
            easeInQuint: function (e) {
              return e * e * e * e * e;
            },
            easeOutQuint: function (e) {
              return 1 + --e * e * e * e * e;
            },
            easeInOutQuint: function (e) {
              return e < 0.5
                ? 16 * e * e * e * e * e
                : 1 + 16 * --e * e * e * e * e;
            },
          });
      },
      183: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function (e, t) {
          for (var n = e.offsetTop, r = e.offsetParent; r && !t(r); )
            (n += r.offsetTop), (r = r.offsetParent);
          return { offsetTop: n, offsetParent: r };
        };
        t.default = {
          updateHash: function (e, t) {
            var n = 0 === e.indexOf("#") ? e.substring(1) : e,
              r = n ? "#" + n : "",
              i = window && window.location,
              o = r ? i.pathname + i.search + r : i.pathname + i.search;
            t
              ? history.pushState(history.state, "", o)
              : history.replaceState(history.state, "", o);
          },
          getHash: function () {
            return window.location.hash.replace(/^#/, "");
          },
          filterElementInContainer: function (e) {
            return function (t) {
              return e.contains
                ? e != t && e.contains(t)
                : !!(16 & e.compareDocumentPosition(t));
            };
          },
          scrollOffset: function (e, t, r) {
            if (r)
              return e === document
                ? t.getBoundingClientRect().left +
                    (window.scrollX || window.pageXOffset)
                : "static" !== getComputedStyle(e).position
                ? t.offsetLeft
                : t.offsetLeft - e.offsetLeft;
            if (e === document)
              return (
                t.getBoundingClientRect().top +
                (window.scrollY || window.pageYOffset)
              );
            if ("static" !== getComputedStyle(e).position) {
              if (t.offsetParent !== e) {
                var i = n(t, function (t) {
                    return t === e || t === document;
                  }),
                  o = i.offsetTop;
                if (i.offsetParent !== e)
                  throw new Error(
                    "Seems containerElement is not an ancestor of the Element"
                  );
                return o;
              }
              return t.offsetTop;
            }
            if (t.offsetParent === e.offsetParent)
              return t.offsetTop - e.offsetTop;
            var a = function (e) {
              return e === document;
            };
            return n(t, a).offsetTop - n(e, a).offsetTop;
          },
        };
      },
      374: function (e, t, n) {
        "use strict";
        n(725);
        var r = n(791),
          i = 60103;
        if ((60107, "function" === typeof Symbol && Symbol.for)) {
          var o = Symbol.for;
          (i = o("react.element")), o("react.fragment");
        }
        var a =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: a.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t, n) {
        "use strict";
        var r = n(725),
          i = 60103,
          o = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var a = 60109,
          l = 60110,
          s = 60112;
        t.Suspense = 60113;
        var u = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (i = d("react.element")),
            (o = d("react.portal")),
            (t.Fragment = d("react.fragment")),
            (t.StrictMode = d("react.strict_mode")),
            (t.Profiler = d("react.profiler")),
            (a = d("react.provider")),
            (l = d("react.context")),
            (s = d("react.forward_ref")),
            (t.Suspense = d("react.suspense")),
            (u = d("react.memo")),
            (c = d("react.lazy"));
        }
        var f = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || v);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || v);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = m.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, m.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          x = Object.prototype.hasOwnProperty,
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            o = {},
            a = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              x.call(t, r) && !S.hasOwnProperty(r) && (o[r] = t[r]);
          var s = arguments.length - 2;
          if (1 === s) o.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (r in (s = e.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
          return {
            $$typeof: i,
            type: e,
            key: a,
            ref: l,
            props: o,
            _owner: w.current,
          };
        }
        function k(e) {
          return "object" === typeof e && null !== e && e.$$typeof === i;
        }
        var C = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, n, r, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case o:
                    s = !0;
                }
            }
          if (s)
            return (
              (a = a((s = e))),
              (e = "" === r ? "." + T(s, 0) : r),
              Array.isArray(a)
                ? ((n = ""),
                  null != e && (n = e.replace(C, "$&/") + "/"),
                  P(a, t, n, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (k(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      n +
                        (!a.key || (s && s.key === a.key)
                          ? ""
                          : ("" + a.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var c = r + T((l = e[u]), u);
              s += P(l, t, n, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += P((l = l.value), t, n, (c = r + T(l, u++)), a);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var M = { current: null };
        function _() {
          var e = M.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var j = {
          ReactCurrentDispatcher: M,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!k(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = m),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var o = r({}, e.props),
              a = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = w.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
              o.children = u;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: a,
              ref: l,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = k),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return _().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return _().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return _().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _().useRef(e);
          }),
          (t.useState = function (e) {
            return _().useState(e);
          }),
          (t.version = "17.0.2");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        var n, r, i, o;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var u = null,
            c = null,
            d = function e() {
              if (null !== u)
                try {
                  var n = t.unstable_now();
                  u(!0, n), (u = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (i = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (o = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var v = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof v &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var h = !1,
            m = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (o = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            x = w.port2;
          (w.port1.onmessage = function () {
            if (null !== m) {
              var e = t.unstable_now();
              b = e + y;
              try {
                m(!0, e) ? x.postMessage(null) : ((h = !1), (m = null));
              } catch (n) {
                throw (x.postMessage(null), n);
              }
            } else h = !1;
          }),
            (n = function (e) {
              (m = e), h || ((h = !0), x.postMessage(null));
            }),
            (r = function (e, n) {
              g = f(function () {
                e(t.unstable_now());
              }, n);
            }),
            (i = function () {
              p(g), (g = -1);
            });
        }
        function S(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(void 0 !== i && 0 < C(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function k(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, i = e.length; r < i; ) {
                var o = 2 * (r + 1) - 1,
                  a = e[o],
                  l = o + 1,
                  s = e[l];
                if (void 0 !== a && 0 > C(a, n))
                  void 0 !== s && 0 > C(s, a)
                    ? ((e[r] = s), (e[l] = n), (r = l))
                    : ((e[r] = a), (e[o] = n), (r = o));
                else {
                  if (!(void 0 !== s && 0 > C(s, n))) break e;
                  (e[r] = s), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var T = [],
          P = [],
          O = 1,
          A = null,
          M = 3,
          _ = !1,
          j = !1,
          L = !1;
        function N(e) {
          for (var t = E(P); null !== t; ) {
            if (null === t.callback) k(P);
            else {
              if (!(t.startTime <= e)) break;
              k(P), (t.sortIndex = t.expirationTime), S(T, t);
            }
            t = E(P);
          }
        }
        function I(e) {
          if (((L = !1), N(e), !j))
            if (null !== E(T)) (j = !0), n(R);
            else {
              var t = E(P);
              null !== t && r(I, t.startTime - e);
            }
        }
        function R(e, n) {
          (j = !1), L && ((L = !1), i()), (_ = !0);
          var o = M;
          try {
            for (
              N(n), A = E(T);
              null !== A &&
              (!(A.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var a = A.callback;
              if ("function" === typeof a) {
                (A.callback = null), (M = A.priorityLevel);
                var l = a(A.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (A.callback = l)
                    : A === E(T) && k(T),
                  N(n);
              } else k(T);
              A = E(T);
            }
            if (null !== A) var s = !0;
            else {
              var u = E(P);
              null !== u && r(I, u.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (A = null), (M = o), (_ = !1);
          }
        }
        var D = o;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            j || _ || ((j = !0), n(R));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(T);
          }),
          (t.unstable_next = function (e) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = M;
            }
            var n = M;
            M = t;
            try {
              return e();
            } finally {
              M = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = D),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = M;
            M = e;
            try {
              return t();
            } finally {
              M = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? l + a : l)
                : (a = l),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: O++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > l
                ? ((e.sortIndex = a),
                  S(P, e),
                  null === E(T) &&
                    e === E(P) &&
                    (L ? i() : (L = !0), r(I, a - l)))
                : ((e.sortIndex = s), S(T, e), j || _ || ((j = !0), n(R))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = M;
            return function () {
              var n = M;
              M = t;
              try {
                return e.apply(this, arguments);
              } finally {
                M = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      520: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/resume.23f6687b9fc4835c67e9.pdf";
      },
      462: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/1.12c5c90b185da7f4ed9c.jpeg";
      },
      687: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/10.4b1e36deac9d55098f2f.jpg";
      },
      89: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/5.905a5c0fa1912b05bc5a.jpeg";
      },
      567: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/6.713033f8ec361c7d5620.jpeg";
      },
      411: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/8.1a17b3ddaeb14f2423e0.jpeg";
      },
      593: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/crown.dbe416beae9b49b842ab.png";
      },
      61: function (e) {
        "use strict";
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABaCAYAAADNVsqyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlYSURBVHgB7Z1LWhtHEMerekbC2SnrJDCcwHACixMEvqwMyWc4gfEJgBNgn0D4c4SzyRfnBFFOEHICDyR7k1WMNNOVqh6JDHrNo1vSSPZvYes5Hv2npru6Hm2EikKtoPERoOH7UYAeNoCgYd5AuKWYbuVhFPnhF0dhCBUFoQJ0219tAXlND+ExIG4RQcBn1sj7ff4RVwQQak2/I+mr2g9/d6ACLERcscrIj7aUUs8IcLeIkAXoAOnXva7XWZR1z1Xc3puvm6qmvqUYD2ck6CSM0P7BXxcwR+YiroiKnnfCD5uwWEIW+Wxe1jxTcY2let45j4dbUC1CRLrwnt6cwQyZibjddrClkM5h8ZaahbHkWQ0XTsWViUo/0s+J8BSWCLHi7kd15nqocCbuv60gqK/RLxUcAvLi3IoVOCBuB89rdfpjiYUV2LdWrfin9XNwhLXlxpfrPGHhMawQsijp3uGe7TBRWlwZX+NH+hyIfdbVJOzd4Y6NwKXENRPXGv225MNAHqwELizuJyTsgNICF57QPjFhhaDGv1m8IShIIXGTyeuTEnaAEVju2iJfyi1u/DY4WTWvoCBBzH58kS/kEje6/GaXiE7hM80ifnDmhNZfeck4G8BnDBTHO3kC8pniRpcbv0GBAIw44JroV4nXIuBjqGjwBs1ylzoa4JqfNhDxeYGv33p3uIlH4e20D/nT3oza3xxCQXF0HL9IX1Wz2KjDLgdHni98MiTOvwG+Ag0d/4ewk36LjaiIITR4/G3x33vTPjTRcksOB7f+/vWXk97svQk4vkutuQ8xfVH9LrycZG3dH4NjpahQXCFreJhoubVH+oRDhwEU+ceQfp/2fi2xls2oHRyyJZ9kisyiIGd7+RGLA/eisEWIS9TIc5EknKju1IusWxh6nApag0JwdqXFd+b2pGOPtVyxWvbr3kNB2KM4qx3cnOb57L9vg8AjfaoAn4mIfCacwaU/kehKg3dV63K2IEuQ/rn6PgSEwAlPesI/aKsvesi5uqPa0O0/DR4aCAoy7TePFTd6u94qE5DRpI/qBeOhkrXIK+SsjxlfbrwvMWRNnNxGhgUZF/lyHEIJUFMIBakfhFfgGItjlrnAjaiuZXF1OvzGyCICff0MPlGonLggbty4pfEDcU1wwiI+SwoDWGL6E2UZGr01fTj84gNxxUMAGxDnWejhHFNGVRKemL8dfS0FEjbBAlziJbK5re2qgJpSp5F+4V7c6A0HZyzF4av3BJaU2I+bYIundtNP/7dcf9SsiyLL26Ixz6rA80UTLEHx2VP8L67GXbBEHGqX/uo8iZR6aRYzdjTSQ4MR1/i29lWHYd7VWRX54innyDQegS1KNe8fJn/qJljSQ9yBJYcjZe9Ayk0tYJ/3ft5Rwy+UOyBdmCu/AnA8wrbysTmYdxLLJbs4q470a1gR+oGeDlggVfPyt+q2gi3L8TasSg+CK2ytlzyViKv8OAAL2ENYGasd4EdwZeM5mMYZRrF/Z5d60boDK4ZxJzm+DGWhRFPFQeYALPAj33nIsArwHfknlGSw0lW8ZN2AkkgGdVkXDVkgkI3RJN6CRZhNrlAIq4q2W63Rz5sb4ootdZhwVhB4VuL2PtKX6nMlzWxAHTWc9ER8ZjxW4uIKDykIsfVvs7Xc1R2vFSxW3FUerwkwAEsUWrpT4nLACmK7uCLl31pPaPEdbcMKYrO4EmqP8IOyXQho0AGsJk2wAL97f6000DVYMC5fv+yYtJcdZgGikKyXsEub8Z2I0rbJWhOX4AmtePHcEI1ePbbOHFcJhXZ3IyH9Y47TU14HLFGoVqZ4T4YEWxeTKEkTKZNYtM/Xj5TyLCsuqjwx1smwkDyziLoPDphsELTUSNG0iy78QU7RiKs1/gr2NLuX68ewxHhYrENyAp3Bg6RugewtNzkYnpRpQK4CSfut/XKe00P3TTdGXJOrtx93hUbZDu9FYoR11X6bStjeL38JnKXIg2US2KmwQzUcqSpH9Q7cYQTud2BWErOf5Nv1lsuGcUTqPHiefhK1Nz643mNxVnt22SBd+Ajq3HXIVBNupzuJHojbawen0tk45ftm7y15QIhbElfIe4KLFlkstVfTh0qZ1VcTHCMN5d7+9fbQaw9PIF6jD5MOwOPyq9r+zQN3K3eraeokYk2v57HPbdLUHbOV4pMZbiXb/8fwyD8IL9IvjXRQRpcb4utNjBVwFO1Fff/mZfo1aTWtU4nd8PptqajoKo7gutZTFzZFJtLXgTUWUmOQalOdB6G/f705/OJIsJxifAVT4KHgfHi3DFlCqzvcKZzVSCypyWIcex48tq3ekVoDORY/3J2jsGxw4zUbETdPfar8gKi93kq/JsLouHTZe9gFZVt0bM6dZ/9XMF/CGGGspzU2zdPDHCIhHg4vd/sXprhLR3jmqjLd76pTRwuifEw597HiyofzWIAMEcPRMO8Oj4oODz1lV8mdxtxBSC5iJXkIhyexNBMTlHktYDgaJj+ui/nHX/EeXPdTKHrozM8Mml6BPlFcM7nkax0aieWKWN2kuydziGArs8rhjcNFAiAL8dunWa0wNbXebx3KFGhcLFcEZvdkj72PHXbfXj+w5OSO6IhvWHt64zxFNIfOolwTMGZ9oL8x5h9Zrs3w0m/RlNlSJT+45++HmUaXWRSS18VS05fNK4O04OYRVshVcSMuFmcrXmR8bJcug1XfZeRdkRbc3OVM9e/Dl1nuWQwcnFnyVM8UQnEzi3yhUK0YX7VjnRFUN8tjjpMua7pnAqH0NhddnmdOaONg67xQQ3sLTDj4FTudHQnKKEWh/Fdbg/9+S0o0+cpuEDv8/v5fLgP1BocTmhG2jAfiQwk4KiZLX8gS2ETJNMd9kzQou2z9NzC5qvLrNU3fRW/BlBZWKF1CKgIvIEgyT6yEFazqc2UMJrJuoa8iHZ68tm0XI9bFz7WD8BRi3LOtUK8Kkm3hleWOi85QJ61SskzuB2uKr9CqsheZbAPLS/XhNJYNzvrQ5BaSBJ0ZJgrEU5Eq0RH0zuviZpEdS/PgvMlPhomewm0Ni9uHQXJ6OT8q28DuSIBpFg3iM+mgFCs23kRswo4dqBoyBPAdJklF19aaZqbtqXLiMjlMExlROY+kTak5DkVUMwTIRDxjSq3QyjLY7dmTOgIeayUdIxYOM6DbDg49qaeQMV12lY7xbJZWOo7/AKD5XwEuQvnFAAAAAElFTkSuQmCC";
      },
      733: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/glasses.71d7c1b0ff0b870a9d7d.png";
      },
      217: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/glassesimoji.a08bdab12e8eb56a6874.png";
      },
      840: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/heartemoji.26b1b6ed5e0e44083b28.png";
      },
      279: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/humble.c8b32b53675e68978981.png";
      },
      477: function (e) {
        "use strict";
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABWCAYAAAC6lArJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARGSURBVHgB7ZxBchpHFIb/19Mj5FXYJ5bHJwg5QaQTWK6sYpUrcAKRE8g+QZwTIFcKK7s4JzA+QcgJPK5kH3uVMkz3c/dIYCGDPIJuqdx+3wIoMUPBx6P79es3IqyAB0V7mtuuUvQ9AR0GitMn8AaEMSke26n9M3/47wjCUujiH7xU27JHDOqjGaPpO+rd6pUlhAUW5P4/KIqtFr+YR2lz3mTuy6AH5VMIc+ZyNxA7h43Zk2HiA2r2IG/xYBOxHsqyP/ywAqGmllsNb3fd3S42p11t2aZjdfKcRi6pnxAIIjqEUDMbFnYRjvZkWHQgQE0GMUQYketQpBF8AiJQAeFDtiCER1UaJQLD5JbIAtStH92ylcPKIGPHEGapGELKKGWVdkotlw09RiCYWeoLZ9Ry84flyN2NsDmlnqgnEGrm2cKUqOeqOCXWxY3bluk+9UqZzM5YLDmeuMoYr1EZ82JBe1sHpUxk51jIc33moN7Rd8zNx2AiPs4mdFfEfgytesJHcW5dzYH4Hp1G8nwl5yJ7bC29zKc4lmFAEARBEARhXQhfIJPh1x0F1WFQoTJ8BePSzMwthAzeslsQEdtxVely00aXWq7fDq90FWRrRld63CT39X0SWlcFAvCpKpz/fGbL7NcbsYyO+9RNd19Kt0ga2co+XafSp/2NK5h3KMteIAAVqj00KAJlOfZJZb8gDEt/gXVr1rY9NJb7Tmx79ZErKdxqtevcdKtnd1zd2z7WB/8cNz35xrZ5FJmoK7vpb9/s2hb/5eQ8ukKkXkbhvqCBk/zKv3aTE5LcQzPD4tD/EjftIFpB4V/bnOwcferA5OSak+KIiaPXlP0vohruDC47Jim5tVjmR7guiLqXCU5GbvXs9v61ip3hBJvfd5ZOzEnI9WkdQYXKPK4MW+ovm+SSkJtv+074KJNXY9wkN7jYPpvGsOByUdw8xcX2WWlnCohvnz0fvSI3LAvN3yI3MOebv0VueNqzzEEjdXwJEfzcEt76xy6a7jBRgbDd9Itkat/djlKWO/I9cGetWh/hWwe0Rd+VFINfw6FA99xdP71hwbfDMvX0g9d7q8R6fANMflD2p0R3N2rjWvoWXKnSZQ1pyT1rq9IH5XHTU7xkw3Q/dI+yaWE3sciln9dpq/LnuC2fXxEQC1skI9f3rF0lYi+iJ3gSMnozwrfJyJ1AbdTA7ff9Qkavq/emEbk+autrOzbFBmkAr/HNi0nIZateIgB1dhFwaEhCrkW4C2aIwqRlnErk5tv0HwJhwH8jEGmMuT+8eo1AkAwLURG5nwMiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyIiNyI3Jtf/2ykkjkRuRERuRERuROrLU3WFsVG2hwBUWpdNjmOo58Sm0bHXScj39R4fnYFD7qnNfQAAAABJRU5ErkJggg==";
      },
      816: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/thumbup.e06790ba656f0397cbe5.png";
      },
      52: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/wave.fdfef4069ad90f610990.png";
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/personal-portfolio/"),
    (function () {
      "use strict";
      var e = n(791),
        t = n(164);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var l = n(60),
        s = n(7),
        u = n.n(s),
        c = ["color", "size"],
        d = function (e) {
          var t = e.color,
            n = e.size,
            r = a(e, c);
          return l.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: t,
              },
              r
            ),
            l.createElement("path", {
              d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
            })
          );
        };
      (d.propTypes = {
        color: u().string,
        size: u().oneOfType([u().string, u().number]),
      }),
        (d.defaultProps = { color: "currentColor", size: "24" });
      var f = d,
        p = ["color", "size"],
        v = function (e) {
          var t = e.color,
            n = e.size,
            r = a(e, p);
          return l.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: t,
              },
              r
            ),
            l.createElement("path", {
              d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
            })
          );
        };
      (v.propTypes = {
        color: u().string,
        size: u().oneOfType([u().string, u().number]),
      }),
        (v.defaultProps = { color: "currentColor", size: "24" });
      var h = v;
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function g(e, t) {
        if (e) {
          if ("string" === typeof e) return m(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? m(e, t)
              : void 0
          );
        }
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                a = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (s) {
                (l = !0), (i = s);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (l) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          g(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var b = n(184),
        w = (0, e.createContext)(),
        x = { darkMode: !1 },
        S = function (e, t) {
          return "toggle" === t.type ? { darkMode: !e.darkMode } : e;
        },
        E = function (t) {
          var n = y((0, e.useReducer)(S, x), 2),
            r = n[0],
            i = n[1];
          return (0, b.jsx)(w.Provider, {
            value: { state: r, dispatch: i },
            children: t.children,
          });
        },
        k = function () {
          var t = (0, e.useContext)(w),
            n = t.state.darkMode;
          return (0, b.jsxs)("div", {
            className: "toggle",
            onClick: function () {
              t.dispatch({ type: "toggle" });
            },
            children: [
              (0, b.jsx)(f, {}),
              (0, b.jsx)(h, {}),
              (0, b.jsx)("div", {
                className: "t-button",
                style: n ? { left: "2px" } : { right: "2px" },
              }),
            ],
          });
        },
        C = n(667),
        T = function () {
          return (0, b.jsxs)("div", {
            className: "n-wrapper",
            id: "Navbar",
            children: [
              (0, b.jsxs)("div", {
                className: "n-left",
                children: [
                  (0, b.jsx)("div", { className: "n-name", children: "Emile" }),
                  (0, b.jsx)(k, {}),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "n-right",
                children: [
                  (0, b.jsx)("div", {
                    className: "n-list",
                    children: (0, b.jsxs)("ul", {
                      style: { listStyleType: "none" },
                      children: [
                        (0, b.jsx)("li", {
                          children: (0, b.jsx)(C.rU, {
                            activeClass: "active",
                            to: "Navbar",
                            spy: !0,
                            smooth: !0,
                            children: "Home",
                          }),
                        }),
                        (0, b.jsx)("li", {
                          children: (0, b.jsx)(C.rU, {
                            to: "services",
                            spy: !0,
                            smooth: !0,
                            children: "Serivces",
                          }),
                        }),
                        (0, b.jsx)("li", {
                          children: (0, b.jsx)(C.rU, {
                            to: "portfolio",
                            spy: !0,
                            smooth: !0,
                            children: "Protfolio",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, b.jsx)(C.rU, {
                    to: "contact",
                    spy: !0,
                    smooth: !0,
                    children: (0, b.jsx)("button", {
                      className: "button n-button",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        P = n(687),
        O = n(217),
        A = n(816),
        M = n(593),
        _ = function (e) {
          var t = e.img,
            n = e.text1,
            r = e.text2;
          return (0, b.jsxs)("div", {
            className: "floatingDiv",
            children: [
              (0, b.jsx)("img", { src: t, alt: "" }),
              (0, b.jsxs)("span", { children: [n, (0, b.jsx)("br", {}), r] }),
            ],
          });
        },
        j = n(61),
        L = n(477),
        N = function (e, t) {
          return (
            (N =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            N(e, t)
          );
        };
      function I(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        N(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var R = function () {
        return (
          (R =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          R.apply(this, arguments)
        );
      };
      function D(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      Object.create;
      function z(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function V(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var F = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        B = {
          measureLayout: F(["layout", "layoutId", "drag"]),
          animation: F([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: F(["exit"]),
          drag: F(["drag", "dragControls"]),
          focus: F(["whileFocus"]),
          hover: F(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: F(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: F(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: F(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var U = (0, e.createContext)({ strict: !1 }),
        H = Object.keys(B),
        W = H.length;
      var G = (0, e.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        X = (0, e.createContext)({});
      var q = (0, e.createContext)(null),
        Y = "undefined" !== typeof window,
        $ = Y ? e.useLayoutEffect : e.useEffect,
        Q = { current: null },
        K = !1;
      function Z() {
        return (
          !K &&
            (function () {
              if (((K = !0), "undefined" !== typeof window))
                if (window.matchMedia) {
                  var e = window.matchMedia("(prefers-reduced-motion)"),
                    t = function () {
                      return (Q.current = e.matches);
                    };
                  e.addListener(t), t();
                } else Q.current = !1;
            })(),
          z((0, e.useState)(Q.current), 1)[0]
        );
      }
      function J(t, n, r, i) {
        var o = (0, e.useContext)(U),
          a = (0, e.useContext)(X).visualElement,
          l = (0, e.useContext)(q),
          s = (function () {
            var t = Z(),
              n = (0, e.useContext)(G).reducedMotion;
            return "never" !== n && ("always" === n || t);
          })(),
          u = (0, e.useRef)(void 0);
        i || (i = o.renderer),
          !u.current &&
            i &&
            (u.current = i(t, {
              visualState: n,
              parent: a,
              props: r,
              presenceId: null === l || void 0 === l ? void 0 : l.id,
              blockInitialAnimation:
                !1 === (null === l || void 0 === l ? void 0 : l.initial),
              shouldReduceMotion: s,
            }));
        var c = u.current;
        return (
          $(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, e.useEffect)(function () {
            var e;
            null ===
              (e = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === e ||
              e.animateChanges();
          }),
          $(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function ee(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function te(e) {
        return Array.isArray(e);
      }
      function ne(e) {
        return "string" === typeof e || te(e);
      }
      function re(e, t, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof t &&
            (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
          "string" === typeof t &&
            (t = null === (o = e.variants) || void 0 === o ? void 0 : o[t]),
          "function" === typeof t &&
            (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
          t
        );
      }
      function ie(e, t, n) {
        var r = e.getProps();
        return re(
          r,
          t,
          null !== n && void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      function oe(e) {
        var t;
        return (
          "function" ===
            typeof (null === (t = e.animate) || void 0 === t
              ? void 0
              : t.start) ||
          ne(e.initial) ||
          ne(e.animate) ||
          ne(e.whileHover) ||
          ne(e.whileDrag) ||
          ne(e.whileTap) ||
          ne(e.whileFocus) ||
          ne(e.exit)
        );
      }
      function ae(e) {
        return Boolean(oe(e) || e.variants);
      }
      function le(t) {
        var n = (function (e, t) {
            if (oe(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || ne(n) ? n : void 0,
                animate: ne(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(t, (0, e.useContext)(X)),
          r = n.initial,
          i = n.animate;
        return (0, e.useMemo)(
          function () {
            return { initial: r, animate: i };
          },
          [se(r), se(i)]
        );
      }
      function se(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      function ue(t) {
        var n = (0, e.useRef)(null);
        return null === n.current && (n.current = t()), n.current;
      }
      var ce = (1 / 60) * 1e3,
        de =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        fe =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(de());
                }, ce);
              };
      var pe = !0,
        ve = !1,
        he = !1,
        me = { delta: 0, timestamp: 0 },
        ge = ["read", "update", "preRender", "render", "postRender"],
        ye = ge.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                i = !1,
                o = !1,
                a = new WeakSet(),
                l = {
                  schedule: function (e) {
                    var o =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        i,
                      l = o ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        a.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), o && i && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), a.delete(e);
                  },
                  process: function (s) {
                    if (i) o = !0;
                    else {
                      i = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var d = t[c];
                          d(s), a.has(d) && (l.schedule(d), e());
                        }
                      (i = !1), o && ((o = !1), l.process(s));
                    }
                  },
                };
              return l;
            })(function () {
              return (ve = !0);
            })),
            e
          );
        }, {}),
        be = ge.reduce(function (e, t) {
          var n = ye[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return ve || ke(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        we = ge.reduce(function (e, t) {
          return (e[t] = ye[t].cancel), e;
        }, {}),
        xe = ge.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return ye[t].process(me);
            }),
            e
          );
        }, {}),
        Se = function (e) {
          return ye[e].process(me);
        },
        Ee = function e(t) {
          (ve = !1),
            (me.delta = pe ? ce : Math.max(Math.min(t - me.timestamp, 40), 1)),
            (me.timestamp = t),
            (he = !0),
            ge.forEach(Se),
            (he = !1),
            ve && ((pe = !1), fe(e));
        },
        ke = function () {
          (ve = !0), (pe = !0), he || fe(Ee);
        },
        Ce = function () {
          return me;
        },
        Te = be,
        Pe = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function Oe(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      function Ae(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Me(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var _e = (function () {
          function e() {
            this.subscriptions = [];
          }
          return (
            (e.prototype.add = function (e) {
              var t = this;
              return (
                Ae(this.subscriptions, e),
                function () {
                  return Me(t.subscriptions, e);
                }
              );
            }),
            (e.prototype.notify = function (e, t, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(e, t, n);
                  }
            }),
            (e.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (e.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            e
          );
        })(),
        je = (function () {
          function e(e) {
            var t = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new _e()),
              (this.velocityUpdateSubscribers = new _e()),
              (this.renderSubscribers = new _e()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (e, n) {
                void 0 === n && (n = !0), (t.prev = t.current), (t.current = e);
                var r = Ce(),
                  i = r.delta,
                  o = r.timestamp;
                t.lastUpdated !== o &&
                  ((t.timeDelta = i),
                  (t.lastUpdated = o),
                  Te.postRender(t.scheduleVelocityCheck)),
                  t.prev !== t.current && t.updateSubscribers.notify(t.current),
                  t.velocityUpdateSubscribers.getSize() &&
                    t.velocityUpdateSubscribers.notify(t.getVelocity()),
                  n && t.renderSubscribers.notify(t.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Te.postRender(t.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== t.lastUpdated &&
                  ((t.prev = t.current),
                  t.velocityUpdateSubscribers.notify(t.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity = (function (e) {
                return !isNaN(parseFloat(e));
              })(this.current));
          }
          return (
            (e.prototype.onChange = function (e) {
              return this.updateSubscribers.add(e);
            }),
            (e.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (e.prototype.onRenderRequest = function (e) {
              return e(this.get()), this.renderSubscribers.add(e);
            }),
            (e.prototype.attach = function (e) {
              this.passiveEffect = e;
            }),
            (e.prototype.set = function (e, t) {
              void 0 === t && (t = !0),
                t && this.passiveEffect
                  ? this.passiveEffect(e, this.updateAndNotify)
                  : this.updateAndNotify(e, t);
            }),
            (e.prototype.get = function () {
              return this.current;
            }),
            (e.prototype.getPrevious = function () {
              return this.prev;
            }),
            (e.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Oe(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (e.prototype.start = function (e) {
              var t = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (t.hasAnimated = !0), (t.stopAnimation = e(n));
                }).then(function () {
                  return t.clearAnimation();
                })
              );
            }),
            (e.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (e.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (e.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (e.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            e
          );
        })();
      function Le(e) {
        return new je(e);
      }
      var Ne = function (e) {
        return Boolean(null !== e && "object" === typeof e && e.getVelocity);
      };
      var Ie = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        Re = 0.001;
      function De(e) {
        var t,
          n,
          r = e.duration,
          i = void 0 === r ? 800 : r,
          o = e.bounce,
          a = void 0 === o ? 0.25 : o,
          l = e.velocity,
          s = void 0 === l ? 0 : l,
          u = e.mass,
          c = void 0 === u ? 1 : u,
          d = 1 - a;
        (d = Ie(0.05, 1, d)),
          (i = Ie(0.01, 10, i / 1e3)),
          d < 1
            ? ((t = function (e) {
                var t = e * d,
                  n = t * i,
                  r = t - s,
                  o = ze(e, d),
                  a = Math.exp(-n);
                return Re - (r / o) * a;
              }),
              (n = function (e) {
                var n = e * d * i,
                  r = n * s + s,
                  o = Math.pow(d, 2) * Math.pow(e, 2) * i,
                  a = Math.exp(-n),
                  l = ze(Math.pow(e, 2), d);
                return ((-t(e) + Re > 0 ? -1 : 1) * ((r - o) * a)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * i) * ((e - s) * i + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * i) * (i * i * (s - e));
              }));
        var f = (function (e, t, n) {
          for (var r = n, i = 1; i < 12; i++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / i);
        if (((i *= 1e3), isNaN(f)))
          return { stiffness: 100, damping: 10, duration: i };
        var p = Math.pow(f, 2) * c;
        return { stiffness: p, damping: 2 * d * Math.sqrt(c * p), duration: i };
      }
      function ze(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var Ve = ["duration", "bounce"],
        Fe = ["stiffness", "damping", "mass"];
      function Be(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function Ue(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          i = void 0 === r ? 1 : r,
          o = e.restSpeed,
          a = void 0 === o ? 2 : o,
          l = e.restDelta,
          s = D(e, ["from", "to", "restSpeed", "restDelta"]),
          u = { done: !1, value: n },
          c = (function (e) {
            var t = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!Be(e, Fe) && Be(e, Ve)) {
              var n = De(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(s),
          d = c.stiffness,
          f = c.damping,
          p = c.mass,
          v = c.velocity,
          h = c.duration,
          m = c.isResolvedFromDuration,
          g = He,
          y = He;
        function b() {
          var e = v ? -v / 1e3 : 0,
            t = i - n,
            r = f / (2 * Math.sqrt(d * p)),
            o = Math.sqrt(d / p) / 1e3;
          if (
            (void 0 === l && (l = Math.min(Math.abs(i - n) / 100, 0.4)), r < 1)
          ) {
            var a = ze(o, r);
            (g = function (n) {
              var l = Math.exp(-r * o * n);
              return (
                i -
                l *
                  (((e + r * o * t) / a) * Math.sin(a * n) +
                    t * Math.cos(a * n))
              );
            }),
              (y = function (n) {
                var i = Math.exp(-r * o * n);
                return (
                  r *
                    o *
                    i *
                    ((Math.sin(a * n) * (e + r * o * t)) / a +
                      t * Math.cos(a * n)) -
                  i *
                    (Math.cos(a * n) * (e + r * o * t) -
                      a * t * Math.sin(a * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return i - Math.exp(-o * n) * (t + (e + o * t) * n);
            };
          else {
            var s = o * Math.sqrt(r * r - 1);
            g = function (n) {
              var a = Math.exp(-r * o * n),
                l = Math.min(s * n, 300);
              return (
                i -
                (a * ((e + r * o * t) * Math.sinh(l) + s * t * Math.cosh(l))) /
                  s
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (e) {
              var t = g(e);
              if (m) u.done = e >= h;
              else {
                var n = 1e3 * y(e),
                  r = Math.abs(n) <= a,
                  o = Math.abs(i - t) <= l;
                u.done = r && o;
              }
              return (u.value = u.done ? i : t), u;
            },
            flipTarget: function () {
              v = -v;
              var e = [i, n];
              (n = e[0]), (i = e[1]), b();
            },
          }
        );
      }
      Ue.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var He = function (e) {
          return 0;
        },
        We = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        Ge = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e);
          };
        },
        Xe = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e;
        },
        qe = /(-)?([\d]*\.?[\d])+/g,
        Ye =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        $e =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function Qe(e) {
        return "string" === typeof e;
      }
      var Ke = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Ze = Object.assign(Object.assign({}, Ke), { transform: Ge(0, 1) }),
        Je = Object.assign(Object.assign({}, Ke), { default: 1 }),
        et = function (e, t) {
          return function (n) {
            return Boolean(
              (Qe(n) && $e.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        tt = function (e, t, n) {
          return function (i) {
            var o;
            if (!Qe(i)) return i;
            var a = y(i.match(qe), 4),
              l = a[0],
              s = a[1],
              u = a[2],
              c = a[3];
            return (
              r((o = {}), e, parseFloat(l)),
              r(o, t, parseFloat(s)),
              r(o, n, parseFloat(u)),
              r(o, "alpha", void 0 !== c ? parseFloat(c) : 1),
              o
            );
          };
        },
        nt = Ge(0, 255),
        rt = Object.assign(Object.assign({}, Ke), {
          transform: function (e) {
            return Math.round(nt(e));
          },
        }),
        it = {
          test: et("rgb", "red"),
          parse: tt("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              i = e.alpha,
              o = void 0 === i ? 1 : i;
            return (
              "rgba(" +
              rt.transform(t) +
              ", " +
              rt.transform(n) +
              ", " +
              rt.transform(r) +
              ", " +
              Xe(Ze.transform(o)) +
              ")"
            );
          },
        };
      var ot = {
          test: et("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substr(1, 2)),
                  (n = e.substr(3, 2)),
                  (r = e.substr(5, 2)),
                  (i = e.substr(7, 2)))
                : ((t = e.substr(1, 1)),
                  (n = e.substr(2, 1)),
                  (r = e.substr(3, 1)),
                  (i = e.substr(4, 1)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: it.transform,
        },
        at = function (e) {
          return {
            test: function (t) {
              return Qe(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        lt = at("deg"),
        st = at("%"),
        ut = at("px"),
        ct = at("vh"),
        dt = at("vw"),
        ft = Object.assign(Object.assign({}, st), {
          parse: function (e) {
            return st.parse(e) / 100;
          },
          transform: function (e) {
            return st.transform(100 * e);
          },
        }),
        pt = {
          test: et("hsl", "hue"),
          parse: tt("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              i = e.alpha,
              o = void 0 === i ? 1 : i;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              st.transform(Xe(n)) +
              ", " +
              st.transform(Xe(r)) +
              ", " +
              Xe(Ze.transform(o)) +
              ")"
            );
          },
        };
      function vt(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function ht(e) {
        var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          i = e.alpha;
        (t /= 360), (r /= 100);
        var o = 0,
          a = 0,
          l = 0;
        if ((n /= 100)) {
          var s = r < 0.5 ? r * (1 + n) : r + n - r * n,
            u = 2 * r - s;
          (o = vt(u, s, t + 1 / 3)),
            (a = vt(u, s, t)),
            (l = vt(u, s, t - 1 / 3));
        } else o = a = l = r;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * a),
          blue: Math.round(255 * l),
          alpha: i,
        };
      }
      var mt = function (e, t, n) {
          var r = e * e,
            i = t * t;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        gt = [ot, it, pt],
        yt = function (e) {
          return gt.find(function (t) {
            return t.test(e);
          });
        },
        bt = function (e) {
          return "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        wt = function (e, t) {
          var n = yt(e),
            r = yt(t);
          bt(e), bt(t);
          var i = n.parse(e),
            o = r.parse(t);
          n === pt && ((i = ht(i)), (n = it)),
            r === pt && ((o = ht(o)), (r = it));
          var a = Object.assign({}, i);
          return function (e) {
            for (var t in a) "alpha" !== t && (a[t] = mt(i[t], o[t], e));
            return (a.alpha = Pe(i.alpha, o.alpha, e)), n.transform(a);
          };
        };
      function xt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          g(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var St = {
          test: function (e) {
            return it.test(e) || ot.test(e) || pt.test(e);
          },
          parse: function (e) {
            return it.test(e)
              ? it.parse(e)
              : pt.test(e)
              ? pt.parse(e)
              : ot.parse(e);
          },
          transform: function (e) {
            return Qe(e)
              ? e
              : e.hasOwnProperty("red")
              ? it.transform(e)
              : pt.transform(e);
          },
        },
        Et = "${c}",
        kt = "${n}";
      function Ct(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = e.match(Ye);
        r &&
          ((n = r.length),
          (e = e.replace(Ye, Et)),
          t.push.apply(t, xt(r.map(St.parse))));
        var i = e.match(qe);
        return (
          i && ((e = e.replace(qe, kt)), t.push.apply(t, xt(i.map(Ke.parse)))),
          { values: t, numColors: n, tokenised: e }
        );
      }
      function Tt(e) {
        return Ct(e).values;
      }
      function Pt(e) {
        var t = Ct(e),
          n = t.values,
          r = t.numColors,
          i = t.tokenised,
          o = n.length;
        return function (e) {
          for (var t = i, n = 0; n < o; n++)
            t = t.replace(
              n < r ? Et : kt,
              n < r ? St.transform(e[n]) : Xe(e[n])
            );
          return t;
        };
      }
      var Ot = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var At = {
          test: function (e) {
            var t, n, r, i;
            return (
              isNaN(e) &&
              Qe(e) &&
              (null !==
                (n =
                  null === (t = e.match(qe)) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = e.match(Ye)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: Tt,
          createTransformer: Pt,
          getAnimatableNone: function (e) {
            var t = Tt(e);
            return Pt(e)(t.map(Ot));
          },
        },
        Mt = function (e) {
          return "number" === typeof e;
        },
        _t = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        jt = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(_t);
        };
      function Lt(e, t) {
        return Mt(e)
          ? function (n) {
              return Pe(e, t, n);
            }
          : St.test(e)
          ? wt(e, t)
          : Dt(e, t);
      }
      var Nt = function (e, t) {
          var n = xt(e),
            r = n.length,
            i = e.map(function (e, n) {
              return Lt(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = i[t](e);
            return n;
          };
        },
        It = function (e, t) {
          var n = Object.assign(Object.assign({}, e), t),
            r = {};
          for (var i in n)
            void 0 !== e[i] && void 0 !== t[i] && (r[i] = Lt(e[i], t[i]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        };
      function Rt(e) {
        for (
          var t = At.parse(e), n = t.length, r = 0, i = 0, o = 0, a = 0;
          a < n;
          a++
        )
          r || "number" === typeof t[a] ? r++ : void 0 !== t[a].hue ? o++ : i++;
        return { parsed: t, numNumbers: r, numRGB: i, numHSL: o };
      }
      var Dt = function (e, t) {
          var n = At.createTransformer(t),
            r = Rt(e),
            i = Rt(t);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? jt(Nt(r.parsed, i.parsed), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        zt = function (e, t) {
          return function (n) {
            return Pe(e, t, n);
          };
        };
      function Vt(e, t, n) {
        for (
          var r,
            i = [],
            o =
              n ||
              ("number" === typeof (r = e[0])
                ? zt
                : "string" === typeof r
                ? St.test(r)
                  ? wt
                  : Dt
                : Array.isArray(r)
                ? Nt
                : "object" === typeof r
                ? It
                : void 0),
            a = e.length - 1,
            l = 0;
          l < a;
          l++
        ) {
          var s = o(e[l], e[l + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[l] : t;
            s = jt(u, s);
          }
          i.push(s);
        }
        return i;
      }
      function Ft(e, t) {
        var n = y(e, 2),
          r = n[0],
          i = n[1],
          o = y(t, 1)[0];
        return function (e) {
          return o(We(r, i, e));
        };
      }
      function Bt(e, t) {
        var n = e.length,
          r = n - 1;
        return function (i) {
          var o = 0,
            a = !1;
          if (
            (i <= e[0] ? (a = !0) : i >= e[r] && ((o = r - 1), (a = !0)), !a)
          ) {
            for (var l = 1; l < n && !(e[l] > i || l === r); l++);
            o = l - 1;
          }
          var s = We(e[o], e[o + 1], i);
          return t[o](s);
        };
      }
      function Ut(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          i = void 0 === r || r,
          o = n.ease,
          a = n.mixer,
          l = e.length;
        t.length,
          !o || !Array.isArray(o) || o.length,
          e[0] > e[l - 1] &&
            ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        var s = Vt(t, o, a),
          u = 2 === l ? Ft(e, s) : Bt(e, s);
        return i
          ? function (t) {
              return u(Ie(e[0], e[l - 1], t));
            }
          : u;
      }
      var Ht,
        Wt = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Gt = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Xt = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e);
          };
        },
        qt = function (e) {
          return e;
        },
        Yt =
          ((Ht = 2),
          function (e) {
            return Math.pow(e, Ht);
          }),
        $t = Wt(Yt),
        Qt = Gt(Yt),
        Kt = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Zt = Wt(Kt),
        Jt = Gt(Zt),
        en = Xt(1.525),
        tn = Wt(en),
        nn = Gt(en),
        rn = (function (e) {
          var t = Xt(e);
          return function (e) {
            return (e *= 2) < 1
              ? 0.5 * t(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          };
        })(1.525),
        on = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < 0.36363636363636365
            ? 7.5625 * t
            : e < 0.7272727272727273
            ? 9.075 * t - 9.9 * e + 3.4
            : e < 0.9
            ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
            : 10.8 * e * e - 20.52 * e + 10.72;
        },
        an = Wt(on);
      function ln(e, t) {
        return e
          .map(function () {
            return t || Qt;
          })
          .splice(0, e.length - 1);
      }
      function sn(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          i = void 0 === r ? 1 : r,
          o = e.ease,
          a = e.offset,
          l = e.duration,
          s = void 0 === l ? 300 : l,
          u = { done: !1, value: n },
          c = Array.isArray(i) ? i : [n, i],
          d = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            a && a.length === c.length
              ? a
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(c),
            s
          );
        function f() {
          return Ut(d, c, { ease: Array.isArray(o) ? o : ln(c, o) });
        }
        var p = f();
        return {
          next: function (e) {
            return (u.value = p(e)), (u.done = e >= s), u;
          },
          flipTarget: function () {
            c.reverse(), (p = f());
          },
        };
      }
      var un = {
        keyframes: sn,
        spring: Ue,
        decay: function (e) {
          var t = e.velocity,
            n = void 0 === t ? 0 : t,
            r = e.from,
            i = void 0 === r ? 0 : r,
            o = e.power,
            a = void 0 === o ? 0.8 : o,
            l = e.timeConstant,
            s = void 0 === l ? 350 : l,
            u = e.restDelta,
            c = void 0 === u ? 0.5 : u,
            d = e.modifyTarget,
            f = { done: !1, value: i },
            p = a * n,
            v = i + p,
            h = void 0 === d ? v : d(v);
          return (
            h !== v && (p = h - i),
            {
              next: function (e) {
                var t = -p * Math.exp(-e / s);
                return (
                  (f.done = !(t > c || t < -c)),
                  (f.value = f.done ? h : h + t),
                  f
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      function cn(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var dn = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return Te.update(t, !0);
          },
          stop: function () {
            return we.update(t);
          },
        };
      };
      function fn(e) {
        var t,
          n,
          r,
          i,
          o,
          a = e.from,
          l = e.autoplay,
          s = void 0 === l || l,
          u = e.driver,
          c = void 0 === u ? dn : u,
          d = e.elapsed,
          f = void 0 === d ? 0 : d,
          p = e.repeat,
          v = void 0 === p ? 0 : p,
          h = e.repeatType,
          m = void 0 === h ? "loop" : h,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.onPlay,
          w = e.onStop,
          x = e.onComplete,
          S = e.onRepeat,
          E = e.onUpdate,
          k = D(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          C = k.to,
          T = 0,
          P = k.duration,
          O = !1,
          A = !0,
          M = (function (e) {
            if (Array.isArray(e.to)) return sn;
            if (un[e.type]) return un[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") ||
              (t.has("duration") && !t.has("dampingRatio"))
              ? sn
              : t.has("dampingRatio") ||
                t.has("stiffness") ||
                t.has("mass") ||
                t.has("damping") ||
                t.has("restSpeed") ||
                t.has("restDelta")
              ? Ue
              : sn;
          })(k);
        (null === (n = (t = M).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, a, C)) &&
          ((o = Ut([0, 100], [a, C], { clamp: !1 })), (a = 0), (C = 100));
        var _ = M(Object.assign(Object.assign({}, k), { from: a, to: C }));
        function j() {
          T++,
            "reverse" === m
              ? (f = (function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  return arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                    ? t - (e - t) + n
                    : cn(t + -e, t, n);
                })(f, P, y, (A = T % 2 === 0)))
              : ((f = cn(f, P, y)), "mirror" === m && _.flipTarget()),
            (O = !1),
            S && S();
        }
        function L(e) {
          if ((A || (e = -e), (f += e), !O)) {
            var t = _.next(Math.max(0, f));
            (i = t.value), o && (i = o(i)), (O = A ? t.done : f <= 0);
          }
          null === E || void 0 === E || E(i),
            O &&
              (0 === T && ((null !== P && void 0 !== P) || (P = f)),
              T < v
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(f, P, y, A) && j()
                : (r.stop(), x && x()));
        }
        return (
          s && (null === b || void 0 === b || b(), (r = c(L)).start()),
          {
            stop: function () {
              null === w || void 0 === w || w(), r.stop();
            },
          }
        );
      }
      var pn = function (e) {
          return 1e3 * e;
        },
        vn = function (e, t) {
          return 1 - 3 * t + 3 * e;
        },
        hn = function (e, t) {
          return 3 * t - 6 * e;
        },
        mn = function (e) {
          return 3 * e;
        },
        gn = function (e, t, n) {
          return ((vn(t, n) * e + hn(t, n)) * e + mn(t)) * e;
        },
        yn = function (e, t, n) {
          return 3 * vn(t, n) * e * e + 2 * hn(t, n) * e + mn(t);
        };
      var bn = 0.1;
      function wn(e, t, n, r) {
        if (e === t && n === r) return qt;
        for (var i = new Float32Array(11), o = 0; o < 11; ++o)
          i[o] = gn(o * bn, e, n);
        function a(t) {
          for (var r = 0, o = 1; 10 !== o && i[o] <= t; ++o) r += bn;
          --o;
          var a = r + ((t - i[o]) / (i[o + 1] - i[o])) * bn,
            l = yn(a, e, n);
          return l >= 0.001
            ? (function (e, t, n, r) {
                for (var i = 0; i < 8; ++i) {
                  var o = yn(t, n, r);
                  if (0 === o) return t;
                  t -= (gn(t, n, r) - e) / o;
                }
                return t;
              })(t, a, e, n)
            : 0 === l
            ? a
            : (function (e, t, n, r, i) {
                var o,
                  a,
                  l = 0;
                do {
                  (o = gn((a = t + (n - t) / 2), r, i) - e) > 0
                    ? (n = a)
                    : (t = a);
                } while (Math.abs(o) > 1e-7 && ++l < 10);
                return a;
              })(t, r, r + bn, e, n);
        }
        return function (e) {
          return 0 === e || 1 === e ? e : gn(a(e), t, r);
        };
      }
      var xn = {
          linear: qt,
          easeIn: Yt,
          easeInOut: Qt,
          easeOut: $t,
          circIn: Kt,
          circInOut: Jt,
          circOut: Zt,
          backIn: en,
          backInOut: nn,
          backOut: tn,
          anticipate: rn,
          bounceIn: an,
          bounceInOut: function (e) {
            return e < 0.5
              ? 0.5 * (1 - on(1 - 2 * e))
              : 0.5 * on(2 * e - 1) + 0.5;
          },
          bounceOut: on,
        },
        Sn = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = z(e, 4);
            return wn(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), xn[e])
            : e;
        },
        En = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !At.test(t) || t.startsWith("url(")))
          );
        },
        kn = function (e) {
          return Array.isArray(e);
        },
        Cn = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Tn = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Pn = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        On = function (e) {
          return { type: "keyframes", duration: 0.8, values: e };
        },
        An = {
          x: Cn,
          y: Cn,
          z: Cn,
          rotate: Cn,
          rotateX: Cn,
          rotateY: Cn,
          rotateZ: Cn,
          scaleX: Tn,
          scaleY: Tn,
          scale: Tn,
          opacity: Pn,
          backgroundColor: Pn,
          color: Pn,
          default: Tn,
        },
        Mn = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function _n(e) {
        var t = y(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var i = y(r.match(qe) || [], 1)[0];
        if (!i) return e;
        var o = r.replace(i, ""),
          a = Mn.has(n) ? 1 : 0;
        return i !== r && (a *= 100), n + "(" + a + o + ")";
      }
      var jn = /([a-z-]*)\(.*?\)/g,
        Ln = Object.assign(Object.assign({}, At), {
          getAnimatableNone: function (e) {
            var t = e.match(jn);
            return t ? t.map(_n).join(" ") : e;
          },
        }),
        Nn = R(R({}, Ke), { transform: Math.round }),
        In = {
          borderWidth: ut,
          borderTopWidth: ut,
          borderRightWidth: ut,
          borderBottomWidth: ut,
          borderLeftWidth: ut,
          borderRadius: ut,
          radius: ut,
          borderTopLeftRadius: ut,
          borderTopRightRadius: ut,
          borderBottomRightRadius: ut,
          borderBottomLeftRadius: ut,
          width: ut,
          maxWidth: ut,
          height: ut,
          maxHeight: ut,
          size: ut,
          top: ut,
          right: ut,
          bottom: ut,
          left: ut,
          padding: ut,
          paddingTop: ut,
          paddingRight: ut,
          paddingBottom: ut,
          paddingLeft: ut,
          margin: ut,
          marginTop: ut,
          marginRight: ut,
          marginBottom: ut,
          marginLeft: ut,
          rotate: lt,
          rotateX: lt,
          rotateY: lt,
          rotateZ: lt,
          scale: Je,
          scaleX: Je,
          scaleY: Je,
          scaleZ: Je,
          skew: lt,
          skewX: lt,
          skewY: lt,
          distance: ut,
          translateX: ut,
          translateY: ut,
          translateZ: ut,
          x: ut,
          y: ut,
          z: ut,
          perspective: ut,
          transformPerspective: ut,
          opacity: Ze,
          originX: ft,
          originY: ft,
          originZ: ut,
          zIndex: Nn,
          fillOpacity: Ze,
          strokeOpacity: Ze,
          numOctaves: Nn,
        },
        Rn = R(R({}, In), {
          color: St,
          backgroundColor: St,
          outlineColor: St,
          fill: St,
          stroke: St,
          borderColor: St,
          borderTopColor: St,
          borderRightColor: St,
          borderBottomColor: St,
          borderLeftColor: St,
          filter: Ln,
          WebkitFilter: Ln,
        }),
        Dn = function (e) {
          return Rn[e];
        };
      function zn(e, t) {
        var n,
          r = Dn(e);
        return (
          r !== Ln && (r = At),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var Vn = !1,
        Fn = function (e) {
          return kn(e) ? e[e.length - 1] || 0 : e;
        };
      function Bn(e) {
        var t = e.ease,
          n = e.times,
          r = e.yoyo,
          i = e.flip,
          o = e.loop,
          a = D(e, ["ease", "times", "yoyo", "flip", "loop"]),
          l = R({}, a);
        return (
          n && (l.offset = n),
          a.duration && (l.duration = pn(a.duration)),
          a.repeatDelay && (l.repeatDelay = pn(a.repeatDelay)),
          t &&
            (l.ease = (function (e) {
              return Array.isArray(e) && "number" !== typeof e[0];
            })(t)
              ? t.map(Sn)
              : Sn(t)),
          "tween" === a.type && (l.type = "keyframes"),
          (r || o || i) &&
            (!0,
            r
              ? (l.repeatType = "reverse")
              : o
              ? (l.repeatType = "loop")
              : i && (l.repeatType = "mirror"),
            (l.repeat = o || r || i || a.repeat)),
          "spring" !== a.type && (l.type = "keyframes"),
          l
        );
      }
      function Un(e, t, n) {
        var r;
        return (
          Array.isArray(t.to) &&
            ((null !== (r = e.duration) && void 0 !== r) || (e.duration = 0.8)),
          (function (e) {
            Array.isArray(e.to) &&
              null === e.to[0] &&
              ((e.to = V([], z(e.to), !1)), (e.to[0] = e.from));
          })(t),
          (function (e) {
            e.when,
              e.delay,
              e.delayChildren,
              e.staggerChildren,
              e.staggerDirection,
              e.repeat,
              e.repeatType,
              e.repeatDelay,
              e.from;
            var t = D(e, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(t).length;
          })(e) ||
            (e = R(
              R({}, e),
              (function (e, t) {
                var n;
                return (
                  (n = kn(t) ? On : An[e] || An.default), R({ to: t }, n(t))
                );
              })(n, t.to)
            )),
          R(R({}, t), Bn(e))
        );
      }
      function Hn(e, t, n, r, i) {
        var o,
          a = Xn(r, e),
          l = null !== (o = a.from) && void 0 !== o ? o : t.get(),
          s = En(e, n);
        "none" === l && s && "string" === typeof n
          ? (l = zn(e, n))
          : Wn(l) && "string" === typeof n
          ? (l = Gn(n))
          : !Array.isArray(n) && Wn(n) && "string" === typeof l && (n = Gn(l));
        var u = En(e, l);
        return (
          "You are trying to animate "
            .concat(e, ' from "')
            .concat(l, '" to "')
            .concat(n, '". ')
            .concat(
              l,
              " is not an animatable value - to enable this animation set "
            )
            .concat(l, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          u && s && !1 !== a.type
            ? function () {
                var r = {
                  from: l,
                  to: n,
                  velocity: t.getVelocity(),
                  onComplete: i,
                  onUpdate: function (e) {
                    return t.set(e);
                  },
                };
                return "inertia" === a.type || "decay" === a.type
                  ? (function (e) {
                      var t,
                        n = e.from,
                        r = void 0 === n ? 0 : n,
                        i = e.velocity,
                        o = void 0 === i ? 0 : i,
                        a = e.min,
                        l = e.max,
                        s = e.power,
                        u = void 0 === s ? 0.8 : s,
                        c = e.timeConstant,
                        d = void 0 === c ? 750 : c,
                        f = e.bounceStiffness,
                        p = void 0 === f ? 500 : f,
                        v = e.bounceDamping,
                        h = void 0 === v ? 10 : v,
                        m = e.restDelta,
                        g = void 0 === m ? 1 : m,
                        y = e.modifyTarget,
                        b = e.driver,
                        w = e.onUpdate,
                        x = e.onComplete,
                        S = e.onStop;
                      function E(e) {
                        return (
                          (void 0 !== a && e < a) || (void 0 !== l && e > l)
                        );
                      }
                      function k(e) {
                        return void 0 === a
                          ? l
                          : void 0 === l || Math.abs(a - e) < Math.abs(l - e)
                          ? a
                          : l;
                      }
                      function C(e) {
                        null === t || void 0 === t || t.stop(),
                          (t = fn(
                            Object.assign(Object.assign({}, e), {
                              driver: b,
                              onUpdate: function (t) {
                                var n;
                                null === w || void 0 === w || w(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: x,
                              onStop: S,
                            })
                          ));
                      }
                      function T(e) {
                        C(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: p,
                              damping: h,
                              restDelta: g,
                            },
                            e
                          )
                        );
                      }
                      if (E(r)) T({ from: r, velocity: o, to: k(r) });
                      else {
                        var P = u * o + r;
                        "undefined" !== typeof y && (P = y(P));
                        var O,
                          A,
                          M = k(P),
                          _ = M === a ? -1 : 1;
                        C({
                          type: "decay",
                          from: r,
                          velocity: o,
                          timeConstant: d,
                          power: u,
                          restDelta: g,
                          modifyTarget: y,
                          onUpdate: E(P)
                            ? function (e) {
                                (O = A),
                                  (A = e),
                                  (o = Oe(e - O, Ce().delta)),
                                  ((1 === _ && e > M) || (-1 === _ && e < M)) &&
                                    T({ from: e, to: M, velocity: o });
                              }
                            : void 0,
                        });
                      }
                      return {
                        stop: function () {
                          return null === t || void 0 === t ? void 0 : t.stop();
                        },
                      };
                    })(R(R({}, r), a))
                  : fn(
                      R(R({}, Un(a, r, e)), {
                        onUpdate: function (e) {
                          var t;
                          r.onUpdate(e),
                            null === (t = a.onUpdate) ||
                              void 0 === t ||
                              t.call(a, e);
                        },
                        onComplete: function () {
                          var e;
                          r.onComplete(),
                            null === (e = a.onComplete) ||
                              void 0 === e ||
                              e.call(a);
                        },
                      })
                    );
              }
            : function () {
                var e,
                  r,
                  o = Fn(n);
                return (
                  t.set(o),
                  i(),
                  null ===
                    (e = null === a || void 0 === a ? void 0 : a.onUpdate) ||
                    void 0 === e ||
                    e.call(a, o),
                  null ===
                    (r = null === a || void 0 === a ? void 0 : a.onComplete) ||
                    void 0 === r ||
                    r.call(a),
                  { stop: function () {} }
                );
              }
        );
      }
      function Wn(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function Gn(e) {
        return "number" === typeof e ? 0 : zn("", e);
      }
      function Xn(e, t) {
        return e[t] || e.default || e;
      }
      function qn(e, t, n, r) {
        return (
          void 0 === r && (r = {}),
          Vn && (r = { type: !1 }),
          t.start(function (i) {
            var o,
              a,
              l = Hn(e, t, n, r, i),
              s = (function (e, t) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (Xn(e, t) || {}).delay) && void 0 !== n
                      ? n
                      : e.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, e),
              u = function () {
                return (a = l());
              };
            return (
              s ? (o = window.setTimeout(u, pn(s))) : u(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var Yn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        $n = Yn.length,
        Qn = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        Kn = function (e) {
          return "number" === typeof e || ut.test(e);
        };
      function Zn(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
      }
      var Jn = tr(0, 0.5, Zt),
        er = tr(0.5, 0.95, qt);
      function tr(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(We(e, t, r));
        };
      }
      function nr(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function rr(e, t) {
        nr(e.x, t.x), nr(e.y, t.y);
      }
      function ir(e) {
        return void 0 === e || 1 === e;
      }
      function or(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !ir(t) || !ir(n) || !ir(r);
      }
      function ar(e) {
        return (
          or(e) ||
          lr(e.x) ||
          lr(e.y) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY
        );
      }
      function lr(e) {
        return e && "0%" !== e;
      }
      function sr(e, t, n) {
        return n + t * (e - n);
      }
      function ur(e, t, n, r, i) {
        return void 0 !== i && (e = sr(e, i, r)), sr(e, n, r) + t;
      }
      function cr(e, t, n, r, i) {
        void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          (e.min = ur(e.min, t, n, r, i)),
          (e.max = ur(e.max, t, n, r, i));
      }
      function dr(e, t) {
        var n = t.x,
          r = t.y;
        cr(e.x, n.translate, n.scale, n.originPoint),
          cr(e.y, r.translate, r.scale, r.originPoint);
      }
      function fr(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function pr(e, t, n) {
        var r = z(n, 3),
          i = r[0],
          o = r[1],
          a = r[2],
          l = void 0 !== t[a] ? t[a] : 0.5,
          s = Pe(e.min, e.max, l);
        cr(e, t[i], t[o], s, t.scale);
      }
      var vr = ["x", "scaleX", "originX"],
        hr = ["y", "scaleY", "originY"];
      function mr(e, t) {
        pr(e.x, t, vr), pr(e.y, t, hr);
      }
      var gr = function (e) {
          return e.hasOwnProperty("x") && e.hasOwnProperty("y");
        },
        yr = function (e) {
          return gr(e) && e.hasOwnProperty("z");
        },
        br = function (e, t) {
          return Math.abs(e - t);
        };
      function wr(e, t) {
        if (Mt(e) && Mt(t)) return br(e, t);
        if (gr(e) && gr(t)) {
          var n = br(e.x, t.x),
            r = br(e.y, t.y),
            i = yr(e) && yr(t) ? br(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      function xr(e) {
        return e.max - e.min;
      }
      function Sr(e, t, n) {
        return (
          void 0 === t && (t = 0), void 0 === n && (n = 0.01), wr(e, t) < n
        );
      }
      function Er(e, t, n, r) {
        void 0 === r && (r = 0.5),
          (e.origin = r),
          (e.originPoint = Pe(t.min, t.max, e.origin)),
          (e.scale = xr(n) / xr(t)),
          (Sr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Pe(n.min, n.max, e.origin) - e.originPoint),
          (Sr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function kr(e, t, n, r) {
        Er(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Er(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Cr(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + xr(t));
      }
      function Tr(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + xr(t));
      }
      function Pr(e, t, n) {
        Tr(e.x, t.x, n.x), Tr(e.y, t.y, n.y);
      }
      function Or(e, t, n, r, i) {
        return (
          (e = sr((e -= t), 1 / n, r)), void 0 !== i && (e = sr(e, 1 / i, r)), e
        );
      }
      function Ar(e, t, n, r, i) {
        var o = z(n, 3),
          a = o[0],
          l = o[1],
          s = o[2];
        !(function (e, t, n, r, i, o, a) {
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = e),
            void 0 === a && (a = e),
            st.test(t) &&
              ((t = parseFloat(t)), (t = Pe(a.min, a.max, t / 100) - a.min)),
            "number" === typeof t)
          ) {
            var l = Pe(o.min, o.max, r);
            e === o && (l -= t),
              (e.min = Or(e.min, t, n, l, i)),
              (e.max = Or(e.max, t, n, l, i));
          }
        })(e, t[a], t[l], t[s], t.scale, r, i);
      }
      var Mr = ["x", "scaleX", "originX"],
        _r = ["y", "scaleY", "originY"];
      function jr(e, t, n, r) {
        Ar(
          e.x,
          t,
          Mr,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Ar(
            e.y,
            t,
            _r,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function Lr(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function Nr(e) {
        return Lr(e.x) && Lr(e.y);
      }
      function Ir(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      var Rr = (function () {
          function e() {
            this.members = [];
          }
          return (
            (e.prototype.add = function (e) {
              Ae(this.members, e), e.scheduleRender();
            }),
            (e.prototype.remove = function (e) {
              if (
                (Me(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead)
              ) {
                var t = this.members[this.members.length - 1];
                t && this.promote(t);
              }
            }),
            (e.prototype.relegate = function (e) {
              var t,
                n = this.members.findIndex(function (t) {
                  return e === t;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  t = i;
                  break;
                }
              }
              return !!t && (this.promote(t), !0);
            }),
            (e.prototype.promote = function (e, t) {
              var n,
                r = this.lead;
              e !== r &&
                ((this.prevLead = r),
                (this.lead = e),
                e.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  e.scheduleRender(),
                  (e.resumeFrom = r),
                  t && (e.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((e.snapshot = r.snapshot),
                    (e.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (e.snapshot.isShared = !0)),
                  (null === (n = e.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (e.isLayoutDirty = !0),
                  !1 === e.options.crossfade && r.hide()));
            }),
            (e.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (e) {
                var t, n, r, i, o;
                null === (n = (t = e.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t),
                  null ===
                    (o =
                      null === (r = e.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i);
              });
            }),
            (e.prototype.scheduleRender = function () {
              this.members.forEach(function (e) {
                e.instance && e.scheduleRender(!1);
              });
            }),
            (e.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            e
          );
        })(),
        Dr = {};
      function zr(e, t, n) {
        var r = e.x.translate / t.x,
          i = e.y.translate / t.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (n) {
          var a = n.rotate,
            l = n.rotateX,
            s = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            l && (o += "rotateX(".concat(l, "deg) ")),
            s && (o += "rotateY(".concat(s, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (o += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")"))
          ? "none"
          : o;
      }
      function Vr(e) {
        return [e("x"), e("y")];
      }
      var Fr = ["", "X", "Y", "Z"],
        Br = ["transformPerspective", "x", "y", "z"];
      function Ur(e, t) {
        return Br.indexOf(e) - Br.indexOf(t);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (e) {
        return Fr.forEach(function (t) {
          return Br.push(e + t);
        });
      });
      var Hr = new Set(Br);
      function Wr(e) {
        return Hr.has(e);
      }
      var Gr = new Set(["originX", "originY", "originZ"]);
      function Xr(e) {
        return Gr.has(e);
      }
      var qr = function (e, t) {
          return e.depth - t.depth;
        },
        Yr = (function () {
          function e() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (e.prototype.add = function (e) {
              Ae(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.remove = function (e) {
              Me(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.forEach = function (e) {
              this.isDirty && this.children.sort(qr),
                (this.isDirty = !1),
                this.children.forEach(e);
            }),
            e
          );
        })();
      function $r(e) {
        var t,
          n = Ne(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var Qr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Kr(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          i = e.resetTransform;
        return (function () {
          function e(e, t, r) {
            var i = this;
            void 0 === t && (t = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(ii), i.nodes.forEach(oi);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = e),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? V(V([], z(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Yr());
          }
          return (
            (e.prototype.addEventListener = function (e, t) {
              return (
                this.eventHandlers.has(e) ||
                  this.eventHandlers.set(e, new _e()),
                this.eventHandlers.get(e).add(t)
              );
            }),
            (e.prototype.notifyListeners = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = this.eventHandlers.get(e);
              null === r || void 0 === r || r.notify.apply(r, V([], z(t), !1));
            }),
            (e.prototype.hasListeners = function (e) {
              return this.eventHandlers.has(e);
            }),
            (e.prototype.registerPotentialNode = function (e, t) {
              this.potentialNodes.set(e, t);
            }),
            (e.prototype.mount = function (e, n) {
              var r,
                i = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
                  (this.instance = e);
                var o = this.options,
                  a = o.layoutId,
                  l = o.layout,
                  s = o.visualElement;
                if (
                  (s && !s.getInstance() && s.mount(e),
                  this.root.nodes.add(this),
                  null === (r = this.parent) ||
                    void 0 === r ||
                    r.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (l || a) && (this.isLayoutDirty = !0),
                  t)
                ) {
                  var u,
                    c = function () {
                      return (i.root.updateBlockedByResize = !1);
                    };
                  t(e, function () {
                    (i.root.updateBlockedByResize = !0),
                      clearTimeout(u),
                      (u = window.setTimeout(c, 250)),
                      Qr.hasAnimatedSinceResize &&
                        ((Qr.hasAnimatedSinceResize = !1), i.nodes.forEach(ri));
                  });
                }
                a && this.root.registerSharedNode(a, this),
                  !1 !== this.options.animate &&
                    s &&
                    (a || l) &&
                    this.addEventListener("didUpdate", function (e) {
                      var t,
                        n,
                        r,
                        o,
                        a,
                        l = e.delta,
                        u = e.hasLayoutChanged,
                        c = e.hasRelativeTargetChanged,
                        d = e.layout;
                      if (i.isTreeAnimationBlocked())
                        return (
                          (i.target = void 0), void (i.relativeTarget = void 0)
                        );
                      var f =
                          null !==
                            (n =
                              null !== (t = i.options.transition) &&
                              void 0 !== t
                                ? t
                                : s.getDefaultTransition()) && void 0 !== n
                            ? n
                            : di,
                        p = s.getProps().onLayoutAnimationComplete,
                        v = !i.targetLayout || !Ir(i.targetLayout, d) || c,
                        h = !u && c;
                      if (
                        (null === (r = i.resumeFrom) || void 0 === r
                          ? void 0
                          : r.instance) ||
                        h ||
                        (u && (v || !i.currentAnimation))
                      ) {
                        i.resumeFrom &&
                          ((i.resumingFrom = i.resumeFrom),
                          (i.resumingFrom.resumingFrom = void 0)),
                          i.setAnimationOrigin(l, h);
                        var m = R(R({}, Xn(f, "layout")), { onComplete: p });
                        s.shouldReduceMotion && ((m.delay = 0), (m.type = !1)),
                          i.startAnimation(m);
                      } else u || 0 !== i.animationProgress || i.finishAnimation(), i.isLead() && (null === (a = (o = i.options).onExitComplete) || void 0 === a || a.call(o));
                      i.targetLayout = d;
                    });
              }
            }),
            (e.prototype.unmount = function () {
              var e, t;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (e = this.getStack()) ||
                  void 0 === e ||
                  e.remove(this),
                null === (t = this.parent) ||
                  void 0 === t ||
                  t.children.delete(this),
                (this.instance = void 0),
                we.preRender(this.updateProjection);
            }),
            (e.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (e.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (e.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (e.prototype.isTreeAnimationBlocked = function () {
              var e;
              return (
                this.isAnimationBlocked ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (e.prototype.startUpdate = function () {
              var e;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (e = this.nodes) || void 0 === e || e.forEach(ai));
            }),
            (e.prototype.willUpdate = function (e) {
              var t, n, r;
              if ((void 0 === e && (e = !0), this.root.isUpdateBlocked()))
                null === (n = (t = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(t);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  l = a.layoutId,
                  s = a.layout;
                if (void 0 !== l || s) {
                  var u =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === u || void 0 === u
                      ? void 0
                      : u(this.latestValues, "")),
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate");
                }
              }
            }),
            (e.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(ti)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(fi),
                  this.potentialNodes.clear()),
                this.nodes.forEach(ni),
                this.nodes.forEach(Zr),
                this.nodes.forEach(Jr),
                this.clearAllSnapshots(),
                xe.update(),
                xe.preRender(),
                xe.render());
            }),
            (e.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(ei), this.sharedNodes.forEach(li);
            }),
            (e.prototype.scheduleUpdateProjection = function () {
              Te.preRender(this.updateProjection, !1, !0);
            }),
            (e.prototype.scheduleCheckAfterUnmount = function () {
              var e = this;
              Te.postRender(function () {
                e.isLayoutDirty
                  ? e.root.didUpdate()
                  : e.root.checkUpdateFailed();
              });
            }),
            (e.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var e = this.measure(),
                  t = this.removeTransform(this.removeElementScroll(e));
                vi(t),
                  (this.snapshot = {
                    measured: e,
                    layout: t,
                    latestValues: {},
                  });
              }
            }),
            (e.prototype.updateLayout = function () {
              var e;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t = 0; t < this.path.length; t++) {
                    this.path[t].updateScroll();
                  }
                var n = this.measure();
                vi(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (e = this.options.visualElement) ||
                    void 0 === e ||
                    e.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (e.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = r(this.instance));
            }),
            (e.prototype.resetTransform = function () {
              var e;
              if (i) {
                var t = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Nr(this.projectionDelta),
                  r =
                    null === (e = this.options.visualElement) || void 0 === e
                      ? void 0
                      : e.getProps().transformTemplate,
                  o =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = o !== this.prevTransformTemplateValue;
                t &&
                  (n || ar(this.latestValues) || a) &&
                  (i(this.instance, o),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (e.prototype.measure = function () {
              var e = this.options.visualElement;
              if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var t = e.measureViewportBox(),
                n = this.root.scroll;
              return n && (fr(t.x, n.x), fr(t.y, n.y)), t;
            }),
            (e.prototype.removeElementScroll = function (e) {
              var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              rr(t, e);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options;
                r !== this.root &&
                  i &&
                  o.layoutScroll &&
                  (fr(t.x, i.x), fr(t.y, i.y));
              }
              return t;
            }),
            (e.prototype.applyTransform = function (e, t) {
              void 0 === t && (t = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              rr(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !t &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  mr(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  ar(i.latestValues) && mr(n, i.latestValues);
              }
              return ar(this.latestValues) && mr(n, this.latestValues), n;
            }),
            (e.prototype.removeTransform = function (e) {
              var t,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              rr(n, e);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && ar(i.latestValues)) {
                  or(i.latestValues) && i.updateSnapshot();
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  rr(o, i.measure()),
                    jr(
                      n,
                      i.latestValues,
                      null === (t = i.snapshot) || void 0 === t
                        ? void 0
                        : t.layout,
                      o
                    );
                }
              }
              return ar(this.latestValues) && jr(n, this.latestValues), n;
            }),
            (e.prototype.setTargetDelta = function (e) {
              (this.targetDelta = e), this.root.scheduleUpdateProjection();
            }),
            (e.prototype.setOptions = function (e) {
              var t;
              this.options = R(R(R({}, this.options), e), {
                crossfade: null === (t = e.crossfade) || void 0 === t || t,
              });
            }),
            (e.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (e.prototype.resolveTargetDelta = function () {
              var e,
                t,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Pr(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    rr(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (e = this.relativeParent) || void 0 === e
                    ? void 0
                    : e.target)
                    ? ((t = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Cr(t.x, n.x, r.x),
                      Cr(t.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : rr(this.target, this.layout.actual),
                      dr(this.target, this.targetDelta))
                    : rr(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Pr(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      rr(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (e.prototype.getClosestProjectingParent = function () {
              if (this.parent && !ar(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (e.prototype.calcProjection = function () {
              var e,
                t = this.options,
                n = t.layout,
                r = t.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                rr(this.layoutCorrected, this.layout.actual),
                  (function (e, t, n, r) {
                    var i, o;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var l, s;
                      t.x = t.y = 1;
                      for (var u = 0; u < a; u++)
                        (s = (l = n[u]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = l.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              l.options.layoutScroll &&
                              l.scroll &&
                              l !== l.root &&
                              mr(e, { x: -l.scroll.x, y: -l.scroll.y }),
                            s &&
                              ((t.x *= s.x.scale),
                              (t.y *= s.y.scale),
                              dr(e, s)),
                            r && ar(l.latestValues) && mr(e, l.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    l = this.treeScale.y,
                    s = this.projectionTransform;
                  kr(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = zr(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === s &&
                      this.treeScale.x === a &&
                      this.treeScale.y === l) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (e.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (e.prototype.show = function () {
              this.isVisible = !0;
            }),
            (e.prototype.scheduleRender = function (e) {
              var t, n, r;
              void 0 === e && (e = !0),
                null === (n = (t = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(t),
                e &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (e.prototype.setAnimationOrigin = function (e, t) {
              var n,
                r = this;
              void 0 === t && (t = !1);
              var i = this.snapshot,
                o =
                  (null === i || void 0 === i ? void 0 : i.latestValues) || {},
                a = R({}, this.latestValues),
                l = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !t);
              var s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                u = null === i || void 0 === i ? void 0 : i.isShared,
                c =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                d = Boolean(
                  u &&
                    !c &&
                    !0 === this.options.crossfade &&
                    !this.path.some(ci)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (t) {
                  var n,
                    i,
                    f,
                    p,
                    v,
                    h = t / 1e3;
                  si(l.x, e.x, h),
                    si(l.y, e.y, h),
                    r.setTargetDelta(l),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (n = r.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (Pr(s, r.layout.actual, r.relativeParent.layout.actual),
                      (i = r.relativeTarget),
                      (f = r.relativeTargetOrigin),
                      (p = s),
                      (v = h),
                      ui(i.x, f.x, p.x, v),
                      ui(i.y, f.y, p.y, v)),
                    u &&
                      ((r.animationValues = a),
                      (function (e, t, n, r, i, o) {
                        var a, l, s, u;
                        i
                          ? ((e.opacity = Pe(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              Jn(r)
                            )),
                            (e.opacityExit = Pe(
                              null !== (l = t.opacity) && void 0 !== l ? l : 1,
                              0,
                              er(r)
                            )))
                          : o &&
                            (e.opacity = Pe(
                              null !== (s = t.opacity) && void 0 !== s ? s : 1,
                              null !== (u = n.opacity) && void 0 !== u ? u : 1,
                              r
                            ));
                        for (var c = 0; c < $n; c++) {
                          var d = "border".concat(Yn[c], "Radius"),
                            f = Zn(t, d),
                            p = Zn(n, d);
                          (void 0 === f && void 0 === p) ||
                            (f || (f = 0),
                            p || (p = 0),
                            0 === f || 0 === p || Kn(f) === Kn(p)
                              ? ((e[d] = Math.max(Pe(Qn(f), Qn(p), r), 0)),
                                (st.test(p) || st.test(f)) && (e[d] += "%"))
                              : (e[d] = p));
                        }
                        (t.rotate || n.rotate) &&
                          (e.rotate = Pe(t.rotate || 0, n.rotate || 0, r));
                      })(a, o, r.latestValues, h, d, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = h);
                }),
                this.mixTargetDelta(0);
            }),
            (e.prototype.startAnimation = function (e) {
              var t,
                n,
                r = this;
              null === (t = this.currentAnimation) || void 0 === t || t.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (we.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Te.update(function () {
                  (Qr.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (e, t, n) {
                      void 0 === n && (n = {});
                      var r = Ne(e) ? e : Le(e);
                      return (
                        qn("", r, t, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      R(R({}, e), {
                        onUpdate: function (t) {
                          var n;
                          r.mixTargetDelta(t),
                            null === (n = e.onUpdate) ||
                              void 0 === n ||
                              n.call(e, t);
                        },
                        onComplete: function () {
                          var t;
                          null === (t = e.onComplete) ||
                            void 0 === t ||
                            t.call(e),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (e.prototype.completeAnimation = function () {
              var e;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (e = this.getStack()) ||
                  void 0 === e ||
                  e.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (e.prototype.finishAnimation = function () {
              var e;
              this.currentAnimation &&
                (null === (e = this.mixTargetDelta) ||
                  void 0 === e ||
                  e.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (e.prototype.applyTransformsToTarget = function () {
              var e = this.getLead(),
                t = e.targetWithTransforms,
                n = e.target,
                r = e.layout,
                i = e.latestValues;
              t &&
                n &&
                r &&
                (rr(t, n),
                mr(t, i),
                kr(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                ));
            }),
            (e.prototype.registerSharedNode = function (e, t) {
              var n, r, i;
              this.sharedNodes.has(e) || this.sharedNodes.set(e, new Rr()),
                this.sharedNodes.get(e).add(t),
                t.promote({
                  transition:
                    null === (n = t.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = t.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, t),
                });
            }),
            (e.prototype.isLead = function () {
              var e = this.getStack();
              return !e || e.lead === this;
            }),
            (e.prototype.getLead = function () {
              var e;
              return (
                (this.options.layoutId &&
                  (null === (e = this.getStack()) || void 0 === e
                    ? void 0
                    : e.lead)) ||
                this
              );
            }),
            (e.prototype.getPrevLead = function () {
              var e;
              return this.options.layoutId
                ? null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.prevLead
                : void 0;
            }),
            (e.prototype.getStack = function () {
              var e = this.options.layoutId;
              if (e) return this.root.sharedNodes.get(e);
            }),
            (e.prototype.promote = function (e) {
              var t = void 0 === e ? {} : e,
                n = t.needsReset,
                r = t.transition,
                i = t.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (e.prototype.relegate = function () {
              var e = this.getStack();
              return !!e && e.relegate(this);
            }),
            (e.prototype.resetRotation = function () {
              var e = this.options.visualElement;
              if (e) {
                for (var t = !1, n = {}, r = 0; r < Fr.length; r++) {
                  var i = "rotate" + Fr[r];
                  e.getStaticValue(i) &&
                    ((t = !0),
                    (n[i] = e.getStaticValue(i)),
                    e.setStaticValue(i, 0));
                }
                if (t) {
                  for (var i in (null === e || void 0 === e || e.syncRender(),
                  n))
                    e.setStaticValue(i, n[i]);
                  e.scheduleRender();
                }
              }
            }),
            (e.prototype.getProjectionStyles = function (e) {
              var t, n, r, i, o, a;
              void 0 === e && (e = {});
              var l = {};
              if (!this.instance || this.isSVG) return l;
              if (!this.isVisible) return { visibility: "hidden" };
              l.visibility = "";
              var s =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (l.opacity = ""),
                  (l.pointerEvents = $r(e.pointerEvents) || ""),
                  (l.transform = s ? s(this.latestValues, "") : "none"),
                  l
                );
              var u = this.getLead();
              if (!this.projectionDelta || !this.layout || !u.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = $r(e.pointerEvents) || "")),
                  this.hasProjected &&
                    !ar(this.latestValues) &&
                    ((c.transform = s ? s({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = u.animationValues || u.latestValues;
              this.applyTransformsToTarget(),
                (l.transform = zr(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                s && (l.transform = s(d, l.transform));
              var f = this.projectionDelta,
                p = f.x,
                v = f.y;
              for (var h in ((l.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * v.origin, "% 0")),
              u.animationValues
                ? (l.opacity =
                    u === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (l.opacity =
                    u === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              Dr))
                if (void 0 !== d[h]) {
                  var m = Dr[h],
                    g = m.correct,
                    y = m.applyTo,
                    b = g(d[h], u);
                  if (y) for (var w = y.length, x = 0; x < w; x++) l[y[x]] = b;
                  else l[h] = b;
                }
              return (
                this.options.layoutId &&
                  (l.pointerEvents =
                    u === this ? $r(e.pointerEvents) || "" : "none"),
                l
              );
            }),
            (e.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (e.prototype.resetTree = function () {
              this.root.nodes.forEach(function (e) {
                var t;
                return null === (t = e.currentAnimation) || void 0 === t
                  ? void 0
                  : t.stop();
              }),
                this.root.nodes.forEach(ti),
                this.root.sharedNodes.clear();
            }),
            e
          );
        })();
      }
      function Zr(e) {
        e.updateLayout();
      }
      function Jr(e) {
        var t,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (t = e.resumeFrom) || void 0 === t
                  ? void 0
                  : t.snapshot) && void 0 !== n
              ? n
              : e.snapshot;
        if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
          var a = e.layout,
            l = a.actual,
            s = a.measured;
          "size" === e.options.animationType
            ? Vr(function (e) {
                var t = o.isShared ? o.measured[e] : o.layout[e],
                  n = xr(t);
                (t.min = l[e].min), (t.max = t.min + n);
              })
            : "position" === e.options.animationType &&
              Vr(function (e) {
                var t = o.isShared ? o.measured[e] : o.layout[e],
                  n = xr(l[e]);
                t.max = t.min + n;
              });
          var u = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          kr(u, l, o.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o.isShared
            ? kr(c, e.applyTransform(s, !0), o.measured)
            : kr(c, l, o.layout);
          var d = !Nr(u),
            f = !1;
          if (
            !e.resumeFrom &&
            ((e.relativeParent = e.getClosestProjectingParent()),
            e.relativeParent && !e.relativeParent.resumeFrom)
          ) {
            var p = e.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Pr(m, o.layout, v.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Pr(g, l, h.actual), Ir(m, g) || (f = !0);
            }
          }
          e.notifyListeners("didUpdate", {
            layout: l,
            snapshot: o,
            delta: c,
            layoutDelta: u,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          });
        } else
          e.isLead() &&
            (null === (i = (r = e.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        e.options.transition = void 0;
      }
      function ei(e) {
        e.clearSnapshot();
      }
      function ti(e) {
        e.clearMeasurements();
      }
      function ni(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notifyBeforeLayoutMeasure(),
          e.resetTransform();
      }
      function ri(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function ii(e) {
        e.resolveTargetDelta();
      }
      function oi(e) {
        e.calcProjection();
      }
      function ai(e) {
        e.resetRotation();
      }
      function li(e) {
        e.removeLeadSnapshot();
      }
      function si(e, t, n) {
        (e.translate = Pe(t.translate, 0, n)),
          (e.scale = Pe(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function ui(e, t, n, r) {
        (e.min = Pe(t.min, n.min, r)), (e.max = Pe(t.max, n.max, r));
      }
      function ci(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var di = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function fi(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var i = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        i && e.mount(i, !0);
      }
      function pi(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function vi(e) {
        pi(e.x), pi(e.y);
      }
      var hi = 1;
      var mi = (0, e.createContext)({}),
        gi = (0, e.createContext)({});
      var yi = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          I(t, e),
          (t.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (t.prototype.componentDidUpdate = function () {}),
          (t.prototype.updateProps = function () {
            var e = this.props,
              t = e.visualElement,
              n = e.props;
            t && t.setProps(n);
          }),
          (t.prototype.render = function () {
            return this.props.children;
          }),
          t
        );
      })(e.Component);
      function bi(t) {
        var n = t.preloadedFeatures,
          r = t.createVisualElement,
          i = t.projectionNodeConstructor,
          o = t.useRender,
          a = t.useVisualState,
          l = t.Component;
        return (
          n &&
            (function (e) {
              for (var t in e)
                null !== e[t] &&
                  ("projectionNodeConstructor" === t
                    ? (B.projectionNodeConstructor = e[t])
                    : (B[t].Component = e[t]));
            })(n),
          (0, e.forwardRef)(function (t, n) {
            var s = (function (t) {
              var n,
                r = t.layoutId,
                i =
                  null === (n = (0, e.useContext)(mi)) || void 0 === n
                    ? void 0
                    : n.id;
              return i && void 0 !== r ? i + "-" + r : r;
            })(t);
            t = R(R({}, t), { layoutId: s });
            var u = (0, e.useContext)(G),
              c = null,
              d = le(t),
              f = u.isStatic
                ? void 0
                : ue(function () {
                    if (Qr.hasEverUpdated) return hi++;
                  }),
              p = a(t, u.isStatic);
            return (
              !u.isStatic &&
                Y &&
                ((d.visualElement = J(l, p, R(R({}, u), t), r)),
                (function (t, n, r, i) {
                  var o,
                    a = n.layoutId,
                    l = n.layout,
                    s = n.drag,
                    u = n.dragConstraints,
                    c = n.layoutScroll,
                    d = (0, e.useContext)(gi);
                  i &&
                    r &&
                    !(null === r || void 0 === r ? void 0 : r.projection) &&
                    ((r.projection = new i(
                      t,
                      r.getLatestValues(),
                      null === (o = r.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    r.projection.setOptions({
                      layoutId: a,
                      layout: l,
                      alwaysMeasureLayout: Boolean(s) || (u && ee(u)),
                      visualElement: r,
                      scheduleRender: function () {
                        return r.scheduleRender();
                      },
                      animationType: "string" === typeof l ? l : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }));
                })(f, t, d.visualElement, i || B.projectionNodeConstructor),
                (c = (function (t, n, r) {
                  var i = [];
                  if (((0, e.useContext)(U), !n)) return null;
                  for (var o = 0; o < W; o++) {
                    var a = H[o],
                      l = B[a],
                      s = l.isEnabled,
                      u = l.Component;
                    s(t) &&
                      u &&
                      i.push(
                        e.createElement(
                          u,
                          R({ key: a }, t, { visualElement: n })
                        )
                      );
                  }
                  return i;
                })(t, d.visualElement))),
              e.createElement(
                yi,
                { visualElement: d.visualElement, props: R(R({}, u), t) },
                c,
                e.createElement(
                  X.Provider,
                  { value: d },
                  o(
                    l,
                    t,
                    f,
                    (function (t, n, r) {
                      return (0, e.useCallback)(
                        function (e) {
                          var i;
                          e &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, e)),
                            n && (e ? n.mount(e) : n.unmount()),
                            r &&
                              ("function" === typeof r
                                ? r(e)
                                : ee(r) && (r.current = e));
                        },
                        [n]
                      );
                    })(p, d.visualElement, n),
                    p,
                    u.isStatic,
                    d.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function wi(e) {
        function t(t, n) {
          return void 0 === n && (n = {}), bi(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var xi = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Si(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(xi.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      function Ei(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          Wr(e) ||
          Xr(e) ||
          ((n || void 0 !== r) && (!!Dr[e] || "opacity" === e))
        );
      }
      var ki = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function Ci(e) {
        return e.startsWith("--");
      }
      var Ti = function (e, t) {
        return t && "number" === typeof e ? t.transform(e) : e;
      };
      function Pi(e, t, n, r) {
        var i,
          o = e.style,
          a = e.vars,
          l = e.transform,
          s = e.transformKeys,
          u = e.transformOrigin;
        s.length = 0;
        var c = !1,
          d = !1,
          f = !0;
        for (var p in t) {
          var v = t[p];
          if (Ci(p)) a[p] = v;
          else {
            var h = In[p],
              m = Ti(v, h);
            if (Wr(p)) {
              if (((c = !0), (l[p] = m), s.push(p), !f)) continue;
              v !== (null !== (i = h.default) && void 0 !== i ? i : 0) &&
                (f = !1);
            } else Xr(p) ? ((u[p] = m), (d = !0)) : (o[p] = m);
          }
        }
        c
          ? (o.transform = (function (e, t, n, r) {
              var i = e.transform,
                o = e.transformKeys,
                a = t.enableHardwareAcceleration,
                l = void 0 === a || a,
                s = t.allowTransformNone,
                u = void 0 === s || s,
                c = "";
              o.sort(Ur);
              for (var d = !1, f = o.length, p = 0; p < f; p++) {
                var v = o[p];
                (c += "".concat(ki[v] || v, "(").concat(i[v], ") ")),
                  "z" === v && (d = !0);
              }
              return (
                !d && l ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : u && n && (c = "none"),
                c
              );
            })(e, n, f, r))
          : r
          ? (o.transform = r({}, ""))
          : !t.transform && o.transform && (o.transform = "none"),
          d &&
            (o.transformOrigin = (function (e) {
              var t = e.originX,
                n = void 0 === t ? "50%" : t,
                r = e.originY,
                i = void 0 === r ? "50%" : r,
                o = e.originZ,
                a = void 0 === o ? 0 : o;
              return "".concat(n, " ").concat(i, " ").concat(a);
            })(u));
      }
      var Oi = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Ai(e, t, n) {
        for (var r in t) Ne(t[r]) || Ei(r, n) || (e[r] = t[r]);
      }
      function Mi(t, n, r) {
        var i = {};
        return (
          Ai(i, t.style || {}, t),
          Object.assign(
            i,
            (function (t, n, r) {
              var i = t.transformTemplate;
              return (0, e.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Pi(e, n, { enableHardwareAcceleration: !r }, i);
                  var t = e.style;
                  return R(R({}, e.vars), t);
                },
                [n]
              );
            })(t, n, r)
          ),
          t.transformValues && (i = t.transformValues(i)),
          i
        );
      }
      function _i(e, t, n) {
        var r = {},
          i = Mi(e, t, n);
        return (
          Boolean(e.drag) &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var ji = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Li(e) {
        return ji.has(e);
      }
      var Ni,
        Ii = function (e) {
          return !Li(e);
        };
      try {
        (Ni = require("@emotion/is-prop-valid").default) &&
          (Ii = function (e) {
            return e.startsWith("on") ? !Li(e) : Ni(e);
          });
      } catch (su) {}
      function Ri(e, t, n) {
        return "string" === typeof e ? e : ut.transform(t + n * e);
      }
      var Di = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        zi = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Vi(e, t, n, r) {
        var i = t.attrX,
          o = t.attrY,
          a = t.originX,
          l = t.originY,
          s = t.pathLength,
          u = t.pathSpacing,
          c = void 0 === u ? 1 : u,
          d = t.pathOffset,
          f = void 0 === d ? 0 : d;
        Pi(
          e,
          D(t, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (e.attrs = e.style),
          (e.style = {});
        var p = e.attrs,
          v = e.style,
          h = e.dimensions;
        p.transform && (h && (v.transform = p.transform), delete p.transform),
          h &&
            (void 0 !== a || void 0 !== l || v.transform) &&
            (v.transformOrigin = (function (e, t, n) {
              var r = Ri(t, e.x, e.width),
                i = Ri(n, e.y, e.height);
              return "".concat(r, " ").concat(i);
            })(h, void 0 !== a ? a : 0.5, void 0 !== l ? l : 0.5)),
          void 0 !== i && (p.x = i),
          void 0 !== o && (p.y = o),
          void 0 !== s &&
            (function (e, t, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (e.pathLength = 1);
              var o = i ? Di : zi;
              e[o.offset] = ut.transform(-r);
              var a = ut.transform(t),
                l = ut.transform(n);
              e[o.array] = "".concat(a, " ").concat(l);
            })(p, s, c, f, !1);
      }
      var Fi = function () {
        return R(
          R(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Bi(t, n) {
        var r = (0, e.useMemo)(
          function () {
            var e = Fi();
            return (
              Vi(e, n, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              R(R({}, e.attrs), { style: R({}, e.style) })
            );
          },
          [n]
        );
        if (t.style) {
          var i = {};
          Ai(i, t.style, t), (r.style = R(R({}, i), r.style));
        }
        return r;
      }
      function Ui(t) {
        void 0 === t && (t = !1);
        return function (n, r, i, o, a, l) {
          var s = a.latestValues,
            u = (Si(n) ? Bi : _i)(r, s, l),
            c = (function (e, t, n) {
              var r = {};
              for (var i in e)
                (Ii(i) ||
                  (!0 === n && Li(i)) ||
                  (!t && !Li(i)) ||
                  (e.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = e[i]);
              return r;
            })(r, "string" === typeof n, t),
            d = R(R(R({}, c), u), { ref: o });
          return i && (d["data-projection-id"] = i), (0, e.createElement)(n, d);
        };
      }
      var Hi = /([a-z])([A-Z])/g,
        Wi = function (e) {
          return e.replace(Hi, "$1-$2").toLowerCase();
        };
      function Gi(e, t, n, r) {
        var i = t.style,
          o = t.vars;
        for (var a in (Object.assign(e.style, i, r && r.getProjectionStyles(n)),
        o))
          e.style.setProperty(a, o[a]);
      }
      var Xi = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function qi(e, t) {
        for (var n in (Gi(e, t), t.attrs))
          e.setAttribute(Xi.has(n) ? n : Wi(n), t.attrs[n]);
      }
      function Yi(e) {
        var t = e.style,
          n = {};
        for (var r in t) (Ne(t[r]) || Ei(r, e)) && (n[r] = t[r]);
        return n;
      }
      function $i(e) {
        var t = Yi(e);
        for (var n in e) {
          if (Ne(e[n]))
            t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
        }
        return t;
      }
      function Qi(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      function Ki(e, t, n, r) {
        var i = e.scrapeMotionValuesFromProps,
          o = e.createRenderState,
          a = e.onMount,
          l = { latestValues: Ji(t, n, r, i), renderState: o() };
        return (
          a &&
            (l.mount = function (e) {
              return a(t, e, l);
            }),
          l
        );
      }
      var Zi = function (t) {
        return function (n, r) {
          var i = (0, e.useContext)(X),
            o = (0, e.useContext)(q);
          return r
            ? Ki(t, n, i, o)
            : ue(function () {
                return Ki(t, n, i, o);
              });
        };
      };
      function Ji(e, t, n, r) {
        var i = {},
          o = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          a = r(e);
        for (var l in a) i[l] = $r(a[l]);
        var s = e.initial,
          u = e.animate,
          c = oe(e),
          d = ae(e);
        t &&
          d &&
          !c &&
          !1 !== e.inherit &&
          ((null !== s && void 0 !== s) || (s = t.initial),
          (null !== u && void 0 !== u) || (u = t.animate));
        var f = o || !1 === s,
          p = f ? u : s;
        p &&
          "boolean" !== typeof p &&
          !Qi(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (t) {
            var n = re(e, t);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var o = D(n, ["transitionEnd", "transition"]);
              for (var a in o) {
                var l = o[a];
                if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
                null !== l && (i[a] = l);
              }
              for (var a in r) i[a] = r[a];
            }
          });
        return i;
      }
      var eo,
        to = {
          useVisualState: Zi({
            scrapeMotionValuesFromProps: $i,
            createRenderState: Fi,
            onMount: function (e, t, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Vi(r, i, { enableHardwareAcceleration: !1 }, e.transformTemplate),
                qi(t, r);
            },
          }),
        },
        no = {
          useVisualState: Zi({
            scrapeMotionValuesFromProps: Yi,
            createRenderState: Oi,
          }),
        };
      function ro(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n, r);
          }
        );
      }
      function io(t, n, r, i) {
        (0, e.useEffect)(
          function () {
            var e = t.current;
            if (r && e) return ro(e, n, r, i);
          },
          [t, n, r, i]
        );
      }
      function oo(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent
          ? !("mouse" !== e.pointerType)
          : e instanceof MouseEvent;
      }
      function ao(e) {
        return !!e.touches;
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(eo || (eo = {}));
      var lo = { pageX: 0, pageY: 0 };
      function so(e, t) {
        void 0 === t && (t = "page");
        var n = e.touches[0] || e.changedTouches[0] || lo;
        return { x: n[t + "X"], y: n[t + "Y"] };
      }
      function uo(e, t) {
        return void 0 === t && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
      }
      function co(e, t) {
        return (
          void 0 === t && (t = "page"), { point: ao(e) ? so(e, t) : uo(e, t) }
        );
      }
      var fo = function (e, t) {
          void 0 === t && (t = !1);
          var n,
            r = function (t) {
              return e(t, co(t));
            };
          return t
            ? ((n = r),
              function (e) {
                var t = e instanceof MouseEvent;
                (!t || (t && 0 === e.button)) && n(e);
              })
            : r;
        },
        po = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        vo = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ho(e) {
        return Y && null === window.onpointerdown
          ? e
          : Y && null === window.ontouchstart
          ? vo[e]
          : Y && null === window.onmousedown
          ? po[e]
          : e;
      }
      function mo(e, t, n, r) {
        return ro(e, ho(t), fo(n, "pointerdown" === t), r);
      }
      function go(e, t, n, r) {
        return io(e, ho(t), n && fo(n, "pointerdown" === t), r);
      }
      function yo(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var bo = yo("dragHorizontal"),
        wo = yo("dragVertical");
      function xo(e) {
        var t = !1;
        if ("y" === e) t = wo();
        else if ("x" === e) t = bo();
        else {
          var n = bo(),
            r = wo();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function So() {
        var e = xo(!0);
        return !e || (e(), !1);
      }
      function Eo(e, t, n) {
        return function (r, i) {
          var o;
          oo(r) &&
            !So() &&
            (null === (o = e.animationState) ||
              void 0 === o ||
              o.setActive(eo.Hover, t),
            null === n || void 0 === n || n(r, i));
        };
      }
      var ko = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      function Co(t) {
        return (0, e.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var To = new WeakMap(),
        Po = new WeakMap(),
        Oo = function (e) {
          var t;
          null === (t = To.get(e.target)) || void 0 === t || t(e);
        },
        Ao = function (e) {
          e.forEach(Oo);
        };
      function Mo(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = D(e, ["root"]),
            r = t || document;
          Po.has(r) || Po.set(r, {});
          var i = Po.get(r),
            o = JSON.stringify(n);
          return (
            i[o] || (i[o] = new IntersectionObserver(Ao, R({ root: t }, n))),
            i[o]
          );
        })(t);
        return (
          To.set(e, n),
          r.observe(e),
          function () {
            To.delete(e), r.unobserve(e);
          }
        );
      }
      var _o = { some: 0, all: 1 };
      function jo(t, n, r, i) {
        var o = i.root,
          a = i.margin,
          l = i.amount,
          s = void 0 === l ? "some" : l,
          u = i.once;
        (0, e.useEffect)(
          function () {
            if (t) {
              var e = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof s ? s : _o[s],
              };
              return Mo(r.getInstance(), e, function (e) {
                var t,
                  i = e.isIntersecting;
                if (
                  n.isInView !== i &&
                  ((n.isInView = i), !u || i || !n.hasEnteredView)
                ) {
                  i && (n.hasEnteredView = !0),
                    null === (t = r.animationState) ||
                      void 0 === t ||
                      t.setActive(eo.InView, i);
                  var o = r.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave;
                  null === a || void 0 === a || a(e);
                }
              });
            }
          },
          [t, o, a, s]
        );
      }
      function Lo(t, n, r, i) {
        var o = i.fallback,
          a = void 0 === o || o;
        (0, e.useEffect)(
          function () {
            t &&
              a &&
              requestAnimationFrame(function () {
                var e;
                n.hasEnteredView = !0;
                var t = r.getProps().onViewportEnter;
                null === t || void 0 === t || t(null),
                  null === (e = r.animationState) ||
                    void 0 === e ||
                    e.setActive(eo.InView, !0);
              });
          },
          [t]
        );
      }
      var No = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        Io = {
          inView: No(function (t) {
            var n = t.visualElement,
              r = t.whileInView,
              i = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              l = void 0 === a ? {} : a,
              s = (0, e.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = Boolean(r || i || o);
            l.once && s.current.hasEnteredView && (u = !1),
              ("undefined" === typeof IntersectionObserver ? Lo : jo)(
                u,
                s.current,
                n,
                l
              );
          }),
          tap: No(function (t) {
            var n = t.onTap,
              r = t.onTapStart,
              i = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              l = n || r || i || o,
              s = (0, e.useRef)(!1),
              u = (0, e.useRef)(null);
            function c() {
              var e;
              null === (e = u.current) || void 0 === e || e.call(u),
                (u.current = null);
            }
            function d() {
              var e;
              return (
                c(),
                (s.current = !1),
                null === (e = a.animationState) ||
                  void 0 === e ||
                  e.setActive(eo.Tap, !1),
                !So()
              );
            }
            function f(e, t) {
              d() &&
                (ko(a.getInstance(), e.target)
                  ? null === n || void 0 === n || n(e, t)
                  : null === i || void 0 === i || i(e, t));
            }
            function p(e, t) {
              d() && (null === i || void 0 === i || i(e, t));
            }
            go(
              a,
              "pointerdown",
              l
                ? function (e, t) {
                    var n;
                    c(),
                      s.current ||
                        ((s.current = !0),
                        (u.current = jt(
                          mo(window, "pointerup", f),
                          mo(window, "pointercancel", p)
                        )),
                        null === (n = a.animationState) ||
                          void 0 === n ||
                          n.setActive(eo.Tap, !0),
                        null === r || void 0 === r || r(e, t));
                  }
                : void 0
            ),
              Co(c);
          }),
          focus: No(function (e) {
            var t = e.whileFocus,
              n = e.visualElement;
            io(
              n,
              "focus",
              t
                ? function () {
                    var e;
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(eo.Focus, !0);
                  }
                : void 0
            ),
              io(
                n,
                "blur",
                t
                  ? function () {
                      var e;
                      null === (e = n.animationState) ||
                        void 0 === e ||
                        e.setActive(eo.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: No(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              i = e.visualElement;
            go(i, "pointerenter", t || r ? Eo(i, !0, t) : void 0),
              go(i, "pointerleave", n || r ? Eo(i, !1, n) : void 0);
          }),
        },
        Ro = 0,
        Do = function () {
          return Ro++;
        };
      function zo() {
        var t = (0, e.useContext)(q);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          r = t.onExitComplete,
          i = t.register,
          o = ue(Do);
        (0, e.useEffect)(function () {
          return i(o);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return null === r || void 0 === r ? void 0 : r(o);
              },
            ]
          : [!0];
      }
      function Vo(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var Fo = function (e) {
          return /^0[^.\s]+$/.test(e);
        },
        Bo = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        Uo = [
          Ke,
          ut,
          st,
          lt,
          dt,
          ct,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        Ho = function (e) {
          return Uo.find(Bo(e));
        },
        Wo = V(V([], z(Uo), !1), [St, At], !1),
        Go = function (e) {
          return Wo.find(Bo(e));
        };
      function Xo(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Le(n));
      }
      function qo(e, t) {
        var n = ie(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          i = r.transitionEnd,
          o = void 0 === i ? {} : i;
        r.transition;
        var a = D(r, ["transitionEnd", "transition"]);
        for (var l in (a = R(R({}, a), o))) {
          Xo(e, l, Fn(a[l]));
        }
      }
      function Yo(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function $o(e, t, n) {
        var r;
        void 0 === n && (n = {});
        var i = ie(e, t, n.custom),
          o = (i || {}).transition,
          a = void 0 === o ? e.getDefaultTransition() || {} : o;
        n.transitionOverride && (a = n.transitionOverride);
        var l = i
            ? function () {
                return Qo(e, i, n);
              }
            : function () {
                return Promise.resolve();
              },
          s = (
            null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i = a.delayChildren,
                  o = void 0 === i ? 0 : i,
                  l = a.staggerChildren,
                  s = a.staggerDirection;
                return (function (e, t, n, r, i, o) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === i && (i = 1);
                  var a = [],
                    l = (e.variantChildren.size - 1) * r,
                    s =
                      1 === i
                        ? function (e) {
                            return void 0 === e && (e = 0), e * r;
                          }
                        : function (e) {
                            return void 0 === e && (e = 0), l - e * r;
                          };
                  return (
                    Array.from(e.variantChildren)
                      .sort(Ko)
                      .forEach(function (e, r) {
                        a.push(
                          $o(e, t, R(R({}, o), { delay: n + s(r) })).then(
                            function () {
                              return e.notifyAnimationComplete(t);
                            }
                          )
                        );
                      }),
                    Promise.all(a)
                  );
                })(e, t, o + r, l, s, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = a.when;
        if (u) {
          var c = z("beforeChildren" === u ? [l, s] : [s, l], 2),
            d = c[0],
            f = c[1];
          return d().then(f);
        }
        return Promise.all([l(), s(n.delay)]);
      }
      function Qo(e, t, n) {
        var r,
          i = void 0 === n ? {} : n,
          o = i.delay,
          a = void 0 === o ? 0 : o,
          l = i.transitionOverride,
          s = i.type,
          u = e.makeTargetAnimatable(t),
          c = u.transition,
          d = void 0 === c ? e.getDefaultTransition() : c,
          f = u.transitionEnd,
          p = D(u, ["transition", "transitionEnd"]);
        l && (d = l);
        var v = [],
          h =
            s &&
            (null === (r = e.animationState) || void 0 === r
              ? void 0
              : r.getState()[s]);
        for (var m in p) {
          var g = e.getValue(m),
            y = p[m];
          if (!(!g || void 0 === y || (h && Zo(h, m)))) {
            var b = R({ delay: a }, d);
            e.shouldReduceMotion &&
              Wr(m) &&
              (b = R(R({}, b), { type: !1, delay: 0 }));
            var w = qn(m, g, y, b);
            v.push(w);
          }
        }
        return Promise.all(v).then(function () {
          f && qo(e, f);
        });
      }
      function Ko(e, t) {
        return e.sortNodePosition(t);
      }
      function Zo(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          i = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), i;
      }
      var Jo = [
          eo.Animate,
          eo.InView,
          eo.Focus,
          eo.Hover,
          eo.Tap,
          eo.Drag,
          eo.Exit,
        ],
        ea = V([], z(Jo), !1).reverse(),
        ta = Jo.length;
      function na(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  e.notifyAnimationStart(t),
                  Array.isArray(t))
                ) {
                  var i = t.map(function (t) {
                    return $o(e, t, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof t) r = $o(e, t, n);
                else {
                  var o = "function" === typeof t ? ie(e, t, n.custom) : t;
                  r = Qo(e, o, n);
                }
                return r.then(function () {
                  return e.notifyAnimationComplete(t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function ra(e) {
        var t = na(e),
          n = (function () {
            var e;
            return (
              ((e = {})[eo.Animate] = ia(!0)),
              (e[eo.InView] = ia()),
              (e[eo.Hover] = ia()),
              (e[eo.Tap] = ia()),
              (e[eo.Drag] = ia()),
              (e[eo.Focus] = ia()),
              (e[eo.Exit] = ia()),
              e
            );
          })(),
          r = {},
          i = !0,
          o = function (t, n) {
            var r = ie(e, n);
            if (r) {
              r.transition;
              var i = r.transitionEnd,
                o = D(r, ["transition", "transitionEnd"]);
              t = R(R(R({}, t), o), i);
            }
            return t;
          };
        function a(a, l) {
          for (
            var s,
              u = e.getProps(),
              c = e.getVariantContext(!0) || {},
              d = [],
              f = new Set(),
              p = {},
              v = 1 / 0,
              h = function (t) {
                var r = ea[t],
                  h = n[r],
                  m = null !== (s = u[r]) && void 0 !== s ? s : c[r],
                  g = ne(m),
                  y = r === l ? h.isActive : null;
                !1 === y && (v = t);
                var b = m === c[r] && m !== u[r] && g;
                if (
                  (b && i && e.manuallyAnimateOnMount && (b = !1),
                  (h.protectedKeys = R({}, p)),
                  (!h.isActive && null === y) ||
                    (!m && !h.prevProp) ||
                    Qi(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var w = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (te(t)) return !Vo(t, e);
                    return !1;
                  })(h.prevProp, m),
                  x = w || (r === l && h.isActive && !b && g) || (t > v && g),
                  S = Array.isArray(m) ? m : [m],
                  E = S.reduce(o, {});
                !1 === y && (E = {});
                var k = h.prevResolvedValues,
                  C = void 0 === k ? {} : k,
                  T = R(R({}, C), E),
                  P = function (e) {
                    (x = !0), f.delete(e), (h.needsAnimating[e] = !0);
                  };
                for (var O in T) {
                  var A = E[O],
                    M = C[O];
                  p.hasOwnProperty(O) ||
                    (A !== M
                      ? kn(A) && kn(M)
                        ? !Vo(A, M) || w
                          ? P(O)
                          : (h.protectedKeys[O] = !0)
                        : void 0 !== A
                        ? P(O)
                        : f.add(O)
                      : void 0 !== A && f.has(O)
                      ? P(O)
                      : (h.protectedKeys[O] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = E),
                  h.isActive && (p = R(R({}, p), E)),
                  i && e.blockInitialAnimation && (x = !1),
                  x &&
                    !b &&
                    d.push.apply(
                      d,
                      V(
                        [],
                        z(
                          S.map(function (e) {
                            return { animation: e, options: R({ type: r }, a) };
                          })
                        ),
                        !1
                      )
                    );
              },
              m = 0;
            m < ta;
            m++
          )
            h(m);
          if (((r = R({}, p)), f.size)) {
            var g = {};
            f.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (g[t] = n);
            }),
              d.push({ animation: g });
          }
          var y = Boolean(d.length);
          return (
            i && !1 === u.initial && !e.manuallyAnimateOnMount && (y = !1),
            (i = !1),
            y ? t(d) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (e) {
            return void 0 !== r[e];
          },
          animateChanges: a,
          setActive: function (t, r, i) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var l = a(i, t);
            for (var s in n) n[s].protectedKeys = {};
            return l;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function ia(e) {
        return (
          void 0 === e && (e = !1),
          {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var oa = {
          animation: No(function (t) {
            var n = t.visualElement,
              r = t.animate;
            n.animationState || (n.animationState = ra(n)),
              Qi(r) &&
                (0, e.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: No(function (t) {
            var n = t.custom,
              r = t.visualElement,
              i = z(zo(), 2),
              o = i[0],
              a = i[1],
              l = (0, e.useContext)(q);
            (0, e.useEffect)(
              function () {
                var e, t;
                r.isPresent = o;
                var i =
                  null === (e = r.animationState) || void 0 === e
                    ? void 0
                    : e.setActive(eo.Exit, !o, {
                        custom:
                          null !==
                            (t =
                              null === l || void 0 === l ? void 0 : l.custom) &&
                          void 0 !== t
                            ? t
                            : n,
                      });
                !o && (null === i || void 0 === i || i.then(a));
              },
              [o]
            );
          }),
        },
        aa = (function () {
          function e(e, t, n) {
            var r = this,
              i = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var e = ua(r.lastMoveEventInfo, r.history),
                    t = null !== r.startEvent,
                    n = wr(e.offset, { x: 0, y: 0 }) >= 3;
                  if (t || n) {
                    var i = e.point,
                      o = Ce().timestamp;
                    r.history.push(R(R({}, i), { timestamp: o }));
                    var a = r.handlers,
                      l = a.onStart,
                      s = a.onMove;
                    t ||
                      (l && l(r.lastMoveEvent, e),
                      (r.startEvent = r.lastMoveEvent)),
                      s && s(r.lastMoveEvent, e);
                  }
                }
              }),
              (this.handlePointerMove = function (e, t) {
                (r.lastMoveEvent = e),
                  (r.lastMoveEventInfo = la(t, r.transformPagePoint)),
                  oo(e) && 0 === e.buttons
                    ? r.handlePointerUp(e, t)
                    : Te.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (e, t) {
                r.end();
                var n = r.handlers,
                  i = n.onEnd,
                  o = n.onSessionEnd,
                  a = ua(la(t, r.transformPagePoint), r.history);
                r.startEvent && i && i(e, a), o && o(e, a);
              }),
              !(ao(e) && e.touches.length > 1))
            ) {
              (this.handlers = t), (this.transformPagePoint = i);
              var o = la(co(e), this.transformPagePoint),
                a = o.point,
                l = Ce().timestamp;
              this.history = [R(R({}, a), { timestamp: l })];
              var s = t.onSessionStart;
              s && s(e, ua(o, this.history)),
                (this.removeListeners = jt(
                  mo(window, "pointermove", this.handlePointerMove),
                  mo(window, "pointerup", this.handlePointerUp),
                  mo(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (e.prototype.updateHandlers = function (e) {
              this.handlers = e;
            }),
            (e.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                we.update(this.updatePoint);
            }),
            e
          );
        })();
      function la(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function sa(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function ua(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: sa(n, da(t)),
          offset: sa(n, ca(t)),
          velocity: fa(t, 0.1),
        };
      }
      function ca(e) {
        return e[0];
      }
      function da(e) {
        return e[e.length - 1];
      }
      function fa(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, i = da(e);
          n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > pn(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function pa(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function va(e, t) {
        var n,
          r = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min &&
            ((r = (n = z([i, r], 2))[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      var ha = 0.35;
      function ma(e, t, n) {
        return { min: ga(e, t), max: ga(e, n) };
      }
      function ga(e, t) {
        var n;
        return "number" === typeof e
          ? e
          : null !== (n = e[t]) && void 0 !== n
          ? n
          : 0;
      }
      function ya(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function ba(e, t) {
        return ya(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var wa = new WeakMap(),
        xa = (function () {
          function e(e) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = e);
          }
          return (
            (e.prototype.start = function (e, t) {
              var n = this,
                r = (void 0 === t ? {} : t).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new aa(
                  e,
                  {
                    onSessionStart: function (e) {
                      n.stopAnimation(),
                        i && n.snapToCursor(co(e, "page").point);
                    },
                    onStart: function (e, t) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        l = i.onDragStart;
                      (!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = xo(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        Vr(function (e) {
                          var t,
                            r,
                            i = n.getAxisMotionValue(e).get() || 0;
                          if (st.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (t = n.visualElement.projection) ||
                                  void 0 === t
                                    ? void 0
                                    : t.layout) || void 0 === r
                                ? void 0
                                : r.actual[e];
                            if (o) i = xr(o) * (parseFloat(i) / 100);
                          }
                          n.originPoint[e] = i;
                        }),
                        null === l || void 0 === l || l(e, t),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(eo.Drag, !0));
                    },
                    onMove: function (e, t) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        l = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var s = t.offset;
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (e, t) {
                              void 0 === t && (t = 10);
                              var n = null;
                              Math.abs(e.y) > t
                                ? (n = "y")
                                : Math.abs(e.x) > t && (n = "x");
                              return n;
                            })(s)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", t.point, s),
                          n.updateAxis("y", t.point, s),
                          n.visualElement.syncRender(),
                          null === l || void 0 === l || l(e, t);
                      }
                    },
                    onSessionEnd: function (e, t) {
                      return n.stop(e, t);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (e.prototype.stop = function (e, t) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = t.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(e, t);
              }
            }),
            (e.prototype.cancel = function () {
              var e, t;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (t = this.visualElement.animationState) ||
                  void 0 === t ||
                  t.setActive(eo.Drag, !1);
            }),
            (e.prototype.updateAxis = function (e, t, n) {
              var r = this.getProps().drag;
              if (n && Sa(e, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(e),
                  o = this.originPoint[e] + n[e];
                this.constraints &&
                  this.constraints[e] &&
                  (o = (function (e, t, n) {
                    var r = t.min,
                      i = t.max;
                    return (
                      void 0 !== r && e < r
                        ? (e = n ? Pe(r, e, n.min) : Math.max(e, r))
                        : void 0 !== i &&
                          e > i &&
                          (e = n ? Pe(i, e, n.max) : Math.min(e, i)),
                      e
                    );
                  })(o, this.constraints[e], this.elastic[e])),
                  i.set(o);
              }
            }),
            (e.prototype.resolveConstraints = function () {
              var e = this,
                t = this.getProps(),
                n = t.dragConstraints,
                r = t.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints;
              n && ee(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (e, t) {
                      var n = t.top,
                        r = t.left,
                        i = t.bottom,
                        o = t.right;
                      return { x: pa(e.x, r, o), y: pa(e.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (e) {
                  return (
                    void 0 === e && (e = ha),
                    !1 === e ? (e = 0) : !0 === e && (e = ha),
                    { x: ma(e, "left", "right"), y: ma(e, "top", "bottom") }
                  );
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Vr(function (t) {
                    e.getAxisMotionValue(t) &&
                      (e.constraints[t] = (function (e, t) {
                        var n = {};
                        return (
                          void 0 !== t.min && (n.min = t.min - e.min),
                          void 0 !== t.max && (n.max = t.max - e.min),
                          n
                        );
                      })(i.actual[t], e.constraints[t]));
                  });
            }),
            (e.prototype.resolveRefConstraints = function () {
              var e = this.getProps(),
                t = e.dragConstraints,
                n = e.onMeasureDragConstraints;
              if (!t || !ee(t)) return !1;
              var r = t.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o = (function (e, t, n) {
                  var r = ba(e, n),
                    i = t.scroll;
                  return i && (fr(r.x, i.x), fr(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (e, t) {
                  return { x: va(e.x, t.x), y: va(e.y, t.y) };
                })(i.layout.actual, o);
              if (n) {
                var l = n(
                  (function (e) {
                    var t = e.x,
                      n = e.y;
                    return {
                      top: n.min,
                      right: t.max,
                      bottom: n.max,
                      left: t.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!l), l && (a = ya(l));
              }
              return a;
            }),
            (e.prototype.startAnimation = function (e) {
              var t = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragMomentum,
                o = n.dragElastic,
                a = n.dragTransition,
                l = n.dragSnapToOrigin,
                s = n.onDragTransitionEnd,
                u = this.constraints || {},
                c = Vr(function (n) {
                  var s;
                  if (Sa(n, r, t.currentDirection)) {
                    var c =
                      null !==
                        (s = null === u || void 0 === u ? void 0 : u[n]) &&
                      void 0 !== s
                        ? s
                        : {};
                    l && (c = { min: 0, max: 0 });
                    var d = o ? 200 : 1e6,
                      f = o ? 40 : 1e7,
                      p = R(
                        R(
                          {
                            type: "inertia",
                            velocity: i ? e[n] : 0,
                            bounceStiffness: d,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          a
                        ),
                        c
                      );
                    return t.startAxisValueAnimation(n, p);
                  }
                });
              return Promise.all(c).then(s);
            }),
            (e.prototype.startAxisValueAnimation = function (e, t) {
              return qn(e, this.getAxisMotionValue(e), 0, t);
            }),
            (e.prototype.stopAnimation = function () {
              var e = this;
              Vr(function (t) {
                return e.getAxisMotionValue(t).stop();
              });
            }),
            (e.prototype.getAxisMotionValue = function (e) {
              var t,
                n,
                r = "_drag" + e.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  e,
                  null !==
                    (n =
                      null === (t = this.visualElement.getProps().initial) ||
                      void 0 === t
                        ? void 0
                        : t[e]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (e.prototype.snapToCursor = function (e) {
              var t = this;
              Vr(function (n) {
                if (Sa(n, t.getProps().drag, t.currentDirection)) {
                  var r = t.visualElement.projection,
                    i = t.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      l = o.max;
                    i.set(e[n] - Pe(a, l, 0.5));
                  }
                }
              });
            }),
            (e.prototype.scalePositionWithinConstraints = function () {
              var e,
                t = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (ee(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                Vr(function (e) {
                  var n = t.getAxisMotionValue(e);
                  if (n) {
                    var r = n.get();
                    a[e] = (function (e, t) {
                      var n = 0.5,
                        r = xr(e),
                        i = xr(t);
                      return (
                        i > r
                          ? (n = We(t.min, t.max - r, e.min))
                          : r > i && (n = We(e.min, e.max - i, t.min)),
                        Ie(0, 1, n)
                      );
                    })({ min: r, max: r }, t.constraints[e]);
                  }
                });
                var l = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = l
                  ? l({}, "")
                  : "none"),
                  null === (e = o.root) || void 0 === e || e.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  Vr(function (e) {
                    if (Sa(e, r, null)) {
                      var n = t.getAxisMotionValue(e),
                        i = t.constraints[e],
                        o = i.min,
                        l = i.max;
                      n.set(Pe(o, l, a[e]));
                    }
                  });
              }
            }),
            (e.prototype.addListeners = function () {
              var e,
                t = this;
              wa.set(this.visualElement, this);
              var n = mo(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (e) {
                    var n = t.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && t.start(e);
                  }
                ),
                r = function () {
                  ee(t.getProps().dragConstraints) &&
                    (t.constraints = t.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (e = i.root) || void 0 === e || e.updateScroll(),
                i.updateLayout()),
                r();
              var a = ro(window, "resize", function () {
                t.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (e) {
                  var n = e.delta,
                    r = e.hasLayoutChanged;
                  t.isDragging &&
                    r &&
                    (Vr(function (e) {
                      var r = t.getAxisMotionValue(e);
                      r &&
                        ((t.originPoint[e] += n[e].translate),
                        r.set(r.get() + n[e].translate));
                    }),
                    t.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (e.prototype.getProps = function () {
              var e = this.visualElement.getProps(),
                t = e.drag,
                n = void 0 !== t && t,
                r = e.dragDirectionLock,
                i = void 0 !== r && r,
                o = e.dragPropagation,
                a = void 0 !== o && o,
                l = e.dragConstraints,
                s = void 0 !== l && l,
                u = e.dragElastic,
                c = void 0 === u ? ha : u,
                d = e.dragMomentum,
                f = void 0 === d || d;
              return R(R({}, e), {
                drag: n,
                dragDirectionLock: i,
                dragPropagation: a,
                dragConstraints: s,
                dragElastic: c,
                dragMomentum: f,
              });
            }),
            e
          );
        })();
      function Sa(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var Ea = {
          pan: No(function (t) {
            var n = t.onPan,
              r = t.onPanStart,
              i = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              l = n || r || i || o,
              s = (0, e.useRef)(null),
              u = (0, e.useContext)(G).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: r,
                onMove: n,
                onEnd: function (e, t) {
                  (s.current = null), i && i(e, t);
                },
              };
            (0, e.useEffect)(function () {
              null !== s.current && s.current.updateHandlers(c);
            }),
              go(
                a,
                "pointerdown",
                l &&
                  function (e) {
                    s.current = new aa(e, c, { transformPagePoint: u });
                  }
              ),
              Co(function () {
                return s.current && s.current.end();
              });
          }),
          drag: No(function (t) {
            var n = t.dragControls,
              r = t.visualElement,
              i = ue(function () {
                return new xa(r);
              });
            (0, e.useEffect)(
              function () {
                return n && n.subscribe(i);
              },
              [i, n]
            ),
              (0, e.useEffect)(
                function () {
                  return i.addListeners();
                },
                [i]
              );
          }),
        },
        ka = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var Ca = function (e) {
          var t = e.treeType,
            n = void 0 === t ? "" : t,
            r = e.build,
            i = e.getBaseTarget,
            o = e.makeTargetAnimatable,
            a = e.measureViewportBox,
            l = e.render,
            s = e.readValueFromInstance,
            u = e.removeValueFromRenderState,
            c = e.sortNodePosition,
            d = e.scrapeMotionValuesFromProps;
          return function (e, t) {
            var f = e.parent,
              p = e.props,
              v = e.presenceId,
              h = e.blockInitialAnimation,
              m = e.visualState,
              g = e.shouldReduceMotion;
            void 0 === t && (t = {});
            var y,
              b,
              w = !1,
              x = m.latestValues,
              S = m.renderState,
              E = (function () {
                var e = ka.map(function () {
                    return new _e();
                  }),
                  t = {},
                  n = {
                    clearAllListeners: function () {
                      return e.forEach(function (e) {
                        return e.clear();
                      });
                    },
                    updatePropListeners: function (e) {
                      ka.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = e[o];
                        null === (i = t[r]) || void 0 === i || i.call(t),
                          a && (t[r] = n[o](a));
                      });
                    },
                  };
                return (
                  e.forEach(function (e, t) {
                    (n["on" + ka[t]] = function (t) {
                      return e.add(t);
                    }),
                      (n["notify" + ka[t]] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.notify.apply(e, V([], z(t), !1));
                      });
                  }),
                  n
                );
              })(),
              k = new Map(),
              C = new Map(),
              T = {},
              P = R({}, x);
            function O() {
              y && w && (A(), l(y, S, p.style, F.projection));
            }
            function A() {
              r(F, S, x, t, p);
            }
            function M() {
              E.notifyUpdate(x);
            }
            function _(e, t) {
              var n = t.onChange(function (t) {
                  (x[e] = t), p.onUpdate && Te.update(M, !1, !0);
                }),
                r = t.onRenderRequest(F.scheduleRender);
              C.set(e, function () {
                n(), r();
              });
            }
            var j = d(p);
            for (var L in j) {
              var N = j[L];
              void 0 !== x[L] && Ne(N) && N.set(x[L], !1);
            }
            var I = oe(p),
              D = ae(p),
              F = R(
                R(
                  {
                    treeType: n,
                    current: null,
                    depth: f ? f.depth + 1 : 0,
                    parent: f,
                    children: new Set(),
                    presenceId: v,
                    shouldReduceMotion: g,
                    variantChildren: D ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === f || void 0 === f ? void 0 : f.isMounted()
                    ),
                    blockInitialAnimation: h,
                    isMounted: function () {
                      return Boolean(y);
                    },
                    mount: function (e) {
                      (w = !0),
                        (y = F.current = e),
                        F.projection && F.projection.mount(e),
                        D &&
                          f &&
                          !I &&
                          (b =
                            null === f || void 0 === f
                              ? void 0
                              : f.addVariantChild(F)),
                        k.forEach(function (e, t) {
                          return _(t, e);
                        }),
                        null === f || void 0 === f || f.children.add(F),
                        F.setProps(p);
                    },
                    unmount: function () {
                      var e;
                      null === (e = F.projection) ||
                        void 0 === e ||
                        e.unmount(),
                        we.update(M),
                        we.render(O),
                        C.forEach(function (e) {
                          return e();
                        }),
                        null === b || void 0 === b || b(),
                        null === f || void 0 === f || f.children.delete(F),
                        E.clearAllListeners(),
                        (y = void 0),
                        (w = !1);
                    },
                    addVariantChild: function (e) {
                      var t,
                        n = F.getClosestVariantNode();
                      if (n)
                        return (
                          null === (t = n.variantChildren) ||
                            void 0 === t ||
                            t.add(e),
                          function () {
                            return n.variantChildren.delete(e);
                          }
                        );
                    },
                    sortNodePosition: function (e) {
                      return c && n === e.treeType
                        ? c(F.getInstance(), e.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return D
                        ? F
                        : null === f || void 0 === f
                        ? void 0
                        : f.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return p.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (e) {
                      return x[e];
                    },
                    setStaticValue: function (e, t) {
                      return (x[e] = t);
                    },
                    getLatestValues: function () {
                      return x;
                    },
                    setVisibility: function (e) {
                      F.isVisible !== e &&
                        ((F.isVisible = e), F.scheduleRender());
                    },
                    makeTargetAnimatable: function (e, t) {
                      return void 0 === t && (t = !0), o(F, e, p, t);
                    },
                    measureViewportBox: function () {
                      return a(y, p);
                    },
                    addValue: function (e, t) {
                      F.hasValue(e) && F.removeValue(e),
                        k.set(e, t),
                        (x[e] = t.get()),
                        _(e, t);
                    },
                    removeValue: function (e) {
                      var t;
                      k.delete(e),
                        null === (t = C.get(e)) || void 0 === t || t(),
                        C.delete(e),
                        delete x[e],
                        u(e, S);
                    },
                    hasValue: function (e) {
                      return k.has(e);
                    },
                    getValue: function (e, t) {
                      var n = k.get(e);
                      return (
                        void 0 === n &&
                          void 0 !== t &&
                          ((n = Le(t)), F.addValue(e, n)),
                        n
                      );
                    },
                    forEachValue: function (e) {
                      return k.forEach(e);
                    },
                    readValue: function (e) {
                      var n;
                      return null !== (n = x[e]) && void 0 !== n
                        ? n
                        : s(y, e, t);
                    },
                    setBaseTarget: function (e, t) {
                      P[e] = t;
                    },
                    getBaseTarget: function (e) {
                      if (i) {
                        var t = i(p, e);
                        if (void 0 !== t && !Ne(t)) return t;
                      }
                      return P[e];
                    },
                  },
                  E
                ),
                {
                  build: function () {
                    return A(), S;
                  },
                  scheduleRender: function () {
                    Te.render(O, !1, !0);
                  },
                  syncRender: O,
                  setProps: function (e) {
                    (e.transformTemplate || p.transformTemplate) &&
                      F.scheduleRender(),
                      (p = e),
                      E.updatePropListeners(e),
                      (T = (function (e, t, n) {
                        var r;
                        for (var i in t) {
                          var o = t[i],
                            a = n[i];
                          if (Ne(o)) e.addValue(i, o);
                          else if (Ne(a)) e.addValue(i, Le(o));
                          else if (a !== o)
                            if (e.hasValue(i)) {
                              var l = e.getValue(i);
                              !l.hasAnimated && l.set(o);
                            } else
                              e.addValue(
                                i,
                                Le(
                                  null !== (r = e.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                        }
                        for (var i in n) void 0 === t[i] && e.removeValue(i);
                        return t;
                      })(F, d(p), T));
                  },
                  getProps: function () {
                    return p;
                  },
                  getVariant: function (e) {
                    var t;
                    return null === (t = p.variants) || void 0 === t
                      ? void 0
                      : t[e];
                  },
                  getDefaultTransition: function () {
                    return p.transition;
                  },
                  getTransformPagePoint: function () {
                    return p.transformPagePoint;
                  },
                  getVariantContext: function (e) {
                    if ((void 0 === e && (e = !1), e))
                      return null === f || void 0 === f
                        ? void 0
                        : f.getVariantContext();
                    if (!I) {
                      var t =
                        (null === f || void 0 === f
                          ? void 0
                          : f.getVariantContext()) || {};
                      return void 0 !== p.initial && (t.initial = p.initial), t;
                    }
                    for (var n = {}, r = 0; r < Pa; r++) {
                      var i = Ta[r],
                        o = p[i];
                      (ne(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return F;
          };
        },
        Ta = V(["initial"], z(Jo), !1),
        Pa = Ta.length;
      function Oa(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var Aa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Ma(e, t, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          );
        var r = z(
            (function (e) {
              var t = Aa.exec(e);
              if (!t) return [,];
              var n = z(t, 3);
              return [n[1], n[2]];
            })(e),
            2
          ),
          i = r[0],
          o = r[1];
        if (i) {
          var a = window.getComputedStyle(t).getPropertyValue(i);
          return a ? a.trim() : Oa(o) ? Ma(o, t, n + 1) : o;
        }
      }
      var _a,
        ja = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        La = function (e) {
          return ja.has(e);
        },
        Na = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        Ia = function (e) {
          return e === Ke || e === ut;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(_a || (_a = {}));
      var Ra = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        Da = function (e, t) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return Ra(o[1], t);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? Ra(a[1], e) : 0;
          };
        },
        za = new Set(["x", "y", "z"]),
        Va = Br.filter(function (e) {
          return !za.has(e);
        });
      var Fa = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = t.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              i = void 0 === r ? "0" : r,
              o = t.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Da(4, 13),
          y: Da(5, 14),
        },
        Ba = function (e, t, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (t = R({}, t)),
            (r = R({}, r));
          var i = Object.keys(t).filter(La),
            o = [],
            a = !1,
            l = [];
          if (
            (i.forEach(function (i) {
              var s = e.getValue(i);
              if (e.hasValue(i)) {
                var u,
                  c = n[i],
                  d = Ho(c),
                  f = t[i];
                if (kn(f)) {
                  var p = f.length,
                    v = null === f[0] ? 1 : 0;
                  (c = f[v]), (d = Ho(c));
                  for (var h = v; h < p; h++)
                    u ? Ho(f[h]) : (u = Ho(f[h])) === d || (Ia(d) && Ia(u));
                } else u = Ho(f);
                if (d !== u)
                  if (Ia(d) && Ia(u)) {
                    var m = s.get();
                    "string" === typeof m && s.set(parseFloat(m)),
                      "string" === typeof f
                        ? (t[i] = parseFloat(f))
                        : Array.isArray(f) &&
                          u === ut &&
                          (t[i] = f.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === u || void 0 === u ? void 0 : u.transform) &&
                    (0 === c || 0 === f)
                      ? 0 === c
                        ? s.set(u.transform(c))
                        : (t[i] = d.transform(f))
                      : (a ||
                          ((o = (function (e) {
                            var t = [];
                            return (
                              Va.forEach(function (n) {
                                var r = e.getValue(n);
                                void 0 !== r &&
                                  (t.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              t.length && e.syncRender(),
                              t
                            );
                          })(e)),
                          (a = !0)),
                        l.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                        Na(s, f));
              }
            }),
            l.length)
          ) {
            var s = (function (e, t, n) {
              var r = t.measureViewportBox(),
                i = t.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                l = {};
              "none" === a && t.setStaticValue("display", e.display || "block"),
                n.forEach(function (e) {
                  l[e] = Fa[e](r, o);
                }),
                t.syncRender();
              var s = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  Na(r, l[n]), (e[n] = Fa[n](s, o));
                }),
                e
              );
            })(t, e, l);
            return (
              o.length &&
                o.forEach(function (t) {
                  var n = z(t, 2),
                    r = n[0],
                    i = n[1];
                  e.getValue(r).set(i);
                }),
              e.syncRender(),
              { target: s, transitionEnd: r }
            );
          }
          return { target: t, transitionEnd: r };
        };
      function Ua(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(La);
        })(t)
          ? Ba(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var Ha = function (e, t, n, r) {
        var i = (function (e, t, n) {
          var r,
            i = D(t, []),
            o = e.getInstance();
          if (!(o instanceof Element)) return { target: i, transitionEnd: n };
          for (var a in (n && (n = R({}, n)),
          e.forEachValue(function (e) {
            var t = e.get();
            if (Oa(t)) {
              var n = Ma(t, o);
              n && e.set(n);
            }
          }),
          i)) {
            var l = i[a];
            if (Oa(l)) {
              var s = Ma(l, o);
              s &&
                ((i[a] = s),
                n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = l)));
            }
          }
          return { target: i, transitionEnd: n };
        })(e, t, r);
        return Ua(e, (t = i.target), n, (r = i.transitionEnd));
      };
      var Wa = {
          treeType: "dom",
          readValueFromInstance: function (e, t) {
            if (Wr(t)) {
              var n = Dn(t);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = e), window.getComputedStyle(r));
            return (Ci(t) ? i.getPropertyValue(t) : i[t]) || 0;
          },
          sortNodePosition: function (e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
          },
          getBaseTarget: function (e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t];
          },
          measureViewportBox: function (e, t) {
            return ba(e, t.transformPagePoint);
          },
          resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
          },
          restoreTransform: function (e, t) {
            e.style.transform = t.style.transform;
          },
          removeValueFromRenderState: function (e, t) {
            var n = t.vars,
              r = t.style;
            delete n[e], delete r[e];
          },
          makeTargetAnimatable: function (e, t, n, r) {
            var i = n.transformValues;
            void 0 === r && (r = !0);
            var o = t.transition,
              a = t.transitionEnd,
              l = D(t, ["transition", "transitionEnd"]),
              s = (function (e, t, n) {
                var r,
                  i,
                  o = {};
                for (var a in e)
                  o[a] =
                    null !== (r = Yo(a, t)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(l, o || {}, e);
            if ((i && (a && (a = i(a)), l && (l = i(l)), s && (s = i(s))), r)) {
              !(function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  l = Object.keys(t).filter(function (t) {
                    return !e.hasValue(t);
                  }),
                  s = l.length;
                if (s)
                  for (var u = 0; u < s; u++) {
                    var c = l[u],
                      d = t[c],
                      f = null;
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : e.readValue(c)) && void 0 !== i
                            ? i
                            : t[c]),
                      void 0 !== f &&
                        null !== f &&
                        ("string" === typeof f &&
                        (/^\-?\d*\.?\d+$/.test(f) || Fo(f))
                          ? (f = parseFloat(f))
                          : !Go(f) && At.test(d) && (f = zn(c, d)),
                        e.addValue(c, Le(f)),
                        (null !== (o = (a = n)[c]) && void 0 !== o) ||
                          (a[c] = f),
                        e.setBaseTarget(c, f));
                  }
              })(e, l, s);
              var u = Ha(e, l, s, a);
              (a = u.transitionEnd), (l = u.target);
            }
            return R({ transition: o, transitionEnd: a }, l);
          },
          scrapeMotionValuesFromProps: Yi,
          build: function (e, t, n, r, i) {
            void 0 !== e.isVisible &&
              (t.style.visibility = e.isVisible ? "visible" : "hidden"),
              Pi(t, n, r, i.transformTemplate);
          },
          render: Gi,
        },
        Ga = Ca(Wa),
        Xa = Ca(
          R(R({}, Wa), {
            getBaseTarget: function (e, t) {
              return e[t];
            },
            readValueFromInstance: function (e, t) {
              var n;
              return Wr(t)
                ? (null === (n = Dn(t)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((t = Xi.has(t) ? t : Wi(t)), e.getAttribute(t));
            },
            scrapeMotionValuesFromProps: $i,
            build: function (e, t, n, r, i) {
              Vi(t, n, r, i.transformTemplate);
            },
            render: qi,
          })
        ),
        qa = function (e, t) {
          return Si(e)
            ? Xa(t, { enableHardwareAcceleration: !1 })
            : Ga(t, { enableHardwareAcceleration: !0 });
        };
      function Ya(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var $a = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!ut.test(e)) return e;
              e = parseFloat(e);
            }
            var n = Ya(e, t.target.x),
              r = Ya(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Qa = "_$css",
        Ka = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              i = e,
              o = e.includes("var("),
              a = [];
            o &&
              (e = e.replace(Aa, function (e) {
                return a.push(e), Qa;
              }));
            var l = At.parse(e);
            if (l.length > 5) return i;
            var s = At.createTransformer(e),
              u = "number" !== typeof l[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (l[0 + u] /= c), (l[1 + u] /= d);
            var f = Pe(c, d, 0.5);
            "number" === typeof l[2 + u] && (l[2 + u] /= f),
              "number" === typeof l[3 + u] && (l[3 + u] /= f);
            var p = s(l);
            if (o) {
              var v = 0;
              p = p.replace(Qa, function () {
                var e = a[v];
                return v++, e;
              });
            }
            return p;
          },
        },
        Za = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            I(t, e),
            (t.prototype.componentDidMount = function () {
              var e,
                t = this,
                n = this.props,
                r = n.visualElement,
                i = n.layoutGroup,
                o = n.switchLayoutGroup,
                a = n.layoutId,
                l = r.projection;
              (e = Ja),
                Object.assign(Dr, e),
                l &&
                  ((null === i || void 0 === i ? void 0 : i.group) &&
                    i.group.add(l),
                  (null === o || void 0 === o ? void 0 : o.register) &&
                    a &&
                    o.register(l),
                  l.root.didUpdate(),
                  l.addEventListener("animationComplete", function () {
                    t.safeToRemove();
                  }),
                  l.setOptions(
                    R(R({}, l.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (Qr.hasEverUpdated = !0);
            }),
            (t.prototype.getSnapshotBeforeUpdate = function (e) {
              var t = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                l = i.projection;
              return l
                ? ((l.isPresent = a),
                  o || e.layoutDependency !== r || void 0 === r
                    ? l.willUpdate()
                    : this.safeToRemove(),
                  e.isPresent !== a &&
                    (a
                      ? l.promote()
                      : l.relegate() ||
                        Te.postRender(function () {
                          var e;
                          (null === (e = l.getStack()) || void 0 === e
                            ? void 0
                            : e.members.length) || t.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.visualElement.projection;
              e &&
                (e.root.didUpdate(),
                !e.currentAnimation && e.isLead() && this.safeToRemove());
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.visualElement,
                n = e.layoutGroup,
                r = e.switchLayoutGroup,
                i = t.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (t.prototype.safeToRemove = function () {
              var e = this.props.safeToRemove;
              null === e || void 0 === e || e();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(e.Component);
      var Ja = {
          borderRadius: R(R({}, $a), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: $a,
          borderTopRightRadius: $a,
          borderBottomLeftRadius: $a,
          borderBottomRightRadius: $a,
          boxShadow: Ka,
        },
        el = {
          measureLayout: function (t) {
            var n = z(zo(), 2),
              r = n[0],
              i = n[1],
              o = (0, e.useContext)(mi);
            return e.createElement(
              Za,
              R({}, t, {
                layoutGroup: o,
                switchLayoutGroup: (0, e.useContext)(gi),
                isPresent: r,
                safeToRemove: i,
              })
            );
          },
        },
        tl = Kr({
          attachResizeListener: function (e, t) {
            return (
              e.addEventListener("resize", t, { passive: !0 }),
              function () {
                return e.removeEventListener("resize", t);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        nl = { current: void 0 },
        rl = Kr({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!nl.current) {
              var e = new tl(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (nl.current = e);
            }
            return nl.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = null !== t && void 0 !== t ? t : "none";
          },
        }),
        il = R(R(R(R({}, oa), Io), Ea), el),
        ol = wi(function (e, t) {
          return (function (e, t, n, r, i) {
            var o = t.forwardMotionProps,
              a = void 0 !== o && o,
              l = Si(e) ? to : no;
            return R(R({}, l), {
              preloadedFeatures: n,
              useRender: Ui(a),
              createVisualElement: r,
              projectionNodeConstructor: i,
              Component: e,
            });
          })(e, t, il, qa, rl);
        });
      var al = function () {
          var t = { duration: 2, type: "spring" },
            n = (0, e.useContext)(w).state.darkMode;
          return (0, b.jsxs)("div", {
            className: "Intro",
            id: "Intro",
            children: [
              (0, b.jsxs)("div", {
                className: "i-left",
                children: [
                  (0, b.jsxs)("div", {
                    className: "i-name",
                    children: [
                      (0, b.jsx)("span", {
                        style: { color: n ? "white" : "" },
                        children: "Hy! I Am",
                      }),
                      (0, b.jsx)("span", { children: "Emile SHUMBUSHO" }),
                      (0, b.jsx)("span", {
                        children:
                          "Software developer with experience in web designing and mobile development.",
                      }),
                    ],
                  }),
                  (0, b.jsx)(C.rU, {
                    to: "contact",
                    smooth: !0,
                    spy: !0,
                    children: (0, b.jsx)("button", {
                      className: "button i-button",
                      children: "Hire me",
                    }),
                  }),
                  (0, b.jsxs)("div", {
                    className: "i-icons",
                    children: [
                      (0, b.jsx)("a", {
                        href: "https://github.com/Emile-SHUMBUSHO",
                        children: (0, b.jsx)("img", {
                          src: j,
                          alt: "",
                          target: "_blank",
                        }),
                      }),
                      (0, b.jsx)("a", {
                        href: "https://www.linkedin.com/in/emile-shumbusho-349493195/",
                        children: (0, b.jsx)("img", {
                          src: L,
                          alt: "",
                          target: "_blank",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "i-right",
                children: [
                  (0, b.jsx)("img", {
                    src: P,
                    alt: "",
                    className: "profilePic",
                  }),
                  (0, b.jsx)(ol.img, {
                    initial: { left: "-36%" },
                    whileInView: { left: "-24%" },
                    transition: t,
                    src: O,
                    alt: "",
                  }),
                  (0, b.jsx)(ol.div, {
                    initial: { top: "-4%", left: "64%" },
                    whileInView: { left: "58%" },
                    transition: t,
                    className: "floating-div",
                    children: (0, b.jsx)(_, {
                      img: M,
                      text1: "Web",
                      text2: "Developer",
                    }),
                  }),
                  (0, b.jsx)(ol.div, {
                    initial: { left: "9rem", top: "18rem" },
                    whileInView: { left: "0rem" },
                    transition: t,
                    className: "floating-div",
                    children: (0, b.jsx)(_, {
                      img: A,
                      text1: "Mobile",
                      text2: "App",
                    }),
                  }),
                  (0, b.jsx)("div", {
                    className: "blur",
                    style: { background: "rgb(238 210 255)" },
                  }),
                  (0, b.jsx)("div", {
                    className: "blur",
                    style: {
                      background: "#C1F5FF",
                      top: "17rem",
                      width: "21rem",
                      height: "11rem",
                      left: "-9rem",
                    },
                  }),
                ],
              }),
            ],
          });
        },
        ll = function (e) {
          var t = e.emoji,
            n = e.heading,
            r = e.detail,
            i = e.color;
          return (0, b.jsxs)("div", {
            className: "card",
            style: { borderColor: { color: i } },
            children: [
              (0, b.jsx)("img", { src: t, alt: "" }),
              (0, b.jsx)("span", { children: n }),
              (0, b.jsx)("span", { children: r }),
            ],
          });
        },
        sl = n(840),
        ul = n(733),
        cl = n(279),
        dl = n(520),
        fl = function () {
          var t = (0, e.useContext)(w).state.darkMode,
            n = { duration: 1, type: "spring" };
          return (0, b.jsxs)("div", {
            className: "services",
            id: "services",
            children: [
              (0, b.jsxs)("div", {
                className: "awesome",
                children: [
                  (0, b.jsx)("span", {
                    style: { color: t ? "white" : "" },
                    children: "My Awesome",
                  }),
                  (0, b.jsx)("span", { children: "services" }),
                  (0, b.jsx)("a", {
                    href: dl,
                    download: !0,
                    children: (0, b.jsx)("button", {
                      className: "button s-button",
                      children: "Download CV",
                    }),
                  }),
                  (0, b.jsx)("div", {
                    className: "blur s-blur1",
                    style: { background: "#ABF1FF94" },
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "cards",
                children: [
                  (0, b.jsx)(ol.div, {
                    initial: { left: "25rem" },
                    whileInView: { left: "14rem" },
                    transition: n,
                    children: (0, b.jsx)(ll, {
                      emoji: sl,
                      heading: "Design",
                      detail:
                        "I have experience of using Figma, as a tool for project prototyping and works towards a shared goal.",
                    }),
                  }),
                  (0, b.jsx)(ol.div, {
                    initial: { left: "-11rem", top: "12rem" },
                    whileInView: { left: "-4rem" },
                    transition: n,
                    children: (0, b.jsx)(ll, {
                      emoji: ul,
                      heading: "Developer",
                      detail:
                        "Html, Css, JavaScript, React, React native, Nodejs,",
                    }),
                  }),
                  (0, b.jsx)(ol.div, {
                    initial: { top: "19rem", left: "25rem" },
                    whileInView: { left: "12rem" },
                    transition: n,
                    children: (0, b.jsx)(ll, {
                      emoji: cl,
                      heading: "UI/UX",
                      detail:
                        "UX design refers to the term \u201cuser experience design\u201d, while UI stands for \u201cuser interface design\u201d. Both elements are crucial to a product and work closely together.",
                      color: "rgba(252, 166, 31, 0.45)",
                    }),
                  }),
                  (0, b.jsx)("div", {
                    className: "blur s-blur2",
                    style: { background: "var(--purple)" },
                  }),
                ],
              }),
            ],
          });
        },
        pl = function () {
          var t = (0, e.useContext)(w).state.darkMode;
          return (0, b.jsxs)("div", {
            className: "experience",
            id: "experience",
            children: [
              (0, b.jsxs)("div", {
                className: "achievement",
                children: [
                  (0, b.jsx)("div", {
                    className: "circle",
                    style: { color: t ? "var(--orange)" : "" },
                    children: "3+",
                  }),
                  (0, b.jsx)("span", {
                    style: { color: t ? "white" : "" },
                    children: "Months ",
                  }),
                  (0, b.jsx)("span", { children: "Experience" }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "achievement",
                children: [
                  (0, b.jsx)("div", {
                    className: "circle",
                    style: { color: t ? "var(--orange)" : "" },
                    children: "1+",
                  }),
                  (0, b.jsx)("span", {
                    style: { color: t ? "white" : "" },
                    children: "completed ",
                  }),
                  (0, b.jsx)("span", { children: "Project" }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "achievement",
                children: [
                  (0, b.jsx)("div", {
                    className: "circle",
                    style: { color: t ? "var(--orange)" : "" },
                    children: "1+",
                  }),
                  (0, b.jsx)("span", {
                    style: { color: t ? "white" : "" },
                    children: "company ",
                  }),
                  (0, b.jsx)("span", { children: "Intern" }),
                ],
              }),
            ],
          });
        };
      function vl(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function hl(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ml(e, t, n) {
        return (
          t && hl(e.prototype, t),
          n && hl(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function gl(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function yl() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : gl(t[n]) &&
              gl(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              yl(e[n], t[n]);
        });
      }
      var bl = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function wl() {
        var e = "undefined" !== typeof document ? document : {};
        return yl(e, bl), e;
      }
      var xl = {
        document: bl,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function Sl() {
        var e = "undefined" !== typeof window ? window : {};
        return yl(e, xl), e;
      }
      function El(e) {
        return (
          (El =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          El(e)
        );
      }
      function kl(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Cl(e, t) {
        if (t && ("object" === El(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return kl(e);
      }
      function Tl(e, t) {
        return (
          (Tl =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          Tl(e, t)
        );
      }
      function Pl(e) {
        return (
          (Pl = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Pl(e)
        );
      }
      function Ol() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Al(e, t, n) {
        return (
          (Al = Ol()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && Tl(i, n.prototype), i;
              }),
          Al.apply(null, arguments)
        );
      }
      function Ml(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (Ml = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return Al(e, arguments, Pl(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Tl(r, e)
            );
          }),
          Ml(e)
        );
      }
      var _l = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Tl(e, t);
        })(n, e);
        var t = (function (e) {
          var t = Ol();
          return function () {
            var n,
              r = Pl(e);
            if (t) {
              var i = Pl(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return Cl(this, n);
          };
        })(n);
        function n(e) {
          var r;
          return (
            vl(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : (function (e) {
                  var t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: function () {
                      return t;
                    },
                    set: function (e) {
                      t.__proto__ = e;
                    },
                  });
                })(kl((r = t.call.apply(t, [this].concat(xt(e || [])))))),
            Cl(r)
          );
        }
        return ml(n);
      })(Ml(Array));
      function jl() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, xt(jl(e))) : t.push(e);
          }),
          t
        );
      }
      function Ll(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Nl(e, t) {
        var n = Sl(),
          r = wl(),
          i = [];
        if (!t && e instanceof _l) return e;
        if (!e) return new _l(i);
        if ("string" === typeof e) {
          var o = e.trim();
          if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
            var a = "div";
            0 === o.indexOf("<li") && (a = "ul"),
              0 === o.indexOf("<tr") && (a = "tbody"),
              (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (a = "tr"),
              0 === o.indexOf("<tbody") && (a = "table"),
              0 === o.indexOf("<option") && (a = "select");
            var l = r.createElement(a);
            l.innerHTML = o;
            for (var s = 0; s < l.childNodes.length; s += 1)
              i.push(l.childNodes[s]);
          } else
            i = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), i = 0;
                i < r.length;
                i += 1
              )
                n.push(r[i]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof _l) return e;
          i = e;
        }
        return new _l(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(i)
        );
      }
      Nl.fn = _l.prototype;
      var Il = "resize scroll".split(" ");
      function Rl(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if ("undefined" === typeof n[0]) {
            for (var i = 0; i < this.length; i += 1)
              Il.indexOf(e) < 0 &&
                (e in this[i] ? this[i][e]() : Nl(this[i]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      Rl("click"),
        Rl("blur"),
        Rl("focus"),
        Rl("focusin"),
        Rl("focusout"),
        Rl("keyup"),
        Rl("keydown"),
        Rl("keypress"),
        Rl("submit"),
        Rl("change"),
        Rl("mousedown"),
        Rl("mousemove"),
        Rl("mouseup"),
        Rl("mouseenter"),
        Rl("mouseleave"),
        Rl("mouseout"),
        Rl("mouseover"),
        Rl("touchstart"),
        Rl("touchend"),
        Rl("touchmove"),
        Rl("resize"),
        Rl("scroll");
      var Dl = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jl(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, xt(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jl(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, xt(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jl(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            Ll(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = jl(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            i = t[1],
            o = t[2],
            a = t[3];
          function l(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), Nl(t).is(i)))
                o.apply(t, n);
              else
                for (var r = Nl(t).parents(), a = 0; a < r.length; a += 1)
                  Nl(r[a]).is(i) && o.apply(r[a], n);
            }
          }
          function s(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((r = t[0]), (o = t[1]), (a = t[2]), (i = void 0)),
            a || (a = !1);
          for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (i)
              for (u = 0; u < c.length; u += 1) {
                var p = c[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                  f.dom7LiveListeners[p].push({
                    listener: o,
                    proxyListener: l,
                  }),
                  f.addEventListener(p, l, a);
              }
            else
              for (u = 0; u < c.length; u += 1) {
                var v = c[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[v] || (f.dom7Listeners[v] = []),
                  f.dom7Listeners[v].push({ listener: o, proxyListener: s }),
                  f.addEventListener(v, s, a);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            i = t[1],
            o = t[2],
            a = t[3];
          "function" === typeof t[1] &&
            ((r = t[0]), (o = t[1]), (a = t[2]), (i = void 0)),
            a || (a = !1);
          for (var l = r.split(" "), s = 0; s < l.length; s += 1)
            for (var u = l[s], c = 0; c < this.length; c += 1) {
              var d = this[c],
                f = void 0;
              if (
                (!i && d.dom7Listeners
                  ? (f = d.dom7Listeners[u])
                  : i && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                f && f.length)
              )
                for (var p = f.length - 1; p >= 0; p -= 1) {
                  var v = f[p];
                  (o && v.listener === o) ||
                  (o &&
                    v.listener &&
                    v.listener.dom7proxy &&
                    v.listener.dom7proxy === o)
                    ? (d.removeEventListener(u, v.proxyListener, a),
                      f.splice(p, 1))
                    : o ||
                      (d.removeEventListener(u, v.proxyListener, a),
                      f.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = Sl(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var i = n[0].split(" "), o = n[1], a = 0; a < i.length; a += 1)
            for (var l = i[a], s = 0; s < this.length; s += 1) {
              var u = this[s];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(l, {
                  detail: o,
                  bubbles: !0,
                  cancelable: !0,
                });
                (u.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  u.dispatchEvent(c),
                  (u.dom7EventData = []),
                  delete u.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = Sl();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = Sl(),
              t = wl(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = t.body,
              o = n.clientTop || i.clientTop || 0,
              a = n.clientLeft || i.clientLeft || 0,
              l = n === e ? e.scrollY : n.scrollTop,
              s = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + l - o, left: r.left + s - a };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = Sl();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var i in e) this[n].style[i] = e[i];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = Sl(),
            i = wl(),
            o = this[0];
          if (!o || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (o.matches) return o.matches(e);
            if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
            if (o.msMatchesSelector) return o.msMatchesSelector(e);
            for (t = Nl(e), n = 0; n < t.length; n += 1)
              if (t[n] === o) return !0;
            return !1;
          }
          if (e === i) return o === i;
          if (e === r) return o === r;
          if (e.nodeType || e instanceof _l) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === o) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return Nl([]);
          if (e < 0) {
            var n = t + e;
            return Nl(n < 0 ? [] : [this[n]]);
          }
          return Nl([this[e]]);
        },
        append: function () {
          for (var e, t = wl(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" === typeof e) {
                var i = t.createElement("div");
                for (i.innerHTML = e; i.firstChild; )
                  this[r].appendChild(i.firstChild);
              } else if (e instanceof _l)
                for (var o = 0; o < e.length; o += 1) this[r].appendChild(e[o]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = wl();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var i = r.createElement("div");
              for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof _l)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Nl(this[0].nextElementSibling).is(e)
                ? Nl([this[0].nextElementSibling])
                : Nl([])
              : this[0].nextElementSibling
              ? Nl([this[0].nextElementSibling])
              : Nl([])
            : Nl([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return Nl([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            e ? Nl(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Nl(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && Nl(t.previousElementSibling).is(e)
                ? Nl([t.previousElementSibling])
                : Nl([])
              : t.previousElementSibling
              ? Nl([t.previousElementSibling])
              : Nl([]);
          }
          return Nl([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return Nl([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            e ? Nl(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Nl(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Nl(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Nl(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              e ? Nl(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return Nl(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? Nl([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), i = 0;
              i < r.length;
              i += 1
            )
              t.push(r[i]);
          return Nl(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, i = 0; i < r.length; i += 1)
              (e && !Nl(r[i]).is(e)) || t.push(r[i]);
          return Nl(t);
        },
        filter: function (e) {
          return Nl(Ll(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Dl).forEach(function (e) {
        Object.defineProperty(Nl.fn, e, { value: Dl[e], writable: !0 });
      });
      var zl,
        Vl,
        Fl,
        Bl = Nl;
      function Ul(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Hl() {
        return Date.now();
      }
      function Wl(e, t) {
        void 0 === t && (t = "x");
        var n,
          r,
          i,
          o = Sl(),
          a = (function (e) {
            var t,
              n = Sl();
            return (
              n.getComputedStyle && (t = n.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          o.WebKitCSSMatrix
            ? ((r = a.transform || a.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (i = new o.WebKitCSSMatrix("none" === r ? "" : r)))
            : (n = (i =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = o.WebKitCSSMatrix
              ? i.m41
              : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
            (r = o.WebKitCSSMatrix
              ? i.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          r || 0
        );
      }
      function Gl(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Xl(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function ql() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !Xl(r))
            for (
              var i = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                o = 0,
                a = i.length;
              o < a;
              o += 1
            ) {
              var l = i[o],
                s = Object.getOwnPropertyDescriptor(r, l);
              void 0 !== s &&
                s.enumerable &&
                (Gl(e[l]) && Gl(r[l])
                  ? r[l].__swiper__
                    ? (e[l] = r[l])
                    : ql(e[l], r[l])
                  : !Gl(e[l]) && Gl(r[l])
                  ? ((e[l] = {}),
                    r[l].__swiper__ ? (e[l] = r[l]) : ql(e[l], r[l]))
                  : (e[l] = r[l]));
            }
        }
        return e;
      }
      function Yl(e, t, n) {
        e.style.setProperty(t, n);
      }
      function $l(e) {
        var t,
          n = e.swiper,
          i = e.targetPosition,
          o = e.side,
          a = Sl(),
          l = -n.translate,
          s = null,
          u = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(n.cssModeFrameID);
        var c = i > l ? "next" : "prev",
          d = function (e, t) {
            return ("next" === c && e >= t) || ("prev" === c && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === s && (s = t);
          var c = Math.max(Math.min((t - s) / u, 1), 0),
            f = 0.5 - Math.cos(c * Math.PI) / 2,
            p = l + f * (i - l);
          if ((d(p, i) && (p = i), n.wrapperEl.scrollTo(r({}, o, p)), d(p, i)))
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo(r({}, o, p));
              }),
              void a.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = a.requestAnimationFrame(e);
        })();
      }
      function Ql() {
        return (
          zl ||
            (zl = (function () {
              var e = Sl(),
                t = wl();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (r) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          zl
        );
      }
      function Kl(e) {
        return (
          void 0 === e && (e = {}),
          Vl ||
            (Vl = (function (e) {
              var t = (void 0 === e ? {} : e).userAgent,
                n = Ql(),
                r = Sl(),
                i = r.navigator.platform,
                o = t || r.navigator.userAgent,
                a = { ios: !1, android: !1 },
                l = r.screen.width,
                s = r.screen.height,
                u = o.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = o.match(/(iPad).*OS\s([\d_]+)/),
                d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === i,
                v = "MacIntel" === i;
              return (
                !c &&
                  v &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(l, "x").concat(s)) >= 0 &&
                  ((c = o.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (v = !1)),
                u && !p && ((a.os = "android"), (a.android = !0)),
                (c || f || d) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          Vl
        );
      }
      function Zl() {
        return (
          Fl ||
            (Fl = (function () {
              var e = Sl();
              return {
                isSafari: (function () {
                  var t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Fl
        );
      }
      var Jl = {
        on: function (e, t, n) {
          var r = this;
          if ("function" !== typeof t) return r;
          var i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][i](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if ("function" !== typeof t) return r;
          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
              o[a] = arguments[a];
            t.apply(r, o);
          }
          return (i.__emitterProxy = t), r.on(e, i, n);
        },
        onAny: function (e, t) {
          var n = this;
          if ("function" !== typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (r, i) {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners) return r;
          for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
            o[a] = arguments[a];
          "string" === typeof o[0] || Array.isArray(o[0])
            ? ((e = o[0]), (t = o.slice(1, o.length)), (n = r))
            : ((e = o[0].events), (t = o[0].data), (n = o[0].context || r)),
            t.unshift(n);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat(xt(t)));
                }),
                r.eventsListeners &&
                  r.eventsListeners[e] &&
                  r.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            r
          );
        },
      };
      var es = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var i = e.params,
            o = e.$wrapperEl,
            a = e.size,
            l = e.rtlTranslate,
            s = e.wrongRTL,
            u = e.virtual && i.virtual.enabled,
            c = u ? e.virtual.slides.length : e.slides.length,
            d = o.children(".".concat(e.params.slideClass)),
            f = u ? e.virtual.slides.length : d.length,
            p = [],
            v = [],
            h = [],
            m = i.slidesOffsetBefore;
          "function" === typeof m && (m = i.slidesOffsetBefore.call(e));
          var g = i.slidesOffsetAfter;
          "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
          var y = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = i.spaceBetween,
            x = -m,
            S = 0,
            E = 0;
          if ("undefined" !== typeof a) {
            "string" === typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * a),
              (e.virtualSize = -w),
              l
                ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.centeredSlides &&
                i.cssMode &&
                (Yl(e.wrapperEl, "--swiper-centered-offset-before", ""),
                Yl(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var k,
              C = i.grid && i.grid.rows > 1 && e.grid;
            C && e.grid.initSlides(f);
            for (
              var T =
                  "auto" === i.slidesPerView &&
                  i.breakpoints &&
                  Object.keys(i.breakpoints).filter(function (e) {
                    return (
                      "undefined" !== typeof i.breakpoints[e].slidesPerView
                    );
                  }).length > 0,
                P = 0;
              P < f;
              P += 1
            ) {
              k = 0;
              var O = d.eq(P);
              if (
                (C && e.grid.updateSlide(P, O, f, t),
                "none" !== O.css("display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  T && (d[P].style[t("width")] = "");
                  var A = getComputedStyle(O[0]),
                    M = O[0].style.transform,
                    _ = O[0].style.webkitTransform;
                  if (
                    (M && (O[0].style.transform = "none"),
                    _ && (O[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    k = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                  else {
                    var j = n(A, "width"),
                      L = n(A, "padding-left"),
                      N = n(A, "padding-right"),
                      I = n(A, "margin-left"),
                      R = n(A, "margin-right"),
                      D = A.getPropertyValue("box-sizing");
                    if (D && "border-box" === D) k = j + I + R;
                    else {
                      var z = O[0],
                        V = z.clientWidth;
                      k = j + L + N + I + R + (z.offsetWidth - V);
                    }
                  }
                  M && (O[0].style.transform = M),
                    _ && (O[0].style.webkitTransform = _),
                    i.roundLengths && (k = Math.floor(k));
                } else
                  (k = (a - (i.slidesPerView - 1) * w) / i.slidesPerView),
                    i.roundLengths && (k = Math.floor(k)),
                    d[P] && (d[P].style[t("width")] = "".concat(k, "px"));
                d[P] && (d[P].swiperSlideSize = k),
                  h.push(k),
                  i.centeredSlides
                    ? ((x = x + k / 2 + S / 2 + w),
                      0 === S && 0 !== P && (x = x - a / 2 - w),
                      0 === P && (x = x - a / 2 - w),
                      Math.abs(x) < 0.001 && (x = 0),
                      i.roundLengths && (x = Math.floor(x)),
                      E % i.slidesPerGroup === 0 && p.push(x),
                      v.push(x))
                    : (i.roundLengths && (x = Math.floor(x)),
                      (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                        e.params.slidesPerGroup ===
                        0 && p.push(x),
                      v.push(x),
                      (x = x + k + w)),
                  (e.virtualSize += k + w),
                  (S = k),
                  (E += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, a) + g),
              l &&
                s &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                o.css({
                  width: "".concat(e.virtualSize + i.spaceBetween, "px"),
                }),
              i.setWrapperSize &&
                o.css(
                  r(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + i.spaceBetween, "px")
                  )
                ),
              C && e.grid.updateWrapperSize(k, p, t),
              !i.centeredSlides)
            ) {
              for (var F = [], B = 0; B < p.length; B += 1) {
                var U = p[B];
                i.roundLengths && (U = Math.floor(U)),
                  p[B] <= e.virtualSize - a && F.push(U);
              }
              (p = F),
                Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - a);
            }
            if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
              var H = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
              d.filter(function (e, t) {
                return !i.cssMode || t !== d.length - 1;
              }).css(r({}, H, "".concat(w, "px")));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var W = 0;
              h.forEach(function (e) {
                W += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var G = (W -= i.spaceBetween) - a;
              p = p.map(function (e) {
                return e < 0 ? -m : e > G ? G + g : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var X = 0;
              if (
                (h.forEach(function (e) {
                  X += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (X -= i.spaceBetween) < a)
              ) {
                var q = (a - X) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - q;
                }),
                  v.forEach(function (e, t) {
                    v[t] = e + q;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: v,
                slidesSizesGrid: h,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              Yl(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-p[0], "px")
              ),
                Yl(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
                );
              var Y = -e.snapGrid[0],
                $ = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + Y;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + $;
                }));
            }
            if (
              (f !== c && e.emit("slidesLengthChange"),
              p.length !== y &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              v.length !== b && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset(),
              !u && !i.cssMode && ("slide" === i.effect || "fade" === i.effect))
            ) {
              var Q = "".concat(i.containerModifierClass, "backface-hidden"),
                K = e.$el.hasClass(Q);
              f <= i.maxBackfaceHiddenSlides
                ? K || e.$el.addClass(Q)
                : K && e.$el.removeClass(Q);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            i = n.virtual && n.params.virtual.enabled,
            o = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var a = function (e) {
            return i
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              n.visibleSlides.each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var l = n.activeIndex + t;
                if (l > n.slides.length && !i) break;
                r.push(a(l));
              }
          else r.push(a(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if ("undefined" !== typeof r[t]) {
              var s = r[t].offsetHeight;
              o = s > o ? s : o;
            }
          (o || 0 === o) && n.$wrapperEl.css("height", "".concat(o, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            r = t.slides,
            i = t.rtlTranslate,
            o = t.snapGrid;
          if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var a = -e;
            i && (a = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var l = 0; l < r.length; l += 1) {
              var s = r[l],
                u = s.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
              var c =
                  (a + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                d =
                  (a - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (s.swiperSlideSize + n.spaceBetween),
                f = -(a - u),
                p = f + t.slidesSizesGrid[l];
              ((f >= 0 && f < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (f <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(s),
                t.visibleSlidesIndexes.push(l),
                r.eq(l).addClass(n.slideVisibleClass)),
                (s.progress = i ? -c : c),
                (s.originalProgress = i ? -d : d);
            }
            t.visibleSlides = Bl(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            i = t.maxTranslate() - t.minTranslate(),
            o = t.progress,
            a = t.isBeginning,
            l = t.isEnd,
            s = a,
            u = l;
          0 === i
            ? ((o = 0), (a = !0), (l = !0))
            : ((a = (o = (e - t.minTranslate()) / i) <= 0), (l = o >= 1)),
            Object.assign(t, { progress: o, isBeginning: a, isEnd: l }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            a && !s && t.emit("reachBeginning toEdge"),
            l && !u && t.emit("reachEnd toEdge"),
            ((s && !a) || (u && !l)) && t.emit("fromEdge"),
            t.emit("progress", o);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            i = t.$wrapperEl,
            o = t.activeIndex,
            a = t.realIndex,
            l = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = l
              ? t.$wrapperEl.find(
                  "."
                    .concat(r.slideClass, '[data-swiper-slide-index="')
                    .concat(o, '"]')
                )
              : n.eq(o)).addClass(r.slideActiveClass),
            r.loop &&
              (e.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(a, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : i
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(a, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass));
          var s = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === s.length && (s = n.eq(0)).addClass(r.slideNextClass);
          var u = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === u.length && (u = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
              (s.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass)
                : i
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : i
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            i = n.slidesGrid,
            o = n.snapGrid,
            a = n.params,
            l = n.activeIndex,
            s = n.realIndex,
            u = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var d = 0; d < i.length; d += 1)
              "undefined" !== typeof i[d + 1]
                ? r >= i[d] && r < i[d + 1] - (i[d + 1] - i[d]) / 2
                  ? (c = d)
                  : r >= i[d] && r < i[d + 1] && (c = d + 1)
                : r >= i[d] && (c = d);
            a.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (o.indexOf(r) >= 0) t = o.indexOf(r);
          else {
            var f = Math.min(a.slidesPerGroupSkip, c);
            t = f + Math.floor((c - f) / a.slidesPerGroup);
          }
          if ((t >= o.length && (t = o.length - 1), c !== l)) {
            var p = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: p,
              previousIndex: l,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              s !== p && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            i = Bl(e).closest(".".concat(r.slideClass))[0],
            o = !1;
          if (i)
            for (var a = 0; a < n.slides.length; a += 1)
              if (n.slides[a] === i) {
                (o = !0), (t = a);
                break;
              }
          if (!i || !o)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = i),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  Bl(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var ts = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            n = t.params,
            r = t.rtlTranslate,
            i = t.translate,
            o = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -i : i;
          if (n.cssMode) return i;
          var a = Wl(o[0], e);
          return r && (a = -a), a || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            i = n.params,
            o = n.$wrapperEl,
            a = n.wrapperEl,
            l = n.progress,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            i.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            i.cssMode
              ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -s : -u)
              : i.virtualTranslate ||
                o.transform(
                  "translate3d("
                    .concat(s, "px, ")
                    .concat(u, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== l &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, o) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          var a = this,
            l = a.params,
            s = a.wrapperEl;
          if (a.animating && l.preventInteractionOnTransition) return !1;
          var u,
            c = a.minTranslate(),
            d = a.maxTranslate();
          if (
            ((u = i && e > c ? c : i && e < d ? d : e),
            a.updateProgress(u),
            l.cssMode)
          ) {
            var f = a.isHorizontal();
            if (0 === t) s[f ? "scrollLeft" : "scrollTop"] = -u;
            else {
              var p;
              if (!a.support.smoothScroll)
                return (
                  $l({
                    swiper: a,
                    targetPosition: -u,
                    side: f ? "left" : "top",
                  }),
                  !0
                );
              s.scrollTo(
                (r((p = {}), f ? "left" : "top", -u),
                r(p, "behavior", "smooth"),
                p)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (a.setTransition(0),
                a.setTranslate(u),
                n &&
                  (a.emit("beforeTransitionStart", t, o),
                  a.emit("transitionEnd")))
              : (a.setTransition(t),
                a.setTranslate(u),
                n &&
                  (a.emit("beforeTransitionStart", t, o),
                  a.emit("transitionStart")),
                a.animating ||
                  ((a.animating = !0),
                  a.onTranslateToWrapperTransitionEnd ||
                    (a.onTranslateToWrapperTransitionEnd = function (e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          a.onTranslateToWrapperTransitionEnd
                        ),
                        a.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          a.onTranslateToWrapperTransitionEnd
                        ),
                        (a.onTranslateToWrapperTransitionEnd = null),
                        delete a.onTranslateToWrapperTransitionEnd,
                        n && a.emit("transitionEnd"));
                    }),
                  a.$wrapperEl[0].addEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    a.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function ns(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          i = e.step,
          o = t.activeIndex,
          a = t.previousIndex,
          l = r;
        if (
          (l || (l = o > a ? "next" : o < a ? "prev" : "reset"),
          t.emit("transition".concat(i)),
          n && o !== a)
        ) {
          if ("reset" === l)
            return void t.emit("slideResetTransition".concat(i));
          t.emit("slideChangeTransition".concat(i)),
            "next" === l
              ? t.emit("slideNextTransition".concat(i))
              : t.emit("slidePrevTransition".concat(i));
        }
      }
      var rs = {
        slideTo: function (e, t, n, i, o) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var a = parseInt(e, 10);
            if (!isFinite(a))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = a;
          }
          var l = this,
            s = e;
          s < 0 && (s = 0);
          var u = l.params,
            c = l.snapGrid,
            d = l.slidesGrid,
            f = l.previousIndex,
            p = l.activeIndex,
            v = l.rtlTranslate,
            h = l.wrapperEl,
            m = l.enabled;
          if (
            (l.animating && u.preventInteractionOnTransition) ||
            (!m && !i && !o)
          )
            return !1;
          var g = Math.min(l.params.slidesPerGroupSkip, s),
            y = g + Math.floor((s - g) / l.params.slidesPerGroup);
          y >= c.length && (y = c.length - 1),
            (p || u.initialSlide || 0) === (f || 0) &&
              n &&
              l.emit("beforeSlideChangeStart");
          var b,
            w = -c[y];
          if ((l.updateProgress(w), u.normalizeSlideIndex))
            for (var x = 0; x < d.length; x += 1) {
              var S = -Math.floor(100 * w),
                E = Math.floor(100 * d[x]),
                k = Math.floor(100 * d[x + 1]);
              "undefined" !== typeof d[x + 1]
                ? S >= E && S < k - (k - E) / 2
                  ? (s = x)
                  : S >= E && S < k && (s = x + 1)
                : S >= E && (s = x);
            }
          if (l.initialized && s !== p) {
            if (!l.allowSlideNext && w < l.translate && w < l.minTranslate())
              return !1;
            if (
              !l.allowSlidePrev &&
              w > l.translate &&
              w > l.maxTranslate() &&
              (p || 0) !== s
            )
              return !1;
          }
          if (
            ((b = s > p ? "next" : s < p ? "prev" : "reset"),
            (v && -w === l.translate) || (!v && w === l.translate))
          )
            return (
              l.updateActiveIndex(s),
              u.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== u.effect && l.setTranslate(w),
              "reset" !== b && (l.transitionStart(n, b), l.transitionEnd(n, b)),
              !1
            );
          if (u.cssMode) {
            var C = l.isHorizontal(),
              T = v ? w : -w;
            if (0 === t) {
              var P = l.virtual && l.params.virtual.enabled;
              P &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                (h[C ? "scrollLeft" : "scrollTop"] = T),
                P &&
                  requestAnimationFrame(function () {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._swiperImmediateVirtual = !1);
                  });
            } else {
              var O;
              if (!l.support.smoothScroll)
                return (
                  $l({
                    swiper: l,
                    targetPosition: T,
                    side: C ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo(
                (r((O = {}), C ? "left" : "top", T),
                r(O, "behavior", "smooth"),
                O)
              );
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(w),
            l.updateActiveIndex(s),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, i),
            l.transitionStart(n, b),
            0 === t
              ? l.transitionEnd(n, b)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, b));
                  }),
                l.$wrapperEl[0].addEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          var i = this,
            o = e;
          return i.params.loop && (o += i.loopedSlides), i.slideTo(o, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            i = r.animating,
            o = r.enabled,
            a = r.params;
          if (!o) return r;
          var l = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var s = r.activeIndex < a.slidesPerGroupSkip ? 1 : l;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return a.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            i = r.params,
            o = r.animating,
            a = r.snapGrid,
            l = r.slidesGrid,
            s = r.rtlTranslate;
          if (!r.enabled) return r;
          if (i.loop) {
            if (o && i.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            d = u(s ? r.translate : -r.translate),
            f = a.map(function (e) {
              return u(e);
            }),
            p = a[f.indexOf(d) - 1];
          "undefined" === typeof p &&
            i.cssMode &&
            (a.forEach(function (e, t) {
              d >= e && (c = t);
            }),
            "undefined" !== typeof c && (p = a[c > 0 ? c - 1 : c]));
          var v = 0;
          if (
            ("undefined" !== typeof p &&
              ((v = l.indexOf(p)) < 0 && (v = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((v = v - r.slidesPerViewDynamic("previous", !0) + 1),
                (v = Math.max(v, 0)))),
            i.rewind && r.isBeginning)
          ) {
            var h =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(h, e, t, n);
          }
          return r.slideTo(v, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          var i = this,
            o = i.activeIndex,
            a = Math.min(i.params.slidesPerGroupSkip, o),
            l = a + Math.floor((o - a) / i.params.slidesPerGroup),
            s = i.rtlTranslate ? i.translate : -i.translate;
          if (s >= i.snapGrid[l]) {
            var u = i.snapGrid[l];
            s - u > (i.snapGrid[l + 1] - u) * r &&
              (o += i.params.slidesPerGroup);
          } else {
            var c = i.snapGrid[l - 1];
            s - c <= (i.snapGrid[l] - c) * r && (o -= i.params.slidesPerGroup);
          }
          return (
            (o = Math.max(o, 0)),
            (o = Math.min(o, i.slidesGrid.length - 1)),
            i.slideTo(o, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            i =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            o = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              Bl(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? o < t.loopedSlides - i / 2 ||
                  o > t.slides.length - t.loopedSlides + i / 2
                  ? (t.loopFix(),
                    (o = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    Ul(function () {
                      t.slideTo(o);
                    }))
                  : t.slideTo(o)
                : o > t.slides.length - i
                ? (t.loopFix(),
                  (o = r
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  Ul(function () {
                    t.slideTo(o);
                  }))
                : t.slideTo(o);
          } else t.slideTo(o);
        },
      };
      var is = {
        loopCreate: function () {
          var e = this,
            t = wl(),
            n = e.params,
            r = e.$wrapperEl,
            i = r.children().length > 0 ? Bl(r.children()[0].parentNode) : r;
          i.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var o = i.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var a = n.slidesPerGroup - (o.length % n.slidesPerGroup);
            if (a !== n.slidesPerGroup) {
              for (var l = 0; l < a; l += 1) {
                var s = Bl(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                i.append(s);
              }
              o = i.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = o.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > o.length && (e.loopedSlides = o.length);
          var u = [],
            c = [];
          o.each(function (t, n) {
            var r = Bl(t);
            n < e.loopedSlides && c.push(t),
              n < o.length && n >= o.length - e.loopedSlides && u.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (var d = 0; d < c.length; d += 1)
            i.append(Bl(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var f = u.length - 1; f >= 0; f -= 1)
            i.prepend(Bl(u[f].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            i = e.loopedSlides,
            o = e.allowSlidePrev,
            a = e.allowSlideNext,
            l = e.snapGrid,
            s = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var u = -l[n] - e.getTranslate();
          if (n < i)
            (t = r.length - 3 * i + n),
              (t += i),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          else if (n >= r.length - i) {
            (t = -r.length + n + i),
              (t += i),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((s ? -e.translate : e.translate) - u);
          }
          (e.allowSlidePrev = o), (e.allowSlideNext = a), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function os(e) {
        var t = this,
          n = wl(),
          r = Sl(),
          i = t.touchEventsData,
          o = t.params,
          a = t.touches;
        if (t.enabled && (!t.animating || !o.preventInteractionOnTransition)) {
          !t.animating && o.cssMode && o.loop && t.loopFix();
          var l = e;
          l.originalEvent && (l = l.originalEvent);
          var s = Bl(l.target);
          if (
            ("wrapper" !== o.touchEventsTarget ||
              s.closest(t.wrapperEl).length) &&
            ((i.isTouchEvent = "touchstart" === l.type),
            (i.isTouchEvent || !("which" in l) || 3 !== l.which) &&
              !(!i.isTouchEvent && "button" in l && l.button > 0) &&
              (!i.isTouched || !i.isMoved))
          ) {
            !!o.noSwipingClass &&
              "" !== o.noSwipingClass &&
              l.target &&
              l.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (s = Bl(e.path[0]));
            var u = o.noSwipingSelector
                ? o.noSwipingSelector
                : ".".concat(o.noSwipingClass),
              c = !(!l.target || !l.target.shadowRoot);
            if (
              o.noSwiping &&
              (c
                ? (function (e, t) {
                    return (
                      void 0 === t && (t = this),
                      (function t(n) {
                        return n && n !== wl() && n !== Sl()
                          ? (n.assignedSlot && (n = n.assignedSlot),
                            n.closest(e) || t(n.getRootNode().host))
                          : null;
                      })(t)
                    );
                  })(u, l.target)
                : s.closest(u)[0])
            )
              t.allowClick = !0;
            else if (!o.swipeHandler || s.closest(o.swipeHandler)[0]) {
              (a.currentX =
                "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
                (a.currentY =
                  "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
              var d = a.currentX,
                f = a.currentY,
                p = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                v = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
              if (p && (d <= v || d >= r.innerWidth - v)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (Object.assign(i, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (a.startX = d),
                (a.startY = f),
                (i.touchStartTime = Hl()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                o.threshold > 0 && (i.allowThresholdMove = !1),
                "touchstart" !== l.type)
              ) {
                var h = !0;
                s.is(i.focusableElements) &&
                  ((h = !1), "SELECT" === s[0].nodeName && (i.isTouched = !1)),
                  n.activeElement &&
                    Bl(n.activeElement).is(i.focusableElements) &&
                    n.activeElement !== s[0] &&
                    n.activeElement.blur();
                var m = h && t.allowTouchMove && o.touchStartPreventDefault;
                (!o.touchStartForcePreventDefault && !m) ||
                  s[0].isContentEditable ||
                  l.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !o.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", l);
            }
          }
        }
      }
      function as(e) {
        var t = wl(),
          n = this,
          r = n.touchEventsData,
          i = n.params,
          o = n.touches,
          a = n.rtlTranslate;
        if (n.enabled) {
          var l = e;
          if ((l.originalEvent && (l = l.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === l.type) {
              var s =
                  "touchmove" === l.type &&
                  l.targetTouches &&
                  (l.targetTouches[0] || l.changedTouches[0]),
                u = "touchmove" === l.type ? s.pageX : l.pageX,
                c = "touchmove" === l.type ? s.pageY : l.pageY;
              if (l.preventedByNestedSwiper)
                return (o.startX = u), void (o.startY = c);
              if (!n.allowTouchMove)
                return (
                  Bl(l.target).is(r.focusableElements) || (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(o, {
                      startX: u,
                      startY: c,
                      currentX: u,
                      currentY: c,
                    }),
                    (r.touchStartTime = Hl()))
                  )
                );
              if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (n.isVertical()) {
                  if (
                    (c < o.startY && n.translate <= n.maxTranslate()) ||
                    (c > o.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (u < o.startX && n.translate <= n.maxTranslate()) ||
                  (u > o.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                l.target === t.activeElement &&
                Bl(l.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", l),
                !(l.targetTouches && l.targetTouches.length > 1))
              ) {
                (o.currentX = u), (o.currentY = c);
                var d = o.currentX - o.startX,
                  f = o.currentY - o.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                      n.params.threshold
                  )
                ) {
                  var p;
                  if ("undefined" === typeof r.isScrolling)
                    (n.isHorizontal() && o.currentY === o.startY) ||
                    (n.isVertical() && o.currentX === o.startX)
                      ? (r.isScrolling = !1)
                      : d * d + f * f >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                          Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? p > i.touchAngle
                          : 90 - p > i.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", l),
                    "undefined" === typeof r.startMoving &&
                      ((o.currentX === o.startX && o.currentY === o.startY) ||
                        (r.startMoving = !0)),
                    r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !i.cssMode && l.cancelable && l.preventDefault(),
                      i.touchMoveStopPropagation &&
                        !i.nested &&
                        l.stopPropagation(),
                      r.isMoved ||
                        (i.loop && !i.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (r.allowMomentumBounce = !1),
                        !i.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", l)),
                      n.emit("sliderMove", l),
                      (r.isMoved = !0);
                    var v = n.isHorizontal() ? d : f;
                    (o.diff = v),
                      (v *= i.touchRatio),
                      a && (v = -v),
                      (n.swipeDirection = v > 0 ? "prev" : "next"),
                      (r.currentTranslate = v + r.startTranslate);
                    var h = !0,
                      m = i.resistanceRatio;
                    if (
                      (i.touchReleaseOnEdges && (m = 0),
                      v > 0 && r.currentTranslate > n.minTranslate()
                        ? ((h = !1),
                          i.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + v,
                                m
                              )))
                        : v < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((h = !1),
                          i.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - v,
                                m
                              ))),
                      h && (l.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                      i.threshold > 0)
                    ) {
                      if (!(Math.abs(v) > i.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (o.startX = o.currentX),
                          (o.startY = o.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (o.diff = n.isHorizontal()
                            ? o.currentX - o.startX
                            : o.currentY - o.startY)
                        );
                    }
                    i.followFinger &&
                      !i.cssMode &&
                      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
                        i.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        i.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(r.currentTranslate),
                      n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
        }
      }
      function ls(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          i = t.touches,
          o = t.rtlTranslate,
          a = t.slidesGrid;
        if (t.enabled) {
          var l = e;
          if (
            (l.originalEvent && (l = l.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", l),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var s,
            u = Hl(),
            c = u - n.touchStartTime;
          if (t.allowClick) {
            var d = l.path || (l.composedPath && l.composedPath());
            t.updateClickedSlide((d && d[0]) || l.target),
              t.emit("tap click", l),
              c < 300 &&
                u - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", l);
          }
          if (
            ((n.lastClickTime = Hl()),
            Ul(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === i.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (s = r.followFinger
              ? o
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: s });
            else {
              for (
                var f = 0, p = t.slidesSizesGrid[0], v = 0;
                v < a.length;
                v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var h = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                "undefined" !== typeof a[v + h]
                  ? s >= a[v] &&
                    s < a[v + h] &&
                    ((f = v), (p = a[v + h] - a[v]))
                  : s >= a[v] &&
                    ((f = v), (p = a[a.length - 1] - a[a.length - 2]));
              }
              var m = null,
                g = null;
              r.rewind &&
                (t.isBeginning
                  ? (g =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                  : t.isEnd && (m = 0));
              var y = (s - a[f]) / p,
                b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (y >= r.longSwipesRatio
                    ? t.slideTo(r.rewind && t.isEnd ? m : f + b)
                    : t.slideTo(f)),
                  "prev" === t.swipeDirection &&
                    (y > 1 - r.longSwipesRatio
                      ? t.slideTo(f + b)
                      : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(f));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (l.target === t.navigation.nextEl ||
                  l.target === t.navigation.prevEl)
                  ? l.target === t.navigation.nextEl
                    ? t.slideTo(f + b)
                    : t.slideTo(f)
                  : ("next" === t.swipeDirection &&
                      t.slideTo(null !== m ? m : f + b),
                    "prev" === t.swipeDirection &&
                      t.slideTo(null !== g ? g : f));
              }
            }
        }
      }
      function ss() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            i = e.allowSlidePrev,
            o = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
        }
      }
      function us(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function cs() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var ds = !1;
      function fs() {}
      var ps = function (e, t) {
        var n = wl(),
          r = e.params,
          i = e.touchEvents,
          o = e.el,
          a = e.wrapperEl,
          l = e.device,
          s = e.support,
          u = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (s.touch) {
          var f = !(
            "touchstart" !== i.start ||
            !s.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          o[c](i.start, e.onTouchStart, f),
            o[c](
              i.move,
              e.onTouchMove,
              s.passiveListener ? { passive: !1, capture: u } : u
            ),
            o[c](i.end, e.onTouchEnd, f),
            i.cancel && o[c](i.cancel, e.onTouchEnd, f);
        } else
          o[c](i.start, e.onTouchStart, !1),
            n[c](i.move, e.onTouchMove, u),
            n[c](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          o[c]("click", e.onClick, !0),
          r.cssMode && a[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                ss,
                !0
              )
            : e[d]("observerUpdate", ss, !0);
      };
      var vs = {
          attachEvents: function () {
            var e = this,
              t = wl(),
              n = e.params,
              r = e.support;
            (e.onTouchStart = os.bind(e)),
              (e.onTouchMove = as.bind(e)),
              (e.onTouchEnd = ls.bind(e)),
              n.cssMode && (e.onScroll = cs.bind(e)),
              (e.onClick = us.bind(e)),
              r.touch &&
                !ds &&
                (t.addEventListener("touchstart", fs), (ds = !0)),
              ps(e, "on");
          },
          detachEvents: function () {
            ps(this, "off");
          },
        },
        hs = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var ms = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            i = void 0 === r ? 0 : r,
            o = e.params,
            a = e.$el,
            l = o.breakpoints;
          if (l && (!l || 0 !== Object.keys(l).length)) {
            var s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
            if (s && e.currentBreakpoint !== s) {
              var u = (s in l ? l[s] : void 0) || e.originalParams,
                c = hs(e, o),
                d = hs(e, u),
                f = o.enabled;
              c && !d
                ? (a.removeClass(
                    ""
                      .concat(o.containerModifierClass, "grid ")
                      .concat(o.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  d &&
                  (a.addClass("".concat(o.containerModifierClass, "grid")),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === o.grid.fill)) &&
                    a.addClass(
                      "".concat(o.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses());
              var p = u.direction && u.direction !== o.direction,
                v = o.loop && (u.slidesPerView !== o.slidesPerView || p);
              p && n && e.changeDirection(), ql(e.params, u);
              var h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !h ? e.disable() : !f && h && e.enable(),
                (e.currentBreakpoint = s),
                e.emit("_beforeBreakpoint", u),
                v &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
            var r = !1,
              i = Sl(),
              o = "window" === t ? i.innerHeight : n.clientHeight,
              a = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: o * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var l = 0; l < a.length; l += 1) {
              var s = a[l],
                u = s.point,
                c = s.value;
              "window" === t
                ? i.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (r = u)
                : c <= n.clientWidth && (r = u);
            }
            return r || "max";
          }
        },
      };
      var gs = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            r = e.rtl,
            i = e.$el,
            o = e.device,
            a = e.support,
            l = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (r) {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !a.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, xt(l)),
            i.addClass(xt(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var ys = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function bs(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          var r = Object.keys(n)[0],
            i = n[r];
          "object" === typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in i
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  ql(t, n))
                : ql(t, n))
            : ql(t, n);
        };
      }
      var ws = {
          eventsEmitter: Jl,
          update: es,
          translate: ts,
          transition: {
            setTransition: function (e, t) {
              var n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                ns({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  ns({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: rs,
          loop: is,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                  (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: vs,
          breakpoints: ms,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                r = n.slidesOffsetBefore;
              if (r) {
                var i = e.slides.length - 1,
                  o = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * r;
                e.isLocked = e.size > o;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: gs,
          images: {
            loadImage: function (e, t, n, r, i, o) {
              var a,
                l = Sl();
              function s() {
                o && o();
              }
              Bl(e).parent("picture")[0] || (e.complete && i)
                ? s()
                : t
                ? (((a = new l.Image()).onload = s),
                  (a.onerror = s),
                  r && (a.sizes = r),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : s();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                var r = e.imagesToLoad[n];
                e.loadImage(
                  r,
                  r.currentSrc || r.getAttribute("src"),
                  r.srcset || r.getAttribute("srcset"),
                  r.sizes || r.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        xs = {},
        Ss = (function () {
          function e() {
            var t, n;
            vl(this, e);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            if (
              (1 === i.length &&
              i[0].constructor &&
              "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
                ? (n = i[0])
                : ((t = i[0]), (n = i[1])),
              n || (n = {}),
              (n = ql({}, n)),
              t && !n.el && (n.el = t),
              n.el && Bl(n.el).length > 1)
            ) {
              var a = [];
              return (
                Bl(n.el).each(function (t) {
                  var r = ql({}, n, { el: t });
                  a.push(new e(r));
                }),
                a
              );
            }
            var l,
              s = this;
            ((s.__swiper__ = !0),
            (s.support = Ql()),
            (s.device = Kl({ userAgent: n.userAgent })),
            (s.browser = Zl()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = xt(s.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (l = s.modules).push.apply(l, xt(n.modules));
            var u = {};
            s.modules.forEach(function (e) {
              e({
                swiper: s,
                extendParams: bs(n, u),
                on: s.on.bind(s),
                once: s.once.bind(s),
                off: s.off.bind(s),
                emit: s.emit.bind(s),
              });
            });
            var c = ql({}, ys, u);
            return (
              (s.params = ql({}, c, xs, n)),
              (s.originalParams = ql({}, s.params)),
              (s.passedParams = ql({}, n)),
              s.params &&
                s.params.on &&
                Object.keys(s.params.on).forEach(function (e) {
                  s.on(e, s.params.on[e]);
                }),
              s.params && s.params.onAny && s.onAny(s.params.onAny),
              (s.$ = Bl),
              Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: Bl(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === s.params.direction;
                },
                isVertical: function () {
                  return "vertical" === s.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (s.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (s.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    s.support.touch || !s.params.simulateTouch
                      ? s.touchEventsTouch
                      : s.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: s.params.focusableElements,
                  lastClickTime: Hl(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.emit("_swiper"),
              s.params.init && s.init(),
              s
            );
          }
          return (
            ml(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      i = (n.maxTranslate() - r) * e + r;
                    n.translateTo(i, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return e.className
                      .split(" ")
                      .filter(function (e) {
                        return (
                          0 === e.indexOf("swiper-slide") ||
                          0 === e.indexOf(t.params.slideClass)
                        );
                      })
                      .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function (e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var n = this,
                      r = n.params,
                      i = n.slides,
                      o = n.slidesGrid,
                      a = n.slidesSizesGrid,
                      l = n.size,
                      s = n.activeIndex,
                      u = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, d = i[s].swiperSlideSize, f = s + 1;
                        f < i.length;
                        f += 1
                      )
                        i[f] &&
                          !c &&
                          ((u += 1),
                          (d += i[f].swiperSlideSize) > l && (c = !0));
                      for (var p = s - 1; p >= 0; p -= 1)
                        i[p] &&
                          !c &&
                          ((u += 1),
                          (d += i[p].swiperSlideSize) > l && (c = !0));
                    } else if ("current" === e)
                      for (var v = s + 1; v < i.length; v += 1) {
                        (t ? o[v] + a[v] - o[s] < l : o[v] - o[s] < l) &&
                          (u += 1);
                      }
                    else
                      for (var h = s - 1; h >= 0; h -= 1) {
                        o[s] - o[h] < l && (u += 1);
                      }
                    return u;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(r)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = Bl(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      i = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = Bl(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children(r());
                      })();
                    if (0 === i.length && t.params.createElements) {
                      var o = wl().createElement("div");
                      (i = Bl(o)),
                        (o.className = t.params.wrapperClass),
                        n.append(o),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            i.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                      r = n.params,
                      i = n.$el,
                      o = n.$wrapperEl,
                      a = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          i.removeAttr("style"),
                          o.removeAttr("style"),
                          a &&
                            a.length &&
                            a
                              .removeClass(
                                [
                                  r.slideVisibleClass,
                                  r.slideActiveClass,
                                  r.slideNextClass,
                                  r.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e &&
                          ((n.$el[0].swiper = null),
                          (function (e) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              try {
                                t[e] = null;
                              } catch (n) {}
                              try {
                                delete t[e];
                              } catch (n) {}
                            });
                          })(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    ql(xs, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return xs;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return ys;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(ws).forEach(function (e) {
        Object.keys(ws[e]).forEach(function (t) {
          Ss.prototype[t] = ws[e][t];
        });
      }),
        Ss.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              i = Sl(),
              o = null,
              a = null,
              l = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              s = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((o = new ResizeObserver(function (e) {
                    a = i.requestAnimationFrame(function () {
                      var n = t.width,
                        r = t.height,
                        i = n,
                        o = r;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          r = e.contentRect,
                          a = e.target;
                        (a && a !== t.el) ||
                          ((i = r ? r.width : (n[0] || n).inlineSize),
                          (o = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (i === n && o === r) || l();
                    });
                  })),
                  o.observe(t.el))
                : (i.addEventListener("resize", l),
                  i.addEventListener("orientationchange", s));
            }),
              n("destroy", function () {
                a && i.cancelAnimationFrame(a),
                  o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)),
                  i.removeEventListener("resize", l),
                  i.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              i = e.emit,
              o = [],
              a = Sl(),
              l = function (e, t) {
                void 0 === t && (t = {});
                var n = new (a.MutationObserver || a.WebkitMutationObserver)(
                  function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        i("observerUpdate", e[0]);
                      };
                      a.requestAnimationFrame
                        ? a.requestAnimationFrame(t)
                        : a.setTimeout(t, 0);
                    } else i("observerUpdate", e[0]);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  o.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      l(e[n]);
                  l(t.$el[0], { childList: t.params.observeSlideChildren }),
                    l(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                o.forEach(function (e) {
                  e.disconnect();
                }),
                  o.splice(0, o.length);
              });
          },
        ]);
      var Es = Ss;
      function ks(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Cs(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : ks(t[n]) && ks(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : Cs(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function Ts(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function Ps(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function Os(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function As(e) {
        void 0 === e && (e = "");
        var t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var Ms = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function _s(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = Es.prototype.getBreakpoint(t.breakpoints),
            i = r in t.breakpoints ? t.breakpoints[r] : void 0;
          i && i.slidesPerView && (n = i.slidesPerView);
        }
        var o = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (o += t.loopAdditionalSlides) > e.length && (o = e.length), o;
      }
      function js(t) {
        var n = [];
        return (
          e.Children.toArray(t).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? n.push(e)
              : e.props &&
                e.props.children &&
                js(e.props.children).forEach(function (e) {
                  return n.push(e);
                });
          }),
          n
        );
      }
      function Ls(t) {
        var n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          e.Children.toArray(t).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var t = js(e.props.children);
              t.length > 0
                ? t.forEach(function (e) {
                    return n.push(e);
                  })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function Ns(e) {
        var t,
          n,
          r,
          i,
          o,
          a = e.swiper,
          l = e.slides,
          s = e.passedParams,
          u = e.changedParams,
          c = e.nextEl,
          d = e.prevEl,
          f = e.scrollbarEl,
          p = e.paginationEl,
          v = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          h = a.params,
          m = a.pagination,
          g = a.navigation,
          y = a.scrollbar,
          b = a.virtual,
          w = a.thumbs;
        u.includes("thumbs") &&
          s.thumbs &&
          s.thumbs.swiper &&
          h.thumbs &&
          !h.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            s.controller &&
            s.controller.control &&
            h.controller &&
            !h.controller.control &&
            (n = !0),
          u.includes("pagination") &&
            s.pagination &&
            (s.pagination.el || p) &&
            (h.pagination || !1 === h.pagination) &&
            m &&
            !m.el &&
            (r = !0),
          u.includes("scrollbar") &&
            s.scrollbar &&
            (s.scrollbar.el || f) &&
            (h.scrollbar || !1 === h.scrollbar) &&
            y &&
            !y.el &&
            (i = !0),
          u.includes("navigation") &&
            s.navigation &&
            (s.navigation.prevEl || d) &&
            (s.navigation.nextEl || c) &&
            (h.navigation || !1 === h.navigation) &&
            g &&
            !g.prevEl &&
            !g.nextEl &&
            (o = !0);
        (v.forEach(function (e) {
          if (ks(h[e]) && ks(s[e])) Cs(h[e], s[e]);
          else {
            var t = s[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (h[e] = s[e])
              : !1 === t &&
                a[(n = e)] &&
                (a[n].destroy(),
                "navigation" === n
                  ? ((h[n].prevEl = void 0),
                    (h[n].nextEl = void 0),
                    (a[n].prevEl = void 0),
                    (a[n].nextEl = void 0))
                  : ((h[n].el = void 0), (a[n].el = void 0)));
          }
          var n;
        }),
        v.includes("controller") &&
          !n &&
          a.controller &&
          a.controller.control &&
          h.controller &&
          h.controller.control &&
          (a.controller.control = h.controller.control),
        u.includes("children") && b && h.virtual.enabled
          ? ((b.slides = l), b.update(!0))
          : u.includes("children") &&
            a.lazy &&
            a.params.lazy.enabled &&
            a.lazy.load(),
        t) &&
          w.init() &&
          w.update(!0);
        n && (a.controller.control = h.controller.control),
          r && (p && (h.pagination.el = p), m.init(), m.render(), m.update()),
          i &&
            (f && (h.scrollbar.el = f),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          o &&
            (c && (h.navigation.nextEl = c),
            d && (h.navigation.prevEl = d),
            g.init(),
            g.update()),
          u.includes("allowSlideNext") && (a.allowSlideNext = s.allowSlideNext),
          u.includes("allowSlidePrev") && (a.allowSlidePrev = s.allowSlidePrev),
          u.includes("direction") && a.changeDirection(s.direction, !1),
          a.update();
      }
      function Is(t, n) {
        return "undefined" === typeof window
          ? (0, e.useEffect)(t, n)
          : (0, e.useLayoutEffect)(t, n);
      }
      var Rs = (0, e.createContext)(null),
        Ds = (0, e.createContext)(null),
        zs = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function Vs() {
        return (
          (Vs =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Vs.apply(this, arguments)
        );
      }
      var Fs = (0, e.forwardRef)(function (t, n) {
        var i = void 0 === t ? {} : t,
          o = i.className,
          l = i.tag,
          s = void 0 === l ? "div" : l,
          u = i.wrapperTag,
          c = void 0 === u ? "div" : u,
          d = i.children,
          f = i.onSwiper,
          p = a(i, zs),
          v = !1,
          h = y((0, e.useState)("swiper"), 2),
          m = h[0],
          g = h[1],
          b = y((0, e.useState)(null), 2),
          w = b[0],
          x = b[1],
          S = y((0, e.useState)(!1), 2),
          E = S[0],
          k = S[1],
          C = (0, e.useRef)(!1),
          T = (0, e.useRef)(null),
          P = (0, e.useRef)(null),
          O = (0, e.useRef)(null),
          A = (0, e.useRef)(null),
          M = (0, e.useRef)(null),
          _ = (0, e.useRef)(null),
          j = (0, e.useRef)(null),
          L = (0, e.useRef)(null),
          N = (function (e) {
            void 0 === e && (e = {});
            var t = { on: {} },
              n = {},
              r = {};
            Cs(t, Es.defaults),
              Cs(t, Es.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            var i = {},
              o = Ms.map(function (e) {
                return e.replace(/_/, "");
              });
            return (
              Object.keys(e).forEach(function (a) {
                o.indexOf(a) >= 0
                  ? ks(e[a])
                    ? ((t[a] = {}), (r[a] = {}), Cs(t[a], e[a]), Cs(r[a], e[a]))
                    : ((t[a] = e[a]), (r[a] = e[a]))
                  : 0 === a.search(/on[A-Z]/) && "function" === typeof e[a]
                  ? (n["".concat(a[2].toLowerCase()).concat(a.substr(3))] =
                      e[a])
                  : (i[a] = e[a]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: r, rest: i, events: n }
            );
          })(p),
          I = N.params,
          R = N.passedParams,
          D = N.rest,
          z = N.events,
          V = Ls(d),
          F = V.slides,
          B = V.slots,
          U = function () {
            k(!E);
          };
        Object.assign(I.on, {
          _containerClasses: function (e, t) {
            g(t);
          },
        });
        var H = function () {
          if (
            (Object.assign(I.on, z),
            (v = !0),
            (P.current = new Es(I)),
            (P.current.loopCreate = function () {}),
            (P.current.loopDestroy = function () {}),
            I.loop && (P.current.loopedSlides = _s(F, I)),
            P.current.virtual && P.current.params.virtual.enabled)
          ) {
            P.current.virtual.slides = F;
            var e = {
              cache: !1,
              slides: F,
              renderExternal: x,
              renderExternalUpdate: !1,
            };
            Cs(P.current.params.virtual, e),
              Cs(P.current.originalParams.virtual, e);
          }
        };
        T.current || H(), P.current && P.current.on("_beforeBreakpoint", U);
        return (
          (0, e.useEffect)(function () {
            return function () {
              P.current && P.current.off("_beforeBreakpoint", U);
            };
          }),
          (0, e.useEffect)(function () {
            !C.current &&
              P.current &&
              (P.current.emitSlidesClasses(), (C.current = !0));
          }),
          Is(function () {
            if ((n && (n.current = T.current), T.current))
              return (
                P.current.destroyed && H(),
                (function (e, t) {
                  var n = e.el,
                    r = e.nextEl,
                    i = e.prevEl,
                    o = e.paginationEl,
                    a = e.scrollbarEl,
                    l = e.swiper;
                  Ts(t) &&
                    r &&
                    i &&
                    ((l.params.navigation.nextEl = r),
                    (l.originalParams.navigation.nextEl = r),
                    (l.params.navigation.prevEl = i),
                    (l.originalParams.navigation.prevEl = i)),
                    Ps(t) &&
                      o &&
                      ((l.params.pagination.el = o),
                      (l.originalParams.pagination.el = o)),
                    Os(t) &&
                      a &&
                      ((l.params.scrollbar.el = a),
                      (l.originalParams.scrollbar.el = a)),
                    l.init(n);
                })(
                  {
                    el: T.current,
                    nextEl: M.current,
                    prevEl: _.current,
                    paginationEl: j.current,
                    scrollbarEl: L.current,
                    swiper: P.current,
                  },
                  I
                ),
                f && f(P.current),
                function () {
                  P.current &&
                    !P.current.destroyed &&
                    P.current.destroy(!0, !1);
                }
              );
          }, []),
          Is(function () {
            !v &&
              z &&
              P.current &&
              Object.keys(z).forEach(function (e) {
                P.current.on(e, z[e]);
              });
            var e = (function (e, t, n, r) {
              var i = [];
              if (!t) return i;
              var o = function (e) {
                  i.indexOf(e) < 0 && i.push(e);
                },
                a = r.map(function (e) {
                  return e.key;
                }),
                l = n.map(function (e) {
                  return e.key;
                });
              return (
                a.join("") !== l.join("") && o("children"),
                r.length !== n.length && o("children"),
                Ms.filter(function (e) {
                  return "_" === e[0];
                })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (ks(e[n]) && ks(t[n])) {
                        var r = Object.keys(e[n]),
                          i = Object.keys(t[n]);
                        r.length !== i.length
                          ? o(n)
                          : (r.forEach(function (r) {
                              e[n][r] !== t[n][r] && o(n);
                            }),
                            i.forEach(function (r) {
                              e[n][r] !== t[n][r] && o(n);
                            }));
                      } else e[n] !== t[n] && o(n);
                  }),
                i
              );
            })(R, O.current, F, A.current);
            return (
              (O.current = R),
              (A.current = F),
              e.length &&
                P.current &&
                !P.current.destroyed &&
                Ns({
                  swiper: P.current,
                  slides: F,
                  passedParams: R,
                  changedParams: e,
                  nextEl: M.current,
                  prevEl: _.current,
                  scrollbarEl: L.current,
                  paginationEl: j.current,
                }),
              function () {
                z &&
                  P.current &&
                  Object.keys(z).forEach(function (e) {
                    P.current.off(e, z[e]);
                  });
              }
            );
          }),
          Is(
            function () {
              var e;
              !(e = P.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [w]
          ),
          e.createElement(
            s,
            Vs(
              {
                ref: T,
                className: As("".concat(m).concat(o ? " ".concat(o) : "")),
              },
              D
            ),
            e.createElement(
              Ds.Provider,
              { value: P.current },
              B["container-start"],
              Ts(I) &&
                e.createElement(
                  e.Fragment,
                  null,
                  e.createElement("div", {
                    ref: _,
                    className: "swiper-button-prev",
                  }),
                  e.createElement("div", {
                    ref: M,
                    className: "swiper-button-next",
                  })
                ),
              Os(I) &&
                e.createElement("div", {
                  ref: L,
                  className: "swiper-scrollbar",
                }),
              Ps(I) &&
                e.createElement("div", {
                  ref: j,
                  className: "swiper-pagination",
                }),
              e.createElement(
                c,
                { className: "swiper-wrapper" },
                B["wrapper-start"],
                I.virtual
                  ? (function (t, n, i) {
                      if (!i) return null;
                      var o = t.isHorizontal()
                        ? r(
                            {},
                            t.rtlTranslate ? "right" : "left",
                            "".concat(i.offset, "px")
                          )
                        : { top: "".concat(i.offset, "px") };
                      return n
                        .filter(function (e, t) {
                          return t >= i.from && t <= i.to;
                        })
                        .map(function (n) {
                          return e.cloneElement(n, { swiper: t, style: o });
                        });
                    })(P.current, F, w)
                  : !I.loop || (P.current && P.current.destroyed)
                  ? F.map(function (t) {
                      return e.cloneElement(t, { swiper: P.current });
                    })
                  : (function (t, n, r) {
                      var i = n.map(function (n, r) {
                        return e.cloneElement(n, {
                          swiper: t,
                          "data-swiper-slide-index": r,
                        });
                      });
                      function o(t, n, i) {
                        return e.cloneElement(t, {
                          key: ""
                            .concat(t.key, "-duplicate-")
                            .concat(n, "-")
                            .concat(i),
                          className: ""
                            .concat(t.props.className || "", " ")
                            .concat(r.slideDuplicateClass),
                        });
                      }
                      if (r.loopFillGroupWithBlank) {
                        var a =
                          r.slidesPerGroup - (i.length % r.slidesPerGroup);
                        if (a !== r.slidesPerGroup)
                          for (var l = 0; l < a; l += 1) {
                            var s = e.createElement("div", {
                              className: ""
                                .concat(r.slideClass, " ")
                                .concat(r.slideBlankClass),
                            });
                            i.push(s);
                          }
                      }
                      "auto" !== r.slidesPerView ||
                        r.loopedSlides ||
                        (r.loopedSlides = i.length);
                      var u = _s(i, r),
                        c = [],
                        d = [];
                      return (
                        i.forEach(function (e, t) {
                          t < u && d.push(o(e, t, "prepend")),
                            t < i.length &&
                              t >= i.length - u &&
                              c.push(o(e, t, "append"));
                        }),
                        t && (t.loopedSlides = u),
                        [].concat(c, xt(i), d)
                      );
                    })(P.current, F, I),
                B["wrapper-end"]
              ),
              B["container-end"]
            )
          )
        );
      });
      Fs.displayName = "Swiper";
      var Bs = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function Us() {
        return (
          (Us =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Us.apply(this, arguments)
        );
      }
      var Hs = (0, e.forwardRef)(function (t, n) {
        var r = void 0 === t ? {} : t,
          i = r.tag,
          o = void 0 === i ? "div" : i,
          l = r.children,
          s = r.className,
          u = void 0 === s ? "" : s,
          c = r.swiper,
          d = r.zoom,
          f = r.virtualIndex,
          p = a(r, Bs),
          v = (0, e.useRef)(null),
          h = y((0, e.useState)("swiper-slide"), 2),
          m = h[0],
          g = h[1];
        function b(e, t, n) {
          t === v.current && g(n);
        }
        Is(function () {
          if ((n && (n.current = v.current), v.current && c)) {
            if (!c.destroyed)
              return (
                c.on("_slideClass", b),
                function () {
                  c && c.off("_slideClass", b);
                }
              );
            "swiper-slide" !== m && g("swiper-slide");
          }
        }),
          Is(
            function () {
              c && v.current && g(c.getSlideClasses(v.current));
            },
            [c]
          );
        var w = {
            isActive:
              m.indexOf("swiper-slide-active") >= 0 ||
              m.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              m.indexOf("swiper-slide-prev") >= 0 ||
              m.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              m.indexOf("swiper-slide-next") >= 0 ||
              m.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          x = function () {
            return "function" === typeof l ? l(w) : l;
          };
        return e.createElement(
          o,
          Us(
            {
              ref: v,
              className: As("".concat(m).concat(u ? " ".concat(u) : "")),
              "data-swiper-slide-index": f,
            },
            p
          ),
          e.createElement(
            Rs.Provider,
            { value: w },
            d
              ? e.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof d ? d : void 0,
                  },
                  x()
                )
              : x()
          )
        );
      });
      Hs.displayName = "SwiperSlide";
      var Ws = n(411),
        Gs = n(462),
        Xs = n(89),
        qs = n(567),
        Ys = function () {
          var t = (0, e.useContext)(w).state.darkMode;
          return (0, b.jsxs)("div", {
            className: "portfolio",
            id: "portfolio",
            children: [
              (0, b.jsx)("span", {
                style: { color: t ? "white" : "" },
                children: "Recent Projects",
              }),
              (0, b.jsx)("span", { children: "Portfolio" }),
              (0, b.jsxs)(Fs, {
                spaceBetween: 30,
                slidesPerView: 3,
                grabCursor: !0,
                className: "portfolio-slider",
                children: [
                  (0, b.jsx)(Hs, {
                    children: (0, b.jsx)("img", { src: Ws, alt: "" }),
                  }),
                  (0, b.jsx)(Hs, {
                    children: (0, b.jsx)("img", { src: Gs, alt: "" }),
                  }),
                  (0, b.jsx)(Hs, {
                    children: (0, b.jsx)("img", { src: qs, alt: "" }),
                  }),
                  (0, b.jsx)(Hs, {
                    children: (0, b.jsx)("img", { src: Xs, alt: "" }),
                  }),
                ],
              }),
            ],
          });
        },
        $s = function () {
          var t = (0, e.useContext)(w).state.darkMode,
            n = ((0, e.useRef)(), y((0, e.useState)(!1), 2)),
            r = n[0];
          n[1];
          return (0, b.jsxs)("div", {
            className: "contact-form",
            id: "contact",
            children: [
              (0, b.jsx)("div", {
                className: "w-left",
                children: (0, b.jsxs)("div", {
                  className: "awesome",
                  children: [
                    (0, b.jsx)("span", {
                      style: { color: t ? "white" : "" },
                      children: "Get in Touch",
                    }),
                    (0, b.jsx)("span", { children: "Contact me" }),
                    (0, b.jsx)("div", {
                      className: "blur s-blur1",
                      style: { background: "#ABF1FF94" },
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("div", {
                className: "c-right",
                children: (0, b.jsxs)("form", {
                  target: "_blank",
                  action: "https://formsubmit.co/shumbushoemilef@gmail.com",
                  method: "POST",
                  children: [
                    (0, b.jsx)("input", {
                      type: "text",
                      name: "name",
                      className: "user",
                      placeholder: "Name",
                    }),
                    (0, b.jsx)("input", {
                      type: "email",
                      name: "email",
                      className: "user",
                      placeholder: "Email",
                    }),
                    (0, b.jsx)("textarea", {
                      name: "message",
                      className: "user",
                      placeholder: "Message",
                    }),
                    (0, b.jsx)("input", {
                      type: "submit",
                      value: "Send",
                      className: "button",
                    }),
                    (0, b.jsx)("span", {
                      children: r && "Thanks for Contacting me",
                    }),
                    (0, b.jsx)("div", {
                      className: "blur c-blur1",
                      style: { background: "var(--purple)" },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Qs = n(52),
        Ks = ["color", "size"],
        Zs = function (e) {
          var t = e.color,
            n = e.size,
            r = a(e, Ks);
          return l.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: t,
              },
              r
            ),
            l.createElement("path", {
              d: "M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z",
            })
          );
        };
      (Zs.propTypes = {
        color: u().string,
        size: u().oneOfType([u().string, u().number]),
      }),
        (Zs.defaultProps = { color: "currentColor", size: "24" });
      var Js = Zs,
        eu = ["color", "size"],
        tu = function (e) {
          var t = e.color,
            n = e.size,
            r = a(e, eu);
          return l.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: t,
              },
              r
            ),
            l.createElement("path", {
              d: "M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z",
            })
          );
        };
      (tu.propTypes = {
        color: u().string,
        size: u().oneOfType([u().string, u().number]),
      }),
        (tu.defaultProps = { color: "currentColor", size: "24" });
      var nu = tu,
        ru = ["color", "size"],
        iu = function (e) {
          var t = e.color,
            n = e.size,
            r = a(e, ru);
          return l.createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: t,
              },
              r
            ),
            l.createElement("path", {
              d: "M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z",
            })
          );
        };
      (iu.propTypes = {
        color: u().string,
        size: u().oneOfType([u().string, u().number]),
      }),
        (iu.defaultProps = { color: "currentColor", size: "24" });
      var ou = iu,
        au = function () {
          return (0, b.jsxs)("div", {
            className: "footer",
            children: [
              (0, b.jsx)("img", { src: Qs, alt: "", style: { width: "100%" } }),
              (0, b.jsxs)("div", {
                className: "f-content",
                children: [
                  (0, b.jsx)("span", {
                    children: "shumbushoemilef1@gmail.com",
                  }),
                  (0, b.jsxs)("div", {
                    className: "f-icons",
                    children: [
                      (0, b.jsx)("a", {
                        href: "https://twitter.com/shumbusho_emile",
                        children: (0, b.jsx)(Js, {
                          color: "white",
                          size: "3rem",
                          target: "_blank",
                        }),
                      }),
                      (0, b.jsx)("a", {
                        href: "https://www.linkedin.com/in/emile-shumbusho-349493195/",
                        children: (0, b.jsx)(nu, {
                          color: "white",
                          size: "3rem",
                          target: "_blank",
                        }),
                      }),
                      (0, b.jsx)("a", {
                        href: "https://github.com/Emile-SHUMBUSHO",
                        children: (0, b.jsx)(ou, {
                          color: "white",
                          size: "3rem",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var lu = function () {
        var t = (0, e.useContext)(w).state.darkMode;
        return (0, b.jsxs)("div", {
          className: "App",
          style: { background: t ? "black" : "", color: t ? "white" : "" },
          children: [
            (0, b.jsx)(T, {}),
            (0, b.jsx)(al, {}),
            (0, b.jsx)(fl, {}),
            (0, b.jsx)(pl, {}),
            (0, b.jsx)(Ys, {}),
            (0, b.jsx)($s, {}),
            (0, b.jsx)(au, {}),
          ],
        });
      };
      t.render(
        (0, b.jsx)(E, { children: (0, b.jsx)(lu, {}) }),
        document.getElementById("root")
      );
    })();
})();
//# sourceMappingURL=main.7b99804d.js.map
