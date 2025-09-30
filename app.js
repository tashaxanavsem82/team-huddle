document.getElementById('create-room').addEventListener('click', function() {
    console.log('Room Created!');
    if (confirm('Success! Your room has been created. Proceed to main?')) {
        window.location.href = '/main';
    }
});