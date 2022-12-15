sap.ui.define([
    "sap/ui/core/library",
	"sap/ui/core/UIComponent",
	"./model/models",
	"sap/ui/core/routing/History",
	"sap/ui/Device",
	"sap/ui/model/resource/ResourceModel"
 ], function (library, UIComponent, models, History, Device) {
    "use strict"
    return UIComponent.extend(
      "sap.ui.demo.Component", {
      metadata: {
         manifest: "json"
      },
      init: function () {
         UIComponent.prototype.init.apply(
            this,
            arguments
         )

        //  this.setModel(models.createDeviceModel(), "device");
         this.getRouter().initialize();
      },

      getContentDensityClass: function () {
        if (!this._sContentDensityClass) {
            if (!Device.support.touch){
                this._sContentDensityClass = "sapUiSizeCompact";
            } else {
                this._sContentDensityClass = "sapUiSizeCozy";
            }
        }
        return this._sContentDensityClass;
    }
   })
 })