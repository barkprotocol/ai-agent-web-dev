module.exports = {

"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AggregateEventTypesOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AggregateEventTypesOut = void 0;
class AggregateEventTypesOut {
    static getAttributeTypeMap() {
        return AggregateEventTypesOut.attributeTypeMap;
    }
    constructor(){}
}
exports.AggregateEventTypesOut = AggregateEventTypesOut;
AggregateEventTypesOut.discriminator = undefined;
AggregateEventTypesOut.mapping = undefined;
AggregateEventTypesOut.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    }
]; //# sourceMappingURL=AggregateEventTypesOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppPortalAccessIn = void 0;
class AppPortalAccessIn {
    static getAttributeTypeMap() {
        return AppPortalAccessIn.attributeTypeMap;
    }
    constructor(){}
}
exports.AppPortalAccessIn = AppPortalAccessIn;
AppPortalAccessIn.discriminator = undefined;
AppPortalAccessIn.mapping = undefined;
AppPortalAccessIn.attributeTypeMap = [
    {
        "name": "application",
        "baseName": "application",
        "type": "ApplicationIn",
        "format": ""
    },
    {
        "name": "expiry",
        "baseName": "expiry",
        "type": "number",
        "format": "uint64"
    },
    {
        "name": "featureFlags",
        "baseName": "featureFlags",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean",
        "format": ""
    }
]; //# sourceMappingURL=AppPortalAccessIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppPortalAccessOut = void 0;
class AppPortalAccessOut {
    static getAttributeTypeMap() {
        return AppPortalAccessOut.attributeTypeMap;
    }
    constructor(){}
}
exports.AppPortalAccessOut = AppPortalAccessOut;
AppPortalAccessOut.discriminator = undefined;
AppPortalAccessOut.mapping = undefined;
AppPortalAccessOut.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=AppPortalAccessOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppUsageStatsIn = void 0;
class AppUsageStatsIn {
    static getAttributeTypeMap() {
        return AppUsageStatsIn.attributeTypeMap;
    }
    constructor(){}
}
exports.AppUsageStatsIn = AppUsageStatsIn;
AppUsageStatsIn.discriminator = undefined;
AppUsageStatsIn.mapping = undefined;
AppUsageStatsIn.attributeTypeMap = [
    {
        "name": "appIds",
        "baseName": "appIds",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "since",
        "baseName": "since",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "until",
        "baseName": "until",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=AppUsageStatsIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppUsageStatsOut = void 0;
class AppUsageStatsOut {
    static getAttributeTypeMap() {
        return AppUsageStatsOut.attributeTypeMap;
    }
    constructor(){}
}
exports.AppUsageStatsOut = AppUsageStatsOut;
AppUsageStatsOut.discriminator = undefined;
AppUsageStatsOut.mapping = undefined;
AppUsageStatsOut.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    },
    {
        "name": "unresolvedAppIds",
        "baseName": "unresolvedAppIds",
        "type": "Array<string>",
        "format": ""
    }
]; //# sourceMappingURL=AppUsageStatsOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationIn = void 0;
class ApplicationIn {
    static getAttributeTypeMap() {
        return ApplicationIn.attributeTypeMap;
    }
    constructor(){}
}
exports.ApplicationIn = ApplicationIn;
ApplicationIn.discriminator = undefined;
ApplicationIn.mapping = undefined;
ApplicationIn.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ApplicationIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationOut = void 0;
class ApplicationOut {
    static getAttributeTypeMap() {
        return ApplicationOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ApplicationOut = ApplicationOut;
ApplicationOut.discriminator = undefined;
ApplicationOut.mapping = undefined;
ApplicationOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=ApplicationOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationPatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationPatch = void 0;
class ApplicationPatch {
    static getAttributeTypeMap() {
        return ApplicationPatch.attributeTypeMap;
    }
    constructor(){}
}
exports.ApplicationPatch = ApplicationPatch;
ApplicationPatch.discriminator = undefined;
ApplicationPatch.mapping = undefined;
ApplicationPatch.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ApplicationPatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationStats.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationStats = void 0;
class ApplicationStats {
    static getAttributeTypeMap() {
        return ApplicationStats.attributeTypeMap;
    }
    constructor(){}
}
exports.ApplicationStats = ApplicationStats;
ApplicationStats.discriminator = undefined;
ApplicationStats.mapping = undefined;
ApplicationStats.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "messageDestinations",
        "baseName": "messageDestinations",
        "type": "number",
        "format": "int"
    }
]; //# sourceMappingURL=ApplicationStats.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationTokenExpireIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationTokenExpireIn = void 0;
class ApplicationTokenExpireIn {
    static getAttributeTypeMap() {
        return ApplicationTokenExpireIn.attributeTypeMap;
    }
    constructor(){}
}
exports.ApplicationTokenExpireIn = ApplicationTokenExpireIn;
ApplicationTokenExpireIn.discriminator = undefined;
ApplicationTokenExpireIn.mapping = undefined;
ApplicationTokenExpireIn.attributeTypeMap = [
    {
        "name": "expiry",
        "baseName": "expiry",
        "type": "number",
        "format": "int64"
    }
]; //# sourceMappingURL=ApplicationTokenExpireIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttemptStatisticsData = void 0;
class AttemptStatisticsData {
    static getAttributeTypeMap() {
        return AttemptStatisticsData.attributeTypeMap;
    }
    constructor(){}
}
exports.AttemptStatisticsData = AttemptStatisticsData;
AttemptStatisticsData.discriminator = undefined;
AttemptStatisticsData.mapping = undefined;
AttemptStatisticsData.attributeTypeMap = [
    {
        "name": "failureCount",
        "baseName": "failureCount",
        "type": "Array<number>",
        "format": "int"
    },
    {
        "name": "successCount",
        "baseName": "successCount",
        "type": "Array<number>",
        "format": "int"
    }
]; //# sourceMappingURL=AttemptStatisticsData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsResponse.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttemptStatisticsResponse = void 0;
class AttemptStatisticsResponse {
    static getAttributeTypeMap() {
        return AttemptStatisticsResponse.attributeTypeMap;
    }
    constructor(){}
}
exports.AttemptStatisticsResponse = AttemptStatisticsResponse;
AttemptStatisticsResponse.discriminator = undefined;
AttemptStatisticsResponse.mapping = undefined;
AttemptStatisticsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "AttemptStatisticsData",
        "format": ""
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "period",
        "baseName": "period",
        "type": "StatisticsPeriod",
        "format": ""
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=AttemptStatisticsResponse.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AuthTokenOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthTokenOut = void 0;
class AuthTokenOut {
    static getAttributeTypeMap() {
        return AuthTokenOut.attributeTypeMap;
    }
    constructor(){}
}
exports.AuthTokenOut = AuthTokenOut;
AuthTokenOut.discriminator = undefined;
AuthTokenOut.mapping = undefined;
AuthTokenOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "expiresAt",
        "baseName": "expiresAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "scopes",
        "baseName": "scopes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=AuthTokenOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AzureBlobStorageConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AzureBlobStorageConfig = void 0;
