// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if (node === null) {
        return true;
    }

    // Check if the current node's value is within the valid range
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
        return false; 
    }

    // Recursively validate the left and right subtrees
    return (
        validate(node.left, min, node.data) && 
        validate(node.right, node.data, max) 
    );
}

module.exports = validate;