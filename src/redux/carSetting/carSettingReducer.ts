interface ICarSettingState {
}

const INIT_STATE: ICarSettingState = {
}

const carSettingReducer = (
    state = INIT_STATE, action: any): ICarSettingState => {
  switch (action.type) {
    default:
      return state
  }
}

export default carSettingReducer
