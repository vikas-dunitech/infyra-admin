import Loader from "../../components/Loader"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            {/* <Loader /> */}

            <div id="main-wrapper">

                <Header />

                <SideBar />

                <div className="content-body">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="row">
                                    <div className="col-xl-7">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card">
                                                    <div className="card-body p-4 p-lg-3 p-xl-4">
                                                        <div className="students1 one d-flex align-items-center justify-content-between">
                                                            <div className="content">
                                                                <h2 className="mb-0">1000 ETH</h2>
                                                                <span className="mb-2 fs-14">Total Amount</span>
                                                                {/* <h5 className="fs-13">-2% than last month</h5> */}
                                                            </div>
                                                            <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                <img src="/src/assets/images/eth.png" width="50" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*<div className="card">
                                                  
                                                    <div className="card-body pb-4 pt-2">
                                                        <div className="progress default-progress">
                                                            <div className="progress-bar-primary rounded-0 bg-vigit progress-animated" style={{ width: '90%', height: '8px' }} role="progressbar">
                                                                <span className="sr-only">90% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>
                                            <div className="col-lg-4">
                                                 <Link to='/sell-node'>
                                                <div className="card">
                                                    <div className="card-body p-4 p-lg-3 p-xl-4 ">
                                                        <div className="students1 one d-flex align-items-center justify-content-between">
                                                            <div className="content">
                                                                <h2 className="mb-0">90,000</h2>
                                                                <span className="mb-2 fs-14">Sold Out Nodes <i className="fa fa-arrow-right"></i></span>
                                                                {/* <h5 className="fs-13">-2% than last month</h5> */}
                                                            </div>
                                                            <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                <img src="/src/assets/images/nodes.png" width="60" height="58" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="card">
                                                    <div className="card-body p-4 p-lg-3 p-xl-4 ">
                                                        <div className="students1 one d-flex align-items-center justify-content-between">
                                                            <div className="content">
                                                                <h2 className="mb-0">2000</h2>
                                                                <span className="mb-2 fs-14">Remaining Nodes</span>
                                                                {/* <h5 className="fs-13">-2% than last month</h5> */}
                                                            </div>
                                                            <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                <img src="/src/assets/images/nodes.png" width="60" height="58" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header border-0 flex-wrap">
                                                <h4 className="fs-18 font-w600">Your Balance Summary</h4>
                                                <div className="d-flex align-items-center">
                                                    <div className="round" id="dzNewSeries">
                                                        <input type="checkbox" id="checkbox" name="balance_summary" value="monthly" />
                                                        <label className="checkmark monthy"></label>
                                                        <span>Monthly</span>
                                                    </div>
                                                    <div className="round" id="dzOldSeries">
                                                        <input type="checkbox" id="checkbox1" name="balance_summary" value="weekly" />
                                                        <label className="checkmark weekly"></label>
                                                        <span>Weekly</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body py-0 custome-tooltip">
                                                <div className="d-flex align-items-center flex-wrap income">
                                                    <div className="d-flex align-items-center mb-2 me-3 arrow">
                                                        <div className="me-3">
                                                            <svg className="theme-col" width="45" height="45" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="26" cy="26" r="26" fill="var(--bs-body-bg)" />
                                                                <g clip-path="url(#clip0)">
                                                                    <path d="M34.9293 30.4004C34.9294 30.3966 34.9293 30.3927 34.9293 30.3889L34.9371 18.5152C34.9369 18.4212 34.9264 18.3275 34.906 18.2357L34.8284 17.9716L34.7507 17.8163L34.6653 17.7309C34.5585 17.5759 34.4243 17.4417 34.2693 17.3348L34.1916 17.2572L34.0984 17.164L33.8965 17.1019C33.783 17.0683 33.6654 17.0499 33.547 17.0475L21.6112 17.0708C20.8167 17.0676 20.17 17.7092 20.1668 18.5037C20.1668 18.5075 20.1668 18.5114 20.1668 18.5152C20.1853 19.3009 20.8178 19.9334 21.6035 19.9519L28.6935 19.9596C28.9967 19.9626 29.2402 20.2109 29.2372 20.5141C29.2358 20.6552 29.1802 20.7903 29.0818 20.8915L17.5187 32.4546C16.9568 33.0164 16.9568 33.9273 17.5186 34.4892C18.0804 35.0511 18.9913 35.0511 19.5532 34.4893C19.5533 34.4893 19.5533 34.4892 19.5534 34.4892L31.1164 22.9261C31.3338 22.7147 31.6815 22.7196 31.8929 22.937C31.9912 23.0382 32.0469 23.1733 32.0483 23.3144L32.0405 30.3889C32.0551 31.1805 32.6933 31.8188 33.4849 31.8333C34.2795 31.8365 34.9262 31.195 34.9293 30.4004Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath>
                                                                        <rect width="24" height="24" fill="white" transform="translate(26 9.02945) rotate(45)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <span className="fs-14">Sold Out Nodes</span>
                                                            <h4 className="fs-5 font-w600">459,234.08 ETH</h4>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center ms-sm-2 mb-2 arrow">
                                                        <div className="me-3">
                                                            <svg className="" width="45" height="45" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="26" cy="26" r="26" transform="rotate(-180 26 26)" fill="#5E3ED0" />
                                                                <g clip-path="url(#clip0)">
                                                                    <path d="M17.0707 21.5996C17.0706 21.6034 17.0707 21.6073 17.0707 21.6111L17.0629 33.4848C17.0631 33.5788 17.0736 33.6725 17.094 33.7643L17.1716 34.0284L17.2493 34.1837L17.3347 34.2691C17.4415 34.4241 17.5757 34.5583 17.7307 34.6652L17.8084 34.7428L17.9016 34.836L18.1035 34.8981C18.217 34.9317 18.3346 34.9501 18.453 34.9525L30.3888 34.9292C31.1833 34.9324 31.83 34.2908 31.8332 33.4963C31.8332 33.4925 31.8332 33.4886 31.8332 33.4848C31.8147 32.6991 31.1822 32.0666 30.3965 32.0481L23.3065 32.0404C23.0033 32.0374 22.7598 31.7891 22.7628 31.4859C22.7642 31.3448 22.8198 31.2097 22.9182 31.1085L34.4813 19.5454C35.0432 18.9836 35.0432 18.0727 34.4814 17.5108C33.9196 16.9489 33.0087 16.9489 32.4468 17.5107C32.4467 17.5107 32.4467 17.5108 32.4466 17.5108L20.8836 29.0739C20.6662 29.2853 20.3185 29.2804 20.1071 29.063C20.0088 28.9618 19.9531 28.8267 19.9517 28.6856L19.9595 21.6111C19.9449 20.8195 19.3067 20.1812 18.5151 20.1667C17.7205 20.1635 17.0738 20.805 17.0707 21.5996Z" fill="white" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath >
                                                                        <rect width="24" height="24" fill="white" transform="translate(26 42.9706) rotate(-135)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <span className="fs-14">Remaining Nodes</span>
                                                            <h4 className="fs-5 font-w700"> 23,456 ETH</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="reservationChart" className="reservationChart"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-5">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-4 col-md-6">
                                                <Link to='/active-nodes'>
                                                    <div className="card Expense overflow-hidden">
                                                        <div className="card-body p-4 p-lg-3 p-xl-4 ">
                                                            <div className="students1 one d-flex align-items-center justify-content-between ">
                                                                <div className="content">
                                                                    <h2 className="mb-0">100</h2>
                                                                    <span className="mb-2 fs-14">Active Node <i className="fa fa-arrow-right"></i></span>
                                                                    {/* <h5>+0,5% than last month</h5> */}
                                                                </div>
                                                                <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                    <img src="/src/assets/images/nodes.png" width="60" height="58" />
                                                                    {/* <svg width="60" height="58" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M39.0469 2.3125C38.3437 3.76563 38.9648 5.52344 40.418 6.22657C44.4609 8.17188 47.8828 11.1953 50.3203 14.9805C52.8164 18.8594 54.1406 23.3594 54.1406 28C54.1406 41.3125 43.3125 52.1406 30 52.1406C16.6875 52.1406 5.85937 41.3125 5.85937 28C5.85937 23.3594 7.18359 18.8594 9.66797 14.9688C12.0937 11.1836 15.5273 8.16016 19.5703 6.21485C21.0234 5.51173 21.6445 3.76563 20.9414 2.30079C20.2383 0.847664 18.4922 0.226569 17.0273 0.929694C12 3.34376 7.74609 7.09375 4.73437 11.8047C1.64062 16.6328 -1.56336e-06 22.2344 -1.31134e-06 28C-9.60967e-07 36.0156 3.11719 43.5508 8.78906 49.2109C14.4492 54.8828 21.9844 58 30 58C38.0156 58 45.5508 54.8828 51.2109 49.2109C56.8828 43.5391 60 36.0156 60 28C60 22.2344 58.3594 16.6328 55.2539 11.8047C52.2305 7.10547 47.9766 3.34375 42.9609 0.929693C41.4961 0.238287 39.75 0.84766 39.0469 2.3125V2.3125Z" fill="#53CAFD" />
                                                                        <path d="M41.4025 26.4414C41.9767 25.8671 42.258 25.1171 42.258 24.3671C42.258 23.6171 41.9767 22.8671 41.4025 22.2929L34.0314 14.9218C32.9533 13.8437 31.5236 13.2578 30.0119 13.2578C28.5002 13.2578 27.0587 13.8554 25.9923 14.9218L18.6212 22.2929C17.4728 23.4414 17.4728 25.2929 18.6212 26.4414C19.7697 27.5898 21.6212 27.5898 22.7697 26.4414L27.0939 22.1171L27.0939 38.7695C27.0939 40.3867 28.4064 41.6992 30.0236 41.6992C31.6408 41.6992 32.9533 40.3867 32.9533 38.7695L32.9533 22.1054L37.2775 26.4296C38.4025 27.5781 40.2541 27.5781 41.4025 26.4414Z" fill="#53CAFD" />
                                                                    </svg> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="col-xl-12 col-lg-4 col-md-6">
                                                <Link to='/inactive-nodes'>
                                                    <div className="card">

                                                        <div className="card-body p-4 p-lg-3 p-xl-4 ">
                                                            <div className="students1 one d-flex align-items-center justify-content-between">
                                                                <div className="content">
                                                                    <h2 className="mb-0">234</h2>
                                                                    <span className="mb-2 fs-14">Inactive Node <i className="fa fa-arrow-right"></i></span>
                                                                    {/* <h5 className="fs-13">-2% than last month</h5> */}
                                                                </div>
                                                                <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                    <img src="/src/assets/images/nodes.png" width="60" height="58" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="col-xl-12 col-lg-4 col-md-12">
                                                <div className="card overflow-hidden">
                                                    <div className="card-body p-4 p-lg-3 p-xl-4">
                                                        <div className="students1 three d-flex align-items-center justify-content-between">
                                                            <div className="content">
                                                                <h2 className="mb-0">10,0000</h2>
                                                                <span className="fs-14">Total Node</span>
                                                            </div>
                                                            <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                <img src="/src/assets/images/nodes.png" width="60" height="58" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 col-lg-4 col-md-12">
                                                <div className="card overflow-hidden">
                                                    <div className="card-body p-4 p-lg-3 p-xl-4">
                                                        <div className="students1 three d-flex align-items-center justify-content-between">
                                                            <div className="content">
                                                                <h2 className="mb-0">2000</h2>
                                                                <span className="fs-14">No. of Mined Tokens</span>
                                                            </div>
                                                            <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                                <img src="/src/assets/images/token.png" width="60" height="58" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>



                            {/* <Footer /> */}

                        </div>

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card">
                                    <Link to='/eth'>
                                        <div className="card-body p-4 p-lg-3 p-xl-4">
                                            <div className="students1 one d-flex align-items-center justify-content-between">
                                                <div className="content">
                                                    <h2 className="mb-0">2000</h2>
                                                    <span className="mb-2 fs-14">Today's ETH <i className="fa fa-arrow-right"></i></span>
                                                    {/* <h5 className="fs-13">-2% than last month</h5> */}
                                                </div>
                                                <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                    <img src="/src/assets/images/eth.png" width="50" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Link to='/eth'>
                                    <div className="card">
                                        <div className="card-body p-4 p-lg-3 p-xl-4">
                                            <div className="students1 one d-flex align-items-center justify-content-between">
                                                <div className="content">
                                                    <h2 className="mb-0">2000</h2>
                                                    <span className="mb-2 fs-14">Total ETH <i className="fa fa-arrow-right"></i></span>
                                                    {/* <h5 className="fs-13">-2% than last month</h5> */}
                                                </div>
                                                <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                    <img src="/src/assets/images/eth.png" width="50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}