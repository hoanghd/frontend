import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Symphony",
  description: "Symphony"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
      <head>
          <link href="//startbootstrap.github.io/startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
          <link href="//fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" type="text/css"/>
          <link href="//startbootstrap.github.io/startbootstrap-sb-admin-2/css/sb-admin-2.min.css" rel="stylesheet" type="text/css"/>
          <link href="/css/style.css" rel="stylesheet" type="text/css"/>
      </head>
      <body id="page-top">
        <div id="wrapper">
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                  <div className="sidebar-brand-icon rotate-n-15">
                      <i className="fas fa-laugh-wink"></i>
                  </div>
                  <div className="sidebar-brand-text mx-3">Symphony</div>
              </Link>
              <hr className="sidebar-divider"/>
              <li className="nav-item">
                  <Link className="nav-link" href="/">
                      <i className="fas fa-fw fa-tachometer-alt"></i>
                      <span>Tables</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" href="/suspense/">
                      <i className="fas fa-fw fa-cog"></i>
                      <span>Suspense</span>
                  </Link>
              </li>
              <hr className="sidebar-divider d-none d-md-block"/>
              <div className="text-center d-none d-md-inline">
                  <button className="rounded-circle border-0" id="sidebarToggle"></button>
              </div>
          </ul>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars"></i>
                </button>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" href="/">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                      <img className="img-profile rounded-circle" src="/img/undraw_profile.svg"/>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="container-fluid">
                  {children}
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2020</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
        </body>
      </html>
  )
}
