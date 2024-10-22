document.getElementById('switchButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const outputH1 = document.getElementById('outputH1');
    const outputH2 = document.getElementById('outputH2');

    // Get the input value
    const newText = textInput.value.trim();

    // Check if input is empty
    if (newText === '') {
        alert('Please enter some text.');
        return;
    }

    // Update h2 with the current h1 content
    outputH2.innerText = outputH1.innerText;

    // Update h1 with the new input value
    outputH1.innerText = newText;

    // Clear the input field
    textInput.value = '';
});

