// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast

     */
], function (Controller,MessageToast,Models,ResourceModel) {
    "use strict";
    return Controller.extend("logaligroup.sapui5.controller.App", {
        
        onInit:function(){
        },
        
        OnShowHello: function () {
            //read from i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //read property from data model
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg",[sRecipient]);
            MessageToast.show(sMsg);
        }
    });
});
