var x = 1;
function outer() {
  let x = 2;
  function inner() {
    console.log(y);
    let y;
  }
  inner();
}
outer();
