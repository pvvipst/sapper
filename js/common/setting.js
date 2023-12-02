const CLASS_LIST = {
    FIELD_CELL: 'cell',
    FIELD_ROW: 'row'
}

const TYPE_CELL = {
    mine: 'mine',
    empty: 'empty',
    value: 'value'
}

const random = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

const TYPE_MOUSE_CLICK = {
    LEFT: 'left',
    RIGHT: 'right'
}

const EVENT_MOUSE_CLICK = {
    0: TYPE_MOUSE_CLICK.LEFT,
    2: TYPE_MOUSE_CLICK.RIGHT
}

export {
    CLASS_LIST,
    TYPE_CELL,
    TYPE_MOUSE_CLICK,
    EVENT_MOUSE_CLICK,
    random
}
