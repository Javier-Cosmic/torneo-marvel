export const colorRandom = () => Math.floor(Math.random() * (3 - 1) + 1);


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

export const colorAura = (color) => {
    switch (color) {
        case 1:
            return 'rgba(12, 35, 240, 0.8)';
        case 2:
            return 'rgba(240, 65, 12, 0.8)';
        default:
            break;
    }
};