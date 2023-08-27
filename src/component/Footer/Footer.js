import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <Container>
            <Row>
              <Col className="footer-container">
                <img
                  src="https://thanhhungwatch.vn/uploads/banner_th%C3%A0nh_h%C6%B0ng_watch_thw.png"
                  alt="hinhanh"
                ></img>
              </Col>
              <Col className="footer-container">
                <div className="footer-content">
                  <h2>chính sách chung</h2>
                  <p>Giới thiệu về chúng tôi</p>
                  <p>Chính sách về bảo hành</p>
                  <p>Chính sách đổi trả, hoàn tiền</p>
                  <p>Chính sách bảo mật thông tin</p>
                  <p>Quy định và hình thức thanh toán</p>
                  <p>Chính sách vận chuyển, kiểm hàng</p>
                </div>
              </Col>
              <Col className="footer-container">
                <img
                  src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.6435-9/72758591_2419598324946856_3540841347437035520_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=300f58&_nc_ohc=BhM_xaA_Q_IAX_Zfuzf&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfBlGYkXV0aPRlrdVCyISlKfBW-T1hQZHfbFLnWzlIAbig&oe=6502E55A"
                  alt="hinhanh"
                ></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-botom">
          <p>Showroom : Số 116 Tây Sơn, Đống Đa, Hà Nội</p>
          <p>Hotline mua hàng / Zalo : 0898 815 777 - 0382 247 888</p>
          <p>
            Nhà Phân Phối Độc Quyền Thương Hiệu Đồng Hồ KASSAW - LOBINNI -
            HAZEAL - PONIGER - TEINTOP - LORBERN - I&W CARNIVAL - LEONIDAS -
            BORDER Tại Việt Nam
          </p>
          <a href="http://online.gov.vn/Home/WebDetails/96497">
            <img
              src="https://thanhhungwatch.vn/uploads/icon_web_%C4%91%C4%83ng_k%C3%AD_b%E1%BB%99_c%C3%B4ng_th%C6%B0%C6%A1ng.png"
              alt="hinhanh"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
