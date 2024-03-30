/* eslint-disable no-console */
// #region console
const MESSAGE_FORMAT = 'color: blue; font-size: larger'

export function printWelcomeMessage() {
  console.log('%c欢迎使用 Learn Helper！', MESSAGE_FORMAT)
  console.log('%c诚邀一起参与开发工作，详见 GitHub Harry-Chen/Learn-Helper', MESSAGE_FORMAT)
}
// #endregion

export * from './crypto'
export * from './csrf'
export * from './download'
export * from './html'
export * from './storage'
export * from './format'
export * from './permission'
