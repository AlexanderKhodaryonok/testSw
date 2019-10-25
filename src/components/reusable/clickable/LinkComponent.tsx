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
    <div>
      <Link to={`/${path}`}>{name}</Link>
    </div>
  );
};

export default LinkComponent;
