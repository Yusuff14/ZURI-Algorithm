
const getString = function(inp) {
    let replacement = [];
    if (inp % 2 === 0) {
        replacement.push("yu")
    }
    if (inp % 3 === 0) {
        replacement.push("gi")
    }
    if (inp % 5 === 0) {
        replacement.push("oh")
    }

    return replacement.length > 0 ? replacement.join("-"): inp
}

const checkYuGiOh = n => {
    const ans = Array(n).fill().map((_, index) => getString(index+1))
    console.log(ans)
    return ans
}

checkYuGiOh(7)