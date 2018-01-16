import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

describe('application logic', () => {

    describe('setEntries', () => {

    it('добавляет записи к состоянию', () => {
        const state = Map();
    const entries = List.of('Trainspotting', '28 Days Later');
    const nextState = setEntries(state, entries);
    expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
    }));
});

    it('преобразует в immutable', () => {
        const state = Map();
    const entries = ['Trainspotting', '28 Days Later'];
    const nextState = setEntries(state, entries);
    expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
    }));
});

    describe('vote', () => {

        it('создаёт результат голосования для выбранной записи', () => {
        const state = Map({
            pair: List.of('Trainspotting', '28 Days Later')
        });
        const nextState = vote(state, 'Trainspotting')
        expect(nextState).to.equal(Map({
            pair: List.of('Trainspotting', '28 Days Later'),
            tally: Map({
                'Trainspotting': 1
            })
        }));
    });

    it('добавляет в уже имеющийся результат для выбранной записи', () => {
        const state = Map({
            pair: List.of('Trainspotting', '28 Days Later'),
            tally: Map({
                'Trainspotting': 3,
                '28 Days Later': 2
            })
        });
    const nextState = vote(state, 'Trainspotting');
    expect(nextState).to.equal(Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
        })
    }));

});

});

});

});
