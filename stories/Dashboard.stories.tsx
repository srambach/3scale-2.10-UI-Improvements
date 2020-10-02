import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { APITable } from '@app/APITable/APITable';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'APITable',
  () => <APITable />,
  { info: { inline: true } }
);
