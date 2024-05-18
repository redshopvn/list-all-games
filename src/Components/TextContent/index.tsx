import { useEffect } from "react";

const TextContent = ({ count }: { count: number }) => {

    const year = new Date().getFullYear().toString();
    const date = new Date().getDate().toString();
    const month = new Date().getMonth().toString();
    useEffect(() => {
        window.onload = function()
        {
          document.getElementById("lastupdate")!.innerHTML = `(lần cập nhật gần nhất: ${date}/${month}/${year})`
        }
    },[])
    
    return <div className="para">
        <p id="totalgame" className="totalgame">Tổng cộng: {count} Games <span id="lastupdate"></span></p>
        <p> Để tri ân khách hàng cũ và mới, <a target="#" href='https://redshop.vn'><span className="red">RED</span>shop.vn</a>  thân gửi quý khách tài khoản Steam có rất nhiều tựa game đỉnh cao,
            một số game có Việt Hóa. Các tựa game mới sẽ thường xuyên được cập nhật giúp quý khách có trải nghiệm Steam
            Deck tuyệt vời nhất.
        </p>
        <p>Để đăng nhập, quý khách hãy gửi email đến <strong>hotro@redshop.vn</strong> với nội dung là số <strong>Seri
            của máy (bắt đầu bằng FXAA, FVAA hoặc FWAA...)</strong>. Chúng tôi sẽ gửi cho quy khách tài khoản và
            hướng dẫn đăng nhập/sử dụng.
        </p>

        <p>Ngoài ra, <a target="#" href='https://redshop.vn'><span className="red">RED</span>shop.vn</a> cũng cung cấp dịch vụ <span className="lifetime">thuê tài khoản game trọn đời</span>. Chi tiết xin liên hệ <a target="#" href="https://www.facebook.com/REDshopVNSteamDeck">Fanpage REDshop.vn</a>
        </p>
        <p>Nếu có bất kỳ thắc mắc nào, đừng ngân ngại liên hệ với <a target="#" href='https://redshop.vn'><span className="red">RED</span>shop.vn</a> qua email, số điện hoạt hoặc fanpage nhé 😊
            <br />
            <br />
            <span className="info">🏠 Fanpage: </span><a target="#" href="https://www.facebook.com/REDshopVNSteamDeck">https://www.facebook.com/REDshopVNSteamDeck</a>
            <br />
            <span className="info">📞 ĐT/ Zalo: 0364813501</span>
            <br />
            <span className="info">📧 Email: </span><a href="mailto:lienhe@redshop.vn">lienhe@redshop.vn</a>

        </p>
    </div>

        ;
}

export default TextContent
