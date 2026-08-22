import type { LanguageCode } from '../../App'

const TextContent = ({ count, lang }: { count: number; lang: LanguageCode }) => {
    const year = new Date().getFullYear().toString();
    const date = new Date().getDate().toString();
    const month = new Date().getMonth().toString();

    const translations: Record<LanguageCode, {
        total: string
        updated: string
        paragraph1: string
        paragraph2: string
        paragraph3: string
        paragraph4: string
        fanpage: string
        phone: string
        email: string
    }> = {
        vi: {
            total: `Tổng cộng: ${count} Games`,
            updated: `(lần cập nhật gần nhất: ${date}/${+month + 1}/${year})`,
            paragraph1: 'Để tri ân khách hàng cũ và mới, REDshop.vn thân gửi quý khách tài khoản Steam có rất nhiều tựa game đỉnh cao, một số game có Việt Hóa. Các tựa game mới sẽ thường xuyên được cập nhật giúp quý khách có trải nghiệm Steam Deck tuyệt vời nhất.',
            paragraph2: 'Để đăng nhập, quý khách hãy gửi email đến hotro@redshop.vn với nội dung là số Seri của máy (bắt đầu bằng FXAA, FVAA hoặc FWAA...). Chúng tôi sẽ gửi cho quý khách tài khoản và hướng dẫn đăng nhập/sử dụng.',
            paragraph3: 'Ngoài ra, REDshop.vn cũng cung cấp dịch vụ thuê tài khoản game trọn đời. Chi tiết xin liên hệ Fanpage REDshop.vn.',
            paragraph4: 'Nếu có bất kỳ thắc mắc nào, đừng ngại liên hệ với REDshop.vn qua email, số điện thoại hoặc fanpage nhé.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 ĐT/ Zalo: 0364813501',
            email: '📧 Email:'
        },
        en: {
            total: `Total: ${count} Games`,
            updated: `(last updated: ${date}/${+month + 1}/${year})`,
            paragraph1: 'To thank our new and existing customers, REDshop.vn offers a wide range of premium Steam accounts, including many localized titles. New games are regularly updated so you can enjoy the best Steam Deck experience possible.',
            paragraph2: 'To log in, please email hotro@redshop.vn with your device serial number (starting with FXAA, FVAA, or FWAA...). We will send you your account details and login instructions.',
            paragraph3: 'In addition, REDshop.vn also provides lifetime game account rental service. For details, contact the REDshop.vn Fanpage.',
            paragraph4: 'If you have any questions, feel free to contact REDshop.vn by email, phone, or Facebook.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 Phone / Zalo: 0364813501',
            email: '📧 Email:'
        },
        fr: {
            total: `Total : ${count} jeux`,
            updated: `(dernière mise à jour : ${date}/${+month + 1}/${year})`,
            paragraph1: 'Pour remercier nos clients actuels et futurs, REDshop.vn vous propose de nombreux comptes Steam premium, dont plusieurs jeux localisés. De nouveaux titres sont ajoutés régulièrement pour une meilleure expérience Steam Deck.',
            paragraph2: 'Pour vous connecter, veuillez envoyer un e-mail à hotro@redshop.vn avec le numéro de série de votre appareil (commençant par FXAA, FVAA ou FWAA...). Nous vous enverrons votre compte et les instructions.',
            paragraph3: 'De plus, REDshop.vn propose aussi la location de comptes de jeu à vie. Pour plus de détails, contactez la page Facebook REDshop.vn.',
            paragraph4: 'Si vous avez des questions, contactez REDshop.vn par e-mail, téléphone ou Facebook.',
            fanpage: '🏠 Fanpage :',
            phone: '📞 Téléphone / Zalo : 0364813501',
            email: '📧 Email :'
        },
        de: {
            total: `Gesamt: ${count} Spiele`,
            updated: `(letzte Aktualisierung: ${date}/${+month + 1}/${year})`,
            paragraph1: 'Damit wir unsere neuen und bestehenden Kunden würdigen, bietet REDshop.vn eine Vielzahl hochwertiger Steam-Konten mit vielen lokalisierten Titeln an. Neue Spiele werden regelmäßig ergänzt, damit du das beste Steam-Deck-Erlebnis hast.',
            paragraph2: 'Zum Anmelden sende bitte eine E-Mail an hotro@redshop.vn mit deiner Geräte-Seriennummer (beginnend mit FXAA, FVAA oder FWAA...). Wir senden dir dein Konto und die Anweisungen.',
            paragraph3: 'Zusätzlich bietet REDshop.vn auch Lifetime-Spielkonten zum Mieten an. Weitere Details findest du auf der REDshop.vn-Fanpage.',
            paragraph4: 'Wenn du Fragen hast, kontaktiere REDshop.vn per E-Mail, Telefon oder Facebook.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 Telefon / Zalo: 0364813501',
            email: '📧 E-Mail:'
        },
        ua: {
            total: `Разом: ${count} ігор`,
            updated: `(остання оновлення: ${date}/${+month + 1}/${year})`,
            paragraph1: 'Щоб подякувати новим і постійним клієнтам, REDshop.vn пропонує широкий вибір преміум-акаунтів Steam із багатьма локалізованими іграми. Нові ігри регулярно оновлюються, щоб ви могли насолоджуватися найкращим досвідом Steam Deck.',
            paragraph2: 'Щоб увійти, надішліть електронний лист на hotro@redshop.vn із серійним номером пристрою (починається з FXAA, FVAA або FWAA...). Ми надішлемо вам обліковий запис і інструкції.',
            paragraph3: 'Крім того, REDshop.vn також надає послугу оренди ігрових акаунтів на все життя. Деталі уточнюйте на Fanpage REDshop.vn.',
            paragraph4: 'Якщо у вас є питання, зв’яжіться з REDshop.vn електронною поштою, телефоном або Facebook.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 Телефон / Zalo: 0364813501',
            email: '📧 Email:'
        },
        ru: {
            total: `Всего: ${count} игр`,
            updated: `(последнее обновление: ${date}/${+month + 1}/${year})`,
            paragraph1: 'Чтобы поблагодарить новых и постоянных клиентов, REDshop.vn предлагает широкий выбор премиум-аккаунтов Steam с множеством локализованных игр. Новые игры регулярно обновляются, чтобы вы могли получить лучший опыт Steam Deck.',
            paragraph2: 'Чтобы войти в систему, отправьте письмо на hotro@redshop.vn с серийным номером вашего устройства (начинается с FXAA, FVAA или FWAA...). Мы пришлём вам аккаунт и инструкции.',
            paragraph3: 'Кроме того, REDshop.vn также предоставляет услугу аренды игровых аккаунтов на всю жизнь. Подробности уточняйте на Fanpage REDshop.vn.',
            paragraph4: 'Если у вас есть вопросы, свяжитесь с REDshop.vn по электронной почте, телефону или Facebook.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 Телефон / Zalo: 0364813501',
            email: '📧 Email:'
        },
        es: {
            total: `Total: ${count} juegos`,
            updated: `(última actualización: ${date}/${+month + 1}/${year})`,
            paragraph1: 'Para agradecer a nuestros clientes nuevos y actuales, REDshop.vn ofrece una amplia variedad de cuentas premium de Steam con muchos juegos localizados. Se actualizan nuevos títulos regularmente para ofrecer la mejor experiencia en Steam Deck.',
            paragraph2: 'Para iniciar sesión, envía un correo a hotro@redshop.vn con el número de serie de tu dispositivo (que empiece por FXAA, FVAA o FWAA...). Te enviaremos la cuenta y las instrucciones.',
            paragraph3: 'Además, REDshop.vn también ofrece alquiler de cuentas de juegos de por vida. Consulta más detalles en la Fanpage de REDshop.vn.',
            paragraph4: 'Si tienes dudas, contacta con REDshop.vn por correo, teléfono o Facebook.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 Teléfono / Zalo: 0364813501',
            email: '📧 Email:'
        },
        it: {
            total: `Totale: ${count} giochi`,
            updated: `(ultimo aggiornamento: ${date}/${+month + 1}/${year})`,
            paragraph1: 'Per ringraziare i nostri clienti nuovi e esistenti, REDshop.vn offre numerosi account Steam premium con molti titoli localizzati. Nuovi giochi vengono aggiornati regolarmente per offrirti la migliore esperienza su Steam Deck.',
            paragraph2: 'Per accedere, invia un email a hotro@redshop.vn con il numero di serie del tuo dispositivo (che inizia con FXAA, FVAA o FWAA...). Ti invieremo l’account e le istruzioni.',
            paragraph3: 'Inoltre, REDshop.vn offre anche il servizio di noleggio account di giochi a vita. Per dettagli, contatta la Fanpage REDshop.vn.',
            paragraph4: 'Se hai domande, contatta REDshop.vn via email, telefono o Facebook.',
            fanpage: '🏠 Fanpage:',
            phone: '📞 Telefono / Zalo: 0364813501',
            email: '📧 Email:'
        },
        zh: {
            total: `总计：${count} 款游戏`,
            updated: `(最近更新：${date}/${+month + 1}/${year})`,
            paragraph1: '为了感谢新老客户，REDshop.vn 提供大量高品质 Steam 账号，并包含许多本地化游戏。我们会持续更新新游戏，让您获得最佳 Steam Deck 体验。',
            paragraph2: '登录前，请将设备序列号（以 FXAA、FVAA 或 FWAA 开头）发送至 hotro@redshop.vn。我们会发送账号和使用说明。',
            paragraph3: '此外，REDshop.vn 也提供终身游戏账号租赁服务。详情请联系 REDshop.vn 官方粉丝页。',
            paragraph4: '如有任何问题，欢迎通过电子邮件、电话或 Facebook 联系 REDshop.vn。',
            fanpage: '🏠 粉丝页：',
            phone: '📞 电话 / Zalo：0364813501',
            email: '📧 Email：'
        },
        ko: {
            total: `총 ${count}개 게임`,
            updated: `(최근 업데이트: ${date}/${+month + 1}/${year})`,
            paragraph1: '기존 및 신규 고객께 감사드리며, REDshop.vn은 다양한 고급 Steam 계정과 다수의 현지화 게임을 제공합니다. 새로운 게임은 정기적으로 업데이트되어 최고의 Steam Deck 경험을 제공합니다.',
            paragraph2: '로그인하려면 장치 시리얼 번호(FXAA, FVAA, FWAA로 시작)를 hotro@redshop.vn으로 보내 주세요. 계정 정보와 사용 방법을 보내드립니다.',
            paragraph3: '또한 REDshop.vn은 평생 게임 계정 대여 서비스도 제공합니다. 자세한 내용은 REDshop.vn 팬페이지를 참고하세요.',
            paragraph4: '문의가 있으시면 이메일, 전화 또는 Facebook으로 REDshop.vn에 연락해 주세요.',
            fanpage: '🏠 팬페이지:',
            phone: '📞 전화 / Zalo: 0364813501',
            email: '📧 이메일:'
        },
        ja: {
            total: `合計: ${count}ゲーム`,
            updated: `(最終更新: ${date}/${+month + 1}/${year})`,
            paragraph1: '新規・既存のお客様への感謝として、REDshop.vn では多くの高品質な Steam アカウントとローカライズ済みタイトルを提供しています。新作ゲームも定期的に更新され、最高の Steam Deck 体験をお楽しみいただけます。',
            paragraph2: 'ログインするには、デバイスのシリアル番号（FXAA、FVAA、FWAA で始まるもの）を hotro@redshop.vn にご連絡ください。アカウントと利用方法をお送りします。',
            paragraph3: 'また、REDshop.vn では終身ゲームアカウントのレンタルサービスも提供しています。詳細は REDshop.vn フェイスブックページをご確認ください。',
            paragraph4: 'ご質問があれば、メール、電話、Facebook から REDshop.vn までご連絡ください。',
            fanpage: '🏠 ファンページ:',
            phone: '📞 電話 / Zalo: 0364813501',
            email: '📧 Email:'
        }
    }

    const text = translations[lang] ?? translations.vi

    const redshopUrl = 'https://redshop.vn/'

    return <div className="para">
        <p id="totalgame" className="totalgame">{text.total} <span id="lastupdate">{text.updated}</span></p>
        <p>
            {text.paragraph1.split('REDshop.vn').map((part, index, arr) => (
                <span key={index}>
                    {part}
                    {index < arr.length - 1 ? (
                        <a href={redshopUrl} target="_blank" rel="noreferrer" className="redshop_brand_link">
                            <span className="redshop_red">RED</span>shop.vn
                        </a>
                    ) : null}
                </span>
            ))}
        </p>
        <p>
            {text.paragraph2.split('REDshop.vn').map((part, index, arr) => (
                <span key={index}>
                    {part}
                    {index < arr.length - 1 ? (
                        <a href={redshopUrl} target="_blank" rel="noreferrer" className="redshop_brand_link">
                            <span className="redshop_red">RED</span>shop.vn
                        </a>
                    ) : null}
                </span>
            ))}
        </p>
        <p>
            {text.paragraph3.split('REDshop.vn').map((part, index, arr) => (
                <span key={index}>
                    {part}
                    {index < arr.length - 1 ? (
                        <a href={redshopUrl} target="_blank" rel="noreferrer" className="redshop_brand_link">
                            <span className="redshop_red">RED</span>shop.vn
                        </a>
                    ) : null}
                </span>
            ))}
        </p>
        <p>
            <span className="info">{text.fanpage} </span><a target="_blank" rel="noreferrer" href="https://www.facebook.com/REDshopVNSteamDeck">fb.com/REDshopVNSteamDeck</a>
            <br />
            <span className="info">{text.phone}</span>
            <br />
            <span className="info">{text.email} </span><a href="mailto:lienhe@redshop.vn">lienhe@redshop.vn</a>
        </p>
    </div>
}

export default TextContent
