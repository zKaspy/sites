let status = true;

function hidePassword() {
	if (status == true) {
		console.log(1);
		document.getElementsByClassName('form__reg-input-password')[0].type = 'text';
		document.getElementsByClassName('eye_toggle-off')[0].style.display = 'none';
		document.getElementsByClassName('eye_toggle')[0].style.display = 'block';
		status = false;
	} else if (status == false) {
		document.getElementsByClassName('form__reg-input-password')[0].type = 'password';
		document.getElementsByClassName('eye_toggle-off')[0].style.display = 'block';
		document.getElementsByClassName('eye_toggle')[0].style.display = 'none';
		status = true;
	}
}