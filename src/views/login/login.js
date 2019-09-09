import React, { useState } from 'react';
import style from './login.module.css';
import classnames from 'classnames';

import { Form, Icon, Button } from 'semantic-ui-react'

export default function Login() {
    return (
        <div className={style["login-box"]}>
            <div className={style["login-center"]}>
                <div className={style["login-title"]}>
                    VLOVE PTPLE
                </div>
                <Form>
                    <div className={style["login-item"]}>
                        <Form.Group>
                            <Icon color='orange' name='mobile alternate' size='big' />
                            <Form.Input placeholder='your account' width={12} />
                        </Form.Group>
                    </div>
                    <div className={style["login-item"]}>
                        <Form.Group>
                            <Icon color='blue' name='home' size='big' />
                            <Form.Input type='password' placeholder='your password' width={12} />
                        </Form.Group>
                    </div>
                    <div>
                        <Button basic color='orange' content='登录' />
                        <Button basic color='yellow' content='注册' />
                        <Button basic color='olive' content='注销' />
                        <Button basic color='green' content='找回' />
                        <Button basic color='teal' content='投诉' />
                        <Button basic color='blue' content='反馈' />
                    </div>
                </Form>
            </div>
        </div>
    )
}