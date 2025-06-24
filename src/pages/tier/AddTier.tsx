import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Select, { type StylesConfig } from 'react-select';

type OptionType = {
    value: string;
    label: string;
};

const customStyles: StylesConfig<OptionType, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    borderColor: state.isFocused ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.25)',
    borderRadius: '0.5rem',
    fontSize: '0.95rem',
    minHeight: '3.5rem',
    color: 'rgba(255, 255, 255, 1)', // fallback text color
  }),
  singleValue: (base) => ({
    ...base,
    color: 'rgba(255, 255, 255, 1)', // selected item text color
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};

const options: OptionType[] = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Completed', label: 'Completed' },
];

export default function AddTier() {

    return (
        <>
            <div id="main-wrapper">

                <Header />

                <SideBar />

                <div className="content-body">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Add Tier</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-md-4">
                                            <label className="form-label">Currency Id</label>
                                            <input type="password" className="form-control" placeholder="355" />
                                        </div>
                                        <div className="mb-3 col-md-4">
                                            <label className="form-label">No. of Nft</label>
                                            <input type="text" className="form-control" placeholder="1" />
                                        </div>
                                        <div className="mb-3 col-md-4">
                                            <label className="form-label">Price</label>
                                            <input type="email" className="form-control" placeholder="20 EHT" />
                                        </div>

                                        <div className="mb-3 col-md-4">
                                            <label>Status</label>
                                             <Select
    inputId="statusSelect"
    options={options}
    styles={customStyles}
    classNamePrefix="react-select form-control"
  />
                                        </div>

                                        <div className="mb-3 col-md-4">
                                            <label className="form-label">Start Date</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3 col-md-4">
                                            <label className="form-label">End Date</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}