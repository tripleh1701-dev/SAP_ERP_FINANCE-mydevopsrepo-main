/*global QUnit*/

sap.ui.define([
	"devopsproject/controller/DevOpsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DevOpsView Controller");

	QUnit.test("I should test the DevOpsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
