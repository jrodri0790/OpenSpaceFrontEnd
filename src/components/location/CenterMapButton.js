import LogoIcon from '../../assets/svg/logo-icon.svg'
import '../../styles/centered-map-button.css'

class CenterMapButton {

  constructor(controlDiv, map, centerFocus) {
    let controlUI = document.createElement('div')
    controlUI.className = 'center-btn'
    controlUI.title = 'Click to recenter the map'
    controlDiv.appendChild(controlUI)

    let controlText = document.createElement('div')
    controlText.className = 'center-btn-icon'
    controlText.style.backgroundImage = `url('${LogoIcon}')`
    controlUI.appendChild(controlText)

    controlUI.addEventListener('click', function () {
      map.setCenter(centerFocus)
    })
  }
}

export default CenterMapButton