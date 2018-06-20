const someObj = {
    usefulMehod: () => console.log('usefulMehod'),
    doCount: () => console.log('one')
}

function proxyForDoCount(obj) {
    const doCount = obj.doCount;

    obj.doCount = function() {
        console.log('Here we go');
        doCount.apply(obj);
    }
}
