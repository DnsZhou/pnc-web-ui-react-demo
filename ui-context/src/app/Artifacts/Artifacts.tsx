import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { PageContext } from '../context/PageContext';

const Artifacts: React.FunctionComponent = () => {
  const pageContext = React.useContext(PageContext);
  return (
    <PageSection>
      <Title headingLevel="h1" size="lg">Artifacts Page Title</Title>
      Context: {pageContext}
    </PageSection>
  )
}

export { Artifacts };
