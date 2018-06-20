function pipeline(target, funcArr) {
   return funcArr.reduce((prev, cur) => {
        return cur(prev);
    }, target);
}

function one(target) {
    return target + ' Stage one';
}

function two(target) {
    return target + ' Stage two';
}

function three(target) {
    return target + ' Stage three';
}


pipeline('//target string//', [
    one,
    two,
    three
])



