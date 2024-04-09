package org.example.kyu6

fun multiplicationTable(size: Int): Array<IntArray> {
    val initialArray = (1..size).toList().toIntArray()
    return initialArray.map { num ->
        initialArray.map { subNum -> num * subNum }.toIntArray()
    }.toTypedArray()
}