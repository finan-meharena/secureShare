import React, { useRef } from 'react';

import { BeakerIcon } from '@heroicons/react/24/solid'


import "./Upload.css"
    

import { AiFillPlusCircle, AiFillRightCircle, AiOutlinePlus } from 'react-icons/ai';


export default function Upload() {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (

        <div className="upload-container">
            <div>
                <h3>Upload Files</h3>
            </div>
            <div className="upload">
                <button type=''>
                    <AiOutlinePlus width={50} color="green" />
                </button>
        
            </div>
        </div>  
    )
}