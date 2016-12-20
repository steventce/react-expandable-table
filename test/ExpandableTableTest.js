import assert from 'assert';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import ExpandableTable from '../src/ExpandableTable.jsx';

describe('ExpandableTable', () => {
  it('should render into document', () => {
    const ExpandableTableView = ReactTestUtils.renderIntoDocument(
      <ExpandableTable />
    );
  });
});
