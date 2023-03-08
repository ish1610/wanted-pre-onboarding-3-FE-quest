import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectIsLogin } from "../store/loginStore";
import { IAuthorizationProps } from "../types/login";

const Authorization: React.FC<IAuthorizationProps> = ({ children, layout }) => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLogin);

  // login을 하지 않은 경우 login 페이지로 이동
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return <div>{children}</div>;
};

export default Authorization;
