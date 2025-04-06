document.addEventListener('DOMContentLoaded', function() {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeDisplay = document.getElementById('jokeDisplay');
    const modeToggle = document.getElementById('modeToggle');
    const icon = modeToggle.querySelector('i');
    
    // Check for saved mode preference or use preferred color scheme
    const savedMode = localStorage.getItem('mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'dark' || (!savedMode && prefersDark)) {
        enableDarkMode();
    }
    
    // Mode toggle functionality
    modeToggle.addEventListener('click', function() {
        modeToggle.classList.add('active');
        setTimeout(() => modeToggle.classList.remove('active'), 600);
        
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('mode', 'dark');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('mode', 'light');
    }
    
    // Joke fetching functionality
    jokeBtn.addEventListener('click', fetchJoke);
    
    async function fetchJoke() {
        jokeDisplay.textContent = "Loading joke...";
        jokeDisplay.className = "joke-display loading";
        
        try {
            const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            jokeDisplay.textContent = data.joke;
            jokeDisplay.className = "joke-display";
        } catch (error) {
            jokeDisplay.textContent = "Failed to fetch joke. Please try again.";
            jokeDisplay.className = "joke-display error";
            console.error('Error fetching joke:', error);
        }
    }
});