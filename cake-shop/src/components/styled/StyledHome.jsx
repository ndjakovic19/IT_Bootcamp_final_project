import styled from "styled-components";

export const StyledHome = styled.div`
    position:relative;
    width:100%;
    margin:auto;
    padding-top: 20px;
    padding-bottom: 30px;

img {
    width:100%;
}

h2 {
    padding: 55px 0;
    width: 670px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.12);

    color: white;
    font-size: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    :before {
        content: "";
        display: block;
        width: 100px;
        height: 50px;
        border: 3px solid #fff;
        border-bottom: none;
        border-right: none;
        top: 10px;
        left: 10px;
        position: absolute;
    @media (max-width: 425px){
        width: 70px;
        height: 30px;
        }
    
    }

    :after {
        content: "";
        display: block;
        width: 100px;
        height: 50px;
        border: 3px solid #fff;
        border-top: none;
        border-left: none;
        right: 10px;
        bottom: 10px;
        position: absolute;
            @media (max-width: 425px){
            width: 70px;
            height: 30px;
            }
    }
    span{
        color: #ef7998;
    }

    @media (max-width: 768px){
        width: 550px;
        height: 200px;
        font-size: 40px;
    }
    @media (max-width: 576px){
        width: 400px;
        height: 150px;
        font-size: 30px;
    }
    @media (max-width: 425px){
        width: 300px;
        height: 137px;
        font-size: 25px; 
        padding-bottom : 20px;
    }
    @media (max-width: 375px){
        width: 300px;
        height: 100px;
        font-size: 25px; 
        padding-bottom : 20px;
        padding-top : 35px;
    }
}   

.indicators{
        margin-top:-20px!important;
}

`