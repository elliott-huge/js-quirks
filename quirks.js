function forOfVsForIn() {
    let a = [5, 4, 3, 4, 5];
    for (const number in a){
        console.log(number);  // 0, 1, 2, 3, 4 (???)
    }

    for (const number of a){
        console.log(number);  // 5, 4, 3, 4, 5 (much better :))
    }
}
// forOfVsForIn();

function variableNotScopes() {
    let a = 0;  // 'block' scope
    const b = 1;  //  same as let, but immutable
    var c = 2;  //  function scope
    if (a) {
        let d = 3;
        const e = 4;
    }
    //console.log(d);  // throws an undefined error
    //e++;  // also throws an undefined error, and is a const so cant change
}
// variableNotScopes();

// by the way, ctrl+tab switches tabs in Chrome
// throw in shift to go the other way
// ...use right ctrl ;0


