document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('Password');
    const progressBar = document.querySelector('.bar');

    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);
        updateProgressBar(strength);
    });

    function checkPasswordStrength(password) {
        let strength = 0;

        // Check for uppercase letters
        if (password.match(/(?=.*[A-Z])/)) strength++;

        // Check for lowercase letters
        if (password.match(/(?=.*[a-z])/)) strength++;

        // Check for at least one digit
        if (password.match(/(?=.*[0-9])/)) strength++;

        // Check for special characters
        if (password.match(/(?=.*[!@#$%^&*])/)) strength++;

        // Check for minimum length of 8 characters
        if (password.length >= 8) strength++;

        return strength;
    }

    function updateProgressBar(strength) {
        const progressBarWidth = (strength / 5) * 100;
        progressBar.style.width = progressBarWidth + '%';

        // Customize the colors based on the strength level
        if (strength === 0) {
            progressBar.style.backgroundColor = 'transparent';
        } else if (strength === 1) {
            progressBar.style.backgroundColor = 'red';
        } else if (strength === 2) {
            progressBar.style.backgroundColor = 'orangered';
        } else if (strength === 3) {
            progressBar.style.backgroundColor = 'gold';
        } else if (strength === 4) {
            progressBar.style.backgroundColor = 'deepskyblue';
        } else {
            progressBar.style.backgroundColor = 'lime';
        }
    }
});
