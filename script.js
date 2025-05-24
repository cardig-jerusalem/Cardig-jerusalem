// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    // Close menu on mobile after clicking
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  document.getElementById('dark-mode-toggle').textContent = isDarkMode ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  document.getElementById('dark-mode-toggle').textContent = '☀️ Toggle Light Mode';
}

// GitHub API Integration (Replace with your GitHub repo details)
const githubRepo = 'CARDIG-Jerusalem/repo-name'; // Replace with your repo, e.g., 'username/repo'
fetch(`https://api.github.com/repos/${githubRepo}/events`)
  .then(response => response.json())
  .then(data => {
    const activityList = document.getElementById('github-activity');
    if (data.length === 0) {
      activityList.innerHTML = '<li>No recent activity found.</li>';
      return;
    }
    data.slice(0, 5).forEach(event => {
      const li = document.createElement('li');
      if (event.type === 'PushEvent') {
        li.textContent = `Pushed ${event.payload.commits.length} commit(s) to ${event.repo.name} on ${new Date(event.created_at).toLocaleDateString()}`;
      } else if (event.type === 'IssuesEvent') {
        li.textContent = `${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} issue #${event.payload.issue.number} in ${event.repo.name} on ${new Date(event.created_at).toLocaleDateString()}`;
      }
      activityList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching GitHub activity:', error);
    document.getElementById('github-activity').innerHTML = '<li>Unable to load GitHub activity.</li>';
  });
