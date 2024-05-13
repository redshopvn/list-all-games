const TextContent = ({count}: {count: number}) => {

	return <div className="para">
    <p id="totalgame" className="totalgame">{count}</p>
    <p> Để tri ân khách hàng cũ và mới, REDshop.VN thân gửi quý khách tài khoản Steam có rất nhiều tựa game đỉnh cao,
        một số game có Việt Hóa. Các tựa game mới sẽ thường xuyên được cập nhật giúp quý khách có trải nghiệm Steam
        Deck tuyệt vời nhất.
    </p>
    <p>Để đăng nhập, quý khách hãy gửi email đến <strong>hotro@redshop.vn</strong> với nội dung là số <strong>Seri
            của máy (bắt đầu bằng FXAA, FVAA hoặc FWAA...)</strong>. Chúng tôi sẽ gửi cho quy khách tài khoản và
        hướng dẫn đăng nhập/sử dụng.
    </p>
    <p>Nếu có bất kỳ thắc mắc nào, đừng ngân ngại liên hệ với REDshop.VN qua email, số điện hoạt hoặc fanpage nhé :D
        <a href="https://www.facebook.com/REDshopVNSteamDeck">https://www.facebook.com/REDshopVNSteamDeck</a>
    </p>
</div>
        
	;
}

export default TextContent
