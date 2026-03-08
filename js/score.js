const scale = 3;

export function score(rank, percent, minPercent) {
    if (rank > 150) return 0;
    if (rank > 60 && percent < 100) return 0;

    let baseScore =
        (1500 - 33 * (rank - 1)) *
        ((percent - (minPercent - 1)) / (100 - (minPercent - 1)));

    baseScore = Math.max(0, baseScore);

    if (percent !== 100) {
        return round(baseScore * (2 / 3));
    }

    return round(baseScore);
}

export function round(num) {
    return Math.round(num * 10 ** scale) / 10 ** scale;
}
