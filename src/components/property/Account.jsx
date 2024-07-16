import React, { useEffect, useState } from 'react';
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
import { ACOCUNTDATADUMMY } from '../../lib/const/DummyData';
import CustomTableMUI from '../shared/CustomTableMUI';

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

const TABLE_HEAD = ["Account Name", "Account Status With Site", "Local Account Name", "# of Active Opportunity", "SPOC", "Billing City", "Billing State Proivince"];

export default function Account() {
    const [sectionHeight, setSectionHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            const newHeight = screenHeight - 420;
            setSectionHeight(newHeight);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Card className="h-full w-full rounded-b-none">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Account list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Account
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
                <div style={{ height: `${sectionHeight}px` }}>
                    <CustomTableMUI tableHead={TABLE_HEAD} tableRows={ACOCUNTDATADUMMY} />
                </div>
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
