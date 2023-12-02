class CreateElement {
    _element
    create(params) {
        this._element = document.createElement(params.tag)
        this._element.classList.add([params.className])
        this._addListener(params)
        return this._element
    }

    _addListener(params) {
        if ('listener' in params) {
            params.listener.forEach(({ type, callback }) => {
                this._element.addEventListener(type, callback)
            })
        }
    }

}

export default CreateElement
