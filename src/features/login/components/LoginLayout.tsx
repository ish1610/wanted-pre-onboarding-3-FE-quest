import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../api/login";
import { userInfoAPI } from "../api/userInfo";
import useLogin from "../hooks/useLogin";
import { login } from "../store/loginStore";
import { ILoginProps } from "../types/login";
import { checkIdInput, checkPasswordInput } from "../utils/validation";
import LoginLayoutView from "./views/LoginLayoutView";

const LoginLayout = () => {
  const {
    inputValue: idInputValue,
    isValueValid: isIdValueValid,
    isInputFeedback: isIdInputFeedback,
    onChangeInputValue: onChangeIdInputValue,
    onBlurInput: onBlurIdInput,
    resetInputValue: resetIdInputValue,
  } = useLogin(checkIdInput);

  const {
    inputValue: passwordInputValue,
    isValueValid: isPasswordValueValid,
    isInputFeedback: isPasswordInputFeedback,
    onChangeInputValue: onChangePasswordInputValue,
    onBlurInput: onBlurPasswordInput,
    resetInputValue: resetPasswordInputValue,
  } = useLogin(checkPasswordInput);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginResponse = await loginAPI.login(
      idInputValue,
      passwordInputValue
    );
    if (!loginResponse) return;

    const userInfo = userInfoAPI.getUserInfo(loginResponse.token);
    if (!userInfo) return;

    // --------
    // 사용자 정보 저장 로직 ...
    // --------

    dispatch(login());
    resetIdInputValue();
    resetPasswordInputValue();
    navigate("/");
  };

  const loginProps: ILoginProps = {
    isLoginButtonDisabled: !isIdValueValid || !isPasswordValueValid,
    idInputValue,
    passwordInputValue,
    isIdInputFeedback,
    isPasswordInputFeedback,
    onChangeIdInputValue,
    onChangePasswordInputValue,
    onBlurIdInput,
    onBlurPasswordInput,
    onSubmitLoginForm: handleLoginFormSubmit,
  };

  return <LoginLayoutView {...loginProps} />;
};

export default LoginLayout;
