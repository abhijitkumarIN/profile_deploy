import React, { FC } from 'react'
import { Button as Btn} from "@material-tailwind/react";
interface props {
    className?: string,
    children?: React.ReactNode
}
export default function Button({ className, children }: props) {
    return (
        <React.Fragment>
            <Btn className={className}>
                {
                    children
                }
            </Btn>
        </React.Fragment >
    )
}


// const ButtonCustome: React.FC<props> = ({ name, age }) => {
//     return (
//         <React.Fragment>

//         </React.Fragment>
//     )
// }