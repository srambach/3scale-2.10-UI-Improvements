import React, { useState } from 'react';
import { Select, SelectOption, SelectVariant, PageSection, FormGroup, Form } from '@patternfly/react-core';

const DefaultPlanSelector: React.FunctionComponent = () => {
  const labelText = 'Default plan';
  const helperText = 'Default application (if any) is selected automatically upon service subscription.';
  const placeholderText = '(None selected)';
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholderText);

  //TODO: list needs to be alphabetized, like wherever the list is built?
  const options = [
    { value: placeholderText, isPlaceholder: true },
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
    setSelected(placeholderText);
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <PageSection>
        <Form>
          <FormGroup fieldId="default-plan" helperText={helperText} label={labelText}>
            <Select
              variant={SelectVariant.typeahead}
              typeAheadAriaLabel={placeholderText}
              onToggle={onToggle}
              onSelect={onSelect}
              onClear={clearSelection}
              selections={selected}
              isOpen={isOpen}
              aria-labelledby="default-plan"
            >
              {options.map((option, index) => (
                <SelectOption key={index} value={option.value} isPlaceholder={option.isPlaceholder} />
              ))}
            </Select>
          </FormGroup>
        </Form>
      </PageSection>
    </React.Fragment>
  );
};

export { DefaultPlanSelector };
