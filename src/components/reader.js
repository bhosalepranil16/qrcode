import React, { useState } from 'react';
import QrcodeDecoder from 'qrcode-decoder';


import { Form, Button } from 'react-bootstrap';

const Reader = (props) => {
    const [buffer,setBuffer] = useState(null);

    const captureFile= (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setBuffer(Buffer.from(reader.result));
        }

    }

    const decode = async (e) => {
        e.preventDefault();
        console.log(buffer);

    }

    return(
        <Form>
            <Form.Group className="p-5">
                <Form.Label className="h3">Enter QR Code image</Form.Label>
                <Form.Control type="file" onChange={(e) => { captureFile(e); }} />
                <Button variant="primary" onClick={(e) => { decode(e); }}>Click</Button>
            </Form.Group>
        </Form>
    );
}

export default Reader;