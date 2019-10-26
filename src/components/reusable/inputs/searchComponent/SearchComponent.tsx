import React from 'react';
import Button from '../../clickable/ButtonComponent';
import s from './SearchComponent.module.scss';

interface ISearchComponent {

}

// eslint-disable-next-line arrow-body-style
const SearchComponent: React.FC<ISearchComponent> = () => {
  return (
    <div className={s.wrapper}>
      <input placeholder="Search by stock or market name" type="text" />
      <Button text="Search" />
    </div>
  );
};

export default SearchComponent;
