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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserPreferenceDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ChannelsDto = /** @class */ (function () {
    function ChannelsDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Boolean)
    ], ChannelsDto.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Boolean)
    ], ChannelsDto.prototype, "sms", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Boolean)
    ], ChannelsDto.prototype, "push", void 0);
    return ChannelsDto;
}());
var CreateUserPreferenceDto = /** @class */ (function () {
    function CreateUserPreferenceDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateUserPreferenceDto.prototype, "userId", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], CreateUserPreferenceDto.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ChannelsDto; }),
        __metadata("design:type", Object)
    ], CreateUserPreferenceDto.prototype, "preferences", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateUserPreferenceDto.prototype, "timezone", void 0);
    return CreateUserPreferenceDto;
}());
exports.CreateUserPreferenceDto = CreateUserPreferenceDto;
