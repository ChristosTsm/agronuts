// GSAP Animations
var menuContainer = document.querySelector(".menu-overlay");
var openMenuBtn = document.querySelector(".icon-open-menu");
var closeMenuBtn = document.querySelector(".icon-close-menu");
var menuList = document.querySelector(".menu-list");

gsap.set(menuContainer, { x: 5000, display: "none" });
gsap.set(closeMenuBtn, { x: -100, opacity: 0, display: "none" });
gsap.set(".menu-list li", { y: 500, opacity: 0 });

let tl = gsap.timeline();

tl.to(menuContainer, {
	x: 0,
	display: "flex",
	height: "100%",
	ease: "Expo.inOut",
	duration: 1,
})
	.to(openMenuBtn, {
		y: -100,
		opacity: 0,
		duration: 0.9,
		display: "none",
		ease: "Expo.inOut",
	})
	.to(closeMenuBtn, {
		x: 0,
		display: "inline",
		opacity: 1,
		duration: 0.9,
		ease: "Expo.inOut",
	})
	.to(
		".menu-list li",
		{
			y: 0,
			opacity: 1,
			stagger: 0.1,
			duration: 0.8,
			ease: "Expo.inOut",
		},
		"-=1.5"
	);

tl.pause();

openMenuBtn.addEventListener("click", () => {
	tl.play();
});

closeMenuBtn.addEventListener("click", () => {
	if (tl.reverse()) {
		tl.reverse();
	} else {
		gsap.set(menuContainer, { display: "none" });
	}
});
