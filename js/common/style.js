import {TYPE_CELL} from "./setting.js";

const STYLE_CELL = {
  [TYPE_CELL.mine]: '#c52d2d',
  [TYPE_CELL.value]: '#339b58',
  [TYPE_CELL.empty]: '#316f91'
}

const MINE = `<img src="../../assets/icons/mine.svg" alt=''/>`

export {
  STYLE_CELL,
  MINE
}
