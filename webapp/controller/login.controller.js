sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    'sap/m/MessageToast'
], function (Controller, MessageBox, MessageToast ) {
    "use strict"
    
    return Controller.extend("sap.ui.demo.controller.login", {
        // onInit: function() {
        //     var oToolPage = document.getElementById("main");
        //     console.log(oToolPage)
		// 	oToolPage.setSideExpanded(false);
        // },
        onLoginUser: function(){
            var pass1 = this.getView().byId("user_password1");
            var username = this.getView().byId("user_id");
            var password = this.getView().byId("user_password");
            if(pass1.getVisible() == true) {
                if(username.getValue() == '') {
                    MessageBox.error("Нэвтрэх нэр оруулна уу!!");
                }
                else {
                    if(password.getValue() == '') {
                        MessageBox.error("Нууц үгээ оруулна уу!!");
                    }
                    else {
                        if(pass1.getValue() == '') {
                            MessageBox.error("Нууц үгээ оруулна уу!!");
                        }
                        else {
                            if(password.getValue() != pass1.getValue()) {
                                // MessageToast.show("Нууц үг хоорондоо таарсангүй!!");
                                MessageBox.error("Нууц үг хоорондоо таарсангүй!!");
                            }
                            else {
                                MessageToast.show("Success");
                            }
                        }
                    }
                }
                
            }
            else {
                if(username.getValue() === ''){
                    MessageBox.error("Please enter username");
                }else if(password.getValue() === ''){
                    MessageBox.error("Please enter password")
                }else{
                    if(username.getValue() === "davaa" && password.getValue() === "davaa"){
                        username.setValue("");
                        password.setValue("");
                        var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
                        oStorage.put("Username", username.getValue());
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("home");
                    }
                    else{
                        MessageBox.error("Invalid Username or Password!");
                        return;
                    }
                }
            }
            
        },
        onSignUpUser: function() {
            // this.getView().byId("login").setValue = "Бүртгүүлэх";
            document.getElementById("Login").title = "Бүртгүүлэх";
        },
        onLogin: function() {

        },
        onSelectionChange: function(oEvent) {
            var key = oEvent.getParameter("item").getKey();
            if(key == "signup") {
                // console.log(this.getView().byId("pass1_text").getVisible());
                this.getView().byId("pass1_text").setVisible(true);
                this.getView().byId("button").setText("Бүртгүүлэх");
                this.getView().byId("user_password1").setVisible(true);

                this.getView().byId("user_password1").setValue('');
                this.getView().byId("user_password").setValue('');
                this.getView().byId("user_id").setValue('');
            }
            else if(key == "login"){
                this.getView().byId("button").setText("Нэвтрэх");
                this.getView().byId("pass1_text").setVisible(false);
                this.getView().byId("user_password1").setVisible(false);
                
                this.getView().byId("user_password1").setValue('');
                this.getView().byId("user_password").setValue('');
                this.getView().byId("user_id").setValue('');
            }
            
        }
    })
})