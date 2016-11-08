var BamHooks = {};

(function () {

    function BH() {

        this.isIOS = function () {
            return navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPad") > -1;
        };

        this.sendMessage = function (message) {

            message["timestamp"] = (new Date()).getTime();


            if (this.isIOS()) {
                //ios
                window.location = "#json=" + JSON.stringify(message);
            }
            else {

                //anroid
                window.NATIVE.sendMessage(JSON.stringify(message));
            }
        };

        this.launchPassbook = function (url) {
            var newLocation = "passbookurl://?" + url;
            window.location = newLocation;
        };

        this.launchExternal = function (url) {
            var message = {"safariurl": url};

            this.sendMessage(message);
        };

        this.goBack = function () {
            if (this.isIOS()) {
                this.sendMessage({"action": "back"})
            }
            else {
                window.location = "atbat://close";
            }
        };
    }

    window.BamHooks = new BH();
    
})();