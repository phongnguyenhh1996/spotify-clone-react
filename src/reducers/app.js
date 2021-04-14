import * as TYPES from '@/constants'

const initialState = {
  loading: false,
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TEST_REDUX:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
export default app
