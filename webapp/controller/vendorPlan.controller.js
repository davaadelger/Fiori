sap.ui.define([
	"sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/ui/table/Table',
	"sap/m/ColumnListItem",
	"sap/ui/dom/jquery/getSelectedText"
], function(
	Controller,
	JSONModel,
	Table,
	ColumnListItem,
	getSelectedText
) {
	"use strict";

	return Controller.extend("sap.ui.demo.controller.vendorPlan", {
        onInit: function () {
            // var oTable = this.byId("vendorPlanList");
            // oTable.setFixedRowCount(20);
		},
        onChange: function(oEvent) {
			// console.log(this.getView().byId('car').getItems())
			var carModel = this.getView().byId('car').getBinding("items");
			// console.log(carModel)
			// console.log(oEvent.getParameters().selectedItem.getKey())
			var oFilter = new sap.ui.model.Filter("CustId", sap.ui.model.FilterOperator.EQ, oEvent.getParameters().selectedItem.getKey());
			carModel.filter(oFilter);
		},
		handleChange: async function(oEvent) {
            var vendorId = this.byId('idComboBox').getSelectedItem().getText();
            if(vendorId == "") {
                return null;
            }
            var oModel;
            var url = "https://script.google.com/macros/s/AKfycbxZg-74KqqzyyRgiT0i4ZtC1DQ1VWpMF7OwdsgSsdOzrmOu4W7lX99xUrTv7v9Y-j9m/exec";
            var data = await jQuery.ajax({
                        type : "GET",
                        url : url + "?Vendorcode=" + vendorId + "&User=B1iadmin&Password=@dmin123",
                        dataType : "json",
                        success : function(data,textStatus, jqXHR) {
                            return data;
                        },
                    });
            this.bindTable(data);
		},
        bindTable: function (data) {
            var oTable = this.getView().byId("vendorPlanList");
            var columns = oTable.getColumns().length;
            if(columns == 0) {
                var len = data.header[0].length;
                console.log(len)
                for(var i=1;i<len;i++) {
                    var oColumn = new sap.m.Column("col" + i,{
                        width: "5em",
                        header: new sap.m.Label({
                            text: data.header[0][i]
                        })
                    });
                    oTable.addColumn(oColumn);
                }
            }
            
            var oModelX = new sap.ui.model.json.JSONModel();

            oModelX.setData({
                rows: data.row
            });
            oTable.setModel(oModelX);

            oTable.bindItems("/rows", function(index, context) {
                var obj = context.getObject();
                var row = new sap.m.ColumnListItem();

                for (var k in obj) {
                    row.addCell(new sap.m.Text({
                        text: obj[k]
                    }));
                }
                return row;
            });
        }
	});
});