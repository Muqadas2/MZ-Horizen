// index page js
function showsidebar(){
         const sidebar=document.querySelector('.sidebar')
         sidebar.style.display = 'flex';
      }
function hideSidebar(){
         const sidebar=document.querySelector('.sidebar')
         sidebar.style.display = 'none';
      }
// about page js      
// GSAP timeline for sequential animation
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

// Target each .topic element and animate them
document.querySelectorAll('.topic').forEach((topic, index) => {
    tl.from(topic, { opacity: 0, y: -50, stagger: 0.5 }, index * 1); // Adjust stagger value for timing
});
