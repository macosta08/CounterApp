test('Esta prueba no falla', () => {
  //    1. Inicialización
  const menssage = 'Hola mundo';
  //    2. Estímulo
  const message2 = menssage.trim();
  //    3. Observar el comportamiento ... esperado
  expect(menssage).toBe(message2);
});
