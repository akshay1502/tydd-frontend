import { payload } from '@/payload'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // The created Post document is returned
    await payload.create({
      collection: 'inquiry', // required
      data: {
        ...data,
      },
    })

    await payload.sendEmail({
      to: data?.email,
      subject: `New Inquiry for ${data?.destination}`,
      text: `
      Hello,
      
      You have received a new inquiry with the following details:
      
      - Name: ${data?.name ?? 'NA'}
      - Mobile: ${data?.mobile ?? 'NA'}
      - Email: ${data?.email ?? 'NA'}
      - No. of travellers: ${data?.travellers ?? 'NA'}
      - Destination: ${data?.destination?.replaceAll('-', ' ') ?? 'NA'}
      - Type: ${data?.type?.replaceAll('-', ' ') ?? 'NA'}
      
      Please review and follow up as needed.
      `,
    })

    return Response.json({ message: 'Email sent successfully' })
  } catch (error) {
    return Response.json({ error: 'Failed to send email' })
  }
}
