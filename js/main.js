// main.js

window.onload = () => {
	const fFirstname = document.querySelector("#name");
	const fSurname = document.querySelector("#surname");
	const fEmail = document.querySelector("#email");

    const validator = new JustValidate('#subscribeSubmitForm');

	validator
		.addField(fFirstname, [
			{
				rule: "required",
			},
			{
				rule: "minLength",
				value: 1,
			}
		])
        .addField(fSurname, [
			{
				rule: "required",
			},
			{
				rule: "minLength",
				value: 1,
			}
		])
		.addField(fEmail, [
			{
				rule: "required",
			},
			{
				rule: "email",
			},
		])
        .onSuccess(evt => {
            
            console.log("Looks like the form contains valid values. Here's the result", {
                firstname: fFirstname.value,
                surname: fSurname.value,
                email: fEmail.value,
            })
        })

        document.addEventListener('scroll', function() {
            const scrolledClass = "main-app-menu__scrolled";
            var myElement = document.querySelector('.main-app-menu');
            if (window.scrollY > 30) {
              myElement.classList.add(scrolledClass);
            } else {
              myElement.classList.remove(scrolledClass);
            }
          });
};
