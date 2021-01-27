import { Computer } from 'bitcoin-computer';
import { assert } from 'console';
import { IERC20 } from './IERC20';
import { SafeMath } from '../../math/SafeMath'

class ERC20 implements IERC20 {

    private _balances: (string|number)[];
    private _allowances: (string|number)[][];
    
    private _totalSupply: number;

    private _name: string;
    private _symbol: string;
    private _decimals: number;

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

    public decimals(): number {
        return this._decimals;
    }

    public totalSupply(): number {
        return this._totalSupply;
    }

    public balanceOf(account: string): number {
        return this._balances[account];
    }

    public transfer(recipient: string, amount: number) : boolean {
        this._transfer(recipient, amount);
        return true;
    }

    public allowance(owner: string, spender: string): number {
        return this._allowances[owner][spender];
    }

    public approve(spender: string, amount: number): boolean {
        //this._approve(_msgSender(), spender, amount);
        return true;
    }

    public transferFrom(sender: string, recipient: string, amount: number): boolean {
        this._transfer(recipient, amount);
        //this._approve(sender,  amount);
        return true;
    }

    private _transfer(recipient: string, amount: number): boolean{
        if(this._empty(recipient)) {
            return false;
        }
        //this._balances[sender] = this._balances[sender].sub(amount, "ERC20: transfer amount exceeds balance");
        this._balances[recipient] = this._balances[recipient].add(amount);
    }

    private _approve(owner: string, spender: string, amount: number) {
        assert(this._empty(owner));
        assert(this._empty(spender));

        this._allowances[owner][spender] = amount;
        //emit Approval(owner, spender, amount);
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