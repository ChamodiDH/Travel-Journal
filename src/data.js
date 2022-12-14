import { getByPlaceholderText } from "@testing-library/react";

export default [
    {
        id: 1,
        title: "Mount Fuji",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        date: "12 Jan, 2021 - 24 Jan, 2021",
        coverImg: "fuji.jpg",
        location: {
            locImg: "place.png",
            country:"JAPAN",
            map: "https://goo.gl/maps/ECASHPZBqKbXwgkF7"
        },
        
    },
    {
        id: 2,
        title: "Sydney Opera House",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        date: "27 May, 2021 - 8 Jun, 2021",
        coverImg: "opera.jpg",
        location: {
            locImg:"place.png",
            country:"AUSTRAILIYA",
            map: "https://goo.gl/maps/zLpt89SbsHmaqm488"
        },
        
    },
    {
        id: 3,
        title: "Geirangerfjord",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        date: "01 Oct, 2021 - 18 Nov, 2021",
        coverImg: "gn.jpg",
        location: {
            locImg: "place.png",
            country:"NORWAY",
            map: "https://goo.gl/maps/rjM6Zu9Finhm7aAo7"
        },
        
    }
]