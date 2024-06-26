// Approach 1: Iterative approach
var sum_to_n_a = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
};

// Approach 2: Recursive approach
var sum_to_n_b = function (n) {
    if (n === 1) return 1;
    return n + sum_to_n_b(n - 1);
};

// Approach 3: Mathematical approach
var sum_to_n_c = function (n) {
    return n * (n + 1) / 2;
};