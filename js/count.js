document.addEventListener('DOMContentLoaded', function() {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const number3 = document.getElementById('number3');
    let hasAnimated = false;

    const doubleStruckDigits = {
    '0': '𝟘',
    '1': '𝟙',
    '2': '𝟚',
    '3': '𝟛',
    '4': '𝟜',
    '5': '𝟝',
    '6': '𝟞',
    '7': '𝟟',
    '8': '𝟠',
    '9': '𝟡',
    'K': '𝕂' 
    };

    function toDoubleStruck(num) {
        return num.toString().split('').map(digit => doubleStruckDigits[digit] || digit).join('');
    }

    function animateNumbers() {
        if (!hasAnimated && window.scrollY + window.innerHeight >= number1.offsetTop) {
            hasAnimated = true;
            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let interval1 = setInterval(function() {
                if (count1 < 40000) {
                    count1 += 10; // Increase by 100 for faster animation
                    number1.innerText = toDoubleStruck(count1);
                } else {
                    number1.innerText = toDoubleStruck(40000); // Ensure it ends exactly at 40000
                    clearInterval(interval1);
                }
            }, 100); // Adjust the speed of the increment as needed
            let interval2 = setInterval(function() {
                if (count2 < 49000) {
                    count2 += 10; // Increase by 100 for faster animation
                    number2.innerText = toDoubleStruck(count2);
                } else {
                    number2.innerText = toDoubleStruck(49000); // Ensure it ends exactly at 49000
                    clearInterval(interval2);
                }
            }, 100); // Adjust the speed of the increment as needed
            let interval3 = setInterval(function() {
                if (count3 < 244000) {
                    count3 += 1000; // Increase by 1000 for faster animation
                    number3.innerText = toDoubleStruck(count3 / 1000) + 'K'; // Format with K
                } else {
                    number3.innerText = toDoubleStruck(244) + 'K'; // Ensure it ends exactly at 244000
                    clearInterval(interval3);
                }
            }, 100); // Adjust the speed of the increment as needed
        }
    }

    window.addEventListener('scroll', animateNumbers);
});