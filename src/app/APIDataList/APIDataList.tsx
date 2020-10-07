import React, {useState} from 'react';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
  CardFooter,
  PageSection,
  Grid,
  GridItem,
  Title,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';
import './APIDataList.css';
import mockDataAPI from './../../mockdata-api.json';
import mockDataBackend from './../../mockdata-backend.json';

const APIDataList: React.FunctionComponent = () => {

  const [ isOpenArray, setIsOpenArray ] = useState([]);

  // const onSelect = () => {
  //   setIsOpen(isOpen);
  // };

  function handleChange(e) {

    const item = e.target.id;
    var indexOfItem = isOpenArray.indexOf(item);

    if(indexOfItem !== -1) {
      var array = [...isOpenArray];
      if(indexOfItem === 0) {
        array.shift();
        setIsOpenArray(array);
      }
      else {
        var newArray = array.splice(indexOfItem, 1);
        setIsOpenArray(newArray);
      }
    }
    else {
      setIsOpenArray( [item, ...isOpenArray]);
    }
  }

  console.log('what is the open array' + isOpenArray + typeof(isOpenArray));

  const APIDataListItem = mockDataAPI.map((row, index) => {
    return (
      <DataListItem aria-labelledby="single-action-item1">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <a href="/" id="single-action-item1">
                {row.name}
              </a>
            </DataListCell>,
            <DataListCell key="secondary content" className="dashboard-list-secondary">
              {row.timeCreated}
            </DataListCell>
          ]}
        />
        <DataListAction
          aria-labelledby="multi-actions-item1 multi-actions-action1"
          id="actions-menu"
          aria-label="Actions"
          isPlainButtonAction
        >
          <Dropdown
            isPlain
            position={DropdownPosition.right}
            isOpen={isOpenArray.indexOf(`toggle-${index}`) !== -1 ? true : false}
            // onSelect={onSelect}
            onClick={handleChange}
            toggle={<KebabToggle id={`toggle-${index}`} onToggle={handleChange}  />}
            dropdownItems={[
              <DropdownItem key={`link-${index}`} href="/">
                Overview
              </DropdownItem>,
              <DropdownItem key={`link-${index}`} href="/">
                Analytics
              </DropdownItem>,
              <DropdownItem key={`link-${index}`} href="/">
                Applications
              </DropdownItem>,
              <DropdownItem key={`link-${index}`} href="/">
                ActiveDocs
              </DropdownItem>,
              <DropdownItem key={`link-${index}`} href="/">
                Integration
              </DropdownItem>
            ]}
          />
        </DataListAction>
      </DataListItemRow>
    </DataListItem>
    )
  });

  // const BackendDataListItem = mockDataBackend.map((row) => {
  //   return (
  //     <DataListItem aria-labelledby="single-action-item1">
  //     <DataListItemRow>
  //       <DataListItemCells
  //         dataListCells={[
  //           <DataListCell key="primary content">
  //             <a href="" id="single-action-item1">
  //               {row.name}
  //             </a>
  //           </DataListCell>,
  //           <DataListCell key="secondary content" className="dashboard-list-secondary">
  //             {row.timeCreated}
  //           </DataListCell>
  //         ]}
  //       />
  //       <DataListAction
  //         aria-labelledby="multi-actions-item1 multi-actions-action1"
  //         id="multi-actions-action1"
  //         aria-label="Actions"
  //         isPlainButtonAction
  //       >
  //         <Dropdown
  //           isPlain
  //           position={DropdownPosition.right}
  //           isOpen={isOpen}
  //           onSelect={onSelect}
  //           toggle={<KebabToggle onToggle={onToggle} />}
  //           dropdownItems={[
  //             <DropdownItem key="link">
  //               Overview
  //             </DropdownItem>,
  //             <DropdownItem key="link">
  //               Analytics
  //             </DropdownItem>,
  //             <DropdownItem key="link">
  //               Methods and Metrics
  //             </DropdownItem>,
  //             <DropdownItem key="link">
  //               Mapping Rules
  //             </DropdownItem>
  //           ]}
  //         />
  //       </DataListAction>
  //     </DataListItemRow>
  //   </DataListItem>
  //   )
  // });

  return (
    <PageSection>
      <Grid hasGutter>
        <GridItem span={6}>
          <Card>
            <CardHeader>
              <CardHeaderMain>
                <div className="dashboard-list-icon-title-layout">
                  <CubesIcon/>
                  <Title headingLevel="h1" size="lg">
                    Backends
                  </Title>
                </div>
                <div className="dashboard-list-subtitle">
                  Most active (last 7 days)
                </div>
              </CardHeaderMain>
              <CardActions>
                <Button>
                  New Product
                </Button>
              </CardActions>
            </CardHeader>
            <CardBody>
              <DataList aria-label="single action data list example">
                {APIDataListItem}
              </DataList>
            </CardBody>
            <CardFooter>
              <Button variant="link" isInline>
                Go to Products
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem span={6}>
          <Card>
            <CardHeader>
              <CardHeaderMain>
                <div className="dashboard-list-icon-title-layout">
                  <CubesIcon/>
                  <Title headingLevel="h1" size="lg">
                    Products
                  </Title>
                </div>
                <div className="dashboard-list-subtitle">
                  Most recently created
                </div>
              </CardHeaderMain>
              <CardActions>
                <Button>
                  New Backend
                </Button>
              </CardActions>
            </CardHeader>
            <CardBody>
              <DataList aria-label="single action data list example">
                {/* {BackendDataListItem} */}
              </DataList>
            </CardBody>
            <CardFooter>
              <Button variant="link" isInline>
                Go to Backends
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </PageSection>
  );
};

export { APIDataList };
