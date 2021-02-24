module.exports = function toReadable(number) {
    let str = "";
    let objNum1 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let objNum2 = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number >= 0 && number <= 19) {
        str = str + objNum1[number];
        return str;
    }

    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            str = str + objNum2[number];
            return str;
        }
        str =
            str + objNum2[number - (number % 10)] + " " + objNum1[number % 10];
        return str;
    }

    if (number >= 100 && number < 1000) {
        if (number % 100 == 0) {
            str = str + objNum1[number / 100] + " " + "hundred";
            return str;
        }
        if (number % 100 == 11 || number % 100 == 12) {
            str =
                str +
                objNum1[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                objNum1[number % 100];
            return str;
        }
        let num = number % 100;
        if (num % 10 == 0 && num != 10) {
            str =
                str +
                objNum1[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                objNum2[num];
            return str;
        }
        if (num > 12 && num < 20) {
            str =
                str +
                objNum1[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                objNum1[num];
            return str;
        }
		if (num > 0 && num < 11) {
            str =
                str +
                objNum1[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                objNum1[num];
            return str;
        }
        str =
            str +
            objNum1[Math.floor(number / 100)] +
            " " +
            "hundred" +
            " " +
            objNum2[num - (num % 10)] +
            " " +
            objNum1[num % 10];
        return str;
    }
};
