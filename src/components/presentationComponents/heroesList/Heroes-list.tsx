import React from 'react';
// import { Link } from 'react-router-dom';
import LinkComponent from '../../reusable/clickable/LinkComponent';
import SearchComponent from '../../reusable/inputs/searchComponent/SearchComponent';
// import s from './Heroes-list.module.scss';

const HeroesList: React.FC = () => (
  <>
    <SearchComponent />
    <h1>Heroes list!</h1>
    <LinkComponent path="hero" name="Hero" />
    {/* <Link to="/hero">qwe</Link> */}
  </>
);

export default HeroesList;
