var radius = 5.2;
var theArea = calculateArea(radius);

function calculateArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI *r *r;
        return area;
    }
}       
console.log("The Area is: " + theArea);