import { Computer } from 'bitcoin-computer';
import { UInt256 } from 'uint256';
import { uint8 } from 'uint8';
import { IERC20 } from 'IERC20';

class ERC20 implements IERC20 {
    
    private _totalSupply: UInt256;

    private _name: string;
    private _symbol: string;
    private _decimals: uint8;

    constructor(name_: string, symbol_: string) {
        this._name = name_;
        this._symbol = symbol_;
        this._decimals = 18;
    }

    public name(): string  {
        return this._name;
    }

    public symbol(): string {
        return this._symbol;
    }

    public decimals(): uint8 {
        return this._decimals;
    }

    public totalSupply(): UInt256 {
        return this._totalSupply;
    }

    public transfer(recipient: string, amount: UInt256) : boolean {
        this._transfer(recipient, amount);
        return true;
    }

    private _transfer(recipient: string, amount: UInt256): boolean{
        if(this._empty(recipient)) {
            return false;
        }
        
    
    }

    private _empty(e) {
        switch (e) {
          case "":
          case 0:
          case "0":
          case null:
          case false:
          case typeof(e) == "undefined":
            return true;
          default:
            return false;
        }
      }
}