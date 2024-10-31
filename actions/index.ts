'use server'

import { revalidatePath } from 'next/cache'

export const emailSignUpAction = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 2000)
  })
  const email = formData.get('email') as string
  revalidatePath('/')
  return { message: 'success' }
}
