import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // TODO: Integrate Resend or SendGrid for actual email delivery
  console.log('[Contact Form Submission]', { name, email, message });

  return NextResponse.json({ success: true });
}
