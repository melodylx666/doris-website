import React from 'react';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import type {Props} from '@theme/NavbarItem/SearchNavbarItem';

export default function SearchNavbarItem({
  mobile,
  className,
}: Props): JSX.Element | null {
  if (mobile) {
    return null;
  }

  return (
    <NavbarSearch className={className}>
      <SearchBar />
    </NavbarSearch>
  );
}
