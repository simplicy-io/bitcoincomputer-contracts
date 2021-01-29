import { Computer } from 'bitcoin-computer'
import ERC20 from './token/ERC20/ERC20';

const { mnemonic } = require('../secrets.json');

const computer = new Computer({ seed: mnemonic, network: 'testnet' })

;(async () => {
    const publicKey = computer.db.wallet.getPublicKey().toString()
    const euro = await computer.new(ERC20, ['Euro stable coin', 'EURC', publicKey, 100000000])
    console.log(`  > Created ERC20 with value supply 100000000`)
    console.log('Name= ' +await euro.name())
    console.log('Symbol= ' +await euro.symbol())
    console.log('Decimal= ' +await euro.decimals())
    console.log('Total Supply= ' +await euro.totalSupply())
    console.log('Balanceof ' +publicKey +' = ' +await euro.balanceOf(publicKey))

})()
