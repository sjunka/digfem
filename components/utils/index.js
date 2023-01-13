export const getDate = date => {
    const dateFormated = new Date(date);
    const year = dateFormated.getFullYear();
    const dayMonth = dateFormated.toLocaleString('es-ES', {
        day: 'numeric',
        month: 'long',
    });
    return `${dayMonth}, ${year}`;
};

export const getTotalPoints = movements => {
    return movements.reduce((total, movement) => {
        return movement.is_redemption
            ? total - movement.points
            : total + movement.points;
    }, 0);
};

export const getTrueMovements = movements => {
    return movements.filter(movement => movement.is_redemption === true);
};

export const getFalsyMovements = movements => {
    return movements.filter(movement => movement.is_redemption === false);
};
