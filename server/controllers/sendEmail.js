import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST ,
    port:process.env.SMTP_PORT,
    secure:false,
    auth:{
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASSWORD,
    },
});
export const sendEmail = async(req,res) =>{
    const {email} = req.body;
    var mailoptions = {
        from:process.env.SMTP_MAIL,
        to:email,
        subject:"Recovery Link for your Stack Overflow Account",
        message:"Dear User, \nThe Link to change password for the your Stack Overflow Account is attatched below.",
    };
    transporter.sendMail(mailoptions,function(error,info){
        if(error){
            console.log(error)
        }
        else{
            console.log("Email sent Successfully")
        }
    })
}