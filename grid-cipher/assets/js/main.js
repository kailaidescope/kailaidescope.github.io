window.addEventListener('load', () => {
	const encryptionForm = document.querySelector("#encryption-input-form");
	const encryptionInputField = document.querySelector("#new-encryption-input");
	const encryptionKeyField = document.querySelector("#new-encryption-key");
	const encryptionOutputField = document.querySelector("#new-encryption-output");

	encryptionForm.addEventListener('submit', (e) =>{
		e.preventDefault();
		
		const encryptionValue = encryptionInputField.value;
		const encryptionKey = encryptionKeyField.value;

		if(!encryptionValue || !encryptionKey){
			alert("Please input encryption value and key to encrypt");
		}
		else{
			encryptionOutputField.value = encrypt(encryptionValue,encryptionKey);
		}
	})

	const decryptionForm = document.querySelector("#decryption-input-form");
	const decryptionInputField = document.querySelector("#new-decryption-input");
	const decryptionKeyField = document.querySelector("#new-decryption-key");
	const decryptionOutputField = document.querySelector("#new-decryption-output");

	decryptionForm.addEventListener('submit', (e) => {
		e.preventDefault();

		const decryptionValue = decryptionInputField.value;
		const decryptionKey = decryptionKeyField.value;

		if(!decryptionValue || !decryptionKey){
			alert("Please input decryption value and key to decrypt");
		}
		else{
			decryptionOutputField.value = decrypt(decryptionValue,decryptionKey);
		}
	})
})

function encrypt(input,key){
	// Get number of rows needed for encryption
	let arrDepth = Math.ceil(input.length/key);
	let encryptionArray = [];

	// Counter which keeps track of how much of the input has been
	// inserted into the array
	let k = 0;

	// Insert input into array (horizontally)  
	// where key/arrDepth = width/height
	for(let i = 0; i < arrDepth; i++){
		encryptionArray[i] = [];

		for(let j = 0; j < key; j++){
			// If input not fully read, insert input
			if(k < input.length){
				encryptionArray[i][j] = input[k];
				k++;
			}
			else{ // Otherwise, insert a space as a placeholder
				encryptionArray[i][j] = ' ';
			}
		}
	}

	// Encrypted string to be returned
	let output = "";

	// Read array (vertically) into encrypted string
	for(let j = 0; j < key; j++){
		for(let i = 0; i < arrDepth; i++){
			// Append the current array value into the output string
			output = output + encryptionArray[i][j];
		}
	}

	return output;
}

function decrypt(input,key){
	// Get number of rows needed for decryption
	let arrDepth = Math.ceil(input.length/key);
	let decryptionArray = [];

	// Counter which keeps track of how much of the input has been
	// inserted into the array
	let k = 0;

	// Insert input into array (horizontally)  
	// where key/arrDepth = width/height
	for(let i = 0; i < key; i++){
		decryptionArray[i] = [];

		for(let j = 0; j < arrDepth; j++){
			// If input not fully read, insert input
			if(k < input.length){
				decryptionArray[i][j] = input[k];
				k++;
			}
			else{ // Otherwise, insert a space as a placeholder
				decryptionArray[i][j] = ' ';
			}
		}
	}

	// Decrypted string to be returned
	let output = "";

	// Read array (vertically) into decrypted string
	for(let j = 0; j < arrDepth; j++){
		for(let i = 0; i < key; i++){
			// Append the current array value into the output string
			output = output + decryptionArray[i][j];
		}
	}

	return output;
}





