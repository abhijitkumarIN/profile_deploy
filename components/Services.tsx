import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";

export default function Services() {
    return (
        <div>
            <div className='lg:px-12 md:px-3 px-1'>
                <div className=' mt-3 '>

                    {/* form */}
                    <Card className="w-96 dark:bg-bg-dark">
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Our Message
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4">
                            <Input label="Email" size="lg" />
                            <Input label="Password" size="lg" />

                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button variant="gradient" fullWidth>
                                SEND
                            </Button>
                        </CardFooter>
                        <Typography variant="small" className="mt-1  mb-3 flex justify-center">
                            Dont have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </Card>
                </div>
            </div>
        </div>
    )
}
