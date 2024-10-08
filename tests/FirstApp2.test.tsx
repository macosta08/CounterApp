import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';
import React from 'react';

describe('Prueba en FirstApp', () => {
  const title = 'Hola, soy Mariangel';
  const subTitle = 'CounterApp';
  const name = 'Mariangel Acosta';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(
      <FirstApp title={title} subTitle={subTitle} name={name} />
    );
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el titulo "Hola, soy Mariangel" ', () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(screen.getByText(title)).toBeTruthy(); // preguntar que el titulo exista
    // screen.debug()
  });

  test('debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(screen.getAllByText(subTitle).length).toBe(2); // preguntar que el subtitulo sean 2
  });
});
