/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import Table from '../src/Table';

setOptions({
  name: 'Table',
  url: 'https://github.com/cerner/terra-table',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);

storiesOf('Table ', module)
  .add('An example of the selectable base table with long text', () => (
    <Table>
      <Table.Header>
        <Table.HeaderContent display = {'Column Heading 1 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} minWidth = {'huge'} />
        <Table.HeaderContent display = {'Column Heading 2'} key = {2} minWidth = {'medium'} />
        <Table.HeaderContent display = {'Column Heading 3 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} minWidth = {'large'} />
      </Table.Header>
      <Table.SingleSelectableRows isSelectable = {true}>
        <Table.Row isSelected = {true} key = {0}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {1}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {2}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
      </Table.SingleSelectableRows>
    </Table>
  ))
  .add('An example of the selectable base table with long string', () => (
    <Table>
      <Table.Header>
        <Table.HeaderContent display = {'Column Heading 1 astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} minWidth = {'huge'} />
        <Table.HeaderContent display = {'Column Heading 2 astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} minWidth = {'medium'} />
        <Table.HeaderContent display = {'Column Heading 3 astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} minWidth = {'large'} />
      </Table.Header>
      <Table.SingleSelectableRows height = {'small'} isSelectable = {true}>
        <Table.Row isSelected = {true} key = {0}>
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {1}>
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {2}>
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} />
        </Table.Row>
      </Table.SingleSelectableRows>
    </Table>
  ))
  .add('An example of the base table with long text. Rows will have vertical scroll bar', () => (
    <Table>
      <Table.Header>
        <Table.HeaderContent display = {'Column Heading 1 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} minWidth = {'huge'} />
        <Table.HeaderContent display = {'Column Heading 2'} key = {2} minWidth = {'medium'} />
        <Table.HeaderContent display = {'Column Heading 3 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} minWidth = {'large'} />
      </Table.Header>
      <Table.Rows height = {'medium'}>
        <Table.Row isSelected = {true} key = {0}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {1}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {2}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
      </Table.Rows>
    </Table>
  ))
  .add('An example of the base table with long string', () => (
    <Table>
      <Table.Header>
        <Table.HeaderContent display = {'Column Heading 1 astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} minWidth = {'huge'} />
        <Table.HeaderContent display = {'Column Heading 2 astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} minWidth = {'medium'} />
        <Table.HeaderContent display = {'Column Heading 3 astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} minWidth = {'large'} />
      </Table.Header>
      <Table.Rows height = {'small'}>
        <Table.Row isSelected = {true} key = {0}>
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {1}>
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {2}>
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {1} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {2} />
          <Table.RowContent display = {'astringofreallylongtexttotestalongsinglewordtestcase'} key = {3} />
        </Table.Row>
      </Table.Rows>
    </Table>
  ))
  .add('An example of the selectable base table with long text. Row and header height is fixed. Add vertical scroll', () => (
    <Table>
      <Table.Header height = {'medium'}>
        <Table.HeaderContent display = {'Column Heading 1 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} minWidth = {'huge'} />
        <Table.HeaderContent display = {'Column Heading 2'} key = {2} minWidth = {'medium'} />
        <Table.HeaderContent display = {'Column Heading 3 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} minWidth = {'large'} />
      </Table.Header>
      <Table.SingleSelectableRows height = {'large'} isSelectable = {true}>
        <Table.Row isSelected = {true} key = {0}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {1}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
        <Table.Row isSelected = {false} key = {2}>
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {1} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {2} />
          <Table.RowContent display = {'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key = {3} />
        </Table.Row>
      </Table.SingleSelectableRows>
    </Table>
  ))
  .add('An example of the selectable base table without zebra stipping', () => (
    <Table isStripped = {false}>
      <Table.Header>
        <Table.HeaderContent height = {'medium'} key = {1} display = {'Column 1'} minWidth = {'huge'} />
        <Table.HeaderContent display = {'Column Heading 2'} key = {2} minWidth = {'medium'} />
        <Table.HeaderContent display = {'Column Heading 3'} key = {3} minWidth = {'large'} />
      </Table.Header>
      <Table.SingleSelectableRows height = {'medium'} isSelectable = {true}>
        <Table.Row isSelected = {true} key = {0}>
          <Table.RowContent display = {'Column Text 1'} key = {1} />
          <Table.RowContent display = {'Column Text 2'} key = {2} />
          <Table.RowContent display = {'Column Text 3'} key = {3} />
        </Table.Row>
        <Table.Row key = {1}>
          <Table.RowContent display = {'Column Text 1'} key = {1} />
          <Table.RowContent display = {'Column Text 2'} key = {2} />
          <Table.RowContent display = {'Column Text 3'} key = {3} />
        </Table.Row>
        <Table.Row key = {2}>
          <Table.RowContent display = {'Column Text 1'} key = {1} />
          <Table.RowContent display = {'Column Text 2'} key = {2} />
          <Table.RowContent display = {'Column Text 3'} key = {3} />
        </Table.Row>
      </Table.SingleSelectableRows>
    </Table>
  ))
;
