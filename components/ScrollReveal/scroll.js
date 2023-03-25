 const scrollConfig = () => {
  //bottom animation
  ScrollReveal().reveal(".animacion", {
    delay: 200,
    duration: 800,
    distance: "50px",
    origin: "bottom",
  });
  //left animation
  ScrollReveal().reveal(".animacion-left", {
    delay: 300,
    duration: 1000,
    distance: "50px",
    origin: "left",
  });
  //right animation
  ScrollReveal().reveal(".animacion-right", {
    delay: 300,
    duration: 900,
    distance: "50px",
    origin: "right",
  });
};
export { scrollConfig };
