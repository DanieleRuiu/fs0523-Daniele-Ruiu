const nameInput = document.getElementById('name');
        const saveButton = document.getElementById('saveButton');
        const clearButton = document.getElementById('clearButton');
        const savedValue = document.getElementById('savedValue');

        saveButton.addEventListener('click', () => {
            const name = nameInput.value;
            localStorage.setItem('userName', name);
            savedValue.textContent = `Nome salvato: ${name}`;
        });

        clearButton.addEventListener('click', () => {
            localStorage.removeItem('userName');
            savedValue.textContent = 'Nome cancellato';
        });

        const storedName = localStorage.getItem('userName');
        if (storedName) {
            savedValue.textContent = `Nome salvato: ${storedName}`;
        }

       
        const timeCounter = document.getElementById('timeCounter');
        let seconds = sessionStorage.getItem('timeCounter') || 0;

        const updateCounter = () => {
            seconds++;
            sessionStorage.setItem('timeCounter', seconds);
            timeCounter.textContent = seconds;
        };

        updateCounter(); 
        setInterval(updateCounter, 1000); 