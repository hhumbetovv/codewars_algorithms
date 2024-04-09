package org.example.kyu7

import kotlin.math.abs
import kotlin.math.max

fun mxdiflg(a1: Array<String>, a2: Array<String>): Int {
    if(a1.isEmpty() || a2.isEmpty()) return -1
    val getPair: (Pair<Int, Int>, String) -> Pair<Int, Int> = { pair, el ->
        var min = pair.first; var max = pair.second
        if(min > el.length) min = el.length
        if(max < el.length) max = el.length
        Pair(min, max)
    }
    val pair1 = a1.fold(Pair(a1[0].length, a1[0].length), getPair)
    val pair2 = a2.fold(Pair(a2[0].length, a2[0].length), getPair)
    return max(
        abs(pair1.second - pair2.first),
        abs(pair2.second - pair1.first)
    )
}