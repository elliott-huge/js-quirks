function forOfVsForIn() {
    let a = [5, 4, 3, 4, 5];
    a.property = "funkytown";
    for (const number in a){
        console.log(number);  // 0, 1, 2, 3, 4, property (???)
    }

    for (const number of a){
        console.log(number);  // 5, 4, 3, 4, 5 (much better :))
    }
    // Basically, one gives iterates all of the object's properties
    // and the other gives you the value of the object's iterables

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

// by the way, 'ctrl+tab' switches tabs in Chrome
// throw in 'shift' to go the other way
// ...use 'right-ctrl', it's easier

function shortOperators() {
    let number = 1;
    let string = "I'm a string."
    let bug;

    console.log(number || string);  // >1
    console.log(number || bug);  // >1
    console.log(bug || number);  // >1
    console.log(number && string);  // >"I'm a string."
    console.log(number && bug);  // >undefined
    console.log(bug && number);  // >undefined

    // with OR (||), short-circuiting is possible
    // if the first value is not falsy, it will therefore be returned
    // regardless of the second value.

    // with AND (&&), it's a similar story
    // if the first value is falsy, the expression will return undefined regardless of the second
    // i.e. it short-circuits to a false
}
// shortOperators();

