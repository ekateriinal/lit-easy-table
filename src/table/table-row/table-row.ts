import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('table-row')
export class TableRow extends LitElement {
  override render() {
    return html`<slot></slot>`;
  }

  static override styles = css`
    :host {
      display: block;
      height: 100%;
    }
  `;
}
