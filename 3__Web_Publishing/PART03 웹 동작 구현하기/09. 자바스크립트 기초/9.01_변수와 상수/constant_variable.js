const num = 10;
// num = 30;   TypeError: Assignment to constant variable.
console.log(num);

/* 재할당 (X)
   var, let은 선언 후 나중에 할당 가능
   const는 선언과 동시에 할당해야
 */
const PI = 3.141592;
radius = 10;
circle_area = PI * radius * radius
console.log("circle_area = ", circle_area);