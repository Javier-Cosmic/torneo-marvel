
export const colorBar = (health) => {
    switch (health) {
        case 40:
            return '#F5F72E';
        case 20:
            return '#FF2700';
        default:
            return '#3DA650';
    }
};

export const date = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    const dia = '0'+day
    const mes = '0'+month
    const fulldate = `${dia.slice(-2)}/${mes.slice(-2)}/${year}`

    return fulldate
}
