import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {apiService} from "@/src/services";
import {urls} from "@/src/configs";

export async function middleware(request: NextRequest) {
    const cookies = request.cookies;

    try {
        const {value} = cookies.get("accessToken");
        if (value === undefined) {
            return NextResponse.redirect("http://localhost:5000/login");
        }

        const response = await fetch(`${apiService}${urls.auth.validateAccessToken(value)}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect("http://localhost:5000/login");
        }
    } catch (e) {
        return NextResponse.redirect("http://localhost:5000/login");
    }
}

export const config = {
    matcher: '/',
}