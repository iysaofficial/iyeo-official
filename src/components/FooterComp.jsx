import '../assets/css/Footer.css'

const FooterComp = () =>{
    return(
    <>
    <footer>
      <div class="container">
        <div class="wrapper">
          <div class="footer-widget">
            <h6 className='logo'>International Youth Economy Olympiad</h6>
            <p class="desc">
             
            </p>
            <ul class="socials">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/iye.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                        <i class="fab fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@iysa.official" target='_blank'>
                        <i class="fab fa-tiktok"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Information Links</h6>
            <ul class="links">
                <li><a href="#contact-section">Contact</a></li>
                <li><a href="https://iysa.or.id" target='_blank'>IYSA Main Website</a></li>
                <li><a href="https://iysaolympiad.or.id" target='_blank'>IYSA Olympiad Website</a></li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Navigation</h6>
            <ul class="links">
                <li><a href="/">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#category">Category</a></li>
                {/* <li><a href="#">Guide Book</a></li> */}
                <li><a href="#contact-section">Contact</a></li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Office</h6>
            <ul class="links">
                <li><a href="https://wa.me/+6283870026877">+6283870026877</a></li>
                {/* <br /> */}  
                <li><a href="mailto:iysa.olympiad@gmail.com">iysa.olympiad@gmail.com</a></li>
                {/* <br /> */}
                <li><a href="https://goo.gl/maps/9x18coXGCmSscKec6">Jl. Kemang No. 63 RT 03 RW 06</a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
    <div class="copyright-wrapper">
        <p>
            Copyright © 2024 IYEO Official. All rights reserved
        </p>
    </div>
    </>
    )
}

export default FooterComp