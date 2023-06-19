"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: '../uploads',
                limits: {
                    fileSize: 4 * 1024 * 1024,
                },
                fileFilter: (req, file, callback) => {
                    if (!file.originalname.match(/\.(doc|docx|pdf)$/) ||
                        !file.mimetype.match(/\/(doc|docx|pdf)$/)) {
                        callback(new common_1.HttpException('Only DOC, DOCX, and PDF files are allowed!', common_1.HttpStatus.FORBIDDEN), false);
                    }
                    else {
                        callback(null, true);
                    }
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map