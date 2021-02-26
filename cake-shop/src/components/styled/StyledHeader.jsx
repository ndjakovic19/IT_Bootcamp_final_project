import styled from "styled-components";

export const StyledHeader = styled.header`

  .container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      /* margin-right: auto;
      margin-left: auto; */
      margin-bottom: 20px;
  }
  .row {
      justify-content: space-between !important;
      background-color: #f8f9fa;
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
  }

  .phone-info {
      display: block;
      color: #333;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 100px;
      font-size: 18px;
  }

    
  .logout{
    margin-left:15px;
    background-color:transparent;
    border-radius: 5px;
    height: 30px;
    padding: 0 10px;

  }
  .welcome {
    font-size: 18px;
  }

  .login {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-right: 100px;
  }

  .login a {
      margin-right: 10px;
      font-size: 18px;
  }
  .navbar {
      justify-content: start;
      background-color: #fff;
      position: relative;
      display: flex;
      align-items: center;
  }
  .navbar-brand {
      display: inline-block;
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: 1rem;
      font-size: 1.25rem;
      line-height: inherit;
      white-space: nowrap;
  }
  .navbar-brand img {
      margin-top: 10px;
      padding-left: 85px;
      display: block;
      max-width: 100%;
  }

  nav ul {
      flex-direction: row;
      text-align: center;
      display: flex;
      margin-bottom: -25px;
      padding-left: 35px;
  }

  .list-reset {
      margin-left: 10px;
      font-size: 30px;
      list-style: none;
  }

  a {
      color: #ef7998;
      transition: all 0.5s ease-in-out;

    :hover {
      color: black;
    }
  }

  .search-cart-holder {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: 100px;
      right: 115px;
  }
  .search {
      position: relative;
      top: 4px;
      margin-right: 10px;
  }
  .form-control {
      display: block;
      border: none;
      border-bottom: 1px solid #ccc;
      border-radius: 0;
      box-shadow: none;
      width: 140px;
      height: 24px;
  }
  .form-control:focus {
      outline: none;
      box-shadow: none;
      border-bottom: 1px solid black;
  }

  .btn {
      background-image: url("../img/search-icon.png");
      background-repeat: no-repeat;
      display: block;
      width: 20px;
      height: 19px;
      box-shadow: none;
      border: none;
      position: absolute;
      top: 2px;
      right: 2px;
      background-color: white;
  }
  .btn:focus {
      outline: none;
      box-shadow: none;
      border-color: #cccccc;
  }
  .cart {
      position: relative;
      display: inline-block;
  }
  .cart img {
      vertical-align: middle;
      border: 0;
  }
  .badge {
      display: inline-block;
      position: absolute;
      right: -8px;
      bottom: -8px;
      background-color: #ef7998;
      padding: 4px 6px 3px;
      border-radius: 10px;
      color: white;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
  }

  .spikes {
      position: relative;
      background: #f8f9fa;
  }

  .spikes::after {
      content: '';
      position: absolute;
      right: 0;
      left: -0%;
      top: 100%;
      z-index: 10;
      display: block;
      height: 35px;
      background-size: 35px 100%;
      background-image: linear-gradient(135deg,  #f8f9fa 25%, transparent 25%), linear-gradient(225deg,  #f8f9fa 25%, transparent 25%);
      background-position: 0 0;
}
`
