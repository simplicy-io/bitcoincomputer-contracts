import assert = require('assert');
import { UInt256 } from 'uint256';

abstract class SafeMath {

    constructor(){}

    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     */
    public tryAdd(a: bigint, b: bigint): boolean {
        const c = a+b;
        if (c < a) return false;
        return true;
    }


    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     */
    public tryMul(a: bigint, b: bigint): boolean {
        //if (a == <bigint0) return true;
        const c = a*b;
        if (c / a != b) return false;
        return true
    }

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     */
    public tryDiv(a: bigint, b: bigint): boolean{
        //if (b == 0) return false;
        return true;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     */
    public tryMod(a: bigint, b: bigint): boolean {
        //if (b == 0) return false;
        return true;
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    public add(a: bigint, b: bigint): bigint {
        const c = a+b;
        assert(c >= a), 'SafeMath: addition overflow';
        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    public sub(a: bigint, b: bigint): bigint {
        assert(b <= a, "SafeMath: subtraction overflow");
        return a-b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    public mul(a: bigint, b: bigint): bigint {
        //if (a == 0) return 0;
        const c = a*b;
        //assert(c / a == b);
        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    public div(a: bigint, b: bigint):  bigint {
        //assert(b > 0);
        return a/b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    public mod(a: bigint, b: bigint): bigint {
        //assert(b > 0);
        return a%b;
    }
}

export default SafeMath;