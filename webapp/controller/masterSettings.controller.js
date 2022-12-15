sap.ui.define([
	'./BaseController',
	'sap/ui/model/json/JSONModel',
	"sap/ui/VersionInfo",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/Core"
], function (BaseController, JSONModel, VersionInfo, XMLView, oCore) {
	"use strict";
	return BaseController.extend("sap.ui.demo.controller.masterSettings", {

		// onInit: function () {
		// 	var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
		// 	var oSettingsModel = new JSONModel({ navigatedItem: ""});
		// 	this.getView().setModel(oModel);
		// 	this.getView().setModel(oSettingsModel, 'settings');
		// },

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oBindingContext = oItem.getBindingContext();
			var oModel = this.getView().getModel();
			var oSettingsModel = this.getView().getModel('settings');
			oSettingsModel.setProperty("/navigatedItem", oModel.getProperty("ProductId", oBindingContext));
		},
		onRefresh: function() {

		},
		// isNavigated: function(sNavigatedItemId, sItemId) {
		// 	return sNavigatedItemId === sItemId;
		// }

	});
});