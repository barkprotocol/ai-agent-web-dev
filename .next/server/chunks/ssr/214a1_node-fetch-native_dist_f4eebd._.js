module.exports = {

"[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/shared/node-fetch-native.1a4a356d.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "c": (()=>n),
    "g": (()=>f)
});
var t = Object.defineProperty;
var o = (e, l)=>t(e, "name", {
        value: l,
        configurable: !0
    });
var n = typeof globalThis < "u" ? globalThis : "undefined" < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o(f, "getDefaultExportFromCjs");
;
}}),
"[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/node.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AbortController": (()=>Mn),
    "AbortError": (()=>_r),
    "Blob": (()=>ut),
    "FetchError": (()=>G),
    "File": (()=>On),
    "FormData": (()=>br),
    "Headers": (()=>ye),
    "Request": (()=>dt),
    "Response": (()=>le),
    "blobFrom": (()=>hl),
    "blobFromSync": (()=>dl),
    "default": (()=>Fi),
    "fetch": (()=>Fi),
    "fileFrom": (()=>pl),
    "fileFromSync": (()=>bl),
    "isRedirect": (()=>Ln)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:http [external] (node:http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:https [external] (node:https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:zlib [external] (node:zlib, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$shared$2f$node$2d$fetch$2d$native$2e$1a4a356d$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/shared/node-fetch-native.1a4a356d.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$net__$5b$external$5d$__$28$node$3a$net$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:net [external] (node:net, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:path [external] (node:path, cjs)");
var As = Object.defineProperty;
var n = (i1, o)=>As(i1, "name", {
        value: o,
        configurable: !0
    });
var fi = (i1, o, a)=>{
    if (!o.has(i1)) throw TypeError("Cannot " + a);
};
var O = (i1, o, a)=>(fi(i1, o, "read from private field"), a ? a.call(i1) : o.get(i1)), be = (i1, o, a)=>{
    if (o.has(i1)) throw TypeError("Cannot add the same private member more than once");
    o instanceof WeakSet ? o.add(i1) : o.set(i1, a);
}, X = (i1, o, a, u)=>(fi(i1, o, "write to private field"), u ? u.call(i1, a) : o.set(i1, a), a);
var ve, kt, bt, Cr, Ve, Wt, qt, Ot, ee, zt, Ne, He, It;
;
;
;
;
;
;
;
;
;
;
;
function js(i1) {
    if (!/^data:/i.test(i1)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    i1 = i1.replace(/\r?\n/g, "");
    const o = i1.indexOf(",");
    if (o === -1 || o <= 4) throw new TypeError("malformed data: URI");
    const a = i1.substring(5, o).split(";");
    let u = "", l = !1;
    const p = a[0] || "text/plain";
    let h = p;
    for(let E = 1; E < a.length; E++)a[E] === "base64" ? l = !0 : a[E] && (h += `;${a[E]}`, a[E].indexOf("charset=") === 0 && (u = a[E].substring(8)));
    !a[0] && !u.length && (h += ";charset=US-ASCII", u = "US-ASCII");
    const g = l ? "base64" : "ascii", A = unescape(i1.substring(o + 1)), w = Buffer.from(A, g);
    return w.type = p, w.typeFull = h, w.charset = u, w;
}
n(js, "dataUriToBuffer");
var pr = {
    exports: {}
}; /**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */ 
var di;
function Ls() {
    return di || (di = 1, function(i1, o) {
        (function(a, u) {
            u(o);
        })(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$shared$2f$node$2d$fetch$2d$native$2e$1a4a356d$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"], function(a) {
            function u() {}
            n(u, "noop");
            function l(e) {
                return typeof e == "object" && e !== null || typeof e == "function";
            }
            n(l, "typeIsObject");
            const p = u;
            function h(e, t) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t,
                        configurable: !0
                    });
                } catch  {}
            }
            n(h, "setFunctionName");
            const g = Promise, A = Promise.prototype.then, w = Promise.reject.bind(g);
            function E(e) {
                return new g(e);
            }
            n(E, "newPromise");
            function T(e) {
                return E((t)=>t(e));
            }
            n(T, "promiseResolvedWith");
            function b(e) {
                return w(e);
            }
            n(b, "promiseRejectedWith");
            function q(e, t, r) {
                return A.call(e, t, r);
            }
            n(q, "PerformPromiseThen");
            function _(e, t, r) {
                q(q(e, t, r), void 0, p);
            }
            n(_, "uponPromise");
            function V(e, t) {
                _(e, t);
            }
            n(V, "uponFulfillment");
            function I(e, t) {
                _(e, void 0, t);
            }
            n(I, "uponRejection");
            function F(e, t, r) {
                return q(e, t, r);
            }
            n(F, "transformPromiseWith");
            function Q(e) {
                q(e, void 0, p);
            }
            n(Q, "setPromiseIsHandledToTrue");
            let ge = n((e)=>{
                if (typeof queueMicrotask == "function") ge = queueMicrotask;
                else {
                    const t = T(void 0);
                    ge = n((r)=>q(t, r), "_queueMicrotask");
                }
                return ge(e);
            }, "_queueMicrotask");
            function z(e, t, r) {
                if (typeof e != "function") throw new TypeError("Argument is not a function");
                return Function.prototype.apply.call(e, t, r);
            }
            n(z, "reflectCall");
            function j(e, t, r) {
                try {
                    return T(z(e, t, r));
                } catch (s) {
                    return b(s);
                }
            }
            n(j, "promiseCall");
            const U = 16384, bn = class bn {
                constructor(){
                    this._cursor = 0, this._size = 0, this._front = {
                        _elements: [],
                        _next: void 0
                    }, this._back = this._front, this._cursor = 0, this._size = 0;
                }
                get length() {
                    return this._size;
                }
                push(t) {
                    const r = this._back;
                    let s = r;
                    r._elements.length === U - 1 && (s = {
                        _elements: [],
                        _next: void 0
                    }), r._elements.push(t), s !== r && (this._back = s, r._next = s), ++this._size;
                }
                shift() {
                    const t = this._front;
                    let r = t;
                    const s = this._cursor;
                    let f = s + 1;
                    const c = t._elements, d = c[s];
                    return f === U && (r = t._next, f = 0), --this._size, this._cursor = f, t !== r && (this._front = r), c[s] = void 0, d;
                }
                forEach(t) {
                    let r = this._cursor, s = this._front, f = s._elements;
                    for(; (r !== f.length || s._next !== void 0) && !(r === f.length && (s = s._next, f = s._elements, r = 0, f.length === 0));)t(f[r]), ++r;
                }
                peek() {
                    const t = this._front, r = this._cursor;
                    return t._elements[r];
                }
            };
            n(bn, "SimpleQueue");
            let D = bn;
            const Ft = Symbol("[[AbortSteps]]"), Qn = Symbol("[[ErrorSteps]]"), Ar = Symbol("[[CancelSteps]]"), Br = Symbol("[[PullSteps]]"), kr = Symbol("[[ReleaseSteps]]");
            function Yn(e, t) {
                e._ownerReadableStream = t, t._reader = e, t._state === "readable" ? qr(e) : t._state === "closed" ? Li(e) : Gn(e, t._storedError);
            }
            n(Yn, "ReadableStreamReaderGenericInitialize");
            function Wr(e, t) {
                const r = e._ownerReadableStream;
                return ie(r, t);
            }
            n(Wr, "ReadableStreamReaderGenericCancel");
            function _e(e) {
                const t = e._ownerReadableStream;
                t._state === "readable" ? Or(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : $i(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t._readableStreamController[kr](), t._reader = void 0, e._ownerReadableStream = void 0;
            }
            n(_e, "ReadableStreamReaderGenericRelease");
            function jt(e) {
                return new TypeError("Cannot " + e + " a stream using a released reader");
            }
            n(jt, "readerLockException");
            function qr(e) {
                e._closedPromise = E((t, r)=>{
                    e._closedPromise_resolve = t, e._closedPromise_reject = r;
                });
            }
            n(qr, "defaultReaderClosedPromiseInitialize");
            function Gn(e, t) {
                qr(e), Or(e, t);
            }
            n(Gn, "defaultReaderClosedPromiseInitializeAsRejected");
            function Li(e) {
                qr(e), Zn(e);
            }
            n(Li, "defaultReaderClosedPromiseInitializeAsResolved");
            function Or(e, t) {
                e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
            }
            n(Or, "defaultReaderClosedPromiseReject");
            function $i(e, t) {
                Gn(e, t);
            }
            n($i, "defaultReaderClosedPromiseResetToRejected");
            function Zn(e) {
                e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
            }
            n(Zn, "defaultReaderClosedPromiseResolve");
            const Kn = Number.isFinite || function(e) {
                return typeof e == "number" && isFinite(e);
            }, Di = Math.trunc || function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e);
            };
            function Mi(e) {
                return typeof e == "object" || typeof e == "function";
            }
            n(Mi, "isDictionary");
            function ue(e, t) {
                if (e !== void 0 && !Mi(e)) throw new TypeError(`${t} is not an object.`);
            }
            n(ue, "assertDictionary");
            function Z(e, t) {
                if (typeof e != "function") throw new TypeError(`${t} is not a function.`);
            }
            n(Z, "assertFunction");
            function Ui(e) {
                return typeof e == "object" && e !== null || typeof e == "function";
            }
            n(Ui, "isObject");
            function Jn(e, t) {
                if (!Ui(e)) throw new TypeError(`${t} is not an object.`);
            }
            n(Jn, "assertObject");
            function Se(e, t, r) {
                if (e === void 0) throw new TypeError(`Parameter ${t} is required in '${r}'.`);
            }
            n(Se, "assertRequiredArgument");
            function zr(e, t, r) {
                if (e === void 0) throw new TypeError(`${t} is required in '${r}'.`);
            }
            n(zr, "assertRequiredField");
            function Ir(e) {
                return Number(e);
            }
            n(Ir, "convertUnrestrictedDouble");
            function Xn(e) {
                return e === 0 ? 0 : e;
            }
            n(Xn, "censorNegativeZero");
            function xi(e) {
                return Xn(Di(e));
            }
            n(xi, "integerPart");
            function Fr(e, t) {
                const s = Number.MAX_SAFE_INTEGER;
                let f = Number(e);
                if (f = Xn(f), !Kn(f)) throw new TypeError(`${t} is not a finite number`);
                if (f = xi(f), f < 0 || f > s) throw new TypeError(`${t} is outside the accepted range of 0 to ${s}, inclusive`);
                return !Kn(f) || f === 0 ? 0 : f;
            }
            n(Fr, "convertUnsignedLongLongWithEnforceRange");
            function jr(e, t) {
                if (!We(e)) throw new TypeError(`${t} is not a ReadableStream.`);
            }
            n(jr, "assertReadableStream");
            function Qe(e) {
                return new fe(e);
            }
            n(Qe, "AcquireReadableStreamDefaultReader");
            function eo(e, t) {
                e._reader._readRequests.push(t);
            }
            n(eo, "ReadableStreamAddReadRequest");
            function Lr(e, t, r) {
                const f = e._reader._readRequests.shift();
                r ? f._closeSteps() : f._chunkSteps(t);
            }
            n(Lr, "ReadableStreamFulfillReadRequest");
            function Lt(e) {
                return e._reader._readRequests.length;
            }
            n(Lt, "ReadableStreamGetNumReadRequests");
            function to(e) {
                const t = e._reader;
                return !(t === void 0 || !Ee(t));
            }
            n(to, "ReadableStreamHasDefaultReader");
            const mn = class mn {
                constructor(t){
                    if (Se(t, 1, "ReadableStreamDefaultReader"), jr(t, "First parameter"), qe(t)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    Yn(this, t), this._readRequests = new D;
                }
                get closed() {
                    return Ee(this) ? this._closedPromise : b($t("closed"));
                }
                cancel(t = void 0) {
                    return Ee(this) ? this._ownerReadableStream === void 0 ? b(jt("cancel")) : Wr(this, t) : b($t("cancel"));
                }
                read() {
                    if (!Ee(this)) return b($t("read"));
                    if (this._ownerReadableStream === void 0) return b(jt("read from"));
                    let t, r;
                    const s = E((c, d)=>{
                        t = c, r = d;
                    });
                    return mt(this, {
                        _chunkSteps: (c)=>t({
                                value: c,
                                done: !1
                            }),
                        _closeSteps: ()=>t({
                                value: void 0,
                                done: !0
                            }),
                        _errorSteps: (c)=>r(c)
                    }), s;
                }
                releaseLock() {
                    if (!Ee(this)) throw $t("releaseLock");
                    this._ownerReadableStream !== void 0 && Ni(this);
                }
            };
            n(mn, "ReadableStreamDefaultReader");
            let fe = mn;
            Object.defineProperties(fe.prototype, {
                cancel: {
                    enumerable: !0
                },
                read: {
                    enumerable: !0
                },
                releaseLock: {
                    enumerable: !0
                },
                closed: {
                    enumerable: !0
                }
            }), h(fe.prototype.cancel, "cancel"), h(fe.prototype.read, "read"), h(fe.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(fe.prototype, Symbol.toStringTag, {
                value: "ReadableStreamDefaultReader",
                configurable: !0
            });
            function Ee(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? !1 : e instanceof fe;
            }
            n(Ee, "IsReadableStreamDefaultReader");
            function mt(e, t) {
                const r = e._ownerReadableStream;
                r._disturbed = !0, r._state === "closed" ? t._closeSteps() : r._state === "errored" ? t._errorSteps(r._storedError) : r._readableStreamController[Br](t);
            }
            n(mt, "ReadableStreamDefaultReaderRead");
            function Ni(e) {
                _e(e);
                const t = new TypeError("Reader was released");
                ro(e, t);
            }
            n(Ni, "ReadableStreamDefaultReaderRelease");
            function ro(e, t) {
                const r = e._readRequests;
                e._readRequests = new D, r.forEach((s)=>{
                    s._errorSteps(t);
                });
            }
            n(ro, "ReadableStreamDefaultReaderErrorReadRequests");
            function $t(e) {
                return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
            }
            n($t, "defaultReaderBrandCheckException");
            const Hi = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype), yn = class yn {
                constructor(t, r){
                    this._ongoingPromise = void 0, this._isFinished = !1, this._reader = t, this._preventCancel = r;
                }
                next() {
                    const t = n(()=>this._nextSteps(), "nextSteps");
                    return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t, t) : t(), this._ongoingPromise;
                }
                return(t) {
                    const r = n(()=>this._returnSteps(t), "returnSteps");
                    return this._ongoingPromise ? F(this._ongoingPromise, r, r) : r();
                }
                _nextSteps() {
                    if (this._isFinished) return Promise.resolve({
                        value: void 0,
                        done: !0
                    });
                    const t = this._reader;
                    let r, s;
                    const f = E((d, m)=>{
                        r = d, s = m;
                    });
                    return mt(t, {
                        _chunkSteps: (d)=>{
                            this._ongoingPromise = void 0, ge(()=>r({
                                    value: d,
                                    done: !1
                                }));
                        },
                        _closeSteps: ()=>{
                            this._ongoingPromise = void 0, this._isFinished = !0, _e(t), r({
                                value: void 0,
                                done: !0
                            });
                        },
                        _errorSteps: (d)=>{
                            this._ongoingPromise = void 0, this._isFinished = !0, _e(t), s(d);
                        }
                    }), f;
                }
                _returnSteps(t) {
                    if (this._isFinished) return Promise.resolve({
                        value: t,
                        done: !0
                    });
                    this._isFinished = !0;
                    const r = this._reader;
                    if (!this._preventCancel) {
                        const s = Wr(r, t);
                        return _e(r), F(s, ()=>({
                                value: t,
                                done: !0
                            }));
                    }
                    return _e(r), T({
                        value: t,
                        done: !0
                    });
                }
            };
            n(yn, "ReadableStreamAsyncIteratorImpl");
            let Dt = yn;
            const no = {
                next () {
                    return oo(this) ? this._asyncIteratorImpl.next() : b(io("next"));
                },
                return (e) {
                    return oo(this) ? this._asyncIteratorImpl.return(e) : b(io("return"));
                }
            };
            Object.setPrototypeOf(no, Hi);
            function Vi(e, t) {
                const r = Qe(e), s = new Dt(r, t), f = Object.create(no);
                return f._asyncIteratorImpl = s, f;
            }
            n(Vi, "AcquireReadableStreamAsyncIterator");
            function oo(e) {
                if (!l(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return !1;
                try {
                    return e._asyncIteratorImpl instanceof Dt;
                } catch  {
                    return !1;
                }
            }
            n(oo, "IsReadableStreamAsyncIterator");
            function io(e) {
                return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
            }
            n(io, "streamAsyncIteratorBrandCheckException");
            const ao = Number.isNaN || function(e) {
                return e !== e;
            };
            var $r, Dr, Mr;
            function yt(e) {
                return e.slice();
            }
            n(yt, "CreateArrayFromList");
            function so(e, t, r, s, f) {
                new Uint8Array(e).set(new Uint8Array(r, s, f), t);
            }
            n(so, "CopyDataBlockBytes");
            let we = n((e)=>(typeof e.transfer == "function" ? we = n((t)=>t.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? we = n((t)=>structuredClone(t, {
                        transfer: [
                            t
                        ]
                    }), "TransferArrayBuffer") : we = n((t)=>t, "TransferArrayBuffer"), we(e)), "TransferArrayBuffer"), Ae = n((e)=>(typeof e.detached == "boolean" ? Ae = n((t)=>t.detached, "IsDetachedBuffer") : Ae = n((t)=>t.byteLength === 0, "IsDetachedBuffer"), Ae(e)), "IsDetachedBuffer");
            function lo(e, t, r) {
                if (e.slice) return e.slice(t, r);
                const s = r - t, f = new ArrayBuffer(s);
                return so(f, 0, e, t, s), f;
            }
            n(lo, "ArrayBufferSlice");
            function Mt(e, t) {
                const r = e[t];
                if (r != null) {
                    if (typeof r != "function") throw new TypeError(`${String(t)} is not a function`);
                    return r;
                }
            }
            n(Mt, "GetMethod");
            function Qi(e) {
                const t = {
                    [Symbol.iterator]: ()=>e.iterator
                }, r = async function*() {
                    return yield* t;
                }(), s = r.next;
                return {
                    iterator: r,
                    nextMethod: s,
                    done: !1
                };
            }
            n(Qi, "CreateAsyncFromSyncIterator");
            const Ur = (Mr = ($r = Symbol.asyncIterator) !== null && $r !== void 0 ? $r : (Dr = Symbol.for) === null || Dr === void 0 ? void 0 : Dr.call(Symbol, "Symbol.asyncIterator")) !== null && Mr !== void 0 ? Mr : "@@asyncIterator";
            function uo(e, t = "sync", r) {
                if (r === void 0) if (t === "async") {
                    if (r = Mt(e, Ur), r === void 0) {
                        const c = Mt(e, Symbol.iterator), d = uo(e, "sync", c);
                        return Qi(d);
                    }
                } else r = Mt(e, Symbol.iterator);
                if (r === void 0) throw new TypeError("The object is not iterable");
                const s = z(r, e, []);
                if (!l(s)) throw new TypeError("The iterator method must return an object");
                const f = s.next;
                return {
                    iterator: s,
                    nextMethod: f,
                    done: !1
                };
            }
            n(uo, "GetIterator");
            function Yi(e) {
                const t = z(e.nextMethod, e.iterator, []);
                if (!l(t)) throw new TypeError("The iterator.next() method must return an object");
                return t;
            }
            n(Yi, "IteratorNext");
            function Gi(e) {
                return !!e.done;
            }
            n(Gi, "IteratorComplete");
            function Zi(e) {
                return e.value;
            }
            n(Zi, "IteratorValue");
            function Ki(e) {
                return !(typeof e != "number" || ao(e) || e < 0);
            }
            n(Ki, "IsNonNegativeNumber");
            function fo(e) {
                const t = lo(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
                return new Uint8Array(t);
            }
            n(fo, "CloneAsUint8Array");
            function xr(e) {
                const t = e._queue.shift();
                return e._queueTotalSize -= t.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t.value;
            }
            n(xr, "DequeueValue");
            function Nr(e, t, r) {
                if (!Ki(r) || r === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
                e._queue.push({
                    value: t,
                    size: r
                }), e._queueTotalSize += r;
            }
            n(Nr, "EnqueueValueWithSize");
            function Ji(e) {
                return e._queue.peek().value;
            }
            n(Ji, "PeekQueueValue");
            function Be(e) {
                e._queue = new D, e._queueTotalSize = 0;
            }
            n(Be, "ResetQueue");
            function co(e) {
                return e === DataView;
            }
            n(co, "isDataViewConstructor");
            function Xi(e) {
                return co(e.constructor);
            }
            n(Xi, "isDataView");
            function ea(e) {
                return co(e) ? 1 : e.BYTES_PER_ELEMENT;
            }
            n(ea, "arrayBufferViewElementSize");
            const gn = class gn {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get view() {
                    if (!Hr(this)) throw Zr("view");
                    return this._view;
                }
                respond(t) {
                    if (!Hr(this)) throw Zr("respond");
                    if (Se(t, 1, "respond"), t = Fr(t, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
                    if (Ae(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
                    Ht(this._associatedReadableByteStreamController, t);
                }
                respondWithNewView(t) {
                    if (!Hr(this)) throw Zr("respondWithNewView");
                    if (Se(t, 1, "respondWithNewView"), !ArrayBuffer.isView(t)) throw new TypeError("You can only respond with array buffer views");
                    if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
                    if (Ae(t.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
                    Vt(this._associatedReadableByteStreamController, t);
                }
            };
            n(gn, "ReadableStreamBYOBRequest");
            let Re = gn;
            Object.defineProperties(Re.prototype, {
                respond: {
                    enumerable: !0
                },
                respondWithNewView: {
                    enumerable: !0
                },
                view: {
                    enumerable: !0
                }
            }), h(Re.prototype.respond, "respond"), h(Re.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, {
                value: "ReadableStreamBYOBRequest",
                configurable: !0
            });
            const _n = class _n {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get byobRequest() {
                    if (!ze(this)) throw _t("byobRequest");
                    return Gr(this);
                }
                get desiredSize() {
                    if (!ze(this)) throw _t("desiredSize");
                    return Ro(this);
                }
                close() {
                    if (!ze(this)) throw _t("close");
                    if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
                    const t = this._controlledReadableByteStream._state;
                    if (t !== "readable") throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be closed`);
                    gt(this);
                }
                enqueue(t) {
                    if (!ze(this)) throw _t("enqueue");
                    if (Se(t, 1, "enqueue"), !ArrayBuffer.isView(t)) throw new TypeError("chunk must be an array buffer view");
                    if (t.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
                    if (t.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
                    if (this._closeRequested) throw new TypeError("stream is closed or draining");
                    const r = this._controlledReadableByteStream._state;
                    if (r !== "readable") throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
                    Nt(this, t);
                }
                error(t = void 0) {
                    if (!ze(this)) throw _t("error");
                    K(this, t);
                }
                [Ar](t) {
                    ho(this), Be(this);
                    const r = this._cancelAlgorithm(t);
                    return xt(this), r;
                }
                [Br](t) {
                    const r = this._controlledReadableByteStream;
                    if (this._queueTotalSize > 0) {
                        wo(this, t);
                        return;
                    }
                    const s = this._autoAllocateChunkSize;
                    if (s !== void 0) {
                        let f;
                        try {
                            f = new ArrayBuffer(s);
                        } catch (d) {
                            t._errorSteps(d);
                            return;
                        }
                        const c = {
                            buffer: f,
                            bufferByteLength: s,
                            byteOffset: 0,
                            byteLength: s,
                            bytesFilled: 0,
                            minimumFill: 1,
                            elementSize: 1,
                            viewConstructor: Uint8Array,
                            readerType: "default"
                        };
                        this._pendingPullIntos.push(c);
                    }
                    eo(r, t), Ie(this);
                }
                [kr]() {
                    if (this._pendingPullIntos.length > 0) {
                        const t = this._pendingPullIntos.peek();
                        t.readerType = "none", this._pendingPullIntos = new D, this._pendingPullIntos.push(t);
                    }
                }
            };
            n(_n, "ReadableByteStreamController");
            let te = _n;
            Object.defineProperties(te.prototype, {
                close: {
                    enumerable: !0
                },
                enqueue: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                },
                byobRequest: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                }
            }), h(te.prototype.close, "close"), h(te.prototype.enqueue, "enqueue"), h(te.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(te.prototype, Symbol.toStringTag, {
                value: "ReadableByteStreamController",
                configurable: !0
            });
            function ze(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? !1 : e instanceof te;
            }
            n(ze, "IsReadableByteStreamController");
            function Hr(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? !1 : e instanceof Re;
            }
            n(Hr, "IsReadableStreamBYOBRequest");
            function Ie(e) {
                if (!ia(e)) return;
                if (e._pulling) {
                    e._pullAgain = !0;
                    return;
                }
                e._pulling = !0;
                const r = e._pullAlgorithm();
                _(r, ()=>(e._pulling = !1, e._pullAgain && (e._pullAgain = !1, Ie(e)), null), (s)=>(K(e, s), null));
            }
            n(Ie, "ReadableByteStreamControllerCallPullIfNeeded");
            function ho(e) {
                Qr(e), e._pendingPullIntos = new D;
            }
            n(ho, "ReadableByteStreamControllerClearPendingPullIntos");
            function Vr(e, t) {
                let r = !1;
                e._state === "closed" && (r = !0);
                const s = po(t);
                t.readerType === "default" ? Lr(e, s, r) : ca(e, s, r);
            }
            n(Vr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
            function po(e) {
                const t = e.bytesFilled, r = e.elementSize;
                return new e.viewConstructor(e.buffer, e.byteOffset, t / r);
            }
            n(po, "ReadableByteStreamControllerConvertPullIntoDescriptor");
            function Ut(e, t, r, s) {
                e._queue.push({
                    buffer: t,
                    byteOffset: r,
                    byteLength: s
                }), e._queueTotalSize += s;
            }
            n(Ut, "ReadableByteStreamControllerEnqueueChunkToQueue");
            function bo(e, t, r, s) {
                let f;
                try {
                    f = lo(t, r, r + s);
                } catch (c) {
                    throw K(e, c), c;
                }
                Ut(e, f, 0, s);
            }
            n(bo, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
            function mo(e, t) {
                t.bytesFilled > 0 && bo(e, t.buffer, t.byteOffset, t.bytesFilled), Ye(e);
            }
            n(mo, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
            function yo(e, t) {
                const r = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled), s = t.bytesFilled + r;
                let f = r, c = !1;
                const d = s % t.elementSize, m = s - d;
                m >= t.minimumFill && (f = m - t.bytesFilled, c = !0);
                const R = e._queue;
                for(; f > 0;){
                    const y = R.peek(), C = Math.min(f, y.byteLength), P = t.byteOffset + t.bytesFilled;
                    so(t.buffer, P, y.buffer, y.byteOffset, C), y.byteLength === C ? R.shift() : (y.byteOffset += C, y.byteLength -= C), e._queueTotalSize -= C, go(e, C, t), f -= C;
                }
                return c;
            }
            n(yo, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
            function go(e, t, r) {
                r.bytesFilled += t;
            }
            n(go, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
            function _o(e) {
                e._queueTotalSize === 0 && e._closeRequested ? (xt(e), Pt(e._controlledReadableByteStream)) : Ie(e);
            }
            n(_o, "ReadableByteStreamControllerHandleQueueDrain");
            function Qr(e) {
                e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
            }
            n(Qr, "ReadableByteStreamControllerInvalidateBYOBRequest");
            function Yr(e) {
                for(; e._pendingPullIntos.length > 0;){
                    if (e._queueTotalSize === 0) return;
                    const t = e._pendingPullIntos.peek();
                    yo(e, t) && (Ye(e), Vr(e._controlledReadableByteStream, t));
                }
            }
            n(Yr, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
            function ta(e) {
                const t = e._controlledReadableByteStream._reader;
                for(; t._readRequests.length > 0;){
                    if (e._queueTotalSize === 0) return;
                    const r = t._readRequests.shift();
                    wo(e, r);
                }
            }
            n(ta, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
            function ra(e, t, r, s) {
                const f = e._controlledReadableByteStream, c = t.constructor, d = ea(c), { byteOffset: m, byteLength: R } = t, y = r * d;
                let C;
                try {
                    C = we(t.buffer);
                } catch (B) {
                    s._errorSteps(B);
                    return;
                }
                const P = {
                    buffer: C,
                    bufferByteLength: C.byteLength,
                    byteOffset: m,
                    byteLength: R,
                    bytesFilled: 0,
                    minimumFill: y,
                    elementSize: d,
                    viewConstructor: c,
                    readerType: "byob"
                };
                if (e._pendingPullIntos.length > 0) {
                    e._pendingPullIntos.push(P), Po(f, s);
                    return;
                }
                if (f._state === "closed") {
                    const B = new c(P.buffer, P.byteOffset, 0);
                    s._closeSteps(B);
                    return;
                }
                if (e._queueTotalSize > 0) {
                    if (yo(e, P)) {
                        const B = po(P);
                        _o(e), s._chunkSteps(B);
                        return;
                    }
                    if (e._closeRequested) {
                        const B = new TypeError("Insufficient bytes to fill elements in the given buffer");
                        K(e, B), s._errorSteps(B);
                        return;
                    }
                }
                e._pendingPullIntos.push(P), Po(f, s), Ie(e);
            }
            n(ra, "ReadableByteStreamControllerPullInto");
            function na(e, t) {
                t.readerType === "none" && Ye(e);
                const r = e._controlledReadableByteStream;
                if (Kr(r)) for(; vo(r) > 0;){
                    const s = Ye(e);
                    Vr(r, s);
                }
            }
            n(na, "ReadableByteStreamControllerRespondInClosedState");
            function oa(e, t, r) {
                if (go(e, t, r), r.readerType === "none") {
                    mo(e, r), Yr(e);
                    return;
                }
                if (r.bytesFilled < r.minimumFill) return;
                Ye(e);
                const s = r.bytesFilled % r.elementSize;
                if (s > 0) {
                    const f = r.byteOffset + r.bytesFilled;
                    bo(e, r.buffer, f - s, s);
                }
                r.bytesFilled -= s, Vr(e._controlledReadableByteStream, r), Yr(e);
            }
            n(oa, "ReadableByteStreamControllerRespondInReadableState");
            function So(e, t) {
                const r = e._pendingPullIntos.peek();
                Qr(e), e._controlledReadableByteStream._state === "closed" ? na(e, r) : oa(e, t, r), Ie(e);
            }
            n(So, "ReadableByteStreamControllerRespondInternal");
            function Ye(e) {
                return e._pendingPullIntos.shift();
            }
            n(Ye, "ReadableByteStreamControllerShiftPendingPullInto");
            function ia(e) {
                const t = e._controlledReadableByteStream;
                return t._state !== "readable" || e._closeRequested || !e._started ? !1 : !!(to(t) && Lt(t) > 0 || Kr(t) && vo(t) > 0 || Ro(e) > 0);
            }
            n(ia, "ReadableByteStreamControllerShouldCallPull");
            function xt(e) {
                e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
            }
            n(xt, "ReadableByteStreamControllerClearAlgorithms");
            function gt(e) {
                const t = e._controlledReadableByteStream;
                if (!(e._closeRequested || t._state !== "readable")) {
                    if (e._queueTotalSize > 0) {
                        e._closeRequested = !0;
                        return;
                    }
                    if (e._pendingPullIntos.length > 0) {
                        const r = e._pendingPullIntos.peek();
                        if (r.bytesFilled % r.elementSize !== 0) {
                            const s = new TypeError("Insufficient bytes to fill elements in the given buffer");
                            throw K(e, s), s;
                        }
                    }
                    xt(e), Pt(t);
                }
            }
            n(gt, "ReadableByteStreamControllerClose");
            function Nt(e, t) {
                const r = e._controlledReadableByteStream;
                if (e._closeRequested || r._state !== "readable") return;
                const { buffer: s, byteOffset: f, byteLength: c } = t;
                if (Ae(s)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
                const d = we(s);
                if (e._pendingPullIntos.length > 0) {
                    const m = e._pendingPullIntos.peek();
                    if (Ae(m.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
                    Qr(e), m.buffer = we(m.buffer), m.readerType === "none" && mo(e, m);
                }
                if (to(r)) if (ta(e), Lt(r) === 0) Ut(e, d, f, c);
                else {
                    e._pendingPullIntos.length > 0 && Ye(e);
                    const m = new Uint8Array(d, f, c);
                    Lr(r, m, !1);
                }
                else Kr(r) ? (Ut(e, d, f, c), Yr(e)) : Ut(e, d, f, c);
                Ie(e);
            }
            n(Nt, "ReadableByteStreamControllerEnqueue");
            function K(e, t) {
                const r = e._controlledReadableByteStream;
                r._state === "readable" && (ho(e), Be(e), xt(e), Zo(r, t));
            }
            n(K, "ReadableByteStreamControllerError");
            function wo(e, t) {
                const r = e._queue.shift();
                e._queueTotalSize -= r.byteLength, _o(e);
                const s = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
                t._chunkSteps(s);
            }
            n(wo, "ReadableByteStreamControllerFillReadRequestFromQueue");
            function Gr(e) {
                if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
                    const t = e._pendingPullIntos.peek(), r = new Uint8Array(t.buffer, t.byteOffset + t.bytesFilled, t.byteLength - t.bytesFilled), s = Object.create(Re.prototype);
                    sa(s, e, r), e._byobRequest = s;
                }
                return e._byobRequest;
            }
            n(Gr, "ReadableByteStreamControllerGetBYOBRequest");
            function Ro(e) {
                const t = e._controlledReadableByteStream._state;
                return t === "errored" ? null : t === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
            }
            n(Ro, "ReadableByteStreamControllerGetDesiredSize");
            function Ht(e, t) {
                const r = e._pendingPullIntos.peek();
                if (e._controlledReadableByteStream._state === "closed") {
                    if (t !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
                } else {
                    if (t === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                    if (r.bytesFilled + t > r.byteLength) throw new RangeError("bytesWritten out of range");
                }
                r.buffer = we(r.buffer), So(e, t);
            }
            n(Ht, "ReadableByteStreamControllerRespond");
            function Vt(e, t) {
                const r = e._pendingPullIntos.peek();
                if (e._controlledReadableByteStream._state === "closed") {
                    if (t.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
                } else if (t.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
                if (r.byteOffset + r.bytesFilled !== t.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
                if (r.bufferByteLength !== t.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
                if (r.bytesFilled + t.byteLength > r.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
                const f = t.byteLength;
                r.buffer = we(t.buffer), So(e, f);
            }
            n(Vt, "ReadableByteStreamControllerRespondWithNewView");
            function To(e, t, r, s, f, c, d) {
                t._controlledReadableByteStream = e, t._pullAgain = !1, t._pulling = !1, t._byobRequest = null, t._queue = t._queueTotalSize = void 0, Be(t), t._closeRequested = !1, t._started = !1, t._strategyHWM = c, t._pullAlgorithm = s, t._cancelAlgorithm = f, t._autoAllocateChunkSize = d, t._pendingPullIntos = new D, e._readableStreamController = t;
                const m = r();
                _(T(m), ()=>(t._started = !0, Ie(t), null), (R)=>(K(t, R), null));
            }
            n(To, "SetUpReadableByteStreamController");
            function aa(e, t, r) {
                const s = Object.create(te.prototype);
                let f, c, d;
                t.start !== void 0 ? f = n(()=>t.start(s), "startAlgorithm") : f = n(()=>{}, "startAlgorithm"), t.pull !== void 0 ? c = n(()=>t.pull(s), "pullAlgorithm") : c = n(()=>T(void 0), "pullAlgorithm"), t.cancel !== void 0 ? d = n((R)=>t.cancel(R), "cancelAlgorithm") : d = n(()=>T(void 0), "cancelAlgorithm");
                const m = t.autoAllocateChunkSize;
                if (m === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
                To(e, s, f, c, d, r, m);
            }
            n(aa, "SetUpReadableByteStreamControllerFromUnderlyingSource");
            function sa(e, t, r) {
                e._associatedReadableByteStreamController = t, e._view = r;
            }
            n(sa, "SetUpReadableStreamBYOBRequest");
            function Zr(e) {
                return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
            }
            n(Zr, "byobRequestBrandCheckException");
            function _t(e) {
                return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
            }
            n(_t, "byteStreamControllerBrandCheckException");
            function la(e, t) {
                ue(e, t);
                const r = e?.mode;
                return {
                    mode: r === void 0 ? void 0 : ua(r, `${t} has member 'mode' that`)
                };
            }
            n(la, "convertReaderOptions");
            function ua(e, t) {
                if (e = `${e}`, e !== "byob") throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
                return e;
            }
            n(ua, "convertReadableStreamReaderMode");
            function fa(e, t) {
                var r;
                ue(e, t);
                const s = (r = e?.min) !== null && r !== void 0 ? r : 1;
                return {
                    min: Fr(s, `${t} has member 'min' that`)
                };
            }
            n(fa, "convertByobReadOptions");
            function Co(e) {
                return new ce(e);
            }
            n(Co, "AcquireReadableStreamBYOBReader");
            function Po(e, t) {
                e._reader._readIntoRequests.push(t);
            }
            n(Po, "ReadableStreamAddReadIntoRequest");
            function ca(e, t, r) {
                const f = e._reader._readIntoRequests.shift();
                r ? f._closeSteps(t) : f._chunkSteps(t);
            }
            n(ca, "ReadableStreamFulfillReadIntoRequest");
            function vo(e) {
                return e._reader._readIntoRequests.length;
            }
            n(vo, "ReadableStreamGetNumReadIntoRequests");
            function Kr(e) {
                const t = e._reader;
                return !(t === void 0 || !Fe(t));
            }
            n(Kr, "ReadableStreamHasBYOBReader");
            const Sn = class Sn {
                constructor(t){
                    if (Se(t, 1, "ReadableStreamBYOBReader"), jr(t, "First parameter"), qe(t)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    if (!ze(t._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
                    Yn(this, t), this._readIntoRequests = new D;
                }
                get closed() {
                    return Fe(this) ? this._closedPromise : b(Qt("closed"));
                }
                cancel(t = void 0) {
                    return Fe(this) ? this._ownerReadableStream === void 0 ? b(jt("cancel")) : Wr(this, t) : b(Qt("cancel"));
                }
                read(t, r = {}) {
                    if (!Fe(this)) return b(Qt("read"));
                    if (!ArrayBuffer.isView(t)) return b(new TypeError("view must be an array buffer view"));
                    if (t.byteLength === 0) return b(new TypeError("view must have non-zero byteLength"));
                    if (t.buffer.byteLength === 0) return b(new TypeError("view's buffer must have non-zero byteLength"));
                    if (Ae(t.buffer)) return b(new TypeError("view's buffer has been detached"));
                    let s;
                    try {
                        s = fa(r, "options");
                    } catch (y) {
                        return b(y);
                    }
                    const f = s.min;
                    if (f === 0) return b(new TypeError("options.min must be greater than 0"));
                    if (Xi(t)) {
                        if (f > t.byteLength) return b(new RangeError("options.min must be less than or equal to view's byteLength"));
                    } else if (f > t.length) return b(new RangeError("options.min must be less than or equal to view's length"));
                    if (this._ownerReadableStream === void 0) return b(jt("read from"));
                    let c, d;
                    const m = E((y, C)=>{
                        c = y, d = C;
                    });
                    return Eo(this, t, f, {
                        _chunkSteps: (y)=>c({
                                value: y,
                                done: !1
                            }),
                        _closeSteps: (y)=>c({
                                value: y,
                                done: !0
                            }),
                        _errorSteps: (y)=>d(y)
                    }), m;
                }
                releaseLock() {
                    if (!Fe(this)) throw Qt("releaseLock");
                    this._ownerReadableStream !== void 0 && da(this);
                }
            };
            n(Sn, "ReadableStreamBYOBReader");
            let ce = Sn;
            Object.defineProperties(ce.prototype, {
                cancel: {
                    enumerable: !0
                },
                read: {
                    enumerable: !0
                },
                releaseLock: {
                    enumerable: !0
                },
                closed: {
                    enumerable: !0
                }
            }), h(ce.prototype.cancel, "cancel"), h(ce.prototype.read, "read"), h(ce.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, {
                value: "ReadableStreamBYOBReader",
                configurable: !0
            });
            function Fe(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? !1 : e instanceof ce;
            }
            n(Fe, "IsReadableStreamBYOBReader");
            function Eo(e, t, r, s) {
                const f = e._ownerReadableStream;
                f._disturbed = !0, f._state === "errored" ? s._errorSteps(f._storedError) : ra(f._readableStreamController, t, r, s);
            }
            n(Eo, "ReadableStreamBYOBReaderRead");
            function da(e) {
                _e(e);
                const t = new TypeError("Reader was released");
                Ao(e, t);
            }
            n(da, "ReadableStreamBYOBReaderRelease");
            function Ao(e, t) {
                const r = e._readIntoRequests;
                e._readIntoRequests = new D, r.forEach((s)=>{
                    s._errorSteps(t);
                });
            }
            n(Ao, "ReadableStreamBYOBReaderErrorReadIntoRequests");
            function Qt(e) {
                return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
            }
            n(Qt, "byobReaderBrandCheckException");
            function St(e, t) {
                const { highWaterMark: r } = e;
                if (r === void 0) return t;
                if (ao(r) || r < 0) throw new RangeError("Invalid highWaterMark");
                return r;
            }
            n(St, "ExtractHighWaterMark");
            function Yt(e) {
                const { size: t } = e;
                return t || (()=>1);
            }
            n(Yt, "ExtractSizeAlgorithm");
            function Gt(e, t) {
                ue(e, t);
                const r = e?.highWaterMark, s = e?.size;
                return {
                    highWaterMark: r === void 0 ? void 0 : Ir(r),
                    size: s === void 0 ? void 0 : ha(s, `${t} has member 'size' that`)
                };
            }
            n(Gt, "convertQueuingStrategy");
            function ha(e, t) {
                return Z(e, t), (r)=>Ir(e(r));
            }
            n(ha, "convertQueuingStrategySize");
            function pa(e, t) {
                ue(e, t);
                const r = e?.abort, s = e?.close, f = e?.start, c = e?.type, d = e?.write;
                return {
                    abort: r === void 0 ? void 0 : ba(r, e, `${t} has member 'abort' that`),
                    close: s === void 0 ? void 0 : ma(s, e, `${t} has member 'close' that`),
                    start: f === void 0 ? void 0 : ya(f, e, `${t} has member 'start' that`),
                    write: d === void 0 ? void 0 : ga(d, e, `${t} has member 'write' that`),
                    type: c
                };
            }
            n(pa, "convertUnderlyingSink");
            function ba(e, t, r) {
                return Z(e, r), (s)=>j(e, t, [
                        s
                    ]);
            }
            n(ba, "convertUnderlyingSinkAbortCallback");
            function ma(e, t, r) {
                return Z(e, r), ()=>j(e, t, []);
            }
            n(ma, "convertUnderlyingSinkCloseCallback");
            function ya(e, t, r) {
                return Z(e, r), (s)=>z(e, t, [
                        s
                    ]);
            }
            n(ya, "convertUnderlyingSinkStartCallback");
            function ga(e, t, r) {
                return Z(e, r), (s, f)=>j(e, t, [
                        s,
                        f
                    ]);
            }
            n(ga, "convertUnderlyingSinkWriteCallback");
            function Bo(e, t) {
                if (!Ge(e)) throw new TypeError(`${t} is not a WritableStream.`);
            }
            n(Bo, "assertWritableStream");
            function _a(e) {
                if (typeof e != "object" || e === null) return !1;
                try {
                    return typeof e.aborted == "boolean";
                } catch  {
                    return !1;
                }
            }
            n(_a, "isAbortSignal");
            const Sa = typeof AbortController == "function";
            function wa() {
                if (Sa) return new AbortController;
            }
            n(wa, "createAbortController");
            const wn = class wn {
                constructor(t = {}, r = {}){
                    t === void 0 ? t = null : Jn(t, "First parameter");
                    const s = Gt(r, "Second parameter"), f = pa(t, "First parameter");
                    if (Wo(this), f.type !== void 0) throw new RangeError("Invalid type is specified");
                    const d = Yt(s), m = St(s, 1);
                    Ia(this, f, m, d);
                }
                get locked() {
                    if (!Ge(this)) throw er("locked");
                    return Ze(this);
                }
                abort(t = void 0) {
                    return Ge(this) ? Ze(this) ? b(new TypeError("Cannot abort a stream that already has a writer")) : Zt(this, t) : b(er("abort"));
                }
                close() {
                    return Ge(this) ? Ze(this) ? b(new TypeError("Cannot close a stream that already has a writer")) : he(this) ? b(new TypeError("Cannot close an already-closing stream")) : qo(this) : b(er("close"));
                }
                getWriter() {
                    if (!Ge(this)) throw er("getWriter");
                    return ko(this);
                }
            };
            n(wn, "WritableStream");
            let de = wn;
            Object.defineProperties(de.prototype, {
                abort: {
                    enumerable: !0
                },
                close: {
                    enumerable: !0
                },
                getWriter: {
                    enumerable: !0
                },
                locked: {
                    enumerable: !0
                }
            }), h(de.prototype.abort, "abort"), h(de.prototype.close, "close"), h(de.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, {
                value: "WritableStream",
                configurable: !0
            });
            function ko(e) {
                return new re(e);
            }
            n(ko, "AcquireWritableStreamDefaultWriter");
            function Ra(e, t, r, s, f = 1, c = ()=>1) {
                const d = Object.create(de.prototype);
                Wo(d);
                const m = Object.create(ke.prototype);
                return Lo(d, m, e, t, r, s, f, c), d;
            }
            n(Ra, "CreateWritableStream");
            function Wo(e) {
                e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new D, e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = !1;
            }
            n(Wo, "InitializeWritableStream");
            function Ge(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? !1 : e instanceof de;
            }
            n(Ge, "IsWritableStream");
            function Ze(e) {
                return e._writer !== void 0;
            }
            n(Ze, "IsWritableStreamLocked");
            function Zt(e, t) {
                var r;
                if (e._state === "closed" || e._state === "errored") return T(void 0);
                e._writableStreamController._abortReason = t, (r = e._writableStreamController._abortController) === null || r === void 0 || r.abort(t);
                const s = e._state;
                if (s === "closed" || s === "errored") return T(void 0);
                if (e._pendingAbortRequest !== void 0) return e._pendingAbortRequest._promise;
                let f = !1;
                s === "erroring" && (f = !0, t = void 0);
                const c = E((d, m)=>{
                    e._pendingAbortRequest = {
                        _promise: void 0,
                        _resolve: d,
                        _reject: m,
                        _reason: t,
                        _wasAlreadyErroring: f
                    };
                });
                return e._pendingAbortRequest._promise = c, f || Xr(e, t), c;
            }
            n(Zt, "WritableStreamAbort");
            function qo(e) {
                const t = e._state;
                if (t === "closed" || t === "errored") return b(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));
                const r = E((f, c)=>{
                    const d = {
                        _resolve: f,
                        _reject: c
                    };
                    e._closeRequest = d;
                }), s = e._writer;
                return s !== void 0 && e._backpressure && t === "writable" && ln(s), Fa(e._writableStreamController), r;
            }
            n(qo, "WritableStreamClose");
            function Ta(e) {
                return E((r, s)=>{
                    const f = {
                        _resolve: r,
                        _reject: s
                    };
                    e._writeRequests.push(f);
                });
            }
            n(Ta, "WritableStreamAddWriteRequest");
            function Jr(e, t) {
                if (e._state === "writable") {
                    Xr(e, t);
                    return;
                }
                en(e);
            }
            n(Jr, "WritableStreamDealWithRejection");
            function Xr(e, t) {
                const r = e._writableStreamController;
                e._state = "erroring", e._storedError = t;
                const s = e._writer;
                s !== void 0 && zo(s, t), !Aa(e) && r._started && en(e);
            }
            n(Xr, "WritableStreamStartErroring");
            function en(e) {
                e._state = "errored", e._writableStreamController[Qn]();
                const t = e._storedError;
                if (e._writeRequests.forEach((f)=>{
                    f._reject(t);
                }), e._writeRequests = new D, e._pendingAbortRequest === void 0) {
                    Kt(e);
                    return;
                }
                const r = e._pendingAbortRequest;
                if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) {
                    r._reject(t), Kt(e);
                    return;
                }
                const s = e._writableStreamController[Ft](r._reason);
                _(s, ()=>(r._resolve(), Kt(e), null), (f)=>(r._reject(f), Kt(e), null));
            }
            n(en, "WritableStreamFinishErroring");
            function Ca(e) {
                e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
            }
            n(Ca, "WritableStreamFinishInFlightWrite");
            function Pa(e, t) {
                e._inFlightWriteRequest._reject(t), e._inFlightWriteRequest = void 0, Jr(e, t);
            }
            n(Pa, "WritableStreamFinishInFlightWriteWithError");
            function va(e) {
                e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, e._state === "erroring" && (e._storedError = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
                const r = e._writer;
                r !== void 0 && Uo(r);
            }
            n(va, "WritableStreamFinishInFlightClose");
            function Ea(e, t) {
                e._inFlightCloseRequest._reject(t), e._inFlightCloseRequest = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._reject(t), e._pendingAbortRequest = void 0), Jr(e, t);
            }
            n(Ea, "WritableStreamFinishInFlightCloseWithError");
            function he(e) {
                return !(e._closeRequest === void 0 && e._inFlightCloseRequest === void 0);
            }
            n(he, "WritableStreamCloseQueuedOrInFlight");
            function Aa(e) {
                return !(e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0);
            }
            n(Aa, "WritableStreamHasOperationMarkedInFlight");
            function Ba(e) {
                e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
            }
            n(Ba, "WritableStreamMarkCloseRequestInFlight");
            function ka(e) {
                e._inFlightWriteRequest = e._writeRequests.shift();
            }
            n(ka, "WritableStreamMarkFirstWriteRequestInFlight");
            function Kt(e) {
                e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
                const t = e._writer;
                t !== void 0 && an(t, e._storedError);
            }
            n(Kt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
            function tn(e, t) {
                const r = e._writer;
                r !== void 0 && t !== e._backpressure && (t ? xa(r) : ln(r)), e._backpressure = t;
            }
            n(tn, "WritableStreamUpdateBackpressure");
            const Rn = class Rn {
                constructor(t){
                    if (Se(t, 1, "WritableStreamDefaultWriter"), Bo(t, "First parameter"), Ze(t)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
                    this._ownerWritableStream = t, t._writer = this;
                    const r = t._state;
                    if (r === "writable") !he(t) && t._backpressure ? rr(this) : xo(this), tr(this);
                    else if (r === "erroring") sn(this, t._storedError), tr(this);
                    else if (r === "closed") xo(this), Ma(this);
                    else {
                        const s = t._storedError;
                        sn(this, s), Mo(this, s);
                    }
                }
                get closed() {
                    return je(this) ? this._closedPromise : b(Le("closed"));
                }
                get desiredSize() {
                    if (!je(this)) throw Le("desiredSize");
                    if (this._ownerWritableStream === void 0) throw Rt("desiredSize");
                    return za(this);
                }
                get ready() {
                    return je(this) ? this._readyPromise : b(Le("ready"));
                }
                abort(t = void 0) {
                    return je(this) ? this._ownerWritableStream === void 0 ? b(Rt("abort")) : Wa(this, t) : b(Le("abort"));
                }
                close() {
                    if (!je(this)) return b(Le("close"));
                    const t = this._ownerWritableStream;
                    return t === void 0 ? b(Rt("close")) : he(t) ? b(new TypeError("Cannot close an already-closing stream")) : Oo(this);
                }
                releaseLock() {
                    if (!je(this)) throw Le("releaseLock");
                    this._ownerWritableStream !== void 0 && Io(this);
                }
                write(t = void 0) {
                    return je(this) ? this._ownerWritableStream === void 0 ? b(Rt("write to")) : Fo(this, t) : b(Le("write"));
                }
            };
            n(Rn, "WritableStreamDefaultWriter");
            let re = Rn;
            Object.defineProperties(re.prototype, {
                abort: {
                    enumerable: !0
                },
                close: {
                    enumerable: !0
                },
                releaseLock: {
                    enumerable: !0
                },
                write: {
                    enumerable: !0
                },
                closed: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                },
                ready: {
                    enumerable: !0
                }
            }), h(re.prototype.abort, "abort"), h(re.prototype.close, "close"), h(re.prototype.releaseLock, "releaseLock"), h(re.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(re.prototype, Symbol.toStringTag, {
                value: "WritableStreamDefaultWriter",
                configurable: !0
            });
            function je(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? !1 : e instanceof re;
            }
            n(je, "IsWritableStreamDefaultWriter");
            function Wa(e, t) {
                const r = e._ownerWritableStream;
                return Zt(r, t);
            }
            n(Wa, "WritableStreamDefaultWriterAbort");
            function Oo(e) {
                const t = e._ownerWritableStream;
                return qo(t);
            }
            n(Oo, "WritableStreamDefaultWriterClose");
            function qa(e) {
                const t = e._ownerWritableStream, r = t._state;
                return he(t) || r === "closed" ? T(void 0) : r === "errored" ? b(t._storedError) : Oo(e);
            }
            n(qa, "WritableStreamDefaultWriterCloseWithErrorPropagation");
            function Oa(e, t) {
                e._closedPromiseState === "pending" ? an(e, t) : Ua(e, t);
            }
            n(Oa, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
            function zo(e, t) {
                e._readyPromiseState === "pending" ? No(e, t) : Na(e, t);
            }
            n(zo, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
            function za(e) {
                const t = e._ownerWritableStream, r = t._state;
                return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : $o(t._writableStreamController);
            }
            n(za, "WritableStreamDefaultWriterGetDesiredSize");
            function Io(e) {
                const t = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
                zo(e, r), Oa(e, r), t._writer = void 0, e._ownerWritableStream = void 0;
            }
            n(Io, "WritableStreamDefaultWriterRelease");
            function Fo(e, t) {
                const r = e._ownerWritableStream, s = r._writableStreamController, f = ja(s, t);
                if (r !== e._ownerWritableStream) return b(Rt("write to"));
                const c = r._state;
                if (c === "errored") return b(r._storedError);
                if (he(r) || c === "closed") return b(new TypeError("The stream is closing or closed and cannot be written to"));
                if (c === "erroring") return b(r._storedError);
                const d = Ta(r);
                return La(s, t, f), d;
            }
            n(Fo, "WritableStreamDefaultWriterWrite");
            const jo = {}, Tn = class Tn {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get abortReason() {
                    if (!rn(this)) throw on("abortReason");
                    return this._abortReason;
                }
                get signal() {
                    if (!rn(this)) throw on("signal");
                    if (this._abortController === void 0) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
                    return this._abortController.signal;
                }
                error(t = void 0) {
                    if (!rn(this)) throw on("error");
                    this._controlledWritableStream._state === "writable" && Do(this, t);
                }
                [Ft](t) {
                    const r = this._abortAlgorithm(t);
                    return Jt(this), r;
                }
                [Qn]() {
                    Be(this);
                }
            };
            n(Tn, "WritableStreamDefaultController");
            let ke = Tn;
            Object.defineProperties(ke.prototype, {
                abortReason: {
                    enumerable: !0
                },
                signal: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ke.prototype, Symbol.toStringTag, {
                value: "WritableStreamDefaultController",
                configurable: !0
            });
            function rn(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? !1 : e instanceof ke;
            }
            n(rn, "IsWritableStreamDefaultController");
            function Lo(e, t, r, s, f, c, d, m) {
                t._controlledWritableStream = e, e._writableStreamController = t, t._queue = void 0, t._queueTotalSize = void 0, Be(t), t._abortReason = void 0, t._abortController = wa(), t._started = !1, t._strategySizeAlgorithm = m, t._strategyHWM = d, t._writeAlgorithm = s, t._closeAlgorithm = f, t._abortAlgorithm = c;
                const R = nn(t);
                tn(e, R);
                const y = r(), C = T(y);
                _(C, ()=>(t._started = !0, Xt(t), null), (P)=>(t._started = !0, Jr(e, P), null));
            }
            n(Lo, "SetUpWritableStreamDefaultController");
            function Ia(e, t, r, s) {
                const f = Object.create(ke.prototype);
                let c, d, m, R;
                t.start !== void 0 ? c = n(()=>t.start(f), "startAlgorithm") : c = n(()=>{}, "startAlgorithm"), t.write !== void 0 ? d = n((y)=>t.write(y, f), "writeAlgorithm") : d = n(()=>T(void 0), "writeAlgorithm"), t.close !== void 0 ? m = n(()=>t.close(), "closeAlgorithm") : m = n(()=>T(void 0), "closeAlgorithm"), t.abort !== void 0 ? R = n((y)=>t.abort(y), "abortAlgorithm") : R = n(()=>T(void 0), "abortAlgorithm"), Lo(e, f, c, d, m, R, r, s);
            }
            n(Ia, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
            function Jt(e) {
                e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
            }
            n(Jt, "WritableStreamDefaultControllerClearAlgorithms");
            function Fa(e) {
                Nr(e, jo, 0), Xt(e);
            }
            n(Fa, "WritableStreamDefaultControllerClose");
            function ja(e, t) {
                try {
                    return e._strategySizeAlgorithm(t);
                } catch (r) {
                    return wt(e, r), 1;
                }
            }
            n(ja, "WritableStreamDefaultControllerGetChunkSize");
            function $o(e) {
                return e._strategyHWM - e._queueTotalSize;
            }
            n($o, "WritableStreamDefaultControllerGetDesiredSize");
            function La(e, t, r) {
                try {
                    Nr(e, t, r);
                } catch (f) {
                    wt(e, f);
                    return;
                }
                const s = e._controlledWritableStream;
                if (!he(s) && s._state === "writable") {
                    const f = nn(e);
                    tn(s, f);
                }
                Xt(e);
            }
            n(La, "WritableStreamDefaultControllerWrite");
            function Xt(e) {
                const t = e._controlledWritableStream;
                if (!e._started || t._inFlightWriteRequest !== void 0) return;
                if (t._state === "erroring") {
                    en(t);
                    return;
                }
                if (e._queue.length === 0) return;
                const s = Ji(e);
                s === jo ? $a(e) : Da(e, s);
            }
            n(Xt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
            function wt(e, t) {
                e._controlledWritableStream._state === "writable" && Do(e, t);
            }
            n(wt, "WritableStreamDefaultControllerErrorIfNeeded");
            function $a(e) {
                const t = e._controlledWritableStream;
                Ba(t), xr(e);
                const r = e._closeAlgorithm();
                Jt(e), _(r, ()=>(va(t), null), (s)=>(Ea(t, s), null));
            }
            n($a, "WritableStreamDefaultControllerProcessClose");
            function Da(e, t) {
                const r = e._controlledWritableStream;
                ka(r);
                const s = e._writeAlgorithm(t);
                _(s, ()=>{
                    Ca(r);
                    const f = r._state;
                    if (xr(e), !he(r) && f === "writable") {
                        const c = nn(e);
                        tn(r, c);
                    }
                    return Xt(e), null;
                }, (f)=>(r._state === "writable" && Jt(e), Pa(r, f), null));
            }
            n(Da, "WritableStreamDefaultControllerProcessWrite");
            function nn(e) {
                return $o(e) <= 0;
            }
            n(nn, "WritableStreamDefaultControllerGetBackpressure");
            function Do(e, t) {
                const r = e._controlledWritableStream;
                Jt(e), Xr(r, t);
            }
            n(Do, "WritableStreamDefaultControllerError");
            function er(e) {
                return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
            }
            n(er, "streamBrandCheckException$2");
            function on(e) {
                return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
            }
            n(on, "defaultControllerBrandCheckException$2");
            function Le(e) {
                return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
            }
            n(Le, "defaultWriterBrandCheckException");
            function Rt(e) {
                return new TypeError("Cannot " + e + " a stream using a released writer");
            }
            n(Rt, "defaultWriterLockException");
            function tr(e) {
                e._closedPromise = E((t, r)=>{
                    e._closedPromise_resolve = t, e._closedPromise_reject = r, e._closedPromiseState = "pending";
                });
            }
            n(tr, "defaultWriterClosedPromiseInitialize");
            function Mo(e, t) {
                tr(e), an(e, t);
            }
            n(Mo, "defaultWriterClosedPromiseInitializeAsRejected");
            function Ma(e) {
                tr(e), Uo(e);
            }
            n(Ma, "defaultWriterClosedPromiseInitializeAsResolved");
            function an(e, t) {
                e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
            }
            n(an, "defaultWriterClosedPromiseReject");
            function Ua(e, t) {
                Mo(e, t);
            }
            n(Ua, "defaultWriterClosedPromiseResetToRejected");
            function Uo(e) {
                e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
            }
            n(Uo, "defaultWriterClosedPromiseResolve");
            function rr(e) {
                e._readyPromise = E((t, r)=>{
                    e._readyPromise_resolve = t, e._readyPromise_reject = r;
                }), e._readyPromiseState = "pending";
            }
            n(rr, "defaultWriterReadyPromiseInitialize");
            function sn(e, t) {
                rr(e), No(e, t);
            }
            n(sn, "defaultWriterReadyPromiseInitializeAsRejected");
            function xo(e) {
                rr(e), ln(e);
            }
            n(xo, "defaultWriterReadyPromiseInitializeAsResolved");
            function No(e, t) {
                e._readyPromise_reject !== void 0 && (Q(e._readyPromise), e._readyPromise_reject(t), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
            }
            n(No, "defaultWriterReadyPromiseReject");
            function xa(e) {
                rr(e);
            }
            n(xa, "defaultWriterReadyPromiseReset");
            function Na(e, t) {
                sn(e, t);
            }
            n(Na, "defaultWriterReadyPromiseResetToRejected");
            function ln(e) {
                e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
            }
            n(ln, "defaultWriterReadyPromiseResolve");
            function Ha() {
                if (typeof globalThis < "u") return globalThis;
                if (typeof self < "u") return self;
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$shared$2f$node$2d$fetch$2d$native$2e$1a4a356d$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"] < "u") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$shared$2f$node$2d$fetch$2d$native$2e$1a4a356d$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"];
            }
            n(Ha, "getGlobals");
            const un = Ha();
            function Va(e) {
                if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException") return !1;
                try {
                    return new e, !0;
                } catch  {
                    return !1;
                }
            }
            n(Va, "isDOMExceptionConstructor");
            function Qa() {
                const e = un?.DOMException;
                return Va(e) ? e : void 0;
            }
            n(Qa, "getFromGlobal");
            function Ya() {
                const e = n(function(r, s) {
                    this.message = r || "", this.name = s || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
                }, "DOMException");
                return h(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", {
                    value: e,
                    writable: !0,
                    configurable: !0
                }), e;
            }
            n(Ya, "createPolyfill");
            const Ga = Qa() || Ya();
            function Ho(e, t, r, s, f, c) {
                const d = Qe(e), m = ko(t);
                e._disturbed = !0;
                let R = !1, y = T(void 0);
                return E((C, P)=>{
                    let B;
                    if (c !== void 0) {
                        if (B = n(()=>{
                            const S = c.reason !== void 0 ? c.reason : new Ga("Aborted", "AbortError"), v = [];
                            s || v.push(()=>t._state === "writable" ? Zt(t, S) : T(void 0)), f || v.push(()=>e._state === "readable" ? ie(e, S) : T(void 0)), N(()=>Promise.all(v.map((k)=>k())), !0, S);
                        }, "abortAlgorithm"), c.aborted) {
                            B();
                            return;
                        }
                        c.addEventListener("abort", B);
                    }
                    function ae() {
                        return E((S, v)=>{
                            function k(Y) {
                                Y ? S() : q(nt(), k, v);
                            }
                            n(k, "next"), k(!1);
                        });
                    }
                    n(ae, "pipeLoop");
                    function nt() {
                        return R ? T(!0) : q(m._readyPromise, ()=>E((S, v)=>{
                                mt(d, {
                                    _chunkSteps: (k)=>{
                                        y = q(Fo(m, k), void 0, u), S(!1);
                                    },
                                    _closeSteps: ()=>S(!0),
                                    _errorSteps: v
                                });
                            }));
                    }
                    if (n(nt, "pipeStep"), Te(e, d._closedPromise, (S)=>(s ? J(!0, S) : N(()=>Zt(t, S), !0, S), null)), Te(t, m._closedPromise, (S)=>(f ? J(!0, S) : N(()=>ie(e, S), !0, S), null)), x(e, d._closedPromise, ()=>(r ? J() : N(()=>qa(m)), null)), he(t) || t._state === "closed") {
                        const S = new TypeError("the destination writable stream closed before all data could be piped to it");
                        f ? J(!0, S) : N(()=>ie(e, S), !0, S);
                    }
                    Q(ae());
                    function Oe() {
                        const S = y;
                        return q(y, ()=>S !== y ? Oe() : void 0);
                    }
                    n(Oe, "waitForWritesToFinish");
                    function Te(S, v, k) {
                        S._state === "errored" ? k(S._storedError) : I(v, k);
                    }
                    n(Te, "isOrBecomesErrored");
                    function x(S, v, k) {
                        S._state === "closed" ? k() : V(v, k);
                    }
                    n(x, "isOrBecomesClosed");
                    function N(S, v, k) {
                        if (R) return;
                        R = !0, t._state === "writable" && !he(t) ? V(Oe(), Y) : Y();
                        function Y() {
                            return _(S(), ()=>Ce(v, k), (ot)=>Ce(!0, ot)), null;
                        }
                        n(Y, "doTheRest");
                    }
                    n(N, "shutdownWithAction");
                    function J(S, v) {
                        R || (R = !0, t._state === "writable" && !he(t) ? V(Oe(), ()=>Ce(S, v)) : Ce(S, v));
                    }
                    n(J, "shutdown");
                    function Ce(S, v) {
                        return Io(m), _e(d), c !== void 0 && c.removeEventListener("abort", B), S ? P(v) : C(void 0), null;
                    }
                    n(Ce, "finalize");
                });
            }
            n(Ho, "ReadableStreamPipeTo");
            const Cn = class Cn {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get desiredSize() {
                    if (!nr(this)) throw ir("desiredSize");
                    return fn(this);
                }
                close() {
                    if (!nr(this)) throw ir("close");
                    if (!Je(this)) throw new TypeError("The stream is not in a state that permits close");
                    $e(this);
                }
                enqueue(t = void 0) {
                    if (!nr(this)) throw ir("enqueue");
                    if (!Je(this)) throw new TypeError("The stream is not in a state that permits enqueue");
                    return Ke(this, t);
                }
                error(t = void 0) {
                    if (!nr(this)) throw ir("error");
                    oe(this, t);
                }
                [Ar](t) {
                    Be(this);
                    const r = this._cancelAlgorithm(t);
                    return or(this), r;
                }
                [Br](t) {
                    const r = this._controlledReadableStream;
                    if (this._queue.length > 0) {
                        const s = xr(this);
                        this._closeRequested && this._queue.length === 0 ? (or(this), Pt(r)) : Tt(this), t._chunkSteps(s);
                    } else eo(r, t), Tt(this);
                }
                [kr]() {}
            };
            n(Cn, "ReadableStreamDefaultController");
            let ne = Cn;
            Object.defineProperties(ne.prototype, {
                close: {
                    enumerable: !0
                },
                enqueue: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                }
            }), h(ne.prototype.close, "close"), h(ne.prototype.enqueue, "enqueue"), h(ne.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ne.prototype, Symbol.toStringTag, {
                value: "ReadableStreamDefaultController",
                configurable: !0
            });
            function nr(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? !1 : e instanceof ne;
            }
            n(nr, "IsReadableStreamDefaultController");
            function Tt(e) {
                if (!Vo(e)) return;
                if (e._pulling) {
                    e._pullAgain = !0;
                    return;
                }
                e._pulling = !0;
                const r = e._pullAlgorithm();
                _(r, ()=>(e._pulling = !1, e._pullAgain && (e._pullAgain = !1, Tt(e)), null), (s)=>(oe(e, s), null));
            }
            n(Tt, "ReadableStreamDefaultControllerCallPullIfNeeded");
            function Vo(e) {
                const t = e._controlledReadableStream;
                return !Je(e) || !e._started ? !1 : !!(qe(t) && Lt(t) > 0 || fn(e) > 0);
            }
            n(Vo, "ReadableStreamDefaultControllerShouldCallPull");
            function or(e) {
                e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
            }
            n(or, "ReadableStreamDefaultControllerClearAlgorithms");
            function $e(e) {
                if (!Je(e)) return;
                const t = e._controlledReadableStream;
                e._closeRequested = !0, e._queue.length === 0 && (or(e), Pt(t));
            }
            n($e, "ReadableStreamDefaultControllerClose");
            function Ke(e, t) {
                if (!Je(e)) return;
                const r = e._controlledReadableStream;
                if (qe(r) && Lt(r) > 0) Lr(r, t, !1);
                else {
                    let s;
                    try {
                        s = e._strategySizeAlgorithm(t);
                    } catch (f) {
                        throw oe(e, f), f;
                    }
                    try {
                        Nr(e, t, s);
                    } catch (f) {
                        throw oe(e, f), f;
                    }
                }
                Tt(e);
            }
            n(Ke, "ReadableStreamDefaultControllerEnqueue");
            function oe(e, t) {
                const r = e._controlledReadableStream;
                r._state === "readable" && (Be(e), or(e), Zo(r, t));
            }
            n(oe, "ReadableStreamDefaultControllerError");
            function fn(e) {
                const t = e._controlledReadableStream._state;
                return t === "errored" ? null : t === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
            }
            n(fn, "ReadableStreamDefaultControllerGetDesiredSize");
            function Za(e) {
                return !Vo(e);
            }
            n(Za, "ReadableStreamDefaultControllerHasBackpressure");
            function Je(e) {
                const t = e._controlledReadableStream._state;
                return !e._closeRequested && t === "readable";
            }
            n(Je, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
            function Qo(e, t, r, s, f, c, d) {
                t._controlledReadableStream = e, t._queue = void 0, t._queueTotalSize = void 0, Be(t), t._started = !1, t._closeRequested = !1, t._pullAgain = !1, t._pulling = !1, t._strategySizeAlgorithm = d, t._strategyHWM = c, t._pullAlgorithm = s, t._cancelAlgorithm = f, e._readableStreamController = t;
                const m = r();
                _(T(m), ()=>(t._started = !0, Tt(t), null), (R)=>(oe(t, R), null));
            }
            n(Qo, "SetUpReadableStreamDefaultController");
            function Ka(e, t, r, s) {
                const f = Object.create(ne.prototype);
                let c, d, m;
                t.start !== void 0 ? c = n(()=>t.start(f), "startAlgorithm") : c = n(()=>{}, "startAlgorithm"), t.pull !== void 0 ? d = n(()=>t.pull(f), "pullAlgorithm") : d = n(()=>T(void 0), "pullAlgorithm"), t.cancel !== void 0 ? m = n((R)=>t.cancel(R), "cancelAlgorithm") : m = n(()=>T(void 0), "cancelAlgorithm"), Qo(e, f, c, d, m, r, s);
            }
            n(Ka, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
            function ir(e) {
                return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
            }
            n(ir, "defaultControllerBrandCheckException$1");
            function Ja(e, t) {
                return ze(e._readableStreamController) ? es(e) : Xa(e);
            }
            n(Ja, "ReadableStreamTee");
            function Xa(e, t) {
                const r = Qe(e);
                let s = !1, f = !1, c = !1, d = !1, m, R, y, C, P;
                const B = E((x)=>{
                    P = x;
                });
                function ae() {
                    return s ? (f = !0, T(void 0)) : (s = !0, mt(r, {
                        _chunkSteps: (N)=>{
                            ge(()=>{
                                f = !1;
                                const J = N, Ce = N;
                                c || Ke(y._readableStreamController, J), d || Ke(C._readableStreamController, Ce), s = !1, f && ae();
                            });
                        },
                        _closeSteps: ()=>{
                            s = !1, c || $e(y._readableStreamController), d || $e(C._readableStreamController), (!c || !d) && P(void 0);
                        },
                        _errorSteps: ()=>{
                            s = !1;
                        }
                    }), T(void 0));
                }
                n(ae, "pullAlgorithm");
                function nt(x) {
                    if (c = !0, m = x, d) {
                        const N = yt([
                            m,
                            R
                        ]), J = ie(e, N);
                        P(J);
                    }
                    return B;
                }
                n(nt, "cancel1Algorithm");
                function Oe(x) {
                    if (d = !0, R = x, c) {
                        const N = yt([
                            m,
                            R
                        ]), J = ie(e, N);
                        P(J);
                    }
                    return B;
                }
                n(Oe, "cancel2Algorithm");
                function Te() {}
                return n(Te, "startAlgorithm"), y = Ct(Te, ae, nt), C = Ct(Te, ae, Oe), I(r._closedPromise, (x)=>(oe(y._readableStreamController, x), oe(C._readableStreamController, x), (!c || !d) && P(void 0), null)), [
                    y,
                    C
                ];
            }
            n(Xa, "ReadableStreamDefaultTee");
            function es(e) {
                let t = Qe(e), r = !1, s = !1, f = !1, c = !1, d = !1, m, R, y, C, P;
                const B = E((S)=>{
                    P = S;
                });
                function ae(S) {
                    I(S._closedPromise, (v)=>(S !== t || (K(y._readableStreamController, v), K(C._readableStreamController, v), (!c || !d) && P(void 0)), null));
                }
                n(ae, "forwardReaderError");
                function nt() {
                    Fe(t) && (_e(t), t = Qe(e), ae(t)), mt(t, {
                        _chunkSteps: (v)=>{
                            ge(()=>{
                                s = !1, f = !1;
                                const k = v;
                                let Y = v;
                                if (!c && !d) try {
                                    Y = fo(v);
                                } catch (ot) {
                                    K(y._readableStreamController, ot), K(C._readableStreamController, ot), P(ie(e, ot));
                                    return;
                                }
                                c || Nt(y._readableStreamController, k), d || Nt(C._readableStreamController, Y), r = !1, s ? Te() : f && x();
                            });
                        },
                        _closeSteps: ()=>{
                            r = !1, c || gt(y._readableStreamController), d || gt(C._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Ht(y._readableStreamController, 0), C._readableStreamController._pendingPullIntos.length > 0 && Ht(C._readableStreamController, 0), (!c || !d) && P(void 0);
                        },
                        _errorSteps: ()=>{
                            r = !1;
                        }
                    });
                }
                n(nt, "pullWithDefaultReader");
                function Oe(S, v) {
                    Ee(t) && (_e(t), t = Co(e), ae(t));
                    const k = v ? C : y, Y = v ? y : C;
                    Eo(t, S, 1, {
                        _chunkSteps: (it)=>{
                            ge(()=>{
                                s = !1, f = !1;
                                const at = v ? d : c;
                                if (v ? c : d) at || Vt(k._readableStreamController, it);
                                else {
                                    let ui;
                                    try {
                                        ui = fo(it);
                                    } catch (kn) {
                                        K(k._readableStreamController, kn), K(Y._readableStreamController, kn), P(ie(e, kn));
                                        return;
                                    }
                                    at || Vt(k._readableStreamController, it), Nt(Y._readableStreamController, ui);
                                }
                                r = !1, s ? Te() : f && x();
                            });
                        },
                        _closeSteps: (it)=>{
                            r = !1;
                            const at = v ? d : c, fr = v ? c : d;
                            at || gt(k._readableStreamController), fr || gt(Y._readableStreamController), it !== void 0 && (at || Vt(k._readableStreamController, it), !fr && Y._readableStreamController._pendingPullIntos.length > 0 && Ht(Y._readableStreamController, 0)), (!at || !fr) && P(void 0);
                        },
                        _errorSteps: ()=>{
                            r = !1;
                        }
                    });
                }
                n(Oe, "pullWithBYOBReader");
                function Te() {
                    if (r) return s = !0, T(void 0);
                    r = !0;
                    const S = Gr(y._readableStreamController);
                    return S === null ? nt() : Oe(S._view, !1), T(void 0);
                }
                n(Te, "pull1Algorithm");
                function x() {
                    if (r) return f = !0, T(void 0);
                    r = !0;
                    const S = Gr(C._readableStreamController);
                    return S === null ? nt() : Oe(S._view, !0), T(void 0);
                }
                n(x, "pull2Algorithm");
                function N(S) {
                    if (c = !0, m = S, d) {
                        const v = yt([
                            m,
                            R
                        ]), k = ie(e, v);
                        P(k);
                    }
                    return B;
                }
                n(N, "cancel1Algorithm");
                function J(S) {
                    if (d = !0, R = S, c) {
                        const v = yt([
                            m,
                            R
                        ]), k = ie(e, v);
                        P(k);
                    }
                    return B;
                }
                n(J, "cancel2Algorithm");
                function Ce() {}
                return n(Ce, "startAlgorithm"), y = Go(Ce, Te, N), C = Go(Ce, x, J), ae(t), [
                    y,
                    C
                ];
            }
            n(es, "ReadableByteStreamTee");
            function ts(e) {
                return l(e) && typeof e.getReader < "u";
            }
            n(ts, "isReadableStreamLike");
            function rs(e) {
                return ts(e) ? os(e.getReader()) : ns(e);
            }
            n(rs, "ReadableStreamFrom");
            function ns(e) {
                let t;
                const r = uo(e, "async"), s = u;
                function f() {
                    let d;
                    try {
                        d = Yi(r);
                    } catch (R) {
                        return b(R);
                    }
                    const m = T(d);
                    return F(m, (R)=>{
                        if (!l(R)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
                        if (Gi(R)) $e(t._readableStreamController);
                        else {
                            const C = Zi(R);
                            Ke(t._readableStreamController, C);
                        }
                    });
                }
                n(f, "pullAlgorithm");
                function c(d) {
                    const m = r.iterator;
                    let R;
                    try {
                        R = Mt(m, "return");
                    } catch (P) {
                        return b(P);
                    }
                    if (R === void 0) return T(void 0);
                    let y;
                    try {
                        y = z(R, m, [
                            d
                        ]);
                    } catch (P) {
                        return b(P);
                    }
                    const C = T(y);
                    return F(C, (P)=>{
                        if (!l(P)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
                    });
                }
                return n(c, "cancelAlgorithm"), t = Ct(s, f, c, 0), t;
            }
            n(ns, "ReadableStreamFromIterable");
            function os(e) {
                let t;
                const r = u;
                function s() {
                    let c;
                    try {
                        c = e.read();
                    } catch (d) {
                        return b(d);
                    }
                    return F(c, (d)=>{
                        if (!l(d)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
                        if (d.done) $e(t._readableStreamController);
                        else {
                            const m = d.value;
                            Ke(t._readableStreamController, m);
                        }
                    });
                }
                n(s, "pullAlgorithm");
                function f(c) {
                    try {
                        return T(e.cancel(c));
                    } catch (d) {
                        return b(d);
                    }
                }
                return n(f, "cancelAlgorithm"), t = Ct(r, s, f, 0), t;
            }
            n(os, "ReadableStreamFromDefaultReader");
            function is(e, t) {
                ue(e, t);
                const r = e, s = r?.autoAllocateChunkSize, f = r?.cancel, c = r?.pull, d = r?.start, m = r?.type;
                return {
                    autoAllocateChunkSize: s === void 0 ? void 0 : Fr(s, `${t} has member 'autoAllocateChunkSize' that`),
                    cancel: f === void 0 ? void 0 : as(f, r, `${t} has member 'cancel' that`),
                    pull: c === void 0 ? void 0 : ss(c, r, `${t} has member 'pull' that`),
                    start: d === void 0 ? void 0 : ls(d, r, `${t} has member 'start' that`),
                    type: m === void 0 ? void 0 : us(m, `${t} has member 'type' that`)
                };
            }
            n(is, "convertUnderlyingDefaultOrByteSource");
            function as(e, t, r) {
                return Z(e, r), (s)=>j(e, t, [
                        s
                    ]);
            }
            n(as, "convertUnderlyingSourceCancelCallback");
            function ss(e, t, r) {
                return Z(e, r), (s)=>j(e, t, [
                        s
                    ]);
            }
            n(ss, "convertUnderlyingSourcePullCallback");
            function ls(e, t, r) {
                return Z(e, r), (s)=>z(e, t, [
                        s
                    ]);
            }
            n(ls, "convertUnderlyingSourceStartCallback");
            function us(e, t) {
                if (e = `${e}`, e !== "bytes") throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);
                return e;
            }
            n(us, "convertReadableStreamType");
            function fs(e, t) {
                return ue(e, t), {
                    preventCancel: !!e?.preventCancel
                };
            }
            n(fs, "convertIteratorOptions");
            function Yo(e, t) {
                ue(e, t);
                const r = e?.preventAbort, s = e?.preventCancel, f = e?.preventClose, c = e?.signal;
                return c !== void 0 && cs(c, `${t} has member 'signal' that`), {
                    preventAbort: !!r,
                    preventCancel: !!s,
                    preventClose: !!f,
                    signal: c
                };
            }
            n(Yo, "convertPipeOptions");
            function cs(e, t) {
                if (!_a(e)) throw new TypeError(`${t} is not an AbortSignal.`);
            }
            n(cs, "assertAbortSignal");
            function ds(e, t) {
                ue(e, t);
                const r = e?.readable;
                zr(r, "readable", "ReadableWritablePair"), jr(r, `${t} has member 'readable' that`);
                const s = e?.writable;
                return zr(s, "writable", "ReadableWritablePair"), Bo(s, `${t} has member 'writable' that`), {
                    readable: r,
                    writable: s
                };
            }
            n(ds, "convertReadableWritablePair");
            const Pn = class Pn {
                constructor(t = {}, r = {}){
                    t === void 0 ? t = null : Jn(t, "First parameter");
                    const s = Gt(r, "Second parameter"), f = is(t, "First parameter");
                    if (cn(this), f.type === "bytes") {
                        if (s.size !== void 0) throw new RangeError("The strategy for a byte stream cannot have a size function");
                        const c = St(s, 0);
                        aa(this, f, c);
                    } else {
                        const c = Yt(s), d = St(s, 1);
                        Ka(this, f, d, c);
                    }
                }
                get locked() {
                    if (!We(this)) throw De("locked");
                    return qe(this);
                }
                cancel(t = void 0) {
                    return We(this) ? qe(this) ? b(new TypeError("Cannot cancel a stream that already has a reader")) : ie(this, t) : b(De("cancel"));
                }
                getReader(t = void 0) {
                    if (!We(this)) throw De("getReader");
                    return la(t, "First parameter").mode === void 0 ? Qe(this) : Co(this);
                }
                pipeThrough(t, r = {}) {
                    if (!We(this)) throw De("pipeThrough");
                    Se(t, 1, "pipeThrough");
                    const s = ds(t, "First parameter"), f = Yo(r, "Second parameter");
                    if (qe(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
                    if (Ze(s.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
                    const c = Ho(this, s.writable, f.preventClose, f.preventAbort, f.preventCancel, f.signal);
                    return Q(c), s.readable;
                }
                pipeTo(t, r = {}) {
                    if (!We(this)) return b(De("pipeTo"));
                    if (t === void 0) return b("Parameter 1 is required in 'pipeTo'.");
                    if (!Ge(t)) return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
                    let s;
                    try {
                        s = Yo(r, "Second parameter");
                    } catch (f) {
                        return b(f);
                    }
                    return qe(this) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ze(t) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Ho(this, t, s.preventClose, s.preventAbort, s.preventCancel, s.signal);
                }
                tee() {
                    if (!We(this)) throw De("tee");
                    const t = Ja(this);
                    return yt(t);
                }
                values(t = void 0) {
                    if (!We(this)) throw De("values");
                    const r = fs(t, "First parameter");
                    return Vi(this, r.preventCancel);
                }
                [Ur](t) {
                    return this.values(t);
                }
                static from(t) {
                    return rs(t);
                }
            };
            n(Pn, "ReadableStream");
            let L = Pn;
            Object.defineProperties(L, {
                from: {
                    enumerable: !0
                }
            }), Object.defineProperties(L.prototype, {
                cancel: {
                    enumerable: !0
                },
                getReader: {
                    enumerable: !0
                },
                pipeThrough: {
                    enumerable: !0
                },
                pipeTo: {
                    enumerable: !0
                },
                tee: {
                    enumerable: !0
                },
                values: {
                    enumerable: !0
                },
                locked: {
                    enumerable: !0
                }
            }), h(L.from, "from"), h(L.prototype.cancel, "cancel"), h(L.prototype.getReader, "getReader"), h(L.prototype.pipeThrough, "pipeThrough"), h(L.prototype.pipeTo, "pipeTo"), h(L.prototype.tee, "tee"), h(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, {
                value: "ReadableStream",
                configurable: !0
            }), Object.defineProperty(L.prototype, Ur, {
                value: L.prototype.values,
                writable: !0,
                configurable: !0
            });
            function Ct(e, t, r, s = 1, f = ()=>1) {
                const c = Object.create(L.prototype);
                cn(c);
                const d = Object.create(ne.prototype);
                return Qo(c, d, e, t, r, s, f), c;
            }
            n(Ct, "CreateReadableStream");
            function Go(e, t, r) {
                const s = Object.create(L.prototype);
                cn(s);
                const f = Object.create(te.prototype);
                return To(s, f, e, t, r, 0, void 0), s;
            }
            n(Go, "CreateReadableByteStream");
            function cn(e) {
                e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = !1;
            }
            n(cn, "InitializeReadableStream");
            function We(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? !1 : e instanceof L;
            }
            n(We, "IsReadableStream");
            function qe(e) {
                return e._reader !== void 0;
            }
            n(qe, "IsReadableStreamLocked");
            function ie(e, t) {
                if (e._disturbed = !0, e._state === "closed") return T(void 0);
                if (e._state === "errored") return b(e._storedError);
                Pt(e);
                const r = e._reader;
                if (r !== void 0 && Fe(r)) {
                    const f = r._readIntoRequests;
                    r._readIntoRequests = new D, f.forEach((c)=>{
                        c._closeSteps(void 0);
                    });
                }
                const s = e._readableStreamController[Ar](t);
                return F(s, u);
            }
            n(ie, "ReadableStreamCancel");
            function Pt(e) {
                e._state = "closed";
                const t = e._reader;
                if (t !== void 0 && (Zn(t), Ee(t))) {
                    const r = t._readRequests;
                    t._readRequests = new D, r.forEach((s)=>{
                        s._closeSteps();
                    });
                }
            }
            n(Pt, "ReadableStreamClose");
            function Zo(e, t) {
                e._state = "errored", e._storedError = t;
                const r = e._reader;
                r !== void 0 && (Or(r, t), Ee(r) ? ro(r, t) : Ao(r, t));
            }
            n(Zo, "ReadableStreamError");
            function De(e) {
                return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
            }
            n(De, "streamBrandCheckException$1");
            function Ko(e, t) {
                ue(e, t);
                const r = e?.highWaterMark;
                return zr(r, "highWaterMark", "QueuingStrategyInit"), {
                    highWaterMark: Ir(r)
                };
            }
            n(Ko, "convertQueuingStrategyInit");
            const Jo = n((e)=>e.byteLength, "byteLengthSizeFunction");
            h(Jo, "size");
            const vn = class vn {
                constructor(t){
                    Se(t, 1, "ByteLengthQueuingStrategy"), t = Ko(t, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t.highWaterMark;
                }
                get highWaterMark() {
                    if (!ei(this)) throw Xo("highWaterMark");
                    return this._byteLengthQueuingStrategyHighWaterMark;
                }
                get size() {
                    if (!ei(this)) throw Xo("size");
                    return Jo;
                }
            };
            n(vn, "ByteLengthQueuingStrategy");
            let Xe = vn;
            Object.defineProperties(Xe.prototype, {
                highWaterMark: {
                    enumerable: !0
                },
                size: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Xe.prototype, Symbol.toStringTag, {
                value: "ByteLengthQueuingStrategy",
                configurable: !0
            });
            function Xo(e) {
                return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
            }
            n(Xo, "byteLengthBrandCheckException");
            function ei(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? !1 : e instanceof Xe;
            }
            n(ei, "IsByteLengthQueuingStrategy");
            const ti = n(()=>1, "countSizeFunction");
            h(ti, "size");
            const En = class En {
                constructor(t){
                    Se(t, 1, "CountQueuingStrategy"), t = Ko(t, "First parameter"), this._countQueuingStrategyHighWaterMark = t.highWaterMark;
                }
                get highWaterMark() {
                    if (!ni(this)) throw ri("highWaterMark");
                    return this._countQueuingStrategyHighWaterMark;
                }
                get size() {
                    if (!ni(this)) throw ri("size");
                    return ti;
                }
            };
            n(En, "CountQueuingStrategy");
            let et = En;
            Object.defineProperties(et.prototype, {
                highWaterMark: {
                    enumerable: !0
                },
                size: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(et.prototype, Symbol.toStringTag, {
                value: "CountQueuingStrategy",
                configurable: !0
            });
            function ri(e) {
                return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
            }
            n(ri, "countBrandCheckException");
            function ni(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? !1 : e instanceof et;
            }
            n(ni, "IsCountQueuingStrategy");
            function hs(e, t) {
                ue(e, t);
                const r = e?.cancel, s = e?.flush, f = e?.readableType, c = e?.start, d = e?.transform, m = e?.writableType;
                return {
                    cancel: r === void 0 ? void 0 : ys(r, e, `${t} has member 'cancel' that`),
                    flush: s === void 0 ? void 0 : ps(s, e, `${t} has member 'flush' that`),
                    readableType: f,
                    start: c === void 0 ? void 0 : bs(c, e, `${t} has member 'start' that`),
                    transform: d === void 0 ? void 0 : ms(d, e, `${t} has member 'transform' that`),
                    writableType: m
                };
            }
            n(hs, "convertTransformer");
            function ps(e, t, r) {
                return Z(e, r), (s)=>j(e, t, [
                        s
                    ]);
            }
            n(ps, "convertTransformerFlushCallback");
            function bs(e, t, r) {
                return Z(e, r), (s)=>z(e, t, [
                        s
                    ]);
            }
            n(bs, "convertTransformerStartCallback");
            function ms(e, t, r) {
                return Z(e, r), (s, f)=>j(e, t, [
                        s,
                        f
                    ]);
            }
            n(ms, "convertTransformerTransformCallback");
            function ys(e, t, r) {
                return Z(e, r), (s)=>j(e, t, [
                        s
                    ]);
            }
            n(ys, "convertTransformerCancelCallback");
            const An = class An {
                constructor(t = {}, r = {}, s = {}){
                    t === void 0 && (t = null);
                    const f = Gt(r, "Second parameter"), c = Gt(s, "Third parameter"), d = hs(t, "First parameter");
                    if (d.readableType !== void 0) throw new RangeError("Invalid readableType specified");
                    if (d.writableType !== void 0) throw new RangeError("Invalid writableType specified");
                    const m = St(c, 0), R = Yt(c), y = St(f, 1), C = Yt(f);
                    let P;
                    const B = E((ae)=>{
                        P = ae;
                    });
                    gs(this, B, y, C, m, R), Ss(this, d), d.start !== void 0 ? P(d.start(this._transformStreamController)) : P(void 0);
                }
                get readable() {
                    if (!oi(this)) throw li("readable");
                    return this._readable;
                }
                get writable() {
                    if (!oi(this)) throw li("writable");
                    return this._writable;
                }
            };
            n(An, "TransformStream");
            let tt = An;
            Object.defineProperties(tt.prototype, {
                readable: {
                    enumerable: !0
                },
                writable: {
                    enumerable: !0
                }
            }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(tt.prototype, Symbol.toStringTag, {
                value: "TransformStream",
                configurable: !0
            });
            function gs(e, t, r, s, f, c) {
                function d() {
                    return t;
                }
                n(d, "startAlgorithm");
                function m(B) {
                    return Ts(e, B);
                }
                n(m, "writeAlgorithm");
                function R(B) {
                    return Cs(e, B);
                }
                n(R, "abortAlgorithm");
                function y() {
                    return Ps(e);
                }
                n(y, "closeAlgorithm"), e._writable = Ra(d, m, y, R, r, s);
                function C() {
                    return vs(e);
                }
                n(C, "pullAlgorithm");
                function P(B) {
                    return Es(e, B);
                }
                n(P, "cancelAlgorithm"), e._readable = Ct(d, C, P, f, c), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, ar(e, !0), e._transformStreamController = void 0;
            }
            n(gs, "InitializeTransformStream");
            function oi(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? !1 : e instanceof tt;
            }
            n(oi, "IsTransformStream");
            function ii(e, t) {
                oe(e._readable._readableStreamController, t), dn(e, t);
            }
            n(ii, "TransformStreamError");
            function dn(e, t) {
                lr(e._transformStreamController), wt(e._writable._writableStreamController, t), hn(e);
            }
            n(dn, "TransformStreamErrorWritableAndUnblockWrite");
            function hn(e) {
                e._backpressure && ar(e, !1);
            }
            n(hn, "TransformStreamUnblockWrite");
            function ar(e, t) {
                e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = E((r)=>{
                    e._backpressureChangePromise_resolve = r;
                }), e._backpressure = t;
            }
            n(ar, "TransformStreamSetBackpressure");
            const Bn = class Bn {
                constructor(){
                    throw new TypeError("Illegal constructor");
                }
                get desiredSize() {
                    if (!sr(this)) throw ur("desiredSize");
                    const t = this._controlledTransformStream._readable._readableStreamController;
                    return fn(t);
                }
                enqueue(t = void 0) {
                    if (!sr(this)) throw ur("enqueue");
                    ai(this, t);
                }
                error(t = void 0) {
                    if (!sr(this)) throw ur("error");
                    ws(this, t);
                }
                terminate() {
                    if (!sr(this)) throw ur("terminate");
                    Rs(this);
                }
            };
            n(Bn, "TransformStreamDefaultController");
            let pe = Bn;
            Object.defineProperties(pe.prototype, {
                enqueue: {
                    enumerable: !0
                },
                error: {
                    enumerable: !0
                },
                terminate: {
                    enumerable: !0
                },
                desiredSize: {
                    enumerable: !0
                }
            }), h(pe.prototype.enqueue, "enqueue"), h(pe.prototype.error, "error"), h(pe.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pe.prototype, Symbol.toStringTag, {
                value: "TransformStreamDefaultController",
                configurable: !0
            });
            function sr(e) {
                return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? !1 : e instanceof pe;
            }
            n(sr, "IsTransformStreamDefaultController");
            function _s(e, t, r, s, f) {
                t._controlledTransformStream = e, e._transformStreamController = t, t._transformAlgorithm = r, t._flushAlgorithm = s, t._cancelAlgorithm = f, t._finishPromise = void 0, t._finishPromise_resolve = void 0, t._finishPromise_reject = void 0;
            }
            n(_s, "SetUpTransformStreamDefaultController");
            function Ss(e, t) {
                const r = Object.create(pe.prototype);
                let s, f, c;
                t.transform !== void 0 ? s = n((d)=>t.transform(d, r), "transformAlgorithm") : s = n((d)=>{
                    try {
                        return ai(r, d), T(void 0);
                    } catch (m) {
                        return b(m);
                    }
                }, "transformAlgorithm"), t.flush !== void 0 ? f = n(()=>t.flush(r), "flushAlgorithm") : f = n(()=>T(void 0), "flushAlgorithm"), t.cancel !== void 0 ? c = n((d)=>t.cancel(d), "cancelAlgorithm") : c = n(()=>T(void 0), "cancelAlgorithm"), _s(e, r, s, f, c);
            }
            n(Ss, "SetUpTransformStreamDefaultControllerFromTransformer");
            function lr(e) {
                e._transformAlgorithm = void 0, e._flushAlgorithm = void 0, e._cancelAlgorithm = void 0;
            }
            n(lr, "TransformStreamDefaultControllerClearAlgorithms");
            function ai(e, t) {
                const r = e._controlledTransformStream, s = r._readable._readableStreamController;
                if (!Je(s)) throw new TypeError("Readable side is not in a state that permits enqueue");
                try {
                    Ke(s, t);
                } catch (c) {
                    throw dn(r, c), r._readable._storedError;
                }
                Za(s) !== r._backpressure && ar(r, !0);
            }
            n(ai, "TransformStreamDefaultControllerEnqueue");
            function ws(e, t) {
                ii(e._controlledTransformStream, t);
            }
            n(ws, "TransformStreamDefaultControllerError");
            function si(e, t) {
                const r = e._transformAlgorithm(t);
                return F(r, void 0, (s)=>{
                    throw ii(e._controlledTransformStream, s), s;
                });
            }
            n(si, "TransformStreamDefaultControllerPerformTransform");
            function Rs(e) {
                const t = e._controlledTransformStream, r = t._readable._readableStreamController;
                $e(r);
                const s = new TypeError("TransformStream terminated");
                dn(t, s);
            }
            n(Rs, "TransformStreamDefaultControllerTerminate");
            function Ts(e, t) {
                const r = e._transformStreamController;
                if (e._backpressure) {
                    const s = e._backpressureChangePromise;
                    return F(s, ()=>{
                        const f = e._writable;
                        if (f._state === "erroring") throw f._storedError;
                        return si(r, t);
                    });
                }
                return si(r, t);
            }
            n(Ts, "TransformStreamDefaultSinkWriteAlgorithm");
            function Cs(e, t) {
                const r = e._transformStreamController;
                if (r._finishPromise !== void 0) return r._finishPromise;
                const s = e._readable;
                r._finishPromise = E((c, d)=>{
                    r._finishPromise_resolve = c, r._finishPromise_reject = d;
                });
                const f = r._cancelAlgorithm(t);
                return lr(r), _(f, ()=>(s._state === "errored" ? rt(r, s._storedError) : (oe(s._readableStreamController, t), pn(r)), null), (c)=>(oe(s._readableStreamController, c), rt(r, c), null)), r._finishPromise;
            }
            n(Cs, "TransformStreamDefaultSinkAbortAlgorithm");
            function Ps(e) {
                const t = e._transformStreamController;
                if (t._finishPromise !== void 0) return t._finishPromise;
                const r = e._readable;
                t._finishPromise = E((f, c)=>{
                    t._finishPromise_resolve = f, t._finishPromise_reject = c;
                });
                const s = t._flushAlgorithm();
                return lr(t), _(s, ()=>(r._state === "errored" ? rt(t, r._storedError) : ($e(r._readableStreamController), pn(t)), null), (f)=>(oe(r._readableStreamController, f), rt(t, f), null)), t._finishPromise;
            }
            n(Ps, "TransformStreamDefaultSinkCloseAlgorithm");
            function vs(e) {
                return ar(e, !1), e._backpressureChangePromise;
            }
            n(vs, "TransformStreamDefaultSourcePullAlgorithm");
            function Es(e, t) {
                const r = e._transformStreamController;
                if (r._finishPromise !== void 0) return r._finishPromise;
                const s = e._writable;
                r._finishPromise = E((c, d)=>{
                    r._finishPromise_resolve = c, r._finishPromise_reject = d;
                });
                const f = r._cancelAlgorithm(t);
                return lr(r), _(f, ()=>(s._state === "errored" ? rt(r, s._storedError) : (wt(s._writableStreamController, t), hn(e), pn(r)), null), (c)=>(wt(s._writableStreamController, c), hn(e), rt(r, c), null)), r._finishPromise;
            }
            n(Es, "TransformStreamDefaultSourceCancelAlgorithm");
            function ur(e) {
                return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
            }
            n(ur, "defaultControllerBrandCheckException");
            function pn(e) {
                e._finishPromise_resolve !== void 0 && (e._finishPromise_resolve(), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
            }
            n(pn, "defaultControllerFinishPromiseResolve");
            function rt(e, t) {
                e._finishPromise_reject !== void 0 && (Q(e._finishPromise), e._finishPromise_reject(t), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
            }
            n(rt, "defaultControllerFinishPromiseReject");
            function li(e) {
                return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
            }
            n(li, "streamBrandCheckException"), a.ByteLengthQueuingStrategy = Xe, a.CountQueuingStrategy = et, a.ReadableByteStreamController = te, a.ReadableStream = L, a.ReadableStreamBYOBReader = ce, a.ReadableStreamBYOBRequest = Re, a.ReadableStreamDefaultController = ne, a.ReadableStreamDefaultReader = fe, a.TransformStream = tt, a.TransformStreamDefaultController = pe, a.WritableStream = de, a.WritableStreamDefaultController = ke, a.WritableStreamDefaultWriter = re;
        });
    }(pr, pr.exports)), pr.exports;
}
n(Ls, "requirePonyfill_es2018");
const $s = 65536;
if (!globalThis.ReadableStream) try {
    const i1 = __turbopack_require__("[externals]/node:process [external] (node:process, cjs)"), { emitWarning: o } = i1;
    try {
        i1.emitWarning = ()=>{}, Object.assign(globalThis, __turbopack_require__("[externals]/node:stream/web [external] (node:stream/web, cjs)")), i1.emitWarning = o;
    } catch (a) {
        throw i1.emitWarning = o, a;
    }
} catch  {
    Object.assign(globalThis, Ls());
}
try {
    const { Blob: i1 } = __turbopack_require__("[externals]/buffer [external] (buffer, cjs)");
    i1 && !i1.prototype.stream && (i1.prototype.stream = n(function(a) {
        let u = 0;
        const l = this;
        return new ReadableStream({
            type: "bytes",
            async pull (p) {
                const g = await l.slice(u, Math.min(l.size, u + $s)).arrayBuffer();
                u += g.byteLength, p.enqueue(new Uint8Array(g)), u === l.size && p.close();
            }
        });
    }, "name"));
} catch  {} /*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ 
const hi = 65536;
async function* qn(i1, o = !0) {
    for (const a of i1)if ("stream" in a) yield* a.stream();
    else if (ArrayBuffer.isView(a)) if (o) {
        let u = a.byteOffset;
        const l = a.byteOffset + a.byteLength;
        for(; u !== l;){
            const p = Math.min(l - u, hi), h = a.buffer.slice(u, u + p);
            u += h.byteLength, yield new Uint8Array(h);
        }
    } else yield a;
    else {
        let u = 0, l = a;
        for(; u !== l.size;){
            const h = await l.slice(u, Math.min(l.size, u + hi)).arrayBuffer();
            u += h.byteLength, yield new Uint8Array(h);
        }
    }
}
n(qn, "toIterator");
const pi = (Ve = class {
    constructor(o = [], a = {}){
        be(this, ve, []);
        be(this, kt, "");
        be(this, bt, 0);
        be(this, Cr, "transparent");
        if (typeof o != "object" || o === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        if (typeof o[Symbol.iterator] != "function") throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        if (typeof a != "object" && typeof a != "function") throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        a === null && (a = {});
        const u = new TextEncoder;
        for (const p of o){
            let h;
            ArrayBuffer.isView(p) ? h = new Uint8Array(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength)) : p instanceof ArrayBuffer ? h = new Uint8Array(p.slice(0)) : p instanceof Ve ? h = p : h = u.encode(`${p}`), X(this, bt, O(this, bt) + (ArrayBuffer.isView(h) ? h.byteLength : h.size)), O(this, ve).push(h);
        }
        X(this, Cr, `${a.endings === void 0 ? "transparent" : a.endings}`);
        const l = a.type === void 0 ? "" : String(a.type);
        X(this, kt, /^[\x20-\x7E]*$/.test(l) ? l : "");
    }
    get size() {
        return O(this, bt);
    }
    get type() {
        return O(this, kt);
    }
    async text() {
        const o = new TextDecoder;
        let a = "";
        for await (const u of qn(O(this, ve), !1))a += o.decode(u, {
            stream: !0
        });
        return a += o.decode(), a;
    }
    async arrayBuffer() {
        const o = new Uint8Array(this.size);
        let a = 0;
        for await (const u of qn(O(this, ve), !1))o.set(u, a), a += u.length;
        return o.buffer;
    }
    stream() {
        const o = qn(O(this, ve), !0);
        return new globalThis.ReadableStream({
            type: "bytes",
            async pull (a) {
                const u = await o.next();
                u.done ? a.close() : a.enqueue(u.value);
            },
            async cancel () {
                await o.return();
            }
        });
    }
    slice(o = 0, a = this.size, u = "") {
        const { size: l } = this;
        let p = o < 0 ? Math.max(l + o, 0) : Math.min(o, l), h = a < 0 ? Math.max(l + a, 0) : Math.min(a, l);
        const g = Math.max(h - p, 0), A = O(this, ve), w = [];
        let E = 0;
        for (const b of A){
            if (E >= g) break;
            const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
            if (p && q <= p) p -= q, h -= q;
            else {
                let _;
                ArrayBuffer.isView(b) ? (_ = b.subarray(p, Math.min(q, h)), E += _.byteLength) : (_ = b.slice(p, Math.min(q, h)), E += _.size), h -= q, w.push(_), p = 0;
            }
        }
        const T = new Ve([], {
            type: String(u).toLowerCase()
        });
        return X(T, bt, g), X(T, ve, w), T;
    }
    get [Symbol.toStringTag]() {
        return "Blob";
    }
    static [Symbol.hasInstance](o) {
        return o && typeof o == "object" && typeof o.constructor == "function" && (typeof o.stream == "function" || typeof o.arrayBuffer == "function") && /^(Blob|File)$/.test(o[Symbol.toStringTag]);
    }
}, ve = new WeakMap, kt = new WeakMap, bt = new WeakMap, Cr = new WeakMap, n(Ve, "Blob"), Ve);
Object.defineProperties(pi.prototype, {
    size: {
        enumerable: !0
    },
    type: {
        enumerable: !0
    },
    slice: {
        enumerable: !0
    }
});
const Ds = pi, ut = Ds, Ms = (Ot = class extends ut {
    constructor(a, u, l = {}){
        if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        super(a, l);
        be(this, Wt, 0);
        be(this, qt, "");
        l === null && (l = {});
        const p = l.lastModified === void 0 ? Date.now() : Number(l.lastModified);
        Number.isNaN(p) || X(this, Wt, p), X(this, qt, String(u));
    }
    get name() {
        return O(this, qt);
    }
    get lastModified() {
        return O(this, Wt);
    }
    get [Symbol.toStringTag]() {
        return "File";
    }
    static [Symbol.hasInstance](a) {
        return !!a && a instanceof ut && /^(File)$/.test(a[Symbol.toStringTag]);
    }
}, Wt = new WeakMap, qt = new WeakMap, n(Ot, "File"), Ot), Us = Ms, On = Us; /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ 
var { toStringTag: Et, iterator: xs, hasInstance: Ns } = Symbol, bi = Math.random, Hs = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), mi = n((i1, o, a)=>(i1 += "", /^(Blob|File)$/.test(o && o[Et]) ? [
        (a = a !== void 0 ? a + "" : o[Et] == "File" ? o.name : "blob", i1),
        o.name !== a || o[Et] == "blob" ? new On([
            o
        ], a, o) : o
    ] : [
        i1,
        o + ""
    ]), "f"), zn = n((i1, o)=>(o ? i1 : i1.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), Me = n((i1, o, a)=>{
    if (o.length < a) throw new TypeError(`Failed to execute '${i1}' on 'FormData': ${a} arguments required, but only ${o.length} present.`);
}, "x");
const br = (zt = class {
    constructor(...o){
        be(this, ee, []);
        if (o.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
    }
    get [Et]() {
        return "FormData";
    }
    [xs]() {
        return this.entries();
    }
    static [Ns](o) {
        return o && typeof o == "object" && o[Et] === "FormData" && !Hs.some((a)=>typeof o[a] != "function");
    }
    append(...o) {
        Me("append", arguments, 2), O(this, ee).push(mi(...o));
    }
    delete(o) {
        Me("delete", arguments, 1), o += "", X(this, ee, O(this, ee).filter(([a])=>a !== o));
    }
    get(o) {
        Me("get", arguments, 1), o += "";
        for(var a = O(this, ee), u = a.length, l = 0; l < u; l++)if (a[l][0] === o) return a[l][1];
        return null;
    }
    getAll(o, a) {
        return Me("getAll", arguments, 1), a = [], o += "", O(this, ee).forEach((u)=>u[0] === o && a.push(u[1])), a;
    }
    has(o) {
        return Me("has", arguments, 1), o += "", O(this, ee).some((a)=>a[0] === o);
    }
    forEach(o, a) {
        Me("forEach", arguments, 1);
        for (var [u, l] of this)o.call(a, l, u, this);
    }
    set(...o) {
        Me("set", arguments, 2);
        var a = [], u = !0;
        o = mi(...o), O(this, ee).forEach((l)=>{
            l[0] === o[0] ? u && (u = !a.push(o)) : a.push(l);
        }), u && a.push(o), X(this, ee, a);
    }
    *entries() {
        yield* O(this, ee);
    }
    *keys() {
        for (var [o] of this)yield o;
    }
    *values() {
        for (var [, o] of this)yield o;
    }
}, ee = new WeakMap, n(zt, "FormData"), zt);
function Vs(i1, o = ut) {
    var a = `${bi()}${bi()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), u = [], l = `--${a}\r
Content-Disposition: form-data; name="`;
    return i1.forEach((p, h)=>typeof p == "string" ? u.push(l + zn(h) + `"\r
\r
${p.replace(/\r(?!\n)|(?<!\r)\n/g, `\r
`)}\r
`) : u.push(l + zn(h) + `"; filename="${zn(p.name, 1)}"\r
Content-Type: ${p.type || "application/octet-stream"}\r
\r
`, p, `\r
`)), u.push(`--${a}--`), new o(u, {
        type: "multipart/form-data; boundary=" + a
    });
}
n(Vs, "formDataToBlob");
const Un = class Un extends Error {
    constructor(o, a){
        super(o), Error.captureStackTrace(this, this.constructor), this.type = a;
    }
    get name() {
        return this.constructor.name;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
};
n(Un, "FetchBaseError");
let ft = Un;
const xn = class xn extends ft {
    constructor(o, a, u){
        super(o, a), u && (this.code = this.errno = u.code, this.erroredSysCall = u.syscall);
    }
};
n(xn, "FetchError");
let G = xn;
const mr = Symbol.toStringTag, yi = n((i1)=>typeof i1 == "object" && typeof i1.append == "function" && typeof i1.delete == "function" && typeof i1.get == "function" && typeof i1.getAll == "function" && typeof i1.has == "function" && typeof i1.set == "function" && typeof i1.sort == "function" && i1[mr] === "URLSearchParams", "isURLSearchParameters"), yr = n((i1)=>i1 && typeof i1 == "object" && typeof i1.arrayBuffer == "function" && typeof i1.type == "string" && typeof i1.stream == "function" && typeof i1.constructor == "function" && /^(Blob|File)$/.test(i1[mr]), "isBlob"), Qs = n((i1)=>typeof i1 == "object" && (i1[mr] === "AbortSignal" || i1[mr] === "EventTarget"), "isAbortSignal"), Ys = n((i1, o)=>{
    const a = new URL(o).hostname, u = new URL(i1).hostname;
    return a === u || a.endsWith(`.${u}`);
}, "isDomainOrSubdomain"), Gs = n((i1, o)=>{
    const a = new URL(o).protocol, u = new URL(i1).protocol;
    return a === u;
}, "isSameProtocol"), Zs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"].pipeline), H = Symbol("Body internals"), Nn = class Nn {
    constructor(o, { size: a = 0 } = {}){
        let u = null;
        o === null ? o = null : yi(o) ? o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(o.toString()) : yr(o) || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(o) || (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isAnyArrayBuffer(o) ? o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(o) : ArrayBuffer.isView(o) ? o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(o.buffer, o.byteOffset, o.byteLength) : o instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"] || (o instanceof br ? (o = Vs(o), u = o.type.split("=")[1]) : o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(String(o))));
        let l = o;
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(o) ? l = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"].Readable.from(o) : yr(o) && (l = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"].Readable.from(o.stream())), this[H] = {
            body: o,
            stream: l,
            boundary: u,
            disturbed: !1,
            error: null
        }, this.size = a, o instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"] && o.on("error", (p)=>{
            const h = p instanceof ft ? p : new G(`Invalid response body while trying to fetch ${this.url}: ${p.message}`, "system", p);
            this[H].error = h;
        });
    }
    get body() {
        return this[H].stream;
    }
    get bodyUsed() {
        return this[H].disturbed;
    }
    async arrayBuffer() {
        const { buffer: o, byteOffset: a, byteLength: u } = await In(this);
        return o.slice(a, a + u);
    }
    async formData() {
        const o = this.headers.get("content-type");
        if (o.startsWith("application/x-www-form-urlencoded")) {
            const u = new br, l = new URLSearchParams(await this.text());
            for (const [p, h] of l)u.append(p, h);
            return u;
        }
        const { toFormData: a } = await __turbopack_require__("[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
        return a(this.body, o);
    }
    async blob() {
        const o = this.headers && this.headers.get("content-type") || this[H].body && this[H].body.type || "", a = await this.arrayBuffer();
        return new ut([
            a
        ], {
            type: o
        });
    }
    async json() {
        const o = await this.text();
        return JSON.parse(o);
    }
    async text() {
        const o = await In(this);
        return new TextDecoder().decode(o);
    }
    buffer() {
        return In(this);
    }
};
n(Nn, "Body");
let Ue = Nn;
Ue.prototype.buffer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])(Ue.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(Ue.prototype, {
    body: {
        enumerable: !0
    },
    bodyUsed: {
        enumerable: !0
    },
    arrayBuffer: {
        enumerable: !0
    },
    blob: {
        enumerable: !0
    },
    json: {
        enumerable: !0
    },
    text: {
        enumerable: !0
    },
    data: {
        get: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])(()=>{}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)")
    }
});
async function In(i1) {
    if (i1[H].disturbed) throw new TypeError(`body used already for: ${i1.url}`);
    if (i1[H].disturbed = !0, i1[H].error) throw i1[H].error;
    const { body: o } = i1;
    if (o === null) return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(0);
    if (!(o instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"])) return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(0);
    const a = [];
    let u = 0;
    try {
        for await (const l of o){
            if (i1.size > 0 && u + l.length > i1.size) {
                const p = new G(`content size at ${i1.url} over limit: ${i1.size}`, "max-size");
                throw o.destroy(p), p;
            }
            u += l.length, a.push(l);
        }
    } catch (l) {
        throw l instanceof ft ? l : new G(`Invalid response body while trying to fetch ${i1.url}: ${l.message}`, "system", l);
    }
    if (o.readableEnded === !0 || o._readableState.ended === !0) try {
        return a.every((l)=>typeof l == "string") ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(a.join("")) : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat(a, u);
    } catch (l) {
        throw new G(`Could not create Buffer from response body for ${i1.url}: ${l.message}`, "system", l);
    }
    else throw new G(`Premature close of server response while trying to fetch ${i1.url}`);
}
n(In, "consumeBody");
const Fn = n((i1, o)=>{
    let a, u, { body: l } = i1[H];
    if (i1.bodyUsed) throw new Error("cannot clone body after it is used");
    return l instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"] && typeof l.getBoundary != "function" && (a = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["PassThrough"]({
        highWaterMark: o
    }), u = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["PassThrough"]({
        highWaterMark: o
    }), l.pipe(a), l.pipe(u), i1[H].stream = a, l = u), l;
}, "clone"), Ks = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])((i1)=>i1.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), gi = n((i1, o)=>i1 === null ? null : typeof i1 == "string" ? "text/plain;charset=UTF-8" : yi(i1) ? "application/x-www-form-urlencoded;charset=UTF-8" : yr(i1) ? i1.type || null : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(i1) || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isAnyArrayBuffer(i1) || ArrayBuffer.isView(i1) ? null : i1 instanceof br ? `multipart/form-data; boundary=${o[H].boundary}` : i1 && typeof i1.getBoundary == "function" ? `multipart/form-data;boundary=${Ks(i1)}` : i1 instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"] ? null : "text/plain;charset=UTF-8", "extractContentType"), Js = n((i1)=>{
    const { body: o } = i1[H];
    return o === null ? 0 : yr(o) ? o.size : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(o) ? o.length : o && typeof o.getLengthSync == "function" && o.hasKnownLength && o.hasKnownLength() ? o.getLengthSync() : null;
}, "getTotalBytes"), Xs = n(async (i1, { body: o })=>{
    o === null ? i1.end() : await Zs(o, i1);
}, "writeToStream"), gr = typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__["default"].validateHeaderName == "function" ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__["default"].validateHeaderName : (i1)=>{
    if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i1)) {
        const o = new TypeError(`Header name must be a valid HTTP token [${i1}]`);
        throw Object.defineProperty(o, "code", {
            value: "ERR_INVALID_HTTP_TOKEN"
        }), o;
    }
}, jn = typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__["default"].validateHeaderValue == "function" ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__["default"].validateHeaderValue : (i1, o)=>{
    if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o)) {
        const a = new TypeError(`Invalid character in header content ["${i1}"]`);
        throw Object.defineProperty(a, "code", {
            value: "ERR_INVALID_CHAR"
        }), a;
    }
}, Pr = class Pr extends URLSearchParams {
    constructor(o){
        let a = [];
        if (o instanceof Pr) {
            const u = o.raw();
            for (const [l, p] of Object.entries(u))a.push(...p.map((h)=>[
                    l,
                    h
                ]));
        } else if (o != null) if (typeof o == "object" && !__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isBoxedPrimitive(o)) {
            const u = o[Symbol.iterator];
            if (u == null) a.push(...Object.entries(o));
            else {
                if (typeof u != "function") throw new TypeError("Header pairs must be iterable");
                a = [
                    ...o
                ].map((l)=>{
                    if (typeof l != "object" || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isBoxedPrimitive(l)) throw new TypeError("Each header pair must be an iterable object");
                    return [
                        ...l
                    ];
                }).map((l)=>{
                    if (l.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
                    return [
                        ...l
                    ];
                });
            }
        } else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        return a = a.length > 0 ? a.map(([u, l])=>(gr(u), jn(u, String(l)), [
                String(u).toLowerCase(),
                String(l)
            ])) : void 0, super(a), new Proxy(this, {
            get (u, l, p) {
                switch(l){
                    case "append":
                    case "set":
                        return (h, g)=>(gr(h), jn(h, String(g)), URLSearchParams.prototype[l].call(u, String(h).toLowerCase(), String(g)));
                    case "delete":
                    case "has":
                    case "getAll":
                        return (h)=>(gr(h), URLSearchParams.prototype[l].call(u, String(h).toLowerCase()));
                    case "keys":
                        return ()=>(u.sort(), new Set(URLSearchParams.prototype.keys.call(u)).keys());
                    default:
                        return Reflect.get(u, l, p);
                }
            }
        });
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    toString() {
        return Object.prototype.toString.call(this);
    }
    get(o) {
        const a = this.getAll(o);
        if (a.length === 0) return null;
        let u = a.join(", ");
        return /^content-encoding$/i.test(o) && (u = u.toLowerCase()), u;
    }
    forEach(o, a = void 0) {
        for (const u of this.keys())Reflect.apply(o, a, [
            this.get(u),
            u,
            this
        ]);
    }
    *values() {
        for (const o of this.keys())yield this.get(o);
    }
    *entries() {
        for (const o of this.keys())yield [
            o,
            this.get(o)
        ];
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    raw() {
        return [
            ...this.keys()
        ].reduce((o, a)=>(o[a] = this.getAll(a), o), {});
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return [
            ...this.keys()
        ].reduce((o, a)=>{
            const u = this.getAll(a);
            return a === "host" ? o[a] = u[0] : o[a] = u.length > 1 ? u : u[0], o;
        }, {});
    }
};
n(Pr, "Headers");
let ye = Pr;
Object.defineProperties(ye.prototype, [
    "get",
    "entries",
    "forEach",
    "values"
].reduce((i1, o)=>(i1[o] = {
        enumerable: !0
    }, i1), {}));
function el(i1 = []) {
    return new ye(i1.reduce((o, a, u, l)=>(u % 2 === 0 && o.push(l.slice(u, u + 2)), o), []).filter(([o, a])=>{
        try {
            return gr(o), jn(o, String(a)), !0;
        } catch  {
            return !1;
        }
    }));
}
n(el, "fromRawHeaders");
const tl = new Set([
    301,
    302,
    303,
    307,
    308
]), Ln = n((i1)=>tl.has(i1), "isRedirect"), se = Symbol("Response internals"), xe = class xe extends Ue {
    constructor(o = null, a = {}){
        super(o, a);
        const u = a.status != null ? a.status : 200, l = new ye(a.headers);
        if (o !== null && !l.has("Content-Type")) {
            const p = gi(o, this);
            p && l.append("Content-Type", p);
        }
        this[se] = {
            type: "default",
            url: a.url,
            status: u,
            statusText: a.statusText || "",
            headers: l,
            counter: a.counter,
            highWaterMark: a.highWaterMark
        };
    }
    get type() {
        return this[se].type;
    }
    get url() {
        return this[se].url || "";
    }
    get status() {
        return this[se].status;
    }
    get ok() {
        return this[se].status >= 200 && this[se].status < 300;
    }
    get redirected() {
        return this[se].counter > 0;
    }
    get statusText() {
        return this[se].statusText;
    }
    get headers() {
        return this[se].headers;
    }
    get highWaterMark() {
        return this[se].highWaterMark;
    }
    clone() {
        return new xe(Fn(this, this.highWaterMark), {
            type: this.type,
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected,
            size: this.size,
            highWaterMark: this.highWaterMark
        });
    }
    static redirect(o, a = 302) {
        if (!Ln(a)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        return new xe(null, {
            headers: {
                location: new URL(o).toString()
            },
            status: a
        });
    }
    static error() {
        const o = new xe(null, {
            status: 0,
            statusText: ""
        });
        return o[se].type = "error", o;
    }
    static json(o = void 0, a = {}) {
        const u = JSON.stringify(o);
        if (u === void 0) throw new TypeError("data is not JSON serializable");
        const l = new ye(a && a.headers);
        return l.has("content-type") || l.set("content-type", "application/json"), new xe(u, {
            ...a,
            headers: l
        });
    }
    get [Symbol.toStringTag]() {
        return "Response";
    }
};
n(xe, "Response");
let le = xe;
Object.defineProperties(le.prototype, {
    type: {
        enumerable: !0
    },
    url: {
        enumerable: !0
    },
    status: {
        enumerable: !0
    },
    ok: {
        enumerable: !0
    },
    redirected: {
        enumerable: !0
    },
    statusText: {
        enumerable: !0
    },
    headers: {
        enumerable: !0
    },
    clone: {
        enumerable: !0
    }
});
const rl = n((i1)=>{
    if (i1.search) return i1.search;
    const o = i1.href.length - 1, a = i1.hash || (i1.href[o] === "#" ? "#" : "");
    return i1.href[o - a.length] === "?" ? "?" : "";
}, "getSearch");
function _i(i1, o = !1) {
    return i1 == null || (i1 = new URL(i1), /^(about|blob|data):$/.test(i1.protocol)) ? "no-referrer" : (i1.username = "", i1.password = "", i1.hash = "", o && (i1.pathname = "", i1.search = ""), i1);
}
n(_i, "stripURLForUseAsAReferrer");
const Si = new Set([
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
]), nl = "strict-origin-when-cross-origin";
function ol(i1) {
    if (!Si.has(i1)) throw new TypeError(`Invalid referrerPolicy: ${i1}`);
    return i1;
}
n(ol, "validateReferrerPolicy");
function il(i1) {
    if (/^(http|ws)s:$/.test(i1.protocol)) return !0;
    const o = i1.host.replace(/(^\[)|(]$)/g, ""), a = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$net__$5b$external$5d$__$28$node$3a$net$2c$__cjs$29$__["isIP"])(o);
    return a === 4 && /^127\./.test(o) || a === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o) ? !0 : i1.host === "localhost" || i1.host.endsWith(".localhost") ? !1 : i1.protocol === "file:";
}
n(il, "isOriginPotentiallyTrustworthy");
function ct(i1) {
    return /^about:(blank|srcdoc)$/.test(i1) || i1.protocol === "data:" || /^(blob|filesystem):$/.test(i1.protocol) ? !0 : il(i1);
}
n(ct, "isUrlPotentiallyTrustworthy");
function al(i1, { referrerURLCallback: o, referrerOriginCallback: a } = {}) {
    if (i1.referrer === "no-referrer" || i1.referrerPolicy === "") return null;
    const u = i1.referrerPolicy;
    if (i1.referrer === "about:client") return "no-referrer";
    const l = i1.referrer;
    let p = _i(l), h = _i(l, !0);
    p.toString().length > 4096 && (p = h), o && (p = o(p)), a && (h = a(h));
    const g = new URL(i1.url);
    switch(u){
        case "no-referrer":
            return "no-referrer";
        case "origin":
            return h;
        case "unsafe-url":
            return p;
        case "strict-origin":
            return ct(p) && !ct(g) ? "no-referrer" : h.toString();
        case "strict-origin-when-cross-origin":
            return p.origin === g.origin ? p : ct(p) && !ct(g) ? "no-referrer" : h;
        case "same-origin":
            return p.origin === g.origin ? p : "no-referrer";
        case "origin-when-cross-origin":
            return p.origin === g.origin ? p : h;
        case "no-referrer-when-downgrade":
            return ct(p) && !ct(g) ? "no-referrer" : p;
        default:
            throw new TypeError(`Invalid referrerPolicy: ${u}`);
    }
}
n(al, "determineRequestsReferrer");
function sl(i1) {
    const o = (i1.get("referrer-policy") || "").split(/[,\s]+/);
    let a = "";
    for (const u of o)u && Si.has(u) && (a = u);
    return a;
}
n(sl, "parseReferrerPolicyFromHeader");
const $ = Symbol("Request internals"), At = n((i1)=>typeof i1 == "object" && typeof i1[$] == "object", "isRequest"), ll = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])(()=>{}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)"), vr = class vr extends Ue {
    constructor(o, a = {}){
        let u;
        if (At(o) ? u = new URL(o.url) : (u = new URL(o), o = {}), u.username !== "" || u.password !== "") throw new TypeError(`${u} is an url with embedded credentials.`);
        let l = a.method || o.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(l) && (l = l.toUpperCase()), !At(a) && "data" in a && ll(), (a.body != null || At(o) && o.body !== null) && (l === "GET" || l === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
        const p = a.body ? a.body : At(o) && o.body !== null ? Fn(o) : null;
        super(p, {
            size: a.size || o.size || 0
        });
        const h = new ye(a.headers || o.headers || {});
        if (p !== null && !h.has("Content-Type")) {
            const w = gi(p, this);
            w && h.set("Content-Type", w);
        }
        let g = At(o) ? o.signal : null;
        if ("signal" in a && (g = a.signal), g != null && !Qs(g)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        let A = a.referrer == null ? o.referrer : a.referrer;
        if (A === "") A = "no-referrer";
        else if (A) {
            const w = new URL(A);
            A = /^about:(\/\/)?client$/.test(w) ? "client" : w;
        } else A = void 0;
        this[$] = {
            method: l,
            redirect: a.redirect || o.redirect || "follow",
            headers: h,
            parsedURL: u,
            signal: g,
            referrer: A
        }, this.follow = a.follow === void 0 ? o.follow === void 0 ? 20 : o.follow : a.follow, this.compress = a.compress === void 0 ? o.compress === void 0 ? !0 : o.compress : a.compress, this.counter = a.counter || o.counter || 0, this.agent = a.agent || o.agent, this.highWaterMark = a.highWaterMark || o.highWaterMark || 16384, this.insecureHTTPParser = a.insecureHTTPParser || o.insecureHTTPParser || !1, this.referrerPolicy = a.referrerPolicy || o.referrerPolicy || "";
    }
    get method() {
        return this[$].method;
    }
    get url() {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["format"])(this[$].parsedURL);
    }
    get headers() {
        return this[$].headers;
    }
    get redirect() {
        return this[$].redirect;
    }
    get signal() {
        return this[$].signal;
    }
    get referrer() {
        if (this[$].referrer === "no-referrer") return "";
        if (this[$].referrer === "client") return "about:client";
        if (this[$].referrer) return this[$].referrer.toString();
    }
    get referrerPolicy() {
        return this[$].referrerPolicy;
    }
    set referrerPolicy(o) {
        this[$].referrerPolicy = ol(o);
    }
    clone() {
        return new vr(this);
    }
    get [Symbol.toStringTag]() {
        return "Request";
    }
};
n(vr, "Request");
let dt = vr;
Object.defineProperties(dt.prototype, {
    method: {
        enumerable: !0
    },
    url: {
        enumerable: !0
    },
    headers: {
        enumerable: !0
    },
    redirect: {
        enumerable: !0
    },
    clone: {
        enumerable: !0
    },
    signal: {
        enumerable: !0
    },
    referrer: {
        enumerable: !0
    },
    referrerPolicy: {
        enumerable: !0
    }
});
const ul = n((i1)=>{
    const { parsedURL: o } = i1[$], a = new ye(i1[$].headers);
    a.has("Accept") || a.set("Accept", "*/*");
    let u = null;
    if (i1.body === null && /^(post|put)$/i.test(i1.method) && (u = "0"), i1.body !== null) {
        const g = Js(i1);
        typeof g == "number" && !Number.isNaN(g) && (u = String(g));
    }
    u && a.set("Content-Length", u), i1.referrerPolicy === "" && (i1.referrerPolicy = nl), i1.referrer && i1.referrer !== "no-referrer" ? i1[$].referrer = al(i1) : i1[$].referrer = "no-referrer", i1[$].referrer instanceof URL && a.set("Referer", i1.referrer), a.has("User-Agent") || a.set("User-Agent", "node-fetch"), i1.compress && !a.has("Accept-Encoding") && a.set("Accept-Encoding", "gzip, deflate, br");
    let { agent: l } = i1;
    typeof l == "function" && (l = l(o));
    const p = rl(o), h = {
        path: o.pathname + p,
        method: i1.method,
        headers: a[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: i1.insecureHTTPParser,
        agent: l
    };
    return {
        parsedURL: o,
        options: h
    };
}, "getNodeRequestOptions"), Hn = class Hn extends ft {
    constructor(o, a = "aborted"){
        super(o, a);
    }
};
n(Hn, "AbortError");
let _r = Hn; /*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ 
if (!globalThis.DOMException) try {
    const { MessageChannel: i1 } = __turbopack_require__("[externals]/worker_threads [external] (worker_threads, cjs)"), o = new i1().port1, a = new ArrayBuffer;
    o.postMessage(a, [
        a,
        a
    ]);
} catch (i1) {
    i1.constructor.name === "DOMException" && (globalThis.DOMException = i1.constructor);
}
var fl = globalThis.DOMException;
const cl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$shared$2f$node$2d$fetch$2d$native$2e$1a4a356d$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"])(fl), { stat: $n } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"], dl = n((i1, o)=>wi((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["statSync"])(i1), i1, o), "blobFromSync"), hl = n((i1, o)=>$n(i1).then((a)=>wi(a, i1, o)), "blobFrom"), pl = n((i1, o)=>$n(i1).then((a)=>Ri(a, i1, o)), "fileFrom"), bl = n((i1, o)=>Ri((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["statSync"])(i1), i1, o), "fileFromSync"), wi = n((i1, o, a = "")=>new ut([
        new Sr({
            path: o,
            size: i1.size,
            lastModified: i1.mtimeMs,
            start: 0
        })
    ], {
        type: a
    }), "fromBlob"), Ri = n((i1, o, a = "")=>new On([
        new Sr({
            path: o,
            size: i1.size,
            lastModified: i1.mtimeMs,
            start: 0
        })
    ], (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["basename"])(o), {
        type: a,
        lastModified: i1.mtimeMs
    }), "fromFile"), Er = class Er {
    constructor(o){
        be(this, Ne, void 0);
        be(this, He, void 0);
        X(this, Ne, o.path), X(this, He, o.start), this.size = o.size, this.lastModified = o.lastModified;
    }
    slice(o, a) {
        return new Er({
            path: O(this, Ne),
            lastModified: this.lastModified,
            size: a - o,
            start: O(this, He) + o
        });
    }
    async *stream() {
        const { mtimeMs: o } = await $n(O(this, Ne));
        if (o > this.lastModified) throw new cl("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        yield* (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["createReadStream"])(O(this, Ne), {
            start: O(this, He),
            end: O(this, He) + this.size - 1
        });
    }
    get [Symbol.toStringTag]() {
        return "Blob";
    }
};
Ne = new WeakMap, He = new WeakMap, n(Er, "BlobDataItem");
let Sr = Er;
const ml = new Set([
    "data:",
    "http:",
    "https:"
]);
async function Ti(i1, o) {
    return new Promise((a, u)=>{
        const l = new dt(i1, o), { parsedURL: p, options: h } = ul(l);
        if (!ml.has(p.protocol)) throw new TypeError(`node-fetch cannot load ${i1}. URL scheme "${p.protocol.replace(/:$/, "")}" is not supported.`);
        if (p.protocol === "data:") {
            const _ = js(l.url), V = new le(_, {
                headers: {
                    "Content-Type": _.typeFull
                }
            });
            a(V);
            return;
        }
        const g = (p.protocol === "https:" ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__["default"] : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__["default"]).request, { signal: A } = l;
        let w = null;
        const E = n(()=>{
            const _ = new _r("The operation was aborted.");
            u(_), l.body && l.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"].Readable && l.body.destroy(_), !(!w || !w.body) && w.body.emit("error", _);
        }, "abort");
        if (A && A.aborted) {
            E();
            return;
        }
        const T = n(()=>{
            E(), q();
        }, "abortAndFinalize"), b = g(p.toString(), h);
        A && A.addEventListener("abort", T);
        const q = n(()=>{
            b.abort(), A && A.removeEventListener("abort", T);
        }, "finalize");
        b.on("error", (_)=>{
            u(new G(`request to ${l.url} failed, reason: ${_.message}`, "system", _)), q();
        }), yl(b, (_)=>{
            w && w.body && w.body.destroy(_);
        }), process.version < "v14" && b.on("socket", (_)=>{
            let V;
            _.prependListener("end", ()=>{
                V = _._eventsCount;
            }), _.prependListener("close", (I)=>{
                if (w && V < _._eventsCount && !I) {
                    const F = new Error("Premature close");
                    F.code = "ERR_STREAM_PREMATURE_CLOSE", w.body.emit("error", F);
                }
            });
        }), b.on("response", (_)=>{
            b.setTimeout(0);
            const V = el(_.rawHeaders);
            if (Ln(_.statusCode)) {
                const z = V.get("Location");
                let j = null;
                try {
                    j = z === null ? null : new URL(z, l.url);
                } catch  {
                    if (l.redirect !== "manual") {
                        u(new G(`uri requested responds with an invalid redirect URL: ${z}`, "invalid-redirect")), q();
                        return;
                    }
                }
                switch(l.redirect){
                    case "error":
                        u(new G(`uri requested responds with a redirect, redirect mode is set to error: ${l.url}`, "no-redirect")), q();
                        return;
                    case "manual":
                        break;
                    case "follow":
                        {
                            if (j === null) break;
                            if (l.counter >= l.follow) {
                                u(new G(`maximum redirect reached at: ${l.url}`, "max-redirect")), q();
                                return;
                            }
                            const U = {
                                headers: new ye(l.headers),
                                follow: l.follow,
                                counter: l.counter + 1,
                                agent: l.agent,
                                compress: l.compress,
                                method: l.method,
                                body: Fn(l),
                                signal: l.signal,
                                size: l.size,
                                referrer: l.referrer,
                                referrerPolicy: l.referrerPolicy
                            };
                            if (!Ys(l.url, j) || !Gs(l.url, j)) for (const Ft of [
                                "authorization",
                                "www-authenticate",
                                "cookie",
                                "cookie2"
                            ])U.headers.delete(Ft);
                            if (_.statusCode !== 303 && l.body && o.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["default"].Readable) {
                                u(new G("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
                                return;
                            }
                            (_.statusCode === 303 || (_.statusCode === 301 || _.statusCode === 302) && l.method === "POST") && (U.method = "GET", U.body = void 0, U.headers.delete("content-length"));
                            const D = sl(V);
                            D && (U.referrerPolicy = D), a(Ti(new dt(j, U))), q();
                            return;
                        }
                    default:
                        return u(new TypeError(`Redirect option '${l.redirect}' is not a valid value of RequestRedirect`));
                }
            }
            A && _.once("end", ()=>{
                A.removeEventListener("abort", T);
            });
            let I = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["pipeline"])(_, new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["PassThrough"], (z)=>{
                z && u(z);
            });
            process.version < "v12.10" && _.on("aborted", T);
            const F = {
                url: l.url,
                status: _.statusCode,
                statusText: _.statusMessage,
                headers: V,
                size: l.size,
                counter: l.counter,
                highWaterMark: l.highWaterMark
            }, Q = V.get("Content-Encoding");
            if (!l.compress || l.method === "HEAD" || Q === null || _.statusCode === 204 || _.statusCode === 304) {
                w = new le(I, F), a(w);
                return;
            }
            const ge = {
                flush: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH,
                finishFlush: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH
            };
            if (Q === "gzip" || Q === "x-gzip") {
                I = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["pipeline"])(I, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__["default"].createGunzip(ge), (z)=>{
                    z && u(z);
                }), w = new le(I, F), a(w);
                return;
            }
            if (Q === "deflate" || Q === "x-deflate") {
                const z = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["pipeline"])(_, new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["PassThrough"], (j)=>{
                    j && u(j);
                });
                z.once("data", (j)=>{
                    (j[0] & 15) === 8 ? I = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["pipeline"])(I, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__["default"].createInflate(), (U)=>{
                        U && u(U);
                    }) : I = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["pipeline"])(I, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__["default"].createInflateRaw(), (U)=>{
                        U && u(U);
                    }), w = new le(I, F), a(w);
                }), z.once("end", ()=>{
                    w || (w = new le(I, F), a(w));
                });
                return;
            }
            if (Q === "br") {
                I = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["pipeline"])(I, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__["default"].createBrotliDecompress(), (z)=>{
                    z && u(z);
                }), w = new le(I, F), a(w);
                return;
            }
            w = new le(I, F), a(w);
        }), Xs(b, l).catch(u);
    });
}
n(Ti, "fetch$1");
function yl(i1, o) {
    const a = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(`0\r
\r
`);
    let u = !1, l = !1, p;
    i1.on("response", (h)=>{
        const { headers: g } = h;
        u = g["transfer-encoding"] === "chunked" && !g["content-length"];
    }), i1.on("socket", (h)=>{
        const g = n(()=>{
            if (u && !l) {
                const w = new Error("Premature close");
                w.code = "ERR_STREAM_PREMATURE_CLOSE", o(w);
            }
        }, "onSocketClose"), A = n((w)=>{
            l = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].compare(w.slice(-5), a) === 0, !l && p && (l = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].compare(p.slice(-3), a.slice(0, 3)) === 0 && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].compare(w.slice(-2), a.slice(3)) === 0), p = w;
        }, "onData");
        h.prependListener("close", g), h.on("data", A), i1.on("close", ()=>{
            h.removeListener("close", g), h.removeListener("data", A);
        });
    });
}
n(yl, "fixResponseChunkedTransferBadEnding");
const Ci = new WeakMap, Dn = new WeakMap;
function W(i1) {
    const o = Ci.get(i1);
    return console.assert(o != null, "'this' is expected an Event object, but got", i1), o;
}
n(W, "pd");
function Pi(i1) {
    if (i1.passiveListener != null) {
        typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i1.passiveListener);
        return;
    }
    i1.event.cancelable && (i1.canceled = !0, typeof i1.event.preventDefault == "function" && i1.event.preventDefault());
}
n(Pi, "setCancelFlag");
function ht(i1, o) {
    Ci.set(this, {
        eventTarget: i1,
        event: o,
        eventPhase: 2,
        currentTarget: i1,
        canceled: !1,
        stopped: !1,
        immediateStopped: !1,
        passiveListener: null,
        timeStamp: o.timeStamp || Date.now()
    }), Object.defineProperty(this, "isTrusted", {
        value: !1,
        enumerable: !0
    });
    const a = Object.keys(o);
    for(let u = 0; u < a.length; ++u){
        const l = a[u];
        l in this || Object.defineProperty(this, l, vi(l));
    }
}
n(ht, "Event"), ht.prototype = {
    get type () {
        return W(this).event.type;
    },
    get target () {
        return W(this).eventTarget;
    },
    get currentTarget () {
        return W(this).currentTarget;
    },
    composedPath () {
        const i1 = W(this).currentTarget;
        return i1 == null ? [] : [
            i1
        ];
    },
    get NONE () {
        return 0;
    },
    get CAPTURING_PHASE () {
        return 1;
    },
    get AT_TARGET () {
        return 2;
    },
    get BUBBLING_PHASE () {
        return 3;
    },
    get eventPhase () {
        return W(this).eventPhase;
    },
    stopPropagation () {
        const i1 = W(this);
        i1.stopped = !0, typeof i1.event.stopPropagation == "function" && i1.event.stopPropagation();
    },
    stopImmediatePropagation () {
        const i1 = W(this);
        i1.stopped = !0, i1.immediateStopped = !0, typeof i1.event.stopImmediatePropagation == "function" && i1.event.stopImmediatePropagation();
    },
    get bubbles () {
        return !!W(this).event.bubbles;
    },
    get cancelable () {
        return !!W(this).event.cancelable;
    },
    preventDefault () {
        Pi(W(this));
    },
    get defaultPrevented () {
        return W(this).canceled;
    },
    get composed () {
        return !!W(this).event.composed;
    },
    get timeStamp () {
        return W(this).timeStamp;
    },
    get srcElement () {
        return W(this).eventTarget;
    },
    get cancelBubble () {
        return W(this).stopped;
    },
    set cancelBubble (i){
        if (!i) return;
        const o = W(this);
        o.stopped = !0, typeof o.event.cancelBubble == "boolean" && (o.event.cancelBubble = !0);
    },
    get returnValue () {
        return !W(this).canceled;
    },
    set returnValue (i){
        i || Pi(W(this));
    },
    initEvent () {}
}, Object.defineProperty(ht.prototype, "constructor", {
    value: ht,
    configurable: !0,
    writable: !0
}), "undefined" < "u" && typeof window.Event < "u" && (Object.setPrototypeOf(ht.prototype, window.Event.prototype), Dn.set(window.Event.prototype, ht));
function vi(i1) {
    return {
        get () {
            return W(this).event[i1];
        },
        set (o) {
            W(this).event[i1] = o;
        },
        configurable: !0,
        enumerable: !0
    };
}
n(vi, "defineRedirectDescriptor");
function gl(i1) {
    return {
        value () {
            const o = W(this).event;
            return o[i1].apply(o, arguments);
        },
        configurable: !0,
        enumerable: !0
    };
}
n(gl, "defineCallDescriptor");
function _l(i1, o) {
    const a = Object.keys(o);
    if (a.length === 0) return i1;
    function u(l, p) {
        i1.call(this, l, p);
    }
    n(u, "CustomEvent"), u.prototype = Object.create(i1.prototype, {
        constructor: {
            value: u,
            configurable: !0,
            writable: !0
        }
    });
    for(let l = 0; l < a.length; ++l){
        const p = a[l];
        if (!(p in i1.prototype)) {
            const g = typeof Object.getOwnPropertyDescriptor(o, p).value == "function";
            Object.defineProperty(u.prototype, p, g ? gl(p) : vi(p));
        }
    }
    return u;
}
n(_l, "defineWrapper");
function Ei(i1) {
    if (i1 == null || i1 === Object.prototype) return ht;
    let o = Dn.get(i1);
    return o == null && (o = _l(Ei(Object.getPrototypeOf(i1)), i1), Dn.set(i1, o)), o;
}
n(Ei, "getWrapper");
function Sl(i1, o) {
    const a = Ei(Object.getPrototypeOf(o));
    return new a(i1, o);
}
n(Sl, "wrapEvent");
function wl(i1) {
    return W(i1).immediateStopped;
}
n(wl, "isStopped");
function Rl(i1, o) {
    W(i1).eventPhase = o;
}
n(Rl, "setEventPhase");
function Tl(i1, o) {
    W(i1).currentTarget = o;
}
n(Tl, "setCurrentTarget");
function Ai(i1, o) {
    W(i1).passiveListener = o;
}
n(Ai, "setPassiveListener");
const Bi = new WeakMap, ki = 1, Wi = 2, wr = 3;
function Rr(i1) {
    return i1 !== null && typeof i1 == "object";
}
n(Rr, "isObject");
function Bt(i1) {
    const o = Bi.get(i1);
    if (o == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
    return o;
}
n(Bt, "getListeners");
function Cl(i1) {
    return {
        get () {
            let a = Bt(this).get(i1);
            for(; a != null;){
                if (a.listenerType === wr) return a.listener;
                a = a.next;
            }
            return null;
        },
        set (o) {
            typeof o != "function" && !Rr(o) && (o = null);
            const a = Bt(this);
            let u = null, l = a.get(i1);
            for(; l != null;)l.listenerType === wr ? u !== null ? u.next = l.next : l.next !== null ? a.set(i1, l.next) : a.delete(i1) : u = l, l = l.next;
            if (o !== null) {
                const p = {
                    listener: o,
                    listenerType: wr,
                    passive: !1,
                    once: !1,
                    next: null
                };
                u === null ? a.set(i1, p) : u.next = p;
            }
        },
        configurable: !0,
        enumerable: !0
    };
}
n(Cl, "defineEventAttributeDescriptor");
function qi(i1, o) {
    Object.defineProperty(i1, `on${o}`, Cl(o));
}
n(qi, "defineEventAttribute");
function Oi(i1) {
    function o() {
        Pe.call(this);
    }
    n(o, "CustomEventTarget"), o.prototype = Object.create(Pe.prototype, {
        constructor: {
            value: o,
            configurable: !0,
            writable: !0
        }
    });
    for(let a = 0; a < i1.length; ++a)qi(o.prototype, i1[a]);
    return o;
}
n(Oi, "defineCustomEventTarget");
function Pe() {
    if (this instanceof Pe) {
        Bi.set(this, new Map);
        return;
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) return Oi(arguments[0]);
    if (arguments.length > 0) {
        const i1 = new Array(arguments.length);
        for(let o = 0; o < arguments.length; ++o)i1[o] = arguments[o];
        return Oi(i1);
    }
    throw new TypeError("Cannot call a class as a function");
}
n(Pe, "EventTarget"), Pe.prototype = {
    addEventListener (i1, o, a) {
        if (o == null) return;
        if (typeof o != "function" && !Rr(o)) throw new TypeError("'listener' should be a function or an object.");
        const u = Bt(this), l = Rr(a), h = (l ? !!a.capture : !!a) ? ki : Wi, g = {
            listener: o,
            listenerType: h,
            passive: l && !!a.passive,
            once: l && !!a.once,
            next: null
        };
        let A = u.get(i1);
        if (A === void 0) {
            u.set(i1, g);
            return;
        }
        let w = null;
        for(; A != null;){
            if (A.listener === o && A.listenerType === h) return;
            w = A, A = A.next;
        }
        w.next = g;
    },
    removeEventListener (i1, o, a) {
        if (o == null) return;
        const u = Bt(this), p = (Rr(a) ? !!a.capture : !!a) ? ki : Wi;
        let h = null, g = u.get(i1);
        for(; g != null;){
            if (g.listener === o && g.listenerType === p) {
                h !== null ? h.next = g.next : g.next !== null ? u.set(i1, g.next) : u.delete(i1);
                return;
            }
            h = g, g = g.next;
        }
    },
    dispatchEvent (i1) {
        if (i1 == null || typeof i1.type != "string") throw new TypeError('"event.type" should be a string.');
        const o = Bt(this), a = i1.type;
        let u = o.get(a);
        if (u == null) return !0;
        const l = Sl(this, i1);
        let p = null;
        for(; u != null;){
            if (u.once ? p !== null ? p.next = u.next : u.next !== null ? o.set(a, u.next) : o.delete(a) : p = u, Ai(l, u.passive ? u.listener : null), typeof u.listener == "function") try {
                u.listener.call(this, l);
            } catch (h) {
                typeof console < "u" && typeof console.error == "function" && console.error(h);
            }
            else u.listenerType !== wr && typeof u.listener.handleEvent == "function" && u.listener.handleEvent(l);
            if (wl(l)) break;
            u = u.next;
        }
        return Ai(l, null), Rl(l, 0), Tl(l, null), !l.defaultPrevented;
    }
}, Object.defineProperty(Pe.prototype, "constructor", {
    value: Pe,
    configurable: !0,
    writable: !0
}), "undefined" < "u" && typeof window.EventTarget < "u" && Object.setPrototypeOf(Pe.prototype, window.EventTarget.prototype);
const Vn = class Vn extends Pe {
    constructor(){
        throw super(), new TypeError("AbortSignal cannot be constructed directly");
    }
    get aborted() {
        const o = Tr.get(this);
        if (typeof o != "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        return o;
    }
};
n(Vn, "AbortSignal");
let pt = Vn;
qi(pt.prototype, "abort");
function Pl() {
    const i1 = Object.create(pt.prototype);
    return Pe.call(i1), Tr.set(i1, !1), i1;
}
n(Pl, "createAbortSignal");
function vl(i1) {
    Tr.get(i1) === !1 && (Tr.set(i1, !0), i1.dispatchEvent({
        type: "abort"
    }));
}
n(vl, "abortSignal");
const Tr = new WeakMap;
Object.defineProperties(pt.prototype, {
    aborted: {
        enumerable: !0
    }
}), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pt.prototype, Symbol.toStringTag, {
    configurable: !0,
    value: "AbortSignal"
});
let Mn = (It = class {
    constructor(){
        zi.set(this, Pl());
    }
    get signal() {
        return Ii(this);
    }
    abort() {
        vl(Ii(this));
    }
}, n(It, "AbortController"), It);
const zi = new WeakMap;
function Ii(i1) {
    const o = zi.get(i1);
    if (o == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i1 === null ? "null" : typeof i1}`);
    return o;
}
n(Ii, "getSignal"), Object.defineProperties(Mn.prototype, {
    signal: {
        enumerable: !0
    },
    abort: {
        enumerable: !0
    }
}), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mn.prototype, Symbol.toStringTag, {
    configurable: !0,
    value: "AbortController"
});
var El = Object.defineProperty, Al = n((i1, o)=>El(i1, "name", {
        value: o,
        configurable: !0
    }), "e");
const Fi = Ti;
ji();
function ji() {
    !globalThis.process?.versions?.node && !globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n(ji, "s"), Al(ji, "checkNodeEnvironment");
;
}}),
"[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/index.mjs [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AbortController": (()=>A),
    "Blob": (()=>T),
    "File": (()=>R),
    "FormData": (()=>u),
    "Headers": (()=>d),
    "Request": (()=>$),
    "Response": (()=>C),
    "default": (()=>s),
    "fetch": (()=>s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/node.mjs [app-rsc] (ecmascript)");
var a = Object.defineProperty;
var t = (e, r)=>a(e, "name", {
        value: r,
        configurable: !0
    });
;
;
;
;
;
;
;
;
;
;
;
;
;
var f = Object.defineProperty, g = t((e, r)=>f(e, "name", {
        value: r,
        configurable: !0
    }), "e");
const o = !!globalThis.process?.env?.FORCE_NODE_FETCH;
function l() {
    return !o && globalThis.fetch ? globalThis.fetch : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetch"];
}
t(l, "p"), g(l, "_getFetch");
const s = l(), T = !o && globalThis.Blob || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Blob"], R = !o && globalThis.File || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["File"], u = !o && globalThis.FormData || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormData"], d = !o && globalThis.Headers || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Headers"], $ = !o && globalThis.Request || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Request"], C = !o && globalThis.Response || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Response"], A = !o && globalThis.AbortController || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbortController"];
;
}}),
"[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/node.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$http__$5b$external$5d$__$28$node$3a$http$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:http [external] (node:http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$https__$5b$external$5d$__$28$node$3a$https$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:https [external] (node:https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$zlib__$5b$external$5d$__$28$node$3a$zlib$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:zlib [external] (node:zlib, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$shared$2f$node$2d$fetch$2d$native$2e$1a4a356d$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/shared/node-fetch-native.1a4a356d.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$net__$5b$external$5d$__$28$node$3a$net$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:net [external] (node:net, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$node$2d$fetch$2d$native$40$1$2e$6$2e$4$2f$node_modules$2f$node$2d$fetch$2d$native$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/node-fetch-native@1.6.4/node_modules/node-fetch-native/dist/index.mjs [app-rsc] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=214a1_node-fetch-native_dist_f4eebd._.js.map