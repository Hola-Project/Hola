import React from 'react';

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Log out
      </button>
    )
  );
}

export default LogoutButton;
