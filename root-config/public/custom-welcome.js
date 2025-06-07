const containerId = 'custom-welcome-container';

export async function bootstrap() {
  console.log('custom-welcome: bootstrap');
}

export async function mount() {
  console.log('custom-welcome: mount');

  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.id = containerId;
  div.style.maxWidth = '800px';
  div.style.margin = '60px auto';
  div.style.padding = '0 20px';
  div.style.fontFamily = "'Segoe UI', sans-serif";
  div.style.color = '#333';

  div.innerHTML = `
    <h1 style="text-align:center; font-size:2.2rem; color:#1a73e8;">
      Microfrontends Proof of Concept
    </h1>

    <p style="font-size:1.1rem; line-height:1.6; margin-top:30px;">
      This prototype demonstrates a microfrontend architecture implemented using the <strong>Single-SPA</strong> framework. The objective is to illustrate how independent frontend applications—potentially built with different JavaScript frameworks—can operate cohesively within a unified user interface.
    </p>

    <h2 style="color:#1a73e8; margin-top:40px;">Overview of Microfrontends</h2>
    <p style="font-size:1rem; line-height:1.6;">
      A <strong>microfrontend</strong> is a design pattern in which a single application is composed of smaller, self-contained frontend modules. These modules are developed and deployed independently, promoting better scalability, maintainability, and team autonomy. This approach is particularly advantageous for large-scale projects with distributed development teams.
    </p>

    <h2 style="color:#1a73e8; margin-top:30px;">Role of Single-SPA</h2>
    <p style="font-size:1rem; line-height:1.6;">
      <strong>Single-SPA</strong> ("single-spa" stands for "single single-page application") is a JavaScript framework designed to orchestrate multiple microfrontends. It provides lifecycle methods to bootstrap, mount, and unmount applications as users navigate between routes. It enables seamless integration of heterogeneous frontend technologies such as React, Angular, Vue 2, Vue 3, and even vanilla JavaScript.
    </p>

    <h2 style="color:#1a73e8; margin-top:30px;">Key Features of This Demonstration</h2>
    <ul style="font-size:1rem; line-height:1.6; padding-left:20px;">
      <li>A shared navigation bar rendered in the root configuration</li>
      <li>Integration of both <strong>Vue 2</strong> and <strong>Vue 3</strong> applications</li>
      <li>Independently mountable and maintainable frontend modules</li>
      <li>Clear route-based composition and lifecycle isolation</li>
      <li>Potential for module reuse across multiple projects or domains</li>
    </ul>

    <p style="margin-top:30px; font-size:1rem;">
      This architectural model offers a modern, modular solution for complex frontends, particularly those requiring gradual framework migrations or collaborative, cross-functional development workflows.
    </p>
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
