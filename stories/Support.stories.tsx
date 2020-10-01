import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { DataList } from '@app/DataList/DataList';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'DataList',
  () => <DataList />,
  { info: { inline: true } }
);
