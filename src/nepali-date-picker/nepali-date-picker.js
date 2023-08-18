import NepaliFunctions from "./NepaliFunctions";

! function() {
    function e(e, t) {
        var n = e,
            r = t + 1;
        return r > 12 && (n += 1, r = 1), {
            year: n,
            month: r
        }
    }

    function t(e, t) {
        var n = e,
            r = t - 1;
        return r < 1 && (n -= 1, r = 12), {
            year: n,
            month: r
        }
    }

    function n() {
        B = !0
    }

    function r() {
        B = !1
    }

    function a(e) {
        var t = document.getElementById("ndp-nepali-box");
        t && t.remove(), Y = !1
    }

    function o(e) {
        var t = {};
        if (Y) a("showNdpCalendarBox");
        else {
            var n = document.getElementById(e);
            A(e), t = b(e), E = e;
            var r = n.value;
            t.unicodeDate && (r = NepaliFunctions.ConvertToNumber(r));
            var o = "";
            r ? o = NepaliFunctions.ConvertToDateObject(r, t.dateFormat) : (o = NepaliFunctions.GetCurrentBsDate(), t.disableAfter && NepaliFunctions.CompareBsDates(o, t.disableAfter) && (o = t.disableAfter));
            var u = null;
            null == o ? (o = NepaliFunctions.GetCurrentBsDate(), u = "") : u = NepaliFunctions.ConvertDateFormat(o, "YYYY-MM-DD");
            i(o.year, o.month, u), d(n), Y = !0
        }
    }

    function i(n, r, a) {
        var o = document.getElementById("ndp-nepali-box"),
            d = b(null),
            l = "english" == d.language,
            s = o.getElementsByTagName("table")[0].getElementsByTagName("tbody");
        s.length > 0 && s[0].parentNode.removeChild(s[0]);
        var c = d.ndpYearCount || 0,
            m = document.getElementById("currentMonth");
        m.innerHTML = "";
        var h = document.createElement("SPAN");
        h.innerHTML = " ";
        var p = document.createElement("SPAN");
        p.innerHTML = l ? NepaliFunctions.GetBsMonth(r - 1) : NepaliFunctions.GetBsMonthInUnicode(r - 1);
        var v = document.createElement("SPAN");
        v.innerHTML = l ? n : NepaliFunctions.ConvertToUnicode(n), d.ndpMonth && d.ndpYear ? (m.appendChild(f(r, n, a)), m.appendChild(y(r, n, c, a))) : d.ndpMonth ? (m.appendChild(f(r, n, a)), m.appendChild(h), m.appendChild(v)) : d.ndpYear ? (m.appendChild(p), m.appendChild(h), m.appendChild(y(r, n, c, a))) : (m.appendChild(p), m.appendChild(h), m.appendChild(v));
        var g = e(n, r),
            D = t(n, r),
            N = g.year,
            A = g.month,
            M = D.year,
            Y = D.month,
            B = document.getElementById("ndp-header"),
            C = document.getElementById("prev");
        C && C.parentNode.removeChild(C);
        var E = document.getElementById("next");
        E && E.parentNode.removeChild(E);
        var F = !0;
        d.disableBefore && NepaliFunctions.CompareBsDates(d.disableBefore, {
            year: M,
            month: Y,
            day: NepaliFunctions.GetDaysInBsMonth(M, Y)
        }) && (F = !1);
        var T = document.createElement("SPAN");
        T.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>`;
        T.setAttribute("class", "ndc-chevron ndc-left");
        var S = document.createElement("A");
        S.setAttribute("id", "prev"), S.setAttribute("title", "Previous Month"), S.setAttribute("class", F ? "ndp-prev" : "ndp-prev ndp-disabled"), S.setAttribute("href", "javascript:void(0)"), S.appendChild(T), F &&
        S.addEventListener("click", function() {
            i(M, Y, a)
        });
        var I = !0;
        d.disableAfter && NepaliFunctions.CompareBsDates({
            year: N,
            month: A,
            day: 1
        }, d.disableAfter) && (I = !1);
        var x = document.createElement("SPAN");
        x.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>`;
        x.setAttribute("class", "ndc-chevron ndc-right");
        var G = document.createElement("A");
        G.setAttribute("id", "next"), G.setAttribute("title", "Next Month"), G.setAttribute("class", I ? "ndp-next" : "ndp-next ndp-disabled"), G.setAttribute("href", "javascript:void(0)"), G.appendChild(x), I && G.addEventListener("click", function() {
            i(N, A, a)
        }), B.appendChild(S), B.appendChild(G), o.getElementsByTagName("table")[0].insertAdjacentElement("beforeend", u(n, r, a))
    }

    function u(e, t, n) {
        var r, a, o, i = b(null),
            u = "english" == i.language;
        if (n) {
            var d = NepaliFunctions.ConvertToDateObject(n, "YYYY-MM-DD");
            r = d.year, a = d.month, o = d.day
        }
        var l = NepaliFunctions.GetCurrentBsDate(),
            s = l.year,
            c = l.month,
            m = l.day,
            h = NepaliFunctions.GetDaysInBsMonth(e, t),
            f = {
                year: e,
                month: t,
                day: 1
            },
            y = NepaliFunctions.BS2AD(f),
            v = y.year,
            g = y.month,
            D = y.day,
            N = new Date(v, g - 1, D),
            A = N.getDay(),
            M = 0,
            Y = 0,
            B = A + h,
            C = "",
            E = "",
            F = 0;
        "object" != typeof i.disableBefore && i.disableBefore && i.dateFormat && (i.disableBefore = NepaliFunctions.ConvertToDateObject(i.disableBefore, i.dateFormat)), "object" != typeof i.disableAfter && i.disableAfter && i.dateFormat && (i.disableAfter = NepaliFunctions.ConvertToDateObject(i.disableAfter, i.dateFormat)), !i.disableBefore && Number.isInteger(i.disableDaysBefore) && parseInt(i.disableDaysBefore) >= 0 && (i.disableBefore = NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(), -1 * parseInt(i.disableDaysBefore))), !i.disableAfter && Number.isInteger(i.disableDaysAfter) && parseInt(i.disableDaysAfter) >= 0 && (i.disableAfter = NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(), parseInt(i.disableDaysAfter)));
        for (var T = document.createElement("TBODY"), S = document.createElement("TR"), I = document.createElement("TD"), x = document.createElement("A"); Y < B;) {
            if (M = Y, M % 7 == 0 && (S = document.createElement("TR")), F = M - A + 1, E = e.toString() + "-" + NepaliFunctions.Get2DigitNo(t) + "-" + NepaliFunctions.Get2DigitNo(F), C = "", C = e === r && t === a && F === o ? "ndp-selected" : e === s && t === c && F === m ? "ndp-current" : "ndp-date", M < A) I = document.createElement("TD"), S.appendChild(I);
            else {
                if (I = document.createElement("TD"), I.setAttribute("class", C), i.disableAfter && NepaliFunctions.CompareBsDates(NepaliFunctions.ConvertToDateObject(E, "YYYY-MM-DD"), i.disableAfter) || i.disableBefore && NepaliFunctions.CompareBsDates(i.disableBefore, NepaliFunctions.ConvertToDateObject(E, "YYYY-MM-DD"))) x = document.createElement("A"), x.setAttribute("class", "ndp-disabled"), x.setAttribute("href", "javascript:void(0)"), x.setAttribute("title", E), x.innerHTML = u ? F : NepaliFunctions.ConvertToUnicode(F), I.appendChild(x);
                else {
                    var G = NepaliFunctions.ConvertToDateObject(E, "YYYY-MM-DD"),
                        w = NepaliFunctions.ConvertDateFormat(G, i.dateFormat);
                    x = document.createElement("A"), x.setAttribute("href", "javascript:void(0)"), x.setAttribute("title", E), x.setAttribute("data-value", w), x.innerHTML = u ? F : NepaliFunctions.ConvertToUnicode(F), x.addEventListener("click", function() {
                        p(this)
                    }), I.appendChild(x)
                }
                S.appendChild(I)
            }
            M % 7 == 6 && (T.appendChild(S), S = document.createElement("TR")), Y += 1
        }
        return S.children.length > 0 && T.appendChild(S), T
    }

    function d(e) {
        var t = l(e),
            n = m(t),
            r = h(e, t),
            a = document.getElementById("ndp-nepali-box"),
            o = a.offsetHeight,
            i = t.y + e.offsetHeight;
        r < o && r < n && (i = i - o - e.offsetHeight), a.style.top = i + "px", a.style.left = t.x + "px"
    }

    function l(e) {
        if ("body" != b().container) {
            var t = e.getBoundingClientRect();
            return {
                x: t.x,
                y: t.y
            }
        }
        var n = 0,
            r = 0;
        return n += s(e), r += c(e), {
            x: n,
            y: r
        }
    }

    function s(e) {
        for (var t = 0; e;) t += e.offsetLeft, e = e.offsetParent;
        return t += document.firstChild.offsetLeft || 0
    }

    function c(e) {
        for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
        return t += document.firstChild.offsetTop || 0
    }

    function m(e) {
        var t = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return e.y - t
    }

    function h(e, t) {
        var n = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return window.innerHeight - t.y - e.offsetHeight + n
    }

    function p(e) {
        var t = e.getAttribute("data-value"),
            n = b(),
            r = NepaliFunctions.ConvertToDateObject(t, n.dateFormat);
        n.ndpEnglishInput && (document.getElementById(n.ndpEnglishInput).value = NepaliFunctions.ConvertDateFormat(NepaliFunctions.BS2AD(r), n.dateFormat)),
            document.getElementById(E).value = n.unicodeDate ? NepaliFunctions.ConvertToUnicode(t) : t,
        n.onChange && n.onChange({
            bs: t,
            ad: NepaliFunctions.ConvertDateFormat(NepaliFunctions.BS2AD(r), n.dateFormat),
            object: r
        }), a("setSelectedDay")
    }

    function f(e, t, n) {
        var r = b(),
            a = "english" == r.language,
            o = 1,
            i = 12;
        r.disableBefore && r.disableBefore.year == t && (o = r.disableBefore.month), r.disableAfter && r.disableAfter.year == t && (i = r.disableAfter.month);
        var u = a ? NepaliFunctions.GetBsMonths() : NepaliFunctions.GetBsMonthsInUnicode(),
            d = document.createElement("SELECT");
        return d.setAttribute("id", "ndp-month-select"), u.forEach(function(t, n) {
            if (n >= o - 1 && n <= i - 1) {
                var r = document.createElement("OPTION");
                r.setAttribute("value", n + 1), r.innerHTML = t, n + 1 == e && r.setAttribute("selected", "selected"), d.appendChild(r)
            }
        }), d.addEventListener("change", function() {
            v(t, n)
        }), d
    }

    function y(e, t, n, r) {
        var a = b(),
            o = "english" == a.language,
            i = 1970,
            u = 2099;
        a.disableBefore && a.disableBefore.year > i && (i = a.disableBefore.year), a.disableAfter && a.disableAfter.year < u && (u = a.disableAfter.year);
        var d = document.createElement("SELECT");
        d.setAttribute("id", "ndp-year-select");
        for (var l = Math.round(n / 2) > 0 && parseInt(t) - Math.round(n / 2) >= i ? parseInt(t) - Math.round(n / 2) : i, s = Math.round(n / 2) > 0 && parseInt(t) + Math.round(n / 2) <= u ? parseInt(t) + Math.round(n / 2) : u; l <= s;) {
            var c = document.createElement("OPTION");
            c.setAttribute("value", l), c.innerHTML = o ? l : NepaliFunctions.ConvertToUnicode(l), t == l && c.setAttribute("selected", "selected"), d.appendChild(c), l += 1
        }
        return d.addEventListener("change", function() {
            g(e, r)
        }), d
    }

    function v(e, t) {
        e = b().ndpYear ? parseInt(document.getElementById("ndp-year-select").value) : e, i(e, parseInt(document.getElementById("ndp-month-select").value), t)
    }

    function g(e, t) {
        var n = b(),
            r = document.getElementById("ndp-year-select"),
            a = document.getElementById("ndp-month-select"),
            o = parseInt(r.value);
        e = n.ndpMonth ? parseInt(a.value) : e;
        var u = n.disableDaysBefore,
            d = n.disableDaysAfter;
        u && u.year == o && e <= u.month && (e = u.month), d && d.year == o && e >= d.month && (e = d.month), i(o, e, t)
    }

    function b(e) {
        var t = {};
        if (e || (e = E), e) {
            var n = C[e],
                r = n.dateFormat || "YYYY-MM-DD",
                a = n.disableBefore ? NepaliFunctions.ConvertToDateObject(n.disableBefore, r) : {
                    year: 1970,
                    month: 1,
                    day: 1
                },
                o = n.disableAfter ? NepaliFunctions.ConvertToDateObject(n.disableAfter, r) : {
                    year: 2099,
                    month: 12,
                    day: 30
                },
                i = n.disableDaysBefore || (0 == n.disableDaysBefore ? 0 : null),
                u = n.disableDaysAfter || (0 == n.disableDaysAfter ? 0 : null);
            Number.isInteger(i) && i >= 0 && (a = NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(), -1 * i)), Number.isInteger(u) && u >= 0 && (o = NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(), u)), n && (t = {
                ndpTriggerButton: n.ndpTriggerButton || null,
                ndpTriggerButtonClass: n.ndpTriggerButtonClass || null,
                ndpTriggerButtonText: n.ndpTriggerButtonText || null,
                ndpEnglishInput: n.ndpEnglishInput || null,
                ndpYearCount: n.ndpYearCount || null,
                ndpYear: n.ndpYear || null,
                ndpMonth: n.ndpMonth || null,
                disableDaysBefore: i,
                disableDaysAfter: u,
                disableBefore: a,
                disableAfter: o,
                dateFormat: r,
                onChange: n.onChange || null,
                unicodeDate: n.unicodeDate || null,
                readOnlyInput: n.readOnlyInput || !1,
                container: n.container || "body",
                language: n.language || "nepali"
            })
        }
        return t
    }

    function D() {
        var e = document.activeElement,
            t = e.getAttribute("id");
        a("ndpInputOnFocus"), o(t)
    }

    function N() {
        var e = window.event || arguments.callee.caller.arguments[0];
        27 == e.which && (a("ndpKeyDown-Esc"), e.stopPropagation())
    }

    function A(e) {
        if (!document.getElementById("ndp-nepali-box")) {
            var t = b(e);
            document.querySelector(t.container).insertAdjacentElement("beforeend", M(t));
            var a = document.getElementById("ndp-nepali-box");
            a.addEventListener("mouseenter", n), a.addEventListener("mouseleave", r)
        }
    }

    function M(e) {
        var t = "english" == e.language,
            n = document.createElement("DIV");
        n.setAttribute("id", "ndp-nepali-box"), n.setAttribute("tabindex", "-1"), n.setAttribute("class", "ndp-corner-all"), n.addEventListener("keydown", N);
        var r = document.createElement("DIV");
        r.setAttribute("id", "ndp-header"), r.setAttribute("class", "ndp-corner-all ndp-header");
        var a = document.createElement("SPAN");
        a.setAttribute("id", "currentMonth"), r.appendChild(a);
        var o = document.createElement("DIV");
        o.setAttribute("id", "currentMonth");
        var i = document.createElement("TABLE");
        o.setAttribute("id", "ndp-table");
        var u = document.createElement("TR");
        u.setAttribute("class", "ndp-days"), (t ? NepaliFunctions.GetAdDaysShort() : NepaliFunctions.GetBsDaysUnicodeShort()).forEach(function(e) {
            var t = document.createElement("TH");
            t.innerHTML = e, u.appendChild(t)
        });
        var d = document.createElement("THEAD");
        d.appendChild(u);
        var l = document.createElement("TBODY");
        return i.appendChild(d), i.appendChild(l), o.appendChild(i), n.appendChild(r), n.appendChild(o), n
    }
    var Y = !1,
        B = !1,
        C = [],
        E = null;

    function onDateInput(event, handler) {
        let date = event.target.value;
        const dateObj = NepaliFunctions.ConvertToDateObject(date, handler.dateFormat);
        if(date?.split('-').length == 3){
            handler.onChange({
                bs: date,
                ad: NepaliFunctions.ConvertDateFormat(NepaliFunctions.BS2AD(dateObj), handler.dateFormat),
                object: r
            });
            const calendarDis = document.getElementById("ndp-nepali-box");
            calendarDis && calendarDis.remove();
        }
    }

    Object.prototype.nepaliDatePicker = function(e) {
        function t(e) {
            e.classList.remove("ndp-nepali-calendar"), e.removeAttribute("ndp-calendar-data"), e.removeAttribute("readonly"), e.removeEventListener("focus", D), e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", r), e.removeEventListener("keydown", N);
            var t = e.getAttribute("id");
            delete C[t];
            var a = e.nextSibling;
            a && "BUTTON" == a.tagName && "ndp-click-trigger" == a.getAttribute("id") && a.parentNode.removeChild(a)
        }

        function i(e, t) {
            var n = e.getAttribute("id");
            if (C[n] = t, C[n].raw = u(t), e.value) {
                var r = NepaliFunctions.ParseDate(e.value);
                r && r.parsedFormat && (t.dateFormat = t.dateFormat ? t.dateFormat : r.parsedFormat)
            }
        }

        function u(e) {
            if (null == e || "object" != typeof e) return e;
            var t = e.constructor();
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function d(e, t) {
            for (var n = !1; e;) {
                e.getAttribute("id") == t && (n = !0, e = null), e = e ? e.offsetParent : null
            }
            return n
        }

        function l() {
            var e = document.getElementById(E),
                t = document.activeElement,
                n = e == t,
                r = d(t, "ndp-nepali-box"),
                o = "ndp-click-trigger" == t.getAttribute("id"),
                i = "ndp-month-select" == t.getAttribute("id") || "ndp-year-select" == t.getAttribute("id");
            ("BODY" == t.tagName || r || o) && (n = !0), Y && (!B && !i || B && !n) && a("ndpInputOnBlur")
        }

        function s(e, t) {
            var n = e.getAttribute("id");
            if (null == n) {
                var r = btoa((new Date).toISOString() + Math.random());
                e.setAttribute("id", r)
            }
            if (e.classList.add("ndp-nepali-calendar"), i(e, t), t.ndpTriggerButton || e.addEventListener("focus", D), e.addEventListener("blur", l), e.setAttribute("autocomplete", "off"), e.addEventListener("keydown", N), t.readOnlyInput && e.setAttribute("readonly", "readonly"), t.ndpTriggerButton) {
                var a = t.ndpTriggerButtonClass && "" !== t.ndpTriggerButtonClass ? t.ndpTriggerButtonClass : "",
                    o = t.ndpTriggerButtonText && "" !== t.ndpTriggerButtonText ? t.ndpTriggerButtonText : "Pick Date",
                    u = document.createElement("BUTTON");
                u.setAttribute("id", "ndp-click-trigger"), u.setAttribute("class", a), u.addEventListener("click", function() {
                    h(n)
                }), u.addEventListener("blur", c), u.innerHTML = o, e.insertAdjacentElement("afterend", u)
            }
        }

        function c() {
            l()
        }

        function m() {
            var e = document.getElementById("ndp-nepali-box");
            return e && parseInt(e.style.top) > 0
        }

        function h(e) {
            v || (v = !0, m() ? a("toggleCalendar") : o(e), v = !1)
        }
        var that = this;
        if ("remove" != e) {
            if (e = void 0 === e ? {} : e, that.length && that.length > 0)
                for (var f = 0; f < that.length; f++) s(that[f], e);
            else s(that, e);
            var y = document.querySelectorAll(".ndp-nepali-calendar");
            if (y.length > 0)
                for (var f = 0; f < y.length; f++) y[f].addEventListener("mouseenter", n), y[f].addEventListener("mouseleave", r);
            window.addEventListener("mouseup", function() {
                if (m()) {
                    "ndp-click-trigger" == document.activeElement.getAttribute("id") || l()
                }
            });
            const list = Array.from(document.getElementsByClassName("ndp-nepali-calendar"));
            if(!e.readOnlyInput){
                list.forEach(item => {
                    item.addEventListener('focusout', (event) => {
                        onDateInput(event, e);
                    })
                })
            }
            var v = !1
        } else if (that.length && that.length > 0)
            for (var f = 0; f < that.length; f++) t(that[f]);
        else t(that)
    }, Object.defineProperty(Object.prototype, "nepaliDatePicker", {
        enumerable: !1,
        value: nepaliDatePicker
    })
}();