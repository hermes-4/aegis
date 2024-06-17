import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    await dbConnect();

    const user = await User.findOne({ username, password });

    if (!user) {
        return NextResponse.json(
            { message: "Invalid username or password" },
            { status: 401 }
        );
    }

    return NextResponse.json({ message: "Logged in successfully" });
}
