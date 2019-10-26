import React from 'react';
import { Link } from 'react-router-dom';
// import s from './Hero.module.scss';

interface ILinkComponent {
  name: string;
  path: string;
}

const LinkComponent: React.FC<ILinkComponent> = (props: ILinkComponent) => {
  const { name, path } = props;
  return (
    <>
      <Link to={`/${path}`}>{name}</Link>
    </>
  );
};

export default LinkComponent;
