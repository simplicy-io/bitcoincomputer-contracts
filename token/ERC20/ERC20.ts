import { Computer } from 'bitcoin-computer';
import { assert } from 'console';
import { IERC20 } from './IERC20';
import { SafeMath } from '../../math/SafeMath'

class ERC20 implements IERC20 {

    safeMatch = new SafeMath();

    private _balances: (string|number)[];
    
    private _totalSupply: number;

    private _name: string;
    private _symbol: string;
    private _decimals: number;

    constructor(name_: string, symbol_: string, initialAccount: string, initialBalance: number) {
        this._name = name_;
        this._symbol = symbol_;
        this._decimals = 6;
        this._mint(initialAccount, initialBalance);
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
        this._transfer(this._owners, recipient, amount);
        return true;
    }


    private _transfer(sender: string, recipient: string, amount: number): boolean|any {
        assert(this._isEmpty(!sender), "ERC20: transfer from the zero address");
        assert(this._isEmpty(!recipient), "ERC20: transfer to the zero address");

        this._balances[sender] =  this.safeMatch.sub(this._balances[sender], amount,);
        this._balances[recipient] = this.safeMatch.add(this._balances[recipient],amount)ß;
        //emit Transfer(sender, recipient, amount);
    }

    private _mint(account: string, amount: number){
        assert(this._isEmpty(!account), "ERC20: mint to the zero address");
    
        this._totalSupply = this.safeMatch.add(this._totalSupply, amount);
        this._balances[account] = this._balances[account].add(amount);
        //mit Transfer(address(0), account, amount);
    }


    private _isEmpty(e) {
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

export default ERC20;
