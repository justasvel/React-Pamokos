import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const BeerDropdown = ({getQuery}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleSelect = (e) => {
        getQuery(e.target.innerText);
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>  
            <DropdownToggle caret>
                Choose Hops Type
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={(e) => handleSelect(e)}>Amarillo</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Centennial</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Saaz</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>First Gold</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Magnum</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Hersbrucker</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Bramling Cross</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Columbus</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Cascade</DropdownItem>
                <DropdownItem onClick={(e) => handleSelect(e)}>Chinook</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default BeerDropdown;