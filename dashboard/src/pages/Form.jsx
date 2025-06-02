import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Form() {
  return (
<div>

    {/* <Navbar/> */}
    {/* <Sidebar/> */}

      <div className="container-xxl position-relative bg-white d-flex p-0">
    <div className="content">
        
            {/* <!-- Form Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Basic Form</h6>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Horizontal Form</h6>
                            <form>
                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword3"/>
                                    </div>
                                </div>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                id="gridRadios1" value="option1" checked/>
                                            <label className="form-check-label" for="gridRadios1">
                                                First radio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                id="gridRadios2" value="option2"/>
                                            <label className="form-check-label" for="gridRadios2">
                                                Second radio
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Checkbox</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                            <label className="form-check-label" for="gridCheck1">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Floating Label</h6>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect">Works with selects</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" style={{height: "150px"}}></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">File Input</h6>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile"/>
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">Multiple files input example</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple/>
                            </div>
                            <div className="mb-3">
                                <label for="formFileSm" className="form-label">Small file input example</label>
                                <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                            </div>
                            <div>
                                <label for="formFileLg" className="form-label">Large file input example</label>
                                <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Select</h6>
                            <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select mb-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" multiple aria-label="multiple select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Check, Radio & Switch</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                <label className="form-check-label" for="inlineCheckbox1">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                <label className="form-check-label" for="inlineCheckbox2">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"
                                    disabled/>
                                <label className="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                            </div>
                            <hr/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Default checked radio
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                    value="option3" disabled/>
                                <label className="form-check-label" for="inlineRadio3">3 (disabled)</label>
                            </div>
                            <hr/>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox
                                    input</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckChecked" checked/>
                                <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox
                                    input</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDisabled" disabled/>
                                <label className="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox
                                    input</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckCheckedDisabled" checked disabled/>
                                <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked
                                    switch checkbox input</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Input Group</h6>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span className="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                            <label for="basic-url" className="form-label">Your vanity URL</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                <span className="input-group-text">.00</span>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                                <span className="input-group-text">@</span>
                                <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">With textarea</span>
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Sizing</h6>
                            <input className="form-control form-control-lg mb-3" type="text" placeholder=".form-control-lg"
                                aria-label=".form-control-lg example"/>
                            <input className="form-control mb-3" type="text" placeholder="Default input"
                                aria-label="default input example"/>
                            <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"
                                aria-label=".form-control-sm example"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Form End --> */}

    </div>
    </div>
    </div>
  )
}
