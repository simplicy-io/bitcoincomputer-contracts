"use strict";
exports.__esModule = true;
var ERC20 = /** @class */ (function () {
    function ERC20(name_, symbol_) {
        this._name = name_;
        this._symbol = symbol_;
        this._decimals = 18;
    }
    ERC20.prototype.name = function () {
        return this._name;
    };
    ERC20.prototype.symbol = function () {
        return this._symbol;
    };
    ERC20.prototype.decimals = function () {
        return this._decimals;
    };
    ERC20.prototype.totalSupply = function () {
        return this._totalSupply;
    };
    ERC20.prototype.transfer = function (recipient, amount) {
        this._transfer(recipient, amount);
        return true;
    };
    ERC20.prototype._transfer = function (recipient, amount) {
        if (this._empty(recipient)) {
            return false;
        }
    };
    ERC20.prototype._empty = function (e) {
        switch (e) {
            case "":
            case 0:
            case "0":
            case null:
            case false:
            case typeof (e) == "undefined":
                return true;
            default:
                return false;
        }
    };
    return ERC20;
}());
