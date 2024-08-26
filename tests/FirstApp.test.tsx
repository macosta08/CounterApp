import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';
import React from 'react';

describe('Prueba en FirstApp', () => {
  //   test('debe de hacer match con el snapshot', () => {
  //     const title = 'Hola, soy Mariangel';
  //     const { container } = render(
  //       <FirstApp
  //         title={title}
  //         subTitle={'CounterApp'}
  //         name={'Mariangel Acosta'}
  //       />
  //     );
  //     expect(container).toMatchSnapshot();
  //   });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Hola, soy Mariangel';
    const { getByText, getByTestId } = render(
      <FirstApp
        title={title}
        subTitle={'CounterApp'}
        name={'Mariangel Acosta'}
      />
    );
    expect(getByText(title)).toBeTruthy(); // preguntar que el titulo exista

    // const h1 = container.querySelector('h1');
    // expect(h1?.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, soy Mariangel';
    const subTitle = 'CounterApp';

    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} name={'Mariangel Acosta'} />
    );
    expect(getAllByText(subTitle).length).toBe(2); // preguntar que el subtitulo sean 2
  });
});
