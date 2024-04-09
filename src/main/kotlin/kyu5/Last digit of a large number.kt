package org.example.kyu5

import java.math.BigInteger

fun lastDigit(base: BigInteger, exponent: BigInteger): Int {
    if(exponent == BigInteger("0")) return 1
    val baseLast = base.toString().takeLast(1)
    val expLast = (exponent.toString().takeLast(2).toInt() % 4).let {
        if(it == 0) 4
        else it
    }
    val theLast = BigInteger(baseLast).pow(expLast).toString().last()
    return theLast.toString().toInt()
}