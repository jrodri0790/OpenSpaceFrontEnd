import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import LogoIcon from './../assets/svg/logo-icon.svg'
import LinkButton from './buttons/LinkButton'
import '../styles/header.css'
import featureFlags from '../feature-flags/feature-flags'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSideMenu: false
    };
    this.showSideMenu = this.showSideMenu.bind(this);
    this.hiddeSideMenu = this.hiddeSideMenu.bind(this)
  }

  showSideMenu (e) {
    e.preventDefault()
    this.setState({ showSideMenu: true })
  }

  hiddeSideMenu (e) {
    this.setState({ showSideMenu: false })
  }

  scroll (el) {
    this.hiddeSideMenu()
    const offset = document.getElementById('sticky').offsetHeight
    window.scrollTo({ top: el.offsetTop - offset, left: 0, behavior: 'smooth' })
  }

  render () {
    const sideMenuClass = this.state.showSideMenu ? '' : 'hidden'
    const paymentUrl="https://bit.ly/XConfLA2018"
    const menuItems = (
      <div className="items">
        <NavHashLink to="/#keyNote" className={location.hash == "#keyNote" ? "active" : ""}
          scroll={el => this.scroll(el)}>KeyNote</NavHashLink>
        <NavHashLink to="/#agenda" className={location.hash == "#agenda" ? "active" : ""}
          scroll={el => this.scroll(el)}>Agenda</NavHashLink>
        <NavHashLink to="/#location" className={location.hash == "#location" ? "active" : ""}
          scroll={el => this.scroll(el)}>Ubicación</NavHashLink>
        <NavHashLink to="/#faq" className={location.hash == "#faq" ? "active" : ""}
          scroll={el => this.scroll(el)}>PREGUNTAS</NavHashLink>
        <NavHashLink className={featureFlags.open_space ? "" : "hidden"} to="/openSpace">OPEN SPACE</NavHashLink>
      </div>
    )
    return (
      <div className="nav sticky section-container">
        <header id="sticky" className="sticky">
          <div className="content-container">
            <div className="hidden-xs hidden-sm col-md-2 no-padding align-middle">
              <NavHashLink to="/#inicio" smooth className={location.hash == "#inicio" ? "active logo-icon-link black" : "logo-icon-link black"}
                scroll={el => this.scroll(el)}>
                <img className="logo-icon" src={LogoIcon} alt="Thoughtworks" />
                <span>INICIO</span>
              </NavHashLink>
            </div>
            <div className="hidden-xs hidden-sm links col-md-10 no-padding align-middle">
              {menuItems}
              <LinkButton class="header-purchase-button"
                          text="COMPRA TU ENTRADA" url={paymentUrl} />
            </div>
            <div className="hidden-md hidden-lg">
              <i className="fas fa-bars menu-logo" onClick={this.showSideMenu}></i>
              <LinkButton class="small-purchase-button" text="COMPRA TU ENTRADA" url={paymentUrl} />
            </div>
            <div className={'menu-side ' + sideMenuClass}>
              <i className="fas fa-times menu-close" onClick={this.hiddeSideMenu}></i>
              <NavHashLink to="/#inicio" smooth className={location.hash == "#inicio" ? "active" : ""}
                scroll={el => this.scroll(el)}>INICIO</NavHashLink>
              {menuItems}
            </div>
            <div className={'menu-overlay ' + sideMenuClass} onClick={this.hiddeSideMenu}></div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
