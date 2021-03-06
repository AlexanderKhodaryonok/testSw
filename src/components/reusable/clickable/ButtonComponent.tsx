import React from 'react';
// import s from './Hero.module.scss';

interface IButtonComponent {
  text: string;
}

const ButtonComponent: React.FC<IButtonComponent> = (props: IButtonComponent) => {
  const { text } = props;
  return (
    <>
      <button type="button">{text}</button>
    </>
  );
};

export default ButtonComponent;
