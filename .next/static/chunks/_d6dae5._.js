(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d6dae5._.js", {

"[project]/components/wallet-context-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WalletContextProvider": (()=>WalletContextProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.5_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.5_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$base$40$0$2e$9$2e$23_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-base@0.9.23_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$phantom$40$0$2e$9$2e$24_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$phantom$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-phantom@0.9.24_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-phantom/lib/esm/adapter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$solflare$40$0$2e$6$2e$28_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$solflare$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-solflare@0.6.28_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-solflare/lib/esm/adapter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$torus$40$0$2e$11$2e$28_$40$babel$2b$runtime$40$7$2e$26$2e$0_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$_eapvr76vmu7tyaw4zyrrsrvhou$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$torus$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-torus@0.11.28_@babel+runtime@7.26.0_@solana+web3.js@1.98.0_bufferutil@_eapvr76vmu7tyaw4zyrrsrvhou/node_modules/@solana/wallet-adapter-torus/lib/esm/adapter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$ledger$40$0$2e$9$2e$25_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$ledger$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-ledger@0.9.25_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-ledger/lib/esm/adapter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$react$40$0$2e$15$2e$35_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_$5f$cqeyeqyjqlx3ahuez7dpfwycgi$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$ConnectionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-react@0.15.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13__cqeyeqyjqlx3ahuez7dpfwycgi/node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$react$40$0$2e$15$2e$35_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_$5f$cqeyeqyjqlx3ahuez7dpfwycgi$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$WalletProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-react@0.15.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13__cqeyeqyjqlx3ahuez7dpfwycgi/node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$react$2d$ui$40$0$2e$9$2e$35_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$1_ef3j6izntvoyculyc3wvl4y4fu$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletModalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@solana+wallet-adapter-react-ui@0.9.35_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.1_ef3j6izntvoyculyc3wvl4y4fu/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletModalProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
function WalletContextProvider({ children }) {
    _s();
    // You can change this to 'devnet', 'testnet', or 'mainnet-beta' based on your needs
    const network = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$base$40$0$2e$9$2e$23_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$base$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletAdapterNetwork"].Mainnet;
    // You can also provide a custom RPC endpoint
    const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WalletContextProvider.useMemo[endpoint]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clusterApiUrl"])(network)
    }["WalletContextProvider.useMemo[endpoint]"], [
        network
    ]);
    const wallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WalletContextProvider.useMemo[wallets]": ()=>[
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$phantom$40$0$2e$9$2e$24_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$phantom$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhantomWalletAdapter"](),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$solflare$40$0$2e$6$2e$28_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$solflare$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolflareWalletAdapter"](),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$torus$40$0$2e$11$2e$28_$40$babel$2b$runtime$40$7$2e$26$2e$0_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$_eapvr76vmu7tyaw4zyrrsrvhou$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$torus$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusWalletAdapter"](),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$ledger$40$0$2e$9$2e$25_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$ledger$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LedgerWalletAdapter"]()
            ]
    }["WalletContextProvider.useMemo[wallets]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$react$40$0$2e$15$2e$35_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_$5f$cqeyeqyjqlx3ahuez7dpfwycgi$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$ConnectionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionProvider"], {
        endpoint: endpoint,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$react$40$0$2e$15$2e$35_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_$5f$cqeyeqyjqlx3ahuez7dpfwycgi$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$WalletProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletProvider"], {
            wallets: wallets,
            autoConnect: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_$40$babel$2b$core$40$7$2e$26$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$adapter$2d$react$2d$ui$40$0$2e$9$2e$35_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$1_ef3j6izntvoyculyc3wvl4y4fu$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletModalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletModalProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/wallet-context-provider.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/wallet-context-provider.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/wallet-context-provider.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(WalletContextProvider, "RNaTq20PjYTGasfEtgZ8qKkPMD0=");
_c = WalletContextProvider;
var _c;
__turbopack_refresh__.register(_c, "WalletContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_d6dae5._.js.map