'use client'
import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';

const Contact = () => {
    return (
        <>
            <div id="contato" className="text-[#ffffff] font-roboto pt-[60px] pb-[60px] flex">
                <Container className="">
                    <Row className="mb-5 mt-3">
                        <Col lg='8'>
                            <h1 className="display-4">
                                Contato
                            </h1>
                        </Col>
                    </Row>
                    <Row className="sec_sp flex justify-evenly mb-20">
                        <Col lg='5' className="">
                            <address>
                                <p className="flex items-center">
                                    <TfiEmail className="mr-3 text-[#d0d0d0]" />
                                    euvictor_h@hotmail.com
                                </p>
                                <p className="flex items-center">
                                    <BsTelephone className="mr-3 text-[#d0d0d0]" />
                                    +55 21 9 8026-0633
                                </p>
                                <p className="flex items-center">
                                    <BsTelephone className="mr-3 text-[#d0d0d0]" />
                                    +55 21 9 9180-1281
                                </p>
                            </address>
                            <br />
                            <hr />
                            <div className="flex items-center justify-start mt-20">
                                <div className="bg-[#dad7d7] rounded-full p-2 ml-1">
                                    <FaInstagram className="w-4 h-4 text-[#000]" />
                                </div>
                                <div className="bg-[#dad7d7] rounded-full p-2 ml-1">
                                    <FaLinkedinIn className="w-4 h-4 text-[#000]" />
                                </div>
                                <div className="bg-[#dad7d7] rounded-full p-2 ml-1">
                                    <FaTelegramPlane className="w-4 h-4 text-[#000]" />
                                </div>
                                <div className="bg-[#dad7d7] rounded-full p-2 ml-1">
                                    <FaWhatsapp className="w-4 h-4 text-[#000]" />
                                </div>
                            </div>
                        </Col>
                        <Col lg='7' className="d-flex align-items-center">
                            <form className="contact_form w-96">
                                <Row>
                                    <Col lg='6' className="form-group">
                                        <input className="form-control"
                                            id="name"
                                            name="nome"
                                            placeholder='Nome'
                                            type="text"
                                        />
                                    </Col>
                                    <Col lg='6' className="form-group">
                                        <input className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder='Email'
                                            type="email"
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <textarea
                                    className="form-control rounded-0" id="message"
                                    name="message"
                                    placeholder='Message'
                                    rows={5}
                                >
                                </textarea>
                                <br />
                                <Row>
                                    <Col lg="12" className="form-group">
                                        <button className="bg-[#fff] text-black rounded-md cursor-pointer p-2 active:bg-[#dadada]"
                                            type="submit">
                                            Enviar
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    )
};



export default Contact;