import styled from "styled-components";

export const StyledRegister = styled.div`
font-family: "Kaushan Script", cursive;
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    border: 3px solid #f1f1f1;
    z-index: 20;
    width:600px;
    min-height: 1px;;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    transform: translate(-50%,-50%);
    border-radius: 10px;
    background-color: #f8f9fa;
    transition: 0.5s ease-in-out;
    background-image: url("https://res.cloudinary.com/dwgzh4kmx/image/upload/v1614604441/Pink_Cake_Birthday_Card_3_dmjtc6.jpg");
    background-repeat: center;
    background-size: cover;

    h2{
        text-align:center;
        margin-bottom:10px;
    }
    
    .forma{
    width: 100%;
    padding: 40px;
    box-sizing: border-box; 
    }


input{
    display: block;
    width: 100%;
    background-color: #f8f9fa6b;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
    :focus{
        outline:none;
    }
}
.error{
    color: #ef7998;
    margin-bottom:20px;
}
button{
    display: block;
    background-color: #ef7998;
    color: #fff;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size:18px;
    margin-bottom: 10px;
    :focus{
        outline:none;
    }
}

.x-button-form{
 position:absolute;
 top:10px;
 right:10px;
 font-size:25px;
}
`
