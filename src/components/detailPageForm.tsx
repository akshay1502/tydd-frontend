'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Inquiry } from '@/payload-types'
import { useState } from 'react'

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  mobile: z
    .string()
    .length(10, 'Enter a valid 10-digit mobile number') // Checks for exactly 10 digits
    .refine((value) => !value.startsWith('0'), {
      message: 'Mobile number cannot start with 0',
    }),
  email: z.string().email('Enter a valid email'),
  travellers: z
    .string()
    .refine((val) => /^\d+$/.test(val), {
      message: 'Must be a valid number',
    })
    .refine((val) => Number(val) > 0, {
      message: 'Must be greater than 0',
    }),
})

export type InquiryFormData = Omit<Inquiry, 'id' | 'createdAt' | 'updatedAt'>

export default function DetailPageForm({
  destination,
  discount,
  cost,
  type,
}: {
  destination: string
  discount: number
  cost: number
  type: string
}) {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      travellers: '',
    },
  })

  const onSubmit = async (data: InquiryFormData) => {
    try {
      setIsFormSubmitting(true)
      // Create an entry in contact collection and send email
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          destination,
          type,
        }),
      })
      const result = await res.json()
      console.log(result)
    } catch (error) {
      console.log('ERR ', error)
    } finally {
      form.reset()
      setIsFormSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:space-y-6 space-y-4 bg-skin rounded-xl p-6 shrink-0 self-start w-full"
      >
        <div>
          <h4 className="text-darkBlue mb-2">Personalize Your Adventure</h4>
          <p className="text-black lg:text-lg text-base">Plan a trip that’s uniquely yours.</p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your full name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" {...field} placeholder="Enter your Phone no" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} placeholder="Enter your Email id" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="travellers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. of Travellers</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="Enter total no. of traveller" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <p className="text-sm text-black">Starting from</p>
          <p className="text-sm text-black">
            <span className="text-base font-semibold">
              ₹
              {discount
                ? (cost - cost * (discount / 100))?.toLocaleString('en-IN')
                : cost?.toLocaleString('en-IN')}
            </span>{' '}
            per person
          </p>
        </div>

        <Button type="submit" className="w-full" disabled={isFormSubmitting}>
          Get Expert Assistance
        </Button>
      </form>
    </Form>
  )
}
