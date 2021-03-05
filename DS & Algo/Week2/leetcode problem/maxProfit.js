/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Number.MAX_VALUE;
        var max = 0;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < min)
                min = prices[i];
            else if (prices[i] - min > max)
                max = prices[i] - min;
        }
        return max;
};