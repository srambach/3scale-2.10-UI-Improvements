import * as React from 'react';
import {
  PageSection,
  Title
} from '@patternfly/react-core';

export interface ISupportProps {
  sampleProp?: string;
}

const DataList: React.FunctionComponent<ISupportProps> = () => (
    <PageSection>
      <Title headingLevel="h1" size="lg">
        Data list goes here
      </Title>
    </PageSection>
  )

export { DataList };
