import { call } from 'redux-saga/effects';
import { getCharacterByName, requestCharacterByName } from '../store/sagas/character';


describe('Search Character By Name Saga', () => {
    const saga = requestCharacterByName('teste teste');
    let output = null;
    it('should call getCharacterByName with the name (space => +) ', (done) => {
        output = saga.next('teste teste').value;
        let expected = call(getCharacterByName, 'teste+teste');
        done();
        expect(output).toEqual(expected);
    });
}); 