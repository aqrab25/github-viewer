async function fetchGitHubData() {
    const username = document.getElementById('username').value;
    const apiUrl = `https://api.github.com/users/${username}`;
    const profileInfo = document.getElementById('profile-info');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Show loading spinner
    loadingSpinner.style.display = 'block';
    profileInfo.innerHTML = ''; // Clear previous user information

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display user information
        displayUserInfo(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Display error message
        profileInfo.innerHTML = '<p>Error fetching data. Please try again.</p>';
    } finally {
        // Hide loading spinner
        loadingSpinner.style.display = 'none';
    }
}

function displayUserInfo(user) {
    const profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = `
        <h2>${user.name}</h2>
        <img src="${user.avatar_url}" alt="Avatar" />
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repositories: ${user.public_repos}</p>
    `;
}
