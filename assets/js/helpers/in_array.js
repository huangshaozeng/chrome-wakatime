/**
 * Returns boolean if needle is found in haystack or not.
 *
 * @param needle
 * @param haystack
 * @returns {boolean}
 */
function in_array(needle, haystack) {
    for (var i = 0; i < haystack.length; i ++) {
        if (needle == haystack[i]) {
            return true;
            break;
        }
    }

    return false;
}

export default in_array;