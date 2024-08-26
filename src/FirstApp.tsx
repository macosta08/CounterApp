import React from 'react';

interface FirstAppProps {
  title: string;
  subTitle: string;
  name: string;
}

const FirstApp = ({ title, subTitle, name }: FirstAppProps) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <div>{subTitle}</div>
      <div>{subTitle}</div>
      <div>{name}</div>
    </>
  );
};

// FirstApp.defaultProps = {
//   title: 'FirstApp',
//   subTitle: 'CouterApp',
//   name: 'Mariangel Acosta',
// };

export default FirstApp;
