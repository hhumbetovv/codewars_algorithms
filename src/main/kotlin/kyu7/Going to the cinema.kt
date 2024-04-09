package org.example.kyu7

import kotlin.math.ceil

fun movie(card: Int, ticket: Int, perc: Double): Int {
    var a = 0
    var b: Double = card.toDouble()
    var curr: Double = ticket.toDouble()
    var times = 0
    while(true) {
        times++
        a += ticket; curr *= perc; b += curr
        if(ceil(b) < a) return times
    }
}