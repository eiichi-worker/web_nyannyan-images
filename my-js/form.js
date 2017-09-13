/**
 * フロントエンドのみでの擬似的なフォームのための関数
 * Warning::簡易用、実験用のため重要な箇所では使わないこと
 */
var myFormFunctions = {
    params: {},
    tokenKey: "myFormToken",
    getParams: function () {
        // var arg = new Object;
        var pair = location.search.substring(1).split('&');
        for (var i = 0; pair[i]; i++) {
            var kv = pair[i].split('=');
            this.params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
        }
        console.log(this.params);

        return this;
    },
    removeUrlParams: function () {
        // アドレスバーからパラメータ削除
        if (window.history.replaceState) {
            window.history.replaceState(null, null, location.pathname)
        } else {
            console.log("window.history.repalceStateがありません");
        }

        return this;
    },
    /**
     * params.tokenとセッションストレージのトークンを比べる
     */
    checkRequest: function (redirectUrl) {
        redirectUrl = redirectUrl || "./";
        // console.log(this.params[this.tokenKey]);
        // console.log(this.getSessionStorage(this.tokenKey));
        if (this.params[this.tokenKey] != this.getSessionStorage(this.tokenKey)) {
            location.href = redirectUrl;
        }

        return this;
    },
    generateToken: function (length) {
        var s = "";
        length = length || 32;
        for (i = 0; i < length; i++) {
            random = Math.random() * 16 | 0;
            s += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }

        return s;
    },
    setSessionStorage: function (key, val) {
        if (('sessionStorage' in window) && (window.sessionStorage !== null)) {
            window.sessionStorage.setItem(key, val);
        } else {
            console.log("sessionStorageがありません");
        }
    },
    getSessionStorage: function (key) {
        if (('sessionStorage' in window) && (window.sessionStorage !== null)) {
            return window.sessionStorage.getItem(key);
        } else {
            console.log("sessionStorageがありません");
        }
    },
    setParamsToForm: function () {
        Object.keys(this.params).forEach(function (key) {
            console.log(key + ":" + this.params[key]);
            document.getElementById(key).value = this.params[key]
        }, this);

        return this;
    },
    embedtoToken: function (form) {
        var tokenVal = this.generateToken();

        // tokenを追加
        var ele = document.createElement('input');
        ele.setAttribute('type', 'hidden');
        ele.setAttribute('name', this.tokenKey);
        ele.setAttribute('value', tokenVal);
        form.appendChild(ele);

        // tokenをセッションストレージに書き込み
        this.setSessionStorage(this.tokenKey, tokenVal);

        return true;
    },
    submit: function (formId) {
        var forms = document.getElementById(formId);
        var tmpArray = [];
        var param = "";
        var tokenVal = this.generateToken();

        // 入力値の取得
        for (var i = 0; i < forms.length; i++) {
            var elem = forms.elements[i];
            tmpArray.push(elem.name + '=' + elem.value);
        }
        // tokenを追加
        tmpArray.push(this.tokenKey + '=' + tokenVal);

        // パラメータに結合
        param = tmpArray.join('&');

        // tokenをセッションストレージに書き込み
        this.setSessionStorage(this.tokenKey, tokenVal);
        return this;
    },
    submitFormrun: function (formId) {

    },
};