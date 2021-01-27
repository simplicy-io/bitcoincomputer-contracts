export interface IERC20 {
    totalSupply(): number;
    balanceOf(account: string): number;
    transfer(recipient: string, amount: number): boolean;
    allowance(owner: string, spender: string): number;
    approve(spender: string, amount: number): boolean;
    transferFrom(sender: string, recipient: string, amount: number): boolean;
}