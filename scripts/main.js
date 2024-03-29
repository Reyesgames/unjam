'use strict';

function t(f, a, b, d) {
    f.v.ic(f.Xa, a, b, d, void 0)
}

function D(f, a, b, d) {
    f.v.pa ? t(f, a, b, d) : f.v.df()._OnMessageFromDOM({
        type: "event",
        component: f.Xa,
        handler: a,
        dispatchOpts: d || null,
        data: b,
        responseId: null
    })
}

function E(f, a, b) {
    f.v.C(f.Xa, a, b)
}

function F(f, a) {
    for (const [b, d] of a) E(f, b, d)
}

function I(f) {
    f.Nb || (f.v.Pe(f.Zd), f.Nb = !0)
}
window.za = class {
    constructor(f, a) {
        this.v = f;
        this.Xa = a;
        this.Nb = !1;
        this.Zd = () => this.Da()
    }
    ad() {}
    Da() {}
};

function J(f) {
    -1 !== f.Oa && (self.clearTimeout(f.Oa), f.Oa = -1)
}
window.Ge = class {
    constructor(f, a) {
        this.Ic = f;
        this.qg = a;
        this.Oa = -1;
        this.Ob = -Infinity;
        this.$d = () => {
            this.Oa = -1;
            this.Ob = Date.now();
            this.bb = !0;
            this.Ic();
            this.bb = !1
        };
        this.Id = this.bb = !1
    }
    c() {
        J(this);
        this.$d = this.Ic = null
    }
};
"use strict";

