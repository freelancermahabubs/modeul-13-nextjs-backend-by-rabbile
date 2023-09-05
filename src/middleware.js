import {NextResponse} from "next/server";
import {NextRequest} from "next/server";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
// export function middleware() {
//   console.log("I am middleware");
// }

// export const config = {
//   matcher: ["/api/:path*", "/cartlist"],
// };

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/product")) {
    // const reqHeader = new Headers(req.headers);
    // const token = reqHeader.get("token");
    // if (token === "123-AX") {
    //   console.log("this is API Route Inside Product Dir");
    //   return NextResponse.next();
    // }
    // else{
    //   return NextResponse.json({meesage: 'Request fail'}, {status: 401})
    // }
    // reqHeader.set("user_id", "0011");
    // return NextResponse.next({
    //   request: {headers: reqHeader},
    // });

    const res = NextResponse.next();
    res.headers.set("API_KEY", "ADDE-452");
    res.headers.set("API_KEY2", "ADDE-45255");
    return res;
  }
}
