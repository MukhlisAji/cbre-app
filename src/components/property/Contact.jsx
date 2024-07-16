import React from 'react';
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    CardBody,
} from "@material-tailwind/react";
import { FaSearch } from 'react-icons/fa';
import CustomTableMUI from '../shared/CustomTableMUI';
import { CONTACTDATADUMMY } from '../../lib/const/DummyData';

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Recently Viewed",
        value: "RecentlyViewed",
    }
];

const TABLE_HEAD = ["Name", "Contact Mailing Address", "Account Name", "Business Phone", "Mobile", "Email", "Status"];

export default function Contact() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Contact list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Contact
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {/* <Button variant="outlined" size="sm">
                            view all
                        </Button> */}
                        {/* <Button className="flex items-center gap-3 bg-c-dark-grayish hover:bg-c-teal" size="sm">
                            <AiOutlineUserAdd strokeWidth={2} className="h-4 w-4" /> Add Contact
                        </Button> */}

                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max ">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value} className="px-4 py-2 whitespace-nowrap">
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>

                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<FaSearch className="h-5 w-5" />}
                        />

                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">

                <CustomTableMUI tableHead={TABLE_HEAD} tableRows={CONTACTDATADUMMY} />
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
