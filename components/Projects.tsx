import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function CardCostum() {
    return (
        <Card className="bg-white dark:bg-bg-dark ">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=1920&q=75"
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2  dark:text-white">
                    Cozy 5 Stars Apartment
                </Typography>
                <Typography  className="dark:text-dark">
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to Naviglio where you can enjoy the main night life in
                    Barcelona.
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small" className="dark:text-dark">Jan 22 - 2003</Typography>
                <Typography variant="small" color="gray" className="flex gap-1 dark:text-dark">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Barcelona, Spain
                </Typography>
            </CardFooter>
        </Card>
    )
}