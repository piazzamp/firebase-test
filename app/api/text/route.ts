import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  console.log('in POST /api/text')
  const body = await req.json()
  return NextResponse.json({msg: body['text']})
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const text = req.nextUrl.searchParams.get('text')
  return NextResponse.json({msg: text})
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  console.log('in PUT /api/text')
  const body = await req.json()
  return NextResponse.json({msg: body['text']})
}

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  console.log('in PATCH /api/text')
  const body = await req.json()
  return NextResponse.json({msg: body['text']})
}