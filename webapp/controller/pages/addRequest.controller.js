sap.ui.define([
	'../BaseController',
	'sap/ui/model/json/JSONModel',
	"sap/ui/VersionInfo",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/Core"
], function (BaseController, JSONModel, VersionInfo, XMLView, oCore) {
	"use strict";
	return BaseController.extend("sap.ui.demo.controller.pages.addRequest", {

		onInit: function () {
			this.getView().byId("DP1").setDateValue(new Date());
		},

		// onPress: function (oEvent) {
		// 	var oItem = oEvent.getSource();
		// 	var oBindingContext = oItem.getBindingContext();
		// 	var oModel = this.getView().getModel();
		// 	var oSettingsModel = this.getView().getModel('settings');
		// 	oSettingsModel.setProperty("/navigatedItem", oModel.getProperty("ProductId", oBindingContext));
		// },

		// isNavigated: function(sNavigatedItemId, sItemId) {
		// 	return sNavigatedItemId === sItemId;
		// }
		onChange: function(oEvent) {
			// console.log(this.getView().byId('car').getItems())
			var carModel = this.getView().byId('car').getBinding("items");
			// console.log(carModel)
			// console.log(oEvent.getParameters().selectedItem.getKey())
			var oFilter = new sap.ui.model.Filter("CustId", sap.ui.model.FilterOperator.EQ, oEvent.getParameters().selectedItem.getKey());
			carModel.filter(oFilter);
		},
		handleChange: function() {
			
		}
	});
});