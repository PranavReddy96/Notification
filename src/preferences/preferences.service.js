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
exports.PreferencesService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var user_preference_schema_1 = require("./schemas/user-preference.schema");
var PreferencesService = /** @class */ (function () {
    function PreferencesService(userPreferenceModel) {
        this.userPreferenceModel = userPreferenceModel;
    }
    PreferencesService.prototype.create = function (createUserPreferenceDto) {
        var newPreference = new this.userPreferenceModel(createUserPreferenceDto);
        return newPreference.save();
    };
    PreferencesService.prototype.findOne = function (userId) {
        return this.userPreferenceModel.findOne({ userId: userId }).exec();
    };
    PreferencesService.prototype.update = function (userId, updateUserPreferenceDto) {
        return this.userPreferenceModel.findOneAndUpdate({ userId: userId }, updateUserPreferenceDto, {
            new: true,
        });
    };
    PreferencesService.prototype.remove = function (userId) {
        return this.userPreferenceModel.findOneAndDelete({ userId: userId }).exec();
    };
    PreferencesService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_1.InjectModel)(user_preference_schema_1.UserPreference.name)),
        __metadata("design:paramtypes", [mongoose_2.Model])
    ], PreferencesService);
    return PreferencesService;
}());
exports.PreferencesService = PreferencesService;
