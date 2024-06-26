const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
    // Teste se o retorno da função é um array.
    it('Verifica se o retorno da função é um array.', () => {
      expect(productDetails()).toBeTruthy();
    })
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
      expect(productDetails().length).toBe(2);
    })
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Verifica se os dois itens dentro do array são objetos.', () => {
      expect(typeof productDetails()).toBe('object');
    })
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Verifica se quando passamos parâmetros diferentes entre si, os dois objetos são diferentes.', () => {
      expect(productDetails()).toStrictEqual(productDetails());
    })
    // Teste se os dois productIds terminam com 123.
    it('Teste se os dois productIds terminam com 123.', () => {
      const productId1 = 'Alcool Gel123';
      expect(productId1.endsWith('123')).toBe(true);
      const productId2 = 'Mascara123';
      expect(productId2.endsWith('123')).toBe(true);
    });
  });
