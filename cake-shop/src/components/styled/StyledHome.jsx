import styled from "styled-components";

export const StyledHome = styled.div`
position:relative;
width:100%;
margin:auto;
padding-top: 20px;

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
}
span {
        color: #ef7998;
    }

}

`