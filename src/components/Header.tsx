import { useNavigate } from "react-router-dom";
import { route } from "../enums/route.enum";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(route.login);
  };
  return (
    <>
      <div className="nav-header">
        <a href="/" className="brand-logo">
          <div className="logo">
            <img
              src="/src/assets/images/Infyra-Logo2.png"
              className="logo-abbr"
              height="34"
            />
          </div>
        </a>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.7548 0.333313H20.7051C22.341 0.333313 23.6667 1.67014 23.6667 3.31994V7.30359C23.6667 8.95339 22.341 10.2902 20.7051 10.2902H16.7548C15.1188 10.2902 13.7932 8.95339 13.7932 7.30359V3.31994C13.7932 1.67014 15.1188 0.333313 16.7548 0.333313Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.29492 0.333313H7.24522C8.8812 0.333313 10.2068 1.67014 10.2068 3.31994V7.30359C10.2068 8.95339 8.8812 10.2902 7.24522 10.2902H3.29492C1.65894 10.2902 0.333313 8.95339 0.333313 7.30359V3.31994C0.333313 1.67014 1.65894 0.333313 3.29492 0.333313ZM3.29492 13.7097H7.24522C8.8812 13.7097 10.2068 15.0466 10.2068 16.6964V20.68C10.2068 22.3287 8.8812 23.6666 7.24522 23.6666H3.29492C1.65894 23.6666 0.333313 22.3287 0.333313 20.68V16.6964C0.333313 15.0466 1.65894 13.7097 3.29492 13.7097ZM20.705 13.7097H16.7547C15.1188 13.7097 13.7931 15.0466 13.7931 16.6964V20.68C13.7931 22.3287 15.1188 23.6666 16.7547 23.6666H20.705C22.341 23.6666 23.6666 22.3287 23.6666 20.68V16.6964C23.6666 15.0466 22.341 13.7097 20.705 13.7097Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">Dashboard</div>
              </div>

              <div className="dropdown header-profile2 header-right">
                <a
                  className="nav-link user-profile"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <div className="header-info2 d-flex align-items-center">
                    <img src="/src/assets/images/placeholder.jpg" alt="" />
                    <div className="d-flex align-items-center sidebar-info">
                      <div className="user-info">
                        <span className="font-w500 d-block  fs-5 text-white">
                          Adam Joe
                        </span>
                        <small className="text-end font-w400">Admin</small>
                      </div>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8334 1.08331L7.00002 6.91665L1.16669 1.08331"
                          stroke="#FFFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu profile dropdown-menu-end">
                  <a href="/" className="dropdown-item ai-icon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="ms-2">Profile </span>
                  </a>
                  <a href="/" className="dropdown-item ai-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-success"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="ms-2">Change Password </span>
                  </a>
                  <a
                    className="dropdown-item ai-icon cursor-pointer"
                    onClick={handleLogout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-danger"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="ms-2">Logout </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
