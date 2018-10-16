import styled from 'styled-components';

export var Btn = styled('div')`
    width: 80px;
    height: 35px;
    background-color: rgb(245,245,255);
    border-radius: 25px 25px;
    border: 4px solid rgb(80,80,80);
    position: relative;
    opacity: 0.6;
    margin: 40px auto;
    cursor: pointer;
`;

export var Switch = styled('span')`
    display: block;
    padding-top: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50% 50%;
    position: absolute;
    background-color: rgba(255,20,20,1);
    transition: all 450ms ease;
    box-shadow: 3px 0 5px rgb(80,80,80);
    top: 0;
    left: 0;    
`;

export var SwitchActive = styled('span')`
    display: block;
    padding-top: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50% 50%;
    transition: all 450ms ease;
    box-shadow: 3px 0 5px rgb(80,80,80);
    background-color: rgb(100,255,100);
    box-shadow: -3px 0 5px rgb(80,80,80);
    position: absolute;
    top: 0;
    right: 0;    
`;