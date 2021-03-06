(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('cdk-table-exporter'), require('@angular/material'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mat-table-exporter', ['exports', 'cdk-table-exporter', '@angular/material', '@angular/core'], factory) :
    (global = global || self, factory(global['mat-table-exporter'] = {}, global['cdk-table-exporter'], global.ng.material, global.ng.core));
}(this, function (exports, cdkTableExporter, material, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatTableExporterDirective = /** @class */ (function (_super) {
        __extends(MatTableExporterDirective, _super);
        function MatTableExporterDirective(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
            return _super.call(this, renderer, serviceLocator, dataExtractor, table, viewContainerRef) || this;
        }
        /**
         * Overriding ngAfterViewInit of TableExporter
         */
        /**
         * Overriding ngAfterViewInit of TableExporter
         * @return {?}
         */
        MatTableExporterDirective.prototype.ngAfterViewInit = /**
         * Overriding ngAfterViewInit of TableExporter
         * @return {?}
         */
        function () {
            var _this = this;
            this.exportStarted.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.enablePaginator(false);
            }));
            this.exportCompleted.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.enablePaginator(true);
            }));
        };
        /**
         * MatTable implementation of getPageCount
         * @override
         */
        /**
         * MatTable implementation of getPageCount
         * @override
         * @return {?}
         */
        MatTableExporterDirective.prototype.getPageCount = /**
         * MatTable implementation of getPageCount
         * @override
         * @return {?}
         */
        function () {
            return this.getPaginator().getNumberOfPages();
        };
        /**
         * MatTable implementation of getCurrentPageIndex
         * @override
         */
        /**
         * MatTable implementation of getCurrentPageIndex
         * @override
         * @return {?}
         */
        MatTableExporterDirective.prototype.getCurrentPageIndex = /**
         * MatTable implementation of getCurrentPageIndex
         * @override
         * @return {?}
         */
        function () {
            return this.getPaginator().pageIndex;
        };
        /**
         * MatTable implementation of goToPage
         * @override
         */
        /**
         * MatTable implementation of goToPage
         * @override
         * @param {?} index
         * @return {?}
         */
        MatTableExporterDirective.prototype.goToPage = /**
         * MatTable implementation of goToPage
         * @override
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.getPaginator().pageIndex = index;
            this.getPaginator()._changePageSize(this.getPaginator().pageSize);
        };
        /**
         * MatTable implementation of getPageChangeObservable
         * @override
         */
        /**
         * MatTable implementation of getPageChangeObservable
         * @override
         * @return {?}
         */
        MatTableExporterDirective.prototype.getPageChangeObservable = /**
         * MatTable implementation of getPageChangeObservable
         * @override
         * @return {?}
         */
        function () {
            return this.getPaginator().page;
        };
        /**
         * @private
         * @return {?}
         */
        MatTableExporterDirective.prototype.getPaginator = /**
         * @private
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.cdkTable.dataSource))).paginator;
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        MatTableExporterDirective.prototype.enablePaginator = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.getPaginator()) {
                this.getPaginator().disabled = !value;
                this.getPaginator()._changePageSize(this.getPaginator().pageSize);
            }
        };
        MatTableExporterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngxMatTableExporter], [matTableExporter]',
                        // renamed selector but kept old version for backwards compat.
                        exportAs: 'matTableExporter'
                    },] }
        ];
        /** @nocollapse */
        MatTableExporterDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: cdkTableExporter.ServiceLocatorService },
            { type: cdkTableExporter.DataExtractorService },
            { type: material.MatTable, decorators: [{ type: core.Host }, { type: core.Self }, { type: core.Optional }] },
            { type: core.ViewContainerRef }
        ]; };
        return MatTableExporterDirective;
    }(cdkTableExporter.CdkTableExporter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatTableExporterModule = /** @class */ (function () {
        function MatTableExporterModule() {
        }
        MatTableExporterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MatTableExporterDirective],
                        imports: [
                            material.MatTableModule,
                            cdkTableExporter.CdkTableExporterModule
                        ],
                        exports: [MatTableExporterDirective]
                    },] }
        ];
        return MatTableExporterModule;
    }());

    Object.defineProperty(exports, 'CHAR_SET_UTF', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CHAR_SET_UTF;
        }
    });
    Object.defineProperty(exports, 'CHAR_SET_UTF_16', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CHAR_SET_UTF_16;
        }
    });
    Object.defineProperty(exports, 'CHAR_SET_UTF_8', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CHAR_SET_UTF_8;
        }
    });
    Object.defineProperty(exports, 'CONTENT_TYPE_APPLICATION', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CONTENT_TYPE_APPLICATION;
        }
    });
    Object.defineProperty(exports, 'CONTENT_TYPE_EXCEL', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CONTENT_TYPE_EXCEL;
        }
    });
    Object.defineProperty(exports, 'CONTENT_TYPE_TEXT', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CONTENT_TYPE_TEXT;
        }
    });
    Object.defineProperty(exports, 'CdkTableExporter', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CdkTableExporter;
        }
    });
    Object.defineProperty(exports, 'CdkTableExporterModule', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CdkTableExporterModule;
        }
    });
    Object.defineProperty(exports, 'CsvExporterService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.CsvExporterService;
        }
    });
    Object.defineProperty(exports, 'DataExtractorService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.DataExtractorService;
        }
    });
    Object.defineProperty(exports, 'EXTENSION_CSV', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.EXTENSION_CSV;
        }
    });
    Object.defineProperty(exports, 'EXTENSION_JSON', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.EXTENSION_JSON;
        }
    });
    Object.defineProperty(exports, 'EXTENSION_TEXT', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.EXTENSION_TEXT;
        }
    });
    Object.defineProperty(exports, 'EXTENSION_XLS', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.EXTENSION_XLS;
        }
    });
    Object.defineProperty(exports, 'EXTENSION_XLSX', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.EXTENSION_XLSX;
        }
    });
    Object.defineProperty(exports, 'ExportType', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.ExportType;
        }
    });
    Object.defineProperty(exports, 'FileUtil', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.FileUtil;
        }
    });
    Object.defineProperty(exports, 'JsonExporterService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.JsonExporterService;
        }
    });
    Object.defineProperty(exports, 'MAT_TABLE_EXPORTER', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.MAT_TABLE_EXPORTER;
        }
    });
    Object.defineProperty(exports, 'MIME_CSV', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.MIME_CSV;
        }
    });
    Object.defineProperty(exports, 'MIME_EXCEL_XLS', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.MIME_EXCEL_XLS;
        }
    });
    Object.defineProperty(exports, 'MIME_EXCEL_XLSX', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.MIME_EXCEL_XLSX;
        }
    });
    Object.defineProperty(exports, 'MIME_JSON', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.MIME_JSON;
        }
    });
    Object.defineProperty(exports, 'MIME_TXT', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.MIME_TXT;
        }
    });
    Object.defineProperty(exports, 'Mime', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.Mime;
        }
    });
    Object.defineProperty(exports, 'P', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.P;
        }
    });
    Object.defineProperty(exports, 'REF', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.REF;
        }
    });
    Object.defineProperty(exports, 'ServiceLocatorService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.ServiceLocatorService;
        }
    });
    Object.defineProperty(exports, 'TYPE_ARRAY', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.TYPE_ARRAY;
        }
    });
    Object.defineProperty(exports, 'TxtExporterService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.TxtExporterService;
        }
    });
    Object.defineProperty(exports, 'WorksheetExporter', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.WorksheetExporter;
        }
    });
    Object.defineProperty(exports, 'XLS_REGEX', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.XLS_REGEX;
        }
    });
    Object.defineProperty(exports, 'XlsExporterService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.XlsExporterService;
        }
    });
    Object.defineProperty(exports, 'XlsxExporterService', {
        enumerable: true,
        get: function () {
            return cdkTableExporter.XlsxExporterService;
        }
    });
    exports.MatTableExporterDirective = MatTableExporterDirective;
    exports.MatTableExporterModule = MatTableExporterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mat-table-exporter.umd.js.map
