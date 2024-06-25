"use strict";
// Tea 
// Add water
// After 3 second Add sugar 
// After 4 second Add Tea Leaves 
// After 5 second Add Milk 
// after 3 second Tea is Ready 
function makeTea(ingredients, delay, cb) {
    setTimeout(() => {
        console.log(ingredients);
        cb();
    }, delay);
}
// function call 
makeTea("Add Water...", 0, () => {
    makeTea("Add Sugar...", 3000, () => {
        makeTea("Add Tea Leaves...", 4000, () => {
            makeTea("Add Milk...", 5000, () => {
                makeTea("Tea is Ready...", 3000, () => { });
            });
        });
    });
}); // this is a callback hell
