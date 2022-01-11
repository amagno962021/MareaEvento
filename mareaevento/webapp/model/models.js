sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createInitModel: function(){
            var dataModel = {};
            var oModel = new JSONModel(dataModel);
			//oModel.setDefaultBindingMode("OneWay");
			return oModel; 
        }

    };
});