function variable(input) {
    var trimmedInput = input.trim();

    var isP = trimmedInput === 'p';
    var isQ = trimmedInput === 'q';
    var isR = trimmedInput === 'r';
    var isS = trimmedInput === 's';

    return isP || isQ || isR || isS;
}

function expression(input) {
    return variable(input) || not(input) || brackets(input) || binary(input);
}

function not(input) {
    var notSymbol = "¬";
    var isNot = input.includes(notSymbol);
    var withoutNot = input.replace(notSymbol, "");

    return isNot && expression(withoutNot);
}

function brackets(input) {
    var trimmedInput = input.trim();

    var firstChar = trimmedInput[0] === '(';
    var lastChar = trimmedInput.slice(-1) === ')';
    var withoutBrackets = trimmedInput.substr(1).slice(0, -1);

    return firstChar && lastChar && expression(withoutBrackets);
}

function binary(input) {
    return and(input) || or(input) || xor(input) || ifExp(input);
}

function and(input) {
    var halves = input.trim().split(/∧(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function or(input) {
    var halves = input.trim().split(/∨(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function xor(input) {
    var halves = input.trim().split(/⊕(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

function ifExp(input) {
    var halves = input.trim().split(/⇒(.+)/);

    if (halves.length < 2) {
        return false;
    }

    return expression(halves[0]) && expression(halves[1]);
}

module.exports = expression;
