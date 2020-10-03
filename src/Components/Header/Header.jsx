import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light header__custom">
                <a className="navbar-brand" href="#"><img className="img-fluid" src="./img/web-logo.png" alt /></a>
                <div className="collapse navbar-collapse" id="movieNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Lịch chiếu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cụm rạp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tin tức</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ứng dụng</a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="movieNavbar">
                    <a href="#" className="header__login ml-auto">
                        <span className="icon__login"><i className="fa fa-user-circle" /></span>
        Đăng Nhập
      </a>
                    <div className="form-group ml-4 mt-3">
                        <select className="form-control" name id>
                            <option>Hồ Chí Minh</option>
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                        </select>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavbar" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </nav>
        </header>

        </div>
    )
}
