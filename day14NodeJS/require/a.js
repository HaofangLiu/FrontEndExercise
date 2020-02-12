console.log("a.js");
// define({
//     name :function(){
//         return 'Lucas';
//     }
// });

define(["b"], function(res) {
  console.log(res);
  return {
    name: "lucasB",
    age: 29
  };
});
