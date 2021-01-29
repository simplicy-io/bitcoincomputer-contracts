# bitcoincomputer-contracts
A library for secure smart contract development. Build on a solid foundation of community-vetted code.

Implementations of standards like ERC20 and ERC721.
Flexible role-based permissioning scheme.
Reusable smart contract using Typescript components to build custom contracts and complex decentralized systems.
See also https://docs.bitcoincomputer.io/

## Overview

### Installation

```console
$ npm install @simplicy/bitcoin-contracts
```
### Usage

Once installed, you can use the contracts in the library by importing them:

```typescript

import { ERC20 } from "@simplicy/bitcoin-contracts/token/ERC20/ERC20.sol";

class MyToken extends ERC20 {
    constructor() {
        super();
    }
}