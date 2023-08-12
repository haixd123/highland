import React, { useEffect } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constands";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../../api";


const Authentication = ({ children } : { children: React.ReactNode}) => {
    const navigate = useNavigate();
  
    const checkAuth = async (refreshToken: string) => {
      try {
        const refreshTokenResponse = await postAPI({
          path: 'auth/refresh-token',
          body: {
            refreshToken,
          }
        });
        localStorage.setItem(ACCESS_TOKEN, refreshTokenResponse.data.accessToken);
      } catch (error) {
        console.log('error', error);
        navigate('/login');
      }
    }
  
    useEffect(function () {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (refreshToken === null) {
        navigate('/login');
      } else {
        checkAuth(refreshToken);
      }
    }, []);
  
    return <>{children}</>;
  }

export default Authentication;