import styled from "styled-components";

export const StyledLogin = styled.div`
  font-family: "Kaushan Script", cursive;
  display: flex;
  justify-content:flex-end;
  height: 100vh;
  padding: 40px 0;
  padding-right:105px;

  /* background: linear-gradient(to bottom, #e29b9c, #e1eec3); */
  background-image: url("./img/headerBcg.jpeg");
  background-repeat: center;
  background-size: cover;
  height:800px;
  h2{
      text-align:center;
      margin-bottom:10px;
  }
  form {
    width: 30%;
    max-width: 600px;
    padding: 40px;
    background-color: #c1e2e600;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }

  button {
    display: block;
    background-color: #ef7998;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
  }
  input {
    display: block;
    width: 100%;
    background-color: rgb(238, 238, 238);
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
  }
`;
export default StyledLogin