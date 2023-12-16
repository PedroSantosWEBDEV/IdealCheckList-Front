export const toAbsoluteUrl = (pathname: string) => process.env.PUBLIC_URL + pathname

export const secondsToHours = (timeInSeconds: number) => {
    var timeFormated = '00:00:00'
    if(timeInSeconds !== undefined) {
        var h = `0${Math.floor(timeInSeconds / 3600)}`.slice(-2)
        var m = `0${Math.floor(timeInSeconds % 3600 / 60)}`.slice(-2)
        var s = `0${Math.floor(timeInSeconds % 3600 % 60)}`.slice(-2)
        timeFormated = h + ':' + m + ':' + s
    }
    return timeFormated
}

export const hoursToSeconds = (timeInHours: string) => {
    var hourSplit = timeInHours.split(':')
    if(hourSplit.length === 2) {
        var hourToSeconds = (+hourSplit[0]) * 60 * 60 + (+hourSplit[1]) * 60 + (+0)
    } else {
        var hourToSeconds = (+hourSplit[0]) * 60 * 60 + (+hourSplit[1]) * 60 + (+hourSplit[2])
    }

    return hourToSeconds
}

export const secondsToDays = (timeInSeconds: number) => {
    return Math.ceil(timeInSeconds / (1000 * 3600 * 24))
}