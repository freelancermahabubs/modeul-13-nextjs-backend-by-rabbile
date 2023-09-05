import {NextResponse} from "next/server";
import {NextRequest} from "next/server";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

// GET
export async function GET(req, res) {
  //   const {searchParams} = new URL(req.url);
  //   let name = searchParams.get("name");
  //   let city = searchParams.get("city");
  //   return NextResponse.json({msg: name, city});

  // const headerList = headers();
  // const apiKey = headerList.get("x-api-key");
  // return NextResponse.json({msg: apiKey});
  // let token = req.cookies.get("token");
  // return NextResponse.json({msg: token});
  // return NextResponse.json(
  //   [
  //     {
  //       name: "mahabu",
  //       age: 21,
  //       email: "info.freelancermahabub@gmail.com",
  //     },
  //     {
  //       name: "mahabu",
  //       age: 21,
  //       email: "info.freelancermahabub@gmail.com",
  //     },
  //     {
  //       name: "mahabu",
  //       age: 21,
  //       email: "info.freelancermahabub@gmail.com",
  //     },
  //   ],
  //   {
  //     status: 201,
  //     headers: {
  //       token: "XYZ-123",
  //       token2: "XAFE-41",
  //       "Set-Cookie": "Auth=123; Path=/;",
  //     },
  //   }
  // );
  // redirect("/");

  // let headerList = headers();
  // let user_id = headerList.get("user_id");
  return NextResponse.json({msg: "GET"});
}

// POST
export async function POST(req, res) {
  // const reqBody = await req.json();
  // return NextResponse.json({msg: reqBody});
}
//  PUT
export async function PUT(req, res) {
  // let formData = await req.formData();
  // let mobile = formData.get("mobile");
  // let postCode = formData.get("postCode");
  // let city = formData.get("city");
  // return NextResponse.json({mobile: mobile, postCode: postCode, city: city});
}
// PATCH
export async function PATCH(req, res) {
  //   let formData = await req.formData();
  //   let mobile = formData.get("mobile");
  //   let postCode = formData.get("postCode");
  //   let city = formData.get("city");
  //   return NextResponse.json({mobile: mobile, postCode: postCode, city: city});
  // const headerList = headers();
  // const apiKey = headerList.get("x-api-key");
  // return NextResponse.json({msg: apiKey});
}
// DELETE
export async function DELETE(req, res) {
  return NextResponse.json({msg: "I am Delete"});
}
