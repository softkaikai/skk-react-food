import React, { useState } from 'react';
import style from './login.module.css';
import classnames from 'classnames';

import { Form, Icon, Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../fetch/login/login';

export default function Login(props) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const inputChange = function(field, e, data) {
        if (field === 'phone') {
            setPhone(data.value);
        } else {
            setPassword(data.value);
        }
    };

    const login = function() {

        loginApi({phone, password}).then(data => {
            if (data.code === '0') {
                props.history.push('/main', {name: 'kaikai', age: 123});
            } else {
                toast.error(data.msg);
            }
        });
    };

    const register = function() {
        registerApi({phone, password}).then(data => {
            if (data.code === '0') {
                toast.success('注册成功！');
                props.history.push('/main');
            } else {
                toast.error(data.msg);
            }
        });
    };

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
                            <Form.Input onChange={(e, data) => {inputChange('phone', e, data)}} placeholder='your account' width={12} />
                        </Form.Group>
                    </div>
                    <div className={style["login-item"]}>
                        <Form.Group>
                            <Icon color='blue' name='home' size='big' />
                            <Form.Input onChange={(e, data) => {inputChange('password', e, data)}} type='password' placeholder='your password' width={12} />
                        </Form.Group>
                    </div>
                    <div>
                        <Button onClick={login} basic color='orange' content='登录' />
                        <Button onClick={register} basic color='yellow' content='注册' />
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