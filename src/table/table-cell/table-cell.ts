import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('table-cell')
export class TableCell extends LitElement {
  /** Cell type. type="title" is used for headers. If bold text is required in body, use type="strong" */
  @property() type: 'title' | 'body' | 'strong' = 'body';

  override render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }

  static override styles = css`
    :host {
      --table-color: #27272a;

      display: block;
      height: 100%;
    }

    .wrapper {
      display: flex;
      padding-block: 8px;
      padding-inline-end: 20px;
      align-items: flex-start;
      align-content: flex-start;
      gap: 12px;
      flex-wrap: wrap;
      min-width: 60px;
      color: var(--table-color);
      text-align: start;
      text-wrap: wrap;
    }

    :host([type='strong']) .wrapper,
    :host([type='title']) .wrapper {
      font-weight: 700;
    }
  `;
}
