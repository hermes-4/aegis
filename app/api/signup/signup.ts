import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    await dbConnect();

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return NextResponse.json(
            { message: "Username already exists" },
            { status: 400 }
        );
    }

    const newUser = new User({
        username,
        password,
    });

    await newUser.save();

    return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
    );
}
