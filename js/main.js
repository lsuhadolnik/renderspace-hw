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
};
