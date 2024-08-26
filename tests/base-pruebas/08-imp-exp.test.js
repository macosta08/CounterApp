import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas 08-imp-exp', () => {
  test('getHeroById debe de retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroById debe de retornar un undefined si no existe el ID', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retonar un arreglo con los héroes de DC "Length === 3"', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    expect(hero).toHaveLength(3);
  });

  test('getHeroesByOwner debe retonar un heroe con un ID', () => {
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
