import { UInt256 } from 'uint256';
import assert = require('assert');

export class SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     */
    tryAdd(a: number, b: number): boolean {
        const c = a + b;
        if (c < a) return false;
        return true;
    }


    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     */
    tryMul(a: number, b: number): boolean {
        if (a == 0) return true;
        const c = a * b;
        if (c / a != b) return false;
        return true
    }

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     */
    tryDiv(a: number, b: number): boolean{
        if (b == 0) return false;
        return true;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     */
    tryMod(a: number, b: number): boolean {
        if (b == 0) return false;
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
    add(a: number, b: number): number {
        const c = a + b;
        assert(c >= a);
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
    sub(a: number, b: number): number {
        assert(b <= a);
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    mul(a: number, b: number): number {
        if (a == 0) return 0;
        const c = a * b;
        assert(c / a == b);
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
    div(a: number, b: number):  number {
        assert(b > 0);
        return a / b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    public mod(a: number, b: number): number {
        assert(b > 0);
        return a % b;
    }
}