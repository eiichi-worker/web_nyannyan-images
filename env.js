// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
document.addEventListener("DOMContentLoaded", function () {
    var domTitle = document.getElementById("title");
    var envName = ""
    var urlEnvSeparator = ""
    var urlPath = location.pathname;
    var jtagBase1 = "kitchen.juicer.cc/?color=TkFSu5CF1WA=";
    switch (true) {
        case /develop3/.test(urlPath):
            envName = "develop3";
            urlEnvSeparator = "-"
            break;
        case /develop2/.test(urlPath):
            envName = "develop2";
            urlEnvSeparator = "-"
            break;
        case /develop/.test(urlPath):
            envName = "develop";
            urlEnvSeparator = "-"
            break;

        case /staging3/.test(urlPath):
            envName = "staging3";
            urlEnvSeparator = "-"
            break;
        case /staging2/.test(urlPath):
            envName = "staging2";
            urlEnvSeparator = "-"
            break;
        case /staging/.test(urlPath):
            envName = "staging";
            urlEnvSeparator = "-"
            break;

        default:
            break;
    }

    if (envName != "") {
        document.title = document.title + " (" + envName + ")";
        domTitle.innerHTML = domTitle.innerHTML + " (" + envName + ")";
    }
    insertScript("//" + envName + urlEnvSeparator + jtagBase1, true);


    function insertScript(scriptSrc, isAsync) {
        var s = document.getElementsByTagName('script')[0];
        var tag = document.createElement("script");
        tag.src = scriptSrc;
        tag.async = isAsync;
        s.parentNode.insertBefore(tag, s);
    };

});
