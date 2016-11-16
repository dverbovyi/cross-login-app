import { Unsubscriber } from './unsubscriber';

describe('#Mixins', () => {
    let unsubscriber: Unsubscriber;

    beforeEach(() => {
        unsubscriber = new Unsubscriber();
    });

    it('Should implement OnDestroy interface', () => {
        expect(unsubscriber.ngOnDestroy).toBeTruthy();
    });
});
