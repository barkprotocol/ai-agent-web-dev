module.exports = {

"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObservableWebhookEndpointApi = exports.ObservableTransformationTemplateApi = exports.ObservableStreamEventTypesApi = exports.ObservableStreamApi = exports.ObservableStatisticsApi = exports.ObservableMessageAttemptApi = exports.ObservableMessageApi = exports.ObservableIntegrationApi = exports.ObservableInboundApi = exports.ObservableHealthApi = exports.ObservableEventsApi = exports.ObservableEventTypeApi = exports.ObservableEnvironmentSettingsApi = exports.ObservableEnvironmentApi = exports.ObservableEndpointApi = exports.ObservableBroadcastApi = exports.ObservableBackgroundTasksApi = exports.ObservableAuthenticationApi = exports.ObservableApplicationApi = void 0;
const rxjsStub_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/rxjsStub.js [app-rsc] (ecmascript)");
const rxjsStub_2 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/rxjsStub.js [app-rsc] (ecmascript)");
const ApplicationApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/ApplicationApi.js [app-rsc] (ecmascript)");
class ObservableApplicationApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationApi_1.ApplicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationApi_1.ApplicationApiResponseProcessor();
    }
    getAppUsageStatsApiV1AppStatsUsageGetWithHttpInfo(since, until, limit, iterator, _options) {
        const requestContextPromise = this.requestFactory.getAppUsageStatsApiV1AppStatsUsageGet(since, until, limit, iterator, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.getAppUsageStatsApiV1AppStatsUsageGetWithHttpInfo(rsp)));
        }));
    }
    getAppUsageStatsApiV1AppStatsUsageGet(since, until, limit, iterator, _options) {
        return this.getAppUsageStatsApiV1AppStatsUsageGetWithHttpInfo(since, until, limit, iterator, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationCreateWithHttpInfo(applicationIn, getIfExists, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationCreate(applicationIn, getIfExists, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationCreateWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationCreate(applicationIn, getIfExists, idempotencyKey, _options) {
        return this.v1ApplicationCreateWithHttpInfo(applicationIn, getIfExists, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationDeleteWithHttpInfo(appId, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationDelete(appId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationDeleteWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationDelete(appId, _options) {
        return this.v1ApplicationDeleteWithHttpInfo(appId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationGetWithHttpInfo(appId, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationGet(appId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationGetWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationGet(appId, _options) {
        return this.v1ApplicationGetWithHttpInfo(appId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationGetStatsWithHttpInfo(since, until, appId, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationGetStats(since, until, appId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationGetStatsWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationGetStats(since, until, appId, _options) {
        return this.v1ApplicationGetStatsWithHttpInfo(since, until, appId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationListWithHttpInfo(limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationList(limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationListWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationList(limit, iterator, order, _options) {
        return this.v1ApplicationListWithHttpInfo(limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationPatchWithHttpInfo(appId, applicationPatch, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationPatch(appId, applicationPatch, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationPatchWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationPatch(appId, applicationPatch, _options) {
        return this.v1ApplicationPatchWithHttpInfo(appId, applicationPatch, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1ApplicationUpdateWithHttpInfo(appId, applicationIn, _options) {
        const requestContextPromise = this.requestFactory.v1ApplicationUpdate(appId, applicationIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1ApplicationUpdateWithHttpInfo(rsp)));
        }));
    }
    v1ApplicationUpdate(appId, applicationIn, _options) {
        return this.v1ApplicationUpdateWithHttpInfo(appId, applicationIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableApplicationApi = ObservableApplicationApi;
const AuthenticationApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/AuthenticationApi.js [app-rsc] (ecmascript)");
class ObservableAuthenticationApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApi_1.AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApi_1.AuthenticationApiResponseProcessor();
    }
    v1AuthenticationAppPortalAccessWithHttpInfo(appId, appPortalAccessIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationAppPortalAccess(appId, appPortalAccessIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationAppPortalAccessWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationAppPortalAccess(appId, appPortalAccessIn, idempotencyKey, _options) {
        return this.v1AuthenticationAppPortalAccessWithHttpInfo(appId, appPortalAccessIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationCreateMessageTokenWithHttpInfo(appId, createTokenIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationCreateMessageToken(appId, createTokenIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationCreateMessageTokenWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationCreateMessageToken(appId, createTokenIn, idempotencyKey, _options) {
        return this.v1AuthenticationCreateMessageTokenWithHttpInfo(appId, createTokenIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationDashboardAccessWithHttpInfo(appId, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationDashboardAccess(appId, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationDashboardAccessWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationDashboardAccess(appId, idempotencyKey, _options) {
        return this.v1AuthenticationDashboardAccessWithHttpInfo(appId, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationExchangeOneTimeTokenWithHttpInfo(oneTimeTokenIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationExchangeOneTimeToken(oneTimeTokenIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationExchangeOneTimeTokenWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationExchangeOneTimeToken(oneTimeTokenIn, idempotencyKey, _options) {
        return this.v1AuthenticationExchangeOneTimeTokenWithHttpInfo(oneTimeTokenIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationExpireAllWithHttpInfo(appId, applicationTokenExpireIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationExpireAll(appId, applicationTokenExpireIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationExpireAllWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationExpireAll(appId, applicationTokenExpireIn, idempotencyKey, _options) {
        return this.v1AuthenticationExpireAllWithHttpInfo(appId, applicationTokenExpireIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationGetPollerTokenWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationGetPollerToken(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationGetPollerTokenWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationGetPollerToken(appId, endpointId, _options) {
        return this.v1AuthenticationGetPollerTokenWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationLogoutWithHttpInfo(idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationLogout(idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationLogoutWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationLogout(idempotencyKey, _options) {
        return this.v1AuthenticationLogoutWithHttpInfo(idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1AuthenticationRotatePollerTokenWithHttpInfo(appId, endpointId, rotatePollerTokenIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1AuthenticationRotatePollerToken(appId, endpointId, rotatePollerTokenIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1AuthenticationRotatePollerTokenWithHttpInfo(rsp)));
        }));
    }
    v1AuthenticationRotatePollerToken(appId, endpointId, rotatePollerTokenIn, idempotencyKey, _options) {
        return this.v1AuthenticationRotatePollerTokenWithHttpInfo(appId, endpointId, rotatePollerTokenIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableAuthenticationApi = ObservableAuthenticationApi;
const BackgroundTasksApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/BackgroundTasksApi.js [app-rsc] (ecmascript)");
class ObservableBackgroundTasksApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BackgroundTasksApi_1.BackgroundTasksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BackgroundTasksApi_1.BackgroundTasksApiResponseProcessor();
    }
    getBackgroundTaskWithHttpInfo(taskId, _options) {
        const requestContextPromise = this.requestFactory.getBackgroundTask(taskId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.getBackgroundTaskWithHttpInfo(rsp)));
        }));
    }
    getBackgroundTask(taskId, _options) {
        return this.getBackgroundTaskWithHttpInfo(taskId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    listBackgroundTasksWithHttpInfo(status, task, limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.listBackgroundTasks(status, task, limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.listBackgroundTasksWithHttpInfo(rsp)));
        }));
    }
    listBackgroundTasks(status, task, limit, iterator, order, _options) {
        return this.listBackgroundTasksWithHttpInfo(status, task, limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableBackgroundTasksApi = ObservableBackgroundTasksApi;
const BroadcastApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/BroadcastApi.js [app-rsc] (ecmascript)");
class ObservableBroadcastApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BroadcastApi_1.BroadcastApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BroadcastApi_1.BroadcastApiResponseProcessor();
    }
    createBroadcastMessageWithHttpInfo(messageBroadcastIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.createBroadcastMessage(messageBroadcastIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.createBroadcastMessageWithHttpInfo(rsp)));
        }));
    }
    createBroadcastMessage(messageBroadcastIn, idempotencyKey, _options) {
        return this.createBroadcastMessageWithHttpInfo(messageBroadcastIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableBroadcastApi = ObservableBroadcastApi;
const EndpointApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EndpointApi.js [app-rsc] (ecmascript)");
class ObservableEndpointApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EndpointApi_1.EndpointApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EndpointApi_1.EndpointApiResponseProcessor();
    }
    v1EndpointCreateWithHttpInfo(appId, endpointIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointCreate(appId, endpointIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointCreateWithHttpInfo(rsp)));
        }));
    }
    v1EndpointCreate(appId, endpointIn, idempotencyKey, _options) {
        return this.v1EndpointCreateWithHttpInfo(appId, endpointIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointDeleteWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointDelete(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointDeleteWithHttpInfo(rsp)));
        }));
    }
    v1EndpointDelete(appId, endpointId, _options) {
        return this.v1EndpointDeleteWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointDeleteMtlsConfigWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointDeleteMtlsConfig(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointDeleteMtlsConfigWithHttpInfo(rsp)));
        }));
    }
    v1EndpointDeleteMtlsConfig(appId, endpointId, _options) {
        return this.v1EndpointDeleteMtlsConfigWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointDeleteOauthConfigWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointDeleteOauthConfig(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointDeleteOauthConfigWithHttpInfo(rsp)));
        }));
    }
    v1EndpointDeleteOauthConfig(appId, endpointId, _options) {
        return this.v1EndpointDeleteOauthConfigWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointGetWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointGet(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointGetWithHttpInfo(rsp)));
        }));
    }
    v1EndpointGet(appId, endpointId, _options) {
        return this.v1EndpointGetWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointGetHeadersWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointGetHeaders(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointGetHeadersWithHttpInfo(rsp)));
        }));
    }
    v1EndpointGetHeaders(appId, endpointId, _options) {
        return this.v1EndpointGetHeadersWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointGetSecretWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointGetSecret(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointGetSecretWithHttpInfo(rsp)));
        }));
    }
    v1EndpointGetSecret(appId, endpointId, _options) {
        return this.v1EndpointGetSecretWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointGetStatsWithHttpInfo(appId, endpointId, since, until, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointGetStats(appId, endpointId, since, until, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointGetStatsWithHttpInfo(rsp)));
        }));
    }
    v1EndpointGetStats(appId, endpointId, since, until, _options) {
        return this.v1EndpointGetStatsWithHttpInfo(appId, endpointId, since, until, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointListWithHttpInfo(appId, limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointList(appId, limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointListWithHttpInfo(rsp)));
        }));
    }
    v1EndpointList(appId, limit, iterator, order, _options) {
        return this.v1EndpointListWithHttpInfo(appId, limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointPatchWithHttpInfo(appId, endpointId, endpointPatch, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointPatch(appId, endpointId, endpointPatch, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointPatchWithHttpInfo(rsp)));
        }));
    }
    v1EndpointPatch(appId, endpointId, endpointPatch, _options) {
        return this.v1EndpointPatchWithHttpInfo(appId, endpointId, endpointPatch, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointPatchHeadersWithHttpInfo(appId, endpointId, endpointHeadersPatchIn, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointPatchHeaders(appId, endpointId, endpointHeadersPatchIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointPatchHeadersWithHttpInfo(rsp)));
        }));
    }
    v1EndpointPatchHeaders(appId, endpointId, endpointHeadersPatchIn, _options) {
        return this.v1EndpointPatchHeadersWithHttpInfo(appId, endpointId, endpointHeadersPatchIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointRecoverWithHttpInfo(appId, endpointId, recoverIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointRecover(appId, endpointId, recoverIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointRecoverWithHttpInfo(rsp)));
        }));
    }
    v1EndpointRecover(appId, endpointId, recoverIn, idempotencyKey, _options) {
        return this.v1EndpointRecoverWithHttpInfo(appId, endpointId, recoverIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointReplayMissingWithHttpInfo(appId, endpointId, replayIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointReplayMissing(appId, endpointId, replayIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointReplayMissingWithHttpInfo(rsp)));
        }));
    }
    v1EndpointReplayMissing(appId, endpointId, replayIn, idempotencyKey, _options) {
        return this.v1EndpointReplayMissingWithHttpInfo(appId, endpointId, replayIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointRotateSecretWithHttpInfo(appId, endpointId, endpointSecretRotateIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointRotateSecret(appId, endpointId, endpointSecretRotateIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointRotateSecretWithHttpInfo(rsp)));
        }));
    }
    v1EndpointRotateSecret(appId, endpointId, endpointSecretRotateIn, idempotencyKey, _options) {
        return this.v1EndpointRotateSecretWithHttpInfo(appId, endpointId, endpointSecretRotateIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointSendExampleWithHttpInfo(appId, endpointId, eventExampleIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointSendExample(appId, endpointId, eventExampleIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointSendExampleWithHttpInfo(rsp)));
        }));
    }
    v1EndpointSendExample(appId, endpointId, eventExampleIn, idempotencyKey, _options) {
        return this.v1EndpointSendExampleWithHttpInfo(appId, endpointId, eventExampleIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointTransformationGetWithHttpInfo(appId, endpointId, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointTransformationGet(appId, endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointTransformationGetWithHttpInfo(rsp)));
        }));
    }
    v1EndpointTransformationGet(appId, endpointId, _options) {
        return this.v1EndpointTransformationGetWithHttpInfo(appId, endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointTransformationPartialUpdateWithHttpInfo(appId, endpointId, endpointTransformationIn, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointTransformationPartialUpdate(appId, endpointId, endpointTransformationIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointTransformationPartialUpdateWithHttpInfo(rsp)));
        }));
    }
    v1EndpointTransformationPartialUpdate(appId, endpointId, endpointTransformationIn, _options) {
        return this.v1EndpointTransformationPartialUpdateWithHttpInfo(appId, endpointId, endpointTransformationIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointTransformationSimulateWithHttpInfo(appId, endpointId, endpointTransformationSimulateIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointTransformationSimulate(appId, endpointId, endpointTransformationSimulateIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointTransformationSimulateWithHttpInfo(rsp)));
        }));
    }
    v1EndpointTransformationSimulate(appId, endpointId, endpointTransformationSimulateIn, idempotencyKey, _options) {
        return this.v1EndpointTransformationSimulateWithHttpInfo(appId, endpointId, endpointTransformationSimulateIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointUpdateWithHttpInfo(appId, endpointId, endpointUpdate, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointUpdate(appId, endpointId, endpointUpdate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointUpdateWithHttpInfo(rsp)));
        }));
    }
    v1EndpointUpdate(appId, endpointId, endpointUpdate, _options) {
        return this.v1EndpointUpdateWithHttpInfo(appId, endpointId, endpointUpdate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointUpdateHeadersWithHttpInfo(appId, endpointId, endpointHeadersIn, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointUpdateHeaders(appId, endpointId, endpointHeadersIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointUpdateHeadersWithHttpInfo(rsp)));
        }));
    }
    v1EndpointUpdateHeaders(appId, endpointId, endpointHeadersIn, _options) {
        return this.v1EndpointUpdateHeadersWithHttpInfo(appId, endpointId, endpointHeadersIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointUpdateMtlsConfigWithHttpInfo(appId, endpointId, endpointMtlsConfigIn, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointUpdateMtlsConfig(appId, endpointId, endpointMtlsConfigIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointUpdateMtlsConfigWithHttpInfo(rsp)));
        }));
    }
    v1EndpointUpdateMtlsConfig(appId, endpointId, endpointMtlsConfigIn, _options) {
        return this.v1EndpointUpdateMtlsConfigWithHttpInfo(appId, endpointId, endpointMtlsConfigIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EndpointUpdateOauthConfigWithHttpInfo(appId, endpointId, endpointOauthConfigIn, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointUpdateOauthConfig(appId, endpointId, endpointOauthConfigIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointUpdateOauthConfigWithHttpInfo(rsp)));
        }));
    }
    v1EndpointUpdateOauthConfig(appId, endpointId, endpointOauthConfigIn, _options) {
        return this.v1EndpointUpdateOauthConfigWithHttpInfo(appId, endpointId, endpointOauthConfigIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1SinkCreateWithHttpInfo(appId, sinkIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1SinkCreate(appId, sinkIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1SinkCreateWithHttpInfo(rsp)));
        }));
    }
    v1SinkCreate(appId, sinkIn, idempotencyKey, _options) {
        return this.v1SinkCreateWithHttpInfo(appId, sinkIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1SinkGetWithHttpInfo(appId, sinkId, _options) {
        const requestContextPromise = this.requestFactory.v1SinkGet(appId, sinkId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1SinkGetWithHttpInfo(rsp)));
        }));
    }
    v1SinkGet(appId, sinkId, _options) {
        return this.v1SinkGetWithHttpInfo(appId, sinkId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1SinkListWithHttpInfo(appId, limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1SinkList(appId, limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1SinkListWithHttpInfo(rsp)));
        }));
    }
    v1SinkList(appId, limit, iterator, order, _options) {
        return this.v1SinkListWithHttpInfo(appId, limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableEndpointApi = ObservableEndpointApi;
const EnvironmentApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EnvironmentApi.js [app-rsc] (ecmascript)");
class ObservableEnvironmentApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentApi_1.EnvironmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentApi_1.EnvironmentApiResponseProcessor();
    }
    v1EnvironmentExportWithHttpInfo(idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EnvironmentExport(idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EnvironmentExportWithHttpInfo(rsp)));
        }));
    }
    v1EnvironmentExport(idempotencyKey, _options) {
        return this.v1EnvironmentExportWithHttpInfo(idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EnvironmentImportWithHttpInfo(environmentIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EnvironmentImport(environmentIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EnvironmentImportWithHttpInfo(rsp)));
        }));
    }
    v1EnvironmentImport(environmentIn, idempotencyKey, _options) {
        return this.v1EnvironmentImportWithHttpInfo(environmentIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableEnvironmentApi = ObservableEnvironmentApi;
const EnvironmentSettingsApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EnvironmentSettingsApi.js [app-rsc] (ecmascript)");
class ObservableEnvironmentSettingsApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentSettingsApi_1.EnvironmentSettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentSettingsApi_1.EnvironmentSettingsApiResponseProcessor();
    }
    v1EnvironmentGetSettingsWithHttpInfo(_options) {
        const requestContextPromise = this.requestFactory.v1EnvironmentGetSettings(_options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EnvironmentGetSettingsWithHttpInfo(rsp)));
        }));
    }
    v1EnvironmentGetSettings(_options) {
        return this.v1EnvironmentGetSettingsWithHttpInfo(_options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableEnvironmentSettingsApi = ObservableEnvironmentSettingsApi;
const EventTypeApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EventTypeApi.js [app-rsc] (ecmascript)");
class ObservableEventTypeApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventTypeApi_1.EventTypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventTypeApi_1.EventTypeApiResponseProcessor();
    }
    v1EventTypeCreateWithHttpInfo(eventTypeIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeCreate(eventTypeIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeCreateWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeCreate(eventTypeIn, idempotencyKey, _options) {
        return this.v1EventTypeCreateWithHttpInfo(eventTypeIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeDeleteWithHttpInfo(eventTypeName, expunge, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeDelete(eventTypeName, expunge, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeDeleteWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeDelete(eventTypeName, expunge, _options) {
        return this.v1EventTypeDeleteWithHttpInfo(eventTypeName, expunge, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeExportOpenapiWithHttpInfo(idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeExportOpenapi(idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeExportOpenapiWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeExportOpenapi(idempotencyKey, _options) {
        return this.v1EventTypeExportOpenapiWithHttpInfo(idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeGenerateExampleWithHttpInfo(eventTypeSchemaIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeGenerateExample(eventTypeSchemaIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeGenerateExampleWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeGenerateExample(eventTypeSchemaIn, idempotencyKey, _options) {
        return this.v1EventTypeGenerateExampleWithHttpInfo(eventTypeSchemaIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeGetWithHttpInfo(eventTypeName, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeGet(eventTypeName, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeGetWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeGet(eventTypeName, _options) {
        return this.v1EventTypeGetWithHttpInfo(eventTypeName, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeGetRetryScheduleWithHttpInfo(eventTypeName, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeGetRetrySchedule(eventTypeName, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeGetRetryScheduleWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeGetRetrySchedule(eventTypeName, _options) {
        return this.v1EventTypeGetRetryScheduleWithHttpInfo(eventTypeName, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeImportOpenapiWithHttpInfo(eventTypeImportOpenApiIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeImportOpenapi(eventTypeImportOpenApiIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeImportOpenapiWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeImportOpenapi(eventTypeImportOpenApiIn, idempotencyKey, _options) {
        return this.v1EventTypeImportOpenapiWithHttpInfo(eventTypeImportOpenApiIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeListWithHttpInfo(limit, iterator, order, includeArchived, withContent, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeList(limit, iterator, order, includeArchived, withContent, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeListWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeList(limit, iterator, order, includeArchived, withContent, _options) {
        return this.v1EventTypeListWithHttpInfo(limit, iterator, order, includeArchived, withContent, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypePatchWithHttpInfo(eventTypeName, eventTypePatch, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypePatch(eventTypeName, eventTypePatch, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypePatchWithHttpInfo(rsp)));
        }));
    }
    v1EventTypePatch(eventTypeName, eventTypePatch, _options) {
        return this.v1EventTypePatchWithHttpInfo(eventTypeName, eventTypePatch, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeUpdateWithHttpInfo(eventTypeName, eventTypeUpdate, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeUpdate(eventTypeName, eventTypeUpdate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeUpdateWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeUpdate(eventTypeName, eventTypeUpdate, _options) {
        return this.v1EventTypeUpdateWithHttpInfo(eventTypeName, eventTypeUpdate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventTypeUpdateRetryScheduleWithHttpInfo(eventTypeName, retryScheduleInOut, _options) {
        const requestContextPromise = this.requestFactory.v1EventTypeUpdateRetrySchedule(eventTypeName, retryScheduleInOut, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventTypeUpdateRetryScheduleWithHttpInfo(rsp)));
        }));
    }
    v1EventTypeUpdateRetrySchedule(eventTypeName, retryScheduleInOut, _options) {
        return this.v1EventTypeUpdateRetryScheduleWithHttpInfo(eventTypeName, retryScheduleInOut, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableEventTypeApi = ObservableEventTypeApi;
const EventsApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/EventsApi.js [app-rsc] (ecmascript)");
class ObservableEventsApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApi_1.EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApi_1.EventsApiResponseProcessor();
    }
    v1EventsWithHttpInfo(limit, iterator, eventTypes, channels, after, _options) {
        const requestContextPromise = this.requestFactory.v1Events(limit, iterator, eventTypes, channels, after, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventsWithHttpInfo(rsp)));
        }));
    }
    v1Events(limit, iterator, eventTypes, channels, after, _options) {
        return this.v1EventsWithHttpInfo(limit, iterator, eventTypes, channels, after, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableEventsApi = ObservableEventsApi;
const HealthApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/HealthApi.js [app-rsc] (ecmascript)");
class ObservableHealthApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthApi_1.HealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthApi_1.HealthApiResponseProcessor();
    }
    v1HealthGetWithHttpInfo(_options) {
        const requestContextPromise = this.requestFactory.v1HealthGet(_options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1HealthGetWithHttpInfo(rsp)));
        }));
    }
    v1HealthGet(_options) {
        return this.v1HealthGetWithHttpInfo(_options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableHealthApi = ObservableHealthApi;
const InboundApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/InboundApi.js [app-rsc] (ecmascript)");
class ObservableInboundApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboundApi_1.InboundApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboundApi_1.InboundApiResponseProcessor();
    }
    v1InboundMsgWithHttpInfo(appId, inboundToken, body, eventType, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1InboundMsg(appId, inboundToken, body, eventType, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1InboundMsgWithHttpInfo(rsp)));
        }));
    }
    v1InboundMsg(appId, inboundToken, body, eventType, idempotencyKey, _options) {
        return this.v1InboundMsgWithHttpInfo(appId, inboundToken, body, eventType, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1InboundRotateUrlWithHttpInfo(appId, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1InboundRotateUrl(appId, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1InboundRotateUrlWithHttpInfo(rsp)));
        }));
    }
    v1InboundRotateUrl(appId, idempotencyKey, _options) {
        return this.v1InboundRotateUrlWithHttpInfo(appId, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableInboundApi = ObservableInboundApi;
const IntegrationApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/IntegrationApi.js [app-rsc] (ecmascript)");
class ObservableIntegrationApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IntegrationApi_1.IntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IntegrationApi_1.IntegrationApiResponseProcessor();
    }
    v1IntegrationCreateWithHttpInfo(appId, integrationIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationCreate(appId, integrationIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationCreateWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationCreate(appId, integrationIn, idempotencyKey, _options) {
        return this.v1IntegrationCreateWithHttpInfo(appId, integrationIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1IntegrationDeleteWithHttpInfo(appId, integId, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationDelete(appId, integId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationDeleteWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationDelete(appId, integId, _options) {
        return this.v1IntegrationDeleteWithHttpInfo(appId, integId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1IntegrationGetWithHttpInfo(appId, integId, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationGet(appId, integId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationGetWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationGet(appId, integId, _options) {
        return this.v1IntegrationGetWithHttpInfo(appId, integId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1IntegrationGetKeyWithHttpInfo(appId, integId, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationGetKey(appId, integId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationGetKeyWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationGetKey(appId, integId, _options) {
        return this.v1IntegrationGetKeyWithHttpInfo(appId, integId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1IntegrationListWithHttpInfo(appId, limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationList(appId, limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationListWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationList(appId, limit, iterator, order, _options) {
        return this.v1IntegrationListWithHttpInfo(appId, limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1IntegrationRotateKeyWithHttpInfo(appId, integId, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationRotateKey(appId, integId, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationRotateKeyWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationRotateKey(appId, integId, idempotencyKey, _options) {
        return this.v1IntegrationRotateKeyWithHttpInfo(appId, integId, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1IntegrationUpdateWithHttpInfo(appId, integId, integrationUpdate, _options) {
        const requestContextPromise = this.requestFactory.v1IntegrationUpdate(appId, integId, integrationUpdate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1IntegrationUpdateWithHttpInfo(rsp)));
        }));
    }
    v1IntegrationUpdate(appId, integId, integrationUpdate, _options) {
        return this.v1IntegrationUpdateWithHttpInfo(appId, integId, integrationUpdate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableIntegrationApi = ObservableIntegrationApi;
const MessageApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/MessageApi.js [app-rsc] (ecmascript)");
class ObservableMessageApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessageApi_1.MessageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessageApi_1.MessageApiResponseProcessor();
    }
    createMessageAttemptForEndpointWithHttpInfo(appId, endpointId, messageIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.createMessageAttemptForEndpoint(appId, endpointId, messageIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.createMessageAttemptForEndpointWithHttpInfo(rsp)));
        }));
    }
    createMessageAttemptForEndpoint(appId, endpointId, messageIn, idempotencyKey, _options) {
        return this.createMessageAttemptForEndpointWithHttpInfo(appId, endpointId, messageIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1EventsPublicWithHttpInfo(appId, sinkId, limit, iterator, eventType, channel, after, _options) {
        const requestContextPromise = this.requestFactory.v1EventsPublic(appId, sinkId, limit, iterator, eventType, channel, after, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EventsPublicWithHttpInfo(rsp)));
        }));
    }
    v1EventsPublic(appId, sinkId, limit, iterator, eventType, channel, after, _options) {
        return this.v1EventsPublicWithHttpInfo(appId, sinkId, limit, iterator, eventType, channel, after, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageCreateWithHttpInfo(appId, messageIn, withContent, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1MessageCreate(appId, messageIn, withContent, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageCreateWithHttpInfo(rsp)));
        }));
    }
    v1MessageCreate(appId, messageIn, withContent, idempotencyKey, _options) {
        return this.v1MessageCreateWithHttpInfo(appId, messageIn, withContent, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageEventsWithHttpInfo(appId, limit, iterator, eventTypes, channels, after, _options) {
        const requestContextPromise = this.requestFactory.v1MessageEvents(appId, limit, iterator, eventTypes, channels, after, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageEventsWithHttpInfo(rsp)));
        }));
    }
    v1MessageEvents(appId, limit, iterator, eventTypes, channels, after, _options) {
        return this.v1MessageEventsWithHttpInfo(appId, limit, iterator, eventTypes, channels, after, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageEventsSubscriptionWithHttpInfo(appId, subscriptionId, limit, iterator, eventTypes, channels, after, _options) {
        const requestContextPromise = this.requestFactory.v1MessageEventsSubscription(appId, subscriptionId, limit, iterator, eventTypes, channels, after, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageEventsSubscriptionWithHttpInfo(rsp)));
        }));
    }
    v1MessageEventsSubscription(appId, subscriptionId, limit, iterator, eventTypes, channels, after, _options) {
        return this.v1MessageEventsSubscriptionWithHttpInfo(appId, subscriptionId, limit, iterator, eventTypes, channels, after, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageEventsSubscriptionCreateTokenWithHttpInfo(appId, subscriptionId, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1MessageEventsSubscriptionCreateToken(appId, subscriptionId, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageEventsSubscriptionCreateTokenWithHttpInfo(rsp)));
        }));
    }
    v1MessageEventsSubscriptionCreateToken(appId, subscriptionId, idempotencyKey, _options) {
        return this.v1MessageEventsSubscriptionCreateTokenWithHttpInfo(appId, subscriptionId, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageExpungeContentWithHttpInfo(appId, msgId, _options) {
        const requestContextPromise = this.requestFactory.v1MessageExpungeContent(appId, msgId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageExpungeContentWithHttpInfo(rsp)));
        }));
    }
    v1MessageExpungeContent(appId, msgId, _options) {
        return this.v1MessageExpungeContentWithHttpInfo(appId, msgId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageGetWithHttpInfo(appId, msgId, withContent, _options) {
        const requestContextPromise = this.requestFactory.v1MessageGet(appId, msgId, withContent, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageGetWithHttpInfo(rsp)));
        }));
    }
    v1MessageGet(appId, msgId, withContent, _options) {
        return this.v1MessageGetWithHttpInfo(appId, msgId, withContent, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageGetRawPayloadWithHttpInfo(appId, msgId, _options) {
        const requestContextPromise = this.requestFactory.v1MessageGetRawPayload(appId, msgId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageGetRawPayloadWithHttpInfo(rsp)));
        }));
    }
    v1MessageGetRawPayload(appId, msgId, _options) {
        return this.v1MessageGetRawPayloadWithHttpInfo(appId, msgId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageListWithHttpInfo(appId, limit, iterator, channel, before, after, withContent, tag, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageList(appId, limit, iterator, channel, before, after, withContent, tag, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageListWithHttpInfo(rsp)));
        }));
    }
    v1MessageList(appId, limit, iterator, channel, before, after, withContent, tag, eventTypes, _options) {
        return this.v1MessageListWithHttpInfo(appId, limit, iterator, channel, before, after, withContent, tag, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableMessageApi = ObservableMessageApi;
const MessageAttemptApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/MessageAttemptApi.js [app-rsc] (ecmascript)");
class ObservableMessageAttemptApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessageAttemptApi_1.MessageAttemptApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessageAttemptApi_1.MessageAttemptApiResponseProcessor();
    }
    v1MessageAttemptCountByEndpointWithHttpInfo(appId, endpointId, status, statusCodeClass, channel, tag, before, after, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptCountByEndpoint(appId, endpointId, status, statusCodeClass, channel, tag, before, after, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptCountByEndpointWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptCountByEndpoint(appId, endpointId, status, statusCodeClass, channel, tag, before, after, eventTypes, _options) {
        return this.v1MessageAttemptCountByEndpointWithHttpInfo(appId, endpointId, status, statusCodeClass, channel, tag, before, after, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptExpungeContentWithHttpInfo(appId, msgId, attemptId, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptExpungeContent(appId, msgId, attemptId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptExpungeContentWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptExpungeContent(appId, msgId, attemptId, _options) {
        return this.v1MessageAttemptExpungeContentWithHttpInfo(appId, msgId, attemptId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptGetWithHttpInfo(appId, msgId, attemptId, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptGet(appId, msgId, attemptId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptGetWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptGet(appId, msgId, attemptId, _options) {
        return this.v1MessageAttemptGetWithHttpInfo(appId, msgId, attemptId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptGetHeadersWithHttpInfo(appId, msgId, attemptId, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptGetHeaders(appId, msgId, attemptId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptGetHeadersWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptGetHeaders(appId, msgId, attemptId, _options) {
        return this.v1MessageAttemptGetHeadersWithHttpInfo(appId, msgId, attemptId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptListAttemptedDestinationsWithHttpInfo(appId, msgId, limit, iterator, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptListAttemptedDestinations(appId, msgId, limit, iterator, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptListAttemptedDestinationsWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptListAttemptedDestinations(appId, msgId, limit, iterator, _options) {
        return this.v1MessageAttemptListAttemptedDestinationsWithHttpInfo(appId, msgId, limit, iterator, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptListAttemptedMessagesWithHttpInfo(appId, endpointId, limit, iterator, channel, tag, status, before, after, withContent, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptListAttemptedMessages(appId, endpointId, limit, iterator, channel, tag, status, before, after, withContent, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptListAttemptedMessagesWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptListAttemptedMessages(appId, endpointId, limit, iterator, channel, tag, status, before, after, withContent, eventTypes, _options) {
        return this.v1MessageAttemptListAttemptedMessagesWithHttpInfo(appId, endpointId, limit, iterator, channel, tag, status, before, after, withContent, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptListByEndpointWithHttpInfo(appId, endpointId, limit, iterator, status, statusCodeClass, channel, tag, before, after, withContent, withMsg, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptListByEndpoint(appId, endpointId, limit, iterator, status, statusCodeClass, channel, tag, before, after, withContent, withMsg, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptListByEndpointWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptListByEndpoint(appId, endpointId, limit, iterator, status, statusCodeClass, channel, tag, before, after, withContent, withMsg, eventTypes, _options) {
        return this.v1MessageAttemptListByEndpointWithHttpInfo(appId, endpointId, limit, iterator, status, statusCodeClass, channel, tag, before, after, withContent, withMsg, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptListByEndpointDeprecatedWithHttpInfo(appId, msgId, endpointId, limit, iterator, channel, tag, status, before, after, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptListByEndpointDeprecated(appId, msgId, endpointId, limit, iterator, channel, tag, status, before, after, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptListByEndpointDeprecatedWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptListByEndpointDeprecated(appId, msgId, endpointId, limit, iterator, channel, tag, status, before, after, eventTypes, _options) {
        return this.v1MessageAttemptListByEndpointDeprecatedWithHttpInfo(appId, msgId, endpointId, limit, iterator, channel, tag, status, before, after, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptListByMsgWithHttpInfo(appId, msgId, limit, iterator, status, statusCodeClass, channel, tag, endpointId, before, after, withContent, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptListByMsg(appId, msgId, limit, iterator, status, statusCodeClass, channel, tag, endpointId, before, after, withContent, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptListByMsgWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptListByMsg(appId, msgId, limit, iterator, status, statusCodeClass, channel, tag, endpointId, before, after, withContent, eventTypes, _options) {
        return this.v1MessageAttemptListByMsgWithHttpInfo(appId, msgId, limit, iterator, status, statusCodeClass, channel, tag, endpointId, before, after, withContent, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptListByMsgDeprecatedWithHttpInfo(appId, msgId, limit, iterator, endpointId, channel, tag, status, before, after, statusCodeClass, eventTypes, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptListByMsgDeprecated(appId, msgId, limit, iterator, endpointId, channel, tag, status, before, after, statusCodeClass, eventTypes, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptListByMsgDeprecatedWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptListByMsgDeprecated(appId, msgId, limit, iterator, endpointId, channel, tag, status, before, after, statusCodeClass, eventTypes, _options) {
        return this.v1MessageAttemptListByMsgDeprecatedWithHttpInfo(appId, msgId, limit, iterator, endpointId, channel, tag, status, before, after, statusCodeClass, eventTypes, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1MessageAttemptResendWithHttpInfo(appId, msgId, endpointId, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1MessageAttemptResend(appId, msgId, endpointId, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1MessageAttemptResendWithHttpInfo(rsp)));
        }));
    }
    v1MessageAttemptResend(appId, msgId, endpointId, idempotencyKey, _options) {
        return this.v1MessageAttemptResendWithHttpInfo(appId, msgId, endpointId, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableMessageAttemptApi = ObservableMessageAttemptApi;
const StatisticsApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/StatisticsApi.js [app-rsc] (ecmascript)");
class ObservableStatisticsApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatisticsApi_1.StatisticsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatisticsApi_1.StatisticsApiResponseProcessor();
    }
    v1StatisticsAggregateAppStatsWithHttpInfo(appUsageStatsIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1StatisticsAggregateAppStats(appUsageStatsIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StatisticsAggregateAppStatsWithHttpInfo(rsp)));
        }));
    }
    v1StatisticsAggregateAppStats(appUsageStatsIn, idempotencyKey, _options) {
        return this.v1StatisticsAggregateAppStatsWithHttpInfo(appUsageStatsIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StatisticsAggregateEventTypesWithHttpInfo(_options) {
        const requestContextPromise = this.requestFactory.v1StatisticsAggregateEventTypes(_options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StatisticsAggregateEventTypesWithHttpInfo(rsp)));
        }));
    }
    v1StatisticsAggregateEventTypes(_options) {
        return this.v1StatisticsAggregateEventTypesWithHttpInfo(_options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StatsAppAttemptsWithHttpInfo(appId, startDate, endDate, _options) {
        const requestContextPromise = this.requestFactory.v1StatsAppAttempts(appId, startDate, endDate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StatsAppAttemptsWithHttpInfo(rsp)));
        }));
    }
    v1StatsAppAttempts(appId, startDate, endDate, _options) {
        return this.v1StatsAppAttemptsWithHttpInfo(appId, startDate, endDate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StatsEndpointAttemptsWithHttpInfo(appId, endpointId, startDate, endDate, _options) {
        const requestContextPromise = this.requestFactory.v1StatsEndpointAttempts(appId, endpointId, startDate, endDate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StatsEndpointAttemptsWithHttpInfo(rsp)));
        }));
    }
    v1StatsEndpointAttempts(appId, endpointId, startDate, endDate, _options) {
        return this.v1StatsEndpointAttemptsWithHttpInfo(appId, endpointId, startDate, endDate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableStatisticsApi = ObservableStatisticsApi;
const StreamApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/StreamApi.js [app-rsc] (ecmascript)");
class ObservableStreamApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StreamApi_1.StreamApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StreamApi_1.StreamApiResponseProcessor();
    }
    v1StreamCreateWithHttpInfo(streamIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1StreamCreate(streamIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamCreateWithHttpInfo(rsp)));
        }));
    }
    v1StreamCreate(streamIn, idempotencyKey, _options) {
        return this.v1StreamCreateWithHttpInfo(streamIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamCreateEventsWithHttpInfo(streamId, createStreamIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1StreamCreateEvents(streamId, createStreamIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamCreateEventsWithHttpInfo(rsp)));
        }));
    }
    v1StreamCreateEvents(streamId, createStreamIn, idempotencyKey, _options) {
        return this.v1StreamCreateEventsWithHttpInfo(streamId, createStreamIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamDeleteWithHttpInfo(streamId, _options) {
        const requestContextPromise = this.requestFactory.v1StreamDelete(streamId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamDeleteWithHttpInfo(rsp)));
        }));
    }
    v1StreamDelete(streamId, _options) {
        return this.v1StreamDeleteWithHttpInfo(streamId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamEventsGetWithHttpInfo(streamId, limit, iterator, after, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventsGet(streamId, limit, iterator, after, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventsGetWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventsGet(streamId, limit, iterator, after, _options) {
        return this.v1StreamEventsGetWithHttpInfo(streamId, limit, iterator, after, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamGetWithHttpInfo(streamId, _options) {
        const requestContextPromise = this.requestFactory.v1StreamGet(streamId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamGetWithHttpInfo(rsp)));
        }));
    }
    v1StreamGet(streamId, _options) {
        return this.v1StreamGetWithHttpInfo(streamId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamListWithHttpInfo(limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1StreamList(limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamListWithHttpInfo(rsp)));
        }));
    }
    v1StreamList(limit, iterator, order, _options) {
        return this.v1StreamListWithHttpInfo(limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamPatchWithHttpInfo(streamId, streamPatch, _options) {
        const requestContextPromise = this.requestFactory.v1StreamPatch(streamId, streamPatch, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamPatchWithHttpInfo(rsp)));
        }));
    }
    v1StreamPatch(streamId, streamPatch, _options) {
        return this.v1StreamPatchWithHttpInfo(streamId, streamPatch, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamUpdateWithHttpInfo(streamId, streamIn, _options) {
        const requestContextPromise = this.requestFactory.v1StreamUpdate(streamId, streamIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamUpdateWithHttpInfo(rsp)));
        }));
    }
    v1StreamUpdate(streamId, streamIn, _options) {
        return this.v1StreamUpdateWithHttpInfo(streamId, streamIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableStreamApi = ObservableStreamApi;
const StreamEventTypesApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/StreamEventTypesApi.js [app-rsc] (ecmascript)");
class ObservableStreamEventTypesApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StreamEventTypesApi_1.StreamEventTypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StreamEventTypesApi_1.StreamEventTypesApiResponseProcessor();
    }
    v1StreamEventTypeCreateWithHttpInfo(streamEventTypeIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventTypeCreate(streamEventTypeIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventTypeCreateWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventTypeCreate(streamEventTypeIn, idempotencyKey, _options) {
        return this.v1StreamEventTypeCreateWithHttpInfo(streamEventTypeIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamEventTypeDeleteWithHttpInfo(name, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventTypeDelete(name, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventTypeDeleteWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventTypeDelete(name, _options) {
        return this.v1StreamEventTypeDeleteWithHttpInfo(name, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamEventTypeGetWithHttpInfo(name, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventTypeGet(name, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventTypeGetWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventTypeGet(name, _options) {
        return this.v1StreamEventTypeGetWithHttpInfo(name, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamEventTypeListWithHttpInfo(limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventTypeList(limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventTypeListWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventTypeList(limit, iterator, order, _options) {
        return this.v1StreamEventTypeListWithHttpInfo(limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamEventTypePatchWithHttpInfo(name, streamEventTypePatch, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventTypePatch(name, streamEventTypePatch, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventTypePatchWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventTypePatch(name, streamEventTypePatch, _options) {
        return this.v1StreamEventTypePatchWithHttpInfo(name, streamEventTypePatch, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1StreamEventTypeUpdateWithHttpInfo(name, streamEventTypeIn, _options) {
        const requestContextPromise = this.requestFactory.v1StreamEventTypeUpdate(name, streamEventTypeIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1StreamEventTypeUpdateWithHttpInfo(rsp)));
        }));
    }
    v1StreamEventTypeUpdate(name, streamEventTypeIn, _options) {
        return this.v1StreamEventTypeUpdateWithHttpInfo(name, streamEventTypeIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableStreamEventTypesApi = ObservableStreamEventTypesApi;
const TransformationTemplateApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/TransformationTemplateApi.js [app-rsc] (ecmascript)");
class ObservableTransformationTemplateApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransformationTemplateApi_1.TransformationTemplateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransformationTemplateApi_1.TransformationTemplateApiResponseProcessor();
    }
    v1EndpointUpdateHubspotOauthConfigWithHttpInfo(appId, endpointId, hubspotOauthConfigIn, _options) {
        const requestContextPromise = this.requestFactory.v1EndpointUpdateHubspotOauthConfig(appId, endpointId, hubspotOauthConfigIn, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1EndpointUpdateHubspotOauthConfigWithHttpInfo(rsp)));
        }));
    }
    v1EndpointUpdateHubspotOauthConfig(appId, endpointId, hubspotOauthConfigIn, _options) {
        return this.v1EndpointUpdateHubspotOauthConfigWithHttpInfo(appId, endpointId, hubspotOauthConfigIn, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateCreateWithHttpInfo(templateIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateCreate(templateIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateCreateWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateCreate(templateIn, idempotencyKey, _options) {
        return this.v1TransformationTemplateCreateWithHttpInfo(templateIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateDeleteWithHttpInfo(transformationTemplateId, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateDelete(transformationTemplateId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateDeleteWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateDelete(transformationTemplateId, _options) {
        return this.v1TransformationTemplateDeleteWithHttpInfo(transformationTemplateId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateGenerateWithHttpInfo(generateIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateGenerate(generateIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateGenerateWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateGenerate(generateIn, idempotencyKey, _options) {
        return this.v1TransformationTemplateGenerateWithHttpInfo(generateIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateGetWithHttpInfo(transformationTemplateId, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateGet(transformationTemplateId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateGetWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateGet(transformationTemplateId, _options) {
        return this.v1TransformationTemplateGetWithHttpInfo(transformationTemplateId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateListWithHttpInfo(limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateList(limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateListWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateList(limit, iterator, order, _options) {
        return this.v1TransformationTemplateListWithHttpInfo(limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateOauthDiscordWithHttpInfo(oAuthPayloadIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateOauthDiscord(oAuthPayloadIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateOauthDiscordWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateOauthDiscord(oAuthPayloadIn, idempotencyKey, _options) {
        return this.v1TransformationTemplateOauthDiscordWithHttpInfo(oAuthPayloadIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateOauthHubspotWithHttpInfo(oAuthPayloadIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateOauthHubspot(oAuthPayloadIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateOauthHubspotWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateOauthHubspot(oAuthPayloadIn, idempotencyKey, _options) {
        return this.v1TransformationTemplateOauthHubspotWithHttpInfo(oAuthPayloadIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateOauthSlackWithHttpInfo(oAuthPayloadIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateOauthSlack(oAuthPayloadIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateOauthSlackWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateOauthSlack(oAuthPayloadIn, idempotencyKey, _options) {
        return this.v1TransformationTemplateOauthSlackWithHttpInfo(oAuthPayloadIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplatePatchWithHttpInfo(transformationTemplateId, templatePatch, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplatePatch(transformationTemplateId, templatePatch, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplatePatchWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplatePatch(transformationTemplateId, templatePatch, _options) {
        return this.v1TransformationTemplatePatchWithHttpInfo(transformationTemplateId, templatePatch, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateSimulateWithHttpInfo(transformationSimulateIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateSimulate(transformationSimulateIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateSimulateWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateSimulate(transformationSimulateIn, idempotencyKey, _options) {
        return this.v1TransformationTemplateSimulateWithHttpInfo(transformationSimulateIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    v1TransformationTemplateUpdateWithHttpInfo(transformationTemplateId, templateUpdate, _options) {
        const requestContextPromise = this.requestFactory.v1TransformationTemplateUpdate(transformationTemplateId, templateUpdate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.v1TransformationTemplateUpdateWithHttpInfo(rsp)));
        }));
    }
    v1TransformationTemplateUpdate(transformationTemplateId, templateUpdate, _options) {
        return this.v1TransformationTemplateUpdateWithHttpInfo(transformationTemplateId, templateUpdate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableTransformationTemplateApi = ObservableTransformationTemplateApi;
const WebhookEndpointApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/apis/WebhookEndpointApi.js [app-rsc] (ecmascript)");
class ObservableWebhookEndpointApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookEndpointApi_1.WebhookEndpointApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookEndpointApi_1.WebhookEndpointApiResponseProcessor();
    }
    createOperationalWebhookEndpointWithHttpInfo(operationalWebhookEndpointIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.createOperationalWebhookEndpoint(operationalWebhookEndpointIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.createOperationalWebhookEndpointWithHttpInfo(rsp)));
        }));
    }
    createOperationalWebhookEndpoint(operationalWebhookEndpointIn, idempotencyKey, _options) {
        return this.createOperationalWebhookEndpointWithHttpInfo(operationalWebhookEndpointIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    deleteOperationalWebhookEndpointWithHttpInfo(endpointId, _options) {
        const requestContextPromise = this.requestFactory.deleteOperationalWebhookEndpoint(endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.deleteOperationalWebhookEndpointWithHttpInfo(rsp)));
        }));
    }
    deleteOperationalWebhookEndpoint(endpointId, _options) {
        return this.deleteOperationalWebhookEndpointWithHttpInfo(endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    getOperationalWebhookEndpointWithHttpInfo(endpointId, _options) {
        const requestContextPromise = this.requestFactory.getOperationalWebhookEndpoint(endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.getOperationalWebhookEndpointWithHttpInfo(rsp)));
        }));
    }
    getOperationalWebhookEndpoint(endpointId, _options) {
        return this.getOperationalWebhookEndpointWithHttpInfo(endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    getOperationalWebhookEndpointSecretWithHttpInfo(endpointId, _options) {
        const requestContextPromise = this.requestFactory.getOperationalWebhookEndpointSecret(endpointId, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.getOperationalWebhookEndpointSecretWithHttpInfo(rsp)));
        }));
    }
    getOperationalWebhookEndpointSecret(endpointId, _options) {
        return this.getOperationalWebhookEndpointSecretWithHttpInfo(endpointId, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    listOperationalWebhookEndpointsWithHttpInfo(limit, iterator, order, _options) {
        const requestContextPromise = this.requestFactory.listOperationalWebhookEndpoints(limit, iterator, order, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.listOperationalWebhookEndpointsWithHttpInfo(rsp)));
        }));
    }
    listOperationalWebhookEndpoints(limit, iterator, order, _options) {
        return this.listOperationalWebhookEndpointsWithHttpInfo(limit, iterator, order, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    rotateOperationalWebhookEndpointSecretWithHttpInfo(endpointId, operationalWebhookEndpointSecretIn, idempotencyKey, _options) {
        const requestContextPromise = this.requestFactory.rotateOperationalWebhookEndpointSecret(endpointId, operationalWebhookEndpointSecretIn, idempotencyKey, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.rotateOperationalWebhookEndpointSecretWithHttpInfo(rsp)));
        }));
    }
    rotateOperationalWebhookEndpointSecret(endpointId, operationalWebhookEndpointSecretIn, idempotencyKey, _options) {
        return this.rotateOperationalWebhookEndpointSecretWithHttpInfo(endpointId, operationalWebhookEndpointSecretIn, idempotencyKey, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
    updateOperationalWebhookEndpointWithHttpInfo(endpointId, operationalWebhookEndpointUpdate, _options) {
        const requestContextPromise = this.requestFactory.updateOperationalWebhookEndpoint(endpointId, operationalWebhookEndpointUpdate, _options);
        let middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        for (const middleware of this.configuration.middleware){
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, rxjsStub_2.mergeMap)((response)=>{
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware){
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)((rsp)=>middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)((rsp)=>this.responseProcessor.updateOperationalWebhookEndpointWithHttpInfo(rsp)));
        }));
    }
    updateOperationalWebhookEndpoint(endpointId, operationalWebhookEndpointUpdate, _options) {
        return this.updateOperationalWebhookEndpointWithHttpInfo(endpointId, operationalWebhookEndpointUpdate, _options).pipe((0, rxjsStub_2.map)((apiResponse)=>apiResponse.data));
    }
}
exports.ObservableWebhookEndpointApi = ObservableWebhookEndpointApi; //# sourceMappingURL=ObservableAPI.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObjectParamAPI.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObjectWebhookEndpointApi = exports.ObjectTransformationTemplateApi = exports.ObjectStreamEventTypesApi = exports.ObjectStreamApi = exports.ObjectStatisticsApi = exports.ObjectMessageAttemptApi = exports.ObjectMessageApi = exports.ObjectIntegrationApi = exports.ObjectInboundApi = exports.ObjectHealthApi = exports.ObjectEventsApi = exports.ObjectEventTypeApi = exports.ObjectEnvironmentSettingsApi = exports.ObjectEnvironmentApi = exports.ObjectEndpointApi = exports.ObjectBroadcastApi = exports.ObjectBackgroundTasksApi = exports.ObjectAuthenticationApi = exports.ObjectApplicationApi = void 0;
const ObservableAPI_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectApplicationApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_1.ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }
    getAppUsageStatsApiV1AppStatsUsageGetWithHttpInfo(param, options) {
        return this.api.getAppUsageStatsApiV1AppStatsUsageGetWithHttpInfo(param.since, param.until, param.limit, param.iterator, options).toPromise();
    }
    getAppUsageStatsApiV1AppStatsUsageGet(param, options) {
        return this.api.getAppUsageStatsApiV1AppStatsUsageGet(param.since, param.until, param.limit, param.iterator, options).toPromise();
    }
    v1ApplicationCreateWithHttpInfo(param, options) {
        return this.api.v1ApplicationCreateWithHttpInfo(param.applicationIn, param.getIfExists, param.idempotencyKey, options).toPromise();
    }
    v1ApplicationCreate(param, options) {
        return this.api.v1ApplicationCreate(param.applicationIn, param.getIfExists, param.idempotencyKey, options).toPromise();
    }
    v1ApplicationDeleteWithHttpInfo(param, options) {
        return this.api.v1ApplicationDeleteWithHttpInfo(param.appId, options).toPromise();
    }
    v1ApplicationDelete(param, options) {
        return this.api.v1ApplicationDelete(param.appId, options).toPromise();
    }
    v1ApplicationGetWithHttpInfo(param, options) {
        return this.api.v1ApplicationGetWithHttpInfo(param.appId, options).toPromise();
    }
    v1ApplicationGet(param, options) {
        return this.api.v1ApplicationGet(param.appId, options).toPromise();
    }
    v1ApplicationGetStatsWithHttpInfo(param, options) {
        return this.api.v1ApplicationGetStatsWithHttpInfo(param.since, param.until, param.appId, options).toPromise();
    }
    v1ApplicationGetStats(param, options) {
        return this.api.v1ApplicationGetStats(param.since, param.until, param.appId, options).toPromise();
    }
    v1ApplicationListWithHttpInfo(param = {}, options) {
        return this.api.v1ApplicationListWithHttpInfo(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1ApplicationList(param = {}, options) {
        return this.api.v1ApplicationList(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1ApplicationPatchWithHttpInfo(param, options) {
        return this.api.v1ApplicationPatchWithHttpInfo(param.appId, param.applicationPatch, options).toPromise();
    }
    v1ApplicationPatch(param, options) {
        return this.api.v1ApplicationPatch(param.appId, param.applicationPatch, options).toPromise();
    }
    v1ApplicationUpdateWithHttpInfo(param, options) {
        return this.api.v1ApplicationUpdateWithHttpInfo(param.appId, param.applicationIn, options).toPromise();
    }
    v1ApplicationUpdate(param, options) {
        return this.api.v1ApplicationUpdate(param.appId, param.applicationIn, options).toPromise();
    }
}
exports.ObjectApplicationApi = ObjectApplicationApi;
const ObservableAPI_2 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectAuthenticationApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_2.ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }
    v1AuthenticationAppPortalAccessWithHttpInfo(param, options) {
        return this.api.v1AuthenticationAppPortalAccessWithHttpInfo(param.appId, param.appPortalAccessIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationAppPortalAccess(param, options) {
        return this.api.v1AuthenticationAppPortalAccess(param.appId, param.appPortalAccessIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationCreateMessageTokenWithHttpInfo(param, options) {
        return this.api.v1AuthenticationCreateMessageTokenWithHttpInfo(param.appId, param.createTokenIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationCreateMessageToken(param, options) {
        return this.api.v1AuthenticationCreateMessageToken(param.appId, param.createTokenIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationDashboardAccessWithHttpInfo(param, options) {
        return this.api.v1AuthenticationDashboardAccessWithHttpInfo(param.appId, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationDashboardAccess(param, options) {
        return this.api.v1AuthenticationDashboardAccess(param.appId, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationExchangeOneTimeTokenWithHttpInfo(param, options) {
        return this.api.v1AuthenticationExchangeOneTimeTokenWithHttpInfo(param.oneTimeTokenIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationExchangeOneTimeToken(param, options) {
        return this.api.v1AuthenticationExchangeOneTimeToken(param.oneTimeTokenIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationExpireAllWithHttpInfo(param, options) {
        return this.api.v1AuthenticationExpireAllWithHttpInfo(param.appId, param.applicationTokenExpireIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationExpireAll(param, options) {
        return this.api.v1AuthenticationExpireAll(param.appId, param.applicationTokenExpireIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationGetPollerTokenWithHttpInfo(param, options) {
        return this.api.v1AuthenticationGetPollerTokenWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1AuthenticationGetPollerToken(param, options) {
        return this.api.v1AuthenticationGetPollerToken(param.appId, param.endpointId, options).toPromise();
    }
    v1AuthenticationLogoutWithHttpInfo(param = {}, options) {
        return this.api.v1AuthenticationLogoutWithHttpInfo(param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationLogout(param = {}, options) {
        return this.api.v1AuthenticationLogout(param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationRotatePollerTokenWithHttpInfo(param, options) {
        return this.api.v1AuthenticationRotatePollerTokenWithHttpInfo(param.appId, param.endpointId, param.rotatePollerTokenIn, param.idempotencyKey, options).toPromise();
    }
    v1AuthenticationRotatePollerToken(param, options) {
        return this.api.v1AuthenticationRotatePollerToken(param.appId, param.endpointId, param.rotatePollerTokenIn, param.idempotencyKey, options).toPromise();
    }
}
exports.ObjectAuthenticationApi = ObjectAuthenticationApi;
const ObservableAPI_3 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectBackgroundTasksApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_3.ObservableBackgroundTasksApi(configuration, requestFactory, responseProcessor);
    }
    getBackgroundTaskWithHttpInfo(param, options) {
        return this.api.getBackgroundTaskWithHttpInfo(param.taskId, options).toPromise();
    }
    getBackgroundTask(param, options) {
        return this.api.getBackgroundTask(param.taskId, options).toPromise();
    }
    listBackgroundTasksWithHttpInfo(param = {}, options) {
        return this.api.listBackgroundTasksWithHttpInfo(param.status, param.task, param.limit, param.iterator, param.order, options).toPromise();
    }
    listBackgroundTasks(param = {}, options) {
        return this.api.listBackgroundTasks(param.status, param.task, param.limit, param.iterator, param.order, options).toPromise();
    }
}
exports.ObjectBackgroundTasksApi = ObjectBackgroundTasksApi;
const ObservableAPI_4 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectBroadcastApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_4.ObservableBroadcastApi(configuration, requestFactory, responseProcessor);
    }
    createBroadcastMessageWithHttpInfo(param, options) {
        return this.api.createBroadcastMessageWithHttpInfo(param.messageBroadcastIn, param.idempotencyKey, options).toPromise();
    }
    createBroadcastMessage(param, options) {
        return this.api.createBroadcastMessage(param.messageBroadcastIn, param.idempotencyKey, options).toPromise();
    }
}
exports.ObjectBroadcastApi = ObjectBroadcastApi;
const ObservableAPI_5 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectEndpointApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_5.ObservableEndpointApi(configuration, requestFactory, responseProcessor);
    }
    v1EndpointCreateWithHttpInfo(param, options) {
        return this.api.v1EndpointCreateWithHttpInfo(param.appId, param.endpointIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointCreate(param, options) {
        return this.api.v1EndpointCreate(param.appId, param.endpointIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointDeleteWithHttpInfo(param, options) {
        return this.api.v1EndpointDeleteWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointDelete(param, options) {
        return this.api.v1EndpointDelete(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointDeleteMtlsConfigWithHttpInfo(param, options) {
        return this.api.v1EndpointDeleteMtlsConfigWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointDeleteMtlsConfig(param, options) {
        return this.api.v1EndpointDeleteMtlsConfig(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointDeleteOauthConfigWithHttpInfo(param, options) {
        return this.api.v1EndpointDeleteOauthConfigWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointDeleteOauthConfig(param, options) {
        return this.api.v1EndpointDeleteOauthConfig(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGetWithHttpInfo(param, options) {
        return this.api.v1EndpointGetWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGet(param, options) {
        return this.api.v1EndpointGet(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGetHeadersWithHttpInfo(param, options) {
        return this.api.v1EndpointGetHeadersWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGetHeaders(param, options) {
        return this.api.v1EndpointGetHeaders(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGetSecretWithHttpInfo(param, options) {
        return this.api.v1EndpointGetSecretWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGetSecret(param, options) {
        return this.api.v1EndpointGetSecret(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointGetStatsWithHttpInfo(param, options) {
        return this.api.v1EndpointGetStatsWithHttpInfo(param.appId, param.endpointId, param.since, param.until, options).toPromise();
    }
    v1EndpointGetStats(param, options) {
        return this.api.v1EndpointGetStats(param.appId, param.endpointId, param.since, param.until, options).toPromise();
    }
    v1EndpointListWithHttpInfo(param, options) {
        return this.api.v1EndpointListWithHttpInfo(param.appId, param.limit, param.iterator, param.order, options).toPromise();
    }
    v1EndpointList(param, options) {
        return this.api.v1EndpointList(param.appId, param.limit, param.iterator, param.order, options).toPromise();
    }
    v1EndpointPatchWithHttpInfo(param, options) {
        return this.api.v1EndpointPatchWithHttpInfo(param.appId, param.endpointId, param.endpointPatch, options).toPromise();
    }
    v1EndpointPatch(param, options) {
        return this.api.v1EndpointPatch(param.appId, param.endpointId, param.endpointPatch, options).toPromise();
    }
    v1EndpointPatchHeadersWithHttpInfo(param, options) {
        return this.api.v1EndpointPatchHeadersWithHttpInfo(param.appId, param.endpointId, param.endpointHeadersPatchIn, options).toPromise();
    }
    v1EndpointPatchHeaders(param, options) {
        return this.api.v1EndpointPatchHeaders(param.appId, param.endpointId, param.endpointHeadersPatchIn, options).toPromise();
    }
    v1EndpointRecoverWithHttpInfo(param, options) {
        return this.api.v1EndpointRecoverWithHttpInfo(param.appId, param.endpointId, param.recoverIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointRecover(param, options) {
        return this.api.v1EndpointRecover(param.appId, param.endpointId, param.recoverIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointReplayMissingWithHttpInfo(param, options) {
        return this.api.v1EndpointReplayMissingWithHttpInfo(param.appId, param.endpointId, param.replayIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointReplayMissing(param, options) {
        return this.api.v1EndpointReplayMissing(param.appId, param.endpointId, param.replayIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointRotateSecretWithHttpInfo(param, options) {
        return this.api.v1EndpointRotateSecretWithHttpInfo(param.appId, param.endpointId, param.endpointSecretRotateIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointRotateSecret(param, options) {
        return this.api.v1EndpointRotateSecret(param.appId, param.endpointId, param.endpointSecretRotateIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointSendExampleWithHttpInfo(param, options) {
        return this.api.v1EndpointSendExampleWithHttpInfo(param.appId, param.endpointId, param.eventExampleIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointSendExample(param, options) {
        return this.api.v1EndpointSendExample(param.appId, param.endpointId, param.eventExampleIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointTransformationGetWithHttpInfo(param, options) {
        return this.api.v1EndpointTransformationGetWithHttpInfo(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointTransformationGet(param, options) {
        return this.api.v1EndpointTransformationGet(param.appId, param.endpointId, options).toPromise();
    }
    v1EndpointTransformationPartialUpdateWithHttpInfo(param, options) {
        return this.api.v1EndpointTransformationPartialUpdateWithHttpInfo(param.appId, param.endpointId, param.endpointTransformationIn, options).toPromise();
    }
    v1EndpointTransformationPartialUpdate(param, options) {
        return this.api.v1EndpointTransformationPartialUpdate(param.appId, param.endpointId, param.endpointTransformationIn, options).toPromise();
    }
    v1EndpointTransformationSimulateWithHttpInfo(param, options) {
        return this.api.v1EndpointTransformationSimulateWithHttpInfo(param.appId, param.endpointId, param.endpointTransformationSimulateIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointTransformationSimulate(param, options) {
        return this.api.v1EndpointTransformationSimulate(param.appId, param.endpointId, param.endpointTransformationSimulateIn, param.idempotencyKey, options).toPromise();
    }
    v1EndpointUpdateWithHttpInfo(param, options) {
        return this.api.v1EndpointUpdateWithHttpInfo(param.appId, param.endpointId, param.endpointUpdate, options).toPromise();
    }
    v1EndpointUpdate(param, options) {
        return this.api.v1EndpointUpdate(param.appId, param.endpointId, param.endpointUpdate, options).toPromise();
    }
    v1EndpointUpdateHeadersWithHttpInfo(param, options) {
        return this.api.v1EndpointUpdateHeadersWithHttpInfo(param.appId, param.endpointId, param.endpointHeadersIn, options).toPromise();
    }
    v1EndpointUpdateHeaders(param, options) {
        return this.api.v1EndpointUpdateHeaders(param.appId, param.endpointId, param.endpointHeadersIn, options).toPromise();
    }
    v1EndpointUpdateMtlsConfigWithHttpInfo(param, options) {
        return this.api.v1EndpointUpdateMtlsConfigWithHttpInfo(param.appId, param.endpointId, param.endpointMtlsConfigIn, options).toPromise();
    }
    v1EndpointUpdateMtlsConfig(param, options) {
        return this.api.v1EndpointUpdateMtlsConfig(param.appId, param.endpointId, param.endpointMtlsConfigIn, options).toPromise();
    }
    v1EndpointUpdateOauthConfigWithHttpInfo(param, options) {
        return this.api.v1EndpointUpdateOauthConfigWithHttpInfo(param.appId, param.endpointId, param.endpointOauthConfigIn, options).toPromise();
    }
    v1EndpointUpdateOauthConfig(param, options) {
        return this.api.v1EndpointUpdateOauthConfig(param.appId, param.endpointId, param.endpointOauthConfigIn, options).toPromise();
    }
    v1SinkCreateWithHttpInfo(param, options) {
        return this.api.v1SinkCreateWithHttpInfo(param.appId, param.sinkIn, param.idempotencyKey, options).toPromise();
    }
    v1SinkCreate(param, options) {
        return this.api.v1SinkCreate(param.appId, param.sinkIn, param.idempotencyKey, options).toPromise();
    }
    v1SinkGetWithHttpInfo(param, options) {
        return this.api.v1SinkGetWithHttpInfo(param.appId, param.sinkId, options).toPromise();
    }
    v1SinkGet(param, options) {
        return this.api.v1SinkGet(param.appId, param.sinkId, options).toPromise();
    }
    v1SinkListWithHttpInfo(param, options) {
        return this.api.v1SinkListWithHttpInfo(param.appId, param.limit, param.iterator, param.order, options).toPromise();
    }
    v1SinkList(param, options) {
        return this.api.v1SinkList(param.appId, param.limit, param.iterator, param.order, options).toPromise();
    }
}
exports.ObjectEndpointApi = ObjectEndpointApi;
const ObservableAPI_6 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectEnvironmentApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_6.ObservableEnvironmentApi(configuration, requestFactory, responseProcessor);
    }
    v1EnvironmentExportWithHttpInfo(param = {}, options) {
        return this.api.v1EnvironmentExportWithHttpInfo(param.idempotencyKey, options).toPromise();
    }
    v1EnvironmentExport(param = {}, options) {
        return this.api.v1EnvironmentExport(param.idempotencyKey, options).toPromise();
    }
    v1EnvironmentImportWithHttpInfo(param, options) {
        return this.api.v1EnvironmentImportWithHttpInfo(param.environmentIn, param.idempotencyKey, options).toPromise();
    }
    v1EnvironmentImport(param, options) {
        return this.api.v1EnvironmentImport(param.environmentIn, param.idempotencyKey, options).toPromise();
    }
}
exports.ObjectEnvironmentApi = ObjectEnvironmentApi;
const ObservableAPI_7 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectEnvironmentSettingsApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_7.ObservableEnvironmentSettingsApi(configuration, requestFactory, responseProcessor);
    }
    v1EnvironmentGetSettingsWithHttpInfo(param = {}, options) {
        return this.api.v1EnvironmentGetSettingsWithHttpInfo(options).toPromise();
    }
    v1EnvironmentGetSettings(param = {}, options) {
        return this.api.v1EnvironmentGetSettings(options).toPromise();
    }
}
exports.ObjectEnvironmentSettingsApi = ObjectEnvironmentSettingsApi;
const ObservableAPI_8 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectEventTypeApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_8.ObservableEventTypeApi(configuration, requestFactory, responseProcessor);
    }
    v1EventTypeCreateWithHttpInfo(param, options) {
        return this.api.v1EventTypeCreateWithHttpInfo(param.eventTypeIn, param.idempotencyKey, options).toPromise();
    }
    v1EventTypeCreate(param, options) {
        return this.api.v1EventTypeCreate(param.eventTypeIn, param.idempotencyKey, options).toPromise();
    }
    v1EventTypeDeleteWithHttpInfo(param, options) {
        return this.api.v1EventTypeDeleteWithHttpInfo(param.eventTypeName, param.expunge, options).toPromise();
    }
    v1EventTypeDelete(param, options) {
        return this.api.v1EventTypeDelete(param.eventTypeName, param.expunge, options).toPromise();
    }
    v1EventTypeExportOpenapiWithHttpInfo(param = {}, options) {
        return this.api.v1EventTypeExportOpenapiWithHttpInfo(param.idempotencyKey, options).toPromise();
    }
    v1EventTypeExportOpenapi(param = {}, options) {
        return this.api.v1EventTypeExportOpenapi(param.idempotencyKey, options).toPromise();
    }
    v1EventTypeGenerateExampleWithHttpInfo(param, options) {
        return this.api.v1EventTypeGenerateExampleWithHttpInfo(param.eventTypeSchemaIn, param.idempotencyKey, options).toPromise();
    }
    v1EventTypeGenerateExample(param, options) {
        return this.api.v1EventTypeGenerateExample(param.eventTypeSchemaIn, param.idempotencyKey, options).toPromise();
    }
    v1EventTypeGetWithHttpInfo(param, options) {
        return this.api.v1EventTypeGetWithHttpInfo(param.eventTypeName, options).toPromise();
    }
    v1EventTypeGet(param, options) {
        return this.api.v1EventTypeGet(param.eventTypeName, options).toPromise();
    }
    v1EventTypeGetRetryScheduleWithHttpInfo(param, options) {
        return this.api.v1EventTypeGetRetryScheduleWithHttpInfo(param.eventTypeName, options).toPromise();
    }
    v1EventTypeGetRetrySchedule(param, options) {
        return this.api.v1EventTypeGetRetrySchedule(param.eventTypeName, options).toPromise();
    }
    v1EventTypeImportOpenapiWithHttpInfo(param, options) {
        return this.api.v1EventTypeImportOpenapiWithHttpInfo(param.eventTypeImportOpenApiIn, param.idempotencyKey, options).toPromise();
    }
    v1EventTypeImportOpenapi(param, options) {
        return this.api.v1EventTypeImportOpenapi(param.eventTypeImportOpenApiIn, param.idempotencyKey, options).toPromise();
    }
    v1EventTypeListWithHttpInfo(param = {}, options) {
        return this.api.v1EventTypeListWithHttpInfo(param.limit, param.iterator, param.order, param.includeArchived, param.withContent, options).toPromise();
    }
    v1EventTypeList(param = {}, options) {
        return this.api.v1EventTypeList(param.limit, param.iterator, param.order, param.includeArchived, param.withContent, options).toPromise();
    }
    v1EventTypePatchWithHttpInfo(param, options) {
        return this.api.v1EventTypePatchWithHttpInfo(param.eventTypeName, param.eventTypePatch, options).toPromise();
    }
    v1EventTypePatch(param, options) {
        return this.api.v1EventTypePatch(param.eventTypeName, param.eventTypePatch, options).toPromise();
    }
    v1EventTypeUpdateWithHttpInfo(param, options) {
        return this.api.v1EventTypeUpdateWithHttpInfo(param.eventTypeName, param.eventTypeUpdate, options).toPromise();
    }
    v1EventTypeUpdate(param, options) {
        return this.api.v1EventTypeUpdate(param.eventTypeName, param.eventTypeUpdate, options).toPromise();
    }
    v1EventTypeUpdateRetryScheduleWithHttpInfo(param, options) {
        return this.api.v1EventTypeUpdateRetryScheduleWithHttpInfo(param.eventTypeName, param.retryScheduleInOut, options).toPromise();
    }
    v1EventTypeUpdateRetrySchedule(param, options) {
        return this.api.v1EventTypeUpdateRetrySchedule(param.eventTypeName, param.retryScheduleInOut, options).toPromise();
    }
}
exports.ObjectEventTypeApi = ObjectEventTypeApi;
const ObservableAPI_9 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectEventsApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_9.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    v1EventsWithHttpInfo(param = {}, options) {
        return this.api.v1EventsWithHttpInfo(param.limit, param.iterator, param.eventTypes, param.channels, param.after, options).toPromise();
    }
    v1Events(param = {}, options) {
        return this.api.v1Events(param.limit, param.iterator, param.eventTypes, param.channels, param.after, options).toPromise();
    }
}
exports.ObjectEventsApi = ObjectEventsApi;
const ObservableAPI_10 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectHealthApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_10.ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }
    v1HealthGetWithHttpInfo(param = {}, options) {
        return this.api.v1HealthGetWithHttpInfo(options).toPromise();
    }
    v1HealthGet(param = {}, options) {
        return this.api.v1HealthGet(options).toPromise();
    }
}
exports.ObjectHealthApi = ObjectHealthApi;
const ObservableAPI_11 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectInboundApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_11.ObservableInboundApi(configuration, requestFactory, responseProcessor);
    }
    v1InboundMsgWithHttpInfo(param, options) {
        return this.api.v1InboundMsgWithHttpInfo(param.appId, param.inboundToken, param.body, param.eventType, param.idempotencyKey, options).toPromise();
    }
    v1InboundMsg(param, options) {
        return this.api.v1InboundMsg(param.appId, param.inboundToken, param.body, param.eventType, param.idempotencyKey, options).toPromise();
    }
    v1InboundRotateUrlWithHttpInfo(param, options) {
        return this.api.v1InboundRotateUrlWithHttpInfo(param.appId, param.idempotencyKey, options).toPromise();
    }
    v1InboundRotateUrl(param, options) {
        return this.api.v1InboundRotateUrl(param.appId, param.idempotencyKey, options).toPromise();
    }
}
exports.ObjectInboundApi = ObjectInboundApi;
const ObservableAPI_12 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectIntegrationApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_12.ObservableIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    v1IntegrationCreateWithHttpInfo(param, options) {
        return this.api.v1IntegrationCreateWithHttpInfo(param.appId, param.integrationIn, param.idempotencyKey, options).toPromise();
    }
    v1IntegrationCreate(param, options) {
        return this.api.v1IntegrationCreate(param.appId, param.integrationIn, param.idempotencyKey, options).toPromise();
    }
    v1IntegrationDeleteWithHttpInfo(param, options) {
        return this.api.v1IntegrationDeleteWithHttpInfo(param.appId, param.integId, options).toPromise();
    }
    v1IntegrationDelete(param, options) {
        return this.api.v1IntegrationDelete(param.appId, param.integId, options).toPromise();
    }
    v1IntegrationGetWithHttpInfo(param, options) {
        return this.api.v1IntegrationGetWithHttpInfo(param.appId, param.integId, options).toPromise();
    }
    v1IntegrationGet(param, options) {
        return this.api.v1IntegrationGet(param.appId, param.integId, options).toPromise();
    }
    v1IntegrationGetKeyWithHttpInfo(param, options) {
        return this.api.v1IntegrationGetKeyWithHttpInfo(param.appId, param.integId, options).toPromise();
    }
    v1IntegrationGetKey(param, options) {
        return this.api.v1IntegrationGetKey(param.appId, param.integId, options).toPromise();
    }
    v1IntegrationListWithHttpInfo(param, options) {
        return this.api.v1IntegrationListWithHttpInfo(param.appId, param.limit, param.iterator, param.order, options).toPromise();
    }
    v1IntegrationList(param, options) {
        return this.api.v1IntegrationList(param.appId, param.limit, param.iterator, param.order, options).toPromise();
    }
    v1IntegrationRotateKeyWithHttpInfo(param, options) {
        return this.api.v1IntegrationRotateKeyWithHttpInfo(param.appId, param.integId, param.idempotencyKey, options).toPromise();
    }
    v1IntegrationRotateKey(param, options) {
        return this.api.v1IntegrationRotateKey(param.appId, param.integId, param.idempotencyKey, options).toPromise();
    }
    v1IntegrationUpdateWithHttpInfo(param, options) {
        return this.api.v1IntegrationUpdateWithHttpInfo(param.appId, param.integId, param.integrationUpdate, options).toPromise();
    }
    v1IntegrationUpdate(param, options) {
        return this.api.v1IntegrationUpdate(param.appId, param.integId, param.integrationUpdate, options).toPromise();
    }
}
exports.ObjectIntegrationApi = ObjectIntegrationApi;
const ObservableAPI_13 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectMessageApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_13.ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }
    createMessageAttemptForEndpointWithHttpInfo(param, options) {
        return this.api.createMessageAttemptForEndpointWithHttpInfo(param.appId, param.endpointId, param.messageIn, param.idempotencyKey, options).toPromise();
    }
    createMessageAttemptForEndpoint(param, options) {
        return this.api.createMessageAttemptForEndpoint(param.appId, param.endpointId, param.messageIn, param.idempotencyKey, options).toPromise();
    }
    v1EventsPublicWithHttpInfo(param, options) {
        return this.api.v1EventsPublicWithHttpInfo(param.appId, param.sinkId, param.limit, param.iterator, param.eventType, param.channel, param.after, options).toPromise();
    }
    v1EventsPublic(param, options) {
        return this.api.v1EventsPublic(param.appId, param.sinkId, param.limit, param.iterator, param.eventType, param.channel, param.after, options).toPromise();
    }
    v1MessageCreateWithHttpInfo(param, options) {
        return this.api.v1MessageCreateWithHttpInfo(param.appId, param.messageIn, param.withContent, param.idempotencyKey, options).toPromise();
    }
    v1MessageCreate(param, options) {
        return this.api.v1MessageCreate(param.appId, param.messageIn, param.withContent, param.idempotencyKey, options).toPromise();
    }
    v1MessageEventsWithHttpInfo(param, options) {
        return this.api.v1MessageEventsWithHttpInfo(param.appId, param.limit, param.iterator, param.eventTypes, param.channels, param.after, options).toPromise();
    }
    v1MessageEvents(param, options) {
        return this.api.v1MessageEvents(param.appId, param.limit, param.iterator, param.eventTypes, param.channels, param.after, options).toPromise();
    }
    v1MessageEventsSubscriptionWithHttpInfo(param, options) {
        return this.api.v1MessageEventsSubscriptionWithHttpInfo(param.appId, param.subscriptionId, param.limit, param.iterator, param.eventTypes, param.channels, param.after, options).toPromise();
    }
    v1MessageEventsSubscription(param, options) {
        return this.api.v1MessageEventsSubscription(param.appId, param.subscriptionId, param.limit, param.iterator, param.eventTypes, param.channels, param.after, options).toPromise();
    }
    v1MessageEventsSubscriptionCreateTokenWithHttpInfo(param, options) {
        return this.api.v1MessageEventsSubscriptionCreateTokenWithHttpInfo(param.appId, param.subscriptionId, param.idempotencyKey, options).toPromise();
    }
    v1MessageEventsSubscriptionCreateToken(param, options) {
        return this.api.v1MessageEventsSubscriptionCreateToken(param.appId, param.subscriptionId, param.idempotencyKey, options).toPromise();
    }
    v1MessageExpungeContentWithHttpInfo(param, options) {
        return this.api.v1MessageExpungeContentWithHttpInfo(param.appId, param.msgId, options).toPromise();
    }
    v1MessageExpungeContent(param, options) {
        return this.api.v1MessageExpungeContent(param.appId, param.msgId, options).toPromise();
    }
    v1MessageGetWithHttpInfo(param, options) {
        return this.api.v1MessageGetWithHttpInfo(param.appId, param.msgId, param.withContent, options).toPromise();
    }
    v1MessageGet(param, options) {
        return this.api.v1MessageGet(param.appId, param.msgId, param.withContent, options).toPromise();
    }
    v1MessageGetRawPayloadWithHttpInfo(param, options) {
        return this.api.v1MessageGetRawPayloadWithHttpInfo(param.appId, param.msgId, options).toPromise();
    }
    v1MessageGetRawPayload(param, options) {
        return this.api.v1MessageGetRawPayload(param.appId, param.msgId, options).toPromise();
    }
    v1MessageListWithHttpInfo(param, options) {
        return this.api.v1MessageListWithHttpInfo(param.appId, param.limit, param.iterator, param.channel, param.before, param.after, param.withContent, param.tag, param.eventTypes, options).toPromise();
    }
    v1MessageList(param, options) {
        return this.api.v1MessageList(param.appId, param.limit, param.iterator, param.channel, param.before, param.after, param.withContent, param.tag, param.eventTypes, options).toPromise();
    }
}
exports.ObjectMessageApi = ObjectMessageApi;
const ObservableAPI_14 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectMessageAttemptApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_14.ObservableMessageAttemptApi(configuration, requestFactory, responseProcessor);
    }
    v1MessageAttemptCountByEndpointWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptCountByEndpointWithHttpInfo(param.appId, param.endpointId, param.status, param.statusCodeClass, param.channel, param.tag, param.before, param.after, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptCountByEndpoint(param, options) {
        return this.api.v1MessageAttemptCountByEndpoint(param.appId, param.endpointId, param.status, param.statusCodeClass, param.channel, param.tag, param.before, param.after, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptExpungeContentWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptExpungeContentWithHttpInfo(param.appId, param.msgId, param.attemptId, options).toPromise();
    }
    v1MessageAttemptExpungeContent(param, options) {
        return this.api.v1MessageAttemptExpungeContent(param.appId, param.msgId, param.attemptId, options).toPromise();
    }
    v1MessageAttemptGetWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptGetWithHttpInfo(param.appId, param.msgId, param.attemptId, options).toPromise();
    }
    v1MessageAttemptGet(param, options) {
        return this.api.v1MessageAttemptGet(param.appId, param.msgId, param.attemptId, options).toPromise();
    }
    v1MessageAttemptGetHeadersWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptGetHeadersWithHttpInfo(param.appId, param.msgId, param.attemptId, options).toPromise();
    }
    v1MessageAttemptGetHeaders(param, options) {
        return this.api.v1MessageAttemptGetHeaders(param.appId, param.msgId, param.attemptId, options).toPromise();
    }
    v1MessageAttemptListAttemptedDestinationsWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptListAttemptedDestinationsWithHttpInfo(param.appId, param.msgId, param.limit, param.iterator, options).toPromise();
    }
    v1MessageAttemptListAttemptedDestinations(param, options) {
        return this.api.v1MessageAttemptListAttemptedDestinations(param.appId, param.msgId, param.limit, param.iterator, options).toPromise();
    }
    v1MessageAttemptListAttemptedMessagesWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptListAttemptedMessagesWithHttpInfo(param.appId, param.endpointId, param.limit, param.iterator, param.channel, param.tag, param.status, param.before, param.after, param.withContent, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListAttemptedMessages(param, options) {
        return this.api.v1MessageAttemptListAttemptedMessages(param.appId, param.endpointId, param.limit, param.iterator, param.channel, param.tag, param.status, param.before, param.after, param.withContent, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByEndpointWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptListByEndpointWithHttpInfo(param.appId, param.endpointId, param.limit, param.iterator, param.status, param.statusCodeClass, param.channel, param.tag, param.before, param.after, param.withContent, param.withMsg, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByEndpoint(param, options) {
        return this.api.v1MessageAttemptListByEndpoint(param.appId, param.endpointId, param.limit, param.iterator, param.status, param.statusCodeClass, param.channel, param.tag, param.before, param.after, param.withContent, param.withMsg, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByEndpointDeprecatedWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptListByEndpointDeprecatedWithHttpInfo(param.appId, param.msgId, param.endpointId, param.limit, param.iterator, param.channel, param.tag, param.status, param.before, param.after, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByEndpointDeprecated(param, options) {
        return this.api.v1MessageAttemptListByEndpointDeprecated(param.appId, param.msgId, param.endpointId, param.limit, param.iterator, param.channel, param.tag, param.status, param.before, param.after, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByMsgWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptListByMsgWithHttpInfo(param.appId, param.msgId, param.limit, param.iterator, param.status, param.statusCodeClass, param.channel, param.tag, param.endpointId, param.before, param.after, param.withContent, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByMsg(param, options) {
        return this.api.v1MessageAttemptListByMsg(param.appId, param.msgId, param.limit, param.iterator, param.status, param.statusCodeClass, param.channel, param.tag, param.endpointId, param.before, param.after, param.withContent, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByMsgDeprecatedWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptListByMsgDeprecatedWithHttpInfo(param.appId, param.msgId, param.limit, param.iterator, param.endpointId, param.channel, param.tag, param.status, param.before, param.after, param.statusCodeClass, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptListByMsgDeprecated(param, options) {
        return this.api.v1MessageAttemptListByMsgDeprecated(param.appId, param.msgId, param.limit, param.iterator, param.endpointId, param.channel, param.tag, param.status, param.before, param.after, param.statusCodeClass, param.eventTypes, options).toPromise();
    }
    v1MessageAttemptResendWithHttpInfo(param, options) {
        return this.api.v1MessageAttemptResendWithHttpInfo(param.appId, param.msgId, param.endpointId, param.idempotencyKey, options).toPromise();
    }
    v1MessageAttemptResend(param, options) {
        return this.api.v1MessageAttemptResend(param.appId, param.msgId, param.endpointId, param.idempotencyKey, options).toPromise();
    }
}
exports.ObjectMessageAttemptApi = ObjectMessageAttemptApi;
const ObservableAPI_15 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectStatisticsApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_15.ObservableStatisticsApi(configuration, requestFactory, responseProcessor);
    }
    v1StatisticsAggregateAppStatsWithHttpInfo(param, options) {
        return this.api.v1StatisticsAggregateAppStatsWithHttpInfo(param.appUsageStatsIn, param.idempotencyKey, options).toPromise();
    }
    v1StatisticsAggregateAppStats(param, options) {
        return this.api.v1StatisticsAggregateAppStats(param.appUsageStatsIn, param.idempotencyKey, options).toPromise();
    }
    v1StatisticsAggregateEventTypesWithHttpInfo(param = {}, options) {
        return this.api.v1StatisticsAggregateEventTypesWithHttpInfo(options).toPromise();
    }
    v1StatisticsAggregateEventTypes(param = {}, options) {
        return this.api.v1StatisticsAggregateEventTypes(options).toPromise();
    }
    v1StatsAppAttemptsWithHttpInfo(param, options) {
        return this.api.v1StatsAppAttemptsWithHttpInfo(param.appId, param.startDate, param.endDate, options).toPromise();
    }
    v1StatsAppAttempts(param, options) {
        return this.api.v1StatsAppAttempts(param.appId, param.startDate, param.endDate, options).toPromise();
    }
    v1StatsEndpointAttemptsWithHttpInfo(param, options) {
        return this.api.v1StatsEndpointAttemptsWithHttpInfo(param.appId, param.endpointId, param.startDate, param.endDate, options).toPromise();
    }
    v1StatsEndpointAttempts(param, options) {
        return this.api.v1StatsEndpointAttempts(param.appId, param.endpointId, param.startDate, param.endDate, options).toPromise();
    }
}
exports.ObjectStatisticsApi = ObjectStatisticsApi;
const ObservableAPI_16 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectStreamApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_16.ObservableStreamApi(configuration, requestFactory, responseProcessor);
    }
    v1StreamCreateWithHttpInfo(param, options) {
        return this.api.v1StreamCreateWithHttpInfo(param.streamIn, param.idempotencyKey, options).toPromise();
    }
    v1StreamCreate(param, options) {
        return this.api.v1StreamCreate(param.streamIn, param.idempotencyKey, options).toPromise();
    }
    v1StreamCreateEventsWithHttpInfo(param, options) {
        return this.api.v1StreamCreateEventsWithHttpInfo(param.streamId, param.createStreamIn, param.idempotencyKey, options).toPromise();
    }
    v1StreamCreateEvents(param, options) {
        return this.api.v1StreamCreateEvents(param.streamId, param.createStreamIn, param.idempotencyKey, options).toPromise();
    }
    v1StreamDeleteWithHttpInfo(param, options) {
        return this.api.v1StreamDeleteWithHttpInfo(param.streamId, options).toPromise();
    }
    v1StreamDelete(param, options) {
        return this.api.v1StreamDelete(param.streamId, options).toPromise();
    }
    v1StreamEventsGetWithHttpInfo(param, options) {
        return this.api.v1StreamEventsGetWithHttpInfo(param.streamId, param.limit, param.iterator, param.after, options).toPromise();
    }
    v1StreamEventsGet(param, options) {
        return this.api.v1StreamEventsGet(param.streamId, param.limit, param.iterator, param.after, options).toPromise();
    }
    v1StreamGetWithHttpInfo(param, options) {
        return this.api.v1StreamGetWithHttpInfo(param.streamId, options).toPromise();
    }
    v1StreamGet(param, options) {
        return this.api.v1StreamGet(param.streamId, options).toPromise();
    }
    v1StreamListWithHttpInfo(param = {}, options) {
        return this.api.v1StreamListWithHttpInfo(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1StreamList(param = {}, options) {
        return this.api.v1StreamList(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1StreamPatchWithHttpInfo(param, options) {
        return this.api.v1StreamPatchWithHttpInfo(param.streamId, param.streamPatch, options).toPromise();
    }
    v1StreamPatch(param, options) {
        return this.api.v1StreamPatch(param.streamId, param.streamPatch, options).toPromise();
    }
    v1StreamUpdateWithHttpInfo(param, options) {
        return this.api.v1StreamUpdateWithHttpInfo(param.streamId, param.streamIn, options).toPromise();
    }
    v1StreamUpdate(param, options) {
        return this.api.v1StreamUpdate(param.streamId, param.streamIn, options).toPromise();
    }
}
exports.ObjectStreamApi = ObjectStreamApi;
const ObservableAPI_17 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectStreamEventTypesApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_17.ObservableStreamEventTypesApi(configuration, requestFactory, responseProcessor);
    }
    v1StreamEventTypeCreateWithHttpInfo(param, options) {
        return this.api.v1StreamEventTypeCreateWithHttpInfo(param.streamEventTypeIn, param.idempotencyKey, options).toPromise();
    }
    v1StreamEventTypeCreate(param, options) {
        return this.api.v1StreamEventTypeCreate(param.streamEventTypeIn, param.idempotencyKey, options).toPromise();
    }
    v1StreamEventTypeDeleteWithHttpInfo(param, options) {
        return this.api.v1StreamEventTypeDeleteWithHttpInfo(param.name, options).toPromise();
    }
    v1StreamEventTypeDelete(param, options) {
        return this.api.v1StreamEventTypeDelete(param.name, options).toPromise();
    }
    v1StreamEventTypeGetWithHttpInfo(param, options) {
        return this.api.v1StreamEventTypeGetWithHttpInfo(param.name, options).toPromise();
    }
    v1StreamEventTypeGet(param, options) {
        return this.api.v1StreamEventTypeGet(param.name, options).toPromise();
    }
    v1StreamEventTypeListWithHttpInfo(param = {}, options) {
        return this.api.v1StreamEventTypeListWithHttpInfo(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1StreamEventTypeList(param = {}, options) {
        return this.api.v1StreamEventTypeList(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1StreamEventTypePatchWithHttpInfo(param, options) {
        return this.api.v1StreamEventTypePatchWithHttpInfo(param.name, param.streamEventTypePatch, options).toPromise();
    }
    v1StreamEventTypePatch(param, options) {
        return this.api.v1StreamEventTypePatch(param.name, param.streamEventTypePatch, options).toPromise();
    }
    v1StreamEventTypeUpdateWithHttpInfo(param, options) {
        return this.api.v1StreamEventTypeUpdateWithHttpInfo(param.name, param.streamEventTypeIn, options).toPromise();
    }
    v1StreamEventTypeUpdate(param, options) {
        return this.api.v1StreamEventTypeUpdate(param.name, param.streamEventTypeIn, options).toPromise();
    }
}
exports.ObjectStreamEventTypesApi = ObjectStreamEventTypesApi;
const ObservableAPI_18 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectTransformationTemplateApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_18.ObservableTransformationTemplateApi(configuration, requestFactory, responseProcessor);
    }
    v1EndpointUpdateHubspotOauthConfigWithHttpInfo(param, options) {
        return this.api.v1EndpointUpdateHubspotOauthConfigWithHttpInfo(param.appId, param.endpointId, param.hubspotOauthConfigIn, options).toPromise();
    }
    v1EndpointUpdateHubspotOauthConfig(param, options) {
        return this.api.v1EndpointUpdateHubspotOauthConfig(param.appId, param.endpointId, param.hubspotOauthConfigIn, options).toPromise();
    }
    v1TransformationTemplateCreateWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateCreateWithHttpInfo(param.templateIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateCreate(param, options) {
        return this.api.v1TransformationTemplateCreate(param.templateIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateDeleteWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateDeleteWithHttpInfo(param.transformationTemplateId, options).toPromise();
    }
    v1TransformationTemplateDelete(param, options) {
        return this.api.v1TransformationTemplateDelete(param.transformationTemplateId, options).toPromise();
    }
    v1TransformationTemplateGenerateWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateGenerateWithHttpInfo(param.generateIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateGenerate(param, options) {
        return this.api.v1TransformationTemplateGenerate(param.generateIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateGetWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateGetWithHttpInfo(param.transformationTemplateId, options).toPromise();
    }
    v1TransformationTemplateGet(param, options) {
        return this.api.v1TransformationTemplateGet(param.transformationTemplateId, options).toPromise();
    }
    v1TransformationTemplateListWithHttpInfo(param = {}, options) {
        return this.api.v1TransformationTemplateListWithHttpInfo(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1TransformationTemplateList(param = {}, options) {
        return this.api.v1TransformationTemplateList(param.limit, param.iterator, param.order, options).toPromise();
    }
    v1TransformationTemplateOauthDiscordWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateOauthDiscordWithHttpInfo(param.oAuthPayloadIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateOauthDiscord(param, options) {
        return this.api.v1TransformationTemplateOauthDiscord(param.oAuthPayloadIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateOauthHubspotWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateOauthHubspotWithHttpInfo(param.oAuthPayloadIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateOauthHubspot(param, options) {
        return this.api.v1TransformationTemplateOauthHubspot(param.oAuthPayloadIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateOauthSlackWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateOauthSlackWithHttpInfo(param.oAuthPayloadIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateOauthSlack(param, options) {
        return this.api.v1TransformationTemplateOauthSlack(param.oAuthPayloadIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplatePatchWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplatePatchWithHttpInfo(param.transformationTemplateId, param.templatePatch, options).toPromise();
    }
    v1TransformationTemplatePatch(param, options) {
        return this.api.v1TransformationTemplatePatch(param.transformationTemplateId, param.templatePatch, options).toPromise();
    }
    v1TransformationTemplateSimulateWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateSimulateWithHttpInfo(param.transformationSimulateIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateSimulate(param, options) {
        return this.api.v1TransformationTemplateSimulate(param.transformationSimulateIn, param.idempotencyKey, options).toPromise();
    }
    v1TransformationTemplateUpdateWithHttpInfo(param, options) {
        return this.api.v1TransformationTemplateUpdateWithHttpInfo(param.transformationTemplateId, param.templateUpdate, options).toPromise();
    }
    v1TransformationTemplateUpdate(param, options) {
        return this.api.v1TransformationTemplateUpdate(param.transformationTemplateId, param.templateUpdate, options).toPromise();
    }
}
exports.ObjectTransformationTemplateApi = ObjectTransformationTemplateApi;
const ObservableAPI_19 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/types/ObservableAPI.js [app-rsc] (ecmascript)");
class ObjectWebhookEndpointApi {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new ObservableAPI_19.ObservableWebhookEndpointApi(configuration, requestFactory, responseProcessor);
    }
    createOperationalWebhookEndpointWithHttpInfo(param, options) {
        return this.api.createOperationalWebhookEndpointWithHttpInfo(param.operationalWebhookEndpointIn, param.idempotencyKey, options).toPromise();
    }
    createOperationalWebhookEndpoint(param, options) {
        return this.api.createOperationalWebhookEndpoint(param.operationalWebhookEndpointIn, param.idempotencyKey, options).toPromise();
    }
    deleteOperationalWebhookEndpointWithHttpInfo(param, options) {
        return this.api.deleteOperationalWebhookEndpointWithHttpInfo(param.endpointId, options).toPromise();
    }
    deleteOperationalWebhookEndpoint(param, options) {
        return this.api.deleteOperationalWebhookEndpoint(param.endpointId, options).toPromise();
    }
    getOperationalWebhookEndpointWithHttpInfo(param, options) {
        return this.api.getOperationalWebhookEndpointWithHttpInfo(param.endpointId, options).toPromise();
    }
    getOperationalWebhookEndpoint(param, options) {
        return this.api.getOperationalWebhookEndpoint(param.endpointId, options).toPromise();
    }
    getOperationalWebhookEndpointSecretWithHttpInfo(param, options) {
        return this.api.getOperationalWebhookEndpointSecretWithHttpInfo(param.endpointId, options).toPromise();
    }
    getOperationalWebhookEndpointSecret(param, options) {
        return this.api.getOperationalWebhookEndpointSecret(param.endpointId, options).toPromise();
    }
    listOperationalWebhookEndpointsWithHttpInfo(param = {}, options) {
        return this.api.listOperationalWebhookEndpointsWithHttpInfo(param.limit, param.iterator, param.order, options).toPromise();
    }
    listOperationalWebhookEndpoints(param = {}, options) {
        return this.api.listOperationalWebhookEndpoints(param.limit, param.iterator, param.order, options).toPromise();
    }
    rotateOperationalWebhookEndpointSecretWithHttpInfo(param, options) {
        return this.api.rotateOperationalWebhookEndpointSecretWithHttpInfo(param.endpointId, param.operationalWebhookEndpointSecretIn, param.idempotencyKey, options).toPromise();
    }
    rotateOperationalWebhookEndpointSecret(param, options) {
        return this.api.rotateOperationalWebhookEndpointSecret(param.endpointId, param.operationalWebhookEndpointSecretIn, param.idempotencyKey, options).toPromise();
    }
    updateOperationalWebhookEndpointWithHttpInfo(param, options) {
        return this.api.updateOperationalWebhookEndpointWithHttpInfo(param.endpointId, param.operationalWebhookEndpointUpdate, options).toPromise();
    }
    updateOperationalWebhookEndpoint(param, options) {
        return this.api.updateOperationalWebhookEndpoint(param.endpointId, param.operationalWebhookEndpointUpdate, options).toPromise();
    }
}
exports.ObjectWebhookEndpointApi = ObjectWebhookEndpointApi; //# sourceMappingURL=ObjectParamAPI.js.map
}}),

};

//# sourceMappingURL=6f523_svix_dist_openapi_types_23ca5f._.js.map