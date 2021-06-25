function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function english() {
  let element = document.body;
  element.classList.toggle("english");
}

// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.addEventListener.scroll > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// // * Easy on scroll event listener
// // */
// const onscroll = (el, listener) => {
//   el.addEventListener("scroll", listener);
// };

// // * Back to top button
// // */
// let backtotop = select(".back-to-top");
// if (backtotop) {
//   const toggleBacktotop = () => {
//     if (window.scrollY > 100) {
//       backtotop.classList.add("active");
//     } else {
//       backtotop.classList.remove("active");
//     }
//   };
//   window.addEventListener("load", toggleBacktotop);
//   onscroll(document, toggleBacktotop);
// }

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       $("#back-to-top").fadeIn();
//     } else {
//       $("#back-to-top").fadeOut();
//     }
//   });
//   // scroll body to 0px on click
//   $("#back-to-top").click(function () {
//     $("body,html").animate(
//       {
//         scrollTop: 0,
//       },
//       400
//     );
//     return false;
//   });
// });
