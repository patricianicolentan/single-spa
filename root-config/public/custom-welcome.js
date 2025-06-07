const containerId = 'custom-welcome-container';

export async function bootstrap() {
  console.log('custom-welcome: bootstrap');
}

export async function mount() {
  console.log('custom-welcome: mount');
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.id = containerId;
  div.style.textAlign = 'center';
  div.style.marginTop = '50px';
  div.innerHTML = `
    <h1>Welcome to Patricia's Root Config!</h1>
    <p>This is a vanilla JS microfrontend.</p>
  `;
  main.appendChild(div);
}

export async function unmount() {
  console.log('custom-welcome: unmount');
  const div = document.getElementById(containerId);
  if (div) {
    div.remove();
  }
}
