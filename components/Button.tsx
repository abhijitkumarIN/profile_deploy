import React, { FC } from 'react'
import Image from 'next/image'
interface props {
    name?: string,
    age?: number | string,
    children?: React.ReactNode
}
export default function Button({ name, age, children }: props) {
    console.log(name, age, "====> it is your name ")
    return (
        <React.Fragment>
        <Image
        src="/engineering-education/authors/worawat-kaewsanmaung/avatar_hu1fbbb092ce580211d9cc9e898cd2cbdd_53966_180x0_resize_q75_box.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
        <React.Fragment>


    {
        children
    }
            </React.Fragment >
        </React.Fragment >
    )
}


// const ButtonCustome: React.FC<props> = ({ name, age }) => {
//     return (
//         <React.Fragment>

//         </React.Fragment>
//     )
// }