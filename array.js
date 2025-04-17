// Learning basics to arrays in js


// ---------------- this is how to REVERSE an array --------------------- //
function reverseArray(arr){
    arr.reverse();
}

// manual way of reversing an array
function reverseArrayM(arr){
    let result = [];
    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    }
    return result
}
//// ------------------ end of reversing array -------------------- ////

// ----------------- how to remove DUPLICCATES ------------------ //
function removeDupes(arr){
    return [...new Set[arr]];
}

// manual way of removing dupes
function removeDupesM(arr){
    let seen = {};
    let result = [];

    for (let num of arr) {
        
        if (!seen[num]) {
            result.push(num);
            seen[num] = true;
        }
    }

    return result;
}

//// ---------------- end of removing duplicates ------------------- ////
