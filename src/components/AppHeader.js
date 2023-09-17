import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import Logo from '../assets/Website Assets/Logo.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-0">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <img src={Logo} style={{ marginBottom: '10px', marginRight: '5px' }} />
            <strong onClick={() => navigate('/home')} style={{ fontSize: '20' }}>
              SIMS PPOB
            </strong>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink onClick={() => navigate('/top-up')}>Top Up</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink onClick={() => navigate('/payment')}>Payment</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink onClick={() => navigate('/report')}>Transaction</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink onClick={() => navigate('/account')}>Akun</CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
