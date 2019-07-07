export default {
    today(){
        let date = new Date()
        date.setMonth(date.getMonth()+1)
        let today = date.getFullYear()+"-"+date.getMonth()+'-'+date.getDate()
        return today
    },
    oneWeekAgo(){
        let date = new Date()
        date.setMonth(date.getMonth()+1)
        date.setTime(date.getTime()-(7*24*3600000))
        return date.getFullYear()+"-"+date.getMonth()+'-'+date.getDate()
    },
    twoWeeksAgo(){
        let date = new Date()
        date.setMonth(date.getMonth()+1)
        date.setTime(date.getTime()-(14*24*3600000))
        return date.getFullYear()+"-"+date.getMonth()+'-'+date.getDate()
    },
    listDaysAgo(days_number){
        let date = new Date()
        date.setMonth(date.getMonth()+1)
        let listDays = []
        for(let i=0;i<days_number;i++){
            let day = date.getDate() > 10 ? date.getDate() : "0"+date.getDate()
            let month = date.getMonth() > 10 ? date.getMonth() : "0"+date.getMonth()
            listDays.push(date.getFullYear()+"-"+month+'-'+day)
            date.setTime(date.getTime()-(24*3600000))
        }
        return listDays.reverse()
    }
}
