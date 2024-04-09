package org.example.kyu6

fun sumParts(ls: IntArray): IntArray {
    val result = mutableListOf<Int>()
    while(result.lastOrNull() != 0) {
        result.add(
            if(result.lastOrNull() == null) ls.sum()
            else result.last() - ls[result.lastIndex]
        )
    }
    return result.toIntArray()
}