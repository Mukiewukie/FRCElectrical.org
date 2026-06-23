document.addEventListener('DOMContentLoaded', function () {
  // find a header container used by the theme
  const header = document.querySelector('.md-header') || document.querySelector('.site-header') || document.querySelector('.header');
  if (!header) return;

  // ensure we don't add duplicates
  if (document.querySelector('.header-ctas')) return;

  const container = document.createElement('div');
  container.className = 'header-ctas';

  // GitHub CTA
  const github = document.createElement('a');
  github.className = 'md-button github-cta';
  github.href = 'https://github.com/FRCElectrical/FRCElectrical.org';
  github.target = '_blank';
  github.rel = 'noopener noreferrer';
  github.setAttribute('aria-label', 'View on GitHub');
  github.textContent = 'GitHub';

  // Discord CTA (icon-only)
  const discord = document.createElement('a');
  discord.className = 'md-button discord-cta';
  discord.href = 'https://discord.gg/N6GmHcD8a';
  discord.target = '_blank';
  discord.rel = 'noopener noreferrer';
  discord.setAttribute('aria-label', 'Join our Discord');
  const img = document.createElement('img');
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo_2021.svg';
  img.alt = 'Discord';
  img.style.height = '20px';
  img.style.width = 'auto';
  img.style.display = 'block';
  discord.appendChild(img);

  container.appendChild(github);
  container.appendChild(discord);

  // append container to header
  header.appendChild(container);
});
