function tri(numbers, order) {
    const copy = [...numbers];

    if (order === "asc") {
        return copy.sort((a, b) => a - b);
    } 
    else if (order === "desc") {
        return copy.sort((a, b) => b - a);
    } 
    else {
        return "Paramètre order invalide";
    }
}

console.log("Tri asc :", tri([5, 2, 9, 1], "asc"));
console.log("Tri desc :", tri([5, 2, 9, 1], "desc"));