package org.example.kyu6

fun duplicateCount(text: String): Int {
    var nonDuplicates = ""
    var duplicates = ""
    for(el in text.lowercase()) {
        if(nonDuplicates.contains(el)) {
            if(!duplicates.contains(el)) duplicates += el
        } else {
            nonDuplicates += el
        }
    }
    return duplicates.length
}