"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Documents";
        this.documents = [
            {
                title: "My first document",
                description: "some description about something",
                file_url: 'http://google.com/',
                updated_at: '12/12/2112',
                image_url: 'http://google.com/'
            },
            {
                title: "My 2nd document",
                description: "some description about something",
                file_url: 'http://google.com/',
                updated_at: '12/12/2112',
                image_url: 'http://google.com/'
            },
            {
                title: "My 3rd document",
                description: "some description about something",
                file_url: 'http://google.com/',
                updated_at: '12/12/2112',
                image_url: 'http://google.com/'
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html'
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map