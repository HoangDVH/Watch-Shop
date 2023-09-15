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
                  src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/109120534_2676183315955021_4299283605561251768_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=A3T0g2DVDxIAX-lDUmS&_nc_ht=scontent.fsgn5-1.fna&oh=00_AfBX_0pdncYev0lINtDvcG8Os_VlB90oyS6QPBCCsBxMNA&oe=652BCCC6"
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
