const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__form", {
    ...scrollRevealOptions,
    delay: 500,
});

//trending container

ScrollReveal().reveal(".trending__card", {
    ...scrollRevealOptions,
    delay: 500,
});

//destination container

ScrollReveal().reveal(".destination__card", {
    duration: 1000,
    interval: 500,
});

//seller container
 ScrollReveal().reveal(".seller__card", {
    ...scrollRevealOptions,
    delay: 500,
 });

// guide container
ScrollReveal().reveal(".guide__card", {
    ...scrollRevealOptions,
    interval: 500,
 });
  
//  client container
ScrollReveal().reveal(".client__card", {
    ...scrollRevealOptions,
    interval: 500,
 });
  