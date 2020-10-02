import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { APIDataList } from '@app/APIDataList/APIDataList';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'APIDataList',
  () => <APIDataList />,
  { info: { inline: true } }
);
