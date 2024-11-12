'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqData: FAQItem[] = [
  {
    question: 'What is the AI recipe creator?',
    answer: 'The AI recipe creator is an intelligent tool that uses advanced algorithms to generate custom recipes tailored to your preferences and dietary needs. It takes the guesswork out of cooking and helps you discover new, delicious meals.'
  },
  {
    question: 'How does the AI recipe creator work?',
    answer: 'The AI recipe creator uses a combination of machine learning algorithms and a vast database of recipes to generate personalized meal recommendations. By understanding your dietary preferences, allergies, and cooking habits, it can suggest recipes that are tailored to your needs and taste preferences.'
  },
  {
    question: 'What are the key features of the AI recipe creator?',
    answer: (
      <div>
        The key features of the AI recipe creator include:
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Personalized recipe recommendations based on your preferences</li>
          <li>Automated meal planning and grocery list generation</li>
          <li>Cooking analytics to track your progress and habits</li>
          <li>Dietary restrictions and allergy-friendly recipes</li>
          <li>Seamless integration with your smart home devices</li>
        </ul>
      </div>
    )
  },
  {
    question: 'How much does the AI recipe creator cost?',
    answer: (
      <div>
        The AI recipe creator is available in three pricing tiers:
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Basic: $9/month</li>
          <li>Pro: $19/month</li>
          <li>Enterprise: Contact us for custom pricing</li>
        </ul>
        Each tier offers different features and levels of functionality to meet your needs. You can sign up for a free trial to experience the full capabilities of the AI recipe creator.
      </div>
    )
  },
  {
    question: 'How can I get started with the AI recipe creator?',
    answer: 'To get started with the AI recipe creator, simply visit our website and sign up for an account. You can then complete a brief questionnaire to personalize your preferences, dietary restrictions, and cooking habits. Once set up, the AI recipe creator will start generating custom meal recommendations tailored to your needs. You can also explore the app\'s features, such as meal planning, grocery list generation, and cooking analytics, to enhance your cooking experience.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl leading-relaxed dark:text-gray-400 text-gray-700 tracking-wide">
            Find answers to common questions about our AI recipe creator.
          </p>
        </div>
        <Card className="lg:col-span-2 bg-gradient-to-br from-gray-500 to-gray-200 shadow-lg">
          <CardContent className="p-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg transition-colors duration-200 ease-in-out"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="pb-4 text-lg text-white dark:text-black">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}