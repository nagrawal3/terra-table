# Terra Table _(Currently in beta)_

The terra table component provides a responsive way to present tabular data.

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-table`
- [Download the latest version](https://github.com/cerner/terra-table/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-table.git`

## Themeable Variables

Variables to `theme` the terra-table component.

| Variable Name                             | Default value  | Usage                                                       |
|-------------------------------------------|----------------|-------------------------------------------------------------|
| $terra-table-background-color             | $terra-white   | Set the table background color                              |
| $terra-table-cell-background-color        | $terra-white   | Set the table-cell background color                         |
| $terra-table-cell-border-color            | $terra-grey-30 | Set the table-cell border color                             |
| $terra-table-cell-border-width            | 1px            | Set the table cell border width                             |
| $terra-table-cell-padding                 | 0.5em 0.75em   | Set the table-cell padding                                  |
| $terra-table-cell-small-padding           | 0.25em 0.75em  | Set the table-cell padding for compact views                |
| $terra-table-row-striped-background-color | $terra-grey-10 | Set the table-row background color for the striped modifier |
| $terra-table-tfoot-border-color           | $terra-grey-30 | Set the tfoot border color                                  |
| $terra-table-tfoot-border-width           | 1px            | Set the tfoot border width                                  |
| $terra-table-thead-background-color       | $terra-grey-20 | Set the thead background color                              |
| $terra-table-thead-border-color           | $terra-grey-30 | Set the thead border color                                  |
| $terra-table-thead-border-width           | 1px            | Set the thead border width                                  |
| $terra-table-tr-border-color              | $terra-grey-30 | Set the tr border color                                     |
| $terra-table-tr-border-width              | 1px            | Set the tr border width                                     |

## Usage

Add the class `terra-Table` to the `table` element.
There are additional modifier classes for size and zebra striping.
