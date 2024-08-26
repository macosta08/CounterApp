import getSaludo from '../../src/base-pruebas/02-template-string';
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe retornar "Hola Mariangel"', () => {
    const name = 'Mariangel';
    const mensage = getSaludo(name);

    expect(mensage).toBe(`Hola ${name}`);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Mariangel';
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name,
    });
  });
});
