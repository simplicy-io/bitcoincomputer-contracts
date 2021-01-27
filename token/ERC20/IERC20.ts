import { Computer } from 'bitcoin-computer';
import { UInt256 } from 'uint256';

export interface IERC20 {
    totalSupply(): UInt256;
    balanceOf(account: string): UInt256;
    transfer(recipient: string, amount: UInt256): boolean;
    allowance(owner: string, spender: string): UInt256;
    approve(spender: string, amount: UInt256): boolean;
    transferFrom(sender: string, recipient: string, amount: UInt256): boolean;
}