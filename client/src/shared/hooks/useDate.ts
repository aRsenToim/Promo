


export function useDate(date: Date){
    const newDate = new Date(date)
    const MonthName = {
        0: "Января",
        1: "Февраля",
        2: "Марта",
        3: "Апреля",
        4: "Мая",
        5: "Июня",
        6: "Июля",
        7: "Августа",
        8: "Сентября",
        9: "Октября",
        10: "Ноября",
        11: "Декабря"
    }
    return {
        day: newDate.getDay(),
        monthName: MonthName[+newDate.getMonth()],
        year: newDate.getFullYear()
    }
}