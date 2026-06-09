import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_PORTAL_ID = '48796367'
const HUBSPOT_FORM_ID = '9e292710-121c-493d-a896-3eab828a91fd'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || '';

    const { fields, context } = body;

    const payload = {
      fields: [
        ...fields,
        { name: 'visitor_ip', value: ip },
      ],
      context: {
        ...(context?.hutk ? { hutk: context.hutk } : {}),
        pageUri: context?.pageUri || '',
        pageName: context?.pageName || '',
        ipAddress: ip,
      },
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: data.message }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
