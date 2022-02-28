sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/Filter'
], function(Controller, JSONModel, Filter) {
	"use strict";
ga('send', 'pageview',"/FirstPage");
	return Controller.extend("com.sap.firstappFirstApp.controller.FirstView", {
		onInit: function(evt) {

			// set explored app's demo model on this sample
			var oModel = new JSONModel("https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			this.getView().setModel(oModel);

			var data = {
				searchId: ""
			};
			var that = this;
			// create JSON model instance
			var oappStateModel = new JSONModel();
			// set the data for the model
			oappStateModel.setData(data);
			// set the model to the core
			this.getView().setModel(oappStateModel, "appStateModel");
		},
		onSearch: function(oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.oSource ? oEvt.getSource().getValue()  :  oEvt.getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.byId("ShortProductList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		goToMaterialDetail: function(oEvent) {
			ga('send', 'event', 'button', 'click', 'Next Page');
			if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {

				var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
				oCrossAppNavigator.toExternal({
					target: {
						semanticObject: "second",
						action: "action"
					},
					params: {
						"material": "first",
						"description": "app"
					}
				});
			} else {
				alert("App to app navigation is not supported in this mode");
			}
		}
	});
});