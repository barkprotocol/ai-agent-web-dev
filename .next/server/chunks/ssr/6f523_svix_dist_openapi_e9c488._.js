module.exports = {

"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/rxjsStub.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.map = exports.mergeMap = exports.of = exports.from = exports.Observable = void 0;
class Observable {
    constructor(promise){
        this.promise = promise;
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new Observable(this.promise.then(callback));
    }
}
exports.Observable = Observable;
function from(promise) {
    return new Observable(promise);
}
exports.from = from;
function of(value) {
    return new Observable(Promise.resolve(value));
}
exports.of = of;
function mergeMap(callback) {
    return (value)=>callback(value).toPromise();
}
exports.mergeMap = mergeMap;
function map(callback) {
    return callback;
}
exports.map = map; //# sourceMappingURL=rxjsStub.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/isomorphic-fetch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IsomorphicFetchHttpLibrary = void 0;
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const rxjsStub_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/rxjsStub.js [app-rsc] (ecmascript)");
__turbopack_require__("[project]/node_modules/.pnpm/svix-fetch@3.0.0_encoding@0.1.13/node_modules/svix-fetch/fetch-npm-node.js [app-rsc] (ecmascript)");
const numRetries = 2;
const sleep = (interval)=>new Promise((resolve)=>setTimeout(resolve, interval));
class IsomorphicFetchHttpLibrary {
    send(request) {
        const resultPromise = this.sendWithRetry(request, numRetries, 50, 1);
        return (0, rxjsStub_1.from)(resultPromise);
    }
    sendWithRetry(request, triesLeft, nextInterval, retryCount) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const response = yield this.sendOnce(request);
                if (triesLeft <= 0 || response.httpStatusCode < 500) {
                    return response;
                }
            } catch (e) {
                if (triesLeft <= 0) {
                    throw e;
                }
            }
            ;
            yield sleep(nextInterval);
            const headers = request.getHeaders();
            headers['svix-retry-count'] = retryCount.toString();
            return yield this.sendWithRetry(request, --triesLeft, nextInterval * 2, ++retryCount);
        });
    }
    sendOnce(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const isCredentialsSupported = "credentials" in Request.prototype;
        return fetch(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
            credentials: isCredentialsSupported ? "same-origin" : undefined
        }).then((resp)=>{
            const headers = {};
            resp.headers.forEach((value, name)=>{
                headers[name] = value;
            });
            const body = {
                text: ()=>resp.text(),
                binary: ()=>resp.blob()
            };
            return new http_1.ResponseContext(resp.status, headers, body);
        });
    }
}
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary; //# sourceMappingURL=isomorphic-fetch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpInfo = exports.wrapHttpLibrary = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
const rxjsStub_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/rxjsStub.js [app-rsc] (ecmascript)");
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/isomorphic-fetch.js [app-rsc] (ecmascript)"), exports);
var HttpMethod;
(function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class HttpException extends Error {
    constructor(msg){
        super(msg);
    }
}
exports.HttpException = HttpException;
function ensureAbsoluteUrl(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    throw new Error("You need to define an absolute base url for the server.");
}
class RequestContext {
    constructor(url, httpMethod){
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.url = new URL(ensureAbsoluteUrl(url));
    }
    getUrl() {
        return this.url.toString().endsWith("/") ? this.url.toString().slice(0, -1) : this.url.toString();
    }
    setUrl(url) {
        this.url = new URL(ensureAbsoluteUrl(url));
    }
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        this.url.searchParams.set(name, value);
    }
    appendQueryParam(name, value) {
        this.url.searchParams.append(name, value);
    }
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
}
exports.RequestContext = RequestContext;
class SelfDecodingBody {
    constructor(dataSource){
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    text() {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.dataSource;
            if (data.text) {
                return data.text();
            }
            return new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.addEventListener("load", ()=>resolve(reader.result));
                reader.addEventListener("error", ()=>reject(reader.error));
                reader.readAsText(data);
            });
        });
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    constructor(httpStatusCode, headers, body){
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters){
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            } else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    getBodyAsFile() {
        return __awaiter(this, void 0, void 0, function*() {
            const data = yield this.body.binary();
            const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
            const contentType = this.headers["content-type"] || "";
            try {
                return new File([
                    data
                ], fileName, {
                    type: contentType
                });
            } catch (error) {
                return Object.assign(data, {
                    name: fileName,
                    type: contentType
                });
            }
        });
    }
    getBodyAsAny() {
        try {
            return this.body.text();
        } catch (_a) {}
        try {
            return this.body.binary();
        } catch (_b) {}
        return Promise.resolve(undefined);
    }
}
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send (request) {
            return (0, rxjsStub_1.from)(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
class HttpInfo extends ResponseContext {
    constructor(httpStatusCode, headers, body, data){
        super(httpStatusCode, headers, body);
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
        this.data = data;
    }
}
exports.HttpInfo = HttpInfo; //# sourceMappingURL=http.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/auth/auth.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureAuthMethods = exports.HTTPBearerAuthentication = void 0;
class HTTPBearerAuthentication {
    constructor(tokenProvider){
        this.tokenProvider = tokenProvider;
    }
    getName() {
        return "HTTPBearer";
    }
    applySecurityAuthentication(context) {
        return __awaiter(this, void 0, void 0, function*() {
            context.setHeaderParam("Authorization", "Bearer " + (yield this.tokenProvider.getToken()));
        });
    }
}
exports.HTTPBearerAuthentication = HTTPBearerAuthentication;
function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["HTTPBearer"]) {
        authMethods["HTTPBearer"] = new HTTPBearerAuthentication(config["HTTPBearer"]["tokenProvider"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods; //# sourceMappingURL=auth.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/middleware.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PromiseMiddlewareWrapper = void 0;
const rxjsStub_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/rxjsStub.js [app-rsc] (ecmascript)");
class PromiseMiddlewareWrapper {
    constructor(middleware){
        this.middleware = middleware;
    }
    pre(context) {
        return (0, rxjsStub_1.from)(this.middleware.pre(context));
    }
    post(context) {
        return (0, rxjsStub_1.from)(this.middleware.post(context));
    }
}
exports.PromiseMiddlewareWrapper = PromiseMiddlewareWrapper; //# sourceMappingURL=middleware.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/servers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.servers = exports.server2 = exports.server1 = exports.ServerConfiguration = void 0;
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
class ServerConfiguration {
    constructor(url, variableConfiguration){
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    getUrl() {
        let replacedUrl = this.url;
        for(const key in this.variableConfiguration){
            var re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    }
    makeRequestContext(endpoint, httpMethod) {
        return new http_1.RequestContext(this.getUrl() + endpoint, httpMethod);
    }
}
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration("https://api.eu.svix.com", {});
exports.server2 = new ServerConfiguration("https://api.us.svix.com", {});
exports.servers = [
    exports.server1,
    exports.server2
]; //# sourceMappingURL=servers.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/configuration.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConfiguration = void 0;
const middleware_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/middleware.js [app-rsc] (ecmascript)");
const isomorphic_fetch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/isomorphic-fetch.js [app-rsc] (ecmascript)");
const servers_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/servers.js [app-rsc] (ecmascript)");
const auth_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/auth/auth.js [app-rsc] (ecmascript)");
function createConfiguration(conf = {}) {
    const configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : servers_1.server1,
        httpApi: conf.httpApi || new isomorphic_fetch_1.IsomorphicFetchHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: (0, auth_1.configureAuthMethods)(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach((m)=>configuration.middleware.push(new middleware_1.PromiseMiddlewareWrapper(m)));
    }
    return configuration;
}
exports.createConfiguration = createConfiguration; //# sourceMappingURL=configuration.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canConsumeForm = exports.isCodeInRange = void 0;
function isCodeInRange(codeRange, code) {
    if (codeRange === "0") {
        return true;
    }
    if (codeRange == code.toString()) {
        return true;
    } else {
        const codeString = code.toString();
        if (codeString.length != codeRange.length) {
            return false;
        }
        for(let i = 0; i < codeString.length; i++){
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}
exports.isCodeInRange = isCodeInRange;
function canConsumeForm(contentTypes) {
    return contentTypes.indexOf('multipart/form-data') !== -1;
}
exports.canConsumeForm = canConsumeForm; //# sourceMappingURL=util.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebhookEndpointApi = exports.TransformationTemplateApi = exports.StreamEventTypesApi = exports.StreamApi = exports.StatisticsApi = exports.MessageAttemptApi = exports.MessageApi = exports.IntegrationApi = exports.InboundApi = exports.HealthApi = exports.EventsApi = exports.EventTypeApi = exports.EnvironmentSettingsApi = exports.EnvironmentApi = exports.EndpointApi = exports.BroadcastApi = exports.BackgroundTasksApi = exports.AuthenticationApi = exports.ApplicationApi = exports.RequiredError = exports.createConfiguration = void 0;
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/auth/auth.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/all.js [app-rsc] (ecmascript)"), exports);
var configuration_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/configuration.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "createConfiguration", {
    enumerable: true,
    get: function() {
        return configuration_1.createConfiguration;
    }
});
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/servers.js [app-rsc] (ecmascript)"), exports);
var baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "RequiredError", {
    enumerable: true,
    get: function() {
        return baseapi_1.RequiredError;
    }
});
var ObjectParamAPI_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObjectParamAPI.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "ApplicationApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectApplicationApi;
    }
});
Object.defineProperty(exports, "AuthenticationApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectAuthenticationApi;
    }
});
Object.defineProperty(exports, "BackgroundTasksApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectBackgroundTasksApi;
    }
});
Object.defineProperty(exports, "BroadcastApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectBroadcastApi;
    }
});
Object.defineProperty(exports, "EndpointApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectEndpointApi;
    }
});
Object.defineProperty(exports, "EnvironmentApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectEnvironmentApi;
    }
});
Object.defineProperty(exports, "EnvironmentSettingsApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectEnvironmentSettingsApi;
    }
});
Object.defineProperty(exports, "EventTypeApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectEventTypeApi;
    }
});
Object.defineProperty(exports, "EventsApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectEventsApi;
    }
});
Object.defineProperty(exports, "HealthApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectHealthApi;
    }
});
Object.defineProperty(exports, "InboundApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectInboundApi;
    }
});
Object.defineProperty(exports, "IntegrationApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectIntegrationApi;
    }
});
Object.defineProperty(exports, "MessageApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectMessageApi;
    }
});
Object.defineProperty(exports, "MessageAttemptApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectMessageAttemptApi;
    }
});
Object.defineProperty(exports, "StatisticsApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectStatisticsApi;
    }
});
Object.defineProperty(exports, "StreamApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectStreamApi;
    }
});
Object.defineProperty(exports, "StreamEventTypesApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectStreamEventTypesApi;
    }
});
Object.defineProperty(exports, "TransformationTemplateApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectTransformationTemplateApi;
    }
});
Object.defineProperty(exports, "WebhookEndpointApi", {
    enumerable: true,
    get: function() {
        return ObjectParamAPI_1.ObjectWebhookEndpointApi;
    }
}); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=6f523_svix_dist_openapi_e9c488._.js.map