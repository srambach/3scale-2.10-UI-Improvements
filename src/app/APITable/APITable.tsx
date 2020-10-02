import React, {useState} from 'react';
import { 
  InputGroup,
  TextInput,
  Button,
  ButtonVariant,
  PageSection,
  Pagination,
  PageSectionVariants,
  Title,
  Divider,
  Toolbar,
  ToolbarItem,
  ToolbarContent
} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  headerCol
} from '@patternfly/react-table';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import mockData from './../../mockdata-api.json';

const APITable: React.FunctionComponent = () => {

  console.log('what is MOCK DATA' + mockData);

  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);
  
  const tableColumns = [
    'Name',
    'System name',
    'Description',
    'Hits (last 30 days)',
    'Applications',
    'Backends used',
    'Unread alerts'
  ];

  const tableRows = mockData.map((tableRow) => {
      return {
        cells: [
          tableRow.name,
          tableRow.systemName,
          tableRow.description,
          tableRow.hits,
          tableRow.applications,
          tableRow.backendsUsed
        ]
      }
    });

  const tableActions = [
    {
      title: 'Some action',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
    },
    {
      title: <a href="https://www.patternfly.org">Link action</a>
    }
  ];

  const onSetPage = (_event, pageNumber) => {
    setPage(pageNumber);
  };

  const onPerPageSelect = (_event, perPage) => {
    setPerPage(perPage);
  };

  return (
  <React.Fragment>
    <PageSection variant={PageSectionVariants.light}>
      <Title headingLevel="h1" size="lg">API Products</Title>
      <p>Here is some content about Products. We could also include a link to documentation.</p>
    </PageSection>
    <Divider/>
    <PageSection variant={PageSectionVariants.light}>
      <Toolbar id="top-toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <InputGroup>
              <TextInput placeholder="Find a product" name="textInput1" id="textInput1" type="search" aria-label="search input example" />
              <Button variant={ButtonVariant.control} aria-label="search button for search input">
                <SearchIcon />
              </Button>
            </InputGroup>
          </ToolbarItem>
          <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
            <Pagination
              itemCount={37}
              perPage={perPage}
              page={page}
              onSetPage={onSetPage}
              widgetId="pagination-options-menu-top"
              onPerPageSelect={onPerPageSelect}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Table aria-label="Actions Table" actions={tableActions} cells={tableColumns} rows={tableRows}>
        <TableHeader />
        <TableBody />
      </Table>
      <Toolbar id="bottom-toolbar">
        <ToolbarContent>
          <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
            <Pagination
              itemCount={37}
              perPage={perPage}
              page={page}
              onSetPage={onSetPage}
              widgetId="pagination-options-menu-top"
              onPerPageSelect={onPerPageSelect}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </PageSection>
  </React.Fragment>
  )
}

export { APITable };
