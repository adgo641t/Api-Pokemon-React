import {pokemons} from './mocks/pokemons.json'

test('Json file', () => {
    expect(pokemons).toBe(JSON.parse(pokemons));
});