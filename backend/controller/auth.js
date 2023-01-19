const {query} = require('../database/config')
const bcrypt = require('bcryptjs');
const {date} = require('../utils');
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports ={
    registerController: async (req, res) => {
        const {fname, lname, email, phoneNumber, password, confPassword} = req.body;

        if(fname === null || fname === ""){
            return res.status(400).json({message : "Invalid first name"});
        }

        if(email === null || email === ""){
            return res.status(400).json({message : "Invalid email"});
        }

        if(password === null || confPassword === null) return res.status(400).json({message: "Password field required!"});

        if(password !== confPassword) return res.status(400).json({message: "Password not match!"});

        try {
            const checkUser = await query(`SELECT id FROM users WHERE email = '${email}' OR phone_number = ${phoneNumber}`);
            if(checkUser.length !== 0) return res.status(400).json({message : "Users already exists!"});

            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(password, salt);

            await query(`
                INSERT INTO users (
                    fname, lname, email, phone_number, password, created_by, created_at, updated_by, updated_at
                ) VALUES (
                    '${fname}','${lname}','${email}', ${phoneNumber}, '${hash}', 0, '${date()}', 0, '${date()}'
                );
            `);

            return res.status(200).json({message: "Berhasil registrasi!"})
        } catch (error) {
            return res.status(400).json({message: "Something went wrong!"})
        }
    },

    loginController:async (req,res) => {
        const {email,password} = req.body;

        if(email === null || email === ""){
            return res.status(400).json({message : "Invalid email"});
        }

        if(password === null || password === ""){
            return res.status(400).json({message : "Password field required!"});
        }
        
        try {
            const [checkUser] = await query(`SELECT id, fname, lname, password, phone_number  FROM users WHERE email = '${email}'`)
            if(checkUser === undefined) return res.status(400).json({message : "Invalid Email"});
            const match = await bcrypt.compare(password, checkUser.password);
            if(!match) {
                return res.status(400).json({message: "Wrong Password"});
            }
            const data = {
                id: checkUser.id,
                fname: checkUser.fname,
                lname:checkUser.lname
            };



            console.log(data);

            const token = await jwt.sign(data, process.env.WEBTOKEN, { expiresIn: '1h' });
            return res.status(200).json({Authorization: `bearer ${token}`});


            
        } catch (error) {
            return res.status(400).json({message: "Akun tidak ditemukan!"});
        }
    }
}