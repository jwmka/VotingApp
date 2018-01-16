// import {expect} from 'chai';
//
// describe('immutability', () => {
//
//     describe('a number', () => {
//
//     function increment(currentState) {
//         return currentState + 1;
//     }
//
//     it('is immutable', () => {
//         let state = 42;
//     let nextState = increment(state);
//
//     expect(nextState).to.equal(43);
//     expect(state).to.equal(42);
// });
//
// });
//
// });

// import {expect} from 'chai';
// import {List} from 'immutable';
//
// describe('immutability', () => {
//
//     // ...
//
//     describe('A List', () => {
//
//     function addMovie(currentState, movie) {
//         return currentState.push(movie);
//     }
//
//     it('is immutable', () => {
//         let state = List.of('Trainspotting', '28 Days Later');
//     let nextState = addMovie(state, 'Sunshine');
//
//     expect(nextState).to.equal(List.of(
//         'Trainspotting',
//         '28 Days Later',
//         'Sunshine'
//     ));
//     expect(state).to.equal(List.of(
//         'Trainspotting',
//         '28 Days Later'
//     ));
// });
//
// });
//
// });
//
// import {expect} from 'chai';
// import {List, Map} from 'immutable';
//
// describe('immutability', () => {
//
//     // ...
//
//     describe('a tree', () => {
//
//     function addMovie(currentState, movie) {
//         return currentState.set(
//             'movies',
//             currentState.get('movies').push(movie)
//         );
//     }
//
//     it('is immutable', () => {
//         let state = Map({
//             movies: List.of('Trainspotting', '28 Days Later')
//         });
//     let nextState = addMovie(state, 'Sunshine');
//
//     expect(nextState).to.equal(Map({
//         movies: List.of(
//             'Trainspotting',
//             '28 Days Later',
//             'Sunshine'
//         )
//     }));
//     expect(state).to.equal(Map({
//         movies: List.of(
//             'Trainspotting',
//             '28 Days Later'
//         )
//     }));
// });
//
// });
//
// });

import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next} from '../src/core';

describe('логика приложения', () => {

    // ..

    describe('далее', () => {

    it('берёт для голосования следующие две записи', () => {
        const state = Map({
            entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
        });
    const nextState = next(state);
    expect(nextState).to.equal(Map({
        vote: Map({
            pair: List.of('Trainspotting', '28 Days Later')
        }),
        entries: List.of('Sunshine')
    }));
});

});

});
