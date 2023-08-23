/*global QUnit*/

sap.ui.define([
	"protech/estadocuenta/controller/Filtros.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Filtros Controller");

	QUnit.test("I should test the Filtros controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
