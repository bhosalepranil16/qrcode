import React, { useState } from 'react';
import QRCode from 'qrcode';

import { Form, Button, Image, Container } from 'react-bootstrap';

const Generator = (props) => {
    const [msg,setMsg] = useState('');
    const [imgSrc,setImgSrc] = useState(null);

    const getMessage = (e) => {
        setMsg(e.target.value);
    }

    const generateQR = async (e) => {
        e.preventDefault();
        try{
            const res = await QRCode.toDataURL(msg, { version: 10 });
            setImgSrc(res);
        } catch(err) {
            window.alert(err.message);
        }
    }

    return (
            <Container>
                <Form> 
                    <Form.Group className="p-4">
                        <Form.Label>Enter Your Message</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your text" value={msg} onChange={(e) => { getMessage(e); }}></Form.Control>
                    </Form.Group>
                    <Button variant="outline-primary d-block mx-auto" onClick ={(e) => { generateQR(e); } } >Generate</Button>
                    <a href={imgSrc} download={imgSrc} className="p-4">
                        <Image className="d-block mx-auto" src={imgSrc} style={{width: 200,height: 200}} />
                    </a>
                    <small className="form-text text-muted text-center">For downloading the Image click on Image.</small>
                </Form>
            </Container>
    );
}

export default Generator;