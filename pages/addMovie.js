import React, { useEffect, useState } from 'react';
import { Form, Input, Row, Col, Button, Select } from 'antd';
import movie_api from '../Actions/api/movie_api';
import PropTypes from 'prop-types';



function addMoive() {

    const createMovie = new_movie => {
        
        movie_api
            .createMovie(new_movie)
            .then(result => {
                notification.success({
                    message: 'Success',
                    description: result.data.message + '!',
                    placement: 'bottomRight',
                });
                
            })
            .catch(ex => {
                //TODO need proper error handling here
                notification.error({
                    message: 'Error',
                    description: ex.response.data.message,
                    placement: 'bottomRight',
                });
            });
    };

    useEffect(() => {
    }, []);
    return (
        <>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} md={24} style={{ textAlign: 'center' }}></Col>
            </Row>
            <div className="card-container">
                <Form
                    name="create_movie"
                    className="registration-section"
                    onFinish={v => {
                        createMovie(v);
                    }}
                    onFinishFailed={() => {}}>
                    <Form.Item
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input moive name',
                            },
                        ]}
                        hasFeedback>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="Description"
                        rules={[
                            {
                                required: false,
                                message: 'Please input movie description ',
                            },
                        ]}
                        hasFeedback>
                        <Input placeholder="Description" />
                    </Form.Item>
                    <Form.Item
                        name="TicketPrice"
                        rules={[
                            {
                                required: true,
                                message: 'Please input ticket price ',
                            },
                        ]}
                        hasFeedback>
                        <Input placeholder="Ticket Price" />
                    </Form.Item>
                   
                   

                    <Col xs={24} offset={18}>
                        <Form.Item className="mb-3">
                            <Button htmlType="submit" size="large" disabled={workingOnAddNew}>
                                {!workingOnAddNew ? 'Save' : 'Saving ....'}
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
            </div>
        </>
    );
}

AddUser.prototype.props = {
    saveNewUser: PropTypes.func.isRequired(),
    workingOnAddNew: PropTypes.bool.isRequired(),
    user_id: PropTypes.string.isRequired(),
};

export default AddUser;
