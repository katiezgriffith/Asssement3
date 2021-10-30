console.log("hello world");




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Successful!");
}


let form = document.querySelector('form#contact');
form.addEventListener("click", handleSubmit)


const image = document.querySelector('#image')
image.addEventListener('mouseover', () => {
	alert("Give User compliment");
})
