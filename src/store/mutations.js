export default {
  changeStatus (state, payload) {
    state.name = payload.name
    state.token = payload.token
  }
}
