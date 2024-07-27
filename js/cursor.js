let timer;

        document.addEventListener('mousemove', (event) => {
            const cursor = document.getElementById('cursor');
            cursor.style.left = `${event.pageX}px`;
            cursor.style.top = `${event.pageY}px`;

            cursor.classList.add('moving');

            clearTimeout(timer);
            timer = setTimeout(() => {
                cursor.classList.remove('moving');
            }, 150); // Adjust this value to control how long it takes to return to normal size
        });
