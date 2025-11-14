 const assignments = [
            { name: 'Data Structures - Project 1 (Java)', file: 'assignment4.html' },
            { name: 'LabWork #1 (Java)', file: 'assignment1.html' },
            { name: 'LabWork #5 (C)', file: 'assignment2.html' },
            { name: 'Project #1 (Java)', file: 'assignment3.html' }

        ];

        window.onload = function() {
            const buttonContainer = document.getElementById('assignment-buttons');
            
            if (assignments.length === 0) {
                buttonContainer.style.display = 'none';
            } else {
                assignments.forEach(assignment => {
                    const button = document.createElement('button');
                    button.textContent = `Go to ${assignment.name}`; 
                    button.classList.add('assignment-btn');
                    button.onclick = () => window.location.href = assignment.file;
                    buttonContainer.appendChild(button);
                });
            }
        };