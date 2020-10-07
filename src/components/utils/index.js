
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
