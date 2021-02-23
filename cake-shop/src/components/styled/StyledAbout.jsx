import styled from "styled-components";


export const StyledAbout = styled.section`
    padding-top: 50px;
    .container {
     width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }

    .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    }

    .container-about{
     flex: 0 0 50%;
     max-width: 50%;
     position: relative;
     width: 100%;
     min-height: 1px;
     padding-right: 15px;
     padding-left:110px; 
     margin-right: auto!important;
     margin-left: auto!important;
     margin-bottom: 3rem!important;
     margin-top: 20px!important;

    h1{
        font-size:50px;
        text-align:left;
        margin-bottom:20px;
        text-transform: capitalize!important;
      }
        
    span{
        color:#ef7998;
        }

    p{
        color: #6c757d!important;
        width:75%;
        margin-bottom:20px;
    }

    button{
        text-transform: uppercase!important;
        background-color: transparent;
        text-align: center;
        padding:5px;
        font-size: 15px;
        line-height: 1.5;
        border-radius:5px;
        transition: all 0.5s ease-in-out;

    :hover{
        background-color:black;
        color:#ef7998;
    }
    :focus{
        box-shadow: 0 0 0 0.2rem rgb(108 117 125 / 50%);
        outline: 0;
    }

    }
}
  
    .google-map{
        width:50%;
        position: relative;
    
    :before {
    content: "";
    position: absolute;
    top: -1.5rem;
    left: -1.7rem;
    width: 576px;
    height: 388px;
    outline: 7px solid #9e9e9e94;
    z-index: -1;
    transition: all 1s ease-in-out;
    width: 576px;
    height: 388px;

    @media (max-width: 1137px){
        width: 450px;
        height: 338px; 
        }
    }
    :hover:before {
    top: 0;
    left: 0;
    }

    iframe{
        border:none;
        @media (max-width: 1137px){
        width: 450px;
        height: 338px; 
        }

        /* button.gm-control {
        background-color:#ef7998!important;
        } */
    }
 }

`