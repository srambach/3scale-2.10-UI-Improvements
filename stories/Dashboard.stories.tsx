import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Table } from '@app/Table/Table';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Table',
  () => <Table />,
  { info: { inline: true } }
);
