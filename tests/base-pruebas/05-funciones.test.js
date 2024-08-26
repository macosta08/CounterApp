import { getUser } from '../../src/base-pruebas/05-funciones';

describe('Pruebas 05 funciones', () => {
  test('Esta debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const usuario = getUser();

    expect(testUser).toEqual(usuario);
  });
});
