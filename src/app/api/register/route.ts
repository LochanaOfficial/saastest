import bcrypt from "bcrypt";
import { db } from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        password,
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    let user;
    if (email === "locahanarathnayake30@gmail.com" && password === "lo12") {
        user = await db.user.create({
            data: {
                email,
                name,
                password:hashedPassword,
            }
        });
    }
    user = await db.user.create({
        data: {
            email,
            name,
            password:hashedPassword,
        }
    });

    return NextResponse.json(user);
}