export function empty(data) {
    switch( typeof(data) ){
        case 'object': return (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]' || !data)
        case 'string': return !data.trim()
        case 'number': return Number.isNaN(data)
        case 'undefined': return true
        default: return false
    }
}

export function isset(data){ return !empty(data) }