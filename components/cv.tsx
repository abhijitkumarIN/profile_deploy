import React from 'react';
import {
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { RedirectOutSide } from '../utils';
import { useReactToPrint } from 'react-to-print';
export default function Cv() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const componentRef = React.useRef<HTMLInputElement>(null)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,

    });
    return (
        <React.Fragment>
            {/* dailog */}

            <Dialog className=' dark:bg-bg-dark rounded-md' open={open} handler={handleOpen}>
                <DialogBody className=' dark:bg-bg-dark rounded-md'  >
                    <DialogHeader><h3 className=' text-lg dark:text-white'>Are sure want to download it ?</h3></DialogHeader>
                </DialogBody>
                <DialogFooter className=' dark:bg-bg-dark rounded-md' >
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" onClick={handlePrint}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            {/* dailog has been finshed  */}
            <div className='lg:px-12 md:px-3 px-1'>
                <div className="flex justify-end">
                    <Button onClick={handleOpen} variant="gradient">
                        Get it ?
                    </Button>
                </div>
            </div>
            <div className='lg:px-12 md:px-3 px-1' ref={componentRef}>
                <div className=' mt-3 ' >
                    <div className='flex rounded-md border dark:border-dark dark:bg-bg-dark p-3 justify-between'>
                        <div className=''>
                        </div>
                        <div className=''>
                            <p className='dark:text-white font-semibold'>ABHIJIT KUMAR  </p>
                            <p className='dark:text-dark underline cursor-pointer' onClick={() => RedirectOutSide('mailto:abhijeetkumarlucknow@gmail.com?subject = Clients &body = Message"')}>abhijeetkumarlucknow@gmail.com</p>
                            <p className='dark:text-dark'>Chandarpur Malagaha 274306 Kushinagar , UP</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className='grid grid-cols-5 mt-3 px-2 '>
                        <div className='col-span-3'>
                            <section className='mb-2'>
                                <div className='text-lg font-semibold dark:text-white gap-4'>OBJECTIVE</div>
                                <article className='dark:text-dark'>
                                    Interest in programming and coding requiring conceptual and analytical thinking. I enjoy making highly optimised applications and real life problems solving automation

                                    i continuously emphasize exploring and solving problems
                                    That s the result of this. In the past I ve developed end to end satisfied optimised Admin & Dashboard and application for multinational clients with various kinds of tech tools
                                </article>
                            </section>
                            {/* education */}
                            <section className='my-3'>
                                <div className='text-lg font-semibold dark:text-white'>EDUCATION</div>
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>JP INTERMEDIATE COLLEGE KAPTANGANJ</div>
                                    <article className='dark:text-dark '>
                                        <p className='font-normal'>  2018
                                            10th SCIENCE</p>
                                        <p> 79.7%</p>
                                    </article>
                                </section>
                                {/* 12th */}
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>MAHATMA GANDHI INTER COLLEGE
                                        GORAKHPUR
                                    </div>
                                    <article className='dark:text-dark '>
                                        <p className='font-normal'> 2020
                                            12th SCIENCE
                                        </p>
                                        <p>74.3%</p>
                                    </article>
                                </section>
                                {/* bca */}
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>MANIPAL UNIVERSITY JAIPUR
                                    </div>
                                    <article className='dark:text-dark '>
                                        <p className='font-normal'> BCA
                                        </p>
                                        <p>8.2 SPGA</p>
                                    </article>
                                </section>
                            </section>
                            <section className='my-3'>
                                <div className='text-lg font-semibold dark:text-white'>PROJECTS</div>
                                <div className="">
                                    <section className='dark:text-dark pr-2'>
                                        During this journey i ve worked on various type projects still i would like to mention my few  project of those projects which i developed in each company
                                        these projec re mentioned below
                                    </section>
                                </div>
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>Ecomerce Site</div>
                                    <article className='dark:text-dark pr-2 '>
                                        It is React base Theme of Ecomerce Site which i develped with Tailwindcss , Redux-toolkit and Redux-persist
                                        it was first   fully-fleshed Ecomerce site which i developed at first time in my first company (spysr service Pvt Ltd)
                                    </article>
                                </section>
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>Travel & Hotel Booking Site  </div>
                                    <article className='dark:text-dark '>
                                        It was multi purpose theme of React application related Travel & tour and Hotel booking web application i devloped using
                                        Tailwindcss , Material UI styled-component etc .
                                    </article>
                                </section>
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>Theme</div>
                                    <article className='dark:text-dark '>
                                        In my First company i was worked on basically on Frontend where in initial time i devloped various information theme for automated CRM
                                        in NextJS framework so that was some major project of my first company which i liked to mentioned here
                                    </article>
                                </section>
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>DashBoard  CRM</div>
                                    <article className='dark:text-dark '>
                                        After that i joined Rbarn soft LLP where i got opportunity to work independently for Dashboard
                                        so far i  developed various Dashboard of variouse type and variouse perpuse using ReactJS , ViteJS framework and variouse tools like
                                        AntD , Redux-toolkit , Yup , React-hook-form , styled-component , Tailwindcss , Material-Tailwind , GraphJS and AntChart etc.
                                    </article>
                                </section>
                                <section className='my-3'>
                                    <div className='dark:text-white font-semibold'>Links</div>
                                    <article className='dark:text-dark mt-2 '>
                                        <ul className='pl-5'>
                                            <li className="italic underline cursor-pointer" onClick={() => RedirectOutSide('https://www.hackerrank.com/certificates/47ef4663e9d3')}>HackerRank</li>
                                            <li className="italic underline cursor-pointer" onClick={() => RedirectOutSide('https://github.com/lenwoper')}>GitHub</li>
                                        </ul>
                                    </article>
                                </section>
                            </section>
                        </div>
                        {/* second part */}
                        <div className='col-span-2'>
                            <section className='my-3'>
                                <div className='text-lg font-semibold dark:text-white'>SKILLS</div>
                                <article className='dark:text-dark my-2'>
                                    <p className='dark:text-white font-semibold'>Core </p>
                                    <ul className='pl-5'>
                                        <li>Data Structure</li>
                                        <li>Algorithms</li>
                                    </ul>
                                </article>
                                <article className='dark:text-dark my-2'>
                                    <p className='dark:text-white font-semibold'>Language </p>
                                    <ul className='pl-5'>
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                    </ul>
                                </article>
                                <article className='dark:text-dark my-2'>
                                    <p className='dark:text-white font-semibold'>Visual Layer FrameWork </p>
                                    <ul className='pl-5'>
                                        <li>ReactJS</li>
                                        <li>NextJS</li>
                                        <li>TailwindCss</li>
                                        <li>Maiterial-Tailwidcss</li>
                                        <li>Boostrap</li>
                                        <li>AntD</li>
                                    </ul>
                                </article>
                                <article className='dark:text-dark my-2'>
                                    <p className='dark:text-white font-semibold'>Logical Layer FrameWork </p>
                                    <ul className='pl-5'>
                                        <li>NodeJS</li>
                                        <li>ExpresJS</li>
                                        <li>MongoDB</li>
                                        <li>Django</li>
                                    </ul>
                                </article>
                                <article className='dark:text-dark my-2'>
                                    <p className='dark:text-white font-semibold'>Operation s Tools   </p>
                                    <ul className='pl-5'>
                                        <li>AWS</li>
                                        <li>Docker</li>
                                        <li>Git & Github</li>
                                        <li>VS code</li>
                                        <li>Fleet</li>
                                    </ul>
                                </article>
                                <article className='dark:text-dark my-2'>
                                    <p className='dark:text-white font-semibold'>Others   </p>
                                    <ul className='pl-5'>
                                        <li>Redux-Toolkit</li>
                                        <li>Redux-persist</li>
                                        <li>Yup , Joy </li>
                                        <li>React-hook-form</li>
                                    </ul>
                                </article>
                            </section>
                            <section className='my-3'>
                                <div className='text-lg font-semibold dark:text-white'>LANGUAGE</div>
                                <article className='dark:text-dark my-2'>
                                    <ul className='pl-5'>
                                        <li>Hindi</li>
                                        <li>Exceptional English</li>
                                    </ul>
                                </article>
                            </section>
                            <section className='my-3'>
                                <div className='text-lg font-semibold dark:text-white'>ACTIVITIES</div>
                                <article className='dark:text-dark my-2'>
                                    <ul className='pl-5'>
                                        <li>Reading</li>
                                        <li>Music Listening</li>
                                    </ul>
                                </article>
                            </section>
                            <section className='my-3'>
                                <div className='text-lg font-semibold dark:text-white'>INTERESTS</div>
                                <article className='dark:text-dark my-2'>
                                    <ul className='pl-5'>
                                        <li>Exploring</li>
                                        <li>Innovation</li>
                                        <li>Teaching</li>
                                    </ul>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
