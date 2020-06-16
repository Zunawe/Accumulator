import * as actions from '../../../../client/js/actions/collections'

describe('actions - collections', () => {
  it('create an action for setting the collections client side', () => {
    const action = actions.setCollections([1, 2, 3])
    expect(action).toEqual({
      type: actions.SET_COLLECTIONS,
      payload: [1, 2, 3]
    })
  })
})
