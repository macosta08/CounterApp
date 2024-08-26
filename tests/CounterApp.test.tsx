import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
  const value = 10;
  test('desde de hacer math con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();

    // Otra manera mas exacta
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
    //   '100'
    // );
  });

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('debe de decrementar con el botón -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    screen.debug();
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('debe de funcionar con el botón reset', () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('-1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    screen.debug();
    expect(screen.getByText('355')).toBeTruthy();
  });
});
