document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.2046;
});


document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmOutput").innerHTML = feet * 30.48;
});

document.getElementById("cmInput").addEventListener("input", e => {
    let cm = e.target.value;
    document.getElementById("mmOutput").innerHTML = cm *10;
});


document.getElementById("mmInput").addEventListener("input", e => {
    let mm = e.target.value;
    document.getElementById("cmoutput").innerHTML = mm / 10;
});

document.getElementById("celInput").addEventListener("input", e => {
    let cel = e.target.value;
    document.getElementById("faoutput").innerHTML = cel * 1.8 + 32;
});