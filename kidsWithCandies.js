function kidsWithCandies(candies, extraCandies) {
    var ableToHaveGreatest = [];
    var greatestAmount = 0;
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] > greatestAmount) {
            greatestAmount = candies[i];
        }
    }
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatestAmount) {
            ableToHaveGreatest.push(true);
        }
        else {
            ableToHaveGreatest.push(false);
        }
    }
    return ableToHaveGreatest;
}
;
