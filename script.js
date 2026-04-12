// gsap -> scroll suave, animacoes etc

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
	smooth: 1.5,
	effects: true
});


function animarPagina(){
	gsap.from(".hero", {
	opacity: 0,
	duration: 1,
	
})


gsap.from("picture:nth-child(2)", {
	y: 200,
	duration: 1,
})

gsap.from("picture:nth-child(1)", {
	y: -60,
	duration: 1,
})

// animacao cards

gsap.from(".card", {
 	opacity: 0,
	
	stagger: .4,
	y: 30,
	filter : "blur(10px)",
	scrollTrigger: {
		trigger: ".card",
		start: "0% 80%",
		scrub: true,
		end: "100% 70%",
	}
})


gsap.from(".secaoObrigado ul li", {
	opacity: 0,
	stagger: .2,
	x: 20,
	filter : "blur(10px)",
	scrollTrigger: {
		trigger: ".secaoObrigado ul",
		start: "0% 80%",
		scrub: 2,
		end: "100% 45%",
	
		
	}
}
)

// animacoes footer



gsap.from("footer", {
	y: "-30%",
	immediateRender: false,
	scrollTrigger:{
	trigger: "footer",
	scrub: true,
	invalidateOnRefresh: true,
	end: "100% 100%",
	}
	
	})




// letras surgindo

const grupoTextoSplit = document.querySelectorAll(".textoSplit")

grupoTextoSplit.forEach(textoUnicoSplit => {
const split = SplitText.create(textoUnicoSplit, {
	type: "lines, words, chars",
	mask: "lines",

})


gsap.from(split.chars, {
	y: 40,
	opacity: 0,
	duration: .3,
	stagger: .03,
	scrollTrigger: {
	trigger: textoUnicoSplit,
	
	}
	
})
})
}




// preloader -> cria timeline

const tl = gsap.timeline({

	onComplete(){
		animarPagina();

		gsap.to("#preloader", {
			opacity: 0,
			onComplete(){
				gsap.to("#preloader", {
					display: "none"
				})
			}
		})
	} 
});

tl.to("#preloader path", {
	duration: 1.3,
	strokeDashoffset: 0,
	

})

tl.to("#preloader path", {
	fill: "rgb(168, 19, 19)",
	duration: .5,
	strokeDashoffset: 0,
	

})