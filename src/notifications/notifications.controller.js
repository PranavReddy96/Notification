"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
var common_1 = require("@nestjs/common");
var notifications_service_1 = require("./notifications.service");
var send_notification_dto_1 = require("./dto/send-notification.dto");
var NotificationsController = /** @class */ (function () {
    function NotificationsController(notificationsService) {
        this.notificationsService = notificationsService;
    }
    NotificationsController.prototype.sendNotification = function (sendNotificationDto) {
        return this.notificationsService.send(sendNotificationDto);
    };
    NotificationsController.prototype.getLogs = function (userId) {
        return this.notificationsService.findLogsByUser(userId);
    };
    __decorate([
        (0, common_1.Post)('send'),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [send_notification_dto_1.SendNotificationDto]),
        __metadata("design:returntype", void 0)
    ], NotificationsController.prototype, "sendNotification", null);
    __decorate([
        (0, common_1.Get)(':userId/logs'),
        __param(0, (0, common_1.Param)('userId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], NotificationsController.prototype, "getLogs", null);
    NotificationsController = __decorate([
        (0, common_1.Controller)('notifications'),
        __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
    ], NotificationsController);
    return NotificationsController;
}());
exports.NotificationsController = NotificationsController;
