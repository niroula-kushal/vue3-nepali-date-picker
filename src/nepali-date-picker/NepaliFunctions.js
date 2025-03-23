const NepaliFunctions = (function () {
  "use strict";

  function e() {
    function e() {
      return p;
    }

    function t() {
      return f;
    }

    function n(e) {
      var t = 0;
      return (
        e.forEach(function (e) {
          t += e;
        }),
        t
      );
    }

    function a(e, t) {
      var n = Date.UTC(e.year, e.month - 1, e.day),
        r = Date.UTC(t.year, t.month - 1, t.day);
      return Math.abs((r - n) / 864e5);
    }

    function o(e, t) {
      var r = 0,
        a = 0;
      for (a = e.year; a <= t.year; a += 1) r += n(c[a]);
      for (a = 0; a < e.month; a += 1) r -= c[e.year][a];
      for (r += c[e.year][11], a = t.month - 1; a < 12; a += 1)
        r -= c[t.year][a];
      return (r -= e.day + 1), (r += t.day - 1);
    }

    function i(e, t) {
      var n = new Date(r(e, "MM/DD/YYYY"));
      return (
        n.setDate(n.getDate() + t),
        {
          year: n.getFullYear(),
          month: n.getMonth() + 1,
          day: n.getDate(),
        }
      );
    }

    function u(e, t) {
      for (e.day += t; e.day > c[e.year][e.month - 1]; )
        (e.day -= c[e.year][e.month - 1]),
          (e.month += 1),
          e.month > 12 && ((e.month = 1), (e.year += 1));
      return {
        year: e.year,
        month: e.month,
        day: e.day,
      };
    }

    function d(e) {
      var t = o(m, e);
      return i(h, t);
    }

    function l(e) {
      var t = a(h, e);
      return u(m, t);
    }

    function s(e, t) {
      return c[e][t - 1];
    }
    var c = [],
      m = {
        year: 2e3,
        month: 9,
        day: 17,
      },
      h = {
        year: 1944,
        month: 1,
        day: 1,
      };
    (c[1970] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1971] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]),
      (c[1972] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[1973] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[1974] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1975] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[1976] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[1977] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31]),
      (c[1978] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1979] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[1980] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[1981] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[1982] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1983] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[1984] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[1985] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[1986] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1987] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[1988] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[1989] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1990] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1991] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[1992] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[1993] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1994] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1995] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[1996] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[1997] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1998] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[1999] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2e3] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]),
      (c[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]),
      (c[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]),
      (c[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30]),
      (c[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31]),
      (c[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31]),
      (c[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30]),
      (c[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]),
      (c[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]),
      (c[2081] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]),
      (c[2082] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2083] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30]),
      (c[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30]),
      (c[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30]),
      (c[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30]),
      (c[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2091] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30]),
      (c[2092] = [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2093] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2094] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2095] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30]),
      (c[2096] = [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30]),
      (c[2097] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]),
      (c[2098] = [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31]),
      (c[2099] = [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30]);
    var p = {
        year: 1970,
        month: 1,
        day: 1,
      },
      f = {
        year: 2099,
        month: 12,
        day: 30,
      };
    return {
      minDate: e,
      maxDate: t,
      countAdDays: a,
      countBsDays: o,
      addBsDays: u,
      addAdDays: i,
      bs2ad: d,
      ad2bs: l,
      getDaysInMonth: s,
    };
  }

  function t(e) {
    function t(e) {
      var t = {},
        n = [],
        r = [];
      e.forEach(function (e, t) {
        var n = parseInt(e),
          a = {
            index: t,
            value: n,
            year: !1,
            month: !1,
            day: !1,
          };
        n > 0 && n > 999
          ? (a.year = !0)
          : n > 0 && n > 12
            ? (a.day = !0)
            : n > 0 && n <= 12 && ((a.month = !0), (a.day = !0)),
          r.push(a);
      });
      var a = r.filter(function (e) {
        return 1 == e.year;
      })[0];
      if (a) {
        (t.year = a.value), (n[a.index] = "YYYY");
        var o = r.filter(function (e) {
            return 1 == e.day;
          }),
          i = r.filter(function (e) {
            return 1 == e.month;
          });
        1 == i.length
          ? ((t.month = i[0].value),
            (n[i[0].index] = "MM"),
            1 == o.length
              ? ((t.day = o[0].value), (n[o[0].index] = "DD"))
              : ((o = o.find(function (e) {
                  return !e.month;
                })),
                (t.day = o.value),
                (n[o.index] = "DD")))
          : 2 == i.length && 0 == o.length
            ? ((t.month = i[0].value),
              (t.day = i[1].value),
              (n[i[0].index] = "MM"),
              (n[i[1].index] = "DD"))
            : 2 == i.length &&
              2 == o.length &&
              ((t.month = o[0].value),
              (t.day = o[1].value),
              (n[o[0].index] = "MM"),
              (n[o[1].index] = "DD"));
      }
      if (
        (t && NaN == t.year) ||
        null == t.year ||
        NaN == t.month ||
        null == t.month ||
        NaN == t.day ||
        null == t.day
      )
        (t = null), (n = null);
      else {
        var u = L(t.year, t.month);
        t.day > u && ((t = null), (n = null));
      }
      return {
        parsedDate: t,
        parsedFormat: n,
      };
    }
    var n = e.indexOf("/") > -1,
      r = e.indexOf("-") > -1,
      a = null;
    if (n) {
      var o = e.split("/");
      3 == o.length &&
        ((a = t(o)), (a.parsedFormat = a.parsedFormat.join("/")));
    } else if (r) {
      var i = e.split("-");
      3 == i.length &&
        ((a = t(i)), (a.parsedFormat = a.parsedFormat.join("-")));
    }
    return a;
  }

  function n(e, t) {
    var n = [],
      r = {
        year: null,
        month: null,
        day: null,
      };
    switch (t) {
      case "MM/DD/YYYY":
        (n = e.split("/")),
          3 == n.length &&
            (r = {
              year: Number(n[2]),
              month: Number(n[0]),
              day: Number(n[1]),
            });
        break;
      case "MM-DD-YYYY":
        (n = e.split("-")),
          3 == n.length &&
            (r = {
              year: Number(n[2]),
              month: Number(n[0]),
              day: Number(n[1]),
            });
        break;
      case "YYYY-MM-DD":
        (n = e.split("-")),
          3 == n.length &&
            (r = {
              year: Number(n[0]),
              month: Number(n[1]),
              day: Number(n[2]),
            });
        break;
      case "YYYY/MM/DD":
        (n = e.split("/")),
          3 == n.length &&
            (r = {
              year: Number(n[0]),
              month: Number(n[1]),
              day: Number(n[2]),
            });
        break;
      case "DD-MM-YYYY":
        (n = e.split("-")),
          3 == n.length &&
            (r = {
              year: Number(n[2]),
              month: Number(n[1]),
              day: Number(n[0]),
            });
        break;
      case "DD/MM/YYYY":
        (n = e.split("/")),
          3 == n.length &&
            (r = {
              year: Number(n[2]),
              month: Number(n[1]),
              day: Number(n[0]),
            });
    }
    return (
      ((r && NaN == r.year) ||
        null == r.year ||
        NaN == r.month ||
        null == r.month ||
        NaN == r.day ||
        null == r.day) &&
        (r = null),
      r
    );
  }

  function r(e, t) {
    function n(e) {
      return (e = Number(e)), e < 10 ? "0" + e : e;
    }
    var r = "";
    switch ((t = t && J.indexOf(t) > -1 ? t : "YYYY-MM-DD")) {
      case "MM/DD/YYYY":
        r = n(e.month) + "/" + n(e.day) + "/" + e.year;
        break;
      case "MM-DD-YYYY":
        r = n(e.month) + "-" + n(e.day) + "-" + e.year;
        break;
      case "YYYY-MM-DD":
        r = e.year + "-" + n(e.month) + "-" + n(e.day);
        break;
      case "YYYY/MM/DD":
        r = e.year + "/" + n(e.month) + "/" + n(e.day);
        break;
      case "DD-MM-YYYY":
        r = n(e.day) + "-" + n(e.month) + "-" + e.year;
        break;
      case "DD/MM/YYYY":
        r = n(e.day) + "/" + n(e.month) + "/" + e.year;
    }
    return r;
  }

  function a(t) {
    return new e().ad2bs(t);
  }

  function o(t) {
    return new e().bs2ad(t);
  }

  function i(t) {
    var n = new e(),
      r = n.minDate(),
      a = n.maxDate();
    if (
      t.year < r.year ||
      t.year > a.year ||
      t.month < r.month ||
      t.month > a.month ||
      t.day < r.day ||
      t.day > a.day
    )
      return !1;
    var o = L(t.year, t.month);
    return t.month > 0 && t.month <= 12 && t.day > 0 && t.day <= o;
  }

  function u() {
    var e = new Date();
    e.setHours(e.getHours() + 5), e.setMinutes(e.getMinutes() + 45);
    var t = (e.toDateString(), e.getUTCDate()),
      n = e.getUTCMonth() + 1;
    return {
      year: e.getUTCFullYear(),
      month: n,
      day: t,
    };
  }

  function d() {
    var e = u();
    return Number(e.year);
  }

  function l() {
    var e = u();
    return Number(e.month);
  }

  function s() {
    var e = u();
    return Number(e.day);
  }

  function c() {
    return a(u());
  }

  function m() {
    var e = c();
    return Number(e.year);
  }

  function h() {
    var e = c();
    return Number(e.month);
  }

  function p() {
    var e = c();
    return Number(e.day);
  }

  function f() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  function y(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 11 ? null : f()[e];
  }

  function v() {
    return [
      "Baisakh",
      "Jestha",
      "Ashar",
      "Shrawan",
      "Bhadra",
      "Ashoj",
      "Kartik",
      "Mangsir",
      "Poush",
      "Magh",
      "Falgun",
      "Chaitra",
    ];
  }

  function g(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 11 ? null : v()[e];
  }

  function b() {
    return [
      "बैशाख",
      "जेठ",
      "अषाढ",
      "श्रावण",
      "भाद्र",
      "आश्विन",
      "कार्तिक",
      "मङ्सिर",
      "पौष",
      "माघ",
      "फाल्गुन",
      "चैत्र",
    ];
  }

  function D(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 11 ? null : b()[e];
  }

  function N() {
    return [
      "आइतवार",
      "सोमवार",
      "मङ्गलवार",
      "बुधवार",
      "बिहिवार",
      "शुक्रवार",
      "शनिवार",
    ];
  }

  function A(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 6 ? null : N()[Number(e)];
  }

  function M() {
    return ["आ", "सो", "मं", "बु", "बि", "शु", "श"];
  }

  function Y() {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  function B() {
    return ["S", "M", "T", "W", "T", "F", "S"];
  }

  function C(e) {
    return (e = Number(e)), isNaN(e) || e < 0 || e > 6 ? null : Y()[Number(e)];
  }

  function E(e, t) {
    var n = [],
      r = "";
    return (
      t
        ? ((n = b()), (r = k(e.day) + " " + n[e.month - 1] + " " + k(e.year)))
        : ((n = v()), (r = e.day + " " + n[e.month - 1] + " " + e.year)),
      r
    );
  }

  function F(e) {
    return e.day + " " + NepaliFunctions.GetAdMonth(e.month - 1) + " " + e.year;
  }

  function T(e) {
    var t = NepaliFunctions.BS2AD(e);
    return (t = new Date(t.year, t.month - 1, t.day)), C(t.getDay());
  }

  function S(e) {
    var t = NepaliFunctions.BS2AD(e);
    return (t = new Date(t.year, t.month - 1, t.day)), A(t.getDay());
  }

  function I(e) {
    return (e = new Date(e.year, e.month - 1, e.day)), C(e.getDay());
  }

  function x(t, n) {
    var r = new e(),
      a = r.bs2ad(t);
    return (
      (a = new Date(a.year, a.month - 1, a.day)),
      a.setDate(a.getDate() + n),
      (a = {
        year: a.getFullYear(),
        month: a.getMonth() + 1,
        day: a.getDate(),
      }),
      r.ad2bs(a)
    );
  }

  function G(t, n) {
    return new e().countAdDays(t, n);
  }

  function w(t, n) {
    if (!i(t) || !i(n)) return !1;
    var r = new e();
    return (t = r.bs2ad(t)), (n = r.bs2ad(n)), r.countAdDays(t, n);
  }

  function O(e, t) {
    return new Date(e, t, 0).getDate();
  }

  function L(t, n) {
    var r = new e(),
      a = r.minDate(),
      o = r.maxDate();
    return (t < a.year || t > o.year) && (n < a.month || n > a.month)
      ? 0
      : r.getDaysInMonth(t, n);
  }

  function k(e) {
    e = e.toString();
    var t = "",
      n = 0;
    for (n = 0; n < e.length; n += 1)
      t += (function (e) {
        switch (e) {
          case "0":
            return "०";
          case "1":
            return "१";
          case "2":
            return "२";
          case "3":
            return "३";
          case "4":
            return "४";
          case "5":
            return "५";
          case "6":
            return "६";
          case "7":
            return "७";
          case "8":
            return "८";
          case "9":
            return "९";
          default:
            return e;
        }
      })(e[n]);
    return t;
  }

  function j(e) {
    e = e.toString();
    for (var t = "", n = 0; n < e.length; )
      (t += (function (e) {
        switch (e) {
          case "०":
            return 0;
          case "१":
            return 1;
          case "२":
            return 2;
          case "३":
            return 3;
          case "४":
            return 4;
          case "५":
            return 5;
          case "६":
            return 6;
          case "७":
            return 7;
          case "८":
            return 8;
          case "९":
            return 9;
          default:
            return e;
        }
      })(e[n])),
        n++;
    return t;
  }

  function P(e) {
    return e < 10 ? "0" + Number(e) : e;
  }

  function U(e, t) {
    function n(e) {
      var t = {
        0: "",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
      };
      e = Number(e);
      var n = e.toString();
      return e < 20 ? t[e] : t[10 * n[0]] + " " + t[n[1]];
    }
    if (((e = e || 0), isNaN(e) || Math.floor(e).toString().length > 13))
      return null;
    var r = "",
      a = 0,
      o = e.toString();
    if (o.indexOf(".") > -1) {
      var i = o.split(".");
      a = Number(i[1]);
    }
    var u = Math.floor(e % 100),
      d = null;
    e.toString().length > 2 &&
      (d = e
        .toString()
        .substring(e.toString().length - 3, e.toString().length - 2));
    var l = Math.floor(e % 1e5);
    (l = l.toString()), (l = l.substring(0, l.length - 3));
    var s = Math.floor(e % 1e7);
    (s = s.toString()), (s = s.substring(0, s.length - 5));
    var c = Math.floor(e % 1e9);
    (c = c.toString()), (c = c.substring(0, c.length - 7));
    var m = Math.floor(e % 1e11);
    (m = m.toString()), (m = m.substring(0, m.length - 9));
    var h = Math.floor(e % 1e13);
    for (
      h = h.toString(),
        h = h.substring(0, h.length - 11),
        h > 0 && (r += n(h) + " Kharab"),
        m > 0 && (r += " " + n(m) + " Arab"),
        c > 0 && (r += " " + n(c) + " Crore"),
        s > 0 && (r += " " + n(s) + " Lakh"),
        l > 0 && (r += " " + n(l) + " Thousand"),
        d > 0 && (r += " " + n(d) + " Hundred"),
        u > 0 && (r += " " + n(u)),
        "" != r.trim() && t && (r += " Rupees"),
        a > 0 && t && (r += " and " + n(a) + " Paisa");
      r.indexOf("  ") > -1;

    )
      r = r.replace("  ", " ");
    return r.trim();
  }

  function H(e, t) {
    if (((e = e || 0), isNaN(e) || Math.floor(e).toString().length > 13))
      return null;
    var n = [
        "सुन्य",
        "एक",
        "दुई",
        "तीन",
        "चार",
        "पाँच",
        "छ",
        "सात",
        "आठ",
        "नौ",
        "दस",
        "एघार",
        "बाह्र",
        "तेह्र",
        "चौध",
        "पन्ध्र",
        "सोह्र",
        "सत्र",
        "अठाह्र",
        "उन्नाइस",
        "बीस",
        "एकाइस",
        "बाइस",
        "तेइस",
        "चौबीस",
        "पचीस",
        "छब्बीस",
        "सत्ताइस",
        "अठ्ठाइस",
        "उनन्तीस",
        "तीस",
        "एकतीस",
        "बतीस",
        "तेतीस",
        "चौतीस",
        "पैतीस",
        "छतीस",
        "सरतीस",
        "अरतीस",
        "उननचालीस",
        "चालीस",
        "एकचालीस",
        "बयालिस",
        "तीरचालीस",
        "चौवालिस",
        "पैंतालिस",
        "छयालिस",
        "सरचालीस",
        "अरचालीस",
        "उननचास",
        "पचास",
        "एकाउन्न",
        "बाउन्न",
        "त्रिपन्न",
        "चौवन्न",
        "पच्पन्न",
        "छपन्न",
        "सन्ताउन्न",
        "अन्ठाउँन्न",
        "उनान्न्साठी ",
        "साठी",
        "एकसाठी",
        "बासाठी",
        "तीरसाठी",
        "चौंसाठी",
        "पैसाठी",
        "छैसठी",
        "सत्सठ्ठी",
        "अर्सठ्ठी",
        "उनन्सत्तरी",
        "सतरी",
        "एकहत्तर",
        "बहत्तर",
        "त्रिहत्तर",
        "चौहत्तर",
        "पचहत्तर",
        "छहत्तर",
        "सत्हत्तर",
        "अठ्हत्तर",
        "उनास्सी",
        "अस्सी",
        "एकासी",
        "बयासी",
        "त्रीयासी",
        "चौरासी",
        "पचासी",
        "छयासी",
        "सतासी",
        "अठासी",
        "उनान्नब्बे",
        "नब्बे",
        "एकान्नब्बे",
        "बयान्नब्बे",
        "त्रियान्नब्बे",
        "चौरान्नब्बे",
        "पंचान्नब्बे",
        "छयान्नब्बे",
        "सन्तान्‍नब्बे",
        "अन्ठान्नब्बे",
        "उनान्सय",
      ],
      r = "",
      a = 0,
      o = "";
    if (((e = e.toString()), -1 != e.indexOf("."))) {
      var i = e.split(".");
      (e = i[0]), (a = i[1]);
      var u = a.substring(0, 2).toString();
      1 == u.length && (u = u.toString() + "0"),
        (o = n[parseInt(u)].toString() + " पैसा");
    }
    if (e.length > 13)
      return void alert("Number greater than kharab not supported");
    var d = Math.floor(e % 100),
      l = "";
    e.toString().length > 2 &&
      (l = e
        .toString()
        .substring(e.toString().length - 3, e.toString().length - 2));
    var s = Math.floor(e % 1e5);
    (s = s.toString()), (s = s.substring(0, s.length - 3));
    var c = Math.floor(e % 1e7);
    (c = c.toString()), (c = c.substring(0, c.length - 5));
    var m = Math.floor(e % 1e9);
    (m = m.toString()), (m = m.substring(0, m.length - 7));
    var h = Math.floor(e % 1e11);
    (h = h.toString()), (h = h.substring(0, h.length - 9));
    var p = Math.floor(e % 1e13);
    return (
      (p = p.toString()),
      (p = p.substring(0, p.length - 11)),
      p > 0 && (r += n[p] + " खरब"),
      h > 0 && (r += " " + n[h] + " अरब"),
      m > 0 && (r += " " + n[m] + " करोड"),
      c > 0 && (r += " " + n[c] + " लाख"),
      s > 0 && (r += " " + n[s] + " हजार"),
      l > 0 && (r += " " + n[l] + " सय"),
      d > 0 && (r += " " + n[d]),
      "" != r.trim() && t && (r += " रुपैंया"),
      a > 0 && t && (r += ("" != r.trim() ? " " : "") + o),
      r.trim()
    );
  }

  function R(e, t) {
    if (i(e) && i(t)) {
      (e = this.BS2AD(e)), (t = this.BS2AD(t));
      var n = new Date(e.year, e.month - 1, e.day),
        r = new Date(t.year, t.month - 1, t.day);
      return n.getTime() > r.getTime();
    }
    return (
      1e4 * e.year + 100 * e.month + e.day >
      1e4 * t.year + 100 * t.month + t.day
    );
  }
  var J = [
    "MM-DD-YYYY",
    "MM/DD/YYYY",
    "YYYY-MM-DD",
    "YYYY/MM/DD",
    "DD-MM-YYYY",
    "DD/MM/YYYY",
  ];
  return {
    ParseDate: t,
    ValidateBsDate: i,
    CompareBsDates: R,
    ConvertToDateObject: n,
    ConvertDateFormat: r,
    AD2BS: a,
    BS2AD: o,
    GetCurrentAdDate: u,
    GetCurrentAdYear: d,
    GetCurrentAdMonth: l,
    GetCurrentAdDay: s,
    GetCurrentBsDate: c,
    GetCurrentBsYear: m,
    GetCurrentBsMonth: h,
    GetCurrentBsDay: p,
    GetAdMonths: f,
    GetAdMonth: y,
    GetBsMonths: v,
    GetBsMonth: g,
    GetBsDaysUnicode: N,
    GetBsDaysUnicodeShort: M,
    GetBsDayUnicode: A,
    GetAdDays: Y,
    GetAdDaysShort: B,
    GetAdDay: C,
    GetBsMonthsInUnicode: b,
    GetBsMonthInUnicode: D,
    GetDaysInAdMonth: O,
    GetDaysInBsMonth: L,
    AdDatesDiff: G,
    BsDatesDiff: w,
    BsAddDays: x,
    GetBsFullDate: E,
    GetAdFullDate: F,
    GetAdFullDay: I,
    GetBsFullDay: T,
    GetBsFullDayInUnicode: S,
    ConvertToUnicode: k,
    ConvertToNumber: j,
    Get2DigitNo: P,
    NumberToWords: U,
    NumberToWordsUnicode: H,
  };
})();
const NepaliDateFunctions = {
  ...NepaliFunctions,
  ConvertBsToAdDate: (bsDate) => {
    const adDate = NepaliFunctions.BS2AD(bsDate);
    return Date.parse(`${adDate.year}-${adDate.month}-${adDate.day}`);
  },
};
export default NepaliDateFunctions;
