# Simple table component build with Lit

**View Lit Playground:** **[redirect to the playground](https://tinyurl.com/mw6kjdb2)**
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
