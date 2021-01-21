import React, { useState } from 'react';
import {
  Select,
  SelectOption,
  SelectVariant,
  SelectDirection,
  PageSection,
  FormGroup,
  Form,
} from '@patternfly/react-core';

const DefaultPlanSelector: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('(None selected)');

  //TODO: list needs to be alphabetized here or where the list is built?
  const options = [
    { value: '(None selected)' },
    { value: 'Application plan-01' },
    { value: 'Application plan-02' },
    { value: 'Application plan-03' },
    { value: 'Application plan-04' },
    { value: 'New Application plan-05' },
    { value: 'New plan-06' },
    { value: 'Old Application plan-07' },
    { value: 'Old Application plan-08' },
  ];

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (event, selection, isPlaceholder) => {
    if (isPlaceholder) clearSelection();
    else {
      setSelected(selection);
      setIsOpen(!isOpen);
    }
  };

  const clearSelection = () => {
    setSelected('(None selected)');
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <PageSection>
        <Form>
          <FormGroup
            fieldId="default-plan"
            helperText="Default application (if any) is selected automatically upon service subscription."
            label="Default plan"
          >
            <Select
              variant={SelectVariant.typeahead}
              typeAheadAriaLabel="Select a plan"
              onToggle={onToggle}
              onSelect={onSelect}
              onClear={clearSelection}
              selections={selected}
              isOpen={isOpen}
              aria-labelledby="default-plan"
              placeholderText="Select a plan"
            >
              {options.map((option, index) => (
                <SelectOption key={index} value={option.value} />
              ))}
            </Select>
          </FormGroup>
        </Form>
      </PageSection>
    </React.Fragment>
  );
};

export { DefaultPlanSelector };