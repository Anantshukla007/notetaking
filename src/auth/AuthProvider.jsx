import React, { createContext, useState, useEffect } from "react";
import { createAuth0Client } from "@auth0/auth0-spa-js"; 

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth0Client, setAuth0Client] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0 = await createAuth0Client({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        cacheLocation: "localstorage",
        useRefreshTokens: true,
      });

      setAuth0Client(auth0);

      // handle redirect
      if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
        await auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const auth = await auth0.isAuthenticated();
      setIsAuthenticated(auth);

      if (auth) {
        const u = await auth0.getUser();
        setUser(u);
      }

      setLoading(false);
    };

    initAuth0();
  }, []);

  const login = async () => {
    if (!auth0Client) return;
    await auth0Client.loginWithRedirect();
  };

  const logout = () => {
    if (!auth0Client) return;
    auth0Client.logout({ returnTo: window.location.origin });
  };


  return (
    <AuthContext.Provider value={{ auth0Client, isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
