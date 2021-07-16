import React from 'react'
import styled from 'styled-components';
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderInfo({ text, breadcrumb }) {
    return (
        <Container>
            <Text>
                {text}
            </Text>
            <Tabs>
                <Breadcrumb className="mybreadcrumb">
                    {breadcrumb.map((item,index) => (
                        <Breadcrumb.Item style={{ color: 'white'}} href="#" active={!breadcrumb[index+1]}>{item}</Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </Tabs>
        </Container>
    )
}

export default HeaderInfo


const Container = styled.div`
    padding: 47px;
    background: url(https://fondation-bensalah.ma/wp-content/uploads/2020/12/header-pattern.png),#1D71B8;
    background-repeat: no-repeat;
    background-position: right;

    display : flex;
    align-items: center;
    justify-content: space-between;

`

const Text = styled.div`
    font_weight : bolder;
    font-size : 30px;
    color: white;
    text-transform: uppercase;
`

const Tabs = styled.div`

`