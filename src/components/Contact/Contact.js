import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Form, Btn, Input, Container, Label, Img, TextArea } from './ContactStyles'

export default function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_ygt6ome",
            "template_h2xqhi4",
            formRef.current,
            "user_395Jt1KFJ2YEXjyLO06mT"
        )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            },
                (error) => {
                    console.log(error.text);
                });
    };
    return (
        <Section id='contact'>
            <SectionDivider />
            <SectionTitle >Contact Me</SectionTitle>
            <Container ref={formRef} onSubmit={handleSubmit}>
                <Img src='../../images/mailz.jpeg' />
                <Form >
                    <Label style={{ margin: "20px", marginTop: "20px" }}>Name</Label>
                    <Input type="text" name="user_name" />
                    <Label style={{ margin: "20px", marginTop: "20px" }}>Subject</Label>
                    <Input type="text" name="user_subject" />
                    <Label style={{ margin: "20px", marginTop: "20px" }}>Email</Label>
                    <Input type="text" name="user_email" />
                    <Label style={{ margin: "20px", marginTop: "20px" }}>Message</Label>
                    <TextArea type="text" name="message" />
                    <Btn>Send<FaTelegramPlane></FaTelegramPlane></Btn>
                    {done && "email send"}
                </Form>
            </Container>
        </Section>
    )
}