import clsx from "clsx";
import styles from "./footer.module.scss";
import images from "../../../src/assets/images";
function Footer() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.Subitem)}>VỀ CHÚNG TÔI</div>

          <div className={clsx(styles.Subitem)}>Điện thoại: 070 2686 905</div>
          <div className={clsx(styles.Subitem)}>
            Email: daothevinh.tv@gmail.com
          </div>
          <div className={clsx(styles.Subitem)}>
            Địa chỉ: 01 Võ Văn Ngân Quận Thủ Đức
          </div>
        </div>

        <div className={clsx(styles.item)}>
          <div className={clsx(styles.Subitem)}>DỊCH VỤ HEY DOCTOR</div>

          <div className={clsx(styles.Subitem)}>Giới thiệu</div>
          <div className={clsx(styles.Subitem)}>Đăng kí tư vấn</div>
          <div className={clsx(styles.Subitem)}>Hướng dẫn khách hàng</div>
        </div>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.Subitem)}>HỖ TRỢ</div>

          <div className={clsx(styles.Subitem)}>Liên hệ</div>
          <div className={clsx(styles.Subitem)}>Bảo mật </div>
          <div className={clsx(styles.Subitem)}>Điều khoản</div>
        </div>
        <div className={clsx(styles.item)}>
          <div className={clsx(styles.Subitem)}>
            CÔNG TY CỔ PHẦN DỊCH VỤ Y TẾ HEY DOCTOR
          </div>

          <div className={clsx(styles.Subitem)}>Mã số thuế : 1912613948 </div>
          <div className={clsx(styles.Subitem)}>Ngày thành lập:20/02/2022</div>
          <div className={clsx(styles.Subitem)}>
            Lĩnh vực: Sức khỏe y tế. Hey Doctor xây dựng và phát triển những
            dịch vụ mang lại giá trị cho cộng đồng.
          </div>
        </div>
      </div>
      <div className={clsx(styles.end)}>
        <div>© 2022 - 2022 . Địa điểm chữa trị bệnh hàng đầu Việt Nam</div>
        <img
          className={clsx(styles.logoGoverment)}
          src={images.bocongthuong}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Footer;
