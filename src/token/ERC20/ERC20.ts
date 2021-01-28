const assert = require('assert');
import { IERC20 } from './IERC20';
//import Context from '../../utils/Context';
//import { UInt256 } from 'uint256';
//import SafeMath from '../../math/SafeMath';

interface IBalance {
    [key: string]: bigint;
}

class ERC20 implements IERC20 {
    private _balances: IBalance;
    //private _balances[address: string]: bigint;
    
    //private _allowances: [][]
    
    private _totalSupply: bigint;

    private _owner: string;

    private _name: string;
    private _symbol: string;
    private _decimals: number;


    /**
     * @dev Sets the values for {name} and {symbol}, initializes {decimals} with
     * a default value of 18.
     *
     * To select a different value for {decimals}, use {_setupDecimals}.
     *
     * All three of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(name_: string, symbol_: string, initialAccount: string, initialBalance: bigint) {
        //super();
        this._name = name_;
        this._symbol = symbol_;
        this._decimals = 18;
        this._owner = initialAccount;
        this._mint(initialAccount, initialBalance);
    }

    /**
     * @dev Returns the name of the token.
     */
    public name(): string  {
        return this._name;
    }

     /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    public symbol(): string {
        return this._symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5,05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is
     * called.
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    public decimals(): number {
        return this._decimals;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    public totalSupply(): bigint {
        return this._totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    public balanceOf(account: string): bigint {
        return this._balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `recipient` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    public transfer(recipient: string, amount: bigint, msgSender?: string) : boolean {
        this._transfer(msgSender, recipient, amount);
        return true;
    }

     /**
     * @dev See {IERC20-allowance}.
     */
    public allowance(owner: string, spender: string): bigint {
        //return this._allowances[owner][spender];
        return;
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    public approve(spender: string, amount: bigint, msgSender?: string): boolean {
        this._approve(msgSender, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * Requirements:
     *
     * - `sender` and `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `amount`.
     * - the caller must have allowance for ``sender``'s tokens of at least
     * `amount`.
     */
    public transferFrom(sender: string, recipient: string, amount: bigint, msgSender?: string): boolean {
        this._transfer(sender, recipient, amount);
        //this._approve(sender, msgSender , this._allowances[sender][msgSender] +amount);
        return true;
    }
    
     /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    public increaseAllowance(spender: string, addedValue: bigint, msgSender?: string): boolean {
        //this._approve(msgSender, spender,  this._allowances[msgSender][spender]+addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    public decreaseAllowance(spender: string, subtractedValue: bigint, msgSender?: string): boolean {
        //this._approve(msgSender, spender, this._allowances[msgSender][spender]+ subtractedValue);
        return true;
    }

    /**
     * @dev Moves tokens `amount` from `sender` to `recipient`.
     *
     * This is internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `sender` cannot be the zero address.
     * - `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `amount`.
     */
    private _transfer(sender: string, recipient: string, amount: bigint): boolean|any {
        //assert(!this._isEmpty(sender), "ERC20: transfer from the zero address");
        //assert(!this._isEmpty(recipient), "ERC20: transfer to the zero address");

        this._balances[sender] -= amount;
        this._balances[recipient] += amount;
        //emit Transfer(sender, recipient, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     */
    private _mint(account: string, amount: bigint){
        //assert(!this._isEmpty(account), "ERC20: mint to the zero address");
        this._totalSupply = this._totalSupply + amount;
        //this._balances[account] = this._balances[account] + amount;
        //mit Transfer(address(0), account, amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    private _approve(owner: string, spender: string, amount: bigint) {
        //assert(!this._isEmpty(owner), 'ERC20: approve from the zero address');
        //assert(!this._isEmpty(spender), 'ERC20: approve to the zero address');
        
        //this._allowances[owner][spender] = amount;
        //emit Approval(owner, spender, amount);
    }

    /**
     * @dev Sets {decimals} to a value other than the default one of 18.
     *
     * WARNING: This function should only be called from the constructor. Most
     * applications that interact with token contracts will not expect
     * {decimals} to ever change, and may work incorrectly if it does.
     */
    private _setupDecimals(decimals_: number) {
        this._decimals = decimals_;
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
