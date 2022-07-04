function checkAnagrams(x, y) {
    x = [...x]
    y = [...y]
    const xItems = {}
    const yItems = {}
    if (x.length !== y.length) return false
    x.map(item => {
        if (xItems[item]===undefined) xItems[item] = 1
        else xItems[item]+=1
    })
    y.map(item => {
        if (yItems[item]===undefined) yItems[item] = 1
        else yItems[item]+=1
    })
    for (let i=0; i<Object.keys(xItems).length; i++){
        var item = Object.keys(xItems)[i]
        if (xItems[item] !== yItems[item]) return false
    }
    return true
}

console.log(checkAnagrams('abbbaa', 'bbaaab'))
