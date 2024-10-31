'use client'
import { Loader2Icon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import { emailSignUpAction } from '@/actions'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

const SubmitButton = ({ disabled }: { disabled }) => {
  const { pending } = useFormStatus()

  return (
    <div className="relative">
      <Button
        variant="secondary"
        className={cn(
          '!rounded-l-none !px-[20px] py-[17px] lg:!py-[16px] ml-[-2px] !font-bold !font-helvetica lg:!text-[18px]',
          {
            'cursor-not-allowed': disabled,
          },
        )}
      >
        Get Resources
      </Button>
      {pending && (
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center bg-black/40">
          <Loader2Icon className="text-white w-6 animate-spin" />
        </div>
      )}
    </div>
  )
}

const SourcesForm = () => {
  const [state, formAction] = useFormState(emailSignUpAction, null)
  const ref = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState<string>('')

  const { toast } = useToast()

  const handleOnChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }
  useEffect(() => {
    if (!state || !ref.current) return
    ref.current.value = ''
    if (state.message === 'success') {
      toast({
        title: 'Email sent successfully!',
      })
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Email submission failed.',
      })
    }
    setEmail('')
  }, [state, toast])

  return (
    <form
      className="flex items-center"
      action={formAction}
      onSubmit={(e) => {
        if (!email) e.preventDefault()
      }}
    >
      <Input
        placeholder="Your Email"
        className="!outline-none [box-shadow:none!important] font-helvetica font-bold border-green100 text-green100 !px-[25px] !py-[25px] border-r-0 rounded-r-none placeholder:opacity-60 !bg-grey100 lg:!text-[18px]"
        name="email"
        type="email"
        ref={ref}
        onChange={handleOnChange}
      />
      <SubmitButton disabled={!email} />
    </form>
  )
}

export default SourcesForm
