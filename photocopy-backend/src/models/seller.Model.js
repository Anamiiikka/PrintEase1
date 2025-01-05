import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SellerSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        businessname: {
            type: String,
            required: true,
        },
        location: {
            type: String,   
            required: true,
        },
        
        password: {
            type: String,
            required: true,
        },
        
        phone: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

SellerSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
});

SellerSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// JWT Access Token
SellerSchema.methods.generateAccessToken = function () {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error("ACCESS_TOKEN_SECRET is not defined");
    }
    return jwt.sign(
        {
            _id: this._id,
            fullname: this.fullname,
            email: this.email,
            businessname: this.businessname,
            location: this.location,
            phone: this.phone,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// JWT Refresh Token
SellerSchema.methods.generateRefreshToken = function () {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error("REFRESH_TOKEN_SECRET is not defined");
    }
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export const Seller =mongoose.models.Seller || mongoose.model("Seller", SellerSchema);
