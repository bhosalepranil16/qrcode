import React, { useState } from 'react';

import QrCode from 'qrcode-reader';
import Jimp from 'jimp';

import { Form, Button, Container } from 'react-bootstrap';

const Reader = (props) => {
    const [buffer,setBuffer] = useState(null);
    const [result,setResult] = useState('');

    const captureFile= (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setBuffer(Buffer.from(reader.result));
        }
    }

    const decode = async (event) => {
        try {
            event.preventDefault();
            const qr = new QrCode();
            qr.callback = function(e, value) {
                if (e) {
                    window.alert(e.message);
                }
                setResult(value.result);
            };
            const image = await Jimp.read(buffer);
            qr.decode(image.bitmap);
        }
        catch(err) {
            window.alert(err.message);
        }
    }

    return(
        <Container>
            <Form>
                <Form.Group className="p-5">
                    <Form.Label className="h3 p-2">Enter QR Code image</Form.Label>
                    <Form.Control type="file" className="p-2" onChange={(e) => { captureFile(e); }} />
                    <Button variant="primary" className="d-block mx-auto p-2" onClick={(e) => { decode(e); }}>Decode</Button>
                </Form.Group>
            </Form>
            <h1 className="text-primary text-center">{result}</h1>
        </Container>
    );
}

export default Reader;