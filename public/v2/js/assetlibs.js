if (function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var i = [],
        s = t.document,
        n = Object.getPrototypeOf,
        o = i.slice,
        a = i.concat,
        r = i.push,
        l = i.indexOf,
        h = {},
        c = h.toString,
        u = h.hasOwnProperty,
        d = u.toString,
        p = d.call(Object),
        f = {};

    function m(t, e) {
        var i = (e = e || s).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }
    var g = "3.1.1",
        v = function(t, e) {
            return new v.fn.init(t, e)
        },
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        y = /^-ms-/,
        _ = /-([a-z])/g,
        w = function(t, e) {
            return e.toUpperCase()
        };

    function x(t) {
        var e = !!t && "length" in t && t.length,
            i = v.type(t);
        return "function" !== i && !v.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    v.fn = v.prototype = {
        jquery: g,
        constructor: v,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = v.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return v.each(this, t)
        },
        map: function(t) {
            return this.pushStack(v.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: i.sort,
        splice: i.splice
    }, v.extend = v.fn.extend = function() {
        var t, e, i, s, n, o, a = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || v.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
            if (null != (t = arguments[r]))
                for (e in t) i = a[e], a !== (s = t[e]) && (h && s && (v.isPlainObject(s) || (n = v.isArray(s))) ? (n ? (n = !1, o = i && v.isArray(i) ? i : []) : o = i && v.isPlainObject(i) ? i : {}, a[e] = v.extend(h, o, s)) : void 0 !== s && (a[e] = s));
        return a
    }, v.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === v.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = v.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== c.call(t) || (e = n(t)) && (i = u.call(e, "constructor") && e.constructor, "function" != typeof i || d.call(i) !== p))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[c.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            m(t)
        },
        camelCase: function(t) {
            return t.replace(y, "ms-").replace(_, w)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, s = 0;
            if (x(t))
                for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++);
            else
                for (s in t)
                    if (!1 === e.call(t[s], s, t[s])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(b, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (x(Object(t)) ? v.merge(i, "string" == typeof t ? [t] : t) : r.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, s = 0, n = t.length; s < i; s++) t[n++] = e[s];
            return t.length = n, t
        },
        grep: function(t, e, i) {
            for (var s = [], n = 0, o = t.length, a = !i; n < o; n++) !e(t[n], n) !== a && s.push(t[n]);
            return s
        },
        map: function(t, e, i) {
            var s, n, o = 0,
                r = [];
            if (x(t))
                for (s = t.length; o < s; o++) null != (n = e(t[o], o, i)) && r.push(n);
            else
                for (o in t) null != (n = e(t[o], o, i)) && r.push(n);
            return a.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, s, n;
            if ("string" == typeof e && (i = t[e], e = t, t = i), v.isFunction(t)) return s = o.call(arguments, 2), (n = function() {
                return t.apply(e || this, s.concat(o.call(arguments)))
            }).guid = t.guid = t.guid || v.guid++, n
        },
        now: Date.now,
        support: f
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = i[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        h["[object " + e + "]"] = e.toLowerCase()
    });
    var C = function(t) {
        var e, i, s, n, o, a, r, l, h, c, u, d, p, f, m, g, v, b, y, _ = "sizzle" + 1 * new Date,
            w = t.document,
            x = 0,
            C = 0,
            k = at(),
            T = at(),
            D = at(),
            I = function(t, e) {
                return t === e && (u = !0), 0
            },
            S = {}.hasOwnProperty,
            P = [],
            E = P.pop,
            A = P.push,
            M = P.push,
            O = P.slice,
            N = function(t, e) {
                for (var i = 0, s = t.length; i < s; i++)
                    if (t[i] === e) return i;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            $ = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + $ + "*(" + W + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + $ + "*\\]",
            R = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            F = new RegExp($ + "+", "g"),
            L = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
            j = new RegExp("^" + $ + "*," + $ + "*"),
            q = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
            B = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"),
            Y = new RegExp(R),
            U = new RegExp("^" + W + "$"),
            V = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
            tt = function(t, e, i) {
                var s = "0x" + e - 65536;
                return s != s || i ? e : s < 0 ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function(t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            st = function() {
                d()
            },
            nt = bt(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            M.apply(P = O.call(w.childNodes), w.childNodes), P[w.childNodes.length].nodeType
        } catch (t) {
            M = {
                apply: P.length ? function(t, e) {
                    A.apply(t, O.call(e))
                } : function(t, e) {
                    for (var i = t.length, s = 0; t[i++] = e[s++];);
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, s, n) {
            var o, r, h, c, u, f, v, b = e && e.ownerDocument,
                x = e ? e.nodeType : 9;
            if (s = s || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return s;
            if (!n && ((e ? e.ownerDocument || e : w) !== p && d(e), e = e || p, m)) {
                if (11 !== x && (u = Q.exec(t)))
                    if (o = u[1]) {
                        if (9 === x) {
                            if (!(h = e.getElementById(o))) return s;
                            if (h.id === o) return s.push(h), s
                        } else if (b && (h = b.getElementById(o)) && y(e, h) && h.id === o) return s.push(h), s
                    } else {
                        if (u[2]) return M.apply(s, e.getElementsByTagName(t)), s;
                        if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return M.apply(s, e.getElementsByClassName(o)), s
                    }
                if (i.qsa && !D[t + " "] && (!g || !g.test(t))) {
                    if (1 !== x) b = e, v = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((c = e.getAttribute("id")) ? c = c.replace(et, it) : e.setAttribute("id", c = _), r = (f = a(t)).length; r--;) f[r] = "#" + c + " " + vt(f[r]);
                        v = f.join(","), b = J.test(t) && mt(e.parentNode) || e
                    }
                    if (v) try {
                        return M.apply(s, b.querySelectorAll(v)), s
                    } catch (t) {} finally {
                        c === _ && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(L, "$1"), e, s, n)
        }

        function at() {
            var t = [];
            return function e(i, n) {
                return t.push(i + " ") > s.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
        }

        function rt(t) {
            return t[_] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) s.attrHandle[i[n]] = e
        }

        function ct(t, e) {
            var i = e && t,
                s = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (s) return s;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function ut(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function pt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && nt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ft(t) {
            return rt(function(e) {
                return e = +e, rt(function(i, s) {
                    for (var n, o = t([], i.length, e), a = o.length; a--;) i[n = o[a]] && (i[n] = !(s[n] = i[n]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in i = ot.support = {}, o = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, d = ot.setDocument = function(t) {
                var e, n, a = t ? t.ownerDocument || t : w;
                return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, m = !o(p), w !== p && (n = p.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", st, !1) : n.attachEvent && n.attachEvent("onunload", st)), i.attributes = lt(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), i.getElementsByTagName = lt(function(t) {
                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                }), i.getElementsByClassName = G.test(p.getElementsByClassName), i.getById = lt(function(t) {
                    return f.appendChild(t).id = _, !p.getElementsByName || !p.getElementsByName(_).length
                }), i.getById ? (s.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, s.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (s.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, s.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i, s, n, o = e.getElementById(t);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                            for (n = e.getElementsByName(t), s = 0; o = n[s++];)
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                        }
                        return []
                    }
                }), s.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, s = [],
                        n = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[n++];) 1 === i.nodeType && s.push(i);
                        return s
                    }
                    return o
                }, s.find.CLASS = i.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, v = [], g = [], (i.qsa = G.test(p.querySelectorAll)) && (lt(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
                }), lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (i.matchesSelector = G.test(b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function(t) {
                    i.disconnectedMatch = b.call(t, "*"), b.call(t, "[s!='']:x"), v.push("!=", R)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(f.compareDocumentPosition), y = e || G.test(f.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        s = e && e.parentNode;
                    return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, I = e ? function(t, e) {
                    if (t === e) return u = !0, 0;
                    var s = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return s || (1 & (s = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === s ? t === p || t.ownerDocument === w && y(w, t) ? -1 : e === p || e.ownerDocument === w && y(w, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & s ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return u = !0, 0;
                    var i, s = 0,
                        n = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        r = [e];
                    if (!n || !o) return t === p ? -1 : e === p ? 1 : n ? -1 : o ? 1 : c ? N(c, t) - N(c, e) : 0;
                    if (n === o) return ct(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) r.unshift(i);
                    for (; a[s] === r[s];) s++;
                    return s ? ct(a[s], r[s]) : a[s] === w ? -1 : r[s] === w ? 1 : 0
                }, p) : p
            }, ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && d(t), e = e.replace(B, "='$1']"), i.matchesSelector && m && !D[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                    var s = b.call(t, e);
                    if (s || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s
                } catch (t) {}
                return ot(e, p, null, [t]).length > 0
            }, ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && d(t), y(t, e)
            }, ot.attr = function(t, e) {
                (t.ownerDocument || t) !== p && d(t);
                var n = s.attrHandle[e.toLowerCase()],
                    o = n && S.call(s.attrHandle, e.toLowerCase()) ? n(t, e, !m) : void 0;
                return void 0 !== o ? o : i.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, ot.escape = function(t) {
                return (t + "").replace(et, it)
            }, ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function(t) {
                var e, s = [],
                    n = 0,
                    o = 0;
                if (u = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(I), u) {
                    for (; e = t[o++];) e === t[o] && (n = s.push(o));
                    for (; n--;) t.splice(s[n], 1)
                }
                return c = null, t
            }, n = ot.getText = function(t) {
                var e, i = "",
                    s = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[s++];) i += n(e);
                return i
            }, (s = ot.selectors = {
                cacheLength: 50,
                createPseudo: rt,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Z, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + $ + ")" + t + "(" + $ + "|$)")) && k(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(s) {
                            var n = ot.attr(s, t);
                            return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n.replace(F, " ") + " ").indexOf(i) > -1 : "|=" === e && (n === i || n.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, s, n) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === s && 0 === n ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = r && e.nodeName.toLowerCase(),
                                b = !l && !r,
                                y = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && b) {
                                    for (y = (p = (h = (c = (u = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]) && h[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (y = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++y && d === e) {
                                            c[t] = [x, p, y];
                                            break
                                        }
                                } else if (b && (y = p = (h = (c = (u = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]), !1 === y)
                                    for (;
                                        (d = ++p && d && d[m] || (y = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (b && ((c = (u = d[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [x, y]), d !== e)););
                                return (y -= n) === s || y % s == 0 && y / s >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, n = s.pseudos[t] || s.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return n[_] ? n(e) : n.length > 1 ? (i = [t, t, "", e], s.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, i) {
                            for (var s, o = n(t, e), a = o.length; a--;) t[s = N(t, o[a])] = !(i[s] = o[a])
                        }) : function(t) {
                            return n(t, 0, i)
                        }) : n
                    }
                },
                pseudos: {
                    not: rt(function(t) {
                        var e = [],
                            i = [],
                            s = r(t.replace(L, "$1"));
                        return s[_] ? rt(function(t, e, i, n) {
                            for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: rt(function(t) {
                        return function(e) {
                            return ot(t, e).length > 0
                        }
                    }),
                    contains: rt(function(t) {
                        return t = t.replace(Z, tt),
                            function(e) {
                                return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                            }
                    }),
                    lang: rt(function(t) {
                        return U.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !s.pseudos.empty(t)
                    },
                    header: function(t) {
                        return X.test(t.nodeName)
                    },
                    input: function(t) {
                        return K.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft(function() {
                        return [0]
                    }),
                    last: ft(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: ft(function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: ft(function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: ft(function(t, e, i) {
                        for (var s = i < 0 ? i + e : i; --s >= 0;) t.push(s);
                        return t
                    }),
                    gt: ft(function(t, e, i) {
                        for (var s = i < 0 ? i + e : i; ++s < e;) t.push(s);
                        return t
                    })
                }
            }).pseudos.nth = s.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) s.pseudos[e] = ut(e);
        for (e in {
                submit: !0,
                reset: !0
            }) s.pseudos[e] = dt(e);

        function gt() {}

        function vt(t) {
            for (var e = 0, i = t.length, s = ""; e < i; e++) s += t[e].value;
            return s
        }

        function bt(t, e, i) {
            var s = e.dir,
                n = e.next,
                o = n || s,
                a = i && "parentNode" === o,
                r = C++;
            return e.first ? function(e, i, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || a) return t(e, i, n);
                return !1
            } : function(e, i, l) {
                var h, c, u, d = [x, r];
                if (l) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || a)
                            if (c = (u = e[_] || (e[_] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[s] || e;
                            else {
                                if ((h = c[o]) && h[0] === x && h[1] === r) return d[2] = h[2];
                                if (c[o] = d, d[2] = t(e, i, l)) return !0
                            } return !1
            }
        }

        function yt(t) {
            return t.length > 1 ? function(e, i, s) {
                for (var n = t.length; n--;)
                    if (!t[n](e, i, s)) return !1;
                return !0
            } : t[0]
        }

        function _t(t, e, i, s, n) {
            for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)(o = t[r]) && (i && !i(o, s, n) || (a.push(o), h && e.push(r)));
            return a
        }

        function wt(t, e, i, s, n, o) {
            return s && !s[_] && (s = wt(s)), n && !n[_] && (n = wt(n, o)), rt(function(o, a, r, l) {
                var h, c, u, d = [],
                    p = [],
                    f = a.length,
                    m = o || function(t, e, i) {
                        for (var s = 0, n = e.length; s < n; s++) ot(t, e[s], i);
                        return i
                    }(e || "*", r.nodeType ? [r] : r, []),
                    g = !t || !o && e ? m : _t(m, d, t, r, l),
                    v = i ? n || (o ? t : f || s) ? [] : a : g;
                if (i && i(g, v, r, l), s)
                    for (h = _t(v, p), s(h, [], r, l), c = h.length; c--;)(u = h[c]) && (v[p[c]] = !(g[p[c]] = u));
                if (o) {
                    if (n || t) {
                        if (n) {
                            for (h = [], c = v.length; c--;)(u = v[c]) && h.push(g[c] = u);
                            n(null, v = [], h, l)
                        }
                        for (c = v.length; c--;)(u = v[c]) && (h = n ? N(o, u) : d[c]) > -1 && (o[h] = !(a[h] = u))
                    }
                } else v = _t(v === a ? v.splice(f, v.length) : v), n ? n(null, a, v, l) : M.apply(a, v)
            })
        }

        function xt(t) {
            for (var e, i, n, o = t.length, a = s.relative[t[0].type], r = a || s.relative[" "], l = a ? 1 : 0, c = bt(function(t) {
                    return t === e
                }, r, !0), u = bt(function(t) {
                    return N(e, t) > -1
                }, r, !0), d = [function(t, i, s) {
                    var n = !a && (s || i !== h) || ((e = i).nodeType ? c(t, i, s) : u(t, i, s));
                    return e = null, n
                }]; l < o; l++)
                if (i = s.relative[t[l].type]) d = [bt(yt(d), i)];
                else {
                    if ((i = s.filter[t[l].type].apply(null, t[l].matches))[_]) {
                        for (n = ++l; n < o && !s.relative[t[n].type]; n++);
                        return wt(l > 1 && yt(d), l > 1 && vt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(L, "$1"), i, l < n && xt(t.slice(l, n)), n < o && xt(t = t.slice(n)), n < o && vt(t))
                    }
                    d.push(i)
                }
            return yt(d)
        }

        function Ct(t, e) {
            var i = e.length > 0,
                n = t.length > 0,
                o = function(o, a, r, l, c) {
                    var u, f, g, v = 0,
                        b = "0",
                        y = o && [],
                        _ = [],
                        w = h,
                        C = o || n && s.find.TAG("*", c),
                        k = x += null == w ? 1 : Math.random() || .1,
                        T = C.length;
                    for (c && (h = a === p || a || c); b !== T && null != (u = C[b]); b++) {
                        if (n && u) {
                            for (f = 0, a || u.ownerDocument === p || (d(u), r = !m); g = t[f++];)
                                if (g(u, a || p, r)) {
                                    l.push(u);
                                    break
                                }
                            c && (x = k)
                        }
                        i && ((u = !g && u) && v--, o && y.push(u))
                    }
                    if (v += b, i && b !== v) {
                        for (f = 0; g = e[f++];) g(y, _, a, r);
                        if (o) {
                            if (v > 0)
                                for (; b--;) y[b] || _[b] || (_[b] = E.call(l));
                            _ = _t(_)
                        }
                        M.apply(l, _), c && !o && _.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                    }
                    return c && (x = k, h = w), y
                };
            return i ? rt(o) : o
        }
        return gt.prototype = s.filters = s.pseudos, s.setFilters = new gt, a = ot.tokenize = function(t, e) {
            var i, n, o, a, r, l, h, c = T[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (r = t, l = [], h = s.preFilter; r;) {
                for (a in i && !(n = j.exec(r)) || (n && (r = r.slice(n[0].length) || r), l.push(o = [])), i = !1, (n = q.exec(r)) && (i = n.shift(), o.push({
                        value: i,
                        type: n[0].replace(L, " ")
                    }), r = r.slice(i.length)), s.filter) !(n = V[a].exec(r)) || h[a] && !(n = h[a](n)) || (i = n.shift(), o.push({
                    value: i,
                    type: a,
                    matches: n
                }), r = r.slice(i.length));
                if (!i) break
            }
            return e ? r.length : r ? ot.error(t) : T(t, l).slice(0)
        }, r = ot.compile = function(t, e) {
            var i, s = [],
                n = [],
                o = D[t + " "];
            if (!o) {
                for (e || (e = a(t)), i = e.length; i--;)(o = xt(e[i]))[_] ? s.push(o) : n.push(o);
                (o = D(t, Ct(n, s))).selector = t
            }
            return o
        }, l = ot.select = function(t, e, i, n) {
            var o, l, h, c, u, d = "function" == typeof t && t,
                p = !n && a(t = d.selector || t);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && m && s.relative[l[1].type]) {
                    if (!(e = (s.find.ID(h.matches[0].replace(Z, tt), e) || [])[0])) return i;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(t) ? 0 : l.length; o-- && (h = l[o], !s.relative[c = h.type]);)
                    if ((u = s.find[c]) && (n = u(h.matches[0].replace(Z, tt), J.test(l[0].type) && mt(e.parentNode) || e))) {
                        if (l.splice(o, 1), !(t = n.length && vt(l))) return M.apply(i, n), i;
                        break
                    }
            }
            return (d || r(t, p))(n, e, !m, i, !e || J.test(t) && mt(e.parentNode) || e), i
        }, i.sortStable = _.split("").sort(I).join("") === _, i.detectDuplicates = !!u, d(), i.sortDetached = lt(function(t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), lt(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && lt(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ht("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function(t) {
            return null == t.getAttribute("disabled")
        }) || ht(H, function(t, e, i) {
            var s;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }), ot
    }(t);
    v.find = C, v.expr = C.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = C.uniqueSort, v.text = C.getText, v.isXMLDoc = C.isXML, v.contains = C.contains, v.escapeSelector = C.escape;
    var k = function(t, e, i) {
            for (var s = [], n = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (n && v(t).is(i)) break;
                    s.push(t)
                }
            return s
        },
        T = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        D = v.expr.match.needsContext,
        I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        S = /^.[^:#\[\.,]*$/;

    function P(t, e, i) {
        return v.isFunction(e) ? v.grep(t, function(t, s) {
            return !!e.call(t, s, t) !== i
        }) : e.nodeType ? v.grep(t, function(t) {
            return t === e !== i
        }) : "string" != typeof e ? v.grep(t, function(t) {
            return l.call(e, t) > -1 !== i
        }) : S.test(e) ? v.filter(e, t, i) : (e = v.filter(e, t), v.grep(t, function(t) {
            return l.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }
    v.filter = function(t, e, i) {
        var s = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? v.find.matchesSelector(s, t) ? [s] : [] : v.find.matches(t, v.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, v.fn.extend({
        find: function(t) {
            var e, i, s = this.length,
                n = this;
            if ("string" != typeof t) return this.pushStack(v(t).filter(function() {
                for (e = 0; e < s; e++)
                    if (v.contains(n[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < s; e++) v.find(t, n[e], i);
            return s > 1 ? v.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(P(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(P(this, t || [], !0))
        },
        is: function(t) {
            return !!P(this, "string" == typeof t && D.test(t) ? v(t) : t || [], !1).length
        }
    });
    var E, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(t, e, i) {
        var n, o;
        if (!t) return this;
        if (i = i || E, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : A.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof v ? e[0] : e, v.merge(this, v.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), I.test(n[1]) && v.isPlainObject(e))
                    for (n in e) v.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (o = s.getElementById(n[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(v) : v.makeArray(t, this)
    }).prototype = v.fn, E = v(s);
    var M = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function N(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    v.fn.extend({
        has: function(t) {
            var e = v(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (v.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var i, s = 0,
                n = this.length,
                o = [],
                a = "string" != typeof t && v(t);
            if (!D.test(t))
                for (; s < n; s++)
                    for (i = this[s]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && v.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
            return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), v.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return k(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return k(t, "parentNode", i)
        },
        next: function(t) {
            return N(t, "nextSibling")
        },
        prev: function(t) {
            return N(t, "previousSibling")
        },
        nextAll: function(t) {
            return k(t, "nextSibling")
        },
        prevAll: function(t) {
            return k(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return k(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return k(t, "previousSibling", i)
        },
        siblings: function(t) {
            return T((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return T(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || v.merge([], t.childNodes)
        }
    }, function(t, e) {
        v.fn[t] = function(i, s) {
            var n = v.map(this, e, i);
            return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = v.filter(s, n)), this.length > 1 && (O[t] || v.uniqueSort(n), M.test(t) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function $(t) {
        return t
    }

    function W(t) {
        throw t
    }

    function z(t, e, i) {
        var s;
        try {
            t && v.isFunction(s = t.promise) ? s.call(t).done(e).fail(i) : t && v.isFunction(s = t.then) ? s.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }
    v.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return v.each(t.match(H) || [], function(t, i) {
                e[i] = !0
            }), e
        }(t) : v.extend({}, t);
        var e, i, s, n, o = [],
            a = [],
            r = -1,
            l = function() {
                for (n = t.once, s = e = !0; a.length; r = -1)
                    for (i = a.shift(); ++r < o.length;) !1 === o[r].apply(i[0], i[1]) && t.stopOnFalse && (r = o.length, i = !1);
                t.memory || (i = !1), e = !1, n && (o = i ? [] : "")
            },
            h = {
                add: function() {
                    return o && (i && !e && (r = o.length - 1, a.push(i)), function e(i) {
                        v.each(i, function(i, s) {
                            v.isFunction(s) ? t.unique && h.has(s) || o.push(s) : s && s.length && "string" !== v.type(s) && e(s)
                        })
                    }(arguments), i && !e && l()), this
                },
                remove: function() {
                    return v.each(arguments, function(t, e) {
                        for (var i;
                            (i = v.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= r && r--
                    }), this
                },
                has: function(t) {
                    return t ? v.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return n = a = [], o = i = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return n = a = [], i || e || (o = i = ""), this
                },
                locked: function() {
                    return !!n
                },
                fireWith: function(t, i) {
                    return n || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || l()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return h
    }, v.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                    ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                n = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return n.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return v.Deferred(function(e) {
                            v.each(i, function(i, s) {
                                var n = v.isFunction(t[s[4]]) && t[s[4]];
                                o[s[1]](function() {
                                    var t = n && n.apply(this, arguments);
                                    t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[s[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, s, n) {
                        var o = 0;

                        function a(e, i, s, n) {
                            return function() {
                                var r = this,
                                    l = arguments,
                                    h = function() {
                                        var t, h;
                                        if (!(e < o)) {
                                            if ((t = s.apply(r, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            h = t && ("object" == typeof t || "function" == typeof t) && t.then, v.isFunction(h) ? n ? h.call(t, a(o, i, $, n), a(o, i, W, n)) : (o++, h.call(t, a(o, i, $, n), a(o, i, W, n), a(o, i, $, i.notifyWith))) : (s !== $ && (r = void 0, l = [t]), (n || i.resolveWith)(r, l))
                                        }
                                    },
                                    c = n ? h : function() {
                                        try {
                                            h()
                                        } catch (t) {
                                            v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (s !== W && (r = void 0, l = [t]), i.rejectWith(r, l))
                                        }
                                    };
                                e ? c() : (v.Deferred.getStackHook && (c.stackTrace = v.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }
                        return v.Deferred(function(t) {
                            i[0][3].add(a(0, t, v.isFunction(n) ? n : $, t.notifyWith)), i[1][3].add(a(0, t, v.isFunction(e) ? e : $)), i[2][3].add(a(0, t, v.isFunction(s) ? s : W))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? v.extend(t, n) : n
                    }
                },
                o = {};
            return v.each(i, function(t, e) {
                var a = e[2],
                    r = e[5];
                n[e[1]] = a.add, r && a.add(function() {
                    s = r
                }, i[3 - t][2].disable, i[0][2].lock), a.add(e[3].fire), o[e[0]] = function() {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = a.fireWith
            }), n.promise(o), e && e.call(o, o), o
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                s = Array(i),
                n = o.call(arguments),
                a = v.Deferred(),
                r = function(t) {
                    return function(i) {
                        s[t] = this, n[t] = arguments.length > 1 ? o.call(arguments) : i, --e || a.resolveWith(s, n)
                    }
                };
            if (e <= 1 && (z(t, a.done(r(i)).resolve, a.reject), "pending" === a.state() || v.isFunction(n[i] && n[i].then))) return a.then();
            for (; i--;) z(n[i], r(i), a.reject);
            return a.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && R.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, v.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var F = v.Deferred();

    function L() {
        s.removeEventListener("DOMContentLoaded", L), t.removeEventListener("load", L), v.ready()
    }
    v.fn.ready = function(t) {
        return F.then(t).catch(function(t) {
            v.readyException(t)
        }), this
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? v.readyWait++ : v.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || F.resolveWith(s, [v]))
        }
    }), v.ready.then = F.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? t.setTimeout(v.ready) : (s.addEventListener("DOMContentLoaded", L), t.addEventListener("load", L));
    var j = function(t, e, i, s, n, o, a) {
            var r = 0,
                l = t.length,
                h = null == i;
            if ("object" === v.type(i))
                for (r in n = !0, i) j(t, e, r, i[r], !0, o, a);
            else if (void 0 !== s && (n = !0, v.isFunction(s) || (a = !0), h && (a ? (e.call(t, s), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(v(t), i)
                })), e))
                for (; r < l; r++) e(t[r], i, a ? s : s.call(t[r], r, e(t[r], i)));
            return n ? t : h ? e.call(t) : l ? e(t[0], i) : o
        },
        q = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function B() {
        this.expando = v.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var s, n = this.cache(t);
            if ("string" == typeof e) n[v.camelCase(e)] = i;
            else
                for (s in e) n[v.camelCase(s)] = e[s];
            return n
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 !== e) {
                    v.isArray(e) ? e = e.map(v.camelCase) : e = (e = v.camelCase(e)) in s ? [e] : e.match(H) || [], i = e.length;
                    for (; i--;) delete s[e[i]]
                }(void 0 === e || v.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !v.isEmptyObject(e)
        }
    };
    var Y = new B,
        U = new B,
        V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function X(t, e, i) {
        var s;
        if (void 0 === i && 1 === t.nodeType)
            if (s = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(s))) {
                try {
                    i = function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : V.test(t) ? JSON.parse(t) : t)
                    }(i)
                } catch (t) {}
                U.set(t, e, i)
            } else i = void 0;
        return i
    }
    v.extend({
        hasData: function(t) {
            return U.hasData(t) || Y.hasData(t)
        },
        data: function(t, e, i) {
            return U.access(t, e, i)
        },
        removeData: function(t, e) {
            U.remove(t, e)
        },
        _data: function(t, e, i) {
            return Y.access(t, e, i)
        },
        _removeData: function(t, e) {
            Y.remove(t, e)
        }
    }), v.fn.extend({
        data: function(t, e) {
            var i, s, n, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (n = U.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && (0 === (s = a[i].name).indexOf("data-") && (s = v.camelCase(s.slice(5)), X(o, s, n[s])));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return n
            }
            return "object" == typeof t ? this.each(function() {
                U.set(this, t)
            }) : j(this, function(e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = U.get(o, t))) return i;
                    if (void 0 !== (i = X(o, t))) return i
                } else this.each(function() {
                    U.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                U.remove(this, t)
            })
        }
    }), v.extend({
        queue: function(t, e, i) {
            var s;
            if (t) return e = (e || "fx") + "queue", s = Y.get(t, e), i && (!s || v.isArray(i) ? s = Y.access(t, e, v.makeArray(i)) : s.push(i)), s || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = v.queue(t, e),
                s = i.length,
                n = i.shift(),
                o = v._queueHooks(t, e);
            "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, function() {
                v.dequeue(t, e)
            }, o)), !s && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Y.get(t, i) || Y.access(t, i, {
                empty: v.Callbacks("once memory").add(function() {
                    Y.remove(t, [e + "queue", i])
                })
            })
        }
    }), v.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? v.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = v.queue(this, t, e);
                v._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && v.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                v.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, s = 1,
                n = v.Deferred(),
                o = this,
                a = this.length,
                r = function() {
                    --s || n.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = Y.get(o[a], t + "queueHooks")) && i.empty && (s++, i.empty.add(r));
            return r(), n.promise(e)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Q = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        Z = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display")
        },
        tt = function(t, e, i, s) {
            var n, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            for (o in n = i.apply(t, s || []), e) t.style[o] = a[o];
            return n
        };

    function et(t, e, i, s) {
        var n, o = 1,
            a = 20,
            r = s ? function() {
                return s.cur()
            } : function() {
                return v.css(t, e, "")
            },
            l = r(),
            h = i && i[3] || (v.cssNumber[e] ? "" : "px"),
            c = (v.cssNumber[e] || "px" !== h && +l) && Q.exec(v.css(t, e));
        if (c && c[3] !== h) {
            h = h || c[3], i = i || [], c = +l || 1;
            do {
                c /= o = o || ".5", v.style(t, e, c + h)
            } while (o !== (o = r() / l) && 1 !== o && --a)
        }
        return i && (c = +c || +l || 0, n = i[1] ? c + (i[1] + 1) * i[2] : +i[2], s && (s.unit = h, s.start = c, s.end = n)), n
    }
    var it = {};

    function st(t) {
        var e, i = t.ownerDocument,
            s = t.nodeName,
            n = it[s];
        return n || (e = i.body.appendChild(i.createElement(s)), n = v.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), it[s] = n, n)
    }

    function nt(t, e) {
        for (var i, s, n = [], o = 0, a = t.length; o < a; o++)(s = t[o]).style && (i = s.style.display, e ? ("none" === i && (n[o] = Y.get(s, "display") || null, n[o] || (s.style.display = "")), "" === s.style.display && Z(s) && (n[o] = st(s))) : "none" !== i && (n[o] = "none", Y.set(s, "display", i)));
        for (o = 0; o < a; o++) null != n[o] && (t[o].style.display = n[o]);
        return t
    }
    v.fn.extend({
        show: function() {
            return nt(this, !0)
        },
        hide: function() {
            return nt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Z(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var ot = /^(?:checkbox|radio)$/i,
        at = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        rt = /^$|\/(?:java|ecma)script/i,
        lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ht(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && v.nodeName(t, e) ? v.merge([t], i) : i
    }

    function ct(t, e) {
        for (var i = 0, s = t.length; i < s; i++) Y.set(t[i], "globalEval", !e || Y.get(e[i], "globalEval"))
    }
    lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
    var ut = /<|&#?\w+;/;

    function dt(t, e, i, s, n) {
        for (var o, a, r, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === v.type(o)) v.merge(d, o.nodeType ? [o] : o);
                else if (ut.test(o)) {
            for (a = a || u.appendChild(e.createElement("div")), r = (at.exec(o) || ["", ""])[1].toLowerCase(), l = lt[r] || lt._default, a.innerHTML = l[1] + v.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            v.merge(d, a.childNodes), (a = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++];)
            if (s && v.inArray(o, s) > -1) n && n.push(o);
            else if (h = v.contains(o.ownerDocument, o), a = ht(u.appendChild(o), "script"), h && ct(a), i)
            for (c = 0; o = a[c++];) rt.test(o.type || "") && i.push(o);
        return u
    }! function() {
        var t = s.createDocumentFragment().appendChild(s.createElement("div")),
            e = s.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var pt = s.documentElement,
        ft = /^key/,
        mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        gt = /^([^.]*)(?:\.(.+)|)/;

    function vt() {
        return !0
    }

    function bt() {
        return !1
    }

    function yt() {
        try {
            return s.activeElement
        } catch (t) {}
    }

    function _t(t, e, i, s, n, o) {
        var a, r;
        if ("object" == typeof e) {
            for (r in "string" != typeof i && (s = s || i, i = void 0), e) _t(t, r, i, s, e[r], o);
            return t
        }
        if (null == s && null == n ? (n = i, s = i = void 0) : null == n && ("string" == typeof i ? (n = s, s = void 0) : (n = s, s = i, i = void 0)), !1 === n) n = bt;
        else if (!n) return t;
        return 1 === o && (a = n, (n = function(t) {
            return v().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = v.guid++)), t.each(function() {
            v.event.add(this, e, n, s, i)
        })
    }
    v.event = {
        global: {},
        add: function(t, e, i, s, n) {
            var o, a, r, l, h, c, u, d, p, f, m, g = Y.get(t);
            if (g)
                for (i.handler && (i = (o = i).handler, n = o.selector), n && v.find.matchesSelector(pt, n), i.guid || (i.guid = v.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                        return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
                    }), h = (e = (e || "").match(H) || [""]).length; h--;) p = m = (r = gt.exec(e[h]) || [])[1], f = (r[2] || "").split(".").sort(), p && (u = v.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, u = v.event.special[p] || {}, c = v.extend({
                    type: p,
                    origType: m,
                    data: s,
                    handler: i,
                    guid: i.guid,
                    selector: n,
                    needsContext: n && v.expr.match.needsContext.test(n),
                    namespace: f.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, s, f, a) || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), n ? d.splice(d.delegateCount++, 0, c) : d.push(c), v.event.global[p] = !0)
        },
        remove: function(t, e, i, s, n) {
            var o, a, r, l, h, c, u, d, p, f, m, g = Y.hasData(t) && Y.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(H) || [""]).length; h--;)
                    if (p = m = (r = gt.exec(e[h]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = v.event.special[p] || {}, d = l[p = (s ? u.delegateType : u.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !n && m !== c.origType || i && i.guid !== c.guid || r && !r.test(c.namespace) || s && s !== c.selector && ("**" !== s || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                        a && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || v.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) v.event.remove(t, p + e[h], i, s, !0);
                v.isEmptyObject(l) && Y.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, s, n, o, a, r = v.event.fix(t),
                l = new Array(arguments.length),
                h = (Y.get(this, "events") || {})[r.type] || [],
                c = v.event.special[r.type] || {};
            for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (r.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, r)) {
                for (a = v.event.handlers.call(this, r, h), e = 0;
                    (n = a[e++]) && !r.isPropagationStopped();)
                    for (r.currentTarget = n.elem, i = 0;
                        (o = n.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, r.data = o.data, void 0 !== (s = ((v.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, l)) && !1 === (r.result = s) && (r.preventDefault(), r.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, r), r.result
            }
        },
        handlers: function(t, e) {
            var i, s, n, o, a, r = [],
                l = e.delegateCount,
                h = t.target;
            if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                        for (o = [], a = {}, i = 0; i < l; i++) void 0 === a[n = (s = e[i]).selector + " "] && (a[n] = s.needsContext ? v(n, this).index(h) > -1 : v.find(n, this, null, [h]).length), a[n] && o.push(s);
                        o.length && r.push({
                            elem: h,
                            handlers: o
                        })
                    }
            return h = this, l < e.length && r.push({
                elem: h,
                handlers: e.slice(l)
            }), r
        },
        addProp: function(t, e) {
            Object.defineProperty(v.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[v.expando] ? t : new v.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== yt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === yt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && v.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return v.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, v.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, v.Event = function(t, e) {
        return this instanceof v.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? vt : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), void(this[v.expando] = !0)) : new v.Event(t, e)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = vt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = vt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = vt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && ft.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        v.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, s = t.relatedTarget,
                    n = t.handleObj;
                return s && (s === this || v.contains(this, s)) || (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), v.fn.extend({
        on: function(t, e, i, s) {
            return _t(this, t, e, i, s)
        },
        one: function(t, e, i, s) {
            return _t(this, t, e, i, s, 1)
        },
        off: function(t, e, i) {
            var s, n;
            if (t && t.preventDefault && t.handleObj) return s = t.handleObj, v(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
            if ("object" == typeof t) {
                for (n in t) this.off(n, e, t[n]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = bt), this.each(function() {
                v.event.remove(this, t, i, e)
            })
        }
    });
    var wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        xt = /<script|<style|<link/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^true\/(.*)/,
        Tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Dt(t, e) {
        return v.nodeName(t, "table") && v.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t
    }

    function It(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function St(t) {
        var e = kt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Pt(t, e) {
        var i, s, n, o, a, r, l, h;
        if (1 === e.nodeType) {
            if (Y.hasData(t) && (o = Y.access(t), a = Y.set(e, o), h = o.events))
                for (n in delete a.handle, a.events = {}, h)
                    for (i = 0, s = h[n].length; i < s; i++) v.event.add(e, n, h[n][i]);
            U.hasData(t) && (r = U.access(t), l = v.extend({}, r), U.set(e, l))
        }
    }

    function Et(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && ot.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function At(t, e, i, s) {
        e = a.apply([], e);
        var n, o, r, l, h, c, u = 0,
            d = t.length,
            p = d - 1,
            g = e[0],
            b = v.isFunction(g);
        if (b || d > 1 && "string" == typeof g && !f.checkClone && Ct.test(g)) return t.each(function(n) {
            var o = t.eq(n);
            b && (e[0] = g.call(this, n, o.html())), At(o, e, i, s)
        });
        if (d && (o = (n = dt(e, t[0].ownerDocument, !1, t, s)).firstChild, 1 === n.childNodes.length && (n = o), o || s)) {
            for (l = (r = v.map(ht(n, "script"), It)).length; u < d; u++) h = n, u !== p && (h = v.clone(h, !0, !0), l && v.merge(r, ht(h, "script"))), i.call(t[u], h, u);
            if (l)
                for (c = r[r.length - 1].ownerDocument, v.map(r, St), u = 0; u < l; u++) h = r[u], rt.test(h.type || "") && !Y.access(h, "globalEval") && v.contains(c, h) && (h.src ? v._evalUrl && v._evalUrl(h.src) : m(h.textContent.replace(Tt, ""), c))
        }
        return t
    }

    function Mt(t, e, i) {
        for (var s, n = e ? v.filter(e, t) : t, o = 0; null != (s = n[o]); o++) i || 1 !== s.nodeType || v.cleanData(ht(s)), s.parentNode && (i && v.contains(s.ownerDocument, s) && ct(ht(s, "script")), s.parentNode.removeChild(s));
        return t
    }
    v.extend({
        htmlPrefilter: function(t) {
            return t.replace(wt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var s, n, o, a, r = t.cloneNode(!0),
                l = v.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t)))
                for (a = ht(r), s = 0, n = (o = ht(t)).length; s < n; s++) Et(o[s], a[s]);
            if (e)
                if (i)
                    for (o = o || ht(t), a = a || ht(r), s = 0, n = o.length; s < n; s++) Pt(o[s], a[s]);
                else Pt(t, r);
            return (a = ht(r, "script")).length > 0 && ct(a, !l && ht(t, "script")), r
        },
        cleanData: function(t) {
            for (var e, i, s, n = v.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (q(i)) {
                    if (e = i[Y.expando]) {
                        if (e.events)
                            for (s in e.events) n[s] ? v.event.remove(i, s) : v.removeEvent(i, s, e.handle);
                        i[Y.expando] = void 0
                    }
                    i[U.expando] && (i[U.expando] = void 0)
                }
        }
    }), v.fn.extend({
        detach: function(t) {
            return Mt(this, t, !0)
        },
        remove: function(t) {
            return Mt(this, t)
        },
        text: function(t) {
            return j(this, function(t) {
                return void 0 === t ? v.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return At(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return At(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Dt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return At(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return At(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (v.cleanData(ht(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return v.clone(this, t, e)
            })
        },
        html: function(t) {
            return j(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    s = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !xt.test(t) && !lt[(at.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = v.htmlPrefilter(t);
                    try {
                        for (; i < s; i++) 1 === (e = this[i] || {}).nodeType && (v.cleanData(ht(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return At(this, arguments, function(e) {
                var i = this.parentNode;
                v.inArray(this, t) < 0 && (v.cleanData(ht(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        v.fn[t] = function(t) {
            for (var i, s = [], n = v(t), o = n.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), v(n[a])[e](i), r.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Ot = /^margin/,
        Nt = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        Ht = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        };

    function $t(t, e, i) {
        var s, n, o, a, r = t.style;
        return (i = i || Ht(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || v.contains(t.ownerDocument, t) || (a = v.style(t, e)), !f.pixelMarginRight() && Nt.test(a) && Ot.test(e) && (s = r.width, n = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = s, r.minWidth = n, r.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Wt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function() {
        function e() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", pt.appendChild(r);
                var e = t.getComputedStyle(l);
                i = "1%" !== e.top, a = "2px" === e.marginLeft, n = "4px" === e.width, l.style.marginRight = "50%", o = "4px" === e.marginRight, pt.removeChild(r), l = null
            }
        }
        var i, n, o, a, r = s.createElement("div"),
            l = s.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === l.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(l), v.extend(f, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return e(), n
            },
            pixelMarginRight: function() {
                return e(), o
            },
            reliableMarginLeft: function() {
                return e(), a
            }
        }))
    }();
    var zt = /^(none|table(?!-c[ea]).+)/,
        Rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Lt = ["Webkit", "Moz", "ms"],
        jt = s.createElement("div").style;

    function qt(t) {
        if (t in jt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = Lt.length; i--;)
            if ((t = Lt[i] + e) in jt) return t
    }

    function Bt(t, e, i) {
        var s = Q.exec(e);
        return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e
    }

    function Yt(t, e, i, s, n) {
        var o, a = 0;
        for (o = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (a += v.css(t, i + J[o], !0, n)), s ? ("content" === i && (a -= v.css(t, "padding" + J[o], !0, n)), "margin" !== i && (a -= v.css(t, "border" + J[o] + "Width", !0, n))) : (a += v.css(t, "padding" + J[o], !0, n), "padding" !== i && (a += v.css(t, "border" + J[o] + "Width", !0, n)));
        return a
    }

    function Ut(t, e, i) {
        var s, n = !0,
            o = Ht(t),
            a = "border-box" === v.css(t, "boxSizing", !1, o);
        if (t.getClientRects().length && (s = t.getBoundingClientRect()[e]), s <= 0 || null == s) {
            if (((s = $t(t, e, o)) < 0 || null == s) && (s = t.style[e]), Nt.test(s)) return s;
            n = a && (f.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + Yt(t, e, i || (a ? "border" : "content"), n, o) + "px"
    }

    function Vt(t, e, i, s, n) {
        return new Vt.prototype.init(t, e, i, s, n)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = $t(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var n, o, a, r = v.camelCase(e),
                    l = t.style;
                return e = v.cssProps[r] || (v.cssProps[r] = qt(r) || r), a = v.cssHooks[e] || v.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (n = a.get(t, !1, s)) ? n : l[e] : ("string" === (o = typeof i) && (n = Q.exec(i)) && n[1] && (i = et(t, e, n), o = "number"), void(null != i && i == i && ("number" === o && (i += n && n[3] || (v.cssNumber[r] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, s)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, s) {
            var n, o, a, r = v.camelCase(e);
            return e = v.cssProps[r] || (v.cssProps[r] = qt(r) || r), (a = v.cssHooks[e] || v.cssHooks[r]) && "get" in a && (n = a.get(t, !0, i)), void 0 === n && (n = $t(t, e, s)), "normal" === n && e in Ft && (n = Ft[e]), "" === i || i ? (o = parseFloat(n), !0 === i || isFinite(o) ? o || 0 : n) : n
        }
    }), v.each(["height", "width"], function(t, e) {
        v.cssHooks[e] = {
            get: function(t, i, s) {
                if (i) return !zt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Ut(t, e, s) : tt(t, Rt, function() {
                    return Ut(t, e, s)
                })
            },
            set: function(t, i, s) {
                var n, o = s && Ht(t),
                    a = s && Yt(t, e, s, "border-box" === v.css(t, "boxSizing", !1, o), o);
                return a && (n = Q.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = v.css(t, e)), Bt(0, i, a)
            }
        }
    }), v.cssHooks.marginLeft = Wt(f.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat($t(t, "marginLeft")) || t.getBoundingClientRect().left - tt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        v.cssHooks[t + e] = {
            expand: function(i) {
                for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; s < 4; s++) n[t + J[s] + e] = o[s] || o[s - 2] || o[0];
                return n
            }
        }, Ot.test(t) || (v.cssHooks[t + e].set = Bt)
    }), v.fn.extend({
        css: function(t, e) {
            return j(this, function(t, e, i) {
                var s, n, o = {},
                    a = 0;
                if (v.isArray(e)) {
                    for (s = Ht(t), n = e.length; a < n; a++) o[e[a]] = v.css(t, e[a], !1, s);
                    return o
                }
                return void 0 !== i ? v.style(t, e, i) : v.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), v.Tween = Vt, Vt.prototype = {
        constructor: Vt,
        init: function(t, e, i, s, n, o) {
            this.elem = t, this.prop = i, this.easing = n || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (v.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = Vt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Vt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = Vt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Vt.propHooks._default.set(this), this
        }
    }, Vt.prototype.init.prototype = Vt.prototype, Vt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Vt.propHooks.scrollTop = Vt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, v.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, v.fx = Vt.prototype.init, v.fx.step = {};
    var Kt, Xt, Gt = /^(?:toggle|show|hide)$/,
        Qt = /queueHooks$/;

    function Jt() {
        Xt && (t.requestAnimationFrame(Jt), v.fx.tick())
    }

    function Zt() {
        return t.setTimeout(function() {
            Kt = void 0
        }), Kt = v.now()
    }

    function te(t, e) {
        var i, s = 0,
            n = {
                height: t
            };
        for (e = e ? 1 : 0; s < 4; s += 2 - e) n["margin" + (i = J[s])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function ee(t, e, i) {
        for (var s, n = (ie.tweeners[e] || []).concat(ie.tweeners["*"]), o = 0, a = n.length; o < a; o++)
            if (s = n[o].call(i, e, t)) return s
    }

    function ie(t, e, i) {
        var s, n, o = 0,
            a = ie.prefilters.length,
            r = v.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (n) return !1;
                for (var e = Kt || Zt(), i = Math.max(0, h.startTime + h.duration - e), s = 1 - (i / h.duration || 0), o = 0, a = h.tweens.length; o < a; o++) h.tweens[o].run(s);
                return r.notifyWith(t, [h, s, i]), s < 1 && a ? i : (r.resolveWith(t, [h]), !1)
            },
            h = r.promise({
                elem: t,
                props: v.extend({}, e),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Kt || Zt(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var s = v.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(s), s
                },
                stop: function(e) {
                    var i = 0,
                        s = e ? h.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; i < s; i++) h.tweens[i].run(1);
                    return e ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e])) : r.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (function(t, e) {
                var i, s, n, o, a;
                for (i in t)
                    if (n = e[s = v.camelCase(i)], o = t[i], v.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), (a = v.cssHooks[s]) && "expand" in a)
                        for (i in o = a.expand(o), delete t[s], o) i in t || (t[i] = o[i], e[i] = n);
                    else e[s] = n
            }(c, h.opts.specialEasing); o < a; o++)
            if (s = ie.prefilters[o].call(h, t, c, h.opts)) return v.isFunction(s.stop) && (v._queueHooks(h.elem, h.opts.queue).stop = v.proxy(s.stop, s)), s;
        return v.map(c, ee, h), v.isFunction(h.opts.start) && h.opts.start.call(t, h), v.fx.timer(v.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    v.Animation = v.extend(ie, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return et(i.elem, t, Q.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(H);
                for (var i, s = 0, n = t.length; s < n; s++) i = t[s], ie.tweeners[i] = ie.tweeners[i] || [], ie.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var s, n, o, a, r, l, h, c, u = "width" in e || "height" in e,
                    d = this,
                    p = {},
                    f = t.style,
                    m = t.nodeType && Z(t),
                    g = Y.get(t, "fxshow");
                for (s in i.queue || (null == (a = v._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || r()
                    }), a.unqueued++, d.always(function() {
                        d.always(function() {
                            a.unqueued--, v.queue(t, "fx").length || a.empty.fire()
                        })
                    })), e)
                    if (n = e[s], Gt.test(n)) {
                        if (delete e[s], o = o || "toggle" === n, n === (m ? "hide" : "show")) {
                            if ("show" !== n || !g || void 0 === g[s]) continue;
                            m = !0
                        }
                        p[s] = g && g[s] || v.style(t, s)
                    }
                if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(p))
                    for (s in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = g && g.display) && (h = Y.get(t, "display")), "none" === (c = v.css(t, "display")) && (h ? c = h : (nt([t], !0), h = t.style.display || h, c = v.css(t, "display"), nt([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === v.css(t, "float") && (l || (d.done(function() {
                            f.display = h
                        }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(t, "fxshow", {
                        display: h
                    }), o && (g.hidden = !m), m && nt([t], !0), d.done(function() {
                        for (s in m || nt([t]), Y.remove(t, "fxshow"), p) v.style(t, s, p[s])
                    })), l = ee(m ? g[s] : 0, s, d), s in g || (g[s] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? ie.prefilters.unshift(t) : ie.prefilters.push(t)
            }
        }), v.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? v.extend({}, t) : {
                complete: i || !i && e || v.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !v.isFunction(e) && e
            };
            return v.fx.off || s.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in v.fx.speeds ? n.duration = v.fx.speeds[n.duration] : n.duration = v.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                v.isFunction(n.old) && n.old.call(this), n.queue && v.dequeue(this, n.queue)
            }, n
        }, v.fn.extend({
            fadeTo: function(t, e, i, s) {
                return this.filter(Z).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, s)
            },
            animate: function(t, e, i, s) {
                var n = v.isEmptyObject(t),
                    o = v.speed(e, i, s),
                    a = function() {
                        var e = ie(this, v.extend({}, t), o);
                        (n || Y.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, n || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, i) {
                var s = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        o = v.timers,
                        a = Y.get(this);
                    if (n) a[n] && a[n].stop && s(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && Qt.test(n) && s(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
                    !e && i || v.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = Y.get(this),
                        s = i[t + "queue"],
                        n = i[t + "queueHooks"],
                        o = v.timers,
                        a = s ? s.length : 0;
                    for (i.finish = !0, v.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) s[e] && s[e].finish && s[e].finish.call(this);
                    delete i.finish
                })
            }
        }), v.each(["toggle", "show", "hide"], function(t, e) {
            var i = v.fn[e];
            v.fn[e] = function(t, s, n) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(te(e, !0), t, s, n)
            }
        }), v.each({
            slideDown: te("show"),
            slideUp: te("hide"),
            slideToggle: te("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            v.fn[t] = function(t, i, s) {
                return this.animate(e, t, i, s)
            }
        }), v.timers = [], v.fx.tick = function() {
            var t, e = 0,
                i = v.timers;
            for (Kt = v.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || v.fx.stop(), Kt = void 0
        }, v.fx.timer = function(t) {
            v.timers.push(t), t() ? v.fx.start() : v.timers.pop()
        }, v.fx.interval = 13, v.fx.start = function() {
            Xt || (Xt = t.requestAnimationFrame ? t.requestAnimationFrame(Jt) : t.setInterval(v.fx.tick, v.fx.interval))
        }, v.fx.stop = function() {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(Xt) : t.clearInterval(Xt), Xt = null
        }, v.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, v.fn.delay = function(e, i) {
            return e = v.fx && v.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, s) {
                var n = t.setTimeout(i, e);
                s.stop = function() {
                    t.clearTimeout(n)
                }
            })
        },
        function() {
            var t = s.createElement("input"),
                e = s.createElement("select").appendChild(s.createElement("option"));
            t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = s.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
        }();
    var se, ne = v.expr.attrHandle;
    v.fn.extend({
        attr: function(t, e) {
            return j(this, v.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                v.removeAttr(this, t)
            })
        }
    }), v.extend({
        attr: function(t, e, i) {
            var s, n, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? v.prop(t, e, i) : (1 === o && v.isXMLDoc(t) || (n = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? se : void 0)), void 0 !== i ? null === i ? void v.removeAttr(t, e) : n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (s = n.get(t, e)) ? s : null == (s = v.find.attr(t, e)) ? void 0 : s)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && v.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, s = 0,
                n = e && e.match(H);
            if (n && 1 === t.nodeType)
                for (; i = n[s++];) t.removeAttribute(i)
        }
    }), se = {
        set: function(t, e, i) {
            return !1 === e ? v.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ne[e] || v.find.attr;
        ne[e] = function(t, e, s) {
            var n, o, a = e.toLowerCase();
            return s || (o = ne[a], ne[a] = n, n = null != i(t, e, s) ? a : null, ne[a] = o), n
        }
    });
    var oe = /^(?:input|select|textarea|button)$/i,
        ae = /^(?:a|area)$/i;

    function re(t) {
        return (t.match(H) || []).join(" ")
    }

    function le(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function(t, e) {
            return j(this, v.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[v.propFix[t] || t]
            })
        }
    }), v.extend({
        prop: function(t, e, i) {
            var s, n, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(t) || (e = v.propFix[e] || e, n = v.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = v.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : oe.test(t.nodeName) || ae.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (v.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        v.propFix[this.toLowerCase()] = this
    }), v.fn.extend({
        addClass: function(t) {
            var e, i, s, n, o, a, r, l = 0;
            if (v.isFunction(t)) return this.each(function(e) {
                v(this).addClass(t.call(this, e, le(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(H) || []; i = this[l++];)
                    if (n = le(i), s = 1 === i.nodeType && " " + re(n) + " ") {
                        for (a = 0; o = e[a++];) s.indexOf(" " + o + " ") < 0 && (s += o + " ");
                        n !== (r = re(s)) && i.setAttribute("class", r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, s, n, o, a, r, l = 0;
            if (v.isFunction(t)) return this.each(function(e) {
                v(this).removeClass(t.call(this, e, le(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(H) || []; i = this[l++];)
                    if (n = le(i), s = 1 === i.nodeType && " " + re(n) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; s.indexOf(" " + o + " ") > -1;) s = s.replace(" " + o + " ", " ");
                        n !== (r = re(s)) && i.setAttribute("class", r)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function(i) {
                v(this).toggleClass(t.call(this, i, le(this), e), e)
            }) : this.each(function() {
                var e, s, n, o;
                if ("string" === i)
                    for (s = 0, n = v(this), o = t.match(H) || []; e = o[s++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== t && "boolean" !== i || ((e = le(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, s = 0;
            for (e = " " + t + " "; i = this[s++];)
                if (1 === i.nodeType && (" " + re(le(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var he = /\r/g;
    v.fn.extend({
        val: function(t) {
            var e, i, s, n = this[0];
            return arguments.length ? (s = v.isFunction(t), this.each(function(i) {
                var n;
                1 === this.nodeType && (null == (n = s ? t.call(this, i, v(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : v.isArray(n) && (n = v.map(n, function(t) {
                    return null == t ? "" : t + ""
                })), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
            })) : n ? (e = v.valHooks[n.type] || v.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof(i = n.value) ? i.replace(he, "") : null == i ? "" : i : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = v.find.attr(t, "value");
                    return null != e ? e : re(v.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, s, n = t.options,
                        o = t.selectedIndex,
                        a = "select-one" === t.type,
                        r = a ? null : [],
                        l = a ? o + 1 : n.length;
                    for (s = o < 0 ? l : a ? o : 0; s < l; s++)
                        if (((i = n[s]).selected || s === o) && !i.disabled && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                            if (e = v(i).val(), a) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var i, s, n = t.options, o = v.makeArray(e), a = n.length; a--;)((s = n[a]).selected = v.inArray(v.valHooks.option.get(s), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            set: function(t, e) {
                if (v.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1
            }
        }, f.checkOn || (v.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ce = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function(e, i, n, o) {
            var a, r, l, h, c, d, p, f = [n || s],
                m = u.call(e, "type") ? e.type : e,
                g = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = l = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !ce.test(m + v.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[v.expando] ? e : new v.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : v.makeArray(i, [e]), p = v.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, i))) {
                if (!o && !p.noBubble && !v.isWindow(n)) {
                    for (h = p.delegateType || m, ce.test(h + m) || (r = r.parentNode); r; r = r.parentNode) f.push(r), l = r;
                    l === (n.ownerDocument || s) && f.push(l.defaultView || l.parentWindow || t)
                }
                for (a = 0;
                    (r = f[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? h : p.bindType || m, (d = (Y.get(r, "events") || {})[e.type] && Y.get(r, "handle")) && d.apply(r, i), (d = c && r[c]) && d.apply && q(r) && (e.result = d.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), i) || !q(n) || c && v.isFunction(n[m]) && !v.isWindow(n) && ((l = n[c]) && (n[c] = null), v.event.triggered = m, n[m](), v.event.triggered = void 0, l && (n[c] = l)), e.result
            }
        },
        simulate: function(t, e, i) {
            var s = v.extend(new v.Event, i, {
                type: t,
                isSimulated: !0
            });
            v.event.trigger(s, null, e)
        }
    }), v.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                v.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return v.event.trigger(t, e, i, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        v.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), v.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), f.focusin = "onfocusin" in t, f.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            v.event.simulate(e, t.target, v.event.fix(t))
        };
        v.event.special[e] = {
            setup: function() {
                var s = this.ownerDocument || this,
                    n = Y.access(s, e);
                n || s.addEventListener(t, i, !0), Y.access(s, e, (n || 0) + 1)
            },
            teardown: function() {
                var s = this.ownerDocument || this,
                    n = Y.access(s, e) - 1;
                n ? Y.access(s, e, n) : (s.removeEventListener(t, i, !0), Y.remove(s, e))
            }
        }
    });
    var ue = t.location,
        de = v.now(),
        pe = /\?/;
    v.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), i
    };
    var fe = /\[\]$/,
        me = /\r?\n/g,
        ge = /^(?:submit|button|image|reset|file)$/i,
        ve = /^(?:input|select|textarea|keygen)/i;

    function be(t, e, i, s) {
        var n;
        if (v.isArray(e)) v.each(e, function(e, n) {
            i || fe.test(t) ? s(t, n) : be(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s)
        });
        else if (i || "object" !== v.type(e)) s(t, e);
        else
            for (n in e) be(t + "[" + n + "]", e[n], i, s)
    }
    v.param = function(t, e) {
        var i, s = [],
            n = function(t, e) {
                var i = v.isFunction(e) ? e() : e;
                s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (v.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, function() {
            n(this.name, this.value)
        });
        else
            for (i in t) be(i, t[i], e, n);
        return s.join("&")
    }, v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = v.prop(this, "elements");
                return t ? v.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !v(this).is(":disabled") && ve.test(this.nodeName) && !ge.test(t) && (this.checked || !ot.test(t))
            }).map(function(t, e) {
                var i = v(this).val();
                return null == i ? null : v.isArray(i) ? v.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(me, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(me, "\r\n")
                }
            }).get()
        }
    });
    var ye = /%20/g,
        _e = /#.*$/,
        we = /([?&])_=[^&]*/,
        xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ce = /^(?:GET|HEAD)$/,
        ke = /^\/\//,
        Te = {},
        De = {},
        Ie = "*/".concat("*"),
        Se = s.createElement("a");

    function Pe(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var s, n = 0,
                o = e.toLowerCase().match(H) || [];
            if (v.isFunction(i))
                for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
        }
    }

    function Ee(t, e, i, s) {
        var n = {},
            o = t === De;

        function a(r) {
            var l;
            return n[r] = !0, v.each(t[r] || [], function(t, r) {
                var h = r(e, i, s);
                return "string" != typeof h || o || n[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), a(h), !1)
            }), l
        }
        return a(e.dataTypes[0]) || !n["*"] && a("*")
    }

    function Ae(t, e) {
        var i, s, n = v.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
        return s && v.extend(!0, t, s), t
    }
    Se.href = ue.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ue.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ue.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ae(Ae(t, v.ajaxSettings), e) : Ae(v.ajaxSettings, t)
        },
        ajaxPrefilter: Pe(Te),
        ajaxTransport: Pe(De),
        ajax: function(e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, o, a, r, l, h, c, u, d, p, f = v.ajaxSetup({}, i),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? v(m) : v.event,
                b = v.Deferred(),
                y = v.Callbacks("once memory"),
                _ = f.statusCode || {},
                w = {},
                x = {},
                C = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!r)
                                for (r = {}; e = xe.exec(a);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) k.always(t[k.status]);
                            else
                                for (e in t) _[e] = [_[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || C;
                        return n && n.abort(e), T(0, e), this
                    }
                };
            if (b.promise(k), f.url = ((e || f.url || ue.href) + "").replace(ke, ue.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
                h = s.createElement("a");
                try {
                    h.href = f.url, h.href = h.href, f.crossDomain = Se.protocol + "//" + Se.host != h.protocol + "//" + h.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), Ee(Te, f, i, k), c) return k;
            for (d in (u = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ce.test(f.type), o = f.url.replace(_e, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(ye, "+")) : (p = f.url.slice(o.length), f.data && (o += (pe.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(we, "$1"), p = (pe.test(o) ? "&" : "?") + "_=" + de++ + p), f.url = o + p), f.ifModified && (v.lastModified[o] && k.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && k.setRequestHeader("If-None-Match", v.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || c)) return k.abort();
            if (C = "abort", y.add(f.complete), k.done(f.success), k.fail(f.error), n = Ee(De, f, i, k)) {
                if (k.readyState = 1, u && g.trigger("ajaxSend", [k, f]), c) return k;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, n.send(w, T)
                } catch (t) {
                    if (c) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(e, i, s, r) {
                var h, d, p, w, x, C = i;
                c || (c = !0, l && t.clearTimeout(l), n = void 0, a = r || "", k.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, s && (w = function(t, e, i) {
                    for (var s, n, o, a, r = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (s)
                        for (n in r)
                            if (r[n] && r[n].test(s)) {
                                l.unshift(n);
                                break
                            }
                    if (l[0] in i) o = l[0];
                    else {
                        for (n in i) {
                            if (!l[0] || t.converters[n + " " + l[0]]) {
                                o = n;
                                break
                            }
                            a || (a = n)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(f, k, s)), w = function(t, e, i, s) {
                    var n, o, a, r, l, h = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = h[l + " " + o] || h["* " + o]))
                            for (n in h)
                                if ((r = n.split(" "))[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                                    !0 === a ? a = h[n] : !0 !== h[n] && (o = r[0], c.unshift(r[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, w, k, h), h ? (f.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (v.lastModified[o] = x), (x = k.getResponseHeader("etag")) && (v.etag[o] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, d = w.data, h = !(p = w.error))) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (i || C) + "", h ? b.resolveWith(m, [d, C, k]) : b.rejectWith(m, [k, C, p]), k.statusCode(_), _ = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [k, f, h ? d : p]), y.fireWith(m, [k, C]), u && (g.trigger("ajaxComplete", [k, f]), --v.active || v.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(t, e, i) {
            return v.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return v.get(t, void 0, e, "script")
        }
    }), v.each(["get", "post"], function(t, e) {
        v[e] = function(t, i, s, n) {
            return v.isFunction(i) && (n = n || s, s = i, i = void 0), v.ajax(v.extend({
                url: t,
                type: e,
                dataType: n,
                data: i,
                success: s
            }, v.isPlainObject(t) && t))
        }
    }), v._evalUrl = function(t) {
        return v.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, v.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (v.isFunction(t) && (t = t.call(this[0])), e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return v.isFunction(t) ? this.each(function(e) {
                v(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = v(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = v.isFunction(t);
            return this.each(function(i) {
                v(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function(t) {
        return !v.expr.pseudos.visible(t)
    }, v.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, v.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Me = {
            0: 200,
            1223: 204
        },
        Oe = v.ajaxSettings.xhr();
    f.cors = !!Oe && "withCredentials" in Oe, f.ajax = Oe = !!Oe, v.ajaxTransport(function(e) {
        var i, s;
        if (f.cors || Oe && !e.crossDomain) return {
            send: function(n, o) {
                var a, r = e.xhr();
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) r[a] = e.xhrFields[a];
                for (a in e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) r.setRequestHeader(a, n[a]);
                i = function(t) {
                    return function() {
                        i && (i = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(Me[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), s = r.onerror = i("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && t.setTimeout(function() {
                        i && s()
                    })
                }, i = i("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), v.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return v.globalEval(t), t
            }
        }
    }), v.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), v.ajaxTransport("script", function(t) {
        var e, i;
        if (t.crossDomain) return {
            send: function(n, o) {
                e = v("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", i = function(t) {
                    e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), s.head.appendChild(e[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ne = [],
        He = /(=)\?(?=&|$)|\?\?/;

    function $e(t) {
        return v.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ne.pop() || v.expando + "_" + de++;
            return this[t] = !0, t
        }
    }), v.ajaxPrefilter("json jsonp", function(e, i, s) {
        var n, o, a, r = !1 !== e.jsonp && (He.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(He, "$1" + n) : !1 !== e.jsonp && (e.url += (pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return a || v.error(n + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[n], t[n] = function() {
            a = arguments
        }, s.always(function() {
            void 0 === o ? v(t).removeProp(n) : t[n] = o, e[n] && (e.jsonpCallback = i.jsonpCallback, Ne.push(n)), a && v.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), f.createHTMLDocument = function() {
        var t = s.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), v.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (f.createHTMLDocument ? ((n = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, e.head.appendChild(n)) : e = s), a = !i && [], (o = I.exec(t)) ? [e.createElement(o[1])] : (o = dt([t], e, a), a && a.length && v(a).remove(), v.merge([], o.childNodes)));
        var n, o, a
    }, v.fn.load = function(t, e, i) {
        var s, n, o, a = this,
            r = t.indexOf(" ");
        return r > -1 && (s = re(t.slice(r)), t = t.slice(0, r)), v.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), a.length > 0 && v.ajax({
            url: t,
            type: n || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(s ? v("<div>").append(v.parseHTML(t)).find(s) : t)
        }).always(i && function(t, e) {
            a.each(function() {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        v.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), v.expr.pseudos.animated = function(t) {
        return v.grep(v.timers, function(e) {
            return t === e.elem
        }).length
    }, v.offset = {
        setOffset: function(t, e, i) {
            var s, n, o, a, r, l, h = v.css(t, "position"),
                c = v(t),
                u = {};
            "static" === h && (t.style.position = "relative"), r = c.offset(), o = v.css(t, "top"), l = v.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (a = (s = c.position()).top, n = s.left) : (a = parseFloat(o) || 0, n = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, i, v.extend({}, r))), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + n), "using" in e ? e.using.call(t, u) : c.css(u)
        }
    }, v.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                v.offset.setOffset(this, t, e)
            });
            var e, i, s, n, o = this[0];
            return o ? o.getClientRects().length ? (s = o.getBoundingClientRect()).width || s.height ? (i = $e(n = o.ownerDocument), e = n.documentElement, {
                top: s.top + i.pageYOffset - e.clientTop,
                left: s.left + i.pageXOffset - e.clientLeft
            }) : s : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === v.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), v.nodeName(t[0], "html") || (s = t.offset()), s = {
                    top: s.top + v.css(t[0], "borderTopWidth", !0),
                    left: s.left + v.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - s.top - v.css(i, "marginTop", !0),
                    left: e.left - s.left - v.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === v.css(t, "position");) t = t.offsetParent;
                return t || pt
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        v.fn[t] = function(s) {
            return j(this, function(t, s, n) {
                var o = $e(t);
                return void 0 === n ? o ? o[e] : t[s] : void(o ? o.scrollTo(i ? o.pageXOffset : n, i ? n : o.pageYOffset) : t[s] = n)
            }, t, s, arguments.length)
        }
    }), v.each(["top", "left"], function(t, e) {
        v.cssHooks[e] = Wt(f.pixelPosition, function(t, i) {
            if (i) return i = $t(t, e), Nt.test(i) ? v(t).position()[e] + "px" : i
        })
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        v.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, s) {
            v.fn[s] = function(n, o) {
                var a = arguments.length && (i || "boolean" != typeof n),
                    r = i || (!0 === n || !0 === o ? "margin" : "border");
                return j(this, function(e, i, n) {
                    var o;
                    return v.isWindow(e) ? 0 === s.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? v.css(e, i, r) : v.style(e, i, n, r)
                }, e, a ? n : void 0, a)
            }
        })
    }), v.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, s) {
            return this.on(e, t, i, s)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), v.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return v
    });
    var We = t.jQuery,
        ze = t.$;
    return v.noConflict = function(e) {
        return t.$ === v && (t.$ = ze), e && t.jQuery === v && (t.jQuery = We), v
    }, e || (t.jQuery = t.$ = v), v
}), function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, s)
    }

    function s() {
        t.datepicker._isDisabledDatepicker(c.inline ? c.dpDiv.parent()[0] : c.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function n(e, i) {
        for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]);
        return e
    }

    function o(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var a = 0,
        r = Array.prototype.slice;
    t.cleanData = function(e) {
            return function(i) {
                var s, n, o;
                for (o = 0; null != (n = i[o]); o++) try {
                    (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
                } catch (t) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, s) {
            var n, o, a, r = {},
                l = e.split(".")[0],
                h = l + "-" + (e = e.split(".")[1]);
            return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) {
                return !!t.data(e, h)
            }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, n, {
                version: s.version,
                _proto: t.extend({}, s),
                _childConstructors: []
            }), (a = new i).options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
                return t.isFunction(s) ? void(r[e] = function() {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function n(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(r[e] = s)
            }), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: n && a.widgetEventPrefix || e
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: h
            }), n ? (t.each(n._childConstructors, function(e, i) {
                var s = i.prototype;
                t.widget(s.namespace + "." + s.widgetName, o, i._proto)
            }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, s, n = r.call(arguments, 1), o = 0, a = n.length; a > o; o++)
                for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
            return e
        }, t.widget.bridge = function(e, i) {
            var s = i.prototype.widgetFullName || e;
            t.fn[e] = function(n) {
                var o = "string" == typeof n,
                    a = r.call(arguments, 1),
                    l = this;
                return o ? this.length || "instance" !== n ? this.each(function() {
                    var i, o = t.data(this, s);
                    return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
                }) : l = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
                    var e = t.data(this, s);
                    e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
                })), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                    e._removeClass(i, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var s, n, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                        n[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function(e) {
                var i, s, n;
                for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(e) {
                function i(i, o) {
                    var a, r;
                    for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
                }
                var s = [],
                    n = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, function(s, n) {
                    -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
                })
            },
            _removeClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function(t, e, i, s) {
                s = "boolean" == typeof s ? s : i;
                var n = "string" == typeof t || null === t,
                    o = {
                        extra: n ? e : i,
                        keys: n ? t : e,
                        element: n ? this.element : t,
                        add: s
                    };
                return o.element.toggleClass(this._classes(o), s), this
            },
            _on: function(e, i, s) {
                var n, o = this;
                "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                    function r() {
                        return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = s.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? n.on(h, c, r) : i.on(h, r)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                var i = this;
                return setTimeout(function() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, s) {
                var n, o, a = this.options[e];
                if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (n in o) n in i || (i[n] = o[n]);
                return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(s, n, o) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                "number" == typeof(n = n || {}) && (n = {
                    duration: n
                }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                    t(this)[e](), o && o.call(s[0]), i()
                })
            }
        }), t.widget,
        function() {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }
            var s, n = Math.max,
                o = Math.abs,
                a = /left|center|right/,
                r = /top|center|bottom/,
                l = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                c = /%$/,
                u = t.fn.position;
            t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                        height: n ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        s = t.isWindow(i[0]),
                        n = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: s,
                        isDocument: n,
                        offset: !s && !n ? t(e).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return u.apply(this, arguments);
                s = t.extend({}, s);
                var c, d, p, f, m, g, v = t(s.of),
                    b = t.position.getWithinInfo(s.within),
                    y = t.position.getScrollInfo(b),
                    _ = (s.collision || "flip").split(" "),
                    w = {};
                return g = function(e) {
                    var i = e[0];
                    return 9 === i.nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(i) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    }
                }(v), v[0].preventDefault && (s.at = "left top"), d = g.width, p = g.height, f = g.offset, m = t.extend({}, f), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                }), 1 === _.length && (_[1] = _[0]), "right" === s.at[0] ? m.left += d : "center" === s.at[0] && (m.left += d / 2), "bottom" === s.at[1] ? m.top += p : "center" === s.at[1] && (m.top += p / 2), c = e(w.at, d, p), m.left += c[0], m.top += c[1], this.each(function() {
                    var a, r, l = t(this),
                        h = l.outerWidth(),
                        u = l.outerHeight(),
                        g = i(this, "marginLeft"),
                        x = i(this, "marginTop"),
                        C = h + g + i(this, "marginRight") + y.width,
                        k = u + x + i(this, "marginBottom") + y.height,
                        T = t.extend({}, m),
                        D = e(w.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= u : "center" === s.my[1] && (T.top -= u / 2), T.left += D[0], T.top += D[1], a = {
                        marginLeft: g,
                        marginTop: x
                    }, t.each(["left", "top"], function(e, i) {
                        t.ui.position[_[e]] && t.ui.position[_[e]][i](T, {
                            targetWidth: d,
                            targetHeight: p,
                            elemWidth: h,
                            elemHeight: u,
                            collisionPosition: a,
                            collisionWidth: C,
                            collisionHeight: k,
                            offset: [c[0] + D[0], c[1] + D[1]],
                            my: s.my,
                            at: s.at,
                            within: b,
                            elem: l
                        })
                    }), s.using && (r = function(t) {
                        var e = f.left - T.left,
                            i = e + d - h,
                            a = f.top - T.top,
                            r = a + p - u,
                            c = {
                                target: {
                                    element: v,
                                    left: f.left,
                                    top: f.top,
                                    width: d,
                                    height: p
                                },
                                element: {
                                    element: l,
                                    left: T.left,
                                    top: T.top,
                                    width: h,
                                    height: u
                                },
                                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                vertical: 0 > r ? "top" : a > 0 ? "bottom" : "middle"
                            };
                        h > d && d > o(e + i) && (c.horizontal = "center"), u > p && p > o(a + r) && (c.vertical = "middle"), c.important = n(o(e), o(i)) > n(o(a), o(r)) ? "horizontal" : "vertical", s.using.call(this, t, c)
                    }), l.offset(t.extend(T, {
                        using: r
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, s = e.within,
                            o = s.isWindow ? s.scrollLeft : s.offset.left,
                            a = s.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            l = o - r,
                            h = r + e.collisionWidth - a - o;
                        e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - o, t.left += l - i) : t.left = h > 0 && 0 >= l ? o : l > h ? o + a - e.collisionWidth : o : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = n(t.left - r, t.left)
                    },
                    top: function(t, e) {
                        var i, s = e.within,
                            o = s.isWindow ? s.scrollTop : s.offset.top,
                            a = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            l = o - r,
                            h = r + e.collisionHeight - a - o;
                        e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - o, t.top += l - i) : t.top = h > 0 && 0 >= l ? o : l > h ? o + a - e.collisionHeight : o : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = n(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, s, n = e.within,
                            a = n.offset.left + n.scrollLeft,
                            r = n.width,
                            l = n.isWindow ? n.scrollLeft : n.offset.left,
                            h = t.left - e.collisionPosition.marginLeft,
                            c = h - l,
                            u = h + e.collisionWidth - r - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - r - a) || o(c) > i) && (t.left += d + p + f) : u > 0 && (((s = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > o(s)) && (t.left += d + p + f))
                    },
                    top: function(t, e) {
                        var i, s, n = e.within,
                            a = n.offset.top + n.scrollTop,
                            r = n.height,
                            l = n.isWindow ? n.scrollTop : n.offset.top,
                            h = t.top - e.collisionPosition.marginTop,
                            c = h - l,
                            u = h + e.collisionHeight - r - l,
                            d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            f = -2 * e.offset[1];
                        0 > c ? (0 > (s = t.top + d + p + f + e.collisionHeight - r - a) || o(c) > s) && (t.top += d + p + f) : u > 0 && (((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > o(i)) && (t.top += d + p + f))
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), t.ui.position, t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, s) {
                return !!t.data(e, s[3])
            }
        }), t.fn.extend({
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.on(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        }), t.ui.focusable = function(e, i) {
            var s, n, o, a, r, l = e.nodeName.toLowerCase();
            return "area" === l ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !e.disabled) && ((r = t(e).closest("fieldset")[0]) && (a = !r.disabled)) : a = "a" === l && e.href || i, a && t(e).is(":visible") && function(t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) e = (t = t.parent()).css("visibility");
                return "hidden" !== e
            }(t(e)))
        }, t.extend(t.expr[":"], {
            focusable: function(e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }), t.ui.focusable, t.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }, t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function s(e, i, s, o) {
                return t.each(n, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, s(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, s(this, e, !0, n) + "px")
                })
            }
        }), t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, t.ui.escapeSelector = function() {
            var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
            return function(e) {
                return e.replace(t, "\\$1")
            }
        }(), t.fn.labels = function() {
            var e, i, s, n, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
        }, t.fn.scrollParent = function(e) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var e = t(this);
                    return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    s = null != i;
                return (!s || i >= 0) && t.ui.focusable(e, s)
            }
        }), t.fn.extend({
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var l = !1;
    t(document).on("mouseup", function() {
        l = !1
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!l) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    s = 1 === e.which,
                    n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), l = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, l = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), t.ui.plugin = {
        add: function(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    }, t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== i._trigger("stop", e) && i._clear()
            }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function(e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper),
                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options,
                o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), void((s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                h = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [], t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
            })
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1,
                    o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
                })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                    return i.helper[0]
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
                    this.refreshPositions()
                }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body"),
                o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper),
                o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(e, i, s) {
            var n = s.options,
                o = !1,
                a = s.scrollParentNotHidden[0],
                r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i, s) {
            var n, o, a, r, l, h, c, u, d, p, f = s.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + s.helperProportions.width,
                b = i.offset.top,
                y = b + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) h = (l = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width, u = (c = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height, l - m > v || g > h + m || c - m > y || b > u + m || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(c - y), o = m >= Math.abs(u - b), a = m >= Math.abs(l - v), r = m >= Math.abs(h - g), n && (i.position.top = s._convertPositionTo("relative", {
                top: c - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = m >= Math.abs(c - b), o = m >= Math.abs(u - y), a = m >= Math.abs(l - g), r = m >= Math.abs(h - v), n && (i.position.top = s._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = n || o || a || r || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options,
                a = t.makeArray(t(o.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                t(this).css("zIndex", n + e)
            }), this.css("zIndex", n + a.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper),
                o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options,
                s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                return t.is(s)
            }, this.proportions = function() {
                return arguments.length ? void(e = arguments[0]) : e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            };
            else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current,
                n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && h(s, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? (n = !0, !1) : void 0
            }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var h = t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && e + i > t
        }
        return function(e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                l = a + e.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                u = h + i.proportions().width,
                d = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return o >= h && u >= r && a >= c && d >= l;
                case "intersect":
                    return o + e.helperProportions.width / 2 > h && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
                case "touch":
                    return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions().height = 0;
                            continue t
                        }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    }))
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && h(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = h(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === n
                    })).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        _create: function() {
            var e, i = this.options,
                s = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
            }).on("mouseleave", function() {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options,
                r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) n = "ui-resizable-" + (e = t.trim(s[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
                    zIndex: a.zIndex
                }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                    mousedown: r._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(e) {
            var i, s, n, o = this.options,
                a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {
                left: i,
                top: s
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - n.left || 0,
                r = e.pageY - n.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, l, h = this.options,
                c = this;
            return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                s = i.options,
                n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - r,
                    height: i.size.height - a
                },
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, l = t(this).resizable("instance"),
                h = l.options,
                c = l.element,
                u = h.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                i[t] = l._num(e.css("padding" + s))
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : n, l.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }))
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"),
                r = a.options,
                l = a.containerOffset,
                h = a.position,
                c = a._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = a.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                l = a.outerWidth() - e.sizeDiff.width,
                h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            })
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance"),
                n = s.options,
                o = s.originalSize,
                a = s.originalPosition,
                r = {
                    height: s.size.height - o.height || 0,
                    width: s.size.width - o.width || 0,
                    top: s.position.top - a.top || 0,
                    left: s.position.left - a.left || 0
                };
            t(n.alsoResize).each(function() {
                var e = t(this),
                    s = t(this).data("ui-resizable-alsoresize"),
                    n = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }), e.css(n)
            })
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                s = i.options,
                n = i.size,
                o = i.originalSize,
                a = i.originalPosition,
                r = i.axis,
                l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                h = l[0] || 1,
                c = l[1] || 1,
                u = Math.round((n.width - o.width) / h) * h,
                d = Math.round((n.height - o.height) / c) * c,
                p = o.width + u,
                f = o.height + d,
                m = s.maxWidth && p > s.maxWidth,
                g = s.maxHeight && f > s.maxHeight,
                v = s.minWidth && s.minWidth > p,
                b = s.minHeight && s.minHeight > f;
            s.grid = l, v && (p += h), b && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                        s = i.offset(),
                        n = {
                            left: s.left - e.elementPos.left,
                            top: s.top - e.elementPos.top
                        };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1,
                        c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? h = !(c.left > r || o > c.right || c.top > l || a > c.bottom) : "fit" === n.tolerance && (h = c.left > o && r > c.right && c.top > a && l > c.bottom), h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = (s = this.items[i]).item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                l = r + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + h > r && l > s + h,
                d = "y" === this.options.axis || e + c > o && a > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [],
                l = [],
                h = this._connectWith();
            if (h && e)
                for (s = h.length - 1; s >= 0; s--)
                    for (n = (o = t(h[s], this.document[0])).length - 1; n >= 0; n--)(a = t.data(o[n], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, l, h, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = (n = t(d[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], s = 0, h = (r = u[i][0]).length; h > s; s++)(l = t(r[s])).data(this.widgetName + "-item", a), c.push({
                    item: l,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            var i, s, n, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, l, h, c, u, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (n = 1e4, o = null, a = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a], h = !1, e[u] - l > this.items[s][r] / 2 && (h = !0), n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options,
                s = i.heightStyle,
                n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    s = e.next(),
                    n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, s, n = this.options,
                o = this.active,
                a = t(e.currentTarget),
                r = a[0] === o[0],
                l = r && n.collapsible,
                h = l ? t() : a.next(),
                c = o.next(),
                u = {
                    oldHeader: o,
                    oldPanel: c,
                    newHeader: l ? t() : a,
                    newPanel: h
                };
            e.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                "aria-hidden": "true"
            }), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, i) {
            var s, n, o, a = this,
                r = 0,
                l = t.css("box-sizing"),
                h = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                u = h && c.down || c,
                d = function() {
                    a._toggleComplete(i)
                };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: o,
                easing: n,
                complete: d,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                }
            })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target),
                        s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i, s, n, o = this,
                a = this.options.icons.submenu,
                r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    i = e.prev(),
                    s = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(s, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = t(this);
                o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), n = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return 0 > (i = t(this)).offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), void((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))))
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = s
                    })), !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var c, u = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(s, n) {
                var o, a = {};
                return n ? "controlgroupLabel" === s ? ((o = e.element.find(n)).each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(n).each(function() {
                    var n = t(this),
                        o = n[s]("instance"),
                        r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                        var l = n[s]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                s = {
                    classes: {}
                };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            }
        },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(u, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
            }), s
        },
        _setOption: function(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                } else i._updateCornerClass(e[s](), s)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, s = this,
                n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            }), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var e = this.element[0].name,
                i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
                return 0 === t(this).form().length
            })).not(this.element) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function(t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e,
                n = s ? this.options.iconPosition : i,
                o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        },
        _setOption: function(t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(t.fn.button), t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments))
    }), t.ui.button, t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }), t.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, s) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: s,
                dpDiv: s ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, o, a) {
            var r, l, h, c, u, d = this._dialogInst;
            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), n(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e),
                n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), c === n && (c = null))
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, i, s) {
            var o, a, r, l, h = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (o = i || {}, "string" == typeof i && ((o = {})[i] = s), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), n(h.settings, o), null !== r && void 0 !== o.dateFormat && void 0 === o.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try {
                t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
            } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            var i, s, o, a, r, l, h;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                return !(a |= "fixed" === t(this).css("position"))
            }), r = {
                left: t.datepicker._pos[0],
                top: t.datepicker._pos[1]
            }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                display: "none",
                left: r.left + "px",
                top: r.top + "px"
            }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, c = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                o = n[1],
                a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && s.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
            return [(i = t(e).offset()).left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e),
                o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var n, o, a, r, l = 0,
                h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                b = -1,
                y = !1,
                _ = function(t) {
                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
                    return i && n++, i
                },
                w = function(t) {
                    var e = _(t),
                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"),
                        o = i.substring(l).match(n);
                    if (!o) throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                x = function(e, s, n) {
                    var o = -1,
                        a = t.map(_(e) ? n : s, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(a, function(t, e) {
                            var s = e[1];
                            return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0
                        }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                C = function() {
                    if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (n = 0; e.length > n; n++)
                if (y) "'" !== e.charAt(n) || _("'") ? C() : y = !1;
                else switch (e.charAt(n)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        b = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        m = (r = new Date(w("@"))).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        m = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        _("'") ? C() : y = !0;
                        break;
                    default:
                        C()
                }
            if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), b > -1)
                for (g = 1, v = b; !((o = this._getDaysInMonth(m, g - 1)) >= v);) g++, v -= o;
            if ((r = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                h = function(t, e, i) {
                    var s = "" + e;
                    if (l(t))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) {
                    return l(t) ? s[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                s = !1,
                n = function(i) {
                    var s = t.length > e + 1 && t.charAt(e + 1) === i;
                    return s && e++, s
                };
            for (e = 0; t.length > e; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (t) {}
                for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            a += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            a += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o));
                            break;
                        case "y":
                        case "Y":
                            n += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o))
                    }
                    l = r.exec(i)
                }
                return new Date(n, o, a)
            }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }(i) : new Date(i.getTime());
            return (n = n && "Invalid Date" == "" + n ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, l, h, c, u, d, p, f, m, g, v, b, y, _, w, x, C, k, T, D, I, S, P, E, A, M, O, N, H, $, W, z, R, F = new Date,
                L = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                j = this._get(t, "isRTL"),
                q = this._get(t, "showButtonPanel"),
                B = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                K = this._get(t, "stepMonths"),
                X = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                tt = t.drawYear;
            if (0 > Z && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) 0 > --Z && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - K, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + K, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : L, a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (j ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; U[0] > x; x++) {
                for (C = "", this.maxRows = 4, k = 0; U[1] > k; k++) {
                    if (T = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", I = "", X) {
                        if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
                            case 0:
                                I += " ui-datepicker-group-first", D = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case U[1] - 1:
                                I += " ui-datepicker-group-last", D = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                I += " ui-datepicker-group-middle", D = ""
                        }
                        I += "'>"
                    }
                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? j ? o : s : "") + (/all|right/.test(D) && 0 === x ? j ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) S += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P = (w + c) % 7] + "'>" + p[P] + "</span></th>";
                    for (I += S + "</tr></thead><tbody>", E = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, E)), A = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, M = Math.ceil((A + E) / 7), O = X && this.maxRows > M ? this.maxRows : M, this.maxRows = O, N = this._daylightSavingAdjust(new Date(tt, Z, 1 - A)), H = 0; O > H; H++) {
                        for (I += "<tr>", $ = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; 7 > w; w++) W = g ? g.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], R = (z = N.getMonth() !== Z) && !b || !W[0] || Q && Q > N || J && N > J, $ += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (N.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || y.getTime() === N.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + W[1] + (N.getTime() === G.getTime() ? " " + this._currentClass : "") + (N.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === L.getTime() ? " ui-state-highlight" : "") + (N.getTime() === G.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                        I += $ + "</tr>"
                    }++Z > 11 && (Z = 0, tt++), C += I += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                _ += C
            }
            return _ += h, t._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                b = this._get(t, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                _ = "";
            if (o || !g) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                _ += "</select>"
            }
            if (b || (y += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        })(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                }
            return y += this._get(t, "yearSuffix"), b && (y += (!o && g && v ? "" : "&#xa0;") + _), y + "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0),
                n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, i) {
            var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +t(this).css("z-index")
                }).get(),
                o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
        },
        open: function() {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                            n.trigger("focus")
                        }), e.preventDefault()) : (this._delay(function() {
                            s.trigger("focus")
                        }), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({
                    type: "button"
                }, s), n = s.click, o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
                    n.apply(e.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function(n, o) {
                    var a = o.offset.left - i.document.scrollLeft(),
                        r = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                s = this.options,
                n = s.resizable,
                o = this.uiDialog.css("position"),
                a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function(n, o) {
                    var a = i.uiDialog.offset(),
                        r = a.left - i.document.scrollLeft(),
                        l = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                s = !1,
                n = {};
            t.each(e, function(t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
                s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }, this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function() {
            this.menuWrap.position(t.extend({ of: this.button
            }, this.options.position))
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function(e, i) {
            var s = this,
                n = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {
                    text: o.optgroup
                }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function(e, i) {
            var s = t("<li>"),
                n = t("<div>", {
                    title: i.element.attr("title")
                });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            },
            click: function(t) {
                this._setSelection(), this._toggle(t)
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function(e) {
            var i = this,
                s = [];
            e.each(function(e, n) {
                s.push(i._parseOption(t(n), e))
            }), this.items = s
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push("<span tabindex='0'></span>");
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, l, h = this,
                c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - h.values(e));
                (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, o = t(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - o.width() / 2,
                top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var s, n = this.value(),
                o = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range,
                r = this.options,
                l = this,
                h = !this._animateOff && r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + n);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - n)
                }
                this._slide(e, o, s)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i), this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), void this._super(t, e))
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: o(function(t) {
            this._super(t)
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function(t, e) {
            var i;
            "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: o(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: o(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: o(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: o(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (t) {}
                try {
                    s = decodeURIComponent(s)
                } catch (t) {}
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                s = this.tabs.index(i),
                n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(e, i) {
            for (var s = this.tabs.length - 1; - 1 !== t.inArray((e > s && (e = 0), 0 > e && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                s = this.anchors,
                n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"),
                    l = t(s).closest("li"),
                    h = l.attr("aria-controls");
                e._isLocal(s) ? (a = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (a = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget).closest("li"),
                o = n[0] === s[0],
                a = o && i.collapsible,
                r = a ? t() : this._getPanelForTab(n),
                l = s.length ? this._getPanelForTab(s) : t(),
                h = {
                    oldTab: s,
                    oldPanel: l,
                    newTab: a ? t() : n,
                    newPanel: r
                };
            e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !a && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, h))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
            }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
                n = this.tabs.eq(e),
                o = n.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(n),
                r = {
                    tab: n,
                    panel: a
                },
                l = function(t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, r), l(n, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    l(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
                s = (e.attr("aria-describedby") || "").split(/\s+/),
                n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e.element)
            })
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void((i = s.call(t[0], function(i) {
                n._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                })
            })) && this._open(e, t, i))
        },
        _open: function(e, i, s) {
            function n(t) {
                h.of = t, a.is(":hidden") || a.position(h)
            }
            var o, a, r, l, h = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (l = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }), n(e)) : a.position(t.extend({ of: i
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (n(h.of), clearInterval(r))
                }, t.fx.interval)), this._trigger("open", e, {
                    tooltip: a
                })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), o.closing = !0, this._trigger("close", e, {
                tooltip: i
            }), o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
                s = t("<div>").appendTo(i),
                n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                element: e,
                tooltip: i
            }
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur"),
                    o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), t.ui.tooltip;
    var d = "ui-effects-",
        p = "ui-effects-style",
        f = "ui-effects-animated",
        m = t;
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var s = c[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
            }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), p(r, function(t, o) {
                    var a, r = o.re.exec(i),
                        l = r && o.parse(r),
                        c = o.space || "rgba";
                    return l ? (a = s[c](l), s[h[c].cache] = a[h[c].cache], n = s._rgba = a._rgba, !1) : e
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
            }

            function n(t, e, i) {
                return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
                r = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                l = t.Color = function(e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                h = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                c = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                u = l.support = {},
                d = t("<p>")[0],
                p = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = t.extend(l.prototype, {
                parse: function(n, a, r, c) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                    var u = this,
                        d = t.type(n),
                        f = this._rgba = [];
                    return a !== e && (n = [n, a, r, c], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (p(h.rgba.props, function(t, e) {
                        f[e.idx] = i(n[e.idx], e)
                    }), this) : "object" === d ? (p(h, n instanceof l ? function(t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
                    } : function(e, s) {
                        var o = s.cache;
                        p(s.props, function(t, e) {
                            if (!u[o] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[o] = s.to(u._rgba)
                            }
                            u[o][e.idx] = i(n[t], e, !0)
                        }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                    }), this) : e
                },
                is: function(t) {
                    var i = l(t),
                        s = !0,
                        n = this;
                    return p(h, function(t, o) {
                        var a, r = i[o.cache];
                        return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], p(o.props, function(t, i) {
                            return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                        })), s
                    }), s
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return p(h, function(i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var s = l(t),
                        n = s._space(),
                        o = h[n],
                        a = 0 === this.alpha() ? l("transparent") : this,
                        r = a[o.cache] || o.to(a._rgba),
                        u = r.slice();
                    return s = s[o.cache], p(o.props, function(t, n) {
                        var o = n.idx,
                            a = r[o],
                            l = s[o],
                            h = c[n.type] || {};
                        null !== l && (null === a ? u[o] = l : (h.mod && (l - a > h.mod / 2 ? a += h.mod : a - l > h.mod / 2 && (a -= h.mod)), u[o] = i((l - a) * e + a, n)))
                    }), this[n](u)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(e)._rgba;
                    return l(t.map(i, function(t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                        return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255,
                    a = t[3],
                    r = Math.max(s, n, o),
                    l = Math.min(s, n, o),
                    h = r - l,
                    c = r + l,
                    u = .5 * c;
                return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
            }, h.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    o = t[3],
                    a = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - a;
                return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
            }, p(h, function(s, n) {
                var o = n.props,
                    r = n.cache,
                    h = n.to,
                    c = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[r] && (this[r] = h(this._rgba)), s === e) return this[r].slice();
                    var n, a = t.type(s),
                        u = "array" === a || "object" === a ? s : arguments,
                        d = this[r].slice();
                    return p(o, function(t, e) {
                        var s = u["object" === a ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? ((n = l(c(d)))[r] = d, n) : l(d)
                }, p(o, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(n) {
                        var o, r = t.type(n),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === r ? c : ("function" === r && (n = n.call(this, c), r = t.type(n)), null == n && i.empty ? this : ("string" === r && ((o = a.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                p(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var o, a, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                if (n = l(o || n), !u.rgba && 1 !== n._rgba[3]) {
                                    for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try {
                                        r = t.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (t) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return p(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, o = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(m),
        function() {
            function e(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                return o
            }

            function i(e, i) {
                var s, o, a = {};
                for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
                return a
            }
            var s = ["add", "remove", "toggle"],
                n = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (m.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(n, o, a, r) {
                var l = t.speed(o, a, r);
                return this.queue(function() {
                    var o, a = t(this),
                        r = a.attr("class") || "",
                        h = l.children ? a.find("*").addBack() : a;
                    h = h.map(function() {
                        return {
                            el: t(this),
                            start: e(this)
                        }
                    }), (o = function() {
                        t.each(s, function(t, e) {
                            n[e] && a[e + "Class"](n[e])
                        })
                    })(), h = h.map(function() {
                        return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                    }), a.attr("class", r), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(a[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, s, n, o) {
                        return s ? t.effects.animateClass.call(this, {
                            add: i
                        }, s, n, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, s, n, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(e) {
                    return function(i, s, n, o, a) {
                        return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                            add: i
                        } : {
                            remove: i
                        }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, s, n, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, s, n, o) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, s, n, o)
                }
            })
        }(),
        function() {
            function e(e, i, s, n) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
            }

            function i(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
            }

            function s(t, e) {
                var i = e.outerWidth(),
                    s = e.outerHeight(),
                    n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
                return {
                    top: parseFloat(n[1]) || 0,
                    right: "auto" === n[2] ? i : parseFloat(n[2]),
                    bottom: "auto" === n[3] ? s : parseFloat(n[3]),
                    left: parseFloat(n[4]) || 0
                }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
                return function(i) {
                    return !!t(i).data(f) || e(i)
                }
            }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function(t, e) {
                    for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(d + e[i], t[0].style[e[i]])
                },
                restore: function(t, e) {
                    for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(d + e[s]), t.css(e[s], i))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            float: e.css("float")
                        },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: e.width(),
                            height: e.height()
                        },
                        o = document.activeElement;
                    try {
                        o.id
                    } catch (t) {
                        o = document.body
                    }
                    return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                }
            }), t.extend(t.effects, {
                version: "1.12.1",
                define: function(e, i, s) {
                    return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
                },
                scaledDimensions: function(t, e, i) {
                    if (0 === e) return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                    var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                        n = "vertical" !== i ? (e || 100) / 100 : 1;
                    return {
                        height: t.height() * n,
                        width: t.width() * s,
                        outerHeight: t.outerHeight() * n,
                        outerWidth: t.outerWidth() * s
                    }
                },
                clipToBox: function(t) {
                    return {
                        width: t.clip.right - t.clip.left,
                        height: t.clip.bottom - t.clip.top,
                        left: t.clip.left,
                        top: t.clip.top
                    }
                },
                unshift: function(t, e, i) {
                    var s = t.queue();
                    e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
                },
                saveStyle: function(t) {
                    t.data(p, t[0].style.cssText)
                },
                restoreStyle: function(t) {
                    t[0].style.cssText = t.data(p) || "", t.removeData(p)
                },
                mode: function(t, e) {
                    var i = t.is(":hidden");
                    return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createPlaceholder: function(e) {
                    var i, s = e.css("position"),
                        n = e.position();
                    return e.css({
                        marginTop: e.css("marginTop"),
                        marginBottom: e.css("marginBottom"),
                        marginLeft: e.css("marginLeft"),
                        marginRight: e.css("marginRight")
                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                        display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: e.css("marginTop"),
                        marginBottom: e.css("marginBottom"),
                        marginLeft: e.css("marginLeft"),
                        marginRight: e.css("marginRight"),
                        float: e.css("float")
                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(d + "placeholder", i)), e.css({
                        position: s,
                        left: n.left,
                        top: n.top
                    }), i
                },
                removePlaceholder: function(t) {
                    var e = d + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function(e) {
                    t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (n[i] = o[0] * s + o[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() {
                            t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e()
                        }
                        var a = t(this);
                        s.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === s.mode ? (a[h](), i()) : n.call(a[0], s, function() {
                            a.removeData(f), t.effects.cleanUp(a), "hide" === s.mode && a.hide(), i()
                        }) : (a.is(":hidden") ? "hide" === h : "show" === h) ? (a[h](), i()) : n.call(a[0], s, i)
                    }
                    var s = e.apply(this, arguments),
                        n = t.effects.effect[s.effect],
                        o = n.mode,
                        a = s.queue,
                        r = a || "fx",
                        l = s.complete,
                        h = s.mode,
                        c = [],
                        u = function(e) {
                            var i = t(this),
                                s = t.effects.mode(i, h) || o;
                            i.data(f, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !n ? h ? this[h](s.duration, l) : this.each(function() {
                        l && l.call(this)
                    }) : !1 === a ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
                },
                show: function(t) {
                    return function(s) {
                        if (i(s)) return t.apply(this, arguments);
                        var n = e.apply(this, arguments);
                        return n.mode = "show", this.effect.call(this, n)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(s) {
                        if (i(s)) return t.apply(this, arguments);
                        var n = e.apply(this, arguments);
                        return n.mode = "hide", this.effect.call(this, n)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(s) {
                        if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                        var n = e.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                    }), s
                },
                cssClip: function(t) {
                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
                },
                transfer: function(e, i) {
                    var s = t(this),
                        n = t(e.to),
                        o = "fixed" === n.css("position"),
                        a = t("body"),
                        r = o ? a.scrollTop() : 0,
                        l = o ? a.scrollLeft() : 0,
                        h = n.offset(),
                        c = {
                            top: h.top - r,
                            left: h.left - l,
                            height: n.innerHeight(),
                            width: n.innerWidth()
                        },
                        u = s.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                            top: u.top - r,
                            left: u.left - l,
                            height: s.innerHeight(),
                            width: s.innerWidth(),
                            position: o ? "fixed" : "absolute"
                        }).animate(c, e.duration, e.easing, function() {
                            d.remove(), t.isFunction(i) && i()
                        })
                }
            }), t.fx.step.clip = function(e) {
                e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                    top: e.pos * (e.end.top - e.start.top) + e.start.top,
                    right: e.pos * (e.end.right - e.start.right) + e.start.right,
                    bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                    left: e.pos * (e.end.left - e.start.left) + e.start.left
                })
            }
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var s = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            },
            n = t(this),
            o = e.direction || "up",
            a = n.cssClip(),
            r = {
                clip: t.extend({}, a)
            },
            l = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("bounce", function(e, i) {
        var s, n, o, a = t(this),
            r = e.mode,
            l = "hide" === r,
            h = "show" === r,
            c = e.direction || "up",
            u = e.distance,
            d = e.times || 5,
            p = 2 * d + (h || l ? 1 : 0),
            f = e.duration / p,
            m = e.easing,
            g = "up" === c || "down" === c ? "top" : "left",
            v = "up" === c || "left" === c,
            b = 0,
            y = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(g), u || (u = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && ((n = {
                opacity: 1
            })[g] = o, a.css("opacity", 0).css(g, v ? 2 * -u : 2 * u).animate(n, f, m)), l && (u /= Math.pow(2, d - 1)), (n = {})[g] = o; d > b; b++)(s = {})[g] = (v ? "-=" : "+=") + u, a.animate(s, f, m).animate(n, f, m), u = l ? 2 * u : u / 2;
        l && ((s = {
            opacity: 0
        })[g] = (v ? "-=" : "+=") + u, a.animate(s, f, m)), a.queue(i), t.effects.unshift(a, y, p + 1)
    }), t.effects.define("clip", "hide", function(e, i) {
        var s, n = {},
            o = t(this),
            a = e.direction || "vertical",
            r = "both" === a,
            l = r || "horizontal" === a,
            h = r || "vertical" === a;
        s = o.cssClip(), n.clip = {
            top: h ? (s.bottom - s.top) / 2 : s.top,
            right: l ? (s.right - s.left) / 2 : s.right,
            bottom: h ? (s.bottom - s.top) / 2 : s.bottom,
            left: l ? (s.right - s.left) / 2 : s.left
        }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("drop", "hide", function(e, i) {
        var s, n = t(this),
            o = "show" === e.mode,
            a = e.direction || "left",
            r = "up" === a || "down" === a ? "top" : "left",
            l = "up" === a || "left" === a ? "-=" : "+=",
            h = "+=" === l ? "-=" : "+=",
            c = {
                opacity: 0
            };
        t.effects.createPlaceholder(n), s = e.distance || n["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = l + s, o && (n.css(c), c[r] = h + s, c.opacity = 1), n.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("explode", "hide", function(e, i) {
        function s() {
            v.push(this), v.length === c * u && (d.css({
                visibility: "visible"
            }), t(v).remove(), i())
        }
        var n, o, a, r, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            u = c,
            d = t(this),
            p = "show" === e.mode,
            f = d.show().css("visibility", "hidden").offset(),
            m = Math.ceil(d.outerWidth() / u),
            g = Math.ceil(d.outerHeight() / c),
            v = [];
        for (n = 0; c > n; n++)
            for (r = f.top + n * g, h = n - (c - 1) / 2, o = 0; u > o; o++) a = f.left + o * m, l = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -o * m,
                top: -n * g
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: m,
                height: g,
                left: a + (p ? l * m : 0),
                top: r + (p ? h * g : 0),
                opacity: p ? 0 : 1
            }).animate({
                left: a + (p ? 0 : l * m),
                top: r + (p ? 0 : h * g),
                opacity: p ? 1 : 0
            }, e.duration || 500, e.easing, s)
    }), t.effects.define("fade", "toggle", function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({
            opacity: s ? 1 : 0
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("fold", "hide", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = "show" === n,
            a = "hide" === n,
            r = e.size || 15,
            l = /([0-9]+)%/.exec(r),
            h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            c = e.duration / 2,
            u = t.effects.createPlaceholder(s),
            d = s.cssClip(),
            p = {
                clip: t.extend({}, d)
            },
            f = {
                clip: t.extend({}, d)
            },
            m = [d[h[0]], d[h[1]]],
            g = s.queue().length;
        l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), p.clip[h[0]] = r, f.clip[h[0]] = r, f.clip[h[1]] = 0, o && (s.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), s.queue(function(i) {
            u && u.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i()
        }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(s, g, 4)
    }), t.effects.define("highlight", "show", function(e, i) {
        var s = t(this),
            n = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("size", function(e, i) {
        var s, n, o, a = t(this),
            r = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = e.mode,
            u = "effect" !== c,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = a.css("position"),
            m = a.position(),
            g = t.effects.scaledDimensions(a),
            v = e.from || g,
            b = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (o = v, v = b, b = o), n = {
            from: {
                y: v.height / g.height,
                x: v.width / g.width
            },
            to: {
                y: b.height / g.height,
                x: b.width / g.width
            }
        }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (v = t.effects.setTransition(a, l, n.from.y, v), b = t.effects.setTransition(a, l, n.to.y, b)), n.from.x !== n.to.x && (v = t.effects.setTransition(a, h, n.from.x, v), b = t.effects.setTransition(a, h, n.to.x, b))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (v = t.effects.setTransition(a, r, n.from.y, v), b = t.effects.setTransition(a, r, n.to.y, b)), p && (s = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * s.y + m.top, v.left = (g.outerWidth - v.outerWidth) * s.x + m.left, b.top = (g.outerHeight - b.outerHeight) * s.y + m.top, b.left = (g.outerWidth - b.outerWidth) * s.x + m.left), a.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
            var i = t(this),
                s = t.effects.scaledDimensions(i),
                o = {
                    height: s.height * n.from.y,
                    width: s.width * n.from.x,
                    outerHeight: s.outerHeight * n.from.y,
                    outerWidth: s.outerWidth * n.from.x
                },
                a = {
                    height: s.height * n.to.y,
                    width: s.width * n.to.x,
                    outerHeight: s.height * n.to.y,
                    outerWidth: s.width * n.to.x
                };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), a = t.effects.setTransition(i, l, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, h, n.from.x, o), a = t.effects.setTransition(i, h, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                u && t.effects.restoreStyle(i)
            })
        })), a.animate(b, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === b.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
            }
        })
    }), t.effects.define("scale", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
            a = t.extend(!0, {
                from: t.effects.scaledDimensions(s),
                to: t.effects.scaledDimensions(s, o, e.direction || "both"),
                origin: e.origin || ["middle", "center"]
            }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
    }), t.effects.define("puff", "hide", function(e, i) {
        var s = t.extend(!0, {}, e, {
            fade: !0,
            percent: parseInt(e.percent, 10) || 150
        });
        t.effects.effect.scale.call(this, s, i)
    }), t.effects.define("pulsate", "show", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = "show" === n,
            a = o || "hide" === n,
            r = 2 * (e.times || 5) + (a ? 1 : 0),
            l = e.duration / r,
            h = 0,
            c = 1,
            u = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1); r > c; c++) s.animate({
            opacity: h
        }, l, e.easing), h = 1 - h;
        s.animate({
            opacity: h
        }, l, e.easing), s.queue(i), t.effects.unshift(s, u, r + 1)
    }), t.effects.define("shake", function(e, i) {
        var s = 1,
            n = t(this),
            o = e.direction || "left",
            a = e.distance || 20,
            r = e.times || 3,
            l = 2 * r + 1,
            h = Math.round(e.duration / l),
            c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            m = n.queue().length;
        for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, h, e.easing); r > s; s++) n.animate(p, h, e.easing).animate(f, h, e.easing);
        n.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(n, m, l + 1)
    }), t.effects.define("slide", "show", function(e, i) {
        var s, n, o = t(this),
            a = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            },
            r = e.mode,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
        t(this).transfer(e, i)
    })
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
"use strict";
var e = jQuery.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
"use strict";
t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
        s = this;
    t(this).one("bsTransitionEnd", function() {
        i = !0
    });
    return setTimeout(function() {
        i || t(s).trigger(t.support.transition.end)
    }, e), this
}, t(function() {
    t.support.transition = function() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(t) {
"use strict";
var e = '[data-dismiss="alert"]',
    i = function(i) {
        t(i).on("click", e, this.close)
    };
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
    function s() {
        a.detach().trigger("closed.bs.alert").remove()
    }
    var n = t(this),
        o = n.attr("data-target");
    o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
    var a = t("#" === o ? [] : o);
    e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s())
};
var s = t.fn.alert;
t.fn.alert = function(e) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.alert");
        n || s.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(s)
    })
}, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
    return t.fn.alert = s, this
}, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.button"),
            o = "object" == typeof e && e;
        n || s.data("bs.button", n = new i(this, o)), "toggle" == e ? n.toggle() : e && n.setState(e)
    })
}
var i = function(e, s) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1
};
i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
}, i.prototype.setState = function(e) {
    var i = "disabled",
        s = this.$element,
        n = s.is("input") ? "val" : "html",
        o = s.data();
    e += "Text", null == o.resetText && s.data("resetText", s[n]()), setTimeout(t.proxy(function() {
        s[n](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i).prop(i, !1))
    }, this), 0)
}, i.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var i = this.$element.find("input");
        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var s = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
    return t.fn.button = s, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var s = t(i.target).closest(".btn");
    e.call(s, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), s.is("input,button") ? s.trigger("focus") : s.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.carousel"),
            o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
            a = "string" == typeof e ? e : o.slide;
        n || s.data("bs.carousel", n = new i(this, o)), "number" == typeof e ? n.to(e) : a ? n[a]() : o.interval && n.pause().cycle()
    })
}
var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e);
    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
    var s = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(s)
}, i.prototype.to = function(t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
}, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, i.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, i.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, i.prototype.slide = function(e, s) {
    var n = this.$element.find(".item.active"),
        o = s || this.getItemForDirection(e, n),
        a = this.interval,
        r = "next" == e ? "left" : "right",
        l = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var h = o[0],
        c = t.Event("slide.bs.carousel", {
            relatedTarget: h,
            direction: r
        });
    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var u = t(this.$indicators.children()[this.getItemIndex(o)]);
            u && u.addClass("active")
        }
        var d = t.Event("slid.bs.carousel", {
            relatedTarget: h,
            direction: r
        });
        return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(r), o.addClass(r), n.one("bsTransitionEnd", function() {
            o.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(d)
            }, 0)
        }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this
    }
};
var s = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = s, this
};
var n = function(i) {
    var s, n = t(this),
        o = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
    if (o.hasClass("carousel")) {
        var a = t.extend({}, o.data(), n.data()),
            r = n.attr("data-slide-to");
        r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var i = t(this);
        e.call(i, i.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(s)
}

function i(e) {
    return this.each(function() {
        var i = t(this),
            n = i.data("bs.collapse"),
            o = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
        !n && o.toggle && /show|hide/.test(e) && (o.toggle = !1), n || i.data("bs.collapse", n = new s(this, o)), "string" == typeof e && n[e]()
    })
}
var s = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
s.VERSION = "3.3.7", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
    toggle: !0
}, s.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, s.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
            var o = t.Event("show.bs.collapse");
            if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                var a = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var r = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return r.call(this);
                var l = t.camelCase(["scroll", a].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[a](this.$element[0][l])
            }
        }
    }
}, s.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var n = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : n.call(this)
        }
    }
}, s.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, s.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, s) {
        var n = t(s);
        this.addAriaAndCollapsedClass(e(n), n)
    }, this)).end()
}, s.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
};
var n = t.fn.collapse;
t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = n, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) {
    var n = t(this);
    n.attr("data-target") || s.preventDefault();
    var o = e(n),
        a = o.data("bs.collapse") ? "toggle" : n.data();
    i.call(o, a)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var i = e.attr("data-target");
    i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var s = i && t(i);
    return s && s.length ? s : e.parent()
}

function i(i) {
    i && 3 === i.which || (t(s).remove(), t(n).each(function() {
        var s = t(this),
            n = e(s),
            o = {
                relatedTarget: this
            };
        n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (s.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
    }))
}
var s = ".dropdown-backdrop",
    n = '[data-toggle="dropdown"]',
    o = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
o.VERSION = "3.3.7", o.prototype.toggle = function(s) {
    var n = t(this);
    if (!n.is(".disabled, :disabled")) {
        var o = e(n),
            a = o.hasClass("open");
        if (i(), !a) {
            "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
            var r = {
                relatedTarget: this
            };
            if (o.trigger(s = t.Event("show.bs.dropdown", r)), s.isDefaultPrevented()) return;
            n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
        }
        return !1
    }
}, o.prototype.keydown = function(i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
        var s = t(this);
        if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
            var o = e(s),
                a = o.hasClass("open");
            if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && o.find(n).trigger("focus"), s.trigger("click");
            var r = o.find(".dropdown-menu li:not(.disabled):visible a");
            if (r.length) {
                var l = r.index(i.target);
                38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
            }
        }
    }
};
var a = t.fn.dropdown;
t.fn.dropdown = function(e) {
    return this.each(function() {
        var i = t(this),
            s = i.data("bs.dropdown");
        s || i.data("bs.dropdown", s = new o(this)), "string" == typeof e && s[e].call(i)
    })
}, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = a, this
}, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", n, o.prototype.toggle).on("keydown.bs.dropdown.data-api", n, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(t) {
"use strict";

function e(e, s) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.modal"),
            a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        o || n.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](s) : a.show && o.show(s)
    })
}
var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, i.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, i.prototype.show = function(e) {
    var s = this,
        n = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        s.$element.one("mouseup.dismiss.bs.modal", function(e) {
            t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var n = t.support.transition && s.$element.hasClass("fade");
        s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), n && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
        var o = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        n ? s.$dialog.one("bsTransitionEnd", function() {
            s.$element.trigger("focus").trigger(o)
        }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(o)
    }))
}, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
}, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, i.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, i.prototype.backdrop = function(e) {
    var s = this,
        n = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var o = t.support.transition && n;
        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var a = function() {
            s.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
    } else e && e()
}, i.prototype.handleUpdate = function() {
    this.adjustDialog()
}, i.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, i.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, i.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var s = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
    return t.fn.modal = s, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var s = t(this),
        n = s.attr("href"),
        o = t(s.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
        a = o.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(n) && n
        }, o.data(), s.data());
    s.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
            s.is(":visible") && s.trigger("focus")
        })
    }), e.call(o, a, this)
})
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, e.prototype.init = function(e, i, s) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
        var a = n[o];
        if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
                l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.getOptions = function(e) {
    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, e.prototype.getDelegateOptions = function() {
    var e = {},
        i = this.getDefaults();
    return this._options && t.each(this._options, function(t, s) {
        i[t] != s && (e[t] = s)
    }), e
}, e.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
        "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
}, e.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, e.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
        "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
}, e.prototype.show = function() {
    var i = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(i);
        var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (i.isDefaultPrevented() || !s) return;
        var n = this,
            o = this.tip(),
            a = this.getUID(this.type);
        this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
        var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            h = l.test(r);
        h && (r = r.replace(l, "") || "top"), o.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var c = this.getPosition(),
            u = o[0].offsetWidth,
            d = o[0].offsetHeight;
        if (h) {
            var p = r,
                f = this.getPosition(this.$viewport);
            r = "bottom" == r && c.bottom + d > f.bottom ? "top" : "top" == r && c.top - d < f.top ? "bottom" : "right" == r && c.right + u > f.width ? "left" : "left" == r && c.left - u < f.left ? "right" : r, o.removeClass(p).addClass(r)
        }
        var m = this.getCalculatedOffset(r, c, u, d);
        this.applyPlacement(m, r);
        var g = function() {
            var t = n.hoverState;
            n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
        };
        t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
    }
}, e.prototype.applyPlacement = function(e, i) {
    var s = this.tip(),
        n = s[0].offsetWidth,
        o = s[0].offsetHeight,
        a = parseInt(s.css("margin-top"), 10),
        r = parseInt(s.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(s[0], t.extend({
        using: function(t) {
            s.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), s.addClass("in");
    var l = s[0].offsetWidth,
        h = s[0].offsetHeight;
    "top" == i && h != o && (e.top = e.top + o - h);
    var c = this.getViewportAdjustedDelta(i, e, l, h);
    c.left ? e.left += c.left : e.top += c.top;
    var u = /top|bottom/.test(i),
        d = u ? 2 * c.left - n + l : 2 * c.top - o + h,
        p = u ? "offsetWidth" : "offsetHeight";
    s.offset(e), this.replaceArrow(d, s[0][p], u)
}, e.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, e.prototype.hide = function(i) {
    function s() {
        "in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
    }
    var n = this,
        o = t(this.$tip),
        a = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(a), !a.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), this.hoverState = null, this
}, e.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, e.prototype.hasContent = function() {
    return this.getTitle()
}, e.prototype.getPosition = function(e) {
    var i = (e = e || this.$element)[0],
        s = "BODY" == i.tagName,
        n = i.getBoundingClientRect();
    null == n.width && (n = t.extend({}, n, {
        width: n.right - n.left,
        height: n.bottom - n.top
    }));
    var o = window.SVGElement && i instanceof window.SVGElement,
        a = s ? {
            top: 0,
            left: 0
        } : o ? null : e.offset(),
        r = {
            scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        l = s ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, n, r, l, a)
}, e.prototype.getCalculatedOffset = function(t, e, i, s) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
        top: e.top - s,
        left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - s / 2,
        left: e.left - i
    } : {
        top: e.top + e.height / 2 - s / 2,
        left: e.left + e.width
    }
}, e.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
    var n = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return n;
    var o = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var r = e.top - o - a.scroll,
            l = e.top + o - a.scroll + s;
        r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
    } else {
        var h = e.left - o,
            c = e.left + o + i;
        h < a.left ? n.left = a.left - h : c > a.right && (n.left = a.left + a.width - c)
    }
    return n
}, e.prototype.getTitle = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, e.prototype.getUID = function(t) {
    do {
        t += ~~(1e6 * Math.random())
    } while (document.getElementById(t));
    return t
}, e.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, e.prototype.enable = function() {
    this.enabled = !0
}, e.prototype.disable = function() {
    this.enabled = !1
}, e.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, e.prototype.toggle = function(e) {
    var i = this;
    e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
}, e.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
};
var i = t.fn.tooltip;
t.fn.tooltip = function(i) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.tooltip"),
            o = "object" == typeof i && i;
        !n && /destroy|hide/.test(i) || (n || s.data("bs.tooltip", n = new e(this, o)), "string" == typeof i && n[i]())
    })
}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = i, this
}
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, e.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, e.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var i = t.fn.popover;
t.fn.popover = function(i) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.popover"),
            o = "object" == typeof i && i;
        !n && /destroy|hide/.test(i) || (n || s.data("bs.popover", n = new e(this, o)), "string" == typeof i && n[i]())
    })
}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
    return t.fn.popover = i, this
}
}(jQuery),
function(t) {
"use strict";

function e(i, s) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function i(i) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.scrollspy"),
            o = "object" == typeof i && i;
        n || s.data("bs.scrollspy", n = new e(this, o)), "string" == typeof i && n[i]()
    })
}
e.VERSION = "3.3.7", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
    var e = this,
        i = "offset",
        s = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = t(this),
            n = e.data("target") || e.attr("href"),
            o = /^#./.test(n) && t(n);
        return o && o.length && o.is(":visible") && [
            [o[i]().top + s, n]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        s = this.options.offset + i - this.$scrollElement.height(),
        n = this.offsets,
        o = this.targets,
        a = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= s) return a != (t = o[o.length - 1]) && this.activate(t);
    if (a && e < n[0]) return this.activeTarget = null, this.clear();
    for (t = n.length; t--;) a != o[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(o[t])
}, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        s = t(i).parents("li").addClass("active");
    s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var s = t.fn.scrollspy;
t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = s, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
        var e = t(this);
        i.call(e, e.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.tab");
        n || s.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
    })
}
var i = function(e) {
    this.element = t(e)
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
        i = e.closest("ul:not(.dropdown-menu)"),
        s = e.data("target");
    if (s || (s = (s = e.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var n = i.find(".active:last a"),
            o = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            a = t.Event("show.bs.tab", {
                relatedTarget: n[0]
            });
        if (n.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
            var r = t(s);
            this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                n.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: n[0]
                })
            })
        }
    }
}, i.prototype.activate = function(e, s, n) {
    function o() {
        a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
    }
    var a = s.find("> .active"),
        r = n && t.support.transition && (a.length && a.hasClass("fade") || !!s.find("> .fade").length);
    a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
};
var s = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = s, this
};
var n = function(i) {
    i.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var s = t(this),
            n = s.data("bs.affix"),
            o = "object" == typeof e && e;
        n || s.data("bs.affix", n = new i(this, o)), "string" == typeof e && n[e]()
    })
}
var i = function(e, s) {
    this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
}, i.prototype.getState = function(t, e, i, s) {
    var n = this.$target.scrollTop(),
        o = this.$element.offset(),
        a = this.$target.height();
    if (null != i && "top" == this.affixed) return n < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= o.top) && "bottom" : !(n + a <= t - s) && "bottom";
    var r = null == this.affixed,
        l = r ? n : o.top;
    return null != i && n <= i ? "top" : null != s && l + (r ? a : e) >= t - s && "bottom"
}, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            s = this.options.offset,
            n = s.top,
            o = s.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
        "object" != typeof s && (o = n = s), "function" == typeof n && (n = s.top(this.$element)), "function" == typeof o && (o = s.bottom(this.$element));
        var r = this.getState(a, e, n, o);
        if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
                h = t.Event(l + ".bs.affix");
            if (this.$element.trigger(h), h.isDefaultPrevented()) return;
            this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == r && this.$element.offset({
            top: a - e - o
        })
    }
};
var s = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = s, this
}, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
        var i = t(this),
            s = i.data();
        s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
    })
})
}(jQuery),
function(t) {
"use strict";
var e = {
    initialize: function() {
        this.event(), this.hoverDropdown(), this.navbarSticky(), this.navbarScrollspy()
    },
    event: function() {
        var e = t("nav.navbar.bootsnav");
        if (e.hasClass("navbar-sticky") && e.wrap("<div class='wrap-sticky'></div>"), e.hasClass("brand-center")) {
            var i = new Array,
                s = t("nav.brand-center"),
                n = s.find("ul.navbar-nav");
            s.prepend("<span class='storage-name' style='display:none;'></span>"), s.find("ul.navbar-nav > li").each(function() {
                if (t(this).hasClass("active")) {
                    var e = t("a", this).eq(0).text();
                    t(".storage-name").html(e)
                }
                i.push(t(this).html())
            });
            var o = i.splice(0, Math.round(i.length / 2)),
                a = i,
                r = "",
                l = function(t) {
                    r = "";
                    for (var e = 0; e < t.length; e++) r += "<li>" + t[e] + "</li>"
                };
            l(o), n.html(r), s.find("ul.nav").first().addClass("navbar-left"), l(a), n.after('<ul class="nav navbar-nav"></ul>').next().html(r), s.find("ul.nav").last().addClass("navbar-right"), s.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"), s.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"), s.find("ul.navbar-nav > li").each(function() {
                var e = t("ul.dropdown-menu", this),
                    i = t("ul.megamenu-content", this);
                e.closest("li").addClass("dropdown"), i.closest("li").addClass("megamenu-fw")
            });
            var h = t(".storage-name").html();
            "" == !h && t("ul.navbar-nav > li:contains('" + h + "')").addClass("active")
        }
        e.hasClass("navbar-sidebar") ? (t("body").addClass("wrap-nav-sidebar"), e.wrapInner("<div class='scroller'></div>")) : t(".bootsnav").addClass("on"), e.find("ul.nav").hasClass("navbar-center") && e.addClass("menu-center"), e.hasClass("navbar-full") ? (t("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"), t(".wrap-full-menu").wrap("<div class='nav-full'></div>"), t("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")) : e.hasClass("navbar-mobile") ? e.removeClass("no-full") : e.addClass("no-full"), e.hasClass("navbar-mobile") && (t(".navbar-collapse").on("shown.bs.collapse", function() {
            t("body").addClass("side-right")
        }), t(".navbar-collapse").on("hide.bs.collapse", function() {
            t("body").removeClass("side-right")
        }), t(window).on("resize", function() {
            t("body").removeClass("side-right")
        })), e.hasClass("no-background") && t(window).on("scroll", function() {
            t(window).scrollTop() > 34 ? t(".navbar-fixed").removeClass("no-background") : t(".navbar-fixed").addClass("no-background")
        }), e.hasClass("navbar-transparent") && t(window).on("scroll", function() {
            t(window).scrollTop() > 34 ? t(".navbar-fixed").removeClass("navbar-transparent") : t(".navbar-fixed").addClass("navbar-transparent")
        }), t(".btn-cart").on("click", function(t) {
            t.stopPropagation()
        }), t("nav.navbar.bootsnav .attr-nav").each(function() {
            t("li.search > a", this).on("click", function(e) {
                e.preventDefault(), t(".top-search").slideToggle()
            })
        }), t(".input-group-addon.close-search").on("click", function() {
            t(".top-search").slideUp()
        }), t("nav.navbar.bootsnav .attr-nav").each(function() {
            t("li.side-menu > a", this).on("click", function(e) {
                e.preventDefault(), t("nav.navbar.bootsnav > .side").toggleClass("on"), t("body").toggleClass("on-side")
            })
        }), t(".side .close-side").on("click", function(e) {
            e.preventDefault(), t("nav.navbar.bootsnav > .side").removeClass("on"), t("body").removeClass("on-side")
        }), t("body").wrapInner("<div class='wrapper'></div>")
    },
    hoverDropdown: function() {
        var e = t("nav.navbar.bootsnav"),
            i = t(window).width(),
            s = t(window).height(),
            n = e.find("ul.nav").data("in"),
            o = e.find("ul.nav").data("out");
        if (i < 991) {
            t(".scroller").css("height", "auto"), t("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"), t("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"), t("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"), t("nav.navbar.bootsnav ul.nav").off("mouseleave"), t(".navbar-collapse").removeClass("animated"), t("nav.navbar.bootsnav ul.nav").each(function() {
                t(".dropdown-menu", this).addClass("animated"), t(".dropdown-menu", this).removeClass(o), t("a.dropdown-toggle", this).off("click"), t("a.dropdown-toggle", this).on("click", function(e) {
                    return e.stopPropagation(), t(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(n), t(this).closest("li.dropdown").first().toggleClass("on"), !1
                }), t("li.dropdown", this).each(function() {
                    return t(this).find(".dropdown-menu").stop().fadeOut(), t(this).on("hidden.bs.dropdown", function() {
                        t(this).find(".dropdown-menu").stop().fadeOut()
                    }), !1
                }), t(".megamenu-fw", this).each(function() {
                    t(".col-menu", this).each(function() {
                        t(".content", this).addClass("animated"), t(".content", this).stop().fadeOut(), t(".title", this).off("click"), t(".title", this).on("click", function() {
                            return t(this).closest(".col-menu").find(".content").stop().fadeToggle().addClass(n), t(this).closest(".col-menu").toggleClass("on"), !1
                        }), t(".content", this).on("click", function(t) {
                            t.stopPropagation()
                        })
                    })
                })
            });
            var a = function() {
                t("li.dropdown", this).removeClass("on"), t(".dropdown-menu", this).stop().fadeOut(), t(".dropdown-menu", this).removeClass(n), t(".col-menu", this).removeClass("on"), t(".col-menu .content", this).stop().fadeOut(), t(".col-menu .content", this).removeClass(n)
            };
            t("nav.navbar.bootsnav").on("mouseleave", function() {
                a()
            }), t("nav.navbar.bootsnav .attr-nav").each(function() {
                t(".dropdown-menu", this).removeClass("animated"), t("li.dropdown", this).off("mouseenter"), t("li.dropdown", this).off("mouseleave"), t("a.dropdown-toggle", this).off("click"), t("a.dropdown-toggle", this).on("click", function(e) {
                    e.stopPropagation(), t(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(), t(".navbar-toggle").each(function() {
                        t(".fa", this).removeClass("fa-times"), t(".fa", this).addClass("fa-bars"), t(".navbar-collapse").removeClass("in"), t(".navbar-collapse").removeClass("on")
                    })
                }), t(this).on("mouseleave", function() {
                    return t(".dropdown-menu", this).stop().fadeOut(), t("li.dropdown", this).removeClass("on"), !1
                })
            }), t(".navbar-toggle").each(function() {
                t(this).off("click"), t(this).on("click", function() {
                    t(".fa", this).toggleClass("fa-bars"), t(".fa", this).toggleClass("fa-times"), a()
                })
            })
        } else i > 991 && (t(".scroller").css("height", s + "px"), e.hasClass("navbar-sidebar") ? t("nav.navbar.bootsnav ul.nav").each(function() {
            t("a.dropdown-toggle", this).off("click"), t("a.dropdown-toggle", this).on("click", function(t) {
                t.stopPropagation()
            }), t(".dropdown-menu", this).addClass("animated"), t("li.dropdown", this).on("mouseenter", function() {
                return t(".dropdown-menu", this).eq(0).removeClass(o), t(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(n), t(this).addClass("on"), !1
            }), t(".col-menu").each(function() {
                t(".content", this).addClass("animated"), t(".title", this).on("mouseenter", function() {
                    return t(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(n), t(this).closest(".col-menu").addClass("on"), !1
                })
            }), t(this).on("mouseleave", function() {
                return t(".dropdown-menu", this).stop().removeClass(n), t(".dropdown-menu", this).stop().addClass(o).fadeOut(), t(".col-menu", this).find(".content").stop().fadeOut().removeClass(n), t(".col-menu", this).removeClass("on"), t("li.dropdown", this).removeClass("on"), !1
            })
        }) : t("nav.navbar.bootsnav ul.nav").each(function() {
            t("a.dropdown-toggle", this).off("click"), t("a.dropdown-toggle", this).on("click", function(t) {
                t.stopPropagation()
            }), t(".megamenu-fw", this).each(function() {
                t(".title", this).off("click"), t("a.dropdown-toggle", this).off("click"), t(".content").removeClass("animated")
            }), t(".dropdown-menu", this).addClass("animated"), t("li.dropdown", this).on("mouseenter", function() {
                return t(".dropdown-menu", this).eq(0).removeClass(o), t(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(n), t(this).addClass("on"), !1
            }), t("li.dropdown", this).on("mouseleave", function() {
                t(".dropdown-menu", this).eq(0).removeClass(n), t(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(o), t(this).removeClass("on")
            }), t(this).on("mouseleave", function() {
                return t(".dropdown-menu", this).removeClass(n), t(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(o), t("li.dropdown", this).removeClass("on"), !1
            })
        }), t("nav.navbar.bootsnav .attr-nav").each(function() {
            t("a.dropdown-toggle", this).off("click"), t("a.dropdown-toggle", this).on("click", function(t) {
                t.stopPropagation()
            }), t(".dropdown-menu", this).addClass("animated"), t("li.dropdown", this).on("mouseenter", function() {
                return t(".dropdown-menu", this).eq(0).removeClass(o), t(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(n), t(this).addClass("on"), !1
            }), t("li.dropdown", this).on("mouseleave", function() {
                t(".dropdown-menu", this).eq(0).removeClass(n), t(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(o), t(this).removeClass("on")
            }), t(this).on("mouseleave", function() {
                return t(".dropdown-menu", this).removeClass(n), t(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(o), t("li.dropdown", this).removeClass("on"), !1
            })
        }));
        if (e.hasClass("navbar-full")) {
            var r = t(window).height(),
                l = t(window).width();
            t(".nav-full").css("height", r + "px"), t(".wrap-full-menu").css("height", r + "px"), t(".wrap-full-menu").css("width", l + "px"), t(".navbar-collapse").addClass("animated"), t(".navbar-toggle").each(function() {
                var e = t(this).data("target");
                t(this).off("click"), t(this).on("click", function(i) {
                    return i.preventDefault(), t(e).removeClass(o), t(e).addClass("in"), t(e).addClass(n), !1
                }), t("li.close-full-menu").on("click", function(i) {
                    return i.preventDefault(), t(e).addClass(o), setTimeout(function() {
                        t(e).removeClass("in"), t(e).removeClass(n)
                    }, 500), !1
                })
            })
        }
    },
    navbarSticky: function() {
        var e = t("nav.navbar.bootsnav");
        if (e.hasClass("navbar-sticky")) {
            var i = e.height();
            t(".wrap-sticky").height(i);
            var s = t(".wrap-sticky").offset().top;
            t(window).on("scroll", function() {
                t(window).scrollTop() > s ? e.addClass("sticked") : e.removeClass("sticked")
            })
        }
    },
    navbarScrollspy: function() {
        var e = t(".navbar-scrollspy"),
            i = t("body"),
            s = t("nav.navbar.bootsnav"),
            n = s.outerHeight();
        if (e.length) {
            i.scrollspy({
                target: ".navbar",
                offset: n
            }), t(".scroll").on("click", function(e) {
                e.preventDefault(), t(".scroll").removeClass("active"), t(this).addClass("active"), t(".navbar-collapse").removeClass("in"), t(".navbar-toggle").each(function() {
                    t(".fa", this).removeClass("fa-times"), t(".fa", this).addClass("fa-bars")
                });
                t(window).scrollTop();
                var i = t(this).find("a"),
                    n = t(i.attr("href")).offset().top,
                    o = t(window).width(),
                    a = s.data("minus-value-desktop"),
                    r = s.data("minus-value-mobile"),
                    l = s.data("speed");
                if (o > 992) var h = n - a;
                else h = n - r;
                t("html, body").stop().animate({
                    scrollTop: h
                }, l)
            });
            var o = function() {
                var t = i.data("bs.scrollspy");
                t && (n = s.outerHeight(), t.options.offset = n, i.data("bs.scrollspy", t), i.scrollspy("refresh"))
            };
            t(window).on("resize", function() {
                clearTimeout(t);
                var t = setTimeout(o, 200)
            })
        }
    }
};
t(document).ready(function() {
    e.initialize()
}), t(window).on("resize", function() {
    e.hoverDropdown(), setTimeout(function() {
        e.navbarSticky()
    }, 500), t(".navbar-toggle").each(function() {
        t(".fa", this).removeClass("fa-times"), t(".fa", this).addClass("fa-bars"), t(this).removeClass("fixed")
    }), t(".navbar-collapse").removeClass("in"), t(".navbar-collapse").removeClass("on"), t(".navbar-collapse").removeClass("bounceIn")
})
}(jQuery),
function(t) {
t.fn.theiaStickySidebar = function(e) {
    function i(e, i) {
        return !0 === e.initialized || !(t("body").width() < e.minWidth) && (function(e, i) {
            e.initialized = !0, t("head").append(t('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), i.each(function() {
                var i = {};
                if (i.sidebar = t(this), i.options = e || {}, i.container = t(i.options.containerSelector), 0 == i.container.length && (i.container = i.sidebar.parent()), i.sidebar.parents().css("-webkit-transform", "none"), i.sidebar.css({
                        position: "relative",
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), i.stickySidebar = i.sidebar.find(".theiaStickySidebar"), 0 == i.stickySidebar.length) {
                    var n = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    i.sidebar.find("script").filter(function(t, e) {
                        return 0 === e.type.length || e.type.match(n)
                    }).remove(), i.stickySidebar = t("<div>").addClass("theiaStickySidebar").append(i.sidebar.children()), i.sidebar.append(i.stickySidebar)
                }
                i.marginBottom = parseInt(i.sidebar.css("margin-bottom")), i.paddingTop = parseInt(i.sidebar.css("padding-top")), i.paddingBottom = parseInt(i.sidebar.css("padding-bottom"));
                var o = i.stickySidebar.offset().top,
                    a = i.stickySidebar.outerHeight();

                function r() {
                    i.fixedScrollTop = 0, i.sidebar.css({
                        "min-height": "1px"
                    }), i.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }
                i.stickySidebar.css("padding-top", 1), i.stickySidebar.css("padding-bottom", 1), o -= i.stickySidebar.offset().top, a = i.stickySidebar.outerHeight() - a - o, 0 == o ? (i.stickySidebar.css("padding-top", 0), i.stickySidebarPaddingTop = 0) : i.stickySidebarPaddingTop = 1, 0 == a ? (i.stickySidebar.css("padding-bottom", 0), i.stickySidebarPaddingBottom = 0) : i.stickySidebarPaddingBottom = 1, i.previousScrollTop = null, i.fixedScrollTop = 0, r(), i.onScroll = function(i) {
                    if (i.stickySidebar.is(":visible"))
                        if (t("body").width() < i.options.minWidth) r();
                        else {
                            if (i.options.disableOnResponsiveLayouts) {
                                var n = i.sidebar.outerWidth("none" == i.sidebar.css("float"));
                                if (n + 50 > i.container.width()) return void r()
                            }
                            var o, a, l = t(document).scrollTop(),
                                h = "static";
                            if (l >= i.sidebar.offset().top + (i.paddingTop - i.options.additionalMarginTop)) {
                                var c, u = i.paddingTop + e.additionalMarginTop,
                                    d = i.paddingBottom + i.marginBottom + e.additionalMarginBottom,
                                    p = i.sidebar.offset().top,
                                    f = i.sidebar.offset().top + (o = i.container, a = o.height(), o.children().each(function() {
                                        a = Math.max(a, t(this).height())
                                    }), a),
                                    m = 0 + e.additionalMarginTop,
                                    g = i.stickySidebar.outerHeight() + u + d < t(window).height();
                                c = g ? m + i.stickySidebar.outerHeight() : t(window).height() - i.marginBottom - i.paddingBottom - e.additionalMarginBottom;
                                var v = p - l + i.paddingTop,
                                    b = f - l - i.paddingBottom - i.marginBottom,
                                    y = i.stickySidebar.offset().top - l,
                                    _ = i.previousScrollTop - l;
                                "fixed" == i.stickySidebar.css("position") && "modern" == i.options.sidebarBehavior && (y += _), "stick-to-top" == i.options.sidebarBehavior && (y = e.additionalMarginTop), "stick-to-bottom" == i.options.sidebarBehavior && (y = c - i.stickySidebar.outerHeight()), y = _ > 0 ? Math.min(y, m) : Math.max(y, c - i.stickySidebar.outerHeight()), y = Math.max(y, v), y = Math.min(y, b - i.stickySidebar.outerHeight());
                                var w = i.container.height() == i.stickySidebar.outerHeight();
                                h = (w || y != m) && (w || y != c - i.stickySidebar.outerHeight()) ? l + y - i.sidebar.offset().top - i.paddingTop <= e.additionalMarginTop ? "static" : "absolute" : "fixed"
                            }
                            if ("fixed" == h) i.stickySidebar.css({
                                position: "fixed",
                                width: s(i.stickySidebar) + "px",
                                transform: "translateY(" + y + "px)",
                                left: i.sidebar.offset().left + parseInt(i.sidebar.css("padding-left")) + "px",
                                top: "0px"
                            });
                            else if ("absolute" == h) {
                                var x = {};
                                "absolute" != i.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (l + y - i.sidebar.offset().top - i.stickySidebarPaddingTop - i.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = s(i.stickySidebar) + "px", x.left = "", i.stickySidebar.css(x)
                            } else "static" == h && r();
                            "static" != h && 1 == i.options.updateSidebarHeight && i.sidebar.css({
                                "min-height": i.stickySidebar.outerHeight() + i.stickySidebar.offset().top - i.sidebar.offset().top + i.paddingBottom
                            }), i.previousScrollTop = l
                        }
                }, i.onScroll(i), t(document).scroll(function(t) {
                    return function() {
                        t.onScroll(t)
                    }
                }(i)), t(window).resize(function(t) {
                    return function() {
                        t.stickySidebar.css({
                            position: "static"
                        }), t.onScroll(t)
                    }
                }(i))
            })
        }(e, i), !0)
    }

    function s(t) {
        var e;
        try {
            e = t[0].getBoundingClientRect().width
        } catch (t) {}
        return void 0 === e && (e = t.width()), e
    }(e = t.extend({
        containerSelector: "",
        additionalMarginTop: 0,
        additionalMarginBottom: 0,
        updateSidebarHeight: !0,
        minWidth: 0,
        disableOnResponsiveLayouts: !0,
        sidebarBehavior: "modern"
    }, e)).additionalMarginTop = parseInt(e.additionalMarginTop) || 0, e.additionalMarginBottom = parseInt(e.additionalMarginBottom) || 0,
        function(e, s) {
            i(e, s) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), t(document).scroll(function(e, s) {
                return function(n) {
                    var o = i(e, s);
                    o && t(this).unbind(n)
                }
            }(e, s)), t(window).resize(function(e, s) {
                return function(n) {
                    var o = i(e, s);
                    o && t(this).unbind(n)
                }
            }(e, s)))
        }(e, this)
}
}(jQuery);
var RYPP = function(t, e) {
"use strict";

function i(t, e, i) {
    if (void 0 === e) return console.log("Youtube API V3 requires a valid API KEY.\nFollow the instructions at: https://developers.google.com/youtube/v3/getting-started"), !1;
    this.DOM = {}, this.options = {}, this.data = {
        ytapi: {
            playlist_info: "https://www.googleapis.com/youtube/v3/playlists?part=snippet&id={{RESOURCES_ID}}&key={{YOUR_API_KEY}}",
            playlist: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId={{RESOURCES_ID}}&key={{YOUR_API_KEY}}",
            pl_ID: "",
            videolist: "https://www.googleapis.com/youtube/v3/videos?part=snippet,status&maxResults=50&id={{RESOURCES_ID}}&key={{YOUR_API_KEY}}"
        },
        temp_vl: [],
        firsttime: !0,
        ismobile: void 0 !== window.orientation,
        ispopulated: !1
    }, this.init(t, e, i)
}
return i.prototype = {
    init: function(e, i, s) {
        if (this.api_key = i, this.options = {
                update_title_desc: !1,
                autoplay: !0,
                autonext: !0,
                loop: !0,
                mute: !1,
                debug: !1
            }, void 0 !== s && t.extend(this.options, s), this.DOM = {}, this.DOM.$el = t(e), this.DOM.$playlc = this.DOM.$el.find(".RYPP-playlist"), this.DOM.$items = this.DOM.$el.find(".RYPP-items"), this.DOM.$videoc = this.DOM.$el.find(".RYPP-video"), this.DOM.$title = this.DOM.$el.find(".RYPP-title"), this.DOM.$desc = this.DOM.$el.find(".RYPP-desc"), this.DOM.$el[0].ytplayer = null, this.data.player_uid = Math.random().toString(16).substr(2, 8), this.DOM.$el.attr("data-rypp", this.data.player_uid).find(".RYPP-video-player").attr("id", "RYPP-vp-" + this.data.player_uid).attr("name", "RYPP-vp-" + this.data.player_uid), this.options.debug && console.log("Unique ID: RYPP-vp-" + this.data.player_uid), void 0 === window.YT) {
            var n = document.createElement("script"),
                o = document.getElementsByTagName("head")[0];
            n.src = "https://www.youtube.com/iframe_api?version=3", o.appendChild(n)
        } else this.addAPIPlayer()
    },
    onYTIframeAPIReadyCallback: function() {
        this.addAPIPlayer()
    },
    updateTitleDesc: function() {
        var e = this.DOM.$el.attr("data-playlist"),
            i = this.data.ytapi.playlist_info.replace("{{RESOURCES_ID}}", e).replace("{{YOUR_API_KEY}}", this.api_key);
        t.ajaxSetup({
            cache: !1
        }), t.ajax(i, {
            context: this,
            dataType: "json",
            crossDomain: !0,
            error: function() {}
        })
    },
    populatePlaylist: function() {
        if (this.options.update_title_desc && (this.options.debug && console.log(this.data.player_uid + ": Updating playlist title / desc"), this.updateTitleDesc()), this.options.debug && console.log(this.data.player_uid + ": Populating playlist"), this.DOM.$items.html("").append(t("<ol>")), this.DOM.$el.attr("data-playlist")) this.data.pl_ID = this.DOM.$el.attr("data-playlist"), this.getVideosFrom("playlist", this.data.pl_ID);
        else if (this.DOM.$el.attr("data-ids")) {
            var e = this.DOM.$el.attr("data-ids");
            e = t.map(e.split(","), t.trim).join(","), this.getVideosFrom("videolist", e)
        }
    },
    addAPIPlayer: function() {
        var t = this;
        window.YTConfig = {
            host: "https://www.youtube.com"
        }, this.DOM.$el[0].ytplayer = new YT.Player("RYPP-vp-" + t.data.player_uid, {
            playerVars: {
                enablejsapi: 1,
                rel: 0,
                modestbranding: 1,
                wmode: "transparent"
            },
            events: {
                onReady: function() {
                    t.options.debug && console.log(t.data.player_uid + ": ytplayer ready"), t.onPlayerReady()
                },
                onStateChange: function(e) {
                    t.onPlayerStateChange(e)
                },
                onError: function(t) {
                    console.log(t)
                }
            }
        })
    },
    onPlayerReady: function() {
        this.options.debug && console.log(this.data.player_uid + ": ytplayer ready callback"), this.populatePlaylist()
    },
    onPlayerStateChange: function(t) {
        var e = this;
        if (void 0 !== t) {
            -1 === t.data && this.data.firsttime && (this.options.autoplay || this.data.ismobile || (this.DOM.$el[0].ytplayer.stopVideo(), this.data.firsttime = !1), this.options.mute && this.DOM.$el[0].ytplayer.mute()), 3 === t.data && this.data.ismobile && this.data.firsttime && setTimeout(function() {
                e.DOM.$el[0].ytplayer.stopVideo(), e.data.firsttime = !1
            }, 500);
            var i = null;
            0 === t.data && !this.data.ismobile && this.options.autonext && (0 === (i = this.DOM.$items.find("li.selected").next()).length && this.options.loop && (i = this.DOM.$items.find("li").first()), i.trigger("click"))
        }
    },
    getVideosFrom: function(e, i, s) {
        var n = this,
            o = this.data.ytapi[e].replace("{{RESOURCES_ID}}", i).replace("{{YOUR_API_KEY}}", this.api_key);
        void 0 !== s && (o += "&pageToken=" + s), t.ajaxSetup({
            cache: !1
        }), t.ajax(o, {
            context: this,
            dataType: "json",
            crossDomain: !0,
            error: function() {},
            success: function(e) {
                if ("youtube#playlistItemListResponse" === e.kind) {
                    var i = [];
                    if (t.map(e.items, function(t, e) {
                            void 0 !== t.snippet.resourceId.videoId && i.push(t.snippet.resourceId.videoId)
                        }), n.data.temp_vl.push(i), void 0 !== e.nextPageToken && "" !== e.nextPageToken) n.getVideosFrom("playlist", n.data.pl_ID, e.nextPageToken);
                    else
                        for (var s = 0, o = n.data.temp_vl.length; s < o; s++) i = n.data.temp_vl.shift(), n.getVideosFrom("videolist", i.join(","))
                } else if ("youtube#videoListResponse" === e.kind)
                    for (var a = 0, r = e.items.length; a < r; a++) {
                        var l = e.items[a];
                        if (-1 === t.inArray(l.status.uploadStatus, ["rejected", "deleted", "failed"]) && void 0 !== l.snippet.thumbnails) {
                            var h = l.id,
                                c = l.snippet.title,
                                u = l.snippet.channelTitle,
                                d = l.snippet.thumbnails.default.url;
                            n.addVideo2Playlist(h, c, u, d)
                        }
                        t.isEmptyObject(n.data.temp_vl) && this.startPlayList()
                    }
            }
        })
    },
    startPlayList: function() {
        var e = this.DOM,
            i = null,
            s = this;
        e.$items.on("click touchstart", "li", function(n) {
            n.preventDefault(), e.$items.find("li").removeClass("selected"), t(this).addClass("selected"), i = t(this).data("video-id"), s.DOM.$el[0].ytplayer.loadVideoById(i), s.data.ismobile && (s.data.firsttime = !0)
        }), 0 === e.$items.find("li.selected").length && e.$items.find("li").first().click()
    },
    addVideo2Playlist: function(e, i, s, n) {
        var o = this.DOM;
        t('<li data-video-id="' + e + '"><p class="title">' + i + '<small class="author"><br>' + s + '</small></p><img src="' + n + '" class="thumb"></li>').appendTo(o.$items.find("ol"))
    }
}, i
}(jQuery);

function onYouTubeIframeAPIReady() {
$("[data-rypp]").each(function(t, e) {
    $(e)[0].rypp_data_obj.onYTIframeAPIReadyCallback()
})
}
$.fn.rypp = function(t, e) {
    return this.each(function() {
        this.rypp_data_obj = new RYPP(this, t, e)
    })
}, "function" != typeof Object.create && (Object.create = function(t) {
    function e() {}
    return e.prototype = t, new e
}),
function(t, e, i) {
    var s = {
        init: function(e, i) {
            this.$elem = t(i), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), e), this.userOptions = e, this.loadContent()
        },
        loadContent: function() {
            var e, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (e = i.options.jsonPath, t.getJSON(e, function(t) {
                var e, s = "";
                if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                else {
                    for (e in t.owl) t.owl.hasOwnProperty(e) && (s += t.owl[e].item);
                    i.$elem.html(s)
                }
                i.logIn()
            })) : i.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
                opacity: 0
            }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), this.onStartup()
        },
        onStartup: function() {
            this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var t = this;
            e.setTimeout(function() {
                t.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var t = this;
            if (!1 !== t.$elem.is(":visible")) return !1;
            t.$elem.css({
                opacity: 0
            }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), t.checkVisible = e.setInterval(function() {
                t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                    opacity: 1
                }, 200), e.clearInterval(t.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
        },
        baseClass: function() {
            var t = this.$elem.hasClass(this.options.baseClass),
                e = this.$elem.hasClass(this.options.theme);
            t || this.$elem.addClass(this.options.baseClass), e || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var e, i;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            if ((e = t(this.options.responsiveBaseWidth).width()) > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(t, e) {
                        return t[0] - e[0]
                    }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= e && (this.options.items = this.options.itemsCustom[i][1]);
            else e <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), e <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), e <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), e <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), e <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var i, s, n = this;
            if (!0 !== n.options.responsive) return !1;
            s = t(e).width(), n.resizer = function() {
                t(e).width() !== s && (!1 !== n.options.autoPlay && e.clearInterval(n.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function() {
                    s = t(e).width(), n.updateVars()
                }, n.options.responsiveRefreshRate))
            }, t(e).resize(n.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var e = this,
                i = 0,
                s = e.itemsAmount - e.options.items;
            e.$owlItems.each(function(n) {
                var o = t(this);
                o.css({
                    width: e.itemWidth
                }).data("owl-item", Number(n)), 0 != n % e.options.items && n !== s || n > s || (i += 1), o.data("owl-roundPages", i)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            }), this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
            var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
        },
        min: function() {
            return 0
        },
        loops: function() {
            var e, i, s = 0,
                n = 0;
            for (this.positionsInArray = [0], this.pagesInArray = [], e = 0; e < this.itemsAmount; e += 1) n += this.itemWidth, this.positionsInArray.push(-n), !0 === this.options.scrollPerPage && ((i = (i = t(this.$owlItems[e])).data("owl-roundPages")) !== s && (this.pagesInArray[s] = this.positionsInArray[e], s = i))
        },
        buildControls: function() {
            !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var e = this,
                i = t('<div class="owl-buttons"/>');
            e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                class: "owl-prev",
                html: e.options.navigationText[0] || ""
            }), e.buttonNext = t("<div/>", {
                class: "owl-next",
                html: e.options.navigationText[1] || ""
            }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                t.preventDefault()
            }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        },
        buildPagination: function() {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var e, i, s, n, o, a;
            if (!1 === this.options.pagination) return !1;
            for (this.paginationWrapper.html(""), e = 0, i = this.itemsAmount - this.itemsAmount % this.options.items, n = 0; n < this.itemsAmount; n += 1) 0 == n % this.options.items && (e += 1, i === n && (s = this.itemsAmount - this.options.items), o = t("<div/>", {
                class: "owl-page"
            }), a = t("<span></span>", {
                text: !0 === this.options.paginationNumbers ? e : "",
                class: !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), o.append(a), o.data("owl-page", i === n ? s : n), o.data("owl-roundPages", e), this.paginationWrapper.append(o));
            this.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            if (!1 === e.options.pagination) return !1;
            e.paginationWrapper.find(".owl-page").each(function() {
                t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(t) {
            if (this.isTransition) return !1;
            if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
                this.currentItem = 0, t = "rewind"
            }
            this.goTo(this.currentItem, t)
        },
        prev: function(t) {
            if (this.isTransition) return !1;
            if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
                this.currentItem = this.maximumItem, t = "rewind"
            }
            this.goTo(this.currentItem, t)
        },
        goTo: function(t, i, s) {
            var n = this;
            return !n.isTransition && ("function" == typeof n.options.beforeMove && n.options.beforeMove.apply(this, [n.$elem]), t >= n.maximumItem ? t = n.maximumItem : 0 >= t && (t = 0), n.currentItem = n.owl.currentItem = t, !1 !== n.options.transitionStyle && "drag" !== s && 1 === n.options.items && !0 === n.browser.support3d ? (n.swapSpeed(0), !0 === n.browser.support3d ? n.transition3d(n.positionsInArray[t]) : n.css2slide(n.positionsInArray[t], 1), n.afterGo(), n.singleItemTransition(), !1) : (t = n.positionsInArray[t], !0 === n.browser.support3d ? (n.isCss3Finish = !1, !0 === i ? (n.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                n.isCss3Finish = !0
            }, n.options.paginationSpeed)) : "rewind" === i ? (n.swapSpeed(n.options.rewindSpeed), e.setTimeout(function() {
                n.isCss3Finish = !0
            }, n.options.rewindSpeed)) : (n.swapSpeed("slideSpeed"), e.setTimeout(function() {
                n.isCss3Finish = !0
            }, n.options.slideSpeed)), n.transition3d(t)) : !0 === i ? n.css2slide(t, n.options.paginationSpeed) : "rewind" === i ? n.css2slide(t, n.options.rewindSpeed) : n.css2slide(t, n.options.slideSpeed), void n.afterGo()))
        },
        jumpTo: function(t) {
            "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop", e.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var t = this;
            if (t.apStatus = "play", !1 === t.options.autoPlay) return !1;
            e.clearInterval(t.autoPlayInterval), t.autoPlayInterval = e.setInterval(function() {
                t.next(!0)
            }, t.options.autoPlay)
        },
        swapSpeed: function(t) {
            "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
        },
        addCssSpeed: function(t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        },
        transition3d: function(t) {
            this.$owlWrapper.css(this.doTranslate(t))
        },
        css2move: function(t) {
            this.$owlWrapper.css({
                left: t
            })
        },
        css2slide: function(t, e) {
            var i = this;
            i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                left: t
            }, {
                duration: e || i.options.slideSpeed,
                complete: function() {
                    i.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var t = i.createElement("div");
            t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                support3d: null !== t && 1 === t.length,
                isTouch: "ontouchstart" in e || e.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
        },
        eventTypes: function() {
            var t = ["s", "e", "x"];
            this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(t) {
                t.preventDefault()
            }), this.$elem.on("mousedown.disableTextSelect", function(e) {
                return t(e.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function s(t) {
                if (void 0 !== t.touches) return {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY
                };
                if (void 0 === t.touches) {
                    if (void 0 !== t.pageX) return {
                        x: t.pageX,
                        y: t.pageY
                    };
                    if (void 0 === t.pageX) return {
                        x: t.clientX,
                        y: t.clientY
                    }
                }
            }

            function n(e) {
                "on" === e ? (t(i).on(r.ev_types.move, o), t(i).on(r.ev_types.end, a)) : "off" === e && (t(i).off(r.ev_types.move), t(i).off(r.ev_types.end))
            }

            function o(n) {
                n = n.originalEvent || n || e.event, r.newPosX = s(n).x - l.offsetX, r.newPosY = s(n).y - l.offsetY, r.newRelativeX = r.newPosX - l.relativePos, "function" == typeof r.options.startDragging && !0 !== l.dragging && 0 !== r.newRelativeX && (l.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== n.preventDefault ? n.preventDefault() : n.returnValue = !1, l.sliding = !0), (10 < r.newPosY || -10 > r.newPosY) && !1 === l.sliding && t(i).off("touchmove.owl"), r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5), !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
            }

            function a(i) {
                var s;
                (i = i.originalEvent || i || e.event).target = i.target || i.srcElement, l.dragging = !1, !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = 0 > r.newRelativeX ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", 0 !== r.newRelativeX && (s = r.getNewPosition(), r.goTo(s, !1, "drag"), l.targetElement === i.target && !0 !== r.browser.isTouch && (t(i.target).on("click.disable", function(e) {
                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                }), s = (i = t._data(i.target, "events").click).pop(), i.splice(0, 0, s))), n("off")
            }
            var r = this,
                l = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            r.isCssFinish = !0, r.$elem.on(r.ev_types.start, ".owl-wrapper", function(i) {
                var o;
                if (3 === (i = i.originalEvent || i || e.event).which) return !1;
                if (!(r.itemsAmount <= r.options.items)) {
                    if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
                    !1 !== r.options.autoPlay && e.clearInterval(r.autoPlayInterval), !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, t(this).css(r.removeTransition()), o = t(this).position(), l.relativePos = o.left, l.offsetX = s(i).x - o.left, l.offsetY = s(i).y - o.top, n("on"), l.sliding = !1, l.targetElement = i.target || i.srcElement
                }
            })
        },
        getNewPosition: function() {
            var t = this.closestItem();
            return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
        },
        closestItem: function() {
            var e = this,
                i = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray,
                s = e.newPosX,
                n = null;
            return t.each(i, function(o, a) {
                s - e.itemWidth / 20 > i[o + 1] && s - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, e.currentItem = !0 === e.options.scrollPerPage ? t.inArray(n, e.positionsInArray) : o) : s + e.itemWidth / 20 < a && s + e.itemWidth / 20 > (i[o + 1] || i[o] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (n = i[o + 1] || i[i.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = i[o + 1], e.currentItem = o + 1))
            }), e.currentItem
        },
        moveDirection: function() {
            var t;
            return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
        },
        customEvents: function() {
            var t = this;
            t.$elem.on("owl.next", function() {
                t.next()
            }), t.$elem.on("owl.prev", function() {
                t.prev()
            }), t.$elem.on("owl.play", function(e, i) {
                t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
            }), t.$elem.on("owl.stop", function() {
                t.stop(), t.hoverStatus = "stop"
            }), t.$elem.on("owl.goTo", function(e, i) {
                t.goTo(i)
            }), t.$elem.on("owl.jumpTo", function(e, i) {
                t.jumpTo(i)
            })
        },
        stopOnHover: function() {
            var t = this;
            !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
                t.stop()
            }), t.$elem.on("mouseout", function() {
                "stop" !== t.hoverStatus && t.play()
            }))
        },
        lazyLoad: function() {
            var e, i, s, n;
            if (!1 === this.options.lazyLoad) return !1;
            for (e = 0; e < this.itemsAmount; e += 1) "loaded" !== (i = t(this.$owlItems[e])).data("owl-loaded") && (s = i.data("owl-item"), "string" != typeof(n = i.find(".lazyOwl")).data("src") ? i.data("owl-loaded", "loaded") : (void 0 === i.data("owl-loaded") && (n.hide(), i.addClass("loading").data("owl-loaded", "checked")), (!0 !== this.options.lazyFollow || s >= this.currentItem) && s < this.currentItem + this.options.items && n.length && this.lazyPreload(i, n)))
        },
        lazyPreload: function(t, i) {
            function s() {
                t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === o.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof o.options.afterLazyLoad && o.options.afterLazyLoad.apply(this, [o.$elem])
            }
            var n, o = this,
                a = 0;
            "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), n = !0) : i[0].src = i.data("src"),
                function t() {
                    a += 1, o.completeImg(i.get(0)) || !0 === n ? s() : 100 >= a ? e.setTimeout(t, 100) : s()
                }()
        },
        autoHeight: function() {
            function i() {
                var i = t(n.$owlItems[n.currentItem]).height();
                n.wrapperOuter.css("height", i + "px"), n.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                    n.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            var s, n = this,
                o = t(n.$owlItems[n.currentItem]).find("img");
            void 0 !== o.get(0) ? (s = 0, function t() {
                s += 1, n.completeImg(o.get(0)) ? i() : 100 >= s ? e.setTimeout(t, 100) : n.wrapperOuter.css("height", "")
            }()) : i()
        },
        completeImg: function(t) {
            return !(!t.complete || void 0 !== t.naturalWidth && 0 === t.naturalWidth)
        },
        onVisibleItems: function() {
            var e;
            for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], e = this.currentItem; e < this.currentItem + this.options.items; e += 1) this.visibleItems.push(e), !0 === this.options.addClassActive && t(this.$owlItems[e]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(t) {
            this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
        },
        singleItemTransition: function() {
            var t = this,
                e = t.outClass,
                i = t.inClass,
                s = t.$owlItems.eq(t.currentItem),
                n = t.$owlItems.eq(t.prevItem),
                o = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
            t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": a + "px",
                "-moz-perspective-origin": a + "px",
                "perspective-origin": a + "px"
            }), n.css({
                position: "relative",
                left: o + "px"
            }).addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                t.endPrev = !0, n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(n, e)
            }), s.addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                t.endCurrent = !0, s.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(s, i)
            })
        },
        clearTransStyle: function(t, e) {
            t.css({
                position: "",
                left: ""
            }).removeClass(e), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop(), e.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
        },
        reinit: function(e) {
            e = t.extend({}, this.userOptions, e), this.unWrap(), this.init(e, this.$elem)
        },
        addItem: function(t, e) {
            var i;
            return !!t && (0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), (i = void 0 === e || -1 === e ? -1 : e) >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(i).before(t), void this.setVars()))
        },
        removeItem: function(t) {
            if (0 === this.$elem.children().length) return !1;
            t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), this.setVars()
        }
    };
    t.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (!0 === t(this).data("owl-init")) return !1;
            t(this).data("owl-init", !0);
            var i = Object.create(s);
            i.init(e, this), t.data(this, "owlCarousel", i)
        })
    }, t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), $(document).ready(function() {
    "use strict";
    $("body").append('<div id="toTop" class="btn back-top"><span class="fa fa-chevron-up"></span></div>'), $(window).on("scroll", function() {
        0 !== $(this).scrollTop() ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
    }), $("#toTop").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    }), $(".se-pre-con").fadeOut("slow"), $("#NewsTicker").owlCarousel({
        autoPlay: 5e3,
        singleItem: !0,
        transitionStyle: "goDown",
        pagination: !1,
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"]
    }), $("#NewsTicker-rtl").owlCarousel({
        rtl: !0,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        nav: !0,
        navText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"],
        items: 1
    }), $(".main-content, .rightSidebar, .leftSidebar").theiaStickySidebar({
        additionalMarginTop: 30
    }), $("#owl-slider").owlCarousel({
        autoPlay: 4e3,
        singleItem: !0,
        transitionStyle: "fade",
        navigation: !0,
        navigationText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"]
    }), $("#owl-slider-rtl").owlCarousel({
        rtl: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 6e3,
        autoplayHoverPause: !0,
        nav: !0,
        navText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"],
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 1
            },
            768: {
                items: 1
            },
            980: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    }), $("#featured-owl").owlCarousel({
        autoPlay: 4e3,
        items: 4,
        lazyLoad: !0,
        pagination: !1,
        navigation: !1
    }), $("#featured-owl-rtl").owlCarousel({
        rtl: !0,
        loop: !0,
        dots: !1,
        nav: !1,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 1
            },
            768: {
                items: 2
            },
            980: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    }), $("#post-slider").owlCarousel({
        navigation: !0,
        singleItem: !0,
        pagination: !1,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"]
    }), $("#post-slider-2").owlCarousel({
        navigation: !0,
        singleItem: !0,
        pagination: !1,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"]
    }), $(".post-slider-rtl").owlCarousel({
        rtl: !0,
        loop: !0,
        dots: !1,
        nav: !0,
        navText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"],
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 1
            },
            768: {
                items: 1
            },
            980: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    }), $("#post-slider-3").owlCarousel({
        navigation: !0,
        singleItem: !0,
        pagination: !1,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"]
    }), $(".weather-week>div.list-group>a").click(function(t) {
        t.preventDefault(), $(this).siblings("a.active").removeClass("active"), $(this).addClass("active");
        var e = $(this).index();
        $("div.bhoechie-tab>div.weather-temp-wrap").removeClass("active"), $("div.bhoechie-tab>div.weather-temp-wrap").eq(e).addClass("active")
    }), $("#datepicker").datepicker(), window.api_key = "AIzaSyAroKpLQWTON6y34m5VqGcLCPtOmfLBqh4", $("#rypp-demo-1").rypp(api_key, {
        update_title_desc: !0,
        autoplay: !1,
        autonext: !1,
        loop: !1,
        mute: !1,
        debug: !1
    }), $(".collapse.in").prev(".panel-heading").addClass("active"), $("#accordion").on("show.bs.collapse", function(t) {
        $(t.target).prev(".panel-heading").addClass("active")
    }).on("hide.bs.collapse", function(t) {
        $(t.target).prev(".panel-heading").removeClass("active")
    });
    for (var t = document.getElementsByClassName("progressber"), e = t.length, i = 0; i < e; i++) {
        var s = {
                percent: t[i].getAttribute("data-percent"),
                size: t[i].getAttribute("data-size") || 60,
                lineWidth: t[i].getAttribute("data-line") || 4
            },
            n = document.createElement("canvas"),
            o = document.createElement("span");
        o.textContent = s.percent + "%", "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
        var a = n.getContext("2d");
        n.width = n.height = s.size, t[i].appendChild(o), t[i].appendChild(n), a.translate(s.size / 2, s.size / 2);
        var r = (s.size - s.lineWidth) / 2,
            l = function(t, e, i) {
                i = Math.min(Math.max(0, i || 1), 1), a.beginPath(), a.arc(0, 0, r, 0, 2 * Math.PI * i, !1), a.strokeStyle = t, a.lineCap = "round", a.lineWidth = e, a.stroke()
            };
        l("transparent", s.lineWidth, 1), l("#eb0254", s.lineWidth, s.percent / 100)
    }
});