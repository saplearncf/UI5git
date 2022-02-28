sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/core/util/MockServer'
], function(Controller, ODataModel, MockServer) {
	"use strict";

	return Controller.extend("com.sap.firstappFirstApp.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.firstappFirstApp.view.Detail
		 */
			onInit: function() {
			var oModel, oView;

			var oMockServer = new MockServer({
				rootUri: "/"
			});
			this._oMockServer = oMockServer;
			oMockServer.simulate("../model/metadata.xml", "../model/");
			oMockServer.start();
			oModel = new ODataModel("sapuicompsmarttablehlighlight", {
				defaultCountMode: "Inline"
			});
			oView = this.getView();
			oView.setModel(oModel);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.firstappFirstApp.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.firstappFirstApp.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.firstappFirstApp.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});