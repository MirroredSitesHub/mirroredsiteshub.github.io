(function() {
    var t = {
        scope: {}
    };
    t.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
        if (a.get || a.set) throw new TypeError("ES3 does not support getters and setters.");
        e != Array.prototype && e != Object.prototype && (e[t] = a.value)
    };
    t.getGlobal = function(e) {
        return "undefined" != typeof window && window === e ? e : "undefined" != typeof global ? global : e
    };
    t.global = t.getGlobal(this);
    t.polyfill = function(e, a, i, s) {
        if (a) {
            i = t.global;
            e = e.split(".");
            for (s = 0; s < e.length - 1; s++) {
                var n = e[s];
                n in i || (i[n] = {});
                i = i[n]
            }
            e = e[e.length - 1];
            s = i[e];
            a = a(s);
            a != s && null != a && t.defineProperty(i, e, {
                configurable: !0,
                writable: !0,
                value: a
            })
        }
    };
    t.polyfill("Math.trunc", function(e) {
        return e ? e : function(e) {
            e = Number(e);
            if (isNaN(e) || Infinity === e || -Infinity === e || 0 === e) return e;
            var t = Math.floor(Math.abs(e));
            return 0 > e ? -t : t
        }
    }, "es6-impl", "es3");
    t.polyfill("Array.prototype.fill", function(e) {
        return e ? e : function(e, t, a) {
            var i = this.length || 0;
            0 > t && (t = Math.max(0, i + t));
            if (null == a || a > i) a = i;
            a = Number(a);
            0 > a && (a = Math.max(0, i + a));
            for (t = Number(t || 0); t < a; t++) this[t] = e;
            return this
        }
    }, "es6-impl", "es3");
    for (var a = 195, i = !1, s = "master1.mope.io", n = 400, r = 500, l = [], o = "USA-East;USA-West;Brazil/ USA-South;Europe;Russia;Asia/Australia".split(";"), h = {}, c = 0; c < o.length; c++) h[o[c]] = [];

    function g(e, t, a) {
        e = {
            name: e,
            ip: t,
            serverConnURL: t,
            region: a,
            playersCount: -1,
            ping: 1e4,
            domOptionIndex: 0
        };
        i || isNaN(parseInt(e.ip.substring(0, 1), 10)) || (e.serverConnURL = "gameserv-" + (e.ip + "").replace(/\./g, "-") + ".mope.io");
        l.push(e);
        h[a].push(e);
        return e
    }
    if (i) {
        var f = "USA-East";
        g("LOCAL TEST", "127.0.0.1", f)
    } else console.log("------------MOPE.IO-------------"), f = "USA-East", g("USA 1 (New York)", "104.207.132.63", f), g("USA 2 (New York)", "107.191.40.35", f), g("USA 3 (New York)", "107.191.43.180", f), g("USA 4 (New York)", "45.63.17.44", f), g("USA 5 (New York)", "107.191.40.38", f), g("USA 6 (Miami)", "104.238.138.249", f), g("USA 7(Chicago)", "45.76.20.213", f), g("USA 8(Chicago)", "45.76.28.156", f), f = "USA-West", g("USA 9 (California)", "45.63.87.103", f), g("USA 10 (California)", "45.32.137.149", f), g("USA 11 (California)", "45.76.67.64", f), g("USA 12 (California)", "45.63.51.60", f), g("USA 12 (Seattle)", "45.32.228.141", f), g("USA 14 (Seattle)", "104.207.158.226", f), f = "Brazil/ USA-South", g("USA 15 (Texas)", "108.61.224.165", f), g("USA 16 (Texas)", "107.191.55.233", f), g("USA 17 (Texas)", "45.32.198.173", f), g("USA 18 (Texas)", "104.238.147.152", f), g("USA 19 (Texas)", "108.61.205.88", f), f = "Europe", g("Europe 1 (London)", "45.63.98.41", f), g("Europe 2 (London)", "104.238.170.8", f), g("Europe 3 (London)", "45.76.129.33", f), g("Europe 4 (London)", "45.76.134.74", f), g("Europe 5 (London)", "45.76.135.33", f), g("Europe 6 (London)", "45.76.129.125", f), g("Europe 7 (Germany)", "45.32.152.68", f), f = "Russia", g("Russia 1 (Moscow)", "158.255.6.206", f), g("Russia 3 (Germany)", "104.238.159.143", f), g("Russia 4 (Germany)", "45.32.157.75", f), g("Russia 5 (Germany)", "45.32.158.92", f), g("Russia 6 (Germany)", "104.207.131.166", f), g("Russia 7 (Germany)", "45.76.84.33", f), g("Russia 8 (Germany)", "45.76.83.50", f), f = "Asia/Australia", g("Asia 1 (Australia)", "45.63.28.66", f), g("Asia 2 (Australia)", "45.76.112.176", f), g("Asia 3(Singapore)", "45.32.101.8", f);
    var u = 2;

    function m(e) {
        e = e.split("+").join(" ");
        for (var t = {}, a, i = /[?&]?([^=]+)=([^&]*)/g; a = i.exec(e);) t[decodeURIComponent(a[1])] = decodeURIComponent(a[2]);
        return t
    }
    var p = m(document.location.search),
        b = 0 < p.mobileios,
        y = 0 < p.mobileAndroid,
        w = b || y,
        P = !0,
        I = 0 < p.videoson,
        v = 0 < p.nofullscr,
        k = 0 < p.videomode;
    k && setTimeout(function() {
        var e = document.getElementById("startMenuWrapper");
        e && (e.style.display = "none")
    }, 4e3);
    var A = !1,
        M = p.s,
        x = p.l,
        T = location.hostname.split("."),
        S = T.shift(),
        D = "miniclipref" == S;
    if (D) {
        var E = document.getElementById("appsDiv");
        E && (E.style.display = "none")
    }
    null != M && null != x && 5 < x.length && (A = !0);
    w || (function(e, t, a, i, s, n, r) {
        e.GoogleAnalyticsObject = s;
        e[s] = e[s] || function() {
            (e[s].q = e[s].q || []).push(arguments)
        };
        e[s].l = 1 * new Date;
        n = t.createElement(a);
        r = t.getElementsByTagName(a)[0];
        n.async = 1;
        n.src = i;
        r.parentNode.insertBefore(n, r)
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), D && console.log("Referral: Tracking Miniclip-referred player!"), ga("create", "UA-36494583-11", "auto"), D && ga("create", "UA-36494583-12", "auto", "miniclipRef"), ga("send", "pageview"), D && ga("miniclipRef.send", "pageview"));

    function _(e) {
        this.serverObj = e;
        e = "https:" === window.location.protocol ? "wss://" : "ws://";
        this.testWs = new WebSocket(e + this.serverObj.serverConnURL + ":" + ("wss://" == e ? 7021 : 7020));
        this.startT = +new Date;
        this.testWs.binaryType = "arraybuffer";
        var t = this;
        this.pingsDelayMsTot = this.pingsRec = 0;
        this.testWs.onopen = function() {
            t.sendPing()
        };
        this.sendPing = function() {
            var e = new Gi(1);
            e.writeUInt8(255);
            t.testWs.send(e.dataView.buffer);
            this.startT = +new Date
        };
        this.testWs.onmessage = function(e) {
            e = new zi(new DataView(e.data));
            255 == e.readUInt8() && (e = +new Date - t.startT, t.pingsRec += 1, t.pingsDelayMsTot += e, 3 <= t.pingsRec ? (t.serverObj.ping = t.pingsDelayMsTot / t.pingsRec, t.testWs.close(), H(t)) : t.sendPing())
        }
    }
    var B = i ? o[0] : o[pi(0, Math.max(0, o.length - 1 - 1))],
        U = 0,
        C = h[B][U],
        B = C.region,
        N = C,
        R = [],
        O = !1,
        W = !1,
        F;

    function L() {
        if (W) z();
        else if (!O) {
            O = !0;
            for (var e in h) h.hasOwnProperty(e) && 0 < h[e].length && "SANDBOX" != e && R.push(new _(h[e][0]));
            F = setTimeout(function() {
                for (var e = 0; e < R.length; e++) R[e].testWs.close();
                z()
            }, 3e3)
        }
    }

    function H(e) {
        e.serverObj.ping < N.ping && (N = e.serverObj);
        e = R.indexOf(e); - 1 != e && R.splice(e, 1);
        0 == R.length && (F && clearTimeout(F), z())
    }

    function z() {
        O && (W = !0);
        O = !1;
        console.log("@@@@  Fastest region is " + N.region + " with ping " + N.ping + "ms ");
        B = N.region;
        G()
    }

    function G() {
        var e = h[B].slice();
        e.sort(function(e, t) {
            return e.playersCount < t.playersCount ? 1 : e.playersCount > t.playersCount ? -1 : 0
        });
        for (var t = !1, a = !0, i = 0; i < e.length; i++)
            if (e[i].playersCount < r && 0 <= e[i].playersCount && (a = !1), e[i].playersCount < n && 0 <= e[i].playersCount) {
                C = e[i];
                U = h[B].indexOf(C);
                t = !0;
                break
            }
        if (!t)
            if (a && fn)
                for (console.log("All servers in region " + B + " are full/offline! Picking random server..."), a = !0, i = 0; i < l.length; i++) {
                    if (l[i].playersCount < r) {
                        C = l[i];
                        U = h[C.region].indexOf(C);
                        B = C.region;
                        break
                    }
                } else C = e[pi(0, e.length - 1)], U = e.indexOf(C);
        vn();
        In();
        Pn();
        console.log("Connecting to best server...");
        Mn() && cn.close();
        Vi()
    }
    var j = .175,
        X = "#3FBA54",
        Y = "#09992F",
        V = "#007ec0",
        J = "grey",
        q = "#09992F",
        K = "#4E66E4",
        Z = "#ff6000",
        Q = "#4655A6",
        $ = Q,
        ee = "#c8b745",
        te = "#F35F53",
        ae = "#CF6259",
        ie = "#FF911E",
        se = "#C67019",
        ne = "#EF3C31",
        re = "#4AE05E",
        le = "#8C9688";

    function oe(e) {
        switch (e) {
            case Na:
                return V;
            case Ra:
                return J;
            default:
            case Ca:
                return Y
        }
    }
    var he = 1,
        ce = 2,
        de = 3,
        ge = 4,
        fe = 5,
        ue = 6,
        me = 7,
        pe = 8,
        be = 9,
        ye = 10,
        we = 11,
        Pe = 12,
        Ie = 13,
        ve = 14,
        ke = 15,
        Ae = 16,
        Me = 17,
        xe = 18,
        Te = 19,
        Se = 20,
        De = 21,
        Ee = 22,
        _e = 23,
        Be = 24,
        Ue = 25,
        Ce = 26,
        Ne = 27,
        Re = 28,
        Oe = 29,
        We = 30,
        Fe = 31,
        Le = 32,
        He = 33,
        ze = 34,
        Ge = 35,
        je = 36,
        Xe = 37,
        Ye = 38,
        Ve = 39,
        Je = 40,
        qe = 41,
        Ke = 42,
        Ze = 43,
        Qe = 44,
        $e = 45,
        et = 46,
        tt = 1,
        at = 2,
        it = 3,
        st = 4,
        nt = 5,
        rt = 6,
        lt = 7,
        ot = 8,
        ht = 9,
        ct = 10,
        dt = 11,
        gt = 12,
        ft = 13,
        ut = 14,
        mt = 15,
        pt = 16,
        bt = 17,
        yt = 18,
        wt = 19,
        Pt = 20,
        It = 21,
        vt = 22,
        kt = 23,
        At = 24,
        Mt = 25,
        xt = 26,
        Tt = 27,
        St = 28,
        Dt = 29,
        Et = 30,
        _t = 31,
        Bt = 32,
        Ut = 33,
        Ct = 34,
        Nt = 35,
        Rt = 36,
        Ot = 37,
        Wt = 38,
        Ft = 39,
        Lt = 40,
        Ht = 42,
        zt = 43,
        Gt = 44,
        jt = 46,
        Xt = 47,
        Yt = 48,
        Vt = 49,
        Jt = 50,
        qt = 51,
        Kt = 52,
        Zt = 53,
        Qt = 54,
        $t = 100,
        ea = 101,
        ta = 0,
        aa = 1,
        ia = 2,
        sa = 3,
        na = 4,
        ra = 5,
        la = 6,
        oa = 7,
        ha = 8,
        ca = 9,
        da = 10,
        fa = 11,
        ua = 12,
        ma = 13,
        pa = 14,
        ba = 15,
        ya = 16,
        wa = 17,
        Pa = 18,
        Ia = 19,
        va = 20,
        ka = 21,
        Aa = 22,
        Ma = 23,
        xa = 24,
        Ta = 25,
        Sa = 26,
        Da = 27,
        Ea = 28,
        _a = 30,
        Ba = 0,
        Ua = 1,
        Ca = 0,
        Na = 1,
        Ra = 2,
        Oa = document.getElementById("gCanvas"),
        Wa = null,
        Fa = null,
        La = Oa.getContext("2d");
    La.shadowColor = "black";
    var Ha = !1,
        za = Math.min(window.devicePixelRatio, 2),
        Ga = 1 == ("ontouchstart" in window || navigator.maxTouchPoints);
    Ga && console.log("mobile touch device detected!");
    loadedAudio = {};

    function ja(e) {
        if (!loadedAudio.hasOwnProperty(e) && !$i) {
            var t = new Audio(e);
            console.log("loading audio: " + e);
            loadedAudio[e] = t;
            e == Va && t.addEventListener("ended", function() {
                this.currentTime = 0;
                try {
                    this.play()
                } catch (e) {}
            }, !1);
            t.volume = .7;
            t.muted = $i
        }
        return loadedAudio[e]
    }
    var Xa = null,
        Ya = "",
        Va = "audio/music_menu.mp3",
        Ja = "audio/music_game.mp3";

    function qa(e) {
        Xa && (Xa.pause(), Xa.currentTime = 0);
        Ya = e;
        if (!$i) {
            console.log("changed music to " + e);
            Xa = ja(e, !0);
            try {
                Xa.play()
            } catch (e) {}
        }
    }
    var Ka = function() {
            var e = document.getElementById("button_mute_img");
            if (e) {
                e.src = $i ? "img/sound_off.png" : "img/sound_on.png";
                for (var t in loadedAudio) loadedAudio.hasOwnProperty(t) && (loadedAudio[t].muted = $i);
                !$i && Ya && null == Xa && qa(Ya)
            }
        },
        Za = !1,
        Qa = function(e) {},
        $a = camzoom_n = 2.7,
        $a = 1,
        ei = camy = camx_n = camy_n = camx_o = camy_o = 0,
        ti = 1,
        ai = 0,
        ii = 0,
        si = 0,
        ni = 0,
        ri = 0,
        li = 0,
        oi = !1,
        hi = !1,
        ci, di, gi = 0,
        fi = 0;
    gameMode = 0;
    loadedImgs = {};

    function ui(e) {
        loadedImgs.hasOwnProperty(e) || (loadedImgs[e] = new Image, loadedImgs[e].src = e);
        return 0 != loadedImgs[e].width && loadedImgs[e].complete ? loadedImgs[e] : null
    }

    function mi(e, t) {
        return Math.random() * (t - e) + e
    }

    function pi(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function bi(e) {
        e = Math.trunc(e) % 360 + (e - Math.trunc(e));
        return 0 < e ? e : e + 360
    }

    function yi(e) {
        e = e.split(".");
        return 256 * (256 * (256 * +e[0] + +e[1]) + +e[2]) + +e[3]
    }

    function wi(e) {
        for (var t = e % 256, a = 3; 0 < a; a--) e = Math.floor(e / 256), t = e % 256 + "." + t;
        return t
    }

    function Pi(e, t) {
        var a = t.split("?")[0],
            i, s;
        i = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
        if ("" !== i) {
            s = i.split("&");
            for (var n = s.length - 1; 0 <= n; --n) i = s[n].split("=")[0], i === e && s.splice(n, 1);
            a = a + "?" + s.join("&")
        }
        return a
    }

    function Ii(e) {
        return 180 / Math.PI * e
    }

    function vi(e) {
        return Math.PI / 180 * e
    }

    function ki(e, t, a, i) {
        return Math.atan2(i - t, a - e)
    }

    function Ai(e, t) {
        return 0 != (e >> t) % 2
    }

    function Mi(e, t, a) {
        return a ? e | 1 << t : e & ~(1 << t)
    }

    function xi(e, t) {
        var a = bi(Ii(t - e));
        180 < a && (a -= 360);
        return vi(a)
    }

    function Ti(e, t, a) {
        return Math.min(a, Math.max(t, e))
    }

    function Si(e) {
        return unescape(encodeURIComponent(e))
    }

    function Di(e) {
        return decodeURIComponent(escape(e))
    }

    function Ei(e, t, a) {
        var i = 1.2 * La.measureText("M").width;
        e = e.split("\n");
        for (var s = 0; s < e.length; ++s) La.fillText(e[s], t, a), a += i
    }

    function _i(e) {
        var t = parseInt(e, 10),
            a = Math.floor(t / 3600);
        e = Math.floor((t - 3600 * a) / 60);
        t = t - 3600 * a - 60 * e;
        10 > t && (t = "0" + t);
        return e + ":" + t
    }

    function Bi(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    function Ui(e) {
        return 1e3 > e ? e : 1e6 > e ? Math.trunc(e / 1e3 * 10) / 10 + "k" : Math.trunc(e / 1e6 * 100) / 100 + "m"
    }

    function Ci(e, t, a, i, s, n) {
        this.x = e;
        this.y = t;
        this.w = a;
        this.h = i;
        this.aniT = s;
        this.buttonTXT = new Wi(12, "white");
        this.buttonTXT.renderScale = 1.5;
        this.buttonTXT.setText(Dn(s).aniName);
        this.isHighLighted = !1;
        this.biomeNum = n;
        e = new Fi(0, at, 0, 0, 30);
        e.x = e.ox = e.nx = 0;
        e.y = e.oy = e.ny = 0;
        e.type = s;
        e.alwaysPlainOutline = !0;
        this.drawnAniObj = e;
        this.buttonScaleF = 1;
        this.testPosHitsButton = function(e, t) {
            return e < this.x - this.w / 2 || e > this.x + this.w / 2 ? !1 : t < this.y - this.w / 2 || t > this.y + this.w / 2 ? !1 : !0
        };
        this.setPosAndSize = function(e, t, a, i, s, n) {
            this.w = a;
            this.h = i;
            this.x = e + a * (.5 - s);
            this.y = t + i * (.5 - n)
        };
        this.draw = function() {
            La.save();
            La.translate(this.x, this.y);
            La.scale(this.buttonScaleF, this.buttonScaleF);
            var e = La.globalAlpha;
            La.globalAlpha = .75 * e;
            switch (this.biomeNum) {
                case 1:
                    La.fillStyle = "#1C91B8";
                    break;
                case 0:
                    La.fillStyle = "#26A73A";
                    break;
                case 2:
                    La.fillStyle = "#B2B2B2"
            }
            La.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
            this.isHighLighted && (La.fillStyle = "white", La.globalAlpha = .2 * e, La.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h));
            La.globalAlpha = e;
            this.drawnAniObj.nRad = this.drawnAniObj.rad = .6 * a / 2 * ti;
            La.save();
            La.scale(2, 2);
            this.drawnAniObj.draw();
            La.restore();
            this.buttonTXT.setFontSize(23 * ti);
            this.buttonTXT.x = 0;
            this.buttonTXT.y = .375 * -this.h;
            this.buttonTXT.draw();
            La.restore()
        }
    }

    function Ni(e) {
        var t = ja("audio/click.mp3");
        if (t) try {
            t.play()
        } catch (e) {}
        newMsg = new Gi(2);
        newMsg.writeUInt8(24);
        newMsg.writeUInt8(Jn.indexOf(e));
        An(newMsg);
        qn && (Ks = !1, ir(!1));
        qn = Yn = !1
    }
    Ri.prototype = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        visible: !0,
        buttonTXT: null,
        pressed: !1,
        pressedTouchID: -1,
        touchEnabled: !0,
        testPosHitsButton: function(e, t) {
            return e < this.x - this.w / 2 || e > this.x + this.w / 2 ? !1 : t < this.y - this.w / 2 || t > this.y + this.w / 2 ? !1 : !0
        },
        setPosAndSize: function(e, t, a, i, s, n) {
            this.w = a;
            this.h = i;
            this.x = e + a * (.5 - s);
            this.y = t + i * (.5 - n)
        },
        onButtonTouchStart: function() {},
        onButtonTouchEnd: function() {}
    };

    function Ri(e) {
        this.buttonTXT = new Wi(10, "white");
        this.buttonTXT.renderScale = 1.5;
        this.buttonTXT.setText(e);
        this.draw = function() {
            this.visible && (La.save(), La.globalAlpha = .2, La.fillStyle = this.pressed ? "white" : "#000000", La.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h), La.globalAlpha = .2, this.buttonTXT.setFontSize(15 * za), this.buttonTXT.x = this.x, this.buttonTXT.y = this.y, this.buttonTXT.draw(), La.restore())
        }
    }
    var Oi = function() {
        this.buttonTXT = new Wi(10, "white");
        this.buttonTXT.renderScale = 1.5;
        this.isMiniRechargeBut = !1;
        this.abil_Type = 0;
        this.abil_possible = this.abil_usable = this.abil_recharging = this.abil_active = !1;
        this.abil_avilableA = this.abil_rechargeBarA = this.abil_rechargeTotalT = this.abil_rechargeEndT = 0;
        this.draw = function() {
            if (this.visible && (this.abil_rechargeBarA += .1 * ((this.abil_recharging ? 1 : 0) - this.abil_rechargeBarA), this.abil_avilableA += .1 * ((this.abil_usable || this.abil_active ? 1 : .2) - this.abil_avilableA), this.isMiniRechargeBut && (this.h = .6 * this.w), this.abil_possible)) {
                La.save();
                this.isMiniRechargeBut ? (this.h = .8 * this.w, La.translate(this.x, this.y + .36 * this.h), La.scale(.65, .65)) : La.translate(this.x, this.y);
                var e = .2 * this.abil_avilableA,
                    t = this.pressed || hi ? "#CECECE" : "#000000";
                this.abil_active && (t = re, e = .7);
                La.fillStyle = t;
                La.globalAlpha = 1 * e;
                La.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
                e = Sn(this.abil_Type);
                if (t = ui(e.abilImg)) {
                    var a = .4 * this.w;
                    La.globalAlpha = 1 * this.abil_avilableA;
                    La.drawImage(t, -a, .85 * -a, 2 * a, 2 * a)
                }
                this.buttonTXT.setText(e.abilName);
                this.buttonTXT.setFontSize(15 * za);
                this.buttonTXT.x = 0;
                this.buttonTXT.y = .35 * -this.w;
                this.buttonTXT.draw();
                e = Math.max(0, this.abil_rechargeEndT - xn);
                this.abil_rechargeBarA += .1 * ((this.abil_recharging ? 1 : 0) - this.abil_rechargeBarA);
                .01 < this.abil_rechargeBarA && (La.globalAlpha = .35 * this.abil_rechargeBarA, La.fillStyle = "#000000", t = .8 * this.w, a = .5 * this.h, La.fillRect(0 - t / 2, 0 - a / 2, t, a), La.globalAlpha = 1 * this.abil_rechargeBarA, La.fillStyle = "#F3C553", La.fillRect(0 - t / 2, 0 - a / 2, e / this.abil_rechargeTotalT * t, a));
                La.restore()
            }
        }
    };
    Oi.prototype = Object.create(Ri.prototype);
    Wi.prototype = {
        strokeW: 1,
        strokeColor: "#000000",
        multiLine: !1,
        _text: "",
        _color: "#000000",
        x: 0,
        y: 0,
        _fntSize: 16,
        _canvas: null,
        _ctx: null,
        _dirty: !1,
        renderScale: 1.5,
        _scale: 1,
        width: 0,
        height: 0,
        setColor: function(e) {
            this._color != e && (this._color = e, this._dirty = !0)
        },
        setFontSize: function(e) {
            this._fntSize != e && (this._fntSize = e, this._dirty = !0)
        },
        setText: function(e) {
            e != this._text && (this._text = e, this._dirty = !0)
        },
        getRenderedCanvas: function() {
            null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"));
            if (this._dirty) {
                this._dirty = !1;
                var e = this._canvas,
                    t = this._ctx,
                    a = this._text,
                    i = this._scale,
                    s = this._fntSize * this.renderScale,
                    n = s + "px Arial";
                t.font = n;
                var r = ~~(.2 * s);
                t.font = n;
                if (this.multiLine) {
                    for (var l = 1.2 * t.measureText("M").width, a = a.split("\n"), o = 0, h = 0; h < a.length; ++h) o = Math.max(o, t.measureText(a[h]).width);
                    this.width = (o + 6) * i;
                    this.height = (l * a.length + r) * i;
                    e.width = this.width;
                    e.height = this.height;
                    this.width /= this.renderScale;
                    this.height /= this.renderScale;
                    t.globalAlpha = 1;
                    t.font = n;
                    0 < this.strokeW && (t.shadowOffsetX = this.strokeW, t.shadowOffsetY = this.strokeW, t.shadowColor = this.strokeColor);
                    t.fillStyle = this._color;
                    t.textAlign = "center";
                    e = 3 + e.width / 2;
                    s -= r / 2;
                    for (h = 0; h < a.length; ++h) t.fillText(a[h], e, s), s += l
                } else this.width = (t.measureText(a).width + 6) * i, this.height = (s + r) * i, e.width = this.width, e.height = this.height, this.width /= this.renderScale, this.height /= this.renderScale, t.globalAlpha = 1, t.font = n, 0 < this.strokeW && (t.shadowOffsetX = this.strokeW, t.shadowOffsetY = this.strokeW, t.shadowColor = this.strokeColor), t.fillStyle = this._color, t.fillText(a, 3, s - r / 2)
            }
            return this._canvas
        },
        draw: function() {
            if (this._text) {
                var e = this.renderScale,
                    t = this.getRenderedCanvas(),
                    a = t.width / e,
                    e = t.height / e;
                La.drawImage(t, this.x - a / 2, this.y - e / 2, a, e)
            }
        }
    };

    function Wi(e, t) {
        e && (this._fntSize = e);
        t && (this._color = t)
    }
    Fi.prototype = {
        id: 0,
        oType: Pt,
        spawnTime: 0,
        rPer: 0,
        updateTime: 0,
        x: 0,
        y: 0,
        ox: 0,
        oy: 0,
        nx: 0,
        ny: 0,
        rad: 0,
        oRad: 0,
        nRad: 0,
        angle: 0,
        oAngle: 0,
        angleDelta: 0,
        z: 0,
        name: "",
        dead: !1,
        type: 0,
        curBiome: 0,
        isRectangle: !1,
        rectW: 0,
        rectH: 0,
        toString: function() {
            return "[GObj t=" + this.oType + " id=" + this.id + "]"
        }
    };

    function Fi(e, t, a, i, s) {
        this.id = e;
        this.oType = t;
        this.ox = this.x = this.nx = a;
        this.oy = this.y = this.ny = i;
        this.nRad = s;
        this.oRad = this.rad = 0;
        if (t == Xt || t == lt || t == bt || t == ct || t == ut || t == it || t == ot || t == mt || t == dt) this.oRad = this.rad = s;
        this.rPer = mi(0, 1);
        this.updateTime = this.spawnTime = xn;
        this.firstPosUpd = !0;
        this.flag_hurt = !1;
        this.hpBarTimeoutT = this.hpPer = this.hpPer_n = this.hpBarA = 0;
        this.oType == at && (this.flag_iceSliding = this.flag_eff_invincible = this.flag_usingAbility = this.flag_eff_frozen = this.flag_eff_stunned = this.flag_underWater = this.flag_tailBitten = this.flag_lowWat = !1, this.frozenEffA = this.onFireEffA = this.effA_healing = this.stunA = this.underwaterA = 0, this.flag_eff_healing = !1, this.nameA = 0, this.getNameSize = function() {
            return 10
        }, this.setName = function(e) {
            if (this.name = e) null == this.nameTXT ? (this.nameTXT = new Wi(this.getNameSize(), "#FFFFFF"), this.nameTXT.strokeW = 1.5, this.nameTXT.renderScale = 5) : this.nameTXT.setFontSize(this.getNameSize()), this.nameTXT.setText(this.name)
        });
        this.alwaysPlainOutline = !1;
        if (this.oType == at || this.oType == nt || this.oType == ft || this.oType == ht) this.chatLines = [];
        this.updateZ = function() {
            switch (this.oType) {
                case tt:
                    this.z = -220;
                    break;
                case pt:
                    this.z = -210;
                    break;
                case Xt:
                    this.z = -209;
                    break;
                case Ut:
                    this.z = -202;
                    break;
                case Ct:
                    this.z = -201;
                    break;
                case Lt:
                case ct:
                case Gt:
                    this.z = -159;
                    break;
                case gt:
                case lt:
                    this.z = -158;
                    break;
                case Ht:
                    this.z = -158;
                    break;
                case bt:
                    this.z = -156;
                    break;
                case st:
                    this.z = -155;
                    break;
                case ut:
                    this.z = this.type == pa || this.type == va || this.type == ka ? 10001 : this.type == Ea ? 1002 : -152;
                    break;
                case ft:
                    this.z = -150;
                    break;
                case dt:
                    this.z = -102;
                    break;
                case ht:
                    this.z = -101;
                    break;
                case nt:
                    this.z = -100;
                    break;
                case jt:
                    this.z = -99;
                    break;
                case it:
                    this.z = 999;
                    break;
                case mt:
                    this.z = 1e3;
                    break;
                case ot:
                    this.z = 1001;
                    break;
                case Tt:
                case St:
                    this.z = 1003;
                    break;
                case Et:
                case Dt:
                    this.z = 1006;
                    break;
                case yt:
                    this.z = 1006;
                    break;
                case rt:
                    this.z = 1e4;
                    break;
                case at:
                    this.z = this.flag_underWater || this.flag_usingAbility && this.type == ue ? -140 : this.type == et ? 1008 : this.type == ve ? 1007 : this.type == ye || this.type == Pe || this.type == Re || this.type == je || this.type == Me || this.type == De || this.type == Xe || this.type == Ve || this.type == Le ? 1001 : this.rad;
                    break;
                default:
                    this.z = this.rad
            }
        };
        this.draw = function(e) {
            var t = this.moveUpdate();
            La.save();
            La.translate(this.x, this.y);
            if (!Ki) var a = !1;
            switch (this.oType) {
                case Pt:
                case Dt:
                case _t:
                case Bt:
                case Et:
                case It:
                case yt:
                case vt:
                case At:
                case kt:
                case nt:
                case ft:
                case ht:
                case xt:
                case Nt:
                case Rt:
                case Ot:
                case Wt:
                case Ft:
                case Yt:
                case Jt:
                case qt:
                case Kt:
                case Zt:
                case Qt:
                    a = !0
            }
            if (a) {
                var i;
                i = (xn - this.spawnTime) / 1e3;
                var s = 1.5,
                    a = .1;
                if (this.oType == nt || this.oType == ht || this.oType == ft) s = 2.5, a = .04;
                i = a * Math.sin(2 * Math.PI / s * i);
                La.scale(1 + i, 1 + i / 2)
            }
            s = this.getOutlineColor();
            a = 2;
            La.globalAlpha = this.dead ? La.globalAlpha * (1 - t) : La.globalAlpha * Math.min(1, (xn - this.spawnTime) / (1e3 * j));
            switch (this.oType) {
                case it:
                    switch (this.curBiome) {
                        case Na:
                            e ? Hi(0, 0, this.rad, this.getOutlineColor()) : Hi(0, 0, this.rad - 1.5, ee);
                            break;
                        case Ra:
                            e ? Hi(0, 0, this.rad, this.getOutlineColor()) : Hi(0, 0, this.rad - 1.5, "#1f893a");
                            break;
                        default:
                            this.drawOutlinedCircle("", Y)
                    }
                    break;
                case Tt:
                    La.save();
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 2 * i);
                    La.fillStyle = "#45D157";
                    t = .8 * this.rad;
                    this.drawOutlinedCircle("", ae);
                    La.globalAlpha *= .98;
                    e = .5 * -t + 10 * this.rPer;
                    s = Math.max(0, .65 * t + i) + 2;
                    Hi(.5 * -t, e, s, ae);
                    e = .5 * -t - 10 * this.rPer;
                    s = Math.max(0, .73 * t - i);
                    Hi(.5 * t, e, s, ae);
                    s = Math.max(0, .78 * t + i);
                    Hi(.6 * t, .4 * t, s, ae);
                    e = .5 * t + 10 * this.rPer;
                    s = Math.max(0, .6 * t + this.rPer - i);
                    Hi(.5 * -t, e, s, ae);
                    La.restore();
                    break;
                case mt:
                    this.drawOutlinedCircle("", "#1AAE31");
                    La.save();
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 2 * i);
                    La.fillStyle = X;
                    e = .75 * this.rad;
                    La.globalAlpha *= .8;
                    La.beginPath();
                    La.arc(.5 * -e, .5 * -e + 10 * this.rPer, Math.max(0, .65 * e + i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.5 * e, .5 * -e - 10 * this.rPer, Math.max(0, .73 * e - i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.6 * e, .4 * e, Math.max(0, .78 * e + i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.5 * -e, .5 * e, Math.max(0, .6 * e + this.rPer - i), 0, 2 * Math.PI);
                    La.fill();
                    La.restore();
                    break;
                case St:
                    La.save();
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 2 * i);
                    var t = .8 * this.rad,
                        n = se;
                    this.drawOutlinedCircle("", n);
                    La.globalAlpha *= .98;
                    e = .5 * -t + 10 * this.rPer;
                    s = Math.max(0, .65 * t + i) + 2;
                    Hi(.5 * -t, e, s, n);
                    e = .5 * -t - 10 * this.rPer;
                    s = Math.max(0, .73 * t - i);
                    Hi(.5 * t, e, s, n);
                    s = Math.max(0, .78 * t + i);
                    Hi(.6 * t, .4 * t, s, n);
                    e = .5 * t + 10 * this.rPer;
                    s = Math.max(0, .6 * t + this.rPer - i);
                    Hi(.5 * -t, e, s, n);
                    La.restore();
                    break;
                case st:
                    this.drawOutlinedCircle("", Q);
                    break;
                case Pt:
                    e = te;
                    this.curBiome == Ra && (e = "#ac443c");
                    this.drawOutlinedCircle("", e);
                    break;
                case Dt:
                    if (i = ui("img/banana" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case _t:
                    if (i = ui("img/rasp" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case Bt:
                    if (i = ui("img/pear" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case Nt:
                    if (i = ui("img/seaweed" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case Rt:
                    if (i = ui("img/starfish" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case Ot:
                    if (i = ui("img/kelp" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case Wt:
                    if (i = ui("img/clam" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case Ft:
                    if (i = ui("img/conch" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = 1 * this.rad, La.save(), La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case Et:
                    if (i = ui("img/coconut" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e);
                    break;
                case xt:
                    this.drawOutlinedCircle("", ie);
                    La.rotate(this.rPer * Math.PI * 2);
                    Hi(.25 * this.rad, .4 * this.rad, (.3 + .15 * this.rPer) * this.rad, "#905113");
                    break;
                case jt:
                    switch (this.curBiome) {
                        case Na:
                            e = "_ocean";
                            break;
                        case Ra:
                            e = "_arctic";
                            break;
                        default:
                            e = ""
                    }
                    if (i = ui("img/healingStone" + e + ".png")) e = this.rad, La.save(), La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case Ht:
                    Hi(0, 0, Math.max(0, 1 * this.rad), "#815427");
                    Hi(0, 0, Math.max(0, .6 * this.rad), "#6e4b29");
                    Hi(0, 0, Math.max(0, .5 * this.rad), "#543d28");
                    Hi(0, 0, Math.max(0, .45 * this.rad), "#3f3124");
                    Hi(0, 0, Math.max(0, .33 * this.rad), "#241e19");
                    Hi(0, 0, Math.max(0, .25 * this.rad), "#120f0d");
                    Hi(0, 0, Math.max(0, .2 * this.rad), Z);
                    break;
                case Gt:
                    La.save();
                    i = (xn - this.spawnTime) / 1e3;
                    i = 2.5 * Math.sin(2 * Math.PI / 4 * i);
                    if (e) a = 4, La.fillStyle = "#815427", La.beginPath(), La.arc(0, 0, this.rad, 0, 2 * Math.PI), La.fill();
                    else {
                        La.fillStyle = Z;
                        La.beginPath();
                        La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI);
                        La.fill();
                        Ki || (La.beginPath(), La.arc(.45 * this.rad, .45 * -this.rad + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.5 * this.rad, .5 * this.rad + 15 * this.rPer, Math.max(0, .4 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.55 * -this.rad * .707, .55 * +this.rad * .707 + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.75 * -this.rad, .35 * -this.rad + 15 * this.rPer, Math.max(0, .3 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill());
                        La.save();
                        La.globalAlpha = 1 - this.underwaterA;
                        i = (xn - this.spawnTime) / 1e3;
                        e = 8 * Math.sin(2 * Math.PI / 1.5 * i);
                        this.flag_underWater && (La.globalAlpha *= .5, this.type == we && (La.globalAlpha = .3));
                        La.fillStyle = "yellow";
                        i = .15 * this.rad;
                        La.beginPath();
                        for (c = 1; 1 >= c; c++) La.save(), La.globalAlpha = .2, La.rotate(this.rPer * Math.PI * 2 * c), La.beginPath(), La.arc(-.35 * this.rad, -.33 * this.rad, Math.max(0, i + e), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.35 * this.rad, -.32 * this.rad, Math.max(0, i - e), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.35 * this.rad, .36 * this.rad, Math.max(0, i + e), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(-.35 * this.rad, .35 * this.rad, Math.max(0, i - e), 0, 2 * Math.PI), La.fill(), La.restore();
                        La.restore()
                    }
                    La.restore();
                    break;
                case Yt:
                    if (i = ui("img/arcticNut" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) La.save(), e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case Vt:
                    if (i = ui("img/carrot" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.save(), La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case Jt:
                    if (i = ui("img/watermelon" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.save(), La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case qt:
                    if (i = ui("img/watermelonSlice" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.save(), La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case Kt:
                case Zt:
                case Qt:
                    if (i = ui("img/meat" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) e = this.rad, La.save(), La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e), La.restore();
                    break;
                case vt:
                case At:
                    a = 2;
                    e = this.oType == At ? 15 : 9;
                    La.fillStyle = this.getOutlineColor();
                    La.beginPath();
                    La.rect(-e / 2 - a, -a, e + 2 * a, .8 * this.rad + 2 * a);
                    La.fill();
                    La.fillStyle = "#FFCA49";
                    La.beginPath();
                    La.rect(-e / 2, 0 + a / 2, e, .8 * this.rad - a / 2);
                    La.fill();
                    Ki || (La.beginPath(), La.arc(0, 0, Math.max(0, this.rad), Math.PI, 2 * Math.PI), La.fillStyle = this.getOutlineColor(), La.fill());
                    La.beginPath();
                    La.arc(0, 0, Math.max(0, this.rad - a), Math.PI, 2 * Math.PI);
                    La.fillStyle = this.oType == At ? "#B8413B" : "#CFAD59";
                    La.fill();
                    break;
                case Mt:
                    a = 2;
                    La.save();
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 2 * i);
                    La.fillStyle = "#45D157";
                    La.globalAlpha *= .93;
                    La.beginPath();
                    La.arc(.5 * -this.rad, .5 * -this.rad + 10 * this.rPer, Math.max(0, .55 * this.rad + i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.5 * this.rad, .5 * -this.rad - 10 * this.rPer, Math.max(0, .43 * this.rad - i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.6 * this.rad, .4 * this.rad, Math.max(0, .48 * this.rad + i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.5 * -this.rad, .5 * this.rad, Math.max(0, .4 * this.rad + this.rPer - i), 0, 2 * Math.PI);
                    La.fill();
                    La.restore();
                    e = 20;
                    La.fillStyle = s;
                    La.beginPath();
                    La.rect(-e / 2 - a, -a, e + 2 * a, .8 * this.rad + 2 * a);
                    La.fill();
                    La.fillStyle = "#FFCA49";
                    La.beginPath();
                    La.rect(-e / 2, 0 + a / 2, e, .8 * this.rad - a / 2);
                    La.fill();
                    La.beginPath();
                    La.arc(0, 0, Math.max(0, .8 * this.rad), Math.PI, 2 * Math.PI);
                    La.fillStyle = s;
                    La.fill();
                    La.beginPath();
                    La.arc(0, 0, Math.max(0, .8 * this.rad - a), Math.PI, 2 * Math.PI);
                    La.fillStyle = "#B8413B";
                    La.fill();
                    break;
                case kt:
                    (i = ui("img/lillypad" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) ? (e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e)) : (La.fillStyle = s, e = 6.28 * this.rPer, La.beginPath(), La.arc(0, 0, this.rad + 2, 0 + e, e + 2 * Math.PI - 1.57), La.fill(), La.fillStyle = "#3DAA4C", La.beginPath(), La.arc(0, 0, this.rad, 0 + e, e + 2 * Math.PI - 1.57), La.fill());
                    break;
                case nt:
                    this.drawOutlinedCircle("", "#9F8641");
                    Hi(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
                    Hi(0 + this.rPer, 1, Math.max(0, this.rad - 12), "#5C4E28");
                    break;
                case ut:
                    switch (this.type) {
                        case fa:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .4 * t;
                            Hi(0, 0, this.rad, "#7EBCC0");
                            La.globalAlpha = 1 * t;
                            La.strokeStyle = "white";
                            La.beginPath();
                            e = 10;
                            La.translate(-5, -.7 * this.rad);
                            La.moveTo(0, -e);
                            La.lineTo(0, e);
                            La.moveTo(-e, -e);
                            La.lineTo(e, e);
                            La.moveTo(e, -e);
                            La.lineTo(-e, e);
                            La.moveTo(-e, 0);
                            La.lineTo(e, 0);
                            La.lineWidth = 3;
                            La.stroke();
                            La.restore();
                            break;
                        case ba:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .15 * t;
                            Hi(0, 0, this.rad, "#755A2A");
                            La.restore();
                            break;
                        case pa:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = 1 * t;
                            if (i = ui("img/ability_claw.png")) t = Math.min(1, (xn - this.spawnTime) / 200), e = this.rad - 2.5, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, 0, 0, i.width * t, i.height, -e, -e, 2 * e * t, 2 * e);
                            La.restore();
                            break;
                        case va:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .1 * t;
                            Hi(0, 0, this.rad, "#755A2A");
                            La.globalAlpha = 1 * t;
                            if (i = ui("img/ability_backkick.png")) {
                                t = Math.min(1, (xn - this.spawnTime) / 200);
                                e = .6 * this.rad;
                                La.rotate(this.angle);
                                var s = this.rad,
                                    n = 2 * e,
                                    r = 2 * e * t;
                                La.drawImage(i, 0 + -.5 * n, s + -.95 * r, n, r)
                            }
                            La.restore();
                            break;
                        case ka:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .25 * t;
                            Hi(0, 0, this.rad, "#44d31f");
                            La.globalAlpha = 1 * t;
                            if (i = ui("img/ability_crocBite.png")) t = Math.min(1, (xn - this.spawnTime) / 200), e = .6 * this.rad, La.rotate(this.angle), s = this.rad, n = 2.5 * e, r = 2.5 * e * t, La.drawImage(i, 0 + -.5 * n, s + -.95 * r, n, r), La.rotate(Math.PI), s = .5 * this.rad, n = 2.5 * e, r = 2.5 * e * t, La.drawImage(i, 0 + -.5 * n, s + -.95 * r, n, r);
                            La.restore();
                            break;
                        case ua:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .15 * t;
                            Hi(0, 0, this.rad, "#6D7471");
                            La.restore();
                            break;
                        case Ea:
                            La.save();
                            La.rotate(this.angle + vi(180));
                            t = La.globalAlpha;
                            La.globalAlpha = .8 * t;
                            if (i = ui("img/wave.png")) e = this.rad, La.drawImage(i, -e, -e, 2 * e, 2 * e);
                            La.restore();
                            break;
                        case Pa:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .2 * t;
                            Hi(0, 0, this.rad, "#746B3E");
                            La.restore();
                            break;
                        case sa:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .5 * t;
                            Hi(0, 0, this.rad, "#62C5FF");
                            La.globalAlpha = 1 * t;
                            La.strokeStyle = "#62C5FF";
                            La.beginPath();
                            e = -.7 * this.rad;
                            La.moveTo(e, -5);
                            La.lineTo(e - 4, 5);
                            La.lineTo(e + 4, 2);
                            La.lineTo(e + 2, 15);
                            La.lineWidth = 3;
                            La.stroke();
                            La.restore();
                            break;
                        case ra:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .5 * t;
                            e = Math.max(0, this.rad - 30);
                            i = (xn - this.spawnTime) / 1e3;
                            s = 2.2;
                            n = 6.5 * Math.cos(2 * Math.PI / s * i);
                            i = 6.5 * Math.sin(2 * Math.PI / s * i);
                            La.globalAlpha = .4 * t;
                            Hi(0, 0, e, "#2CAAC4");
                            La.globalAlpha = .7 * t;
                            Ki || Hi(0 + n / 2 - this.rPer, 0 + i / 2 - this.rPer, Math.max(0, e - 6), "#2D93B0");
                            Hi(0 + n / 4.5 + this.rPer, 1 + i / 1.5, Math.max(0, e - 14), "#29A0BA");
                            Hi(0 + n / 1.5 - 2 * this.rPer, i, Math.max(0, e - 38.5 + i / 5), "#2B8CAA");
                            Hi(0 + n / 1.5 - 2 * this.rPer, i, Math.max(0, e - 54.5 + i / 11), "#28829E");
                            La.restore();
                            break;
                        case na:
                            La.save();
                            t = La.globalAlpha;
                            Ki || La.rotate(2 * this.rPer * Math.PI);
                            i = (xn - this.spawnTime) / 1e3;
                            i = 1.5 * Math.sin(2 * Math.PI / 6 * i);
                            La.globalAlpha = .7 * t;
                            a = 4;
                            La.fillStyle = "black";
                            La.beginPath();
                            La.arc(0, 0, this.rad, 0, 2 * Math.PI);
                            La.fill();
                            Ki || (La.fillStyle = "black", La.globalAlpha = .5 * t, La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.45 * this.rad, .45 * -this.rad + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.5 * this.rad, .5 * this.rad + 15 * this.rPer, Math.max(0, .4 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.55 * -this.rad * .707, .55 * +this.rad * .707 + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.75 * -this.rad, .35 * -this.rad + 15 * this.rPer, Math.max(0, .3 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill(), La.beginPath());
                            La.restore();
                            break;
                        case Aa:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .25 * t;
                            Hi(0, 0, this.rad, "#9F8641");
                            La.restore();
                            break;
                        case Ma:
                            La.save();
                            t = La.globalAlpha;
                            La.globalAlpha = .25 * t;
                            Hi(0, 0, this.rad, "#785228");
                            La.restore();
                            break;
                        default:
                            La.save(), t = La.globalAlpha, La.globalAlpha = .15 * t, Hi(0, 0, this.rad, "black"), La.restore()
                    }
                    break;
                case ft:
                    i = (xn - this.spawnTime) / 1e3;
                    s = 1.2;
                    n = 2.5 * Math.cos(2 * Math.PI / s * i);
                    i = 2.5 * Math.sin(2 * Math.PI / s * i);
                    this.drawOutlinedCircle("", "#2CAAC4");
                    Ki || Hi(0 + n / 2 - this.rPer, 0 + i / 2 - this.rPer, Math.max(0, this.rad - 6), "#2D93B0");
                    Hi(0 + n / 4.5 + this.rPer, 1 + i / 1.5, Math.max(0, this.rad - 14), "#29A0BA");
                    Hi(0 + n / 1.5 - 2 * this.rPer, i, Math.max(0, this.rad - 18.5 + i / 5), "#2B8CAA");
                    Hi(0 + n / 1.5 - 2 * this.rPer, i, Math.max(0, this.rad - 24.5 + i / 11), "#28829E");
                    break;
                case ht:
                    this.drawOutlinedCircle("", "#9F8641");
                    Ki || Hi(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
                    Hi(0 + this.rPer, 1, Math.max(0, this.rad - 14), "#5C4E28");
                    Hi(0 - 2 * this.rPer - 3, 1, Math.max(0, this.rad - 18.5), "#40371D");
                    break;
                case rt:
                    La.save();
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 2 * i);
                    switch (this.curBiome) {
                        case Na:
                            e = "#786810";
                            break;
                        case Ra:
                            e = "#CED0D0";
                            break;
                        default:
                        case Ca:
                            e = "#45D157"
                    }
                    La.fillStyle = e;
                    La.globalAlpha *= .93;
                    La.beginPath();
                    La.arc(.5 * -this.rad, .5 * -this.rad + 10 * this.rPer, Math.max(0, .65 * this.rad + i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.5 * this.rad, .5 * -this.rad - 10 * this.rPer, Math.max(0, .73 * this.rad - i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.6 * this.rad, .4 * this.rad, Math.max(0, .78 * this.rad + i), 0, 2 * Math.PI);
                    La.fill();
                    La.beginPath();
                    La.arc(.5 * -this.rad, .5 * this.rad, Math.max(0, .6 * this.rad + this.rPer - i), 0, 2 * Math.PI);
                    La.fill();
                    La.restore();
                    break;
                case Xt:
                    La.save();
                    Ki || La.rotate(2 * this.rPer * Math.PI);
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 6 * i);
                    a = 4;
                    La.fillStyle = "#604729";
                    La.beginPath();
                    La.arc(0, 0, this.rad, 0, 2 * Math.PI);
                    La.fill();
                    Ki || (La.fillStyle = "#8A681B", La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.45 * this.rad, .45 * -this.rad + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.5 * this.rad, .5 * this.rad + 15 * this.rPer, Math.max(0, .4 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.55 * -this.rad * .707, .55 * +this.rad * .707 + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.75 * -this.rad, .35 * -this.rad + 15 * this.rPer, Math.max(0, .3 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill(), La.beginPath());
                    La.restore();
                    break;
                case lt:
                    La.save();
                    Ki || La.rotate(2 * this.rPer * Math.PI);
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 6 * i);
                    a = 4;
                    La.fillStyle = "#8B7833";
                    La.beginPath();
                    La.arc(0, 0, this.rad, 0, 2 * Math.PI);
                    La.fill();
                    Ki || (La.fillStyle = "#98803A", La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.45 * this.rad, .45 * -this.rad + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.5 * this.rad, .5 * this.rad + 15 * this.rPer, Math.max(0, .4 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.55 * -this.rad * .707, .55 * +this.rad * .707 + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.75 * -this.rad, .35 * -this.rad + 15 * this.rPer, Math.max(0, .3 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill(), La.beginPath());
                    La.restore();
                    break;
                case bt:
                    La.save();
                    Ki || La.rotate(2 * this.rPer * Math.PI);
                    i = (xn - this.spawnTime) / 1e3;
                    i = 1.5 * Math.sin(2 * Math.PI / 6 * i);
                    a = 4;
                    La.fillStyle = "#8CC3C7";
                    La.beginPath();
                    La.arc(0, 0, this.rad, 0, 2 * Math.PI);
                    La.fill();
                    Ki || (La.fillStyle = "#9DDADE", La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.45 * this.rad, .45 * -this.rad + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.5 * this.rad, .5 * this.rad + 15 * this.rPer, Math.max(0, .4 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.55 * -this.rad * .707, .55 * +this.rad * .707 + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.75 * -this.rad, .35 * -this.rad + 15 * this.rPer, Math.max(0, .3 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill(), La.beginPath());
                    La.restore();
                    break;
                case ct:
                    La.save();
                    Ki || La.rotate(2 * this.rPer * Math.PI);
                    i = (xn - this.spawnTime) / 1e3;
                    i = 5.5 * Math.sin(2 * Math.PI / 4 * i);
                    a = 4;
                    La.fillStyle = ee;
                    La.beginPath();
                    La.arc(0, 0, this.rad, 0, 2 * Math.PI);
                    La.fill();
                    La.fillStyle = Q;
                    La.beginPath();
                    La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI);
                    La.fill();
                    Ki || (La.beginPath(), La.arc(.45 * this.rad, .45 * -this.rad + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.5 * this.rad, .5 * this.rad + 15 * this.rPer, Math.max(0, .4 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.55 * -this.rad * .707, .55 * +this.rad * .707 + 15 * this.rPer, Math.max(0, .5 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.75 * -this.rad, .35 * -this.rad + 15 * this.rPer, Math.max(0, .3 * this.rad + i), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill());
                    La.restore();
                    break;
                case Ct:
                    La.save();
                    Ki || La.rotate(2 * this.rPer * Math.PI);
                    i = (xn - on) / 1e3;
                    i = 5.5 * Math.sin(2 * Math.PI / 5 * i);
                    e || (La.fillStyle = $, La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - a + i), 0, 2 * Math.PI), La.fill(), Ki || (La.beginPath(), La.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI), La.fill()));
                    La.restore();
                    break;
                case gt:
                    i = (xn - on) / 1e3;
                    e = -8.5 * Math.sin(2 * Math.PI / 5 * i);
                    1 == (this.x > gi / 2 ? 1 : 0) ? (La.fillStyle = $, La.fillRect(-this.rectW / 2 + e, -this.rectH / 2 + e + 10, this.rectW - e, this.rectH - e - 10), La.beginPath(), La.arc(-this.rectW / 2 + 50, -this.rectH / 2 + 50, 70 - e, 0, 2 * Math.PI), La.fill(), e = 35) : (La.fillStyle = $, e *= -1, La.fillRect(-this.rectW / 2, -this.rectH / 2 - e + 10, this.rectW + e, this.rectH + e - 10), e = 25);
                    _n(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
                    break;
                case Ut:
                    La.fillStyle = ee;
                    t = -this.rectW / 2;
                    s = this.rectW / 2;
                    n = -this.rectH / 2;
                    r = this.rectH / 2;
                    La.beginPath();
                    La.moveTo(t, n);
                    var l = 20,
                        o = [-15, 10, -10, 12, 0, 5, -10, 5, -12, 5, 10, 0, -6],
                        h = 45,
                        d = 0,
                        g = gi - this.x,
                        f = 0 - this.x,
                        u = fi - this.y,
                        m = 0 - this.y;
                    i = t - l;
                    for (e = n; e < r; e += h) La.lineTo(Math.min(g, Math.max(f, i + o[d])), e), d = (d + 1) % o.length;
                    La.lineTo(t, r);
                    e = r + l;
                    for (i = t; i < s; i += h) La.lineTo(i, Math.min(u, Math.max(m, e + o[d]))), d = (d + 1) % o.length;
                    La.lineTo(s, r);
                    i = s + l;
                    for (e = r; e > n; e -= h) La.lineTo(Math.min(g, Math.max(f, i + o[d])), e), d = (d + 1) % o.length;
                    La.lineTo(s, n);
                    e = n - l;
                    for (i = s; i > t; i -= h) La.lineTo(i, Math.min(u, Math.max(m, e + o[d]))), d = (d + 1) % o.length;
                    La.closePath();
                    La.fill();
                    break;
                case pt:
                    La.fillStyle = "#ececec";
                    La.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
                    t = -this.rectW / 2;
                    s = this.rectW / 2;
                    n = this.rectH / 2 - 20;
                    r = this.rectH / 2;
                    La.beginPath();
                    La.moveTo(t, n);
                    l = 20;
                    o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
                    h = 60;
                    d = 0;
                    u = fi - this.y;
                    m = 0 - this.y;
                    La.lineTo(t, r);
                    e = r + l;
                    for (i = t; i < s; i += h) La.lineTo(i, Math.min(u, Math.max(m, e + o[d]))), d = (d + 1) % o.length;
                    La.lineTo(s, r);
                    La.lineTo(s, n);
                    La.closePath();
                    La.fill();
                    e = 20;
                    _n(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
                    break;
                case Lt:
                    La.fillStyle = Q;
                    La.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
                    La.fillStyle = Q;
                    t = -this.rectW / 2;
                    s = this.rectW / 2;
                    n = -this.rectH / 2 + 3;
                    r = -this.rectH / 2 - 15;
                    La.beginPath();
                    La.moveTo(t, n);
                    l = 0;
                    o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
                    h = 60;
                    d = 0;
                    u = fi - this.y;
                    m = 0 - this.y;
                    La.lineTo(t, r);
                    e = r + l;
                    for (i = t; i < s; i += h) La.lineTo(i, Math.min(u, Math.max(m, e + o[d]))), d = (d + 1) % o.length;
                    La.lineTo(s, r);
                    La.lineTo(s, n);
                    La.closePath();
                    La.fill();
                    La.fillStyle = Q;
                    t = -this.rectW / 2;
                    s = this.rectW / 2;
                    n = this.rectH / 2 - 3;
                    r = this.rectH / 2 + 15;
                    La.beginPath();
                    La.moveTo(t, n);
                    l = 0;
                    o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
                    h = 60;
                    d = 0;
                    u = fi - this.y;
                    m = 0 - this.y;
                    La.lineTo(t, r);
                    e = r + l;
                    for (i = t; i < s; i += h) La.lineTo(i, Math.min(u, Math.max(m, e + o[d]))), d = (d + 1) % o.length;
                    La.lineTo(s, r);
                    La.lineTo(s, n);
                    La.closePath();
                    La.fill();
                    if (i = ui("img/riverCurrent" + this.riverSpecT + ".png"))
                        for (e = -this.rectW / 2, c = 0; 40 > c; c++) t = 100 / 120 * this.riverFlowSpeedX * 1e3, t = (xn - this.spawnTime) % t / t, La.drawImage(i, e + 100 * t, -this.rectH / 2, 100, this.rectH), e += 100;
                    break;
                case tt:
                    La.fillStyle = X;
                    La.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
                    e = 20;
                    _n(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
                    break;
                case ot:
                    e ? Hi(0, 0, this.rad, this.getOutlineColor()) : Hi(0, 0, this.rad - 1.5, le);
                    break;
                case dt:
                    La.fillStyle = ee;
                    La.beginPath();
                    La.arc(0, 0, Math.max(0, this.rad), 0, 2 * Math.PI);
                    La.fill();
                    La.fillStyle = "#E4D04C";
                    La.beginPath();
                    La.arc(-5 + 10 * this.rPer, -5 + 10 * this.rPer, .8 * this.rad, 0, 2 * Math.PI);
                    La.fill();
                    break;
                case It:
                    this.drawOutlinedCircle("", K);
                    break;
                case wt:
                    (i = ui("img/snowball.png")) ? (e = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(i, -e, -e, 2 * e, 2 * e)) : this.drawOutlinedCircle("", "white");
                    break;
                case yt:
                    this.drawOutlinedCircle("", "orange");
                    e = .15;
                    i = .5 * (.8 - e);
                    e = e + i + i * Math.sin(2 * Math.PI / 1 * (xn / 1e3));
                    La.save();
                    La.globalAlpha *= e;
                    Hi(0, 0, Math.max(0, this.rad), "#FFD300");
                    La.restore();
                    e = .5;
                    i = .5 * (1 - e);
                    e = e + i + i * Math.sin(2 * Math.PI / 1 * (xn / 1e3));
                    if (i = ui(1 == Math.trunc(xn / 300) % 2 ? "img/fire.png" : "img/fire2.png")) s = .3 * this.rad, n = 2 * this.rad * (2 + 2 * e) / 3, r = 2 * this.rad * e, La.save(), i && (La.globalAlpha = La.globalAlpha * this.onFireEffA * e, La.drawImage(i, 0 + -.5 * n, s + -.95 * r, n, r)), La.restore();
                    break;
                case at:
                    this.drawAnimal(t);
                    break;
                default:
                    console.log("Unhandled obj " + this), console.log("rect? " + this.isRectangle + " pos " + this.x + "," + this.y), this.isRectangle ? (La.fillStyle = "black", La.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH)) : this.drawOutlinedCircle("????", "black")
            }
            this.flag_hurt && (La.fillStyle = "rgba(255,0,0,0.3)", La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - a), 0, 2 * Math.PI), La.fill());
            this.hpBarA += .04 * ((xn < this.hpBarTimeoutT ? 1 : 0) - this.hpBarA);
            .001 < this.hpBarA && (this.hpPer += .1 * (this.hpPer_n - this.hpPer), i = Math.max(1, this.rad / 25), a = 20 * i, e = 5 * i, i = -this.rad - 10 * i, La.globalAlpha *= this.hpBarA, La.fillStyle = "rgba(0,0,0,0.35)", La.fillRect(0 - a / 2, i - e / 2, a, e), La.fillStyle = "#16D729", La.fillRect(0 - a / 2, i - e / 2, this.hpPer / 100 * a, e));
            La.restore()
        };
        this.drawChat = function() {
            if (!(1 > this.chatLines.length)) {
                La.save();
                La.font = "10px Arial";
                La.lineWidth = 1;
                La.textAlign = "center";
                La.textBaseline = "middle";
                for (var e = .01 < this.hpBarA ? -10 : 0, t = [], a = this.chatLines.length - 1; 0 <= a; a--) {
                    var i = this.chatLines[a],
                        s = -13 * (this.chatLines.length - 1 - a) + e,
                        n = xn > i.chatFadeT ? 0 : 1;
                    i.chatA += .1 * (n - i.chatA);
                    La.shadowOffsetX = 0;
                    La.shadowOffsetY = 0;
                    .02 > i.chatA ? (.02 > n && (i.chatTxt = ""), t.push(a)) : (n = La.measureText(i.chatTxt).width, La.globalAlpha = .8 * i.chatA, La.fillStyle = oe(this.curBiome), La.fillRect(this.x - 1 - n / 2, s + this.y - this.rad - 10 - 5 - 1, n + 2, 12), La.fillStyle = "#F1C34C", Ki || (La.shadowOffsetX = 1, La.shadowOffsetY = 1, La.shadowColor = "black"), La.globalAlpha = i.chatA, La.fillText(i.chatTxt, this.x, s + this.y - this.rad - 10))
                }
                for (a = 0; a < t.length; a++) this.chatLines.splice(t[a], 1);
                La.restore()
            }
        };
        this.getOutlineColor = function() {
            return this.alwaysPlainOutline ? Y : this.isEdibleOutlined() ? re : this.oType == at && 0 < Ys[this.type - 1] && this.id != cs ? ne : oe(this.curBiome)
        };
        this.isEdibleOutlined = function() {
            return this.oType == at ? 0 < Vs[this.type - 1] && this.id != cs : 0 < qs[this.oType - 1]
        };
        this.gotChat = function(e) {
            this.chatLines.push({
                chatTxt: e,
                chatFadeT: xn + 4e3,
                chatA: 0
            });
            5 < this.chatLines.length && this.chatLines.splice(this.chatLines.length - 1, 1);
            console.log(this.oType + "Got chat " + e)
        };
        this.drawOutlinedCircle = function(e, t) {
            var a = this.getOutlineColor();
            Ki && a == Y || Hi(0, 0, this.rad, a);
            Hi(0, 0, Math.max(0, this.rad - 1.5), t)
        };
        this.drawAnimal = function(e) {
            var t = Dn(this.type),
                a = t.aniCol,
                i = t.skinName,
                s = .1 * this.rad;
            switch (this.type) {
                case Ue:
                case ze:
                case Ne:
                case De:
                case we:
                    s = .16 * this.rad
            }
            switch (this.type) {
                case Ue:
                case ze:
                case Ne:
                case De:
                case Me:
                case $e:
                    this.flag_usingAbility && (i += "2")
            }
            La.save();
            0 != this.angle && La.rotate(this.angle);
            var n = (xn - this.spawnTime) / 1e3,
                t = .7 * Math.sin(2 * Math.PI / 2.5 * n),
                r = this.flag_underWater || this.flag_usingAbility && (this.type == ue || this.type == Oe || this.type == Le) ? 0 : 1;
            this.underwaterA += .1 * (r - this.underwaterA);
            La.globalAlpha *= this.underwaterA;
            if (this.flag_eff_invincible) {
                var l = .3,
                    o = .5 * (1 - l);
                La.globalAlpha *= l + o + o * Math.sin(2 * Math.PI / 1 * ((xn - this.spawnTime) / 1e3))
            }
            this.nameA += .1 * (r - this.nameA);
            this.flag_iceSliding && (r = 1 * Math.sin(2 * Math.PI / .75 * n), l = La.globalAlpha, La.globalAlpha *= .8 - .2 * r, Hi(0, .3 * this.rad, this.rad * (.9 + .15 * r), "#7BB7BB"), Hi(0, .3 * -this.rad, this.rad * (1.05 + .1 * r), "#7BB7BB"), La.globalAlpha = l);
            !this.flag_usingAbility || this.type != fe && this.type != me && this.type != Je || (r = 1 * Math.sin(2 * Math.PI / 1.5 * n), l = La.globalAlpha, La.globalAlpha *= .8, Hi(0, .3 * this.rad, this.rad * (.9 + .12 * r), "#7F582B"), Hi(0, .3 * -this.rad, this.rad * (1.05 + .09 * r), "#7F582B"), La.globalAlpha = l);
            r = this.flag_eff_frozen ? 1 : 0;
            this.frozenEffA += .1 * (r - this.frozenEffA);
            .01 < this.frozenEffA && (l = La.globalAlpha, La.globalAlpha *= this.frozenEffA, Hi(0, 0, this.rad + 1.6 * this.frozenEffA, "white"), La.globalAlpha = l);
            r = this.flag_eff_healing ? 1 : 0;
            this.effA_healing += .1 * (r - this.effA_healing);
            .01 < this.effA_healing && (La.save(), La.globalAlpha *= this.effA_healing, Hi(0, 0, this.rad + 2.6 * this.effA_healing, "purple"), La.restore());
            t = 2 + t;
            l = this.getOutlineColor();
            Ki && l == Y ? t = 0 : Hi(0, 0, this.rad, l);
            r = null;
            i && !Ji && (r = ui("./skins/" + i + ".png"));
            r || (La.fillStyle = a, La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - t), 0, 2 * Math.PI), La.fill());
            this.type != ce && this.type != he && this.type != Me && (n = (xn - this.spawnTime) / 1e3, n = 4 * Math.sin(2 * Math.PI / 5 * n), i = 2.5 * t, o = Math.PI / 180, La.fillStyle = this.flag_tailBitten ? ne : 0 < Js[this.type - 1] && this.id != cs ? re : l, Ki && La.fillStyle != Y || (La.beginPath(), La.moveTo((this.rad - t + 1) * Math.cos((282.5 + i) * o), (this.rad - t + 1) * Math.sin(282.5 * o)), La.lineTo((this.rad - t + 1) * Math.cos((257.5 - i) * o), (this.rad - t + 1) * Math.sin(257.5 * o)), La.lineTo((this.rad + s + t) * Math.cos((270 + n) * o), (this.rad + s + t) * Math.sin((270 + n) * o)), La.lineTo((this.rad - t + 1) * Math.cos((282.5 + i) * o), (this.rad - t + 1) * Math.sin(282.5 * o)), La.fill()), Ki || r && !this.flag_tailBitten || (La.fillStyle = this.flag_tailBitten ? ne : a, La.beginPath(), La.moveTo((this.rad - t) * Math.cos(282.5 * o), (this.rad - t) * Math.sin(282.5 * o)), La.lineTo((this.rad - t) * Math.cos(257.5 * o), (this.rad - t) * Math.sin(257.5 * o)), La.lineTo((this.rad + s) * Math.cos((270 + n) * o), (this.rad + s) * Math.sin((270 + n) * o)), La.lineTo((this.rad - t) * Math.cos(282.5 * o), (this.rad - t) * Math.sin(282.5 * o)), La.fill()));
            r && (n = 500 / 340, s = this.rad - t, La.drawImage(r, -s * n, -s * n, 2 * s * n, 2 * s * n));
            .01 < this.frozenEffA && (La.save(), La.globalAlpha = .3 * La.globalAlpha * this.frozenEffA, Hi(0, 0, Math.max(0, this.rad - t), "white"), La.restore());
            .01 < this.effA_healing && (La.save(), La.globalAlpha = .3 * La.globalAlpha * this.effA_healing, Hi(0, 0, Math.max(0, this.rad - t), "#ef24ed"), La.restore());
            this.flag_hurt && (La.fillStyle = "rgba(255,0,0,0.3)", La.beginPath(), La.arc(0, 0, Math.max(0, this.rad - t), 0, 2 * Math.PI), La.fill());
            this.type == Pe && (La.fillStyle = "#E5CF79", La.beginPath(), s = this.rad - t, n = 1 * s, La.moveTo(-.16 * s, n), La.lineTo(0, s * (this.flag_usingAbility ? 1.41 : .7)), La.lineTo(.153 * s, n), La.closePath(), La.fill());
            r || (this.type == Ie ? (La.fillStyle = a, La.beginPath(), La.arc(.2 * this.rad, .7 * this.rad, Math.max(0, .55 * this.rad - t), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.2 * -this.rad, .7 * this.rad, Math.max(0, .55 * this.rad - t), 0, 2 * Math.PI), La.fill(), La.fillStyle = "#8C96A6", La.beginPath(), La.arc(-(.29 * this.rad), .7 * this.rad + 10, Math.max(0, 3 - t / 2), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.29 * this.rad, .7 * this.rad + 10, Math.max(0, 3 - t / 2), 0, 2 * Math.PI), La.fill()) : this.type == be ? (La.fillStyle = "#B5AE4C", La.beginPath(), La.arc(.1 * this.rad, -.45 * this.rad, .13 * this.rad, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(-.4 * this.rad, -.2 * this.rad, .12 * this.rad, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.15 * this.rad, -.25 * this.rad, .16 * this.rad, 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.63 * this.rad, -.4 * this.rad, .1 * this.rad, 0, 2 * Math.PI), La.fill()) : this.type == me ? (La.fillStyle = "#000000", s = Math.max(0, this.rad - t), a = 0, La.beginPath(), La.moveTo(1 * -s, 0 + a), La.lineTo(0, .2 * -s + a), La.lineTo(1 * s, 0 + a), La.lineTo(0, .1 * s + a), La.closePath(), La.fill(), a -= .3 * this.rad, La.beginPath(), La.moveTo(.8 * -s, 0 + a), La.lineTo(0, .2 * -s + a), La.lineTo(.8 * s, 0 + a), La.lineTo(0, .1 * s + a), La.closePath(), La.fill(), a -= .3 * this.rad, La.beginPath(), La.moveTo(.7 * -s, 0 + a), La.lineTo(0, .1 * -s + a), La.lineTo(.7 * s, 0 + a), La.lineTo(0, .1 * s + a), La.closePath(), La.fill()) : this.type == fe ? (La.fillStyle = "#E5C870", La.beginPath(), a = .35 * -this.rad, n = .1 * -this.rad, La.moveTo(a, n), La.lineTo(a + .25 * this.rad, n), La.lineTo(a - .35 * this.rad, n - 15), La.fill(), La.beginPath(), a = .35 * this.rad, n = .1 * -this.rad, La.moveTo(a, n), La.lineTo(a - .25 * this.rad, n), La.lineTo(a + .35 * this.rad, n - 15), La.fill()) : this.type == ye ? (La.fillStyle = "black", La.beginPath(), La.arc(0, this.rad - 3, Math.max(0, 5 - t / 2), 0, 2 * Math.PI), La.fill()) : this.type == ue && (La.fillStyle = "#FA2E8D", La.beginPath(), La.arc(0, this.rad - 3, Math.max(0, 4 - t / 2), 0, 2 * Math.PI), La.fill(), s = Math.max(0, this.rad + 2.5 - t), La.fillStyle = "#F64455", La.beginPath(), a = .707 * -s, n = .707 * s, La.arc(a, n, Math.max(0, 5 - t / 2), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(a + 2, n + 2, Math.max(0, 4 - t / 2), 0, 2 * Math.PI), La.fill(), a = .707 * s, n = .707 * s, La.arc(a, n, Math.max(0, 5 - t / 2), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(a - 2, n + 2, Math.max(0, 4 - t / 2), 0, 2 * Math.PI), La.fill()));
            r || (La.save(), a = Math.max(1, this.rad / 25), La.scale(a, a), this.drawEyeAtPos(6, .32 * this.rad), this.drawEyeAtPos(-6, .32 * this.rad), La.restore());
            if (this.flag_underWater || this.flag_usingAbility && this.type == ue) La.save(), La.globalAlpha = 1 - this.underwaterA, n = (xn - this.spawnTime) / 1e3, r = 1 * Math.sin(2 * Math.PI / 1.5 * n), this.flag_underWater && (La.globalAlpha *= .5, this.type == we && (La.globalAlpha = .3)), La.fillStyle = this.flag_underWater ? "#4E71C3" : "#7E6A35", a = this.flag_underWater ? .15 * this.rad : .1 * this.rad, La.beginPath(), La.arc(-.35 * this.rad, -.33 * this.rad, Math.max(0, a + r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.35 * this.rad, -.32 * this.rad, Math.max(0, a - r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.35 * this.rad, .36 * this.rad, Math.max(0, a + r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(-.35 * this.rad, .35 * this.rad, Math.max(0, a - r), 0, 2 * Math.PI), La.fill(), this.type == Te ? (La.globalAlpha = 1 - this.underwaterA, La.fillStyle = "#73799b", La.beginPath(), s = this.rad, n = .25 * s, La.moveTo(-.07 * s, n), La.lineTo(0, n - .5 * s), La.lineTo(.35 * s, n), La.closePath(), La.fill()) : this.type == Ce ? Hi(0, .2 * this.rad, .12 * this.rad, "#4D4D4D") : this.type == Be && (La.globalAlpha = 1 - this.underwaterA, Hi(.4 * this.rad, .75 * this.rad, .12 * this.rad, "#598b30"), Hi(.65 * this.rad, .55 * this.rad, .1 * this.rad, "#64a034"), Hi(-.4 * this.rad, .75 * this.rad, .12 * this.rad, "#64a034"), Hi(-.65 * this.rad, .55 * this.rad, .1 * this.rad, "#598b30")), La.restore();
            this.flag_usingAbility && this.type == Oe && (La.save(), La.globalAlpha = 1 - this.underwaterA, "undefined" == typeof this.octoDrawObj && (this.octoDrawObj = new Fi(0, At, 0, 0, this.rad)), this.octoDrawObj.oType = this.octoDisguiseObjT, this.octoDisguiseObjT == at ? (this.octoDrawObj.type = me, this.octoDrawObj.nRad = this.rad) : this.octoDisguiseObjT == At ? this.octoDrawObj.nRad = 25 : this.octoDisguiseObjT == xt ? this.octoDrawObj.nRad = 17 : this.octoDisguiseObjT == it ? this.octoDrawObj.curBiome = Na : this.octoDrawObj.nRad = this.rad, this.octoDrawObj.draw(), La.restore());
            this.flag_usingAbility && this.type == Le && (La.save(), La.globalAlpha = 1 - this.underwaterA, (a = ui("img/snowball.png")) ? (s = this.rad, La.rotate(this.rPer * Math.PI * 2), La.drawImage(a, -s, -s, 2 * s, 2 * s)) : this.drawOutlinedCircle("", "white"), La.restore());
            La.restore();
            r = this.flag_eff_stunned ? 1 : 0;
            this.stunA += .1 * (r - this.stunA);
            .01 < this.stunA && (La.save(), a = 2.5, a = xn % (1e3 * a) / (1e3 * a), La.rotate(2 * a * Math.PI), La.globalAlpha *= this.stunA, a = .2 * this.rad, n = (xn - this.spawnTime) / 1e3, r = (.5 + .07 * a) * Math.sin(2 * Math.PI / 1 * n), La.fillStyle = "#F3D444", La.beginPath(), La.arc(-.22 * this.rad, -.22 * this.rad, Math.max(0, a + r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.22 * this.rad, -.22 * this.rad, Math.max(0, a - r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(.22 * this.rad, .22 * this.rad, Math.max(0, a + r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(-.22 * this.rad, .22 * this.rad, Math.max(0, a - r), 0, 2 * Math.PI), La.fill(), La.restore());
            r = this.flag_eff_onFire ? 1 : 0;
            this.onFireEffA += .1 * (r - this.onFireEffA);
            .01 < this.onFireEffA && (l = .15, o = .5 * (.4 - l), a = l + o + o * Math.sin(2 * Math.PI / 1 * (xn / 1e3)), La.save(), La.globalAlpha = La.globalAlpha * a * this.onFireEffA, Hi(0, 0, Math.max(0, this.rad - t), "orange"), La.restore(), l = .5, o = .5 * (1 - l), r = l + o + o * Math.sin(2 * Math.PI / 1 * (xn / 1e3)), t = Math.trunc(xn / 300) % 2, a = ui(1 == t ? "img/fire.png" : "img/fire2.png"), t = ui(0 == t ? "img/fire.png" : "img/fire2.png"), a || t) && (s = 0 - .3 * this.rad, n = .2 * this.rad - .3 * this.rad, i = 1 * this.rad * (2 + 2 * r) / 3, l = 1 * this.rad * r, La.save(), a && (La.globalAlpha = La.globalAlpha * this.onFireEffA * r, La.drawImage(a, s + -.5 * i, n + -.95 * l, i, l)), t && (La.globalAlpha = La.globalAlpha * this.onFireEffA * r, La.drawImage(t, s + .5 * this.rad + -.5 * i, n + .5 * this.rad + -.95 * l, i, l)), La.restore());
            .01 < this.frozenEffA && (La.save(), a = 7, a = xn % (1e3 * a) / (1e3 * a), La.rotate(2 * a * Math.PI), La.globalAlpha *= this.frozenEffA, a = .2 * this.rad, n = (xn - this.spawnTime) / 1e3, r = (.5 + .07 * a) * Math.sin(2 * Math.PI / 1 * n), La.fillStyle = "white", t = .27 * this.rad, La.beginPath(), La.arc(-t, -t, Math.max(0, a + r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(t, -t, Math.max(0, a - r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(t, t, Math.max(0, a + r), 0, 2 * Math.PI), La.fill(), La.beginPath(), La.arc(-t, t, Math.max(0, a - r), 0, 2 * Math.PI), La.fill(), La.restore());
            this.flag_lowWat && (l = .2, o = .5 * (.8 - l), a = l + o + o * Math.sin(2 * Math.PI / 1.2 * (xn / 1e3)), La.save(), La.globalAlpha = a, La.fillStyle = K, La.beginPath(), La.arc(0, this.rad + 5, 5, 0, 2 * Math.PI), La.fill(), La.restore());
            La.save();
            this.name && this.nameTXT && !qi && (La.globalAlpha = this.dead ? La.globalAlpha * (1 - e) : 1, La.globalAlpha *= this.nameA, this.nameTXT.x = 0, this.nameTXT.y = this.rad + 9, this.nameTXT.draw());
            La.restore()
        };
        this.drawEyeAtPos = function(e, t) {
            La.beginPath();
            La.arc(e, t, 4.5, 0, 2 * Math.PI);
            La.fillStyle = "black";
            La.fill();
            La.beginPath();
            La.fillStyle = "white";
            La.arc(e - 2, t - 1, .99, 0, 2 * Math.PI);
            La.fill()
        };
        this.moveUpdate = function() {
            var e = (xn - this.updateTime) / 1e3 / j,
                e = 0 > e ? 0 : 1 < e ? 1 : e;
            this.dead && 1 <= e && $s.push(this);
            this.x = e * (this.nx - this.ox) + this.ox;
            this.y = e * (this.ny - this.oy) + this.oy;
            this.rad += .1 * (this.nRad - this.rad);
            if (this.oType == at) {
                var t = .1 * this.angleDelta;
                this.angleDelta -= t;
                this.angle += t
            }
            return Math.min(1, e)
        }
    }
    Li.prototype = {
        objs: [],
        z: 0,
        id: 0,
        oType: 0,
        updateZ: function() {
            0 < this.objs.length && (this.objs[0].updateZ(), this.z = this.objs[0].z)
        },
        draw: function() {
            for (var e = 0; e < this.objs.length; e++) {
                var t = this.objs[e];
                t.draw(!0)
            }
            for (e = 0; e < this.objs.length; e++) t = this.objs[e], t.draw(!1)
        },
        addBatchedObj: function(e) {
            0 == this.objs.length && (this.oType = e.oType, this.objs = []);
            this.objs.push(e)
        }
    };

    function Li() {}

    function Hi(e, t, a, i) {
        La.fillStyle = i;
        La.beginPath();
        La.arc(e, t, Math.max(0, a), 0, 2 * Math.PI);
        La.fill()
    }

    function zi(e) {
        this.data = e;
        this.offset = 0;
        this.readUInt8 = function() {
            var e = this.data.getUint8(this.offset);
            this.offset += 1;
            return e
        };
        this.readUInt16 = function() {
            try {
                var e = this.data.getUint16(this.offset, !1);
                this.offset += 2;
                return e
            } catch (e) {
                return 0
            }
        };
        this.readUInt32 = function() {
            var e = this.data.getUint32(this.offset, !1);
            this.offset += 4;
            return e
        };
        this.readString = function() {
            for (var e = this.readUInt16(), t = "", a, i = 0; i < e; i++) a = this.readUInt8(), i != e - 1 && (t += String.fromCharCode(a));
            return Di(t)
        };
        this.readMsgReaderBitsGroup = function() {};
        this.readBitGroup = function() {
            return new ji(this)
        }
    }

    function Gi(e) {
        this.len = 0;
        this.dataView = new DataView(new ArrayBuffer(e));
        this.writeUInt8 = function(e) {
            this.dataView.setUint8(this.len, e);
            this.len += 1
        };
        this.writeUInt16 = function(e) {
            this.dataView.setUint16(this.len, e, !1);
            this.len += 2
        };
        this.writeInt16 = function(e) {
            this.dataView.setInt16(this.len, e, !1);
            this.len += 2
        };
        this.writeUInt32 = function(e) {
            this.dataView.setUint32(this.len, e, !1);
            this.len += 4
        };
        this.writeString = function(e) {
            e = Si(e);
            len = e.length;
            this.writeUInt16(e.length);
            for (var t = 0; t < len; t++) this.writeUInt8(e.charCodeAt(t))
        }
    }

    function ji(e) {
        this.bytesArray = new Uint8Array(20);
        this.bytesLen = 0;
        this.rBitIndex = 1;
        this.rByteIndex = 0;
        this.getBool = function() {
            var e = 0 < Ai(this.bytesArray[this.rByteIndex], this.rBitIndex);
            this.rBitIndex += 1;
            7 < this.rBitIndex && (this.rBitIndex = 1, this.rByteIndex += 1);
            return e
        };
        this.getInt0to3 = function() {
            return this.getIntWithXBits(2)
        };
        this.getIntWithXBits = function(e) {
            for (var t = 0, a = 0; a < e; a++) var i = this.getBool(),
                t = Mi(t, a, i);
            return t
        };
        this.byteToStr = function(e) {
            for (var t = "", a = 0; 8 > a; a++) t += 0 < Ai(e, a) ? "1" : "0";
            return t
        };
        var t = !0;
        do t = e.readUInt8(), this.bytesArray[this.bytesLen++] = t, t = 0 < Ai(t, 0); while (t)
    }
    var Xi, Yi = 0;

    function Vi() {
        Mn() && (theWs = cn, cn = null, theWs.close());
        1 < Yi && (U += 1, U > h[B].length - 1 && (U = 0), C = l[U], B = C.region, Pn());
        bs = !1;
        document.getElementById("connecting").style.visibility = "visible";
        sr();
        console.log("Connecting to " + C.name + "...");
        var e = "https:" === window.location.protocol ? "wss://" : "ws://",
            e = e + C.serverConnURL + ":" + ("wss://" == e ? 7021 : 7020);
        console.log("connecting to " + e);
        cn = new WebSocket(e);
        cn.binaryType = "arraybuffer";
        cn.onopen = function() {
            Yi = 0;
            document.getElementById("startMenu").style.visibility = "visible";
            document.getElementById("connecting").style.visibility = "hidden"
        };
        cn.onmessage = function(e) {
            kn(new DataView(e.data))
        };
        cn.onclose = function(e) {
            this == cn && (Yi += 1, fs = gs = us = !1, bs || (Xi = setTimeout(function() {
                Vi()
            }, 2e3), document.getElementById("connecting").style.visibility = "visible"))
        };
        cn.onerror = function() {
            console.log("socket error!")
        }
    }
    var Ji = !1,
        qi = !1,
        Ki = !1,
        Zi = !1,
        Qi = !1,
        $i = !1,
        es = Ba;
    if (window.localStorage) {
        Ji = 0 < window.localStorage.getItem("options_noImages") + 0;
        document.getElementById("options_noImages").checked = Ji;
        qi = 0 < window.localStorage.getItem("options_noNames") + 0;
        document.getElementById("options_noNames").checked = qi;
        Ki = 0 < window.localStorage.getItem("options_lowGraphics") + 0;
        document.getElementById("options_lowGraphics").checked = Ki;
        Zi = 0 < window.localStorage.getItem("options_noJoystick") + 0;
        document.getElementById("options_noJoystick").checked = Zi;
        Zi = 0 < window.localStorage.getItem("options_noJoystick") + 0;
        document.getElementById("options_noJoystick").checked = Zi;
        Qi = 0 < window.localStorage.getItem("options_leftHanded") + 0;
        if (E = document.getElementById("options_leftHanded")) E.checked = Qi;
        $i = 0 < window.localStorage.getItem("options_musicMuted") + 0;
        Ka()
    }
    var ts = 0,
        as = 0,
        is = +new Date,
        ss = "... fps",
        ns = +new Date,
        rs = 0,
        ls, os = "...",
        hs = 0,
        cs = 0,
        ds = he,
        gs = !1,
        fs = !1,
        us = !1,
        ms = !1,
        ps = +new Date,
        bs = !1,
        ys = !1,
        ws = waterBarPerc_n = 100,
        Ps = xp = xpPer = 0,
        Is = new Wi(16, "white"),
        vs = new Wi(16, "white"),
        ks = new Wi(16, "white"),
        As = new Wi(10, "white");
    ks.multiLine = !0;
    ks.renderScale = 1;
    As.renderScale = 1;
    var Ms = 0,
        xs = 0,
        Ts = "",
        Ss = [],
        Ds = new Oi;
    Ds.onButtonTouchStart = function() {
        wr(mr, !0)
    };
    Ds.onButtonTouchEnd = function() {
        wr(mr, !1);
        _s.pressed && -1 == _s.pressedTouchID && (_s.pressed = !1, wr(ur, !1))
    };
    Ss.push(Ds);
    var Es = new Oi;
    Es.isMiniRechargeBut = !0;
    Es.touchEnabled = !1;
    Ss.push(Es);
    var _s = new Ri("RUN");
    _s.onButtonTouchStart = function() {
        wr(ur, !0)
    };
    _s.onButtonTouchEnd = function() {
        wr(ur, !1)
    };
    Ss.push(_s);
    var Bs = new Ri("CHAT");
    Bs.onButtonTouchStart = function() {
        cr()
    };
    Ss.push(Bs);
    var Us = new Ri("S");
    Us.onButtonTouchStart = function() {
        wr(yr, !0)
    };
    Ss.push(Us);
    var Cs = new Ri("DOWN↓");
    Cs.onButtonTouchStart = function() {
        wr(br, !0)
    };
    Ss.push(Cs);
    var Ns = !1,
        Rs = -1,
        Os = 0,
        Ws = 0,
        Fs = 0,
        Ls = 0,
        Hs = 50,
        zs = 0,
        Gs = 0,
        js = 0;
    joystickDistF_n = joystickDistF = 0;
    var Xs = 100,
        Ys = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0),
        Vs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0),
        Js = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0),
        qs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0),
        Ks = !1,
        Zs = [],
        Qs = {},
        $s = [],
        en = !1,
        tn = 0,
        an = 1,
        sn = !1,
        nn = 0,
        rn = 1,
        ln = !1,
        on = +new Date;
    ja("audio/click.mp3");
    var hn = +Date.now(),
        cn;
    fr();
    Tr();
    if (A) {
        console.log("Party link detected! Verifying...");
        for (var M = wi(M), dn = !1, c = 0; c < l.length; c++)
            if (l[c].ip == M && 5 < M.length) {
                var C = l[c],
                    U = h[C.region].indexOf(C),
                    B = C.region,
                    gn = document.getElementById("spawnXpLabel");
                gn.style.display = "block";
                gn.style.opacity = 1;
                gn.textContent = "Joining party server...";
                A = dn = !0;
                console.log("Successfuly found party server...");
                break
            }
        dn ? (console.log("Connecting to party server..."), vn(), In(), Pn(), Vi()) : (alert("This server for this party link is no longer supported!  Joining auto server..."), M = null, A = !1, L())
    } else L();
    var fn = !1;

    function un() {
        var e = "https:" === window.location.protocol ? "wss://" : "ws://";
        masterWs = new WebSocket(e + s + ":" + ("wss://" == e ? 7501 : 7500));
        masterWs.binaryType = "arraybuffer";
        masterWs.onopen = function() {
            var e = new Gi(1);
            e.writeUInt8(200);
            masterWs.send(e.dataView.buffer)
        };
        masterWs.onmessage = function(e) {
            e = new zi(new DataView(e.data));
            if (100 == e.readUInt8()) {
                fn = !0;
                var t = e.readUInt32();
                console.log("MasterServer: " + t + " total players online!");
                As.setText(Bi(t) + " players");
                for (var t = e.readUInt16(), a = 0; a < t; a++)
                    for (var i = wi(e.readUInt32()), s = e.readUInt16(), n = 0; n < l.length; n++)
                        if (l[n].ip == i) {
                            l[n].playersCount = 6e4 == s ? -1 : s;
                            break
                        }
            }
            vn();
            In()
        };
        masterWs.onerror = function(e) {
            console.log("MasterServer: error connecting!")
        };
        masterWs.onclose = function(e) {
            console.log("Disconnected from master server!")
        }
    }
    un();
    var mn = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
        pn = -1 < navigator.userAgent.toLowerCase().indexOf("android");
    if ((mn || pn) && !w) {
        var bn = !1;
        if (window.localStorage) {
            bn = 0 < window.localStorage.getItem("oldVisitor");
            try {
                window.localStorage.setItem("oldVisitor", 1)
            } catch (e) {
                bn = !0
            }
        }
        bn || (mn ? window.location.href = "https://itunes.apple.com/us/app/mope.io/id1086471119?ls=1&mt=8" : pn && (window.location.href = "https://play.google.com/store/apps/details?id=tatarnykov.stan.mopeioandroid"))
    }
    document.getElementById("serverSelect").onchange = yn;

    function yn() {
        U = document.getElementById("serverSelect").selectedIndex - 1;
        C = h[B][U];
        Pn();
        console.log("Server changed...");
        Mn() && cn.close();
        A = !1;
        document.getElementById("spawnXpLabel").style.opacity = 0;
        x = M = null;
        Vi()
    }
    document.getElementById("regionSelect").onchange = wn;

    function wn() {
        console.log("Region changed...");
        var e = document.getElementById("regionSelect").selectedIndex - 1;
        B = o[e];
        Mn() && cn.close();
        A = !1;
        x = M = null;
        document.getElementById("spawnXpLabel").style.opacity = 0;
        G()
    }

    function Pn() {
        document.getElementById("serverSelect").selectedIndex = U + 1
    }

    function In() {
        for (var e = document.getElementById("serverSelect"); e.lastChild;) e.removeChild(e.lastChild);
        var t = document.createElement("option");
        t.text = "Choose a server:";
        t.disabled = !0;
        e.add(t);
        for (var a = -1, i = h[B], s = 0; s < i.length; s++) t = document.createElement("option"), t.text = i[s].name + " [" + (0 > i[s].playersCount ? "..." : i[s].playersCount) + " players " + (i[s].playersCount >= r ? "-FULL!" : "") + "]", i[s].ip == C.ip && (a = s), e.add(t); - 1 == a && (a = 0);
        e.selectedIndex = a + 1
    }

    function vn() {
        for (var e = document.getElementById("regionSelect"); e.lastChild;) e.removeChild(e.lastChild);
        var t = document.createElement("option");
        t.text = "Choose a region:";
        t.disabled = !0;
        e.add(t);
        for (var a = -1, i = 0; i < o.length; i++) {
            for (var s = o[i], t = h[s], n = 0; n < t.length; n++);
            t = document.createElement("option");
            t.text = s;
            s == B && (a = i);
            e.add(t)
        } - 1 == a && (a = 0);
        e.selectedIndex = a + 1
    }

    function kn(e) {
        e = new zi(e);
        switch (e.readUInt8()) {
            case 1:
                nPlayers = e.readUInt16();
                As.setText(Bi(nPlayers) + " players");
                serverVer = e.readUInt16();
                serverVer > a ? setTimeout(function() {
                    w || (window.onbeforeunload = null);
                    console.log("Old client (ver " + a + "/" + serverVer + ")");
                    alert("mope.io has been updated! You need to refresh to get the latest version of the game! (If this keeps appearing, hold SHIFT when pressing refresh!)");
                    window.location.reload(!0)
                }, 1500) : (serverVer > a && console.log("Old server version detected!"), document.getElementById("startMenuWrapper").style.display = "block", ir(!0));
                break;
            case 2:
                var t = e.readUInt8();
                100 == t && (document.getElementById("startMenuWrapper").style.display = "none");
                if (1 == t) {
                    spectating = 2 == e.readUInt8();
                    gs = !spectating;
                    fs = spectating;
                    us = !0;
                    ms || (qa(Va), document.getElementById("onconnectDiv").style.visibility = "visible");
                    ms = !0;
                    gi = e.readUInt16();
                    fi = e.readUInt16();
                    gameMode = e.readUInt8();
                    Qa(gameMode);
                    ei = camx_o = camx_n = e.readUInt16() / 4;
                    camy = camy_o = camy_n = e.readUInt16() / 4;
                    camzoom_n = e.readUInt16() / 1e3;
                    $a = 1.2 * camzoom_n;
                    spectating || Cn(e);
                    spectating || (document.getElementById("startMenuWrapper").style.display = "none", qa(Ja), w || (window.onbeforeunload = function(e) {
                        return "You're alive in a game, close mope.io?"
                    }));
                    if (!spectating && (Rr += 1, Br += 1, window.localStorage)) try {
                        window.localStorage.setItem("gamesSinceAd", Br)
                    } catch (e) {}
                    A && (e = document.getElementById("spawnXpLabel"), e.style.display = "block", e.style.opacity = 1, e.textContent = "Joined party server :)");
                    Tr()
                } else if (0 == t) {
                    e = document.getElementById("spawnXpLabel");
                    e.style.display = "block";
                    e.style.opacity = 1;
                    e.textContent = "Error: this server is full!";
                    A = !1;
                    var i = C;
                    setTimeout(function() {
                        gs || C != i || (Yi = 100, Vi())
                    }, 1e3)
                } else 2 == t && (e = document.getElementById("spawnXpLabel"), e.style.display = "block", e.style.opacity = 1, e.textContent = "Error: link is invalid/expired!", A = !1, e = document.location.href, e = Pi("l", e), e = Pi("s", e), window.history.pushState("", document.title, e), alert("Error, your mope.io party link is invalid/ expired! Joining auto server..."), setTimeout(function() {
                    gs || cn.close()
                }, 2e3));
                break;
            case 24:
                t = e.readUInt8();
                5 == t && (Yn = !1);
                if (0 == t || 1 == t) {
                    var s = 1 == t,
                        n = e.readUInt8(),
                        t = e.readUInt8();
                    Yn = !0;
                    Vn = 0;
                    Jn = [];
                    qn = s;
                    Kn = +new Date;
                    Zn = Kn + 1e3 * n;
                    for (s = 0; s < t; s++) {
                        var n = e.readUInt8(),
                            r = e.readUInt8(),
                            n = new Ci(0, 0, 100, 100, n, r);
                        Jn.push(n)
                    }
                }
                Fn = +new Date;
                break;
            case 8:
                t = e.readUInt16();
                n = e.readUInt8();
                lbData = [];
                for (s = 0; s < n; ++s) lbData.push({
                    rank: e.readUInt16(),
                    name: e.readString(),
                    score: e.readUInt32()
                });
                Nn(lbData, 0, t);
                break;
            case 10:
                nPlayers = e.readUInt16();
                As.setText(Bi(nPlayers) + " players");
                break;
            case 18:
                s = e.readUInt8();
                t = 0 < e.readUInt8();
                cs = e.readUInt32();
                Xs = e.readUInt32();
                n = Dn(s);
                On = t ? "You downgraded to " + n.aniName + "! \nDont lose too much xp!" : n.upgradeText;
                Wn = "white";
                Fn = +new Date + 9e3;
                Ks || (Ks = !0, Ys = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0), Vs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0), Js = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0), qs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0));
                Ys = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
                for (var l = e.readUInt8(), t = 0; t < l; t++) Ys[e.readUInt8() - 1] = 1;
                n = Vs;
                Vs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
                l = e.readUInt8();
                for (t = 0; t < l; t++) Vs[e.readUInt8() - 1] = 1;
                Js = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
                l = e.readUInt8();
                for (t = 0; t < l; t++) Js[e.readUInt8() - 1] = 1;
                r = qs;
                qs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
                l = e.readUInt8();
                for (t = 0; t < l; t++) qs[e.readUInt8() - 1] = 1;
                Ln = [];
                Xn = s == he || s == ke;
                for (t = 0; t < Vs.length; t++) 0 < Vs[t] && 0 == n[t] && (e = new Fi(0, at, 0, 0, 35), e.type = t + 1, Ln.push(e));
                for (t = 0; t < qs.length; t++) 0 < qs[t] && 0 == r[t] && (e = new Fi(0, t + 1, 0, 0, 35), Ln.push(e));
                Hn = +new Date + 9e3;
                zn = 0;
                if (0 < Ln.length)
                    for (jn = 1.2, e = 45 * Math.max(0, Ln.length - 1), Gn = e + 40, t = 0; t < Ln.length; t++) s = Ln[t], s.x = s.ox = s.nx = 0 - e / 2 + t / Math.max(1, Ln.length - 1) * e, s.y = s.oy = s.ny = 0, s.nRad = 20;
                break;
            case 14:
                var t = e.readUInt8(),
                    o = e.readUInt32();
                On = 1 == t ? "Oh no, You were eaten! \n Watch out for red-circled players!" : 2 == t ? "Oh no, You died from a tail-bite!\n Watch your tail!" : 4 == t ? "You died of thirst :( Don't let your water run out!" : 13 == t ? "You died from burning! (Get to water when on fire!)" : "You died! Watch your health!";
                Wn = "#F1C34C";
                Fn = +new Date + 3500;
                gs = !1;
                fs = !0;
                Yn = !1;
                xr();
                try {
                    w || setTimeout(factorem.refreshAds.bind(factorem, null, !0), 800)
                } catch (e) {}
                window.setTimeout(function() {
                    if (!gs) {
                        b && Er();
                        y && _r();
                        document.getElementById("startMenuWrapper").style.display = "block";
                        qa(Va);
                        Ts = 0 < o ? "You'll spawn with +" + Ui(o) + " XP!" : "";
                        xs = 0;
                        var e = document.getElementById("spawnXpLabel");
                        e.style.opacity = 0;
                        Ts && setTimeout(function() {
                            gs || (e.style.display = "block", e.style.opacity = 1)
                        }, 1e3);
                        document.getElementById("spawnXpLabel").textContent = Ts;
                        w || (window.onbeforeunload = null)
                    }
                }, 2e3);
                break;
            case 4:
                Tn(e);
                break;
            case 19:
                t = e.readUInt32();
                if (t = Qs[t]) e = e.readString(), t.gotChat(e);
                break;
            case 22:
                e = e.readString();
                t = yi(C.ip);
                nr("mope.io/?s=" + t + "&l=" + e);
                break;
            case 23:
                t = e.readUInt8();
                if (gs) switch (console.log("event msg"), Fn = xn + 3500, t) {
                    case 255:
                        On = e.readString();
                        break;
                    case 2:
                        On = "Ouch! Your tail got bitten!";
                        break;
                    case 12:
                        On = "You've been stung by a jellyfish!";
                        break;
                    case 3:
                        On = "ZAP! You've been shocked by a STINGRAY!";
                        break;
                    case 8:
                        On = "You've been inked!";
                        break;
                    case 5:
                        On = "Oh no! Escape the kraken's pull!";
                        break;
                    case 6:
                        On = "Ouch! Pufferfish are pointy!";
                        break;
                    case 7:
                        On = "That's an octopus in disguise!";
                        break;
                    case 9:
                        On = "Brrr! You've been frozen!";
                        break;
                    case 10:
                        On = "Ahh! The wolf's howl scared you!";
                        break;
                    case 11:
                        On = "Ouch! A VERY LOUD sound hit you!";
                        break;
                    case 13:
                        On = "Ah! You're on fire!";
                        break;
                    case 14:
                        On = "BAM! You got kicked by a donkey!";
                        break;
                    case 16:
                        On = "Ouch! You're getting dragged by a croc!";
                        break;
                    case 17:
                        On = "A fox DUG you out of the hole!";
                        break;
                    case 18:
                        On = "A wave has swept you away!"
                }
                break;
            case 25:
                t = 0 < e.readUInt8(), e = e.readUInt8() / 10, t ? (nn = 1e3 * e, rn = +new Date + 1e3 * e, sn = !0) : (tn = 1e3 * e, an = +new Date + 1e3 * e, en = !0)
        }
    }

    function An(e) {
        cn.send(e.dataView.buffer)
    }

    function Mn() {
        return null != cn && cn.readyState == cn.OPEN
    }
    var xn = +new Date,
        hn = +new Date;

    function Tn(e) {
        hn = xn = +new Date;
        camx_o = ei;
        camy_o = camy;
        camx_n = e.readUInt16() / 4;
        camy_n = e.readUInt16() / 4;
        camzoom_n = e.readUInt16() / 1e3;
        var t = e.readUInt8(),
            a = Ai(t, 0),
            i = Ai(t, 1),
            s = Ai(t, 2);
        ln = Ai(t, 3);
        ys = Ai(t, 7);
        if (!a) {
            var a = en = abil_active = !1,
                n = ta;
            i && (a = Ai(t, 4), en = Ai(t, 5), abil_active = Ai(t, 6), n = e.readUInt8());
            t = sn = abil_dive_active = !1;
            if (s) {
                var r = e.readUInt8(),
                    t = Ai(r, 0);
                sn = Ai(r, 1);
                abil_dive_active = Ai(r, 2)
            }
            ln ? (Es.abil_usable = a, Es.abil_recharging = en, Es.abil_possible = i, Es.abil_active = abil_active, Es.abil_Type = n, Ds.abil_usable = t, Ds.abil_recharging = sn, Ds.abil_possible = s, Ds.abil_active = abil_dive_active, Ds.abil_Type = $t, sn && (Ds.abil_rechargeTotalT = nn, Ds.abil_rechargeEndT = rn), en && (Es.abil_rechargeTotalT = tn, Es.abil_rechargeEndT = an)) : (Ds.abil_usable = a, Ds.abil_recharging = en, Ds.abil_possible = i, Ds.abil_active = abil_active, Ds.abil_Type = n, Es.abil_usable = t, Es.abil_recharging = sn, Es.abil_possible = s, Es.abil_active = abil_dive_active, Es.abil_Type = $t, en && (Ds.abil_rechargeTotalT = tn, Ds.abil_rechargeEndT = an), sn && (Es.abil_rechargeTotalT = nn, Es.abil_rechargeEndT = rn));
            waterBarPerc_n = e.readUInt8();
            xp = e.readUInt32();
            Ps = e.readUInt8()
        }
        i = e.readUInt16();
        for (s = 0; s < i; s++) {
            var n = e.readUInt8(),
                a = e.readUInt32(),
                r = e.readUInt16() / 4,
                l = e.readUInt16() / 4,
                o = e.readUInt16() / 4,
                t = e.readUInt8(),
                h = 0 < Ai(t, 0),
                c = 0 < Ai(t, 1),
                d = 2 * Ai(t, 3) + 1 * Ai(t, 2),
                g = null;
            h && (g = Qs[e.readUInt32()]);
            t = new Fi(a, n, l, o, r);
            r = Qs[a];
            delete Qs[a];
            r = Zs.indexOf(r); - 1 != r && Zs.splice(r, 1);
            Qs[a] = t;
            Zs.push(t);
            g && (t.updateTime = xn, t.nx = t.x, t.ny = t.y, t.ox = g.x, t.oy = g.y, t.x = g.x, t.y = g.y);
            t.curBiome = d;
            n == at && (a = e.readUInt8(), r = e.readString(), a == $e && console.log("Snail nick is '" + r + "', len " + r.length), t.type = a, t.setName(r ? r : "mope.io"));
            c && (t.isRectangle = !0, t.rectW = e.readUInt16(), t.rectH = e.readUInt16());
            if (n == ut) {
                t.type = e.readUInt8();
                if (t.type == va || t.type == ka || t.type == Ea) a = 3 * e.readUInt8() + 180, t.angle = vi(a);
                if (t.type == fa || t.type == ua || t.type == Ea || t.type == Pa || t.type == Ma) t.rad = t.oRad = 0
            }
            n == Lt && (a = e.readUInt8(), t.riverSpecT = a, t.riverFlowSpeedX = 0 == a ? 1 : -1)
        }
        i = e.readUInt16();
        for (s = 0; s < i; s++)
            if (a = e.readUInt32(), l = e.readUInt16() / 4, o = e.readUInt16() / 4, r = e.readUInt16() / 10, t = e.readBitGroup(), n = t.getBool(), c = t.getBool(), t = Qs[a]) t.updateTime = xn, t.ox = t.x, t.oy = t.y, t.nx = l, t.ny = o, t.oRad = t.rad, t.nRad = r, t.flag_hurt = c, n ? (a = e.readUInt8(), .001 > t.hpBarA && (t.hpPer = a), t.hpPer_n = a, t.hpBarTimeoutT = +new Date + 3e3) : t.hpBarTimeoutT = +new Date, t.oType == at && (a = 2 * e.readUInt8(), a = vi(a - 90), t.angleDelta = xi(t.angle, a), t.oAngle = t.angle, t.firstPosUpd && (t.oAngle = t.angle = a, t.angleDelta = 0), a = e.readBitGroup(), t.curBiome = a.getIntWithXBits(3), t.flag_lowWat = a.getBool(), t.flag_underWater = a.getBool(), t.flag_eff_invincible = a.getBool(), t.flag_usingAbility = a.getBool(), t.flag_tailBitten = a.getBool(), t.flag_eff_stunned = a.getBool(), t.flag_iceSliding = a.getBool(), t.flag_eff_frozen = a.getBool(), t.flag_eff_onFire = a.getBool(), t.flag_eff_healing = a.getBool(), t.type == Oe && t.flag_usingAbility && (a = e.readUInt8(), t.octoDisguiseObjT = a)), t.firstPosUpd = !1;
        i = e.readUInt16();
        for (s = 0; s < i; s++) t = e.readUInt32(), a = 0 < e.readUInt8() ? e.readUInt32() : 0, t = Qs[t], a = 0 < a ? Qs[a] : void 0, t && (t.dead = !0, t.updateTime = xn, t.oType == ut ? (t.ox = t.x, t.oy = t.y, t.nx = t.x, t.ny = t.y) : a ? (t.ox = t.x, t.oy = t.y, t.oRad = t.rad, t.nx = a.nx, t.ny = a.ny, t.nRad = Math.min(t.rad, a.rad), t.hp_n = 0) : (t.ox = t.x, t.oy = t.y, t.oRad = t.rad, t.nx = t.x, t.ny = t.y, t.nRad = 0))
    }

    function Sn(e) {
        var t = {};
        switch (e) {
            case $t:
                t.abilName = "Dive";
                t.abilImg = "img/ability_dive.png";
                break;
            case Ta:
                t.abilName = "Dig For Food";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case ia:
                t.abilName = "Shell";
                t.abilImg = "skins/" + Dn(ds).skinName + "2.png";
                break;
            case ka:
                t.abilName = "Bite Drag";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case oa:
                t.abilName = "Disguise";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case Aa:
                t.abilName = "Burrow Hole";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case Ma:
                t.abilName = "Pull from Hole";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case ca:
                t.abilName = "Charge";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case wa:
                t.abilName = "Roll snow";
                t.abilImg = "img/snowball.png";
                break;
            case ma:
                t.abilName = "Throw Snow";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case ya:
                t.abilName = "Drop Snow";
                t.abilImg = "img/snowball.png";
                break;
            case Pa:
                t.abilName = "Loud Noise";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case pa:
                t.abilName = "Claw Slash";
                t.abilImg = "img/ability_claw.png";
                break;
            case na:
                t.abilName = "Ink";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case sa:
                t.abilName = "Shock";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case aa:
                t.abilName = "Hold to Dig";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case ua:
                t.abilName = "Howl";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case xa:
                t.abilName = "Throw Banana";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case Ea:
                t.abilName = "Cause Wave";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case ba:
                t.abilName = "Extra Boost";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case ha:
                t.abilName = "Slide on ice";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case da:
                t.abilName = "Inflate";
                t.abilImg = "skins/" + Dn(ds).skinName + ".png";
                break;
            case Ia:
                t.abilName = "Fire";
                t.abilImg = "img/fire.png";
                break;
            case _a:
                t.abilName = "Fire";
                t.abilImg = "img/fire.png";
                break;
            default:
                t.abilName = "Ability", t.abilImg = "skins/" + Dn(ds).skinName + ".png"
        }
        return t
    }

    function Dn(e) {
        var t = {};
        switch (e) {
            case $e:
                t.aniName = "Snail";
                t.aniDesc = "";
                t.upgradeText = "You're a super slow snail!";
                t.aniCol = "#fcc02b";
                t.skinName = "snail";
                break;
            case he:
                t.aniName = "Mouse";
                t.aniDesc = "";
                t.upgradeText = "";
                t.aniCol = "#9BA9B9";
                t.skinName = "mouse";
                break;
            case ce:
                t.aniName = "Rabbit";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to RABBIT! \nPress W to burrow a hole to hide in!";
                t.aniCol = "#AA937E";
                t.skinName = "rabbit";
                break;
            case de:
                t.aniName = "Pig";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to PIG!\n Pigs move FAST through MUD!";
                t.aniCol = "#DD6BD4";
                t.skinName = "pig";
                break;
            case ge:
                t.aniName = "Fox";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to FOX! ,\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
                t.aniCol = "#FF9D43";
                t.skinName = "fox";
                break;
            case fe:
                t.aniName = "Deer";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to DEER! \nPress W to dig up food! \nDig in mud for better food!\n Hint:Check water areas for new food sources!";
                t.aniCol = "#C4773E";
                t.skinName = "deer";
                break;
            case ue:
                t.aniName = "Mole";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to MOLE!\n Hold W to dig underground!\nGo under anything, do surprise attacks!";
                t.aniCol = "#4C4A45";
                t.skinName = "mole";
                break;
            case me:
                t.aniName = "Zebra";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to ZEBRA! \nPress W to dig up food! \nTip: Dig in mud for better food!";
                t.aniCol = "#FFFFFF";
                t.skinName = "zebra";
                break;
            case pe:
                t.aniName = "Lion";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to LION!\n Press W to release a mighty ROAR (Rawr!)!";
                t.aniCol = "#f8c923";
                t.skinName = "lion";
                break;
            case be:
                t.aniName = "Cheetah";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to CHEETAH!\n Press W to get a speed boost! (Every 8 seconds)!";
                t.aniCol = "#CAC05B";
                t.skinName = "cheetah";
                break;
            case ye:
                t.aniName = "Bear";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to BEAR!\n Bears climb through green hills! (Press W to use your claw!)";
                t.aniCol = "#99591C";
                t.skinName = "bear";
                break;
            case we:
                t.aniName = "Croc";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to CROCODILE!\n Press W to bite and drag around animals! \n+ (Now hide in water spots)+ Swim well in Mud, Lakes & Oceans!";
                t.aniCol = "#30F51C";
                t.skinName = "croc";
                break;
            case Ie:
                t.aniName = "Hippo";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to HIPPO!\nHippos are great swimmers, dominate the Lakes/Oceans/Mud!";
                t.aniCol = "#945A99";
                t.skinName = "hippo";
                break;
            case Pe:
                t.aniName = "Rhino";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to RHINO!\n Press W to CHARGE with your mighty horn!";
                t.aniCol = "#94a3a9";
                t.skinName = "rhino";
                break;
            case ke:
                t.aniName = "Shrimp";
                t.aniDesc = "";
                t.upgradeText = "";
                t.aniCol = "#f88e37";
                t.skinName = "shrimp";
                break;
            case Ae:
                t.aniName = "Trout";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to TROUT!\nHint: Hold Left-click to RUN! (Uses extra water)";
                t.aniCol = "#ac8686";
                t.skinName = "trout";
                break;
            case Me:
                t.aniName = "Crab";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to CRAB!\n Crabs can survive on dry land!\n (On land, Press W to go into your shell!)";
                t.aniCol = "#bf2408";
                t.skinName = "crab";
                break;
            case xe:
                t.aniName = "Squid";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to SQUID!\n Squids can use INK when injured (press W!) \n+ you can hide in plankton bushes!";
                t.aniCol = "#40dda4";
                t.skinName = "squid";
                break;
            case Te:
                t.aniName = "Shark";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to SHARK!\n A vicious predator of the oceans!";
                t.aniCol = "#999fc6";
                t.skinName = "shark";
                break;
            case Ee:
                t.aniName = "Sea-horse";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to SEA HORSE!\n An agile hunter!";
                t.aniCol = "#73BE2F";
                t.skinName = "seahorse";
                break;
            case _e:
                t.aniName = "Jellyfish";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to JELLYFISH!\n A slowly-turning animal that can grow quite large!";
                t.aniCol = "#FDB9BA";
                t.skinName = "jellyfish";
                break;
            case De:
                t.aniName = "Turtle";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to TURTLE!\n Lives well on land & water! (On land, Press W to go into your shell!)";
                t.aniCol = "#502E1A";
                t.skinName = "turtle";
                break;
            case Se:
                t.aniName = "Stringray";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to STINGRAY!\n Use electic shock (Release W key!) to shock animals! \n(Takes time to recharge)";
                t.aniCol = "#164336";
                t.skinName = "stingray";
                break;
            case Be:
                t.aniName = "The Kraken";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to THE KRAKEN!\n Terrorize the oceans, and be feared by all!\n (Release W to use whirlpool ability!)";
                t.aniCol = "#64a034";
                t.skinName = "kraken";
                break;
            case Ue:
                t.aniName = "Pufferfish";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to PUFFERFISH!\n (Hold W to inflate- become spiky, and dangerous to touch!)";
                t.aniCol = "#6C5C2C";
                t.skinName = "pufferfish";
                break;
            case Ce:
                t.aniName = "Killer Whale";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to Killer Whale! \nWhales blow out water when diving! (And sometimes other loot!)";
                t.aniCol = "#141414";
                t.skinName = "killerwhale";
                break;
            case Ne:
                t.aniName = "Swordfish";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n (Press W to rush with your sharp nose!)";
                t.aniCol = "#689CD7";
                t.skinName = "swordfish";
                break;
            case Re:
                t.aniName = "Gorilla";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Gorillas are very fast on hills/trees!\n Press W to throw bananas! (from trees)";
                t.aniCol = "#323232";
                t.skinName = "gorilla";
                break;
            case Oe:
                t.aniName = "Octopus";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to Octopus!\nHold W to use your 'Disguise' ability!\n(Hint: wait for prey to bite you- they get stunned!)";
                t.aniCol = "#ff8340";
                t.skinName = "octopus";
                break;
            case ve:
                t.aniName = "Dragon";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n (You're amazing!) \nFly over everything, Hold W to shoot fire!";
                t.aniCol = "#22FF8A";
                t.skinName = "dragon";
                break;
            case et:
                t.aniName = "Black Dragon";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Black dragons drink lava instead of water! Black dragons only heal on healing stones/lava!";
                t.aniCol = "black";
                t.skinName = "blackdragon";
                break;
            case qe:
                t.aniName = "Arctic Fox";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
                t.aniCol = "#CFCFCF";
                t.skinName = "arctic/arcticfox";
                break;
            case Fe:
                t.aniName = "Arctic Hare";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n \nPress W to burrow a hole to hide in!";
                t.aniCol = "#D5D5D5";
                t.skinName = "arctic/arctichare";
                break;
            case Le:
                t.aniName = "The Yeti!";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n So it really exists... \n Hold W to turn into snow, release W to freeeeeze!";
                t.aniCol = "#839eb5";
                t.skinName = "arctic/yeti";
                break;
            case He:
                t.aniName = "Chipmunk";
                t.aniDesc = "";
                t.upgradeText = "";
                t.aniCol = "#A77C30";
                t.skinName = "arctic/chipmunk";
                break;
            case ze:
                t.aniName = "Muskox";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to charge with your horns! \nPlus move decently on ice!";
                t.aniCol = "#231f18";
                t.skinName = "arctic/muskox";
                break;
            case Ge:
                t.aniName = "Penguin";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
                t.aniCol = "#FFFFFF";
                t.skinName = "arctic/penguin";
                break;
            case je:
                t.aniName = "Polar Bear";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Polar bears can climb hills! \n+ They're amazing swimmers!";
                t.aniCol = "#e4e4e4";
                t.skinName = "arctic/polarbear";
                break;
            case Xe:
                t.aniName = "Seal";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Seals can slide on ice (Hold W) + can climb hills (rocks too!)";
                t.aniCol = "#cfcfcf";
                t.skinName = "arctic/seal";
                break;
            case Ye:
                t.aniName = "Snow leopard";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to get a speed boost! (Every 8 seconds)!";
                t.aniCol = "#cfcfcf";
                t.skinName = "arctic/snowleopard";
                break;
            case Ve:
                t.aniName = "Walrus";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n You can slide on ice (Hold W) + can climb hills (rocks too!)";
                t.aniCol = "#633838";
                t.skinName = "arctic/walrus";
                break;
            case Je:
                t.aniName = "Reindeer";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to dig up food! \n Your sharp hooves let you turn very well on ice!";
                t.aniCol = "#a68976";
                t.skinName = "arctic/reindeer";
                break;
            case We:
                t.aniName = "Wolf";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Wolf paws turn very well on ice!\n Press W to howl!";
                t.aniCol = "#6B6B6B";
                t.skinName = "arctic/wolf";
                break;
            case Ke:
                t.aniName = "Wolverine";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to Let out a Powerful GROWL! (Knocks back prey!)";
                t.aniCol = "#843A0F";
                t.skinName = "arctic/wolverine";
                break;
            case Ze:
                t.aniName = "Mammoth";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to roll snowballs with your trunk!\n The bigger the snowball gets, the longer the freeze!";
                t.aniCol = "#9d4717";
                t.skinName = "arctic/mammoth";
                break;
            case Qe:
                t.aniName = "Donkey";
                t.aniDesc = "";
                t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to Kick any animal behind you";
                t.aniCol = "#8c7c64";
                t.skinName = "donkey";
                break;
            default:
                t.aniName = "(Animal)", t.aniDesc = "", t.upgradeText = "UPGRADED!"
        }
        return t
    }

    function En(e, t) {
        crossHx = e;
        crossHy = t;
        crossL = 30;
        La.beginPath();
        La.moveTo(crossHx, crossHy - crossL / 2);
        La.lineTo(crossHx, crossHy + crossL / 2);
        La.stroke();
        La.moveTo(crossHx - crossL / 2, crossHy);
        La.lineTo(crossHx + crossL / 2, crossHy);
        La.stroke()
    }

    function _n(e, t, a, i, s, n) {
        if (!Ki) {
            La.save();
            var r = a - e,
                l = i - t,
                o = ci / 2 / $a,
                h = di / 2 / $a;
            e = Math.max(e, ei - o - s + 0);
            t = Math.max(t, camy - h - n + 0);
            a = Math.min(a, ei + o - s - 0);
            i = Math.min(i, camy + h - n - 0);
            La.strokeStyle = "black";
            La.globalAlpha = .055;
            a -= e;
            fillH = i - t;
            for (i = -.5 + e + (r - e) % 30; i < e + a; i += 30) La.beginPath(), La.moveTo(i, t), La.lineTo(i, t + fillH), La.stroke();
            for (dy = -.5 + t + (l - t) % 30; dy < t + fillH; dy += 30) La.beginPath(), La.moveTo(e, dy), La.lineTo(e + a, dy), La.stroke();
            La.restore()
        }
    }
    var Bn = 250,
        Un = 250;

    function Cn(e) {
        Bn = gi / fi * Un;
        Fa = document.createElement("canvas");
        Fa.width = Bn;
        Fa.height = Un;
        var t = Fa.getContext("2d");
        t.globalAlpha = .35;
        t.fillStyle = "#000000";
        t.fillRect(0, 0, Fa.width, Fa.height);
        for (var a = Bn / 200, i = Un / 200, s = e.readUInt16(), n = e.readUInt16(), r = e.readUInt16(), l = 0; 2 > l; l++) {
            t.fillStyle = $;
            t.globalAlpha = .5;
            var o = Bn / gi;
            0 == l ? t.fillRect(0 * o, r * o, s * o, fi * o) : t.fillRect((gi - s) * o, r * o, s * o, fi * o)
        }
        t.fillStyle = "white";
        t.globalAlpha = .5;
        o = Bn / gi;
        t.fillRect((gi / 2 - n / 2) * o, 0 * o, n * o, r * o);
        s = e.readUInt16();
        t.fillStyle = $;
        t.globalAlpha = .5;
        for (l = 0; l < s; l++) {
            var n = e.readUInt16() * (Bn / gi),
                r = e.readUInt16() * (Un / fi),
                o = e.readUInt16() * (Bn / gi),
                h = e.readUInt16() * (Un / fi);
            t.globalAlpha = .5;
            t.fillRect(o - n / 2, h - r / 2, n, r)
        }
        l = 5 * e.readUInt8();
        s = e.readUInt16() * (Bn / gi);
        n = e.readUInt16() * (Un / fi);
        t.fillStyle = Z;
        t.globalAlpha = .5;
        t.beginPath();
        t.arc(s, n, Math.max(1, Bn / gi * l), 0, 2 * Math.PI);
        t.fill();
        s = e.readUInt16();
        t.fillStyle = K;
        t.globalAlpha = .5;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, o = 5 * e.readUInt8(), t.beginPath(), t.arc(n, r, Math.max(1, Bn / gi * o), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = "#907A33";
        t.globalAlpha = .7;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, o = 5 * e.readUInt8(), t.beginPath(), t.arc(n, r, Math.max(1, Bn / gi * o), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = "#7BB7BB";
        t.globalAlpha = .85;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, o = 5 * e.readUInt8(), t.beginPath(), t.arc(n, r, Math.max(1, Bn / gi * o), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = Y;
        t.globalAlpha = 1;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, o = 5 * e.readUInt8(), t.beginPath(), t.arc(n, r, Math.max(1, Bn / gi * o), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = "#A89937";
        t.globalAlpha = .6;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, o = 5 * e.readUInt8(), t.beginPath(), t.arc(n, r, Math.max(1, Bn / gi * o), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = te;
        t.globalAlpha = 1;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, t.beginPath(), t.arc(n, r, Math.max(2.5, Bn / gi * 40), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = ie;
        t.globalAlpha = 1;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, t.beginPath(), t.arc(n, r, Math.max(2.5, Bn / gi * 40), 0, 2 * Math.PI), t.fill();
        s = e.readUInt16();
        t.fillStyle = K;
        t.globalAlpha = 1;
        for (l = 0; l < s; l++) n = e.readUInt8() * a, r = e.readUInt8() * i, t.beginPath(), t.arc(n, r, Math.max(2.5, Bn / gi * 50), 0, 2 * Math.PI), t.fill()
    }

    function Nn(e, t, a) {
        Wa = null;
        if (0 != e.length) {
            Wa = document.createElement("canvas");
            t = Wa.getContext("2d");
            var i;
            i = 55 + 22 * e.length;
            Wa.width = 220;
            Wa.height = i;
            t.globalAlpha = .35;
            t.fillStyle = "#000000";
            t.fillRect(0, 0, 200, i);
            t.globalAlpha = 1;
            t.fillStyle = "#FFFFFF";
            i = "Top Players";
            t.font = "27px Arial";
            Ki || (t.shadowOffsetX = 1, t.shadowOffsetY = 1);
            t.shadowColor = "black";
            t.fillText(i, 95 - t.measureText(i).width / 2, 40);
            var s;
            t.textAlign = "left";
            t.font = "17px Arial";
            for (s = 0; s < e.length; ++s) i = qi ? "" : e[s].name || "mope.io", a == e[s].rank ? (t.fillStyle = "#FEED92", qi && (i = "you")) : t.fillStyle = "#FFFFFF", i = e[s].rank + ". " + i + " (" + Ui(e[s].score) + (gameMode == Ua ? " kills" : "") + ")", t.fillText(i, 15, 65 + 22 * s)
        }
    }

    function Rn() {
        La.save();
        if (gs) {
            ws += .1 * (waterBarPerc_n - ws);
            xpPer += .03 * (Ps - xpPer);
            var e = Qs[cs];
            e && (ds = e.type);
            var t = 1,
                a = 25 >= ws;
            a && (t = .7 + .3 * Math.sin(2 * Math.PI / 1.2 * (xn / 1e3)));
            var i = Math.min(450, .9 * ci) * ti,
                s = 30 * ti,
                n = ci / 2,
                r = di - 60 * ti;
            La.globalAlpha = .35 * t;
            La.fillStyle = "#000000";
            La.fillRect(n - i / 2, r - s / 2, i, s);
            La.globalAlpha = t;
            La.fillStyle = ds == et ? Z : ys ? "#8CCEF4" : K;
            La.fillRect(n - i / 2, r - s / 2, ws / 100 * i, s);
            La.fillStyle = oi ? a ? te : "orange" : a ? te : "white";
            La.globalAlpha = 1 * t;
            Is.setText(ys ? a ? "LOW Air" : "Air" : e && e.type == et ? a ? "LOW Lava" : "Lava" : a ? "LOW Water" : "Water");
            Is.setFontSize(22 * ti);
            Is.setColor(a ? te : "white");
            Is.x = n;
            Is.y = r;
            La.globalAlpha *= a ? 1 : .5;
            Is.draw();
            La.globalAlpha = .35;
            La.fillStyle = "#000000";
            r = di - s / 2 - 5;
            i = .9 * ci;
            La.fillRect(n - i / 2, r - s / 2, i, s);
            La.globalAlpha = 1;
            La.fillStyle = "#F3C553";
            La.fillRect(n - i / 2, r - s / 2, xpPer / 100 * i, s);
            La.globalAlpha = 1;
            vs.setText("" + Ui(xp) + " xp  (" + Ui(Xs) + " xp Next Animal)");
            vs.setFontSize(22 * ti);
            vs.x = n;
            vs.y = r;
            vs.draw();
            for (e = 0; e < Ss.length; e++) Ss[e].draw();
            Ga && (zs += .1 * ((Ns ? 1 : 0) - zs), .005 < zs && gs && (La.globalAlpha = .3 * zs, La.beginPath(), La.arc(Os, Ws, Hs * za, 0, 2 * Math.PI), La.fillStyle = "#000000", La.fill(), La.globalAlpha = .5 * zs, La.beginPath(), La.arc(Fs, Ls, Hs * za * .57, 0, 2 * Math.PI), La.fillStyle = "#000000", La.fill(), e = .3 * js, js -= e, Gs += e, joystickDistF += .1 * (joystickDistF_n - joystickDistF), La.save(), La.translate(ci / 2, di / 2), La.rotate(Gs), La.globalAlpha = .5 * zs, La.beginPath(), La.fillStyle = "#000000", e = 40 * za, Qs[cs] && (e = (9 + Qs[cs].rad) * $a), e *= .1 + .9 * joystickDistF, t = 15 * za, La.moveTo(e + 30 * za * (.2 + .8 * joystickDistF), 0), La.lineTo(e, t / 2), La.lineTo(e, -t / 2), La.closePath(), La.fill(), La.restore()))
        }
        La.restore()
    }
    var On = "Ready to survive!",
        Wn = "white",
        Fn = +new Date + 0,
        Ln = [],
        Hn = +new Date + 0,
        zn = 0,
        Gn = 100,
        jn = 2,
        Xn = !1,
        Yn = !1,
        Vn = 0,
        Jn = [],
        qn = !1,
        Kn = 0,
        Zn = 0;

    function Qn(e, t) {
        On = e;
        Fn = +new Date + t
    }

    function $n() {
        var e = (Fn - xn) / 1e3 / 1,
            e = 0 > e ? 0 : 1 < e ? 1 : e;
        0 < e && (La.save(), La.globalAlpha = e, ks.setText(On), ks.setColor(Wn), ks.setFontSize(25 * ti), ks.x = ci / 2, ks.y = .3 * di, ks.draw(), La.restore());
        e = 0 < Hn - xn ? 1 : 0;
        zn += .1 * (e - zn);
        if (.01 < zn && !Ki) {
            if (0 < Ln.length) {
                La.save();
                La.translate(ci / 2, di * (.7 + .5 * (1 - zn)));
                La.scale(jn * ti, jn * ti);
                La.globalAlpha = .2 * zn;
                La.fillStyle = "black";
                var t = Gn + 15 / jn,
                    a = 40 + 10 / jn;
                La.fillRect(-t / 2, -a / 2, t, a);
                La.globalAlpha = zn;
                for (e = 0; e < Ln.length; e++) {
                    var i = Ln[e];
                    i.draw()
                }
            }
            if (e = ui("./img/instr_eatsymbol.png")) i = a / e.height * zn, La.drawImage(e, -t / 2 - e.width * i - 15, -a / 2, e.width * i, e.height * i);
            Xn && (La.save(), La.fillStyle = "#52EB59", La.font = 16 * ti + "px Arial", La.lineWidth = 1, La.textAlign = "center", La.textBaseline = "middle", Ki || (La.shadowOffsetX = 1, La.shadowOffsetY = 1, La.shadowColor = "black"), La.fillText("HINT: Edible food is outlined LIGHT-GREEN!", 0, -45), La.restore());
            La.restore()
        }
        e = Yn ? 1 : 0;
        Vn += .1 * (e - Vn);
        if (.01 < Vn) {
            if (0 < Jn.length) {
                La.save();
                La.translate(0, -.5 * di * (1 - Vn));
                for (var t = 170 * ti, a = t + 20, s = ci / 2 - (Math.max(0, Jn.length - 1) * (10 + t) + (a - t)) / 2, e = 0; e < Jn.length; e++) i = Jn[e], i.buttonScaleF = 0 == e ? a / t : 1, i.w = t, i.h = t, i.x = s, i.y = .25 * di, s += i.w / 2 * i.buttonScaleF + t / 2 + 10;
                La.globalAlpha = Vn;
                for (e = 0; e < Jn.length; e++) i = Jn[e], i.draw()
            }
            t = Math.max(0, Zn - xn) / 1e3;
            a = 1;
            0 != t && 8 > t && (a = .7 + .3 * Math.sin(2 * Math.PI / 1.2 * (xn / 1e3)));
            La.save();
            La.globalAlpha = Vn * a;
            La.fillStyle = 0 != t && 8 > t ? "red" : "white";
            La.font = 25 * ti + "px Arial";
            La.lineWidth = 1;
            La.textAlign = "center";
            La.textBaseline = "middle";
            Ki || (La.shadowOffsetX = 1, La.shadowOffsetY = 1, La.shadowColor = "black");
            t = 0 < t ? " (auto in " + Math.trunc(t) + "s)" : "";
            La.fillText(qn ? "Choose which animal to spawn as:" : "Choose an upgrade:" + t, ci / 2, Jn[0].y - Jn[0].w / 2 - 25);
            La.restore();
            La.restore()
        }
    }
    var er = +new Date;

    function tr(t) {
        xn = +new Date;
        window.requestAnimationFrame(tr);
        1 != La.globalAlpha && (La.setTransform(1, 0, 0, 1, 0, 0), La.globalAlpha = 1);
        La.clearRect(0, 0, ci, di);
        t = (xn - hn) / 1e3 / .2;
        t = 0 > t ? 0 : 1 < t ? 1 : t;
        ei = t * (camx_n - camx_o) + camx_o;
        camy = t * (camy_n - camy_o) + camy_o;
        $a = (25 * $a + camzoom_n) / 26;
        Pr();
        La.save();
        t = ci / 2;
        var a = di / 2;
        La.translate(t * (1 - $a) + (t - ei) * $a, a * (1 - $a) + (a - camy) * $a);
        La.scale($a, $a);
        La.save();
        ms ? (t = 10, t = 600, La.globalAlpha = 1, La.fillStyle = Y, La.fillRect(0, 0 - t, gi, t), La.fillRect(0, fi, gi, t), La.fillRect(-t, -t, t, fi + 2 * t), La.fillRect(gi, -t, t, fi + 2 * t)) : _n(kr(0), Ar(0), kr(ci), Ar(di), 0, 0);
        La.restore();
        t = Zs.slice();
        for (var a = [it, ot, Gt], i = {}, s = 0; s < a.length; s++) {
            var n = new Li;
            i[a[s]] = n;
            t.push(n)
        }
        for (d = t.length - 1; 0 <= d; d--)
            for (s = t[d], e = 0; e < a.length; e++)
                if (n = a[e], n == s.oType && !(s instanceof Li)) {
                    i[n].addBatchedObj(s);
                    t.splice(d, 1);
                    break
                }
        $s = [];
        for (d = 0; d < t.length; d++) t[d].updateZ();
        t.sort(function(e, t) {
            return e.z == t.z ? e.id - t.id : e.z - t.z
        });
        for (d = 0; d < t.length; d++) s = t[d], s.draw();
        if (!qi)
            for (d = 0; d < t.length; d++) "undefined" != typeof t[d].chatLines && t[d].drawChat();
        for (d = 0; d < $s.length; d++) t = $s[d], Qs.hasOwnProperty(t.id) && delete Qs[t.id], t = Zs.indexOf(t), -1 != t && Zs.splice(t, 1);
        La.restore();
        gs && (Wa && Wa.width && La.drawImage(Wa, 10 * za, 10 * za, Wa.width * ti, Wa.height * ti), Fa && Fa.width && La.drawImage(Fa, ci - (10 * za + Fa.width * ti), 10 * za, Bn * ti, Un * ti), t = Qs[cs]) && (La.fillStyle = "white", La.beginPath(), La.arc(ci - (10 * za + Fa.width * ti) + t.x * Fa.width * ti / gi, 10 * za + t.y * Fa.height * ti / fi, 3, 0, 2 * Math.PI), La.fill());
        $n();
        Rn();
        370 < dr && !gs && (Ki && (ts += 1, 1e3 < xn - is && (is = +new Date, As.setText(ts + " fps"), ts = 0), rs += 1), As.setFontSize(15 * ti), As.x = ci - 5 - As.width / 2, As.y = di - 2 - As.height / 2, As.draw())
    }
    window.requestAnimationFrame ? window.requestAnimationFrame(tr) : setInterval(draw, 1e3 / 60);
    var ar = 0;

    function ir(e) {
        if (Mn() && !gs) {
            playerName = nickInput.value.replace(/(<([^>]+)>)/gi, "").substring(0, 20);
            var t = 9 + Si(playerName).length + 1;
            null != M && null != x && (t += Si(x).length + 2);
            mes = new Gi(t);
            mes.writeUInt8(2);
            mes.writeString(playerName);
            mes.writeUInt16(ci);
            mes.writeUInt16(di);
            mes.writeUInt8(A ? 1 : 0);
            mes.writeUInt8(e ? 1 : 0);
            A && mes.writeString(x);
            An(mes);
            if (!e && window.localStorage) try {
                window.localStorage.setItem("nick", playerName + "")
            } catch (e) {}
        }
    }

    function sr() {
        document.getElementById("partyLinkOpenBut") && (document.getElementById("partyLinkOpenBut").style.display = "block", document.getElementById("partyLinkClicked").style.display = "none")
    }
    document.getElementById("partyLinkOpenBut") && (document.getElementById("partyLinkOpenBut").onclick = function() {
        us && (document.getElementById("partyLinkOpenBut") && (document.getElementById("partyLinkOpenBut").style.display = "none", document.getElementById("partyLinkClicked").style.display = "block"), newMsg = new Gi(1), newMsg.writeUInt8(22), An(newMsg))
    });

    function nr(e) {
        var t = document.getElementById("partyLinkTxt");
        t.value = e;
        t.setSelectionRange(0, t.value.length);
        t.focus();
        t.setSelectionRange(0, t.value.length)
    }
    document.getElementById("partyLinkCopyBut") && (document.getElementById("partyLinkCopyBut").onclick = function() {
        var e = document.getElementById("partyLinkTxt");
        e.focus();
        e.setSelectionRange(0, e.value.length);
        try {
            document.execCommand("copy"), partyLinkCopyBut.text = "Copied!", setTimeout(function() {
                partyLinkCopyBut.text = "Copy"
            }, 1e3)
        } catch (e) {}
    });
    document.getElementById("startButton").onclick = function() {
        xr();
        var e = ja("audio/click.mp3");
        if (e) try {
            e.play()
        } catch (e) {}!Wr && us && (Fr() ? Gr() : ir(!1))
    };
    var rr = document.getElementById("button_GMsandbox");
    rr && (rr.onclick = function() {
        Qa(Ua)
    });
    if (rr = document.getElementById("button_GMnormal")) rr.onclick = function() {
        Qa(Ba)
    };
    if (rr = document.getElementById("button_mute")) rr.onclick = function() {
        $i = !$i;
        Ka();
        try {
            window.localStorage.setItem("options_musicMuted", $i ? 1 : 0)
        } catch (e) {}
    };
    document.getElementById("settingsButton").onclick = function() {
        var e = document.getElementById("optionsDiv");
        e.style.display = "block" == e.style.display ? "none" : "block";
        if (e = ja("audio/click.mp3")) try {
            e.play()
        } catch (e) {}
    };
    document.getElementById("closeBut").onclick = function() {
        var e = document.getElementById("optionsDiv");
        e.style.display = "block" == e.style.display ? "none" : "block";
        if (e = ja("audio/click.mp3")) try {
            e.play()
        } catch (e) {}
    };
    document.getElementById("options_noImages").onchange = function() {
        if (window.localStorage) {
            Ji = document.getElementById("options_noImages").checked;
            try {
                window.localStorage.setItem("options_noImages", Ji ? 1 : 0)
            } catch (e) {}
            console.log("options_noimages: saved as " + window.localStorage.getItem("options_noImages"))
        }
    };
    document.getElementById("options_noNames").onchange = function() {
        if (window.localStorage) {
            qi = document.getElementById("options_noNames").checked;
            try {
                window.localStorage.setItem("options_noNames", qi ? 1 : 0)
            } catch (e) {}
            console.log("options_noNames: saved as " + window.localStorage.getItem("options_noNames"))
        }
    };
    document.getElementById("options_lowGraphics").onchange = function() {
        if (window.localStorage) {
            Ki = document.getElementById("options_lowGraphics").checked;
            try {
                window.localStorage.setItem("options_lowGraphics", Ki ? 1 : 0)
            } catch (e) {}
            fr();
            console.log("options_lowGraphics: saved as " + window.localStorage.getItem("options_lowGraphics"))
        }
    };
    document.getElementById("options_noJoystick").onchange = function() {
        if (window.localStorage) {
            Zi = document.getElementById("options_noJoystick").checked;
            try {
                window.localStorage.setItem("options_noJoystick", Zi ? 1 : 0)
            } catch (e) {}
            fr();
            console.log("options_noJoystick: saved as " + window.localStorage.getItem("options_noJoystick"))
        }
    };
    var lr = document.getElementById("options_leftHanded");
    lr && (lr.onchange = function() {
        if (window.localStorage) {
            Qi = lr.checked;
            try {
                window.localStorage.setItem("options_leftHanded", Qi ? 1 : 0)
            } catch (e) {}
            fr();
            console.log("options_leftHanded: saved as " + window.localStorage.getItem("options_leftHanded"))
        }
    });
    var or = !1,
        hr = !1;
    document.onkeydown = function(e) {
        xr();
        var t = e.keyCode || e.which;
        if (!or && gs) switch (t) {
            case 32:
                e.preventDefault();
                wr(ur, !0);
                break;
            case 87:
                e.preventDefault();
                wr(mr, !0);
                break;
            case 83:
                e.preventDefault();
                wr(yr, !0);
                break;
            case 27:
                i && (e.preventDefault(), hr = !hr, Qn("Movement Lock (ESC KEY): " + (hr ? "ON" : "OFF"), 2500))
        }
    };
    document.onkeyup = function(e) {
        var t = e.keyCode || e.which;
        if (13 == t) {
            if (!gs && !Yn) {
                document.getElementById("startButton").click();
                return
            }
            if (Yn) {
                Ni(Jn[0]);
                return
            }
        }
        if (gs)
            if (t = e.keyCode || e.which, 13 == t) cr();
            else if (!or && gs) switch (t) {
            case 32:
                e.preventDefault();
                wr(ur, !1);
                break;
            case 87:
                e.preventDefault();
                wr(mr, !1);
                break;
            case 38:
                e.preventDefault();
                wr(pr, !1);
                break;
            case 40:
                e.preventDefault(), wr(br, !1)
        }
    };

    function cr() {
        var e = document.getElementById("chatinput");
        if (!or && gs) e.style.visibility = "visible", e.focus(), or = !0, e.onblur = function() {
            or && cr()
        };
        else if (or) {
            var t = e.value + "";
            or = !1;
            e.style.visibility = "hidden";
            e.blur();
            0 < t.length && gs && (newMsg = new Gi(3 + Si(t).length), newMsg.writeUInt8(19), newMsg.writeString(t), An(newMsg));
            e.value = ""
        }
    }
    window.onresize = fr;
    var dr = 100,
        gr = 100;

    function fr() {
        dr = window.innerWidth;
        gr = window.innerHeight;
        za = window.devicePixelRatio;
        ci = dr * za;
        di = gr * za;
        Oa.width = ci;
        Oa.height = di;
        Oa.style.width = dr + "px";
        Oa.style.height = gr + "px";
        document.getElementById("chatinput").style.marginTop = gr / 2 - 50 + "px";
        _s.w = _s.h = 95 * za;
        Ds.w = Ds.h = 95 * za;
        Es.w = Es.h = 95 * za;
        Bs.w = 60 * za;
        Bs.h = 30 * za;
        _s.x = 25 * za + _s.w / 2;
        _s.y = di - (40 * za + _s.w / 2);
        Qi && (_s.x = ci - _s.x);
        Ds.x = _s.x;
        Ds.y = Ga ? _s.y - (10 * za + Ds.w / 2 + _s.w / 2) : _s.y;
        Es.x = _s.x;
        Es.y = Ds.y - (10 * za + Es.w / 2 + Ds.w / 2);
        Bs.x = 72.5 * za + 125 * za;
        Bs.y = 15 * za + Bs.h / 2;
        Us.setPosAndSize(Bs.x - (Bs.w / 2 + 10 * za), Bs.y, 60 * za, 30 * za, 1, .5);
        Cs.setPosAndSize(Us.x, Us.y + Us.h / 2 + 10 * za, 60 * za, 30 * za, .5, 0);
        for (var e = 0; e < Ss.length; e++) Ss[e].visible = Ga;
        Ds.visible = !0;
        Es.visible = !0;
        Us.visible = Us.touchEnabled = Ga;
        Cs.visible = Cs.touchEnabled = Ga && i;
        ti = Math.max(ci / 1344, di / 756);
        ti = Math.min(1, Math.max(.4, ti * za));
        500 > Math.min(dr, gr) && (ti = za / 2 * .9);
        Mn() && (mes = new Gi(5), mes.writeUInt8(17), mes.writeUInt16(ci), mes.writeUInt16(di), An(mes))
    }
    var ur = 1,
        mr = 2,
        pr = 3,
        br = 4,
        yr = 5;

    function wr(e, t) {
        switch (e) {
            case ur:
                oi != t && Mn() && gs && (t && Mr(), mes = new Gi(2), mes.writeUInt8(21), mes.writeUInt8(t ? 1 : 0), An(mes));
                oi = t;
                break;
            case mr:
                hi != t && Mn() && gs && (t && Mr(), mes = new Gi(2), mes.writeUInt8(20), mes.writeUInt8(t ? 1 : 0), An(mes));
                hi = t;
                break;
            case pr:
                i && gs && (mes = new Gi(1), mes.writeUInt8(26), An(mes));
                break;
            case br:
                i && gs && (mes = new Gi(1), mes.writeUInt8(27), An(mes));
                break;
            case yr:
                gs && (mes = new Gi(1), mes.writeUInt8(28), An(mes))
        }
    }
    Oa.addEventListener("gesturestart", function(e) {
        e.preventDefault()
    });
    Oa.ontouchstart = function(e) {
        xr();
        if (gs) {
            for (var t = 0; t < e.changedTouches.length; t++)
                for (var a = e.changedTouches[t], i = 0; i < Ss.length; i++) {
                    var s = Ss[i];
                    if (s.testPosHitsButton(a.clientX * za, a.clientY * za) && !s.pressed && s.touchEnabled) {
                        e.preventDefault();
                        s.pressed = !0;
                        s.pressedTouchID = a.identifier;
                        s.onButtonTouchStart();
                        return
                    }
                }
            Zi || Ns ? (ai = e.touches[0].clientX * za, ii = e.touches[0].clientY * za, Pr()) : (a = e.changedTouches[0], Ns = !0, Os = a.clientX * za, Ws = a.clientY * za, Fs = Os, Ls = Ws, Rs = a.identifier)
        }
    };
    Oa.ontouchmove = function(e) {
        xr();
        e.preventDefault();
        for (var t = 0; t < e.changedTouches.length; t++) {
            var a = e.changedTouches[t];
            if (a.identifier == Ds.pressedTouchID) {
                if (-1 == _s.pressedTouchID) {
                    var i = _s.testPosHitsButton(a.clientX * za, a.clientY * za),
                        a = _s.pressed;
                    (_s.pressed = i) && !a ? wr(ur, !0) : !i && a && wr(ur, !1)
                }
            } else if (Zi) ai = a.clientX * za, ii = a.clientY * za, Pr();
            else if (Ns && a.identifier == Rs) {
                var i = a.clientX * za - Os,
                    a = a.clientY * za - Ws,
                    s = Math.sqrt(i * i + a * a);
                if (0 < s) {
                    var i = i / s,
                        a = a / s,
                        s = Math.min(1, s / (Hs * za)),
                        n = Math.pow(s, 3);
                    .1 > n && (n = 0);
                    n *= 300 * za;
                    js = xi(Gs, Math.atan2(a, i));
                    joystickDistF_n = s;
                    Fs = Os + Hs * za * i * s;
                    Ls = Ws + Hs * za * a * s;
                    ai = ci / 2 + i * n;
                    ii = di / 2 + a * n;
                    Pr()
                }
            }
        }
    };
    Oa.ontouchend = function(e) {
        if (Ga && gs)
            for (var t = 0; t < e.changedTouches.length; t++) {
                var a = e.changedTouches[t];
                if (Ns && a.identifier == Rs) Ns = !1, Rs = -1;
                else
                    for (var i = 0; i < Ss.length; i++) {
                        var s = Ss[i];
                        if (s.pressed && s.pressedTouchID == a.identifier && s.touchEnabled) {
                            s.pressed = !1;
                            s.pressedTouchID = -1;
                            s.onButtonTouchEnd();
                            return
                        }
                    }
            }
    };
    Oa.ontouchcancel = function(e) {
        console.log("touch cancel");
        Oa.ontouchend(e)
    };
    Oa.ontouchleave = function(e) {
        console.log("touch leave")
    };
    Oa.onmousemove = function(e) {
        ai = e.clientX * za;
        ii = e.clientY * za;
        Pr();
        bs || xr();
        if (Yn && 650 < xn - Kn)
            for (var t = 0; t < Jn.length; t++) {
                var a = Jn[t];
                a.isHighLighted = a.testPosHitsButton(ai, ii)
            }
        e.preventDefault()
    };
    Oa.onmousedown = function(e) {
        xr();
        1 == e.which && wr(ur, !0);
        3 == e.which && wr(mr, !0);
        e.preventDefault()
    };
    Oa.onmouseup = function(e) {
        if (1 == e.which && (wr(ur, !1), Yn && 650 < xn - Kn)) {
            ai = e.clientX * za;
            ii = e.clientY * za;
            for (var t = 0; t < Jn.length; t++) {
                var a = Jn[t];
                if (a.testPosHitsButton(ai, ii)) {
                    Ni(a);
                    break
                }
            }
        }
        3 == e.which && wr(mr, !1);
        e.preventDefault()
    };
    Oa.onblur = function(e) {
        wr(ur, !1);
        wr(mr, !1)
    };
    window.onfocus = function(e) {
        xr()
    };
    window.onmouseout = function(e) {
        null == e.toElement && null == e.relatedTarget && (wr(ur, !1), wr(mr, !1))
    };
    document.oncontextmenu = document.body.oncontextmenu = function() {
        return !gs
    };

    function Pr() {
        var e = ci / 2,
            t = di / 2;
        ri = si;
        li = ni;
        si = (ai - (e - ei * $a)) / $a;
        ni = (ii - (t - camy * $a)) / $a
    }

    function Ir(e) {
        return e * $a + (ci / 2 - ei * $a)
    }

    function vr(e) {
        return e * $a + (di / 2 - camy * $a)
    }

    function kr(e) {
        return (e - (ci / 2 - ei * $a)) / $a
    }

    function Ar(e) {
        return (e - (di / 2 - camy * $a)) / $a
    }

    function Mr() {
        if (hr) {
            var e = Qs[cs];
            if (e) si = e.x, ni = e.y + 2;
            else return
        }
        Mn() && gs && (.1 < Math.abs(ri - si) || .1 < Math.abs(li - ni)) && (mes = new Gi(6), mes.writeUInt8(5), mes.writeInt16(si), mes.writeInt16(ni), An(mes))
    }
    setInterval(Mr, 20);

    function xr() {
        ps = +new Date;
        bs && (bs = !1, w || (window.onbeforeunload = null), document.getElementById("connecting").style.visibility = "visible", window.location.reload())
    }
    setInterval(function() {
        +new Date - ps > 6e4 * (gs ? 2400 : 10) && !bs && us && (console.log("Disconnected for afk..."), bs = !0, Mn() && cn.close())
    }, 5e3);

    function Tr() {
        fr();
        Qs = {};
        Zs = [];
        $s = [];
        Ps = xpPer = xp = waterBarPerc_n = ws = 0;
        Wa = null;
        if (!A) {
            Ts = "";
            var e = document.getElementById("spawnXpLabel");
            e.style.display = Ts ? "block" : "none";
            e.textContent = Ts
        }
        for (e = 0; e < Ss.length; e++) Ss[e].pressed = !1;
        Yn = Ns = !1;
        Vn = 0;
        Jn = [];
        qn = !1
    }
    window.onload = function() {
        fr();
        if (window.localStorage) {
            var e = document.getElementById("nickInput");
            e.value = window.localStorage.getItem("nick");
            e.setSelectionRange(0, e.value.length);
            Ga || e.focus()
        }
    };
    var Sr;

    function Dr(e) {
        if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
        if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
        window.WVJBCallbacks = [e];
        var t = document.createElement("iframe");
        t.style.display = "none";
        t.src = "wvjbscheme://__BRIDGE_LOADED__";
        document.documentElement.appendChild(t);
        setTimeout(function() {
            document.documentElement.removeChild(t)
        }, 0)
    }
    b && Dr(function(e) {
        Sr = e;
        e.registerHandler("testJavascriptHandler", function(e, t) {
            console.log("ObjC called testJavascriptHandler with", e);
            t({
                "Javascript Says": "Right back atcha!"
            })
        })
    });

    function Er() {
        Sr && b && Sr.callHandler("adShowCallBack", {
            foo: "bar"
        }, function(e) {
            console.log("JS got response " + e)
        })
    }

    function _r() {
        console.log("Showing ad android...");
        window.location = "myscheme://showAdmob"
    }
    var Br = 0,
        Ur = 0;
    if (window.localStorage) var Cr = 1 * window.localStorage.getItem("lastAdShowT") || 0,
        Nr = +new Date - Cr,
        Ur = 0 < Nr ? Cr : 0,
        Br = 1 * window.localStorage.getItem("gamesSinceAd");
    var Rr = 0,
        Or = +new Date,
        Wr = !1;

    function Fr() {
        return Hr() ? I ? (console.log("videoAd: test mode, always show video ad!"), !0) : 1 > Rr && 0 == Ur ? (console.log("videoAd: no show: NEW PLAYER, no games yet started!"), !1) : 300 < (+new Date - Ur) / 1e3 && 0 < Br ? (console.log("videoAd: show: time limit passed!"), !0) : 3 <= Br ? (console.log("videoAd: show: 3+ games passed!"), !0) : !1 : (console.log("videoAd: no show: ads disabled"), !1)
    }
    var Lr = !0;

    function Hr() {
        var e = P && !w && !i;
        return Lr ? e && "undefined" != typeof adplayer : e
    }

    function zr() {
        Lr && Xr("//api.adinplay.com/player/v2/MOP/mope.io/player.min.js", function() {
            "undefined" != typeof aipPlayer ? (console.log("Loading video preroll..."), adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: !1,
                PREROLL_ELEM: document.getElementById("preroll"),
                AIP_COMPLETE: function() {
                    console.log("Video ad finished.");
                    jr(!0)
                }
            })) : (console.log("Video ad (blocked) -finished."), jr(!1))
        })
    }

    function Gr() {
        Xa && (Xa.volume = .2);
        Wr = !0;
        document.getElementById("startMenuWrapper").style.display = "none";
        Lr ? adplayer.startPreRoll() : (document.getElementById("pvVidContainer").style.display = "block", Kr())
    }

    function jr(e) {
        if (Wr) {
            Wr = !1;
            Lr || (document.getElementById("pvVidContainer").style.display = "none", document.getElementById("my-content-2").style.display = "none");
            if (e && (Br = 0, Ur = +new Date, window.localStorage)) try {
                window.localStorage.setItem("lastAdShowT", Ur), window.localStorage.setItem("gamesSinceAd", Br)
            } catch (e) {}
            Xa && (Xa.volume = .7);
            var t = ja("audio/click.mp3");
            if (t) try {
                t.play()
            } catch (e) {}
            console.log("Video done (success: " + e + "), joining game!");
            ir(!1)
        } else console.log("ad isn't playing!")
    }

    function Xr(e, t) {
        var a = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("script"),
            s = !0;
        i.async = "async";
        i.type = "text/javascript";
        i.charset = "UTF-8";
        i.src = e;
        i.onload = i.onreadystatechange = function() {
            !s || i.readyState && !/loaded|complete/.test(i.readyState) || (s = !1, t(), i.onload = i.onreadystatechange = null)
        };
        a.appendChild(i)
    }
    P && !w && zr();
    var Yr = !1,
        Vr = null,
        Jr = "player-2",
        qr = !0;

    function Kr(e) {
        adSuccess = !1;
        e = document.getElementById("pvVidContainer");
        Vr = setTimeout(function() {
            console.log("Error: ad failed to start playing!");
            jr(!0)
        }, 1e4);
        try {
            script = document.createElement("script"), script.src = "http://cdn.playwire.com/bolt/js/zeus/embed.js", script.type = "text/javascript", script.id = "script", script.setAttribute("charset", "utf-8"), script.setAttribute("data-config", "http://config.playwire.com/1018393/v2/pre_content.json"), script.setAttribute("data-width", "100%"), script.setAttribute("data-height", "100%"), script.setAttribute("data-id", Jr), script.setAttribute("data-onready", "onBoltLoaded"), script.setAttribute("data-post-ad-container", "my-content-2"), script.setAttribute("data-theme", "http://cdn.playwire.com/bolt/js/zeus/themes/orion/main.js"), e.appendChild(script), console.log("loading player...")
        } catch (e) {
            console.log("Error: " + e)
        }
    }
    this.onBoltLoaded = function(e) {
        console.log("onBoltLoaded: playerName '" + e + "'");
        clearTimeout(Vr);
        Bolt.on(e, "showPostAdContainer", function() {
            console.log("******BOLT showPostAdContainer***** fired");
            jr(Yr)
        });
        Bolt.on(e, Bolt.BOLT_AD_STARTED, function() {
            console.log("AD STARTED: SUCCESS");
            Yr = !0
        });
        Bolt.on(e, Bolt.BOLT_AD_ERROR, function() {
            console.log("AD ERROR EVENT FIRED")
        })
    };

    function Zr(e, t, a) {
        return {
            x: e.x + t * Math.cos(a),
            y: e.y + t * Math.sin(a)
        }
    }

    function Qr(e, t, a, i, s) {
        La.save();
        La.globalAlpha = s;
        La.beginPath();
        La.translate(e, t);
        La.rotate(a);
        La.moveTo(-5, -5);
        La.lineTo(-5, 5);
        La.lineTo(5, 5);
        La.lineWidth = 1.5;
        La.strokeStyle = i;
        La.fillStyle = i;
        La.stroke();
        La.restore()
    }

    function $r() {
        var e = Qs[cs];
        if (e)
            for (d = 0; d < Zs.length; d++) {
                var t = Zs[d];
                if (e.id != t.id && t.oType === at) {
                    var a = t.getOutlineColor(),
                        i = !1;
                    if (a == ne || a == re) i = !0;
                    i && tl(e, t, a)
                }
            }
    }

    function el(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y;
        return Math.sqrt(a * a + i * i)
    }

    function tl(e, t, a) {
        var i = ki(t.x, t.y, e.x, e.y);
        Ir(t.x);
        vr(t.y);
        e = Zr({
            x: e.x,
            y: e.y
        }, -50 - e.rad, i);
        t = el({
            x: e.x,
            y: e.y
        }, {
            x: t.x,
            y: t.y
        });
        1e3 < t || 100 > t || (i += vi(45), Qr(e.x, e.y, i, a, 1))
    }
})();
