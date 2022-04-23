import ColorUtil from './ColorUtil'

const originalLog = console.log.bind(console)

let fullLog = ''

/** INTERNAL **/
const logInternal = (caller: any, color = null, ...params) => {
    // params.forEach(p => {
    //   if (p) {
    //     fullLog += p.toString() + '\n\n';
    //   }
    // });

    let callerString = ''
    let bodyString = ''

    if (color) {
        callerString += 'background: ' + color + ';'
        callerString += 'color: ' + ColorUtil.getColorByBgColor(color)
        bodyString += 'color: ' + color
    }

    if (typeof params[0] === 'string') {
        originalLog(
            '%c ' + caller + ' %c ' + params[0],
            callerString,
            bodyString
        )
        params[1] ? log(params[1]) : originalLog('')
    } else {
        originalLog('%c' + caller + ' ', callerString)
        log(...params)
    }
}

/** EXTERNAL **/
const log = (...params) => {
    originalLog(...params)
    originalLog('')
}

const createLog = (caller: string, color: string) => {
    return (...params) => {
        logInternal(caller, color, ...params)
    }
}

const oldLog = () => {
    //console.error("DON'T USE oldLog!!! Use ConsoleUtil.log!!!")
}

const getFullLog = () => {
    return fullLog
}

/** CLASS EXPORT **/
const ConsoleUtil = {
    log,
    oldLog,
    createLog,
    getFullLog,
}

export default ConsoleUtil
