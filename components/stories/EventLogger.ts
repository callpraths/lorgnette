import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class EventLogger extends LitElement {
  /**
   * Events to log.
   *
   * This property is only read once, soon after mount.
   * Why? Because this is storybook code and I'm lazy.
   */
  @property({ type: Array })
  events: string[] = [];

  firstUpdated() {
    const container = this.shadowRoot?.getElementById('container');
    if (!container) {
      throw new Error(`Could not find container element`);
    }
    for (const event of this.events) {
      container.addEventListener(event, ev => this.onEvent(ev as CustomEvent));
    }
  }

  render() {
    return html` <div id="container">
      <slot></slot>
      <hr />
      <h3>Events</h3>
      <ol id="events"></ol>
    </div>`;
  }

  private onEvent(ev: CustomEvent) {
    const events = this.shadowRoot?.getElementById('events');
    const li = document.createElement('li');
    li.textContent = `${ev.type}: ${JSON.stringify(ev.detail)}`;
    events?.appendChild(li);
  }
}

window.customElements.define('sbx-event-logger', EventLogger);
