module.exports = function pairs(xs) {
    result = []
    for (var i = 0; i < xs.length - 1; i++) {
	result.push([xs[i], xs[i+1]])
    }
    return result
}
