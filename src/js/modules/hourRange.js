export function hourRange(start, end) {
    const time = new Date();
    const elem = document.querySelector('[data-hour-range]');
    const curHour = time.getHours();
    const curMin = time.getMinutes();
    const now = `${curHour}` + '.' + `${curMin}`;
    return now >= start && now < end && elem.classList.add('hide');
}