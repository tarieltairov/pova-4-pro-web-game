export const randomGlass = () => {
  return Math.floor(Math.random() * (11 - 6) + 6);
};

// export const clickZone = (e, zone) => {
//   console.log(e);
//   let cl = 0;
//   let image = zone;
//   const clickX = e.clientX;
//   const clickY = e.clientY;
//   var dx = clickX - image.x,
//     dy = clickY - image.y,
//     dist = Math.abs(Math.sqrt(dx * dx + dy * dy));

//   if (dist <= image.radius) {
//     let num = image.radius - dist;
//     cl = num / 7.5 + "";
//   }

//   console.log(cl + " x = " + e.clientX + " y = " + e.clientY);
// };
