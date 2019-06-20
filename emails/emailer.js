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
                ${body}
            </table>
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