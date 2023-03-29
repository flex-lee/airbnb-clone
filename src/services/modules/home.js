import Lfrequest from "..";

export function getHomeGoodPriceData(){
    return Lfrequest.get({
        url:"/home/goodprice"
    })
}