function K(f, a) {
    E(f, "get-element", b => {
        const d = f.ca.get(b.elementId);
        return a(d, b)
    })
}
window.Jg = class extends self.za {
    constructor(f, a) {
        super(f, a);
        this.ca = new Map;
        this.Hc = !0;
        F(this, [
            ["create", () => {
                throw Error("required override");
            }],
            ["destroy", b => {
                {
                    b = b.elementId;
                    const d = this.ca.get(b);
                    this.Hc && d.parentElement.removeChild(d);
                    this.ca.delete(b)
                }
            }],
            ["set-visible", b => {
                this.Hc && (this.ca.get(b.elementId).style.display = b.isVisible ? "" : "none")
            }],
            ["update-position", b => {
                if (this.Hc) {
                    var d = this.ca.get(b.elementId);
                    d.style.left = b.left + "px";
                    d.style.top = b.top + "px";
                    d.style.width = b.width + "px";
                    d.style.height =
                        b.height + "px";
                    b = b.fontSize;
                    null !== b && (d.style.fontSize = b + "em")
                }
            }],
            ["update-state", b => {
                this.ca.get(b.elementId);
                throw Error("required override");
            }],
            ["focus", b => this.Cc(b)],
            ["set-css-style", b => {
                this.ca.get(b.elementId).style[b.prop] = b.val
            }],
            ["set-attribute", b => {
                this.ca.get(b.elementId).setAttribute(b.name, b.val)
            }],
            ["remove-attribute", b => {
                this.ca.get(b.elementId).removeAttribute(b.name)
            }]
        ]);
        K(this, b => b)
    }
    Cc(f) {
        var a = this.ca.get(f.elementId);
        f.focus ? a.focus() : a.blur()
    }
};
"use strict"; {
    const f = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);

    function a(e, c) {
        const h = document.createElement("script");
        h.async = !1;
        "module" === c && (h.type = "module");
        if (e.Ag) h.textContent = e.Dg, document.head.appendChild(h);
        else return new Promise((k, l) => {
            h.onload = k;
            h.onerror = l;
            h.src = e;
            document.head.appendChild(h)
        })
    }
    let b = !1,
        d = !1;

    function g() {
        if (!b) {
            try {
                new Worker("blob://", {
                    get type() {
                        d = !0
                    }
                })
            } catch (e) {}
            b = !0
        }
        return d
    }
    let m = new Audio;
    const p = {
        "audio/webm; codecs=opus": !!m.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!m.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!m.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!m.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!m.canPlayType("audio/mp4"),
        "audio/mpeg": !!m.canPlayType("audio/mpeg")
    };
    m = null;
    async function w(e) {
        e = await z(e);
        return (new TextDecoder("utf-8")).decode(e)
    }

    function z(e) {
        return new Promise((c, h) => {
            const k = new FileReader;
            k.onload = l => c(l.target.result);
            k.onerror = l => h(l);
            k.readAsArrayBuffer(e)
        })
    }
    const A = [];
    let u = 0;
    window.RealFile = window.File;
    const v = [],
        B = new Map,
        x = new Map;
    let G = 0;
    const C = [];
    self.runOnStartup = function(e) {
        if ("function" !== typeof e) throw Error("runOnStartup called without a function");
        C.push(e)
    };
    const H = new Set(["cordova", "playable-ad", "instant-games"]);
    window.Ca = class e {
        constructor(c) {
            this.pa = c.Fg;
            this.na = null;
            this.F = "";
            this.Wb = c.Cg;
            this.da = c.ce;
            this.qb = {};
            this.Ha = this.pb = null;
            this.Lb = [];
            this.eb = this.K = this.Ma = null;
            this.La = -1;
            this.vg = () => this.Cf();
            this.Ka = [];
            this.B = c.ae;
            !this.pa ||
                "undefined" !== typeof OffscreenCanvas && navigator.userActivation && ("module" !== this.da || g()) || (this.pa = !1);
            H.has(this.B) && this.pa && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."), this.pa = !1);
            this.Qb = this.ia = null;
            "html5" !== this.B && "playable-ad" !== this.B || "file" !== location.protocol.substr(0, 4) || alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
            this.C("runtime", "cordova-fetch-local-file", h => this.lf(h));
            this.C("runtime", "create-job-worker", () => this.mf());
            "cordova" === this.B ? document.addEventListener("deviceready", () => this.ud(c)) : this.ud(c)
        }
        c() {
            this.oc();
            this.na && (this.na = this.na.onmessage = null);
            this.pb && (this.pb.terminate(), this.pb = null);
            this.Ha && (this.Ha.c(), this.Ha = null);
            this.K && (this.K.parentElement.removeChild(this.K), this.K = null)
        }
        jd() {
            return f && "cordova" === this.B
        }
        wb() {
            return f && H.has(this.B) || navigator.standalone
        }
        async ud(c) {
            if ("playable-ad" ===
                this.B) {
                this.ia = self.c3_base64files;
                this.Qb = {};
                await this.Ue();
                for (let k = 0, l = c.Pa.length; k < l; ++k) {
                    var h = c.Pa[k].toLowerCase();
                    this.Qb.hasOwnProperty(h) ? c.Pa[k] = {
                        Ag: !0,
                        Dg: this.Qb[h]
                    } : this.ia.hasOwnProperty(h) && (c.Pa[k] = URL.createObjectURL(this.ia[h]))
                }
            }
            c.wg ? this.F = c.wg : (h = location.origin, this.F = ("null" === h ? "file:///" : h) + location.pathname, h = this.F.lastIndexOf("/"), -1 !== h && (this.F = this.F.substr(0, h + 1)));
            c.Hg && (this.qb = c.Hg);
            h = new MessageChannel;
            this.na = h.port1;
            this.na.onmessage = k => this._OnMessageFromRuntime(k.data);
            window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(k => this.yf(k));
            this.eb = new self.Ce(this);
            await L(this.eb);
            this.kd();
            "object" === typeof window.StatusBar && window.StatusBar.hide();
            "object" === typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode();
            this.pa ? await this.ff(c, h.port2) : await this.ef(c, h.port2)
        }
        rc(c) {
            c = this.qb.hasOwnProperty(c) ? this.qb[c] : c.endsWith("/workermain.js") && this.qb.hasOwnProperty("workermain.js") ? this.qb["workermain.js"] : "playable-ad" === this.B && this.ia.hasOwnProperty(c.toLowerCase()) ?
                this.ia[c.toLowerCase()] : c;
            c instanceof Blob && (c = URL.createObjectURL(c));
            return c
        }
        async ac(c, h, k) {
            if (c.startsWith("blob:")) return new Worker(c, k);
            if (this.jd() && "file:" === location.protocol) return c = await this.sb(this.Wb + c), new Worker(URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            })), k);
            c = new URL(c, h);
            if (location.origin !== c.origin) {
                c = await fetch(c);
                if (!c.ok) throw Error("failed to fetch worker script");
                c = await c.blob();
                return new Worker(URL.createObjectURL(c), k)
            }
            return new Worker(c,
                k)
        }
        ua() {
            return Math.max(window.innerWidth, 1)
        }
        ta() {
            return Math.max(window.innerHeight, 1)
        }
        kd() {
            if (this.wb()) {
                const c = document.documentElement.style,
                    h = document.body.style,
                    k = window.innerWidth < window.innerHeight,
                    l = k ? window.screen.width : window.screen.height;
                h.height = c.height = (k ? window.screen.height : window.screen.width) + "px";
                h.width = c.width = l + "px"
            }
        }
        td(c) {
            var h = this.eb;
            return {
                baseUrl: this.F,
                windowInnerWidth: this.ua(),
                windowInnerHeight: this.ta(),
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: e.hc(),
                projectData: c.Og,
                scriptsType: c.ce,
                previewImageBlobs: window.cr_previewImageBlobs || this.ia,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                previewProjectFileUrls: window.cr_previewProjectFiles,
                swClientId: window.Mg || "",
                exportType: c.ae,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.Ng,
                jobScheduler: {
                    inputPort: h.Oc,
                    outputPort: h.Vc,
                    maxNumWorkers: h.sg
                },
                supportedAudioFormats: p,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.Wb + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl ||
                    this.Wb + "opus.wasm.wasm",
                isiOSCordova: this.jd(),
                isiOSWebView: this.wb(),
                isFBInstantAvailable: "undefined" !== typeof self.FBInstant
            }
        }
        async ff(c, h) {
            var k = this.rc(c.Gg);
            this.pb = await this.ac(k, this.F, {
                type: this.da,
                name: "Runtime"
            });
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            k = this.K.transferControlToOffscreen();
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.pb.postMessage(Object.assign(this.td(c), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: h,
                canvas: k,
                workerDependencyScripts: c.$c || [],
                engineScripts: c.Pa,
                projectScripts: c.rb,
                mainProjectScript: c.be,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [h, k, ...M(this.eb)]);
            this.Lb = v.map(l => new l(this));
            this.sd();
            self.c3_callFunction = (l, n) => this.Ma.gf(l, n);
            "preview" === this.B && (self.goToLastErrorScript = () => this.ic("runtime", "go-to-last-error-script"))
        }
        async ef(c, h) {
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.Lb = v.map(n => new n(this));
            this.sd();
            var k =
                c.Pa.map(n => "string" === typeof n ? (new URL(n, this.F)).toString() : n);
            Array.isArray(c.$c) && k.unshift(...c.$c);
            k = await Promise.all(k.map(n => this.vc(n, this.da)));
            await Promise.all(k.map(n => a(n, this.da)));
            const l = self.C3_ProjectScriptsStatus;
            if ("module" === this.da) {
                k = c.be;
                const n = c.rb;
                for (let [r, q] of n)
                    if (q || (q = r), r === k) try {
                        q = await this.vc(q, this.da), await a(q, this.da), "preview" !== this.B || l[r] || this.Cd(r, "main script did not run to completion")
                    } catch (y) {
                        this.Cd(r, y)
                    } else if ("scriptsInEvents.js" === r || r.endsWith("/scriptsInEvents.js")) q =
                        await this.vc(q, this.da), await a(q, this.da)
            } else if (c.rb && 0 < c.rb.length) try {
                if (await Promise.all(c.rb.map(n => a(n[1], this.da))), Object.values(l).some(n => !n)) {
                    self.setTimeout(() => this.Dd(l), 100);
                    return
                }
            } catch (n) {
                console.error("[Preview] Error loading project scripts: ", n);
                self.setTimeout(() => this.Dd(l), 100);
                return
            }
            "preview" === this.B && "object" !== typeof self.Ig.Kg ? (this.Va(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."), alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) :
                (c = Object.assign(this.td(c), {
                    isInWorker: !1,
                    messagePort: h,
                    canvas: this.K,
                    runOnStartupFunctions: C
                }), this.wd(), this.Ha = self.C3_CreateRuntime(c), await self.C3_InitRuntime(this.Ha, c))
        }
        Dd(c) {
            this.Va();
            c = `Failed to load project script '${Object.entries(c).filter(h=>!h[1]).map(h=>h[0])[0]}'. Check all your JavaScript code has valid syntax.`;
            console.error("[Preview] " + c);
            alert(c)
        }
        Cd(c, h) {
            this.Va();
            console.error(`[Preview] Failed to load project main script (${c}): `, h);
            alert(`Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
        }
        wd() {
            this.Va()
        }
        Va() {
            const c =
                window.xg;
            c && (c.parentElement.removeChild(c), window.xg = null)
        }
        async mf() {
            const c = await N(this.eb);
            return {
                outputPort: c,
                transferables: [c]
            }
        }
        df() {
            if (this.pa) throw Error("not available in worker mode");
            return this.Ha
        }
        ic(c, h, k, l, n) {
            this.na.postMessage({
                type: "event",
                component: c,
                handler: h,
                dispatchOpts: l || null,
                data: k,
                responseId: null
            }, n)
        }
        ld(c, h, k, l, n) {
            const r = G++,
                q = new Promise((y, Q) => {
                    x.set(r, {
                        resolve: y,
                        reject: Q
                    })
                });
            this.na.postMessage({
                    type: "event",
                    component: c,
                    handler: h,
                    dispatchOpts: l || null,
                    data: k,
                    responseId: r
                },
                n);
            return q
        }["_OnMessageFromRuntime"](c) {
            const h = c.type;
            if ("event" === h) return this.sf(c);
            if ("result" === h) this.Ff(c);
            else if ("runtime-ready" === h) this.Gf();
            else if ("alert-error" === h) this.Va(), alert(c.message);
            else if ("creating-runtime" === h) this.wd();
            else throw Error(`unknown message '${h}'`);
        }
        sf(c) {
            const h = c.component,
                k = c.handler,
                l = c.data,
                n = c.responseId;
            if (c = B.get(h))
                if (c = c.get(k)) {
                    var r = null;
                    try {
                        r = c(l)
                    } catch (q) {
                        console.error(`Exception in '${h}' handler '${k}':`, q);
                        null !== n && this.Eb(n, !1, "" + q);
                        return
                    }
                    if (null ===
                        n) return r;
                    r && r.then ? r.then(q => this.Eb(n, !0, q)).catch(q => {
                        console.error(`Rejection from '${h}' handler '${k}':`, q);
                        this.Eb(n, !1, "" + q)
                    }) : this.Eb(n, !0, r)
                } else console.warn(`[DOM] No handler '${k}' for component '${h}'`);
            else console.warn(`[DOM] No event handlers for component '${h}'`)
        }
        Eb(c, h, k) {
            let l;
            k && k.transferables && (l = k.transferables);
            this.na.postMessage({
                type: "result",
                responseId: c,
                isOk: h,
                result: k
            }, l)
        }
        Ff(c) {
            const h = c.responseId,
                k = c.isOk;
            c = c.result;
            const l = x.get(h);
            k ? l.resolve(c) : l.reject(c);
            x.delete(h)
        }
        C(c,
            h, k) {
            let l = B.get(c);
            l || (l = new Map, B.set(c, l));
            if (l.has(h)) throw Error(`[DOM] Component '${c}' already has handler '${h}'`);
            l.set(h, k)
        }
        static Qa(c) {
            if (v.includes(c)) throw Error("DOM handler already added");
            v.push(c)
        }
        sd() {
            for (const c of this.Lb)
                if ("runtime" === c.Xa) {
                    this.Ma = c;
                    return
                }
            throw Error("cannot find runtime DOM handler");
        }
        yf(c) {
            this.ic("debugger", "message", c)
        }
        Gf() {
            for (const c of this.Lb) c.ad()
        }
        static hc() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        }
        Pe(c) {
            this.Ka.push(c);
            this.Fc()
        }
        Rf(c) {
            c = this.Ka.indexOf(c);
            if (-1 === c) throw Error("invalid callback");
            this.Ka.splice(c, 1);
            this.Ka.length || this.oc()
        }
        Fc() {
            -1 === this.La && this.Ka.length && (this.La = requestAnimationFrame(this.vg))
        }
        oc() {
            -1 !== this.La && (cancelAnimationFrame(this.La), this.La = -1)
        }
        Cf() {
            this.La = -1;
            for (const c of this.Ka) c();
            this.Fc()
        }
        sa(c) {
            this.Ma.sa(c)
        }
        Ba(c) {
            this.Ma.Ba(c)
        }
        Ec() {
            this.Ma.Ec()
        }
        zb(c) {
            this.Ma.zb(c)
        }
        Be() {
            return !!p["audio/webm; codecs=opus"]
        }
        async og(c) {
            c = await this.ld("runtime", "opus-decode", {
                    arrayBuffer: c
                },
                null, [c]);
            return new Float32Array(c)
        }
        Ae(c) {
            return /^(?:[a-z\-]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
        }
        hd(c) {
            return !this.Ae(c)
        }
        async vc(c, h) {
            return "cordova" === this.B && "module" === h && (c.startsWith("file:") || "file:" === location.protocol && this.hd(c)) ? (c.startsWith(this.F) && (c = c.substr(this.F.length)), c = await this.sb(c), URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            }))) : c
        }
        async lf(c) {
            const h = c.filename;
            switch (c.as) {
                case "text":
                    return await this.te(h);
                case "buffer":
                    return await this.sb(h);
                default:
                    throw Error("unsupported type");
            }
        }
        dd(c) {
            const h = window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
            return new Promise((k, l) => {
                window.resolveLocalFileSystemURL(h, n => {
                    n.file(k, l)
                }, l)
            })
        }
        async te(c) {
            c = await this.dd(c);
            return await w(c)
        }
        pc() {
            if (A.length && !(8 <= u)) {
                u++;
                var c = A.shift();
                this.Ve(c.filename, c.Eg, c.zg)
            }
        }
        sb(c) {
            return new Promise((h, k) => {
                A.push({
                    filename: c,
                    Eg: l => {
                        u--;
                        this.pc();
                        h(l)
                    },
                    zg: l => {
                        u--;
                        this.pc();
                        k(l)
                    }
                });
                this.pc()
            })
        }
        async Ve(c, h, k) {
            try {
                const l = await this.dd(c),
                    n = await z(l);
                h(n)
            } catch (l) {
                k(l)
            }
        }
        async Ue() {
            const c = [];
            for (const [h, k] of Object.entries(this.ia)) c.push(this.Te(h, k));
            await Promise.all(c)
        }
        async Te(c, h) {
            if ("object" === typeof h) this.ia[c] = new Blob([h.str], {
                type: h.type
            }), this.Qb[c] = h.str;
            else {
                let k = await this.bf(h);
                k || (k = this.Xe(h));
                this.ia[c] = k
            }
        }
        async bf(c) {
            try {
                return await (await fetch(c)).blob()
            } catch (h) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
                    h), null
            }
        }
        Xe(c) {
            c = this.Lf(c);
            return this.Se(c.data, c.Bg)
        }
        Lf(c) {
            var h = c.indexOf(",");
            if (0 > h) throw new URIError("expected comma in data: uri");
            var k = c.substring(h + 1);
            h = c.substring(5, h).split(";");
            c = h[0] || "";
            const l = h[2];
            k = "base64" === h[1] || "base64" === l ? atob(k) : decodeURIComponent(k);
            return {
                Bg: c,
                data: k
            }
        }
        Se(c, h) {
            var k = c.length;
            let l = k >> 2,
                n = new Uint8Array(k),
                r = new Uint32Array(n.buffer, 0, l),
                q, y;
            for (y = q = 0; q < l; ++q) r[q] = c.charCodeAt(y++) | c.charCodeAt(y++) << 8 | c.charCodeAt(y++) << 16 | c.charCodeAt(y++) << 24;
            for (k &=
                3; k--;) n[y] = c.charCodeAt(y), ++y;
            return new Blob([n], {
                type: h
            })
        }
    }
}
"use strict"; {
    const f = self.Ca;

    function a(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }
    const b = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        d = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        g = {
            dispatchUserScriptEvent: !0
        },
        m = {
            dispatchRuntimeEvent: !0
        };

    function p(e) {
        return new Promise((c, h) => {
            const k = document.createElement("link");
            k.onload = () => c(k);
            k.onerror = l => h(l);
            k.rel =
                "stylesheet";
            k.href = e;
            document.head.appendChild(k)
        })
    }

    function w(e) {
        return new Promise((c, h) => {
            const k = new Image;
            k.onload = () => c(k);
            k.onerror = l => h(l);
            k.src = e
        })
    }
    async function z(e) {
        e = URL.createObjectURL(e);
        try {
            return await w(e)
        } finally {
            URL.revokeObjectURL(e)
        }
    }

    function A(e) {
        return new Promise((c, h) => {
            let k = new FileReader;
            k.onload = l => c(l.target.result);
            k.onerror = l => h(l);
            k.readAsText(e)
        })
    }
    async function u(e, c, h) {
        if (!/firefox/i.test(navigator.userAgent)) return await z(e);
        var k = await A(e);
        k = (new DOMParser).parseFromString(k,
            "image/svg+xml");
        const l = k.documentElement;
        if (l.hasAttribute("width") && l.hasAttribute("height")) {
            const n = l.getAttribute("width"),
                r = l.getAttribute("height");
            if (!n.includes("%") && !r.includes("%")) return await z(e)
        }
        l.setAttribute("width", c + "px");
        l.setAttribute("height", h + "px");
        k = (new XMLSerializer).serializeToString(k);
        e = new Blob([k], {
            type: "image/svg+xml"
        });
        return await z(e)
    }

    function v(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }
    const B = new Set(["canvas",
        "body", "html"
    ]);

    function x(e) {
        B.has(e.target.tagName.toLowerCase()) && e.preventDefault()
    }

    function G(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }
    self.C3_GetSvgImageSize = async function(e) {
        e = await z(e);
        if (0 < e.width && 0 < e.height) return [e.width, e.height]; {
            e.style.position = "absolute";
            e.style.left = "0px";
            e.style.top = "0px";
            e.style.visibility = "hidden";
            document.body.appendChild(e);
            const c = e.getBoundingClientRect();
            document.body.removeChild(e);
            return [c.width, c.height]
        }
    };
    self.C3_RasterSvgImageBlob = async function(e,
        c, h, k, l) {
        e = await u(e, c, h);
        const n = document.createElement("canvas");
        n.width = k;
        n.height = l;
        n.getContext("2d").drawImage(e, 0, 0, c, h);
        return n
    };
    let C = !1;
    document.addEventListener("pause", () => C = !0);
    document.addEventListener("resume", () => C = !1);

    function H() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    f.Qa(class extends self.za {
        constructor(e) {
            super(e, "runtime");
            this.Nd = !0;
            this.Na = -1;
            this.Xc = "any";
            this.Ed = this.Fd = !1;
            this.Rc = this.mb = this.wa = null;
            e.C("canvas", "update-size", k =>
                this.Jf(k));
            e.C("runtime", "invoke-download", k => this.wf(k));
            e.C("runtime", "raster-svg-image", k => this.Df(k));
            e.C("runtime", "get-svg-image-size", k => this.uf(k));
            e.C("runtime", "set-target-orientation", k => this.Hf(k));
            e.C("runtime", "register-sw", () => this.Ef());
            e.C("runtime", "post-to-debugger", k => this.yd(k));
            e.C("runtime", "go-to-script", k => this.yd(k));
            e.C("runtime", "before-start-ticking", () => this.kf());
            e.C("runtime", "debug-highlight", k => this.nf(k));
            e.C("runtime", "enable-device-orientation", () => this.Re());
            e.C("runtime", "enable-device-motion", () => this.Qe());
            e.C("runtime", "add-stylesheet", k => this.jf(k));
            e.C("runtime", "alert", k => this.wc(k));
            e.C("runtime", "hide-cordova-splash", () => this.vf());
            const c = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", k => {
                const l = k.target;
                c.has(l.tagName.toLowerCase()) || v(l) || k.preventDefault()
            });
            const h = e.K;
            window.addEventListener("selectstart", x);
            window.addEventListener("gesturehold", x);
            h.addEventListener("selectstart", x);
            h.addEventListener("gesturehold",
                x);
            window.addEventListener("touchstart", x, {
                passive: !1
            });
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", x, {
                passive: !1
            }), h.addEventListener("pointerdown", x)) : h.addEventListener("touchstart", x);
            this.jb = 0;
            window.addEventListener("mousedown", k => {
                1 === k.button && k.preventDefault()
            });
            window.addEventListener("mousewheel", G, {
                passive: !1
            });
            window.addEventListener("wheel", G, {
                passive: !1
            });
            window.addEventListener("resize", () => this.Kf());
            e.wb() && window.addEventListener("focusout", () => {
                {
                    const n =
                        document.activeElement;
                    if (n) {
                        var k = n.tagName.toLowerCase();
                        var l = new Set("email number password search tel text url".split(" "));
                        k = "textarea" === k ? !0 : "input" === k ? l.has(n.type.toLowerCase() || "text") : v(n)
                    } else k = !1
                }
                k || (document.scrollingElement.scrollTop = 0)
            });
            this.Ia = new Set;
            this.Rb = new WeakSet;
            this.ma = !1
        }
        kf() {
            "cordova" === this.v.B ? (document.addEventListener("pause", () => this.Dc(!0)), document.addEventListener("resume", () => this.Dc(!1))) : document.addEventListener("visibilitychange", () => this.Dc(document.hidden));
            return {
                isSuspended: !(!document.hidden && !C)
            }
        }
        ad() {
            window.addEventListener("focus", () => this.Fb("window-focus"));
            window.addEventListener("blur", () => {
                this.Fb("window-blur", {
                    parentHasFocus: H()
                });
                this.jb = 0
            });
            window.addEventListener("fullscreenchange", () => this.yc());
            window.addEventListener("webkitfullscreenchange", () => this.yc());
            window.addEventListener("mozfullscreenchange", () => this.yc());
            window.addEventListener("fullscreenerror", c => this.zc(c));
            window.addEventListener("webkitfullscreenerror", c => this.zc(c));
            window.addEventListener("mozfullscreenerror", c => this.zc(c));
            window.addEventListener("keydown", c => this.xd("keydown", c));
            window.addEventListener("keyup", c => this.xd("keyup", c));
            window.addEventListener("dblclick", c => this.Ac("dblclick", c, d));
            window.addEventListener("wheel", c => this.Af(c));
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", c => {
                this.sc(c);
                this.Ua("pointerdown", c)
            }), this.v.pa && "undefined" !== typeof window.onpointerrawupdate && self === self.top ? (this.mb = new self.Ge(() => this.$e(),
                5), this.mb.Id = !0, window.addEventListener("pointerrawupdate", c => this.Bf(c))) : window.addEventListener("pointermove", c => this.Ua("pointermove", c)), window.addEventListener("pointerup", c => this.Ua("pointerup", c)), window.addEventListener("pointercancel", c => this.Ua("pointercancel", c))) : (window.addEventListener("mousedown", c => {
                this.sc(c);
                this.Bc("pointerdown", c)
            }), window.addEventListener("mousemove", c => this.Bc("pointermove", c)), window.addEventListener("mouseup", c => this.Bc("pointerup", c)), window.addEventListener("touchstart",
                c => {
                    this.sc(c);
                    this.Db("pointerdown", c)
                }), window.addEventListener("touchmove", c => this.Db("pointermove", c)), window.addEventListener("touchend", c => this.Db("pointerup", c)), window.addEventListener("touchcancel", c => this.Db("pointercancel", c)));
            const e = () => this.Ec();
            window.addEventListener("pointerup", e, !0);
            window.addEventListener("touchend", e, !0);
            window.addEventListener("click", e, !0);
            window.addEventListener("keydown", e, !0);
            window.addEventListener("gamepadconnected", e, !0)
        }
        Fb(e, c) {
            t(this, e, c || null, m)
        }
        ua() {
            return this.v.ua()
        }
        ta() {
            return this.v.ta()
        }
        Kf() {
            const e =
                this.ua(),
                c = this.ta();
            this.Fb("window-resize", {
                innerWidth: e,
                innerHeight: c,
                devicePixelRatio: window.devicePixelRatio
            });
            this.v.wb() && (-1 !== this.Na && clearTimeout(this.Na), this.zd(e, c, 0))
        }
        Sf(e, c, h) {
            -1 !== this.Na && clearTimeout(this.Na);
            this.Na = setTimeout(() => this.zd(e, c, h), 48)
        }
        zd(e, c, h) {
            const k = this.ua(),
                l = this.ta();
            this.Na = -1;
            k != e || l != c ? this.Fb("window-resize", {
                innerWidth: k,
                innerHeight: l,
                devicePixelRatio: window.devicePixelRatio
            }) : 10 > h && this.Sf(k, l, h + 1)
        }
        Hf(e) {
            this.Xc = e.targetOrientation
        }
        kg() {
            const e = this.Xc;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(c => console.warn("[Construct 3] Failed to lock orientation: ", c));
            else try {
                let c = !1;
                screen.lockOrientation ? c = screen.lockOrientation(e) : screen.webkitLockOrientation ? c = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? c = screen.mozLockOrientation(e) : screen.msLockOrientation && (c = screen.msLockOrientation(e));
                c || console.warn("[Construct 3] Failed to lock orientation")
            } catch (c) {
                console.warn("[Construct 3] Failed to lock orientation: ",
                    c)
            }
        }
        yc() {
            const e = f.hc();
            e && "any" !== this.Xc && this.kg();
            t(this, "fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.ua(),
                innerHeight: this.ta()
            })
        }
        zc(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e);
            t(this, "fullscreenerror", {
                isFullscreen: f.hc(),
                innerWidth: this.ua(),
                innerHeight: this.ta()
            })
        }
        Dc(e) {
            e ? this.v.oc() : this.v.Fc();
            t(this, "visibilitychange", {
                hidden: e
            })
        }
        xd(e, c) {
            "Backspace" === c.key && x(c);
            const h = b.get(c.code) || c.code;
            D(this, e, {
                code: h,
                key: c.key,
                which: c.which,
                repeat: c.repeat,
                altKey: c.altKey,
                ctrlKey: c.ctrlKey,
                metaKey: c.metaKey,
                shiftKey: c.shiftKey,
                timeStamp: c.timeStamp
            }, d)
        }
        Af(e) {
            t(this, "wheel", {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                deltaMode: e.deltaMode,
                timeStamp: e.timeStamp
            }, d)
        }
        Ac(e, c, h) {
            a(c) || D(this, e, {
                button: c.button,
                buttons: c.buttons,
                clientX: c.clientX,
                clientY: c.clientY,
                pageX: c.pageX,
                pageY: c.pageY,
                timeStamp: c.timeStamp
            }, h)
        }
        Bc(e, c) {
            if (!a(c)) {
                var h = this.jb;
                "pointerdown" === e && 0 !== h ? e = "pointermove" : "pointerup" ===
                    e && 0 !== c.buttons && (e = "pointermove");
                D(this, e, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: c.button,
                    buttons: c.buttons,
                    lastButtons: h,
                    clientX: c.clientX,
                    clientY: c.clientY,
                    pageX: c.pageX,
                    pageY: c.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: c.timeStamp
                }, d);
                this.jb = c.buttons;
                this.Ac(c.type, c, g)
            }
        }
        Ua(e, c) {
            if (this.mb && "pointermove" !== e) {
                var h = this.mb;
                h.bb || (J(h), h.Ob = Date.now())
            }
            h = 0;
            "mouse" === c.pointerType && (h = this.jb);
            D(this, e, {
                pointerId: c.pointerId,
                pointerType: c.pointerType,
                button: c.button,
                buttons: c.buttons,
                lastButtons: h,
                clientX: c.clientX,
                clientY: c.clientY,
                pageX: c.pageX,
                pageY: c.pageY,
                width: c.width || 0,
                height: c.height || 0,
                pressure: c.pressure || 0,
                tangentialPressure: c.tangentialPressure || 0,
                tiltX: c.tiltX || 0,
                tiltY: c.tiltY || 0,
                twist: c.twist || 0,
                timeStamp: c.timeStamp
            }, d);
            "mouse" === c.pointerType && (h = "mousemove", "pointerdown" === e ? h = "mousedown" : "pointerup" === e && (h = "mouseup"), this.Ac(h, c, g), this.jb = c.buttons)
        }
        Bf(e) {
            this.Rc = e;
            e = this.mb;
            if (-1 === e.Oa) {
                var c = Date.now(),
                    h = c - e.Ob,
                    k = e.qg;
                h >= k && e.Id ? (e.Ob = c, e.bb = !0, e.Ic(), e.bb = !1) : e.Oa = self.setTimeout(e.$d, Math.max(k - h, 4))
            }
        }
        $e() {
            this.Ua("pointermove", this.Rc);
            this.Rc = null
        }
        Db(e, c) {
            for (let h = 0, k = c.changedTouches.length; h < k; ++h) {
                const l = c.changedTouches[h];
                D(this, e, {
                    pointerId: l.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: l.clientX,
                    clientY: l.clientY,
                    pageX: l.pageX,
                    pageY: l.pageY,
                    width: 2 * (l.radiusX || l.webkitRadiusX || 0),
                    height: 2 * (l.radiusY || l.webkitRadiusY || 0),
                    pressure: l.force || l.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: l.rotationAngle || 0,
                    timeStamp: c.timeStamp
                }, d)
            }
        }
        sc(e) {
            window !== window.top && window.focus();
            this.vd(e.target) && document.activeElement && !this.vd(document.activeElement) && document.activeElement.blur()
        }
        vd(e) {
            return !e || e === document || e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        Re() {
            this.Fd || (this.Fd = !0, window.addEventListener("deviceorientation", e => this.qf(e)), window.addEventListener("deviceorientationabsolute", e => this.rf(e)))
        }
        Qe() {
            this.Ed || (this.Ed = !0, window.addEventListener("devicemotion",
                e => this.pf(e)))
        }
        qf(e) {
            t(this, "deviceorientation", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp,
                webkitCompassHeading: e.webkitCompassHeading,
                webkitCompassAccuracy: e.webkitCompassAccuracy
            }, d)
        }
        rf(e) {
            t(this, "deviceorientationabsolute", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, d)
        }
        pf(e) {
            let c = null;
            var h = e.acceleration;
            h && (c = {
                x: h.x || 0,
                y: h.y || 0,
                z: h.z || 0
            });
            h = null;
            var k = e.accelerationIncludingGravity;
            k && (h = {
                x: k.x ||
                    0,
                y: k.y || 0,
                z: k.z || 0
            });
            k = null;
            const l = e.rotationRate;
            l && (k = {
                alpha: l.alpha || 0,
                beta: l.beta || 0,
                gamma: l.gamma || 0
            });
            t(this, "devicemotion", {
                acceleration: c,
                accelerationIncludingGravity: h,
                rotationRate: k,
                interval: e.interval,
                timeStamp: e.timeStamp
            }, d)
        }
        Jf(e) {
            const c = this.v,
                h = c.K;
            h.style.width = e.styleWidth + "px";
            h.style.height = e.styleHeight + "px";
            h.style.marginLeft = e.marginLeft + "px";
            h.style.marginTop = e.marginTop + "px";
            c.kd();
            this.Nd && (h.style.display = "", this.Nd = !1)
        }
        wf(e) {
            const c = e.url;
            e = e.filename;
            const h = document.createElement("a"),
                k = document.body;
            h.textContent = e;
            h.href = c;
            h.download = e;
            k.appendChild(h);
            h.click();
            k.removeChild(h)
        }
        async Df(e) {
            var c = e.imageBitmapOpts;
            e = await self.C3_RasterSvgImageBlob(e.blob, e.imageWidth, e.imageHeight, e.surfaceWidth, e.surfaceHeight);
            c = c ? await createImageBitmap(e, c) : await createImageBitmap(e);
            return {
                imageBitmap: c,
                transferables: [c]
            }
        }
        async uf(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async jf(e) {
            await p(e.url)
        }
        Ec() {
            var e = [...this.Ia];
            this.Ia.clear();
            if (!this.ma)
                for (const c of e)(e = c.play()) &&
                    e.catch(() => {
                        this.Rb.has(c) || this.Ia.add(c)
                    })
        }
        sa(e) {
            if ("function" !== typeof e.play) throw Error("missing play function");
            this.Rb.delete(e);
            let c;
            try {
                c = e.play()
            } catch (h) {
                this.Ia.add(e);
                return
            }
            c && c.catch(() => {
                this.Rb.has(e) || this.Ia.add(e)
            })
        }
        Ba(e) {
            this.Ia.delete(e);
            this.Rb.add(e)
        }
        zb(e) {
            this.ma = !!e
        }
        vf() {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        nf(e) {
            if (e.show) {
                this.wa || (this.wa = document.createElement("div"), this.wa.id = "inspectOutline", document.body.appendChild(this.wa));
                var c = this.wa;
                c.style.display = "";
                c.style.left = e.left - 1 + "px";
                c.style.top = e.top - 1 + "px";
                c.style.width = e.width + 2 + "px";
                c.style.height = e.height + 2 + "px";
                c.textContent = e.name
            } else this.wa && (this.wa.style.display = "none")
        }
        Ef() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        yd(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        gf(e, c) {
            return this.v.ld(this.Xa, "js-invoke-function", {
                name: e,
                params: c
            }, void 0, void 0)
        }
        wc(e) {
            alert(e.message)
        }
    })
}
"use strict";
async function L(f) {
    if (f.pg) throw Error("already initialised");
    f.pg = !0;
    var a = f.Vb.rc("dispatchworker.js");
    f.Kc = await f.Vb.ac(a, f.F, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    f.Oc = a.port1;
    f.Kc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    f.Vc = await N(f)
}

function M(f) {
    return [f.Oc, f.Vc]
}
async function N(f) {
    const a = f.Od.length;
    var b = f.Vb.rc("jobworker.js");
    b = await f.Vb.ac(b, f.F, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        g = new MessageChannel;
    f.Kc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    b.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": g.port2
    }, [d.port2, g.port2]);
    f.Od.push(b);
    return g.port1
}
self.Ce = class {
    constructor(f) {
        this.Vb = f;
        this.F = f.F;
        this.F = "preview" === f.B ? this.F + "c3/workers/" : this.F + f.Wb;
        this.sg = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Kc = null;
        this.Od = [];
        this.Vc = this.Oc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.Ca({
    Fg: !0,
    Gg: "workermain.js",
    Pa: ["scripts/c3runtime.js"],
    rb: [],
    be: "",
    ce: "module",
    Cg: "scripts/",
    $c: [],
    ae: "html5"
}));
"use strict";
async function O(f, a) {
    a = a.type;
    let b = !0;
    0 === a ? b = await P() : 1 === a && (b = await R());
    t(f, "permission-result", {
        type: a,
        result: b
    })
}
async function P() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request orientation permission: ", f), !1
    }
}
async function R() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request motion permission: ", f), !1
    }
}
self.Ca.Qa(class extends self.za {
    constructor(f) {
        super(f, "touch");
        E(this, "request-permission", a => O(this, a))
    }
});
"use strict";

function S(f) {
    window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a => t(f, "sw-message", a.data))
}

function T(f) {
    f = f.orientation;
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock(f).catch(a => console.warn("[Construct 3] Failed to lock orientation: ", a));
    else try {
        let a = !1;
        screen.lockOrientation ? a = screen.lockOrientation(f) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(f) : screen.mozLockOrientation ? a = screen.mozLockOrientation(f) : screen.msLockOrientation && (a = screen.msLockOrientation(f));
        a || console.warn("[Construct 3] Failed to lock orientation")
    } catch (a) {
        console.warn("[Construct 3] Failed to lock orientation: ",
            a)
    }
}
self.Ca.Qa(class extends self.za {
    constructor(f) {
        super(f, "browser");
        this.B = "";
        F(this, [
            ["get-initial-state", a => {
                this.B = a.exportType;
                return {
                    location: location.toString(),
                    isOnline: !!navigator.onLine,
                    referrer: document.referrer,
                    title: document.title,
                    isCookieEnabled: !!navigator.cookieEnabled,
                    screenWidth: screen.width,
                    screenHeight: screen.height,
                    windowOuterWidth: window.outerWidth,
                    windowOuterHeight: window.outerHeight,
                    isScirraArcade: "undefined" !== typeof window.is_scirra_arcade
                }
            }],
            ["ready-for-sw-messages", () => S(this)],
            ["alert", a => this.wc(a)],
            ["close", () => {
                navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
            }],
            ["set-focus", a => this.Cc(a)],
            ["vibrate", a => {
                navigator.vibrate && navigator.vibrate(a.pattern)
            }],
            ["lock-orientation", a => T(a)],
            ["unlock-orientation", () => {
                try {
                    screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() :
                        screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
                } catch (a) {}
            }],
            ["navigate", a => {
                var b = a.type;
                if ("back" === b) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.back();
                else if ("forward" === b) window.forward();
                else if ("home" === b) window.home();
                else if ("reload" === b) location.reload();
                else if ("url" === b) {
                    b = a.url;
                    var d = a.target;
                    a = a.exportType;
                    "windows-uwp" === a && "undefined" !== typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) :
                        self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") : "preview" === a ? window.open(b, "_blank") : this.Lg || (2 === d ? window.top.location = b : 1 === d ? window.parent.location = b : window.location = b)
                } else "new-window" === b && (b = a.url, d = a.tag, "windows-uwp" === a.exportType && "undefined" !== typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) : self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") : window.open(b, d))
            }],
            ["request-fullscreen",
                a => {
                    {
                        const b = {
                            navigationUI: "auto"
                        };
                        a = a.navUI;
                        1 === a ? b.navigationUI = "hide" : 2 === a && (b.navigationUI = "show");
                        a = document.documentElement;
                        a.requestFullscreen ? a.requestFullscreen(b) : a.mozRequestFullScreen ? a.mozRequestFullScreen(b) : a.msRequestFullscreen ? a.msRequestFullscreen(b) : a.webkitRequestFullScreen && ("undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen())
                    }
                }
            ],
            ["exit-fullscreen", () => {
                document.exitFullscreen ? document.exitFullscreen() :
                    document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
            }],
            ["set-hash", a => {
                location.hash = a.hash
            }]
        ]);
        window.addEventListener("online", () => {
            t(this, "online-state", {
                isOnline: !0
            })
        });
        window.addEventListener("offline", () => {
            t(this, "online-state", {
                isOnline: !1
            })
        });
        window.addEventListener("hashchange", () => {
            t(this, "hashchange", {
                location: location.toString()
            })
        });
        document.addEventListener("backbutton",
            () => {
                t(this, "backbutton")
            });
        "undefined" !== typeof Windows && Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", a => {
            a.handled = !0;
            t(this, "backbutton")
        })
    }
    wc(f) {
        alert(f.message)
    }
    Cc(f) {
        f = f.isFocus;
        if ("nwjs" === this.B) {
            const a = "nwjs" === this.B ? nw.Window.get() : null;
            f ? a.focus() : a.blur()
        } else f ? window.focus() : window.blur()
    }
});
"use strict";
self.Ca.Qa(class extends self.za {
    constructor(f) {
        super(f, "mouse");
        E(this, "cursor", a => {
            document.documentElement.style.cursor = a
        })
    }
});
"use strict"; {
    const f = 180 / Math.PI;
    self.ea = class extends self.za {
        constructor(a) {
            super(a, "audio");
            this.Kb = this.f = null;
            this.Mb = this.Nc = !1;
            this.oa = () => this.lg();
            this.aa = [];
            this.D = [];
            this.ha = null;
            this.Pd = "";
            this.Qd = -1;
            this.lb = new Map;
            this.Sc = 1;
            this.ma = !1;
            this.Yc = 0;
            this.Yb = 1;
            this.Lc = 0;
            this.Sd = "HRTF";
            this.Jd = "inverse";
            this.Td = 600;
            this.Rd = 1E4;
            this.Vd = 1;
            this.Ld = this.Wc = !1;
            this.Yd = this.v.Be();
            this.ba = new Map;
            this.Fa = new Set;
            this.Pc = !1;
            this.Tc = "";
            this.xa = null;
            self.C3Audio_OnMicrophoneStream = (b, d) => this.zf(b, d);
            this.Jb = null;
            self.C3Audio_GetOutputStream = () => this.tf();
            self.C3Audio_DOMInterface = this;
            F(this, [
                ["create-audio-context", b => this.We(b)],
                ["play", b => this.Mf(b)],
                ["stop", b => this.ig(b)],
                ["stop-all", () => this.jg()],
                ["set-paused", b => this.bg(b)],
                ["set-volume", b => this.gg(b)],
                ["fade-volume", b => this.af(b)],
                ["set-master-volume", b => this.$f(b)],
                ["set-muted", b => this.ag(b)],
                ["set-silent", b => this.dg(b)],
                ["set-looping", b => this.Zf(b)],
                ["set-playback-rate", b => this.cg(b)],
                ["seek", b => this.Tf(b)],
                ["preload", b => this.Nf(b)],
                ["unload", b =>
                    this.mg(b)
                ],
                ["unload-all", () => this.ng()],
                ["set-suspended", b => this.eg(b)],
                ["add-effect", b => this.qd(b)],
                ["set-effect-param", b => this.Wf(b)],
                ["remove-effects", b => this.Pf(b)],
                ["tick", b => this.If(b)],
                ["load-state", b => this.xf(b)]
            ])
        }
        async We(a) {
            a.isiOSCordova && (this.Wc = !0);
            this.Yc = a.timeScaleMode;
            this.Sd = ["equalpower", "HRTF", "soundfield"][a.panningModel];
            this.Jd = ["linear", "inverse", "exponential"][a.distanceModel];
            this.Td = a.refDistance;
            this.Rd = a.maxDistance;
            this.Vd = a.rolloffFactor;
            var b = {
                latencyHint: a.latencyHint
            };
            this.Yd || (b.sampleRate = 48E3);
            if ("undefined" !== typeof AudioContext) this.f = new AudioContext(b);
            else if ("undefined" !== typeof webkitAudioContext) this.f = new webkitAudioContext(b);
            else throw Error("Web Audio API not supported");
            this.rd();
            this.f.onstatechange = () => {
                "running" !== this.f.state && this.rd()
            };
            this.Kb = this.f.createGain();
            this.Kb.connect(this.f.destination);
            b = a.listenerPos;
            this.f.listener.setPosition(b[0], b[1], b[2]);
            this.f.listener.setOrientation(0, 0, 1, 0, -1, 0);
            self.C3_GetAudioContextCurrentTime = () =>
                this.bc();
            try {
                await Promise.all(a.preloadList.map(d => this.Bb(d.originalUrl, d.url, d.type, !1)))
            } catch (d) {
                console.error("[Construct 3] Preloading sounds failed: ", d)
            }
            return {
                sampleRate: this.f.sampleRate
            }
        }
        rd() {
            this.Mb || (this.Nc = !1, window.addEventListener("pointerup", this.oa, !0), window.addEventListener("touchend", this.oa, !0), window.addEventListener("click", this.oa, !0), window.addEventListener("keydown", this.oa, !0), this.Mb = !0)
        }
        Ye() {
            this.Mb && (this.Nc = !0, window.removeEventListener("pointerup", this.oa, !0), window.removeEventListener("touchend",
                this.oa, !0), window.removeEventListener("click", this.oa, !0), window.removeEventListener("keydown", this.oa, !0), this.Mb = !1)
        }
        lg() {
            if (!this.Nc) {
                var a = this.f;
                "suspended" === a.state && a.resume && a.resume();
                var b = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = b;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.Ye()
            }
        }
        W() {
            return this.f
        }
        bc() {
            return this.f.currentTime
        }
        qa() {
            return this.Kb
        }
        fd(a) {
            return (a = this.ba.get(a.toLowerCase())) ? a[0].P() : this.qa()
        }
        de(a, b) {
            a = a.toLowerCase();
            let d = this.ba.get(a);
            d || (d = [], this.ba.set(a, d));
            b.Yf(d.length);
            b.fg(a);
            d.push(b);
            this.Bd(a)
        }
        Bd(a) {
            let b = this.qa();
            const d = this.ba.get(a);
            if (d && d.length) {
                b = d[0].P();
                for (let g = 0, m = d.length; g < m; ++g) {
                    const p = d[g];
                    g + 1 === m ? p.S(this.qa()) : p.S(d[g + 1].P())
                }
            }
            for (const g of this.ka(a)) g.He(b);
            this.xa && this.Tc === a && (this.xa.disconnect(), this.xa.connect(b))
        }
        ub() {
            return this.Sc
        }
        vb() {
            return this.ma
        }
        Xf() {
            this.Ld = !0
        }
        ve(a, b) {
            return b ? this.v.og(a).then(d => {
                    const g = this.f.createBuffer(1, d.length, 48E3);
                    g.getChannelData(0).set(d);
                    return g
                }) :
                new Promise((d, g) => {
                    this.f.decodeAudioData(a, d, g)
                })
        }
        sa(a) {
            this.v.sa(a)
        }
        Ba(a) {
            this.v.Ba(a)
        }
        md(a) {
            let b = 0;
            for (let d = 0, g = this.D.length; d < g; ++d) {
                const m = this.D[d];
                this.D[b] = m;
                m.L === a ? m.c() : ++b
            }
            this.D.length = b
        }
        Ie() {
            let a = 0;
            for (let b = 0, d = this.aa.length; b < d; ++b) {
                const g = this.aa[b];
                this.aa[a] = g;
                g.ra() ? g.c() : ++a
            }
            this.aa.length = a
        }* ka(a) {
            if (a)
                for (const b of this.D) self.ea.we(b.Z, a) && (yield b);
            else this.ha && !this.ha.T() && (yield this.ha)
        }
        async Bb(a, b, d, g, m) {
            for (const p of this.aa)
                if (p.Sa() === b) return await U(p),
                    p;
            if (m) return null;
            g && (this.Wc || this.Ld) && this.Ie();
            m = "audio/webm; codecs=opus" === d && !this.Yd;
            g && m && this.Xf();
            a = !g || this.Wc || m ? new self.re(this, a, b, d, g, m) : new self.pe(this, a, b, d, g);
            this.aa.push(a);
            await U(a);
            return a
        }
        async qc(a, b, d, g, m) {
            for (const p of this.D)
                if (p.Sa() === b && (p.$b() || m)) return p.Ke(g), p;
            a = await this.Bb(a, b, d, m);
            g = "html5" === a.Gc ? new self.qe(a.i, a, g) : new self.se(a.i, a, g);
            this.D.push(g);
            return g
        }
        Oe(a) {
            let b = this.lb.get(a);
            if (!b) {
                let d = null;
                b = {
                    Zc: 0,
                    promise: new Promise(g => d = g),
                    resolve: d
                };
                this.lb.set(a, b)
            }
            b.Zc++
        }
        Qf(a) {
            const b = this.lb.get(a);
            if (!b) throw Error("expected pending tag");
            b.Zc--;
            0 === b.Zc && (b.resolve(), this.lb.delete(a))
        }
        nc(a) {
            a || (a = this.Pd);
            return (a = this.lb.get(a)) ? a.promise : Promise.resolve()
        }
        Cb() {
            if (0 < this.Fa.size) I(this);
            else
                for (const a of this.D)
                    if (a.gd()) {
                        I(this);
                        break
                    }
        }
        Da() {
            for (var a of this.Fa) a.Da();
            a = this.bc();
            for (var b of this.D) b.Da(a);
            b = this.D.filter(d => d.gd()).map(d => d.Ra());
            t(this, "state", {
                tickCount: this.Qd,
                audioInstances: b,
                analysers: [...this.Fa].map(d => d.ye())
            });
            0 === b.length && 0 === this.Fa.size && this.Nb && (this.v.Rf(this.Zd), this.Nb = !1)
        }
        jc(a, b, d) {
            t(this, "trigger", {
                type: a,
                tag: b,
                aiid: d
            })
        }
        async Mf(a) {
            const b = a.originalUrl,
                d = a.url,
                g = a.type,
                m = a.isMusic,
                p = a.tag,
                w = a.isLooping,
                z = a.vol,
                A = a.pos,
                u = a.panning;
            let v = a.off;
            0 < v && !a.trueClock && (this.f.getOutputTimestamp ? (a = this.f.getOutputTimestamp(), v = v - a.performanceTime / 1E3 + a.contextTime) : v = v - performance.now() / 1E3 + this.f.currentTime);
            this.Pd = p;
            this.Oe(p);
            try {
                this.ha = await this.qc(b, d, g, p, m), u ? (this.ha.yb(!0), this.ha.Je(u.x,
                    u.y, u.angle, u.innerAngle, u.outerAngle, u.outerGain), u.hasOwnProperty("uid") && this.ha.Le(u.uid)) : this.ha.yb(!1), this.ha.Play(w, z, A, v)
            } catch (B) {
                console.error("[Construct 3] Audio: error starting playback: ", B);
                return
            } finally {
                this.Qf(p)
            }
            I(this)
        }
        ig(a) {
            a = a.tag;
            for (const b of this.ka(a)) b.la()
        }
        jg() {
            for (const a of this.D) a.la()
        }
        bg(a) {
            const b = a.tag;
            a = a.paused;
            for (const d of this.ka(b)) a ? d.Ta() : d.xb();
            this.Cb()
        }
        gg(a) {
            const b = a.tag;
            a = a.vol;
            for (const d of this.ka(b)) d.Ab(a)
        }
        async af(a) {
            const b = a.tag,
                d = a.vol,
                g = a.duration;
            a = a.stopOnEnd;
            await this.nc(b);
            for (const m of this.ka(b)) m.xe(d, g, a);
            this.Cb()
        }
        $f(a) {
            this.Sc = a.vol;
            for (const b of this.D) b.Hb()
        }
        ag(a) {
            const b = a.tag;
            a = a.isMuted;
            for (const d of this.ka(b)) d.nd(a)
        }
        dg(a) {
            this.ma = a.isSilent;
            this.v.zb(this.ma);
            for (const b of this.D) b.Gb()
        }
        Zf(a) {
            const b = a.tag;
            a = a.isLooping;
            for (const d of this.ka(b)) d.lc(a)
        }
        async cg(a) {
            const b = a.tag;
            a = a.rate;
            await this.nc(b);
            for (const d of this.ka(b)) d.pd(a)
        }
        async Tf(a) {
            const b = a.tag;
            a = a.pos;
            await this.nc(b);
            for (const d of this.ka(b)) d.kc(a)
        }
        async Nf(a) {
            const b =
                a.originalUrl,
                d = a.url,
                g = a.type;
            a = a.isMusic;
            try {
                await this.qc(b, d, g, "", a)
            } catch (m) {
                console.error("[Construct 3] Audio: error preloading: ", m)
            }
        }
        async mg(a) {
            if (a = await this.Bb("", a.url, a.type, a.isMusic, !0)) a.c(), a = this.aa.indexOf(a), -1 !== a && this.aa.splice(a, 1)
        }
        ng() {
            for (const a of this.aa) a.c();
            this.aa.length = 0
        }
        eg(a) {
            a = a.isSuspended;
            !a && this.f.resume && this.f.resume();
            for (const b of this.D) b.mc(a);
            a && this.f.suspend && this.f.suspend()
        }
        If(a) {
            this.Yb = a.timeScale;
            this.Lc = a.gameTime;
            this.Qd = a.tickCount;
            if (0 !==
                this.Yc)
                for (var b of this.D) b.Ea();
            (b = a.listenerPos) && this.f.listener.setPosition(b[0], b[1], b[2]);
            for (const d of a.instPans) {
                a = d.uid;
                for (const g of this.D) g.ga === a && g.od(d.x, d.y, d.angle)
            }
        }
        async qd(a) {
            var b = a.type;
            const d = a.tag;
            var g = a.params;
            if ("filter" === b) g = new self.je(this, ...g);
            else if ("delay" === b) g = new self.he(this, ...g);
            else if ("convolution" === b) {
                b = null;
                try {
                    b = await this.Bb(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
                } catch (m) {
                    console.log("[Construct 3] Audio: error loading convolution: ",
                        m);
                    return
                }
                g = new self.ge(this, b.$, ...g);
                g.Uf(a.bufferOriginalUrl, a.bufferType)
            } else if ("flanger" === b) g = new self.ke(this, ...g);
            else if ("phaser" === b) g = new self.me(this, ...g);
            else if ("gain" === b) g = new self.le(this, ...g);
            else if ("tremolo" === b) g = new self.oe(this, ...g);
            else if ("ringmod" === b) g = new self.ne(this, ...g);
            else if ("distortion" === b) g = new self.ie(this, ...g);
            else if ("compressor" === b) g = new self.fe(this, ...g);
            else if ("analyser" === b) g = new self.ee(this, ...g);
            else throw Error("invalid effect type");
            this.de(d,
                g);
            this.Ad()
        }
        Wf(a) {
            const b = a.index,
                d = a.param,
                g = a.value,
                m = a.ramp,
                p = a.time;
            a = this.ba.get(a.tag);
            !a || 0 > b || b >= a.length || (a[b].X(d, g, m, p), this.Ad())
        }
        Pf(a) {
            a = a.tag.toLowerCase();
            const b = this.ba.get(a);
            if (b && b.length) {
                for (const d of b) d.c();
                this.ba.delete(a);
                this.Bd(a)
            }
        }
        Ne(a) {
            this.Fa.add(a);
            this.Cb()
        }
        Of(a) {
            this.Fa.delete(a)
        }
        Ad() {
            this.Pc || (this.Pc = !0, Promise.resolve().then(() => this.Ze()))
        }
        Ze() {
            const a = {};
            for (const [b, d] of this.ba) a[b] = d.map(g => g.Ra());
            t(this, "fxstate", {
                fxstate: a
            });
            this.Pc = !1
        }
        async xf(a) {
            const b =
                a.saveLoadMode;
            if (3 !== b)
                for (var d of this.D) d.ra() && 1 === b || (d.ra() || 2 !== b) && d.la();
            for (const g of this.ba.values())
                for (const m of g) m.c();
            this.ba.clear();
            this.Yb = a.timeScale;
            this.Lc = a.gameTime;
            d = a.listenerPos;
            this.f.listener.setPosition(d[0], d[1], d[2]);
            this.ma = a.isSilent;
            this.v.zb(this.ma);
            this.Sc = a.masterVolume;
            d = [];
            for (const g of Object.values(a.effects)) d.push(Promise.all(g.map(m => this.qd(m))));
            await Promise.all(d);
            await Promise.all(a.playing.map(g => this.hf(g, b)));
            this.Cb()
        }
        async hf(a, b) {
            if (3 !==
                b) {
                var d = a.bufferOriginalUrl,
                    g = a.bufferUrl,
                    m = a.bufferType,
                    p = a.isMusic,
                    w = a.tag,
                    z = a.isLooping,
                    A = a.volume,
                    u = a.playbackTime;
                if (!p || 1 !== b)
                    if (p || 2 !== b) {
                        b = null;
                        try {
                            b = await this.qc(d, g, m, w, p)
                        } catch (v) {
                            console.error("[Construct 3] Audio: error loading audio state: ", v);
                            return
                        }
                        b.Fe(a.pan);
                        b.Play(z, A, u, 0);
                        a.isPlaying || b.Ta();
                        b.uc(a)
                    }
            }
        }
        zf(a, b) {
            this.xa && this.xa.disconnect();
            this.Tc = b.toLowerCase();
            this.xa = this.f.createMediaStreamSource(a);
            this.xa.connect(this.fd(this.Tc))
        }
        tf() {
            this.Jb || (this.Jb = this.f.createMediaStreamDestination(),
                this.Kb.connect(this.Jb));
            return this.Jb.stream
        }
        static we(a, b) {
            return a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
        }
        static Me(a) {
            return a * f
        }
        static ue(a) {
            return Math.pow(10, a / 20)
        }
        static ed(a) {
            return Math.max(Math.min(self.ea.ue(a), 1), 0)
        }
        static Ee(a) {
            return Math.log(a) / Math.log(10) * 20
        }
        static De(a) {
            return self.ea.Ee(Math.max(Math.min(a, 1), 0))
        }
        static yg(a, b) {
            return 1 - Math.exp(-b * a)
        }
    };
    self.Ca.Qa(self.ea)
}
"use strict";

function U(f) {
    f.Pb || (f.Pb = f.tc());
    return f.Pb
}
self.bd = class {
    constructor(f, a, b, d, g) {
        this.i = f;
        this.ug = a;
        this.ya = b;
        this.R = d;
        this.rg = g;
        this.Gc = "";
        this.Pb = null
    }
    c() {
        this.Pb = this.i = null
    }
    tc() {}
    W() {
        return this.i.W()
    }
    dc() {
        return this.ug
    }
    Sa() {
        return this.ya
    }
    cc() {
        return this.R
    }
    ra() {
        return this.rg
    }
    fa() {}
};
"use strict";
self.pe = class extends self.bd {
    constructor(f, a, b, d, g) {
        super(f, a, b, d, g);
        this.Gc = "html5";
        this.J = new Audio;
        this.J.crossOrigin = "anonymous";
        this.J.autoplay = !1;
        this.J.preload = "auto";
        this.fb = this.gb = null;
        this.J.addEventListener("canplaythrough", () => !0);
        this.kb = this.W().createGain();
        this.ib = null;
        this.J.addEventListener("canplay", () => {
            this.gb && (this.gb(), this.fb = this.gb = null);
            !this.ib && this.J && (this.ib = this.W().createMediaElementSource(this.J), this.ib.connect(this.kb))
        });
        this.onended = null;
        this.J.addEventListener("ended",
            () => {
                if (this.onended) this.onended()
            });
        this.J.addEventListener("error", m => {
            console.error(`[Construct 3] Audio '${this.ya}' error: `, m);
            this.fb && (this.fb(m), this.fb = this.gb = null)
        })
    }
    c() {
        this.i.md(this);
        this.kb.disconnect();
        this.kb = null;
        this.ib.disconnect();
        this.ib = null;
        this.J && !this.J.paused && this.J.pause();
        this.J = this.onended = null;
        super.c()
    }
    tc() {
        return new Promise((f, a) => {
            this.gb = f;
            this.fb = a;
            this.J.src = this.ya
        })
    }
    O() {
        return this.J
    }
    fa() {
        return this.J.duration
    }
};
"use strict";
async function V(f) {
    if (f.va) return f.va;
    var a = f.i.v;
    if ("cordova" === a.B && a.hd(f.ya) && "file:" === location.protocol) f.va = await a.sb(f.ya);
    else {
        a = await fetch(f.ya);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        f.va = await a.arrayBuffer()
    }
}
async function W(f) {
    if (f.$) return f.$;
    f.$ = await f.i.ve(f.va, f.tg);
    f.va = null
}
self.re = class extends self.bd {
    constructor(f, a, b, d, g, m) {
        super(f, a, b, d, g);
        this.Gc = "webaudio";
        this.$ = this.va = null;
        this.tg = !!m
    }
    c() {
        this.i.md(this);
        this.$ = this.va = null;
        super.c()
    }
    async tc() {
        try {
            await V(this), await W(this)
        } catch (f) {
            console.error(`[Construct 3] Failed to load audio '${this.ya}': `, f)
        }
    }
    fa() {
        return this.$ ? this.$.duration : 0
    }
};
"use strict"; {
    let f = 0;
    self.cd = class {
        constructor(a, b, d) {
            this.i = a;
            this.L = b;
            this.Z = d;
            this.Ib = f++;
            this.M = this.W().createGain();
            this.M.connect(this.qa());
            this.A = null;
            this.cb = !1;
            this.H = !0;
            this.V = this.ja = this.G = !1;
            this.ob = 1;
            this.Ga = !1;
            this.Y = 1;
            a = this.i.Yc;
            this.Qc = 1 === a && !this.ra() || 2 === a;
            this.$a = this.ga = -1;
            this.Xd = !1
        }
        c() {
            this.L = this.i = null;
            this.A && (this.A.disconnect(), this.A = null);
            this.M.disconnect();
            this.M = null
        }
        W() {
            return this.i.W()
        }
        qa() {
            return this.i.fd(this.Z)
        }
        ub() {
            return this.i.ub()
        }
        tb() {
            return this.Qc ? this.i.Lc :
                performance.now() / 1E3
        }
        dc() {
            return this.L.dc()
        }
        Sa() {
            return this.L.Sa()
        }
        cc() {
            return this.L.cc()
        }
        ra() {
            return this.L.ra()
        }
        Ke(a) {
            this.Z = a
        }
        T() {}
        $b() {}
        IsPlaying() {
            return !this.H && !this.G && !this.T()
        }
        gd() {
            return !this.H && !this.T()
        }
        Aa() {}
        fa() {
            return this.L.fa()
        }
        Play() {}
        la() {}
        Ta() {}
        xb() {}
        Ab(a) {
            this.ob = a;
            this.M.gain.cancelScheduledValues(0);
            this.$a = -1;
            this.M.gain.value = this.ec()
        }
        xe(a, b, d) {
            if (!this.Ga) {
                a *= this.ub();
                var g = this.M.gain;
                g.cancelScheduledValues(0);
                var m = this.i.bc();
                b = m + b;
                g.setValueAtTime(g.value, m);
                g.linearRampToValueAtTime(a, b);
                this.ob = a;
                this.$a = b;
                this.Xd = d
            }
        }
        Hb() {
            this.Ab(this.ob)
        }
        Da(a) {
            -1 !== this.$a && a >= this.$a && (this.$a = -1, this.Xd && this.la(), this.i.jc("fade-ended", this.Z, this.Ib))
        }
        ec() {
            const a = this.ob * this.ub();
            return isFinite(a) ? a : 0
        }
        nd(a) {
            a = !!a;
            this.Ga !== a && (this.Ga = a, this.Gb())
        }
        vb() {
            return this.i.vb()
        }
        Gb() {}
        lc() {}
        pd(a) {
            this.Y !== a && (this.Y = a, this.Ea())
        }
        Ea() {}
        kc() {}
        mc() {}
        yb(a) {
            a = !!a;
            this.cb !== a && ((this.cb = a) ? (this.A || (this.A = this.W().createPanner(), this.A.panningModel = this.i.Sd, this.A.distanceModel =
                this.i.Jd, this.A.refDistance = this.i.Td, this.A.maxDistance = this.i.Rd, this.A.rolloffFactor = this.i.Vd), this.M.disconnect(), this.M.connect(this.A), this.A.connect(this.qa())) : (this.A.disconnect(), this.M.disconnect(), this.M.connect(this.qa())))
        }
        Je(a, b, d, g, m, p) {
            this.cb && (this.od(a, b, d), a = self.ea.Me, this.A.coneInnerAngle = a(g), this.A.coneOuterAngle = a(m), this.A.coneOuterGain = p)
        }
        od(a, b, d) {
            this.cb && (this.A.setPosition(a, b, 0), this.A.setOrientation(Math.cos(d), Math.sin(d), 0))
        }
        Le(a) {
            this.ga = a
        }
        fc() {}
        He(a) {
            const b =
                this.A || this.M;
            b.disconnect();
            b.connect(a)
        }
        Ra() {
            return {
                aiid: this.Ib,
                tag: this.Z,
                duration: this.fa(),
                volume: this.ob,
                isPlaying: this.IsPlaying(),
                playbackTime: this.Aa(),
                playbackRate: this.Y,
                uid: this.ga,
                bufferOriginalUrl: this.dc(),
                bufferUrl: "",
                bufferType: this.cc(),
                isMusic: this.ra(),
                isLooping: this.V,
                isMuted: this.Ga,
                resumePosition: this.fc(),
                pan: this.ze()
            }
        }
        uc(a) {
            this.pd(a.playbackRate);
            this.nd(a.isMuted)
        }
        ze() {
            if (!this.A) return null;
            const a = this.A;
            return {
                pos: [a.positionX.value, a.positionY.value, a.positionZ.value],
                orient: [a.orientationX.value, a.orientationY.value, a.orientationZ.value],
                cia: a.coneInnerAngle,
                coa: a.coneOuterAngle,
                cog: a.coneOuterGain,
                uid: this.ga
            }
        }
        Fe(a) {
            a ? (this.yb(!0), a = this.A, a.setPosition(...a.pos), a.setOrientation(...a.orient), a.coneInnerAngle = a.cia, a.coneOuterAngle = a.coa, a.coneOuterGain = a.cog, this.ga = a.uid) : this.yb(!1)
        }
    }
}
"use strict";
self.qe = class extends self.cd {
    constructor(f, a, b) {
        super(f, a, b);
        this.L.kb.connect(this.M);
        this.L.onended = () => this.xc()
    }
    c() {
        this.la();
        this.L.kb.disconnect();
        super.c()
    }
    O() {
        return this.L.O()
    }
    xc() {
        this.H = !0;
        this.ga = -1;
        this.i.jc("ended", this.Z, this.Ib)
    }
    T() {
        return this.O().ended
    }
    $b() {
        return this.H ? !0 : this.T()
    }
    Aa(f) {
        let a = this.O().currentTime;
        f && (a *= this.Y);
        this.V || (a = Math.min(a, this.fa()));
        return a
    }
    Play(f, a, b) {
        const d = this.O();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== f && (d.loop = f);
        this.Ab(a);
        d.muted &&
            (d.muted = !1);
        if (d.currentTime !== b) try {
            d.currentTime = b
        } catch (g) {
            console.warn(`[Construct 3] Exception seeking audio '${this.L.Sa()}' to position '${b}': `, g)
        }
        this.i.sa(d);
        this.G = this.H = !1;
        this.V = f;
        this.Y = 1
    }
    la() {
        const f = this.O();
        f.paused || f.pause();
        this.i.Ba(f);
        this.H = !0;
        this.G = !1;
        this.ga = -1
    }
    Ta() {
        if (!(this.G || this.H || this.T())) {
            var f = this.O();
            f.paused || f.pause();
            this.i.Ba(f);
            this.G = !0
        }
    }
    xb() {
        !this.G || this.H || this.T() || (this.i.sa(this.O()), this.G = !1)
    }
    Gb() {
        this.O().muted = this.Ga || this.vb()
    }
    lc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.O().loop = f)
    }
    Ea() {
        let f = this.Y;
        this.Qc && (f *= this.i.Yb);
        try {
            this.O().playbackRate = f
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${f}':`, a)
        }
    }
    kc(f) {
        if (!this.H && !this.T()) try {
            this.O().currentTime = f
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${f}': `, a)
        }
    }
    fc() {
        return this.Aa()
    }
    mc(f) {
        f ? this.IsPlaying() ? (this.O().pause(), this.ja = !0) : this.ja = !1 : this.ja && (this.i.sa(this.O()), this.ja = !1)
    }
};
"use strict";

function X(f) {
    f.j && f.j.disconnect();
    f.j = null;
    f.Wa = null
}
self.se = class extends self.cd {
    constructor(f, a, b) {
        super(f, a, b);
        this.j = null;
        this.Sb = d => this.xc(d);
        this.Mc = !0;
        this.Wa = null;
        this.N = this.Xb = 0;
        this.Uc = 1
    }
    c() {
        this.la();
        X(this);
        this.Sb = null;
        super.c()
    }
    xc(f) {
        this.G || this.ja || f.target !== this.Wa || (this.H = this.Mc = !0, this.ga = -1, X(this), this.i.jc("ended", this.Z, this.Ib))
    }
    T() {
        return !this.H && this.j && this.j.loop || this.G ? !1 : this.Mc
    }
    $b() {
        return !this.j || this.H ? !0 : this.T()
    }
    Aa(f) {
        let a;
        a = this.G ? this.N : this.tb() - this.Xb;
        f && (a *= this.Y);
        this.V || (a = Math.min(a, this.fa()));
        return a
    }
    Play(f,
        a, b, d) {
        this.Uc = 1;
        this.Ab(a);
        X(this);
        this.j = this.W().createBufferSource();
        this.j.buffer = this.L.$;
        this.j.connect(this.M);
        this.Wa = this.j;
        this.j.onended = this.Sb;
        this.j.loop = f;
        this.j.start(d, b);
        this.G = this.H = this.Mc = !1;
        this.V = f;
        this.Y = 1;
        this.Xb = this.tb() - b
    }
    la() {
        if (this.j) try {
            this.j.stop(0)
        } catch (f) {}
        this.H = !0;
        this.G = !1;
        this.ga = -1
    }
    Ta() {
        this.G || this.H || this.T() || (this.N = this.Aa(!0), this.V && (this.N %= this.fa()), this.G = !0, this.j.stop(0))
    }
    xb() {
        !this.G || this.H || this.T() || (X(this), this.j = this.W().createBufferSource(),
            this.j.buffer = this.L.$, this.j.connect(this.M), this.Wa = this.j, this.j.onended = this.Sb, this.j.loop = this.V, this.Hb(), this.Ea(), this.Xb = this.tb() - this.N / (this.Y || .001), this.j.start(0, this.N), this.G = !1)
    }
    ec() {
        return super.ec() * this.Uc
    }
    Gb() {
        this.Uc = this.Ga || this.vb() ? 0 : 1;
        this.Hb()
    }
    lc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.j && (this.j.loop = f))
    }
    Ea() {
        let f = this.Y;
        this.Qc && (f *= this.i.Yb);
        this.j && (this.j.playbackRate.value = f)
    }
    kc(f) {
        this.H || this.T() || (this.G ? this.N = f : (this.Ta(), this.N = f, this.xb()))
    }
    fc() {
        return this.N
    }
    mc(f) {
        f ?
            this.IsPlaying() ? (this.ja = !0, this.N = this.Aa(!0), this.V && (this.N %= this.fa()), this.j.stop(0)) : this.ja = !1 : this.ja && (X(this), this.j = this.W().createBufferSource(), this.j.buffer = this.L.$, this.j.connect(this.M), this.Wa = this.j, this.j.onended = this.Sb, this.j.loop = this.V, this.Hb(), this.Ea(), this.Xb = this.tb() - this.N / (this.Y || .001), this.j.start(0, this.N), this.ja = !1)
    }
    uc(f) {
        super.uc(f);
        this.N = f.resumePosition
    }
};
"use strict"; {
    class f {
        constructor(a) {
            this.i = a;
            this.f = a.W();
            this.Md = -1;
            this.R = this.Z = "";
            this.g = null
        }
        c() {
            this.f = null
        }
        Yf(a) {
            this.Md = a
        }
        fg(a) {
            this.Z = a
        }
        o() {
            return this.f.createGain()
        }
        P() {}
        S() {}
        m(a, b, d, g) {
            a.cancelScheduledValues(0);
            if (0 === g) a.value = b;
            else {
                var m = this.f.currentTime;
                g += m;
                switch (d) {
                    case 0:
                        a.setValueAtTime(b, g);
                        break;
                    case 1:
                        a.setValueAtTime(a.value, m);
                        a.linearRampToValueAtTime(b, g);
                        break;
                    case 2:
                        a.setValueAtTime(a.value, m), a.exponentialRampToValueAtTime(b, g)
                }
            }
        }
        Ra() {
            return {
                type: this.R,
                tag: this.Z,
                params: this.g
            }
        }
    }
    self.je = class extends f {
        constructor(a, b, d, g, m, p, w) {
            super(a);
            this.R = "filter";
            this.g = [b, d, g, m, p, w];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = w;
            this.a = this.o();
            this.a.gain.value = 1 - w;
            this.u = this.f.createBiquadFilter();
            this.u.type = b;
            this.u.frequency.value = d;
            this.u.detune.value = g;
            this.u.Q.value = m;
            this.u.gain.vlaue = p;
            this.l.connect(this.u);
            this.l.connect(this.a);
            this.u.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.u.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 1:
                    this.g[1] = b;
                    this.m(this.u.frequency, b, d, g);
                    break;
                case 2:
                    this.g[2] = b;
                    this.m(this.u.detune, b, d, g);
                    break;
                case 3:
                    this.g[3] = b;
                    this.m(this.u.Q, b, d, g);
                    break;
                case 4:
                    this.g[4] = b, this.m(this.u.gain, b, d, g)
            }
        }
    };
    self.he = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "delay";
            this.g = [b, d, g];
            this.l =
                this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value = 1 - g;
            this.hb = this.o();
            this.U = this.f.createDelay(b);
            this.U.delayTime.value = b;
            this.Za = this.o();
            this.Za.gain.value = d;
            this.l.connect(this.hb);
            this.l.connect(this.a);
            this.hb.connect(this.b);
            this.hb.connect(this.U);
            this.U.connect(this.Za);
            this.Za.connect(this.hb)
        }
        c() {
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            this.hb.disconnect();
            this.U.disconnect();
            this.Za.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            const m = self.ea.ed;
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[2] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 4:
                    this.g[1] = m(b);
                    this.m(this.Za.gain, m(b), d, g);
                    break;
                case 5:
                    this.g[0] = b, this.m(this.U.delayTime, b, d, g)
            }
        }
    };
    self.ge = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "convolution";
            this.g = [d, g];
            this.Hd = this.Gd = "";
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value =
                1 - g;
            this.Ya = this.f.createConvolver();
            this.Ya.normalize = d;
            this.Ya.buffer = b;
            this.l.connect(this.Ya);
            this.l.connect(this.a);
            this.Ya.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Ya.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[1] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
        Uf(a, b) {
            this.Gd = a;
            this.Hd = b
        }
        Ra() {
            const a =
                super.Ra();
            a.bufferOriginalUrl = this.Gd;
            a.bufferUrl = "";
            a.bufferType = this.Hd;
            return a
        }
    };
    self.ke = class extends f {
        constructor(a, b, d, g, m, p) {
            super(a);
            this.R = "flanger";
            this.g = [b, d, g, m, p];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - p / 2;
            this.b = this.o();
            this.b.gain.value = p / 2;
            this.ab = this.o();
            this.ab.gain.value = m;
            this.U = this.f.createDelay(b + d);
            this.U.delayTime.value = b;
            this.s = this.f.createOscillator();
            this.s.frequency.value = g;
            this.I = this.o();
            this.I.gain.value = d;
            this.l.connect(this.U);
            this.l.connect(this.a);
            this.U.connect(this.b);
            this.U.connect(this.ab);
            this.ab.connect(this.U);
            this.s.connect(this.I);
            this.I.connect(this.U.delayTime);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.U.disconnect();
            this.s.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            this.ab.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[4] = b;
                    this.m(this.b.gain,
                        b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 6:
                    this.g[1] = b / 1E3;
                    this.m(this.I.gain, b / 1E3, d, g);
                    break;
                case 7:
                    this.g[2] = b;
                    this.m(this.s.frequency, b, d, g);
                    break;
                case 8:
                    this.g[3] = b / 100, this.m(this.ab.gain, b / 100, d, g)
            }
        }
    };
    self.me = class extends f {
        constructor(a, b, d, g, m, p, w) {
            super(a);
            this.R = "phaser";
            this.g = [b, d, g, m, p, w];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - w / 2;
            this.b = this.o();
            this.b.gain.value = w / 2;
            this.u = this.f.createBiquadFilter();
            this.u.type = "allpass";
            this.u.frequency.value = b;
            this.u.detune.value =
                d;
            this.u.Q.value = g;
            this.s = this.f.createOscillator();
            this.s.frequency.value = p;
            this.I = this.o();
            this.I.gain.value = m;
            this.l.connect(this.u);
            this.l.connect(this.a);
            this.u.connect(this.b);
            this.s.connect(this.I);
            this.I.connect(this.u.frequency);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.u.disconnect();
            this.s.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a,
            b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 1:
                    this.g[0] = b;
                    this.m(this.u.frequency, b, d, g);
                    break;
                case 2:
                    this.g[1] = b;
                    this.m(this.u.detune, b, d, g);
                    break;
                case 3:
                    this.g[2] = b;
                    this.m(this.u.Q, b, d, g);
                    break;
                case 6:
                    this.g[3] = b;
                    this.m(this.I.gain, b, d, g);
                    break;
                case 7:
                    this.g[4] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.le = class extends f {
        constructor(a, b) {
            super(a);
            this.R = "gain";
            this.g = [b];
            this.h = this.o();
            this.h.gain.value =
                b
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            const m = self.ea.ed;
            switch (a) {
                case 4:
                    this.g[0] = m(b), this.m(this.h.gain, m(b), d, g)
            }
        }
    };
    self.oe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "tremolo";
            this.g = [b, d];
            this.h = this.o();
            this.h.gain.value = 1 - d / 2;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.I = this.o();
            this.I.gain.value = d / 2;
            this.s.connect(this.I);
            this.I.connect(this.h.gain);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.I.disconnect();
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.h.gain, 1 - b / 2, d, g);
                    this.m(this.I.gain, b / 2, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.ne = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "ringmod";
            this.g = [b, d];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = d;
            this.a = this.o();
            this.a.gain.value = 1 - d;
            this.nb = this.o();
            this.nb.gain.value =
                0;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.s.connect(this.nb.gain);
            this.s.start(0);
            this.l.connect(this.nb);
            this.l.connect(this.a);
            this.nb.connect(this.b)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.nb.disconnect();
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.ie = class extends f {
        constructor(a, b, d, g, m, p) {
            super(a);
            this.R = "distortion";
            this.g = [b, d, g, m, p];
            this.l = this.o();
            this.Ub = this.o();
            this.Tb = this.o();
            this.Vf(g, m);
            this.b = this.o();
            this.b.gain.value = p;
            this.a = this.o();
            this.a.gain.value = 1 - p;
            this.Zb = this.f.createWaveShaper();
            this.Jc = new Float32Array(65536);
            this.cf(b, d);
            this.Zb.curve = this.Jc;
            this.l.connect(this.Ub);
            this.l.connect(this.a);
            this.Ub.connect(this.Zb);
            this.Zb.connect(this.Tb);
            this.Tb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Ub.disconnect();
            this.Zb.disconnect();
            this.Tb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        Vf(a, b) {
            .01 > a && (a = .01);
            this.Ub.gain.value = a;
            this.Tb.gain.value = Math.pow(1 / a, .6) * b
        }
        cf(a, b) {
            for (let d = 0; 32768 > d; ++d) {
                let g = d / 32768;
                g = this.hg(g, a, b);
                this.Jc[32768 + d] = g;
                this.Jc[32768 - d - 1] = -g
            }
        }
        hg(a, b, d) {
            d = 1.05 * d * b - b;
            const g = 0 > a ? -a : a;
            return (g < b ? g : b + d * self.ea.yg(g - b, 1 / d)) * (0 > a ? -1 : 1)
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[4] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
    };
    self.fe = class extends f {
        constructor(a, b, d, g, m, p) {
            super(a);
            this.R = "compressor";
            this.g = [b, d, g, m, p];
            this.h = this.f.createDynamicsCompressor();
            this.h.threshold.value = b;
            this.h.knee.value = d;
            this.h.ratio.value = g;
            this.h.attack.value = m;
            this.h.release.value = p
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
    };
    self.ee = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "analyser";
            this.g = [b, d];
            this.h = this.f.createAnalyser();
            this.h.fftSize = b;
            this.h.smoothingTimeConstant = d;
            this.Kd = new Float32Array(this.h.frequencyBinCount);
            this.Wd = new Uint8Array(b);
            this.Ud = this.Ja = 0;
            this.i.Ne(this)
        }
        c() {
            this.i.Of(this);
            this.h.disconnect();
            super.c()
        }
        Da() {
            this.h.getFloatFrequencyData(this.Kd);
            this.h.getByteTimeDomainData(this.Wd);
            const a = this.h.fftSize;
            let b = this.Ja = 0;
            for (var d = 0; d < a; ++d) {
                let g = (this.Wd[d] - 128) / 128;
                0 > g && (g = -g);
                this.Ja < g && (this.Ja = g);
                b += g * g
            }
            d = self.ea.De;
            this.Ja = d(this.Ja);
            this.Ud = d(Math.sqrt(b / a))
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
        ye() {
            return {
                tag: this.Z,
                index: this.Md,
                peak: this.Ja,
                rms: this.Ud,
                binCount: this.h.frequencyBinCount,
                freqBins: this.Kd
            }
        }
    }
};