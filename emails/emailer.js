const {SMTP_URL} = process.env;

const defaultEmailData = {from: process.env.NOREPLY_EMAIL}

const emailTemplate = (body) => {
    let template = '';

    template = ` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="content-type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="contact" content="info@volungo.com">
            <!--[if !mso]><!-->
            <link href="//fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
            <!--<![endif]-->
            <style type="text/css">
            @media only screen and (max-width: 480px) {
                table#canspamBar td {
                font-size:14px !important;
                }
            }
            @media only screen and (max-width: 480px) {
                table#canspamBar td a {
                display:block !important;
                margin-top:10px !important;
                }
            }
            </style>
        </head>
        <body>
            <table cellpadding="0" cellspacing="0" border="0" width="800" id="backgroundTable" style="margin:0 auto;display:block;">
            <tbody style="margin:0 auto;display:block;">
                <tr>
                <td valign="top">
                    <img src="http://jmcampos.com/volungo/email_01/html/images/volungo_01.png" style="display:block;margin:0;border:none;" alt="volungo_01.png">
                </td>
                </tr>
                <tr>
                <td valign="top" style="font-family:Lato, Helvetica, Arial, sans-serif;line-height:156%;padding:0 80px 40px;">
                   ${body}
                </td>
            </tr>
            <tr>
                <td valign="top">
                <img src="http://jmcampos.com/volungo/email_01/html/images/volungo_03.png" usemap="#image-map" alt="volungo_03.png"><map name="image-map">
                <area target="_blank" alt="Facebook" title="Facebook" href="//www.facebook.com/volungo/" coords="730,49,17" shape="circle">
                <area target="_blank" alt="Instagram" title="Instagram" href="//www.instagram.com/volungo/" coords="690,50,17" shape="circle">
                <area target="_blank" alt="Twitter" title="Twitter" href="//twitter.com/volungo" coords="649,49,17" shape="circle"></map>
                </td>
            </tr>
            </tbody>
        </table>
        <!--
        <table cellpadding="0" cellspacing="0" border="0" width="694" id="backgroundTable" style="width:694px;margin:0 auto;display:block;">
            <tbody style="margin:0 auto;display:block;">
            <td>
                <p style="font-family:helvetica, arial, 'san-serif';font-size:10px;">
                Para deixar de receber a nossa campanha,
                <a href="#" class="unsubscribe">clique aqui</a>.
                </p>
                </td>
                <td>
                <p style="font-family:helvetica, arial, 'san-serif';font-size:10px;">
                    Para encaminhar essa mensagem para seus amigos,
                    <a href="#" class="forward">clique aqui</a>.
                    </p>
                </td>
                <td>
                    <p style="font-family:helvetica, arial, 'san-serif';font-size:10px;">
                    Para que nossa mensagem chegue corretamente em sua caixa de entrada,
                    adicione nosso email na sua lista de contatos
                    <a href="#" class="whitelist">seguindo nossas instruções</a>.
                    </td>
                    </p>
                </tbody>
                </table>
                -->
        <!-- End of wrapper table -->
        <center>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </center>
        </body>
        </html>
    `;
    return template;
}

module.exports = {emailTemplate};