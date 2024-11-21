"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationLogSchema = exports.NotificationLog = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var NotificationLog = /** @class */ (function (_super) {
    __extends(NotificationLog, _super);
    function NotificationLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, mongoose_1.Prop)({ required: true }),
        __metadata("design:type", String)
    ], NotificationLog.prototype, "userId", void 0);
    __decorate([
        (0, mongoose_1.Prop)({ required: true, enum: ['marketing', 'newsletter', 'updates'] }),
        __metadata("design:type", String)
    ], NotificationLog.prototype, "type", void 0);
    __decorate([
        (0, mongoose_1.Prop)({ required: true, enum: ['email', 'sms', 'push'] }),
        __metadata("design:type", String)
    ], NotificationLog.prototype, "channel", void 0);
    __decorate([
        (0, mongoose_1.Prop)({ required: true, enum: ['pending', 'sent', 'failed'] }),
        __metadata("design:type", String)
    ], NotificationLog.prototype, "status", void 0);
    __decorate([
        (0, mongoose_1.Prop)(),
        __metadata("design:type", Date)
    ], NotificationLog.prototype, "sentAt", void 0);
    __decorate([
        (0, mongoose_1.Prop)(),
        __metadata("design:type", String)
    ], NotificationLog.prototype, "failureReason", void 0);
    __decorate([
        (0, mongoose_1.Prop)({ type: Object }),
        __metadata("design:type", Object)
    ], NotificationLog.prototype, "metadata", void 0);
    NotificationLog = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], NotificationLog);
    return NotificationLog;
}(mongoose_2.Document));
exports.NotificationLog = NotificationLog;
exports.NotificationLogSchema = mongoose_1.SchemaFactory.createForClass(NotificationLog);
