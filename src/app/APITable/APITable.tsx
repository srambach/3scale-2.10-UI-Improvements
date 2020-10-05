import React, {useState} from 'react';
import {
  Level,
  LevelItem,
  InputGroup,
  TextInput,
  Button,
  ButtonVariant,
  PageSection,
  Pagination,
  PaginationVariant,
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
import './APITable.css';

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
          { title: <a href="/">{tableRow.name}</a> },
          tableRow.systemName,
          tableRow.description,
          tableRow.hits.toLocaleString(),
          tableRow.applications,
          tableRow.backendsUsed,
          tableRow.unreadAlerts
        ]
      }
    });

  const tableActions = [
    {
      title: <a href="/">Overview</a>
    },
    {
      title: <a href="/">Analytics</a>
    },
    {
      title: <a href="/">Applications</a>
    },
    {
      title: <a href="/">ActiveDocs</a>
    },
    {
      title: <a href="/">Integration</a>
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
      <Level>
        <LevelItem>
          <Title headingLevel="h1" size="2xl">API Products</Title>
        </LevelItem>
        <LevelItem>
          <Button>
            New Product
          </Button>
        </LevelItem>
      </Level>
      <p className="api-table-description">Here is some content about Products. We could also include a link to documentation.</p>
    </PageSection>
    <Divider/>
    <PageSection variant={PageSectionVariants.light}>
      <Toolbar id="top-toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <InputGroup className="api-table-search">
              <TextInput placeholder="Find a product" name="findProduct" id="findProduct" type="search" aria-label="Find a product" />
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
              variant={PaginationVariant.bottom}
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
