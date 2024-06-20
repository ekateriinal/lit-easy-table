import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {TableCell} from '../table-cell/table-cell';
import {TableRow} from '../table-row/table-row';

/**
 * A table is a wrapper component for header, rows and cells.
 *
 * @slot - table-cell and table-row components
 *
 */
@customElement('my-table')
export class Table extends LitElement {
  @state() private headerCells: TableCell[] = [];
  @state() private bodyRows: {cells: TableCell[]}[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.initializeTable();
  }

  initializeTable() {
    const children = Array.from(this.children);
    this.headerCells = children.filter(
      (el) =>
        el.tagName.toLowerCase() === 'table-cell' &&
        el.getAttribute('type') === 'title'
    ) as TableCell[];
    const rows = children.filter(
      (el) => el.tagName.toLowerCase() === 'table-row'
    ) as TableRow[];

    this.bodyRows = rows.map((row) => {
      const cells = Array.from(row.children).filter(
        (cell) =>
          cell.tagName.toLowerCase() === 'table-cell' &&
          cell.getAttribute('type') !== 'title'
      ) as TableCell[];
      row.remove();
      return {
        cells: cells,
      };
    });
  }

  override render() {
    return html`
      <table class="table">
        <thead>
          <tr>
            ${this.headerCells.map((cell) => html`<th>${cell}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.bodyRows.map(
            (row) => html`
              <tr>
                ${row.cells.map((cell) => html`<td>${cell}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }
    table {
      text-indent: 0;
      border-color: inherit;
      border-collapse: collapse;
    }
    .table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      overflow: auto;

      tr {
        vertical-align: baseline;
      }

      td,
      th {
        padding: 0;
        margin: 0;
        border-bottom: 1px solid #3f3f46;
      }
    }
  `;
}
