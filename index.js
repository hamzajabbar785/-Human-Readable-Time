// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a 
// human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

const humanReadable = (secs) => {
    hours = Math.floor(secs/3600)
    secs -= hours*3600
    mints = Math.floor(secs/60)
    secs -= mints*60
    return `${hours.toString().length < 2 ? `0${hours}` : hours}:${mints.toString().length < 2 ? `0${mints}` : mints}:${secs.toString().length < 2 ? `0${secs}` : secs}`
}

humanReadable(45296)

//Solution 2

const humanReadable = (secs) => {
    hours = Math.floor(secs/3600)
    mints = Math.floor(secs/60) % 60
    secs = Math.floor(secs % 60)
    return `${hours.toString().length < 2 ? `0${hours}` : hours}:${mints.toString().length < 2 ? `0${mints}` : mints}:${secs.toString().length < 2 ? `0${secs}` : secs}`
}

humanReadable(45296)