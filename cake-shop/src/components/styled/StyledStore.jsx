import styled from "styled-components";

export const StyledStore = styled.div`
    background-color: #f8f9fa;
    padding-top: 50px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom:50px;

    @media (max-width: 425px){
            padding:20px 0;
        }

.title-holder {
    text-align: center;
    margin: 0 auto;

    h1 {
        font-size: 50px;
        @media (max-width: 768px){
            font-size: 40px;
        }
        @media (max-width: 576px){
            font-size: 30px;
        }
        
        span {
            color: #ef7998;
        }
    }
}

.button-holder {
    text-align: center;
    margin-top: 25px;
    @media (max-width: 425px){
        margin-top: 5px;
        }
    button {
        text-transform: uppercase;
        background-color: transparent;
        text-align: center;
        padding: 5px 10px;
        font-size: 15px;
        line-height: 1.5;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        margin: 15px;
        @media (max-width: 768px){
            padding:5px;
            font-size: 12px;
        }
        @media (max-width: 576px){
            padding:3px;
        }
        
      :hover {
        background-color: black;
        color: #ef7998;
      }
      :focus {
        box-shadow: 0 0 0 0.2rem rgb(108 117 125 / 50%);
        outline: 0;
      }
    }
}

.wrap {
    width: 30%;
    margin: 25px auto;
    @media (max-width: 768px){
        width: 50%;
        }

.search {
    width: 100%;
    position: relative;
    display: flex;
}

.searchTerm {
    width: 100%;
    padding: 19px;
    height: 20px;
    color: #495057;
    border: 1px solid #ced4da;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-family: "Kaushan Script", cursive !important;
    font-size: 16px;

    :focus {
        color: #495057;
        background-color: #fff;
        border-color: #9e9e9e;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(158 158 158 / 30%);
        color: #495057;
    }
}

.searchButton {
    width: 40px;
    height: 40px;
    padding: 8px;
    border: 1px solid #ef7998;
    background: #ef7998;
    color: black;
    border-radius: 5px 0 0 5px;
    font-size: 20px;
}

}
  
`
