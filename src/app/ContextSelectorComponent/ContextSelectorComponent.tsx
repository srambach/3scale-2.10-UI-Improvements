import React, {useState}  from 'react';
import {
  Select,
  SelectOption,
  SelectVariant,
  SelectDirection,
  PageSection,
  Title
} from '@patternfly/react-core';
import HomeIcon from '@patternfly/react-icons/dist/js/icons/home-icon';
import BullseyeIcon from '@patternfly/react-icons/dist/js/icons/bullseye-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';

const ContextSelectorComponent: React.FunctionComponent = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const options = [
    { value: 'Dashboard', disabled: false, isPlaceholder: true },
    { value: 'Audience', disabled: false },
    { value: 'API Products', disabled: false },
    { value: 'API Backends', disabled: false }
  ];

  const clearSelection = () => {
    setSelected("Dashboard");
    setIsOpen(!isOpen);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (event, selection, isPlaceholder) => {
    if (isPlaceholder) clearSelection();
    else {
      setSelected(selection);
      setIsOpen(isOpen);
    }
  };

  const returnIcon = (selectedItem) => {
    if(selectedItem === "Dashboard") {
      return <HomeIcon />
    }
    else if(selectedItem === "Audience") {
      return <BullseyeIcon />
    }
    else if(selectedItem === "API Products") {
      return <CubesIcon />
    }
    else if(selectedItem === "API Backends") {
      return <CubeIcon />
    }
  }


  return (
    <PageSection>
      <Select
        toggleIcon={returnIcon(selected)}
        variant={SelectVariant.single}
        aria-label="Select Input"
        onToggle={onToggle}
        onSelect={onSelect}
        selections={selected}
        isOpen={isOpen}
      >
        {options.map((option, index) => (
          <SelectOption
            isDisabled={option.disabled}
            key={index}
            value={option.value}
            isPlaceholder={option.isPlaceholder}
            icon={HomeIcon}
          />
        ))}
      </Select>
    </PageSection>
  )
}

export { ContextSelectorComponent };
