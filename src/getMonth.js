export function getMonth(n) {
    if (n === 1) return 'январь - 31 день';
    if (n === 2) return 'февраль - 28 дней';
    if (n === 3) return 'март - 31 день';
    if (n === 4) return 'апрель - 30 дней';
    if (n === 5) return 'май - 31 день';
    if (n === 6) return 'июнь - 30 дней';
    if (n === 7) return 'июль - 31 день';
    if (n === 8) return 'август - 31 день';
    if (n === 9) return 'сентябрь - 30 дней';
    if (n === 10) return 'октябрь - 31 день';
    if (n === 11) return 'ноябрь - 30 дней';
    if (n === 12) return 'декабрь - 31 день';
    return 'неизвестно';
}



