'use server'

import { revalidatePath } from 'next/cache'

export const emailSignUpAction = async (prevState: any, formData: FormData) => {
  const email = formData.get('email') as string

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const REGION = process.env.MAILCHIMP_REGION_ID
    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(
      `https://${REGION}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )

    const res = await response.json()

    console.log(123123, res)
    if (res.status >= 400) {
      throw new Error(
        res?.title === 'Member Exists'
          ? `${email} is already a list member`
          : res?.detail || 'Email submission failed.',
      )
    }
  } catch (err) {
    console.error(err)
    return { message: 'error', detail: err.message || err }
  }

  revalidatePath('/')
  return { message: 'success', detail: 'Email has been subscribed successfully!' }
}
