import { FaBorderStyle } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdHourglassEmpty, MdSubscriptions, MdEvent, MdShoppingBasket } from 'react-icons/md';
export const sidebar1 = [
    {
        id:1,
        list:'Order',
        icons:<MdShoppingBasket  width={25}
        color='#000000'/>
    },
    {
        id:2,
        list:'Subscription',
        icons:<MdSubscriptions  width={25}
        color='#000000'/>
    },
    {
        id:3,
        list:'Calender',
        icons:<MdEvent  width={25}
        color='#000000'/>,
    },
    {
        id:4,
        list:'Waitlist',
        icons:<MdHourglassEmpty  width={25}
        color='#000000'/>
    }
]