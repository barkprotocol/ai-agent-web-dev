module.exports = {

"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(code, message, body, headers){
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " + JSON.stringify(headers));
        this.code = code;
        this.body = body;
        this.headers = headers;
    }
}
exports.ApiException = ApiException; //# sourceMappingURL=exception.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequiredError = exports.BaseAPIRequestFactory = exports.COLLECTION_FORMATS = void 0;
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
class BaseAPIRequestFactory {
    constructor(configuration){
        this.configuration = configuration;
    }
}
exports.BaseAPIRequestFactory = BaseAPIRequestFactory;
;
class RequiredError extends Error {
    constructor(api, method, field){
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".");
        this.api = api;
        this.method = method;
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError; //# sourceMappingURL=baseapi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/ApplicationApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.ApplicationApiResponseProcessor = exports.ApplicationApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class ApplicationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getAppUsageStatsApiV1AppStatsUsageGet(since, until, limit, iterator, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (since === null || since === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "getAppUsageStatsApiV1AppStatsUsageGet", "since");
            }
            if (until === null || until === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "getAppUsageStatsApiV1AppStatsUsageGet", "until");
            }
            const localVarPath = '/api/v1/app/stats/usage';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (since !== undefined) {
                requestContext.setQueryParam("since", ObjectSerializer_1.ObjectSerializer.serialize(since, "Date", "date-time"));
            }
            if (until !== undefined) {
                requestContext.setQueryParam("until", ObjectSerializer_1.ObjectSerializer.serialize(until, "Date", "date-time"));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationCreate(applicationIn, getIfExists, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (applicationIn === null || applicationIn === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationCreate", "applicationIn");
            }
            const localVarPath = '/api/v1/app';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (getIfExists !== undefined) {
                requestContext.setQueryParam("get_if_exists", ObjectSerializer_1.ObjectSerializer.serialize(getIfExists, "boolean", ""));
            }
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(applicationIn, "ApplicationIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationDelete(appId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationDelete", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationGet(appId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationGet", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationGetStats(since, until, appId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (since === null || since === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationGetStats", "since");
            }
            if (until === null || until === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationGetStats", "until");
            }
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationGetStats", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/stats'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (since !== undefined) {
                requestContext.setQueryParam("since", ObjectSerializer_1.ObjectSerializer.serialize(since, "Date", "date-time"));
            }
            if (until !== undefined) {
                requestContext.setQueryParam("until", ObjectSerializer_1.ObjectSerializer.serialize(until, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationList(limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/app';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationPatch(appId, applicationPatch, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationPatch", "appId");
            }
            if (applicationPatch === null || applicationPatch === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationPatch", "applicationPatch");
            }
            const localVarPath = '/api/v1/app/{app_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(applicationPatch, "ApplicationPatch", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1ApplicationUpdate(appId, applicationIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationUpdate", "appId");
            }
            if (applicationIn === null || applicationIn === undefined) {
                throw new baseapi_1.RequiredError("ApplicationApi", "v1ApplicationUpdate", "applicationIn");
            }
            const localVarPath = '/api/v1/app/{app_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(applicationIn, "ApplicationIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.ApplicationApiRequestFactory = ApplicationApiRequestFactory;
class ApplicationApiResponseProcessor {
    getAppUsageStatsApiV1AppStatsUsageGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseApplicationStats", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseApplicationStats", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationGetStatsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationStats", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationStats", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationPatchWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1ApplicationUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ApplicationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.ApplicationApiResponseProcessor = ApplicationApiResponseProcessor; //# sourceMappingURL=ApplicationApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/AuthenticationApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.AuthenticationApiResponseProcessor = exports.AuthenticationApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class AuthenticationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1AuthenticationAppPortalAccess(appId, appPortalAccessIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationAppPortalAccess", "appId");
            }
            if (appPortalAccessIn === null || appPortalAccessIn === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationAppPortalAccess", "appPortalAccessIn");
            }
            const localVarPath = '/api/v1/auth/app-portal-access/{app_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(appPortalAccessIn, "AppPortalAccessIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationCreateMessageToken(appId, createTokenIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationCreateMessageToken", "appId");
            }
            if (createTokenIn === null || createTokenIn === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationCreateMessageToken", "createTokenIn");
            }
            const localVarPath = '/api/v1/auth/app/{app_id}/create-message-token'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(createTokenIn, "CreateTokenIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationDashboardAccess(appId, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationDashboardAccess", "appId");
            }
            const localVarPath = '/api/v1/auth/dashboard-access/{app_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationExchangeOneTimeToken(oneTimeTokenIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (oneTimeTokenIn === null || oneTimeTokenIn === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationExchangeOneTimeToken", "oneTimeTokenIn");
            }
            const localVarPath = '/api/v1/auth/one-time-token';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oneTimeTokenIn, "OneTimeTokenIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationExpireAll(appId, applicationTokenExpireIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationExpireAll", "appId");
            }
            if (applicationTokenExpireIn === null || applicationTokenExpireIn === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationExpireAll", "applicationTokenExpireIn");
            }
            const localVarPath = '/api/v1/auth/app/{app_id}/expire-all'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(applicationTokenExpireIn, "ApplicationTokenExpireIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationGetPollerToken(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationGetPollerToken", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationGetPollerToken", "endpointId");
            }
            const localVarPath = '/api/v1/auth/app/{app_id}/poller/{endpoint_id}/token'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationLogout(idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/auth/logout';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1AuthenticationRotatePollerToken(appId, endpointId, rotatePollerTokenIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationRotatePollerToken", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationRotatePollerToken", "endpointId");
            }
            if (rotatePollerTokenIn === null || rotatePollerTokenIn === undefined) {
                throw new baseapi_1.RequiredError("AuthenticationApi", "v1AuthenticationRotatePollerToken", "rotatePollerTokenIn");
            }
            const localVarPath = '/api/v1/auth/app/{app_id}/poller/{endpoint_id}/token/rotate'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(rotatePollerTokenIn, "RotatePollerTokenIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.AuthenticationApiRequestFactory = AuthenticationApiRequestFactory;
class AuthenticationApiResponseProcessor {
    v1AuthenticationAppPortalAccessWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AppPortalAccessOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AppPortalAccessOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationCreateMessageTokenWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationDashboardAccessWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "DashboardAccessOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "DashboardAccessOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationExchangeOneTimeTokenWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OneTimeTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OneTimeTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationExpireAllWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationGetPollerTokenWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationLogoutWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1AuthenticationRotatePollerTokenWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.AuthenticationApiResponseProcessor = AuthenticationApiResponseProcessor; //# sourceMappingURL=AuthenticationApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/BackgroundTasksApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.BackgroundTasksApiResponseProcessor = exports.BackgroundTasksApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class BackgroundTasksApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getBackgroundTask(taskId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (taskId === null || taskId === undefined) {
                throw new baseapi_1.RequiredError("BackgroundTasksApi", "getBackgroundTask", "taskId");
            }
            const localVarPath = '/api/v1/background-task/{task_id}'.replace('{' + 'task_id' + '}', encodeURIComponent(String(taskId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    listBackgroundTasks(status, task, limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/background-task';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (status !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(status, "BackgroundTaskStatus", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            if (task !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(task, "BackgroundTaskType", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.BackgroundTasksApiRequestFactory = BackgroundTasksApiRequestFactory;
class BackgroundTasksApiResponseProcessor {
    getBackgroundTaskWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "BackgroundTaskOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "BackgroundTaskOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    listBackgroundTasksWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseBackgroundTaskOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseBackgroundTaskOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.BackgroundTasksApiResponseProcessor = BackgroundTasksApiResponseProcessor; //# sourceMappingURL=BackgroundTasksApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/BroadcastApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.BroadcastApiResponseProcessor = exports.BroadcastApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class BroadcastApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createBroadcastMessage(messageBroadcastIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (messageBroadcastIn === null || messageBroadcastIn === undefined) {
                throw new baseapi_1.RequiredError("BroadcastApi", "createBroadcastMessage", "messageBroadcastIn");
            }
            const localVarPath = '/api/v1/msg/broadcast';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(messageBroadcastIn, "MessageBroadcastIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.BroadcastApiRequestFactory = BroadcastApiRequestFactory;
class BroadcastApiResponseProcessor {
    createBroadcastMessageWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageBroadcastOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageBroadcastOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.BroadcastApiResponseProcessor = BroadcastApiResponseProcessor; //# sourceMappingURL=BroadcastApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EndpointApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.EndpointApiResponseProcessor = exports.EndpointApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class EndpointApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1EndpointCreate(appId, endpointIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointCreate", "appId");
            }
            if (endpointIn === null || endpointIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointCreate", "endpointIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointIn, "EndpointIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointDelete(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointDelete", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointDelete", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointDeleteMtlsConfig(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointDeleteMtlsConfig", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointDeleteMtlsConfig", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/mtls'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointDeleteOauthConfig(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointDeleteOauthConfig", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointDeleteOauthConfig", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/oauth'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointGet(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGet", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGet", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointGetHeaders(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGetHeaders", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGetHeaders", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointGetSecret(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGetSecret", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGetSecret", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointGetStats(appId, endpointId, since, until, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGetStats", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointGetStats", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (since !== undefined) {
                requestContext.setQueryParam("since", ObjectSerializer_1.ObjectSerializer.serialize(since, "Date", "date-time"));
            }
            if (until !== undefined) {
                requestContext.setQueryParam("until", ObjectSerializer_1.ObjectSerializer.serialize(until, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointList(appId, limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointList", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointPatch(appId, endpointId, endpointPatch, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointPatch", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointPatch", "endpointId");
            }
            if (endpointPatch === null || endpointPatch === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointPatch", "endpointPatch");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointPatch, "EndpointPatch", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointPatchHeaders(appId, endpointId, endpointHeadersPatchIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointPatchHeaders", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointPatchHeaders", "endpointId");
            }
            if (endpointHeadersPatchIn === null || endpointHeadersPatchIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointPatchHeaders", "endpointHeadersPatchIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointHeadersPatchIn, "EndpointHeadersPatchIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointRecover(appId, endpointId, recoverIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointRecover", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointRecover", "endpointId");
            }
            if (recoverIn === null || recoverIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointRecover", "recoverIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(recoverIn, "RecoverIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointReplayMissing(appId, endpointId, replayIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointReplayMissing", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointReplayMissing", "endpointId");
            }
            if (replayIn === null || replayIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointReplayMissing", "replayIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(replayIn, "ReplayIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointRotateSecret(appId, endpointId, endpointSecretRotateIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointRotateSecret", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointRotateSecret", "endpointId");
            }
            if (endpointSecretRotateIn === null || endpointSecretRotateIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointRotateSecret", "endpointSecretRotateIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointSecretRotateIn, "EndpointSecretRotateIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointSendExample(appId, endpointId, eventExampleIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointSendExample", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointSendExample", "endpointId");
            }
            if (eventExampleIn === null || eventExampleIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointSendExample", "eventExampleIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(eventExampleIn, "EventExampleIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointTransformationGet(appId, endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationGet", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationGet", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointTransformationPartialUpdate(appId, endpointId, endpointTransformationIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationPartialUpdate", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationPartialUpdate", "endpointId");
            }
            if (endpointTransformationIn === null || endpointTransformationIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationPartialUpdate", "endpointTransformationIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointTransformationIn, "EndpointTransformationIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointTransformationSimulate(appId, endpointId, endpointTransformationSimulateIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationSimulate", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationSimulate", "endpointId");
            }
            if (endpointTransformationSimulateIn === null || endpointTransformationSimulateIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointTransformationSimulate", "endpointTransformationSimulateIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/simulate'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointTransformationSimulateIn, "EndpointTransformationSimulateIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointUpdate(appId, endpointId, endpointUpdate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdate", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdate", "endpointId");
            }
            if (endpointUpdate === null || endpointUpdate === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdate", "endpointUpdate");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointUpdate, "EndpointUpdate", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointUpdateHeaders(appId, endpointId, endpointHeadersIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateHeaders", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateHeaders", "endpointId");
            }
            if (endpointHeadersIn === null || endpointHeadersIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateHeaders", "endpointHeadersIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointHeadersIn, "EndpointHeadersIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointUpdateMtlsConfig(appId, endpointId, endpointMtlsConfigIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateMtlsConfig", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateMtlsConfig", "endpointId");
            }
            if (endpointMtlsConfigIn === null || endpointMtlsConfigIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateMtlsConfig", "endpointMtlsConfigIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/mtls'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointMtlsConfigIn, "EndpointMtlsConfigIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EndpointUpdateOauthConfig(appId, endpointId, endpointOauthConfigIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateOauthConfig", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateOauthConfig", "endpointId");
            }
            if (endpointOauthConfigIn === null || endpointOauthConfigIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1EndpointUpdateOauthConfig", "endpointOauthConfigIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/oauth'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(endpointOauthConfigIn, "EndpointOauthConfigIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1SinkCreate(appId, sinkIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1SinkCreate", "appId");
            }
            if (sinkIn === null || sinkIn === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1SinkCreate", "sinkIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/sink'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(sinkIn, "SinkIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1SinkGet(appId, sinkId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1SinkGet", "appId");
            }
            if (sinkId === null || sinkId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1SinkGet", "sinkId");
            }
            const localVarPath = '/api/v1/app/{app_id}/sink/{sink_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'sink_id' + '}', encodeURIComponent(String(sinkId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1SinkList(appId, limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("EndpointApi", "v1SinkList", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/sink'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.EndpointApiRequestFactory = EndpointApiRequestFactory;
class EndpointApiResponseProcessor {
    v1EndpointCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointDeleteMtlsConfigWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointDeleteOauthConfigWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointGetHeadersWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointHeadersOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointHeadersOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointGetSecretWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointSecretOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointSecretOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointGetStatsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointStats", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointStats", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointPatchWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointPatchHeadersWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointRecoverWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RecoverOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RecoverOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointReplayMissingWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ReplayOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ReplayOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointRotateSecretWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointSendExampleWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointTransformationGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointTransformationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointTransformationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointTransformationPartialUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointTransformationSimulateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointTransformationSimulateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointTransformationSimulateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointUpdateHeadersWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointUpdateMtlsConfigWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EndpointUpdateOauthConfigWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1SinkCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "SinkOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "SinkOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1SinkGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "SinkOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "SinkOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1SinkListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseSinkOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseSinkOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.EndpointApiResponseProcessor = EndpointApiResponseProcessor; //# sourceMappingURL=EndpointApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EnvironmentApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.EnvironmentApiResponseProcessor = exports.EnvironmentApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class EnvironmentApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1EnvironmentExport(idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/environment/export';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EnvironmentImport(environmentIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (environmentIn === null || environmentIn === undefined) {
                throw new baseapi_1.RequiredError("EnvironmentApi", "v1EnvironmentImport", "environmentIn");
            }
            const localVarPath = '/api/v1/environment/import';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(environmentIn, "EnvironmentIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.EnvironmentApiRequestFactory = EnvironmentApiRequestFactory;
class EnvironmentApiResponseProcessor {
    v1EnvironmentExportWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EnvironmentOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EnvironmentOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EnvironmentImportWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.EnvironmentApiResponseProcessor = EnvironmentApiResponseProcessor; //# sourceMappingURL=EnvironmentApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EnvironmentSettingsApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.EnvironmentSettingsApiResponseProcessor = exports.EnvironmentSettingsApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class EnvironmentSettingsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1EnvironmentGetSettings(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/environment/settings';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.EnvironmentSettingsApiRequestFactory = EnvironmentSettingsApiRequestFactory;
class EnvironmentSettingsApiResponseProcessor {
    v1EnvironmentGetSettingsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EnvironmentSettingsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EnvironmentSettingsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.EnvironmentSettingsApiResponseProcessor = EnvironmentSettingsApiResponseProcessor; //# sourceMappingURL=EnvironmentSettingsApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EventTypeApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.EventTypeApiResponseProcessor = exports.EventTypeApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class EventTypeApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1EventTypeCreate(eventTypeIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeIn === null || eventTypeIn === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeCreate", "eventTypeIn");
            }
            const localVarPath = '/api/v1/event-type';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(eventTypeIn, "EventTypeIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeDelete(eventTypeName, expunge, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeName === null || eventTypeName === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeDelete", "eventTypeName");
            }
            const localVarPath = '/api/v1/event-type/{event_type_name}'.replace('{' + 'event_type_name' + '}', encodeURIComponent(String(eventTypeName)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (expunge !== undefined) {
                requestContext.setQueryParam("expunge", ObjectSerializer_1.ObjectSerializer.serialize(expunge, "boolean", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeExportOpenapi(idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/event-type/export/openapi';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeGenerateExample(eventTypeSchemaIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeSchemaIn === null || eventTypeSchemaIn === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeGenerateExample", "eventTypeSchemaIn");
            }
            const localVarPath = '/api/v1/event-type/schema/generate-example';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(eventTypeSchemaIn, "EventTypeSchemaIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeGet(eventTypeName, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeName === null || eventTypeName === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeGet", "eventTypeName");
            }
            const localVarPath = '/api/v1/event-type/{event_type_name}'.replace('{' + 'event_type_name' + '}', encodeURIComponent(String(eventTypeName)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeGetRetrySchedule(eventTypeName, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeName === null || eventTypeName === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeGetRetrySchedule", "eventTypeName");
            }
            const localVarPath = '/api/v1/event-type/{event_type_name}/retry-schedule'.replace('{' + 'event_type_name' + '}', encodeURIComponent(String(eventTypeName)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeImportOpenapi(eventTypeImportOpenApiIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeImportOpenApiIn === null || eventTypeImportOpenApiIn === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeImportOpenapi", "eventTypeImportOpenApiIn");
            }
            const localVarPath = '/api/v1/event-type/import/openapi';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(eventTypeImportOpenApiIn, "EventTypeImportOpenApiIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeList(limit, iterator, order, includeArchived, withContent, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/event-type';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            if (includeArchived !== undefined) {
                requestContext.setQueryParam("include_archived", ObjectSerializer_1.ObjectSerializer.serialize(includeArchived, "boolean", ""));
            }
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypePatch(eventTypeName, eventTypePatch, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeName === null || eventTypeName === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypePatch", "eventTypeName");
            }
            if (eventTypePatch === null || eventTypePatch === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypePatch", "eventTypePatch");
            }
            const localVarPath = '/api/v1/event-type/{event_type_name}'.replace('{' + 'event_type_name' + '}', encodeURIComponent(String(eventTypeName)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(eventTypePatch, "EventTypePatch", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeUpdate(eventTypeName, eventTypeUpdate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeName === null || eventTypeName === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeUpdate", "eventTypeName");
            }
            if (eventTypeUpdate === null || eventTypeUpdate === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeUpdate", "eventTypeUpdate");
            }
            const localVarPath = '/api/v1/event-type/{event_type_name}'.replace('{' + 'event_type_name' + '}', encodeURIComponent(String(eventTypeName)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(eventTypeUpdate, "EventTypeUpdate", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventTypeUpdateRetrySchedule(eventTypeName, retryScheduleInOut, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (eventTypeName === null || eventTypeName === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeUpdateRetrySchedule", "eventTypeName");
            }
            if (retryScheduleInOut === null || retryScheduleInOut === undefined) {
                throw new baseapi_1.RequiredError("EventTypeApi", "v1EventTypeUpdateRetrySchedule", "retryScheduleInOut");
            }
            const localVarPath = '/api/v1/event-type/{event_type_name}/retry-schedule'.replace('{' + 'event_type_name' + '}', encodeURIComponent(String(eventTypeName)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(retryScheduleInOut, "RetryScheduleInOut", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.EventTypeApiRequestFactory = EventTypeApiRequestFactory;
class EventTypeApiResponseProcessor {
    v1EventTypeCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeExportOpenapiWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ExportEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ExportEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeGenerateExampleWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeExampleOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeExampleOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeGetRetryScheduleWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RetryScheduleInOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RetryScheduleInOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeImportOpenapiWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeImportOpenApiOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeImportOpenApiOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypePatchWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventTypeUpdateRetryScheduleWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RetryScheduleInOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RetryScheduleInOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.EventTypeApiResponseProcessor = EventTypeApiResponseProcessor; //# sourceMappingURL=EventTypeApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EventsApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.EventsApiResponseProcessor = exports.EventsApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class EventsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1Events(limit, iterator, eventTypes, channels, after, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/events';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            if (channels !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(channels, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("channels", serializedParam);
                }
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.EventsApiRequestFactory = EventsApiRequestFactory;
class EventsApiResponseProcessor {
    v1EventsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.EventsApiResponseProcessor = EventsApiResponseProcessor; //# sourceMappingURL=EventsApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/HealthApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.HealthApiResponseProcessor = exports.HealthApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class HealthApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1HealthGet(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/health';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.HealthApiRequestFactory = HealthApiRequestFactory;
class HealthApiResponseProcessor {
    v1HealthGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.HealthApiResponseProcessor = HealthApiResponseProcessor; //# sourceMappingURL=HealthApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/InboundApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.InboundApiResponseProcessor = exports.InboundApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class InboundApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1InboundMsg(appId, inboundToken, body, eventType, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("InboundApi", "v1InboundMsg", "appId");
            }
            if (inboundToken === null || inboundToken === undefined) {
                throw new baseapi_1.RequiredError("InboundApi", "v1InboundMsg", "inboundToken");
            }
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("InboundApi", "v1InboundMsg", "body");
            }
            const localVarPath = '/api/v1/app/{app_id}/inbound/msg/{inbound_token}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'inbound_token' + '}', encodeURIComponent(String(inboundToken)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (eventType !== undefined) {
                requestContext.setQueryParam("event_type", ObjectSerializer_1.ObjectSerializer.serialize(eventType, "string", ""));
            }
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "string", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1InboundRotateUrl(appId, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("InboundApi", "v1InboundRotateUrl", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/inbound/rotate-url'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.InboundApiRequestFactory = InboundApiRequestFactory;
class InboundApiResponseProcessor {
    v1InboundMsgWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1InboundRotateUrlWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RotatedUrlOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "RotatedUrlOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.InboundApiResponseProcessor = InboundApiResponseProcessor; //# sourceMappingURL=InboundApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/IntegrationApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.IntegrationApiResponseProcessor = exports.IntegrationApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class IntegrationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1IntegrationCreate(appId, integrationIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationCreate", "appId");
            }
            if (integrationIn === null || integrationIn === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationCreate", "integrationIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(integrationIn, "IntegrationIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1IntegrationDelete(appId, integId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationDelete", "appId");
            }
            if (integId === null || integId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationDelete", "integId");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration/{integ_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'integ_id' + '}', encodeURIComponent(String(integId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1IntegrationGet(appId, integId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationGet", "appId");
            }
            if (integId === null || integId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationGet", "integId");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration/{integ_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'integ_id' + '}', encodeURIComponent(String(integId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1IntegrationGetKey(appId, integId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationGetKey", "appId");
            }
            if (integId === null || integId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationGetKey", "integId");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration/{integ_id}/key'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'integ_id' + '}', encodeURIComponent(String(integId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1IntegrationList(appId, limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationList", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1IntegrationRotateKey(appId, integId, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationRotateKey", "appId");
            }
            if (integId === null || integId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationRotateKey", "integId");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration/{integ_id}/key/rotate'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'integ_id' + '}', encodeURIComponent(String(integId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1IntegrationUpdate(appId, integId, integrationUpdate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationUpdate", "appId");
            }
            if (integId === null || integId === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationUpdate", "integId");
            }
            if (integrationUpdate === null || integrationUpdate === undefined) {
                throw new baseapi_1.RequiredError("IntegrationApi", "v1IntegrationUpdate", "integrationUpdate");
            }
            const localVarPath = '/api/v1/app/{app_id}/integration/{integ_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'integ_id' + '}', encodeURIComponent(String(integId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(integrationUpdate, "IntegrationUpdate", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.IntegrationApiRequestFactory = IntegrationApiRequestFactory;
class IntegrationApiResponseProcessor {
    v1IntegrationCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1IntegrationDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1IntegrationGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1IntegrationGetKeyWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationKeyOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationKeyOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1IntegrationListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseIntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseIntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1IntegrationRotateKeyWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationKeyOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationKeyOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1IntegrationUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IntegrationOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.IntegrationApiResponseProcessor = IntegrationApiResponseProcessor; //# sourceMappingURL=IntegrationApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/MessageApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.MessageApiResponseProcessor = exports.MessageApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class MessageApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createMessageAttemptForEndpoint(appId, endpointId, messageIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "createMessageAttemptForEndpoint", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "createMessageAttemptForEndpoint", "endpointId");
            }
            if (messageIn === null || messageIn === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "createMessageAttemptForEndpoint", "messageIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg/test-attempt'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(messageIn, "MessageIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1EventsPublic(appId, sinkId, limit, iterator, eventType, channel, after, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1EventsPublic", "appId");
            }
            if (sinkId === null || sinkId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1EventsPublic", "sinkId");
            }
            const localVarPath = '/api/v1/app/{app_id}/poller/{sink_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'sink_id' + '}', encodeURIComponent(String(sinkId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (eventType !== undefined) {
                requestContext.setQueryParam("event_type", ObjectSerializer_1.ObjectSerializer.serialize(eventType, "string", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageCreate(appId, messageIn, withContent, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageCreate", "appId");
            }
            if (messageIn === null || messageIn === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageCreate", "messageIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(messageIn, "MessageIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageEvents(appId, limit, iterator, eventTypes, channels, after, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageEvents", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/events'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            if (channels !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(channels, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("channels", serializedParam);
                }
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageEventsSubscription(appId, subscriptionId, limit, iterator, eventTypes, channels, after, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageEventsSubscription", "appId");
            }
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageEventsSubscription", "subscriptionId");
            }
            const localVarPath = '/api/v1/app/{app_id}/events/subscription/{subscription_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            if (channels !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(channels, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("channels", serializedParam);
                }
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageEventsSubscriptionCreateToken(appId, subscriptionId, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageEventsSubscriptionCreateToken", "appId");
            }
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageEventsSubscriptionCreateToken", "subscriptionId");
            }
            const localVarPath = '/api/v1/app/{app_id}/events/subscription/{subscription_id}/create-token'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageExpungeContent(appId, msgId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageExpungeContent", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageExpungeContent", "msgId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/content'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageGet(appId, msgId, withContent, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageGet", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageGet", "msgId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageGetRawPayload(appId, msgId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageGetRawPayload", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageGetRawPayload", "msgId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/raw'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageList(appId, limit, iterator, channel, before, after, withContent, tag, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageApi", "v1MessageList", "appId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.MessageApiRequestFactory = MessageApiRequestFactory;
class MessageApiResponseProcessor {
    createMessageAttemptForEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1EventsPublicWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("413", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Payload too large", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageEventsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageEventsSubscriptionWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageEventsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageEventsSubscriptionCreateTokenWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageSubscriberAuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageSubscriberAuthTokenOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageExpungeContentWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageGetRawPayloadWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageRawPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageRawPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.MessageApiResponseProcessor = MessageApiResponseProcessor; //# sourceMappingURL=MessageApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/MessageAttemptApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.MessageAttemptApiResponseProcessor = exports.MessageAttemptApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class MessageAttemptApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1MessageAttemptCountByEndpoint(appId, endpointId, status, statusCodeClass, channel, tag, before, after, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptCountByEndpoint", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptCountByEndpoint", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}/count'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "MessageStatus", ""));
            }
            if (statusCodeClass !== undefined) {
                requestContext.setQueryParam("status_code_class", ObjectSerializer_1.ObjectSerializer.serialize(statusCodeClass, "StatusCodeClass", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptExpungeContent(appId, msgId, attemptId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptExpungeContent", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptExpungeContent", "msgId");
            }
            if (attemptId === null || attemptId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptExpungeContent", "attemptId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId))).replace('{' + 'attempt_id' + '}', encodeURIComponent(String(attemptId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptGet(appId, msgId, attemptId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptGet", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptGet", "msgId");
            }
            if (attemptId === null || attemptId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptGet", "attemptId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId))).replace('{' + 'attempt_id' + '}', encodeURIComponent(String(attemptId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptGetHeaders(appId, msgId, attemptId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptGetHeaders", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptGetHeaders", "msgId");
            }
            if (attemptId === null || attemptId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptGetHeaders", "attemptId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/headers'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId))).replace('{' + 'attempt_id' + '}', encodeURIComponent(String(attemptId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptListAttemptedDestinations(appId, msgId, limit, iterator, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListAttemptedDestinations", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListAttemptedDestinations", "msgId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/endpoint'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptListAttemptedMessages(appId, endpointId, limit, iterator, channel, tag, status, before, after, withContent, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListAttemptedMessages", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListAttemptedMessages", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "MessageStatus", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptListByEndpoint(appId, endpointId, limit, iterator, status, statusCodeClass, channel, tag, before, after, withContent, withMsg, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByEndpoint", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByEndpoint", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "MessageStatus", ""));
            }
            if (statusCodeClass !== undefined) {
                requestContext.setQueryParam("status_code_class", ObjectSerializer_1.ObjectSerializer.serialize(statusCodeClass, "StatusCodeClass", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            if (withMsg !== undefined) {
                requestContext.setQueryParam("with_msg", ObjectSerializer_1.ObjectSerializer.serialize(withMsg, "boolean", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptListByEndpointDeprecated(appId, msgId, endpointId, limit, iterator, channel, tag, status, before, after, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByEndpointDeprecated", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByEndpointDeprecated", "msgId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByEndpointDeprecated", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/attempt'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "MessageStatus", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptListByMsg(appId, msgId, limit, iterator, status, statusCodeClass, channel, tag, endpointId, before, after, withContent, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByMsg", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByMsg", "msgId");
            }
            const localVarPath = '/api/v1/app/{app_id}/attempt/msg/{msg_id}'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "MessageStatus", ""));
            }
            if (statusCodeClass !== undefined) {
                requestContext.setQueryParam("status_code_class", ObjectSerializer_1.ObjectSerializer.serialize(statusCodeClass, "StatusCodeClass", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (endpointId !== undefined) {
                requestContext.setQueryParam("endpoint_id", ObjectSerializer_1.ObjectSerializer.serialize(endpointId, "string", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (withContent !== undefined) {
                requestContext.setQueryParam("with_content", ObjectSerializer_1.ObjectSerializer.serialize(withContent, "boolean", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptListByMsgDeprecated(appId, msgId, limit, iterator, endpointId, channel, tag, status, before, after, statusCodeClass, eventTypes, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByMsgDeprecated", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptListByMsgDeprecated", "msgId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/attempt'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (endpointId !== undefined) {
                requestContext.setQueryParam("endpoint_id", ObjectSerializer_1.ObjectSerializer.serialize(endpointId, "string", ""));
            }
            if (channel !== undefined) {
                requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "string", ""));
            }
            if (tag !== undefined) {
                requestContext.setQueryParam("tag", ObjectSerializer_1.ObjectSerializer.serialize(tag, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "MessageStatus", ""));
            }
            if (before !== undefined) {
                requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "Date", "date-time"));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            if (statusCodeClass !== undefined) {
                requestContext.setQueryParam("status_code_class", ObjectSerializer_1.ObjectSerializer.serialize(statusCodeClass, "StatusCodeClass", ""));
            }
            if (eventTypes !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(eventTypes, "Array<string>", "");
                for (const serializedParam of serializedParams){
                    requestContext.appendQueryParam("event_types", serializedParam);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1MessageAttemptResend(appId, msgId, endpointId, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptResend", "appId");
            }
            if (msgId === null || msgId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptResend", "msgId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("MessageAttemptApi", "v1MessageAttemptResend", "endpointId");
            }
            const localVarPath = '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'msg_id' + '}', encodeURIComponent(String(msgId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.MessageAttemptApiRequestFactory = MessageAttemptApiRequestFactory;
class MessageAttemptApiResponseProcessor {
    v1MessageAttemptCountByEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "CountOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "CountOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptExpungeContentWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptGetHeadersWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageAttemptHeadersOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "MessageAttemptHeadersOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptListAttemptedDestinationsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptListAttemptedMessagesWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseEndpointMessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseEndpointMessageOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptListByEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptListByEndpointDeprecatedWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptListByMsgWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptListByMsgDeprecatedWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseMessageAttemptOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1MessageAttemptResendWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.MessageAttemptApiResponseProcessor = MessageAttemptApiResponseProcessor; //# sourceMappingURL=MessageAttemptApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/StatisticsApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.StatisticsApiResponseProcessor = exports.StatisticsApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class StatisticsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1StatisticsAggregateAppStats(appUsageStatsIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appUsageStatsIn === null || appUsageStatsIn === undefined) {
                throw new baseapi_1.RequiredError("StatisticsApi", "v1StatisticsAggregateAppStats", "appUsageStatsIn");
            }
            const localVarPath = '/api/v1/stats/usage/app';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(appUsageStatsIn, "AppUsageStatsIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StatisticsAggregateEventTypes(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/stats/usage/event-types';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StatsAppAttempts(appId, startDate, endDate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("StatisticsApi", "v1StatsAppAttempts", "appId");
            }
            const localVarPath = '/api/v1/stats/app/{app_id}/attempt'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (startDate !== undefined) {
                requestContext.setQueryParam("startDate", ObjectSerializer_1.ObjectSerializer.serialize(startDate, "Date", "date-time"));
            }
            if (endDate !== undefined) {
                requestContext.setQueryParam("endDate", ObjectSerializer_1.ObjectSerializer.serialize(endDate, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StatsEndpointAttempts(appId, endpointId, startDate, endDate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("StatisticsApi", "v1StatsEndpointAttempts", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("StatisticsApi", "v1StatsEndpointAttempts", "endpointId");
            }
            const localVarPath = '/api/v1/stats/app/{app_id}/ep/{endpoint_id}/attempt'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (startDate !== undefined) {
                requestContext.setQueryParam("startDate", ObjectSerializer_1.ObjectSerializer.serialize(startDate, "Date", "date-time"));
            }
            if (endDate !== undefined) {
                requestContext.setQueryParam("endDate", ObjectSerializer_1.ObjectSerializer.serialize(endDate, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.StatisticsApiRequestFactory = StatisticsApiRequestFactory;
class StatisticsApiResponseProcessor {
    v1StatisticsAggregateAppStatsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AppUsageStatsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AppUsageStatsOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StatisticsAggregateEventTypesWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AggregateEventTypesOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AggregateEventTypesOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StatsAppAttemptsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AttemptStatisticsResponse", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AttemptStatisticsResponse", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StatsEndpointAttemptsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AttemptStatisticsResponse", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "AttemptStatisticsResponse", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.StatisticsApiResponseProcessor = StatisticsApiResponseProcessor; //# sourceMappingURL=StatisticsApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/StreamApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.StreamApiResponseProcessor = exports.StreamApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class StreamApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1StreamCreate(streamIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamIn === null || streamIn === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamCreate", "streamIn");
            }
            const localVarPath = '/api/v1/stream';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(streamIn, "StreamIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamCreateEvents(streamId, createStreamIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamId === null || streamId === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamCreateEvents", "streamId");
            }
            if (createStreamIn === null || createStreamIn === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamCreateEvents", "createStreamIn");
            }
            const localVarPath = '/api/v1/stream/{stream_id}/events'.replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(createStreamIn, "CreateStreamIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamDelete(streamId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamId === null || streamId === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamDelete", "streamId");
            }
            const localVarPath = '/api/v1/stream/{stream_id}'.replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamEventsGet(streamId, limit, iterator, after, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamId === null || streamId === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamEventsGet", "streamId");
            }
            const localVarPath = '/api/v1/stream/{stream_id}/events'.replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (after !== undefined) {
                requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "Date", "date-time"));
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamGet(streamId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamId === null || streamId === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamGet", "streamId");
            }
            const localVarPath = '/api/v1/stream/{stream_id}'.replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamList(limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/stream';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamPatch(streamId, streamPatch, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamId === null || streamId === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamPatch", "streamId");
            }
            if (streamPatch === null || streamPatch === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamPatch", "streamPatch");
            }
            const localVarPath = '/api/v1/stream/{stream_id}'.replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(streamPatch, "StreamPatch", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamUpdate(streamId, streamIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamId === null || streamId === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamUpdate", "streamId");
            }
            if (streamIn === null || streamIn === undefined) {
                throw new baseapi_1.RequiredError("StreamApi", "v1StreamUpdate", "streamIn");
            }
            const localVarPath = '/api/v1/stream/{stream_id}'.replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(streamIn, "StreamIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.StreamApiRequestFactory = StreamApiRequestFactory;
class StreamApiResponseProcessor {
    v1StreamCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamCreateEventsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "any", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "any", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamEventsGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventStreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "EventStreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseStreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseStreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamPatchWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.StreamApiResponseProcessor = StreamApiResponseProcessor; //# sourceMappingURL=StreamApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/StreamEventTypesApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.StreamEventTypesApiResponseProcessor = exports.StreamEventTypesApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class StreamEventTypesApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1StreamEventTypeCreate(streamEventTypeIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (streamEventTypeIn === null || streamEventTypeIn === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypeCreate", "streamEventTypeIn");
            }
            const localVarPath = '/api/v1/stream/event-type';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(streamEventTypeIn, "StreamEventTypeIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamEventTypeDelete(name, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (name === null || name === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypeDelete", "name");
            }
            const localVarPath = '/api/v1/stream/event-type/{name}'.replace('{' + 'name' + '}', encodeURIComponent(String(name)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamEventTypeGet(name, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (name === null || name === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypeGet", "name");
            }
            const localVarPath = '/api/v1/stream/event-type/{name}'.replace('{' + 'name' + '}', encodeURIComponent(String(name)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamEventTypeList(limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/stream/event-type';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamEventTypePatch(name, streamEventTypePatch, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (name === null || name === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypePatch", "name");
            }
            if (streamEventTypePatch === null || streamEventTypePatch === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypePatch", "streamEventTypePatch");
            }
            const localVarPath = '/api/v1/stream/event-type/{name}'.replace('{' + 'name' + '}', encodeURIComponent(String(name)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(streamEventTypePatch, "StreamEventTypePatch", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1StreamEventTypeUpdate(name, streamEventTypeIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (name === null || name === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypeUpdate", "name");
            }
            if (streamEventTypeIn === null || streamEventTypeIn === undefined) {
                throw new baseapi_1.RequiredError("StreamEventTypesApi", "v1StreamEventTypeUpdate", "streamEventTypeIn");
            }
            const localVarPath = '/api/v1/stream/event-type/{name}'.replace('{' + 'name' + '}', encodeURIComponent(String(name)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(streamEventTypeIn, "StreamEventTypeIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.StreamEventTypesApiRequestFactory = StreamEventTypesApiRequestFactory;
class StreamEventTypesApiResponseProcessor {
    v1StreamEventTypeCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamEventTypeDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamEventTypeGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamEventTypeListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseStreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseStreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamEventTypePatchWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1StreamEventTypeUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "StreamEventTypeOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.StreamEventTypesApiResponseProcessor = StreamEventTypesApiResponseProcessor; //# sourceMappingURL=StreamEventTypesApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/TransformationTemplateApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.TransformationTemplateApiResponseProcessor = exports.TransformationTemplateApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class TransformationTemplateApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    v1EndpointUpdateHubspotOauthConfig(appId, endpointId, hubspotOauthConfigIn, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (appId === null || appId === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1EndpointUpdateHubspotOauthConfig", "appId");
            }
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1EndpointUpdateHubspotOauthConfig", "endpointId");
            }
            if (hubspotOauthConfigIn === null || hubspotOauthConfigIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1EndpointUpdateHubspotOauthConfig", "hubspotOauthConfigIn");
            }
            const localVarPath = '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation-template/oauth/hubspot'.replace('{' + 'app_id' + '}', encodeURIComponent(String(appId))).replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubspotOauthConfigIn, "HubspotOauthConfigIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateCreate(templateIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (templateIn === null || templateIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateCreate", "templateIn");
            }
            const localVarPath = '/api/v1/transformation-template';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(templateIn, "TemplateIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateDelete(transformationTemplateId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (transformationTemplateId === null || transformationTemplateId === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateDelete", "transformationTemplateId");
            }
            const localVarPath = '/api/v1/transformation-template/{transformation_template_id}'.replace('{' + 'transformation_template_id' + '}', encodeURIComponent(String(transformationTemplateId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateGenerate(generateIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (generateIn === null || generateIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateGenerate", "generateIn");
            }
            const localVarPath = '/api/v1/transformation-template/generate';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(generateIn, "GenerateIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateGet(transformationTemplateId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (transformationTemplateId === null || transformationTemplateId === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateGet", "transformationTemplateId");
            }
            const localVarPath = '/api/v1/transformation-template/{transformation_template_id}'.replace('{' + 'transformation_template_id' + '}', encodeURIComponent(String(transformationTemplateId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateList(limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/transformation-template';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateOauthDiscord(oAuthPayloadIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (oAuthPayloadIn === null || oAuthPayloadIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateOauthDiscord", "oAuthPayloadIn");
            }
            const localVarPath = '/api/v1/transformation-template/oauth/discord';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuthPayloadIn, "OAuthPayloadIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateOauthHubspot(oAuthPayloadIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (oAuthPayloadIn === null || oAuthPayloadIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateOauthHubspot", "oAuthPayloadIn");
            }
            const localVarPath = '/api/v1/transformation-template/oauth/hubspot';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuthPayloadIn, "OAuthPayloadIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateOauthSlack(oAuthPayloadIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (oAuthPayloadIn === null || oAuthPayloadIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateOauthSlack", "oAuthPayloadIn");
            }
            const localVarPath = '/api/v1/transformation-template/oauth/slack';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(oAuthPayloadIn, "OAuthPayloadIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplatePatch(transformationTemplateId, templatePatch, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (transformationTemplateId === null || transformationTemplateId === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplatePatch", "transformationTemplateId");
            }
            if (templatePatch === null || templatePatch === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplatePatch", "templatePatch");
            }
            const localVarPath = '/api/v1/transformation-template/{transformation_template_id}'.replace('{' + 'transformation_template_id' + '}', encodeURIComponent(String(transformationTemplateId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(templatePatch, "TemplatePatch", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateSimulate(transformationSimulateIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (transformationSimulateIn === null || transformationSimulateIn === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateSimulate", "transformationSimulateIn");
            }
            const localVarPath = '/api/v1/transformation-template/simulate';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(transformationSimulateIn, "TransformationSimulateIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    v1TransformationTemplateUpdate(transformationTemplateId, templateUpdate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (transformationTemplateId === null || transformationTemplateId === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateUpdate", "transformationTemplateId");
            }
            if (templateUpdate === null || templateUpdate === undefined) {
                throw new baseapi_1.RequiredError("TransformationTemplateApi", "v1TransformationTemplateUpdate", "templateUpdate");
            }
            const localVarPath = '/api/v1/transformation-template/{transformation_template_id}'.replace('{' + 'transformation_template_id' + '}', encodeURIComponent(String(transformationTemplateId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(templateUpdate, "TemplateUpdate", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.TransformationTemplateApiRequestFactory = TransformationTemplateApiRequestFactory;
class TransformationTemplateApiResponseProcessor {
    v1EndpointUpdateHubspotOauthConfigWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateCreateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateDeleteWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateGenerateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "GenerateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "GenerateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateGetWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateListWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseTemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseTemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateOauthDiscordWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IncomingWebhookPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IncomingWebhookPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateOauthHubspotWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OAuthPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OAuthPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateOauthSlackWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IncomingWebhookPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "IncomingWebhookPayloadOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplatePatchWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateSimulateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TransformationSimulateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TransformationSimulateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    v1TransformationTemplateUpdateWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "TemplateOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.TransformationTemplateApiResponseProcessor = TransformationTemplateApiResponseProcessor; //# sourceMappingURL=TransformationTemplateApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/WebhookEndpointApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.WebhookEndpointApiResponseProcessor = exports.WebhookEndpointApiRequestFactory = void 0;
const baseapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/baseapi.js [app-rsc] (ecmascript)");
const http_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/http/http.js [app-rsc] (ecmascript)");
const ObjectSerializer_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)");
const exception_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/util.js [app-rsc] (ecmascript)");
class WebhookEndpointApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createOperationalWebhookEndpoint(operationalWebhookEndpointIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (operationalWebhookEndpointIn === null || operationalWebhookEndpointIn === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "createOperationalWebhookEndpoint", "operationalWebhookEndpointIn");
            }
            const localVarPath = '/api/v1/operational-webhook/endpoint';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(operationalWebhookEndpointIn, "OperationalWebhookEndpointIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    deleteOperationalWebhookEndpoint(endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "deleteOperationalWebhookEndpoint", "endpointId");
            }
            const localVarPath = '/api/v1/operational-webhook/endpoint/{endpoint_id}'.replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    getOperationalWebhookEndpoint(endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "getOperationalWebhookEndpoint", "endpointId");
            }
            const localVarPath = '/api/v1/operational-webhook/endpoint/{endpoint_id}'.replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    getOperationalWebhookEndpointSecret(endpointId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "getOperationalWebhookEndpointSecret", "endpointId");
            }
            const localVarPath = '/api/v1/operational-webhook/endpoint/{endpoint_id}/secret'.replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    listOperationalWebhookEndpoints(limit, iterator, order, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/operational-webhook/endpoint';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "uint64"));
            }
            if (iterator !== undefined) {
                requestContext.setQueryParam("iterator", ObjectSerializer_1.ObjectSerializer.serialize(iterator, "string", ""));
            }
            if (order !== undefined) {
                const serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(order, "Ordering", "");
                for (const key of Object.keys(serializedParams)){
                    requestContext.setQueryParam(key, serializedParams[key]);
                }
            }
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    rotateOperationalWebhookEndpointSecret(endpointId, operationalWebhookEndpointSecretIn, idempotencyKey, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "rotateOperationalWebhookEndpointSecret", "endpointId");
            }
            if (operationalWebhookEndpointSecretIn === null || operationalWebhookEndpointSecretIn === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "rotateOperationalWebhookEndpointSecret", "operationalWebhookEndpointSecretIn");
            }
            const localVarPath = '/api/v1/operational-webhook/endpoint/{endpoint_id}/secret/rotate'.replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            if (idempotencyKey !== undefined) {
                requestContext.setHeaderParam("idempotency-key", ObjectSerializer_1.ObjectSerializer.serialize(idempotencyKey, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(operationalWebhookEndpointSecretIn, "OperationalWebhookEndpointSecretIn", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
    updateOperationalWebhookEndpoint(endpointId, operationalWebhookEndpointUpdate, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function*() {
            let _config = _options || this.configuration;
            if (endpointId === null || endpointId === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "updateOperationalWebhookEndpoint", "endpointId");
            }
            if (operationalWebhookEndpointUpdate === null || operationalWebhookEndpointUpdate === undefined) {
                throw new baseapi_1.RequiredError("WebhookEndpointApi", "updateOperationalWebhookEndpoint", "operationalWebhookEndpointUpdate");
            }
            const localVarPath = '/api/v1/operational-webhook/endpoint/{endpoint_id}'.replace('{' + 'endpoint_id' + '}', encodeURIComponent(String(endpointId)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const randomId = Math.floor(Math.random() * Math.pow(2, 32));
            requestContext.setHeaderParam("svix-req-id", randomId.toString());
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(operationalWebhookEndpointUpdate, "OperationalWebhookEndpointUpdate", ""), contentType);
            requestContext.setBody(serializedBody);
            let authMethod;
            authMethod = _config.authMethods["HTTPBearer"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext);
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext);
            }
            return requestContext;
        });
    }
}
exports.WebhookEndpointApiRequestFactory = WebhookEndpointApiRequestFactory;
class WebhookEndpointApiResponseProcessor {
    createOperationalWebhookEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    deleteOperationalWebhookEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    getOperationalWebhookEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    getOperationalWebhookEndpointSecretWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointSecretOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointSecretOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    listOperationalWebhookEndpointsWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseOperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "ListResponseOperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    rotateOperationalWebhookEndpointSecretWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "void", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
    updateOperationalWebhookEndpointWithHttpInfo(response) {
        return __awaiter(this, void 0, void 0, function*() {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Bad request", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("403", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Conflict", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HTTPValidationError", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Validation Error", body, response.headers);
            }
            if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "HttpErrorOut", "");
                throw new exception_1.ApiException(response.httpStatusCode, "Too Many Requests", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse((yield response.body.text()), contentType), "OperationalWebhookEndpointOut", "");
                return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", (yield response.getBodyAsAny()), response.headers);
        });
    }
}
exports.WebhookEndpointApiResponseProcessor = WebhookEndpointApiResponseProcessor; //# sourceMappingURL=WebhookEndpointApi.js.map
}}),

};

//# sourceMappingURL=6f523_svix_dist_openapi_apis_9a618b._.js.map