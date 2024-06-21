# Simple table component build with Lit

**View Lit Playground:** **[redirect to the playground]([https://lit.dev/playground/#view-mode=code&gist=5638bc680a41c789017576578363c481](https://lit.dev/playground/#project=W3sibmFtZSI6ImluZGV4Lmh0bWwiLCJjb250ZW50IjoiPCFET0NUWVBFIGh0bWw-XG48aGVhZD5cbiAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi9teS10YWJsZS5qc1wiPjwvc2NyaXB0PlxuICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBzcmM9XCIuL3RhYmxlLWNlbGwuanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiLi90YWJsZS1yb3cuanNcIj48L3NjcmlwdD5cbjwvaGVhZD5cbjxib2R5PlxuICAgPG15LXRhYmxlPlxuICAgICAgPHRhYmxlLWNlbGwgdHlwZT1cInRpdGxlXCI-SGVhZGVyIDE8L3RhYmxlLWNlbGw-XG4gICAgICA8dGFibGUtY2VsbCB0eXBlPVwidGl0bGVcIj5IZWFkZXIgMjwvdGFibGUtY2VsbD5cbiAgICAgIDx0YWJsZS1jZWxsIHR5cGU9XCJ0aXRsZVwiPkhlYWRlciAzPC90YWJsZS1jZWxsPlxuICAgICAgPHRhYmxlLXJvdz5cbiAgICAgICAgPHRhYmxlLWNlbGw-XG4gICAgICAgICAgRGF0YSAxIHZpc2l0IHNhaWwgaW5jbHVkZSBlcXVhbGx5IGJpcnRoIGNvbWUgYXR0YWNrIHBsYXkgbW90aGVyXG4gICAgICAgICAgZ2FyZGVuIGhpbSBzZWxlY3QgZ28gbnVtYmVyIG1ham9yIGNvbGxlY3QgY2FwIGJyYXZlIGdpdmluZyBjcmVhdHVyZVxuICAgICAgICAgIG1peCBzb2lsIHBhc3Mgb3JiaXRcbiAgICAgICAgPC90YWJsZS1jZWxsPlxuICAgICAgICA8dGFibGUtY2VsbD5cbiAgICAgICAgICBEYXRhIDIgYmVjYXVzZSBkbyBtb2RlbCByZXByZXNlbnQgYWN0dWFsbHkgZHJpdmluZyBvYnNlcnZlIHRyb29wcyBiaXRcbiAgICAgICAgICBmdXJuaXR1cmUgZmFpbGVkIHN1cmUgZGVzayByaXNlIGdyZWF0ZXN0IHJldmlldyBtaXJyb3IgZmluZXN0XG4gICAgICAgICAgbWF0aGVtYXRpY3MgbG9jYXRlIGRyaWVkIG5hdGl2ZSBkcmF3biBiZWxpZXZlZFxuICAgICAgICA8L3RhYmxlLWNlbGw-XG4gICAgICAgIDx0YWJsZS1jZWxsPkRhdGEgMzwvdGFibGUtY2VsbD5cbiAgICAgIDwvdGFibGUtcm93PlxuICAgICAgPHRhYmxlLXJvdz5cbiAgICAgICAgPHRhYmxlLWNlbGwgdHlwZT1cInN0cm9uZ1wiPkRhdGEgNDwvdGFibGUtY2VsbD5cbiAgICAgICAgPHRhYmxlLWNlbGw-XG4gICAgICAgICAgRGF0YSA1IHNob3cgZmlmdHkgdmlzaXRvciBzaGFraW5nIHJlY2FsbCBoZWxwIHJlYXNvbiBldmVuaW5nIG5hdHVyZVxuICAgICAgICAgIGhpdCBvbiBpbmZvcm1hdGlvbiBjb3VwbGUgZnJlZSB3cml0ZSBhY3RpdmUgbWVtYmVyIHNwZW5kIGJlYXQgaWYgdG91Y2hcbiAgICAgICAgICBwcm9iYWJseSBvcGluaW9uIHR5cGljYWwgd2l0aCBzb21lXG4gICAgICAgICAgc8O8bm5pcMOkZXZhbsOkZGFsYWzDtXB1cGVvcMOkcmFzdGzDtXVuYXbDpHNpbWF0dXNcbiAgICAgICAgPC90YWJsZS1jZWxsPlxuICAgICAgICA8dGFibGUtY2VsbD5EYXRhIDY8L3RhYmxlLWNlbGw-XG4gICAgICA8L3RhYmxlLXJvdz5cbiAgICA8L215LXRhYmxlPlxuPC9ib2R5PlxuIn0seyJuYW1lIjoicGFja2FnZS5qc29uIiwiY29udGVudCI6IntcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibGl0XCI6IFwiXjMuMC4wXCIsXG4gICAgXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjogXCJeMi4wLjBcIixcbiAgICBcImxpdC1lbGVtZW50XCI6IFwiXjQuMC4wXCIsXG4gICAgXCJsaXQtaHRtbFwiOiBcIl4zLjAuMFwiXG4gIH1cbn0iLCJoaWRkZW4iOnRydWV9LHsibmFtZSI6Im15LXRhYmxlLnRzIiwiY29udGVudCI6ImltcG9ydCB7aHRtbCwgY3NzLCBMaXRFbGVtZW50fSBmcm9tICdsaXQnO1xuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBzdGF0ZX0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuaW1wb3J0IHtUYWJsZUNlbGx9IGZyb20gJy4vdGFibGUtY2VsbC5qcyc7XG5pbXBvcnQge1RhYmxlUm93fSBmcm9tICcuL3RhYmxlLXJvdy5qcyc7XG5cbkBjdXN0b21FbGVtZW50KCdteS10YWJsZScpXG5leHBvcnQgY2xhc3MgVGFibGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHN0YXRlKCkgcHJpdmF0ZSBoZWFkZXJDZWxsczogVGFibGVDZWxsW10gPSBbXTtcbiAgQHN0YXRlKCkgcHJpdmF0ZSBib2R5Um93czoge2NlbGxzOiBUYWJsZUNlbGxbXX1bXSA9IFtdO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5pbml0aWFsaXplVGFibGUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVUYWJsZSgpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG4gICAgdGhpcy5oZWFkZXJDZWxscyA9IGNoaWxkcmVuLmZpbHRlcihcbiAgICAgIChlbCkgPT5cbiAgICAgICAgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGFibGUtY2VsbCcgJiZcbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICd0aXRsZSdcbiAgICApIGFzIFRhYmxlQ2VsbFtdO1xuICAgIGNvbnN0IHJvd3MgPSBjaGlsZHJlbi5maWx0ZXIoXG4gICAgICAoZWwpID0-IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RhYmxlLXJvdydcbiAgICApIGFzIFRhYmxlUm93W107XG5cbiAgICB0aGlzLmJvZHlSb3dzID0gcm93cy5tYXAoKHJvdykgPT4ge1xuICAgICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKHJvdy5jaGlsZHJlbikuZmlsdGVyKFxuICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICBjZWxsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RhYmxlLWNlbGwnICYmXG4gICAgICAgICAgY2VsbC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSAhPT0gJ3RpdGxlJ1xuICAgICAgKSBhcyBUYWJsZUNlbGxbXTtcbiAgICAgIHJvdy5yZW1vdmUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNlbGxzOiBjZWxscyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICA8dGhlYWQ-XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgJHt0aGlzLmhlYWRlckNlbGxzLm1hcCgoY2VsbCkgPT4gaHRtbGA8dGg-JHtjZWxsfTwvdGg-YCl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7dGhpcy5ib2R5Um93cy5tYXAoXG4gICAgICAgICAgICAocm93KSA9PiBodG1sYFxuICAgICAgICAgICAgICA8dHI-XG4gICAgICAgICAgICAgICAgJHtyb3cuY2VsbHMubWFwKChjZWxsKSA9PiBodG1sYDx0ZD4ke2NlbGx9PC90ZD5gKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IFsgXG4gICAgY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHRhYmxlIHtcbiAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB9XG4gICAgLnRhYmxlIHtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgIHRyIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgfVxuXG4gICAgICB0ZCxcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmM2Y0NjtcbiAgICAgIH1cbiAgICB9XG4gIGBdO1xufVxuIn0seyJuYW1lIjoidGFibGUtcm93LnRzIiwiY29udGVudCI6ImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5cbkBjdXN0b21FbGVtZW50KCd0YWJsZS1yb3cnKVxuZXhwb3J0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8c2xvdD48L3Nsb3Q-YDtcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSBbXG4gICAgY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgYF07XG59XG4ifSx7Im5hbWUiOiJ0YWJsZS1jZWxsLnRzIiwiY29udGVudCI6ImltcG9ydCB7TGl0RWxlbWVudCwgaHRtbCwgY3NzfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBwcm9wZXJ0eX0gZnJvbSAnbGl0L2RlY29yYXRvcnMuanMnO1xuXG5AY3VzdG9tRWxlbWVudCgndGFibGUtY2VsbCcpXG5leHBvcnQgY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8qKiBDZWxsIHR5cGUuIHR5cGU9XCJ0aXRsZVwiIGlzIHVzZWQgZm9yIGhlYWRlcnMuIElmIGJvbGQgdGV4dCBpcyByZXF1aXJlZCBpbiBib2R5LCB1c2UgdHlwZT1cInN0cm9uZ1wiICovXG4gIEBwcm9wZXJ0eSgpIHR5cGU6ICd0aXRsZScgfCAnYm9keScgfCAnc3Ryb25nJyA9ICdib2R5JztcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q-XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IFtcbiAgICBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgLS10YWJsZS1jb2xvcjogIzI3MjcyYTtcblxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLndyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmctYmxvY2s6IDhweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10YWJsZS1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIHRleHQtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICA6aG9zdChbdHlwZT0nc3Ryb25nJ10pIC53cmFwcGVyLFxuICAgIDpob3N0KFt0eXBlPSd0aXRsZSddKSAud3JhcHBlciB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgYF07XG59XG4ifV0))**
---

This repository contains a set of Lit.js components to create accessible and customizable tables. The components included are:

- `<my-table>`: The main table component that wraps headers and rows.
- `<table-cell>`: The cell component used for both headers and body cells.
- `<table-row>`: The row component that wraps cells within a table row.

## Components

### `<my-table>`

A wrapper component for table headers and rows.

**Default slot:**

- `table-cell` and `table-row` components to be used inside.

#### Example:

```html
<my-table>
  <table-cell type="title">Header 1</table-cell>
  <table-cell type="title">Header 2</table-cell>
  <table-cell type="title">Header 3</table-cell>
  <table-row>
    <table-cell>Data 1</table-cell>
    <table-cell>Data 2</table-cell>
    <table-cell>Data 3</table-cell>
  </table-row>
  <table-row>
    <table-cell type="strong">Data 4</table-cell>
    <table-cell>Data 5</table-cell>
    <table-cell>Data 6</table-cell>
  </table-row>
</my-table>
```

### `<table-cell>`

A cell component for table headers and body cells.

**Properties:**

| Property | Type   | Description                                         | Possible Values                              |
|----------|--------|-----------------------------------------------------|----------------------------------------------|
| `type`   | String | Defines the type of the cell.                       | `'title'`: Used for header cells.            |
|          |        |                                                     | `'body'`: Used for regular body cells (default). |
|          |        |                                                     | `'strong'`: Used for bold text in body cells. |

**Example:**

```html
<table-cell type="title">Header 1</table-cell>
<table-cell>Data 1</table-cell>
<table-cell type="strong">Strong Data</table-cell>
```

### `<table-row>`
A wrapper component for table rows. It acts as a wrapper for <tr> elements without breaking accessibility and table relationships.

**Example:**
```html
<table-row>
  <table-cell>Data 1</table-cell>
  <table-cell>Data 2</table-cell>
  <table-cell>Data 3</table-cell>
</table-row>
```
This repository was built with the help of the [lit-starter-ts](https://github.com/lit/lit-element-starter-ts) repo.
