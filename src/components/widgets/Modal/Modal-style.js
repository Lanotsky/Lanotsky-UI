import styled from 'styled-components';

export var ModalContainer = styled('div')`
    background-color: rgba(5,5,5,0.4);
    position: fixed;
    height: 100%;
    width: calc(100% - 240px);   
    display: felx;
    align-items: center;
`;


export var ModalComponent = styled('div')`
    margin: 0 auto;
    height: 30%;
    width: 40%;
    display: block;
    box-sizing: border-box;
    background-color: rgb(245,245,245);
    box-shadow: 2px 2px 5px rgb(40,40,40);
`;