class AzureBlobStorageConfig {
    static getAttributeTypeMap() {
        return AzureBlobStorageConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.AzureBlobStorageConfig = AzureBlobStorageConfig;
AzureBlobStorageConfig.discriminator = undefined;
AzureBlobStorageConfig.mapping = undefined;
AzureBlobStorageConfig.attributeTypeMap = [
    {
        "name": "accessKey",
        "baseName": "accessKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "container",
        "baseName": "container",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=AzureBlobStorageConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTaskOut = void 0;
class BackgroundTaskOut {
    static getAttributeTypeMap() {
        return BackgroundTaskOut.attributeTypeMap;
    }
    constructor(){}
}
exports.BackgroundTaskOut = BackgroundTaskOut;
BackgroundTaskOut.discriminator = undefined;
BackgroundTaskOut.mapping = undefined;
BackgroundTaskOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "any",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    }
]; //# sourceMappingURL=BackgroundTaskOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskStatus.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTaskStatus = void 0;
var BackgroundTaskStatus;
(function(BackgroundTaskStatus) {
    BackgroundTaskStatus["Running"] = "running";
    BackgroundTaskStatus["Finished"] = "finished";
    BackgroundTaskStatus["Failed"] = "failed";
})(BackgroundTaskStatus = exports.BackgroundTaskStatus || (exports.BackgroundTaskStatus = {})); //# sourceMappingURL=BackgroundTaskStatus.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskType.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundTaskType = void 0;
var BackgroundTaskType;
(function(BackgroundTaskType) {
    BackgroundTaskType["EndpointReplay"] = "endpoint.replay";
    BackgroundTaskType["EndpointRecover"] = "endpoint.recover";
    BackgroundTaskType["ApplicationStats"] = "application.stats";
    BackgroundTaskType["MessageBroadcast"] = "message.broadcast";
    BackgroundTaskType["SdkGenerate"] = "sdk.generate";
    BackgroundTaskType["EventTypeAggregate"] = "event-type.aggregate";
})(BackgroundTaskType = exports.BackgroundTaskType || (exports.BackgroundTaskType = {})); //# sourceMappingURL=BackgroundTaskType.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BigQueryConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BigQueryConfig = void 0;
class BigQueryConfig {
    static getAttributeTypeMap() {
        return BigQueryConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.BigQueryConfig = BigQueryConfig;
BigQueryConfig.discriminator = undefined;
BigQueryConfig.mapping = undefined;
BigQueryConfig.attributeTypeMap = [
    {
        "name": "credentials",
        "baseName": "credentials",
        "type": "string",
        "format": ""
    },
    {
        "name": "datasetId",
        "baseName": "datasetId",
        "type": "string",
        "format": ""
    },
    {
        "name": "projectId",
        "baseName": "projectId",
        "type": "string",
        "format": ""
    },
    {
        "name": "tableId",
        "baseName": "tableId",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=BigQueryConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BorderRadiusConfig = void 0;
class BorderRadiusConfig {
    static getAttributeTypeMap() {
        return BorderRadiusConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.BorderRadiusConfig = BorderRadiusConfig;
BorderRadiusConfig.discriminator = undefined;
BorderRadiusConfig.mapping = undefined;
BorderRadiusConfig.attributeTypeMap = [
    {
        "name": "button",
        "baseName": "button",
        "type": "BorderRadiusEnum",
        "format": ""
    },
    {
        "name": "card",
        "baseName": "card",
        "type": "BorderRadiusEnum",
        "format": ""
    },
    {
        "name": "input",
        "baseName": "input",
        "type": "BorderRadiusEnum",
        "format": ""
    }
]; //# sourceMappingURL=BorderRadiusConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusEnum.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BorderRadiusEnum = void 0;
var BorderRadiusEnum;
(function(BorderRadiusEnum) {
    BorderRadiusEnum["None"] = "none";
    BorderRadiusEnum["Lg"] = "lg";
    BorderRadiusEnum["Md"] = "md";
    BorderRadiusEnum["Sm"] = "sm";
    BorderRadiusEnum["Full"] = "full";
})(BorderRadiusEnum = exports.BorderRadiusEnum || (exports.BorderRadiusEnum = {})); //# sourceMappingURL=BorderRadiusEnum.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ClientSecretJwtParamsIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClientSecretJwtParamsIn = void 0;
class ClientSecretJwtParamsIn {
    static getAttributeTypeMap() {
        return ClientSecretJwtParamsIn.attributeTypeMap;
    }
    constructor(){}
}
exports.ClientSecretJwtParamsIn = ClientSecretJwtParamsIn;
ClientSecretJwtParamsIn.discriminator = undefined;
ClientSecretJwtParamsIn.mapping = undefined;
ClientSecretJwtParamsIn.attributeTypeMap = [
    {
        "name": "secretBase64",
        "baseName": "secretBase64",
        "type": "string",
        "format": ""
    },
    {
        "name": "secretId",
        "baseName": "secretId",
        "type": "string",
        "format": ""
    },
    {
        "name": "signingAlgorithm",
        "baseName": "signingAlgorithm",
        "type": "OauthJwsSigningAlgorithm",
        "format": ""
    },
    {
        "name": "tokenExpirySecs",
        "baseName": "tokenExpirySecs",
        "type": "number",
        "format": "uint64"
    }
]; //# sourceMappingURL=ClientSecretJwtParamsIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionChoice.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompletionChoice = void 0;
class CompletionChoice {
    static getAttributeTypeMap() {
        return CompletionChoice.attributeTypeMap;
    }
    constructor(){}
}
exports.CompletionChoice = CompletionChoice;
CompletionChoice.discriminator = undefined;
CompletionChoice.mapping = undefined;
CompletionChoice.attributeTypeMap = [
    {
        "name": "finishReason",
        "baseName": "finish_reason",
        "type": "string",
        "format": ""
    },
    {
        "name": "index",
        "baseName": "index",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "CompletionMessage",
        "format": ""
    }
]; //# sourceMappingURL=CompletionChoice.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionMessage.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompletionMessage = void 0;
class CompletionMessage {
    static getAttributeTypeMap() {
        return CompletionMessage.attributeTypeMap;
    }
    constructor(){}
}
exports.CompletionMessage = CompletionMessage;
CompletionMessage.discriminator = undefined;
CompletionMessage.mapping = undefined;
CompletionMessage.attributeTypeMap = [
    {
        "name": "content",
        "baseName": "content",
        "type": "string",
        "format": ""
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=CompletionMessage.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CountOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CountOut = void 0;
class CountOut {
    static getAttributeTypeMap() {
        return CountOut.attributeTypeMap;
    }
    constructor(){}
}
exports.CountOut = CountOut;
CountOut.discriminator = undefined;
CountOut.mapping = undefined;
CountOut.attributeTypeMap = [
    {
        "name": "approximated",
        "baseName": "approximated",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number",
        "format": "uint64"
    }
]; //# sourceMappingURL=CountOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateStreamIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateStreamIn = void 0;
class CreateStreamIn {
    static getAttributeTypeMap() {
        return CreateStreamIn.attributeTypeMap;
    }
    constructor(){}
}
exports.CreateStreamIn = CreateStreamIn;
CreateStreamIn.discriminator = undefined;
CreateStreamIn.mapping = undefined;
CreateStreamIn.attributeTypeMap = [
    {
        "name": "messages",
        "baseName": "messages",
        "type": "Array<EventIn>",
        "format": ""
    },
    {
        "name": "stream",
        "baseName": "stream",
        "type": "StreamIn",
        "format": ""
    }
]; //# sourceMappingURL=CreateStreamIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateTokenIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateTokenIn = void 0;
class CreateTokenIn {
    static getAttributeTypeMap() {
        return CreateTokenIn.attributeTypeMap;
    }
    constructor(){}
}
exports.CreateTokenIn = CreateTokenIn;
CreateTokenIn.discriminator = undefined;
CreateTokenIn.mapping = undefined;
CreateTokenIn.attributeTypeMap = [
    {
        "name": "expiry",
        "baseName": "expiry",
        "type": "number",
        "format": "uint64"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=CreateTokenIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomColorPalette.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomColorPalette = void 0;
class CustomColorPalette {
    static getAttributeTypeMap() {
        return CustomColorPalette.attributeTypeMap;
    }
    constructor(){}
}
exports.CustomColorPalette = CustomColorPalette;
CustomColorPalette.discriminator = undefined;
CustomColorPalette.mapping = undefined;
CustomColorPalette.attributeTypeMap = [
    {
        "name": "backgroundHover",
        "baseName": "backgroundHover",
        "type": "string",
        "format": "color"
    },
    {
        "name": "backgroundPrimary",
        "baseName": "backgroundPrimary",
        "type": "string",
        "format": "color"
    },
    {
        "name": "backgroundSecondary",
        "baseName": "backgroundSecondary",
        "type": "string",
        "format": "color"
    },
    {
        "name": "buttonPrimary",
        "baseName": "buttonPrimary",
        "type": "string",
        "format": "color"
    },
    {
        "name": "interactiveAccent",
        "baseName": "interactiveAccent",
        "type": "string",
        "format": "color"
    },
    {
        "name": "navigationAccent",
        "baseName": "navigationAccent",
        "type": "string",
        "format": "color"
    },
    {
        "name": "primary",
        "baseName": "primary",
        "type": "string",
        "format": "color"
    },
    {
        "name": "textDanger",
        "baseName": "textDanger",
        "type": "string",
        "format": "color"
    },
    {
        "name": "textPrimary",
        "baseName": "textPrimary",
        "type": "string",
        "format": "color"
    }
]; //# sourceMappingURL=CustomColorPalette.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomStringsOverride.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomStringsOverride = void 0;
class CustomStringsOverride {
    static getAttributeTypeMap() {
        return CustomStringsOverride.attributeTypeMap;
    }
    constructor(){}
}
exports.CustomStringsOverride = CustomStringsOverride;
CustomStringsOverride.discriminator = undefined;
CustomStringsOverride.mapping = undefined;
CustomStringsOverride.attributeTypeMap = [
    {
        "name": "channelsHelp",
        "baseName": "channelsHelp",
        "type": "string",
        "format": ""
    },
    {
        "name": "channelsMany",
        "baseName": "channelsMany",
        "type": "string",
        "format": ""
    },
    {
        "name": "channelsOne",
        "baseName": "channelsOne",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=CustomStringsOverride.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomThemeOverride.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomThemeOverride = void 0;
class CustomThemeOverride {
    static getAttributeTypeMap() {
        return CustomThemeOverride.attributeTypeMap;
    }
    constructor(){}
}
exports.CustomThemeOverride = CustomThemeOverride;
CustomThemeOverride.discriminator = undefined;
CustomThemeOverride.mapping = undefined;
CustomThemeOverride.attributeTypeMap = [
    {
        "name": "borderRadius",
        "baseName": "borderRadius",
        "type": "BorderRadiusConfig",
        "format": ""
    },
    {
        "name": "fontSize",
        "baseName": "fontSize",
        "type": "FontSizeConfig",
        "format": ""
    }
]; //# sourceMappingURL=CustomThemeOverride.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/DashboardAccessOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DashboardAccessOut = void 0;
class DashboardAccessOut {
    static getAttributeTypeMap() {
        return DashboardAccessOut.attributeTypeMap;
    }
    constructor(){}
}
exports.DashboardAccessOut = DashboardAccessOut;
DashboardAccessOut.discriminator = undefined;
DashboardAccessOut.mapping = undefined;
DashboardAccessOut.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=DashboardAccessOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Duration.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Duration = void 0;
class Duration {
    static getAttributeTypeMap() {
        return Duration.attributeTypeMap;
    }
    constructor(){}
}
exports.Duration = Duration;
Duration.discriminator = undefined;
Duration.mapping = undefined;
Duration.attributeTypeMap = [
    {
        "name": "nanos",
        "baseName": "nanos",
        "type": "number",
        "format": "uint32"
    },
    {
        "name": "secs",
        "baseName": "secs",
        "type": "number",
        "format": "uint64"
    }
]; //# sourceMappingURL=Duration.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointCreatedEventTypeEnum = exports.EndpointCreatedEvent = void 0;
class EndpointCreatedEvent {
    static getAttributeTypeMap() {
        return EndpointCreatedEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointCreatedEvent = EndpointCreatedEvent;
EndpointCreatedEvent.discriminator = undefined;
EndpointCreatedEvent.mapping = undefined;
EndpointCreatedEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "EndpointCreatedEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EndpointCreatedEventTypeEnum",
        "format": ""
    }
];
var EndpointCreatedEventTypeEnum;
(function(EndpointCreatedEventTypeEnum) {
    EndpointCreatedEventTypeEnum["EndpointCreated"] = "endpoint.created";
})(EndpointCreatedEventTypeEnum = exports.EndpointCreatedEventTypeEnum || (exports.EndpointCreatedEventTypeEnum = {})); //# sourceMappingURL=EndpointCreatedEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointCreatedEventData = void 0;
class EndpointCreatedEventData {
    static getAttributeTypeMap() {
        return EndpointCreatedEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointCreatedEventData = EndpointCreatedEventData;
EndpointCreatedEventData.discriminator = undefined;
EndpointCreatedEventData.mapping = undefined;
EndpointCreatedEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointUid",
        "baseName": "endpointUid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EndpointCreatedEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointDeletedEventTypeEnum = exports.EndpointDeletedEvent = void 0;
class EndpointDeletedEvent {
    static getAttributeTypeMap() {
        return EndpointDeletedEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointDeletedEvent = EndpointDeletedEvent;
EndpointDeletedEvent.discriminator = undefined;
EndpointDeletedEvent.mapping = undefined;
EndpointDeletedEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "EndpointDeletedEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EndpointDeletedEventTypeEnum",
        "format": ""
    }
];
var EndpointDeletedEventTypeEnum;
(function(EndpointDeletedEventTypeEnum) {
    EndpointDeletedEventTypeEnum["EndpointDeleted"] = "endpoint.deleted";
})(EndpointDeletedEventTypeEnum = exports.EndpointDeletedEventTypeEnum || (exports.EndpointDeletedEventTypeEnum = {})); //# sourceMappingURL=EndpointDeletedEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointDeletedEventData = void 0;
class EndpointDeletedEventData {
    static getAttributeTypeMap() {
        return EndpointDeletedEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointDeletedEventData = EndpointDeletedEventData;
EndpointDeletedEventData.discriminator = undefined;
EndpointDeletedEventData.mapping = undefined;
EndpointDeletedEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointUid",
        "baseName": "endpointUid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EndpointDeletedEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointDisabledEventTypeEnum = exports.EndpointDisabledEvent = void 0;
class EndpointDisabledEvent {
    static getAttributeTypeMap() {
        return EndpointDisabledEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointDisabledEvent = EndpointDisabledEvent;
EndpointDisabledEvent.discriminator = undefined;
EndpointDisabledEvent.mapping = undefined;
EndpointDisabledEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "EndpointDisabledEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EndpointDisabledEventTypeEnum",
        "format": ""
    }
];
var EndpointDisabledEventTypeEnum;
(function(EndpointDisabledEventTypeEnum) {
    EndpointDisabledEventTypeEnum["EndpointDisabled"] = "endpoint.disabled";
})(EndpointDisabledEventTypeEnum = exports.EndpointDisabledEventTypeEnum || (exports.EndpointDisabledEventTypeEnum = {})); //# sourceMappingURL=EndpointDisabledEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointDisabledEventData = void 0;
class EndpointDisabledEventData {
    static getAttributeTypeMap() {
        return EndpointDisabledEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointDisabledEventData = EndpointDisabledEventData;
EndpointDisabledEventData.discriminator = undefined;
EndpointDisabledEventData.mapping = undefined;
EndpointDisabledEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointUid",
        "baseName": "endpointUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "failSince",
        "baseName": "failSince",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=EndpointDisabledEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointHeadersIn = void 0;
class EndpointHeadersIn {
    static getAttributeTypeMap() {
        return EndpointHeadersIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointHeadersIn = EndpointHeadersIn;
EndpointHeadersIn.discriminator = undefined;
EndpointHeadersIn.mapping = undefined;
EndpointHeadersIn.attributeTypeMap = [
    {
        "name": "headers",
        "baseName": "headers",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
]; //# sourceMappingURL=EndpointHeadersIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointHeadersOut = void 0;
class EndpointHeadersOut {
    static getAttributeTypeMap() {
        return EndpointHeadersOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointHeadersOut = EndpointHeadersOut;
EndpointHeadersOut.discriminator = undefined;
EndpointHeadersOut.mapping = undefined;
EndpointHeadersOut.attributeTypeMap = [
    {
        "name": "headers",
        "baseName": "headers",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "sensitive",
        "baseName": "sensitive",
        "type": "Array<string>",
        "format": ""
    }
]; //# sourceMappingURL=EndpointHeadersOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersPatchIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointHeadersPatchIn = void 0;
class EndpointHeadersPatchIn {
    static getAttributeTypeMap() {
        return EndpointHeadersPatchIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointHeadersPatchIn = EndpointHeadersPatchIn;
EndpointHeadersPatchIn.discriminator = undefined;
EndpointHeadersPatchIn.mapping = undefined;
EndpointHeadersPatchIn.attributeTypeMap = [
    {
        "name": "headers",
        "baseName": "headers",
        "type": "{ [key: string]: string | null; }",
        "format": ""
    }
]; //# sourceMappingURL=EndpointHeadersPatchIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointIn = void 0;
class EndpointIn {
    static getAttributeTypeMap() {
        return EndpointIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointIn = EndpointIn;
EndpointIn.discriminator = undefined;
EndpointIn.mapping = undefined;
EndpointIn.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "uint16"
    }
]; //# sourceMappingURL=EndpointIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMessageOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointMessageOut = void 0;
class EndpointMessageOut {
    static getAttributeTypeMap() {
        return EndpointMessageOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointMessageOut = EndpointMessageOut;
EndpointMessageOut.discriminator = undefined;
EndpointMessageOut.mapping = undefined;
EndpointMessageOut.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "eventId",
        "baseName": "eventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "nextAttempt",
        "baseName": "nextAttempt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "MessageStatus",
        "format": ""
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=EndpointMessageOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMtlsConfigIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointMtlsConfigIn = void 0;
class EndpointMtlsConfigIn {
    static getAttributeTypeMap() {
        return EndpointMtlsConfigIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointMtlsConfigIn = EndpointMtlsConfigIn;
EndpointMtlsConfigIn.discriminator = undefined;
EndpointMtlsConfigIn.mapping = undefined;
EndpointMtlsConfigIn.attributeTypeMap = [
    {
        "name": "identity",
        "baseName": "identity",
        "type": "string",
        "format": ""
    },
    {
        "name": "serverCaCert",
        "baseName": "serverCaCert",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EndpointMtlsConfigIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOauthConfigIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointOauthConfigIn = void 0;
class EndpointOauthConfigIn {
    static getAttributeTypeMap() {
        return EndpointOauthConfigIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointOauthConfigIn = EndpointOauthConfigIn;
EndpointOauthConfigIn.discriminator = undefined;
EndpointOauthConfigIn.mapping = undefined;
EndpointOauthConfigIn.attributeTypeMap = [
    {
        "name": "authMethod",
        "baseName": "authMethod",
        "type": "Oauth2AuthMethodIn",
        "format": ""
    },
    {
        "name": "clientId",
        "baseName": "clientId",
        "type": "string",
        "format": ""
    },
    {
        "name": "clientSecret",
        "baseName": "clientSecret",
        "type": "string",
        "format": ""
    },
    {
        "name": "extraParams",
        "baseName": "extraParams",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "grantType",
        "baseName": "grantType",
        "type": "Oauth2GrantTypeIn",
        "format": ""
    },
    {
        "name": "jwtParams",
        "baseName": "jwtParams",
        "type": "ClientSecretJwtParamsIn",
        "format": ""
    },
    {
        "name": "refreshToken",
        "baseName": "refreshToken",
        "type": "string",
        "format": ""
    },
    {
        "name": "scopes",
        "baseName": "scopes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "tokenUrl",
        "baseName": "tokenUrl",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=EndpointOauthConfigIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointOut = void 0;
class EndpointOut {
    static getAttributeTypeMap() {
        return EndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointOut = EndpointOut;
EndpointOut.discriminator = undefined;
EndpointOut.mapping = undefined;
EndpointOut.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "int32"
    }
]; //# sourceMappingURL=EndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointPatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointPatch = void 0;
class EndpointPatch {
    static getAttributeTypeMap() {
        return EndpointPatch.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointPatch = EndpointPatch;
EndpointPatch.discriminator = undefined;
EndpointPatch.mapping = undefined;
EndpointPatch.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "uint16"
    }
]; //# sourceMappingURL=EndpointPatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointSecretOut = void 0;
class EndpointSecretOut {
    static getAttributeTypeMap() {
        return EndpointSecretOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointSecretOut = EndpointSecretOut;
EndpointSecretOut.discriminator = undefined;
EndpointSecretOut.mapping = undefined;
EndpointSecretOut.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EndpointSecretOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretRotateIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointSecretRotateIn = void 0;
class EndpointSecretRotateIn {
    static getAttributeTypeMap() {
        return EndpointSecretRotateIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointSecretRotateIn = EndpointSecretRotateIn;
EndpointSecretRotateIn.discriminator = undefined;
EndpointSecretRotateIn.mapping = undefined;
EndpointSecretRotateIn.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EndpointSecretRotateIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointStats.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointStats = void 0;
class EndpointStats {
    static getAttributeTypeMap() {
        return EndpointStats.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointStats = EndpointStats;
EndpointStats.discriminator = undefined;
EndpointStats.mapping = undefined;
EndpointStats.attributeTypeMap = [
    {
        "name": "fail",
        "baseName": "fail",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "pending",
        "baseName": "pending",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "sending",
        "baseName": "sending",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "success",
        "baseName": "success",
        "type": "number",
        "format": "int64"
    }
]; //# sourceMappingURL=EndpointStats.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationIn = void 0;
class EndpointTransformationIn {
    static getAttributeTypeMap() {
        return EndpointTransformationIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointTransformationIn = EndpointTransformationIn;
EndpointTransformationIn.discriminator = undefined;
EndpointTransformationIn.mapping = undefined;
EndpointTransformationIn.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean",
        "format": ""
    }
]; //# sourceMappingURL=EndpointTransformationIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationOut = void 0;
class EndpointTransformationOut {
    static getAttributeTypeMap() {
        return EndpointTransformationOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointTransformationOut = EndpointTransformationOut;
EndpointTransformationOut.discriminator = undefined;
EndpointTransformationOut.mapping = undefined;
EndpointTransformationOut.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean",
        "format": ""
    }
]; //# sourceMappingURL=EndpointTransformationOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationSimulateIn = void 0;
class EndpointTransformationSimulateIn {
    static getAttributeTypeMap() {
        return EndpointTransformationSimulateIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointTransformationSimulateIn = EndpointTransformationSimulateIn;
EndpointTransformationSimulateIn.discriminator = undefined;
EndpointTransformationSimulateIn.mapping = undefined;
EndpointTransformationSimulateIn.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EndpointTransformationSimulateIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointTransformationSimulateOut = void 0;
class EndpointTransformationSimulateOut {
    static getAttributeTypeMap() {
        return EndpointTransformationSimulateOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointTransformationSimulateOut = EndpointTransformationSimulateOut;
EndpointTransformationSimulateOut.discriminator = undefined;
EndpointTransformationSimulateOut.mapping = undefined;
EndpointTransformationSimulateOut.attributeTypeMap = [
    {
        "name": "method",
        "baseName": "method",
        "type": "TransformationHttpMethod",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=EndpointTransformationSimulateOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointUpdate = void 0;
class EndpointUpdate {
    static getAttributeTypeMap() {
        return EndpointUpdate.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointUpdate = EndpointUpdate;
EndpointUpdate.discriminator = undefined;
EndpointUpdate.mapping = undefined;
EndpointUpdate.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "uint16"
    }
]; //# sourceMappingURL=EndpointUpdate.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointUpdatedEventTypeEnum = exports.EndpointUpdatedEvent = void 0;
class EndpointUpdatedEvent {
    static getAttributeTypeMap() {
        return EndpointUpdatedEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointUpdatedEvent = EndpointUpdatedEvent;
EndpointUpdatedEvent.discriminator = undefined;
EndpointUpdatedEvent.mapping = undefined;
EndpointUpdatedEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "EndpointUpdatedEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EndpointUpdatedEventTypeEnum",
        "format": ""
    }
];
var EndpointUpdatedEventTypeEnum;
(function(EndpointUpdatedEventTypeEnum) {
    EndpointUpdatedEventTypeEnum["EndpointUpdated"] = "endpoint.updated";
})(EndpointUpdatedEventTypeEnum = exports.EndpointUpdatedEventTypeEnum || (exports.EndpointUpdatedEventTypeEnum = {})); //# sourceMappingURL=EndpointUpdatedEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EndpointUpdatedEventData = void 0;
class EndpointUpdatedEventData {
    static getAttributeTypeMap() {
        return EndpointUpdatedEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.EndpointUpdatedEventData = EndpointUpdatedEventData;
EndpointUpdatedEventData.discriminator = undefined;
EndpointUpdatedEventData.mapping = undefined;
EndpointUpdatedEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointUid",
        "baseName": "endpointUid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EndpointUpdatedEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnvironmentIn = void 0;
class EnvironmentIn {
    static getAttributeTypeMap() {
        return EnvironmentIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EnvironmentIn = EnvironmentIn;
EnvironmentIn.discriminator = undefined;
EnvironmentIn.mapping = undefined;
EnvironmentIn.attributeTypeMap = [
    {
        "name": "eventTypes",
        "baseName": "eventTypes",
        "type": "Array<EventTypeIn>",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "any",
        "format": ""
    },
    {
        "name": "transformationTemplates",
        "baseName": "transformationTemplates",
        "type": "Array<TemplateIn>",
        "format": ""
    }
]; //# sourceMappingURL=EnvironmentIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnvironmentOut = void 0;
class EnvironmentOut {
    static getAttributeTypeMap() {
        return EnvironmentOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EnvironmentOut = EnvironmentOut;
EnvironmentOut.discriminator = undefined;
EnvironmentOut.mapping = undefined;
EnvironmentOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "eventTypes",
        "baseName": "eventTypes",
        "type": "Array<EventTypeOut>",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "any",
        "format": ""
    },
    {
        "name": "transformationTemplates",
        "baseName": "transformationTemplates",
        "type": "Array<TemplateOut>",
        "format": ""
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "int"
    }
]; //# sourceMappingURL=EnvironmentOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentSettingsOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnvironmentSettingsOut = void 0;
class EnvironmentSettingsOut {
    static getAttributeTypeMap() {
        return EnvironmentSettingsOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EnvironmentSettingsOut = EnvironmentSettingsOut;
EnvironmentSettingsOut.discriminator = undefined;
EnvironmentSettingsOut.mapping = undefined;
EnvironmentSettingsOut.attributeTypeMap = [
    {
        "name": "colorPaletteDark",
        "baseName": "colorPaletteDark",
        "type": "CustomColorPalette",
        "format": ""
    },
    {
        "name": "colorPaletteLight",
        "baseName": "colorPaletteLight",
        "type": "CustomColorPalette",
        "format": ""
    },
    {
        "name": "customColor",
        "baseName": "customColor",
        "type": "string",
        "format": "color"
    },
    {
        "name": "customFontFamily",
        "baseName": "customFontFamily",
        "type": "string",
        "format": ""
    },
    {
        "name": "customFontFamilyUrl",
        "baseName": "customFontFamilyUrl",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "customLogoUrl",
        "baseName": "customLogoUrl",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "customStringsOverride",
        "baseName": "customStringsOverride",
        "type": "CustomStringsOverride",
        "format": ""
    },
    {
        "name": "customThemeOverride",
        "baseName": "customThemeOverride",
        "type": "CustomThemeOverride",
        "format": ""
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string",
        "format": ""
    },
    {
        "name": "enableChannels",
        "baseName": "enableChannels",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "enableIntegrationManagement",
        "baseName": "enableIntegrationManagement",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "enableMessageStream",
        "baseName": "enableMessageStream",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "enableMessageTags",
        "baseName": "enableMessageTags",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "enableTransformations",
        "baseName": "enableTransformations",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "showUseSvixPlay",
        "baseName": "showUseSvixPlay",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "wipeSuccessfulPayload",
        "baseName": "wipeSuccessfulPayload",
        "type": "boolean",
        "format": ""
    }
]; //# sourceMappingURL=EnvironmentSettingsOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventExampleIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventExampleIn = void 0;
class EventExampleIn {
    static getAttributeTypeMap() {
        return EventExampleIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EventExampleIn = EventExampleIn;
EventExampleIn.discriminator = undefined;
EventExampleIn.mapping = undefined;
EventExampleIn.attributeTypeMap = [
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "exampleIndex",
        "baseName": "exampleIndex",
        "type": "number",
        "format": "uint"
    }
]; //# sourceMappingURL=EventExampleIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventIn = void 0;
class EventIn {
    static getAttributeTypeMap() {
        return EventIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EventIn = EventIn;
EventIn.discriminator = undefined;
EventIn.mapping = undefined;
EventIn.attributeTypeMap = [
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EventIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventOut = void 0;
class EventOut {
    static getAttributeTypeMap() {
        return EventOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EventOut = EventOut;
EventOut.discriminator = undefined;
EventOut.mapping = undefined;
EventOut.attributeTypeMap = [
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "string",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=EventOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventStreamOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventStreamOut = void 0;
class EventStreamOut {
    static getAttributeTypeMap() {
        return EventStreamOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EventStreamOut = EventStreamOut;
EventStreamOut.discriminator = undefined;
EventStreamOut.mapping = undefined;
EventStreamOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<EventOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EventStreamOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeExampleOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeExampleOut = void 0;
class EventTypeExampleOut {
    static getAttributeTypeMap() {
        return EventTypeExampleOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeExampleOut = EventTypeExampleOut;
EventTypeExampleOut.discriminator = undefined;
EventTypeExampleOut.mapping = undefined;
EventTypeExampleOut.attributeTypeMap = [
    {
        "name": "example",
        "baseName": "example",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeExampleOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeFromOpenApi.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeFromOpenApi = void 0;
class EventTypeFromOpenApi {
    static getAttributeTypeMap() {
        return EventTypeFromOpenApi.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeFromOpenApi = EventTypeFromOpenApi;
EventTypeFromOpenApi.discriminator = undefined;
EventTypeFromOpenApi.mapping = undefined;
EventTypeFromOpenApi.attributeTypeMap = [
    {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemas",
        "baseName": "schemas",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeFromOpenApi.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeImportOpenApiIn = void 0;
class EventTypeImportOpenApiIn {
    static getAttributeTypeMap() {
        return EventTypeImportOpenApiIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeImportOpenApiIn = EventTypeImportOpenApiIn;
EventTypeImportOpenApiIn.discriminator = undefined;
EventTypeImportOpenApiIn.mapping = undefined;
EventTypeImportOpenApiIn.attributeTypeMap = [
    {
        "name": "dryRun",
        "baseName": "dry_run",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "any",
        "format": ""
    },
    {
        "name": "specRaw",
        "baseName": "specRaw",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeImportOpenApiIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeImportOpenApiOut = void 0;
class EventTypeImportOpenApiOut {
    static getAttributeTypeMap() {
        return EventTypeImportOpenApiOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeImportOpenApiOut = EventTypeImportOpenApiOut;
EventTypeImportOpenApiOut.discriminator = undefined;
EventTypeImportOpenApiOut.mapping = undefined;
EventTypeImportOpenApiOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "EventTypeImportOpenApiOutData",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeImportOpenApiOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOutData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeImportOpenApiOutData = void 0;
class EventTypeImportOpenApiOutData {
    static getAttributeTypeMap() {
        return EventTypeImportOpenApiOutData.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeImportOpenApiOutData = EventTypeImportOpenApiOutData;
EventTypeImportOpenApiOutData.discriminator = undefined;
EventTypeImportOpenApiOutData.mapping = undefined;
EventTypeImportOpenApiOutData.attributeTypeMap = [
    {
        "name": "modified",
        "baseName": "modified",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "toModify",
        "baseName": "to_modify",
        "type": "Array<EventTypeFromOpenApi>",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeImportOpenApiOutData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeIn = void 0;
class EventTypeIn {
    static getAttributeTypeMap() {
        return EventTypeIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeIn = EventTypeIn;
EventTypeIn.discriminator = undefined;
EventTypeIn.mapping = undefined;
EventTypeIn.attributeTypeMap = [
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemas",
        "baseName": "schemas",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeOut = void 0;
class EventTypeOut {
    static getAttributeTypeMap() {
        return EventTypeOut.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeOut = EventTypeOut;
EventTypeOut.discriminator = undefined;
EventTypeOut.mapping = undefined;
EventTypeOut.attributeTypeMap = [
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemas",
        "baseName": "schemas",
        "type": "any",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=EventTypeOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypePatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypePatch = void 0;
class EventTypePatch {
    static getAttributeTypeMap() {
        return EventTypePatch.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypePatch = EventTypePatch;
EventTypePatch.discriminator = undefined;
EventTypePatch.mapping = undefined;
EventTypePatch.attributeTypeMap = [
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemas",
        "baseName": "schemas",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EventTypePatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeSchemaIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeSchemaIn = void 0;
class EventTypeSchemaIn {
    static getAttributeTypeMap() {
        return EventTypeSchemaIn.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeSchemaIn = EventTypeSchemaIn;
EventTypeSchemaIn.discriminator = undefined;
EventTypeSchemaIn.mapping = undefined;
EventTypeSchemaIn.attributeTypeMap = [
    {
        "name": "schema",
        "baseName": "schema",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeSchemaIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeUpdate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventTypeUpdate = void 0;
class EventTypeUpdate {
    static getAttributeTypeMap() {
        return EventTypeUpdate.attributeTypeMap;
    }
    constructor(){}
}
exports.EventTypeUpdate = EventTypeUpdate;
EventTypeUpdate.discriminator = undefined;
EventTypeUpdate.mapping = undefined;
EventTypeUpdate.attributeTypeMap = [
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "deprecated",
        "baseName": "deprecated",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemas",
        "baseName": "schemas",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=EventTypeUpdate.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ExportEventTypeOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExportEventTypeOut = void 0;
class ExportEventTypeOut {
    static getAttributeTypeMap() {
        return ExportEventTypeOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ExportEventTypeOut = ExportEventTypeOut;
ExportEventTypeOut.discriminator = undefined;
ExportEventTypeOut.mapping = undefined;
ExportEventTypeOut.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    }
]; //# sourceMappingURL=ExportEventTypeOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/FontSizeConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontSizeConfig = void 0;
class FontSizeConfig {
    static getAttributeTypeMap() {
        return FontSizeConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.FontSizeConfig = FontSizeConfig;
FontSizeConfig.discriminator = undefined;
FontSizeConfig.mapping = undefined;
FontSizeConfig.attributeTypeMap = [
    {
        "name": "base",
        "baseName": "base",
        "type": "number",
        "format": "uint16"
    }
]; //# sourceMappingURL=FontSizeConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenerateIn = void 0;
class GenerateIn {
    static getAttributeTypeMap() {
        return GenerateIn.attributeTypeMap;
    }
    constructor(){}
}
exports.GenerateIn = GenerateIn;
GenerateIn.discriminator = undefined;
GenerateIn.mapping = undefined;
GenerateIn.attributeTypeMap = [
    {
        "name": "prompt",
        "baseName": "prompt",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=GenerateIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenerateOut = void 0;
class GenerateOut {
    static getAttributeTypeMap() {
        return GenerateOut.attributeTypeMap;
    }
    constructor(){}
}
exports.GenerateOut = GenerateOut;
GenerateOut.discriminator = undefined;
GenerateOut.mapping = undefined;
GenerateOut.attributeTypeMap = [
    {
        "name": "choices",
        "baseName": "choices",
        "type": "Array<CompletionChoice>",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "model",
        "baseName": "model",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=GenerateOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GoogleCloudStorageConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleCloudStorageConfig = void 0;
class GoogleCloudStorageConfig {
    static getAttributeTypeMap() {
        return GoogleCloudStorageConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.GoogleCloudStorageConfig = GoogleCloudStorageConfig;
GoogleCloudStorageConfig.discriminator = undefined;
GoogleCloudStorageConfig.mapping = undefined;
GoogleCloudStorageConfig.attributeTypeMap = [
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "string",
        "format": ""
    },
    {
        "name": "credentials",
        "baseName": "credentials",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=GoogleCloudStorageConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HTTPValidationError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTTPValidationError = void 0;
class HTTPValidationError {
    static getAttributeTypeMap() {
        return HTTPValidationError.attributeTypeMap;
    }
    constructor(){}
}
exports.HTTPValidationError = HTTPValidationError;
HTTPValidationError.discriminator = undefined;
HTTPValidationError.mapping = undefined;
HTTPValidationError.attributeTypeMap = [
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Array<ValidationError>",
        "format": ""
    }
]; //# sourceMappingURL=HTTPValidationError.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HttpErrorOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpErrorOut = void 0;
class HttpErrorOut {
    static getAttributeTypeMap() {
        return HttpErrorOut.attributeTypeMap;
    }
    constructor(){}
}
exports.HttpErrorOut = HttpErrorOut;
HttpErrorOut.discriminator = undefined;
HttpErrorOut.mapping = undefined;
HttpErrorOut.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=HttpErrorOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HubspotOauthConfigIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HubspotOauthConfigIn = void 0;
class HubspotOauthConfigIn {
    static getAttributeTypeMap() {
        return HubspotOauthConfigIn.attributeTypeMap;
    }
    constructor(){}
}
exports.HubspotOauthConfigIn = HubspotOauthConfigIn;
HubspotOauthConfigIn.discriminator = undefined;
HubspotOauthConfigIn.mapping = undefined;
HubspotOauthConfigIn.attributeTypeMap = [
    {
        "name": "refreshToken",
        "baseName": "refresh_token",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=HubspotOauthConfigIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/InboundPathParams.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InboundPathParams = void 0;
class InboundPathParams {
    static getAttributeTypeMap() {
        return InboundPathParams.attributeTypeMap;
    }
    constructor(){}
}
exports.InboundPathParams = InboundPathParams;
InboundPathParams.discriminator = undefined;
InboundPathParams.mapping = undefined;
InboundPathParams.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "app_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "inboundToken",
        "baseName": "inbound_token",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=InboundPathParams.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IncomingWebhookPayloadOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IncomingWebhookPayloadOut = void 0;
class IncomingWebhookPayloadOut {
    static getAttributeTypeMap() {
        return IncomingWebhookPayloadOut.attributeTypeMap;
    }
    constructor(){}
}
exports.IncomingWebhookPayloadOut = IncomingWebhookPayloadOut;
IncomingWebhookPayloadOut.discriminator = undefined;
IncomingWebhookPayloadOut.mapping = undefined;
IncomingWebhookPayloadOut.attributeTypeMap = [
    {
        "name": "channel",
        "baseName": "channel",
        "type": "string",
        "format": ""
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string",
        "format": ""
    },
    {
        "name": "incomingWebhookUrl",
        "baseName": "incomingWebhookUrl",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=IncomingWebhookPayloadOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationIn = void 0;
class IntegrationIn {
    static getAttributeTypeMap() {
        return IntegrationIn.attributeTypeMap;
    }
    constructor(){}
}
exports.IntegrationIn = IntegrationIn;
IntegrationIn.discriminator = undefined;
IntegrationIn.mapping = undefined;
IntegrationIn.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=IntegrationIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationKeyOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationKeyOut = void 0;
class IntegrationKeyOut {
    static getAttributeTypeMap() {
        return IntegrationKeyOut.attributeTypeMap;
    }
    constructor(){}
}
exports.IntegrationKeyOut = IntegrationKeyOut;
IntegrationKeyOut.discriminator = undefined;
IntegrationKeyOut.mapping = undefined;
IntegrationKeyOut.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=IntegrationKeyOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationOut = void 0;
class IntegrationOut {
    static getAttributeTypeMap() {
        return IntegrationOut.attributeTypeMap;
    }
    constructor(){}
}
exports.IntegrationOut = IntegrationOut;
IntegrationOut.discriminator = undefined;
IntegrationOut.mapping = undefined;
IntegrationOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=IntegrationOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationUpdate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationUpdate = void 0;
class IntegrationUpdate {
    static getAttributeTypeMap() {
        return IntegrationUpdate.attributeTypeMap;
    }
    constructor(){}
}
exports.IntegrationUpdate = IntegrationUpdate;
IntegrationUpdate.discriminator = undefined;
IntegrationUpdate.mapping = undefined;
IntegrationUpdate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=IntegrationUpdate.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/KafkaSecurityProtocolType.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KafkaSecurityProtocolType = void 0;
var KafkaSecurityProtocolType;
(function(KafkaSecurityProtocolType) {
    KafkaSecurityProtocolType["Plaintext"] = "plaintext";
    KafkaSecurityProtocolType["Ssl"] = "ssl";
    KafkaSecurityProtocolType["SaslSsl"] = "sasl-ssl";
})(KafkaSecurityProtocolType = exports.KafkaSecurityProtocolType || (exports.KafkaSecurityProtocolType = {})); //# sourceMappingURL=KafkaSecurityProtocolType.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseApplicationOut = void 0;
class ListResponseApplicationOut {
    static getAttributeTypeMap() {
        return ListResponseApplicationOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseApplicationOut = ListResponseApplicationOut;
ListResponseApplicationOut.discriminator = undefined;
ListResponseApplicationOut.mapping = undefined;
ListResponseApplicationOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ApplicationOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseApplicationOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationStats.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseApplicationStats = void 0;
class ListResponseApplicationStats {
    static getAttributeTypeMap() {
        return ListResponseApplicationStats.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseApplicationStats = ListResponseApplicationStats;
ListResponseApplicationStats.discriminator = undefined;
ListResponseApplicationStats.mapping = undefined;
ListResponseApplicationStats.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ApplicationStats>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseApplicationStats.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseBackgroundTaskOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseBackgroundTaskOut = void 0;
class ListResponseBackgroundTaskOut {
    static getAttributeTypeMap() {
        return ListResponseBackgroundTaskOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseBackgroundTaskOut = ListResponseBackgroundTaskOut;
ListResponseBackgroundTaskOut.discriminator = undefined;
ListResponseBackgroundTaskOut.mapping = undefined;
ListResponseBackgroundTaskOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<BackgroundTaskOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseBackgroundTaskOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointMessageOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseEndpointMessageOut = void 0;
class ListResponseEndpointMessageOut {
    static getAttributeTypeMap() {
        return ListResponseEndpointMessageOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseEndpointMessageOut = ListResponseEndpointMessageOut;
ListResponseEndpointMessageOut.discriminator = undefined;
ListResponseEndpointMessageOut.mapping = undefined;
ListResponseEndpointMessageOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<EndpointMessageOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseEndpointMessageOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseEndpointOut = void 0;
class ListResponseEndpointOut {
    static getAttributeTypeMap() {
        return ListResponseEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseEndpointOut = ListResponseEndpointOut;
ListResponseEndpointOut.discriminator = undefined;
ListResponseEndpointOut.mapping = undefined;
ListResponseEndpointOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<EndpointOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEventTypeOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseEventTypeOut = void 0;
class ListResponseEventTypeOut {
    static getAttributeTypeMap() {
        return ListResponseEventTypeOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseEventTypeOut = ListResponseEventTypeOut;
ListResponseEventTypeOut.discriminator = undefined;
ListResponseEventTypeOut.mapping = undefined;
ListResponseEventTypeOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<EventTypeOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseEventTypeOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseIntegrationOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseIntegrationOut = void 0;
class ListResponseIntegrationOut {
    static getAttributeTypeMap() {
        return ListResponseIntegrationOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseIntegrationOut = ListResponseIntegrationOut;
ListResponseIntegrationOut.discriminator = undefined;
ListResponseIntegrationOut.mapping = undefined;
ListResponseIntegrationOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IntegrationOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseIntegrationOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageAttemptEndpointOut = void 0;
class ListResponseMessageAttemptEndpointOut {
    static getAttributeTypeMap() {
        return ListResponseMessageAttemptEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseMessageAttemptEndpointOut = ListResponseMessageAttemptEndpointOut;
ListResponseMessageAttemptEndpointOut.discriminator = undefined;
ListResponseMessageAttemptEndpointOut.mapping = undefined;
ListResponseMessageAttemptEndpointOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<MessageAttemptEndpointOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseMessageAttemptEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageAttemptOut = void 0;
class ListResponseMessageAttemptOut {
    static getAttributeTypeMap() {
        return ListResponseMessageAttemptOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseMessageAttemptOut = ListResponseMessageAttemptOut;
ListResponseMessageAttemptOut.discriminator = undefined;
ListResponseMessageAttemptOut.mapping = undefined;
ListResponseMessageAttemptOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<MessageAttemptOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseMessageAttemptOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageEndpointOut = void 0;
class ListResponseMessageEndpointOut {
    static getAttributeTypeMap() {
        return ListResponseMessageEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseMessageEndpointOut = ListResponseMessageEndpointOut;
ListResponseMessageEndpointOut.discriminator = undefined;
ListResponseMessageEndpointOut.mapping = undefined;
ListResponseMessageEndpointOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<MessageEndpointOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseMessageEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseMessageOut = void 0;
class ListResponseMessageOut {
    static getAttributeTypeMap() {
        return ListResponseMessageOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseMessageOut = ListResponseMessageOut;
ListResponseMessageOut.discriminator = undefined;
ListResponseMessageOut.mapping = undefined;
ListResponseMessageOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<MessageOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseMessageOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseOperationalWebhookEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseOperationalWebhookEndpointOut = void 0;
class ListResponseOperationalWebhookEndpointOut {
    static getAttributeTypeMap() {
        return ListResponseOperationalWebhookEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseOperationalWebhookEndpointOut = ListResponseOperationalWebhookEndpointOut;
ListResponseOperationalWebhookEndpointOut.discriminator = undefined;
ListResponseOperationalWebhookEndpointOut.mapping = undefined;
ListResponseOperationalWebhookEndpointOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<OperationalWebhookEndpointOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseOperationalWebhookEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseSinkOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseSinkOut = void 0;
class ListResponseSinkOut {
    static getAttributeTypeMap() {
        return ListResponseSinkOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseSinkOut = ListResponseSinkOut;
ListResponseSinkOut.discriminator = undefined;
ListResponseSinkOut.mapping = undefined;
ListResponseSinkOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<SinkOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseSinkOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamEventTypeOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseStreamEventTypeOut = void 0;
class ListResponseStreamEventTypeOut {
    static getAttributeTypeMap() {
        return ListResponseStreamEventTypeOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseStreamEventTypeOut = ListResponseStreamEventTypeOut;
ListResponseStreamEventTypeOut.discriminator = undefined;
ListResponseStreamEventTypeOut.mapping = undefined;
ListResponseStreamEventTypeOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<StreamEventTypeOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseStreamEventTypeOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseStreamOut = void 0;
class ListResponseStreamOut {
    static getAttributeTypeMap() {
        return ListResponseStreamOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseStreamOut = ListResponseStreamOut;
ListResponseStreamOut.discriminator = undefined;
ListResponseStreamOut.mapping = undefined;
ListResponseStreamOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<StreamOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseStreamOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamSinkOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseStreamSinkOut = void 0;
class ListResponseStreamSinkOut {
    static getAttributeTypeMap() {
        return ListResponseStreamSinkOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseStreamSinkOut = ListResponseStreamSinkOut;
ListResponseStreamSinkOut.discriminator = undefined;
ListResponseStreamSinkOut.mapping = undefined;
ListResponseStreamSinkOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<StreamSinkOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseStreamSinkOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseTemplateOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListResponseTemplateOut = void 0;
class ListResponseTemplateOut {
    static getAttributeTypeMap() {
        return ListResponseTemplateOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ListResponseTemplateOut = ListResponseTemplateOut;
ListResponseTemplateOut.discriminator = undefined;
ListResponseTemplateOut.mapping = undefined;
ListResponseTemplateOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<TemplateOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    },
    {
        "name": "prevIterator",
        "baseName": "prevIterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ListResponseTemplateOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptEndpointOut = void 0;
class MessageAttemptEndpointOut {
    static getAttributeTypeMap() {
        return MessageAttemptEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptEndpointOut = MessageAttemptEndpointOut;
MessageAttemptEndpointOut.discriminator = undefined;
MessageAttemptEndpointOut.mapping = undefined;
MessageAttemptEndpointOut.attributeTypeMap = [
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "msg",
        "baseName": "msg",
        "type": "MessageOut",
        "format": ""
    },
    {
        "name": "msgId",
        "baseName": "msgId",
        "type": "string",
        "format": ""
    },
    {
        "name": "response",
        "baseName": "response",
        "type": "string",
        "format": ""
    },
    {
        "name": "responseDurationMs",
        "baseName": "responseDurationMs",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "responseStatusCode",
        "baseName": "responseStatusCode",
        "type": "number",
        "format": "int16"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "MessageStatus",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "triggerType",
        "baseName": "triggerType",
        "type": "MessageAttemptTriggerType",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=MessageAttemptEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptExhaustedEventTypeEnum = exports.MessageAttemptExhaustedEvent = void 0;
class MessageAttemptExhaustedEvent {
    static getAttributeTypeMap() {
        return MessageAttemptExhaustedEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptExhaustedEvent = MessageAttemptExhaustedEvent;
MessageAttemptExhaustedEvent.discriminator = undefined;
MessageAttemptExhaustedEvent.mapping = undefined;
MessageAttemptExhaustedEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "MessageAttemptExhaustedEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "MessageAttemptExhaustedEventTypeEnum",
        "format": ""
    }
];
var MessageAttemptExhaustedEventTypeEnum;
(function(MessageAttemptExhaustedEventTypeEnum) {
    MessageAttemptExhaustedEventTypeEnum["MessageAttemptExhausted"] = "message.attempt.exhausted";
})(MessageAttemptExhaustedEventTypeEnum = exports.MessageAttemptExhaustedEventTypeEnum || (exports.MessageAttemptExhaustedEventTypeEnum = {})); //# sourceMappingURL=MessageAttemptExhaustedEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptExhaustedEventData = void 0;
class MessageAttemptExhaustedEventData {
    static getAttributeTypeMap() {
        return MessageAttemptExhaustedEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptExhaustedEventData = MessageAttemptExhaustedEventData;
MessageAttemptExhaustedEventData.discriminator = undefined;
MessageAttemptExhaustedEventData.mapping = undefined;
MessageAttemptExhaustedEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "lastAttempt",
        "baseName": "lastAttempt",
        "type": "MessageAttemptFailedData",
        "format": ""
    },
    {
        "name": "msgEventId",
        "baseName": "msgEventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "msgId",
        "baseName": "msgId",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=MessageAttemptExhaustedEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailedData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptFailedData = void 0;
class MessageAttemptFailedData {
    static getAttributeTypeMap() {
        return MessageAttemptFailedData.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptFailedData = MessageAttemptFailedData;
MessageAttemptFailedData.discriminator = undefined;
MessageAttemptFailedData.mapping = undefined;
MessageAttemptFailedData.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "responseStatusCode",
        "baseName": "responseStatusCode",
        "type": "number",
        "format": "int16"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=MessageAttemptFailedData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptFailingEventTypeEnum = exports.MessageAttemptFailingEvent = void 0;
class MessageAttemptFailingEvent {
    static getAttributeTypeMap() {
        return MessageAttemptFailingEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptFailingEvent = MessageAttemptFailingEvent;
MessageAttemptFailingEvent.discriminator = undefined;
MessageAttemptFailingEvent.mapping = undefined;
MessageAttemptFailingEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "MessageAttemptFailingEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "MessageAttemptFailingEventTypeEnum",
        "format": ""
    }
];
var MessageAttemptFailingEventTypeEnum;
(function(MessageAttemptFailingEventTypeEnum) {
    MessageAttemptFailingEventTypeEnum["MessageAttemptFailing"] = "message.attempt.failing";
})(MessageAttemptFailingEventTypeEnum = exports.MessageAttemptFailingEventTypeEnum || (exports.MessageAttemptFailingEventTypeEnum = {})); //# sourceMappingURL=MessageAttemptFailingEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptFailingEventData = void 0;
class MessageAttemptFailingEventData {
    static getAttributeTypeMap() {
        return MessageAttemptFailingEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptFailingEventData = MessageAttemptFailingEventData;
MessageAttemptFailingEventData.discriminator = undefined;
MessageAttemptFailingEventData.mapping = undefined;
MessageAttemptFailingEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "lastAttempt",
        "baseName": "lastAttempt",
        "type": "MessageAttemptFailedData",
        "format": ""
    },
    {
        "name": "msgEventId",
        "baseName": "msgEventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "msgId",
        "baseName": "msgId",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=MessageAttemptFailingEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptHeadersOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptHeadersOut = void 0;
class MessageAttemptHeadersOut {
    static getAttributeTypeMap() {
        return MessageAttemptHeadersOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptHeadersOut = MessageAttemptHeadersOut;
MessageAttemptHeadersOut.discriminator = undefined;
MessageAttemptHeadersOut.mapping = undefined;
MessageAttemptHeadersOut.attributeTypeMap = [
    {
        "name": "responseHeaders",
        "baseName": "responseHeaders",
        "type": "Array<Array<string>>",
        "format": ""
    },
    {
        "name": "sensitive",
        "baseName": "sensitive",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "sentHeaders",
        "baseName": "sentHeaders",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
]; //# sourceMappingURL=MessageAttemptHeadersOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptOut = void 0;
class MessageAttemptOut {
    static getAttributeTypeMap() {
        return MessageAttemptOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptOut = MessageAttemptOut;
MessageAttemptOut.discriminator = undefined;
MessageAttemptOut.mapping = undefined;
MessageAttemptOut.attributeTypeMap = [
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "msg",
        "baseName": "msg",
        "type": "MessageOut",
        "format": ""
    },
    {
        "name": "msgId",
        "baseName": "msgId",
        "type": "string",
        "format": ""
    },
    {
        "name": "response",
        "baseName": "response",
        "type": "string",
        "format": ""
    },
    {
        "name": "responseDurationMs",
        "baseName": "responseDurationMs",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "responseStatusCode",
        "baseName": "responseStatusCode",
        "type": "number",
        "format": "int16"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "MessageStatus",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "triggerType",
        "baseName": "triggerType",
        "type": "MessageAttemptTriggerType",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=MessageAttemptOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEvent.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptRecoveredEventTypeEnum = exports.MessageAttemptRecoveredEvent = void 0;
class MessageAttemptRecoveredEvent {
    static getAttributeTypeMap() {
        return MessageAttemptRecoveredEvent.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptRecoveredEvent = MessageAttemptRecoveredEvent;
MessageAttemptRecoveredEvent.discriminator = undefined;
MessageAttemptRecoveredEvent.mapping = undefined;
MessageAttemptRecoveredEvent.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "MessageAttemptRecoveredEventData",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "MessageAttemptRecoveredEventTypeEnum",
        "format": ""
    }
];
var MessageAttemptRecoveredEventTypeEnum;
(function(MessageAttemptRecoveredEventTypeEnum) {
    MessageAttemptRecoveredEventTypeEnum["MessageAttemptRecovered"] = "message.attempt.recovered";
})(MessageAttemptRecoveredEventTypeEnum = exports.MessageAttemptRecoveredEventTypeEnum || (exports.MessageAttemptRecoveredEventTypeEnum = {})); //# sourceMappingURL=MessageAttemptRecoveredEvent.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEventData.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptRecoveredEventData = void 0;
class MessageAttemptRecoveredEventData {
    static getAttributeTypeMap() {
        return MessageAttemptRecoveredEventData.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageAttemptRecoveredEventData = MessageAttemptRecoveredEventData;
MessageAttemptRecoveredEventData.discriminator = undefined;
MessageAttemptRecoveredEventData.mapping = undefined;
MessageAttemptRecoveredEventData.attributeTypeMap = [
    {
        "name": "appId",
        "baseName": "appId",
        "type": "string",
        "format": ""
    },
    {
        "name": "appUid",
        "baseName": "appUid",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointId",
        "baseName": "endpointId",
        "type": "string",
        "format": ""
    },
    {
        "name": "lastAttempt",
        "baseName": "lastAttempt",
        "type": "MessageAttemptFailedData",
        "format": ""
    },
    {
        "name": "msgEventId",
        "baseName": "msgEventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "msgId",
        "baseName": "msgId",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=MessageAttemptRecoveredEventData.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptTriggerType.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageAttemptTriggerType = void 0;
var MessageAttemptTriggerType;
(function(MessageAttemptTriggerType) {
    MessageAttemptTriggerType[MessageAttemptTriggerType["Scheduled"] = 0] = "Scheduled";
    MessageAttemptTriggerType[MessageAttemptTriggerType["Manual"] = 1] = "Manual";
})(MessageAttemptTriggerType = exports.MessageAttemptTriggerType || (exports.MessageAttemptTriggerType = {})); //# sourceMappingURL=MessageAttemptTriggerType.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageBroadcastIn = void 0;
class MessageBroadcastIn {
    static getAttributeTypeMap() {
        return MessageBroadcastIn.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageBroadcastIn = MessageBroadcastIn;
MessageBroadcastIn.discriminator = undefined;
MessageBroadcastIn.mapping = undefined;
MessageBroadcastIn.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "eventId",
        "baseName": "eventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any",
        "format": ""
    },
    {
        "name": "payloadRetentionHours",
        "baseName": "payloadRetentionHours",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "payloadRetentionPeriod",
        "baseName": "payloadRetentionPeriod",
        "type": "number",
        "format": "int64"
    }
]; //# sourceMappingURL=MessageBroadcastIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageBroadcastOut = void 0;
class MessageBroadcastOut {
    static getAttributeTypeMap() {
        return MessageBroadcastOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageBroadcastOut = MessageBroadcastOut;
MessageBroadcastOut.discriminator = undefined;
MessageBroadcastOut.mapping = undefined;
MessageBroadcastOut.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    }
]; //# sourceMappingURL=MessageBroadcastOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageEndpointOut = void 0;
class MessageEndpointOut {
    static getAttributeTypeMap() {
        return MessageEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageEndpointOut = MessageEndpointOut;
MessageEndpointOut.discriminator = undefined;
MessageEndpointOut.mapping = undefined;
MessageEndpointOut.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "nextAttempt",
        "baseName": "nextAttempt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "MessageStatus",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number",
        "format": "int32"
    }
]; //# sourceMappingURL=MessageEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEventsOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageEventsOut = void 0;
class MessageEventsOut {
    static getAttributeTypeMap() {
        return MessageEventsOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageEventsOut = MessageEventsOut;
MessageEventsOut.discriminator = undefined;
MessageEventsOut.mapping = undefined;
MessageEventsOut.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<MessageOut>",
        "format": ""
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "iterator",
        "baseName": "iterator",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=MessageEventsOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageIn = void 0;
class MessageIn {
    static getAttributeTypeMap() {
        return MessageIn.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageIn = MessageIn;
MessageIn.discriminator = undefined;
MessageIn.mapping = undefined;
MessageIn.attributeTypeMap = [
    {
        "name": "application",
        "baseName": "application",
        "type": "ApplicationIn",
        "format": ""
    },
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "eventId",
        "baseName": "eventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any",
        "format": ""
    },
    {
        "name": "payloadRetentionHours",
        "baseName": "payloadRetentionHours",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "payloadRetentionPeriod",
        "baseName": "payloadRetentionPeriod",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "transformationsParams",
        "baseName": "transformationsParams",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=MessageIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageOut = void 0;
class MessageOut {
    static getAttributeTypeMap() {
        return MessageOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageOut = MessageOut;
MessageOut.discriminator = undefined;
MessageOut.mapping = undefined;
MessageOut.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "eventId",
        "baseName": "eventId",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any",
        "format": ""
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=MessageOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageRawPayloadOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageRawPayloadOut = void 0;
class MessageRawPayloadOut {
    static getAttributeTypeMap() {
        return MessageRawPayloadOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageRawPayloadOut = MessageRawPayloadOut;
MessageRawPayloadOut.discriminator = undefined;
MessageRawPayloadOut.mapping = undefined;
MessageRawPayloadOut.attributeTypeMap = [
    {
        "name": "payload",
        "baseName": "payload",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=MessageRawPayloadOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageStatus.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageStatus = void 0;
var MessageStatus;
(function(MessageStatus) {
    MessageStatus[MessageStatus["Success"] = 0] = "Success";
    MessageStatus[MessageStatus["Pending"] = 1] = "Pending";
    MessageStatus[MessageStatus["Fail"] = 2] = "Fail";
    MessageStatus[MessageStatus["Sending"] = 3] = "Sending";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {})); //# sourceMappingURL=MessageStatus.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageSubscriberAuthTokenOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MessageSubscriberAuthTokenOut = void 0;
class MessageSubscriberAuthTokenOut {
    static getAttributeTypeMap() {
        return MessageSubscriberAuthTokenOut.attributeTypeMap;
    }
    constructor(){}
}
exports.MessageSubscriberAuthTokenOut = MessageSubscriberAuthTokenOut;
MessageSubscriberAuthTokenOut.discriminator = undefined;
MessageSubscriberAuthTokenOut.mapping = undefined;
MessageSubscriberAuthTokenOut.attributeTypeMap = [
    {
        "name": "bridgeToken",
        "baseName": "bridgeToken",
        "type": "string",
        "format": ""
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=MessageSubscriberAuthTokenOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OAuthPayloadIn = void 0;
class OAuthPayloadIn {
    static getAttributeTypeMap() {
        return OAuthPayloadIn.attributeTypeMap;
    }
    constructor(){}
}
exports.OAuthPayloadIn = OAuthPayloadIn;
OAuthPayloadIn.discriminator = undefined;
OAuthPayloadIn.mapping = undefined;
OAuthPayloadIn.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "redirectUri",
        "baseName": "redirectUri",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=OAuthPayloadIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OAuthPayloadOut = void 0;
class OAuthPayloadOut {
    static getAttributeTypeMap() {
        return OAuthPayloadOut.attributeTypeMap;
    }
    constructor(){}
}
exports.OAuthPayloadOut = OAuthPayloadOut;
OAuthPayloadOut.discriminator = undefined;
OAuthPayloadOut.mapping = undefined;
OAuthPayloadOut.attributeTypeMap = [
    {
        "name": "accessToken",
        "baseName": "accessToken",
        "type": "string",
        "format": ""
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string",
        "format": ""
    },
    {
        "name": "refreshToken",
        "baseName": "refreshToken",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=OAuthPayloadOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Oauth2AuthMethodIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Oauth2AuthMethodIn = void 0;
var Oauth2AuthMethodIn;
(function(Oauth2AuthMethodIn) {
    Oauth2AuthMethodIn["ClientSecretJwt"] = "clientSecretJwt";
    Oauth2AuthMethodIn["ClientSecretBasic"] = "clientSecretBasic";
    Oauth2AuthMethodIn["ClientSecretPost"] = "clientSecretPost";
})(Oauth2AuthMethodIn = exports.Oauth2AuthMethodIn || (exports.Oauth2AuthMethodIn = {})); //# sourceMappingURL=Oauth2AuthMethodIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Oauth2GrantTypeIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Oauth2GrantTypeIn = void 0;
var Oauth2GrantTypeIn;
(function(Oauth2GrantTypeIn) {
    Oauth2GrantTypeIn["ClientCredentials"] = "clientCredentials";
    Oauth2GrantTypeIn["RefreshToken"] = "refreshToken";
})(Oauth2GrantTypeIn = exports.Oauth2GrantTypeIn || (exports.Oauth2GrantTypeIn = {})); //# sourceMappingURL=Oauth2GrantTypeIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OauthJwsSigningAlgorithm.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OauthJwsSigningAlgorithm = void 0;
var OauthJwsSigningAlgorithm;
(function(OauthJwsSigningAlgorithm) {
    OauthJwsSigningAlgorithm["Rs256"] = "RS256";
})(OauthJwsSigningAlgorithm = exports.OauthJwsSigningAlgorithm || (exports.OauthJwsSigningAlgorithm = {})); //# sourceMappingURL=OauthJwsSigningAlgorithm.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OneTimeTokenIn = void 0;
class OneTimeTokenIn {
    static getAttributeTypeMap() {
        return OneTimeTokenIn.attributeTypeMap;
    }
    constructor(){}
}
exports.OneTimeTokenIn = OneTimeTokenIn;
OneTimeTokenIn.discriminator = undefined;
OneTimeTokenIn.mapping = undefined;
OneTimeTokenIn.attributeTypeMap = [
    {
        "name": "oneTimeToken",
        "baseName": "oneTimeToken",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=OneTimeTokenIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OneTimeTokenOut = void 0;
class OneTimeTokenOut {
    static getAttributeTypeMap() {
        return OneTimeTokenOut.attributeTypeMap;
    }
    constructor(){}
}
exports.OneTimeTokenOut = OneTimeTokenOut;
OneTimeTokenOut.discriminator = undefined;
OneTimeTokenOut.mapping = undefined;
OneTimeTokenOut.attributeTypeMap = [
    {
        "name": "token",
        "baseName": "token",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=OneTimeTokenOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointIn = void 0;
class OperationalWebhookEndpointIn {
    static getAttributeTypeMap() {
        return OperationalWebhookEndpointIn.attributeTypeMap;
    }
    constructor(){}
}
exports.OperationalWebhookEndpointIn = OperationalWebhookEndpointIn;
OperationalWebhookEndpointIn.discriminator = undefined;
OperationalWebhookEndpointIn.mapping = undefined;
OperationalWebhookEndpointIn.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=OperationalWebhookEndpointIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointOut = void 0;
class OperationalWebhookEndpointOut {
    static getAttributeTypeMap() {
        return OperationalWebhookEndpointOut.attributeTypeMap;
    }
    constructor(){}
}
exports.OperationalWebhookEndpointOut = OperationalWebhookEndpointOut;
OperationalWebhookEndpointOut.discriminator = undefined;
OperationalWebhookEndpointOut.mapping = undefined;
OperationalWebhookEndpointOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=OperationalWebhookEndpointOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointSecretIn = void 0;
class OperationalWebhookEndpointSecretIn {
    static getAttributeTypeMap() {
        return OperationalWebhookEndpointSecretIn.attributeTypeMap;
    }
    constructor(){}
}
exports.OperationalWebhookEndpointSecretIn = OperationalWebhookEndpointSecretIn;
OperationalWebhookEndpointSecretIn.discriminator = undefined;
OperationalWebhookEndpointSecretIn.mapping = undefined;
OperationalWebhookEndpointSecretIn.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=OperationalWebhookEndpointSecretIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointSecretOut = void 0;
class OperationalWebhookEndpointSecretOut {
    static getAttributeTypeMap() {
        return OperationalWebhookEndpointSecretOut.attributeTypeMap;
    }
    constructor(){}
}
exports.OperationalWebhookEndpointSecretOut = OperationalWebhookEndpointSecretOut;
OperationalWebhookEndpointSecretOut.discriminator = undefined;
OperationalWebhookEndpointSecretOut.mapping = undefined;
OperationalWebhookEndpointSecretOut.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=OperationalWebhookEndpointSecretOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointUpdate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperationalWebhookEndpointUpdate = void 0;
class OperationalWebhookEndpointUpdate {
    static getAttributeTypeMap() {
        return OperationalWebhookEndpointUpdate.attributeTypeMap;
    }
    constructor(){}
}
exports.OperationalWebhookEndpointUpdate = OperationalWebhookEndpointUpdate;
OperationalWebhookEndpointUpdate.discriminator = undefined;
OperationalWebhookEndpointUpdate.mapping = undefined;
OperationalWebhookEndpointUpdate.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "disabled",
        "baseName": "disabled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "rateLimit",
        "baseName": "rateLimit",
        "type": "number",
        "format": "uint16"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=OperationalWebhookEndpointUpdate.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Ordering.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ordering = void 0;
var Ordering;
(function(Ordering) {
    Ordering["Ascending"] = "ascending";
    Ordering["Descending"] = "descending";
})(Ordering = exports.Ordering || (exports.Ordering = {})); //# sourceMappingURL=Ordering.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecoverIn = void 0;
class RecoverIn {
    static getAttributeTypeMap() {
        return RecoverIn.attributeTypeMap;
    }
    constructor(){}
}
exports.RecoverIn = RecoverIn;
RecoverIn.discriminator = undefined;
RecoverIn.mapping = undefined;
RecoverIn.attributeTypeMap = [
    {
        "name": "since",
        "baseName": "since",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "until",
        "baseName": "until",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=RecoverIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecoverOut = void 0;
class RecoverOut {
    static getAttributeTypeMap() {
        return RecoverOut.attributeTypeMap;
    }
    constructor(){}
}
exports.RecoverOut = RecoverOut;
RecoverOut.discriminator = undefined;
RecoverOut.mapping = undefined;
RecoverOut.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    }
]; //# sourceMappingURL=RecoverOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RedshiftConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedshiftConfig = void 0;
class RedshiftConfig {
    static getAttributeTypeMap() {
        return RedshiftConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.RedshiftConfig = RedshiftConfig;
RedshiftConfig.discriminator = undefined;
RedshiftConfig.mapping = undefined;
RedshiftConfig.attributeTypeMap = [
    {
        "name": "accessKeyId",
        "baseName": "accessKeyId",
        "type": "string",
        "format": ""
    },
    {
        "name": "clusterIdentifier",
        "baseName": "clusterIdentifier",
        "type": "string",
        "format": ""
    },
    {
        "name": "dbName",
        "baseName": "dbName",
        "type": "string",
        "format": ""
    },
    {
        "name": "dbUser",
        "baseName": "dbUser",
        "type": "string",
        "format": ""
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemaName",
        "baseName": "schemaName",
        "type": "string",
        "format": ""
    },
    {
        "name": "secretAccessKey",
        "baseName": "secretAccessKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "tableName",
        "baseName": "tableName",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=RedshiftConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplayIn = void 0;
class ReplayIn {
    static getAttributeTypeMap() {
        return ReplayIn.attributeTypeMap;
    }
    constructor(){}
}
exports.ReplayIn = ReplayIn;
ReplayIn.discriminator = undefined;
ReplayIn.mapping = undefined;
ReplayIn.attributeTypeMap = [
    {
        "name": "since",
        "baseName": "since",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "until",
        "baseName": "until",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=ReplayIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplayOut = void 0;
class ReplayOut {
    static getAttributeTypeMap() {
        return ReplayOut.attributeTypeMap;
    }
    constructor(){}
}
exports.ReplayOut = ReplayOut;
ReplayOut.discriminator = undefined;
ReplayOut.mapping = undefined;
ReplayOut.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "BackgroundTaskStatus",
        "format": ""
    },
    {
        "name": "task",
        "baseName": "task",
        "type": "BackgroundTaskType",
        "format": ""
    }
]; //# sourceMappingURL=ReplayOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RetryScheduleInOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RetryScheduleInOut = void 0;
class RetryScheduleInOut {
    static getAttributeTypeMap() {
        return RetryScheduleInOut.attributeTypeMap;
    }
    constructor(){}
}
exports.RetryScheduleInOut = RetryScheduleInOut;
RetryScheduleInOut.discriminator = undefined;
RetryScheduleInOut.mapping = undefined;
RetryScheduleInOut.attributeTypeMap = [
    {
        "name": "retrySchedule",
        "baseName": "retrySchedule",
        "type": "Array<Duration>",
        "format": ""
    }
]; //# sourceMappingURL=RetryScheduleInOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatePollerTokenIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RotatePollerTokenIn = void 0;
class RotatePollerTokenIn {
    static getAttributeTypeMap() {
        return RotatePollerTokenIn.attributeTypeMap;
    }
    constructor(){}
}
exports.RotatePollerTokenIn = RotatePollerTokenIn;
RotatePollerTokenIn.discriminator = undefined;
RotatePollerTokenIn.mapping = undefined;
RotatePollerTokenIn.attributeTypeMap = [
    {
        "name": "expiry",
        "baseName": "expiry",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "oldTokenExpiry",
        "baseName": "oldTokenExpiry",
        "type": "number",
        "format": "int64"
    }
]; //# sourceMappingURL=RotatePollerTokenIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatedUrlOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RotatedUrlOut = void 0;
class RotatedUrlOut {
    static getAttributeTypeMap() {
        return RotatedUrlOut.attributeTypeMap;
    }
    constructor(){}
}
exports.RotatedUrlOut = RotatedUrlOut;
RotatedUrlOut.discriminator = undefined;
RotatedUrlOut.mapping = undefined;
RotatedUrlOut.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=RotatedUrlOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/S3Config.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.S3Config = void 0;
class S3Config {
    static getAttributeTypeMap() {
        return S3Config.attributeTypeMap;
    }
    constructor(){}
}
exports.S3Config = S3Config;
S3Config.discriminator = undefined;
S3Config.mapping = undefined;
S3Config.attributeTypeMap = [
    {
        "name": "accessKeyId",
        "baseName": "accessKeyId",
        "type": "string",
        "format": ""
    },
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "string",
        "format": ""
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string",
        "format": ""
    },
    {
        "name": "secretAccessKey",
        "baseName": "secretAccessKey",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=S3Config.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkHttpConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkHttpConfig = void 0;
class SinkHttpConfig {
    static getAttributeTypeMap() {
        return SinkHttpConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkHttpConfig = SinkHttpConfig;
SinkHttpConfig.discriminator = undefined;
SinkHttpConfig.mapping = undefined;
SinkHttpConfig.attributeTypeMap = [
    {
        "name": "headers",
        "baseName": "headers",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=SinkHttpConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkInClass = void 0;
class SinkInClass {
}
exports.SinkInClass = SinkInClass;
SinkInClass.discriminator = undefined;
SinkInClass.mapping = undefined; //# sourceMappingURL=SinkIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkInOneOfTypeEnum = exports.SinkInOneOf = void 0;
class SinkInOneOf {
    static getAttributeTypeMap() {
        return SinkInOneOf.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkInOneOf = SinkInOneOf;
SinkInOneOf.discriminator = undefined;
SinkInOneOf.mapping = undefined;
SinkInOneOf.attributeTypeMap = [
    {
        "name": "routingKey",
        "baseName": "routingKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "SinkInOneOfTypeEnum",
        "format": ""
    },
    {
        "name": "uri",
        "baseName": "uri",
        "type": "string",
        "format": ""
    }
];
var SinkInOneOfTypeEnum;
(function(SinkInOneOfTypeEnum) {
    SinkInOneOfTypeEnum["RabbitMq"] = "rabbitMQ";
})(SinkInOneOfTypeEnum = exports.SinkInOneOfTypeEnum || (exports.SinkInOneOfTypeEnum = {})); //# sourceMappingURL=SinkInOneOf.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf1.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkInOneOf1TypeEnum = exports.SinkInOneOf1 = void 0;
class SinkInOneOf1 {
    static getAttributeTypeMap() {
        return SinkInOneOf1.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkInOneOf1 = SinkInOneOf1;
SinkInOneOf1.discriminator = undefined;
SinkInOneOf1.mapping = undefined;
SinkInOneOf1.attributeTypeMap = [
    {
        "name": "accessKey",
        "baseName": "accessKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "queueDsn",
        "baseName": "queueDsn",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string",
        "format": ""
    },
    {
        "name": "secretKey",
        "baseName": "secretKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "SinkInOneOf1TypeEnum",
        "format": ""
    }
];
var SinkInOneOf1TypeEnum;
(function(SinkInOneOf1TypeEnum) {
    SinkInOneOf1TypeEnum["Sqs"] = "sqs";
})(SinkInOneOf1TypeEnum = exports.SinkInOneOf1TypeEnum || (exports.SinkInOneOf1TypeEnum = {})); //# sourceMappingURL=SinkInOneOf1.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf2.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkInOneOf2TypeEnum = exports.SinkInOneOf2 = void 0;
class SinkInOneOf2 {
    static getAttributeTypeMap() {
        return SinkInOneOf2.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkInOneOf2 = SinkInOneOf2;
SinkInOneOf2.discriminator = undefined;
SinkInOneOf2.mapping = undefined;
SinkInOneOf2.attributeTypeMap = [
    {
        "name": "brokers",
        "baseName": "brokers",
        "type": "string",
        "format": ""
    },
    {
        "name": "saslPassword",
        "baseName": "saslPassword",
        "type": "string",
        "format": ""
    },
    {
        "name": "saslUsername",
        "baseName": "saslUsername",
        "type": "string",
        "format": ""
    },
    {
        "name": "securityProtocol",
        "baseName": "securityProtocol",
        "type": "KafkaSecurityProtocolType",
        "format": ""
    },
    {
        "name": "topic",
        "baseName": "topic",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "SinkInOneOf2TypeEnum",
        "format": ""
    }
];
var SinkInOneOf2TypeEnum;
(function(SinkInOneOf2TypeEnum) {
    SinkInOneOf2TypeEnum["Kafka"] = "kafka";
})(SinkInOneOf2TypeEnum = exports.SinkInOneOf2TypeEnum || (exports.SinkInOneOf2TypeEnum = {})); //# sourceMappingURL=SinkInOneOf2.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf3.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkInOneOf3TypeEnum = exports.SinkInOneOf3 = void 0;
class SinkInOneOf3 {
    static getAttributeTypeMap() {
        return SinkInOneOf3.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkInOneOf3 = SinkInOneOf3;
SinkInOneOf3.discriminator = undefined;
SinkInOneOf3.mapping = undefined;
SinkInOneOf3.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "SinkInOneOf3TypeEnum",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
];
var SinkInOneOf3TypeEnum;
(function(SinkInOneOf3TypeEnum) {
    SinkInOneOf3TypeEnum["Http"] = "http";
})(SinkInOneOf3TypeEnum = exports.SinkInOneOf3TypeEnum || (exports.SinkInOneOf3TypeEnum = {})); //# sourceMappingURL=SinkInOneOf3.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf4.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkInOneOf4TypeEnum = exports.SinkInOneOf4 = void 0;
class SinkInOneOf4 {
    static getAttributeTypeMap() {
        return SinkInOneOf4.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkInOneOf4 = SinkInOneOf4;
SinkInOneOf4.discriminator = undefined;
SinkInOneOf4.mapping = undefined;
SinkInOneOf4.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "SinkInOneOf4TypeEnum",
        "format": ""
    }
];
var SinkInOneOf4TypeEnum;
(function(SinkInOneOf4TypeEnum) {
    SinkInOneOf4TypeEnum["EventStream"] = "eventStream";
})(SinkInOneOf4TypeEnum = exports.SinkInOneOf4TypeEnum || (exports.SinkInOneOf4TypeEnum = {})); //# sourceMappingURL=SinkInOneOf4.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOtelV1Config.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkOtelV1Config = void 0;
class SinkOtelV1Config {
    static getAttributeTypeMap() {
        return SinkOtelV1Config.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkOtelV1Config = SinkOtelV1Config;
SinkOtelV1Config.discriminator = undefined;
SinkOtelV1Config.mapping = undefined;
SinkOtelV1Config.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=SinkOtelV1Config.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkOutClass = void 0;
class SinkOutClass {
}
exports.SinkOutClass = SinkOutClass;
SinkOutClass.discriminator = undefined;
SinkOutClass.mapping = undefined; //# sourceMappingURL=SinkOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkPayloadFormat.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkPayloadFormat = void 0;
var SinkPayloadFormat;
(function(SinkPayloadFormat) {
    SinkPayloadFormat["Json"] = "json";
})(SinkPayloadFormat = exports.SinkPayloadFormat || (exports.SinkPayloadFormat = {})); //# sourceMappingURL=SinkPayloadFormat.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkStatus.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkStatus = void 0;
var SinkStatus;
(function(SinkStatus) {
    SinkStatus["Enabled"] = "enabled";
    SinkStatus["Paused"] = "paused";
    SinkStatus["Disabled"] = "disabled";
})(SinkStatus = exports.SinkStatus || (exports.SinkStatus = {})); //# sourceMappingURL=SinkStatus.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkStatusIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkStatusIn = void 0;
var SinkStatusIn;
(function(SinkStatusIn) {
    SinkStatusIn["Enabled"] = "enabled";
    SinkStatusIn["Paused"] = "paused";
})(SinkStatusIn = exports.SinkStatusIn || (exports.SinkStatusIn = {})); //# sourceMappingURL=SinkStatusIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkTransformIn = void 0;
class SinkTransformIn {
    static getAttributeTypeMap() {
        return SinkTransformIn.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkTransformIn = SinkTransformIn;
SinkTransformIn.discriminator = undefined;
SinkTransformIn.mapping = undefined;
SinkTransformIn.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean",
        "format": ""
    }
]; //# sourceMappingURL=SinkTransformIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformationOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SinkTransformationOut = void 0;
class SinkTransformationOut {
    static getAttributeTypeMap() {
        return SinkTransformationOut.attributeTypeMap;
    }
    constructor(){}
}
exports.SinkTransformationOut = SinkTransformationOut;
SinkTransformationOut.discriminator = undefined;
SinkTransformationOut.mapping = undefined;
SinkTransformationOut.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean",
        "format": ""
    }
]; //# sourceMappingURL=SinkTransformationOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SnowflakeConfig.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SnowflakeConfig = void 0;
class SnowflakeConfig {
    static getAttributeTypeMap() {
        return SnowflakeConfig.attributeTypeMap;
    }
    constructor(){}
}
exports.SnowflakeConfig = SnowflakeConfig;
SnowflakeConfig.discriminator = undefined;
SnowflakeConfig.mapping = undefined;
SnowflakeConfig.attributeTypeMap = [
    {
        "name": "accountIdentifier",
        "baseName": "accountIdentifier",
        "type": "string",
        "format": ""
    },
    {
        "name": "dbName",
        "baseName": "dbName",
        "type": "string",
        "format": ""
    },
    {
        "name": "privateKey",
        "baseName": "privateKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "schemaName",
        "baseName": "schemaName",
        "type": "string",
        "format": ""
    },
    {
        "name": "tableName",
        "baseName": "tableName",
        "type": "string",
        "format": ""
    },
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=SnowflakeConfig.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StatisticsPeriod.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatisticsPeriod = void 0;
var StatisticsPeriod;
(function(StatisticsPeriod) {
    StatisticsPeriod["OneDay"] = "OneDay";
    StatisticsPeriod["FiveMinutes"] = "FiveMinutes";
})(StatisticsPeriod = exports.StatisticsPeriod || (exports.StatisticsPeriod = {})); //# sourceMappingURL=StatisticsPeriod.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StatusCodeClass.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusCodeClass = void 0;
var StatusCodeClass;
(function(StatusCodeClass) {
    StatusCodeClass[StatusCodeClass["CodeNone"] = 0] = "CodeNone";
    StatusCodeClass[StatusCodeClass["Code1xx"] = 100] = "Code1xx";
    StatusCodeClass[StatusCodeClass["Code2xx"] = 200] = "Code2xx";
    StatusCodeClass[StatusCodeClass["Code3xx"] = 300] = "Code3xx";
    StatusCodeClass[StatusCodeClass["Code4xx"] = 400] = "Code4xx";
    StatusCodeClass[StatusCodeClass["Code5xx"] = 500] = "Code5xx";
})(StatusCodeClass = exports.StatusCodeClass || (exports.StatusCodeClass = {})); //# sourceMappingURL=StatusCodeClass.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamEventTypeIn = void 0;
class StreamEventTypeIn {
    static getAttributeTypeMap() {
        return StreamEventTypeIn.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamEventTypeIn = StreamEventTypeIn;
StreamEventTypeIn.discriminator = undefined;
StreamEventTypeIn.mapping = undefined;
StreamEventTypeIn.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=StreamEventTypeIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamEventTypeOut = void 0;
class StreamEventTypeOut {
    static getAttributeTypeMap() {
        return StreamEventTypeOut.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamEventTypeOut = StreamEventTypeOut;
StreamEventTypeOut.discriminator = undefined;
StreamEventTypeOut.mapping = undefined;
StreamEventTypeOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=StreamEventTypeOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypePatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamEventTypePatch = void 0;
class StreamEventTypePatch {
    static getAttributeTypeMap() {
        return StreamEventTypePatch.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamEventTypePatch = StreamEventTypePatch;
StreamEventTypePatch.discriminator = undefined;
StreamEventTypePatch.mapping = undefined;
StreamEventTypePatch.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=StreamEventTypePatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamIn = void 0;
class StreamIn {
    static getAttributeTypeMap() {
        return StreamIn.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamIn = StreamIn;
StreamIn.discriminator = undefined;
StreamIn.mapping = undefined;
StreamIn.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=StreamIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamOut = void 0;
class StreamOut {
    static getAttributeTypeMap() {
        return StreamOut.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamOut = StreamOut;
StreamOut.discriminator = undefined;
StreamOut.mapping = undefined;
StreamOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=StreamOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamPatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamPatch = void 0;
class StreamPatch {
    static getAttributeTypeMap() {
        return StreamPatch.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamPatch = StreamPatch;
StreamPatch.discriminator = undefined;
StreamPatch.mapping = undefined;
StreamPatch.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=StreamPatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInClass = void 0;
class StreamSinkInClass {
}
exports.StreamSinkInClass = StreamSinkInClass;
StreamSinkInClass.discriminator = undefined;
StreamSinkInClass.mapping = undefined; //# sourceMappingURL=StreamSinkIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOfTypeEnum = exports.StreamSinkInOneOf = void 0;
class StreamSinkInOneOf {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf = StreamSinkInOneOf;
StreamSinkInOneOf.discriminator = undefined;
StreamSinkInOneOf.mapping = undefined;
StreamSinkInOneOf.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "AzureBlobStorageConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOfTypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOfTypeEnum;
(function(StreamSinkInOneOfTypeEnum) {
    StreamSinkInOneOfTypeEnum["AzureBlobStorage"] = "azureBlobStorage";
})(StreamSinkInOneOfTypeEnum = exports.StreamSinkInOneOfTypeEnum || (exports.StreamSinkInOneOfTypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf1.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf1TypeEnum = exports.StreamSinkInOneOf1 = void 0;
class StreamSinkInOneOf1 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf1.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf1 = StreamSinkInOneOf1;
StreamSinkInOneOf1.discriminator = undefined;
StreamSinkInOneOf1.mapping = undefined;
StreamSinkInOneOf1.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "SinkOtelV1Config",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf1TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf1TypeEnum;
(function(StreamSinkInOneOf1TypeEnum) {
    StreamSinkInOneOf1TypeEnum["OtelV1HttpTrace"] = "otelV1HttpTrace";
})(StreamSinkInOneOf1TypeEnum = exports.StreamSinkInOneOf1TypeEnum || (exports.StreamSinkInOneOf1TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf1.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf2.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf2TypeEnum = exports.StreamSinkInOneOf2 = void 0;
class StreamSinkInOneOf2 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf2.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf2 = StreamSinkInOneOf2;
StreamSinkInOneOf2.discriminator = undefined;
StreamSinkInOneOf2.mapping = undefined;
StreamSinkInOneOf2.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "SinkHttpConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf2TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf2TypeEnum;
(function(StreamSinkInOneOf2TypeEnum) {
    StreamSinkInOneOf2TypeEnum["Http"] = "http";
})(StreamSinkInOneOf2TypeEnum = exports.StreamSinkInOneOf2TypeEnum || (exports.StreamSinkInOneOf2TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf2.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf3.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf3TypeEnum = exports.StreamSinkInOneOf3 = void 0;
class StreamSinkInOneOf3 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf3.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf3 = StreamSinkInOneOf3;
StreamSinkInOneOf3.discriminator = undefined;
StreamSinkInOneOf3.mapping = undefined;
StreamSinkInOneOf3.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "S3Config",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf3TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf3TypeEnum;
(function(StreamSinkInOneOf3TypeEnum) {
    StreamSinkInOneOf3TypeEnum["AmazonS3"] = "amazonS3";
})(StreamSinkInOneOf3TypeEnum = exports.StreamSinkInOneOf3TypeEnum || (exports.StreamSinkInOneOf3TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf3.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf4.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf4TypeEnum = exports.StreamSinkInOneOf4 = void 0;
class StreamSinkInOneOf4 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf4.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf4 = StreamSinkInOneOf4;
StreamSinkInOneOf4.discriminator = undefined;
StreamSinkInOneOf4.mapping = undefined;
StreamSinkInOneOf4.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "SnowflakeConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf4TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf4TypeEnum;
(function(StreamSinkInOneOf4TypeEnum) {
    StreamSinkInOneOf4TypeEnum["Snowflake"] = "snowflake";
})(StreamSinkInOneOf4TypeEnum = exports.StreamSinkInOneOf4TypeEnum || (exports.StreamSinkInOneOf4TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf4.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf5.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf5TypeEnum = exports.StreamSinkInOneOf5 = void 0;
class StreamSinkInOneOf5 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf5.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf5 = StreamSinkInOneOf5;
StreamSinkInOneOf5.discriminator = undefined;
StreamSinkInOneOf5.mapping = undefined;
StreamSinkInOneOf5.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "GoogleCloudStorageConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf5TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf5TypeEnum;
(function(StreamSinkInOneOf5TypeEnum) {
    StreamSinkInOneOf5TypeEnum["GoogleCloudStorage"] = "googleCloudStorage";
})(StreamSinkInOneOf5TypeEnum = exports.StreamSinkInOneOf5TypeEnum || (exports.StreamSinkInOneOf5TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf5.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf6.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf6TypeEnum = exports.StreamSinkInOneOf6 = void 0;
class StreamSinkInOneOf6 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf6.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf6 = StreamSinkInOneOf6;
StreamSinkInOneOf6.discriminator = undefined;
StreamSinkInOneOf6.mapping = undefined;
StreamSinkInOneOf6.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "RedshiftConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf6TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf6TypeEnum;
(function(StreamSinkInOneOf6TypeEnum) {
    StreamSinkInOneOf6TypeEnum["Redshift"] = "redshift";
})(StreamSinkInOneOf6TypeEnum = exports.StreamSinkInOneOf6TypeEnum || (exports.StreamSinkInOneOf6TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf6.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf7.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkInOneOf7TypeEnum = exports.StreamSinkInOneOf7 = void 0;
class StreamSinkInOneOf7 {
    static getAttributeTypeMap() {
        return StreamSinkInOneOf7.attributeTypeMap;
    }
    constructor(){}
}
exports.StreamSinkInOneOf7 = StreamSinkInOneOf7;
StreamSinkInOneOf7.discriminator = undefined;
StreamSinkInOneOf7.mapping = undefined;
StreamSinkInOneOf7.attributeTypeMap = [
    {
        "name": "config",
        "baseName": "config",
        "type": "BigQueryConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "StreamSinkInOneOf7TypeEnum",
        "format": ""
    }
];
var StreamSinkInOneOf7TypeEnum;
(function(StreamSinkInOneOf7TypeEnum) {
    StreamSinkInOneOf7TypeEnum["BigQuery"] = "bigQuery";
})(StreamSinkInOneOf7TypeEnum = exports.StreamSinkInOneOf7TypeEnum || (exports.StreamSinkInOneOf7TypeEnum = {})); //# sourceMappingURL=StreamSinkInOneOf7.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkOutClass = void 0;
class StreamSinkOutClass {
}
exports.StreamSinkOutClass = StreamSinkOutClass;
StreamSinkOutClass.discriminator = undefined;
StreamSinkOutClass.mapping = undefined; //# sourceMappingURL=StreamSinkOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkPatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamSinkPatchClass = void 0;
class StreamSinkPatchClass {
}
exports.StreamSinkPatchClass = StreamSinkPatchClass;
StreamSinkPatchClass.discriminator = undefined;
StreamSinkPatchClass.mapping = undefined; //# sourceMappingURL=StreamSinkPatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateIn = void 0;
class TemplateIn {
    static getAttributeTypeMap() {
        return TemplateIn.attributeTypeMap;
    }
    constructor(){}
}
exports.TemplateIn = TemplateIn;
TemplateIn.discriminator = undefined;
TemplateIn.mapping = undefined;
TemplateIn.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "instructions",
        "baseName": "instructions",
        "type": "string",
        "format": ""
    },
    {
        "name": "instructionsLink",
        "baseName": "instructionsLink",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "TransformationTemplateKind",
        "format": ""
    },
    {
        "name": "logo",
        "baseName": "logo",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "transformation",
        "baseName": "transformation",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=TemplateIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateOut = void 0;
class TemplateOut {
    static getAttributeTypeMap() {
        return TemplateOut.attributeTypeMap;
    }
    constructor(){}
}
exports.TemplateOut = TemplateOut;
TemplateOut.discriminator = undefined;
TemplateOut.mapping = undefined;
TemplateOut.attributeTypeMap = [
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "instructions",
        "baseName": "instructions",
        "type": "string",
        "format": ""
    },
    {
        "name": "instructionsLink",
        "baseName": "instructionsLink",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "TransformationTemplateKind",
        "format": ""
    },
    {
        "name": "logo",
        "baseName": "logo",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "orgId",
        "baseName": "orgId",
        "type": "string",
        "format": ""
    },
    {
        "name": "transformation",
        "baseName": "transformation",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    }
]; //# sourceMappingURL=TemplateOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplatePatch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplatePatch = void 0;
class TemplatePatch {
    static getAttributeTypeMap() {
        return TemplatePatch.attributeTypeMap;
    }
    constructor(){}
}
exports.TemplatePatch = TemplatePatch;
TemplatePatch.discriminator = undefined;
TemplatePatch.mapping = undefined;
TemplatePatch.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "instructions",
        "baseName": "instructions",
        "type": "string",
        "format": ""
    },
    {
        "name": "instructionsLink",
        "baseName": "instructionsLink",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "TransformationTemplateKind",
        "format": ""
    },
    {
        "name": "logo",
        "baseName": "logo",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "transformation",
        "baseName": "transformation",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=TemplatePatch.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateUpdate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateUpdate = void 0;
class TemplateUpdate {
    static getAttributeTypeMap() {
        return TemplateUpdate.attributeTypeMap;
    }
    constructor(){}
}
exports.TemplateUpdate = TemplateUpdate;
TemplateUpdate.discriminator = undefined;
TemplateUpdate.mapping = undefined;
TemplateUpdate.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featureFlag",
        "baseName": "featureFlag",
        "type": "string",
        "format": ""
    },
    {
        "name": "filterTypes",
        "baseName": "filterTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "instructions",
        "baseName": "instructions",
        "type": "string",
        "format": ""
    },
    {
        "name": "instructionsLink",
        "baseName": "instructionsLink",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "TransformationTemplateKind",
        "format": ""
    },
    {
        "name": "logo",
        "baseName": "logo",
        "type": "string",
        "format": "uri"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "transformation",
        "baseName": "transformation",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=TemplateUpdate.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationHttpMethod.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransformationHttpMethod = void 0;
var TransformationHttpMethod;
(function(TransformationHttpMethod) {
    TransformationHttpMethod["Post"] = "POST";
    TransformationHttpMethod["Put"] = "PUT";
    TransformationHttpMethod["Patch"] = "PATCH";
})(TransformationHttpMethod = exports.TransformationHttpMethod || (exports.TransformationHttpMethod = {})); //# sourceMappingURL=TransformationHttpMethod.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateIn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransformationSimulateIn = void 0;
class TransformationSimulateIn {
    static getAttributeTypeMap() {
        return TransformationSimulateIn.attributeTypeMap;
    }
    constructor(){}
}
exports.TransformationSimulateIn = TransformationSimulateIn;
TransformationSimulateIn.discriminator = undefined;
TransformationSimulateIn.mapping = undefined;
TransformationSimulateIn.attributeTypeMap = [
    {
        "name": "channels",
        "baseName": "channels",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "any",
        "format": ""
    }
]; //# sourceMappingURL=TransformationSimulateIn.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateOut.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransformationSimulateOut = void 0;
class TransformationSimulateOut {
    static getAttributeTypeMap() {
        return TransformationSimulateOut.attributeTypeMap;
    }
    constructor(){}
}
exports.TransformationSimulateOut = TransformationSimulateOut;
TransformationSimulateOut.discriminator = undefined;
TransformationSimulateOut.mapping = undefined;
TransformationSimulateOut.attributeTypeMap = [
    {
        "name": "method",
        "baseName": "method",
        "type": "TransformationHttpMethod",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": "uri"
    }
]; //# sourceMappingURL=TransformationSimulateOut.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationTemplateKind.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransformationTemplateKind = void 0;
var TransformationTemplateKind;
(function(TransformationTemplateKind) {
    TransformationTemplateKind["Custom"] = "Custom";
    TransformationTemplateKind["CustomerIo"] = "CustomerIO";
    TransformationTemplateKind["Discord"] = "Discord";
    TransformationTemplateKind["Hubspot"] = "Hubspot";
    TransformationTemplateKind["Inngest"] = "Inngest";
    TransformationTemplateKind["Salesforce"] = "Salesforce";
    TransformationTemplateKind["Segment"] = "Segment";
    TransformationTemplateKind["Slack"] = "Slack";
    TransformationTemplateKind["Teams"] = "Teams";
    TransformationTemplateKind["TriggerDev"] = "TriggerDev";
    TransformationTemplateKind["Windmill"] = "Windmill";
    TransformationTemplateKind["Zapier"] = "Zapier";
})(TransformationTemplateKind = exports.TransformationTemplateKind || (exports.TransformationTemplateKind = {})); //# sourceMappingURL=TransformationTemplateKind.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ValidationError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValidationError = void 0;
class ValidationError {
    static getAttributeTypeMap() {
        return ValidationError.attributeTypeMap;
    }
    constructor(){}
}
exports.ValidationError = ValidationError;
ValidationError.discriminator = undefined;
ValidationError.mapping = undefined;
ValidationError.attributeTypeMap = [
    {
        "name": "loc",
        "baseName": "loc",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "msg",
        "baseName": "msg",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
]; //# sourceMappingURL=ValidationError.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/all.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AggregateEventTypesOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationStats.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationTokenExpireIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsResponse.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AuthTokenOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AzureBlobStorageConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskStatus.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskType.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BigQueryConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusEnum.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ClientSecretJwtParamsIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionChoice.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionMessage.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CountOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateStreamIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateTokenIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomColorPalette.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomStringsOverride.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomThemeOverride.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/DashboardAccessOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Duration.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersPatchIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMtlsConfigIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOauthConfigIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretRotateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointStats.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentSettingsOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventExampleIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventStreamOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeExampleOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeFromOpenApi.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOutData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypePatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeSchemaIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ExportEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/FontSizeConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GoogleCloudStorageConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HTTPValidationError.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HttpErrorOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HubspotOauthConfigIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/InboundPathParams.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IncomingWebhookPayloadOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationKeyOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/KafkaSecurityProtocolType.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationStats.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseBackgroundTaskOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointMessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseIntegrationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseOperationalWebhookEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseSinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamSinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseTemplateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailedData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptHeadersOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptTriggerType.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEventsOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageRawPayloadOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageStatus.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageSubscriberAuthTokenOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Oauth2AuthMethodIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Oauth2GrantTypeIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OauthJwsSigningAlgorithm.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Ordering.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RedshiftConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RetryScheduleInOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatePollerTokenIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatedUrlOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/S3Config.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkHttpConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf1.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf2.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf3.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf4.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOtelV1Config.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkPayloadFormat.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkStatus.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkStatusIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SnowflakeConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StatisticsPeriod.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StatusCodeClass.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypePatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf1.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf2.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf3.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf4.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf5.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf6.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf7.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplatePatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationHttpMethod.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationTemplateKind.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ValidationError.js [app-rsc] (ecmascript)"), exports); //# sourceMappingURL=all.js.map
}}),
"[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ObjectSerializer.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

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
exports.ObjectSerializer = void 0;
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AggregateEventTypesOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationStats.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationTokenExpireIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsResponse.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AuthTokenOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AzureBlobStorageConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskStatus.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskType.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BigQueryConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusEnum.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ClientSecretJwtParamsIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionChoice.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionMessage.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CountOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateStreamIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateTokenIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomColorPalette.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomStringsOverride.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomThemeOverride.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/DashboardAccessOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Duration.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersPatchIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMtlsConfigIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOauthConfigIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretRotateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointStats.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentSettingsOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventExampleIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventStreamOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeExampleOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeFromOpenApi.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOutData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypePatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeSchemaIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ExportEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/FontSizeConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GoogleCloudStorageConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HTTPValidationError.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HttpErrorOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HubspotOauthConfigIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/InboundPathParams.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IncomingWebhookPayloadOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationKeyOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/KafkaSecurityProtocolType.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationStats.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseBackgroundTaskOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointMessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseIntegrationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseOperationalWebhookEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseSinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamSinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseTemplateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailedData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptHeadersOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEvent.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEventData.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptTriggerType.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEventsOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageRawPayloadOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageStatus.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageSubscriberAuthTokenOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Oauth2AuthMethodIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Oauth2GrantTypeIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OauthJwsSigningAlgorithm.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Ordering.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RedshiftConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RetryScheduleInOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatePollerTokenIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatedUrlOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/S3Config.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkHttpConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf1.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf2.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf3.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf4.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOtelV1Config.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkPayloadFormat.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkStatus.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkStatusIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformationOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SnowflakeConfig.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StatisticsPeriod.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StatusCodeClass.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypePatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf1.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf2.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf3.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf4.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf5.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf6.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf7.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkPatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplatePatch.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateUpdate.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationHttpMethod.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateIn.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateOut.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationTemplateKind.js [app-rsc] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ValidationError.js [app-rsc] (ecmascript)"), exports);
const AggregateEventTypesOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AggregateEventTypesOut.js [app-rsc] (ecmascript)");
const AppPortalAccessIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessIn.js [app-rsc] (ecmascript)");
const AppPortalAccessOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppPortalAccessOut.js [app-rsc] (ecmascript)");
const AppUsageStatsIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsIn.js [app-rsc] (ecmascript)");
const AppUsageStatsOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AppUsageStatsOut.js [app-rsc] (ecmascript)");
const ApplicationIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationIn.js [app-rsc] (ecmascript)");
const ApplicationOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationOut.js [app-rsc] (ecmascript)");
const ApplicationPatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationPatch.js [app-rsc] (ecmascript)");
const ApplicationStats_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationStats.js [app-rsc] (ecmascript)");
const ApplicationTokenExpireIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ApplicationTokenExpireIn.js [app-rsc] (ecmascript)");
const AttemptStatisticsData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsData.js [app-rsc] (ecmascript)");
const AttemptStatisticsResponse_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AttemptStatisticsResponse.js [app-rsc] (ecmascript)");
const AuthTokenOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AuthTokenOut.js [app-rsc] (ecmascript)");
const AzureBlobStorageConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/AzureBlobStorageConfig.js [app-rsc] (ecmascript)");
const BackgroundTaskOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BackgroundTaskOut.js [app-rsc] (ecmascript)");
const BigQueryConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BigQueryConfig.js [app-rsc] (ecmascript)");
const BorderRadiusConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/BorderRadiusConfig.js [app-rsc] (ecmascript)");
const ClientSecretJwtParamsIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ClientSecretJwtParamsIn.js [app-rsc] (ecmascript)");
const CompletionChoice_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionChoice.js [app-rsc] (ecmascript)");
const CompletionMessage_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CompletionMessage.js [app-rsc] (ecmascript)");
const CountOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CountOut.js [app-rsc] (ecmascript)");
const CreateStreamIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateStreamIn.js [app-rsc] (ecmascript)");
const CreateTokenIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CreateTokenIn.js [app-rsc] (ecmascript)");
const CustomColorPalette_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomColorPalette.js [app-rsc] (ecmascript)");
const CustomStringsOverride_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomStringsOverride.js [app-rsc] (ecmascript)");
const CustomThemeOverride_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/CustomThemeOverride.js [app-rsc] (ecmascript)");
const DashboardAccessOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/DashboardAccessOut.js [app-rsc] (ecmascript)");
const Duration_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/Duration.js [app-rsc] (ecmascript)");
const EndpointCreatedEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEvent.js [app-rsc] (ecmascript)");
const EndpointCreatedEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointCreatedEventData.js [app-rsc] (ecmascript)");
const EndpointDeletedEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEvent.js [app-rsc] (ecmascript)");
const EndpointDeletedEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDeletedEventData.js [app-rsc] (ecmascript)");
const EndpointDisabledEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEvent.js [app-rsc] (ecmascript)");
const EndpointDisabledEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointDisabledEventData.js [app-rsc] (ecmascript)");
const EndpointHeadersIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersIn.js [app-rsc] (ecmascript)");
const EndpointHeadersOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersOut.js [app-rsc] (ecmascript)");
const EndpointHeadersPatchIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointHeadersPatchIn.js [app-rsc] (ecmascript)");
const EndpointIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointIn.js [app-rsc] (ecmascript)");
const EndpointMessageOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMessageOut.js [app-rsc] (ecmascript)");
const EndpointMtlsConfigIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointMtlsConfigIn.js [app-rsc] (ecmascript)");
const EndpointOauthConfigIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOauthConfigIn.js [app-rsc] (ecmascript)");
const EndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointOut.js [app-rsc] (ecmascript)");
const EndpointPatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointPatch.js [app-rsc] (ecmascript)");
const EndpointSecretOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretOut.js [app-rsc] (ecmascript)");
const EndpointSecretRotateIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointSecretRotateIn.js [app-rsc] (ecmascript)");
const EndpointStats_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointStats.js [app-rsc] (ecmascript)");
const EndpointTransformationIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationIn.js [app-rsc] (ecmascript)");
const EndpointTransformationOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationOut.js [app-rsc] (ecmascript)");
const EndpointTransformationSimulateIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateIn.js [app-rsc] (ecmascript)");
const EndpointTransformationSimulateOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointTransformationSimulateOut.js [app-rsc] (ecmascript)");
const EndpointUpdate_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdate.js [app-rsc] (ecmascript)");
const EndpointUpdatedEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEvent.js [app-rsc] (ecmascript)");
const EndpointUpdatedEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EndpointUpdatedEventData.js [app-rsc] (ecmascript)");
const EnvironmentIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentIn.js [app-rsc] (ecmascript)");
const EnvironmentOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentOut.js [app-rsc] (ecmascript)");
const EnvironmentSettingsOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EnvironmentSettingsOut.js [app-rsc] (ecmascript)");
const EventExampleIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventExampleIn.js [app-rsc] (ecmascript)");
const EventIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventIn.js [app-rsc] (ecmascript)");
const EventOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventOut.js [app-rsc] (ecmascript)");
const EventStreamOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventStreamOut.js [app-rsc] (ecmascript)");
const EventTypeExampleOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeExampleOut.js [app-rsc] (ecmascript)");
const EventTypeFromOpenApi_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeFromOpenApi.js [app-rsc] (ecmascript)");
const EventTypeImportOpenApiIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiIn.js [app-rsc] (ecmascript)");
const EventTypeImportOpenApiOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOut.js [app-rsc] (ecmascript)");
const EventTypeImportOpenApiOutData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeImportOpenApiOutData.js [app-rsc] (ecmascript)");
const EventTypeIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeIn.js [app-rsc] (ecmascript)");
const EventTypeOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeOut.js [app-rsc] (ecmascript)");
const EventTypePatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypePatch.js [app-rsc] (ecmascript)");
const EventTypeSchemaIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeSchemaIn.js [app-rsc] (ecmascript)");
const EventTypeUpdate_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/EventTypeUpdate.js [app-rsc] (ecmascript)");
const ExportEventTypeOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ExportEventTypeOut.js [app-rsc] (ecmascript)");
const FontSizeConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/FontSizeConfig.js [app-rsc] (ecmascript)");
const GenerateIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateIn.js [app-rsc] (ecmascript)");
const GenerateOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GenerateOut.js [app-rsc] (ecmascript)");
const GoogleCloudStorageConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/GoogleCloudStorageConfig.js [app-rsc] (ecmascript)");
const HTTPValidationError_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HTTPValidationError.js [app-rsc] (ecmascript)");
const HttpErrorOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HttpErrorOut.js [app-rsc] (ecmascript)");
const HubspotOauthConfigIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/HubspotOauthConfigIn.js [app-rsc] (ecmascript)");
const InboundPathParams_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/InboundPathParams.js [app-rsc] (ecmascript)");
const IncomingWebhookPayloadOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IncomingWebhookPayloadOut.js [app-rsc] (ecmascript)");
const IntegrationIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationIn.js [app-rsc] (ecmascript)");
const IntegrationKeyOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationKeyOut.js [app-rsc] (ecmascript)");
const IntegrationOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationOut.js [app-rsc] (ecmascript)");
const IntegrationUpdate_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/IntegrationUpdate.js [app-rsc] (ecmascript)");
const ListResponseApplicationOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationOut.js [app-rsc] (ecmascript)");
const ListResponseApplicationStats_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseApplicationStats.js [app-rsc] (ecmascript)");
const ListResponseBackgroundTaskOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseBackgroundTaskOut.js [app-rsc] (ecmascript)");
const ListResponseEndpointMessageOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointMessageOut.js [app-rsc] (ecmascript)");
const ListResponseEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEndpointOut.js [app-rsc] (ecmascript)");
const ListResponseEventTypeOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseEventTypeOut.js [app-rsc] (ecmascript)");
const ListResponseIntegrationOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseIntegrationOut.js [app-rsc] (ecmascript)");
const ListResponseMessageAttemptEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptEndpointOut.js [app-rsc] (ecmascript)");
const ListResponseMessageAttemptOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageAttemptOut.js [app-rsc] (ecmascript)");
const ListResponseMessageEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageEndpointOut.js [app-rsc] (ecmascript)");
const ListResponseMessageOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseMessageOut.js [app-rsc] (ecmascript)");
const ListResponseOperationalWebhookEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseOperationalWebhookEndpointOut.js [app-rsc] (ecmascript)");
const ListResponseSinkOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseSinkOut.js [app-rsc] (ecmascript)");
const ListResponseStreamEventTypeOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamEventTypeOut.js [app-rsc] (ecmascript)");
const ListResponseStreamOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamOut.js [app-rsc] (ecmascript)");
const ListResponseStreamSinkOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseStreamSinkOut.js [app-rsc] (ecmascript)");
const ListResponseTemplateOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ListResponseTemplateOut.js [app-rsc] (ecmascript)");
const MessageAttemptEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptEndpointOut.js [app-rsc] (ecmascript)");
const MessageAttemptExhaustedEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEvent.js [app-rsc] (ecmascript)");
const MessageAttemptExhaustedEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptExhaustedEventData.js [app-rsc] (ecmascript)");
const MessageAttemptFailedData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailedData.js [app-rsc] (ecmascript)");
const MessageAttemptFailingEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEvent.js [app-rsc] (ecmascript)");
const MessageAttemptFailingEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptFailingEventData.js [app-rsc] (ecmascript)");
const MessageAttemptHeadersOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptHeadersOut.js [app-rsc] (ecmascript)");
const MessageAttemptOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptOut.js [app-rsc] (ecmascript)");
const MessageAttemptRecoveredEvent_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEvent.js [app-rsc] (ecmascript)");
const MessageAttemptRecoveredEventData_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageAttemptRecoveredEventData.js [app-rsc] (ecmascript)");
const MessageBroadcastIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastIn.js [app-rsc] (ecmascript)");
const MessageBroadcastOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageBroadcastOut.js [app-rsc] (ecmascript)");
const MessageEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEndpointOut.js [app-rsc] (ecmascript)");
const MessageEventsOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageEventsOut.js [app-rsc] (ecmascript)");
const MessageIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageIn.js [app-rsc] (ecmascript)");
const MessageOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageOut.js [app-rsc] (ecmascript)");
const MessageRawPayloadOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageRawPayloadOut.js [app-rsc] (ecmascript)");
const MessageSubscriberAuthTokenOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/MessageSubscriberAuthTokenOut.js [app-rsc] (ecmascript)");
const OAuthPayloadIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadIn.js [app-rsc] (ecmascript)");
const OAuthPayloadOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OAuthPayloadOut.js [app-rsc] (ecmascript)");
const OneTimeTokenIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenIn.js [app-rsc] (ecmascript)");
const OneTimeTokenOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OneTimeTokenOut.js [app-rsc] (ecmascript)");
const OperationalWebhookEndpointIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointIn.js [app-rsc] (ecmascript)");
const OperationalWebhookEndpointOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointOut.js [app-rsc] (ecmascript)");
const OperationalWebhookEndpointSecretIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretIn.js [app-rsc] (ecmascript)");
const OperationalWebhookEndpointSecretOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointSecretOut.js [app-rsc] (ecmascript)");
const OperationalWebhookEndpointUpdate_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/OperationalWebhookEndpointUpdate.js [app-rsc] (ecmascript)");
const RecoverIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverIn.js [app-rsc] (ecmascript)");
const RecoverOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RecoverOut.js [app-rsc] (ecmascript)");
const RedshiftConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RedshiftConfig.js [app-rsc] (ecmascript)");
const ReplayIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayIn.js [app-rsc] (ecmascript)");
const ReplayOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ReplayOut.js [app-rsc] (ecmascript)");
const RetryScheduleInOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RetryScheduleInOut.js [app-rsc] (ecmascript)");
const RotatePollerTokenIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatePollerTokenIn.js [app-rsc] (ecmascript)");
const RotatedUrlOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/RotatedUrlOut.js [app-rsc] (ecmascript)");
const S3Config_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/S3Config.js [app-rsc] (ecmascript)");
const SinkHttpConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkHttpConfig.js [app-rsc] (ecmascript)");
const SinkIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkIn.js [app-rsc] (ecmascript)");
const SinkInOneOf_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf.js [app-rsc] (ecmascript)");
const SinkInOneOf1_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf1.js [app-rsc] (ecmascript)");
const SinkInOneOf2_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf2.js [app-rsc] (ecmascript)");
const SinkInOneOf3_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf3.js [app-rsc] (ecmascript)");
const SinkInOneOf4_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkInOneOf4.js [app-rsc] (ecmascript)");
const SinkOtelV1Config_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOtelV1Config.js [app-rsc] (ecmascript)");
const SinkOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkOut.js [app-rsc] (ecmascript)");
const SinkTransformIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformIn.js [app-rsc] (ecmascript)");
const SinkTransformationOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SinkTransformationOut.js [app-rsc] (ecmascript)");
const SnowflakeConfig_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/SnowflakeConfig.js [app-rsc] (ecmascript)");
const StreamEventTypeIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeIn.js [app-rsc] (ecmascript)");
const StreamEventTypeOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypeOut.js [app-rsc] (ecmascript)");
const StreamEventTypePatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamEventTypePatch.js [app-rsc] (ecmascript)");
const StreamIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamIn.js [app-rsc] (ecmascript)");
const StreamOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamOut.js [app-rsc] (ecmascript)");
const StreamPatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamPatch.js [app-rsc] (ecmascript)");
const StreamSinkIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkIn.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf1_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf1.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf2_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf2.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf3_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf3.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf4_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf4.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf5_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf5.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf6_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf6.js [app-rsc] (ecmascript)");
const StreamSinkInOneOf7_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkInOneOf7.js [app-rsc] (ecmascript)");
const StreamSinkOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkOut.js [app-rsc] (ecmascript)");
const StreamSinkPatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/StreamSinkPatch.js [app-rsc] (ecmascript)");
const TemplateIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateIn.js [app-rsc] (ecmascript)");
const TemplateOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateOut.js [app-rsc] (ecmascript)");
const TemplatePatch_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplatePatch.js [app-rsc] (ecmascript)");
const TemplateUpdate_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TemplateUpdate.js [app-rsc] (ecmascript)");
const TransformationSimulateIn_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateIn.js [app-rsc] (ecmascript)");
const TransformationSimulateOut_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/TransformationSimulateOut.js [app-rsc] (ecmascript)");
const ValidationError_1 = __turbopack_require__("[project]/node_modules/.pnpm/svix@1.45.1_encoding@0.1.13/node_modules/svix/dist/openapi/models/ValidationError.js [app-rsc] (ecmascript)");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = new Set([
    "BackgroundTaskStatus",
    "BackgroundTaskType",
    "BorderRadiusEnum",
    "EndpointCreatedEventTypeEnum",
    "EndpointDeletedEventTypeEnum",
    "EndpointDisabledEventTypeEnum",
    "EndpointUpdatedEventTypeEnum",
    "KafkaSecurityProtocolType",
    "MessageAttemptExhaustedEventTypeEnum",
    "MessageAttemptFailingEventTypeEnum",
    "MessageAttemptRecoveredEventTypeEnum",
    "MessageAttemptTriggerType",
    "MessageStatus",
    "Oauth2AuthMethodIn",
    "Oauth2GrantTypeIn",
    "OauthJwsSigningAlgorithm",
    "Ordering",
    "SinkInTypeEnum",
    "SinkInOneOfTypeEnum",
    "SinkInOneOf1TypeEnum",
    "SinkInOneOf2TypeEnum",
    "SinkInOneOf3TypeEnum",
    "SinkInOneOf4TypeEnum",
    "SinkOutTypeEnum",
    "SinkPayloadFormat",
    "SinkStatus",
    "SinkStatusIn",
    "StatisticsPeriod",
    "StatusCodeClass",
    "StreamSinkInTypeEnum",
    "StreamSinkInOneOfTypeEnum",
    "StreamSinkInOneOf1TypeEnum",
    "StreamSinkInOneOf2TypeEnum",
    "StreamSinkInOneOf3TypeEnum",
    "StreamSinkInOneOf4TypeEnum",
    "StreamSinkInOneOf5TypeEnum",
    "StreamSinkInOneOf6TypeEnum",
    "StreamSinkInOneOf7TypeEnum",
    "StreamSinkOutTypeEnum",
    "StreamSinkPatchTypeEnum",
    "TransformationHttpMethod",
    "TransformationTemplateKind"
]);
let typeMap = {
    "AggregateEventTypesOut": AggregateEventTypesOut_1.AggregateEventTypesOut,
    "AppPortalAccessIn": AppPortalAccessIn_1.AppPortalAccessIn,
    "AppPortalAccessOut": AppPortalAccessOut_1.AppPortalAccessOut,
    "AppUsageStatsIn": AppUsageStatsIn_1.AppUsageStatsIn,
    "AppUsageStatsOut": AppUsageStatsOut_1.AppUsageStatsOut,
    "ApplicationIn": ApplicationIn_1.ApplicationIn,
    "ApplicationOut": ApplicationOut_1.ApplicationOut,
    "ApplicationPatch": ApplicationPatch_1.ApplicationPatch,
    "ApplicationStats": ApplicationStats_1.ApplicationStats,
    "ApplicationTokenExpireIn": ApplicationTokenExpireIn_1.ApplicationTokenExpireIn,
    "AttemptStatisticsData": AttemptStatisticsData_1.AttemptStatisticsData,
    "AttemptStatisticsResponse": AttemptStatisticsResponse_1.AttemptStatisticsResponse,
    "AuthTokenOut": AuthTokenOut_1.AuthTokenOut,
    "AzureBlobStorageConfig": AzureBlobStorageConfig_1.AzureBlobStorageConfig,
    "BackgroundTaskOut": BackgroundTaskOut_1.BackgroundTaskOut,
    "BigQueryConfig": BigQueryConfig_1.BigQueryConfig,
    "BorderRadiusConfig": BorderRadiusConfig_1.BorderRadiusConfig,
    "ClientSecretJwtParamsIn": ClientSecretJwtParamsIn_1.ClientSecretJwtParamsIn,
    "CompletionChoice": CompletionChoice_1.CompletionChoice,
    "CompletionMessage": CompletionMessage_1.CompletionMessage,
    "CountOut": CountOut_1.CountOut,
    "CreateStreamIn": CreateStreamIn_1.CreateStreamIn,
    "CreateTokenIn": CreateTokenIn_1.CreateTokenIn,
    "CustomColorPalette": CustomColorPalette_1.CustomColorPalette,
    "CustomStringsOverride": CustomStringsOverride_1.CustomStringsOverride,
    "CustomThemeOverride": CustomThemeOverride_1.CustomThemeOverride,
    "DashboardAccessOut": DashboardAccessOut_1.DashboardAccessOut,
    "Duration": Duration_1.Duration,
    "EndpointCreatedEvent": EndpointCreatedEvent_1.EndpointCreatedEvent,
    "EndpointCreatedEventData": EndpointCreatedEventData_1.EndpointCreatedEventData,
    "EndpointDeletedEvent": EndpointDeletedEvent_1.EndpointDeletedEvent,
    "EndpointDeletedEventData": EndpointDeletedEventData_1.EndpointDeletedEventData,
    "EndpointDisabledEvent": EndpointDisabledEvent_1.EndpointDisabledEvent,
    "EndpointDisabledEventData": EndpointDisabledEventData_1.EndpointDisabledEventData,
    "EndpointHeadersIn": EndpointHeadersIn_1.EndpointHeadersIn,
    "EndpointHeadersOut": EndpointHeadersOut_1.EndpointHeadersOut,
    "EndpointHeadersPatchIn": EndpointHeadersPatchIn_1.EndpointHeadersPatchIn,
    "EndpointIn": EndpointIn_1.EndpointIn,
    "EndpointMessageOut": EndpointMessageOut_1.EndpointMessageOut,
    "EndpointMtlsConfigIn": EndpointMtlsConfigIn_1.EndpointMtlsConfigIn,
    "EndpointOauthConfigIn": EndpointOauthConfigIn_1.EndpointOauthConfigIn,
    "EndpointOut": EndpointOut_1.EndpointOut,
    "EndpointPatch": EndpointPatch_1.EndpointPatch,
    "EndpointSecretOut": EndpointSecretOut_1.EndpointSecretOut,
    "EndpointSecretRotateIn": EndpointSecretRotateIn_1.EndpointSecretRotateIn,
    "EndpointStats": EndpointStats_1.EndpointStats,
    "EndpointTransformationIn": EndpointTransformationIn_1.EndpointTransformationIn,
    "EndpointTransformationOut": EndpointTransformationOut_1.EndpointTransformationOut,
    "EndpointTransformationSimulateIn": EndpointTransformationSimulateIn_1.EndpointTransformationSimulateIn,
    "EndpointTransformationSimulateOut": EndpointTransformationSimulateOut_1.EndpointTransformationSimulateOut,
    "EndpointUpdate": EndpointUpdate_1.EndpointUpdate,
    "EndpointUpdatedEvent": EndpointUpdatedEvent_1.EndpointUpdatedEvent,
    "EndpointUpdatedEventData": EndpointUpdatedEventData_1.EndpointUpdatedEventData,
    "EnvironmentIn": EnvironmentIn_1.EnvironmentIn,
    "EnvironmentOut": EnvironmentOut_1.EnvironmentOut,
    "EnvironmentSettingsOut": EnvironmentSettingsOut_1.EnvironmentSettingsOut,
    "EventExampleIn": EventExampleIn_1.EventExampleIn,
    "EventIn": EventIn_1.EventIn,
    "EventOut": EventOut_1.EventOut,
    "EventStreamOut": EventStreamOut_1.EventStreamOut,
    "EventTypeExampleOut": EventTypeExampleOut_1.EventTypeExampleOut,
    "EventTypeFromOpenApi": EventTypeFromOpenApi_1.EventTypeFromOpenApi,
    "EventTypeImportOpenApiIn": EventTypeImportOpenApiIn_1.EventTypeImportOpenApiIn,
    "EventTypeImportOpenApiOut": EventTypeImportOpenApiOut_1.EventTypeImportOpenApiOut,
    "EventTypeImportOpenApiOutData": EventTypeImportOpenApiOutData_1.EventTypeImportOpenApiOutData,
    "EventTypeIn": EventTypeIn_1.EventTypeIn,
    "EventTypeOut": EventTypeOut_1.EventTypeOut,
    "EventTypePatch": EventTypePatch_1.EventTypePatch,
    "EventTypeSchemaIn": EventTypeSchemaIn_1.EventTypeSchemaIn,
    "EventTypeUpdate": EventTypeUpdate_1.EventTypeUpdate,
    "ExportEventTypeOut": ExportEventTypeOut_1.ExportEventTypeOut,
    "FontSizeConfig": FontSizeConfig_1.FontSizeConfig,
    "GenerateIn": GenerateIn_1.GenerateIn,
    "GenerateOut": GenerateOut_1.GenerateOut,
    "GoogleCloudStorageConfig": GoogleCloudStorageConfig_1.GoogleCloudStorageConfig,
    "HTTPValidationError": HTTPValidationError_1.HTTPValidationError,
    "HttpErrorOut": HttpErrorOut_1.HttpErrorOut,
    "HubspotOauthConfigIn": HubspotOauthConfigIn_1.HubspotOauthConfigIn,
    "InboundPathParams": InboundPathParams_1.InboundPathParams,
    "IncomingWebhookPayloadOut": IncomingWebhookPayloadOut_1.IncomingWebhookPayloadOut,
    "IntegrationIn": IntegrationIn_1.IntegrationIn,
    "IntegrationKeyOut": IntegrationKeyOut_1.IntegrationKeyOut,
    "IntegrationOut": IntegrationOut_1.IntegrationOut,
    "IntegrationUpdate": IntegrationUpdate_1.IntegrationUpdate,
    "ListResponseApplicationOut": ListResponseApplicationOut_1.ListResponseApplicationOut,
    "ListResponseApplicationStats": ListResponseApplicationStats_1.ListResponseApplicationStats,
    "ListResponseBackgroundTaskOut": ListResponseBackgroundTaskOut_1.ListResponseBackgroundTaskOut,
    "ListResponseEndpointMessageOut": ListResponseEndpointMessageOut_1.ListResponseEndpointMessageOut,
    "ListResponseEndpointOut": ListResponseEndpointOut_1.ListResponseEndpointOut,
    "ListResponseEventTypeOut": ListResponseEventTypeOut_1.ListResponseEventTypeOut,
    "ListResponseIntegrationOut": ListResponseIntegrationOut_1.ListResponseIntegrationOut,
    "ListResponseMessageAttemptEndpointOut": ListResponseMessageAttemptEndpointOut_1.ListResponseMessageAttemptEndpointOut,
    "ListResponseMessageAttemptOut": ListResponseMessageAttemptOut_1.ListResponseMessageAttemptOut,
    "ListResponseMessageEndpointOut": ListResponseMessageEndpointOut_1.ListResponseMessageEndpointOut,
    "ListResponseMessageOut": ListResponseMessageOut_1.ListResponseMessageOut,
    "ListResponseOperationalWebhookEndpointOut": ListResponseOperationalWebhookEndpointOut_1.ListResponseOperationalWebhookEndpointOut,
    "ListResponseSinkOut": ListResponseSinkOut_1.ListResponseSinkOut,
    "ListResponseStreamEventTypeOut": ListResponseStreamEventTypeOut_1.ListResponseStreamEventTypeOut,
    "ListResponseStreamOut": ListResponseStreamOut_1.ListResponseStreamOut,
    "ListResponseStreamSinkOut": ListResponseStreamSinkOut_1.ListResponseStreamSinkOut,
    "ListResponseTemplateOut": ListResponseTemplateOut_1.ListResponseTemplateOut,
    "MessageAttemptEndpointOut": MessageAttemptEndpointOut_1.MessageAttemptEndpointOut,
    "MessageAttemptExhaustedEvent": MessageAttemptExhaustedEvent_1.MessageAttemptExhaustedEvent,
    "MessageAttemptExhaustedEventData": MessageAttemptExhaustedEventData_1.MessageAttemptExhaustedEventData,
    "MessageAttemptFailedData": MessageAttemptFailedData_1.MessageAttemptFailedData,
    "MessageAttemptFailingEvent": MessageAttemptFailingEvent_1.MessageAttemptFailingEvent,
    "MessageAttemptFailingEventData": MessageAttemptFailingEventData_1.MessageAttemptFailingEventData,
    "MessageAttemptHeadersOut": MessageAttemptHeadersOut_1.MessageAttemptHeadersOut,
    "MessageAttemptOut": MessageAttemptOut_1.MessageAttemptOut,
    "MessageAttemptRecoveredEvent": MessageAttemptRecoveredEvent_1.MessageAttemptRecoveredEvent,
    "MessageAttemptRecoveredEventData": MessageAttemptRecoveredEventData_1.MessageAttemptRecoveredEventData,
    "MessageBroadcastIn": MessageBroadcastIn_1.MessageBroadcastIn,
    "MessageBroadcastOut": MessageBroadcastOut_1.MessageBroadcastOut,
    "MessageEndpointOut": MessageEndpointOut_1.MessageEndpointOut,
    "MessageEventsOut": MessageEventsOut_1.MessageEventsOut,
    "MessageIn": MessageIn_1.MessageIn,
    "MessageOut": MessageOut_1.MessageOut,
    "MessageRawPayloadOut": MessageRawPayloadOut_1.MessageRawPayloadOut,
    "MessageSubscriberAuthTokenOut": MessageSubscriberAuthTokenOut_1.MessageSubscriberAuthTokenOut,
    "OAuthPayloadIn": OAuthPayloadIn_1.OAuthPayloadIn,
    "OAuthPayloadOut": OAuthPayloadOut_1.OAuthPayloadOut,
    "OneTimeTokenIn": OneTimeTokenIn_1.OneTimeTokenIn,
    "OneTimeTokenOut": OneTimeTokenOut_1.OneTimeTokenOut,
    "OperationalWebhookEndpointIn": OperationalWebhookEndpointIn_1.OperationalWebhookEndpointIn,
    "OperationalWebhookEndpointOut": OperationalWebhookEndpointOut_1.OperationalWebhookEndpointOut,
    "OperationalWebhookEndpointSecretIn": OperationalWebhookEndpointSecretIn_1.OperationalWebhookEndpointSecretIn,
    "OperationalWebhookEndpointSecretOut": OperationalWebhookEndpointSecretOut_1.OperationalWebhookEndpointSecretOut,
    "OperationalWebhookEndpointUpdate": OperationalWebhookEndpointUpdate_1.OperationalWebhookEndpointUpdate,
    "RecoverIn": RecoverIn_1.RecoverIn,
    "RecoverOut": RecoverOut_1.RecoverOut,
    "RedshiftConfig": RedshiftConfig_1.RedshiftConfig,
    "ReplayIn": ReplayIn_1.ReplayIn,
    "ReplayOut": ReplayOut_1.ReplayOut,
    "RetryScheduleInOut": RetryScheduleInOut_1.RetryScheduleInOut,
    "RotatePollerTokenIn": RotatePollerTokenIn_1.RotatePollerTokenIn,
    "RotatedUrlOut": RotatedUrlOut_1.RotatedUrlOut,
    "S3Config": S3Config_1.S3Config,
    "SinkHttpConfig": SinkHttpConfig_1.SinkHttpConfig,
    "SinkIn": SinkIn_1.SinkInClass,
    "SinkInOneOf": SinkInOneOf_1.SinkInOneOf,
    "SinkInOneOf1": SinkInOneOf1_1.SinkInOneOf1,
    "SinkInOneOf2": SinkInOneOf2_1.SinkInOneOf2,
    "SinkInOneOf3": SinkInOneOf3_1.SinkInOneOf3,
    "SinkInOneOf4": SinkInOneOf4_1.SinkInOneOf4,
    "SinkOtelV1Config": SinkOtelV1Config_1.SinkOtelV1Config,
    "SinkOut": SinkOut_1.SinkOutClass,
    "SinkTransformIn": SinkTransformIn_1.SinkTransformIn,
    "SinkTransformationOut": SinkTransformationOut_1.SinkTransformationOut,
    "SnowflakeConfig": SnowflakeConfig_1.SnowflakeConfig,
    "StreamEventTypeIn": StreamEventTypeIn_1.StreamEventTypeIn,
    "StreamEventTypeOut": StreamEventTypeOut_1.StreamEventTypeOut,
    "StreamEventTypePatch": StreamEventTypePatch_1.StreamEventTypePatch,
    "StreamIn": StreamIn_1.StreamIn,
    "StreamOut": StreamOut_1.StreamOut,
    "StreamPatch": StreamPatch_1.StreamPatch,
    "StreamSinkIn": StreamSinkIn_1.StreamSinkInClass,
    "StreamSinkInOneOf": StreamSinkInOneOf_1.StreamSinkInOneOf,
    "StreamSinkInOneOf1": StreamSinkInOneOf1_1.StreamSinkInOneOf1,
    "StreamSinkInOneOf2": StreamSinkInOneOf2_1.StreamSinkInOneOf2,
    "StreamSinkInOneOf3": StreamSinkInOneOf3_1.StreamSinkInOneOf3,
    "StreamSinkInOneOf4": StreamSinkInOneOf4_1.StreamSinkInOneOf4,
    "StreamSinkInOneOf5": StreamSinkInOneOf5_1.StreamSinkInOneOf5,
    "StreamSinkInOneOf6": StreamSinkInOneOf6_1.StreamSinkInOneOf6,
    "StreamSinkInOneOf7": StreamSinkInOneOf7_1.StreamSinkInOneOf7,
    "StreamSinkOut": StreamSinkOut_1.StreamSinkOutClass,
    "StreamSinkPatch": StreamSinkPatch_1.StreamSinkPatchClass,
    "TemplateIn": TemplateIn_1.TemplateIn,
    "TemplateOut": TemplateOut_1.TemplateOut,
    "TemplatePatch": TemplatePatch_1.TemplatePatch,
    "TemplateUpdate": TemplateUpdate_1.TemplateUpdate,
    "TransformationSimulateIn": TransformationSimulateIn_1.TransformationSimulateIn,
    "TransformationSimulateOut": TransformationSimulateOut_1.TransformationSimulateOut,
    "ValidationError": ValidationError_1.ValidationError
};
const parseMimeType = (mimeType)=>{
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+')
    };
};
const mimeTypePredicateFactory = (predicate)=>(mimeType)=>predicate(parseMimeType(mimeType));
const mimeTypeSimplePredicateFactory = (type, subtype)=>mimeTypePredicateFactory((descriptor)=>{
        if (descriptor.type !== type) return false;
        if (subtype != null && descriptor.subtype !== subtype) return false;
        return true;
    });
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor)=>descriptor.type === 'application' && descriptor.subtypeTokens.some((item)=>item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
const supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType
];
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType];
                    } else if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType;
                    }
                } else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            let transformedData = [];
            for (let date of data){
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length);
            let transformedData = {};
            for(let key in data){
                transformedData[key] = ObjectSerializer.serialize(data[key], subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let attributeType of attributeTypes){
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            let transformedData = [];
            for (let date of data){
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length);
            let transformedData = {};
            for(let key in data){
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes){
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (const predicate of supportedMimeTypePredicatesWithPriority){
            for (const mediaType of normalMediaTypes){
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }
    static stringify(data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer; //# sourceMappingURL=ObjectSerializer.js.map
}}),

};

//# sourceMappingURL=6f523_svix_dist_openapi_models_710259._.js.map