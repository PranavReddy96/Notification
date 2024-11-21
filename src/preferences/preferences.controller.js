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
exports.PreferencesController = void 0;
var common_1 = require("@nestjs/common");
var preferences_service_1 = require("./preferences.service");
var create_user_preference_dto_1 = require("./dto/create-user-preference.dto");
var update_user_preference_dto_1 = require("./dto/update-user-preference.dto");
var PreferencesController = /** @class */ (function () {
    function PreferencesController(preferencesService) {
        this.preferencesService = preferencesService;
    }
    PreferencesController.prototype.create = function (createUserPreferenceDto) {
        return this.preferencesService.create(createUserPreferenceDto);
    };
    PreferencesController.prototype.findOne = function (userId) {
        return this.preferencesService.findOne(userId);
    };
    PreferencesController.prototype.update = function (userId, updateUserPreferenceDto) {
        return this.preferencesService.update(userId, updateUserPreferenceDto);
    };
    PreferencesController.prototype.remove = function (userId) {
        return this.preferencesService.remove(userId);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_user_preference_dto_1.CreateUserPreferenceDto]),
        __metadata("design:returntype", void 0)
    ], PreferencesController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(':userId'),
        __param(0, (0, common_1.Param)('userId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PreferencesController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':userId'),
        __param(0, (0, common_1.Param)('userId')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_user_preference_dto_1.UpdateUserPreferenceDto]),
        __metadata("design:returntype", void 0)
    ], PreferencesController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':userId'),
        __param(0, (0, common_1.Param)('userId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PreferencesController.prototype, "remove", null);
    PreferencesController = __decorate([
        (0, common_1.Controller)('preferences'),
        __metadata("design:paramtypes", [preferences_service_1.PreferencesService])
    ], PreferencesController);
    return PreferencesController;
}());
exports.PreferencesController = PreferencesController;
