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
import { Textarea } from './ui/textarea'
import { Contact } from '@/payload-types'
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
  destination: z
    .string()
    .min(2, 'Destination must be at least 2 characters')
    .max(120, 'Destination must not exceed 120 characters'),
  ideas: z.string().optional(),
})

export type ContactFormData = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>

export default function ContactUsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      destination: '',
      ideas: '',
    },
  })

  const [isFormSubmitting, setIsFormSubmitting] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsFormSubmitting(true)
      // Create an entry in contact collection and send email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
        }),
      })
      const res = await response.json()
      console.log(res)
    } catch (error) {
      console.log('ERR ', error)
    } finally {
      form.reset()
      setIsFormSubmitting(false)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="lg:space-y-6 space-y-4">
        <div>
          <h3 className="text-darkBlue lg:text-4xl text-2xl font-semibold mb-2">
            Do you have any questions?
          </h3>
          <p className="text-darkBlue lg:text-2xl text-lg">Please fill out the form below.</p>
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
              <FormLabel>Mobile No</FormLabel>
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
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your travel destination" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ideas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share Your Ideas</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Tell Us How We Can Help" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isFormSubmitting}>
          Contact Us
        </Button>
      </form>
    </Form>
  )
}
