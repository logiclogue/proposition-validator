function expression(input) {
    var trimmedInput = input.trim();

    return variable(trimmedInput) ||
        not(trimmedInput) ||
        brackets(trimmedInput) ||
        binary(trimmedInput);
}

function variable(input) {
    var isP = input === 'p';
    var isQ = input === 'q';
    var isR = input === 'r';
    var isS = input === 's';

    return isP || isQ || isR || isS;
}

function not(input) {
    var notSymbol = "¬";
    var isNot = input.includes(notSymbol);
    var withoutNot = input.replace(notSymbol, "");

    return isNot && expression(withoutNot);
}

function brackets(input) {
    var firstChar = input[0] === '(';
    var lastChar = input.slice(-1) === ')';
    var withoutBrackets = input.substr(1).slice(0, -1);

    return firstChar && lastChar && expression(withoutBrackets);
}

function binary(input) {
    return and(input) || or(input) || xor(input) || ifExp(input) || iff(input);
}

function and(input) {
    var halves = input.split(/∧(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function or(input) {
    var halves = input.split(/∨(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function xor(input) {
    var halves = input.split(/⊕(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function ifExp(input) {
    var halves = input.split(/⇒(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function iff(input) {
    var halves = input.split(/⇔(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

module.exports = expression;
