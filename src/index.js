module.exports = function reverse (n) {
    let j = String(n);
    let f = [...j].reverse().join("");
	if (f.includes("-") == true){
		return f.slice(0, -1); 
	} else {
		return f;
	}
}
