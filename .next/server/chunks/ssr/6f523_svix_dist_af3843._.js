module.exports = {

"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/authentication.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Authentication = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class Authentication {
    constructor(config){
        this.api = new openapi_1.AuthenticationApi(config);
    }
    appPortalAccess(appId, appPortalAccessIn, options) {
        return this.api.v1AuthenticationAppPortalAccess(Object.assign({
            appId,
            appPortalAccessIn
        }, options));
    }
    dashboardAccess(appId, options) {
        return this.api.v1AuthenticationDashboardAccess(Object.assign({
            appId
        }, options));
    }
    expireAll(appId, applicationTokenExpireIn, options) {
        return this.api.v1AuthenticationExpireAll(Object.assign({
            appId,
            applicationTokenExpireIn
        }, options));
    }
    logout(options) {
        return this.api.v1AuthenticationLogout(Object.assign({}, options));
    }
}
exports.Authentication = Authentication; //# sourceMappingURL=authentication.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/application.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Application = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class Application {
    constructor(config){
        this.api = new openapi_1.ApplicationApi(config);
    }
    list(options) {
        var _a;
        return this.api.v1ApplicationList(Object.assign(Object.assign({}, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined
        }));
    }
    create(applicationIn, options) {
        return this.api.v1ApplicationCreate(Object.assign({
            applicationIn
        }, options));
    }
    getOrCreate(applicationIn, options) {
        return this.api.v1ApplicationCreate(Object.assign(Object.assign({
            applicationIn
        }, options), {
            getIfExists: true
        }));
    }
    get(appId) {
        return this.api.v1ApplicationGet({
            appId
        });
    }
    update(appId, applicationIn) {
        return this.api.v1ApplicationUpdate({
            appId,
            applicationIn
        });
    }
    delete(appId) {
        return this.api.v1ApplicationDelete({
            appId
        });
    }
    patch(appId, applicationPatch) {
        return this.api.v1ApplicationPatch({
            appId,
            applicationPatch
        });
    }
}
exports.Application = Application; //# sourceMappingURL=application.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/background_task.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTask = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class BackgroundTask {
    constructor(config){
        this.api = new openapi_1.BackgroundTasksApi(config);
    }
    listByEndpoint(options) {
        var _a;
        const iterator = (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined;
        return this.api.listBackgroundTasks(Object.assign(Object.assign({}, options), {
            iterator
        }));
    }
    get(taskId) {
        return this.api.getBackgroundTask({
            taskId
        });
    }
}
exports.BackgroundTask = BackgroundTask; //# sourceMappingURL=background_task.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/endpoint.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Endpoint = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class Endpoint {
    constructor(config){
        this.api = new openapi_1.EndpointApi(config);
    }
    list(appId, options) {
        var _a;
        return this.api.v1EndpointList(Object.assign(Object.assign({
            appId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined
        }));
    }
    create(appId, endpointIn, options) {
        return this.api.v1EndpointCreate(Object.assign({
            appId,
            endpointIn
        }, options));
    }
    get(appId, endpointId) {
        return this.api.v1EndpointGet({
            appId,
            endpointId
        });
    }
    update(appId, endpointId, endpointUpdate) {
        return this.api.v1EndpointUpdate({
            appId,
            endpointId,
            endpointUpdate
        });
    }
    delete(appId, endpointId) {
        return this.api.v1EndpointDelete({
            appId,
            endpointId
        });
    }
    patch(appId, endpointId, endpointPatch) {
        return this.api.v1EndpointPatch({
            appId,
            endpointId,
            endpointPatch
        });
    }
    getHeaders(appId, endpointId) {
        return this.api.v1EndpointGetHeaders({
            appId,
            endpointId
        });
    }
    updateHeaders(appId, endpointId, endpointHeadersIn) {
        return this.api.v1EndpointUpdateHeaders({
            appId,
            endpointId,
            endpointHeadersIn
        });
    }
    headersUpdate(appId, endpointId, endpointHeadersIn) {
        return this.api.v1EndpointUpdateHeaders({
            appId,
            endpointId,
            endpointHeadersIn
        });
    }
    patchHeaders(appId, endpointId, endpointHeadersPatchIn) {
        return this.api.v1EndpointPatchHeaders({
            appId,
            endpointId,
            endpointHeadersPatchIn
        });
    }
    headersPatch(appId, endpointId, endpointHeadersPatchIn) {
        return this.api.v1EndpointPatchHeaders({
            appId,
            endpointId,
            endpointHeadersPatchIn
        });
    }
    recover(appId, endpointId, recoverIn, options) {
        return this.api.v1EndpointRecover(Object.assign({
            appId,
            endpointId,
            recoverIn
        }, options));
    }
    replayMissing(appId, endpointId, replayIn, options) {
        return this.api.v1EndpointReplayMissing(Object.assign({
            appId,
            endpointId,
            replayIn
        }, options));
    }
    getSecret(appId, endpointId) {
        return this.api.v1EndpointGetSecret({
            appId,
            endpointId
        });
    }
    rotateSecret(appId, endpointId, endpointSecretRotateIn, options) {
        return this.api.v1EndpointRotateSecret(Object.assign({
            appId,
            endpointId,
            endpointSecretRotateIn
        }, options));
    }
    sendExample(appId, endpointId, eventExampleIn, options) {
        return this.api.v1EndpointSendExample(Object.assign({
            appId,
            endpointId,
            eventExampleIn
        }, options));
    }
    getStats(appId, endpointId, options) {
        var _a, _b;
        return this.api.v1EndpointGetStats(Object.assign(Object.assign({
            appId,
            endpointId
        }, options), {
            since: (_a = options === null || options === void 0 ? void 0 : options.since) !== null && _a !== void 0 ? _a : undefined,
            until: (_b = options === null || options === void 0 ? void 0 : options.until) !== null && _b !== void 0 ? _b : undefined
        }));
    }
    transformationGet(appId, endpointId) {
        return this.api.v1EndpointTransformationGet({
            appId,
            endpointId
        });
    }
    transformationPartialUpdate(appId, endpointId, endpointTransformationIn) {
        return this.api.v1EndpointTransformationPartialUpdate({
            appId,
            endpointId,
            endpointTransformationIn
        });
    }
    oauthUpdate(appId, endpointId, endpointOauthConfigIn) {
        return this.api.v1EndpointUpdateOauthConfig({
            appId,
            endpointId,
            endpointOauthConfigIn
        });
    }
    oauthDelete(appId, endpointId) {
        return this.api.v1EndpointDeleteOauthConfig({
            appId,
            endpointId
        });
    }
}
exports.Endpoint = Endpoint; //# sourceMappingURL=endpoint.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/event_type.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventType = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class EventType {
    constructor(config){
        this.api = new openapi_1.EventTypeApi(config);
    }
    list(options) {
        var _a;
        return this.api.v1EventTypeList(Object.assign(Object.assign({}, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined
        }));
    }
    create(eventTypeIn, options) {
        return this.api.v1EventTypeCreate(Object.assign({
            eventTypeIn
        }, options));
    }
    importOpenapi(eventTypeImportOpenApiIn, options) {
        return this.api.v1EventTypeImportOpenapi(Object.assign({
            eventTypeImportOpenApiIn
        }, options));
    }
    get(eventTypeName) {
        return this.api.v1EventTypeGet({
            eventTypeName
        });
    }
    update(eventTypeName, eventTypeUpdate) {
        return this.api.v1EventTypeUpdate({
            eventTypeName,
            eventTypeUpdate
        });
    }
    delete(eventTypeName) {
        return this.api.v1EventTypeDelete({
            eventTypeName
        });
    }
    patch(eventTypeName, eventTypePatch) {
        return this.api.v1EventTypePatch({
            eventTypeName,
            eventTypePatch
        });
    }
}
exports.EventType = EventType; //# sourceMappingURL=event_type.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/integration.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Integration = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class Integration {
    constructor(config){
        this.api = new openapi_1.IntegrationApi(config);
    }
    list(appId, options) {
        var _a;
        return this.api.v1IntegrationList(Object.assign(Object.assign({
            appId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined
        }));
    }
    create(appId, integrationIn, options) {
        return this.api.v1IntegrationCreate(Object.assign({
            appId,
            integrationIn
        }, options));
    }
    get(appId, integId) {
        return this.api.v1IntegrationGet({
            appId,
            integId
        });
    }
    update(appId, integId, integrationUpdate) {
        return this.api.v1IntegrationUpdate({
            appId,
            integId,
            integrationUpdate
        });
    }
    delete(appId, integId) {
        return this.api.v1IntegrationDelete({
            appId,
            integId
        });
    }
    getKey(appId, integId) {
        return this.api.v1IntegrationGetKey({
            integId,
            appId
        });
    }
    rotateKey(appId, integId, options) {
        return this.api.v1IntegrationRotateKey(Object.assign({
            appId,
            integId
        }, options));
    }
}
exports.Integration = Integration; //# sourceMappingURL=integration.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/message.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messageInRaw = exports.Message = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class Message {
    constructor(config){
        this.api = new openapi_1.MessageApi(config);
    }
    list(appId, options) {
        var _a, _b, _c;
        return this.api.v1MessageList(Object.assign(Object.assign({
            appId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined,
            before: (_b = options === null || options === void 0 ? void 0 : options.before) !== null && _b !== void 0 ? _b : undefined,
            after: (_c = options === null || options === void 0 ? void 0 : options.after) !== null && _c !== void 0 ? _c : undefined
        }));
    }
    create(appId, messageIn, options) {
        return this.api.v1MessageCreate(Object.assign({
            appId,
            messageIn
        }, options));
    }
    get(appId, msgId) {
        return this.api.v1MessageGet({
            appId,
            msgId
        });
    }
    expungeContent(appId, msgId) {
        return this.api.v1MessageExpungeContent({
            appId,
            msgId
        });
    }
}
exports.Message = Message;
function messageInRaw(eventType, payload, contentType) {
    const headers = contentType ? {
        "content-type": contentType
    } : undefined;
    return {
        eventType,
        payload: {},
        transformationsParams: {
            rawPayload: payload,
            headers
        }
    };
}
exports.messageInRaw = messageInRaw; //# sourceMappingURL=message.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/message_attempt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttempt = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class MessageAttempt {
    constructor(config){
        this.api = new openapi_1.MessageAttemptApi(config);
    }
    list(appId, msgId, options) {
        return this.listByMsg(appId, msgId, options);
    }
    listByEndpoint(appId, endpointId, options) {
        var _a, _b, _c;
        return this.api.v1MessageAttemptListByEndpoint(Object.assign(Object.assign({
            appId,
            endpointId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined,
            before: (_b = options === null || options === void 0 ? void 0 : options.before) !== null && _b !== void 0 ? _b : undefined,
            after: (_c = options === null || options === void 0 ? void 0 : options.after) !== null && _c !== void 0 ? _c : undefined
        }));
    }
    listByMsg(appId, msgId, options) {
        var _a, _b, _c;
        return this.api.v1MessageAttemptListByMsg(Object.assign(Object.assign({
            appId,
            msgId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined,
            before: (_b = options === null || options === void 0 ? void 0 : options.before) !== null && _b !== void 0 ? _b : undefined,
            after: (_c = options === null || options === void 0 ? void 0 : options.after) !== null && _c !== void 0 ? _c : undefined
        }));
    }
    listAttemptedMessages(appId, endpointId, options) {
        var _a, _b, _c;
        return this.api.v1MessageAttemptListAttemptedMessages(Object.assign(Object.assign({
            appId,
            endpointId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined,
            before: (_b = options === null || options === void 0 ? void 0 : options.before) !== null && _b !== void 0 ? _b : undefined,
            after: (_c = options === null || options === void 0 ? void 0 : options.after) !== null && _c !== void 0 ? _c : undefined
        }));
    }
    get(appId, msgId, attemptId) {
        return this.api.v1MessageAttemptGet({
            appId,
            msgId,
            attemptId
        });
    }
    expungeContent(appId, msgId, attemptId) {
        return this.api.v1MessageAttemptExpungeContent({
            appId,
            msgId,
            attemptId
        });
    }
    listAttemptedDestinations(appId, msgId, options) {
        var _a;
        return this.api.v1MessageAttemptListAttemptedDestinations(Object.assign(Object.assign({
            appId,
            msgId
        }, options), {
            iterator: (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined
        }));
    }
    resend(appId, msgId, endpointId, options) {
        return this.api.v1MessageAttemptResend(Object.assign({
            appId,
            msgId,
            endpointId
        }, options));
    }
}
exports.MessageAttempt = MessageAttempt; //# sourceMappingURL=message_attempt.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/op_webhook_endpoint.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpoint = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class OperationalWebhookEndpoint {
    constructor(config){
        this.api = new openapi_1.WebhookEndpointApi(config);
    }
    list(options) {
        var _a;
        const iterator = (_a = options === null || options === void 0 ? void 0 : options.iterator) !== null && _a !== void 0 ? _a : undefined;
        return this.api.listOperationalWebhookEndpoints(Object.assign(Object.assign({}, options), {
            iterator
        }));
    }
    create(endpointIn, options) {
        return this.api.createOperationalWebhookEndpoint(Object.assign({
            operationalWebhookEndpointIn: endpointIn
        }, options));
    }
    get(endpointId) {
        return this.api.getOperationalWebhookEndpoint({
            endpointId
        });
    }
    update(endpointId, endpointUpdate) {
        return this.api.updateOperationalWebhookEndpoint({
            endpointId,
            operationalWebhookEndpointUpdate: endpointUpdate
        });
    }
    delete(endpointId) {
        return this.api.deleteOperationalWebhookEndpoint({
            endpointId
        });
    }
    getSecret(endpointId) {
        return this.api.getOperationalWebhookEndpointSecret({
            endpointId
        });
    }
    rotateSecret(endpointId, endpointSecretIn, options) {
        return this.api.rotateOperationalWebhookEndpointSecret(Object.assign({
            endpointId,
            operationalWebhookEndpointSecretIn: endpointSecretIn
        }, options));
    }
}
exports.OperationalWebhookEndpoint = OperationalWebhookEndpoint; //# sourceMappingURL=op_webhook_endpoint.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/statistics.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Statistics = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
class Statistics {
    constructor(config){
        this.api = new openapi_1.StatisticsApi(config);
    }
    aggregateAppStats(appUsageStatsIn, options) {
        return this.api.v1StatisticsAggregateAppStats(Object.assign({
            appUsageStatsIn
        }, options));
    }
    aggregateEventTypes() {
        return this.api.v1StatisticsAggregateEventTypes({});
    }
}
exports.Statistics = Statistics; //# sourceMappingURL=statistics.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/timing_safe_equal.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timingSafeEqual = void 0;
function assert(expr, msg = "") {
    if (!expr) {
        throw new Error(msg);
    }
}
function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    if (!(a instanceof DataView)) {
        a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
        b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    assert(a instanceof DataView);
    assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while(++i < length){
        out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
}
exports.timingSafeEqual = timingSafeEqual; //# sourceMappingURL=timing_safe_equal.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/webhook.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.Webhook = exports.WebhookVerificationError = void 0;
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/all.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)"), exports);
const timing_safe_equal_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/timing_safe_equal.js [app-rsc] (ecmascript)");
const base64 = __turbopack_require__("[project]/node_modules/.pnpm/@stablelib+base64@1.0.1/node_modules/@stablelib/base64/lib/base64.js [app-rsc] (ecmascript)");
const sha256 = __turbopack_require__("[project]/node_modules/.pnpm/fast-sha256@1.3.0/node_modules/fast-sha256/sha256.js [app-rsc] (ecmascript)");
const WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60;
class ExtendableError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, ExtendableError.prototype);
        this.name = "ExtendableError";
        this.stack = new Error(message).stack;
    }
}
class WebhookVerificationError extends ExtendableError {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, WebhookVerificationError.prototype);
        this.name = "WebhookVerificationError";
    }
}
exports.WebhookVerificationError = WebhookVerificationError;
class Webhook {
    constructor(secret, options){
        if (!secret) {
            throw new Error("Secret can't be empty.");
        }
        if ((options === null || options === void 0 ? void 0 : options.format) === "raw") {
            if (secret instanceof Uint8Array) {
                this.key = secret;
            } else {
                this.key = Uint8Array.from(secret, (c)=>c.charCodeAt(0));
            }
        } else {
            if (typeof secret !== "string") {
                throw new Error("Expected secret to be of type string");
            }
            if (secret.startsWith(Webhook.prefix)) {
                secret = secret.substring(Webhook.prefix.length);
            }
            this.key = base64.decode(secret);
        }
    }
    verify(payload, headers_) {
        const headers = {};
        for (const key of Object.keys(headers_)){
            headers[key.toLowerCase()] = headers_[key];
        }
        let msgId = headers["svix-id"];
        let msgSignature = headers["svix-signature"];
        let msgTimestamp = headers["svix-timestamp"];
        if (!msgSignature || !msgId || !msgTimestamp) {
            msgId = headers["webhook-id"];
            msgSignature = headers["webhook-signature"];
            msgTimestamp = headers["webhook-timestamp"];
            if (!msgSignature || !msgId || !msgTimestamp) {
                throw new WebhookVerificationError("Missing required headers");
            }
        }
        const timestamp = this.verifyTimestamp(msgTimestamp);
        const computedSignature = this.sign(msgId, timestamp, payload);
        const expectedSignature = computedSignature.split(",")[1];
        const passedSignatures = msgSignature.split(" ");
        const encoder = new globalThis.TextEncoder();
        for (const versionedSignature of passedSignatures){
            const [version, signature] = versionedSignature.split(",");
            if (version !== "v1") {
                continue;
            }
            if ((0, timing_safe_equal_1.timingSafeEqual)(encoder.encode(signature), encoder.encode(expectedSignature))) {
                return JSON.parse(payload.toString());
            }
        }
        throw new WebhookVerificationError("No matching signature found");
    }
    sign(msgId, timestamp, payload) {
        if (typeof payload === "string") {} else if (payload.constructor.name === "Buffer") {
            payload = payload.toString();
        } else {
            throw new Error("Expected payload to be of type string or Buffer. Please refer to https://docs.svix.com/receiving/verifying-payloads/how for more information.");
        }
        const encoder = new TextEncoder();
        const timestampNumber = Math.floor(timestamp.getTime() / 1000);
        const toSign = encoder.encode(`${msgId}.${timestampNumber}.${payload}`);
        const expectedSignature = base64.encode(sha256.hmac(this.key, toSign));
        return `v1,${expectedSignature}`;
    }
    verifyTimestamp(timestampHeader) {
        const now = Math.floor(Date.now() / 1000);
        const timestamp = parseInt(timestampHeader, 10);
        if (isNaN(timestamp)) {
            throw new WebhookVerificationError("Invalid Signature Headers");
        }
        if (now - timestamp > WEBHOOK_TOLERANCE_IN_SECONDS) {
            throw new WebhookVerificationError("Message timestamp too old");
        }
        if (timestamp > now + WEBHOOK_TOLERANCE_IN_SECONDS) {
            throw new WebhookVerificationError("Message timestamp too new");
        }
        return new Date(timestamp * 1000);
    }
}
exports.Webhook = Webhook;
Webhook.prefix = "whsec_"; //# sourceMappingURL=webhook.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.Svix = exports.messageInRaw = void 0;
const openapi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/index.js [app-rsc] (ecmascript)");
const authentication_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/authentication.js [app-rsc] (ecmascript)");
const application_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/application.js [app-rsc] (ecmascript)");
const background_task_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/background_task.js [app-rsc] (ecmascript)");
const endpoint_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/endpoint.js [app-rsc] (ecmascript)");
const event_type_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/event_type.js [app-rsc] (ecmascript)");
const integration_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/integration.js [app-rsc] (ecmascript)");
const message_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/message.js [app-rsc] (ecmascript)");
const message_attempt_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/message_attempt.js [app-rsc] (ecmascript)");
const op_webhook_endpoint_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/op_webhook_endpoint.js [app-rsc] (ecmascript)");
const statistics_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/statistics.js [app-rsc] (ecmascript)");
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/all.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/exception.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/webhook.js [app-rsc] (ecmascript)"), exports);
var message_2 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/api/message.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "messageInRaw", {
    enumerable: true,
    get: function() {
        return message_2.messageInRaw;
    }
});
const VERSION = "1.45.1";
class UserAgentMiddleware {
    pre(context) {
        context.setHeaderParam("User-Agent", `svix-libs/${VERSION}/javascript`);
        return Promise.resolve(context);
    }
    post(context) {
        return Promise.resolve(context);
    }
}
const REGIONS = [
    {
        region: "us",
        url: "https://api.us.svix.com"
    },
    {
        region: "eu",
        url: "https://api.eu.svix.com"
    },
    {
        region: "in",
        url: "https://api.in.svix.com"
    }
];
class Svix {
    constructor(token, options = {}){
        var _a, _b, _c;
        const regionalUrl = (_a = REGIONS.find((x)=>x.region === token.split(".")[1])) === null || _a === void 0 ? void 0 : _a.url;
        const baseUrl = (_c = (_b = options.serverUrl) !== null && _b !== void 0 ? _b : regionalUrl) !== null && _c !== void 0 ? _c : "https://api.svix.com";
        const baseServer = new openapi_1.ServerConfiguration(baseUrl, {});
        const bearerConfiguration = {
            tokenProvider: {
                getToken: ()=>token
            }
        };
        const config = (0, openapi_1.createConfiguration)({
            baseServer,
            promiseMiddleware: [
                new UserAgentMiddleware()
            ],
            authMethods: {
                HTTPBearer: bearerConfiguration
            }
        });
        this._configuration = config;
        this.authentication = new authentication_1.Authentication(config);
        this.application = new application_1.Application(config);
        this.endpoint = new endpoint_1.Endpoint(config);
        this.eventType = new event_type_1.EventType(config);
        this.integration = new integration_1.Integration(config);
        this.message = new message_1.Message(config);
        this.messageAttempt = new message_attempt_1.MessageAttempt(config);
        this.backgroundTask = new background_task_1.BackgroundTask(config);
        this.statistics = new statistics_1.Statistics(config);
        this.operationalWebhookEndpoint = new op_webhook_endpoint_1.OperationalWebhookEndpoint(config);
    }
}
exports.Svix = Svix; //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=6f523_svix_dist_af3843._.js.map