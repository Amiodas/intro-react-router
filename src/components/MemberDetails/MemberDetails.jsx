import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MemberDetails = () => {
    const memberDetails = useLoaderData();
    console.log(memberDetails)
    return (
        <div>
            <h3>Member Details</h3>
            <p>Member Name: {memberDetails.name}</p>
            <p>Phone: {memberDetails.phone}</p>
        </div>
    );
};

export default MemberDetails;