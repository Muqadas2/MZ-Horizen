// index page js
// THIS FUNCTION IS EXECUTED WHEN USER OPEN THE SIDE BAR 
function showsidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
// THIS FUNCTION IS EXECUTED WHEN USER CLOSES THE SIDE BAR       
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
//                              HOME PAGE
// Target the h1 element
const h1Element = document.querySelector('.content h1');
// Initial styles using JavaScript
h1Element.style.opacity = 0;
h1Element.style.transform = 'translateY(-20px)';
h1Element.style.color = "blue";

// Define the animation using GSAP
gsap.to(h1Element, {
    duration: 2,
    opacity: 1,
    y: 0,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1,
    color: "red",
    onStart: function () {
        h1Element.style.color = "blue";
    },
    onComplete: function () {
        h1Element.style.color = "black";
    }
});


// about page js   
function GotoHome() {
    window.location.href = "index.html";
}
// GSAP timeline for sequential animation
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

// Target each .topic element and animate them
document.querySelectorAll('.topic').forEach((topic, index) => {
    tl.from(topic, { opacity: 0, y: -50, stagger: 0.5 }, index * 1); // Adjust stagger value for timing
});
